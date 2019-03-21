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
    "revision": "fae502370b75c9c314391427a2685b89"
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
    "url": "assets/js/10.f414d3c3.js",
    "revision": "c7d0cee6ff056b41d3647b79e5cfe395"
  },
  {
    "url": "assets/js/11.d3017caf.js",
    "revision": "a5b13f92d1145ad037fc4670c5aaedab"
  },
  {
    "url": "assets/js/2.0f4038f2.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.33016a9b.js",
    "revision": "0de56dd325a3b21aea5a600b7916d0e1"
  },
  {
    "url": "assets/js/4.0e5bb390.js",
    "revision": "2d9d049897b55b0d44b74183b891b5de"
  },
  {
    "url": "assets/js/5.04dc520b.js",
    "revision": "ec591e3bb03bd695f964ebae804d7994"
  },
  {
    "url": "assets/js/6.e8c870e8.js",
    "revision": "6551f4de1881e984e1743baac3ec14da"
  },
  {
    "url": "assets/js/7.1cb706cb.js",
    "revision": "5128b537c986d15589e1c7477d819a3f"
  },
  {
    "url": "assets/js/8.ea1d7513.js",
    "revision": "839d27a4b43922314a45a1f71f8c906b"
  },
  {
    "url": "assets/js/9.ff51943c.js",
    "revision": "a396e7e227339d7fd47c7e17884ea485"
  },
  {
    "url": "assets/js/app.99e91767.js",
    "revision": "5ae89abda26f92e58c106836fb7d78a8"
  },
  {
    "url": "catalogue/chapter_1.html",
    "revision": "94e9ca12d4ea745372ecb9a56d6262a6"
  },
  {
    "url": "catalogue/index.html",
    "revision": "583adacc04632659267cd6bd98ccc970"
  },
  {
    "url": "catalogue/item_1.html",
    "revision": "7028f0c751421c17650d7c592113af14"
  },
  {
    "url": "catalogue/item_2.html",
    "revision": "c37d3a2505455a1fd9e144e386fdea94"
  },
  {
    "url": "catalogue/item_3.html",
    "revision": "e9911a47bb53b7fc7250e462d8005093"
  },
  {
    "url": "catalogue/item_4.html",
    "revision": "56d664cc7f065f6287b9a434a0f762a3"
  },
  {
    "url": "catalogue/using-pluging.html",
    "revision": "a99f38e70f7223cc1a23688d8d5209b5"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "002822d4d45b1f1dda315a968ccb2781"
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
