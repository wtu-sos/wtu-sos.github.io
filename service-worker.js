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
    "revision": "30b0861257522b3f84b064bbf29a852e"
  },
  {
    "url": "assets/css/0.styles.9854472c.css",
    "revision": "34c451d1b76265772efe811d94d7fbf0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d9a3effe.js",
    "revision": "c7d0cee6ff056b41d3647b79e5cfe395"
  },
  {
    "url": "assets/js/11.7d447ced.js",
    "revision": "a5b13f92d1145ad037fc4670c5aaedab"
  },
  {
    "url": "assets/js/2.9809e03a.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.ba01bc55.js",
    "revision": "0de56dd325a3b21aea5a600b7916d0e1"
  },
  {
    "url": "assets/js/4.789e4c37.js",
    "revision": "2d9d049897b55b0d44b74183b891b5de"
  },
  {
    "url": "assets/js/5.364fd891.js",
    "revision": "ec591e3bb03bd695f964ebae804d7994"
  },
  {
    "url": "assets/js/6.116fadb2.js",
    "revision": "6551f4de1881e984e1743baac3ec14da"
  },
  {
    "url": "assets/js/7.5652ac57.js",
    "revision": "5128b537c986d15589e1c7477d819a3f"
  },
  {
    "url": "assets/js/8.3e4dbd35.js",
    "revision": "d1300fc5758c70f8cdfa7df296207d2f"
  },
  {
    "url": "assets/js/9.42df6f20.js",
    "revision": "6ca46bd07a6830e29924a796c08d8239"
  },
  {
    "url": "assets/js/app.ada7f3ae.js",
    "revision": "1df6429a9ba811009314095ee1d1f80d"
  },
  {
    "url": "catalogue/chapter_1.html",
    "revision": "cd31c46b19586557aa1d5e416a4483ad"
  },
  {
    "url": "catalogue/index.html",
    "revision": "5efcee9ce5b9f412688b4f7b104e5ee4"
  },
  {
    "url": "catalogue/item_1.html",
    "revision": "ef179cd17a1fad32cebb583ba592ccbb"
  },
  {
    "url": "catalogue/item_2.html",
    "revision": "791f2fe05800f0f9d80f1786aad02bcb"
  },
  {
    "url": "catalogue/item_3.html",
    "revision": "801c452fc1dfc61f83bbc24f8b9468ec"
  },
  {
    "url": "catalogue/item_4.html",
    "revision": "c377aaef5a5b41f5164d0e49e42baa9e"
  },
  {
    "url": "catalogue/using-pluging.html",
    "revision": "8b6fa7deb4faa4cbc0fa8b925dd03f46"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "cb0785165b0cf6666a7f2b52d50c8cb4"
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
