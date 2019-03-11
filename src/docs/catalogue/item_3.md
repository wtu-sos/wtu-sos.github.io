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
