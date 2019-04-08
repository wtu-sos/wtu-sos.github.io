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
    "revision": "d81460461ecd556a5cf82daa28760912"
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
    "url": "assets/js/9.38b40f6f.js",
    "revision": "4a230c4173e2847406a82f1e4c76ed7e"
  },
  {
    "url": "assets/js/app.c2d7bdd2.js",
    "revision": "f6cf519ef794b3d491f683c8bd7f8889"
  },
  {
    "url": "catalogue/chapter_1.html",
    "revision": "8cbfed045e9dff27170870671a2b398f"
  },
  {
    "url": "catalogue/index.html",
    "revision": "3f10849904813346a9fee15e6feed349"
  },
  {
    "url": "catalogue/item_1.html",
    "revision": "049c47663ba4b0374849d89ec9431bc4"
  },
  {
    "url": "catalogue/item_2.html",
    "revision": "0db18ce156f1c36cb27cb08d6f35decc"
  },
  {
    "url": "catalogue/item_3.html",
    "revision": "97fc73170258a9e0566c27f09ff2b524"
  },
  {
    "url": "catalogue/item_4.html",
    "revision": "bce7107f7fe34b35cb50f90bdc27bf3b"
  },
  {
    "url": "catalogue/using-pluging.html",
    "revision": "c2daa3bdb091a4b0a7430216af683bfb"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "93dd167ba996b0456375573d759c5f7e"
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
