(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-mycoupon"],{"0b28":function(t,o,i){"use strict";var e;i.d(o,"b",(function(){return a})),i.d(o,"c",(function(){return n})),i.d(o,"a",(function(){return e}));var a=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{ref:"mycoupon",staticClass:"order_ii"},[i("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(o){arguments[0]=o=t.$handleEvent(o),t.changeLoginStatus.apply(void 0,arguments)}}}),i("div",{staticClass:"data_h",style:{height:t.halfWidth}},[i("div",{staticClass:"data_h_h",style:{height:t.halfWidth}})]),i("div",{staticClass:"yh-title"},[i("heads",{attrs:{title:t.language.mycoupon.title}})],1),i("div",{staticClass:"yh-head",style:{top:t.halfWidth1}},[i("v-uni-view",{staticClass:"nav mycoupon_tab"},t._l(t.language.mycoupon.tabBar,(function(o,e){return i("v-uni-view",{key:e,staticClass:"mycoupon_li",class:{active:t.type==e+1},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t._couponTitle(e+1)}}},[t._v(t._s(o))])})),1)],1),i("ul",{staticClass:"coupon_ul",style:{paddingTop:t.halfWidth2}},[t._l(t.list,(function(o,e){return i("li",{key:e,staticClass:"coupon",class:0==o.type?"coupon":2==o.type||3==o.type?"coupon1":""},[0!=o.type||4!=o.activity_type&&5!=o.activity_type?t._e():i("v-uni-image",{staticClass:"vip_img",attrs:{src:t.vipImg}}),i("v-uni-view",{staticClass:"coupon_top",class:2==o.type||3==o.type?"coupon_top2":""},[i("v-uni-view",{staticClass:"coupon_top_left"},[i("v-uni-view",[i("span",{staticClass:"yh-product_title"},[t._v(t._s(o.name?o.name:o.product_title))]),0==o.type?i("span",{staticClass:"coupon_top_icon"},[t._v(t._s(1==o.activity_type?"免邮券":2==o.activity_type?"满减券":3==o.activity_type?"折扣券":""))]):t._e()]),i("span",[t._v(t._s(o.expiry_time)+" "+t._s(t.language.mycoupon.endTime))])],1),1==o.activity_type?i("v-uni-view",{staticClass:"coupon_top_right",style:0==o.type?"":2==o.type?"background: url("+t.beenuseimg+") no-repeat top right/88upx 88rpx;border-color:rgb(221, 221, 221)":3==o.type?"background: url("+t.couponTimeImg+") no-repeat top right/88upx 88rpx;border-color:rgb(221, 221, 221)":""},[i("v-uni-view",[i("span",{staticClass:"yh-by"},[t._v(t._s(t.language.mycoupon.coupon_mail))])]),i("span",[t._v(t._s(o.limit))])],1):t._e(),2==o.activity_type?i("v-uni-view",{staticClass:"coupon_top_right",style:0==o.type?"":2==o.type?"background: url("+t.beenuseimg+") no-repeat top right/88upx 88rpx;border-color:rgb(221, 221, 221)":3==o.type?"background: url("+t.couponTimeImg+") no-repeat top right/88upx 88rpx;border-color:rgb(221, 221, 221)":""},[i("v-uni-view",[t._v("￥"),i("span",{staticClass:"yh-by"},[t._v(t._s(o.money))])]),i("span",[t._v(t._s(o.limit))])],1):3==o.activity_type?i("v-uni-view",{staticClass:"coupon_top_right",style:0==o.type?"":2==o.type?"background: url("+t.beenuseimg+") no-repeat top right/88upx 88rpx;border-color:rgb(221, 221, 221)":3==o.type?"background: url("+t.couponTimeImg+") no-repeat top right/88upx 88rpx;border-color:rgb(221, 221, 221);":""},[i("v-uni-view",[i("span",{staticClass:"yh-by"},[t._v(t._s(o.discount))]),t._v(t._s(t.language.mycoupon.coupon_discount))]),i("span",[t._v(t._s(o.limit))])],1):4==o.activity_type?i("v-uni-view",{staticClass:"coupon_top_right",style:4==o.activity_type?"background: url("+t.bg1img+") no-repeat top right/138upx 138rpx;":2==o.type?"background: url("+t.beenuseimg+") no-repeat top right/88upx 88rpx;border-color:rgb(221, 221, 221)":3==o.type?"background: url("+t.couponTimeImg+") no-repeat top right/88upx 88rpx;border-color:rgb(221, 221, 221);":""}):t._e()],1),i("v-uni-view",{staticClass:"coupon_bottom"},[i("v-uni-view",{staticClass:"coupon_bottom_left",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.discTap(e)}}},[i("v-uni-view",{staticClass:"coupon_bottom_l"},[t._v(t._s(t.language.mycoupon.instructions)),o.discFlag?i("v-uni-image",{staticClass:"yh-discFlag",attrs:{src:t.discFlagtopimg}}):i("v-uni-image",{staticClass:"yh-discFlag",attrs:{src:t.discFlagbottomimg}})],1)],1),0==o.type?i("v-uni-view",{staticClass:"coupon_bottom_right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._use(o.point,o.id,o.url)}}},[t._v(t._s(t.language.mycoupon.toUse))]):2==o.type?i("v-uni-view",{staticClass:"coupon_bottom_right yh-coupon_bottom_right"},[t._v(t._s(t.language.mycoupon.beUse))]):3==o.type?i("v-uni-view",{staticClass:"coupon_bottom_right yh-coupon_bottom_right"},[t._v(t._s(t.language.mycoupon.expired))]):t._e(),o.discFlag?i("v-uni-view",{staticClass:"coupon_bottom_b"},[i("v-uni-text",{staticClass:"yh-Instructions"},[t._v(t._s(o.Instructions))])],1):t._e()],1)],1)})),t.list&&0==t.list.length?i("li",{staticClass:"emtpy_dis"},[i("div",{staticClass:"noFindDiv"},[i("div",[i("img",{staticClass:"noFindImg",attrs:{src:t.noCoupon,alt:""}})]),i("span",{staticClass:"noFindText"},[t._v(t._s(t.language.mycoupon.noCoupon))])])]):t._e()],2),t.loopStatu?i("div",{staticClass:"mycoupon_bottom",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.navTo("../../pagesA/shop/coupon?loop=false")}}},[i("span",[t._v(t._s(t.language.mycoupon.bottomBtn))])]):t._e(),t.complete_report?i("div",{staticClass:"complete complete_b",style:{top:t.halfWidth}},[i("div",{staticClass:"complete_qiandao"},[i("img",{staticClass:"complete_img",attrs:{src:t.close},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.complete_report=!1}}}),i("p",{staticClass:"yh-yhjsm"},[t._v(t._s(t.language.mycoupon.coupon_info))]),i("p",[t._v("1、购买商品时（除特例商品外），优惠券可抵扣相应现金价值;")]),i("p",[t._v("2、单个订单只能使用一张优惠券，且不得与其它优惠方式同时使用;")]),i("p",[t._v("3、本券不得兑换现金不设找零;")]),i("p",[t._v("4、退货时，本券价值不予退还;")]),i("p",[t._v("最终解释权归湖南壹拾捌号网络科技有限公司所有")])])]):t._e()],1)},n=[]},"162d":function(t,o,i){"use strict";i.r(o);var e=i("0b28"),a=i("f730");for(var n in a)"default"!==n&&function(t){i.d(o,t,(function(){return a[t]}))}(n);i("8ac6");var c,r=i("f0c5"),s=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"bc93336c",null,!1,e["a"],c);o["default"]=s.exports},"1d4a":function(t,o,i){"use strict";i("c975"),i("e25e"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={data:function(){return{title:"我的优惠券",noCoupon:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/noCoupon.png",huiquan:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/huiquan2x.png",kong:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/kong2x.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",close:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/qiandaoguanbi2x.png",coupon_bg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon_bg.png",coupon_us:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon_us.png",coupon_out:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon_out.png",vipImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon/vip.png",beenuseimg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon/beenuse.png",couponTimeImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon/coupon_time.png",bg1img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon/bg_1.png",discFlagtopimg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon/top.png",discFlagbottomimg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/coupon/bottom.png",list:!1,list1:"",list2:"",list3:"",type:1,display:"",complete_report:!1,loopStatu:!0}},onLoad:function(t){t.loop&&(this.loopStatu=!1)},computed:{halfWidth1:function(){var t=uni.getStorageSync("data_height")?uni.getStorageSync("data_height"):this.$store.state.data_height,o=parseInt(t),i=2*o;return i=88,uni.upx2px(i)+"px"},halfWidth2:function(){var t=uni.getStorageSync("data_height")?uni.getStorageSync("data_height"):this.$store.state.data_height,o=parseInt(t),i=2*o+51;return i=100,uni.upx2px(i)+"px"}},onShow:function(){var t=this;t.$nextTick((function(){t.list||uni.showLoading({title:t.language.showLoading.loading,mask:!0}),t.access_id&&t._axios()}))},methods:{changeLoginStatus:function(){this._axios()},_uni_back:function(){"my"==this.frompage?uni.switchTab({url:"../tabBar/my"}):uni.navigateBack({delta:1})},_axios:function(){var t=this,o={module:"app",action:"Coupon",app:"mycoupon"};this.$req.post({data:o}).then((function(o){if(200==o.code){var i=o.data,e=i.list1,a=i.list2,n=i.list3;t.list1=e,t.list2=a,t.list3=n,1==t.type?t.list=e:2==t.type?t.list=a:3==t.type&&(t.list=n)}else uni.showToast({title:o.message,duration:1500,icon:"none"})}))},_couponTitle:function(t){this.type=t,1==t?this.list=this.list1:2==t?this.list=this.list2:3==t&&(this.list=this.list3)},_use:function(t,o,i){i.indexOf("tabBar")>0?uni.switchTab({url:i}):uni.navigateTo({url:i})},discTap:function(t){this.$set(this.list[t],"discFlag",!this.list[t].discFlag)}}};o.default=e},3208:function(t,o,i){var e=i("ad29");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("351235e9",e,!0,{sourceMap:!1,shadowMode:!1})},"8ac6":function(t,o,i){"use strict";var e=i("3208"),a=i.n(e);a.a},ad29:function(t,o,i){var e=i("24fb");o=e(!1),o.push([t.i,'.coupon_price[data-v-bc93336c]{line-height:1.33;text-align:center;color:#f33;font-size:%?54?%}.mycoupon_head[data-v-bc93336c],\n.mycoupon_tab[data-v-bc93336c],\n.mycoupon_bottom[data-v-bc93336c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mycoupon_head[data-v-bc93336c]{background-color:#fff;position:relative;top:0;left:0;width:100%;height:%?88?%;z-index:40;color:#020202;font-size:%?40?%;padding:0 %?30?%}.mycoupon_head img[data-v-bc93336c]{width:%?24?%;height:%?36?%}.coupon_t[data-v-bc93336c]{text-align:center}.coupon_ul[data-v-bc93336c]{padding-bottom:%?98?%;margin-top:%?0?%;padding-top:%?98?%;min-height:100vh}.coupon_li[data-v-bc93336c]{position:relative;height:%?160?%;margin:%?20?% 0;-webkit-box-shadow:1px 1px 1px %?4?% #eee;box-shadow:1px 1px 1px %?4?% #eee;padding:%?20?%}.mycoupon_tab[data-v-bc93336c]{border-bottom:1px solid #eee;-webkit-justify-content:space-around;justify-content:space-around;position:relative;left:0;width:100%;background-color:#fff;z-index:40}.mycoupon_li[data-v-bc93336c]{padding:%?30?% 0;position:relative;font-size:%?28?%;color:#999}.mycoupon_border[data-v-bc93336c]{border-bottom:2px solid #020202;position:absolute;bottom:-1px;left:24%;width:%?40?%}.mycoupon_bottom[data-v-bc93336c]{width:100%;height:%?98?%;background-color:#020202;position:fixed;bottom:0;left:0;color:#fff;font-size:%?30?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:9999}.active[data-v-bc93336c]{color:#020202;font-weight:700}.active_border[data-v-bc93336c]{border-right:1px solid #f5f5f5!important}.active_border1[data-v-bc93336c]{border:1px solid #f5f5f5!important}\n/* .active_backimg{background: url(../../common/img/shixiao2x.png) no-repeat;background-size: 100% 100%;} */.emtpy_dis[data-v-bc93336c]{text-align:center;margin-top:%?150?%}.emtpy_dis > p[data-v-bc93336c]{color:#9d9d9d;margin-top:%?20?%}.complete[data-v-bc93336c]{height:93.5%;width:100%;background-color:rgba(0,0,0,.5);position:fixed;bottom:0;left:0;z-index:9999999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.complete_qiandao[data-v-bc93336c]{height:auto;width:65%;margin:0 auto;padding:%?30?%;text-align:left;font-size:%?28?%;position:absolute;background-color:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%;text-align:center}.complete_qiandao > p[data-v-bc93336c]{margin-top:%?10?%;text-align:left}.complete_b[data-v-bc93336c]{padding-top:45%}.complete_img[data-v-bc93336c]{position:absolute;top:%?20?%;right:%?20?%;width:%?40?%;height:%?40?%}.coupon_left[data-v-bc93336c]{width:28%;text-align:right;margin:0;border-right:none;padding-right:%?30?%;z-index:9;height:%?126?%}.coupon_right[data-v-bc93336c]{width:53%;text-align:right;margin:0;z-index:9;height:%?126?%}.coupon_p[data-v-bc93336c]{font-weight:700;padding-bottom:%?20?%}.conpon_time[data-v-bc93336c]{margin-top:%?30?%;font-size:%?20?%}.coupon_but[data-v-bc93336c]{width:%?140?%;position:absolute;right:%?-110?%;top:%?54?%;height:%?50?%;background:-webkit-linear-gradient(left,#ff7272,#f44);-webkit-border-radius:%?26?%;border-radius:%?26?%;color:#fff;font-size:%?28?%}.active_black[data-v-bc93336c]{color:#000}.active_color[data-v-bc93336c]{color:#bbb!important}.active_none[data-v-bc93336c]{display:none}.coupon_status[data-v-bc93336c]{z-index:9;width:%?88?%;height:%?88?%;position:absolute;right:0;top:0}.active[data-v-bc93336c]::after{content:"";position:absolute;display:block;bottom:0;height:2px;width:%?120?%;left:50%;margin-left:%?-60?%;background:#020202}\n/* 优化 */.coupon[data-v-bc93336c]{border:1px solid #ffc2c2;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:-webkit-gradient(linear,left bottom,left top,from(#fff8f7),to(#fff3f3));background:-webkit-linear-gradient(bottom,#fff8f7,#fff3f3);background:linear-gradient(0deg,#fff8f7 0,#fff3f3);margin:%?30?% 0;position:relative}\n/* 已使用样式 */.coupon1[data-v-bc93336c]{border:1px solid #ddd;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:-webkit-gradient(linear,left bottom,left top,from(#f9f9f9),to(#fbfbfb));background:-webkit-linear-gradient(bottom,#f9f9f9,#fbfbfb);background:linear-gradient(0deg,#f9f9f9 0,#fbfbfb);margin:%?30?% 0;position:relative}.coupon_top[data-v-bc93336c]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px dashed #ffc2c2;padding-left:%?30?%;position:relative}.coupon_top_left[data-v-bc93336c]{padding-top:%?46?%;padding-bottom:%?44?%;padding-right:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin-right:auto;font-size:%?22?%;color:#666;width:%?456?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.coupon_top_left uni-view[data-v-bc93336c]{margin-bottom:%?20?%;font-size:%?28?%;color:#020202;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.coupon_top_right[data-v-bc93336c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?200?%;border-left:1px dashed #ffc2c2}.coupon_top_right uni-view[data-v-bc93336c]{font-size:%?28?%;color:#020202;height:%?41?%;line-height:%?41?%}.coupon_top_right span[data-v-bc93336c]{font-size:%?24?%;color:#020202;margin-top:%?24?%}.coupon_bottom[data-v-bc93336c]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?30?%;-webkit-flex-wrap:wrap;flex-wrap:wrap;height:%?86?%}.coupon_bottom_left[data-v-bc93336c]{margin-top:%?30?%;font-size:%?24?%;color:#666}.coupon_bottom_l[data-v-bc93336c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;height:%?22?%}.coupon_bottom_right[data-v-bc93336c]{width:%?140?%;height:%?50?%;line-height:%?50?%;text-align:center;background:#f33;color:#fff;-webkit-border-radius:%?25?%;border-radius:%?25?%;margin-top:%?18?%;margin-bottom:%?18?%;margin-left:auto}.coupon_top_icon[data-v-bc93336c]{font-size:%?20?%;color:#f33;line-height:%?28?%;margin-left:%?10?%;padding:%?4?%;-webkit-border-radius:%?4?%;border-radius:%?4?%;border:1px solid #f33}.vip_img[data-v-bc93336c]{position:absolute;top:-1px;left:-1px;width:%?80?%;height:%?30?%}.coupon_bottom_b[data-v-bc93336c]{padding-bottom:%?12?%;width:100%}.coupon_top[data-v-bc93336c]:before{content:"";display:block;position:absolute;width:%?28?%;height:%?28?%;bottom:%?-16?%;left:%?-16?%;background:#fff;border:1px solid #ffc2c2;border-left-color:transparent;border-top-color:transparent;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-border-radius:50%;border-radius:50%}.coupon_top[data-v-bc93336c]:after{content:"";display:block;position:absolute;width:%?28?%;height:%?28?%;bottom:%?-16?%;right:%?-16?%;background:#fff;border:1px solid #ffc2c2;border-right-color:transparent;border-top-color:transparent;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-border-radius:50%;border-radius:50%}.coupon_top1[data-v-bc93336c]:before{border-right-color:#b0e1ff;border-bottom-color:#b0e1ff}.coupon_top1[data-v-bc93336c]:after{border-left-color:#b0e1ff;border-bottom-color:#b0e1ff}.coupon_top2[data-v-bc93336c]{border-color:#ddd}.coupon_top2[data-v-bc93336c]:before{border-right-color:#ddd;border-bottom-color:#ddd}.coupon_top2[data-v-bc93336c]:after{border-left-color:#ddd;border-bottom-color:#ddd}.yh-title[data-v-bc93336c]{height:%?88?%}.yh-head[data-v-bc93336c]{width:100%;z-index:999;position:fixed;border-top:1px solid #e6e6e6;top:%?88?%}.yh-product_title[data-v-bc93336c]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-weight:700;max-width:%?340?%}.yh-by[data-v-bc93336c]{font-weight:700;font-size:%?54?%}.yh-discFlag[data-v-bc93336c]{width:%?23?%;height:%?23?%;margin-left:%?15?%}.yh-coupon_bottom_right[data-v-bc93336c]{background:#b8b8b8;color:#fff}.yh-Instructions[data-v-bc93336c]{font-size:%?22?%}.yh-yhjsm[data-v-bc93336c]{margin:%?30?% 0 %?20?% 0;font-size:%?32?%;text-align:center;font-weight:700}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=o},f730:function(t,o,i){"use strict";i.r(o);var e=i("1d4a"),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(o,t,(function(){return e[t]}))}(n);o["default"]=a.a}}]);