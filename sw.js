self.addEventListener("install", event => {
  console.log("Service Worker installing.");
});

self.addEventListener("activate", event => {
  console.log("Service Worker activated.");
});

self.addEventListener("fetch", event => {
  // Default network-first strategy
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});