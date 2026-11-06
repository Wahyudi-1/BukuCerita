/**
 * ================================================================
 * APP.JS - MESIN BUKU CERITA INTERAKTIF TERLENGKAP
 * (OFFLINE DOWNLOADER, RANDOM QUESTION BANK, SHUFFLED OPTIONS,
 *  HIGH-PRECISION 60FPS KARAOKE, TIMING OFFSET CALIBRATION,
 *  EXPLICIT TIMESTAMPS SUPPORT, HYBRID AUDIO DISPATCHER, 1-CLICK PWA)
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

// Penampung Bank Soal Acak, Pelacak Karaoke 60 FPS, & Voice Cache
let activeQuizQuestions = [];
let currentWordElements = [];
let wordTimingThresholds = [];
let rawWordTimestamps = null;
let karaokeAnimId = null;
let wordAudioTimeout = null;
let availableVoices = [];

const preloadedImages = {};
const preloadedAudios = {};

// Nama cache khusus untuk media cerita offline mandiri
const OFFLINE_MEDIA_CACHE = 'buku-cerita-offline-media';

// Jumlah soal yang akan ditampilkan ke siswa dari total bank soal
const QUIZ_QUESTION_COUNT = 4;

// Status preferensi pengguna (tersimpan di localStorage)
let isAutoPlay = localStorage.getItem('storybook_autoplay') !== 'false';
let isKaraokeEnabled = localStorage.getItem('storybook_karaoke') !== 'false';
let audioSourceMode = localStorage.getItem('storybook_audio_source') || 'AUTO'; // 'AUTO' | 'MP3' | 'TTS'
let audioOffsetSec = parseFloat(localStorage.getItem('storybook_audio_offset') || '0.0');
let currentStoryLang = 'id';
let ttsSpeed = 0.85;

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

const btnLangToggle = document.getElementById('btnLangToggle');
const btnSpeedToggle = document.getElementById('btnSpeedToggle');
const btnKaraokeToggle = document.getElementById('btnKaraokeToggle');

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
const confettiCanvas = document.getElementById('confettiCanvas');

const networkStatus = document.getElementById('networkStatus');
const pwaInstallBanner = document.getElementById('pwaInstallBanner');
const btnInstallPwa = document.getElementById('btnInstallPwa');
const btnCloseInstallBanner = document.getElementById('btnCloseInstallBanner');

let btnAudioSourceToggle = document.getElementById('btnAudioSourceToggle');
let btnAudioCalibrate = document.getElementById('btnAudioCalibrate');

// ================================================================
// 3. MESIN INISIALISASI SUARA PERAMBAN (VOICE LOADER & RESOLVER)
// ================================================================

function populateVoices() {
  if (!('speechSynthesis' in window)) return;
  const loaded = window.speechSynthesis.getVoices();
  if (loaded && loaded.length > 0) {
    availableVoices = loaded;
  }
}

populateVoices();
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = populateVoices;
}

let voicePollCount = 0;
const voicePollInterval = setInterval(() => {
  voicePollCount++;
  populateVoices();
  if (availableVoices.length > 0 || voicePollCount > 20) {
    clearInterval(voicePollInterval);
  }
}, 250);

function getActiveLanguage() {
  if (currentStoryLang === 'en') return 'en-US';
  if (currentStoryLang === 'id') return 'id-ID';
  if (currentStory && currentStory.lang) {
    return currentStory.lang.toLowerCase().startsWith('en') ? 'en-US' : 'id-ID';
  }
  return 'id-ID';
}

function getBestVoiceForLang(targetLang) {
  if (!availableVoices || availableVoices.length === 0) {
    populateVoices();
  }

  const isId = targetLang.toLowerCase().startsWith('id') || targetLang.toLowerCase().startsWith('in');

  if (isId) {
    let matched = availableVoices.find(v => {
      const code = v.lang.replace('_', '-').toLowerCase();
      return code === 'id-id' || code === 'in-id';
    });
    if (matched) return matched;

    matched = availableVoices.find(v => {
      const code = v.lang.toLowerCase();
      return code.startsWith('id') || code.startsWith('in');
    });
    if (matched) return matched;

    matched = availableVoices.find(v => {
      const name = v.name.toLowerCase();
      return name.includes('indonesia') || name.includes('bahasa') || name.includes('id-id');
    });
    if (matched) return matched;

    return null;
  } else {
    let matched = availableVoices.find(v => v.lang.replace('_', '-').toLowerCase() === 'en-us');
    if (matched) return matched;

    matched = availableVoices.find(v => v.lang.toLowerCase().startsWith('en'));
    if (matched) return matched;

    return null;
  }
}

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

// 7. PRELOADING RAM CEPAT
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

// 8. PENGUNDUH MEDIA OFFLINE MANDIRI (CACHE STORAGE API)
function extractStoryMediaUrls(story) {
  const urlSet = new Set();
  if (story.cover) urlSet.add(story.cover);

  if (story.pages && Array.isArray(story.pages)) {
    story.pages.forEach(page => {
      if (page.image) urlSet.add(page.image);
      if (page.audio) urlSet.add(page.audio);
      if (page.audio_id) urlSet.add(page.audio_id);
    });
  }
  return Array.from(urlSet);
}

async function checkStoryOfflineStatus(story) {
  if (!('caches' in window)) return false;
  try {
    const cache = await caches.open(OFFLINE_MEDIA_CACHE);
    const urls = extractStoryMediaUrls(story);
    if (urls.length === 0) return false;

    for (const url of urls) {
      const match = await cache.match(url);
      if (!match) return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}

async function downloadStoryMediaForOffline(story, btnElement) {
  if (!('caches' in window)) {
    alert("Peramban ini tidak mendukung penyimpanan offline Cache Storage.");
    return;
  }

  if (!navigator.onLine) {
    alert("Koneksi internet diperlukan saat pertama kali mengunduh cerita ini.");
    return;
  }

  const urls = extractStoryMediaUrls(story);
  if (urls.length === 0) return;

  btnElement.disabled = true;
  btnElement.className = 'btn-offline-status downloading';

  try {
    const cache = await caches.open(OFFLINE_MEDIA_CACHE);
    let completed = 0;

    for (const url of urls) {
      btnElement.textContent = `⏳ ${Math.round((completed / urls.length) * 100)}%`;
      const response = await fetch(url, { cache: 'no-cache' });
      if (response.ok) {
        await cache.put(url, response);
        completed++;
      }
    }

    btnElement.className = 'btn-offline-status cached';
    btnElement.innerHTML = '✅ Siap Offline';
    btnElement.title = 'Seluruh gambar dan audio cerita ini sudah tersimpan dan dapat dibaca tanpa internet.';
    btnElement.disabled = false;
  } catch (err) {
    console.error("Gagal mengunduh aset cerita:", err);
    btnElement.className = 'btn-offline-status';
    btnElement.innerHTML = '⚠️ Gagal. Unduh Ulang';
    btnElement.disabled = false;
  }
}

// 9. RENDER RAK BUKU DI BERANDA
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
        <div class="story-meta-row">
          <span class="story-badge">${story.category || 'Cerita Bergambar'}</span>
          ${recordBadge}
        </div>
        <div class="story-title">${story.title}</div>
        <div class="story-desc">${story.description || ''}</div>
        <div class="story-card-actions">
          <button class="btn-offline-status" id="btnOffline_${story.id}">
            🔍 Cek Offline...
          </button>
        </div>
      </div>
    `;

    card.onclick = (e) => {
      if (e.target.closest('.btn-offline-status')) return;
      openStory(story);
    };

    storiesGrid.appendChild(card);

    const btnOffline = card.querySelector(`#btnOffline_${story.id}`);
    checkStoryOfflineStatus(story).then(isCached => {
      if (isCached) {
        btnOffline.className = 'btn-offline-status cached';
        btnOffline.innerHTML = '✅ Siap Offline';
        btnOffline.title = 'Cerita ini sudah dapat dibaca tanpa sambungan internet.';
      } else {
        btnOffline.className = 'btn-offline-status';
        btnOffline.innerHTML = '📥 Unduh Offline';
        btnOffline.title = 'Unduh semua audio & gambar agar cerita ini bisa dibaca tanpa internet.';
      }

      btnOffline.onclick = (e) => {
        e.stopPropagation();
        downloadStoryMediaForOffline(story, btnOffline);
      };
    });
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

// 10. SAKELAR NARASI OTOMATIS
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
    updateAutoPlayUI();
    if (!isAutoPlay && !audioElement.paused) {
      audioElement.pause();
      btnPageAudio.classList.remove('playing');
      stopKaraokeLoop();
      clearKaraokeHighlight();
    }
  };
}

// 11. FITUR SAKELAR TOGGLE ANIMASI KARAOKE
function updateKaraokeUI() {
  if (!btnKaraokeToggle) return;
  if (isKaraokeEnabled) {
    btnKaraokeToggle.textContent = '🎤 ON';
    btnKaraokeToggle.title = 'Animasi Karaoke: AKTIF (Klik untuk mematikan)';
    btnKaraokeToggle.classList.remove('karaoke-off');
  } else {
    btnKaraokeToggle.textContent = '🎤 OFF';
    btnKaraokeToggle.title = 'Animasi Karaoke: NONAKTIF (Klik untuk mengaktifkan)';
    btnKaraokeToggle.classList.add('karaoke-off');
  }
}

function toggleKaraoke() {
  isKaraokeEnabled = !isKaraokeEnabled;
  localStorage.setItem('storybook_karaoke', isKaraokeEnabled);
  updateKaraokeUI();
  if (!isKaraokeEnabled) {
    clearKaraokeHighlight();
  } else if (!audioElement.paused && !audioElement.ended) {
    startKaraokeLoop();
  }
}

if (btnKaraokeToggle) {
  btnKaraokeToggle.onclick = toggleKaraoke;
}

// ================================================================
// 12. SAKELAR SUMBER AUDIO (AUTO / MP3 / TTS) & TOMBOL KALIBRASI
// ================================================================

function updateAudioSourceUI() {
  if (!btnAudioSourceToggle) return;
  btnAudioSourceToggle.classList.remove('mode-auto', 'mode-mp3', 'mode-tts');

  if (audioSourceMode === 'AUTO') {
    btnAudioSourceToggle.classList.add('mode-auto');
    btnAudioSourceToggle.innerHTML = '⚡ AUTO';
    btnAudioSourceToggle.title = 'Sumber Suara: Otomatis Cerdas (Beralih ke MP3 jika gawai tidak punya suara ID)';
  } else if (audioSourceMode === 'MP3') {
    btnAudioSourceToggle.classList.add('mode-mp3');
    btnAudioSourceToggle.innerHTML = '🎙️ MP3';
    btnAudioSourceToggle.title = 'Sumber Suara: Narasi Asli Rekaman (MP3)';
  } else if (audioSourceMode === 'TTS') {
    btnAudioSourceToggle.classList.add('mode-tts');
    btnAudioSourceToggle.innerHTML = '🤖 TTS';
    btnAudioSourceToggle.title = 'Sumber Suara: Sintesis Suara Browser (TTS)';
  }
}

function toggleAudioSource() {
  if (audioSourceMode === 'AUTO') {
    audioSourceMode = 'MP3';
  } else if (audioSourceMode === 'MP3') {
    audioSourceMode = 'TTS';
  } else {
    audioSourceMode = 'AUTO';
  }

  localStorage.setItem('storybook_audio_source', audioSourceMode);
  updateAudioSourceUI();
}

function ensureAudioControlsInTopBar() {
  const topBar = document.querySelector('.top-bar');
  if (!topBar) return;

  if (!btnAudioSourceToggle) {
    btnAudioSourceToggle = document.createElement('button');
    btnAudioSourceToggle.id = 'btnAudioSourceToggle';
    btnAudioSourceToggle.className = 'btn-tool';
    btnAudioSourceToggle.onclick = toggleAudioSource;
    topBar.insertBefore(btnAudioSourceToggle, btnKaraokeToggle || btnAutoPlayToggle);
  }

  if (!btnAudioCalibrate) {
    btnAudioCalibrate = document.createElement('button');
    btnAudioCalibrate.id = 'btnAudioCalibrate';
    btnAudioCalibrate.className = 'btn-tool';
    btnAudioCalibrate.textContent = '⏱️';
    btnAudioCalibrate.title = 'Kalibrasi Sinkronisasi Waktu Audio (Offset Detik)';
    btnAudioCalibrate.onclick = openCalibrationModal;
    topBar.insertBefore(btnAudioCalibrate, btnKaraokeToggle || btnAutoPlayToggle);
  }

  updateAudioSourceUI();
}

// Modal Dialog Kalibrasi Waktu Audio (In-App Calibration Slider)
function openCalibrationModal() {
  let modal = document.getElementById('audioCalibModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'audioCalibModal';
    modal.className = 'audio-calib-modal-overlay';
    modal.innerHTML = `
      <div class="audio-calib-modal-card">
        <div class="calib-header">
          <h3>⏱️ Kalibrasi Waktu Karaoke</h3>
          <button id="btnCloseCalibModal" class="btn-calib-close">✕</button>
        </div>
        <p class="calib-desc">
          Geser jika sorotan kata terlalu mendahului atau tertinggal dari audio narator:
        </p>
        <div class="calib-slider-box">
          <input type="range" id="calibOffsetSlider" min="-1.5" max="1.5" step="0.05" value="${audioOffsetSec}">
          <div class="calib-val-row">
            <span id="calibValText">0.00 detik</span>
            <span id="calibStatusText">Sinkron Normal</span>
          </div>
        </div>
        <div class="calib-actions">
          <button id="btnCalibMinus" class="btn-calib-step">-0.1s</button>
          <button id="btnCalibReset" class="btn-calib-reset">Reset (0s)</button>
          <button id="btnCalibPlus" class="btn-calib-step">+0.1s</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const slider = modal.querySelector('#calibOffsetSlider');
    const valText = modal.querySelector('#calibValText');
    const statusText = modal.querySelector('#calibStatusText');
    const btnClose = modal.querySelector('#btnCloseCalibModal');
    const btnMinus = modal.querySelector('#btnCalibMinus');
    const btnPlus = modal.querySelector('#btnCalibPlus');
    const btnReset = modal.querySelector('#btnCalibReset');

    const updateSliderDisplay = (val) => {
      audioOffsetSec = parseFloat(val);
      localStorage.setItem('storybook_audio_offset', audioOffsetSec.toFixed(2));
      slider.value = audioOffsetSec;

      const sign = audioOffsetSec > 0 ? '+' : '';
      valText.textContent = `${sign}${audioOffsetSec.toFixed(2)} detik`;

      if (audioOffsetSec > 0.04) {
        statusText.textContent = '⚡ Sorotan Dipercepat';
        statusText.style.color = '#15803d';
      } else if (audioOffsetSec < -0.04) {
        statusText.textContent = '⏳ Sorotan Diperlambat';
        statusText.style.color = '#b91c1c';
      } else {
        statusText.textContent = '🎯 Sinkron Standar';
        statusText.style.color = 'var(--text-sub)';
      }
    };

    slider.oninput = (e) => updateSliderDisplay(e.target.value);
    btnMinus.onclick = () => updateSliderDisplay(Math.max(-1.5, audioOffsetSec - 0.1).toFixed(2));
    btnPlus.onclick = () => updateSliderDisplay(Math.min(1.5, audioOffsetSec + 0.1).toFixed(2));
    btnReset.onclick = () => updateSliderDisplay(0.0);
    btnClose.onclick = () => { modal.style.display = 'none'; };
    modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

    updateSliderDisplay(audioOffsetSec);
  }

  modal.style.display = 'flex';
}

// 13. KONTROL LAYAR PENUH
function toggleFullScreen() {
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

// 14. RESET RIWAYAT KUIS
if (btnResetHistory) {
  btnResetHistory.onclick = () => {
    if (confirm("Apakah kamu yakin ingin mereset seluruh catatan bintang dan nilai kuis?")) {
      localStorage.removeItem('storybook_quiz_history');
      renderHomeShelf(); alert("✨ Riwayat bintang kuis berhasil direset!");
    }
  };
}

// 15. FITUR PERALIHAN BAHASA & KECEPATAN TTS
function updateLangToggleUI() {
  if (!btnLangToggle) return;
  const isBilingual = currentStory && currentStory.pages && currentStory.pages.some(p => p.text_id && p.text);
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
    currentStoryLang = (currentStoryLang === 'en') ? 'id' : 'en';
    updateLangToggleUI();
    renderStoryPageContent(currentPage, isAutoPlay);
  };
}

if (btnSpeedToggle) {
  btnSpeedToggle.onclick = () => {
    ttsSpeed = (ttsSpeed >= 0.8) ? 0.55 : 0.85;
    updateSpeedToggleUI();
  };
}

// 16. BUKA CERITA & KEMBALI
function openStory(story) {
  currentStory = story; 
  currentPage = 0; 
  inQuizMode = false;
  
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

  if (story.defaultLang) {
    currentStoryLang = story.defaultLang;
  } else if (story.lang && story.lang.toLowerCase().startsWith('en')) {
    currentStoryLang = 'en';
  } else {
    currentStoryLang = 'id';
  }

  if (!document.fullscreenElement) {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) docElm.requestFullscreen().catch(() => {});
  }
  lockScreenOrientation(); 
  
  preloadStoryImages(story); 
  preloadStoryAudios(story);
  
  homeView.style.display = 'none'; 
  readerView.style.display = 'flex';
  bookStage.style.display = 'flex'; 
  navControls.style.display = 'flex'; 
  quizView.style.display = 'none';
  
  getAudioContext(); 
  populateVoices();
  ensureAudioControlsInTopBar();
  updateAutoPlayUI(); 
  updateLangToggleUI();
  updateSpeedToggleUI();
  updateKaraokeUI();
  updateAudioSourceUI();
  
  renderStoryPageContent(currentPage, isAutoPlay);
}

function returnToHome() {
  audioElement.pause(); 
  btnPageAudio.classList.remove('playing');
  stopKaraokeLoop();
  if (wordAudioTimeout) clearTimeout(wordAudioTimeout);
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  clearKaraokeHighlight();
  readerView.style.display = 'none'; 
  homeView.style.display = 'flex'; 
  currentStory = null; 
  renderHomeShelf();
}

if (btnBackHome) btnBackHome.onclick = returnToHome;
if (btnFinishToHome) btnFinishToHome.onclick = returnToHome;

// ================================================================
// 17. RENDER KONTEN BUKU (DILENGKAPI TIMESTAMPS & AKUSTIK SINKRON)
// ================================================================
function renderStoryPageContent(index, autoPlayAudio = false) {
  if (!currentStory || !currentStory.pages || !currentStory.pages[index]) return;
  const pageData = currentStory.pages[index];

  audioElement.pause(); 
  audioElement.currentTime = 0; 
  btnPageAudio.classList.remove('playing');
  stopKaraokeLoop();
  if (wordAudioTimeout) clearTimeout(wordAudioTimeout);
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  currentWordElements = [];
  wordTimingThresholds = [];
  rawWordTimestamps = null;

  storyImage.src = pageData.image;

  const activeAudio = (currentStoryLang === 'id' && pageData.audio_id) ? pageData.audio_id : pageData.audio;

  if (activeAudio) {
    audioElement.src = activeAudio; 
    audioElement.preload = 'auto';
    if (autoPlayAudio && isAutoPlay) {
      const playPromise = audioElement.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          btnPageAudio.classList.add('playing');
          if (isKaraokeEnabled) startKaraokeLoop();
        }).catch(() => {});
      }
    }
  } else {
    audioElement.removeAttribute('src');
  }

  const activeText = (currentStoryLang === 'id' && pageData.text_id) ? pageData.text_id : (pageData.text || '');

  textFlow.innerHTML = '';
  const words = activeText.split(/\s+/).filter(w => w.trim().length > 0);

  // 1. Cek ketersediaan Timestamps Eksplisit dari data buku cerita
  if (pageData.timestamps && Array.isArray(pageData.timestamps) && pageData.timestamps.length === words.length) {
    rawWordTimestamps = pageData.timestamps;
  } else {
    // 2. Estimasi Pembobotan Akustik Fonetik
    const wordWeights = words.map(w => {
      const clean = w.replace(/[^a-zA-Z0-9]/g, '');
      const vowelMatches = clean.match(/[aiueoAIUEO]/g);
      const vowelCount = vowelMatches ? vowelMatches.length : 1;
      
      let weight = Math.max(1.2, vowelCount * 1.5 + clean.length * 0.35);

      if (w.includes('...') || w.includes(':')) {
        weight += 2.8; 
      } else if (/[.!?]/.test(w)) {
        weight += 2.4; 
      } else if (/[,;]/.test(w)) {
        weight += 1.4; 
      }

      if (w.includes('-') && clean.length > 3) {
        weight += 1.2;
      }

      return weight;
    });

    const totalWeight = wordWeights.reduce((sum, wt) => sum + wt, 0);

    let cumulativeWeight = 0;
    wordTimingThresholds = wordWeights.map(wt => {
      cumulativeWeight += wt;
      return cumulativeWeight / (totalWeight || 1);
    });
  }

  // Render elemen kata interaktif
  words.forEach(word => {
    const cleanKey = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
    
    const wrapper = document.createElement('div');
    wrapper.className = 'word-wrapper';

    const span = document.createElement('span'); 
    span.className = 'clickable-word'; 
    span.textContent = word;
    
    currentWordElements.push(span);

    const hasTranslation = currentStoryLang === 'en' && pageData.vocab && pageData.vocab[cleanKey];

    span.onclick = () => {
      const wordIdx = currentWordElements.indexOf(span);
      handleWordPronunciation(word, wordIdx, span);

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

// 18. ANIMASI BALIK HALAMAN SINKRON
function turnPage(direction) {
  if (isFlipping) return;
  isFlipping = true;
  playPageTurnSound(); 
  stopKaraokeLoop();
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

// ================================================================
// 19. PEMUTAR POTONGAN DARI AUDIO MP3 NARASI ASLI (AUDIO SLICING)
// ================================================================
function playWordFromNarration(wordIndex, element) {
  if (!audioElement || !audioElement.duration || currentWordElements.length === 0) return false;

  if (wordAudioTimeout) clearTimeout(wordAudioTimeout);

  const duration = audioElement.duration;
  let startTime = 0;
  let endTime = 0;

  if (rawWordTimestamps && Array.isArray(rawWordTimestamps) && rawWordTimestamps.length === currentWordElements.length) {
    startTime = rawWordTimestamps[wordIndex];
    endTime = (wordIndex < rawWordTimestamps.length - 1) ? rawWordTimestamps[wordIndex + 1] : duration;
  } else {
    const leadIn = Math.min(0.25, duration * 0.04);
    const leadOut = Math.min(0.40, duration * 0.06);
    const effectiveDuration = Math.max(0.1, duration - leadIn - leadOut);

    const prevThreshold = wordIndex > 0 ? wordTimingThresholds[wordIndex - 1] : 0;
    const currentThreshold = wordTimingThresholds[wordIndex];

    startTime = leadIn + (prevThreshold * effectiveDuration);
    endTime = leadIn + (currentThreshold * effectiveDuration);
  }

  const wordDurationMs = Math.max(380, (endTime - startTime) * 1000 + 80);

  audioElement.currentTime = Math.max(0, startTime);
  audioElement.play().then(() => {
    btnPageAudio.classList.add('playing');

    document.querySelectorAll('.clickable-word.speaking').forEach(el => el.classList.remove('speaking'));
    if (element) element.classList.add('speaking');

    wordAudioTimeout = setTimeout(() => {
      audioElement.pause();
      btnPageAudio.classList.remove('playing');
      if (element) element.classList.remove('speaking');
    }, wordDurationMs);
  }).catch(() => {});

  return true;
}

// ================================================================
// 20. SUARA KATA (TTS DENGAN PENENTUAN BAHASA & SUARA AKURAT)
// ================================================================
function speakWord(word, element) {
  if (!('speechSynthesis' in window)) return;
  audioElement.pause(); 
  btnPageAudio.classList.remove('playing'); 
  stopKaraokeLoop();
  if (wordAudioTimeout) clearTimeout(wordAudioTimeout);
  window.speechSynthesis.cancel();
  clearKaraokeHighlight();

  document.querySelectorAll('.clickable-word.speaking').forEach(el => el.classList.remove('speaking'));

  const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
  if (!cleanWord) return;

  const utterance = new SpeechSynthesisUtterance(cleanWord);
  const targetLang = getActiveLanguage();

  utterance.lang = targetLang;
  utterance.rate = ttsSpeed;
  utterance.pitch = 1.0;

  const matchedVoice = getBestVoiceForLang(targetLang);
  if (matchedVoice) {
    utterance.voice = matchedVoice;
    utterance.lang = matchedVoice.lang;
  } else {
    utterance.lang = targetLang;
  }

  if (element) {
    element.classList.add('speaking');
    utterance.onend = () => element.classList.remove('speaking');
    utterance.onerror = () => element.classList.remove('speaking');
  }

  window.speechSynthesis.speak(utterance);
}

// ================================================================
// 21. DISPATCHER CERDAS: MENENTUKAN SUMBER SUARA KATA (AUTO / MP3 / TTS)
// ================================================================
function handleWordPronunciation(word, wordIndex, element) {
  if (wordAudioTimeout) clearTimeout(wordAudioTimeout);
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  clearKaraokeHighlight();

  const targetLang = getActiveLanguage();
  const hasIndonesianVoice = getBestVoiceForLang(targetLang) !== null;
  const hasPageAudio = audioElement && audioElement.src && audioElement.src.length > 0;

  let shouldUseMP3 = false;

  if (audioSourceMode === 'MP3') {
    shouldUseMP3 = hasPageAudio;
  } else if (audioSourceMode === 'TTS') {
    shouldUseMP3 = false;
  } else {
    if (targetLang.startsWith('id') && !hasIndonesianVoice && hasPageAudio) {
      shouldUseMP3 = true;
    } else {
      shouldUseMP3 = false;
    }
  }

  if (shouldUseMP3) {
    const success = playWordFromNarration(wordIndex, element);
    if (!success) {
      speakWord(word, element);
    }
  } else {
    speakWord(word, element);
  }
}

// ================================================================
// 22. SINKRONISASI KARAOKE 60 FPS (DILENGKAPI OFFSET & TIMESTAMPS)
// ================================================================
function updateKaraokeHighlight() {
  if (!isKaraokeEnabled) {
    clearKaraokeHighlight();
    return;
  }

  if (!audioElement || !audioElement.duration || currentWordElements.length === 0) return;

  const duration = audioElement.duration;
  const adjustedCurrentTime = Math.max(0, audioElement.currentTime + audioOffsetSec);

  let activeIndex = -1;

  if (rawWordTimestamps && Array.isArray(rawWordTimestamps) && rawWordTimestamps.length === currentWordElements.length) {
    for (let i = 0; i < rawWordTimestamps.length; i++) {
      if (adjustedCurrentTime >= rawWordTimestamps[i]) {
        activeIndex = i;
      } else {
        break;
      }
    }
  } else {
    const leadIn = Math.min(0.25, duration * 0.04);
    const leadOut = Math.min(0.40, duration * 0.06);
    const effectiveDuration = Math.max(0.1, duration - leadIn - leadOut);

    const progress = Math.max(0, Math.min(1, (adjustedCurrentTime - leadIn) / effectiveDuration));

    activeIndex = wordTimingThresholds.findIndex(threshold => progress <= threshold);
    if (activeIndex === -1 && progress > 0) {
      activeIndex = currentWordElements.length - 1;
    }
  }

  currentWordElements.forEach((span, idx) => {
    if (idx === activeIndex && !audioElement.paused && !audioElement.ended) {
      if (!span.classList.contains('karaoke-active')) {
        span.classList.add('karaoke-active');
      }
    } else {
      if (span.classList.contains('karaoke-active')) {
        span.classList.remove('karaoke-active');
      }
    }
  });
}

function startKaraokeLoop() {
  if (!isKaraokeEnabled) return;
  if (karaokeAnimId) cancelAnimationFrame(karaokeAnimId);
  function loop() {
    if (!audioElement.paused && !audioElement.ended && isKaraokeEnabled) {
      updateKaraokeHighlight();
      karaokeAnimId = requestAnimationFrame(loop);
    }
  }
  karaokeAnimId = requestAnimationFrame(loop);
}

function stopKaraokeLoop() {
  if (karaokeAnimId) {
    cancelAnimationFrame(karaokeAnimId);
    karaokeAnimId = null;
  }
}

btnPageAudio.onclick = () => {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (audioElement.paused) { 
    audioElement.play().then(() => {
      btnPageAudio.classList.add('playing');
      if (isKaraokeEnabled) startKaraokeLoop();
    }).catch(err => console.warn(err)); 
  } else { 
    audioElement.pause(); 
    btnPageAudio.classList.remove('playing'); 
    stopKaraokeLoop();
    clearKaraokeHighlight();
  }
};

audioElement.addEventListener('play', () => {
  if (isKaraokeEnabled) startKaraokeLoop();
});
audioElement.addEventListener('timeupdate', updateKaraokeHighlight);
audioElement.addEventListener('pause', () => {
  stopKaraokeLoop();
  clearKaraokeHighlight();
});
audioElement.addEventListener('ended', () => {
  stopKaraokeLoop();
  clearKaraokeHighlight();
  btnPageAudio.classList.remove('playing');
});

function clearKaraokeHighlight() {
  currentWordElements.forEach(span => span.classList.remove('karaoke-active'));
}

// 23. GESTURE SWIPE TOUCH
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
    else { alert("🎉 Selamat! Kamu telah membaca seluruh cerita!"); returnToHome(); }
  }
}

btnNext.onclick = handleNextAction;
btnPrev.onclick = () => { if (currentPage > 0) turnPage('prev'); };

// ================================================================
// 24. MESIN KUIS PEMAHAMAN (BANK SOAL & PILIHAN JAWABAN TERACAK)
// ================================================================

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function prepareRandomizedQuiz(story, maxQuestions = 4) {
  if (!story.quiz || !Array.isArray(story.quiz) || story.quiz.length === 0) return [];

  const shuffledPool = shuffleArray(story.quiz);
  const selectedPool = shuffledPool.slice(0, Math.min(maxQuestions, shuffledPool.length));

  return selectedPool.map(item => {
    const correctAnswerText = item.options[item.answer];
    const shuffledOptions = shuffleArray(item.options);
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswerText);

    return {
      q: item.q,
      options: shuffledOptions,
      answer: newCorrectIndex
    };
  });
}

function startQuiz() {
  inQuizMode = true; 
  currentQuizIndex = 0; 
  quizScore = 0; 
  correctCount = 0;

  activeQuizQuestions = prepareRandomizedQuiz(currentStory, QUIZ_QUESTION_COUNT);

  audioElement.pause(); 
  stopKaraokeLoop();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  clearKaraokeHighlight();

  bookStage.style.display = 'none'; 
  navControls.style.display = 'none'; 
  quizView.style.display = 'flex';
  quizQuestionBox.style.display = 'block'; 
  quizResult.style.display = 'none';

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qData = activeQuizQuestions[currentQuizIndex];
  quizStep.textContent = `${currentQuizIndex + 1}/${activeQuizQuestions.length}`;
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
  const pointsPerQuestion = 100 / activeQuizQuestions.length;

  if (selectedIdx === correctIdx) {
    playCorrectSound(); 
    btnElement.classList.add('correct'); 
    quizScore += pointsPerQuestion; 
    correctCount++;
  } else {
    playWrongSound(); 
    btnElement.classList.add('wrong'); 
    allOptButtons[correctIdx].classList.add('correct');
  }

  setTimeout(() => { 
    if (currentQuizIndex < activeQuizQuestions.length - 1) {
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
  const totalQuestions = activeQuizQuestions.length;
  playFanfareSound(); 
  resultScore.textContent = `${finalScore} Poin`;

  let stars = "⭐"; 
  let message = "Ayo kita baca lagi cerita ini bersama-sama agar lebih paham!";

  if (finalScore >= 90) { 
    stars = "⭐⭐⭐"; 
    message = "Luar biasa! Kamu menyimak seluruh cerita dan pesan moral dengan sempurna!"; 
    launchConfetti(); 
  } else if (finalScore >= 60) { 
    stars = "⭐⭐"; 
    message = "Bagus sekali! Sebagian besar pertanyaan berhasil kamu jawab dengan benar."; 
  }

  starsBox.textContent = stars;
  resultMsg.innerHTML = `<strong>${message}</strong><br><span style="font-size: 0.9rem; opacity: 0.8; display: inline-block; margin-top: 6px;">Jawaban Benar: ${correctCount} dari ${totalQuestions} Soal</span>`;

  const historyKey = 'storybook_quiz_history'; 
  const quizHistory = JSON.parse(localStorage.getItem(historyKey) || '{}');
  if (!quizHistory[currentStory.id] || finalScore >= quizHistory[currentStory.id].score) {
    quizHistory[currentStory.id] = { 
      score: finalScore, 
      stars: stars, 
      correctCount: correctCount, 
      total: totalQuestions, 
      savedAt: new Date().toLocaleDateString('id-ID') 
    };
    localStorage.setItem(historyKey, JSON.stringify(quizHistory));
  }
}

if (btnRestartStory) { 
  btnRestartStory.onclick = () => { 
    inQuizMode = false; 
    currentPage = 0; 
    quizView.style.display = 'none'; 
    bookStage.style.display = 'flex'; 
    navControls.style.display = 'flex'; 
    renderStoryPageContent(currentPage, isAutoPlay); 
  }; 
}

// 25. MODE MALAM
function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  if (btnThemeToggleHome) btnThemeToggleHome.textContent = isDark ? '☀️' : '🌙';
  if (btnThemeToggleReader) btnThemeToggleReader.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('storybook_theme', isDark ? 'dark' : 'light');
}

function toggleTheme() { applyTheme(!document.body.classList.contains('dark-mode')); }
if (btnThemeToggleHome) btnThemeToggleHome.onclick = toggleTheme;
if (btnThemeToggleReader) btnThemeToggleReader.onclick = toggleTheme;
if (localStorage.getItem('storybook_theme') === 'dark') { applyTheme(true); }

// 26. INDIKATOR JARINGAN
function updateNetworkStatus() {
  if (!networkStatus) return;
  const isOnline = navigator.onLine;
  networkStatus.className = `network-badge ${isOnline ? 'online' : 'offline'}`;
  const statusText = networkStatus.querySelector('.status-text');
  if (statusText) statusText.textContent = isOnline ? 'Online' : 'Offline';
}
window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);

// 27. PEMICU INSTALASI LANGSUNG (1-CLICK NATIVE PROMPT PURE)
let deferredPrompt = null;

if (pwaInstallBanner) pwaInstallBanner.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (pwaInstallBanner) pwaInstallBanner.style.display = 'flex';
});

async function executePwaInstall() {
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
    pwaInstallBanner.style.display = 'none'; 
  };
}

window.addEventListener('appinstalled', () => {
  if (pwaInstallBanner) pwaInstallBanner.style.display = 'none';
  deferredPrompt = null;
});

// 28. INISIALISASI
window.addEventListener('DOMContentLoaded', () => {
  renderHomeShelf();
  updateAutoPlayUI();
  updateNetworkStatus();
  updateKaraokeUI();
  ensureAudioControlsInTopBar();
  populateVoices();
});
