/**
 * ================================================================
 * MODUL BUKU INTERAKTIF BELAJAR MEMBACA BERTAHAP (PHONICS STORYBOOK)
 * ================================================================
 */

window.STORIES_DATABASE = window.STORIES_DATABASE || [];

window.STORIES_DATABASE.push({
  id: "tingkat1-dodi-dan-dadu-kayu",
  title: "Belajar Membaca: Dodi dan Dadu Kayu",
  lang: "id-ID",
  category: "Fase Fondasi / Belajar Membaca",
  level: "Tingkat 1 (Suku Kata Terbuka - Fonik Dasar)",
  defaultLang: "id",
  cover: "./images/dodi-da-du/do01_compressed.jpg",
  description: "Latihan membaca awal dengan drill kombinasi vokal 'a', 'u' dan konsonan 'd' bertahap bersama Dodi di ruang bermain.",

  highlightTheme: {
    bg: "linear-gradient(135deg, #bbf7d0, #fdba74)",
    text: "#0f172a",
    border: "#15803d",
    shadow: "rgba(21, 128, 61, 0.4)"
  },

  pages: [
    {
      page: 1,
      targetSound: "a - u",
      drillRows: [
        "a... a...",
        "u... u...",
        "a... u... a..."
      ],
      text: "a... a... u... u... a... u... a... Dodi masuk ke ruang bermain.",
      image: "./images/dodi-da-du/do01_compressed.jpg",
      audio: "./audio/dodi-da-du/do01.mp3"
    },
    {
      page: 2,
      targetSound: "da",
      drillRows: [
        "da... da...",
        "da... da... da...",
        "da... da..."
      ],
      text: "da... da... da... da... da... da... da... Dodi melihat dadu besar dari kayu.",
      image: "./images/dodi-da-du/do02_compressed.jpg",
      audio: "./audio/dodi-da-du/do02.mp3"
    },
    {
      page: 3,
      targetSound: "du",
      drillRows: [
        "du... du...",
        "du... du... du...",
        "du... du..."
      ],
      text: "du... du... du... du... du... du... du... Ada dua dadu di dekat Dodi.",
      image: "./images/dodi-da-du/do03_compressed.jpg",
      audio: "./audio/dodi-da-du/do03.mp3"
    },
    {
      page: 4,
      targetSound: "da - du",
      drillRows: [
        "da... du...",
        "du... da...",
        "da... du... da..."
      ],
      text: "da... du... du... da... da... du... da... Dodi mau dadu yang baru.",
      image: "./images/dodi-da-du/do04_compressed.jpg",
      audio: "./audio/dodi-da-du/do04.mp3"
    },
    {
      page: 5,
      targetSound: "da - du (ganda)",
      drillRows: [
        "da... da...",
        "du... du...",
        "da... da... du... du..."
      ],
      text: "da... da... du... du... da... da... du... du... Ibu membawa dadu dari kayu.",
      image: "./images/dodi-da-du/do05_compressed.jpg",
      audio: "./audio/dodi-da-du/do05.mp3"
    },
    {
      page: 6,
      targetSound: "evaluasi lancar",
      drillRows: [
        "da... du...",
        "du... da...",
        "da... da... du... du..."
      ],
      text: "da... du... du... da... da... da... du... du... Hore! Aku suka da dan du!",
      image: "./images/dodi-da-du/do06_compressed.jpg",
      audio: "./audio/dodi-da-du/do06.mp3"
    }
  ],

  // KUIS EVALUASI MEMBACA FONIK
  quiz: [
    {
      q: "Siapa nama anak laki-laki yang pergi ke ruang bermain?",
      options: [
        "Dodi",
        "Kiko",
        "Mimi"
      ],
      answer: 0
    },
    {
      q: "Mainan besar dari kayu yang dilihat Dodi berbunyi 'da... da...' adalah...",
      options: [
        "Daun",
        "Dadu",
        "Darat"
      ],
      answer: 1
    },
    {
      q: "Bagaimana suara yang dihasilkan ketika huruf 'd' bertemu dengan 'u'?",
      options: [
        "da",
        "di",
        "du"
      ],
      answer: 2
    },
    {
      q: "Jika gabungan suara 'da' bertemu dengan 'du', maka dibaca...",
      options: [
        "du... da...",
        "da... du...",
        "da... da..."
      ],
      answer: 1
    },
    {
      q: "Bahan apa yang digunakan untuk membuat dadu yang dibawa oleh Ibu?",
      options: [
        "Plastik",
        "Besi",
        "Kayu"
      ],
      answer: 2
    }
  ]
});
