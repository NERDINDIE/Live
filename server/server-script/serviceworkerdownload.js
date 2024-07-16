const CACHE_NAME = 'universal-cache-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/scripts.js',
    '/index.html',
    // Add paths to other resources you want to cache
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
