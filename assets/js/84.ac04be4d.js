(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{353:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"返回结果的-http-状态码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#返回结果的-http-状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 返回结果的 HTTP 状态码")]),t._v(" "),n("p",[t._v("状态码类别")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"right"}}),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("类别")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("原因短语")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("1XX")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Informational（信息性状态码）")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("接收的请求正在处理")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("2XX")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Success（成功状态码）")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("请求正常处理完毕")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("3XX")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Redirection（重定向状态码）")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("需要进行附加操作以完成请求")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("4XX")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Client Error（客户端错误状态码）")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("服务器无法处理请求")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("5XX")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Server Error（服务器错误状态码）")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("服务器处理请求出错")])])])]),t._v(" "),n("p",[t._v("最常用的14个状态码")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("2XX 成功 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求被正常处理了")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("  ok "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示从客户段发来的请求在服务器段被正常处理了")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("204")]),t._v(" No Content "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求处理成功，但没有资源可返回")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改状态码代表服务器接收但请求已成功处理，但在返回的响应报文中不含实体的主题部分。另外也不允许返回任何实体的主题。比如，当从浏览器发出请求处理后，返回204响应，那么浏览器显示的页面不发生更新。")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一般在只需要从客户端网服务器发送信息，而对客户端不需要发送新信息内容的情况下使用。")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("206")]),t._v(" Partial Content "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是对资源某部分的请求；该状态码表示客户端进行了范围请求，而服务器成功执行了这部分的GET 请求。响应报文中包含由 Content-Range 指定范围的实体内容。")]),t._v("\n  \n3XX 重定向 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表明浏览器需要执行某些特殊的处理以正确处理请求")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" Moved Permanently "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 永久重定向；该状态码表示请求的资源已被分配了新的URI，以后应使用资源现在所指的URI.也就是说，如果已经把资源对应的URI 保存为书签了，这是应该按 Location 首部字段提示的 URI 重新保存。")]),t._v("\n  \n  http://www.baidu.com "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当指定资源路径的最后忘记添加斜杠'/'，就会产生 301 状态码")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),t._v(" Found "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 临时重定向")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("303")]),t._v(" See Other "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该状态码表示由于请求对应的资源存在着另一个URL，应使用 GET 方法定向获取请求的资源")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当 301，302，303 响应状态码返回时，几乎所有浏览器都会把POST改成GET ,并删除请求报文内的主题，之后请求会自动再次发送。* 301，302标准是禁止将 POST 方法改变成 GET 方法的，但实际上使用时，大家都会这么做")]),t._v("\n                \n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("304")]),t._v(" Not Modified "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 附带条件的请求，返回资源已找到，但未符合条件请求 和重定向没有关系；")]),t._v("\n                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 附带条件的请求指 采用GET 方法的请求报文中包含 If-Match，If-Modified-Since，If-None-Match，If-Range, If-Unmodified-Since 中任一首部")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("307")]),t._v(" Temporary Redirect "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 临时重定向，和302有相同的含义，但是307遵守不会把 POST 变成 GET，对于响应，每种浏览器有可能出现不同的情况")]),t._v("\n  \n4XX 客户端错误 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 客户端是发生错误的原因所在")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v(" Bad Request "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该状态码表示请求报文中存在语法错误。当错误发生时，需修改请求的内容后再次发送请求。另外，浏览器会像200 OK 一样对待该状态码")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),t._v(" Unauthorized "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该状态码表示发送的请求需要有通过 HTTP 认证（BASIC认证，DIGEST 认证）的认证信息。另外若之前已进行过一次请求，则表示用户认证失败。")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回含有 401的响应必须包含一个适用于被请求资源的 WWW-Authenticate 首部用以质询（challenge）用户信息。当浏览器初次接收到 401响应，会弹出认证用的对话窗口。")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),t._v(" Forbidden "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该状态码表明对请求资源的访问被服务器拒绝了。服务器端没有必要给出拒绝的详细理由，但如果想作说明的话，可以在实体的主题部分对原因进行描述，这样就能让用户看到了。")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 未获得文件系统的访问授权，访问权限出现某些问题（从未授权的发送源 IP地址试图访问）等列举的情况都可能是发生403的原因。")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(" Not Found "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该状态码表明服务器上无法找到请求的资源。除此之外，也可以在服务器端拒绝请求且不想说明理由时使用。")]),t._v("\n5XX 服务器错误 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表明服务器本身发生错误。")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" Internal Server Error "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该状态码表示服务器在执行请求时发生了错误。也有可能是 Web应用存在的bug 或某些临时的故障。")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" Service Unavailable "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该状态码表明服务器暂时处于超负荷或者正在进行停机维护，现在无法处理请求。如果事先得知解除以上状况需要的时间，最好写入 RetryAfter 首部字段再返回给客户端")]),t._v("\n  \n")])])])])}],!1,null,null,null);e.default=s.exports}}]);