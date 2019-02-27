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
    "revision": "8adb5d356ecfb47140fd74e298e3518f"
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
    "url": "assets/js/6.dd9442c3.js",
    "revision": "266646c89339314c4fc08df6408de190"
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
    "url": "assets/js/app.85434170.js",
    "revision": "363908b1269e2bc00f55fefc828f5edc"
  },
  {
    "url": "catalogue/chapter_1.html",
    "revision": "a226be8db6f7c3128b87f835b1fcd4ff"
  },
  {
    "url": "catalogue/index.html",
    "revision": "528c782d6004cfd464731104a087b194"
  },
  {
    "url": "catalogue/item_1.html",
    "revision": "fbf2236aabedea1c309191407717fc55"
  },
  {
    "url": "catalogue/using-pluging.html",
    "revision": "bf681724208fae450800b0acd3462cf6"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "2d2d57aae468b4e88670c6eee159fb93"
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
