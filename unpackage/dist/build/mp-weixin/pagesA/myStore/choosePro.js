(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/myStore/choosePro"],{"3b1f":function(t,e,c){},5841:function(t,e,c){"use strict";(function(t){c("1fd4");i(c("66fd"));var e=i(c("d531"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,c("543d")["createPage"])},"9ceb":function(t,e,c){"use strict";var i=c("3b1f"),s=c.n(i);s.a},c411:function(t,e,c){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c={data:function(){return{title:"选择商品",serchimg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/searchNew.png",circle_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehui2x.png",circle_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehei2x.png",proList:[],name:"",modifyType:!1,checkList:[],page:1,checkProListId:"",checkAddList:[],is_selected:!1}},created:function(e){var c=t.getStorageSync("checkProList")?t.getStorageSync("checkProList"):[];c.length>0&&(this.is_selected=!0,this.checkList=c),!t.getStorageSync("checkProList")&&t.getStorageSync("checkProListId")&&(this.is_selected=!0,this.checkProListId=t.getStorageSync("checkProListId")),this.axios()},onShow:function(){this.title=this.language.choosePro.title;var e=t.getStorageSync("checkProList")?t.getStorageSync("checkProList"):[];e.length>0&&(this.title=this.language.choosePro.title1),!t.getStorageSync("checkProList")&&t.getStorageSync("checkProListId")&&(this.title=this.language.choosePro.title1)},computed:{checkAll:function(){var t=this.proList.some((function(t){return 0==t.checked}));return!t},checkNum:function(){var t=0;return this.checkAddList.filter((function(e){e.checked&&(t+=1)})),t},checkNum1:function(){var t=0;return this.checkList.filter((function(e){e.checked&&(t+=1)})),t}},onBackPress:function(){t.setStorageSync("checkProList",this.checkList)},methods:{clickAll:function(){this.checkAll?(this.proList.filter((function(t){t.checked=!1})),this.checkAddList=[]):(this.proList.filter((function(t){t.checked=!0})),this.checkAddList=this.proList)},delCheck:function(){if(0!=this.checkNum1){var e=[];this.checkList.filter((function(t){t.checked||e.push(t)})),this.checkList=e}else t.showToast({title:this.language.choosePro.chooseProTips,icon:"none"})},changeTab:function(){this.is_selected=!1,this.title=this.language.choosePro.title,this.axios()},addOk:function(){var e=[];this.proList.filter((function(t){t.checked&&(t.checked=!1,e.push(t))})),0!=e.length?(this.checkList=e,this.proList=[],this.is_selected=!0,this.title=this.language.choosePro.title1,t.setStorageSync("checkProList",this.checkList)):t.showToast({title:this.language.choosePro.chooseProTips,icon:"none"})},qxClick:function(){if(this.is_selected){var t=this.checkList,e=this.checkNum1==t.length;t.filter((function(t){t.checked=!e})),this.checkList=t}else{var c=this.proList,i=this.checkNum==c.length;c.filter((function(t){t.checked=!i})),this.proList=c}},clickModify:function(){this.modifyType=!this.modifyType},checkPro:function(t){if(t.checked=!t.checked,t.checked)this.checkAddList.push(t);else{var e=this.checkAddList.findIndex((function(e){return e.id==t.id}));e>=0&&this.checkAddList.splice(e,1)}},checkPro1:function(t){this.modifyType&&(t.checked=!t.checked)},_search:function(){this.page=1,this.axios()},axios:function(){var e=this,c={module:"app",action:"coupon",app:"product",mch_id:t.getStorageSync("shop_id"),name:this.name,page:this.page};this.$req.post({data:c}).then((function(c){if(200==c.code){var i=JSON.parse(JSON.stringify(e.checkAddList));if(i.filter((function(t){t.checked=!0})),e.checkList.length>0&&(e.checkList.filter((function(t){i.some((function(e){return e.id==t.id}))||(t.checked=!0,i.push(t))})),e.checkAddList=i),c.data.filter((function(t){t.checked=!1,i.filter((function(e){e.id==t.id&&(t.checked=!0)}))})),e.checkProListId){var s=e.checkProListId.split(","),n=[];c.data.filter((function(t){s.filter((function(e){t.id==e&&(t.checked=!0,n.push(t))}))})),e.checkList=n,t.setStorageSync("checkProList",n)}e.proList=c.data}else t.showToast({title:c.message,icon:"none"})}))}}};e.default=c}).call(this,c("543d")["default"])},d531:function(t,e,c){"use strict";c.r(e);var i=c("eb17"),s=c("ec10");for(var n in s)"default"!==n&&function(t){c.d(e,t,(function(){return s[t]}))}(n);c("9ceb");var o,h=c("f0c5"),r=Object(h["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=r.exports},eb17:function(t,e,c){"use strict";var i;c.d(e,"b",(function(){return s})),c.d(e,"c",(function(){return n})),c.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement;t._self._c},n=[]},ec10:function(t,e,c){"use strict";c.r(e);var i=c("c411"),s=c.n(i);for(var n in i)"default"!==n&&function(t){c.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a}},[["5841","common/runtime","common/vendor"]]]);