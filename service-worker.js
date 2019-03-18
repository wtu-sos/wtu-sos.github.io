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
    "revision": "2ac497d20a1fc62bcc2edc53050dba0b"
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
    "url": "assets/js/9.0700ec8c.js",
    "revision": "b094ad41b654eee2d8fbf72c2325c32b"
  },
  {
    "url": "assets/js/app.ef26ff44.js",
    "revision": "b1e50dece23856be85207419a39690dd"
  },
  {
    "url": "catalogue/chapter_1.html",
    "revision": "5d29544452784aeef718104729296b70"
  },
  {
    "url": "catalogue/index.html",
    "revision": "2dc13256c4f87201ca448b795a461645"
  },
  {
    "url": "catalogue/item_1.html",
    "revision": "2b6749c0098fd1e66548a6b6da9fde31"
  },
  {
    "url": "catalogue/item_2.html",
    "revision": "b6ae1a4bfa5f2dfa744636d24b6881e9"
  },
  {
    "url": "catalogue/item_3.html",
    "revision": "02f56d544c141eab96051fad9a5064a4"
  },
  {
    "url": "catalogue/item_4.html",
    "revision": "cd9ed3e7be8d693a052491d13d026397"
  },
  {
    "url": "catalogue/using-pluging.html",
    "revision": "512f377248bd7ad0a5f8a114c70156ff"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "214de7e90479412a9801e6563f96a5e3"
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
