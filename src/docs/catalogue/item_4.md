# 条款4 : 了解如何查看推导类型
用于查看类型推导结果的工具的选择取决于在软件开发过程的阶段您想要信息.我们将说明三种可能:
1. 在你编写代码的时候获取类型推导信息. 
2. 在编译的时候获取类型推导信息. 
3. 在运行时获取类型推导信息.

## IDE(集成开发环境)编辑器
IDE中的代码编辑器在你将鼠标放在你要显示的代码上时通常会显示代码的类型(例如:变量,参数,函数等).比如下列代码:
``` cpp
const int theAnswer = 42;

auto x = theAnswer;
auto y = &theAnswer;
```
IDE的编辑器将会显示x的推导类型是int,y的推导类型是const int*.
想要这个功能生效,你的代码至少是需要可通过编译的,因为使IDE能提供这类型信息的其实是运行于IDE内部的一个C++编译器(或者编译器前端).如果编译器无法解析你的代码并执行类型推导,那么它将无法为你显示它推导的类型.

对于像int这样的简单类型,IDE提供的信息是有效的.然后,我们即将看到的,当要推导的类型更加复杂的时候,IDE所提供的信息可能并不是很有帮助.

## 编译器诊断
一个让编译器显示它所推导的类型的有效的方法是想办法让这个类型造成一个编译错误.报告问题的错误信息将会明确的提示造成这个问题的类型.

例如:假如我们想要查看上面那段示例中推导出来的类型.我们首先可以声明一个未定义的模板.像这样:
``` cpp
template<typename T>
class TD;

```
使用这个模板来初始化一个对象将会产生错误信息,因为没有可以用于初始化对象的模板定义.想要看x和y的类型,只需要使用TD来初始化对应的类型:
``` cpp 
TD<decltype(x)> xType;    // 产生的错误包含x和y的类型
TD<decltype(y)> xType;
```
我使用变量名+Type的格式来给变量命名,因为这样可以帮助我在返回的错误找到我想要的信息.针对上面的代码,下方的问题描述是我的编译的的诊断信息中的一部分(我已经把我们注意的部分高亮了):
``` 
error: aggregate 'TD<int> xType' has incomplete type and cannot be defined
error: aggregate 'TD<const int*> yType' has incomplete type and cannot be defined
```
不同的编译器以不同的格式提供相同的信息:
``` 
error: 'xType' uses undefined class 'TD<int>'
error: 'yType' uses undefined class 'TD<const int *>'
```

除了格式不一样外,我测试过的所有编译器在应用这个技术的时候,都会产生带有有用的类型信息错误信息.

## 运行时输出
`printf`显示类型信息的方法无法在程序运行前使用(我并不是推荐你使用`printf`方法),但它可以提供各种各样的输出格式.但是要创建一个合适的格式的文本来体现你所你状态的类型信息并不容易."这还不简单",你可能会这么想,"直接使用`typeid`和`std::type_info::name`来显示就好了！",在后续探索对x和y的类型推导过程中，你会发现我们可以这样写：
``` cpp
// 显示x和y的类型名字 
std::cout << typeid(x).name() << '\n' ;
std::cout << typeid(y).name() << '\n' ;
```
这个实现是通过对类似x或y这样的对象调用typeid方法返回一个`type_info`对象,而`type_info`对象包含了一个叫name的成员函数，可以生成一个C风格字符串（如：const char×）来表示相应名字的类型.
`std::type_info::name`仅是为了提供一些帮助并不保证返回值一定合理。仅提供有限的辅助。比如，gnu和clang编译器上报的x的类型是“i”，y的类型是“PKi”.一旦你理解了在这两个编译器的输出中“i”表示int类型，PKi表示"Point to Const int"(指向常量整形的指针),那结果就很容易理解了。(这两个编译器都支持解析复杂类型的工具：c++filt).Microsoft的编译器生成一个更直观的输出：x的类型是“int”,y的类型是"int const *".

因为这些结果对于x和y的类型来说是正确的，所以你可能会觉得查看类型的问题已经被解决了，但我们不能这样草率的下定论。让我们考虑下更复杂的情况：

``` cpp
template<typename T>
void f(const T& param);

std::vector<Widget> createVec();

const auto vw = createVec();

if (!vw.empty()) {
	f(&vw[0]);
	...
}
```

这段代码中，涉及了用户自定义类型(Widget),一个C++s标准库容器(`std::vector`)和一个auto变量(vw)，这对于观察你的编译器类型推导过程是非常有代表性的。例如，它可以很好的展示模板类型参数T和函数f的参数param类型被推导的过程。

解决问题中的类型是很简单的，只要在f中添加一些代码来显示你想看到的类型名：
``` cpp
template<typename T>
void f(const T& param)
{
	using std::cout;
	cout << "T =     " << typeid(T).name() << '\n';   // 显示T的类型
	cout << "param = " << typeid(param).name() << '\n'; // 显示param的类型
	...
}
```

执行通过GNU或者CLANG编译器生成的执行文件会产生这样的输出：
``` 
T =     PK6Widget
param = PK6Widget
```
我们已经知道了在这些编译器中，PK意味着"point to const",所以未知的就是那个6的意义。其实它只是表示在这之后的类型名所包含的字符数目。因此编译器告诉我们T和param的类型都是 `const Widget*`。
微软的编译器输出为：
```
T =     class Widget const *
param = class Widget const *
```
三个独立的编译器生成相同的信息表明信息是准确的。让我们认真观察下，在模板f中，param声明的类型是const T&.既然如此，为什么会出现T和param拥有相同类型的奇怪情况呢？假如T是一个int类型，那么param的类型应该是const int&--而不应该是相同的类型。
不幸的是，`std::type_info::name`所输出的结果是不可靠的。例如，在这种情况下，三个编译所输出的param的类型是不正确的。此外，它的需求本质上是不正确，因为std :: type_info :: name的特化要求将类型作为by-value参数传递给模板函数。
