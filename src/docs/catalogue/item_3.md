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
