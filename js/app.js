/**
 * ================================================================
 * APP.JS - MESIN BUKU CERITA INTERAKTIF TERLENGKAP
 * (AUDIO ENGINE, KARAOKE SYNC, THEMED HIGHLIGHT, BILINGUAL, PWA)
 * ================================================================
 */

// 1. STATE MANAGER
let currentStory = null;
let currentPage = 0;
let isFlipping = false;
let inQuizMode = false;
let currentQuizIndex = 0;
let quizScore = 0;
let correctCount = 0;
const preloadedImages = {};
const preloadedAudios = {};

// Status preferensi pengguna & fitur baru
let isAutoPlay = localStorage.getItem('storybook_autoplay') !== 'false';
let isHapticEnabled = localStorage.getItem('storybook_haptic') !== 'false';
let currentStoryLang = 'id'; // Bahasa aktif buku: 'en' atau 'id'
let ttsSpeed = 0.85; // Kecepatan TTS: 0.85 (Normal 🐇) atau 0.55 (Lambat 🐢)

// Penampung pelacak linimasa kata untuk karaoke
let currentWordElements = [];
let wordTimingThresholds = [];

// 2. REFERENSI ELEMEN DOM
const homeView = document.getElementById('homeView');
const readerView = document.getElementById('readerView');
const storiesGrid = document.getElementById('storiesGrid');
const btnBackHome = document.getElementById('btnBackHome');

const bookStage = document.getElementById('bookStage');
const pageSheet = document.getElementById('pageSheet');
const storyImage = document.getElementById('storyImage');
const textFlow = document.getElementById('textFlow');
const progressFill = document.getElementById('progressFill');
const pageIndicator = document.getElementById('pageIndicator');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const btnPageAudio = document.getElementById('btnPageAudio');
const audioElement = document.getElementById('audioElement');
const navControls = document.getElementById('navControls');

// Referensi Tombol Fitur Dwibahasa & Kecepatan Suara
const btnLangToggle = document.getElementById('btnLangToggle');
const btnSpeedToggle = document.getElementById('btnSpeedToggle');

const quizView = document.getElementById('quizView');
const quizQuestionBox = document.getElementById('quizQuestionBox');
const quizStep = document.getElementById('quizStep');
const quizQuestionText = document.getElementById('quizQuestionText');
const quizOptions = document.getElementById('quizOptions');
const quizResult = document.getElementById('quizResult');
const starsBox = document.getElementById('starsBox');
const resultScore = document.getElementById('resultScore');
const resultMsg = document.getElementById('resultMsg');
const btnRestartStory = document.getElementById('btnRestartStory');
const btnFinishToHome = document.getElementById('btnFinishToHome');

const btnThemeToggleHome = document.getElementById('btnThemeToggleHome');
const btnThemeToggleReader = document.getElementById('btnThemeToggleReader');
const btnResetHistory = document.getElementById('btnResetHistory');
const btnFullScreenHome = document.getElementById('btnFullScreenHome');
const btnFullScreenReader = document.getElementById('btnFullScreenReader');
const btnAutoPlayToggle = document.getElementById('btnAutoPlayToggle');
const btnHapticToggleHome = document.getElementById('btnHapticToggleHome');
const btnHapticToggleReader = document.getElementById('btnHapticToggleReader');
const confettiCanvas = document.getElementById('confettiCanvas');

// Elemen PWA Banner Tunggal
const networkStatus = document.getElementById('networkStatus');
const pwaInstallBanner = document.getElementById('pwaInstallBanner');
const btnInstallPwa = document.getElementById('btnInstallPwa');
const btnCloseInstallBanner = document.getElementById('btnCloseInstallBanner');

// 3. MODUL HAPTIC FEEDBACK (GETARAN VIBRATION API)
function triggerHaptic(type) {
  if (!isHapticEnabled || !('vibrate' in navigator)) return;
  switch (type) {
    case 'tap': navigator.vibrate(15); break;
    case 'correct': navigator.vibrate([35, 40, 45]); break;
    case 'wrong': navigator.vibrate([70, 50, 90]); break;
    case 'celebrate': navigator.vibrate([40, 40, 40, 40, 80, 50, 120]); break;
    default: navigator.vibrate(20);
  }
}

function updateHapticUI() {
  const icon = isHapticEnabled ? '📳' : '📴';
  const title = isHapticEnabled ? 'Efek Getar: AKTIF (Klik untuk mematikan)' : 'Efek Getar: NONAKTIF (Klik untuk mengaktifkan)';
  [btnHapticToggleHome, btnHapticToggleReader].forEach(btn => {
    if (!btn) return;
    btn.textContent = icon;
    btn.title = title;
    btn.classList.toggle('haptic-off', !isHapticEnabled);
  });
}

function toggleHaptic() {
  isHapticEnabled = !isHapticEnabled;
  localStorage.setItem('storybook_haptic', isHapticEnabled);
  if (isHapticEnabled) triggerHaptic('tap');
  updateHapticUI();
}

if (btnHapticToggleHome) btnHapticToggleHome.onclick = toggleHaptic;
if (btnHapticToggleReader) btnHapticToggleReader.onclick = toggleHaptic;

// 4. KUNCI ORIENTASI CERDAS
async function lockScreenOrientation() {
  try {
    if (screen.orientation && screen.orientation.lock) {
      const isTablet = Math.min(window.screen.width, window.screen.height) >= 600 || window.innerWidth >= 768;
      if (isTablet) {
        await screen.orientation.lock('landscape');
      } else {
        await screen.orientation.lock('portrait-primary');
      }
    }
  } catch (err) {
    console.warn("Kunci orientasi belum didukung oleh browser ini.");
  }
}

// 5. MESIN AUDIO SINTETIS (WEB AUDIO API)
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

window.addEventListener('click', () => getAudioContext(), { once: true });
window.addEventListener('touchstart', () => getAudioContext(), { once: true });

function playPageTurnSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const bufferSize = ctx.sampleRate * 0.12;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass'; filter.frequency.value = 1400; filter.Q.value = 1.2;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.4, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
  noise.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
  noise.start();
}

function playCorrectSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99];
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + idx * 0.08);
    gain.gain.setValueAtTime(0.28, now + idx * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now + idx * 0.08); osc.stop(now + idx * 0.08 + 0.36);
  });
}

function playWrongSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(170, now);
  osc.frequency.linearRampToValueAtTime(95, now + 0.28);
  gain.gain.setValueAtTime(0.25, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(now); osc.stop(now + 0.3);
}

function playFanfareSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const notes = [523.25, 659.25, 783.99, 1046.50];
  const now = ctx.currentTime;
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + idx * 0.12);
    gain.gain.setValueAtTime(0.3, now + idx * 0.12);
    const duration = (idx === notes.length - 1) ? 0.6 : 0.25;
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + duration);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now + idx * 0.12); osc.stop(now + idx * 0.12 + duration + 0.05);
  });
}

// 6. ANIMASI TABURAN KONFETI
function launchConfetti() {
  if (!confettiCanvas) return;
  const ctx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  confettiCanvas.style.display = 'block';

  const particles = [];
  const colors = ['#58cc02', '#1cb0f6', '#ff4b4b', '#ffc800', '#ce82ff', '#00e5ff'];

  for (let i = 0; i < 140; i++) {
    particles.push({
      x: confettiCanvas.width * 0.5 + (Math.random() - 0.5) * 80,
      y: confettiCanvas.height * 0.35,
      w: Math.random() * 9 + 5, h: Math.random() * 9 + 5,
      vx: (Math.random() - 0.5) * 16, vy: (Math.random() - 1) * 14 - 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: Math.random() * 360, spin: (Math.random() - 0.5) * 0.2, opacity: 1
    });
  }

  const startTime = Date.now();
  let animationId;

  function renderConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let isAnyActive = false;
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.38; p.vx *= 0.98; p.angle += p.spin;
      if (Date.now() - startTime > 2400) p.opacity -= 0.018;
      if (p.opacity > 0 && p.y < confettiCanvas.height + 40) {
        isAnyActive = true;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });

    if (isAnyActive) {
      animationId = requestAnimationFrame(renderConfetti);
    } else {
      cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      confettiCanvas.style.display = 'none';
    }
  }
  renderConfetti();
}

// 7. PRELOADING RAM (GAMBAR & AUDIO)
function preloadStoryImages(story) {
  if (!story || !story.pages) return;
  story.pages.forEach(p => {
    if (p.image && !preloadedImages[p.image]) {
      const img = new Image(); img.src = p.image; preloadedImages[p.image] = img;
    }
  });
}

function preloadStoryAudios(story) {
  if (!story || !story.pages) return;
  story.pages.forEach(p => {
    [p.audio, p.audio_id].forEach(audioSrc => {
      if (audioSrc && !preloadedAudios[audioSrc]) {
        const audioObj = new Audio(); audioObj.preload = 'auto'; audioObj.src = audioSrc; preloadedAudios[audioSrc] = audioObj;
      }
    });
  });
}

// 8. RENDER RAK BUKU DI BERANDA
function renderHomeShelf() {
  if (!storiesGrid) return;
  const listCerita = window.STORIES_DATABASE || [];

  if (listCerita.length === 0) {
    storiesGrid.innerHTML = `<div style="text-align: center; padding: 40px 15px; color: var(--text-sub);"><p style="font-size: 1.15rem; font-weight: 800; margin-bottom: 8px;">Memuat Koleksi Buku... 📚</p></div>`;
    return;
  }

  const quizHistory = JSON.parse(localStorage.getItem('storybook_quiz_history') || '{}');
  storiesGrid.innerHTML = '';

  listCerita.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card-item';
    const record = quizHistory[story.id];
    let recordBadge = record ? `<div class="story-history-badge"><span>${record.stars}</span><span>${record.score} Poin</span></div>` : '';

    card.innerHTML = `
      <img class="story-cover-thumb" src="${story.cover || (story.pages[0] ? story.pages[0].image : '')}" alt="${story.title}" onerror="this.src='https://placehold.co/100x130/58cc02/ffffff?text=Buku';">
      <div class="story-info">
        <div class="story-meta-row"><span class="story-badge">${story.category || 'Cerita Bergambar'}</span>${recordBadge}</div>
        <div class="story-title">${story.title}</div>
        <div class="story-desc">${story.description || ''}</div>
      </div>
    `;
    card.onclick = () => openStory(story);
    storiesGrid.appendChild(card);
  });
}

let checkCount = 0;
const storyPoller = setInterval(() => {
  checkCount++;
  if ((window.STORIES_DATABASE && window.STORIES_DATABASE.length > 0) || checkCount > 25) {
    clearInterval(storyPoller);
    renderHomeShelf();
  }
}, 150);

// 9. SAKELAR NARASI OTOMATIS
function updateAutoPlayUI() {
  if (!btnAutoPlayToggle) return;
  if (isAutoPlay) {
    btnAutoPlayToggle.textContent = '📢'; btnAutoPlayToggle.title = 'Narasi Otomatis: AKTIF'; btnAutoPlayToggle.classList.remove('autoplay-off');
  } else {
    btnAutoPlayToggle.textContent = '🔇'; btnAutoPlayToggle.title = 'Narasi Otomatis: NONAKTIF'; btnAutoPlayToggle.classList.add('autoplay-off');
  }
}

if (btnAutoPlayToggle) {
  btnAutoPlayToggle.onclick = () => {
    isAutoPlay = !isAutoPlay;
    localStorage.setItem('storybook_autoplay', isAutoPlay);
    triggerHaptic('tap');
    updateAutoPlayUI();
    if (!isAutoPlay && !audioElement.paused) { audioElement.pause(); btnPageAudio.classList.remove('playing'); }
  };
}

// 10. KONTROL LAYAR PENUH
function toggleFullScreen() {
  triggerHaptic('tap');
  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) docElm.requestFullscreen().catch(() => {});
    else if (docElm.webkitRequestFullscreen) docElm.webkitRequestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  }
}

if (btnFullScreenHome) btnFullScreenHome.onclick = toggleFullScreen;
if (btnFullScreenReader) btnFullScreenReader.onclick = toggleFullScreen;

// 11. RESET RIWAYAT KUIS
if (btnResetHistory) {
  btnResetHistory.onclick = () => {
    triggerHaptic('tap');
    if (confirm("Apakah kamu yakin ingin mereset seluruh catatan bintang dan nilai kuis?")) {
      localStorage.removeItem('storybook_quiz_history');
      renderHomeShelf(); triggerHaptic('correct'); alert("✨ Riwayat bintang kuis berhasil direset!");
    }
  };
}

// 12. FITUR PERALIHAN BAHASA & KECEPATAN TTS
function updateLangToggleUI() {
  if (!btnLangToggle) return;
  const isBilingual = currentStory && currentStory.pages && currentStory.pages.some(p => p.text_id);
  if (isBilingual) {
    btnLangToggle.style.display = 'flex';
    btnLangToggle.textContent = currentStoryLang === 'en' ? '🌐 EN' : '🌐 ID';
    btnLangToggle.title = `Sedang aktif: ${currentStoryLang === 'en' ? 'Bahasa Inggris' : 'Bahasa Indonesia'} (Klik untuk berganti)`;
  } else {
    btnLangToggle.style.display = 'none';
  }
}

function updateSpeedToggleUI() {
  if (!btnSpeedToggle) return;
  if (ttsSpeed >= 0.8) {
    btnSpeedToggle.textContent = '🐇';
    btnSpeedToggle.title = 'Kecepatan Suara: Normal (Klik untuk mode Lambat 🐢)';
  } else {
    btnSpeedToggle.textContent = '🐢';
    btnSpeedToggle.title = 'Kecepatan Suara: Lambat (Klik untuk mode Normal 🐇)';
  }
}

if (btnLangToggle) {
  btnLangToggle.onclick = () => {
    triggerHaptic('tap');
    currentStoryLang = (currentStoryLang === 'en') ? 'id' : 'en';
    updateLangToggleUI();
    renderStoryPageContent(currentPage, isAutoPlay);
  };
}

if (btnSpeedToggle) {
  btnSpeedToggle.onclick = () => {
    triggerHaptic('tap');
    ttsSpeed = (ttsSpeed >= 0.8) ? 0.55 : 0.85;
    updateSpeedToggleUI();
  };
}

// 13. BUKA CERITA & KEMBALI
function openStory(story) {
  currentStory = story; 
  currentPage = 0; 
  inQuizMode = false;
  
  // Terapkan Tema Warna Highlight Cerita ke Variabel CSS
  const theme = story.highlightTheme || {
    bg: "linear-gradient(135deg, #fef08a, #fde047)",
    text: "#854d0e",
    border: "#eab308",
    shadow: "rgba(250, 204, 21, 0.7)"
  };

  document.documentElement.style.setProperty('--story-hl-bg', theme.bg);
  document.documentElement.style.setProperty('--story-hl-text', theme.text);
  document.documentElement.style.setProperty('--story-hl-border', theme.border);
  document.documentElement.style.setProperty('--story-hl-shadow', theme.shadow);

  // Tentukan bahasa awal cerita
  currentStoryLang = story.defaultLang || (story.lang && story.lang.startsWith('en') ? 'en' : 'id');

  if (!document.fullscreenElement) {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) docElm.requestFullscreen().catch(() => {});
  }
  lockScreenOrientation(); 
  triggerHaptic('tap');
  
  preloadStoryImages(story); 
  preloadStoryAudios(story);
  
  homeView.style.display = 'none'; 
  readerView.style.display = 'flex';
  bookStage.style.display = 'flex'; 
  navControls.style.display = 'flex'; 
  quizView.style.display = 'none';
  
  getAudioContext(); 
  updateAutoPlayUI(); 
  updateHapticUI();
  updateLangToggleUI();
  updateSpeedToggleUI();
  
  renderStoryPageContent(currentPage, isAutoPlay);
}

function returnToHome() {
  triggerHaptic('tap'); 
  audioElement.pause(); 
  btnPageAudio.classList.remove('playing');
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  clearKaraokeHighlight();
  readerView.style.display = 'none'; 
  homeView.style.display = 'flex'; 
  currentStory = null; 
  renderHomeShelf();
}

if (btnBackHome) btnBackHome.onclick = returnToHome;
if (btnFinishToHome) btnFinishToHome.onclick = returnToHome;

// 14. RENDER KONTEN BUKU (DENGAN BOBOT KARAKTER & TRACKING ELEMEN KATA)
function renderStoryPageContent(index, autoPlayAudio = false) {
  if (!currentStory || !currentStory.pages || !currentStory.pages[index]) return;
  const pageData = currentStory.pages[index];

  audioElement.pause(); 
  audioElement.currentTime = 0; 
  btnPageAudio.classList.remove('playing');
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  // Reset pelacak karaoke halaman
  currentWordElements = [];
  wordTimingThresholds = [];

  storyImage.src = pageData.image;

  // Pilih berkas audio narasi sesuai bahasa aktif
  const activeAudio = (currentStoryLang === 'id' && pageData.audio_id) ? pageData.audio_id : pageData.audio;

  if (activeAudio) {
    audioElement.src = activeAudio; 
    audioElement.preload = 'auto';
    if (autoPlayAudio && isAutoPlay) {
      const playPromise = audioElement.play();
      if (playPromise !== undefined) {
        playPromise.then(() => { btnPageAudio.classList.add('playing'); }).catch(() => {});
      }
    }
  } else {
    audioElement.removeAttribute('src');
  }

  // Pilih teks bacaan sesuai bahasa aktif
  const activeText = (currentStoryLang === 'id' && pageData.text_id) ? pageData.text_id : (pageData.text || '');

  textFlow.innerHTML = '';
  const words = activeText.split(' ').filter(w => w.trim().length > 0);

  // Kalkulasi estimasi bobot durasi per kata berdasarkan jumlah karakter
  let totalChars = 0;
  const charCounts = words.map(w => {
    const cleanLen = w.replace(/[^a-zA-Z0-9]/g, '').length || 1;
    totalChars += cleanLen;
    return cleanLen;
  });

  let cumulativeChars = 0;
  wordTimingThresholds = charCounts.map(count => {
    cumulativeChars += count;
    return cumulativeChars / totalChars; // Rentang nilai linimasa 0.0 sampai 1.0
  });

  words.forEach(word => {
    const cleanKey = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
    
    const wrapper = document.createElement('div');
    wrapper.className = 'word-wrapper';

    const span = document.createElement('span'); 
    span.className = 'clickable-word'; 
    span.textContent = word;
    
    // Simpan referensi span untuk pemantau linimasa karaoke
    currentWordElements.push(span);

    // Tampilkan arti jika ada di kamus vocab cerita
    const hasTranslation = currentStoryLang === 'en' && pageData.vocab && pageData.vocab[cleanKey];

    span.onclick = () => {
      speakWord(word, span);

      // Munculkan balon tooltip arti kata
      if (hasTranslation) {
        document.querySelectorAll('.vocab-tooltip').forEach(t => t.remove());

        const tip = document.createElement('div');
        tip.className = 'vocab-tooltip';
        tip.textContent = pageData.vocab[cleanKey];
        wrapper.appendChild(tip);

        setTimeout(() => tip.remove(), 2500);
      }
    };

    wrapper.appendChild(span);
    textFlow.appendChild(wrapper);
  });

  const totalPages = currentStory.pages.length;
  progressFill.style.width = (((index + 1) / totalPages) * 100) + '%';
  pageIndicator.textContent = `${index + 1}/${totalPages}`;

  btnPrev.disabled = (index === 0);
  const isLastPage = (index === totalPages - 1);
  const hasQuiz = (currentStory.quiz && currentStory.quiz.length > 0);
  btnNext.textContent = isLastPage ? (hasQuiz ? 'Ikuti Kuis 🎯' : 'Selesai 🏁') : 'Balik Halaman';
}

// 15. ANIMASI BALIK HALAMAN SINKRON
function turnPage(direction) {
  if (isFlipping) return;
  isFlipping = true;
  playPageTurnSound(); 
  triggerHaptic('tap');
  clearKaraokeHighlight();
  const outClass = (direction === 'next') ? 'flip-out-left' : 'flip-out-right';
  const inClass = (direction === 'next') ? 'flip-in-right' : 'flip-in-left';
  pageSheet.classList.remove('flip-in-right', 'flip-in-left');
  pageSheet.classList.add(outClass);

  setTimeout(() => {
    direction === 'next' ? currentPage++ : currentPage--;
    renderStoryPageContent(currentPage, isAutoPlay);
    pageSheet.classList.remove(outClass); 
    pageSheet.classList.add(inClass);
    setTimeout(() => { pageSheet.classList.remove(inClass); isFlipping = false; }, 200);
  }, 180);
}

// 16. SUARA KATA (TTS MANUAL DENGAN SOROT KATA BERCAHAYA)
function speakWord(word, element) {
  if (!('speechSynthesis' in window)) return;
  triggerHaptic('tap'); 
  audioElement.pause(); 
  btnPageAudio.classList.remove('playing'); 
  window.speechSynthesis.cancel();
  clearKaraokeHighlight();

  // Hapus kelas aktif dari kata sebelumnya
  document.querySelectorAll('.clickable-word.speaking').forEach(el => el.classList.remove('speaking'));

  const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
  const utterance = new SpeechSynthesisUtterance(cleanWord);

  const targetLang = (currentStoryLang === 'en') ? 'en-US' : 'id-ID';
  utterance.lang = targetLang;
  utterance.rate = ttsSpeed;

  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find(v => 
    v.lang.toLowerCase() === targetLang.toLowerCase() || 
    v.lang.toLowerCase().replace('_', '-').startsWith(targetLang.slice(0, 2).toLowerCase())
  );
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  element.classList.add('speaking');
  utterance.onend = () => element.classList.remove('speaking');
  utterance.onerror = () => element.classList.remove('speaking');
  window.speechSynthesis.speak(utterance);
}

// 17. TOMBOL SPEAKER MANUAL & SINKRONISASI KARAOKE NARASI AUDIO
btnPageAudio.onclick = () => {
  triggerHaptic('tap');
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (audioElement.paused) { 
    audioElement.play().then(() => { btnPageAudio.classList.add('playing'); }).catch(err => console.warn(err)); 
  } else { 
    audioElement.pause(); 
    btnPageAudio.classList.remove('playing'); 
  }
};

// Pemantau Linimasa Narasi Audio untuk Mengaktifkan Sorotan Kata Berurutan
audioElement.addEventListener('timeupdate', () => {
  if (!audioElement.duration || currentWordElements.length === 0) return;

  const progress = audioElement.currentTime / audioElement.duration;

  let activeIndex = wordTimingThresholds.findIndex(threshold => progress <= threshold);
  if (activeIndex === -1 && progress > 0) {
    activeIndex = currentWordElements.length - 1;
  }

  currentWordElements.forEach((span, idx) => {
    if (idx === activeIndex && !audioElement.paused) {
      span.classList.add('karaoke-active');
    } else {
      span.classList.remove('karaoke-active');
    }
  });
});

function clearKaraokeHighlight() {
  currentWordElements.forEach(span => span.classList.remove('karaoke-active'));
}

audioElement.addEventListener('pause', clearKaraokeHighlight);
audioElement.addEventListener('ended', () => {
  clearKaraokeHighlight();
  btnPageAudio.classList.remove('playing');
});

// 18. GESTURE SWIPE TOUCH
let touchStartX = 0; let touchStartY = 0;
bookStage.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
bookStage.addEventListener('touchend', (e) => {
  if (inQuizMode || isFlipping) return;
  const diffX = e.changedTouches[0].screenX - touchStartX;
  const diffY = e.changedTouches[0].screenY - touchStartY;
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) { diffX < 0 ? handleNextAction() : (currentPage > 0 && turnPage('prev')); }
}, { passive: true });

function handleNextAction() {
  if (currentPage < currentStory.pages.length - 1) { turnPage('next'); } 
  else {
    if (currentStory.quiz && currentStory.quiz.length > 0) { startQuiz(); } 
    else { triggerHaptic('celebrate'); alert("🎉 Selamat! Kamu telah membaca seluruh cerita!"); returnToHome(); }
  }
}

btnNext.onclick = handleNextAction;
btnPrev.onclick = () => { if (currentPage > 0) turnPage('prev'); };

// 19. KUIS PEMAHAMAN
function startQuiz() {
  inQuizMode = true; currentQuizIndex = 0; quizScore = 0; correctCount = 0;
  triggerHaptic('tap'); audioElement.pause(); if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  clearKaraokeHighlight();
  bookStage.style.display = 'none'; navControls.style.display = 'none'; quizView.style.display = 'flex';
  quizQuestionBox.style.display = 'block'; quizResult.style.display = 'none';
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qData = currentStory.quiz[currentQuizIndex];
  quizStep.textContent = `${currentQuizIndex + 1}/${currentStory.quiz.length}`;
  quizQuestionText.textContent = qData.q; quizOptions.innerHTML = '';
  qData.options.forEach((optText, idx) => {
    const btn = document.createElement('button'); btn.className = 'quiz-opt-btn';
    btn.innerHTML = `<span style="opacity: 0.6; font-weight: 800;">${String.fromCharCode(65 + idx)}.</span> ${optText}`;
    btn.onclick = () => checkQuizAnswer(idx, qData.answer, btn); quizOptions.appendChild(btn);
  });
}

function checkQuizAnswer(selectedIdx, correctIdx, btnElement) {
  const allOptButtons = quizOptions.querySelectorAll('.quiz-opt-btn');
  allOptButtons.forEach(b => b.style.pointerEvents = 'none');
  const pointsPerQuestion = 100 / currentStory.quiz.length;
  if (selectedIdx === correctIdx) {
    playCorrectSound(); triggerHaptic('correct'); btnElement.classList.add('correct'); quizScore += pointsPerQuestion; correctCount++;
  } else {
    playWrongSound(); triggerHaptic('wrong'); btnElement.classList.add('wrong'); allOptButtons[correctIdx].classList.add('correct');
  }
  setTimeout(() => { currentQuizIndex < currentStory.quiz.length - 1 ? (currentQuizIndex++, renderQuizQuestion()) : showQuizResult(); }, 1200);
}

function showQuizResult() {
  quizQuestionBox.style.display = 'none'; quizResult.style.display = 'flex';
  const finalScore = Math.round(quizScore); const totalQuestions = currentStory.quiz.length;
  playFanfareSound(); resultScore.textContent = `${finalScore} Poin`;
  let stars = "⭐"; let message = "Ayo kita baca lagi cerita ini bersama-sama agar lebih paham!";
  if (finalScore >= 90) { stars = "⭐⭐⭐"; message = "Luar biasa! Kamu menyimak seluruh cerita dan pesan moral dengan sempurna!"; launchConfetti(); triggerHaptic('celebrate'); } 
  else if (finalScore >= 60) { stars = "⭐⭐"; message = "Bagus sekali! Sebagian besar pertanyaan berhasil kamu jawab dengan benar."; triggerHaptic('correct'); } 
  else { triggerHaptic('wrong'); }
  starsBox.textContent = stars;
  resultMsg.innerHTML = `<strong>${message}</strong><br><span style="font-size: 0.9rem; opacity: 0.8; display: inline-block; margin-top: 6px;">Jawaban Benar: ${correctCount} dari ${totalQuestions} Soal</span>`;
  const historyKey = 'storybook_quiz_history'; const quizHistory = JSON.parse(localStorage.getItem(historyKey) || '{}');
  if (!quizHistory[currentStory.id] || finalScore >= quizHistory[currentStory.id].score) {
    quizHistory[currentStory.id] = { score: finalScore, stars: stars, correctCount: correctCount, total: totalQuestions, savedAt: new Date().toLocaleDateString('id-ID') };
    localStorage.setItem(historyKey, JSON.stringify(quizHistory));
  }
}

if (btnRestartStory) { btnRestartStory.onclick = () => { triggerHaptic('tap'); inQuizMode = false; currentPage = 0; quizView.style.display = 'none'; bookStage.style.display = 'flex'; navControls.style.display = 'flex'; renderStoryPageContent(currentPage, isAutoPlay); }; }

// 20. MODE MALAM
function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  if (btnThemeToggleHome) btnThemeToggleHome.textContent = isDark ? '☀️' : '🌙';
  if (btnThemeToggleReader) btnThemeToggleReader.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('storybook_theme', isDark ? 'dark' : 'light');
}

function toggleTheme() { triggerHaptic('tap'); applyTheme(!document.body.classList.contains('dark-mode')); }
if (btnThemeToggleHome) btnThemeToggleHome.onclick = toggleTheme;
if (btnThemeToggleReader) btnThemeToggleReader.onclick = toggleTheme;
if (localStorage.getItem('storybook_theme') === 'dark') { applyTheme(true); }

// 21. INDIKATOR JARINGAN
function updateNetworkStatus() {
  if (!networkStatus) return;
  const isOnline = navigator.onLine;
  networkStatus.className = `network-badge ${isOnline ? 'online' : 'offline'}`;
  const statusText = networkStatus.querySelector('.status-text');
  if (statusText) statusText.textContent = isOnline ? 'Online' : 'Offline';
}
window.addEventListener('online', () => { updateNetworkStatus(); triggerHaptic('tap'); });
window.addEventListener('offline', () => { updateNetworkStatus(); triggerHaptic('wrong'); });

// 22. PEMICU INSTALASI LANGSUNG (1-CLICK NATIVE PROMPT PURE)
let deferredPrompt = null;

if (pwaInstallBanner) pwaInstallBanner.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (pwaInstallBanner) pwaInstallBanner.style.display = 'flex';
});

async function executePwaInstall() {
  triggerHaptic('tap');
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  
  if (outcome === 'accepted') {
    if (pwaInstallBanner) pwaInstallBanner.style.display = 'none';
  }
  deferredPrompt = null;
}

if (btnInstallPwa) btnInstallPwa.onclick = executePwaInstall;

if (btnCloseInstallBanner) {
  btnCloseInstallBanner.onclick = () => { 
    triggerHaptic('tap'); 
    pwaInstallBanner.style.display = 'none'; 
  };
}

window.addEventListener('appinstalled', () => {
  if (pwaInstallBanner) pwaInstallBanner.style.display = 'none';
  deferredPrompt = null;
  triggerHaptic('celebrate');
});

// 23. INISIALISASI
window.addEventListener('DOMContentLoaded', () => {
  renderHomeShelf();
  updateAutoPlayUI();
  updateHapticUI();
  updateNetworkStatus();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }
});
