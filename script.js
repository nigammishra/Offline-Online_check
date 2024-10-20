const status = document.getElementById('status');

function updateOnlineStatus() {
  if (navigator.onLine) {
    status.innerHTML = '<div class="online">You are online</div>';
  } else {
    status.innerHTML = '<div class="offline">You are offline</div>';
  }
}

// Initial status check
updateOnlineStatus();

// Listen for changes in online/offline status
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);