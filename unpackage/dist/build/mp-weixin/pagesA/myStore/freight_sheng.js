(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/myStore/freight_sheng"],{"574c":function(t,i,e){},"76a8":function(t,i,e){"use strict";e.r(i);var n=e("ccaa"),a=e("c353");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("ce8c");var o,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"1f3f9fda",null,!1,n["a"],o);i["default"]=r.exports},"7f85":function(t,i,e){"use strict";(function(t){e("1fd4");n(e("66fd"));var i=n(e("76a8"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])},b6bd:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"选择省份",chooseImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/chooseMe.png",area_list:[],shop_id:"",freight_id:"",freight_data:{},sel_city:[]}},computed:{checkAll:function(){var t=this.area_list.some((function(t){return 0==t.status}));return!t},checkObj:function(){var t=[],i=[];return this.area_list.filter((function(e){e.status&&(t.push(e.G_CName),i.push(e.GroupID))})),{name:t.join(),id:i.join()}}},onLoad:function(i){if(i.freight_id&&(this.freight_id=i.freight_id),t.getStorageSync("freight_data")){var e=t.getStorageSync("freight_data"),n={},a=[];e.filter((function(t,i){n[i]={one:t.freight,name:t.freight_sheng.name},a.push(t.freight_sheng.id)})),this.freight_data=n,this.sel_city=a}},onShow:function(){this.shop_id=t.getStorageSync("shop_id")?t.getStorageSync("shop_id"):this.$store.state.shop_id,this.axios()},methods:{changeLoginStatus:function(){this.axios()},saveOk:function(){this.checkObj.id?(t.setStorageSync("freight_sheng",this.checkObj),t.navigateBack({delta:1})):t.showToast({title:this.language.freight_sheng.chooseTips,icon:"none"})},clickAll:function(){var t=!this.checkAll;this.area_list.filter((function(i){i.status=t}))},clickMe:function(t){t.status=!t.status},toUrl:function(i){t.navigateTo({url:i})},axios:function(){var i=this,e={module:"app",action:"mch",m:"get_sheng",shop_id:this.shop_id,data:JSON.stringify(this.freight_data),sel_city:JSON.stringify(this.sel_city)};this.$req.post({data:e}).then((function(e){var n=e.code,a=e.data,s=e.message;if(200==n){if(a&&a.length>0){var o=i.freight_id.split(",");a.filter((function(t){t.status=!1,o.filter((function(i){i==t.GroupID&&(t.status=!0)}))}))}i.area_list=a}else t.showToast({title:s,icon:"none"})}))}}};i.default=e}).call(this,e("543d")["default"])},c353:function(t,i,e){"use strict";e.r(i);var n=e("b6bd"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},ccaa:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement;t._self._c},s=[]},ce8c:function(t,i,e){"use strict";var n=e("574c"),a=e.n(n);a.a}},[["7f85","common/runtime","common/vendor"]]]);