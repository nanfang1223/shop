(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-myStore-freight_sheng"],{"2f43":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".container[data-v-e6d0e88c]{min-height:100vh}.container .content[data-v-e6d0e88c]{padding-left:%?30?%;padding-bottom:%?100?%}.container .content .list[data-v-e6d0e88c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?80?%;border-bottom:1px solid #ededed;padding-right:%?30?%;font-size:%?28?%;color:#010101}.container .content .list uni-image[data-v-e6d0e88c]{width:%?29?%;height:%?20?%}.container_bottomBtn[data-v-e6d0e88c]{background-color:#ff612a;color:#fff;border:0!important;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:fixed;bottom:0;left:0;right:0;height:%?98?%;font-size:%?30?%}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */",""]),t.exports=e},"38a1":function(t,e,n){"use strict";var i=n("7d62"),a=n.n(i);a.a},"722d":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLoginStatus.apply(void 0,arguments)}}}),n("heads",{attrs:{title:t.language.freight_sheng.title}}),n("v-uni-view",{staticClass:"content"},[t.area_list.length>0?n("v-uni-view",{staticClass:"list",staticStyle:{color:"#656565"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickAll.apply(void 0,arguments)}}},[t._v(t._s(t.language.freight_sheng.checkAll)),t.checkAll?n("v-uni-image",{attrs:{src:t.chooseImg}}):t._e()],1):t._e(),t._l(t.area_list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"list",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickMe(e)}}},[t._v(t._s(e.G_CName)),e.status?n("v-uni-image",{attrs:{src:t.chooseImg}}):t._e()],1)}))],2),t.area_list.length>0?n("v-uni-view",{staticClass:"container_bottomBtn",staticStyle:{background:"#FF612A"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveOk.apply(void 0,arguments)}}},[t._v(t._s(t.language.freight_sheng.save))]):t._e()],1)},s=[]},"7d62":function(t,e,n){var i=n("2f43");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("588a25ae",i,!0,{sourceMap:!1,shadowMode:!1})},"884b":function(t,e,n){"use strict";n("4de4"),n("a15b"),n("45fc"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"选择省份",chooseImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/chooseMe.png",area_list:[],shop_id:"",freight_id:"",freight_data:{},sel_city:[]}},computed:{checkAll:function(){var t=this.area_list.some((function(t){return 0==t.status}));return!t},checkObj:function(){var t=[],e=[];return this.area_list.filter((function(n){n.status&&(t.push(n.G_CName),e.push(n.GroupID))})),{name:t.join(),id:e.join()}}},onLoad:function(t){if(t.freight_id&&(this.freight_id=t.freight_id),uni.getStorageSync("freight_data")){var e=uni.getStorageSync("freight_data"),n={},i=[];e.filter((function(t,e){n[e]={one:t.freight,name:t.freight_sheng.name},i.push(t.freight_sheng.id)})),this.freight_data=n,this.sel_city=i}},onShow:function(){this.shop_id=uni.getStorageSync("shop_id")?uni.getStorageSync("shop_id"):this.$store.state.shop_id,this.axios()},methods:{changeLoginStatus:function(){this.axios()},saveOk:function(){this.checkObj.id?(uni.setStorageSync("freight_sheng",this.checkObj),uni.navigateBack({delta:1})):uni.showToast({title:this.language.freight_sheng.chooseTips,icon:"none"})},clickAll:function(){var t=!this.checkAll;this.area_list.filter((function(e){e.status=t}))},clickMe:function(t){t.status=!t.status},toUrl:function(t){uni.navigateTo({url:t})},axios:function(){var t=this,e={module:"app",action:"mch",m:"get_sheng",shop_id:this.shop_id,data:JSON.stringify(this.freight_data),sel_city:JSON.stringify(this.sel_city)};this.$req.post({data:e}).then((function(e){var n=e.code,i=e.data,a=e.message;if(200==n){if(i&&i.length>0){var s=t.freight_id.split(",");i.filter((function(t){t.status=!1,s.filter((function(e){e==t.GroupID&&(t.status=!0)}))}))}t.area_list=i}else uni.showToast({title:a,icon:"none"})}))}}};e.default=i},bc9e:function(t,e,n){"use strict";n.r(e);var i=n("884b"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},cd52:function(t,e,n){"use strict";n.r(e);var i=n("722d"),a=n("bc9e");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("38a1");var o,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"e6d0e88c",null,!1,i["a"],o);e["default"]=r.exports}}]);