/**
 * ================================================================
 * TEMPLATE BUKU CERITA MODULAR (DWIPROGRAM / BILINGUAL READY)
 * SERI MENGENAL HURUF BERSAMA ALFA (TK A - 28 HALAMAN)
 * ================================================================
 */

window.STORIES_DATABASE = window.STORIES_DATABASE || [];

window.STORIES_DATABASE.push({
  id: "belajar-membaca-huruf-alfa",
  title: "Belajar Membaca: Seri Mengenal Huruf bersama Alfa",
  category: "Fase Fondasi / TK A",
  defaultLang: "id",
  cover: "./images/alfa-huruf/cover.jpg",
  description: "Buku interaktif mengenal 26 huruf alfabet dan cara pengucapannya yang seru bersama Alfa untuk teman-teman TK A.",

  highlightTheme: {
    bg: "linear-gradient(135deg, #fef08a, #38bdf8)", // Kuning ceria ke biru langit
    text: "#0f172a",                                  // Teks kontras gelap
    border: "#0284c7",                                // Garis highlight biru laut
    shadow: "rgba(2, 132, 199, 0.5)"                 // Glow cyan ramah anak
  },

  pages: [
    {
      page: 1,
      text: "Hello friends! My name is Alfa. Let's go on a fun adventure to explore letters and their sounds!",
      text_id: "Halo teman-teman! Namaku Alfa. Ayo kita bertualang mengenal huruf dan bunyinya yang seru!",
      image: "./images/alfa-huruf/01.jpg",
      audio: "./audio/alfa-huruf/01.mp3",
      audio_id: "./audio/alfa-huruf/01_id.mp3",
      vocab: {
        "friends": "teman-teman",
        "adventure": "petualangan",
        "letters": "huruf-huruf",
        "sounds": "bunyi-bunyi"
      }
    },
    {
      page: 2,
      text: "Open your mouth wide: Ah... Ah... Apple! Sweet and fresh red apple.",
      text_id: "Buka mulutmu lebar-lebar: A... A... Apel! Apel merah manis dan segar.",
      image: "./images/alfa-huruf/02.jpg",
      audio: "./audio/alfa-huruf/02.mp3",
      audio_id: "./audio/alfa-huruf/02_id.mp3",
      vocab: {
        "open": "buka",
        "mouth": "mulut",
        "apple": "apel",
        "sweet": "manis"
      }
    },
    {
      page: 3,
      text: "Press your lips together: B... B... Ball! The ball bounces so high!",
      text_id: "Rapatkan bibir lalu lepaskan: B... B... Bola! Bola membal tinggi sekali!",
      image: "./images/alfa-huruf/03.jpg",
      audio: "./audio/alfa-huruf/03.mp3",
      audio_id: "./audio/alfa-huruf/03_id.mp3",
      vocab: {
        "lips": "bibir",
        "ball": "bola",
        "bounces": "membal",
        "high": "tinggi"
      }
    },
    {
      page: 4,
      text: "Say it gently: C... C... Cup! Alfa's warm cup of yummy milk.",
      text_id: "Bunyikan lembut di lidah: C... C... Cangkir! Cangkir susu hangat Alfa.",
      image: "./images/alfa-huruf/04.jpg",
      audio: "./audio/alfa-huruf/04.mp3",
      audio_id: "./audio/alfa-huruf/04_id.mp3",
      vocab: {
        "gently": "dengan lembut",
        "cup": "cangkir",
        "warm": "hangat",
        "milk": "susu"
      }
    },
    {
      page: 5,
      text: "Tap your tongue behind your teeth: D... D... Sheep! Soft white little sheep.",
      text_id: "Ujung lidah ke langit-langit: D... D... Domba! Domba berbulu putih lembut.",
      image: "./images/alfa-huruf/05.jpg",
      audio: "./audio/alfa-huruf/05.mp3",
      audio_id: "./audio/alfa-huruf/05_id.mp3",
      vocab: {
        "tongue": "lidah",
        "sheep": "domba",
        "soft": "lembut",
        "white": "putih"
      }
    },
    {
      page: 6,
      text: "Give a little smile: E... E... Bucket! A bright yellow bucket ready for water.",
      text_id: "Tersenyum sedikit: E... E... Ember! Ember kuning siap menampung air.",
      image: "./images/alfa-huruf/06.jpg",
      audio: "./audio/alfa-huruf/06.mp3",
      audio_id: "./audio/alfa-huruf/06_id.mp3",
      vocab: {
        "smile": "senyum",
        "bucket": "ember",
        "yellow": "kuning",
        "water": "air"
      }
    },
    {
      page: 7,
      text: "Top teeth touch your lower lip: F... F... Photo! Click, say cheese!",
      text_id: "Gigi atas sentuh bibir bawah: F... F... Foto! Cekrek, tersenyum manis!",
      image: "./images/alfa-huruf/07.jpg",
      audio: "./audio/alfa-huruf/07.mp3",
      audio_id: "./audio/alfa-huruf/07_id.mp3",
      vocab: {
        "teeth": "gigi",
        "photo": "foto",
        "cheese": "keju (senyum)"
      }
    },
    {
      page: 8,
      text: "Sound from the throat: G... G... Elephant! Big elephant with a long trunk.",
      text_id: "Suara dari pangkal lidah: G... G... Gajah! Gajah besar punya belalai panjang.",
      image: "./images/alfa-huruf/08.jpg",
      audio: "./audio/alfa-huruf/08.mp3",
      audio_id: "./audio/alfa-huruf/08_id.mp3",
      vocab: {
        "elephant": "gajah",
        "big": "besar",
        "trunk": "belalai"
      }
    },
    {
      page: 9,
      text: "Breathe out gently: H... H... Rain! Pitter-patter falls the rain.",
      text_id: "Hembuskan napas hangat: H... H... Hujan! Tik-tik-tik bunyi rintik air.",
      image: "./images/alfa-huruf/09.jpg",
      audio: "./audio/alfa-huruf/09.mp3",
      audio_id: "./audio/alfa-huruf/09_id.mp3",
      vocab: {
        "breathe": "bernapas",
        "rain": "hujan",
        "falls": "jatuh"
      }
    },
    {
      page: 10,
      text: "Stretch your smile wide: Ee... Ee... Fish! Swimming swiftly in clear water.",
      text_id: "Tarik bibirmu melebar: I... I... Ikan! Berenang lincah di air jernih.",
      image: "./images/alfa-huruf/10.jpg",
      audio: "./audio/alfa-huruf/10.mp3",
      audio_id: "./audio/alfa-huruf/10_id.mp3",
      vocab: {
        "stretch": "menarik lebar",
        "fish": "ikan",
        "swimming": "berenang",
        "clear": "jernih"
      }
    },
    {
      page: 11,
      text: "Say it strong from the roof: J... J... Orange! Juicy fruit packed with vitamins.",
      text_id: "Ucapkan tegas di tengah lidah: J... J... Jeruk! Buah oranye kaya vitamin.",
      image: "./images/alfa-huruf/11.jpg",
      audio: "./audio/alfa-huruf/11.mp3",
      audio_id: "./audio/alfa-huruf/11_id.mp3",
      vocab: {
        "strong": "kuat/tegas",
        "orange": "jeruk",
        "juicy": "berair segar",
        "fruit": "buah"
      }
    },
    {
      page: 12,
      text: "Make a crisp tap at the back: K... K... Bunny! Long ears hopping up and down.",
      text_id: "Bunyikan kering di tenggorokan: K... K... Kelinci! Lompat-lompat telinga panjang.",
      image: "./images/alfa-huruf/12.jpg",
      audio: "./audio/alfa-huruf/12.mp3",
      audio_id: "./audio/alfa-huruf/12_id.mp3",
      vocab: {
        "bunny": "kelinci",
        "ears": "telinga",
        "hopping": "melompat"
      }
    },
    {
      page: 13,
      text: "Tongue tip behind your teeth: L... L... Bee! Buzzing softly near sweet flowers.",
      text_id: "Lidah menempel di atas gigi: L... L... Lebah! Terbang mendengung mencari madu.",
      image: "./images/alfa-huruf/13.jpg",
      audio: "./audio/alfa-huruf/13.mp3",
      audio_id: "./audio/alfa-huruf/13_id.mp3",
      vocab: {
        "bee": "lebah",
        "buzzing": "mendengung",
        "flowers": "bunga-bunga"
      }
    },
    {
      page: 14,
      text: "Close your lips and hum: M... M... Sun! Its warm rays light up our world.",
      text_id: "Kancingkan bibir bergumam: M... M... Matahari! Sinarnya menghangatkan bumi.",
      image: "./images/alfa-huruf/14.jpg",
      audio: "./audio/alfa-huruf/14.mp3",
      audio_id: "./audio/alfa-huruf/14_id.mp3",
      vocab: {
        "hum": "bergumam",
        "sun": "matahari",
        "rays": "sinar",
        "world": "bumi/dunia"
      }
    },
    {
      page: 15,
      text: "Press the roof of your mouth: N... N... Pineapple! A golden fruit with a green crown.",
      text_id: "Tekan lidah ke langit depan: N... N... Nanas! Mahkota hijau kulit bersisik.",
      image: "./images/alfa-huruf/15.jpg",
      audio: "./audio/alfa-huruf/15.mp3",
      audio_id: "./audio/alfa-huruf/15_id.mp3",
      vocab: {
        "pineapple": "nanas",
        "golden": "kuning emas",
        "crown": "mahkota"
      }
    },
    {
      page: 16,
      text: "Make your lips into an O-shape: Oh... Oh... Torch! A cozy little glowing light.",
      text_id: "Bentuk bibirmu bulat sempurna: O... O... Obor! Nyala api kecil nan hangat.",
      image: "./images/alfa-huruf/16.jpg",
      audio: "./audio/alfa-huruf/16.mp3",
      audio_id: "./audio/alfa-huruf/16_id.mp3",
      vocab: {
        "torch": "obor",
        "cozy": "nyaman",
        "glowing": "berkilau"
      }
    },
    {
      page: 17,
      text: "Pop your lips with a puff of air: P... P... Rainbow! Seven pretty colors in the sky.",
      text_id: "Letupkan bibir tanpa suara: P... P... Pelangi! Tujuh warna melengkung indah.",
      image: "./images/alfa-huruf/17.jpg",
      audio: "./audio/alfa-huruf/17.mp3",
      audio_id: "./audio/alfa-huruf/17_id.mp3",
      vocab: {
        "rainbow": "pelangi",
        "seven": "tujuh",
        "colors": "warna-warni",
        "sky": "langit"
      }
    },
    {
      page: 18,
      text: "A special sound from deep within: Q... Q... Quokka! The happiest little smiling animal.",
      text_id: "Bunyi unik dari dalam: Q... Q... Quokka! Hewan mungil yang selalu tersenyum.",
      image: "./images/alfa-huruf/18.jpg",
      audio: "./audio/alfa-huruf/18.mp3",
      audio_id: "./audio/alfa-huruf/18_id.mp3",
      vocab: {
        "special": "istimewa",
        "quokka": "kuoka (hewan)",
        "happiest": "paling bahagia",
        "animal": "hewan"
      }
    },
    {
      page: 19,
      text: "Curl your tongue back: R... R... Bread! Smells so yummy and fresh from the oven.",
      text_id: "Getarkan lidahmu sedikit: R... R... Roti! Aroma wangi baru matang.",
      image: "./images/alfa-huruf/19.jpg",
      audio: "./audio/alfa-huruf/19.mp3",
      audio_id: "./audio/alfa-huruf/19_id.mp3",
      vocab: {
        "bread": "roti",
        "smells": "beraroma",
        "yummy": "lezat",
        "fresh": "segar/baru"
      }
    },
    {
      page: 20,
      text: "Hiss like a friendly snake: S... S... Ants! Marching in a tidy little line.",
      text_id: "Tup-tup desis seperti ular: S... S... Semut! Berbaris rapi gotong royong.",
      image: "./images/alfa-huruf/20.jpg",
      audio: "./audio/alfa-huruf/20.mp3",
      audio_id: "./audio/alfa-huruf/20_id.mp3",
      vocab: {
        "hiss": "mendesis",
        "ants": "semut-semut",
        "marching": "berbaris",
        "line": "antrean/barisan"
      }
    },
    {
      page: 21,
      text: "Tap your tongue behind your top teeth: T... T... Hat! Keeps your head safe and cool.",
      text_id: "Ketuk lidah di gigi atas: T... T... Topi! Lindungi kepala dari panas.",
      image: "./images/alfa-huruf/21.jpg",
      audio: "./audio/alfa-huruf/21.mp3",
      audio_id: "./audio/alfa-huruf/21_id.mp3",
      vocab: {
        "hat": "topi",
        "head": "kepala",
        "safe": "aman",
        "cool": "sejuk"
      }
    },
    {
      page: 22,
      text: "Pucker your lips forward: Oo... Oo... Caterpillar! Crawling softly on a green leaf.",
      text_id: "Majukan bibir mengerucut: U... U... Ulat! Merayap pelan di daun hijau.",
      image: "./images/alfa-huruf/22.jpg",
      audio: "./audio/alfa-huruf/22.mp3",
      audio_id: "./audio/alfa-huruf/22_id.mp3",
      vocab: {
        "caterpillar": "ulat",
        "crawling": "merayap",
        "leaf": "daun"
      }
    },
    {
      page: 23,
      text: "Vibrate your lower lip against teeth: V... V... Vase! A shiny glass vase for flowers.",
      text_id: "Getarkan bibir bawah pada gigi: V... V... Vas! Vas bunga kaca yang berkilau.",
      image: "./images/alfa-huruf/23.jpg",
      audio: "./audio/alfa-huruf/23.mp3",
      audio_id: "./audio/alfa-huruf/23_id.mp3",
      vocab: {
        "vibrate": "bergetar",
        "vase": "vas bunga",
        "shiny": "berkilau",
        "glass": "kaca"
      }
    },
    {
      page: 24,
      text: "Round your lips and glide: W... W... Carrot! Healthy orange treat for our eyes.",
      text_id: "Bulatkan bibir lalu buka: W... W... Wortel! Makanan sehat berwarna jingga.",
      image: "./images/alfa-huruf/24.jpg",
      audio: "./audio/alfa-huruf/24.mp3",
      audio_id: "./audio/alfa-huruf/24_id.mp3",
      vocab: {
        "carrot": "wortel",
        "healthy": "sehat",
        "eyes": "mata"
      }
    },
    {
      page: 25,
      text: "Strike a bright tune: X... X... Xylophone! Ting-ting-ting sings the rainbow bar.",
      text_id: "Ketukan nada merdu: X... X... Xilofon! Ting-ting-ting suara nada pelangi.",
      image: "./images/alfa-huruf/25.jpg",
      audio: "./audio/alfa-huruf/25.mp3",
      audio_id: "./audio/alfa-huruf/25_id.mp3",
      vocab: {
        "xylophone": "xilofon",
        "tune": "alunan nada",
        "strike": "mengetuk"
      }
    },
    {
      page: 26,
      text: "Glide into a big smile: Y... Y... Yo-yo! Spinning up and down so fast.",
      text_id: "Luncurkan senyummu: Y... Y... Yoyo! Naik dan turun berputar lincah.",
      image: "./images/alfa-huruf/26.jpg",
      audio: "./audio/alfa-huruf/26.mp3",
      audio_id: "./audio/alfa-huruf/26_id.mp3",
      vocab: {
        "yo-yo": "yoyo",
        "spinning": "berputar",
        "fast": "cepat/lincah"
      }
    },
    {
      page: 27,
      text: "Buzz your teeth together: Z... Z... Zebra! Black and white stripes on the savanna.",
      text_id: "Getarkan lidah seperti lebah tidur: Z... Z... Zebra! Garis hitam putih di padang rumput.",
      image: "./images/alfa-huruf/27.jpg",
      audio: "./audio/alfa-huruf/27.mp3",
      audio_id: "./audio/alfa-huruf/27_id.mp3",
      vocab: {
        "zebra": "zebra",
        "stripes": "garis-garis",
        "savanna": "padang rumput"
      }
    },
    {
      page: 28,
      text: "Hooray! Fantastic job everyone! Now we know all the letters from A to Z. Reading is so much fun!",
      text_id: "Hore! Hebat sekali teman-teman! Sekarang kita sudah mengenal semua huruf dari A sampai Z. Belajar membaca itu sungguh menyenangkan!",
      image: "./images/alfa-huruf/28.jpg",
      audio: "./audio/alfa-huruf/28.mp3",
      audio_id: "./audio/alfa-huruf/28_id.mp3",
      vocab: {
        "fantastic": "hebat sekali",
        "reading": "membaca",
        "fun": "menyenangkan"
      }
    }
  ],

  // KUIS PEMAHAMAN BACAAN & FONIK TK A
quiz: [
    {
      q: "Huruf apa yang dibunyikan dengan membuka mulut lebar-lebar seperti pada kata 'Apel'?",
      options: [
        "Huruf A",
        "Huruf B",
        "Huruf M"
      ],
      answer: 0
    },
    {
      q: "Benda berbunyi 'B... B...' yang membal tinggi dimainkan Alfa adalah...",
      options: [
        "Buku (Book)",
        "Bola (Ball)",
        "Baju (Shirt)"
      ],
      answer: 1
    },
    {
      q: "Minuman lezat dan hangat apa yang ada di dalam cangkir (Cup) Alfa?",
      options: [
        "Jus",
        "Teh",
        "Susu (Milk)"
      ],
      answer: 2
    },
    {
      q: "Hewan berbulu putih lembut yang diawali ketukan lidah 'D... D...' adalah...",
      options: [
        "Gajah",
        "Kelinci",
        "Domba (Sheep)"
      ],
      answer: 2
    },
    {
      q: "Hewan bertubuh besar dengan belalai panjang pada huruf G adalah...",
      options: [
        "Gajah (Elephant)",
        "Harimau",
        "Zebra"
      ],
      answer: 0
    },
    {
      q: "Saat menghembuskan napas 'H... H...', kita mendengar bunyi tik-tik rintik air dari...",
      options: [
        "Angin",
        "Hujan (Rain)",
        "Pelangi"
      ],
      answer: 1
    },
    {
      q: "Tarik bibirmu melebar untuk menyebut huruf I. Hewan apa yang berenang di air jernih?",
      options: [
        "Lebah",
        "Ikan (Fish)",
        "Ulat"
      ],
      answer: 1
    },
    {
      q: "Hewan bertelinga panjang yang suka melompat-lompat pada huruf K adalah...",
      options: [
        "Kucing",
        "Kelinci (Bunny)",
        "Kuda"
      ],
      answer: 1
    },
    {
      q: "Tutup bibirmu dan bergumam 'M... M...'. Benda apa di langit yang menghangatkan bumi?",
      options: [
        "Bulan",
        "Bintang",
        "Matahari (Sun)"
      ],
      answer: 2
    },
    {
      q: "Bentuk bibir bulat seperti huruf O. Nyala api kecil nan hangat yang dilihat Alfa adalah...",
      options: [
        "Lilin",
        "Obor (Torch)",
        "Lampu"
      ],
      answer: 1
    },
    {
      q: "Letupkan bibir tanpa suara 'P... P...'. Tujuh warna indah yang melengkung di langit adalah...",
      options: [
        "Awan",
        "Pesawat",
        "Pelangi (Rainbow)"
      ],
      answer: 2
    },
    {
      q: "Hewan kecil berdesis halus 'S... S...' yang suka berjalan berbaris rapi adalah...",
      options: [
        "Semut (Ants)",
        "Sapi",
        "Singa"
      ],
      answer: 0
    },
    {
      q: "Majukan bibir mengerucut 'U... U...'. Hewan apa yang merayap pelan di daun hijau?",
      options: [
        "Unta",
        "Udang",
        "Ulat (Caterpillar)"
      ],
      answer: 2
    },
    {
      q: "Makanan sehat berwarna jingga yang diawali huruf W untuk kesehatan mata kita adalah...",
      options: [
        "Bayam",
        "Wortel (Carrot)",
        "Tomat"
      ],
      answer: 1
    },
    {
      q: "Hewan bercorak garis hitam dan putih di padang rumput pada huruf Z adalah...",
      options: [
        "Jerapah",
        "Zebra (Zebra)",
        "Rusa"
      ],
      answer: 1
    }
  ]
