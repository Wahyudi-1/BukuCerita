/**
 * ================================================================
 * TEMPLATE BUKU CERITA MODULAR (DWIPROGRAM / BILINGUAL READY)
 * ================================================================
 * Judul: Thoriq Belajar Mengikat Sepatu / Thoriq Learns to Tie His Shoes
 * Target: TK A (Fase Fondasi)
 * Tema: Salah saat mencoba adalah hal wajar, pantang menyerah pasti berhasil
 * Halaman: 17 Halaman Lengkap
 */

window.STORIES_DATABASE = window.STORIES_DATABASE || [];

window.STORIES_DATABASE.push({
  id: "thoriq-belajar-tali-sepatu",
  title: "Thoriq Belajar Mengikat Sepatu",
  category: "Fase Fondasi / TK A",
  defaultLang: "id",
  cover: "./images/thoriq-tali-sepatu/th01_compressed.jpg",
  description: "Kisah inspiratif Thoriq, siswa kelas 1 SD yang belajar mengikat tali sepatu sendiri. Belajar itu boleh salah, yang terpenting jangan mudah menyerah!",

  // Tema warna aksen antarmuka (Biru sepatu dan Kuning tali)
  highlightTheme: {
    bg: "linear-gradient(135deg, #bfdbfe, #fef08a)", 
    text: "#1e3a8a",                                  
    border: "#3b82f6",                                
    shadow: "rgba(59, 130, 246, 0.45)"                
  },

  pages: [
    {
      page: 1,
      text: "Hello! This is Thoriq. Today, Thoriq is wearing his new bright blue shoes!",
      text_id: "Halo! Ini Thoriq. Hari ini, Thoriq memakai sepatu baru berwarna biru!",
      image: "./images/thoriq-tali-sepatu/th01_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th01.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th01_id.mp3",
      vocab: {
        "shoes": "sepatu",
        "new": "baru",
        "blue": "biru",
        "wearing": "memakai",
        "today": "hari ini"
      }
    },
    {
      page: 2,
      text: "Look at the long laces! Thoriq wants to tie his shoes all by himself.",
      text_id: "Lihat talinya yang panjang! Thoriq ingin belajar mengikat sepatunya sendiri.",
      image: "./images/thoriq-tali-sepatu/th02_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th02.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th02_id.mp3",
      vocab: {
        "laces": "tali sepatu",
        "long": "panjang",
        "tie": "mengikat",
        "himself": "sendiri"
      }
    },
    {
      page: 3,
      text: "Cross to the left, cross to the right. Oops! The shoelace gets all tangled up!",
      text_id: "Silang ke kiri, silang ke kanan. Aduh, talinya malah kusut dan melilit!",
      image: "./images/thoriq-tali-sepatu/th03_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th03.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th03_id.mp3",
      vocab: {
        "cross": "menyilang",
        "left": "kiri",
        "right": "kanan",
        "tangled": "kusut"
      }
    },
    {
      page: 4,
      text: "Thoriq scratches his head. Tying shoelaces is tricky, isn't it?",
      text_id: "Thoriq menggaruk kepalanya. Menyilangkan tali ternyata tidak semudah itu ya?",
      image: "./images/thoriq-tali-sepatu/th04_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th04.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th04_id.mp3",
      vocab: {
        "head": "kepala",
        "scratches": "menggaruk",
        "tricky": "sulit / butuh keahlian",
        "tying": "mengikat"
      }
    },
    {
      page: 5,
      text: "Mom comes over with a warm smile. 'Making mistakes is okay, dear. It means your brain is learning!'",
      text_id: "Ibu datang tersenyum. 'Salah saat mencoba itu biasa, Nak. Itu tanda otakmu sedang belajar!'",
      image: "./images/thoriq-tali-sepatu/th05_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th05.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th05_id.mp3",
      vocab: {
        "smile": "senyum",
        "mistakes": "kesalahan",
        "brain": "otak",
        "learning": "sedang belajar"
      }
    },
    {
      page: 6,
      text: "Thoriq takes a deep breath. Whew! He smiles again. 'I will try again, Mom!'",
      text_id: "Thoriq menarik napas panjang. Huuufff... Ia tersenyum lagi. 'Aku mau coba lagi, Ibu!'",
      image: "./images/thoriq-tali-sepatu/th06_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th06.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th06_id.mp3",
      vocab: {
        "breath": "napas",
        "deep": "panjang / dalam",
        "again": "lagi",
        "try": "mencoba"
      }
    },
    {
      page: 7,
      text: "One by one, he gently untangles the knot. Being patient is wonderful!",
      text_id: "Satu per satu simpul yang kusut ia buka perlahan. Sabar itu hebat!",
      image: "./images/thoriq-tali-sepatu/th07_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th07.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th07_id.mp3",
      vocab: {
        "gently": "dengan lembut",
        "knot": "simpul",
        "patient": "sabar",
        "wonderful": "hebat / luar biasa"
      }
    },
    {
      page: 8,
      text: "Step one: Make a neat criss-cross X. Pull it down, whoosh!",
      text_id: "Langkah pertama: Buat huruf X silang yang rapi. Tarik ke bawah, sreeet!",
      image: "./images/thoriq-tali-sepatu/th08_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th08.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th08_id.mp3",
      vocab: {
        "step": "langkah",
        "neat": "rapi",
        "pull": "tarik",
        "down": "ke bawah"
      }
    },
    {
      page: 9,
      text: "Now, make a cute little bunny ear. Loop it up, hop!",
      text_id: "Sekarang, buat telinga kelinci yang lucu. Melengkung ke atas, hap!",
      image: "./images/thoriq-tali-sepatu/th09_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th09.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th09_id.mp3",
      vocab: {
        "bunny": "kelinci",
        "ear": "telinga",
        "cute": "lucu",
        "loop": "melengkung / lingkaran"
      }
    },
    {
      page: 10,
      text: "Whoosh! The lace slipped away. The little bunny hopped free, haha!",
      text_id: "Wuuush! Talinya terlepas lagi. Kelincinya melompat kabur, hihihi!",
      image: "./images/thoriq-tali-sepatu/th10_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th10.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th10_id.mp3",
      vocab: {
        "slipped": "tergelincir / lepas",
        "free": "bebas",
        "hopped": "melompat",
        "away": "pergi"
      }
    },
    {
      page: 11,
      text: "Thoriq does not give up. 'Come on sweet bunny, let's try once more!'",
      text_id: "Thoriq tidak menyerah. 'Ayo kelinci manis, kita coba sekali lagi!'",
      image: "./images/thoriq-tali-sepatu/th11_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th11.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th11_id.mp3",
      vocab: {
        "give up": "menyerah",
        "sweet": "manis",
        "once more": "sekali lagi",
        "come on": "ayo"
      }
    },
    {
      page: 12,
      text: "Hold the first bunny ear. Wrap the other lace around gently. Slowly now...",
      text_id: "Pegang telinga pertama. Putar tali kedua melingkari kelinci. Pelan-pelan ya...",
      image: "./images/thoriq-tali-sepatu/th12_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th12.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th12_id.mp3",
      vocab: {
        "hold": "pegang",
        "wrap": "membungkus / memutar",
        "around": "di sekeliling",
        "slowly": "pelan-pelan"
      }
    },
    {
      page: 13,
      text: "Push it through the tiny hole... now pull both bunny ears. Pull, pull!",
      text_id: "Dorong ke dalam lubang kecil... lalu tarik kedua telinganya. Tarik, tarik!",
      image: "./images/thoriq-tali-sepatu/th13_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th13.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th13_id.mp3",
      vocab: {
        "push": "dorong",
        "tiny": "sangat kecil",
        "hole": "lubang",
        "both": "kedua-duanya"
      }
    },
    {
      page: 14,
      text: "SNAP! A beautiful and neat bow tie is tied perfectly!",
      text_id: "KLIK! Pita kupu-kupu yang cantik dan rapi terbentuk sempurna!",
      image: "./images/thoriq-tali-sepatu/th14_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th14.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th14_id.mp3",
      vocab: {
        "beautiful": "cantik",
        "bow": "pita",
        "perfectly": "dengan sempurna",
        "tied": "terikat"
      }
    },
    {
      page: 15,
      text: "'Hooray! I did it!' Thoriq jumps with joy. Mom claps her hands happily!",
      text_id: "'Horeee! Aku berhasil!' Thoriq melompat gembira. Ibu ikut bertepuk tangan.",
      image: "./images/thoriq-tali-sepatu/th15_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th15.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th15_id.mp3",
      vocab: {
        "hooray": "hore",
        "jumps": "melompat",
        "joy": "kegembiraan",
        "claps": "bertepuk tangan"
      }
    },
    {
      page: 16,
      text: "Now for the right shoe! Since he knows the way, it is super fast!",
      text_id: "Sekarang giliran sepatu kanan. Karena sudah tahu caranya, jadi makin cepat!",
      image: "./images/thoriq-tali-sepatu/th16_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th16.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th16_id.mp3",
      vocab: {
        "fast": "cepat",
        "right": "kanan",
        "knows": "mengetahui",
        "way": "cara / jalan"
      }
    },
    {
      page: 17,
      text: "Thoriq is ready for school! Remember friends, never be afraid to make mistakes while learning!",
      text_id: "Thoriq siap ke sekolah! Ingat kawan, jangan takut salah saat belajar ya!",
      image: "./images/thoriq-tali-sepatu/th17_compressed.jpg",
      audio: "./audio/thoriq-tali-sepatu/th17.mp3",
      audio_id: "./audio/thoriq-tali-sepatu/th17_id.mp3",
      vocab: {
        "ready": "siap",
        "school": "sekolah",
        "remember": "ingatlah",
        "afraid": "takut"
      }
    }
  ],

  // Kuis Interaktif Pemahaman Membaca (Lengkap 15 Soal)
  quiz: [
    {
      q: "What color are Thoriq's new shoes? (Apa warna sepatu baru Thoriq?)",
      options: [
        "Bright blue (Biru cerah)",
        "Red and green (Merah dan hijau)",
        "Black and white (Hitam dan putih)"
      ],
      answer: 0
    },
    {
      q: "What shape does Thoriq make like an animal's ear? (Bentuk telinga hewan apa yang dibuat Thoriq?)",
      options: [
        "Bear ear (Telinga beruang)",
        "Bunny ear (Telinga kelinci)",
        "Elephant ear (Telinga gajah)"
      ],
      answer: 1
    },
    {
      q: "What did Mom say when Thoriq made a mistake? (Apa pesan Ibu saat Thoriq berbuat salah?)",
      options: [
        "Give up immediately (Menyerah saja sekarang)",
        "Making mistakes is bad (Salah itu buruk)",
        "Making mistakes means your brain is learning (Salah berarti otakmu sedang belajar)"
      ],
      answer: 2
    },
    {
      q: "What color are the shoelaces? (Apa warna tali sepatu Thoriq?)",
      options: [
        "Sunny yellow (Kuning cerah)",
        "Purple (Ungu)",
        "Brown (Cokelat)"
      ],
      answer: 0
    },
    {
      q: "What happened when Thoriq tried to tie the shoelace for the first time? (Apa yang terjadi saat Thoriq mencoba mengikat tali pertama kali?)",
      options: [
        "It was neat immediately (Langsung rapi)",
        "The lace was lost (Talinya hilang)",
        "The shoelace got tangled up (Talinya kusut dan melilit)"
      ],
      answer: 2
    },
    {
      q: "What did Thoriq do when he was confused? (Apa yang dilakukan Thoriq saat ia bingung?)",
      options: [
        "Scratched his head (Menggaruk kepalanya)",
        "Cried loudly (Menangis keras)",
        "Threw his shoes away (Melempar sepatunya)"
      ],
      answer: 0
    },
    {
      q: "What did Thoriq do to feel calm before trying again? (Apa yang dilakukan Thoriq agar tenang sebelum mencoba lagi?)",
      options: [
        "Went to sleep (Pergi tidur)",
        "Took a deep breath (Menarik napas panjang)",
        "Ate a biscuit (Makan biskuit)"
      ],
      answer: 1
    },
    {
      q: "What letter shape is made in step one? (Bentuk huruf apa yang dibuat pada langkah pertama?)",
      options: [
        "Letter X (Huruf X silang)",
        "Letter O (Huruf O)",
        "Letter U (Huruf U)"
      ],
      answer: 0
    },
    {
      q: "What did Thoriq say when the lace slipped away? (Apa yang Thoriq katakan saat talinya terlepas lagi?)",
      options: [
        "I want to stop (Aku mau berhenti)",
        "Let's try once more! (Ayo kita coba sekali lagi!)",
        "I am very angry (Aku sangat marah)"
      ],
      answer: 1
    },
    {
      q: "What beautiful shape is formed at the end? (Bentuk indah apa yang terbentuk di akhir?)",
      options: [
        "A butterfly bow (Pita kupu-kupu)",
        "A little triangle (Segitiga kecil)",
        "A round ball (Bola bundar)"
      ],
      answer: 0
    },
    {
      q: "What did Mom do when Thoriq succeeded? (Apa yang dilakukan Ibu saat Thoriq berhasil?)",
      options: [
        "Turned off the light (Mematikan lampu)",
        "Clapped her hands happily (Bertepuk tangan gembira)",
        "Walked outside (Berjalan keluar)"
      ],
      answer: 1
    },
    {
      q: "Why was tying the right shoe faster? (Mengapa mengikat sepatu sebelah kanan jadi lebih cepat?)",
      options: [
        "Because he already knew how (Karena ia sudah tahu caranya)",
        "Because the lace was short (Karena talinya pendek)",
        "Because Mom helped him (Karena dibantu Ibu)"
      ],
      answer: 0
    },
    {
      q: "Where is Thoriq going after his shoes are tied? (Ke mana Thoriq akan pergi setelah sepatunya terikat?)",
      options: [
        "To the playground (Ke taman bermain)",
        "To the swimming pool (Ke kolam renang)",
        "To school (Ke sekolah)"
      ],
      answer: 2
    },
    {
      q: "What accessory does Thoriq wear on his left wrist? (Aksesoris apa yang dipakai di pergelangan tangan kiri Thoriq?)",
      options: [
        "A bright red wristband (Gelang merah)",
        "A golden watch (Jam tangan emas)",
        "A blue ring (Cincin biru)"
      ],
      answer: 0
    },
    {
      q: "What is the good message from Thoriq's story? (Apa pesan baik dari cerita Thoriq?)",
      options: [
        "Always be afraid to try (Selalu takut untuk mencoba)",
        "Never give up when learning (Jangan menyerah saat belajar)",
        "Mistakes are very bad (Kesalahan itu sangat buruk)"
      ],
      answer: 1
    }
  ]
});
