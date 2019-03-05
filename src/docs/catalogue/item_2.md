# 条款2: 理解auto类型推导

如果你已经阅读了条款1中关于模板类型推导的内容,那么你已经知道了关于auto类型推导几乎所有的相关知识了,因为除了一些特例,auto类型推导其实就是模板类型推导.但这两者怎么会是相同的呢?模板类型推导包含了模板,函数和参数类型推导,但auto并不处理这些东西.

这是对的,但并不是问题.模板类型推导与auto类型推导可以直接映射.字面上的意思就是有一个从一个到另一个的转换算法.

在条款1中,模板类型推导用下面这个通用函数模板来解释:

``` cpp
template<typename T>
void f(ParamType param);

```
这样来调用:

``` cpp
f(expr);
```
以这样的方式调用函数f,编译器使用expr来推导T和ParamType的类型.
当一个变量通过auto来声明的时候,auto就扮演了模板中T的角色,对应变量的类型就是ParamType.相比描述来说,看一个例子更加直观:

``` cpp
auto x = 27;
```
这里,x的类型定义仅是auto自身.换个方式,这样声明的话:
``` cpp
const auto cx = x;
```
x的类型是const auto.换成这样声明的话:
``` cpp
const auto& rx= x;
```
x的类型是cosnt auto&.编译器在推导上面的示例中x,cx,rx的类型时,就像这里有对应声明的一个模板,并且以对应的表达式来调用这些模板:
``` cpp
template<typename T>                  // 理论上等价于推导x的类型
void func_for_x(T param);

func_for_x(27);                       // 理论上调用中param的类型推导等价是于x的类型推导 

template<typename T>                  // 理论上等价于推导cx的类型
void func_for_x(const T param);

func_for_x(x);                        // 同理

template<typename T>                  // 理论上等价于推导rx的类型
void func_for_x(const T& param);

func_for_x(x);                        // 同理
```
正如我所说的,auto推导类型与模板推导类型除了一个例外(我们即将讨论到),其它的都是相同的.
条款1在上面的通用函数模板中将模板类型推导根据ParamType和param的类型分成三个情况.在使用auto声明变量时,可以把类型说明符替换为ParamType,因此也可以将其分为三种情况:
 - 情景 1: 类型说明符是指针或者引用,但不是一个通用引用.
 - 情景 2: 类型说明符是一个通用引用.
 - 情景 3: 类型说明符即不是指针也不是引用.

我们已经看过了情况1和3的示例代码:
``` cpp
auto x = 27;  // 情景3

const auto cx = x;  // 情景3

const auto& rx = x;  // 情景1: rx是一个非通用引用
```
情景2正如你预期的那样:
``` cpp
auto&& uref1 = x;           //x是一个int左值
                            // uref1的类型是int&

auto&& uerf2 = cx;          //x是一个int左值
                            // uref2的类型是const int&

auto&& uerf3 = 27;          //x是一个int右值
                            // uref3的类型是int&&
```
条款1总结了关于数组和函数类型这些非引用类型符号如何退化成指针的讨论.这些情况在auto类型推导中也有:

``` cpp
const char name[] = "R. N. Briggs"; // name的类型是const char[13]

auto arr1 = name;                   // arr1的类型是const char*

auto& arr2 = name;                  // arr2的类型是 const char (&)[13]

void someFunc(int, double);

auto func1 = someFunc;              // func1的类型是void (*)(int, double)

auto& func2 = someFunc;             // func1的类型是void (&)(int, double)
```

正如你所见的,auto类型推导与模板类型推导一样工作.它们是一体两面的.
只有一个方面是不同的.我们从假设要声明一个int型的变量并初始化为27,c++98提供两种语法选择:
``` cpp 
int x1 = 27;
int x2(27);
```
c++11,支持了初始化列表,增加了这些方式:
``` cpp
int x3 = {27};
int x4 {27};
```
总而言之,四种语法,但产生了同一个结果:声明一个int类型变量初始化为27.
但正如条款5所阐述的,使用auto代码修饰类型来声明变量是有优势的,因此像下面这样使用auto来替换int来声明变量是一个好的选择.最直接的使用代码来描述就是这样的:
``` cpp
auto x1 = 27;
auto x2(27);
auto x3 = {27};
auto x4 {27};
```

这些声明编译器全部可以编译通过,但它们一旦替换了就不再是同一种含义了.前两种声明方式确实是声明了一个值为27的int类型变量.
然后后续两个声明了一个包含一个值为27的元素的`std::innitializer_list<int>`类型的变量.

``` cpp
auto x1 = 27;     // 类型是int,值为27

auto x2(27);      // 同上

auto x3 = {27};   // 类型是std::initializer_list<int>
                  // 值为 { 27 }

auto x4 {27};     // 同上
```

这是由于auto的一个特殊的类型推导规则导致的.
当一个auto声明的变量初始值被花括号包裹时,
推导出来的类型就是`std::initializer_list`.如果这个类型无法被推导
(比如,由于初始化列表中的值类型是不一致),代码将无法通过编译:

``` cpp
auto x5 = {1, 2, 3.0};    // 错误!无法推导出std::initializer_list<T>中T的类型
```
正如注释所描述的, 这种情况下类型推导将会失败, 但重要的是要意识到这里实际上是两种类型推导被取代了.
其一从auto的使用来看:x5的类型必需被推导出来.
因为x5的初始值是在大括号中,x5必需被推导成`std::initializer_list`.
但`std::initializer_list`是一个模板.
它的实例是针对某些类型T的`std::initializer_list<T>`,这意味着T的类型也必需被推导出来.
这里产生的类型推导属于第二种类型推导:模板函数推导的范围.
在这个例子中,因为初始化列表中不仅仅包含一个类型的值而推导失败.



