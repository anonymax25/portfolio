export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered:', registration);

          // Check for updates periodically
          setInterval(() => {
            registration.update();
          }, 60000); // Check every minute

          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker available, show update notification
                  showUpdateNotification(registration);
                }
              });
            }
          });
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
    });
  }
};

const showUpdateNotification = (registration: ServiceWorkerRegistration) => {
  const updateBanner = document.createElement('div');
  updateBanner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 10000;
      max-width: 300px;
      animation: slideIn 0.3s ease-out;
    ">
      <h3 style="margin: 0 0 10px 0; font-size: 1.1rem;">Update Available!</h3>
      <p style="margin: 0 0 15px 0; font-size: 0.9rem; opacity: 0.9;">
        A new version of this app is available.
      </p>
      <button onclick="window.location.reload()" style="
        background: white;
        color: #667eea;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
      ">
        Update Now
      </button>
    </div>
  `;

  document.body.appendChild(updateBanner);

  // Send message to service worker to skip waiting
  if (registration.waiting) {
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }
};
