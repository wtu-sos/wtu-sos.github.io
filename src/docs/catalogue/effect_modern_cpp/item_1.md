# 条款1: 理解模板类型推导

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
注意第2个和3个函数调用,因为cx和rx指定为常量类型,T被推导成const int,因此产生了const int&的参数类型.这对调用者来说是很重要的.当调用者传递一个const对象给一个引用参数时,他们期望该对象能保持常量不被修改的特性,比如参数变成一个const引用.这也是为什么一个常量传递给一个接收T&参数类型的模板是安全的原因:对象的常量特性也是T类型推导的一部分.

在第3个示例中,我们发现即使rx的类型是一个引用,T还是被推导成一个非引用类型.这是因为在类型推导过程中rx的引用我被忽略掉了.

上面这些示例完整的展示了左值引用参数的推导,但是类型推导右值对引用参数的推导同样有效.当然,右值引用参数可能只能接收右值参数,但是这些限制与类型推导是无关的.

如果我们把函数f的参数类型从T&变成const T&,结果就有一些变化了,但也不是无迹可循的.cx和rx的常量特性依然有效,但由于现在param的声明是一个const引用,所以我们就不再需要将const作为T类型推导的一部分了.

``` cpp
template<typename T>
void f(const T& param);   // param is now a ref-to-const

// as before
int x = 27;               
const int cx = x;
const int& rx = x;

f(x);                     // T is int, param's type is const int&
f(cx);                    // T is int, param's type is const int&
f(rx);                    // T is int, param's type is const int&
```

和之前一样,rx的引用特性在推导过程中被忽略掉了.

如果参数是一个指针(或者一个指向常量的指针)而不是一个引用.类型推导本质上是一样的过程:
``` cpp
template<typename T>
void f(T* param);          // param is a pointer now

int x = 27;
const int *px = &x;        // px is a ptr to x as a const int

f(&x);                     // T is int, param's type is int*

f(px);                     // T is const int
                           param's type is const int*
```

到目前为止,你可能已经开始打瞌睡了.因为c++的类型推导规则对引用和指针类型的参数以这样的方式书写出来,是如此的自然,直白.所有的细节都显而易见.这应该就是你所需要的类型推导系统了.

## 情景2: ParamType是一个通用引用
当模板的参数类型是通用引用时推导规则便不是那么直观了.这些参数的声明看起来像是右值引用(比如:函数模板接收参数T,一个通用引用的声明类型为T&&),但当被传入的参数是一个左值时,他们的行为就不一样了.完整的内容将在条款24中详细说明,这里只是一个大概:
 - 如果expr是一个左值,那么T和ParamType都会被推导成左值引用.这有些不同寻常.第一,T被推导成一个引用这在模板类型推导中是一个特例.第二,虽然ParamType是用右值引用的语法声明的.但最终它推导出来的类型是一个左值引用.
 - 如果expr是一个右值,那将应用普通的规则(如情况1).
示例:
``` cpp
template<typename T>
void f(T&& param);              // param is now a universal refernce

// as before
int x = 27;               
const int cx = x;
const int& rx = x;

f(x);                           // x 是一个左值,因此T是int&,
                                // param的类型也是int&

f(cx);                          // cx是一个左值,因此T是const int&,
                                // param的类型也是const int&

f(rx);                          // rx是一个左值,因此T是const int&,
                                // param的类型也是const int&

f(27);                          // 27是一个右值,因此T是 int,
                                // param的类型是int&&,

```

条款24详细的解释了这些示例这样推导的原因.关键点是通用引用参数的类型推导规则与左值引用或者右值引用是不同的.通常,在使用通用引用的时候,类型推导要区分左值还是右值,这在非通用引用参数推导的时候是绝对不会发生的.

## 情景3: ParamType既不是指针,也不是引用

当ParamType既不是指针,也不是引用时,我们将它做为值传递来处理:
``` cpp
template<typename T>
void f(T param);            // param is now passed by value
```

这意味着param将是传入参数的一个拷贝----一个全新的对象.根据param将会成一个新对象的情况产生如何从expr推导出T的类型的规则:
1. 与之前一样,如果expr的类型是引用,则忽略引用部分.
2. 如果在忽略expr类型的引用特性后,如果expr是const,那么也忽略掉const.如果是volatile,同样忽略掉.(volatile对象并不常见,它们通常被用在实现设备驱动程序上.更多细节参考条款40).

于是:
``` cpp
// as before
int x = 27;               
const int cx = x;
const int& rx = x;

f(x);                           // x和param的类型都int

f(cx);                          // x和param的类型都int

f(rx);                          // x和param的类型都int

```
注意,即使变量cx和rx是cosnt变量,但param不是const.这是正常的.param是独立于cx和rx的一个完整的拷贝.事实上,无论param发生任何修改,cx和rx都不会被修改.这也是为什么param的类型推导过程中expr的const特性(vaolatile特性,或者其它)被忽略的原因:expr无法被修改,并不意味着他的拷贝也无法被修改.

重要的是要意识到仅仅当参数是通过值传递时const特性(和volatile特性)才可以被忽略.正如我们所见的,当参数是const引用或者const指针时,expr的const特性被保留(并未传递).但考虑到当expr是一个常量指针指向一个常量时,expr将会通过传值的方式被传递给param:

``` cpp 
template<typename T>
void f(T param);

const char* const ptr = "Fun with pointers";

f(ptr);			// pass arg of type const char* const

```

这里,星号右边的const表示指针被声明为一个常量:无法修改指针使其指向另一个地址,或者设置成空指针.(星号左边的指针表示指针指向的字符串是一个常量).当ptr被传给f时,组成指针的bit被的拷贝给param.这样,指针本身将会被通过值的方式传递.根据参数值传递的类型推导规则,ptr的const特性将被忽略,因经param的类型将被推导成const char*,比如指向常量字符串的可变指针.ptr指针指向类型的const特性在类型推导的过程中被保留,但ptr自身的cosnt特性会在拷贝创建新的指针param时被忽略.

### 数组参数
这个在普通模板类型推导中比较常见,看还是有一些细节需要注意.虽然它看起来有时候和指针类型差不多,但还是有一些不一样的.造成这种错觉的主要原因是在许多情况中,数组退化成了指针第一个元素的指针.这种允许退化的代码通常像这样的: 

``` cpp 
const char name[] = "J. P. Briggs";

const char* ptrToName = name;
```

这里,const char*类型的指针ptrToName通过const char[13]类型变量name初始化.这两个类型并不相同,但由于数组到指针的退化规则,所以代码能通过编译.

但如果数组是以值传递的方式传递给模板参数的时候,会发生什么呢?

``` cpp
template<typename T>
void f(T param);

f(name);
```
我们从一个非模板的以数组为参数的函数开始.是的,这样的语法是合法的:
``` cpp
void myFunc(int param[]);
```
但这数组的声明其实是一个指针声明的包装,意味着myFunc函数与这样的声明是等价的:
``` cpp
void myFunc(int* param);
```

这样数组与指针的等价声明会经常出现在以C为基础的C++语言中,这也进一步导致了数组类型与指针类型是等价的错误.

因为数组类型的参数声明被视为指针类型,所以当数组类型被通过值传递给模板函数时,参数类型将会被推导成指针类型.这意味着当我们调用函数f时,它的参数类型T被推导成const char*: 

``` cpp
f(name);	 // name是数组,但T的类型是const char*
```
但是我们可以曲线救国.虽然函数没办法声明参数类型是一个真实的数组,但是可以声明参数类型是数组引用!因此我们修改模板函数f使它接受引用参数,
``` cpp
template<typename T>
void f(T& param);		 // template with by reference parameter
```

我们这样调用它:

``` cpp
f(name);	   // pass array to f
```

T最后推导出来的真实类型就是数组!推导出来的数组类型包含了数据的大小,所以在上面这个示例中,T被推导为const char[13],模板函数f的参数类型(对该数组的引用)是const char(&)[13].是的,这语法看起来很糟糕,但知道它会从很少的人那里得到很多信任和赞赏。(原文:but konwing it will score you mondo points with those few souls who care. 同义句: but knowing it will get you a lot of credit and appreciation from the few people who care.)

有趣的是,利用创建的引用数组声明的模板函数还能推导出数组包含元素的个数:
``` cpp
template<typename T, std::size_t N>
constexpr std::size_t arraySize(T(&)[N]) noexcept 
{
	return N;
}
```

在条款15中有说明,为这个函数声明constexpr使的函数的返回值在编译期可见.这使得我们可以根据一个从大括号初始化的数组来创建一个具有同样大小的数组:
``` cpp
int keyVals[] = {1, 3, 7, 9, 11, 22, 35}; // keyVals有七个元素

int mappedVals[arraySize(keyVals)];       // mappedVals同样也有七个元素
```

当然,作为现在c++开发人员,相比内置的数组你可能会更喜欢std::array:
``` cpp
std::array<int, arraySize(keyVals)> mappedVals;  // mappedVals同样也有七个元素
```
至于为什么要声明为noexcept,这是为了帮助编译器更好的生成代码.具体细节可以参考条款14.

### 函数参数
在C++中,不仅仅只有数组是能退化成指针的类型.函数类型也能退化成函数指针,之前我们所讨论的关于的数组类型推导的任何东西也同样适用于函数推导和函数类型退化成函数指针:
``` cpp
void someFunc(int, double);       // 类型: void (int, double)

template<typename T>
void f1(T param);               

template<typename T>
void f2(T& param);

f1(someFunc);                     // T and param: void(*)(int, double)

f2(someFunc);                     // T: void(int, double)
                                  // param: void(&)(int, double)
```
这在实际中只有很少的一些差异, 如果你知道数组到指针的退化,那么你一般也知道函数到指针的退化.

到目前为止你的收获是:模板中类型推导的类型自动关联规则.我把他们之中最重要的部分在下方列了出来.为通用引用接受左值做的类型推导时的特殊处理可能有点混乱,然而,如果加上数组与函数的退化为指针的规则可能会变的更加的混乱.有时,你可能想抓住你的编译器并要求,"告诉我推导出了什么类型!".当你有这个想法的时候,可以查看条款4,因为它的致力于让编译做到这些.

| 要记住的|
|---------|
| 1. 在模板推导过程中,引用类型的参数将会变为非引用类型,因为它们的引用特性将会被忽略. |
| 2. 当通用引用类型参数进行类型推导的时候,左值参数需要特殊处理. |
| 3. 当按值传递的参数进行类型推导时,参数的const特性或者volatile特性都会被忽略. |
| 4. 在模板类型推导过程中,数组或者函数类型的参数都会退化为指针,除非它们被用于初始化引用类型. |
