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
    "revision": "9f7ba9382248d57dda2f58fc3482cfa9"
  },
  {
    "url": "assets/css/0.styles.1150044b.css",
    "revision": "e0cf3df08a028ac5a6343d0dcc58705f"
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
    "url": "assets/js/8.75bd0d86.js",
    "revision": "839d27a4b43922314a45a1f71f8c906b"
  },
  {
    "url": "assets/js/9.9846698f.js",
    "revision": "1ad344c0235d2ca392ee6b41817be833"
  },
  {
    "url": "assets/js/app.985bbdbe.js",
    "revision": "3028cb3553293995407b7211c02a36a0"
  },
  {
    "url": "catalogue/chapter_1.html",
    "revision": "16263cfff9eafaaa1ba90ecbdcf30c6f"
  },
  {
    "url": "catalogue/index.html",
    "revision": "5bb7713fffe9716bcabda63b648e26e5"
  },
  {
    "url": "catalogue/item_1.html",
    "revision": "a5bad41d177e58e0ca88baa247255360"
  },
  {
    "url": "catalogue/item_2.html",
    "revision": "39424544ec3e93119a7a856438bdae38"
  },
  {
    "url": "catalogue/item_3.html",
    "revision": "487583dc26e0cea0626a1753644c8cb8"
  },
  {
    "url": "catalogue/item_4.html",
    "revision": "b71be71ab18ec5047b0946551a609874"
  },
  {
    "url": "catalogue/using-pluging.html",
    "revision": "963baf1666242d5c374d8ed639cb3557"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "cb984a339347c2d60de1e362584dd97b"
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
