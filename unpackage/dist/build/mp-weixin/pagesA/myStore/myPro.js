(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/myStore/myPro"],{"20fa":function(t,o,a){"use strict";var i;a.d(o,"b",(function(){return n})),a.d(o,"c",(function(){return s})),a.d(o,"a",(function(){return i}));var n=function(){var t=this,o=t.$createElement;t._self._c},s=[]},3332:function(t,o,a){"use strict";var i=a("c24f"),n=a.n(i);n.a},3953:function(t,o,a){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a={data:function(){return{addStockNum:"",mask_display1:!1,title:"我的商品",topTabBar:!0,testImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/yhqBg.png",noPro:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/noPro.png",fastTap:!0,shop_id:"",list:[],page:1,pro_id:"",type:1,placeStyle:"color:#b8b8b8;font-size:28upx",loadFlag:!1,up1:!1,up2:!1}},onLoad:function(o){this.shop_id=t.getStorageSync("shop_id")?t.getStorageSync("shop_id"):this.$store.state.shop_id,this.up1=o.up1,this.up2=o.up2},onShow:function(){this.isLogin((function(){})),this._axios()},onReachBottom:function(){var o=this,a={module:"app",action:"mch",m:"my_merchandise_load",shop_id:this.shop_id,page:this.page};this.topTabBar?a.type=1:a.type=2,this.topTabBar?this.list.length>0&&this.$req.post({data:a}).then((function(a){if(200==a.code){var i=a.list;o.page+=1,i.length>0?(o.list=o.list.concat(i),o.loadingType=0):o.loadingType=2}else t.showToast({title:a.message,duration:1500,icon:"none"})})):this.list.length>0&&this.$req.post({data:a}).then((function(a){if(200==a.code){var i=a.list;o.page+=1,i.length>0?(o.list=o.list.concat(i),o.loadingType=0):o.loadingType=2}else t.showToast({title:a.message,duration:1500,icon:"none"})}))},methods:{toAddPro:function(){this.up1?t.navigateTo({url:"/pagesA/myStore/choose_shopping"}):this.up2&&t.navigateTo({url:"/pagesA/myStore/uploadPro"})},changeLoginStatus:function(){this._axios()},_cancel:function(){this.mask_display1=!1,this.addStockNum=""},_checkStatus:function(o){var a=this;this.fastTap&&(this.fastTap=!1,this.$req.post({data:{module:"app",action:"mch",m:"submit_audit",shop_id:this.shop_id,p_id:o}}).then((function(o){200==o.code?(t.showToast({title:a.language.myPro.success,duration:1500,icon:"none"}),setTimeout((function(){a.fastTap=!0,a._axios()}),1500)):(t.showToast({title:o.message,duration:1500,icon:"none"}),a.fastTap=!0)})).catch((function(t){a.fastTap=!0})))},_reEditor:function(o){t.navigateTo({url:"/pagesA/myStore/uploadPro?pageStatus=editor&p_id="+o})},_addStock:function(o){t.navigateTo({url:"addStock?p_id="+o})},_upDownPro:function(o,a){var i=this;this.fastTap&&(this.fastTap=!1,this.$req.post({data:{module:"app",action:"mch",m:"my_merchandise_status",shop_id:this.shop_id,status:o,p_id:a}}).then((function(o){200==o.code?(t.showToast({title:o.message,duration:1500,icon:"none"}),setTimeout((function(){i.fastTap=!0,i._axios()}),1500)):(t.showToast({title:o.message,duration:1500,icon:"none"}),i.fastTap=!0)})).catch((function(t){i.fastTap=!0})))},_delPro:function(o){var a=this;this.fastTap&&(this.fastTap=!1,this.$req.post({data:{module:"app",action:"mch",m:"del_my_merchandise",shop_id:this.shop_id,p_id:o}}).then((function(o){200==o.code?(t.showToast({title:a.language.myPro.delSuccess,duration:1500,icon:"none"}),setTimeout((function(){a.fastTap=!0,a._axios()}),1500)):(t.showToast({title:o.message,duration:1500,icon:"none"}),a.fastTap=!0)})).catch((function(t){a.fastTap=!0})))},_checkDetail:function(o){t.navigateTo({url:"/pagesA/myStore/uploadPro?pageStatus=see&p_id="+o})},changeTabBar:function(t){this.topTabBar=!!t,this.list=[],this.loadingType=0,this.page=1,this.loadFlag=!1,this._axios()},_axios:function(){var o=this;t.showLoading({title:this.language.toload.loading}),this.topTabBar?this.type=1:this.type=2,this.$req.post({data:{module:"app",action:"mch",m:"my_merchandise",shop_id:this.shop_id,type:this.type}}).then((function(a){o.loadFlag=!0,t.hideLoading(),200==a.code?o.list=a.list:t.showToast({title:a.message,duration:1500,icon:"none"})}))}}};o.default=a}).call(this,a("543d")["default"])},"427b":function(t,o,a){"use strict";(function(t){a("1fd4");i(a("66fd"));var o=i(a("4ba9"));function i(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,a("543d")["createPage"])},"4ba9":function(t,o,a){"use strict";a.r(o);var i=a("20fa"),n=a("610d");for(var s in n)"default"!==s&&function(t){a.d(o,t,(function(){return n[t]}))}(s);a("3332");var e,c=a("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],e);o["default"]=u.exports},"610d":function(t,o,a){"use strict";a.r(o);var i=a("3953"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(o,t,(function(){return i[t]}))}(s);o["default"]=n.a},c24f:function(t,o,a){}},[["427b","common/runtime","common/vendor"]]]);