(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/group/payfor"],{"0e2f":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(r("a34a")),o=i(r("d0f5")),n=i(r("5066")),s=r("b5b5");function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,r,a,o,n,s){try{var i=t[n](s),u=i.value}catch(d){return void r(d)}i.done?e(u):Promise.resolve(u).then(a,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var n=t.apply(e,r);function s(t){u(n,a,o,s,i,"next",t)}function i(t){u(n,a,o,s,i,"throw",t)}s(void 0)}))}}var c=function(){r.e("components/paymodel").then(function(){return resolve(r("9d0c"))}.bind(null,r)).catch(r.oe)},p=function(){r.e("components/choose-pay").then(function(){return resolve(r("6e52"))}.bind(null,r)).catch(r.oe)},l=function(){r.e("components/order/choose-address").then(function(){return resolve(r("bba5"))}.bind(null,r)).catch(r.oe)},f=function(){r.e("components/order/submit-order").then(function(){return resolve(r("d3e7"))}.bind(null,r)).catch(r.oe)},_=function(){Promise.all([r.e("common/vendor"),r.e("components/mpvue-wxparse/src/wxParse")]).then(function(){return resolve(r("e345"))}.bind(null,r)).catch(r.oe)},h={data:function(){return{groupman:"",activity_no:"",jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jiantou2x.png",storeimg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/store.png",pro:"",load:!1,ishide:0,num:1,mch_id:0,mch_name:"",a_type:"",groupres:null,ptcode:"",payTitle:"",is_plugin:!1,is_grade:!1,total_discount:0,grade_rate_amount:0,cs:!1}},mixins:[o.default,n.default],beforeDestroy:function(){this.$store.state.order_id=""},onLoad:function(t){this.getCode(),this.cpId=t.product,this.cpId||(this.cpId=""),t.a_type&&(this.a_type=1),t.canshu&&(this.cs=t.canshu),this.returnR=t.returnR,this.product=JSON.parse(this.cpId),console.log("this.cpId",this.cpId),this.checkCode()},watch:{products_total:function(){this.total=((this.products_total-this.coupon_money-this.reduce_money)*this.discount*this.grade_rate+this.freight).toFixed(2)}},onShow:function(){this.orde_id=this.$store.state.order_id,this.cart_id=this.$store.state.cart_id,this.address_id=this.$store.state.address_id,this.address_id||(this.address_id=this.$store.state.address_id_def),this._axios()},computed:{huiyuan:function(){var t=this.products_total*this.grade_rate;return this.formatDecimal(t,2)},membership_price:function(){var t=Math.round(100*(parseFloat(this.products_total)-parseFloat(this.huiyuan)))/100;return this.formatDecimal(t,2)}},methods:{_wallet_pay:function(){var e=this;return d(a.default.mark((function r(){var o,n,i,u,d,c,p;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o={module:"app",action:"pay",app:"wallet_pay",m:"wallet_pay",type:"wallet_pay",orde_id:e.order_id,sNo:e.sNo,pro_id:e.product.pid,man_num:e.product.groupnum,grade_rate:e.grade_rate,page:e.product.frompage,payment_money:e.total},"cantuan"==e.product.frompage&&(o.ptcode=e.product.ptcode),r.next=4,e.$req.post({data:o});case 4:if(n=r.sent,i=n.status,u=n.err,d=n.code,t.hideLoading(),0!==i&&0!==d){r.next=12;break}return t.showToast({title:u,duration:1e3,icon:"none"}),r.abrupt("return",!1);case 12:return t.showToast({title:e.language.groupPayfor.payOk,duration:1e3,icon:"none"}),r.next=15,(0,s.later)(1e3);case 15:"cantuan"==e.product.frompage?(c="/pagesA/group/group_end?sNo="+e.sNo+"&activity_no="+e.product.activity_no+"&returnR=2&otype=cantuan&cc=3",1==e.a_type&&(c+="&a_type=1"),t.navigateBack({url:c})):(p="/pagesA/group/group_end?sNo="+e.sNo+"&activity_no="+e.product.activity_no+"&returnR=1&cc=4",1==e.a_type&&(p+="&a_type=1"),t.redirectTo({url:p}));case 16:case"end":return r.stop()}}),r)})))()},_getPayOrderInfo:function(){var e=this;return d(a.default.mark((function r(){var o,n,s,i,u,d,c,p,l,f;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o="groupbuy",1==e.a_type&&(o="pthd_groupbuy"),n={module:"app",action:o,m:"createOrder",pro_id:e.product.pid,num:e.product.num,man_num:e.product.groupnum,activity_no:e.product.activity_no,platform_activities_id:e.product.platform_activities_id,frompage:e.product.frompage,sizeid:e.product.cid,address_id:e.address_id,type:"PT"},"cantuan"===e.product.frompage?n.ptcode=e.product.ptcode:n.ptcode="",s=e.getPayTypeAndStoreType(),i=s.pay_type,n.pay_type=i,r.next=8,e.$req.post({data:n});case 8:if(u=r.sent,d=u.order,c=u.order_id,p=u.total,l=u.code,f=u.msg,500!==l){r.next=17;break}return t.showToast({title:f,duration:1500,icon:"none"}),r.abrupt("return",Promise.reject());case 17:e.sNo=d,e.order_id=c,e.order_pay_info=JSON.stringify({order_id:c,sNo:d,total:p});case 20:case"end":return r.stop()}}),r)})))()},order_pay:function(){var e=this;return d(a.default.mark((function r(){return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.address_id){r.next=2;break}return r.abrupt("return",t.showToast({title:e.language.groupPayfor.setAddsTips,icon:"none"}));case 2:if(!e.fastTap){r.next=4;break}return r.abrupt("return",!1);case 4:if(e.fastTap=!0,e._checkSelectPayWay(),!(Number(e.pro.have)>=Number(e.groupres.groupnum))){r.next=9;break}return t.showToast({title:e.language.groupPayfor.goupTips1+e.groupres.groupnum+e.language.groupPayfor.goupTips2,duration:1e3,icon:"none"}),r.abrupt("return",!1);case 9:t.showLoading({title:e.language.showLoading.waiting}),wx.requestSubscribeMessage({tmplIds:e.tmplIds,complete:function(){var r=d(a.default.mark((function r(){return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.hideLoading(),!e.useWallet){r.next=10;break}if(0!=e.password_status){r.next=5;break}return t.showModal({title:e.language.showModal.hint,content:e.language.showModal.mima,confirmText:e.language.showModal.confirm,cancelText:e.language.showModal.cancel,showCancel:!0,success:function(r){e.fastTap=!0,r.confirm&&t.navigateTo({url:"/pagesB/setUp/payment"})}}),r.abrupt("return",!1);case 5:return r.next=7,e._getPayOrderInfo();case 7:e._orderUseWalletPay(),r.next=14;break;case 10:return t.showLoading({title:e.language.showLoading.axiospaying,mask:!0}),r.next=13,e._getPayOrderInfo();case 13:e._notUserWalletPay();case 14:case"end":return r.stop()}}),r)})));function o(){return r.apply(this,arguments)}return o}()});case 11:case"end":return r.stop()}}),r)})))()},_axios:function(){var e=this,r="groupbuy";1==this.a_type&&(r="pthd_groupbuy");var a={module:"app",action:r,m:"payfor",address_id:this.address_id,price:this.total},o=JSON.parse(this.cpId);a=Object.assign(a,o),this.$req.post({data:a}).then((function(r){if(0===r.status||r.hasOwnProperty("code")&&200!==r.code)return e.load=!0,t.showToast({title:r.msg,duration:1500,icon:"none"}),setTimeout((function(){e.navBack()}),1500),!1;var a=r.grade_rate;r.products_total;e.adds_f=r.is_add,e.address=r.buymsg,e.address&&e.address.id&&(e.address_id=e.address.id),e.groupres=r.groupres,e.mch_name=r.mch_data.name,e.mch_id=r.mch_data.id,e.payment=r.payment,e.pro=r.proattr,e.payTitle=e.pro.pro_name,console.log("this.pro"),console.log(e.pro),""==e.$store.state.address_id_def&&(console.log("默认赋值"),e.$store.state.address_id_def=r.buymsg.id),e.grade_rate=r.grade_rate,e.user_money=Number.parseFloat(r.money),e.user_name=r.user_name,e.product=o,e.num=o.num,e.price=(o.price*o.num).toFixed(2),e.groupman=o.groupnum,e.password_status=r.password_status,e.products_total=e.price,e.is_grade=a>0&&a<1,e.freightt=parseFloat(r.yunfei).toFixed(2),e.freight=r.yunfei,e.load=!0,e.show_pay_way()}))},formatDecimal:function(t,e){t=t.toString();var r=t.indexOf(".");return t=-1!==r?t.substring(0,e+r+1):t.substring(0),parseFloat(t).toFixed(e)}},components:{wxParse:_,paymodel:c,choosePay:p,chooseAddress:l,submitOrder:f}};e.default=h}).call(this,r("543d")["default"])},5864:function(t,e,r){"use strict";var a;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement;t._self._c},n=[]},"981e":function(t,e,r){"use strict";r.r(e);var a=r("0e2f"),o=r.n(a);for(var n in a)"default"!==n&&function(t){r.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},c49c:function(t,e,r){"use strict";r.r(e);var a=r("5864"),o=r("981e");for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);r("e844");var s,i=r("f0c5"),u=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"2f818e8b",null,!1,a["a"],s);e["default"]=u.exports},d8cc:function(t,e,r){},e844:function(t,e,r){"use strict";var a=r("d8cc"),o=r.n(a);o.a},f642:function(t,e,r){"use strict";(function(t){r("1fd4");a(r("66fd"));var e=a(r("c49c"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("543d")["createPage"])}},[["f642","common/runtime","common/vendor"]]]);