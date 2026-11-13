/**
 * ================================================================
 * SERVICE WORKER: BUKU CERITA INTERAKTIF (PWA OFFLINE ENGINE)
 * Versi Cache: v3.5.0 (Pembaruan Sinkronisasi Update & Koleksi Cerita)
 * ================================================================
 */

const CACHE_NAME = 'buku-cerita-v3.5.7';
const OFFLINE_MEDIA_CACHE = 'buku-cerita-offline-media';

// Aset Inti Kerangka Aplikasi (App Shell & Seluruh Berkas Naskah Cerita)
const CORE_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './manifest.json',
  './js/app.js',
  './js/stories/kiko.js',
  './js/stories/mimi.js',
  './js/stories/piko.js',
  './js/stories/dodi.js',
  './js/stories/arka.js',
  './js/stories/aisyah.js',
  './js/stories/avis.js',
  './js/stories/dani&naomi.js',
  './js/stories/lala.js',
  './js/stories/keysa&sena.js',
  './js/stories/alfa.js',
  './js/stories/hanan.js',
  './js/stories/thoriq.js',
  './js/stories/kenzo.js',
  './images/icon-192.png',
  './images/icon-512.png'
  './audio/bgm-home.mp3', // <-- Tambahkan di sini
  // ... berkas cerita lainnya
];

// 1. TAHAP INSTALASI: Menyimpan berkas dasar ke cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Melakukan pra-caching berkas App Shell...');
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('[SW] Beberapa file gagal di-precache (tetap melanjutkan):', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 2. TAHAP AKTIVASI: Membersihkan cache versi lama tanpa menghapus media offline pengguna
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME && cache !== OFFLINE_MEDIA_CACHE) {
            console.log('[SW] Menghapus cache usang:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. KOMUNIKASI PESAN DARI APLIKASI (Pemicu Pembaruan Seketika)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 4. TAHAP PENGAMBILAN DATA (FETCH INTERCEPTION)
self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET' || !request.url.startsWith('http')) return;

  const url = new URL(request.url);

  // A. PENANGANAN AUDIO DENGAN RANGE REQUEST (HTTP 206)
  if (request.headers.get('range')) {
    event.respondWith(handleRangeRequest(request));
    return;
  }

  // B. STRATEGI NETWORK-FIRST (Untuk HTML, CSS, dan Berkas Cerita JS)
  const isCodeAsset = url.pathname.endsWith('.html') || 
                      url.pathname.endsWith('.js') || 
                      url.pathname.endsWith('.css') || 
                      url.pathname === '/' || 
                      url.pathname.endsWith('/');

  if (isCodeAsset) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // C. STRATEGI CACHE-FIRST (Untuk Media: Gambar JPG/PNG/WebP & Audio MP3)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
        return networkResponse;
      }).catch((err) => {
        console.warn('[SW] Gagal memuat aset media secara offline:', request.url);
      });
    })
  );
});

// 5. HELPER: PENANGAN AUDIO RANGE REQUEST (BYTE-RANGE 206)
async function handleRangeRequest(request) {
  let cachedResponse = await caches.match(request.url);

  if (!cachedResponse) {
    try {
      const netRes = await fetch(request.url);
      if (netRes.status === 200) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request.url, netRes.clone());
        cachedResponse = netRes;
      } else {
        return fetch(request);
      }
    } catch (e) {
      return new Response('Audio offline tidak ditemukan', { status: 404 });
    }
  }

  const arrayBuffer = await cachedResponse.arrayBuffer();
  const rangeHeader = request.headers.get('range');
  const bytesMatch = rangeHeader ? rangeHeader.match(/bytes=(\d+)-(\d+)?/) : null;

  if (bytesMatch) {
    const totalLength = arrayBuffer.byteLength;
    const start = parseInt(bytesMatch[1], 10);
    const end = bytesMatch[2] ? parseInt(bytesMatch[2], 10) : totalLength - 1;

    const slicedBuffer = arrayBuffer.slice(start, end + 1);

    return new Response(slicedBuffer, {
      status: 206,
      statusText: 'Partial Content',
      headers: [
        ['Content-Type', cachedResponse.headers.get('Content-Type') || 'audio/mpeg'],
        ['Content-Range', `bytes ${start}-${end}/${totalLength}`],
        ['Content-Length', slicedBuffer.byteLength.toString()],
        ['Accept-Ranges', 'bytes']
      ]
    });
  }

  return cachedResponse;
}
