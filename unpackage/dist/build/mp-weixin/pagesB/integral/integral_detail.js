(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesB/integral/integral_detail"],{"19f0":function(i,e,t){"use strict";t.r(e);var o=t("cfe6"),n=t("fb3c");for(var s in n)"default"!==s&&function(i){t.d(e,i,(function(){return n[i]}))}(s);t("b000");var a,r=t("f0c5"),l=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=l.exports},3806:function(i,e,t){"use strict";(function(i){t("1fd4");o(t("66fd"));var e=o(t("19f0"));function o(i){return i&&i.__esModule?i:{default:i}}i(e.default)}).call(this,t("543d")["createPage"])},"424a":function(i,e,t){},b000:function(i,e,t){"use strict";var o=t("424a"),n=t.n(o);n.a},cfe6:function(i,e,t){"use strict";var o;t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return s})),t.d(e,"a",(function(){return o}));var n=function(){var i=this,e=i.$createElement;i._self._c},s=[]},e149:function(i,e,t){"use strict";(function(i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(t("a34a")),n=t("2969");function s(i){return i&&i.__esModule?i:{default:i}}function a(i,e,t,o,n,s,a){try{var r=i[s](a),l=r.value}catch(u){return void t(u)}r.done?e(l):Promise.resolve(l).then(o,n)}function r(i){return function(){var e=this,t=arguments;return new Promise((function(o,n){var s=i.apply(e,t);function r(i){a(s,o,n,r,l,"next",i)}function l(i){a(s,o,n,r,l,"throw",i)}r(void 0)}))}}var l={data:function(){return{close:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/close_bb.png",saves:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/save.png",integral_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/integral.png",integral_sc1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integral_sc1.png",integral_sc2:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integral_sc2.png",integral_kf:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integral_kf.png",yulan:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon1/yulan.gif",fx_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon/share.png",top_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon/kaobei2x.png",niming:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/landing_logo2x.png",wx_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/wechat.png",erm_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/ewmShare.png",erm_pyq_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/wepyq.png",bback_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon/bback.png",imgurls:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon/landing_logo.png",logo:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon/lktlogo.png",you_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"/images/icon/jiantou2x.png",option:"",comm_count:0,num:"",price:"",imgurl:"",pro:"",comments:"",type:"",g_show:!1,isfx:"",pro_id:"",goods:"",shop_list:"",ewmImg:"",saveEWM:!1,collection:"",collection_id:"",title:"商品详情",is_jifen:!0,is_shop:!1,shop_id:"",sharehrefTitle:"",shareImg:"",shareContent:"",shareHref:"",shareMask:!1,shareDiv:!1,fastTap:!0,isopen:1,shareWay:[],headerplus:!1}},onLoad:function(i){this.pro_id=i.pro_id},onShow:function(){this._axios()},onShareAppMessage:function(e){if(0!=this.login_status)return e.from,{title:this.sharehrefTitle,path:this.shareHref2,imageUrl:this.shareImg,bgImgUrl:this.shareImg,success:function(i){this.shareHref2="/pagesB/integral/integral_detail?pro_id="+this.pro_id}};i.navigateTo({url:"../../login/login?landing_code=1"})},methods:{moveHandle:function(){},setHead:function(){var e=this,t=i.createSelectorQuery().in(this);t.select("#boxs").boundingClientRect((function(i){i.top>-20?e.headerplus=!1:i.top<-20&&(e.headerplus=!0)})).exec()},_invite:function(i){this.shareDiv=!1,(0,n.LaiKeTuiInvite)(i,this)},_evaluate:function(e){this.bargain?i.navigateTo({url:"../../pages/evaluate/evaluate?bargain=true&pid="+e}):i.navigateTo({url:"../../pages/evaluate/evaluate?pid="+e})},_buy:function(){var e=this;3!=this.goods.status&&(1!=this.goods.is_delete&&0!=this.isopen?this.isLogin((function(){i.navigateTo({url:"/pagesB/integral/integral_order?id="+e.pro_id})})):i.showToast({title:this.language.integral.integral_detail.Tips[0],duration:1500,icon:"none"}))},_shareDiv:function(){this.shareDiv=!1},_closeAllMask:function(){this.shareMask=!1,this.saveEWM=!1},_downEWM:function(){var e=this;i.downloadFile({url:this.ewmImg,success:function(t){var o=t.tempFilePath;i.saveImageToPhotosAlbum({filePath:o,success:function(){i.showToast({title:this.language.integral.integral_detail.Tips[1],duration:1500,icon:"none"}),e.shareMask=!1,e.saveEWM=!1},fail:function(){i.showToast({title:this.language.integral.integral_detail.Tips[2],duration:1500,icon:"none"})}})},fail:function(){i.showToast({title:this.language.integral.integral_detail.Tips[2],duration:1500,icon:"none"})}})},showSaveEWM:function(i){this.is_shop?(0,n.LaiKeTuiShopEWM)(i,this):(0,n.LaiKeTuiShowSaveEWM)(i,this)},showShareMask:function(e){var t=this;if(1!=this.goods.is_delete&&0!=this.isopen){if(e&&e>0){this.is_shop=!0,this.shop_id=e,this.sharehrefTitle=this.shop_list.shop_name,this.shareImg=this.shop_list.shop_logo,this.shareContent=this.shop_list.shop_name;var o=i.getStorageSync("h5_url");this.shareHref=o+"pagesA/store/store?is_share=true&shop_id="+e,this.shareHref2="/pagesA/store/store?is_share=true&shop_id="+e}else{this.is_shop=!1,this.shareHref2="/pagesB/integral/integral_detail?pro_id="+this.pro_id,this.sharehrefTitle=this.goods.product_title,this.shareImg=this.goods.imgurl,this.shareContent=this.goods.attribute+this.goods.product_title;var n=i.getStorageSync("h5_url");this.shareHref=n+"pagesB/integral/integral_detail?pro_id="+this.pro_id+"&isfx=true"}this.isLogin((function(){t.shareMask=!0}))}else i.showToast({title:this.language.integral.integral_detail.Tips[0],duration:1500,icon:"none"})},closeShareMask:function(){this.shareMask=!1,this.overflow="scroll"},_goback:function(){var e=getCurrentPages();1!==e.length?i.navigateBack():i.switchTab({url:"../../pages/tabBar/home"})},_collection:function(){var i=this;this.isLogin((function(){(0,n.LaiKeTui_collection)(i)}))},kf:function(e){this.isLogin((function(){i.navigateTo({url:"/pages/message/service?pid="+e})}))},_goStore:function(e){i.navigateTo({url:"/pagesA/store/store?shop_id="+e})},_axios:function(){var e=this;return r(o.default.mark((function t(){var n,s,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={module:"app",action:"integral",app:"goodsdetail",id:e.pro_id},t.next=3,e.$req.post({data:n});case 3:s=t.sent,200==s.code?(a=s.goods,a.content=a.content.replace(/<img/g,'<img style="width:100%;"'),e.goods=a,e.goods.attribute=e.goods.attribute.replace(/：/g,":"),e.shop_list=s.shop_list,e.collection=1==e.goods.is_collection,e.collection_id=e.goods.collection_id,e.comments=s.comments,e.isopen=s.isopen,e.comm_count=s.comm_count):i.showToast({title:s.msg,duration:1500,icon:"none"});case 5:case"end":return t.stop()}}),t)})))()}}};e.default=l}).call(this,t("543d")["default"])},fb3c:function(i,e,t){"use strict";t.r(e);var o=t("e149"),n=t.n(o);for(var s in o)"default"!==s&&function(i){t.d(e,i,(function(){return o[i]}))}(s);e["default"]=n.a}},[["3806","common/runtime","common/vendor"]]]);