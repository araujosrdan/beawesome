self.addEventListener('install', function(event){
  console.log('SW installed');
  event.waitUntil(
    caches.open('static')
      .then(function(cache){
        cache.addAll([
          '.',
          'index.html',
          'js/jquery-3.4.1.min.js',
          'bootstrap-4.3.1/js/bootstrap.min.js',
          'js/main.js',
          'img/96x96.png',
          'img/144x144.png',
          'img/256x256.png',
          'img/512x512.png',
          'bootstrap-4.3.1/css/bootstrap.min.css',
          'main.css'
        ]);
      })
  );
});

self.addEventListener('activate', function(){
  console.log('SW activated');
});

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request)
      .then(function(res){
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});
