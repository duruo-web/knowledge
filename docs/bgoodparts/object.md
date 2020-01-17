# 对象

* JavaScript 的简单类型包括数字、字符串、布尔值（true和false）、null值和undefined 值。其他所有的值都是对象。数字、字符串和布尔值"貌似"对象，因为它们拥有方法，但它们是不可变的。JavaScript中的对象是可变的键控组合（keyed collections）。在JavaScript中，数组是对象，函数是对象，正则表达式是对象，当然，对象也是对象。

对象是属性的容器，其中每个属性都拥有名字和值。属性的名字可以说包括空字符串在内的任意字符串。属性值可以是除undefined以外的任何值

JavaScript 中的对象是无类别（class-free）的。它对新属性的名字和值没有约束。对象适合用于手机和管理数据。对象可以包含其他对象，所有它们可以容易地表示称树形或图形结构。

JavaScript 包括一个原型链的特性，允许对象继承另一个对象的属性。正确地使用它能减少对象初始化的时间和内存消耗

## 对象字面量

对象字面量提供了一种非常方便地创建新对象的表示法。一个对象字面量就是包围在一对花括号中的零或多个'名/值'对。对象字面量可以出现在任何允许表达式出现的地方。
```js
var empty = {}
var stooge = {
  'first-name': 'du',
  last: 'ruo',
}
```
属性名可以是包括空字符串在内的任何字符串。在对象字面量中，如果属性名是一个合法的 JavaScript 标识符且不是保留字，并不强制要求用引号阔住属性名
对象是可嵌套的。

### 检索
1. 要检索对象中包含的值，可以采用在[]后缀中阔住一个字符串表达式的方式。
2. 如果字符串表达式是一个常数，而且它是一个合法的 JavaScript 标识符而并非保留字，那么也可以用`.` 表示法代替，优先考虑使用`.` 表示法，因为它更紧凑且可读性更好。
3. 检索不存在的成员元素的值，将返回一个 undefined 值
4. || 或运算符可以用来填充默认值
5. 尝试检索一个 undefined 值将会导致 TypeError 异常。可用过 && 运算符来避免错误 
```js
stooge['first-name'] // 'du'
stooge.last // 'ruo'
stooge.name // undefined

var status = stooge.name || 'unknown' // 'unknown'

stooge.name.model // throw 'TypeError'
stooge.name && stooge.name.model // undefined
```
### 更新

* 对象中的值可以通过赋值语句来更新。如果属性名已经存在于对象中，那么这个属性的值被替换。 如果对象之前并没有拥有那个属性名，那么该属性就被扩充到该对象中。

### 引用

* 对象通过引用来传统。它们永远不会被拷贝；

### 原型

每个对象都连接到一个原型对象，并且它可以从中继承属性。所有通过对象字面量创建的对象都连接到 Object.prototype 这个 JavaScript 中标准的对象。

当你创建一个新对象时，你可以选择某个对象作为它的原型。
* 创建一个使用原对象作为其原型的对象
```js
if (typeof Object.beget !== 'function'){
  Object.beget = function(o) {
    var F = function(){};
    F.prototype = o;
    return new F()
  }
}
var another_stooge = Object.beget(stooge);
```

原型连接在更新时是不起作用的。当我们对某个对象做出改变时，不会触及到该对象的原型

原型连接只有在检索值的时候才被用到。如果我们尝试去获取对象的某个属性值，且该对象没有此属性名，那么JavaScript 会试着从原型对象中获取属性值。如果那个原型对象也没有该属性，那么再从它的原型中寻找，依此类推，直到该过程最后到达终点 Object.prototype。 如果想要的属性完全不存在原型链中，那么结果就是 undefined 值，这个过程成为*委托*

原型关系是一种动态的关系。如果我们添加一个新的属性到原型中，该属性会立即对所有基于该原型创建的对象可见。（详见第6章）

### 反射

* typeof 确定属性值
原型链中的任何属性也会产生一个值

#### 处理不需要的属性
1. 让你的程序检查并剔除函数值。一般来说，做反射的目标是数据，因此你应该意识到一些值可能会是函数。
2. 使用 hasOwnProperty 方法，如果是对象独有的属性，它将返回 true。hasOwnProperty 方法不会检查原型链。

### 枚举

for in 语句可用来遍历一个对象中的所有属性名。该枚举过程将会列出所有的属性 --- 包括函数和你可能不关心的原型链中的属性 ---所以有必要过滤掉那些你不想要的值。最为常用的过滤器是 hasOwnProperty 方法，以及使用 typeof 来排除函数；

```js
var name;
for (name in anouther_stooge) {
  if (typeof anouther_stooge[name] !== 'function') {
    document.writeln(name + ':' + another_stooge[name]);
  }
}
```
属性名出现的顺序是不确定的。因此要对任何可能出现的顺序有所准备。如果你想要确保属性以特定的顺序出现，最好的办法就是完全避免使用 for in 语句，而是创建一个数组，在其中以正确的顺序包含属性名

通过使用 for 而不是 for in， 可以得到我们想要的属性，而不用担心可能发掘除原型链中的属性，并且我们按正确的顺序取得了它们的值。

### 删除

delete 运算符可以用来删除对象的属性。它将会移除对象中确定包含的属性。它不会触及原型链中的任何对象。

删除对象的属性可能会让来自原型链中的属性浮现出来

### 减少全局变量污染

最小化使用全局变量的一个方法是在你的应用中只创建唯一一个全局变量：
```js
var MYAPP = {}
```
也可以使用闭包