(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/bidding/bidding_order"],{"19c6":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(o("d0f5"));function i(t){return t&&t.__esModule?t:{default:t}}var n=function(){Promise.all([o.e("common/vendor"),o.e("components/mpvue-wxparse/src/wxParse")]).then(function(){return resolve(o("e345"))}.bind(null,o)).catch(o.oe)},r=function(){o.e("components/paymodel").then(function(){return resolve(o("9d0c"))}.bind(null,o)).catch(o.oe)},a=function(){o.e("components/choose-pay").then(function(){return resolve(o("6e52"))}.bind(null,o)).catch(o.oe)},d=function(){o.e("components/order/choose-address").then(function(){return resolve(o("bba5"))}.bind(null,o)).catch(o.oe)},u=function(){o.e("components/order/submit-order").then(function(){return resolve(o("d3e7"))}.bind(null,o)).catch(o.oe)},c=function(){o.e("components/skeleton/orderDetailsrMock").then(function(){return resolve(o("36a7"))}.bind(null,o)).catch(o.oe)},h={data:function(){return{payment:"",isDistribution:!1,jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/jiantou2x.png",load:!1,returnR:0,cpId:"",title:"确认订单信息",is_subtraction:1,reduce_name:"",pro:[],storeImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/store.png",quan_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/xuanzehei2x.png",quan_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/xuanzehui2x.png",ishide:0,sNo:"",name:"",is_distribution:0,cart_id:"",firstFlag:!0,tmplIds:["2KrrJchj92YRKhZZ0SSHz76dmrT0cLBJ2Wfe0","ncs3u3Bmmi0jW7EXAik4KQvxF3JxbaulWNwbLXDto","CZAPo_TqOOeC5K7XYvBeB_LXmyXKIhXkZROArNZDwQ8"],pay_name:"jp",couponList:[],couponList1:[],couponIndex:-1,mchCouponIndex:[],canshu:!0,is_plugin:!1,is_grade:!1,total_discount:0,grade_rate_amount:0}},mixins:[s.default],onLoad:function(e){this.getCode(),this.canshu=t.getStorageSync("canshu"),this.$store.state.address_id=this.$store.state.address_id_def,this.cpId=e.product,this.returnR=e.returnR,1!=e.buy_again&&"true"!=e.buy_again||(this.buy_again=!0),this.cpId&&t.setStorageSync("goodsInfo",this.cpId),e.canshu&&t.setStorageSync("canshu",e.canshu),1==e.isDistribution&&"false"!=e.isDistribution&&(this.isDistribution=!0),this.order_no=e.order_no,this.pay_name=this.$store.state.pay_lx,this.bind_id=this.$store.state.bindding_num,this.checkCode(),this._axios()},computed:{sub_total:function(){return(Number.parseFloat(this.freight)+Number.parseFloat(this.products_total)).toFixed(2)},membership_price:function(){var t=Number.parseFloat(this.freight)+Number.parseFloat(this.products_total);return(t-this.grade_rate_amount-Number.parseFloat(this.freight)).toFixed(2)}},onShow:function(){this.hc_address_id!=this.$store.state.address_id&&(this.hc_address_id=this.address_id=this.$store.state.address_id),t.getStorageSync("store_choose")&&t.removeStorageSync("store_choose"),this.shop_address_id=t.getStorageSync("shop_address_id"),this._axios("onshow"),this.LaiKeTuiCommon.getWXTmplIds(this),this.fastTap=!1},onUnload:function(){},methods:{sChange:function(t){if(this.is_express=t,t)this.shop_list={id:0},this._axios("onshow");else{this.freight=this.freightt=0;for(var e=0;e<this.pro.length;e++)this.pro[e].shop_subtotal=this.pro[e].shop_subtotal-this.pro[e].freight_price,this.pro[e].freight_price=0}},_axios:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=t.getStorageSync("goodsInfo"),i=null;i={module:"app",action:"order",auction_id:this.bind_id,product_type:"JP",app:"Settlement",coupon_id:this.coupon_id?this.coupon_id:"0",address_id:this.address_id},this.cpId&&(i.product=s||this.cpId,i.cart_id=""),this.is_express||(i.shop_address_id=this.shop_address_id),this.$req.post({data:i}).then((function(s){if(e.canshu=!1,0===s.status||s.hasOwnProperty("code")&&200!==s.code)return e.load=!0,t.showToast({title:s.msg,duration:1500,icon:"none"}),setTimeout((function(){e.navBack()}),1500),!1;var i=s.address,n=s.coupon_id,r=s.payment,a=s.freight,d=s.password_status,u=s.products,c=s.products_total,h=s.total,_=s.user_money,l=s.enterless,p=s.time_id,m=s.is_distribution,f=s.discount,g=s.grade_rate,b=s.grade_rate_amount;e.total=Number.parseFloat(h).toFixed(2),e.time_id=p,e.payment=r,u&&u.length>0&&(e.pro=u[0],e.jp_imgurl=s.imgurl,e.payTitle=e.jp_name=s.a_title,e.total=s.products_total),e.user_money=Number.parseFloat(_),e.password_status=d,e.handleOrderAddress(i,s.shop_list,s.shop_status),"onshow"!==o?e.coupon_id=n:t.getStorageSync("chooseAddress")&&(e.address=t.getStorageSync("chooseAddress")),e.enterless=l,e.is_distribution=m,e.discount=f||1,e.is_grade=g>0&&g<1,e.is_grade?(e.grade_rate_amount=b,0==b&&(e.is_grade=!1)):e.grade_rate_amount=0,e.total_discount=e.grade_rate_amount,e.total=Number.parseFloat(h),e.reduce_name=s.reduce_name,e.is_subtraction=s.is_subtraction,e.products_total=c,e.freightt=parseFloat(a).toFixed(2),e.freight=a,e.show_pay_way(),t.setStorageSync("cart_id",e.cart_id),e.load=!0})).catch((function(t){e.load=!0}))}},components:{wxParse:n,paymodel:r,choosePay:a,chooseAddress:d,submitOrder:u,mock:c}};e.default=h}).call(this,o("543d")["default"])},"44c7":function(t,e,o){"use strict";var s;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return s}));var i=function(){var t=this,e=t.$createElement;t._self._c},n=[]},5904:function(t,e,o){"use strict";(function(t){o("1fd4");s(o("66fd"));var e=s(o("f512"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},8701:function(t,e,o){},"8d1b":function(t,e,o){"use strict";var s=o("8701"),i=o.n(s);i.a},eaa6:function(t,e,o){"use strict";o.r(e);var s=o("19c6"),i=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,(function(){return s[t]}))}(n);e["default"]=i.a},f512:function(t,e,o){"use strict";o.r(e);var s=o("44c7"),i=o("eaa6");for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);o("8d1b");var r,a=o("f0c5"),d=Object(a["a"])(i["default"],s["b"],s["c"],!1,null,"9ae4e5e4",null,!1,s["a"],r);e["default"]=d.exports}},[["5904","common/runtime","common/vendor"]]]);