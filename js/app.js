/**
 * ================================================================
 * APP.JS - MESIN BUKU CERITA (AUDIO ENGINE, SYNCHRONIZED FLIP, & QUIZ SFX)
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

// 3. MESIN AUDIO SINTETIS (WEB AUDIO API - 100% OFFLINE)
let audioCtx = null;

// Mengaktifkan AudioContext tunggal yang konsisten
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Buka kunci AudioContext pada interaksi pertama pengguna
window.addEventListener('click', () => getAudioContext(), { once: true });
window.addEventListener('touchstart', () => getAudioContext(), { once: true });

// A. Suara Gesekan Kertas (Page Turn)
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
  filter.type = 'bandpass';
  filter.frequency.value = 1400;
  filter.Q.value = 1.2;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.4, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  noise.start();
}

// B. Suara Jawaban Benar (Melodi Ceria Nada Naik)
function playCorrectSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99]; // C5, E5, G5

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + idx * 0.08);

    gain.gain.setValueAtTime(0.28, now + idx * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.08);
    osc.stop(now + idx * 0.08 + 0.36);
  });
}

// C. Suara Jawaban Salah (Nada Rendah Menurun)
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

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.3);
}

// D. Suara Fanfare Selesai Kuis
function playFanfareSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  const now = ctx.currentTime;

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + idx * 0.12);

    gain.gain.setValueAtTime(0.3, now + idx * 0.12);
    const duration = (idx === notes.length - 1) ? 0.6 : 0.25;
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.12);
    osc.stop(now + idx * 0.12 + duration + 0.05);
  });
}

// 4. PRELOAD GAMBAR KE MEMORI
function preloadStoryImages(story) {
  if (!story || !story.pages) return;
  story.pages.forEach(p => {
    if (p.image && !preloadedImages[p.image]) {
      const img = new Image();
      img.src = p.image;
      preloadedImages[p.image] = img;
    }
  });
}

// 5. RENDER RAK BUKU DI BERANDA
function renderHomeShelf() {
  if (!storiesGrid) return;
  const listCerita = window.STORIES_DATABASE || [];

  if (listCerita.length === 0) {
    storiesGrid.innerHTML = `
      <div style="text-align: center; padding: 40px 15px; color: var(--text-sub);">
        <p style="font-size: 1.15rem; font-weight: 800; margin-bottom: 8px;">Memuat Koleksi Buku... 📚</p>
        <p style="font-size: 0.85rem; line-height: 1.5;">Menyinkronkan data cerita. Silakan tunggu sejenak.</p>
      </div>
    `;
    return;
  }

  storiesGrid.innerHTML = '';
  listCerita.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card-item';
    card.innerHTML = `
      <img class="story-cover-thumb" 
           src="${story.cover || (story.pages[0] ? story.pages[0].image : '')}" 
           alt="${story.title}" 
           onerror="this.src='https://placehold.co/100x130/58cc02/ffffff?text=Buku';">
      <div class="story-info">
        <span class="story-badge">${story.category || 'Cerita Bergambar'}</span>
        <div class="story-title">${story.title}</div>
        <div class="story-desc">${story.description || ''}</div>
      </div>
    `;
    card.onclick = () => openStory(story);
    storiesGrid.appendChild(card);
  });
}

// Polling memastikan data cerita dari file terpisah terdeteksi
let checkCount = 0;
const storyPoller = setInterval(() => {
  checkCount++;
  if ((window.STORIES_DATABASE && window.STORIES_DATABASE.length > 0) || checkCount > 25) {
    clearInterval(storyPoller);
    renderHomeShelf();
  }
}, 150);

// 6. BUKA CERITA & KEMBALI
function openStory(story) {
  currentStory = story;
  currentPage = 0;
  inQuizMode = false;

  preloadStoryImages(story);

  homeView.style.display = 'none';
  readerView.style.display = 'flex';
  bookStage.style.display = 'flex';
  navControls.style.display = 'flex';
  quizView.style.display = 'none';

  renderStoryPageContent(currentPage, true);
}

function returnToHome() {
  audioElement.pause();
  btnPageAudio.classList.remove('playing');
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  readerView.style.display = 'none';
  homeView.style.display = 'flex';
  currentStory = null;
  renderHomeShelf();
}

if (btnBackHome) btnBackHome.onclick = returnToHome;
if (btnFinishToHome) btnFinishToHome.onclick = returnToHome;

// 7. RENDER KONTEN HALAMAN CERITA DENGAN AUDIO AUTO-PLAY
function renderStoryPageContent(index, autoPlayAudio = false) {
  if (!currentStory || !currentStory.pages || !currentStory.pages[index]) return;
  const pageData = currentStory.pages[index];

  // Hentikan suara sebelumnya
  audioElement.pause();
  btnPageAudio.classList.remove('playing');
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  // Pasang gambar & sumber audio
  storyImage.src = pageData.image;
  audioElement.src = pageData.audio || '';

  // Putar narasi otomatis bila dipicu oleh aksi pengguna
  if (autoPlayAudio && pageData.audio) {
    audioElement.play().then(() => {
      btnPageAudio.classList.add('playing');
    }).catch(() => {
      // Kebijakan browser mencegah autoplay di beberapa kondisi awal
    });
  }

  // Render teks perkata
  textFlow.innerHTML = '';
  const words = (pageData.text || '').split(' ');
  words.forEach(word => {
    if (!word) return;
    const span = document.createElement('span');
    span.className = 'clickable-word';
    span.textContent = word;
    span.onclick = () => speakWord(word, span);
    textFlow.appendChild(span);
  });

  // Perbarui progress bar
  const totalPages = currentStory.pages.length;
  const percent = ((index + 1) / totalPages) * 100;
  progressFill.style.width = percent + '%';
  pageIndicator.textContent = `${index + 1}/${totalPages}`;

  // Perbarui tombol navigasi
  btnPrev.disabled = (index === 0);
  const isLastPage = (index === totalPages - 1);
  const hasQuiz = (currentStory.quiz && currentStory.quiz.length > 0);
  btnNext.textContent = isLastPage ? (hasQuiz ? 'Ikuti Kuis 🎯' : 'Selesai 🏁') : 'Balik Halaman';
}

// 8. SINKRONISASI BALIK HALAMAN 3D + BUNYI EFEK + AUDIO NARASI
function turnPage(direction) {
  if (isFlipping) return;
  isFlipping = true;

  // Bunyikan efek kertas secara instan
  playPageTurnSound();

  const outClass = (direction === 'next') ? 'flip-out-left' : 'flip-out-right';
  const inClass = (direction === 'next') ? 'flip-in-right' : 'flip-in-left';

  pageSheet.classList.remove('flip-in-right', 'flip-in-left');
  pageSheet.classList.add(outClass);

  // Ganti gambar dan narasi tepat di titik tengah rotasi (180ms)
  setTimeout(() => {
    if (direction === 'next') {
      currentPage++;
    } else {
      currentPage--;
    }

    // Render konten baru dan putar narasi halamannya
    renderStoryPageContent(currentPage, true);

    pageSheet.classList.remove(outClass);
    pageSheet.classList.add(inClass);

    setTimeout(() => {
      pageSheet.classList.remove(inClass);
      isFlipping = false;
    }, 200);
  }, 180);
}

// 9. UCAPKAN PER KATA (TTS)
function speakWord(word, element) {
  if (!('speechSynthesis' in window)) return;

  audioElement.pause();
  btnPageAudio.classList.remove('playing');
  window.speechSynthesis.cancel();

  const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
  const utterance = new SpeechSynthesisUtterance(cleanWord);
  utterance.lang = 'id-ID';
  utterance.rate = 0.85;

  element.classList.add('speaking');
  utterance.onend = () => element.classList.remove('speaking');
  utterance.onerror = () => element.classList.remove('speaking');

  window.speechSynthesis.speak(utterance);
}

// 10. PEMUTAR AUDIO TOMBOL SPEAKER
btnPageAudio.onclick = () => {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  if (audioElement.paused) {
    audioElement.play().then(() => {
      btnPageAudio.classList.add('playing');
    }).catch(err => {
      console.warn("File audio belum dapat diputar:", err);
    });
  } else {
    audioElement.pause();
    btnPageAudio.classList.remove('playing');
  }
};

audioElement.onended = () => {
  btnPageAudio.classList.remove('playing');
};

// 11. DETEKSI GESTURE SWIPE
let touchStartX = 0;
let touchStartY = 0;

bookStage.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

bookStage.addEventListener('touchend', (e) => {
  if (inQuizMode || isFlipping) return;

  const diffX = e.changedTouches[0].screenX - touchStartX;
  const diffY = e.changedTouches[0].screenY - touchStartY;

  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
    if (diffX < 0) {
      handleNextAction();
    } else {
      if (currentPage > 0) turnPage('prev');
    }
  }
}, { passive: true });

function handleNextAction() {
  if (currentPage < currentStory.pages.length - 1) {
    turnPage('next');
  } else {
    if (currentStory.quiz && currentStory.quiz.length > 0) {
      startQuiz();
    } else {
      alert("🎉 Selamat! Kamu telah membaca seluruh cerita!");
      returnToHome();
    }
  }
}

btnNext.onclick = handleNextAction;
btnPrev.onclick = () => {
  if (currentPage > 0) turnPage('prev');
};

// 12. SISTEM KUIS DENGAN SFX & TAMPILAN SKOR LENGKAP
function startQuiz() {
  inQuizMode = true;
  currentQuizIndex = 0;
  quizScore = 0;
  correctCount = 0;

  audioElement.pause();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  bookStage.style.display = 'none';
  navControls.style.display = 'none';
  quizView.style.display = 'flex';
  quizQuestionBox.style.display = 'block';
  quizResult.style.display = 'none';

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qData = currentStory.quiz[currentQuizIndex];
  quizStep.textContent = `${currentQuizIndex + 1}/${currentStory.quiz.length}`;
  quizQuestionText.textContent = qData.q;
  quizOptions.innerHTML = '';

  qData.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.innerHTML = `<span style="opacity: 0.6; font-weight: 800;">${String.fromCharCode(65 + idx)}.</span> ${optText}`;
    btn.onclick = () => checkQuizAnswer(idx, qData.answer, btn);
    quizOptions.appendChild(btn);
  });
}

function checkQuizAnswer(selectedIdx, correctIdx, btnElement) {
  const allOptButtons = quizOptions.querySelectorAll('.quiz-opt-btn');
  allOptButtons.forEach(b => b.style.pointerEvents = 'none');

  const pointsPerQuestion = 100 / currentStory.quiz.length;

  if (selectedIdx === correctIdx) {
    playCorrectSound(); // SFX Benar
    btnElement.classList.add('correct');
    quizScore += pointsPerQuestion;
    correctCount++;
  } else {
    playWrongSound(); // SFX Salah
    btnElement.classList.add('wrong');
    allOptButtons[correctIdx].classList.add('correct');
  }

  setTimeout(() => {
    if (currentQuizIndex < currentStory.quiz.length - 1) {
      currentQuizIndex++;
      renderQuizQuestion();
    } else {
      showQuizResult();
    }
  }, 1200);
}

function showQuizResult() {
  quizQuestionBox.style.display = 'none';
  quizResult.style.display = 'flex';

  const finalScore = Math.round(quizScore);
  const totalQuestions = currentStory.quiz.length;

  // Bunyikan fanfare perayaan
  playFanfareSound();

  resultScore.textContent = `${finalScore} Poin`;

  let stars = "⭐";
  let message = "Ayo kita baca lagi cerita ini bersama-sama agar lebih paham!";

  if (finalScore >= 90) {
    stars = "⭐⭐⭐";
    message = "Luar biasa! Kamu menyimak seluruh cerita dan pesan moral dengan sempurna!";
  } else if (finalScore >= 60) {
    stars = "⭐⭐";
    message = "Bagus sekali! Hampir seluruh pertanyaan berhasil kamu jawab dengan benar.";
  }

  starsBox.textContent = stars;
  resultMsg.innerHTML = `
    <strong>${message}</strong><br>
    <span style="font-size: 0.9rem; opacity: 0.8; display: inline-block; margin-top: 6px;">
      Jawaban Benar: ${correctCount} dari ${totalQuestions} Soal
    </span>
  `;
}

if (btnRestartStory) {
  btnRestartStory.onclick = () => {
    inQuizMode = false;
    currentPage = 0;
    quizView.style.display = 'none';
    bookStage.style.display = 'flex';
    navControls.style.display = 'flex';
    renderStoryPageContent(currentPage, true);
  };
}

// 13. MODE MALAM
function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  if (btnThemeToggleHome) btnThemeToggleHome.textContent = isDark ? '☀️' : '🌙';
  if (btnThemeToggleReader) btnThemeToggleReader.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('storybook_theme', isDark ? 'dark' : 'light');
}

function toggleTheme() {
  const isDark = !document.body.classList.contains('dark-mode');
  applyTheme(isDark);
}

if (btnThemeToggleHome) btnThemeToggleHome.onclick = toggleTheme;
if (btnThemeToggleReader) btnThemeToggleReader.onclick = toggleTheme;

if (localStorage.getItem('storybook_theme') === 'dark') {
  applyTheme(true);
}

// 14. INISIALISASI
window.addEventListener('DOMContentLoaded', renderHomeShelf);
