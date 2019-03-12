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
    "revision": "abe547dab09377df32f259177c8ee0fd"
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
    "url": "assets/js/8.a1428843.js",
    "revision": "b1d54629a8b616d9504dbce96668c223"
  },
  {
    "url": "assets/js/9.7f369a2e.js",
    "revision": "022511354a6caf4df67e711c7f1ca68b"
  },
  {
    "url": "assets/js/app.2a183109.js",
    "revision": "c00a6cdff66dee72123dccbf0312d3ff"
  },
  {
    "url": "catalogue/chapter_1.html",
    "revision": "df686f2eacb613a9f80d7546558fa9ab"
  },
  {
    "url": "catalogue/index.html",
    "revision": "06cd32e21e4b68cc68cf0fcd653d8375"
  },
  {
    "url": "catalogue/item_1.html",
    "revision": "f40d01a6742ee76d1fc0d4cf99327ed7"
  },
  {
    "url": "catalogue/item_2.html",
    "revision": "f58c2ee630a88158a4ee5ea95d0feb7e"
  },
  {
    "url": "catalogue/item_3.html",
    "revision": "d2135744e01aa203a3436a487e849e19"
  },
  {
    "url": "catalogue/using-pluging.html",
    "revision": "f9670c611734b633ec133ef6b21221c8"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "cb86298e6c22d6170f712817ba4411bf"
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
