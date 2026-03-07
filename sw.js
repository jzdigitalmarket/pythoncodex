const CACHE = 'pythoncodex-v3';

// Arquivos estáticos — podem ser cacheados (não mudam)
const STATIC_ASSETS = [
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@400;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Instala e cacheia apenas assets estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Remove caches antigos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Pyodide e CDNs pesados — sempre da rede, nunca cacheia
  if (url.includes('pyodide') || url.includes('cdn.jsdelivr')) {
    return e.respondWith(fetch(e.request));
  }

  // HTMLs — NETWORK FIRST: tenta rede, só usa cache se offline
  if (url.endsWith('.html') || url.endsWith('/') || url === self.location.origin + '/') {
    return e.respondWith(
      fetch(e.request)
        .then(response => {
          // Atualiza o cache com a versão mais recente
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
          return response;
        })
        .catch(() => caches.match(e.request)) // offline fallback
    );
  }

  // Demais assets estáticos — CACHE FIRST
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
        return response;
      });
    })
  );
});
