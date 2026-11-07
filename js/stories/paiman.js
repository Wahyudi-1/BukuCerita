/**
 * ================================================================
 * TEMPLATE BUKU CERITA MODULAR (DWIPROGRAM / BILINGUAL READY)
 * Cerita: Paiman Mengenal Enam Agama di Indonesia
 * Target: Fase A / SD Kelas 1
 * ================================================================
 */

window.STORIES_DATABASE = window.STORIES_DATABASE || [];

window.STORIES_DATABASE.push({
  id: "paiman-mengenal-enam-agama",
  title: "Paiman dan Enam Sahabat Rukun",
  category: "Fase A / Kelas 1",
  defaultLang: "id",
  cover: "./images/paiman-enam-agama/pai16.jpg",
  description: "Ikuti kisah seru Paiman mengenal enam agama resmi di Indonesia, tempat ibadah, serta indahnya hidup rukun penuh toleransi.",

  highlightTheme: {
    bg: "linear-gradient(135deg, #bae6fd, #7dd3fc)", // Langit biru cerah
    text: "#0369a1",                                  // Biru laut dalam
    border: "#0284c7",                                // Garis batas biru
    shadow: "rgba(2, 132, 199, 0.55)"                // Kilau neon biru
  },

  pages: [
    {
      page: 1,
      text: "Hello! My name is Paiman. I am a friendly Indonesian boy who loves making new friends!",
      text_id: "Halo! Namaku Paiman. Aku anak Indonesia yang ramah dan suka mencari banyak teman!",
      image: "./images/paiman-enam-agama/pai01.jpg",
      audio: "./audio/paiman-enam-agama/pai01.mp3",
      audio_id: "./audio/paiman-enam-agama/pai01_id.mp3",
      vocab: {
        "hello": "halo",
        "name": "nama",
        "friendly": "ramah",
        "boy": "anak laki-laki",
        "friends": "teman-teman"
      }
    },
    {
      page: 2,
      text: "In Indonesia, there are six official religions. We all live peacefully and care for one another.",
      text_id: "Di Indonesia, ada enam agama resmi. Walau berbeda, kita semua hidup rukun dan saling menyayangi.",
      image: "./images/paiman-enam-agama/pai02.jpg",
      audio: "./audio/paiman-enam-agama/pai02.mp3",
      audio_id: "./audio/paiman-enam-agama/pai02_id.mp3",
      vocab: {
        "six": "enam",
        "religions": "agama",
        "peacefully": "dengan rukun",
        "care": "menyayangi / peduli"
      }
    },
    {
      page: 3,
      text: "This is Ahmad, my Muslim friend. Ahmad's place of worship is called a Mosque.",
      text_id: "Ini Ahmad, temanku yang beragama Islam. Tempat ibadah Ahmad bernama Masjid.",
      image: "./images/paiman-enam-agama/pai03.jpg",
      audio: "./audio/paiman-enam-agama/pai03.mp3",
      audio_id: "./audio/paiman-enam-agama/pai03_id.mp3",
      vocab: {
        "Muslim": "orang beragama Islam",
        "friend": "teman",
        "worship": "beribadah",
        "mosque": "masjid"
      }
    },
    {
      page: 4,
      text: "Before praying, Ahmad washes with clean water. Ahmad kneels and prays peacefully to God.",
      text_id: "Sebelum shalat, Ahmad berwudu dengan air bersih. Ahmad bersujud dan berdoa kepada Allah dengan khusyuk.",
      image: "./images/paiman-enam-agama/pai04.jpg",
      audio: "./audio/paiman-enam-agama/pai04.mp3",
      audio_id: "./audio/paiman-enam-agama/pai04_id.mp3",
      vocab: {
        "praying": "berdoa / shalat",
        "washes": "membasuh / berwudu",
        "clean": "bersih",
        "water": "air",
        "kneels": "bersujud / berlutut"
      }
    },
    {
      page: 5,
      text: "This is Sarah, my Protestant Christian friend. Sarah's place of worship is called a Church.",
      text_id: "Ini Sarah, temanku yang beragama Kristen Protestan. Tempat ibadah Sarah bernama Gereja.",
      image: "./images/paiman-enam-agama/pai05.jpg",
      audio: "./audio/paiman-enam-agama/pai05.mp3",
      audio_id: "./audio/paiman-enam-agama/pai05_id.mp3",
      vocab: {
        "Protestant": "Kristen Protestan",
        "church": "gereja",
        "called": "disebut / bernama",
        "place": "tempat"
      }
    },
    {
      page: 6,
      text: "Every Sunday, Sarah goes to church. Sarah sings joyful praise songs and prays with happiness.",
      text_id: "Setiap hari Minggu, Sarah pergi ke gereja. Sarah bernyanyi lagu pujian dan berdoa dengan riang gembira.",
      image: "./images/paiman-enam-agama/pai06.jpg",
      audio: "./audio/paiman-enam-agama/pai06.mp3",
      audio_id: "./audio/paiman-enam-agama/pai06_id.mp3",
      vocab: {
        "Sunday": "hari Minggu",
        "goes": "pergi",
        "sings": "bernyanyi",
        "songs": "lagu-lagu",
        "joyful": "riang gembira"
      }
    },
    {
      page: 7,
      text: "This is Edo, my Catholic friend. Edo's place of worship is also called a Catholic Church.",
      text_id: "Ini Edo, temanku yang beragama Katolik. Tempat ibadah Edo juga bernama Gereja Katolik.",
      image: "./images/paiman-enam-agama/pai07.jpg",
      audio: "./audio/paiman-enam-agama/pai07.mp3",
      audio_id: "./audio/paiman-enam-agama/pai07_id.mp3",
      vocab: {
        "Catholic": "Katolik",
        "church": "gereja",
        "also": "juga",
        "friend": "teman"
      }
    },
    {
      page: 8,
      text: "Edo attends Holy Mass. Edo makes the sign of the cross and prays with deep reverence.",
      text_id: "Edo mengikuti perayaan misa suci. Edo membuat tanda salib dan berdoa dengan penuh rasa hormat.",
      image: "./images/paiman-enam-agama/pai08.jpg",
      audio: "./audio/paiman-enam-agama/pai08.mp3",
      audio_id: "./audio/paiman-enam-agama/pai08_id.mp3",
      vocab: {
        "attends": "mengikuti / hadir",
        "Mass": "misa",
        "cross": "salib",
        "reverence": "rasa hormat"
      }
    },
    {
      page: 9,
      text: "Look, we love playing together! Even though our prayers are different, we always respect each other.",
      text_id: "Lihatlah, kami senang bermain bersama! Walau cara kami berdoa berbeda, kami selalu saling menghargai.",
      image: "./images/paiman-enam-agama/pai09.jpg",
      audio: "./audio/paiman-enam-agama/pai09.mp3",
      audio_id: "./audio/paiman-enam-agama/pai09_id.mp3",
      vocab: {
        "look": "lihat",
        "playing": "bermain",
        "together": "bersama",
        "different": "berbeda",
        "respect": "menghargai"
      }
    },
    {
      page: 10,
      text: "This is Wayan, my Hindu friend from Bali. Wayan's place of worship is called a Pura.",
      text_id: "Ini Wayan, temanku dari Bali yang beragama Hindu. Tempat ibadah Wayan bernama Pura.",
      image: "./images/paiman-enam-agama/pai10.jpg",
      audio: "./audio/paiman-enam-agama/pai10.mp3",
      audio_id: "./audio/paiman-enam-agama/pai10_id.mp3",
      vocab: {
        "Hindu": "beragama Hindu",
        "temple": "pura / tempat ibadah",
        "Pura": "pura",
        "Bali": "pulau Bali"
      }
    },
    {
      page: 11,
      text: "Wayan prays holding colorful flowers and sweet incense. Wayan prays for peace and harmony in the universe.",
      text_id: "Wayan bersembahyang membawa bunga warna-warni dan dupa wangi. Wayan berdoa memohon kebaikan bagi alam semesta.",
      image: "./images/paiman-enam-agama/pai11.jpg",
      audio: "./audio/paiman-enam-agama/pai11.mp3",
      audio_id: "./audio/paiman-enam-agama/pai11_id.mp3",
      vocab: {
        "flowers": "bunga-bunga",
        "incense": "dupa",
        "peace": "kedamaian",
        "harmony": "keharmonisan",
        "universe": "alam semesta"
      }
    },
    {
      page: 12,
      text: "This is Sinta, my Buddhist friend. Sinta's place of worship is called a Vihara.",
      text_id: "Ini Sinta, temanku yang beragama Buddha. Tempat ibadah Sinta bernama Vihara.",
      image: "./images/paiman-enam-agama/pai12.jpg",
      audio: "./audio/paiman-enam-agama/pai12.mp3",
      audio_id: "./audio/paiman-enam-agama/pai12_id.mp3",
      vocab: {
        "Buddhist": "orang beragama Buddha",
        "Vihara": "vihara",
        "called": "bernama / disebut",
        "friend": "teman"
      }
    },
    {
      page: 13,
      text: "Sinta gently clasps her palms together. Sinta sits quietly and meditates to find peace in her heart.",
      text_id: "Sinta merapatkan kedua tangannya di depan dada. Sinta duduk tenang dan bermeditasi agar hatinya damai.",
      image: "./images/paiman-enam-agama/pai13.jpg",
      audio: "./audio/paiman-enam-agama/pai13.mp3",
      audio_id: "./audio/paiman-enam-agama/pai13_id.mp3",
      vocab: {
        "palms": "telapak tangan",
        "quietly": "dengan tenang",
        "meditates": "bermeditasi",
        "heart": "hati"
      }
    },
    {
      page: 14,
      text: "This is Chen, my friend who practices Confucianism. Chen's place of worship is called a Klenteng or Litang.",
      text_id: "Ini Chen, temanku yang beragama Khonghucu. Tempat ibadah Chen bernama Klenteng atau Litang.",
      image: "./images/paiman-enam-agama/pai14.jpg",
      audio: "./audio/paiman-enam-agama/pai14.mp3",
      audio_id: "./audio/paiman-enam-agama/pai14_id.mp3",
      vocab: {
        "Confucianism": "Khonghucu",
        "temple": "klenteng",
        "Klenteng": "klenteng",
        "Litang": "litang"
      }
    },
    {
      page: 15,
      text: "Chen holds fragrant incense sticks and bows politely. Chen gives thanks for blessings and good health.",
      text_id: "Chen memegang dupa harum dan membungkuk sopan. Chen bersyukur atas segala rezeki dan kebaikan hidup.",
      image: "./images/paiman-enam-agama/pai15.jpg",
      audio: "./audio/paiman-enam-agama/pai15.mp3",
      audio_id: "./audio/paiman-enam-agama/pai15_id.mp3",
      vocab: {
        "holds": "memegang",
        "bows": "membungkuk",
        "politely": "dengan sopan",
        "thanks": "bersyukur / terima kasih",
        "health": "kesehatan"
      }
    },
    {
      page: 16,
      text: "Wow, our friendship is so wonderful! Six different religions, yet we always play and learn together.",
      text_id: "Wah, indahnya persahabatan kita! Enam agama yang berbeda, tetapi kami selalu bermain dan belajar bersama.",
      image: "./images/paiman-enam-agama/pai16.jpg",
      audio: "./audio/paiman-enam-agama/pai16.mp3",
      audio_id: "./audio/paiman-enam-agama/pai16_id.mp3",
      vocab: {
        "friendship": "persahabatan",
        "wonderful": "sangat indah",
        "learn": "belajar",
        "together": "bersama"
      }
    },
    {
      page: 17,
      text: "Unity in Diversity: Different yet united as one! I am proud to be a tolerant Indonesian child who loves everyone!",
      text_id: "Bhinneka Tunggal Ika: Berbeda-beda tetapi tetap satu! Aku bangga menjadi anak Indonesia yang toleran dan saling menyayangi!",
      image: "./images/paiman-enam-agama/pai17.jpg",
      audio: "./audio/paiman-enam-agama/pai17.mp3",
      audio_id: "./audio/paiman-enam-agama/pai17_id.mp3",
      vocab: {
        "unity": "persatuan",
        "diversity": "keberagaman",
        "united": "bersatu",
        "proud": "bangga",
        "tolerant": "toleran"
      }
    }
  ],

  quiz: [
    {
      q: "Who is the main boy in this story? (Siapa nama tokoh anak laki-laki utama dalam cerita ini?)",
      options: [
        "Paiman (Paiman)",
        "Budi (Budi)",
        "Tono (Tono)"
      ],
      answer: 0
    },
    {
      q: "How many official religions are introduced in Indonesia? (Ada berapa agama resmi di Indonesia yang dikenalkan?)",
      options: [
        "Two (Dua)",
        "Six (Enam)",
        "Ten (Sepuluh)"
      ],
      answer: 1
    },
    {
      q: "What is the place of worship for Ahmad, who is Muslim? (Apa nama tempat ibadah Ahmad yang beragama Islam?)",
      options: [
        "Mosque / Masjid (Masjid)",
        "Church / Gereja (Gereja)",
        "Pura / Pura (Pura)"
      ],
      answer: 0
    },
    {
      q: "What does Ahmad do before praying to be clean? (Apa yang dilakukan Ahmad sebelum shalat agar bersih?)",
      options: [
        "Washes with clean water / Berwudu (Berwudu membasuh air)",
        "Eats snacks (Makan camilan)",
        "Sleeps (Tidur)"
      ],
      answer: 0
    },
    {
      q: "Where does Sarah go to worship every Sunday? (Ke mana Sarah pergi beribadah setiap hari Minggu?)",
      options: [
        "School (Sekolah)",
        "Protestant Church (Gereja Kristen Protestan)",
        "Market (Pasar)"
      ],
      answer: 1
    },
    {
      q: "What does Sarah do happily at church? (Apa yang dilakukan Sarah dengan riang di gereja?)",
      options: [
        "Sings praise songs (Bernyanyi lagu pujian)",
        "Rides a bicycle (Naik sepeda)",
        "Cooks soup (Memasak sup)"
      ],
      answer: 0
    },
    {
      q: "What is Edo's religion? (Apa agama yang dianut oleh Edo?)",
      options: [
        "Islam (Islam)",
        "Hindu (Hindu)",
        "Catholic (Kristen Katolik)"
      ],
      answer: 2
    },
    {
      q: "What holy celebration does Edo attend at church? (Ibadah perayaan suci apa yang diikuti Edo di gereja?)",
      options: [
        "Holy Mass / Misa suci (Misa suci)",
        "Picnic (Piknik)",
        "Dance contest (Lomba menari)"
      ],
      answer: 0
    },
    {
      q: "Where does Wayan come from? (Dari pulau manakah asal teman Paiman, Wayan?)",
      options: [
        "Papua (Papua)",
        "Bali (Bali)",
        "Sumatra (Sumatra)"
      ],
      answer: 1
    },
    {
      q: "What is the name of the Hindu place of worship? (Apa nama tempat ibadah umat Hindu?)",
      options: [
        "Pura (Pura)",
        "Masjid (Masjid)",
        "Vihara (Vihara)"
      ],
      answer: 0
    },
    {
      q: "What does Wayan bring when praying at the Pura? (Benda apa yang dibawa Wayan saat sembahyang di Pura?)",
      options: [
        "Football (Bola kaki)",
        "Flowers and incense (Bunga dan dupa wangi)",
        "Books and pencil (Buku dan pensil)"
      ],
      answer: 1
    },
    {
      q: "Where does Sinta, who is Buddhist, worship? (Di manakah tempat ibadah Sinta yang beragama Buddha?)",
      options: [
        "Vihara (Vihara)",
        "Church (Gereja)",
        "Mosque (Masjid)"
      ],
      answer: 0
    },
    {
      q: "How does Sinta sit when meditating in the Vihara? (Bagaimana sikap duduk Sinta saat bermeditasi di Vihara?)",
      options: [
        "Running around (Berlari-lari)",
        "Sitting quietly and peacefully (Duduk tenang dan damai)",
        "Jumping high (Melompat tinggi)"
      ],
      answer: 1
    },
    {
      q: "What is Chen's place of worship called? (Apa nama tempat ibadah Chen yang beragama Khonghucu?)",
      options: [
        "Klenteng or Litang (Klenteng atau Litang)",
        "Park (Taman bermain)",
        "Cinema (Bioskop)"
      ],
      answer: 0
    },
    {
      q: "What does 'Bhinneka Tunggal Ika' mean? (Apa arti dari semboyan Bhinneka Tunggal Ika?)",
      options: [
        "Always sleeping (Selalu tidur bersama)",
        "Different yet united as one (Berbeda-beda tetapi tetap satu)",
        "Only one person can play (Hanya satu orang yang boleh main)"
      ],
      answer: 1
    }
  ]
});
