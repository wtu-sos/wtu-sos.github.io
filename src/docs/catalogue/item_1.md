# 条款1:理解模板类型推导

当一个复杂系统的用户可以忽略系统是如何工作的,以及系统相系的设计细节是怎样的,只需要知道如何使用那就再好不过了.从这个角度来讲,c++的模板类型推导是一个巨大的成功.数百万程序员都能传递完全匹配的参数给模板函数,即使其中大部分人甚至无法给出简单的描述关于这些函数所使用的类型是如何被推导出来的.

如果上边的描述包括你,那我有好消息也有坏消息.好消息是模板类型推导是现代c++最引人注目的功能:auto的基础.如果你喜欢c++98的类型推导,那么你肯定也会喜欢c++11中auto的类型推导.坏消息是当模板类型推导规则运用于auto的上下文时不如它们用于模板时那么直观.因此,真正的深入理解auto的模板类型推导原理是很重要的.这条条款囊括了所有你需要了解的.

如果你想大致看一段相关的伪代码,我们可以思考一下以下这段函数模板的代码:
``` cpp
template<typename T>
void f(ParamType param);
```
调用是这样的:
``` cpp
f(expr);	// call f with some expresion
```

在编译过程中,编译器使用表达式expr来推导两个类型:T和ParamType.这些类型通常是不同的,因为ParamType经常包含一些修饰词,比如: const或者引用修饰.例如,如果模板声明成以下这样:
``` cpp
template<typename T>
void f(const T& param);		// ParamType is const T&
```
然后我们这样调用它:
``` cpp
int x = 0;
f(x);		// call f with an int
``` 
T被推导成int,但是ParamType被推导成const int&.

一般会很然的期望推导出来T的类型与传给函数的参数类型一致,比如T是expr的类型.上面的例子正在这种情况:x是一个int(整形), T也被推导成一个int.但并不是所有的情况都是这样的.T的类型推导不仅仅是根据expr的类型,也与ParamType的形式相关.有三种情况:
 - ParamType是一个指针或者引用类型,但不是一个通用引用(通用引用将会在条款24中详细介绍,现在,我们只需要知道通用引用的存在,而且与左值引用或者右值引用不同就可以了).
 - ParamType是一个通用引用.
 - ParamType即不是指针也不是引用.

 因此我们需要进行三个类型推导场景的测试.每个测试都基于我们模板的通用格式和调用:

``` cpp
template<typename T>
void f(ParamType param);

f(expr);	// deduce T and ParamType from expr
```
## 情景1: ParamType是一个引用或者指针,但不是通用引用
最简单的情况是ParamType是一个引用类型或者指针类型,但不是通用引用.在这种情况下,类型推导会以以下这种方式来工作: 
1. 如果expr的类型是引用,那么忽略引用部分.
2. 然后通过expr的类型对比ParamType进行模式匹配推导T的类型.

假设我们的模板定义是这样的:
``` cpp
template<typename T>
void f(T& param);  // param is a reference
```
接着我们声明一些变量:

``` cpp
int x = 27;			// x is an int
const int cx = x;	// cx is a const int
const int& rx = x;	// rx is a reference to x as a const int
```
以下是通过变量的模板调用推导param和T的类型:
``` cpp
f(x);   // T is int, param's type is int&

f(cx);  // T is const int,
        // param's type is const int&

f(rx);  // T is const int,
        // param's type is const int&
```

