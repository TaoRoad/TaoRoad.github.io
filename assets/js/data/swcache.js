const resource = [

  /* --- CSS --- */
  '/TaoRoad/assets/css/style.css',

  /* --- PWA --- */
  '/TaoRoad/app.js',
  '/TaoRoad/sw.js',

  /* --- HTML --- */
  '/TaoRoad/index.html',
  '/TaoRoad/404.html',
  
    '/TaoRoad/categories/',
  
    '/TaoRoad/tags/',
  
    '/TaoRoad/archives/',
  
    '/TaoRoad/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/TaoRoad/assets/img/favicons/android-chrome-192x192.png',
    '/TaoRoad/assets/img/favicons/android-chrome-512x512.png',
    '/TaoRoad/assets/img/favicons/apple-touch-icon.png',
    '/TaoRoad/assets/img/favicons/favicon-16x16.png',
    '/TaoRoad/assets/img/favicons/favicon-32x32.png',
    '/TaoRoad/assets/img/favicons/favicon.ico',
    '/TaoRoad/assets/img/favicons/mstile-150x150.png',
    '/TaoRoad/assets/js/dist/categories.min.js',
    '/TaoRoad/assets/js/dist/commons.min.js',
    '/TaoRoad/assets/js/dist/home.min.js',
    '/TaoRoad/assets/js/dist/misc.min.js',
    '/TaoRoad/assets/js/dist/page.min.js',
    '/TaoRoad/assets/js/dist/post.min.js',
    '/TaoRoad/assets/js/dist/pvreport.min.js'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

