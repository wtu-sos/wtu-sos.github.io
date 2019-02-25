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
    "revision": "c6cd13a118b6fa18b284ca55878fd691"
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
    "url": "assets/js/4.9986709a.js",
    "revision": "5798bd02627418b881f567408db01006"
  },
  {
    "url": "assets/js/5.fae694a6.js",
    "revision": "89b38e1bd098d044ce8d5e5b4f4d80f0"
  },
  {
    "url": "assets/js/6.2ee24170.js",
    "revision": "ced0f97e505c4225011fec6a5bad4f63"
  },
  {
    "url": "assets/js/7.c0f27700.js",
    "revision": "88bdf9974790814db583e9304a50f330"
  },
  {
    "url": "assets/js/app.974f9227.js",
    "revision": "1572e6fa1884c7599a7d5f3cf2726d4a"
  },
  {
    "url": "catalogue/chapter_1.html",
    "revision": "a5fd7138998e1c46e86e97eb15a00962"
  },
  {
    "url": "catalogue/index.html",
    "revision": "827faf2eb032fe8fa8a5a0f06841ec7b"
  },
  {
    "url": "catalogue/using-pluging.html",
    "revision": "6de242e7889141a952c5ab9ad2f10611"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "7faad4a97f357f1e4770692d3165681f"
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
