/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d79b749ce48863928d3ea0063f25eb20"
  },
  {
    "url": "assets/css/0.styles.68be1f38.css",
    "revision": "05509c66b5feb298767fcea9557bf1cf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d4ccc670.js",
    "revision": "c18ae9c35c3f33abc14f2f04eee2badb"
  },
  {
    "url": "assets/js/2.0f4038f2.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.b75823bc.js",
    "revision": "ad07cffe71950f62e9c95bf8d55f9703"
  },
  {
    "url": "assets/js/4.89e7abcb.js",
    "revision": "b252f238ed9067e3a47e936142fa604c"
  },
  {
    "url": "assets/js/5.9d5719aa.js",
    "revision": "2783421250a9eba521cb2a18f722cf07"
  },
  {
    "url": "assets/js/6.3c5ab834.js",
    "revision": "6dda108dda1d66f06e4186a277699e68"
  },
  {
    "url": "assets/js/7.cacef186.js",
    "revision": "c241d0a17916a38b7dde2178658a3a66"
  },
  {
    "url": "assets/js/8.850ecf65.js",
    "revision": "3582c2f5e42b24bf2e6d177a09e2a839"
  },
  {
    "url": "assets/js/9.7f369a2e.js",
    "revision": "022511354a6caf4df67e711c7f1ca68b"
  },
  {
    "url": "assets/js/app.655c0cb3.js",
    "revision": "7c0d155edf406bceeeecc35856eee44e"
  },
  {
    "url": "catalogue/chapter_1.html",
    "revision": "9e7e95e930c5f7ae71eeb840463e97cd"
  },
  {
    "url": "catalogue/index.html",
    "revision": "4298b06ef02834b9edc3a443c5139507"
  },
  {
    "url": "catalogue/item_1.html",
    "revision": "e4f796638cabe311489acaa0e9e8c053"
  },
  {
    "url": "catalogue/item_2.html",
    "revision": "74121cf98dad8595ecc14b1990b937e4"
  },
  {
    "url": "catalogue/item_3.html",
    "revision": "2ede94ed3453218c1ce5d727ffa06266"
  },
  {
    "url": "catalogue/using-pluging.html",
    "revision": "51c117ffd2e60e9f5fb7b04f28eaa8b4"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "3bd3ce8ee02d6c3c084190735ea8859c"
  },
  {
    "url": "logo.png",
    "revision": "4270831bef759edbe71b1a481731d893"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
