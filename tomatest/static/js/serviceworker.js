// Install event: cacche resources
self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
    // Add a call to skipWaiting here
});

// Activate event: clean up old caches
self.addEventListener('activate', function(event) {
    console.log('Service Worker activating.');
});

// Fetch event: respond with cached resources
self.addEventListener('fetch', function(event) {
    console.log('Fetching:', event.request.url);
});
