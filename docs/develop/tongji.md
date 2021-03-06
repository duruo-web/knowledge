## 如何在前端统计用户来源

### 通过给页面加自定义参数来标志
第一种方案，是通过给页面加自定义参数来标注用户的来源，我们暂且把这个来源叫做`from`。

例如，我们将这个地址www.baidu.com?from=weibo通过营销人员在微博中转发，然后我们网站通过解析参数from就能取到来源weibo。 
对于这里的 from 这个自定义的参数，谷歌有个标准。一般来说可以用`utm_source=weibo`这样来标记来源。其他的还有`utm_medium utm_campaign utm_content utm_term`等。

* utm_source，广告系列来源，使用 utm_source 来标识搜索引擎、简报名称或其他来源。例如：utm_source=google
* utm_medium，广告系列媒介，使用 utm_medium 来标识媒介，比如电子邮件或每次点击费用。例如：utm_medium=cpc
* utm_term，广告系列字词，用于付费搜索。使用 utm_term 来注明此广告的关键字。例如：utm_term=running+shoes
* utm_content，广告系列内容，用于 A/B 测试和按内容进行定位的广告。使用 utm_content 区分指向同一网址的广告或链接。例如：utm_content=logolink 或 utm_content=textlink
* utm_campaign，广告系列名称，用于关键字分析。使用 utm_campaign 来标识特定的产品促销活动或战略性广告系列。例如：utm_campaign=spring_sale

最为常见的是utm_source，utm中文意思是跟踪模块

### 通过referrer实现

第二种方案，是通过用户访问的referer来定义用户的来源，我们暂且把这个来源叫做referrer。

比如用户在 baidu 中搜 '知乎'，然后跳转到了 'https://www.zhihu.com/explore'。我们通过document.referrer能取到来源是"https://www.baidu.com/link?url=1E8yp3P4EqaSkNFWBcogiZ8Btd-2EKYPu38UVFsjENC5jgZQZne2iNHcfwnLQPrx&wd=&eqid=fccc49f000004d8c000000025e6894cb"。

由于referer的 URL 可能取值太多，那么更进一步，可以专门取一下 referer 的 host，用这个来做来源的标志。

### 两种来源的综合
如上面所描述的那样，我们会有两种来源方式，一个是我们做标记的来源 from，一个是固有的 referrer。我们既可以把这两个来源都统计，也可以先取自定义标签 from 再取 referrer（示例如下）。
```js
if(自定义from){  
  来源 ＝ 自定义from
}else{
  来源 = document.referrer
//因为referrer取的过长，可以只取host如`baidu.com`
  来源 = 只截取referrer的host
}
```
## 来源的3种定义
### 用户首次打开页面的时候的首次来源
在这里，我们把用户首次打开页面的时候的首次来源叫initial_referrer。 这里的 referrer 可以作为用户的固有属性，类似于姓名，也即是 Sensors Analytics 中的 profile 属性。


### 一个访问周期内的访问来源
一个访问周期，也即用户打开浏览器到关闭浏览器这个周期内的第一次来源，我们把他叫做session_referrer。

正常情况下，我们可以设置一个不加时间的 cookie 来标志这个网站的session周期。然而我在测试了一些浏览器后，发现并不理想。mac下safari和firefox，直接按关闭按钮关闭浏览器，cookie还是存在的，但是点浏览器退出后，cookie是会清除掉的。而在mac下的chrome浏览器，设置cookie后，关闭浏览器，重新打开还是会存在。所以通过这个方式并不靠谱。 
不过我们可以通过设置一个限时的cookie来实现，比如60分钟的session周期。这样所有浏览器都能实现。也就是用户打开页面，然后60分钟内的操作，这里的来源都认为是一个来源。60分钟后再打开页面，就认为是新的来源。
```js
//页面打开后
if(cookie中取到startFrom){  
  来源 = cookie中的来源
}else{
  来源 =  当前来源
  setCookie('startFrom', 当前来源, 60分钟)
}
```
### 每个页面的访问来源
这个就是通常意义上的referrer 了，在每个页面访问时，都取referrer。


> 参考 https://blog.csdn.net/sensorsdata/article/details/80758370



