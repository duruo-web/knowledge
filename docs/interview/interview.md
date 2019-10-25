# 阿里巴巴面试题分享（修改中）

## 使用css3实现一个持续的动画效果

```css
#test {
  position: relative;
  animation:mymove 5s infinite;
}

@keyframes mymove {
    from {top:0px;}
    to {top:200px;}
}
```
* 主要考：animation 用法
[详情](../css/animation.md)

## 使用js实现一个持续的动画效果
最开始的思路是用定时器实现，最后没有想的太完整，面试官给出的答案是用requestAnimationFrame。

定时器思路
```js
var e = document.getElementById('test');
 left == 0 ? flag = true : left == 100 ? flag = false : ''
	if (flag) {
	e.style.left = ` ${left++}px`
	} else {
		left=0
		e.style.left = 0
	}
```

## 右边宽度固定，左边自适应

第一种：使用flex
```html
<style>
body{
    display: flex;
}
.left{
    background-color: rebeccapurple;
    height: 200px;
    flex: 1;
}
.right{
    background-color: red;
    height: 200px;
    width: 100px;
}
</style>
<body>
    <div class="left"></div>
    <div class="right"></div>
</body>
```
第二种 使用浮动
```html
<style>
    div {
        height: 200px;
    }
    .left {
        float: right;
        width: 200px;
        background-color: rebeccapurple;
    }
    .right {
        margin-right: 200px;
        background-color: red;
    }
</style>
<body>
    <div class="left"></div>
    <div class="right"></div>
</body>
```
第三种 使用定位
```html
<style>
   .container {
         position: relative;
       }
       .left {
             height: 200px;
             padding-right: 200px;
             /*margin-right: 200px;*/
             background-color: rebeccapurple;
           }
           .right {
             position: absolute;
             width: 200px;
             height: 200px;
             right: 0;
             top: 0;
             background-color: #eee;

           }
</style>
<body>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
    </div>
</body>
```

## 水平垂直居中
第一种
```css
#container{
    position:relative;
}

#center{
    width:100px;
    height:100px;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
```
第二种
```css
#container{
    position:relative;
}

#center{
    width:100px;
    height:100px;
    position:absolute;
    top:50%;
    left:50%;
    margin:-50px 0 0 -50px;
}
```
第三种
```css
#container{
    position:relative;
}

#center{
    position:absolute;
    margin:auto;
    top:0;
    bottom:0;
    left:0;
    right:0;
}
```
第四种 flex
```css
#container{
    display:flex;
    justify-content:center;
    align-items: center;
}
```
## 四种定位的区别
static 是默认值
relative 相对定位 相对于自身原有位置进行偏移，仍处于标准文档流中
absolute 绝对定位 相对于最近的已定位的祖先元素, 有已定位(指position不是static的元素)祖先元素, 以最近的祖先元素为参考标准。如果无已定位祖先元素, 以body元素为偏移参照基准, 完全脱离了标准文档流。
fixed 固定定位的元素会相对于视窗来定位,这意味着即便页面滚动，它还是会停留在相同的位置。一个固定定位元素不会保留它原本在页面应有的空隙。

## 移动端适配是使用媒体查询做的响应式布局，根据不同屏幕宽度加载不同css.

## let与var的区别？
let 为 ES6 新添加申明变量的命令，它类似于 var，但是有以下不同：

var 声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象
let 声明的变量，其作用域为该语句所在的代码块内，不存在变量提升
let 不允许重复声明.
为什么 var 可以重复声明？（这个就不知道了）
当我们执行代码时，我们可以简单的理解为新变量分配一块儿内存，命名为a，并赋值为2，但在运行的时候编译器与引擎还会进行两项额外的操作：判断变量是否已经声明：

首先编译器对代码进行分析拆解，从左至右遇见var a，则编译器会询问作用域是否已经存在叫 a 的变量了，如果不存在，则招呼作用域声明一个新的变量a，若已经存在，则忽略var 继续向下编译，这时a = 2被编译成可执行的代码供引擎使用。
引擎遇见a=2时同样会询问在当前的作用域下是否有变量a，若存在，则将a赋值为2（由于第一步编译器忽略了重复声明的var，且作用域中已经有a，所以重复声明会发生值得覆盖而并不会报错）。若不存在，则顺着作用域链向上查找，若最终找到了变量a则将其赋值2，若没有找到，则招呼作用域声明一个变量a并赋值为2。
[参考链接](https://www.cnblogs.com/neil080320/p/6529679.html)

## 封装一个函数，参数是定时器的时间，.then执行回调函数。
```js
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
```

## 一个关于 this 指向的问题
```js
obj = {
    name: 'a',
    getName : function () {
        console.log(this.name);
    }
}

var fn = obj.getName
obj.getName() //a
var fn2 = obj.getName() //a
fn() //
fn2() // typeError

```

## CommonJS 中的 require/exports 和 ES6 中的 import/export 区别？

CommonJS 模块的重要特性是加载时执行，即脚本代码在 require 的时候，就会全部执行。一旦出现某个模块被”循环加载”，就只输出已经执行的部分，还未执行的部分不会输出。
ES6 模块是动态引用，如果使用 import 从一个模块加载变量，那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
import/export 最终都是编译为 require/exports 来执行的。
CommonJS 规范规定，每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports ）是对外的接口。加载某个模块，其实是加载该模块的 module.exports 属性。
export 命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

* module.exports 可以对外提供单个变量、函数或者对象。如果创建了exports 和module.exports ,exports 会被忽略
如果想继续用，则需要 module.exports = exports = test

exports.test 只是 modules.exports.test的简写


## 一行代码实现数组去重？
1. [...new Set([1,2,3,1,'a',1,'a'])]

```js
var array = [1, '1', 1, 2, 3, 2, 4, 5, 1];
var tmpObj = {};
var result = [];
array.forEach(function(a) {
  var key = (typeof a) + a;
  if (!tmpObj[key]) {
    tmpObj[key] = true;
    result.push(a);
  }
});
console.log(result); // [1, "1", 2, 3, 4, 5]
```

2. 使用addEventListener点击li弹出内容，并且动态添加li之后有效
```html
<button onclick="addFunction()">点我增加</button>
<ul id="ul">
</ul>
```
```js
var num = 1;
  var ul = document.getElementById('ul');
  function addFunction() {
    var li = document.createElement('li');
    var nodeText = document.createTextNode(num);
    li.appendChild(nodeText);
    ul.appendChild(li);
    num++;
  }
  ul.addEventListener('click', function (event) {
    var event = event || window.event;
    if (event.target && event.target.nodeName.toUpperCase() === 'LI') {
      console.log(event.target.innerHTML)
    }
  })
```

## 怎么判断两个对象相等？
```js
obj={
    a:1,
    b:2
}

obj2={
    a:1,
    b:2
}

obj3={
    a:1,
    b:'2'
}
```

```js
JSON.stringify(obj)==JSON.stringify(obj2);//true
JSON.stringify(obj)==JSON.stringify(obj3);//false
```

## 项目做过哪些性能优化？
```
减少 HTTP 请求数
减少 DNS 查询
使用 CDN
避免重定向
图片懒加载
减少 DOM 元素数量
减少 DOM 操作
使用外部 JavaScript 和 CSS
压缩 JavaScript 、 CSS 、字体、图片等
优化 CSS Sprite
使用 iconfont
字体裁剪
多域名分发划分内容到不同域名
尽量减少 iframe 使用
避免图片 src 为空
把样式表放在 中
把脚本放在页面底部
```
## 模块化开发是怎么做的？
使用命名空间。

## 有没有使用过webpack？
我说Vue项目中使用了，然后就没问了。

## gulp自己写过任务吗？还是都用的模块？
不知道怎么怎么回答，不都是使用模块来写的么，然后就说是使用模块。

## Vue router 除了 router-link 怎么实现跳转?
```js
router.go(1)
router.push('/')
```
## Vue router 跳转和 location.href 有什么区别？
router 是 hash 改变

location.href 是页面跳转，刷新页面

## Vue 双向绑定实现原理？
通过 Object.defineProperty 实现的

你能实现一下双向绑定吗？😰😰
```html
<body>
    <div id="app">
        <input type="text" id="txt">
        <p id="show-txt"></p>
    </div>
    <script>
        var obj = {}
        Object.defineProperty(obj, 'txt', {
            get: function () {
                return obj
            },
            set: function (newValue) {
                document.getElementById('txt').value = newValue
                document.getElementById('show-txt').innerHTML = newValue
            }
        })
        document.addEventListener('keyup', function (e) {
            obj.txt = e.target.value
        })
    </script>
</body>
```
## React 和 Vue 有什么区别？
Set 和 Map 数据结构（😨😨）

ES6 提供了新的数据结构 Set 它类似于数组，但是成员的值都是唯一的，没有重复的值。

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
WeakMap 和 Map 的区别?

WeakMap 结构与 Map 结构基本类似，唯一的区别是它只接受对象作为键名（ null 除外），不接受其他类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制。

WeakMap 最大的好处是可以避免内存泄漏。一个仅被 WeakMap 作为 key 而引用的对象，会被垃圾回收器回收掉。

WeakMap 拥有和 Map 类似的 set(key, value) 、get(key)、has(key)、delete(key) ~~ 和 clear() ~~方法, 没有任何与迭代有关的属性和方法。

clear 已经废弃了.

## 重排和重绘
部分渲染树（或者整个渲染树）需要重新分析并且节点尺寸需要重新计算。这被称为重排。注意这里至少会有一次重排-初始化页面布局。

由于节点的几何属性发生改变或者由于样式发生改变，例如改变元素背景色时，屏幕上的部分内容需要更新。这样的更新被称为重绘。

## 什么情况会触发重排和重绘？
添加、删除、更新 DOM 节点

通过 display: none 隐藏一个 DOM 节点-触发重排和重绘

通过 visibility: hidden 隐藏一个 DOM 节点-只触发重绘，因为没有几何变化

移动或者给页面中的 DOM 节点添加动画

添加一个样式表，调整样式属性

用户行为，例如调整窗口大小，改变字号，或者滚动。

## 浏览器缓存

浏览器缓存分为强缓存和协商缓存。当客户端请求某个资源时，获取缓存的流程如下：

先根据这个资源的一些 http header 判断它是否命中强缓存，如果命中，则直接从本地获取缓存资源，不会发请求到服务器；

当强缓存没有命中时，客户端会发送请求到服务器，服务器通过另一些request header验证这个资源是否命中协商缓存，称为http再验证，如果命中，服务器将请求返回，但不返回资源，而是告诉客户端直接从缓存中获取，客户端收到返回后就会从缓存中获取资源；

强缓存和协商缓存共同之处在于，如果命中缓存，服务器都不会返回资源；

区别是，强缓存不对发送请求到服务器，但协商缓存会。

当协商缓存也没命中时，服务器就会将资源发送回客户端。

当 ctrl+f5 强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存；

当 f5 刷新网页时，跳过强缓存，但是会检查协商缓存；

强缓存

Expires（该字段是 http1.0 时的规范，值为一个绝对时间的 GMT 格式的时间字符串，代表缓存资源的过期时间）

Cache-Control:max-age（该字段是 http1.1 的规范，强缓存利用其 max-age 值来判断缓存资源的最大生命周期，它的值单位为秒）

协商缓存

Last-Modified（值为资源最后更新时间，随服务器response返回）

If-Modified-Since（通过比较两个时间来判断资源在两次请求期间是否有过修改，如果没有修改，则命中协商缓存）

ETag（表示资源内容的唯一标识，随服务器response返回）

If-None-Match（服务器通过比较请求头部的If-None-Match与当前资源的ETag是否一致来判断资源是否在两次请求之间有过修改，如果没有修改，则命中协商缓存）



> 参考[面试分享：2018阿里巴巴前端面试总结](https://blog.ihoey.com/posts/Interview/2018-02-28-alibaba-interview.html)
