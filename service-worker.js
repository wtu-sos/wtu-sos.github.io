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
    "revision": "cc48036f9ca9ac65195e3fd4d497dd8e"
  },
  {
    "url": "assets/css/0.styles.0e8b314a.css",
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
    "url": "assets/js/10.0b701fec.js",
    "revision": "b4bc2b18ce0d086c9023d5dc7cc682e2"
  },
  {
    "url": "assets/js/11.87186876.js",
    "revision": "29d830e9ac40bcdeec41813fb05d5eb6"
  },
  {
    "url": "assets/js/12.97dc72ac.js",
    "revision": "05c150a6a659f3fe5fd695e47306e74e"
  },
  {
    "url": "assets/js/13.50396df9.js",
    "revision": "54abe441186bcc8b9e6150a83672bcfc"
  },
  {
    "url": "assets/js/2.f81dea55.js",
    "revision": "8f265611657e1a7af270952db67ef914"
  },
  {
    "url": "assets/js/3.043cc777.js",
    "revision": "d2a4de81d4ab39f53db4447bef2d1f25"
  },
  {
    "url": "assets/js/4.d77f50e5.js",
    "revision": "7e5bf1123d6ed0450dc5ae07f1793e8b"
  },
  {
    "url": "assets/js/5.6a6efbdf.js",
    "revision": "72b1a77e17d3e336cf146e4b896cb1aa"
  },
  {
    "url": "assets/js/6.17fcc2da.js",
    "revision": "416e60260ad712444dc4ce2cf5d3ed16"
  },
  {
    "url": "assets/js/7.bc180a6e.js",
    "revision": "a5bab61013c0a7b3121419eb79ede1f6"
  },
  {
    "url": "assets/js/8.4dda7172.js",
    "revision": "226e78bceca2a971adacba753c2c92db"
  },
  {
    "url": "assets/js/9.4b53ecf7.js",
    "revision": "73c2f7e6a3bbb8eec7a06e0743afd0b3"
  },
  {
    "url": "assets/js/app.50315d51.js",
    "revision": "67df1bfea3c3b512f6d5faff74020477"
  },
  {
    "url": "catalogue/effect_modern_cpp/chapter_1.html",
    "revision": "b76dcf8182752bdee46c4ac1d319d41c"
  },
  {
    "url": "catalogue/effect_modern_cpp/item_1.html",
    "revision": "685900034fa22abe770907dcc5019f59"
  },
  {
    "url": "catalogue/effect_modern_cpp/item_2.html",
    "revision": "a3475c72a1e1963cd3943c19dd79098c"
  },
  {
    "url": "catalogue/effect_modern_cpp/item_3.html",
    "revision": "cb4fb14b4df1da27509b1e9667e1d840"
  },
  {
    "url": "catalogue/effect_modern_cpp/item_4.html",
    "revision": "b2ccb96d61a76a451efcd73f4455c95d"
  },
  {
    "url": "catalogue/effect_modern_cpp/using-pluging.html",
    "revision": "ba6c1d17a7f3e67c518eda829f7d6159"
  },
  {
    "url": "catalogue/index.html",
    "revision": "ba9f2f5fca878430a1312b08e52647ad"
  },
  {
    "url": "catalogue/others/behavior_trees_grammar_basics.html",
    "revision": "aa247303d89edaaecee3e868e59d265e"
  },
  {
    "url": "catalogue/others/read_write_problem.html",
    "revision": "74ad7add1dbf2319d359ab09b465a412"
  },
  {
    "url": "img/index.jpeg",
    "revision": "9855a9d336d5cf1129fee3daa2ac137d"
  },
  {
    "url": "index.html",
    "revision": "5c37f680f1700ded92bc832ce5381f44"
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
