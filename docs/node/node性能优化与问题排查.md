
# 什么是alinode
Node.js 性能平台 ( Node.js Performance Platform，原 alinode ) 是面向所有 Node.js 应用提供 性能监控、安全提醒、故障排查、性能优化 等服务的整体性解决方案，尤其适用于中大型 Node.js 应用。

egg-alinode为egg用于支持alinode的插件

## Node 性能优化与问题排查
* 服务性能指标

### 吞吐量

* QPS (TPS)：每秒查询率QPS是对一个特定的查询服务器在规定时间内所处理流量多少的衡量标准，通常用来表达和衡量当前系统的负载

* 并发数：系统同时处理的request/事务数

* 响应时间：一般取平均响应时间

* 关系： QPS = 并发量 / 平均响应时间
  一个系统吞吐量通常由QPS（TPS）、并发数两个因素决定，每套系统这两个值都有一个相对极限值，在应用场景访问压力下，只要某一项达 到系统最高值，系统的吞吐量就上不去了，如果压力继续增大，系统的吞吐量反而会下降，原因是系统超负荷工作，上下文切换、内存等等其它消耗导致系统性能下 降!

如果想要提高系统吞吐量，就需要先进行性能测试，测出系统极限，然后再进行性能调优。

* 使用 [JMeter](https://jmeter.apache.org/download_jmeter.cgi) 进行性能测试 

下载jmeter，然后解压到任意目录，执行bin文件夹下的 jmeter.sh在出现的UI界面上进行对你的node 服务进行相应测试，具体如何测试可以Google。可以测出程序的吞吐量。

### 内存泄露
内存泄漏（Memory Leak）指由于疏忽或错误造成程序未能释放已经不再使用的内存的情况。

如果一个程序存在内存泄露，则随着时间的推移，内存占用越来越来，程序也就会越来越卡，导致系统性能下降，吞吐量下降，因此如果发现你的程序越来越慢，那可能存在内存泄露问题。

### 性能优化
heapdump或使用 v8-profiler

这两个工具的原理都是一致的：调用v8引擎暴露的接口：

`v8::Isolate::GetCurrent()->GetHeapProfiler()->TakeHeapSnapshot(title, control)`

然后将获取的c++对象数据转换为js对象。

这里推荐使用v8-profiler因为多一个cpu快照功能

[node-inspector/v8-profiler](https://github.com/node-inspector/v8-profiler)

* 快照
我们为程序添加一个进行快照的路由，在服务一开始运行的时候开始CPU分析并进行第一次堆快照，方便后面对比，服务端接受到这个Get请求时，进行停止分析，并进行堆快照和CPU快照，保存快照文件。
```js
const fs = require('fs');
const profiler = require('v8-profiler');

profiler.startProfiling();
const snapshot1 = profiler.takeSnapshot();

router.get('/profiler', async (ctx) => {
  const perf = profiler.stopProfiling();
  perf
    .export()
    .pipe(fs.createWriteStream('profiler.cpuprofile'))
    .on('finish', () => perf.delete());

  const snapshot2 = profiler.takeSnapshot();

  snapshot1.export((error, result) => {
    if (error) console.log(error);
    fs.writeFileSync('snapshot1.heapsnapshot', result);
    snapshot1.delete();
  });

  snapshot2
    .export()
    .pipe(fs.createWriteStream('snapshot2.heapsnapshot'))
    .on('finish', snapshot2.delete);
  ctx.body = {
    msg: 'success take profile',
  };
});

```
ok，然后使用Jmeter进行并发测试，在合适的时机请求服务profiler接口，得到3个文件.

snapshot1.heapsnapshot

snapshot2.heapsnapshot

profiler.cpuprofile

* 分析
分析方式可以使用chrome devtools进行分析，也可以使用alinode进行分析

使用chrome devtool 进行分析
image

点开Memory面板，左侧边栏右键load，选择刚才的2个heapsnapshot文件，

选择左上角的Comparsion 即对比2次内存使用情况，下面数据 + 即表示增项的内存，- 表示减少的。 image

这样就可以轻松的知道什么在增加，增加里多少。找出异常的点开进行分析。

CPU image

打开JavaScript Profiler 面板，同样load cpuprofile文件，面板会将最耗时的方法放在上面，剔除program和GC消耗，检查最耗时的function来优化。

2. 使用alinode进行分析（强烈推荐）
阿里云登录 - 欢迎登录阿里云，安全稳定的云计算服务平台

登陆alinode，创建新应用，创建好后，打开。

heapsnapshot分析
选择上传文件，选择 堆快照，上传刚才的heapsnapshot文件

image

完成后如下 image

点击分析，会显示出内存泄露可疑点。👍 image

点击Array关键字进去查看详细信息，发现内存占用比例87.35%，再点击具体信息就可以知道哪块内存泄露了。 image

CPU 消耗分析
选择上传文件，选择cpu profile，上传刚才的cpu快照。

image

点击分析 image

查看火焰图 image

点击分析（devtool），和chrome面板一样，不过会红色显示可能异常的function image

一个真实的案例
kepler 线上服务大量502，是AG访问kepler server得不到响应，kepler server 部署后，内存消耗严重，拖慢程序运行，导致大量链接响应超过10s。

通过alinode对测试服务器上服务进行监控，并取堆快照。发现node程序92%的内存都来源于一个Array数组，并指向配置文件 app.json，

image

image

查看相关代码，发现在代码如下

//
delete require.cache[require.resolve('../configuration/app.json')];  
const { duration } = require('../configuration/app.json');
app.json是可配置的，如果使用require会有缓存问题，因此使用了delete require.cache，结果引起了内存泄露。

查看网上相关 require.cache 文章发现此问题有人踩过，具体解释：

node 源码中关于module 的方法，

function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  if (parent && parent.children) {
    parent.children.push(this);
  }

  this.filename = null;
  this.loaded = false;
  this.children = [];
}
node 在 module.js 中自动为模块添加了引用

delete require.cache 仅仅清除掉了 Module._cache 对文件第一次 require 的实例的引用
此时父文件 require 实例的 children 数组中的缓存的引用依旧存在 下一次 再 require 此文件时，由于 Module._cache 中不存在，会再生成一次文件对应的 Module 实例，同时给其父文件实例的 children 数组再增加一个引用，这样就造成了泄漏。


> Node 性能优化与问题排查：https://topgrd.me/post/5/

> Node.js 性能平台文档：https://help.aliyun.com/product/60298.html?spm=5176.179584.935956.btn2.64bb5d0bJxau20

> Egg.js 框架集成阿里 Node.js 性能平台 alinode：https://www.jianshu.com/p/f39b55f8f164

