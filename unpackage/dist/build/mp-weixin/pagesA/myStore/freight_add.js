(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/myStore/freight_add"],{2474:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement;t._self._c},s=[]},"311b9":function(t,i,e){"use strict";e.r(i);var a=e("2474"),n=e("576b");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("8cd0");var o,r=e("f0c5"),h=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"4934ffb6",null,!1,a["a"],o);i["default"]=h.exports},"576b":function(t,i,e){"use strict";e.r(i);var a=e("97e4"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"8cd0":function(t,i,e){"use strict";var a=e("b22d"),n=e.n(a);n.a},"97e4":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"添加模板",type:"",jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jiantou.png",xuanzehei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/2.png",xuanzehui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehui2x.png",shanchudizhi:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/shanchudizhi2x.png",freight_top:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/freight_top.png",freight_bottom:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/freight_bottom.png",freight_del:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/freight_del.png",formData:{name:"",rules:[],is_default:!1},shop_id:"",freight_id:"",clickFlag:!0}},onLoad:function(i){t.removeStorageSync("freight_rules"),this.type=i.type,i.id&&(this.freight_id=i.id)},onShow:function(){if("add"==this.type?this.title=this.language.freight_add.title:"edit"==this.type?this.title=this.language.freight_add.title1:"see"==this.type&&(this.title=this.language.freight_add.title2),this.shop_id=t.getStorageSync("shop_id")?t.getStorageSync("shop_id"):this.$store.state.shop_id,t.getStorageSync("freight_rules")){var i=t.getStorageSync("freight_rules"),e=this.formData.rules.some((function(t){return t.freight_sheng.id==i.freight_sheng.id})),a=JSON.parse(JSON.stringify(this.formData.rules));e||a.push(i),a.filter((function(t){t.status=!1})),this.formData.rules=a,t.removeStorageSync("freight_rules")}else this.freight_id&&this.axios()},methods:{changeLoginStatus:function(){this.freight_id&&this.axios()},axios:function(){var i=this,e={module:"app",action:"mch",m:"freight_modify_show",shop_id:this.shop_id,id:this.freight_id};this.$req.post({data:e}).then((function(e){var a=e.code,n=e.data,s=e.message;if(200==a){i.formData.name=n.name;var o=[],r=n.list||n.freight;r.filter((function(t,i){o.push({freight:t.freight,freight_sheng:{name:t.name,id:n.sel_city_arr[i]},status:!1})})),i.formData.rules=o,i.formData.is_default=1==n.is_default}else t.showToast({title:s,icon:"none"})}))},delC:function(){var i=this;if(this.clickFlag){this.clickFlag=!1;var e={module:"app",action:"mch",m:"freight_del",shop_id:this.shop_id,id:this.freight_id};this.$req.post({data:e}).then((function(e){var a=e.code,n=e.message;t.showToast({title:n,icon:"none"}),200==a?setTimeout((function(){t.navigateBack({delta:1})}),1e3):i.clickFlag=!0})).catch((function(t){i.clickFlag=!0}))}},checkval:function(t){var i=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;return!!i.test(t)},saveOk:function(){var i=this;if(this.formData.name)if(this.checkval(this.formData.name))if(0!=this.formData.rules.length){var e={};this.formData.rules.filter((function(t,i){e[i]={one:t.freight,name:t.freight_sheng.name}}));var a={module:"app",action:"mch",m:"freight_add",shop_id:this.shop_id,name:this.formData.name,hidden_freight:JSON.stringify(e),is_default:this.formData.is_default?1:0};"edit"==this.type&&(a.m="freight_modify",a.id=this.freight_id),this.clickFlag&&(this.clickFlag=!1,this.$req.post({data:a}).then((function(e){var a=e.code,n=e.message;t.showToast({title:n,icon:"none"}),200==a?setTimeout((function(){t.navigateBack({delta:1})}),1e3):i.clickFlag=!0})).catch((function(t){i.clickFlag=!0})))}else t.showToast({title:this.language.freight_add.ruleTips,icon:"none"});else t.showToast({title:this.language.freight_add.hasSpecial,icon:"none"});else t.showToast({title:this.language.freight_add.nameTips,icon:"none"})},click_del:function(t){this.formData.rules.splice(t,1)},click_bottom:function(t){t.status=!t.status},_default:function(){"see"!=this.type&&(this.formData.is_default=!this.formData.is_default)},toUrl:function(i){t.setStorageSync("freight_data",this.formData.rules),t.navigateTo({url:i})}}};i.default=e}).call(this,e("543d")["default"])},b22d:function(t,i,e){},d3d7:function(t,i,e){"use strict";(function(t){e("1fd4");a(e("66fd"));var i=a(e("311b9"));function a(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])}},[["d3d7","common/runtime","common/vendor"]]]);