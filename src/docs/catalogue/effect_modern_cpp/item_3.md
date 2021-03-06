# 条款3: 理解decltype

decltype是一个怪异的产物.提供一个名字或者表达式,decltype告诉你这个名字或者表达式的类型.典型的就是告诉你你所预测的类型确实是什么.然后,偶尔它提供的结果会让你抓狂,然后不得不去翻阅相关文档或者在线Q&A网站寻求帮助.

我们将从一些常见的典型案例开始.相对于模板和auto类型的推导过程中所产生的行为(详见条款1和2),
decltype只是复述了你提供的名字或者表达式的实际类型:

``` cpp
const int i = 0;             // decltype(i) 是const int

bool f(const Widget& w);     // decltype(w) 是Widget&
                             // decltype(f) 是bool (const Widget&)

struct Point {               // decltyp(Point::x)和decltype(Point::y)都是int
	int x, y;
};

Widget w;                    // decltype(w) 是Widget

if (f(w)) ...                // decltype(f(w)) 是bool

template<typename T>
class vector {
public:
	...
	T& operator[] (std::size_t index);
	...
};

vector<int> v;               // decltype 是vector<int>
...

if (v[0] == 0) ...           // decltype 是int&
```
如你所见,毫无惊喜.

在C++11中,decltype主要用途就是声明一个函数返回值类型依赖参数类型的模板函数.例如,假设我们想实现一个接受支持索引访问的容器(比如使用`[]`)和一个索引,然后验证合法性并返回索引操作的结果.这个函数的返回值类型应该与索引操作的返回值类型相同.
类型T的对象容器的索引操作通常返回一个T&类型.例如,这是`std::deque`的情况,而且对于`std::vector`也几乎如此.但是对于`std::vector<bool>`,索引操作并不是返回bool&,而是返回一个新的对象.至于这种情形的原理以及细节将在条款6中详细解释,这里我们关注的重点是返回值的类型依赖容器的索引操作的返回值类型.
decltype使这种情况表达起来更为简单.这里是我们想要编写的第一个模板代码片断,展示了如何使用decltype来计算返回值类型.这段代码需要一些优化,但我们现在暂不考虑:
``` cpp
template<typename Container, typename Index>
auto authAndAccess(Container& c, Index i)
	-> decltype(c[i])
{
	authenticateUser();
	return c[i];
}
```
这个模板函数名字前面的auto不做任何的类型推导.更确切的说,它象征着这里使用了c++11的尾部返回类型语法,也就是函数的返回值类型被声明在参数列表后面(在"->"符号后面).尾部返回类型对于函数参数指定函数的返回类型来说是有优势的.例如,在函数authAndAccess中,我们通过使用c和i来指定返回值类型.如果我们使用传统语法返回值类型在函数名前方的话,c和i将是不合法的,因为它们这个时候还没有被声明.

通过这样的声明,authAndAccess的返回值类型就是传入的容器的索引操作("[]")所返回的类型,这正是我们所需要的.

C++11允许单语句的lambada函数的返回值类型被推导,在C++14中将这个扩展到了所有的多语句的lambada表达式和函数.这意味着,在C++14中我们可以直接忽略尾部返回值类型,直接使用auto作为前置函数返回值类型.使用这种方式声明,意味着将会使用类型推导.通常,这意味着编译器将会根据函数的实现来推导函数的返回值类型:
``` cpp
template<typename Container, typename Index>
auto authAndAccess(Container& c, Index i)
{
	authenticateUser();
	return c[i];
}
```
条款2说明了通过auto指定返回值类型的函数,编译器会使用模板类型推导.但在这种情况下,这是有问题的.正如我们之前讨论过的,大多数容器的索引操作返回一个T&引用类型,但条款1的说明了在模板类型推导过程中,表达式的引用特性将会被忽略掉.思考下下面这段代码的含义:
``` cpp
std::deque<int> d;
... 
autoAndAccess(d, 5) = 10;
```
这里,`d[5]`的类型是`int&`,但auto对于函数`autoAndAccess`的返回值类型推导中将会去掉引用,因此,返回值类型是int.这表明,函数返回了一个值类型,是一个右值,上面的代码试图给一个右值整理变量赋值10.这在C++中是被禁止的,因此这段代码是无法通过编译的.

如果我们想要这段代码能够工作,那么我们需要decltype类型推导来声明函数的返回值类型,比如:指定authAndAccess函数返回类型与表达式`c[i]`的类型相同.c++委员会在C++14中通过`decltype(auto)`标识符使得在一些类型推导情况中使用decltype类型推导规则成为可能.这使得decltype和auto原来相互矛盾的关键字一起发挥了完美的作用:auto指定类型需要被推导,decltype表示推导过程中使用decltype类型推导规则.因此我们可以像这样来重写authAndAccess函数:
``` cpp
template<typename Container, typename Index>
decltype(auto)
authAndAccess(Container& c, Index i)
{
	authenticateUser();
	return c[i];
}
```
现在authAndAccess将会真正的返回c[i]所返回的类型.通常,当c[i]返回一个T&时,authAndAccess也会返回一个T&,当c[i]返回一个对象实例时,authAndAccess也返回一个对象实例.

`decltype(auto)`不仅仅用于函数的返回值类型.当你想要应用decltype类型推导规则来初始化一个表达式时也可以用它来便捷的声明的变量:

``` cpp
Widget w;
const Widget& cs = w;
auto myWidget1 = cw;       //auto类型推导: myWidget1类型为Widget

decltype(auto) myWidget2 = cw;   // decltype类型推导: myWidget2的类型是const Widget&

```
我知道这里可能有两件事件一直困扰你.一个是我们之前说要重写authAndAccess,但一直没有进行任何说明.现在让我们来解决这个问题.
首先我们来看一下C++14版本的authAndAccess的声明:

``` cpp
template<typename Container, typename Index>
decltype(auto) authAndAccess(Container& c, Index i);
```
由于返回的是一个容器元素的引用类型以便用户来修改容器的内容,所以容器参数是以非const引用左值引用的方式传递.这也意味着无法传递一个右值容器对象给该函数.右值无法绑定一个左值引用(除非它们是常量左值引用(lvalue-reference-to-const),这个案例没有涉及到).

固然,传递一个右值容器给函数authAndAccess是一个极端情况.一个右值容器,作为一个临时对象将会在包含authAndAccess的语句块的末尾被销毁,这也意味着对于这个容器中一个元素的引用(通过authAndAccess函数返回的)将在这个语句块的末尾创建的时候就被悬空了.目前,还是会有一些场景需要传递一个临时对象给authAndAccess.例如:用户可能想要拷贝一份临时对象的一个元素:
``` cpp
std::deque<std::string> makeStringDeque();

auto s = authAndAccess(makeStringDeque(), 5);
```

要支持这样调用意味着我们需要修改authAndAccess的声明使它能够接受左值和右值容器参数.重载可以实现我们要的效果(一个函数声明接受一个左值引用参数,另一个接受右值引用参数),但这意味着我们需要维护两个函数.一个避免维护两个函数的方法是让authAndAccess函数使用接收左值和右值的引用参数,条款24将会详细讲解通用引用以及他实际上做了哪些事情.因此authAndAccess可以这样声明: 
``` cpp
template<typename Container, typename Index>
decltype(auto) authAndAccess(Container&& c, Index i);  // c是一个通用引用
```
在这个模板中,我们不知道我们操作的容器对象的类型,这意味着我们也同样忽略了它所包含的索引对象的类型.对未知类型的对象进行值拷贝通常会有非必要拷贝的性能风险,对象的切片行为问题(详见条款41),误导同事的可能等,但是从标准库中一些容器使用索引值的示例的情况来看似乎也是合理的(比如`std::string`, `std::vector`和`std::deque`),所以我们将保持对他们使用值传递.

然后我们需要更新这个模板的初来以便使他更符合条款25中针对`std::forward`应用于通用引用的注意事项:
``` cpp 
template<typename Container, typename Index>
decltype(auto)
	authAndAccess(Container&& c, Index i)
{
	authenticateUser();
	return std:forward<Container>(c)[i];
}
```
这个应该满足我们所有的需求了,但它需要支持C++14的编译器.如果你没有的话,那你需要使用C++11版本的模板.除了需要你自己指定返回值类型以外,与C++14的版本完全相同:
``` cpp
template<typename Container, typename Index>
auto 
authAndAccess(Container&& c, Index i)
	-> decltype(std::forward<Container>(c)[i])
{
	authenticateUser();
	return std::forward<Container>(c)[i];
}
```
另一个可能被你一直念叨的问题是我在这个条款开头提到的decltype几乎总是产生你所希望的类型,基本没有意外.事实上,你基本不可能会遇上这些规则的意外情况,除非你是一个重量级库的实现者.
想要完全理解decltype的行为,你需要自己去熟悉这些特殊案例.它们都太晦涩,以致于难以在本书相类似的书中深入讨论,但是可以大概了解下decltype以及它的用法.
对一个名字应用decltype来返回这个名字的声明的类型.名字是一个左值表达式,但是并不影响decltype的行为结果.相对于名字来说左值表达式会更加复杂一些,然后decltype保证所返回的类型总是一个左值引用.因此一个左值表达式或者一个名字的类型是T,decltype将会返回T&类型.这个基本没有任何影响,因为大多数的左值表达式本质上包含了左值引用.比如函数返回左值,总是返回左值引用.

然尔这个行为的意义是值得我们注意的.在`int x = 0;`中,x是一个变量名,因此deceltype(x)是一个int类型.但是使用括号包裹变量名x--"(x)"--得到一个相对于名字来说更复杂的表达式.对于名字来说,x是一个左值,C++也定义表达式(x)作为一个左值.因此`decltype((x))`是一个int&.使用括号包裹一个变量名,可以改变decltype所返回的类型.

在C++11中,这只是一个小语法点,但是当他与C++14中对decltype(auto)的语法相结合时,在你写一个函数返回语句时它会产生一系列的变化影响你的类型推导结果:
``` cpp
decltype(auto) f1()
{
	int x = 0;
	... 
	return x;    // decltype(x)是int,因此f1返回int
}

decltype(auto) f2()
{
	int x = 0;
	... 
	return (x);    // decltype((x))是int&,因此f1返回int&
}
```
要注意f2不仅仅是返回值类型与f1不同,它返回了一个对局部变量的引用!这种代码将你带上了前向未定义行为的不规路的高速列车---一辆你肯定不愿意上的列车.

最重要的是在使用decltype(auto)要非常注意.在decltype(auto)类型推导的表达式中一些不起眼的细节将会影响返回的类型.为了保证被推导返回的类型是你所期望的,使用条款4中讲解的技术.
同时,不要忽视大局.当然,decltype(单独使用和auto相结合)可能会有一些令人意外的类型推导结果,但那都是一些特殊情况.通常情况下,decltype都会产生你所期望的类型.当decltype应用于名字时是完全正确的,因为decltype这时所做的就是它所说的:它返回这个名字的声明类型.

|注意事项|
|---------|
|1. decltype总是的不做任何修改的返回变量或者表达式的类型.|
|2. 对于类型为T的左值表达式和名字,decltype总是返回T&类型.|
|3. C++14中支持的decltype(auto)就像auto一样从它的初始化操作来推导类型,但它使用decltype规则来推导类型.|
