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
    "revision": "ab25337b9896225b5887b95a621d4f19"
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
    "url": "assets/js/2.0f4038f2.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.b75823bc.js",
    "revision": "ad07cffe71950f62e9c95bf8d55f9703"
  },
  {
    "url": "assets/js/4.5ead3816.js",
    "revision": "723280e1742bb11d222c756444ec333d"
  },
  {
    "url": "assets/js/5.f43b06ca.js",
    "revision": "3c14908db1e6bf7b17e2c17c3b104901"
  },
  {
    "url": "assets/js/6.d7e2aaa1.js",
    "revision": "78f70b1f42e5d7f4331a105d2cc5d534"
  },
  {
    "url": "assets/js/7.d644c31b.js",
    "revision": "dc46a007229cf822436a7c3cf9a5abb6"
  },
  {
    "url": "assets/js/8.bd45e8df.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.75e52745.js",
    "revision": "bcaab4070b33688bf6fa448d2e76a47b"
  },
  {
    "url": "catalogue/chapter_1.html",
    "revision": "86b93f26d21d3e6dac043493f30f19d5"
  },
  {
    "url": "catalogue/index.html",
    "revision": "ffd6dcea594192b7b06f2f960fbc4315"
  },
  {
    "url": "catalogue/item_1.html",
    "revision": "6b02c841f87bbe30a5cb9c19f953fb80"
  },
  {
    "url": "catalogue/using-pluging.html",
    "revision": "7e96cabc0814965fce309c14b8dba47e"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "f0fed988feff3da131ff249d847a2137"
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
