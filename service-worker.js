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
    "revision": "abadb8f624635b04fe13bf22dc062284"
  },
  {
    "url": "assets/css/0.styles.1c06bc64.css",
    "revision": "9ea15421c257b7c2e72a5668b435969f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ac364d44.js",
    "revision": "c7d0cee6ff056b41d3647b79e5cfe395"
  },
  {
    "url": "assets/js/11.dc9047d3.js",
    "revision": "a5b13f92d1145ad037fc4670c5aaedab"
  },
  {
    "url": "assets/js/2.0b373504.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.0a4e0a28.js",
    "revision": "0de56dd325a3b21aea5a600b7916d0e1"
  },
  {
    "url": "assets/js/4.5d0fe6f3.js",
    "revision": "2d9d049897b55b0d44b74183b891b5de"
  },
  {
    "url": "assets/js/5.dc994113.js",
    "revision": "ec591e3bb03bd695f964ebae804d7994"
  },
  {
    "url": "assets/js/6.f7aed45d.js",
    "revision": "6551f4de1881e984e1743baac3ec14da"
  },
  {
    "url": "assets/js/7.8aa148df.js",
    "revision": "5128b537c986d15589e1c7477d819a3f"
  },
  {
    "url": "assets/js/8.11d33f94.js",
    "revision": "d1300fc5758c70f8cdfa7df296207d2f"
  },
  {
    "url": "assets/js/9.f2c2a253.js",
    "revision": "1ad344c0235d2ca392ee6b41817be833"
  },
  {
    "url": "assets/js/app.fb922dec.js",
    "revision": "5130fbbf64d3ab9ab428be760e39e60f"
  },
  {
    "url": "catalogue/chapter_1.html",
    "revision": "9780e23649ef120f4c4a29657ddc2add"
  },
  {
    "url": "catalogue/index.html",
    "revision": "b31538dedeaab31dfa3dc3be73e18c8a"
  },
  {
    "url": "catalogue/item_1.html",
    "revision": "4abaf6c95f8df71e0f859efcaa65d4e4"
  },
  {
    "url": "catalogue/item_2.html",
    "revision": "70356e1e8bcc982637b80105ce4ab1dd"
  },
  {
    "url": "catalogue/item_3.html",
    "revision": "b071030aed7cab7aadb5327aa0493784"
  },
  {
    "url": "catalogue/item_4.html",
    "revision": "4b06208398fb140e7f766309e74ab042"
  },
  {
    "url": "catalogue/using-pluging.html",
    "revision": "49c5a1dd36a7b4ef9acee763ad6a446b"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "9f4af5ccac8b9c5e227cfd543c3798a7"
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
