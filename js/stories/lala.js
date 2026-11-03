/**
 * ================================================================
 * TEMPLATE BUKU CERITA MODULAR (DWIPROGRAM / BILINGUAL READY)
 * ================================================================
 * Judul : Petualangan Lala & Transportasi Darat
 * Sasaran: TK B (Fase Fondasi)
 * Halaman: 15 Halaman
 */

window.STORIES_DATABASE = window.STORIES_DATABASE || [];

window.STORIES_DATABASE.push({
  id: "lala-transportasi-darat",
  title: "Petualangan Lala & Roda Darat Hebat",
  category: "Fase Fondasi / TK B",
  defaultLang: "id",
  cover: "./images/lala-transportasi-darat/cover.jpg",
  description: "Ayo ikuti petualangan Lala mengenal berbagai macam kendaraan darat, mulai dari sepeda, bus, ambulans, hingga kereta cepat yang melesat kilat!",

  highlightTheme: {
    bg: "linear-gradient(135deg, #fef08a, #fed7aa)", // Kuning cerah matahari ke oranye pastel
    text: "#854d0e",                                  // Teks cokelat hangat
    border: "#eab308",                                // Garis bawah kuning emas
    shadow: "rgba(234, 179, 8, 0.45)"                // Kilau kuning hangat
  },

  pages: [
    {
      page: 1,
      text: "Hello, friends! My name is Lala. Today, let's explore land vehicles together!",
      text_id: "Halo, teman-teman! Namaku Lala. Hari ini, ayo bertualang mengenal kendaraan darat bersama Lala!",
      image: "./images/lala-transportasi-darat/01.jpg",
      audio: "./audio/lala-transportasi-darat/01_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/01_id.mp3",
      vocab: {
        "friends": "teman-teman",
        "explore": "menjelajah / bertualang",
        "vehicles": "kendaraan",
        "together": "bersama-sama"
      }
    },
    {
      page: 2,
      text: "Ring-ring! Look, this is a two-wheeled bicycle. Lala pedals happily with her feet!",
      text_id: "Kring-kring! Lihat, ini sepeda beroda dua. Kaki Lala mengayuh pedal dengan gembira!",
      image: "./images/lala-transportasi-darat/02.jpg",
      audio: "./audio/lala-transportasi-darat/02_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/02_id.mp3",
      vocab: {
        "bicycle": "sepeda",
        "wheeled": "beroda",
        "pedals": "mengayuh pedal",
        "feet": "kaki"
      }
    },
    {
      page: 3,
      text: "Swoosh! This is a nimble scooter. One foot on the deck, and one foot pushes the ground!",
      text_id: "Wusss! Ini skuter lincah. Satu kaki Lala di atas papan, satu kaki lagi mendorong ke tanah.",
      image: "./images/lala-transportasi-darat/03.jpg",
      audio: "./audio/lala-transportasi-darat/03_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/03_id.mp3",
      vocab: {
        "scooter": "skuter",
        "nimble": "lincah",
        "pushes": "mendorong",
        "ground": "tanah / lantai"
      }
    },
    {
      page: 4,
      text: "Vroom-vroom! A motorcycle cruises on the street. The rider always wears a safety helmet!",
      text_id: "Brum-brum! Sepeda motor lewat di jalan raya. Pengendaranya tertib memakai helm pelindung kepala.",
      image: "./images/lala-transportasi-darat/04.jpg",
      audio: "./audio/lala-transportasi-darat/04_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/04_id.mp3",
      vocab: {
        "motorcycle": "sepeda motor",
        "street": "jalan raya",
        "rider": "pengendara",
        "helmet": "helm pelindung"
      }
    },
    {
      page: 5,
      text: "Click! Lala sits safely inside the family car. Remember, always buckle up your seatbelt!",
      text_id: "Klik! Lala duduk rapi di dalam mobil keluarga. Ingat, selalu pasang sabuk pengamanmu, ya!",
      image: "./images/lala-transportasi-darat/05.jpg",
      audio: "./audio/lala-transportasi-darat/05_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/05_id.mp3",
      vocab: {
        "car": "mobil",
        "safely": "dengan aman",
        "buckle up": "memasang sabuk",
        "seatbelt": "sabuk pengaman"
      }
    },
    {
      page: 6,
      text: "Beep! This yellow car is called a taxi. It has a bright glowing sign right on its roof!",
      text_id: "Tiiin! Mobil kuning ini namanya taksi. Ada lampu huruf menyala di atas atapnya.",
      image: "./images/lala-transportasi-darat/06.jpg",
      audio: "./audio/lala-transportasi-darat/06_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/06_id.mp3",
      vocab: {
        "taxi": "taksi",
        "yellow": "kuning",
        "glowing": "menyala bersinar",
        "roof": "atap mobil"
      }
    },
    {
      page: 7,
      text: "Wow, the city bus is so big! It has automatic doors and can carry lots of passengers.",
      text_id: "Wah, bus kota besar sekali! Bus ini punya pintu otomatis dan bisa membawa banyak penumpang.",
      image: "./images/lala-transportasi-darat/07.jpg",
      audio: "./audio/lala-transportasi-darat/07_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/07_id.mp3",
      vocab: {
        "bus": "bus",
        "doors": "pintu",
        "passengers": "penumpang",
        "carry": "membawa"
      }
    },
    {
      page: 8,
      text: "All aboard! The cheerful yellow school bus is ready to take our friends to school.",
      text_id: "Ayo naik! Bus sekolah berwarna kuning ceria siap mengantar teman-teman ke sekolah.",
      image: "./images/lala-transportasi-darat/08.jpg",
      audio: "./audio/lala-transportasi-darat/08_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/08_id.mp3",
      vocab: {
        "school bus": "bus sekolah",
        "cheerful": "ceria",
        "school": "sekolah",
        "ready": "siap"
      }
    },
    {
      page: 9,
      text: "Rumble! A big truck carries cargo in its open bed. Its wheels are huge, plentiful, and super strong!",
      text_id: "Brummm! Truk besar membawa barang di bak belakangnya. Rodanya besar, banyak, dan sangat kuat!",
      image: "./images/lala-transportasi-darat/09.jpg",
      audio: "./audio/lala-transportasi-darat/09_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/09_id.mp3",
      vocab: {
        "truck": "truk",
        "cargo": "barang muatan",
        "wheels": "roda-roda",
        "strong": "kuat"
      }
    },
    {
      page: 10,
      text: "Wee-woo, wee-woo! The bright red fire engine rushes forward. The firefighters are ready to help!",
      text_id: "Ninu-ninu! Mobil pemadam kebakaran berwarna merah melaju sigap. Petugas siap memadamkan api!",
      image: "./images/lala-transportasi-darat/10.jpg",
      audio: "./audio/lala-transportasi-darat/10_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/10_id.mp3",
      vocab: {
        "fire engine": "mobil pemadam kebakaran",
        "red": "merah",
        "firefighters": "petugas pemadam",
        "help": "menolong / membantu"
      }
    },
    {
      page: 11,
      text: "Wee-woo! This ambulance helps people who are sick. All other cars kindly let it pass first.",
      text_id: "Wiu-wiu! Ini mobil ambulans penolong orang sakit. Semua mobil lain memberi jalan lebih dulu.",
      image: "./images/lala-transportasi-darat/11.jpg",
      audio: "./audio/lala-transportasi-darat/11_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/11_id.mp3",
      vocab: {
        "ambulance": "ambulans",
        "sick": "sakit",
        "kindly": "dengan ramah / baik",
        "pass": "lewat"
      }
    },
    {
      page: 12,
      text: "Ting-ting! Riding a traditional pedicab is so fun. It has three wheels and pedals along gently.",
      text_id: "Ting-ting! Asyiknya naik becak tradisional. Beroda tiga dan dikayuh santai oleh Pak Sopir.",
      image: "./images/lala-transportasi-darat/12.jpg",
      audio: "./audio/lala-transportasi-darat/12_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/12_id.mp3",
      vocab: {
        "pedicab": "becak",
        "three": "tiga",
        "gently": "santai / pelan",
        "riding": "menumpang / naik"
      }
    },
    {
      page: 13,
      text: "Choo-choo, chugga-chugga! The train glides along long steel tracks. Its cars are lined up so neatly!",
      text_id: "Tut-tut-tut, gujes-gujes! Kereta api meluncur di atas rel panjang. Gerbongnya berbaris rapi!",
      image: "./images/lala-transportasi-darat/13.jpg",
      audio: "./audio/lala-transportasi-darat/13_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/13_id.mp3",
      vocab: {
        "train": "kereta api",
        "tracks": "rel lintasan",
        "cars": "gerbong",
        "neatly": "dengan rapi"
      }
    },
    {
      page: 14,
      text: "Whoosh, fast as lightning! This is a modern high-speed train. It glides smoothly without loud noise.",
      text_id: "Wusss, melesat kilat! Ini kereta cepat modern. Meluncur sangat cepat tanpa suara bising.",
      image: "./images/lala-transportasi-darat/14.jpg",
      audio: "./audio/lala-transportasi-darat/14_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/14_id.mp3",
      vocab: {
        "fast": "cepat",
        "high-speed train": "kereta cepat",
        "smoothly": "dengan mulus",
        "modern": "modern / canggih"
      }
    },
    {
      page: 15,
      text: "What a fun journey with Lala! Land vehicles help us travel every day. Always stay safe, everyone!",
      text_id: "Seru sekali perjalanan Lala! Kendaraan darat membantu kita bepergian. Selalu utamakan keselamatan, ya!",
      image: "./images/lala-transportasi-darat/15.jpg",
      audio: "./audio/lala-transportasi-darat/15_en.mp3",
      audio_id: "./audio/lala-transportasi-darat/15_id.mp3",
      vocab: {
        "journey": "perjalanan",
        "travel": "bepergian",
        "safe": "aman / selamat",
        "everyone": "semuanya"
      }
    }
  ],

  quiz: [
    {
      q: "Apa yang harus kita pasang saat duduk di dalam mobil keluarga? (What should we wear inside the car?)",
      options: [
        "Sabuk pengaman (Seatbelt)",
        "Topi tidur (Sleep hat)",
        "Kacamata renang (Swim goggles)"
      ],
      answer: 0
    },
    {
      q: "Kendaraan darat apa yang berjalan di atas rel besi panjang? (Which vehicle moves on long steel tracks?)",
      options: [
        "Sepeda (Bicycle)",
        "Kereta api (Train)",
        "Skuter (Scooter)"
      ],
      answer: 1
    },
    {
      q: "Kendaraan apa yang berwarna merah gagah dan bertugas memadamkan api? (Which red vehicle helps fight fires?)",
      options: [
        "Mobil taksi (Taxi car)",
        "Becak (Pedicab)",
        "Mobil pemadam kebakaran (Fire engine)"
      ],
      answer: 2
    },
    {
      q: "Berapa jumlah roda pada becak tradisional Lala? (How many wheels does a pedicab have?)",
      options: [
        "Dua roda (Two wheels)",
        "Tiga roda (Three wheels)",
        "Delapan roda (Eight wheels)"
      ],
      answer: 1
    }
  ]
});
