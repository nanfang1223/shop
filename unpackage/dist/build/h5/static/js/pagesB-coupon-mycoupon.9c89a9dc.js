(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-coupon-mycoupon"],{"070a":function(t,o,i){"use strict";i("99af"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a={data:function(){return{title:"优惠券",active:0,list:[],discArray:[],loop:!0,nobargainImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon1/noCoupon.png",bg_color1:"border-color:#B0E1FF;background: linear-gradient(to top, #F7FCFF 0%, #F2FAFF 100%);",vip_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon/vip.png",discFlagtop:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon/top.png",discFlagbottom:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon/bottom.png",load:!1}},computed:{bg_img1:function(){var t=uni.upx2px(138);return"background: url(".concat(this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL,"images/icon1/coupon_bg1.png) no-repeat top right/").concat(t,"px ").concat(t,"px;")},bg_img2:function(){var t=uni.upx2px(88);return"background: url(".concat(this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL,"images/icon1/beenuse.png) no-repeat top right/").concat(t,"px ").concat(t,"px;border-color:rgb(221, 221, 221)")},bg_img3:function(){var t=uni.upx2px(88);return"background: url(".concat(this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL,"images/icon1/coupon_time.png) no-repeat top right/").concat(t,"px ").concat(t,"px;border-color:rgb(221, 221, 221)")},bg_img4:function(){var t=uni.upx2px(88);return"border-color:#DDDDDD;background: url(".concat(this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL,"images/icon1/beenuse.png) no-repeat top right/").concat(t,"px ").concat(t,"px;")}},onLoad:function(t){t.loop&&(this.loop=!1);for(var o=0;o<this.list.length;o++)this.discArray.push(!1)},onShow:function(){this._axios()},methods:{navTo:function(t){this.list=[],this.active=t,this.load=!1,this._axios()},discTap:function(t){this.$set(this.list[t],"discFlag",!this.list[t].discFlag)},to_detail:function(t){if("5"==t.activity_type)uni.setStorageSync("order_list",t.order_list),uni.setStorageSync("level",t.level),uni.navigateTo({url:"coupon_detail"});else if(0!=t.mch_id)uni.navigateTo({url:"/pagesA/store/store?shop_id="+t.mch_id});else if(2===t.skip_type){if(!t.url)return uni.switchTab({url:"/pages/tabBar/home"}),!1;uni.navigateTo({url:t.url})}else{if(!t.url)return uni.switchTab({url:"/pages/tabBar/home"}),!1;uni.switchTab({url:t.url})}},_axios:function(){var t=this,o={module:"app",action:"coupon",app:"mycoupon",type:this.active};this.$req.post({data:o}).then((function(o){t.load=!0,uni.hideLoading(),200==o.code&&(t.list=o.list)}))},toCoupon:function(){uni.navigateTo({url:"/pagesA/shop/coupon?loop=false"})}}};o.default=a},"0a05":function(t,o,i){"use strict";var a=i("2eca"),e=i.n(a);e.a},"22c9":function(t,o,i){"use strict";var a;i.d(o,"b",(function(){return e})),i.d(o,"c",(function(){return n})),i.d(o,"a",(function(){return a}));var e=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("v-uni-view",{staticClass:"container"},[i("heads",{attrs:{title:t.language.mycoupon.title}}),i("v-uni-view",{staticClass:"nav"},t._l(t.language.mycoupon.tabBar,(function(o,a){return i("v-uni-view",{key:a,class:t.active==a?"active":"",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.navTo(a)}}},[t._v(t._s(o))])})),1),t.load?t._e():i("div",{staticClass:"skeleton"},[i("div",{staticClass:"content"},t._l(3,(function(o){return i("div",{key:o,staticClass:"coupon",staticStyle:{height:"248rpx"}},[i("div",{staticClass:" coupon_top",staticStyle:{height:"186rpx"}},[i("div",{staticClass:"coupon_top_left"},[i("v-uni-view",[i("span",{staticClass:"coupon_name skeleton-rect",staticStyle:{width:"100px"}},[t._v("xx")])]),i("span",{staticClass:"skeleton-rect"},[t._v("xx "+t._s(t.language.mycoupon.endTime))])],1)]),i("v-uni-view",{staticClass:"coupon_bottom skeleton-rect"},[t._v("2")])],1)})),0)]),t.load?[t.list.length>0?i("v-uni-scroll-view",{staticClass:"content",attrs:{"scroll-y":"true"}},t._l(t.list,(function(o,a){return i("v-uni-view",{key:a,class:0==t.active?"coupon":"coupon1",style:5==o.activity_type&&0==t.active?t.bg_color1:""},[4!=o.activity_type&&5!=o.activity_type||0!=t.active?t._e():i("v-uni-image",{staticClass:"vip_img",attrs:{src:t.vip_img}}),i("v-uni-view",{staticClass:"coupon_top",class:5==o.activity_type&&0==t.active?"coupon_top1":1==t.active||2==t.active?"coupon_top2":"",style:5==o.activity_type&&0==t.active?"border-color:#B0E1FF;":""},[i("v-uni-view",{staticClass:"coupon_top_left"},[i("v-uni-view",[i("span",{staticClass:"coupon_name"},[t._v(t._s(o.name?o.name:o.product_title))]),0==t.active?i("span",{staticClass:"coupon_top_icon",style:5==o.activity_type?"border-color:#3398FF;color:#3398FF":""},[t._v(t._s(1==o.activity_type?t.language.mycoupon.activity_type[0]:2==o.activity_type?t.language.mycoupon.activity_type[1]:3==o.activity_type?t.language.mycoupon.activity_type[2]:4==o.activity_type?t.language.mycoupon.activity_type[3]:5==o.activity_type?t.language.mycoupon.activity_type[4]:""))]):t._e()]),i("span",[t._v(t._s(o.expiry_time)+" "+t._s(t.language.mycoupon.endTime))])],1),1==o.activity_type?i("v-uni-view",{staticClass:"coupon_top_right",style:0==t.active?t.bg_img1:1==t.active?t.bg_img2:t.bg_img3},[i("v-uni-view",[t._v("￥"),i("v-uni-text",{staticClass:"coupon_top_right_data"},[t._v(t._s(t.language.mycoupon.coupon_mail))])],1),i("span",[t._v(t._s(o.limit))])],1):t._e(),2==o.activity_type?i("v-uni-view",{staticClass:"coupon_top_right",style:0==t.active?t.bg_img1:1==t.active?t.bg_img2:t.bg_img3},[i("v-uni-view",[t._v("￥"),i("v-uni-text",{staticClass:"coupon_top_right_data"},[t._v(t._s(o.money))])],1),i("span",[t._v(t._s(o.limit))])],1):3==o.activity_type?i("v-uni-view",{staticClass:"coupon_top_right",style:0==t.active?t.bg_img1:1==t.active?t.bg_img2:t.bg_img3},[i("v-uni-view",[i("v-uni-text",{staticClass:"coupon_top_right_data"},[t._v(t._s(o.discount))]),t._v(t._s(t.language.mycoupon.coupon_discount))],1),i("span",[t._v(t._s(o.limit))])],1):4==o.activity_type?i("v-uni-view",{staticClass:"coupon_top_right",style:0==t.active?t.bg_img1:1==t.active?t.bg_img2:t.bg_img3},[0==o.money?i("v-uni-view",[i("v-uni-text",{staticClass:"coupon_top_right_data"},[t._v(t._s(o.discount))]),t._v(t._s(t.language.mycoupon.coupon_discount))],1):i("v-uni-view",[t._v("￥"),i("v-uni-text",{staticClass:"coupon_top_right_data"},[t._v(t._s(o.money))])],1),i("span",[t._v(t._s(o.limit))])],1):5==o.activity_type?i("v-uni-view",{staticClass:"coupon_top_right",style:0==t.active?t.bg_img1+"border-color:#B0E1FF;":1==t.active?t.bg_img4:t.bg_img3},[i("v-uni-image",{staticClass:"duihuan_img",attrs:{src:o.imgurl}})],1):t._e()],1),i("v-uni-view",{staticClass:"coupon_bottom"},[i("v-uni-view",{staticClass:"coupon_bottom_left",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.discTap(a)}}},[i("v-uni-view",{staticClass:"coupon_bottom_l"},[t._v(t._s(t.language.mycoupon.instructions)),o.discFlag?i("v-uni-image",{staticClass:"coupon_bottom_img",attrs:{src:t.discFlagtop}}):i("v-uni-image",{staticClass:"coupon_bottom_img",attrs:{src:t.discFlagbottom}})],1)],1),0==t.active?i("v-uni-view",{staticClass:"coupon_bottom_right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.to_detail(o)}}},[t._v(t._s(t.language.mycoupon.toUse))]):1==t.active?i("v-uni-view",{staticClass:"coupon_bottom_right pastDue"},[t._v(t._s(t.language.mycoupon.beUse))]):2==t.active?i("v-uni-view",{staticClass:"coupon_bottom_right pastDue"},[t._v(t._s(t.language.mycoupon.expired))]):t._e(),o.discFlag?i("v-uni-view",{staticClass:"coupon_bottom_b"},[5==o.activity_type?i("v-uni-text",{staticClass:"font_22"},[t._v(t._s(t.language.mycoupon.instructionsText[0])),i("br"),t._v(t._s(t.language.mycoupon.instructionsText[1])+t._s(o.valid)+t._s(t.language.mycoupon.instructionsText[2]))]):i("v-uni-text",{staticClass:"font_22"},[t._v(t._s(o.Instructions))])],1):t._e()],1)],1)})),1):i("v-uni-view",{staticClass:"no-bargain"},[i("img",{attrs:{src:t.nobargainImg}}),i("p",[t._v(t._s(t.language.mycoupon.noCoupon))])])]:t._e(),t.loop?i("v-uni-button",{staticClass:"coupon_btn",staticStyle:{background:"#FF612A"},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.toCoupon.apply(void 0,arguments)}}},[t._v(t._s(t.language.mycoupon.bottomBtn))]):t._e(),i("skeleton",{attrs:{animation:!0,loading:!t.load,bgColor:"#FFF"}})],2)},n=[]},"2eca":function(t,o,i){var a=i("5846");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("cb890022",a,!0,{sourceMap:!1,shadowMode:!1})},4742:function(t,o,i){"use strict";i.r(o);var a=i("070a"),e=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(o,t,(function(){return a[t]}))}(n);o["default"]=e.a},5846:function(t,o,i){var a=i("24fb");o=a(!1),o.push([t.i,'.container[data-v-236a14d1]{\n\n  /* 百度小程序兼容 */height:100vh;\noverflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff}.nav[data-v-236a14d1]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid #eae9ec;background-color:#fff}.nav uni-view[data-v-236a14d1]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;height:%?90?%;line-height:%?90?%;position:relative;font-size:%?30?%;color:#999}.nav .active[data-v-236a14d1]{font-weight:700;color:#ff612a}.nav .active[data-v-236a14d1]::after{content:"";position:absolute;display:block;bottom:0;height:2px;width:%?120?%;left:%?66?%;background:#ff612a}.content[data-v-236a14d1]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll;padding-bottom:%?98?%}.coupon[data-v-236a14d1]{border:1px solid #ffc2c2;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:-webkit-gradient(linear,left bottom,left top,from(#fff8f7),to(#fff3f3));background:-webkit-linear-gradient(bottom,#fff8f7,#fff3f3);background:linear-gradient(0deg,#fff8f7 0,#fff3f3);margin-bottom:%?30?%;position:relative}\n/* 已使用样式 */.coupon1[data-v-236a14d1]{border:1px solid #ddd;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:-webkit-gradient(linear,left bottom,left top,from(#f9f9f9),to(#fbfbfb));background:-webkit-linear-gradient(bottom,#f9f9f9,#fbfbfb);background:linear-gradient(0deg,#f9f9f9 0,#fbfbfb);margin-bottom:%?30?%;position:relative}.coupon_top[data-v-236a14d1]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px dashed #ffc2c2;padding-left:%?30?%;position:relative}.coupon_top_left[data-v-236a14d1]{padding-top:%?46?%;padding-bottom:%?44?%;padding-right:%?20?%;margin-right:auto;font-size:%?22?%;color:#666;width:%?456?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.coupon_top_left uni-view[data-v-236a14d1]{margin-bottom:%?20?%;font-size:%?28?%;color:#020202;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.coupon_top_right[data-v-236a14d1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?200?%;border-left:1px dashed #ffc2c2}.coupon_top_right uni-view[data-v-236a14d1]{font-size:%?28?%;color:#020202;height:%?41?%;line-height:%?41?%}.coupon_top_right span[data-v-236a14d1]{font-size:%?24?%;color:#020202;margin-top:%?24?%}.coupon_bottom[data-v-236a14d1]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?30?%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.coupon_bottom_left[data-v-236a14d1]{margin-top:%?30?%;font-size:%?24?%;color:#666}.coupon_bottom_l[data-v-236a14d1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?24?%}.coupon_bottom_right[data-v-236a14d1]{width:%?140?%;height:%?50?%;line-height:%?50?%;text-align:center;background:#f33;color:#fff;-webkit-border-radius:%?25?%;border-radius:%?25?%;margin-top:%?18?%;margin-bottom:%?18?%;margin-left:auto;font-size:%?28?%}.coupon_top_icon[data-v-236a14d1]{font-size:%?22?%;color:#f33;line-height:%?30?%;margin-left:%?10?%;padding:%?4?%;-webkit-border-radius:%?4?%;border-radius:%?4?%;border:1px solid #f33}.vip_img[data-v-236a14d1]{position:absolute;top:-1px;left:-1px;width:%?80?%;height:%?30?%}.coupon_bottom_b[data-v-236a14d1]{padding-bottom:%?12?%;width:100%}.coupon_top[data-v-236a14d1]:before{content:"";display:block;position:absolute;width:%?28?%;height:%?28?%;bottom:%?-16?%;left:%?-16?%;background:#fff;border:1px solid #ffc2c2;border-left-color:transparent;border-top-color:transparent;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-border-radius:50%;border-radius:50%}.coupon_top[data-v-236a14d1]:after{content:"";display:block;position:absolute;width:%?28?%;height:%?28?%;bottom:%?-16?%;right:%?-16?%;background:#fff;border:1px solid #ffc2c2;border-right-color:transparent;border-top-color:transparent;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-border-radius:50%;border-radius:50%}.coupon_top1[data-v-236a14d1]:before{border-right-color:#b0e1ff;border-bottom-color:#b0e1ff}.coupon_top1[data-v-236a14d1]:after{border-left-color:#b0e1ff;border-bottom-color:#b0e1ff}.coupon_top2[data-v-236a14d1]{border-color:#ddd}.coupon_top2[data-v-236a14d1]:before{border-right-color:#ddd;border-bottom-color:#ddd}.coupon_top2[data-v-236a14d1]:after{border-left-color:#ddd;border-bottom-color:#ddd}.coupon_btn[data-v-236a14d1]{position:fixed;width:100%;height:%?98?%;line-height:%?98?%;bottom:0;left:0;border:0;outline:0;background:#ff612a;color:#fff;font-size:%?30?%;-webkit-border-radius:0;border-radius:0}.no-bargain[data-v-236a14d1]{pointer-events:none;width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;padding-top:%?199?%;\n}.no-bargain p[data-v-236a14d1]{height:%?29?%;line-height:%?36?%;color:#888;font-size:%?28?%}.no-bargain img[data-v-236a14d1]{display:block;width:%?240?%;height:%?238?%;margin:auto;margin-bottom:%?45?%}.coupon_name[data-v-236a14d1]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-weight:700;max-width:%?340?%}.coupon_top_right_data[data-v-236a14d1]{font-weight:700;\nfont-size:%?54?%!important;\n}.duihuan_img[data-v-236a14d1]{width:%?120?%;height:%?120?%}.coupon_bottom_img[data-v-236a14d1]{width:%?23?%;height:%?23?%;margin-left:%?15?%}.pastDue[data-v-236a14d1]{background:#b8b8b8;color:#fff}.font_22[data-v-236a14d1]{font-size:%?22?%}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=o},7029:function(t,o,i){"use strict";i.r(o);var a=i("22c9"),e=i("4742");for(var n in e)"default"!==n&&function(t){i.d(o,t,(function(){return e[t]}))}(n);i("0a05");var c,r=i("f0c5"),s=Object(r["a"])(e["default"],a["b"],a["c"],!1,null,"236a14d1",null,!1,a["a"],c);o["default"]=s.exports}}]);