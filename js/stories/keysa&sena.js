/**
 * ================================================================
 * TEMPLATE BUKU CERITA MODULAR (DWIPROGRAM / BILINGUAL READY)
 * Cerita: Mensyukuri Semua Nikmat Tuhan bersama Kaysa & Sena
 * Jenjang: Fase Fondasi (TK B)
 * ================================================================
 */

window.STORIES_DATABASE = window.STORIES_DATABASE || [];

window.STORIES_DATABASE.push({
  id: "mensyukuri-nikmat-kaysa-sena",
  title: "Alhamdulillah: Kaysa dan Sena Bersyukur",
  category: "Fase Fondasi / TK B",
  defaultLang: "id",
  cover: "./images/mensyukuri-nikmat/ke01.jpg",
  description: "Kisah ceria Kaysa dan Sena dalam mengenal dan mensyukuri aneka nikmat Allah, mulai dari panca indra, tubuh sehat, keluarga, teman, hingga alam semesta.",

  highlightTheme: {
    bg: "linear-gradient(135deg, #fef08a, #fed7aa)", // Kuning pastel cerah & peach
    text: "#78350f",                                  // Cokelat hangat
    border: "#f59e0b",                                // Garis highlight amber cerah
    shadow: "rgba(245, 158, 11, 0.45)"
  },

  pages: [
    {
      page: 1,
      text: "The morning shines bright. Kaysa and Sena wake up with happy smiles: Alhamdulillah!",
      text_id: "Pagi bersinar cerah. Kaysa dan Sena bangun tidur dengan senyum merekah: Alhamdulillah!",
      image: "./images/mensyukuri-nikmat/ke01.jpg",
      audio: "./audio/mensyukuri-nikmat/ke01_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke01_id.mp3",
      vocab: {
        "morning": "pagi",
        "bright": "cerah",
        "wake up": "bangun tidur",
        "happy": "gembira",
        "smiles": "senyuman"
      }
    },
    {
      page: 2,
      text: "The warm sun greets us on the porch. Thank you Allah, the world is glowing and bright!",
      text_id: "Matahari menyapa hangat di beranda. Terima kasih Ya Allah, dunia jadi terang benderang!",
      image: "./images/mensyukuri-nikmat/ke02.jpg",
      audio: "./audio/mensyukuri-nikmat/ke02_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke02_id.mp3",
      vocab: {
        "warm": "hangat",
        "sun": "matahari",
        "greets": "menyapa",
        "world": "dunia",
        "bright": "terang"
      }
    },
    {
      page: 3,
      text: "Two little eyes can see colorful flowers and a pretty butterfly dancing around.",
      text_id: "Dua mata mungil bisa melihat bunga merah, kuning, dan kupu-kupu yang beterbangan indah.",
      image: "./images/mensyukuri-nikmat/ke03.jpg",
      audio: "./audio/mensyukuri-nikmat/ke03_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke03_id.mp3",
      vocab: {
        "eyes": "mata",
        "see": "melihat",
        "flowers": "bunga-bunga",
        "butterfly": "kupu-kupu"
      }
    },
    {
      page: 4,
      text: "Two ears can listen to the sweet little birds singing: Tweet-tweet! Such lovely music to hear.",
      text_id: "Dua telinga mendengar kicau burung bernyanyi riang. Cuit-cuit! Sungguh merdu didengar.",
      image: "./images/mensyukuri-nikmat/ke04.jpg",
      audio: "./audio/mensyukuri-nikmat/ke04_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke04_id.mp3",
      vocab: {
        "ears": "telinga",
        "listen": "mendengarkan",
        "birds": "burung-burung",
        "singing": "bernyanyi"
      }
    },
    {
      page: 5,
      text: "Our little noses smell something yummy from the kitchen. Mmm... Mommy is baking warm sweet bread!",
      text_id: "Hidung mencium aroma harum dari dapur. Hmm... Ibu sedang memanggang roti lezat!",
      image: "./images/mensyukuri-nikmat/ke05.jpg",
      audio: "./audio/mensyukuri-nikmat/ke05_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke05_id.mp3",
      vocab: {
        "noses": "hidung",
        "smell": "mencium aroma",
        "kitchen": "dapur",
        "bread": "roti"
      }
    },
    {
      page: 6,
      text: "Hands raised high, saying a gentle prayer: Bismillah! Thank you for this delicious breakfast.",
      text_id: "Tangan ditengadahkan, doa dipanjatkan. Bismillah! Rezeki makan pagi yang nikmat.",
      image: "./images/mensyukuri-nikmat/ke06.jpg",
      audio: "./audio/mensyukuri-nikmat/ke06_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke06_id.mp3",
      vocab: {
        "hands": "tangan",
        "prayer": "doa",
        "breakfast": "sarapan pagi",
        "delicious": "lezat"
      }
    },
    {
      page: 7,
      text: "Tap, tap, tap! Healthy feet marching along. Kaysa and Sena are excited to go to kindergarten!",
      text_id: "Tap, tap, tap! Kaki melangkah lincah. Kaysa dan Sena siap pergi ke sekolah TK tercinta!",
      image: "./images/mensyukuri-nikmat/ke07.jpg",
      audio: "./audio/mensyukuri-nikmat/ke07_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke07_id.mp3",
      vocab: {
        "feet": "kaki",
        "marching": "melangkah",
        "excited": "bersemangat",
        "kindergarten": "taman kanak-kanak"
      }
    },
    {
      page: 8,
      text: "Ten tiny fingers dance upon the paper, coloring a bright and cheerful rainbow.",
      text_id: "Sepuluh jari tangan menari di atas kertas. Menggambar pelangi warna-warni yang ceria.",
      image: "./images/mensyukuri-nikmat/ke08.jpg",
      audio: "./audio/mensyukuri-nikmat/ke08_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke08_id.mp3",
      vocab: {
        "fingers": "jari-jari tangan",
        "paper": "kertas",
        "coloring": "mewarnai",
        "rainbow": "pelangi"
      }
    },
    {
      page: 9,
      text: "The teacher smiles and greets us warmly: Assalamu'alaikum! How wonderful it is to have good friends.",
      text_id: "Ibu Guru tersenyum menyapa ramah: Assalamu'alaikum! Senangnya punya banyak teman baik.",
      image: "./images/mensyukuri-nikmat/ke09.jpg",
      audio: "./audio/mensyukuri-nikmat/ke09_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke09_id.mp3",
      vocab: {
        "teacher": "guru",
        "smiles": "tersenyum",
        "friends": "teman-teman",
        "wonderful": "luar biasa senang"
      }
    },
    {
      page: 10,
      text: "A, B, C and one, two, three! A clever mind makes learning so much fun.",
      text_id: "A, B, C dan satu, dua, tiga! Akal yang cerdas membuat belajar jadi mengasyikkan.",
      image: "./images/mensyukuri-nikmat/ke10.jpg",
      audio: "./audio/mensyukuri-nikmat/ke10_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke10_id.mp3",
      vocab: {
        "clever": "pintar / cerdas",
        "mind": "akal / pikiran",
        "learning": "belajar",
        "fun": "menyenangkan"
      }
    },
    {
      page: 11,
      text: "Pitter-patter! The sky brings cool fresh rain. All the little plants smile with joy.",
      text_id: "Tik-tik-tik! Langit menurunkan air hujan yang sejuk. Semua tanaman tersenyum segar.",
      image: "./images/mensyukuri-nikmat/ke11.jpg",
      audio: "./audio/mensyukuri-nikmat/ke11_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke11_id.mp3",
      vocab: {
        "sky": "langit",
        "rain": "hujan",
        "plants": "tanaman",
        "cool": "sejuk"
      }
    },
    {
      page: 12,
      text: "The rain stops and the air is so fresh. Alhamdulillah, rain is a blessed gift from Allah!",
      text_id: "Hujan reda, udara terasa bersih. Alhamdulillah, air hujan adalah rahmat yang berkah!",
      image: "./images/mensyukuri-nikmat/ke12.jpg",
      audio: "./audio/mensyukuri-nikmat/ke12_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke12_id.mp3",
      vocab: {
        "stops": "berhenti / reda",
        "fresh": "segar",
        "blessed": "berkah",
        "gift": "hadiah / karunia"
      }
    },
    {
      page: 13,
      text: "Time to go home. The warm hugs from Mommy and Daddy fill our hearts with love.",
      text_id: "Waktunya pulang ke rumah. Pelukan hangat Ayah dan Ibu terasa begitu menyejukkan hati.",
      image: "./images/mensyukuri-nikmat/ke13.jpg",
      audio: "./audio/mensyukuri-nikmat/ke13_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke13_id.mp3",
      vocab: {
        "home": "rumah",
        "warm": "hangat",
        "hugs": "pelukan",
        "love": "kasih sayang"
      }
    },
    {
      page: 14,
      text: "Kaysa and Sena share sweet cakes with their friend. Sharing our blessings makes us doubly happy!",
      text_id: "Kaysa dan Sena membagi kue bolu kepada teman. Berbagi nikmat membuat hati semakin gembira.",
      image: "./images/mensyukuri-nikmat/ke14.jpg",
      audio: "./audio/mensyukuri-nikmat/ke14_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke14_id.mp3",
      vocab: {
        "share": "berbagi",
        "cakes": "kue",
        "blessings": "nikmat / berkah",
        "happy": "gembira"
      }
    },
    {
      page: 15,
      text: "Splash and wash! A refreshing evening bath with clean water. So clean, fresh, and smelling sweet.",
      text_id: "Gebyur-gebyur! Mandi sore dengan air bersih. Badan segar, wangi, dan bebas kuman.",
      image: "./images/mensyukuri-nikmat/ke15.jpg",
      audio: "./audio/mensyukuri-nikmat/ke15_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke15_id.mp3",
      vocab: {
        "bath": "mandi",
        "water": "air",
        "clean": "bersih",
        "smelling": "beraroma wangi"
      }
    },
    {
      page: 16,
      text: "Wearing pure white prayer dresses, praying and bowing together. Our hearts feel calm and peaceful.",
      text_id: "Mengenakan mukena putih bersih, shalat dan bersujud bersama. Hati terasa tenang dan damai.",
      image: "./images/mensyukuri-nikmat/ke16.jpg",
      audio: "./audio/mensyukuri-nikmat/ke16_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke16_id.mp3",
      vocab: {
        "white": "putih",
        "praying": "berdoa / shalat",
        "calm": "tenang",
        "peaceful": "damai"
      }
    },
    {
      page: 17,
      text: "Gazing out the night window. A crescent moon smiles and thousands of pretty stars sparkle in the sky.",
      text_id: "Menatap jendela malam. Bulan sabit tersenyum dan ribuan bintang berkelip cantik di angkasa.",
      image: "./images/mensyukuri-nikmat/ke17.jpg",
      audio: "./audio/mensyukuri-nikmat/ke17_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke17_id.mp3",
      vocab: {
        "night": "malam",
        "window": "jendela",
        "moon": "bulan",
        "stars": "bintang-bintang"
      }
    },
    {
      page: 18,
      text: "Pulling up the warm blanket. Thank You, Allah, for all the blessings today. Good night!",
      text_id: "Menarik selimut hangat. Terima kasih Ya Allah atas semua nikmat hari ini. Selamat tidur!",
      image: "./images/mensyukuri-nikmat/ke18.jpg",
      audio: "./audio/mensyukuri-nikmat/ke18_en.mp3",
      audio_id: "./audio/mensyukuri-nikmat/ke18_id.mp3",
      vocab: {
        "blanket": "selimut",
        "blessings": "nikmat-nikmat",
        "today": "hari ini",
        "good night": "selamat tidur"
      }
    }
  ],

  quiz: [
    {
      q: "Apa ucapan syukur yang diucapkan Kaysa dan Sena saat bangun tidur? (What did they say when waking up?)",
      options: [
        "Alhamdulillah",
        "Astagfirullah",
        "Selamat tinggal"
      ],
      answer: 0
    },
    {
      q: "Anggota tubuh apa yang kita gunakan untuk melihat bunga warna-warni? (What do we use to see flowers?)",
      options: [
        "Telinga (Ears)",
        "Dua mata mungil (Two little eyes)",
        "Kaki (Feet)"
      ],
      answer: 1
    },
    {
      q: "Apa yang membuat hati kita menjadi lebih gembira pada halaman 14? (What makes us doubly happy?)",
      options: [
        "Menangis sendirian (Crying alone)",
        "Berbagi nikmat kue dengan teman (Sharing cakes with friends)",
        "Menyembunyikan mainan (Hiding toys)"
      ],
      answer: 1
    },
    {
      q: "Apa yang bersinar indah di langit malam sebelum tidur? (What shines in the night sky?)",
      options: [
        "Matahari siang (Morning sun)",
        "Awan petir (Thunderclouds)",
        "Bulan sabit dan bintang-bintang (Crescent moon and stars)"
      ],
      answer: 2
    }
  ]
});
