(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/bidding/bidding_record"],{"2cad":function(n,t,e){"use strict";(function(n){e("1fd4");i(e("66fd"));var t=i(e("cbc7"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"31e5":function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}));var a=function(){var n=this,t=n.$createElement;n._self._c},r=[]},"49fd":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("a34a"));e("2f62");function a(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,i,a,r,o){try{var u=n[r](o),c=u.value}catch(d){return void e(d)}u.done?t(c):Promise.resolve(c).then(i,a)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var o=n.apply(t,e);function u(n){r(o,i,a,u,c,"next",n)}function c(n){r(o,i,a,u,c,"throw",n)}u(void 0)}))}}var u={data:function(){return{fastTap:!0,loadImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/5-121204193R7.gif",emptyImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/empyimg92x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",head:!0,order:"",bindding_id:"",load:!0}},onLoad:function(t){this.bindding_id=t.bindding_id,n.setNavigationBarTitle({title:this.language.bidding_record.title}),this._axios()},methods:{_axios:function(){var n=this;return o(i.default.mark((function t(){var e;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e={module:"app",action:"auction",m:"record",id:n.bindding_id},n.$req.post({data:e}).then((function(t){var e=t.res;if(n.load=!1,e.length>0)for(var i in e)e[i].grade=0===i?"领先":"出局";n.order=e}));case 2:case"end":return t.stop()}}),t)})))()},_back:function(){this.flag=!1,n.navigateBack({delta:1})}}};t.default=u}).call(this,e("543d")["default"])},9300:function(n,t,e){},cbc7:function(n,t,e){"use strict";e.r(t);var i=e("31e5"),a=e("fc8e");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("ff4b");var o,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"59b4eced",null,!1,i["a"],o);t["default"]=c.exports},fc8e:function(n,t,e){"use strict";e.r(t);var i=e("49fd"),a=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=a.a},ff4b:function(n,t,e){"use strict";var i=e("9300"),a=e.n(i);a.a}},[["2cad","common/runtime","common/vendor"]]]);