(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-myStore-QRcode"],{3500:function(t,n,e){"use strict";e.r(n);var i=e("485d"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"485d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"扫一扫",shop_id:"",order_id:"",p_price:"",sNo:"",QR_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/store_input.png",QR_flag:!0}},onLoad:function(t){t.shop_id?this.shop_id=t.shop_id:this.shop_id=this.$store.state.shop_id},onShow:function(){},methods:{_navigateTo:function(t){uni.navigateTo({url:t})},QRcode:function(t){var n=this;if(this.QR_flag){this.QR_flag=!1;var e=this;uni.showLoading({title:this.language.QRcode.Tips[0]});var i={module:"app",action:"mch",m:"sweep_extraction_code",shop_id:e.shop_id,extraction_code:t.detail.result};this.$req.post({data:i}).then((function(t){uni.hideLoading(),200==t.code?(e.order_id=t.order_id,e.p_price=t.p_price,e.sNo=t.sNo,setTimeout((function(){uni.showToast({title:t.message,duration:1500,icon:"none"})}),100),setTimeout((function(){uni.redirectTo({url:"QRsuccess?p_price="+e.p_price+"&sNo="+e.sNo+"&order_id="+e.order_id})}),1e3)):(n.QR_flag=!0,setTimeout((function(){uni.showToast({title:t.message,duration:1500,icon:"none"})}),100))}))}},QRs:function(){uni.showToast({icon:"none",title:this.language.QRcode.Tips[1]})}}};n.default=i},"59ad":function(t,n,e){var i=e("6f46");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("757db255",i,!0,{sourceMap:!1,shadowMode:!1})},6517:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("lktauthorize",{ref:"lktAuthorizeComp"}),e("heads",{attrs:{title:t.language.QRcode.title}}),e("v-uni-button",{staticClass:"QRcode-x",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._navigateTo("../myStore/QRdraw")}}},[t._v(t._s(t.language.QRcode.input[0]))])],1)},a=[]},6619:function(t,n,e){"use strict";e.r(n);var i=e("6517"),o=e("3500");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("c814");var c,r=e("f0c5"),d=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"0a49cdc4",null,!1,i["a"],c);n["default"]=d.exports},"6f46":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".QR-bottom[data-v-0a49cdc4]{position:fixed;display:-webkit-box;display:-webkit-flex;display:flex;bottom:0;left:0;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?30?%;z-index:100;font-size:%?26?%;background-color:#ff612a;color:#fff;border:0!important}.QR-img[data-v-0a49cdc4]{width:%?75?%;height:%?46?%;margin-bottom:%?19?%}.QR-view[data-v-0a49cdc4]{font-size:%?26?%;color:#fff}.camera[data-v-0a49cdc4]{width:100%;height:100vh}.QRcode-s[data-v-0a49cdc4],\n.QRcode-x[data-v-0a49cdc4]{height:%?90?%;line-height:%?90?%;margin:%?30?%;font-size:%?30?%}.QRcode-s[data-v-0a49cdc4]{background-color:#ff612a;color:#fff;border:0!important}.QRcode-x[data-v-0a49cdc4]{border:1px solid #ff612a;color:#ff612a;background-color:#fff}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */",""]),t.exports=n},c814:function(t,n,e){"use strict";var i=e("59ad"),o=e.n(i);o.a}}]);