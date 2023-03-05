self.addEventListener('install', (event) =>
  // eslint-disable-next-line no-console
  console.log('ServiceWorker installed')
);

self.addEventListener('notificationclick', (event) => {
  event.waitUntil(self.clients.openWindow('/'));
});
