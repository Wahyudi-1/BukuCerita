/**
 * ================================================================
 * MODUL BUKU INTERAKTIF BELAJAR MEMBACA BERTAHAP (PHONICS STORYBOOK)
 * ================================================================
 */

window.STORIES_DATABASE = window.STORIES_DATABASE || [];

window.STORIES_DATABASE.push({
  id: "tingkat1-mimi-dan-mangga-manis",
  title: "Belajar Membaca: Mimi dan Mangga Manis di Kebun",
  lang: "id-ID",
  category: "Fase Fondasi / Belajar Membaca",
  level: "Tingkat 1 (Suku Kata Terbuka - Fonik Dasar)",
  defaultLang: "id",
  cover: "./images/mimi-ma-mi/micover_compressed.jpg",
  description: "Latihan membaca awal dengan drill kombinasi vokal 'a', 'i' dan konsonan 'm' bertahap bersama Mimi di kebun mangga.",

  highlightTheme: {
    bg: "linear-gradient(135deg, #fef08a, #f472b6)",
    text: "#0f172a",
    border: "#db2777",
    shadow: "rgba(219, 39, 119, 0.4)"
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
      text: "a... a... i... i... a... i... a... Mimi masuk ke kebun kakek.",
      image: "./images/mimi-ma-mi/mi01_compressed.jpg",
      audio: "./audio/mimi-ma-mi/mi01.mp3"
    },
    {
      page: 2,
      targetSound: "ma",
      drillRows: [
        "ma... ma...",
        "ma... ma... ma...",
        "ma... ma..."
      ],
      text: "ma... ma... ma... ma... ma... ma... ma... Mimi melihat mangga besar di pohon.",
      image: "./images/mimi-ma-mi/mi02_compressed.jpg",
      audio: "./audio/mimi-ma-mi/mi02.mp3"
    },
    {
      page: 3,
      targetSound: "mi",
      drillRows: [
        "mi... mi...",
        "mi... mi... mi...",
        "mi... mi..."
      ],
      text: "mi... mi... mi... mi... mi... mi... mi... Ada Mimi yang manis di sini.",
      image: "./images/mimi-ma-mi/mi03_compressed.jpg",
      audio: "./audio/mimi-ma-mi/mi03.mp3"
    },
    {
      page: 4,
      targetSound: "ma - mi",
      drillRows: [
        "ma... mi...",
        "mi... ma...",
        "ma... mi... ma..."
      ],
      text: "ma... mi... mi... ma... ma... mi... ma... Mimi mau mangga yang merah.",
      image: "./images/mimi-ma-mi/mi04_compressed.jpg",
      audio: "./audio/mimi-ma-mi/mi04.mp3"
    },
    {
      page: 5,
      targetSound: "ma - mi (ganda)",
      drillRows: [
        "ma... ma...",
        "mi... mi...",
        "ma... ma... mi... mi..."
      ],
      text: "ma... ma... mi... mi... ma... ma... mi... mi... Ibu membawa madu yang manis.",
      image: "./images/mimi-ma-mi/mi05_compressed.jpg",
      audio: "./audio/mimi-ma-mi/mi05.mp3"
    },
    {
      page: 6,
      targetSound: "evaluasi lancar",
      drillRows: [
        "ma... mi...",
        "mi... ma...",
        "ma... ma... mi... mi..."
      ],
      text: "ma... mi... mi... ma... ma... ma... mi... mi... Hore! Aku suka ma dan mi!",
      image: "./images/mimi-ma-mi/mi06_compressed.jpg",
      audio: "./audio/mimi-ma-mi/mi06.mp3"
    }
  ],

  // KUIS EVALUASI MEMBACA FONIK
  quiz: [
    {
      q: "Siapa nama anak perempuan lucu yang pergi ke kebun kakek?",
      options: [
        "Mimi",
        "Kiko",
        "Bobi"
      ],
      answer: 0
    },
    {
      q: "Buah besar di pohon yang dilihat Mimi berbunyi 'ma... ma...' adalah...",
      options: [
        "Madu",
        "Melon",
        "Mangga"
      ],
      answer: 2
    },
    {
      q: "Bagaimana suara yang dihasilkan ketika huruf 'm' bertemu dengan 'i'?",
      options: [
        "ma",
        "mi",
        "mu"
      ],
      answer: 1
    },
    {
      q: "Jika gabungan suara 'ma' bertemu dengan 'mi', maka dibaca...",
      options: [
        "mi... ma...",
        "ma... mi...",
        "ma... ma..."
      ],
      answer: 1
    },
    {
      q: "Camilan manis dan alami yang dibawa Ibu di kebun adalah...",
      options: [
        "Mangga",
        "Madu",
        "Martabak"
      ],
      answer: 1
    }
  ]
});
