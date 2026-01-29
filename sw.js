const CACHE_NAME = 'recommendrama-v1';
const urlsToCache = [
  '/',
  'https://recommendrama.blogspot.com/',
  'https://raw.githubusercontent.com/bigunbimsara/blogger-pwa-recommendrama/main/manifest.webmanifest'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
