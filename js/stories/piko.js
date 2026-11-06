/**
 * ================================================================
 * MODUL BUKU INTERAKTIF BELAJAR MEMBACA BERTAHAP (PHONICS STORYBOOK)
 * ================================================================
 */

window.STORIES_DATABASE = window.STORIES_DATABASE || [];

window.STORIES_DATABASE.push({
  id: "tingkat1-piko-punya-payung-putih",
  title: "Belajar Membaca: Piko Punya Payung Putih",
  lang: "id-ID",
  category: "Fase Fondasi / Belajar Membaca",
  level: "Tingkat 1 (Suku Kata Terbuka - Fonik Dasar)",
  defaultLang: "id",
  cover: "./images/piko-pa-pi/pi01_compressed.jpg",
  description: "Latihan membaca awal dengan drill kombinasi vokal 'a', 'i' dan konsonan 'p' bertahap bersama Piko di teras kebun saat hujan cerah.",

  highlightTheme: {
    bg: "linear-gradient(135deg, #a7f3d0, #e9d5ff)",
    text: "#0f172a",
    border: "#9333ea",
    shadow: "rgba(147, 51, 234, 0.4)"
  },

  pages: [
    {
      page: 1,
      targetSound: "a - i",
      drillRows: [
        "a... a...",
        "i... i...",
        "a... i... a..."
      ],
      text: "a... a... i... i... a... i... a... Piko berdiri di teras rumah.",
      image: "./images/piko-pa-pi/pi01_compressed.jpg",
      audio: "./audio/piko-pa-pi/pi01.mp3"
    },
    {
      page: 2,
      targetSound: "pa",
      drillRows: [
        "pa... pa...",
        "pa... pa... pa...",
        "pa... pa..."
      ],
      text: "pa... pa... pa... pa... pa... pa... pa... Piko bawa payung putih bersih.",
      image: "./images/piko-pa-pi/pi02_compressed.jpg",
      audio: "./audio/piko-pa-pi/pi02.mp3"
    },
    {
      page: 3,
      targetSound: "pi",
      drillRows: [
        "pi... pi...",
        "pi... pi... pi...",
        "pi... pi..."
      ],
      text: "pi... pi... pi... pi... pi... pi... pi... Pipi Piko merah merona.",
      image: "./images/piko-pa-pi/pi03_compressed.jpg",
      audio: "./audio/piko-pa-pi/pi03.mp3"
    },
    {
      page: 4,
      targetSound: "pa - pi",
      drillRows: [
        "pa... pi...",
        "pi... pa...",
        "pa... pi... pa..."
      ],
      text: "pa... pi... pi... pa... pa... pi... pa... Piko pakai payung putih.",
      image: "./images/piko-pa-pi/pi04_compressed.jpg",
      audio: "./audio/piko-pa-pi/pi04.mp3"
    },
    {
      page: 5,
      targetSound: "pa - pi (ganda)",
      drillRows: [
        "pa... pa...",
        "pi... pi...",
        "pa... pa... pi... pi..."
      ],
      text: "pa... pa... pi... pi... pa... pa... pi... pi... Papa memuji payung Piko.",
      image: "./images/piko-pa-pi/pi05_compressed.jpg",
      audio: "./audio/piko-pa-pi/pi05.mp3"
    },
    {
      page: 6,
      targetSound: "evaluasi lancar",
      drillRows: [
        "pa... pi...",
        "pi... pa...",
        "pa... pa... pi... pi..."
      ],
      text: "pa... pi... pi... pa... pa... pa... pi... pi... Hore! Piko pintar baca pa dan pi!",
      image: "./images/piko-pa-pi/pi06_compressed.jpg",
      audio: "./audio/piko-pa-pi/pi06.mp3"
    }
  ],

  // KUIS EVALUASI MEMBACA FONIK
  quiz: [
    {
      q: "Siapa nama anak laki-laki lucu yang membawa payung putih?",
      options: [
        "Piko",
        "Kiko",
        "Dodi"
      ],
      answer: 0
    },
    {
      q: "Benda berawalan bunyi 'pa... pa...' yang dibawa Piko adalah...",
      options: [
        "Palu",
        "Payung",
        "Panci"
      ],
      answer: 1
    },
    {
      q: "Bagian wajah Piko yang berwarna merah merona berawalan bunyi 'pi... pi...' adalah...",
      options: [
        "Pita",
        "Pintu",
        "Pipi"
      ],
      answer: 2
    },
    {
      q: "Jika bunyi 'pa' digabungkan dengan bunyi 'pi', maka dibaca...",
      options: [
        "pi... pa...",
        "pa... pi...",
        "pa... pa..."
      ],
      answer: 1
    },
    {
      q: "Siapakah yang merasa bangga dan memuji payung putih milik Piko?",
      options: [
        "Paman",
        "Papa",
        "Petani"
      ],
      answer: 1
    }
  ]
});
