/*! kui-vue v1.8.7 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"0QlV":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=c(n("U3Le")),o=c(n("C8VU")),i=c(n("cF/K"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:o.default,Code:i.default},data:function(){return{code:s.default}},methods:{info:function(){this.$Message.info("普通提示")},warning:function(){this.$Message.warning("警告提示")},success:function(){this.$Message.success("成功提示")},error:function(){this.$Message.error("错误提示")},config:function(){this.$Message.success("10秒后关闭的",10)},config2:function(){this.$Message.config({type:"info",duration:5,content:"5秒后关闭的"})},config3:function(){this.$Message.config({type:"info",duration:0,closable:!0,content:"手动关闭",onClose:function(){alert("callback")}})}}}},"0f2/":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Message 全局提示")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Button",{attrs:{type:"primary"},on:{click:t.info}},[t._v("普通提示 ")])],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("code",[t._v("Message")]),t._v("的基本用法")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),n("Demo",{attrs:{title:"提示类型"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Button",{attrs:{type:"warning"},on:{click:t.warning}},[t._v("警告提示 ")]),t._v(" "),n("Button",{attrs:{type:"success"},on:{click:t.success}},[t._v("成功提示 ")]),t._v(" "),n("Button",{attrs:{type:"danger"},on:{click:t.error}},[t._v("错误提示 ")])],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n      "),n("code",[t._v("type")]),t._v("来设置提示类型")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.type))])]),t._v(" "),n("Demo",{attrs:{title:"自定义时长"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Button",{attrs:{type:"success"},on:{click:t.config}},[t._v("10秒后关闭")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:t.config2}},[t._v("5秒后关闭")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:t.config3}},[t._v("手动关闭")])],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("可以自定义配置，其中\n      "),n("code",[t._v("duration")]),t._v("来控制自动关闭时长")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.time))])]),t._v(" "),n("h3",[t._v("API")]),t._v(" "),n("Alert",[t._v("组件提供了一些静态方法，使用方式如下")]),t._v(" "),n("Code",{attrs:{lang:"js"}},[t._v(t._s(t.code.static))]),t._v(" "),n("Alert",[t._v("另外提供了全局配置和全局销毁的方法：")]),t._v(" "),n("Code",{attrs:{lang:"js"}},[t._v(t._s(t.code.destory))]),t._v(" "),n("p",[t._v("参数 options 为对象，具体说明如下：")]),t._v(" "),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("提示类型，提供 info、success、error、warning四种可选类型")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("info")])]),t._v(" "),n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("提示内容")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("duration")]),t._v(" "),n("td",[t._v("自动关闭的延时，单位秒，0为 不自动关闭")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("3")])]),t._v(" "),n("tr",[n("td",[t._v("closable")]),t._v(" "),n("td",[t._v("是否可手动关闭")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("onClose")]),t._v(" "),n("td",[t._v("关闭时的回调")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])])])])}];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o})},BybE:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[n("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},o=[];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o})},C8VU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,o=n("z7BB"),i=(s=o)&&s.__esModule?s:{default:s};e.default=i.default},U3Le:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={base:'<Button @click="info" type="primary">普通提示 </Button>\n<script>\ninfo() {\n  this.$Message.info("普通提示");\n}\n<\/script>',type:'<Button @click="warning" type="warning">警告提示 </Button>\n<Button @click="success" type="success">成功提示 </Button>\n<Button @click="error" type="danger">错误提示 </Button>\n<script>\nwarning() {\n  this.$Message.warning("警告提示");\n  },\nsuccess() {\n  this.$Message.success("成功提示");\n},\nerror() {\n  this.$Message.error("错误提示");\n}\n<\/script>',time:'<Button @click="config" type="success">10秒后关闭</Button>\n<Button @click="config2" type="primary">5秒后关闭</Button>\n<Button @click="config3" type="primary">手动关闭</Button>\n<script>\nconfig() {\n  this.$Message.success("10秒后关闭的", 10);\n},\nconfig2() {\n  this.$Message.config({\n    type: "info",\n    duration: 5,\n    content: "5秒后关闭的"\n  });\n},\nconfig3() {\n  this.$Message.config({\n    type: "info",\n    duration: 5,\n    closable: true,\n    content: "手动关闭"\n  });\n}\n<\/script>',static:"this.$Message.info(content, [duration], onClose)\nthis.$Message.success(content, [duration], onClose)\nthis.$Message.warning(content, [duration], onClose)\nthis.$Message.error(content, [duration], onClose)",destory:"this.$Message.config(options)\nthis.$Message.destroy()"};e.default=s},gN76:function(t,e,n){"use strict";n.r(e);var s=n("0f2/"),o=n("vtkN");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var c=n("KHd+"),r=Object(c.a)(o.default,s.a,s.b,!1,null,null,null);e.default=r.exports},sOOp:function(t,e,n){"use strict";n.r(e);var s=n("ujjj"),o=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e.default=o.a},ujjj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(n("YEIV")),o=r(n("cF/K")),i=r(n("Ff65")),c=r(n("7+I9"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:c.default},components:{Code:o.default,Collapse:i.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,s.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},vtkN:function(t,e,n){"use strict";n.r(e);var s=n("0QlV"),o=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e.default=o.a},z7BB:function(t,e,n){"use strict";n.r(e);var s=n("BybE"),o=n("sOOp");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var c=n("KHd+"),r=Object(c.a)(o.default,s.a,s.b,!1,null,null,null);e.default=r.exports}}]);