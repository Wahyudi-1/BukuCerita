/**
 * ================================================================
 * TEMPLATE BUKU CERITA MODULAR (DWIPROGRAM / BILINGUAL READY)
 * ================================================================
 * Petunjuk:
 * 1. Duplikasi berkas ini dan beri nama sesuai judul cerita (contoh: giska-pelangi-sayur.js).
 * 2. Sesuaikan 'id', 'title', dan jalur berkas media gambar serta audio.
 * 3. Daftarkan skrip baru ini di file 'index.html' sebelum 'app.js'.
 * 4. Tambahkan jalur berkas cerita ini ke 'CORE_ASSETS' di 'sw.js' untuk mode offline.
 */

window.STORIES_DATABASE = window.STORIES_DATABASE || [];

window.STORIES_DATABASE.push({
  // ID unik cerita (gunakan huruf kecil tanpa spasi, pisahkan dengan strip)
  id: "giska-dan-pelangi-sayur",
  
  // Judul cerita yang tampil di rak beranda dan header
  title: "Giska dan Pelangi Sayur (Giska and the Veggie Rainbow)",
  
  // Kategori atau Fase Kurikulum
  category: "Fase Fondasi / TK B",
  
  // Bahasa bawaan saat pertama dibuka: 'id' (Indonesia) atau 'en' (Inggris)
  defaultLang: "id",
  
  // Sampul buku untuk rak beranda
  cover: "./images/giska-pelangi-sayur/gis01_compressed.jpg",
  
  // Sinopsis singkat cerita
  description: "Ikuti petualangan ceria Giska mengenal manfaat aneka sayur warna-warni di kebun belakang rumah agar tubuh tumbuh sehat, kuat, dan cerdas!",

  // TEMA WARNA HIGHLIGHT (Disesuaikan dengan cerita)
  highlightTheme: {
    bg: "linear-gradient(135deg, #bbf7d0, #86efac)", // Hijau daun muda
    text: "#14532d",                                  // Teks hijau tua
    border: "#22c55e",                                // Garis bawah hijau
    shadow: "rgba(34, 197, 94, 0.65)"                // Kilau neon hijau
  },

  // DAFTAR HALAMAN CERITA (16 HALAMAN LENGKAP)
  pages: [
    {
      page: 1,
      text: "Good morning! Giska walks happily into the kitchen and smells Mama's delicious cooking.",
      text_id: "Selamat pagi! Giska masuk ke dapur dengan riang dan mencium aroma masakan Ibu yang harum.",
      image: "./images/giska-pelangi-sayur/gis01_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis01.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis01_id.mp3",
      vocab: {
        "morning": "pagi",
        "walks": "berjalan",
        "happily": "dengan riang",
        "kitchen": "dapur",
        "smells": "mencium aroma",
        "delicious": "lezat",
        "cooking": "masakan"
      }
    },
    {
      page: 2,
      text: "On the table sits a bowl of colorful vegetables. Giska wonders why they have such pretty colors.",
      text_id: "Di atas meja ada mangkuk berisi aneka sayur warna-warni. Giska bertanya-tanya, mengapa warnanya cantik sekali?",
      image: "./images/giska-pelangi-sayur/gis02_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis02.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis02_id.mp3",
      vocab: {
        "table": "meja",
        "bowl": "mangkuk",
        "colorful": "warna-warni",
        "vegetables": "sayuran",
        "wonders": "bertanya-tanya",
        "pretty": "cantik",
        "colors": "warna"
      }
    },
    {
      page: 3,
      text: "Mama invites Giska to the backyard garden. Let's meet the healthy Veggie Rainbow!",
      text_id: "Ibu mengajak Giska ke kebun belakang rumah. Ayo kita kenalan dengan Pelangi Sayur yang menyehatkan!",
      image: "./images/giska-pelangi-sayur/gis03_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis03.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis03_id.mp3",
      vocab: {
        "invites": "mengajak",
        "backyard": "halaman belakang",
        "garden": "kebun",
        "meet": "bertemu / kenalan",
        "healthy": "sehat",
        "veggie": "sayur",
        "rainbow": "pelangi"
      }
    },
    {
      page: 4,
      text: "First is a fresh red tomato! Red vegetables keep Giska's heart strong when she runs.",
      text_id: "Pertama ada tomat merah yang segar! Sayur merah menjaga jantung Giska tetap kuat saat berlari.",
      image: "./images/giska-pelangi-sayur/gis04_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis04.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis04_id.mp3",
      vocab: {
        "first": "pertama",
        "fresh": "segar",
        "red": "merah",
        "tomato": "tomat",
        "heart": "jantung",
        "strong": "kuat",
        "runs": "berlari"
      }
    },
    {
      page: 5,
      text: "Second is a crunchy orange carrot! Orange vegetables keep Giska's eyes healthy and bright.",
      text_id: "Kedua ada wortel oranye yang renyah! Sayur oranye membuat mata Giska sehat dan cerah.",
      image: "./images/giska-pelangi-sayur/gis05_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis05.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis05_id.mp3",
      vocab: {
        "second": "kedua",
        "crunchy": "renyah",
        "orange": "oranye",
        "carrot": "wortel",
        "eyes": "mata",
        "healthy": "sehat",
        "bright": "cerah"
      }
    },
    {
      page: 6,
      text: "Third is sweet yellow corn! Yellow vegetables give Giska energy to play all day.",
      text_id: "Ketiga ada jagung kuning yang manis! Sayur kuning memberi energi agar Giska semangat bermain.",
      image: "./images/giska-pelangi-sayur/gis06_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis06.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis06_id.mp3",
      vocab: {
        "third": "ketiga",
        "sweet": "manis",
        "yellow": "kuning",
        "corn": "jagung",
        "energy": "energi / tenaga",
        "play": "bermain"
      }
    },
    {
      page: 7,
      text: "Fourth are green spinach and broccoli! Green vegetables help Giska's muscles and bones grow strong.",
      text_id: "Keempat ada bayam dan brokoli hijau! Sayur hijau membuat otot dan tulang Giska tumbuh kuat.",
      image: "./images/giska-pelangi-sayur/gis07_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis07.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis07_id.mp3",
      vocab: {
        "fourth": "keempat",
        "green": "hijau",
        "spinach": "bayam",
        "broccoli": "brokoli",
        "muscles": "otot",
        "bones": "tulang",
        "grow": "tumbuh"
      }
    },
    {
      page: 8,
      text: "Fifth is a shiny purple eggplant! Purple vegetables help Giska's brain stay smart when learning.",
      text_id: "Kelima ada terong ungu yang mengilap! Sayur ungu membantu otak Giska cerdas saat belajar.",
      image: "./images/giska-pelangi-sayur/gis08_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis08.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis08_id.mp3",
      vocab: {
        "fifth": "kelima",
        "shiny": "mengilap",
        "purple": "ungu",
        "eggplant": "terong",
        "brain": "otak",
        "smart": "cerdas",
        "learning": "belajar"
      }
    },
    {
      page: 9,
      text: "Hooray! Giska's basket is now full of the Veggie Rainbow: red, orange, yellow, green, and purple.",
      text_id: "Hore! Tas keranjang Giska kini penuh dengan Pelangi Sayur: merah, oranye, kuning, hijau, dan ungu.",
      image: "./images/giska-pelangi-sayur/gis09_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis09.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis09_id.mp3",
      vocab: {
        "hooray": "hore",
        "basket": "keranjang",
        "full": "penuh",
        "rainbow": "pelangi",
        "purple": "ungu"
      }
    },
    {
      page: 10,
      text: "Back in the kitchen, Giska washes all the vegetables with clean water until they sparkle.",
      text_id: "Sampai di dapur, Giska mencuci semua sayuran dengan air bersih hingga segar berkilau.",
      image: "./images/giska-pelangi-sayur/gis10_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis10.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis10_id.mp3",
      vocab: {
        "washes": "mencuci",
        "clean": "bersih",
        "water": "air",
        "sparkle": "berkilau"
      }
    },
    {
      page: 11,
      text: "Mama chops the vegetables and cooks a warm Rainbow Soup. Giska happily helps along.",
      text_id: "Ibu memotong sayuran dan memasak Sup Pelangi yang hangat. Giska ikut membantu dengan gembira.",
      image: "./images/giska-pelangi-sayur/gis11_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis11.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis11_id.mp3",
      vocab: {
        "chops": "memotong",
        "cooks": "memasak",
        "warm": "hangat",
        "soup": "sup",
        "helps": "membantu"
      }
    },
    {
      page: 12,
      text: "Mmm, it smells so good! Warm steam from the Rainbow Soup rises above Giska's bowl.",
      text_id: "Mmm, harum sekali! Uap hangat Sup Pelangi mengepul di atas mangkuk Giska.",
      image: "./images/giska-pelangi-sayur/gis12_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis12.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis12_id.mp3",
      vocab: {
        "smells": "tercium baunya",
        "good": "enak / harum",
        "steam": "uap",
        "rises": "mengepul / naik",
        "bowl": "mangkuk"
      }
    },
    {
      page: 13,
      text: "Crunch, crunch! The carrots are sweet and the broccoli is tender. Eating vegetables is so yummy!",
      text_id: "Kres, kres! Wortelnya manis dan brokolinya lembut. Ternyata makan sayur itu lezat sekali!",
      image: "./images/giska-pelangi-sayur/gis13_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis13.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis13_id.mp3",
      vocab: {
        "crunch": "kres / renyah",
        "sweet": "manis",
        "tender": "lembut",
        "eating": "makan",
        "yummy": "lezat / enak"
      }
    },
    {
      page: 14,
      text: "Awesome! Giska finishes her whole bowl of vegetables until it is completely clean.",
      text_id: "Hebat! Giska menghabiskan seluruh mangkuk sayurnya sampai bersih tanpa sisa.",
      image: "./images/giska-pelangi-sayur/gis14_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis14.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis14_id.mp3",
      vocab: {
        "awesome": "hebat",
        "finishes": "menghabiskan",
        "whole": "seluruh",
        "completely": "sepenuhnya",
        "clean": "bersih"
      }
    },
    {
      page: 15,
      text: "Giska's body feels fresh, strong, and full of energy. Giska jumps and runs with joy!",
      text_id: "Badan Giska terasa segar, kuat, dan penuh tenaga. Giska melompat dan berlari dengan riang!",
      image: "./images/giska-pelangi-sayur/gis15_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis15.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis15_id.mp3",
      vocab: {
        "body": "tubuh / badan",
        "feels": "terasa",
        "fresh": "segar",
        "jumps": "melompat",
        "joy": "riang / gembira"
      }
    },
    {
      page: 16,
      text: "Come on friends, let's eat colorful vegetables every day so our bodies stay healthy, smart, and strong!",
      text_id: "Ayo teman-teman, kita makan aneka sayur setiap hari agar tubuh kita sehat, cerdas, dan kuat!",
      image: "./images/giska-pelangi-sayur/gis16_compressed.jpg",
      audio: "./audio/giska-pelangi-sayur/gis16.mp3",
      audio_id: "./audio/giska-pelangi-sayur/gis16_id.mp3",
      vocab: {
        "friends": "teman-teman",
        "eat": "makan",
        "every day": "setiap hari",
        "bodies": "tubuh",
        "healthy": "sehat",
        "smart": "cerdas",
        "strong": "kuat"
      }
    }
  ],

  // KUIS PEMAHAMAN BACAAN SEBANYAK 15 SOAL
  quiz: [
    {
      q: "Siapa nama tokoh utama dalam cerita ini? (Who is the main character in this story?)",
      options: [
        "Giska (Giska)",
        "Rani (Rani)",
        "Sinta (Sinta)"
      ],
      answer: 0
    },
    {
      q: "Ke mana Ibu mengajak Giska untuk mengenal Pelangi Sayur? (Where did Mama invite Giska to meet the Veggie Rainbow?)",
      options: [
        "Ke kamar tidur (To the bedroom)",
        "Ke kebun belakang rumah (To the backyard garden)",
        "Ke toko mainan (To the toy store)"
      ],
      answer: 1
    },
    {
      q: "Sayuran berwarna merah apa yang pertama kali ditemui Giska? (What red vegetable did Giska find first?)",
      options: [
        "Wortel (Carrot)",
        "Jagung (Corn)",
        "Tomat (Tomato)"
      ],
      answer: 2
    },
    {
      q: "Apa manfaat sayur berwarna merah seperti tomat? (What is the benefit of red vegetables like tomatoes?)",
      options: [
        "Menjaga jantung tetap kuat (Keeps the heart strong)",
        "Membuat rambut panjang (Makes hair grow long)",
        "Membuat cepat mengantuk (Makes you sleepy)"
      ],
      answer: 0
    },
    {
      q: "Sayuran renyah berwarna oranye yang dicabut Giska dari tanah adalah? (What crunchy orange vegetable did Giska pull from the soil?)",
      options: [
        "Terong (Eggplant)",
        "Wortel (Carrot)",
        "Bayam (Spinach)"
      ],
      answer: 1
    },
    {
      q: "Sayur berwarna oranye sangat baik untuk kesehatan anggota tubuh mana? (Orange vegetables are great for the health of which body part?)",
      options: [
        "Kuku jari (Fingernails)",
        "Telinga (Ears)",
        "Mata (Eyes)"
      ],
      answer: 2
    },
    {
      q: "Apa warna jagung manis yang dipetik Giska? (What color is the sweet corn Giska picked?)",
      options: [
        "Kuning (Yellow)",
        "Ungu (Purple)",
        "Biru (Blue)"
      ],
      answer: 0
    },
    {
      q: "Apa manfaat sayur berwarna kuning seperti jagung bagi tubuh kita? (What is the benefit of yellow vegetables like corn for our body?)",
      options: [
        "Membuat tubuh lemas (Makes the body weak)",
        "Memberi energi untuk bermain (Gives energy to play)",
        "Membuat gigi sakit (Causes toothache)"
      ],
      answer: 1
    },
    {
      q: "Sayuran hijau apa saja yang membuat otot dan tulang Giska kuat? (Which green vegetables make Giska's muscles and bones strong?)",
      options: [
        "Tomat dan terong (Tomato and eggplant)",
        "Jagung dan wortel (Corn and carrot)",
        "Bayam dan brokoli (Spinach and broccoli)"
      ],
      answer: 2
    },
    {
      q: "Sayuran mengilap berwarna ungu yang membantu otak tetap cerdas adalah? (What shiny purple vegetable helps the brain stay smart?)",
      options: [
        "Terong (Eggplant)",
        "Brokoli (Broccoli)",
        "Wortel (Carrot)"
      ],
      answer: 0
    },
    {
      q: "Ada berapa warna sayur dalam Pelangi Sayur yang dikumpulkan Giska? (How many vegetable colors are in the Veggie Rainbow Giska collected?)",
      options: [
        "Dua warna (Two colors)",
        "Lima warna (Five colors)",
        "Satu warna (One color)"
      ],
      answer: 1
    },
    {
      q: "Apa yang Giska lakukan pada sayuran setelah sampai di dapur? (What did Giska do to the vegetables back in the kitchen?)",
      options: [
        "Membuangnya ke tempat sampah (Threw them in the trash)",
        "Menyembunyikannya di lemari (Hid them in the cabinet)",
        "Mencucinya dengan air bersih (Washed them with clean water)"
      ],
      answer: 2
    },
    {
      q: "Masakan lezat apa yang dibuat Ibu dari sayuran Pelangi Sayur? (What delicious dish did Mama cook from the Veggie Rainbow?)",
      options: [
        "Sup Pelangi yang hangat (Warm Rainbow Soup)",
        "Es krim cokelat (Chocolate ice cream)",
        "Kue donat (Donuts)"
      ],
      answer: 0
    },
    {
      q: "Bagaimana cara Giska makan Sup Pelangi buatannya bersama Ibu? (How did Giska eat the Rainbow Soup she made with Mama?)",
      options: [
        "Hanya makan satu sendok saja (Ate only one spoonful)",
        "Menghabiskan seluruh mangkuk sampai bersih (Finished the whole bowl until clean)",
        "Tidak mau mencicipinya (Refused to taste it)"
      ],
      answer: 1
    },
    {
      q: "Apa pesan Giska untuk teman-teman di akhir cerita? (What is Giska's message to friends at the end of the story?)",
      options: [
        "Jangan pernah makan sayur (Never eat vegetables)",
        "Makan permen setiap hari (Eat candy every day)",
        "Makan aneka sayur setiap hari agar sehat, cerdas, dan kuat (Eat colorful vegetables every day to stay healthy, smart, and strong)"
      ],
      answer: 2
    }
  ]
});
