(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/afterSale/afterDetail"],{"5c39":function(n,t,e){"use strict";var o=e("d116"),i=e.n(o);i.a},7852:function(n,t,e){"use strict";(function(n){e("1fd4");o(e("66fd"));var t=o(e("bdd4"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"8b32":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){e.e("components/header").then(function(){return resolve(e("3ba9"))}.bind(null,e)).catch(e.oe)},i={data:function(){return{title:"售后详情",id:"",pid:"",address:"",name:"",phone:"",info:{},record:[],send_info:[],return_info:[],gdInnerImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/gd_inner.png",fxBottomImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/fx_bottom.png"}},onLoad:function(n){this.id=n.id,this.pid=n.pid},onShow:function(){var n=this;this.$nextTick((function(){n._axios()}))},methods:{_axios:function(){var t=this,e={module:"app",action:"order",app:"Returndetail",id:this.id,pid:this.pid};this.$req.post({data:e}).then((function(e){200==e.code?(t.info=e.info,t.return_info=e.return_info,t.send_info=e.send_info,t.store_info=e.store_info,t.record=e.record,t.address=t.store_info.address,t.name=t.store_info.name,t.phone=t.store_info.phone):n.showToast({title:e.message,duration:1500,icon:"none"})}))},_edit_after:function(){n.navigateTo({url:"../../pagesA/returnGoods/refund?refund_type=3&order_details_id="+this.id+"order_anking=1&r_status=3&rType=3"})}},components:{Heads:o}};t.default=i}).call(this,e("543d")["default"])},bdd4:function(n,t,e){"use strict";e.r(t);var o=e("d0a0"),i=e("cf4e");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("5c39");var a,d=e("f0c5"),u=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"2b75035c",null,!1,o["a"],a);t["default"]=u.exports},cf4e:function(n,t,e){"use strict";e.r(t);var o=e("8b32"),i=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);t["default"]=i.a},d0a0:function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return o}));var i=function(){var n=this,t=n.$createElement;n._self._c},r=[]},d116:function(n,t,e){}},[["7852","common/runtime","common/vendor"]]]);