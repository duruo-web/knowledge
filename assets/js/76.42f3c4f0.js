(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{361:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"http报文内的http信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http报文内的http信息","aria-hidden":"true"}},[t._v("#")]),t._v(" http报文内的http信息")]),t._v(" "),e("p",[t._v("常用的内容编码有以下几种")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GNU zip")]),t._v("\n\ncompress "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# UNIX系统的标准压缩")]),t._v("\ndeflate "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# zlib")]),t._v("\nindentity "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不进行编码")]),t._v("\n")])])]),e("h2",{attrs:{id:"发送多种数据的多部分对象集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发送多种数据的多部分对象集合","aria-hidden":"true"}},[t._v("#")]),t._v(" 发送多种数据的多部分对象集合")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("multipart/form-data "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 Web 表单文件上传时使用")]),t._v("\n\nmultipart/byteranges "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 状态码 206 （Partial Content 部分内容），响应豹纹包含了多个范围的内容时使用")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行范围请求时，会用到首部字段 Range 来指定资源的 byte 范围")]),t._v("\nGet请求\nGET /tip.jpg HTTP/1.1\nHost: www.usagidesign.jp\nRange: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("bytes")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5001")]),t._v("-10000  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5001-10000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Range: bytes=5001-  # 5001字节之后全部")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Range: bytes=-3000, 5000-7000  # 从一开始到 3000 字节和5000-7000字节的多重范围")]),t._v("\n\nResponse\nHTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("206")]),t._v(" Partial Content\nDate: Sun, 08 Sep "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" 06:01:20 GMT\nContent-Range: bytes "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5001")]),t._v("-10000/10000 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 针对范围请求，响应会返回状态码206 Partial Content 的响应报文。对于多重范围的范围请求，响应会在首部字段 Content-Type 标明 multipart/byteranges 后返回响应报文")]),t._v("\nContent-Length: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\nContent-Type: image/jpeg\n")])])]),e("h2",{attrs:{id:"内容协商返回最合适的内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容协商返回最合适的内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容协商返回最合适的内容")]),t._v(" "),e("p",[t._v("比如中英文web版本切换")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("Accept\nAccept-Charset\nAccept-Encoding\nAccept-Language\nContent-Languge\n\n")])])]),e("p",[t._v("有三种类型：服务器驱动协商、客户端驱动协商，透明协商")])])}],!1,null,null,null);a.default=n.exports}}]);