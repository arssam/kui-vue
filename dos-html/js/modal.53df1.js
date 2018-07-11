/*! kui-vue v1.8.7 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"9aRh":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=s(e("ioUN")),d=s(e("C8VU"));function s(t){return t&&t.__esModule?t:{default:t}}o.default={components:{Demo:d.default},data:function(){return{color:"",icon:"success",d1:!1,d2:!1,d3:!1,d4:!1,d5:!1,d6:!1,code:n.default}},methods:{test:function(){alert("")},show:function(t){this.icon=t,this.d6=!this.d6,this.color="happy"==t?"orange":""}}}},B6OO:function(t,o,e){"use strict";e.r(o);var n=e("9aRh"),d=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(o,t,function(){return n[t]})}(s);o.default=d.a},BybE:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[e("div",{ref:"demo",staticClass:"k-demo-main"},[e("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),e("div",{staticClass:"k-desc"},[e("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),e("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[e("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),e("div",{staticClass:"k-demo-line"}),t._v(" "),e("Collapse",[e("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},d=[];e.d(o,"a",function(){return n}),e.d(o,"b",function(){return d})},C8VU:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n,d=e("z7BB"),s=(n=d)&&n.__esModule?n:{default:n};o.default=s.default},MZRN:function(t,o,e){"use strict";e.r(o);var n=e("vSQl"),d=e("B6OO");for(var s in d)"default"!==s&&function(t){e.d(o,t,function(){return d[t]})}(s);var c=e("KHd+"),v=Object(c.a)(d.default,n.a,n.b,!1,null,null,null);o.default=v.exports},ioUN:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={base:'<Modal v-model="d1"></Modal>',custom:'<Button @click="d2=!d2">自定义宽度</Button>\n<Button @click="d3=!d3">内容和页脚</Button>\n<Button @click="d4=!d4">按钮文字</Button>\n<Modal v-model="d2" width="300"></Modal>\n<Modal v-model="d3" title="我是自定义标题">\n   <p>我是自定义内容</p>\n   <div slot="footer">\n    <Button type="danger">自定义1</Button>\n    <Button type="success">自定义2</Button>\n   </div>\n</Modal>\n<Modal v-model="d4" width="300" cancelText="不要取消" okText="别点我"></Modal>',canMove:'<Modal v-model="d5" isMove>我可以拖动的</Modal>',mode:'<Button @click="show(\'success\')">Success</Button>\n<Button @click="show(\'error\')">Error</Button>\n<Button @click="show(\'warning\')">Warning</Button>\n<Button @click="show(\'info\')">Info</Button>\n<Button @click="show(\'happy\')">happy</Button>\n<Modal v-model="d6" type="toast" :icon="icon" :color="color">恭喜你中了5000万...</Modal>\n<script>\nexport default {\n  data() {\n    return {\n      color: "",\n      icon: "success",\n      d6: false,\n    }\n  },\n  methods: {\n    show(type) {\n      this.icon = type;\n      this.d6 = !this.d6;\n      this.color = type == "happy" ? "orange" : "";\n    }\n  }\n}\n<\/script>'};o.default=n},sOOp:function(t,o,e){"use strict";e.r(o);var n=e("ujjj"),d=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(o,t,function(){return n[t]})}(s);o.default=d.a},ujjj:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=v(e("YEIV")),d=v(e("cF/K")),s=v(e("Ff65")),c=v(e("7+I9"));function v(t){return t&&t.__esModule?t:{default:t}}o.default={directives:{resize:c.default},components:{Code:d.default,Collapse:s.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,n.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},vSQl:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("h2",[t._v("Modal 对话框")]),t._v(" "),e("h3"),t._v(" "),e("Demo",{attrs:{title:"基础"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{on:{click:function(o){t.d1=!t.d1}}},[t._v("普通对话框")]),t._v(" "),e("Modal",{model:{value:t.d1,callback:function(o){t.d1=o},expression:"d1"}})],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n      "),e("code",[t._v("v-model")]),t._v("双向绑定\n      "),e("code",[t._v("Modal")]),t._v("是否展示")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),e("Demo",{attrs:{title:"自定义"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{on:{click:function(o){t.d2=!t.d2}}},[t._v("自定义宽度")]),t._v(" "),e("Button",{on:{click:function(o){t.d3=!t.d3}}},[t._v("内容和页脚")]),t._v(" "),e("Button",{on:{click:function(o){t.d4=!t.d4}}},[t._v("按钮文字")]),t._v(" "),e("Modal",{attrs:{width:"300"},model:{value:t.d2,callback:function(o){t.d2=o},expression:"d2"}}),t._v(" "),e("Modal",{attrs:{title:"我是自定义标题"},model:{value:t.d3,callback:function(o){t.d3=o},expression:"d3"}},[e("p",[t._v("我是自定义内容")]),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"danger"}},[t._v("自定义1")]),t._v(" "),e("Button",{attrs:{type:"success"}},[t._v("自定义2")])],1)]),t._v(" "),e("Modal",{attrs:{width:"300",cancelText:"不要取消",okText:"别点我"},model:{value:t.d4,callback:function(o){t.d4=o},expression:"d4"}})],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n      "),e("code",[t._v("title")]),t._v("来设置标题，\n      "),e("code",[t._v("width")]),t._v("控制宽度， 还有\n      "),e("code",[t._v("slot")]),t._v("展示自定义内容\n    ")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.custom))])]),t._v(" "),e("Demo",{attrs:{title:"可拖动"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{on:{click:function(o){t.d5=!t.d5}}},[t._v("普通对话框")]),t._v(" "),e("Modal",{attrs:{isMove:""},model:{value:t.d5,callback:function(o){t.d5=o},expression:"d5"}},[t._v("我可以拖动的")])],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("有人想要拖动\n      "),e("code",[t._v("Modal")]),t._v("，真奇葩，\n      "),e("code",[t._v("isMove")]),t._v("就可以搞定的")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.canMove))])]),t._v(" "),e("Demo",{attrs:{title:"Toast"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{on:{click:function(o){t.show("success")}}},[t._v("Success")]),t._v(" "),e("Button",{on:{click:function(o){t.show("error")}}},[t._v("Error")]),t._v(" "),e("Button",{on:{click:function(o){t.show("warning")}}},[t._v("Warning")]),t._v(" "),e("Button",{on:{click:function(o){t.show("info")}}},[t._v("Info")]),t._v(" "),e("Button",{on:{click:function(o){t.show("happy")}}},[t._v("happy")]),t._v(" "),e("Modal",{attrs:{isMove:"",type:"toast",icon:t.icon,color:t.color},model:{value:t.d6,callback:function(o){t.d6=o},expression:"d6"}},[t._v("恭喜你中了5000万...")])],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("这个模式只是用来展示最后的结果，\n      "),e("code",[t._v("type=toast")]),t._v("就可以了")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.mode))])]),t._v(" "),e("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},d=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("对话框是否显示，可使用 v-model 双向绑定数据。")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("对话框标题")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("对话框宽度")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("520")])]),t._v(" "),e("tr",[e("td",[t._v("okText")]),t._v(" "),e("td",[t._v("确定按钮文字")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("确定")])]),t._v(" "),e("tr",[e("td",[t._v("cancelText")]),t._v(" "),e("td",[t._v("取消按钮文字")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("取消")])]),t._v(" "),e("tr",[e("td",[t._v("isMove")]),t._v(" "),e("td",[t._v("弹框是否可拖动，type 为modal可以用")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("弹框的模式，可选值为 modal，toast ")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("modal")])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",[t._v("弹框的图标，type为toast可用 ，默认可选值为success，warning,error,info,也可以自定义，参照\n          "),e("a",{attrs:{href:"#/icon"}},[t._v("Icon")]),t._v("值 ")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("success")])]),t._v(" "),e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("弹框的图标的颜色，type为toast可用 ")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("ok")]),t._v(" "),e("td",[t._v("点击确定的回调")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("cancel")]),t._v(" "),e("td",[t._v("点击取消的回调")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("close")]),t._v(" "),e("td",[t._v("窗口关闭的回调")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])])])])}];e.d(o,"a",function(){return n}),e.d(o,"b",function(){return d})},z7BB:function(t,o,e){"use strict";e.r(o);var n=e("BybE"),d=e("sOOp");for(var s in d)"default"!==s&&function(t){e.d(o,t,function(){return d[t]})}(s);var c=e("KHd+"),v=Object(c.a)(d.default,n.a,n.b,!1,null,null,null);o.default=v.exports}}]);