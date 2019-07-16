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
    "revision": "f1b13977074b4d037a820668c4c5edf6"
  },
  {
    "url": "assets/css/0.styles.1c06bc64.css",
    "revision": "9ea15421c257b7c2e72a5668b435969f"
  },
  {
    "url": "assets/img/dog-behavior-tree.8d510800.jpg",
    "revision": "8d510800cb860e0de25f15dea26a6a05"
  },
  {
    "url": "assets/img/rw.6def7c6f.png",
    "revision": "6def7c6f9e57cfff7f703e90641523ac"
  },
  {
    "url": "assets/img/rw+ideal.ff10f18d.png",
    "revision": "ff10f18d2bc34cd7756b00ecae187c49"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5f8534cf.js",
    "revision": "8dfa5e5a32b98865f3fa960b662c6e21"
  },
  {
    "url": "assets/js/11.0867a1e4.js",
    "revision": "cc33b77d97fdd3c1736ac78ee868a5b9"
  },
  {
    "url": "assets/js/12.ce023ef3.js",
    "revision": "05c150a6a659f3fe5fd695e47306e74e"
  },
  {
    "url": "assets/js/13.df3bb4eb.js",
    "revision": "54abe441186bcc8b9e6150a83672bcfc"
  },
  {
    "url": "assets/js/2.f53e62df.js",
    "revision": "8f265611657e1a7af270952db67ef914"
  },
  {
    "url": "assets/js/3.a81070ff.js",
    "revision": "e42785f031be07e7d55754fea751b334"
  },
  {
    "url": "assets/js/4.28fd81e4.js",
    "revision": "d195d7ebc91b21bb1ef8b8a2378cb303"
  },
  {
    "url": "assets/js/5.104597bf.js",
    "revision": "72b1a77e17d3e336cf146e4b896cb1aa"
  },
  {
    "url": "assets/js/6.56c42769.js",
    "revision": "416e60260ad712444dc4ce2cf5d3ed16"
  },
  {
    "url": "assets/js/7.52f62a72.js",
    "revision": "c37e5ccfd7dcf13f3b50bb6cef474549"
  },
  {
    "url": "assets/js/8.e95ce831.js",
    "revision": "31724c89b6a14147870200f1975077cb"
  },
  {
    "url": "assets/js/9.07920cfc.js",
    "revision": "68615d96461de0a8e877900560c66326"
  },
  {
    "url": "assets/js/app.0331144a.js",
    "revision": "8da52cc4fe839ad1d4a630aacfbf237b"
  },
  {
    "url": "catalogue/effect_modern_cpp/chapter_1.html",
    "revision": "896c991e331776d1fee6978546bd19a7"
  },
  {
    "url": "catalogue/effect_modern_cpp/item_1.html",
    "revision": "2c370286d15158ff794060aac4299283"
  },
  {
    "url": "catalogue/effect_modern_cpp/item_2.html",
    "revision": "6ac0852ae0fcfd1bfe5558b920fb6e73"
  },
  {
    "url": "catalogue/effect_modern_cpp/item_3.html",
    "revision": "780bf1d4d50592db67d4bde7c2e52558"
  },
  {
    "url": "catalogue/effect_modern_cpp/item_4.html",
    "revision": "611e9258cfd8805239a0b7ce6a97def4"
  },
  {
    "url": "catalogue/effect_modern_cpp/using-pluging.html",
    "revision": "72ee0192ece3179e2593fa2389860727"
  },
  {
    "url": "catalogue/index.html",
    "revision": "1ad3f06eb7a95e07a31d33f15a34ae9c"
  },
  {
    "url": "catalogue/others/behavior_trees_grammar_basics.html",
    "revision": "808dcb0ef2836be8b802d2367f36d846"
  },
  {
    "url": "catalogue/others/read_write_problem.html",
    "revision": "eb19c49113b45b12506399a82e1f172c"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "56a650231c5e195bfef631825e0544df"
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
