(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-distribution-distribution_flow"],{"0296":function(t,e,i){"use strict";i.r(e);var a=i("09e9"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"0825":function(t,e,i){"use strict";i.r(e);var a=i("e77c"),n=i("0296");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("247d");var s,d=i("f0c5"),r=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"22f4b29e",null,!1,a["a"],s);e["default"]=r.exports},"09e9":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530"));i("96cf");var o=a(i("1da1")),s=i("2f62"),d={data:function(){return{fastTap:!0,head:!0,order:"",bindding_id:"",load:!0,hasFlag:"",total:0,page:0,loadingType:0,emptyImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/fx_nodata1.png",loadImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/5-121204193R7.gif",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},onReachBottom:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var i,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t,0==t.loadingType){e.next=3;break}return e.abrupt("return");case 3:if(t.loadingType=1,{module:"app",action:"commcenter",app:"comm_list",page:t.page},!(t.order.length>0)){e.next=12;break}return e.next=8,t.$req.post({data:n});case 8:a=e.sent,n=a.list,t.page+=1,200==a.code?(i.order=i.order.concat(n),i.loadingType=0):i.loadingType=2;case 12:case"end":return e.stop()}}),e)})))()},onLoad:function(){var t=this;this.isLogin((function(){})),t.bindding_id=t.$store.state.bindding_num},onShow:function(){this.bindding_id=this.$store.state.bindding_num,this._axios()},methods:(0,n.default)((0,n.default)({},(0,s.mapMutations)({})),{},{changeLoginStatus:function(){this._axios()},_axios:function(){var t=this,e={module:"app",action:"commcenter",app:"comm_list",page:this.page};this.$req.post({data:e}).then((function(e){t.load=!1,103==e.code?t.page>0?t.hasFlag=!0:t.hasFlag=!1:200==e.code&&(t.hasFlag=!0,t.order=e.list,t.total=e.total,t.page=1)}))}})};e.default=d},"247d":function(t,e,i){"use strict";var a=i("24cb"),n=i.n(a);n.a},"24cb":function(t,e,i){var a=i("d6f7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("52c08a40",a,!0,{sourceMap:!1,shadowMode:!1})},d6f7:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.head[data-v-22f4b29e],\n.order_header[data-v-22f4b29e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.head[data-v-22f4b29e]{height:%?88?%;padding:0 %?30?%;border-bottom:1px solid #eee;font-size:%?40?%;color:#242424}.head_img[data-v-22f4b29e]{width:%?24?%;height:%?36?%}.head_search[data-v-22f4b29e]{width:%?40?%;height:%?40?%;visibility:hidden}.order_header[data-v-22f4b29e]{-webkit-justify-content:space-around;justify-content:space-around;width:100%;border-bottom:1px solid #d2d2d2}.header_li[data-v-22f4b29e]{width:25%;text-align:center;height:%?84?%;line-height:%?84?%;border-bottom:1px solid #eee;font-size:%?30?%;color:#9d9d9d}.header_border[data-v-22f4b29e]{color:#020202;font-weight:700;position:relative}.header_border[data-v-22f4b29e]:after{border-bottom:%?5?% solid #020202;position:absolute;bottom:0;width:50%;content:"";left:25%}.last_right > div[data-v-22f4b29e]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.position_head[data-v-22f4b29e]{position:fixed;left:0;top:0;width:100%;background-color:#fff;z-index:35}.c_top[data-v-22f4b29e]{padding:%?15?% %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?26?%;font-family:PingFang-SC-Medium;font-weight:500;color:#242424;background:#f6f6f6}.c_b_item[data-v-22f4b29e]{padding:%?33?% %?29?% %?29?% %?29?%;border-bottom:%?2?% solid #f6f6f6}.item_flex[data-v-22f4b29e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?6?%}.sty1[data-v-22f4b29e],\n.sty2[data-v-22f4b29e]{font-size:%?28?%;color:#020202}.sty3[data-v-22f4b29e],\n.sty4[data-v-22f4b29e]{font-size:%?22?%;color:#999}\n/* 优化 */.yh-halfWidth[data-v-22f4b29e]{height:%?178?%;position:fixed;background:#fff;z-index:999}.yh-yjmx[data-v-22f4b29e]{font-size:%?32?%}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=e},e77c:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLoginStatus.apply(void 0,arguments)}}}),i("heads",{attrs:{title:t.language.distribution_flow.title}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"c_top"},[i("v-uni-view",{},[t._v(t._s(t.language.distribution_flow.total))]),i("v-uni-view",{},[t._v("+"+t._s(t.total||0)+" "+t._s(t.language.distribution_flow.yuan))])],1),i("v-uni-view",{staticClass:"c_bottom"},[t._l(t.order,(function(e,a){return i("v-uni-view",{staticClass:"c_b_item"},[i("v-uni-view",{staticClass:"item_flex"},[i("v-uni-view",{staticClass:"sty1"},[t._v(t._s(e.from_user))]),i("v-uni-view",{staticClass:"sty2"},[t._v("+"+t._s(e.money))])],1),i("v-uni-view",{staticClass:"item_flex"},[i("v-uni-view",{staticClass:"sty3"},[t._v(t._s(e.add_date))]),i("v-uni-view",{staticClass:"sty4"},[t._v(t._s(t.language.distribution_flow.status)+" "+t._s(e.status))])],1)],1)})),t.order.length>10?i("uni-load-more",{attrs:{loadingType:t.loadingType}}):t._e()],2),t.hasFlag||t.load?t._e():i("div",{staticClass:"empty_play"},[i("img",{attrs:{src:t.emptyImg}}),i("p",[t._v(t._s(t.language.distribution_flow.noFlow))])])],1)],1)},o=[]}}]);