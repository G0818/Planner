const CACHE_NAME = "my-study-os";
const ASSETS = [
    "/My-Study-OS/",
    "/My-Study-OS/index.html",
    "/My-Study-OS/style.css",
    "/My-Study-OS/script.js",
    "/My-Study-OS/icon-192.png",
    "/My-Study-OS/icon-512.png",
    "/My-Study-OS/manifest.json"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    )
})