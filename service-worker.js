
self.addEventListener("install", function(event) {
  console.log("Service Worker instalado");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  console.log("Service Worker activo");
  return self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  event.respondWith(fetch(event.request));
});
