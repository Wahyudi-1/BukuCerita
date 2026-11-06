/**
 * ================================================================
 * MODUL BUKU INTERAKTIF BELAJAR MEMBACA BERTAHAP (PHONICS STORYBOOK)
 * ================================================================
 */

window.STORIES_DATABASE = window.STORIES_DATABASE || [];

window.STORIES_DATABASE.push({
  id: "tingkat1-apel-dan-balon-kiko",
  title: "Belajar Membaca: Petualangan Apel dan Balon Kiko",
  lang: "id-ID",
  category: "Fase Fondasi / Belajar Membaca",
  level: "Tingkat 1 (Suku Kata Terbuka - Fonik Dasar)",
  defaultLang: "id",
  cover: "./images/kiko-a-ba/ki01_compressed.jpg",
  description: "Latihan membaca awal dengan drill kombinasi vokal 'a' dan konsonan 'b' bertahap bersama Kiko di kebun apel.",

  highlightTheme: {
    bg: "linear-gradient(135deg, #fef08a, #38bdf8)",
    text: "#0f172a",
    border: "#0284c7",
    shadow: "rgba(2, 132, 199, 0.4)"
  },

  pages: [
    {
      page: 1,
      targetSound: "a",
      drillRows: [
        "a... a...",
        "a... a... a...",
        "a... a..."
      ],
      text: "a... a... a... a... a... a... a... Kiko membuka pagar kebun.",
      image: "./images/kiko-a-ba/ki01_compressed.jpg",
      audio: "./audio/kiko-a-ba/ki01.mp3"
    },
    {
      page: 2,
      targetSound: "ba",
      drillRows: [
        "ba... ba...",
        "ba... ba... ba...",
        "ba... ba..."
      ],
      text: "ba... ba... ba... ba... ba... ba... ba... Ada balon merah terbang tinggi.",
      image: "./images/kiko-a-ba/ki02_compressed.jpg",
      audio: "./audio/kiko-a-ba/ki02.mp3"
    },
    {
      page: 3,
      targetSound: "a - ba",
      drillRows: [
        "a... ba...",
        "ba... a...",
        "a... ba..."
      ],
      text: "a... ba... ba... a... a... ba... Balon merah hinggap di dahan.",
      image: "./images/kiko-a-ba/ki03_compressed.jpg",
      audio: "./audio/kiko-a-ba/ki03.mp3"
    },
    {
      page: 4,
      targetSound: "ba - a (ganda)",
      drillRows: [
        "ba... ba...",
        "ba... a...",
        "a... ba... ba..."
      ],
      text: "ba... ba... ba... a... a... ba... ba... Kiko melihat buah apel manis.",
      image: "./images/kiko-a-ba/ki04_compressed.jpg",
      audio: "./audio/kiko-a-ba/ki04.mp3"
    },
    {
      page: 5,
      targetSound: "a - ba (variasi panjang)",
      drillRows: [
        "a... ba... a...",
        "ba... a... ba...",
        "ba... ba... a..."
      ],
      text: "a... ba... a... ba... a... ba... ba... ba... a... Kiko membawa apel dan balon.",
      image: "./images/kiko-a-ba/ki05_compressed.jpg",
      audio: "./audio/kiko-a-ba/ki05.mp3"
    },
    {
      page: 6,
      targetSound: "evaluasi lancar",
      drillRows: [
        "ba... ba...",
        "a... ba...",
        "ba... a..."
      ],
      text: "ba... ba... a... ba... ba... a... Hore! Aku bisa baca a dan ba!",
      image: "./images/kiko-a-ba/ki06_compressed.jpg",
      audio: "./audio/kiko-a-ba/ki06.mp3"
    }
  ],

  // KUIS EVALUASI MEMBACA FONIK
  quiz: [
    {
      q: "Huruf pertama yang dipelajari Kiko saat membuka pagar kebun adalah...",
      options: [
        "Huruf a",
        "Huruf b",
        "Huruf c"
      ],
      answer: 0
    },
    {
      q: "Benda merah yang terbang tinggi berbunyi 'ba... ba...' adalah...",
      options: [
        "Batu",
        "Balon",
        "Baju"
      ],
      answer: 1
    },
    {
      q: "Bagaimana cara membaca gabungan suku kata 'b' dan 'a'?",
      options: [
        "ba",
        "ab",
        "bb"
      ],
      answer: 0
    },
    {
      q: "Jika huruf 'a' bertemu dengan 'ba', dibaca menjadi...",
      options: [
        "ba... ba...",
        "a... ba...",
        "ba... a..."
      ],
      answer: 1
    },
    {
      q: "Jika 'ba' bertemu dengan huruf 'a', dibaca menjadi...",
      options: [
        "ba... a...",
        "a... a...",
        "ba... ba..."
      ],
      answer: 0
    }
  ]
});
