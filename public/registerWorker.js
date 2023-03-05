if (!('serviceWorker' in navigator)) {
  alert(
    "our app won't work in your browser. Please upgrade it or use one of modern browsers"
  );
}

navigator.serviceWorker.register('/service-worker.js');
