(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-shop-coupon"],{"06c5":function(t,o,i){"use strict";i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=a;var n=e(i("6b75"));function e(t){return t&&t.__esModule?t:{default:t}}function a(t,o){if(t){if("string"===typeof t)return(0,n.default)(t,o);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?(0,n.default)(t,o):void 0}}},2909:function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=u;var n=c(i("6005")),e=c(i("db90")),a=c(i("06c5")),s=c(i("3427"));function c(t){return t&&t.__esModule?t:{default:t}}function u(t){return(0,n.default)(t)||(0,e.default)(t)||(0,a.default)(t)||(0,s.default)()}},3427:function(t,o,i){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(o,"__esModule",{value:!0}),o.default=n},"490a":function(t,o,i){"use strict";i.r(o);var n=i("b4c7"),e=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(o,t,(function(){return n[t]}))}(a);o["default"]=e.a},"52d1":function(t,o,i){"use strict";var n;i.d(o,"b",(function(){return e})),i.d(o,"c",(function(){return a})),i.d(o,"a",(function(){return n}));var e=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"container"},[i("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(o){arguments[0]=o=t.$handleEvent(o),t.changeLoginStatus.apply(void 0,arguments)}}}),i("heads",{attrs:{title:t.language.shop.coupon.title}}),i("div",{staticClass:"tabBox"},[i("div",[i("div",{class:{active:1==t.type},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.changeTab(1)}}},[t._v(t._s(t.language.shop.coupon.coupon[0]))]),i("div",{class:{active:2==t.type},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.changeTab(2)}}},[t._v(t._s(t.language.shop.coupon.coupon[1]))])])]),t.loopStatu?i("div",{staticClass:"mycoupon_bottom",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t._mycoupon()}}},[i("span",[t._v(t._s(t.language.shop.coupon.coupon[2]))])]):t._e(),t.load?t._e():i("div",{staticClass:"skeleton"},[i("ul",{staticClass:"coupon_ul"},t._l(3,(function(t){return i("li",{key:t,staticClass:"coupon_li"},[i("img",{staticClass:"bg_img skeleton-rect",attrs:{src:"",alt:""}})])})),0)]),t.list?i("div",[i("ul",{staticClass:"coupon_ul"},[t._l(t.list,(function(o,n){return i("li",{key:n,staticClass:"coupon_li",class:{active_background:t.isNone[n]}},[i("img",{staticClass:"bg_img",attrs:{src:t.isNone[n]?t.coupon_bg1:t.coupon_bg}}),""==o.point||"去使用"==o.point||t.isNone[n]?i("img",{staticClass:"coupon_status",attrs:{src:t.isNone[n]?t.coupon_no:t.coupon_on}}):t._e(),i("div",{staticClass:"coupon_li_data",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._receive(n,o.id,o.point,o.url)}}},[i("div",{staticClass:"coupon_left",class:{active_border:t.isNone[n]}},[i("p",{staticClass:"coupon_p"},[t._v(t._s(o.name))]),i("div",{staticClass:"coupon_price",class:{active_color:t.isNone[n]}},[2==o.activity_type?i("div",{staticClass:"coupon_price_div"},[i("span",{staticClass:"coupon_price_span",class:{active_color:t.isNone[n]}},[t._v("￥")]),i("span",{staticClass:"coupon_price_money",class:{active_color:t.isNone[n]}},[t._v(t._s(o.money))]),i("span",{staticClass:"coupon_t",class:{active_color:t.isNone[n]}},[t._v(t._s(o.limit))])]):3==o.activity_type?i("div",{staticClass:"coupon_price_div color_ff3"},[i("span",{staticClass:"coupon_price_money",class:{active_color:t.isNone[n]}},[t._v(t._s(o.discount)),i("span",{staticClass:"font_28",class:{active_color:t.isNone[n]}},[t._v(t._s(t.language.shop.coupon.fold))])]),i("span",{staticClass:"coupon_t",class:{active_color:t.isNone[n]}},[t._v(t._s(o.limit))])]):1==o.activity_type?i("div",{staticClass:"color_ff3"},[i("span",{staticClass:"coupon_t ml_0",class:{active_color:t.isNone[n]}},[t._v(t._s(o.limit))])]):t._e()])]),o.point?i("div",{staticClass:"coupon_right"},[i("v-uni-button",{staticClass:"coupon_but",class:{coupon_no:t.isNone[n],coupon_gous:"去使用"==o.point,coupon_red:"立即领取"==o.point},attrs:{type:"button"}},[i("span",{ref:"point",refInFor:!0},[t._v(t._s("立即领取"==o.point?t.language.shop.coupon.points[0]:"已抢光"==o.point?t.language.shop.coupon.points[1]:"去使用"==o.point?t.language.shop.coupon.points[2]:""))])])],1):t._e()])])})),t.list&&t.list.length>8?i("uni-load-more",{attrs:{loadingType:t.loadingType}}):t._e()],2)]):t._e(),t.list&&0==t.list.length?i("div",{staticClass:"relative"},[i("div",{staticClass:"noFindDiv"},[i("div",[i("img",{staticClass:"noFindImg",attrs:{src:t.noCoupon,alt:""}})]),i("span",{staticClass:"noFindText"},[t._v(t._s(t.language.shop.coupon.coupon[3])+"~")])])]):t._e(),i("skeleton",{attrs:{animation:!0,loading:!t.load,bgColor:"#FFF"}})],1)},a=[]},6005:function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=a;var n=e(i("6b75"));function e(t){return t&&t.__esModule?t:{default:t}}function a(t){if(Array.isArray(t))return(0,n.default)(t)}},"6b74":function(t,o,i){var n=i("d748");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("f6de85e2",n,!0,{sourceMap:!1,shadowMode:!1})},"6b75":function(t,o,i){"use strict";function n(t,o){(null==o||o>t.length)&&(o=t.length);for(var i=0,n=new Array(o);i<o;i++)n[i]=t[i];return n}Object.defineProperty(o,"__esModule",{value:!0}),o.default=n},"91ac":function(t,o,i){"use strict";var n=i("6b74"),e=i.n(n);e.a},b4c7:function(t,o,i){"use strict";var n=i("4ea4");i("4de4"),i("c975"),i("ac1f"),i("5319"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=n(i("2909")),a={data:function(){return{returnR:"",back:"",title:"领券中心",load:!1,list:!1,receive_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/lingqu2x.png",noreceive_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/qiangguang2x.png",back_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",huiquan_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/huiquan2x.png",coupon_on:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon/coupon_on.png",coupon_no:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/coupon_no.png",coupon_bg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/coupon_bg.png",coupon_bg1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/coupon_bg1.png",fastTap:!0,frompage:"",noCoupon:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/noCoupon.png",loopStatu:!0,isNone:[],type:1,page:1,loadingType:0}},onReachBottom:function(){0==this.loadingType&&(this.loadingType=1,this.page++,this._axios())},onLoad:function(t){t.loop&&(this.loopStatu=!1)},onShow:function(){var t=this;this.$nextTick((function(){t.list||(t.load=!1),t.page=1,t._axios()}))},methods:{changeTab:function(t){this.type=t,this.page=1,this._axios()},changeLoginStatus:function(){this.page=1,this._axios()},_mycoupon:function(){this.isLogin((function(){uni.navigateTo({url:"/pagesB/coupon/mycoupon?loop=false"})}))},_axios:function(){var t=this,o={module:"app",action:"coupon",app:"index",page:this.page,type:this.type};this.$req.post({data:o}).then((function(o){var i,n=o.list;if(1==t.page&&(t.list=[],t.isNone=[]),n.filter((function(t){t.limit=t.limit.replace("满","满￥")})),(i=t.list).push.apply(i,(0,e.default)(n)),t.fastTap=!0,n&&n.length){for(var a,s=[],c=0;c<n.length;c++)s.push(!1),"已抢光"===n[c].point&&(s[c]=!0);(a=t.isNone).push.apply(a,s)}t.load=!0,n&&n.length>0?t.loadingType=0:t.loadingType=2}))},_receive:function(t,o,i,n){var e=this;if("立即领取"===i){if(!this.fastTap)return;if(this.fastTap=!1,!this.access_id)return uni.showToast({title:this.language.shop.coupon.Tips[1],icon:"none",duration:1500}),void setTimeout((function(){uni.navigateTo({url:"/pages/login/login?landing_code=coupon"})}),1500);var a={module:"app",action:"coupon",app:"receive",id:o};this.$req.post({data:a}).then((function(t){var o=t.code;200===o?(uni.showToast({title:e.language.shop.coupon.Tips[0],duration:1500,icon:"none"}),setTimeout((function(){e.page=1,e._axios()}),1500)):404===o?(uni.showToast({title:t.message,duration:1500,icon:"none"}),setTimeout((function(){uni.navigateTo({url:"/pages/login/login?landing_code=coupon"})}),1500)):(uni.showToast({title:t.message,duration:1500,icon:"none"}),setTimeout((function(){e._axios()}),1500))}))}else if("去使用"===i){if(!this.fastTap)return;this.fastTap=!1,n||(n="/pages/tabBar/home"),2==this.type?uni.navigateTo({url:"/pagesA/store/store?shop_id="+this.list[t].mch_id}):n.indexOf("tabBar")>0?uni.switchTab({url:n}):uni.navigateTo({url:n})}}}};o.default=a},d748:function(t,o,i){var n=i("24fb");o=n(!1),o.push([t.i,'.container[data-v-0fc8af41]{min-height:100vh}.coupon_but[data-v-0fc8af41]{width:%?140?%;height:%?50?%;-webkit-border-radius:13px;border-radius:13px;font-size:%?28?%;padding:0;border:0;margin:0;outline:0}.coupon_but[data-v-0fc8af41]::after{border:0}.mycoupon_head[data-v-0fc8af41],\n.mycoupon_tab[data-v-0fc8af41],\n.mycoupon_bottom[data-v-0fc8af41]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mycoupon_bottom[data-v-0fc8af41]{background-color:#ff612a;color:#fff;border:0!important;width:100%;height:%?98?%;position:fixed;bottom:0;left:0;font-size:%?30?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:9999}.mycoupon_head[data-v-0fc8af41]{background-color:#fff;position:fixed;top:0;left:0;width:100%;height:%?88?%;z-index:40;color:#020202;font-size:%?40?%;padding:0 %?30?%}.mycoupon_head img[data-v-0fc8af41]{width:%?24?%;height:%?36?%}.coupon_price[data-v-0fc8af41]{color:#f33;font-size:%?48?%}.coupon_img[data-v-0fc8af41]{width:%?145?%;height:%?145?%;position:absolute;top:%?-30?%;right:%?-23?%}.coupon_li[data-v-0fc8af41]{position:relative;height:%?128?%;margin-bottom:%?20?%;-webkit-box-shadow:1px 1px 1px %?4?% #eee;box-shadow:1px 1px 1px %?4?% #eee;padding:%?20?%;-webkit-box-shadow:none;box-shadow:none}.img_zin1[data-v-0fc8af41]{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;width:100%;height:100%;padding:0}.coupon_left[data-v-0fc8af41]{width:75%;text-align:left;margin:0;border-right:none;padding-right:%?30?%;z-index:9;height:%?168?%;padding-left:%?10?%;padding:%?29?% %?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.coupon_right[data-v-0fc8af41]{width:25%;text-align:right;margin:0;z-index:9;height:%?168?%;padding-left:%?22?%}.coupon_status[data-v-0fc8af41]{z-index:9;width:%?100?%;height:%?100?%;position:absolute;right:0;top:0}.coupon_p[data-v-0fc8af41]{font-size:%?30?%;line-height:%?30?%;font-weight:700;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-bottom:%?18?%}.coupon_t[data-v-0fc8af41]{color:#f33;border:1px solid #f33;height:%?40?%;line-height:%?40?%;padding:0 %?8?%;margin-left:%?14?%;-webkit-border-radius:2px;border-radius:2px}.coupon_gous[data-v-0fc8af41]{background-color:#fff;border:1px solid #f44!important;color:#f44}.coupon_no[data-v-0fc8af41]{background-color:#ccc}.coupon_red[data-v-0fc8af41]{background-color:#f44}uni-button[data-v-0fc8af41]:after{border:0}.coupon_ul[data-v-0fc8af41]{padding-bottom:%?120?%}.active_color[data-v-0fc8af41]{color:#b8b8b8!important;border-color:#b8b8b8!important}.bg_img[data-v-0fc8af41]{width:100%;height:100%;position:absolute;left:0}.coupon_li_data[data-v-0fc8af41]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%}.coupon_price_div[data-v-0fc8af41]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;height:20px}.coupon_price_span[data-v-0fc8af41]{font-weight:400;font-size:%?28?%;padding-top:%?16?%}.coupon_price_money[data-v-0fc8af41]{font-weight:700;font-size:%?48?%}.color_ff3[data-v-0fc8af41]{color:#f33}.font_28[data-v-0fc8af41]{font-size:%?28?%}.ml_0[data-v-0fc8af41]{margin-left:0!important}.tabBox[data-v-0fc8af41]{height:%?90?%}.tabBox > div[data-v-0fc8af41]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;width:100%;height:%?90?%;background-color:#fff;z-index:99;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eae9ec}.tabBox > div div[data-v-0fc8af41]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?30?%;color:#999;position:relative}.tabBox > div div.active[data-v-0fc8af41]{color:#ff612a;font-weight:700}.tabBox > div div.active[data-v-0fc8af41]:after{content:"";position:absolute;width:%?156?%;height:2px;background:#ff612a;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=o},db90:function(t,o,i){"use strict";function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=n},f4dd:function(t,o,i){"use strict";i.r(o);var n=i("52d1"),e=i("490a");for(var a in e)"default"!==a&&function(t){i.d(o,t,(function(){return e[t]}))}(a);i("91ac");var s,c=i("f0c5"),u=Object(c["a"])(e["default"],n["b"],n["c"],!1,null,"0fc8af41",null,!1,n["a"],s);o["default"]=u.exports}}]);