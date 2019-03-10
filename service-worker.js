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
    "revision": "db5074fe1b210d766cd5c7388e0caeed"
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
    "url": "assets/js/4.e2e4d056.js",
    "revision": "8345c963415ffb767099796338ccf419"
  },
  {
    "url": "assets/js/5.9d5719aa.js",
    "revision": "2783421250a9eba521cb2a18f722cf07"
  },
  {
    "url": "assets/js/6.ce4e8561.js",
    "revision": "978cd67b83520f285b3413e70fc5675a"
  },
  {
    "url": "assets/js/7.205c657f.js",
    "revision": "7c53d8526d7b8beffe252b9db08f86dd"
  },
  {
    "url": "assets/js/8.5d2f1411.js",
    "revision": "738cac607b2211b0c8f1d0419f5f3f02"
  },
  {
    "url": "assets/js/9.4c178180.js",
    "revision": "1f7d64e683db05eb1dc587b15591d76d"
  },
  {
    "url": "assets/js/app.9ed1f595.js",
    "revision": "7875353d8a9deb7a7a29bfb3ed91ef98"
  },
  {
    "url": "catalogue/chapter_1.html",
    "revision": "94de343f568d748bd6e18f5071e9b299"
  },
  {
    "url": "catalogue/index.html",
    "revision": "ad8e94cab0cc8443a76062b193c7855d"
  },
  {
    "url": "catalogue/item_1.html",
    "revision": "5c33cd9bd6ad893399bbd0e7e80507de"
  },
  {
    "url": "catalogue/item_2.html",
    "revision": "debc029ce31b76ca42c51512c23c9896"
  },
  {
    "url": "catalogue/using-pluging.html",
    "revision": "0b75825493d7c7c44cd02948094d8fa3"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "d59a79bfea631d001c49ccb0ea4654a0"
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
