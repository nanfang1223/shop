(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/bidding/bidding_detailed"],{"04cc":function(i,t,e){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(e("a34a")),a=e("2f62"),s=r(e("c612")),o=e("67ca");function r(i){return i&&i.__esModule?i:{default:i}}function d(i,t,e,n,a,s,o){try{var r=i[s](o),d=r.value}catch(c){return void e(c)}r.done?t(d):Promise.resolve(d).then(n,a)}function c(i){return function(){var t=this,e=arguments;return new Promise((function(n,a){var s=i.apply(t,e);function o(i){d(s,n,a,o,r,"next",i)}function r(i){d(s,n,a,o,r,"throw",i)}o(void 0)}))}}function u(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.push.apply(e,n)}return e}function _(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach((function(t){l(i,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}function l(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}var h=function(){Promise.all([e.e("common/vendor"),e.e("components/mpvue-wxparse/src/wxParse")]).then(function(){return resolve(e("e345"))}.bind(null,e)).catch(e.oe)},g=function(){e.e("components/paymodel").then(function(){return resolve(e("9d0c"))}.bind(null,e)).catch(e.oe)},f={data:function(){return{open_wxpay:!1,open_alipay:!1,payment:"",close:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/close_bb.png",saves:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/save.png",fastTap:!0,h5_url:"",shareMask_H5:!1,loadImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/5-121204193R7.gif",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",fx_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/fx.png",wx_person:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/wechat.png",erm_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/ewmIcon.png",list_wx:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/wechat.png",list_bd:i.getStorageSync("endurl")+"images/icon/baiduzhifu2x.png",list_yue:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jp_yue.png",list_zhifubao:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/zhifubaozhifu2x.png",list_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehui2x.png",list_xuan:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehei2x.png",list_time:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/naz.png",list_right:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jiantouhei2x.png",list_end:i.getStorageSync("endurl")+"images/icon/end.png",jp_share:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jp_share.png",jp_liucheng:i.getStorageSync("endurl")+"images/icon/jp_liucheng.png",jp_invalid:i.getStorageSync("endurl")+"images/icon/jp_invalid.png",is_invalid:!1,h5_content:"",code:"",myappid:"",head:!0,status_i:!1,bid_pup:!1,bid_money:!1,wx_flag:!1,ye_flag:!0,zfb_flag:!0,daidu_flag:!0,load:!0,access_id:"",order:"",res_ove:"",res_my:"",bindding_id:"",head_ids:"",bind_st:"",bind_pro:"",state:"",money:"",passwd_status:"",digits:["","","","","",""],msg:"",msgLength:0,bid_value:"",money_s:"",pay_display:!1,password_status:"",password_display:!1,focus:!0,sNos:"",titles:"",totals:"",shareMask:!1,saveEWM:!1,shares:{},shareContent:"一起来用豪眼光吧！",shareHref:"",sharehrefTitle:"一起用豪眼光吧1",sharehrefDes:"一起来用豪眼光吧2",pic:"",logo:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/lktlogo.png",startTime:"00月00日 00：00",endTime:"00月00日 00：00",shop_list:{},form_type:-1,from_mark:0,overtime:{day:0,hour:0,minute:0,second:0},stop3:"",formMy_old:0,bid_num:0,threeRecords:[],ewmImg:"",erm_pyq_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/fdc.png",wx_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/wechat.png",copy_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/copyIcon.png",cat:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/2019041632x.png",emptyImg:"https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1548145298728.png",is_user:"",jp_status:"",bid:"",bid_str:"",clickFlag:!1,isH5:0,isfx:"",have_jp:!0,qd_flag:!0}},components:{wxParse:h,paymodel:g},onLoad:function(t){var e=this;this.setLang(),this.shareContent=this.language.showModal.shareContent;this.isLogin((function(){})),t.bid?(this.bid=JSON.parse(t.bid),this.isfx=this.bid.isfx,this.form_type=this.bid.type,this.from_mark=this.bid.type,this.bindding_id=this.bid.bindding_id):(this.isfx=t.isfx,this.form_type=t.type,this.from_mark=t.mark,this.bindding_id=this.$store.state.bindding_num),this.bindding_num(this.bindding_id),this.bind_st=this.$store.state.bind_status,this.bind_pro=this.$store.state.bind_promise,this.head_ids=this.$store.state.head_id,this.access_id=i.getStorageSync("access_id")?i.getStorageSync("access_id"):this.$store.state.access_id,i.getProvider({service:"payment",success:function(i){e.providerList=i.provider.map((function(i){switch(i){case"alipay":return{name:"支付宝",id:i,loading:!1};case"wxpay":return{name:"微信",id:i,loading:!1}}}))},fail:function(i){}})},onUnload:function(){clearTimeout(this.stop3),clearTimeout(this.stop)},computed:{halfWidth:function(){var t=i.getStorageSync("data_height")?i.getStorageSync("data_height"):this.$store.state.data_height,e=parseInt(t);e=0;var n=2*e;return i.upx2px(n)+"px"}},watch:{msg:function(i){this.msgLength=i.length},coupon_name:function(){this.changeValue()},value:function(i,t){this.changeValue()},price1:function(i,t){var e=this;this.$nextTick((function(){e.price1=e.products_total+e.freight-e.coupon_name-e.reduce_money-e.value,e.price1=Number(e.price1).toFixed(2)}))}},onShow:function(){i.setNavigationBarTitle({title:this.language.bidding_detailed.title}),this.qd_flag=!0,this.bindding_id||(this.bindding_id=this.$store.state.bindding_num),this.bind_st=this.$store.state.bind_status,this.bind_pro=this.$store.state.bind_promise,this.head_ids=this.$store.state.head_id,this.access_id=i.getStorageSync("access_id")?i.getStorageSync("access_id"):this.$store.state.access_id,this.bid.isfx=!0,this.bid_str=JSON.stringify(this.bid),this.shareHref=i.getStorageSync("h5_url")+"pagesA/bidding/bidding_detailed?bid="+encodeURIComponent(this.bid_str),this.h5_url=this.shareHref,this._axios()},onShareAppMessage:function(i){return i.from,{title:this.order.title,path:"/pagesA/bidding/bidding_detailed?bid="+this.bid_str,imageUrl:this.order.imgurl,bgImgUrl:this.order.imgurl,success:function(i){}}},methods:_({copy_url:function(){this.shareMask_H5=!0,this.h5_url=this.shareHref},copyH5Url:function(){jQuery("#h5_input input").select(),document.execCommand("Copy")},_cancel1:function(){this.bid_pup=!1,this.qd_flag=!0},changeLoginStatus:function(){this._axios()},_closeAllMask:function(){this.shareMask=!1,this.saveEWM=!1},_downEWM:function(){var t=this;i.downloadFile({url:this.ewmImg,success:function(e){var n=e.tempFilePath;i.saveImageToPhotosAlbum({filePath:n,success:function(){i.showToast({title:t.language.bidding_detailed.saveImgOk,duration:1500,icon:"none"}),t.shareMask=!1,t.saveEWM=!1},fail:function(){i.showToast({title:t.language.bidding_detailed.saveImgFail,duration:1500,icon:"none"})}})},fail:function(){i.showToast({title:t.language.bidding_detailed.saveImgFail,duration:1500,icon:"none"})}})},_shareApp:function(t){var e=this,n="";1==t?n="WXSenceTimeline":2==t&&(n="WXSceneSession"),i.share({title:this.order.title,summary:e.shareContent,provider:"weixin",scene:n,type:0,href:this.shareHref,imageUrl:this.order.imgurl,success:function(i){e.saveEWM=!1},fail:function(i){}})},saveImg:function(){var t=this;i.saveImageToPhotosAlbum({filePath:t.ewmImg,success:function(){i.showToast({title:t.language.bidding_detailed.saveImgOk,duration:1500,icon:"none"})}})},showShareMask:function(){var i=this;this.isLogin((function(){(0,o.lkt_showShareMask)(i)}))},closeShareMask:function(){this.shareMask=!1},showSaveEWM:function(i){(0,o.lkt_showSaveEWM)(i,this)},copyUrl:function(){var t=this;getCurrentPages();i.setClipboardData({data:t.shareHref,success:function(){i.showToast({title:t.language.bidding_detailed.copyOk,duration:1500,icon:"none"})}})},_password_status:function(){i.navigateTo({url:"/pagesB/setUp/payment"}),this.password_display=!1},focust:function(){this.focus=!0},_cancel:function(){var i=this;i.pay_display=!1,this.qd_flag=!0,i.msg=""},isshow:function(){var i=this;1==i.payment.mini_wechat&&(i.open_wxpay=!0)},_confirm:function(t){this.msg=t;var e=this;if(1==e.wx_flag&&0==e.ye_flag?e.type="wallet_pay":e.type="wx",this.qd_flag=!0,6==this.msg.length){var n={module:"app",action:"auction",m:"go_pay",password:this.msg,id:this.bindding_id,access_id:this.access_id,type:e.type};this.$req.post({data:n}).then((function(t){if(2==t.status)return i.showToast({title:e.language.bidding_detailed.paidSuccess,duration:1e3,icon:"none"}),e.pay_display=!1,i.redirectTo({url:"./bidding_detailed_Two?mark=1&detail_one=1"}),!1;110==t.code&&(e.msg="",i.showToast({title:e.language.bidding_detailed.mimaFail,duration:1e3,icon:"none"}),e.fastTap=!0)}))}else i.showToast({title:e.language.bidding_detailed.mimaTips,duration:1e3,icon:"none"})},_navigateTo:function(t,e){0==t?i.navigateTo({url:"order?order_id="+e+"&showPay=true"}):i.navigateTo({url:"order?order_id="+e}),this.flag=!1},_back:function(){this.flag=!1,1==this.isfx?i.switchTab({url:"../../pages/tabBar/home"}):i.redirectTo({url:"../../pagesA/bidding/bidding"})},_back1:function(){i.showToast({title:this.language.laiketuiCommon.noLogin,icon:"none",duration:1500}),setTimeout((function(){i.navigateTo({url:"../../pages/login/login?landing_code=1"})}),1e3)},toUrl:function(){var i=this,t=window.location.href,e={type:"jsapi_wechat",access_id:this.access_id,app:"get_config",module:"app",action:"order",url:t};this.$req.post({data:e}).then((function(t){var e=t.data.config.appid;i.myappid=e;var n=t.data.url,a="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+e+"&redirect_uri="+n+"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";window.location.href=a}))},_state:function(i,t,e){var n=this;if(n.is_invalid)return!1;this.isLogin((function(){if(1==n.is_user)if(1==i){var a=parseFloat(t),s=parseFloat(e);n.money_s=a+s,n.bid_pup=!0}else if(1==n.from_mark){a=parseFloat(t),s=parseFloat(e);n.money_s=a+s,n.bid_pup=!0}}))},_li:function(t,e){var n=this,a=(e=parseFloat(e),parseFloat(n.money));1==t?(n.wx_flag=!1,n.ye_flag=!0,n.zfb_flag=!0,n.daidu_flag=!0):2==t?e>a?(n.wx_flag=!1,n.ye_flag=!0,n.zfb_flag=!0,n.daidu_flag=!0,i.showToast({title:n.language.bidding_detailed.nobalance,duration:1e3,icon:"none"})):(n.wx_flag=!0,n.ye_flag=!1,n.zfb_flag=!0,n.daidu_flag=!0):3==t?(n.wx_flag=!0,n.ye_flag=!0,n.zfb_flag=!1,n.daidu_flag=!0):(n.wx_flag=!0,n.ye_flag=!0,n.zfb_flag=!0,n.daidu_flag=!1)},getOrderInfo:function(t){var e=this,n=this,a={access_id:this.access_id,order_list:n.order_list,module:"app",action:"pay",sNo:n.sNos,title:n.titles,type:t,total:n.totals};"wx"==t?a.type="app_wechat":"ali"==t&&(a.type="alipay");var s=n.LaiKeTuiCommon.getMPAliAuthCode();return s.then((function(n){return new Promise((function(n){i.request({url:i.getStorageSync("url"),data:a,success:function(a){200==a.statusCode?(n(a),"ali"==t&&(e.h5_content=a.data)):void 0!=a.data.code&&200!=a.data.code&&i.showToast({title:a.data.message,duration:1500,icon:"none"})},fail:function(i){n(i)}})}))}))},weixinPay:function(){(0,o.lkt_weixinPay)(this)},pay_wx:function(i){var t=this;return c(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:(0,o.lkt_pay_wx)(i,t);case 1:case"end":return e.stop()}}),e)})))()},_payFail:function(){(0,o.lkt_payFail)(this)},_click:function(){this.qd_flag&&(this.qd_flag=!1,(0,o.lkt_click)(this))},_bid_record:function(){i.navigateTo({url:"bidding_record"})},_axios:function(){var t=this,e={module:"app",action:"auction",id:this.bindding_id,isfx:this.isfx};(1==this.form_type||0==this.form_type||1==this.from_mark)&&(e.m="detail"),this.$req.post({data:e}).then((function(e){if(109==e.code)t.have_jp=!1,t.load=!1;else{if(!e.res)return!1;if(t.jp_status=e.res[0].status,t.is_user=e.is_user,!t.isfx||1==e.res[0].is_show&&1!=e.res[0].recycle)if(0==t.form_type&&1==t.jp_status)t.bid.type=1,t.bid_str=JSON.stringify(t.bid),i.redirectTo({url:"bidding_detailed?bid="+t.bid_str});else{if(2==t.jp_status||3==t.jp_status)return setTimeout((function(){t.isfx?i.redirectTo({url:"./bidding_detailed_Two?mark=2&isfx="+t.isfx}):i.redirectTo({url:"./bidding_detailed_Two?mark=2"})}),1e3),!1;t.load=!1,1==e.is_promise&&(i.showToast({title:t.language.bidding_detailed.toChujia,duration:1500,icon:"none"}),setTimeout((function(){t.isfx?i.redirectTo({url:"./bidding_detailed_Two?mark=1&detail_one=1&isfx="+t.isfx}):i.redirectTo({url:"./bidding_detailed_Two?mark=1&detail_one=1"})}),2e3))}else t.load=!1,t.is_invalid=!0;var n=e.res[0].content.replace(/src/g,"style='width:100%!important;height: auto!important;' src").replace(/<table/g,'<table style="width:100%!important;"');if(e.res[0].content=(0,s.default)(n),t.order=e.res[0],t.shop_list=e.shop_list,t.changeTimeStyle(),t.state=e.type,t.money=e.money,t.bid_num=e.bid_num,t.payment=e.payment,t.passwd_status=e.password_status,t.res_ove=e.res_all,t.res_my=e.res_my,e.res_bid.length>0)for(var a in e.res_bid)e.res_bid[a].grade=0==a?t.language.bidding_detailed.lingxian:t.language.bidding_detailed.chuju;t.threeRecords=e.res_bid,t.startTime=e.res[0].starttime,t.startTime=t.startTime.substring(0,10),t.endTime=e.res[0].endtime,t.endTime=t.endTime.substring(0,10);var o=e.res[0].start_second,r=e.res[0].end_second;0==t.form_type?t.countDown(o):(t.loop(),t.countDown(r))}t.isshow()}))},changeTimeStyle:function(){(0,o.lkt_changeTimeStyle)(this)},countDown:function(i){var t=this;t.dateformat(i),clearTimeout(t.stop),t.stop=setTimeout((function(){i>0?(i--,t.countDown(i)):(1==t.from_mark&&(t.time_end=1,t.form_type=2,t.from_mark=2),t.formMy_old=1,t.overtime.day=0,t.overtime.hour=0,t.overtime.minute=0,t.overtime.second=0,t.biddingStart((function(){clearTimeout(t.stop)})))}),1e3)},biddingStart:function(t){var e=this,n={module:"app",action:"auction",id:e.bindding_id,m:"startAution"};e.$req.post({data:n}).then((function(n){200==n.code&&(i.showToast({title:n.msg,icon:"none",duration:1500}),e._axios()),t&&"function"==typeof t&&t()}))},loop:function(){var i=this;if(1==i.form_type){var t={module:"app",action:"auction",id:i.bindding_id,isfx:i.isfx,m:"timeRequest"};this.$req.post({data:t}).then((function(t){if(200==t.code){if(i.bid_num=t.bid_num,t.res_bid)for(var e in t.res_bid)t.res_bid[e].grade=0==e?i.language.bidding_detailed.lingxian:i.language.bidding_detailed.chuju;i.res_bid=t.res_bid,i.threeRecords=i.res_bid}}))}clearTimeout(i.stop3),i.stop3=setTimeout((function(){1==i.form_type?i.loop():clearTimeout(i.stop3)}),5e3)},dateformat:function(i){this.overtime=(0,o.lkt_dateformat)(i,this)},timeout:function(){i.showToast({title:this.language.laiketuiCommon.noLogin,icon:"none",duration:1500}),setTimeout((function(){i.navigateTo({url:"../../pages/login/login?landing_code=1"})}),1500)},stopTap:function(){}},(0,a.mapMutations)({bind_promise:"SET_BIND_PPOMISE",pay_lx:"SET_PAY_LX",bindding_num:"SET_BINDDING_NUM"}))};t.default=f}).call(this,e("543d")["default"])},"189a":function(i,t,e){"use strict";e.r(t);var n=e("04cc"),a=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,(function(){return n[i]}))}(s);t["default"]=a.a},"433f":function(i,t,e){"use strict";var n;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return n}));var a=function(){var i=this,t=i.$createElement;i._self._c},s=[]},"4a03":function(i,t,e){},7327:function(i,t,e){"use strict";(function(i){e("1fd4");n(e("66fd"));var t=n(e("f74ab"));function n(i){return i&&i.__esModule?i:{default:i}}i(t.default)}).call(this,e("543d")["createPage"])},a30f:function(i,t,e){"use strict";var n=e("4a03"),a=e.n(n);a.a},f74ab:function(i,t,e){"use strict";e.r(t);var n=e("433f"),a=e("189a");for(var s in a)"default"!==s&&function(i){e.d(t,i,(function(){return a[i]}))}(s);e("a30f");var o,r=e("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"911ab94a",null,!1,n["a"],o);t["default"]=d.exports}},[["7327","common/runtime","common/vendor"]]]);