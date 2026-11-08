/**
 * ================================================================
 * TEMPLATE BUKU CERITA MODULAR (DWIPROGRAM / BILINGUAL READY)
 * Cerita: Petualangan Sains Saiman - Rahasia Kupu-Kupu
 * Sasaran: SD Kelas 1 (Fase A)
 * ================================================================
 */

window.STORIES_DATABASE = window.STORIES_DATABASE || [];

window.STORIES_DATABASE.push({
  id: "sains-saiman-kupu-kupu",
  title: "Petualangan Sains Saiman: Rahasia Kupu-Kupu",
  category: "Fase A / SD Kelas 1",
  defaultLang: "id",
  cover: "./images/sains-saiman-kupu-kupu/saicover_compressed.jpg",
  description: "Ikuti petualangan Saiman, anak laki-laki pecinta sains, yang mengamati keajaiban metamorfosis kupu-kupu dari sebutir telur kecil hingga bisa terbang bebas di kebunnya.",

  highlightTheme: {
    bg: "linear-gradient(135deg, #fef08a, #86efac)", // Kuning ceria ke hijau pucuk daun
    text: "#14532d",                                  // Teks hijau tua tajam
    border: "#16a34a",                                // Garis batas hijau segar
    shadow: "rgba(34, 197, 94, 0.45)"                // Kilau neon lembut
  },

  pages: [
    {
      page: 1,
      text: "Hello, friends! My name is Saiman. I love exploring and learning science in my home garden!",
      text_id: "Halo, teman-teman! Namaku Saiman. Aku sangat suka menjelajah dan belajar sains di kebun rumahku!",
      image: "./images/sains-saiman-kupu-kupu/sai01_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai01.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai01_id.mp3",
      vocab: {
        "friends": "teman-teman",
        "exploring": "menjelajah",
        "learning": "belajar",
        "science": "ilmu pengetahuan alam (sains)",
        "garden": "kebun"
      }
    },
    {
      page: 2,
      text: "Today, Saiman finds a wide green leaf. What little secret is hiding underneath?",
      text_id: "Hari ini, Saiman menemukan sebuah daun hijau yang lebar. Ada rahasia kecil apa ya di baliknya?",
      image: "./images/sains-saiman-kupu-kupu/sai02_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai02.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai02_id.mp3",
      vocab: {
        "finds": "menemukan",
        "wide": "lebar",
        "leaf": "daun",
        "secret": "rahasia",
        "underneath": "di bawah / di balik"
      }
    },
    {
      page: 3,
      text: "Look! A tiny yellow dot is sticking firmly to the leaf. This is a butterfly egg!",
      text_id: "Lihat! Ada butiran kuning kecil menempel erat di daun. Ini adalah telur kupu-kupu!",
      image: "./images/sains-saiman-kupu-kupu/sai03_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai03.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai03_id.mp3",
      vocab: {
        "look": "lihatlah",
        "tiny": "sangat kecil / mungil",
        "sticking": "menempel",
        "butterfly": "kupu-kupu",
        "egg": "telur"
      }
    },
    {
      page: 4,
      text: "Crack, pop! A few days later, the tiny egg hatches. Out comes a cute little caterpillar!",
      text_id: "Krik, krak! Beberapa hari kemudian, telur kecil itu menetas. Keluarlah seekor ulat mungil!",
      image: "./images/sains-saiman-kupu-kupu/sai04_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai04.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai04_id.mp3",
      vocab: {
        "crack": "retak / pecah",
        "hatches": "menetas",
        "cute": "lucu",
        "caterpillar": "ulat"
      }
    },
    {
      page: 5,
      text: "Nom, nom, nom! The little caterpillar is very hungry. It munches on fresh, crunchy leaves.",
      text_id: "Nyam, nyam, nyam! Ulat kecil sangat lapar. Ia mulai memakan daun hijau yang segar dan renyah.",
      image: "./images/sains-saiman-kupu-kupu/sai05_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai05.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai05_id.mp3",
      vocab: {
        "hungry": "lapar",
        "munches": "mengunyah",
        "fresh": "segar",
        "crunchy": "renyah",
        "leaves": "daun-daun"
      }
    },
    {
      page: 6,
      text: "Saiman writes in his notebook. Every day, the caterpillar eats a lot and grows bigger and bigger!",
      text_id: "Saiman mencatat di buku sainsnya. Setiap hari, ulat makan banyak dan badannya bertambah panjang!",
      image: "./images/sains-saiman-kupu-kupu/sai06_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai06.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai06_id.mp3",
      vocab: {
        "writes": "menulis / mencatat",
        "notebook": "buku catatan",
        "eats": "makan",
        "grows": "tumbuh",
        "bigger": "lebih besar"
      }
    },
    {
      page: 7,
      text: "Wow, the caterpillar is chubby and full! Now, it is time for a long, quiet rest.",
      text_id: "Wah, perut ulat sudah kenyang dan gemuk! Sekarang waktunya untuk istirahat panjang.",
      image: "./images/sains-saiman-kupu-kupu/sai07_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai07.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai07_id.mp3",
      vocab: {
        "chubby": "gemuk / montok",
        "full": "kenyang / penuh",
        "time": "waktu",
        "quiet": "tenang",
        "rest": "istirahat"
      }
    },
    {
      page: 8,
      text: "The caterpillar clings to a twig. It hangs upside down, shaping its body like the letter J!",
      text_id: "Ulat menempel di ranting kayu. Tubuhnya bergelantungan terbalik seperti huruf J yang lucu!",
      image: "./images/sains-saiman-kupu-kupu/sai08_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai08.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai08_id.mp3",
      vocab: {
        "clings": "bergelantungan erat",
        "twig": "ranting pohon",
        "upside down": "terbalik",
        "shaping": "membentuk",
        "letter": "huruf"
      }
    },
    {
      page: 9,
      text: "Zip! The caterpillar sheds its skin. Now it sleeps inside a shiny green chrysalis.",
      text_id: "Sret! Kulit ulat terlepas. Kini ia terbungkus rapi menjadi kepompong hijau yang berkilau.",
      image: "./images/sains-saiman-kupu-kupu/sai09_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai09.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai09_id.mp3",
      vocab: {
        "sheds": "melepaskan / berganti kulit",
        "skin": "kulit",
        "sleeps": "tidur",
        "shiny": "berkilau",
        "chrysalis": "kepompong"
      }
    },
    {
      page: 10,
      text: "Saiman waits patiently. Inside the chrysalis, a science miracle is taking place!",
      text_id: "Saiman menunggu dengan sabar. Di dalam kepompong, keajaiban sains sedang terjadi!",
      image: "./images/sains-saiman-kupu-kupu/sai10_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai10.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai10_id.mp3",
      vocab: {
        "waits": "menunggu",
        "patiently": "dengan sabar",
        "inside": "di dalam",
        "miracle": "keajaiban"
      }
    },
    {
      page: 11,
      text: "The chrysalis turns clear! Saiman can see bright orange and black wing patterns inside.",
      text_id: "Bungkus kepompong mulai bening! Pola sayap berwarna jingga dan hitam mulai terlihat dari luar.",
      image: "./images/sains-saiman-kupu-kupu/sai11_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai11.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai11_id.mp3",
      vocab: {
        "clear": "bening / tembus pandang",
        "bright": "cerah",
        "orange": "jingga / oranye",
        "patterns": "pola-pola",
        "wings": "sayap-sayap"
      }
    },
    {
      page: 12,
      text: "Crack! The chrysalis gently opens. Hello, beautiful butterfly! Its wings are still soft and damp.",
      text_id: "Krak! Kepompong terbuka perlahan. Halo, kupu-kupu yang cantik! Sayapnya masih lembut dan basah.",
      image: "./images/sains-saiman-kupu-kupu/sai12_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai12.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai12_id.mp3",
      vocab: {
        "opens": "terbuka",
        "gently": "dengan lembut",
        "beautiful": "cantik / indah",
        "soft": "lembut",
        "damp": "lembap / agak basah"
      }
    },
    {
      page: 13,
      text: "The butterfly warms up in the morning sun. Its wings dry out and become strong!",
      text_id: "Kupu-kupu berjemur di bawah sinar mentari pagi. Sayapnya mengering dan menjadi sangat kuat!",
      image: "./images/sains-saiman-kupu-kupu/sai13_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai13.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai13_id.mp3",
      vocab: {
        "warms up": "menghangatkan tubuh / berjemur",
        "morning sun": "matahari pagi",
        "dry out": "mengering",
        "become": "menjadi",
        "strong": "kuat"
      }
    },
    {
      page: 14,
      text: "Flap, flap! The butterfly flies high, dancing gracefully in the air above the blooming flowers.",
      text_id: "Kepak, kepak! Kupu-kupu terbang tinggi menari di udara menyapa bunga-bunga yang mekar.",
      image: "./images/sains-saiman-kupu-kupu/sai14_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai14.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai14_id.mp3",
      vocab: {
        "flap": "mengepakkan sayap",
        "flies": "terbang",
        "high": "tinggi",
        "dancing": "menari",
        "blooming": "sedang mekar"
      }
    },
    {
      page: 15,
      text: "Science is truly amazing! From a tiny egg to a gorgeous butterfly. Fly high, my little friend!",
      text_id: "Sains itu sungguh luar biasa! Dari telur kecil hingga kupu-kupu yang indah. Selamat terbang, sahabat kecilku!",
      image: "./images/sains-saiman-kupu-kupu/sai15_compressed.jpg",
      audio: "./audio/sains-saiman-kupu-kupu/sai15.mp3",
      audio_id: "./audio/sains-saiman-kupu-kupu/sai15_id.mp3",
      vocab: {
        "amazing": "luar biasa / menakjubkan",
        "gorgeous": "sangat indah",
        "friend": "sahabat / kawan"
      }
    }
  ],

  // KUIS PEMAHAMAN BACAAN (15 SOAL LENGKAP BILINGUAL)
  quiz: [
    {
      q: "Siapa nama anak laki-laki yang suka belajar sains di kebun? (What is the name of the boy who loves learning science in the garden?)",
      options: [
        "Saiman",
        "Boni",
        "Kiko"
      ],
      answer: 0
    },
    {
      q: "Benda apa yang dikalungkan di leher Saiman untuk mengamati benda kecil? (What does Saiman wear around his neck to observe tiny things?)",
      options: [
        "Kacamata renang (Swimming goggles)",
        "Kaca pembesar (Magnifying glass)",
        "Tali sepatu (Shoelace)"
      ],
      answer: 1
    },
    {
      q: "Di mana Saiman menemukan telur kupu-kupu? (Where did Saiman find the butterfly egg?)",
      options: [
        "Di balik daun hijau (Underneath a green leaf)",
        "Di dalam pot bunga (Inside a flower pot)",
        "Di atas atap rumah (On the roof)"
      ],
      answer: 0
    },
    {
      q: "Seperti apa bentuk telur kupu-kupu yang dilihat Saiman? (What did the butterfly egg look like?)",
      options: [
        "Batu besar hitam (A big black rock)",
        "Kotak kayu cokelat (A brown wooden box)",
        "Butiran kuning kecil yang menempel (A tiny yellow sticking dot)"
      ],
      answer: 2
    },
    {
      q: "Hewan apa yang keluar saat telur itu menetas? (What animal came out when the egg hatched?)",
      options: [
        "Ulat kecil (A little caterpillar)",
        "Semut merah (A red ant)",
        "Katak hijau (A green frog)"
      ],
      answer: 0
    },
    {
      q: "Apa makanan yang dimakan ulat agar tumbuh besar? (What does the caterpillar eat to grow big?)",
      options: [
        "Roti tawar (Bread)",
        "Daun hijau yang segar (Fresh green leaves)",
        "Biskuit cokelat (Chocolate biscuits)"
      ],
      answer: 1
    },
    {
      q: "Apa yang dilakukan Saiman di buku catatannya setiap hari? (What does Saiman do in his notebook every day?)",
      options: [
        "Menggambar mobil (Drawing cars)",
        "Mencatat pertumbuhan ulat (Writing notes on caterpillar growth)",
        "Menempel stiker robot (Sticking robot stickers)"
      ],
      answer: 1
    },
    {
      q: "Bagaimana bentuk tubuh ulat setelah makan banyak daun? (How did the caterpillar look after eating lots of leaves?)",
      options: [
        "Gemuk dan panjang (Chubby and long)",
        "Makin tipis (Thinner)",
        "Berwarna biru (Blue colored)"
      ],
      answer: 0
    },
    {
      q: "Seperti huruf apa posisi ulat saat bergelantungan di ranting? (What letter shape did the caterpillar make while hanging on the twig?)",
      options: [
        "Huruf O (Letter O)",
        "Huruf J (Letter J)",
        "Huruf X (Letter X)"
      ],
      answer: 1
    },
    {
      q: "Menjadi apa ulat setelah kulitnya terlepas di ranting? (What did the caterpillar become after shedding its skin on the twig?)",
      options: [
        "Kepompong (Chrysalis)",
        "Sarang burung (Bird nest)",
        "Buah apel (An apple)"
      ],
      answer: 0
    },
    {
      q: "Apa yang dilakukan Saiman saat ulat berada di dalam kepompong? (What did Saiman do while the caterpillar was inside the chrysalis?)",
      options: [
        "Menunggu dengan sabar (Waiting patiently)",
        "Menggoyangkan ranting (Shaking the twig)",
        "Membuka paksa kepompong (Opening the chrysalis by force)"
      ],
      answer: 0
    },
    {
      q: "Apa tanda bahwa kupu-kupu di dalam kepompong sudah siap keluar? (What is the sign that the butterfly inside is ready to emerge?)",
      options: [
        "Kepompong berubah menjadi batu (The chrysalis turns to stone)",
        "Kepompong menjadi bening dan pola sayap terlihat (The chrysalis turns clear and wing patterns show)",
        "Kepompong berbunyi keras (The chrysalis makes a loud sound)"
      ],
      answer: 1
    },
    {
      q: "Bagaimana kondisi sayap kupu-kupu saat baru saja keluar dari kepompong? (How are the butterfly's wings right after emerging from the chrysalis?)",
      options: [
        "Keras dan kaku (Hard and stiff)",
        "Langsung bisa terbang cepat (Ready to fly fast immediately)",
        "Masih lembut dan agak basah (Still soft and damp)"
      ],
      answer: 2
    },
    {
      q: "Mengapa kupu-kupu berjemur di bawah matahari pagi? (Why does the butterfly warm up under the morning sun?)",
      options: [
        "Agar sayapnya mengering dan menjadi kuat (To dry its wings and make them strong)",
        "Untuk tidur siang (To take an afternoon nap)",
        "Untuk mencari kacamata (To search for glasses)"
      ],
      answer: 0
    },
    {
      q: "Apa nama keseluruhan proses perubahan menakjubkan ini? (What is the scientific name of this amazing transformation process?)",
      options: [
        "Fotosintesis (Photosynthesis)",
        "Metamorfosis (Metamorphosis)",
        "Gravitasi (Gravity)"
      ],
      answer: 1
    }
  ]
});
