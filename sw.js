const CACHE_NAME = 'qr-gen-v3'; // Incremented version to force an active cache reset
const ASSETS = [
    './',
    './index.html',
    './qrcode.min.js',
    './manifest.json'
];

// 1. Install Event: Download assets and store them in local cache memory
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// 2. Activate Event: Clean up old caches and take control of the app instantly
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// 3. Fetch Event: Serve assets from the cache first so the app works 100% offline
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cachedResponse => {
            return cachedResponse || fetch(e.request);
        })
    );
});
