(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{172:function(t,e,c){"use strict";c.r(e);var a=c(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"content"},[c("h1",{attrs:{id:"类型推导"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#类型推导","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型推导")]),t._v(" "),c("p",[t._v("c++98只有一套设计的类型推导:函数模板.c++11对这套规则进行了一些修改,并增加了两种:auto和decltype. 之后c++14继续扩展了auto和decltype可能被使用的场景.更加广泛的应用类型推导将你从一些显而易见或者冗 余的类型名称拼写中解放出来.它使得c++软件更能适应变化,比如在源码中修改了一处类型,将会通过类型推导到 传播到源码中该类型所在的其它位置.但是,这可能使得生成的代码难以理解.因为编译自动推导出来的类型可能并 不是你所想要的那样一目了然.")]),t._v(" "),c("p",[t._v("不深入的理解类型推导是如何操作的,想要高效的使用现代c++进行编程是不可能的.有太多的类型推导发生的情况: 在调用函数模板的时候; 在大多数auto关键字出现的时候; decltype的表达式等等. 以及在c++14中神秘的decltype (auto)构造函数被使用的时候.")]),t._v(" "),c("p",[t._v("这一章节提供了每一个c++开发者所需要知道关于类型推导的信息.它诠释了模板类型推导是如何工作的,在这基础上,auto和decltype是如何以各自的方式工作.甚至它也解释了让你如何强制编译器显示的产生类型推导的结果.因此允许你确认编译器以你想要的方式进行类型推导.")])])}],!1,null,null,null);e.default=n.exports}}]);