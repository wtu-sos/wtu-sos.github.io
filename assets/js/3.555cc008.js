(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(t,r,e){t.exports=e.p+"assets/img/rw.6def7c6f.png"},168:function(t,r,e){t.exports=e.p+"assets/img/rw+ideal.ff10f18d.png"},176:function(t,r,e){"use strict";e.r(r);var a=[function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"读写问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读写问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 读写问题")]),t._v(" "),a("p",[t._v("原文链接： http://www.1024cores.net/home/lock-free-algorithms/reader-writer-problem")]),t._v(" "),a("p",[t._v("读写问题是并行系统中的常见的基础问题之一。在单线程环境中访问的类型（读或\n者写）的不相关的。当一个线程拥有一个对象的引用时，它可以对该对象做它想要做的\n任何操作（大多数情况中，你可以将读改为写而不产生任何问题）.然尔，在多线程环\n境中数据的访问方式是固定的，因为多个线程可以异步的读取数据而不产生的任何冲突\n（数据竞争），但是要要进行写入操作时就必须独占数据（一次最多一个线程行写操作）\n。")]),t._v(" "),a("p",[t._v("现在有一个读写锁可以用于这个情况，那还有什么问题吗？")]),t._v(" "),a("p",[t._v("问题是传统的读写锁无法进行扩展。在提高读取负载时它出现了非正常的性能降级。以\n下是pthread_mutex_t，pthread_spinlock_t和pthread_rwlock_t的综合基准\n测试结果：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(167),alt:"avatar"}})]),t._v(" "),a("p",[t._v("让我们为我们想要观察的内容添加一条绿线，这是pthread_spinlock_t的完美线性加\n速：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(168),alt:"avatar"}})]),t._v(" "),a("p",[t._v("对于读写锁，假设在10000个循环中处于互斥状态中尽可能的拓展读取负载是非常重要的。\n当你拥有更多的硬件处理线程，那么你的处理时间也就越多。否则的话，读取线程间同步\n开销（线程切换，数据同步）将会是主要开销，而且系统也无法拓展。根本原因是每一个\n读取线程所指执行的读写锁的lock和unlock操作的同步协议是一个写访问（关于互斥锁的\n内部数据），而写访问在同一时刻只能由一个线程执行。")]),t._v(" "),a("p",[t._v("而且，读取线程与写入线程互斥也是一个问题。无论是读取线程还是写入线程在高负载的情\n况下都有可能饥饿，注意当你拥有越多的硬件线程时，它们也将产生越多的负载。也就是说\n，这不仅仅是程序的影响，也与底层硬件相关，在你升级了性能更好的机器后，你可能会发\n现程序的性能反而下降了（这在现在情况中并不少见）。")]),t._v(" "),a("p",[t._v("高级读写器同步原语的整体思想是使逻辑上只读访问物理上只读共享数据和/或消除读写器之\n间的互斥。")]),t._v(" "),a("p",[t._v("对于这个，有几个这方面的技术：")]),t._v(" "),a("h2",{attrs:{id:"多版本并发控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多版本并发控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 多版本并发控制")]),t._v(" "),a("p",[t._v("多片并发控制（MVCC）是消除饥饿的一个常用技术。MVCC允许一个对象的多个版本同时存在.即存在一个当前版本和一个或者多个旧版本。Reader获取当前的版本并信赖它进行它们想要的工作。直到一个Writer创建并发布了这个对象的新版本，作为这个对象的当前版本。此时，Reader依旧使用旧版本而且不能阻断Writer。当Reader不再使用这个对象的旧版本时，它将会被释放。")]),t._v(" "),a("p",[t._v("这与持久数据结构非常的相似。不同的是，在操作持久化数据结构的上下文中我们关心这个对象的所有版本必需相同；但是在MVCC中，我们有一个独立的当前版本和几个我们目前正在使用的旧版本。")]),t._v(" "),a("p",[t._v("如果你习惯于在非并发环境中工作，那么对你来说这个方法可能有些奇怪并且反直觉。但是请相信我，对于并发系统，这是一个非常的好的方法。它把握住了事物在并发系统中的本质。")]),t._v(" "),a("h2",{attrs:{id:"乐观并发控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#乐观并发控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 乐观并发控制")]),t._v(" "),a("p",[t._v("另一种技术是乐观并发控制（与传统的悲观并发控制相对）")])])}],n=e(0),_=Object(n.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);r.default=_.exports}}]);