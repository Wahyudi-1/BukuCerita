/**
 * ================================================================
 * TEMPLATE BUKU CERITA MODULAR (DWIPROGRAM / BILINGUAL READY)
 * ================================================================
 * Judul: Petualangan Ara Memilih Makanan Sehat
 * Target: SD Kelas 1 (Fase A)
 * Karakter: Ara (Anak Perempuan Jawa Timur)
 */

window.STORIES_DATABASE = window.STORIES_DATABASE || [];

window.STORIES_DATABASE.push({
  id: "ara-makanan-sehat",
  title: "Ara dan Rahasia Makanan Sehat (Ara and the Healthy Food Secret)",
  category: "Fase A / Kelas 1",
  defaultLang: "id",
  cover: "./images/ara-makanan-sehat/cover_compressed.jpg",
  description: "Kisah edukatif tentang Ara dari Jawa Timur yang belajar mengenali bahaya jajanan tidak sehat seperti permen, soda, dan gorengan, serta pentingnya memilih makanan bergizi seimbang.",

  highlightTheme: {
    bg: "linear-gradient(135deg, #fef08a, #facc15)",
    text: "#713f12",
    border: "#eab308",
    shadow: "rgba(234, 179, 8, 0.6)"
  },

  pages: [
    {
      page: 1,
      text: "Hello! This is Ara. Ara is a cheerful girl who loves playing outdoors.",
      text_id: "Halo! Ini Ara. Ara anak yang ceria dan suka sekali bermain di luar rumah.",
      image: "./images/ara-makanan-sehat/01_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/01.mp3",
      audio_id: "./audio/ara-makanan-sehat/01_id.mp3",
      vocab: {
        "cheerful": "ceria",
        "girl": "anak perempuan",
        "loves": "suka sekali",
        "playing": "bermain",
        "outdoors": "di luar rumah"
      }
    },
    {
      page: 2,
      text: "After school, Ara sees many colorful snack carts near the playground.",
      text_id: "Sepulang sekolah, Ara melihat banyak gerobak jajanan warna-warni di dekat taman.",
      image: "./images/ara-makanan-sehat/02_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/02.mp3",
      audio_id: "./audio/ara-makanan-sehat/02_id.mp3",
      vocab: {
        "school": "sekolah",
        "sees": "melihat",
        "colorful": "warna-warni",
        "snack": "jajanan/makanan ringan",
        "playground": "taman bermain"
      }
    },
    {
      page: 3,
      text: "Look, there are rainbow lollipops and sweet, sticky gummies!",
      text_id: "Lihat, ada permen lolipop pelangi dan permen kenyal yang sangat manis!",
      image: "./images/ara-makanan-sehat/03_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/03.mp3",
      audio_id: "./audio/ara-makanan-sehat/03_id.mp3",
      vocab: {
        "rainbow": "pelangi",
        "sweet": "manis",
        "sticky": "lengket",
        "gummies": "permen kenyal",
        "candy": "permen"
      }
    },
    {
      page: 4,
      text: "Ara also buys cold fizzy red soda with lots of popping bubbles.",
      text_id: "Ara juga membeli minuman soda dingin berwarna merah terang dengan busa meletup-letup.",
      image: "./images/ara-makanan-sehat/04_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/04.mp3",
      audio_id: "./audio/ara-makanan-sehat/04_id.mp3",
      vocab: {
        "cold": "dingin",
        "fizzy": "bersoda/berbusa",
        "soda": "minuman soda",
        "bubbles": "gelembung busa",
        "popping": "meletup"
      }
    },
    {
      page: 5,
      text: "The fried snacks smell savory. They are crunchy, but dripping with heavy oil.",
      text_id: "Aroma gorengan gurih tercium sedap. Makanan ini renyah, tapi penuh dengan minyak.",
      image: "./images/ara-makanan-sehat/05_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/05.mp3",
      audio_id: "./audio/ara-makanan-sehat/05_id.mp3",
      vocab: {
        "fried snacks": "gorengan",
        "savory": "gurih/sedap",
        "crunchy": "renyah",
        "dripping": "menetes",
        "heavy oil": "banyak minyak"
      }
    },
    {
      page: 6,
      text: "At home, Ara turns away from Mom's vegetable soup. She prefers salty chips instead.",
      text_id: "Di rumah, Ara menolak sayur sup buatan Ibu. Ia lebih memilih keripik asin yang gurih.",
      image: "./images/ara-makanan-sehat/06_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/06.mp3",
      audio_id: "./audio/ara-makanan-sehat/06_id.mp3",
      vocab: {
        "turns away": "menolak/berpaling",
        "vegetable": "sayuran",
        "soup": "sup",
        "salty": "asin/gurih",
        "chips": "keripik"
      }
    },
    {
      page: 7,
      text: "Munch, munch! Ara eats all the snacks without taking any break.",
      text_id: "Nyam, nyam! Ara menghabiskan semua jajanan itu tanpa berhenti.",
      image: "./images/ara-makanan-sehat/07_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/07.mp3",
      audio_id: "./audio/ara-makanan-sehat/07_id.mp3",
      vocab: {
        "eats": "makan",
        "all": "semua",
        "snacks": "makanan ringan",
        "without": "tanpa",
        "break": "jeda/berhenti"
      }
    },
    {
      page: 8,
      text: "Ouch! Suddenly, Ara's tooth begins to throb and ache. The sticky sugar hurt her teeth!",
      text_id: "Aduh! Tiba-tiba gigi Ara terasa ngilu dan berdenyut sakit. Gula manis menempel di giginya!",
      image: "./images/ara-makanan-sehat/08_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/08.mp3",
      audio_id: "./audio/ara-makanan-sehat/08_id.mp3",
      vocab: {
        "ouch": "aduh",
        "suddenly": "tiba-tiba",
        "tooth": "gigi",
        "ache": "sakit/nyeri",
        "sugar": "gula"
      }
    },
    {
      page: 9,
      text: "Uh-oh, Ara's tummy feels bloated and queasy from drinking too much fizzy soda.",
      text_id: "Uhh, perut Ara juga terasa kembung, begah, dan mual karena terlalu banyak soda.",
      image: "./images/ara-makanan-sehat/09_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/09.mp3",
      audio_id: "./audio/ara-makanan-sehat/09_id.mp3",
      vocab: {
        "tummy": "perut",
        "bloated": "kembung/begah",
        "queasy": "mual",
        "too much": "terlalu banyak",
        "drinking": "meminum"
      }
    },
    {
      page: 10,
      text: "Cough, cough! Ara's throat feels scratchy and sore from the oily fried food.",
      text_id: "Uhuk, uhuk! Tenggorokan Ara terasa gatal, kering, dan sakit akibat minyak gorengan.",
      image: "./images/ara-makanan-sehat/10_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/10.mp3",
      audio_id: "./audio/ara-makanan-sehat/10_id.mp3",
      vocab: {
        "cough": "batuk",
        "throat": "tenggorokan",
        "scratchy": "gatal/serak",
        "sore": "perih/radang",
        "oily": "berminyak"
      }
    },
    {
      page: 11,
      text: "Now Ara lies weakly in bed. She has no energy left to play with her friends outside.",
      text_id: "Ara kini terbaring lemas di kamar. Tubuhnya kehilangan tenaga untuk bermain bersama teman-temannya.",
      image: "./images/ara-makanan-sehat/11_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/11.mp3",
      audio_id: "./audio/ara-makanan-sehat/11_id.mp3",
      vocab: {
        "lies": "berbaring",
        "weakly": "dengan lemas",
        "bed": "tempat tidur",
        "energy": "tenaga/energi",
        "friends": "teman-teman"
      }
    },
    {
      page: 12,
      text: "Mom comes in with a warm, caring smile. Her gentle hands soothe Ara's forehead lovingly.",
      text_id: "Ibu datang membawa senyuman hangat. Tangan Ibu yang lembut mengusap dahi Ara dengan penuh kasih sayang.",
      image: "./images/ara-makanan-sehat/12_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/12.mp3",
      audio_id: "./audio/ara-makanan-sehat/12_id.mp3",
      vocab: {
        "warm": "hangat",
        "caring": "penuh perhatian",
        "gentle": "lembut",
        "soothe": "menenangkan/mengusap",
        "forehead": "dahi/kening"
      }
    },
    {
      page: 13,
      text: "Mom explains kindly: 'Sugar harms teeth, oil causes coughs, and soda hurts your little tummy.'",
      text_id: "Ibu menasihati Ara dengan bijak: 'Gula merusak gigi, minyak membuat batuk, dan soda melukai perut kecilmu.'",
      image: "./images/ara-makanan-sehat/13_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/13.mp3",
      audio_id: "./audio/ara-makanan-sehat/13_id.mp3",
      vocab: {
        "explains": "menjelaskan/menasihati",
        "harms": "merusak/melukai",
        "causes": "menyebabkan",
        "little": "kecil",
        "kindly": "dengan ramah"
      }
    },
    {
      page: 14,
      text: "Ara sips warm spinach and carrot soup, then drinks a refreshing glass of clean water.",
      text_id: "Ara menyeruput sup sayur bayam dan wortel yang hangat, lalu minum segelas air putih segar.",
      image: "./images/ara-makanan-sehat/14_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/14.mp3",
      audio_id: "./audio/ara-makanan-sehat/14_id.mp3",
      vocab: {
        "sips": "menyeruput",
        "spinach": "bayam",
        "carrot": "wortel",
        "refreshing": "menyegarkan",
        "clean water": "air putih bersih"
      }
    },
    {
      page: 15,
      text: "The next day, Ara enjoys sweet natural papaya and bananas. Her body feels strong again!",
      text_id: "Keesokan harinya, Ara makan buah pepaya dan pisang yang manis alami. Tubuhnya mulai bugar kembali!",
      image: "./images/ara-makanan-sehat/15_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/15.mp3",
      audio_id: "./audio/ara-makanan-sehat/15_id.mp3",
      vocab: {
        "next day": "keesokan hari",
        "papaya": "pepaya",
        "banana": "pisang",
        "natural": "alami",
        "strong": "kuat/bugar"
      }
    },
    {
      page: 16,
      text: "Hooray! Ara is healthy, strong, and always chooses good food. Healthy eating is awesome!",
      text_id: "Hore! Ara kini sehat, kuat, dan selalu memilih makanan bergizi. Makan sehat itu hebat!",
      image: "./images/ara-makanan-sehat/16_compressed.jpg",
      audio: "./audio/ara-makanan-sehat/16.mp3",
      audio_id: "./audio/ara-makanan-sehat/16_id.mp3",
      vocab: {
        "hooray": "hore",
        "healthy": "sehat",
        "chooses": "memilih",
        "good food": "makanan bergizi",
        "awesome": "luar biasa/hebat"
      }
    }
  ],

  quiz: [
    {
      q: "Siapa nama anak perempuan yang menjadi tokoh utama dalam cerita? (Who is the main character in the story?)",
      options: [
        "Ara",
        "Siti",
        "Dewi"
      ],
      answer: 0
    },
    {
      q: "Dari daerah manakah Ara berasal? (Which region is Ara from?)",
      options: [
        "Jawa Barat (West Java)",
        "Jawa Timur (East Java)",
        "Sumatera Barat (West Sumatra)"
      ],
      answer: 1
    },
    {
      q: "Apa ciri khas aksesori yang tersemat pada baju Ara? (What iconic accessory is pinned to Ara's dress?)",
      options: [
        "Bros kain motif batik (A batik fabric brooch)",
        "Pita emas besar (A big golden ribbon)",
        "Pin gambar bintang perak (A silver star pin)"
      ],
      answer: 0
    },
    {
      q: "Jajanan manis apa yang dilihat Ara di dekat taman bermain? (What sweet treat did Ara see near the playground?)",
      options: [
        "Permen lolipop pelangi (Rainbow lollipop)",
        "Biskuit gandum tawar (Plain wheat crackers)",
        "Kacang rebus hangat (Warm boiled peanuts)"
      ],
      answer: 0
    },
    {
      q: "Minuman apa yang dibeli Ara yang memiliki banyak busa dan gelembung? (What drink did Ara buy with lots of fizz and bubbles?)",
      options: [
        "Susu hangat (Warm milk)",
        "Air putih (Mineral water)",
        "Minuman soda dingin (Cold fizzy soda)"
      ],
      answer: 2
    },
    {
      q: "Mengapa makanan gorengan pinggir jalan tidak boleh dimakan berlebihan? (Why shouldn't fried snacks be eaten excessively?)",
      options: [
        "Karena dingin (Because they are cold)",
        "Karena mengandung banyak minyak (Because they are dripping with heavy oil)",
        "Karena rasanya pahit (Because they taste bitter)"
      ],
      answer: 1
    },
    {
      q: "Apa yang Ara tolak saat makan siang di rumah? (What did Ara turn away from during lunch at home?)",
      options: [
        "Sayur sup buatan Ibu (Mom's vegetable soup)",
        "Keripik asin (Salty chips)",
        "Permen manis (Sweet candy)"
      ],
      answer: 0
    },
    {
      q: "Apa yang terjadi pada gigi Ara setelah makan terlalu banyak permen manis? (What happened to Ara's teeth after eating too much candy?)",
      options: [
        "Gigi bertambah putih (Teeth became whiter)",
        "Gigi berdenyut sakit dan ngilu (Tooth started to throb and ache)",
        "Gigi terasa dingin (Teeth felt cold)"
      ],
      answer: 1
    },
    {
      q: "Bagaimana kondisi perut Ara setelah meminum banyak soda? (How did Ara's tummy feel after drinking too much soda?)",
      options: [
        "Kembung, begah, dan mual (Bloated and queasy)",
        "Sangat nyaman dan lega (Very comfortable and relieved)",
        "Keroncongan lapar (Rumbling with hunger)"
      ],
      answer: 0
    },
    {
      q: "Mengapa Ara batuk dan tenggorokannya terasa gatal serta perih? (Why did Ara cough and have a scratchy throat?)",
      options: [
        "Akibat minyak dari gorengan (Due to oily fried food)",
        "Karena makan buah pepaya (Because of eating papaya)",
        "Karena minum air hangat (Because of drinking warm water)"
      ],
      answer: 0
    },
    {
      q: "Apa yang dirasakan tubuh Ara saat berbaring lemas di tempat tidur? (How did Ara's body feel lying in bed?)",
      options: [
        "Penuh energi untuk berlari (Full of energy to run)",
        "Lemas dan tidak bertenaga (Weak and without energy)",
        "Ingin melompat tinggi (Wanted to jump high)"
      ],
      answer: 1
    },
    {
      q: "Siapa yang merawat Ara dengan lembut saat ia jatuh sakit? (Who lovingly cared for Ara when she was sick?)",
      options: [
        "Ibu (Mother)",
        "Ibu Guru (Teacher)",
        "Pedagang jajanan (Snack vendor)"
      ],
      answer: 0
    },
    {
      q: "Makanan berkuah apa yang disiapkan Ibu untuk memulihkan tubuh Ara? (What warm food did Mom prepare to help Ara recover?)",
      options: [
        "Sup sayur bayam dan wortel (Spinach and carrot soup)",
        "Mie instan pedas (Spicy instant noodles)",
        "Gorengan renyah (Crispy fried fritters)"
      ],
      answer: 0
    },
    {
      q: "Buah manis alami apa yang dinikmati Ara pada keesokan harinya? (What sweet natural fruits did Ara enjoy the next day?)",
      options: [
        "Cabai dan bawang (Chili and onion)",
        "Pepaya dan pisang (Papaya and bananas)",
        "Permen karet (Chewing gum)"
      ],
      answer: 1
    },
    {
      q: "Pelajaran penting apa yang didapatkan Ara di akhir cerita? (What important lesson did Ara learn at the end?)",
      options: [
        "Jajanan sembarangan lebih baik daripada sayur (Random street snacks are better than vegetables)",
        "Makan makanan bergizi membuat tubuh sehat dan kuat (Eating nutritious food makes the body healthy and strong)",
        "Tidak perlu minum air putih setiap hari (No need to drink water every day)"
      ],
      answer: 1
    }
  ]
});
