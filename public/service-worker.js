/* Self-destroying service worker.
 *
 * The app used to register a CRA cache-first service worker, which left returning
 * visitors stuck on a stale build after every deploy. This worker replaces it: when
 * the browser picks it up (on its periodic update check of /service-worker.js) it
 * clears every cache, unregisters itself, and reloads open pages — so each client
 * that still holds the old worker heals itself and gets fresh content from then on.
 *
 * Safe to delete this file once traffic has cycled and no old workers remain.
 */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      } catch (e) {
        /* ignore */
      }
      try {
        await self.registration.unregister();
      } catch (e) {
        /* ignore */
      }
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => {
        try {
          client.navigate(client.url);
        } catch (e) {
          /* ignore */
        }
      });
    })()
  );
});
