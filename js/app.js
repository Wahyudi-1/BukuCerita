/**
 * ================================================================
 * APP.JS - MESIN UTAMA BUKU CERITA INTERAKTIF (READER & PERPUSTAKAAN)
 * ================================================================
 */

// 1. STATE MANAGER (Penyimpan Kondisi Aplikasi)
let currentStory = null;
let currentPage = 0;
let isFlipping = false;
let inQuizMode = false;
let currentQuizIndex = 0;
let quizScore = 0;

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

// 3. EFEK AUDIO BALIK LEMBARAN KERTAS (Web Audio API - 100% Offline)
function playPageTurnSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
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

    noise.connect(filter);
    filter.connect(ctx.destination);
    noise.start();
  } catch (e) {
    // Abaikan jika browser membatasi autoplay audio context
  }
}

// 4. MEMUAT & MENAMPILKAN RAK BERANDA DENGAN PENGAMAN DATA
function renderHomeShelf() {
  if (!storiesGrid) return;
  storiesGrid.innerHTML = '';

  // Ambil data cerita dari variabel global window
  const listCerita = window.STORIES_DATABASE || [];

  // Jika data cerita belum siap/kosong
  if (listCerita.length === 0) {
    storiesGrid.innerHTML = `
      <div style="text-align: center; padding: 40px 15px; color: var(--text-sub);">
        <p style="font-size: 1.15rem; font-weight: 800; margin-bottom: 8px;">Memuat Koleksi Buku... 📚</p>
        <p style="font-size: 0.85rem; line-height: 1.5;">
          Jika tidak kunjung muncul, pastikan baris <code>&lt;script src="js/stories/arka.js"&gt;&lt;/script&gt;</code> sudah terpasang di <code>index.html</code>.
        </p>
      </div>
    `;
    return;
  }

  // Render kartu buku
  listCerita.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card-item';
    card.innerHTML = `
      <img class="story-cover-thumb" 
           src="${story.cover || './images/arka/01.jpg'}" 
           alt="${story.title}" 
           onerror="this.src='https://placehold.co/100x130/58cc02/ffffff?text=Buku';">
      <div class="story-info">
        <span class="story-badge">${story.category || 'Cerita Anak'}</span>
        <div class="story-title">${story.title}</div>
        <div class="story-desc">${story.description || ''}</div>
      </div>
    `;
    card.onclick = () => openStory(story);
    storiesGrid.appendChild(card);
  });
}

// 5. BUKA BUKU & KEMBALI KE BERANDA
function openStory(story) {
  currentStory = story;
  currentPage = 0;
  inQuizMode = false;

  homeView.style.display = 'none';
  readerView.style.display = 'flex';
  bookStage.style.display = 'flex';
  navControls.style.display = 'flex';
  quizView.style.display = 'none';

  renderStoryPage(currentPage);
}

function returnToHome() {
  audioElement.pause();
  btnPageAudio.classList.remove('playing');
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  readerView.style.display = 'none';
  homeView.style.display = 'flex';
  currentStory = null;

  // Segarkan ulang rak untuk memastikan status terbaru
  renderHomeShelf();
}

if (btnBackHome) btnBackHome.onclick = returnToHome;
if (btnFinishToHome) btnFinishToHome.onclick = returnToHome;

// 6. RENDER HALAMAN CERITA
function renderStoryPage(index) {
  if (!currentStory || !currentStory.pages || !currentStory.pages[index]) return;
  const pageData = currentStory.pages[index];

  // Matikan suara sebelumnya
  audioElement.pause();
  btnPageAudio.classList.remove('playing');
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  // Set gambar & file audio
  storyImage.src = pageData.image;
  audioElement.src = pageData.audio || '';

  // Render teks perkata interaktif
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

// 7. ANIMASI 3D BALIK HALAMAN
function turnPage(direction) {
  if (isFlipping) return;
  isFlipping = true;

  audioElement.pause();
  btnPageAudio.classList.remove('playing');
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  playPageTurnSound();

  const outClass = (direction === 'next') ? 'flipping-out-next' : 'flipping-out-prev';
  const inClass = (direction === 'next') ? 'flipping-in-next' : 'flipping-in-prev';

  pageSheet.classList.add(outClass);

  setTimeout(() => {
    if (direction === 'next') {
      currentPage++;
    } else {
      currentPage--;
    }
    renderStoryPage(currentPage);

    pageSheet.classList.remove(outClass);
    pageSheet.classList.add(inClass);

    setTimeout(() => {
      pageSheet.classList.remove(inClass);
      isFlipping = false;
    }, 400);
  }, 380);
}

// 8. SUARA PER KATA (Text-to-Speech Web Speech API)
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

// 9. KONTROL AUDIO UTUH 1 HALAMAN
btnPageAudio.onclick = () => {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  if (audioElement.paused) {
    audioElement.play().then(() => {
      btnPageAudio.classList.add('playing');
    }).catch(err => {
      console.warn("File audio belum disematkan atau path belum sesuai:", err);
    });
  } else {
    audioElement.pause();
    btnPageAudio.classList.remove('playing');
  }
};

audioElement.onended = () => {
  btnPageAudio.classList.remove('playing');
};

// 10. GESTURE USAP LAYAR (Swipe Touch)
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

  // Cek apakah gerakan geser horizontal lebih dari 50px
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
    if (diffX < 0) {
      // Geser kiri -> halaman selanjutnya
      handleNextAction();
    } else {
      // Geser kanan -> halaman sebelumnya
      if (currentPage > 0) turnPage('prev');
    }
  }
}, { passive: true });

// 11. SISTEM KUIS PEMAHAMAN BACAAN
function handleNextAction() {
  if (currentPage < currentStory.pages.length - 1) {
    turnPage('next');
  } else {
    if (currentStory.quiz && currentStory.quiz.length > 0) {
      startQuiz();
    } else {
      alert("🎉 Selamat! Kamu telah menyelesaikan membaca cerita ini!");
      returnToHome();
    }
  }
}

btnNext.onclick = handleNextAction;
btnPrev.onclick = () => {
  if (currentPage > 0) turnPage('prev');
};

function startQuiz() {
  inQuizMode = true;
  currentQuizIndex = 0;
  quizScore = 0;

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
    btnElement.classList.add('correct');
    quizScore += pointsPerQuestion;
  } else {
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
  resultScore.textContent = `${finalScore} Poin`;

  if (finalScore >= 90) {
    starsBox.textContent = "⭐⭐⭐";
    resultMsg.textContent = "Luar biasa! Kamu memahami seluruh cerita dengan sangat baik!";
  } else if (finalScore >= 60) {
    starsBox.textContent = "⭐⭐";
    resultMsg.textContent = "Bagus sekali! Sebagian besar pertanyaan berhasil kamu jawab.";
  } else {
    starsBox.textContent = "⭐";
    resultMsg.textContent = "Tetap semangat! Ayo kita baca kembali cerita ini bersama-sama.";
  }
}

if (btnRestartStory) {
  btnRestartStory.onclick = () => {
    inQuizMode = false;
    currentPage = 0;
    quizView.style.display = 'none';
    bookStage.style.display = 'flex';
    navControls.style.display = 'flex';
    renderStoryPage(currentPage);
  };
}

// 12. MODE MALAM / GELAP DENGAN PENYIMPANAN LOCALSTORAGE
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

// 13. INISIALISASI AWAL (Menjamin Data Selesai Terbaca)
window.addEventListener('DOMContentLoaded', () => {
  renderHomeShelf();
});

// Cadangan: Muat langsung jika DOMContentLoaded telah lewat
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  renderHomeShelf();
}
