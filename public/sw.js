const CACHE_NAME = 'todo-languages-v1';
const assets = [
  './index.html',
  './manifest.json',
  './img/duolingo.png',
  './img/sounter.png',
  './img/cake.png',
  './img/aba.png',
  './img/busuu.png',
  './img/babbel.png',
  './img/memrise.png',
  './img/drops.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});