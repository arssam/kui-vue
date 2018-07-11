/*! kui-vue v1.8.7 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+lta":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Menu 导航菜单")]),e._v(" "),n("Alert",[e._v("注意：非 template/render 模式下，需使用 k-menu。")]),e._v(" "),n("h3",[e._v("代码示例")]),e._v(" "),n("Demo",{attrs:{title:"顶部导航",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Menu",{attrs:{mode:"horizontal",theme:e.theme,"active-name":"1"}},[n("MenuItem",{attrs:{name:"1",icon:"ios-paper"}},[e._v("我的产品")]),e._v(" "),n("SubMenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"android-walk"}}),e._v("商品管理\n          ")],1),e._v(" "),n("MenuItem",{attrs:{name:"1-1"}},[e._v("商品信息")]),e._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[e._v("商品列表")]),e._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[e._v("商品新增")]),e._v(" "),n("MenuItem",{attrs:{name:"1-4"}},[e._v("商品筛选")])],2),e._v(" "),n("SubMenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"android-walk"}}),e._v("用户管理\n          ")],1),e._v(" "),n("MenuGroup",{attrs:{title:"超级管理"}},[n("MenuItem",{attrs:{name:"2-1"}},[e._v("用户信息")]),e._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[e._v("用户列表")])],1),e._v(" "),n("MenuGroup",{attrs:{title:"普通管理"}},[n("MenuItem",{attrs:{name:"2-3"}},[e._v("用户新增")]),e._v(" "),n("MenuItem",{attrs:{name:"2-4"}},[e._v("用户筛选")])],1)],2),e._v(" "),n("MenuItem",{attrs:{name:"4",icon:"social-apple"}},[e._v("新闻管理")]),e._v(" "),n("MenuItem",{attrs:{name:"5",icon:"locked"}},[e._v("权限管理")])],1),e._v(" "),n("br"),e._v(" "),n("p",[e._v("切换主题")]),e._v(" "),n("br"),e._v(" "),n("RadioGroup",{model:{value:e.theme,callback:function(t){e.theme=t},expression:"theme"}},[n("Radio",{attrs:{label:"light"}}),e._v(" "),n("Radio",{attrs:{label:"dark"}}),e._v(" "),n("Radio",{attrs:{label:"primary"}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("水平导航菜单，"),n("br"),e._v("可通过\n      "),n("code",[e._v("theme")]),e._v("属性来设置菜单主题，水平导航提供3种， 垂直2种，"),n("br"),e._v(" 通过\n      "),n("code",[e._v("select")]),e._v("事件可以取得点击菜单的name。\n    ")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),n("Demo",{attrs:{title:"侧栏导航",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Row",[n("Col",{attrs:{span:"8"}},[n("Menu",{attrs:{theme:e.theme,"active-name":"1"}},[n("SubMenu",{attrs:{name:"0"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-paper"}}),e._v("我的产品\n            ")],1),e._v(" "),n("MenuItem",{attrs:{name:"0-1"}},[e._v("我的产品1")]),e._v(" "),n("MenuItem",{attrs:{name:"0-2"}},[e._v("我的产品2")]),e._v(" "),n("MenuItem",{attrs:{name:"0-3"}},[e._v("我的产品3")]),e._v(" "),n("MenuItem",{attrs:{name:"0-4"}},[e._v("我的产品4")])],2),e._v(" "),n("SubMenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"social-apple"}}),e._v("商品管理\n            ")],1),e._v(" "),n("MenuItem",{attrs:{name:"1-1"}},[e._v("商品信息")]),e._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[e._v("商品列表")]),e._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[e._v("商品新增")]),e._v(" "),n("MenuItem",{attrs:{name:"1-4"}},[e._v("商品筛选")])],2),e._v(" "),n("SubMenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"android-walk"}}),e._v("用户管理\n            ")],1),e._v(" "),n("MenuGroup",{attrs:{title:"超级管理"}},[n("MenuItem",{attrs:{name:"2-1"}},[e._v("用户信息")]),e._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[e._v("用户列表")])],1),e._v(" "),n("MenuGroup",{attrs:{title:"普通管理"}},[n("MenuItem",{attrs:{name:"2-3"}},[e._v("用户新增")]),e._v(" "),n("MenuItem",{attrs:{name:"2-4"}},[e._v("用户筛选")])],1)],2)],1)],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("Menu",{attrs:{theme:e.theme,"active-name":"1",accordion:""}},[n("SubMenu",{attrs:{name:"0"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-paper"}}),e._v("我的产品\n            ")],1),e._v(" "),n("MenuItem",{attrs:{name:"0-1"}},[e._v("我的产品1")]),e._v(" "),n("MenuItem",{attrs:{name:"0-2"}},[e._v("我的产品2")]),e._v(" "),n("MenuItem",{attrs:{name:"0-3"}},[e._v("我的产品3")]),e._v(" "),n("MenuItem",{attrs:{name:"0-4"}},[e._v("我的产品4")])],2),e._v(" "),n("SubMenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"social-apple"}}),e._v("商品管理\n            ")],1),e._v(" "),n("MenuItem",{attrs:{name:"1-1"}},[e._v("商品信息")]),e._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[e._v("商品列表")]),e._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[e._v("商品新增")]),e._v(" "),n("MenuItem",{attrs:{name:"1-4"}},[e._v("商品筛选")])],2),e._v(" "),n("SubMenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"android-walk"}}),e._v("用户管理\n            ")],1),e._v(" "),n("MenuGroup",{attrs:{title:"超级管理"}},[n("MenuItem",{attrs:{name:"2-1"}},[e._v("用户信息")]),e._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[e._v("用户列表")])],1),e._v(" "),n("MenuGroup",{attrs:{title:"普通管理"}},[n("MenuItem",{attrs:{name:"2-3"}},[e._v("用户新增")]),e._v(" "),n("MenuItem",{attrs:{name:"2-4"}},[e._v("用户筛选")])],1)],2)],1)],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("Menu",{attrs:{theme:e.theme}},[n("MenuGroup",{attrs:{title:"超级管理"}},[n("MenuItem",{attrs:{name:"2-1"}},[e._v("用户信息")]),e._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[e._v("用户列表")])],1),e._v(" "),n("MenuGroup",{attrs:{title:"普通管理"}},[n("MenuItem",{attrs:{name:"2-3"}},[e._v("用户新增")]),e._v(" "),n("MenuItem",{attrs:{name:"2-4"}},[e._v("用户筛选")])],1)],1)],1)],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n      通过设置\n      "),n("code",[e._v("mode")]),e._v("属性，切换菜单呈现。\n    ")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.theme))])]),e._v(" "),n("h3",[e._v("Menu API")]),e._v(" "),e._m(0),e._v(" "),n("h3",[e._v("MenuItem API")]),e._v(" "),e._m(1),e._v(" "),n("h3",[e._v("SubMenu API")]),e._v(" "),e._m(2),e._v(" "),n("h3",[e._v("MenuGroup API")]),e._v(" "),e._m(3)],1)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("mode")]),e._v(" "),n("td",[e._v("菜单类型，可选值为 horizontal（水平） 和 vertical（垂直）")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("vertical")])]),e._v(" "),n("tr",[n("td",[e._v("theme")]),e._v(" "),n("td",[e._v('主题，可选值为 light、dark、primary，其中 primary 只适用于 mode="horizontal"')]),e._v(" "),n("td",[e._v("String ")]),e._v(" "),n("td",[e._v("light")])]),e._v(" "),n("tr",[n("td",[e._v("activeName")]),e._v(" "),n("td",[e._v("激活菜单的 name 值")]),e._v(" "),n("td",[e._v("String | Number ")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("accordion")]),e._v(" "),n("td",[e._v("是否开启手风琴模式，开启后每次至多展开一个子菜单")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("width")]),e._v(" "),n("td",[e._v('导航菜单的宽度，只在 mode="vertical" 时有效, 自动宽度其值为 “auto”')]),e._v(" "),n("td",[e._v("String|Number")]),e._v(" "),n("td",[e._v("240")])]),e._v(" "),n("tr",[n("td",[e._v("select")]),e._v(" "),n("td",[e._v("选择菜单（MenuItem）时触发,返回name")]),e._v(" "),n("td",[e._v("Function")]),e._v(" "),n("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("name")]),e._v(" "),n("td",[e._v("菜单项的唯一标识，必填")]),e._v(" "),n("td",[e._v("String | Number")]),e._v(" "),n("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("name")]),e._v(" "),n("td",[e._v("菜单项的唯一标识，必填")]),e._v(" "),n("td",[e._v("String | Number")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("title")]),e._v(" "),n("td",[e._v("子菜单标题，其slot对应值")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("title")]),e._v(" "),n("td",[e._v("分组标题")]),e._v(" "),n("td",[e._v("String | Number")]),e._v(" "),n("td",[e._v("-")])])])])}];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},"2Bxx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(n("C8VU")),u=m(n("VyJO"));function m(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Demo:a.default},data:function(){return{theme:"light",code:u.default}}}},BybE:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),n("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[n("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),n("div",{staticClass:"k-demo-line"}),e._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"code",attrs:{lang:e.lang}},[e._t("code")],2)],1)],1)},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},C8VU:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,u=n("z7BB"),m=(a=u)&&a.__esModule?a:{default:a};t.default=m.default},KZe0:function(e,t,n){"use strict";n.r(t);var a=n("+lta"),u=n("Kmsf");for(var m in u)"default"!==m&&function(e){n.d(t,e,function(){return u[e]})}(m);var r=n("KHd+"),v=Object(r.a)(u.default,a.a,a.b,!1,null,null,null);t.default=v.exports},Kmsf:function(e,t,n){"use strict";n.r(t);var a=n("2Bxx"),u=n.n(a);for(var m in a)"default"!==m&&function(e){n.d(t,e,function(){return a[e]})}(m);t.default=u.a},VyJO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={base:'<Menu mode="horizontal" :theme=\'theme\' active-name="1">\n<MenuItem name="1" icon="ios-paper">我的产品</MenuItem>\n<SubMenu name="1">\n  <template slot="title">\n    <Icon type="android-walk" />商品管理\n  </template>\n  <MenuItem name="1-1" >商品信息</MenuItem>\n  <MenuItem name="1-2" >商品列表</MenuItem>\n  <MenuItem name="1-3" >商品新增</MenuItem>\n  <MenuItem name="1-4" >商品筛选</MenuItem>\n</SubMenu>\n<SubMenu name="2">\n  <template slot="title">\n    <Icon type="android-walk" />用户管理\n  </template>\n  <MenuGroup title="超级管理">\n    <MenuItem name="2-1" >用户信息</MenuItem>\n    <MenuItem name="2-2" >用户列表</MenuItem>\n  </MenuGroup>\n  <MenuGroup title="普通管理">\n    <MenuItem name="2-3" >用户新增</MenuItem>\n    <MenuItem name="2-4" >用户筛选</MenuItem>\n  </MenuGroup>\n</SubMenu>\n<MenuItem name="4" icon="social-apple">新闻管理</MenuItem>\n<MenuItem name="5" icon="locked">权限管理</MenuItem>\n</Menu>\n<p>切换主题</p>\n<RadioGroup v-model="theme">\n    <Radio label="light"></Radio>\n    <Radio label="dark"></Radio>\n    <Radio label="primary"></Radio>\n</RadioGroup>',theme:'<Row>\n<Col span="8">\n  <Menu :theme=\'theme\' active-name="1" >\n    <SubMenu name="0">\n      <template slot="title">\n        <Icon type="ios-paper" />我的产品\n      </template>\n      <MenuItem name="0-1" >我的产品1</MenuItem>\n      <MenuItem name="0-2" >我的产品2</MenuItem>\n      <MenuItem name="0-3" >我的产品3</MenuItem>\n      <MenuItem name="0-4" >我的产品4</MenuItem>\n    </SubMenu>\n    <SubMenu name="1">\n      <template slot="title">\n        <Icon type="social-apple" />商品管理\n      </template>\n      <MenuItem name="1-1" >商品信息</MenuItem>\n      <MenuItem name="1-2" >商品列表</MenuItem>\n      <MenuItem name="1-3" >商品新增</MenuItem>\n      <MenuItem name="1-4" >商品筛选</MenuItem>\n    </SubMenu>\n    \n    <SubMenu name="2">\n      <template slot="title">\n        <Icon type="android-walk" />用户管理\n      </template>\n      <MenuGroup title="超级管理">\n        <MenuItem name="2-1" >用户信息</MenuItem>\n        <MenuItem name="2-2" >用户列表</MenuItem>\n      </MenuGroup>\n      <MenuGroup title="普通管理">\n        <MenuItem name="2-3" >用户新增</MenuItem>\n        <MenuItem name="2-4" >用户筛选</MenuItem>\n      </MenuGroup>\n    </SubMenu>\n</Menu>\n</Col>\n<Col span="8">\n  <Menu :theme=\'theme\' active-name="1"  accordion>\n    <SubMenu name="0">\n      <template slot="title">\n        <Icon type="ios-paper" />我的产品\n      </template>\n      <MenuItem name="0-1" >我的产品1</MenuItem>\n      <MenuItem name="0-2" >我的产品2</MenuItem>\n      <MenuItem name="0-3" >我的产品3</MenuItem>\n      <MenuItem name="0-4" >我的产品4</MenuItem>\n    </SubMenu>\n    <SubMenu name="1">\n      <template slot="title">\n        <Icon type="social-apple" />商品管理\n      </template>\n      <MenuItem name="1-1" >商品信息</MenuItem>\n      <MenuItem name="1-2" >商品列表</MenuItem>\n      <MenuItem name="1-3" >商品新增</MenuItem>\n      <MenuItem name="1-4" >商品筛选</MenuItem>\n    </SubMenu>\n    \n    <SubMenu name="2">\n      <template slot="title">\n        <Icon type="android-walk" />用户管理\n      </template>\n      <MenuGroup title="超级管理">\n        <MenuItem name="2-1" >用户信息</MenuItem>\n        <MenuItem name="2-2" >用户列表</MenuItem>\n      </MenuGroup>\n      <MenuGroup title="普通管理">\n        <MenuItem name="2-3" >用户新增</MenuItem>\n        <MenuItem name="2-4" >用户筛选</MenuItem>\n      </MenuGroup>\n        </SubMenu>\n    </Menu>\n    </Col>\n    <Col span="8">\n    <Menu :theme=\'theme\'  >\n      <MenuGroup title="超级管理">\n            <MenuItem name="2-1" >用户信息</MenuItem>\n            <MenuItem name="2-2" >用户列表</MenuItem>\n      </MenuGroup>\n      <MenuGroup title="普通管理">\n            <MenuItem name="2-3" >用户新增</MenuItem>\n            <MenuItem name="2-4" >用户筛选</MenuItem>\n      </MenuGroup>\n    </Menu>\n    </Col>\n  </Row>'};t.default=a},sOOp:function(e,t,n){"use strict";n.r(t);var a=n("ujjj"),u=n.n(a);for(var m in a)"default"!==m&&function(e){n.d(t,e,function(){return a[e]})}(m);t.default=u.a},ujjj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=v(n("YEIV")),u=v(n("cF/K")),m=v(n("Ff65")),r=v(n("7+I9"));function v(e){return e&&e.__esModule?e:{default:e}}t.default={directives:{resize:r.default},components:{Code:u.default,Collapse:m.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,a.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},z7BB:function(e,t,n){"use strict";n.r(t);var a=n("BybE"),u=n("sOOp");for(var m in u)"default"!==m&&function(e){n.d(t,e,function(){return u[e]})}(m);var r=n("KHd+"),v=Object(r.a)(u.default,a.a,a.b,!1,null,null,null);t.default=v.exports}}]);