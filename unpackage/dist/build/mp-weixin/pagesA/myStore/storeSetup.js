(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/myStore/storeSetup"],{"13b1":function(e,t,s){"use strict";var n=s("5dae"),i=s.n(n);i.a},"3c6d":function(e,t,s){"use strict";var n;s.d(t,"b",(function(){return i})),s.d(t,"c",(function(){return o})),s.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.cancellationFlag=!1})},o=[]},"5dae":function(e,t,s){},"8a88":function(e,t,s){"use strict";(function(e){s("1fd4");n(s("66fd"));var t=n(s("8e4d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("543d")["createPage"])},"8e4d":function(e,t,s){"use strict";s.r(t);var n=s("3c6d"),i=s("cb38");for(var o in i)"default"!==o&&function(e){s.d(t,e,(function(){return i[e]}))}(o);s("13b1");var a,r=s("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);t["default"]=u.exports},cb38:function(e,t,s){"use strict";s.r(t);var n=s("e46d"),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},e46d:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){s.e("components/time-picker").then(function(){return resolve(s("0655"))}.bind(null,s)).catch(s.oe)},i={data:function(){return{title:"店铺设置",storeImg:"",storeName:"",storeTitle:"",storeRange:"",userName:"",userID:"",userPhone:"",userAdd:"",new_title:"",new_range:"",new_phone:"",shop_id:"",jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/jiantou2x.png",textImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/yhqBg.png",mask_display1:!1,mask_display2:!1,mask_display3:!1,businessIndex:1,address:"",cancellationFlag:!1,platform1:"android",themeColor:"#007AFF",time_all:"",time_ys:"",cashable_money:""}},components:{timePicker:n},onShow:function(){var t=this;this.platform1=e.getSystemInfoSync().platform,this.isLogin((function(){t.shop_id=e.getStorageSync("shop_id")?e.getStorageSync("shop_id"):t.$store.state.shop_id,t._axios()}))},methods:{openDatetimePicker:function(){this.$refs.timePicker.show(this.time_ys)},onConfirm1:function(e){var t=e[0].replace(/undefined/g,"00"),s=e[1].replace(/undefined/g,"00");this.time_all=t+"~"+s,this.time_ys=this.time_all},cancellation:function(t){var s=this;if(1!=t){var n={module:"app",action:"mch",m:"cancellation_shop",shop_id:this.shop_id};this.$req.post({data:n}).then((function(t){s.cancellationFlag=!1,200==t.code?(e.showToast({title:s.language.storeSetup.Tips[8],duration:1500,icon:"none"}),setTimeout((function(){wx.switchTab({url:"/pages/tabBar/my"})}),1500)):e.showToast({title:t.message,duration:1500,icon:"none"})}))}else this.cancellationFlag=!0},modifyAddress:function(){e.navigateTo({url:"/pagesA/myStore/modifyAdress?shop_id="+this.shop_id+"&userAdd="+this.userAdd+"&address="+this.address})},bindPickerChange:function(t){var s=this;if(this.businessIndex=t.detail.value,0==this.businessIndex)var n=2;else n=1;this.$req.post({data:{module:"app",action:"mch",m:"set_shop",shop_id:this.shop_id,is_open:n}}).then((function(t){200==t.code?(e.showToast({title:s.language.storeSetup.Tips[8],duration:1500,icon:"none"}),setTimeout((function(){s._axios()}),1500)):e.showToast({title:t.message,duration:1500,icon:"none"})}))},changeLoginStatus:function(){this._axios()},plusXing:function(e,t,s){for(var n=e.length-t-s,i="",o=0;o<n;o++)i+="*";return e.substring(0,t)+i+e.substring(e.length-s)},_changeImg:function(){var t=this;e.chooseImage({count:1,success:function(s){e.uploadFile({url:e.getStorageSync("url"),filePath:s.tempFilePaths[0],name:"file",formData:{access_id:t.access_id,shop_id:t.shop_id,module:"app",m:"set_shop",action:"mch"},success:function(s){var n=s.data,i={};if("android"==t.platform1){var o=n.replace("\r\n/g","").replace(/\n/g,"").replace(/\r/g,"").replace(/\\/g,""),a=o.split(",");i.code=a[0].split(":")[1]}else i=JSON.parse(n);200==i.code?(e.showToast({title:t.language.storeSetup.Tips[8],icon:"none"}),setTimeout((function(){t._axios()}),1e3)):e.showToast({title:t.language.storeSetup.Tips[9],duration:1500,icon:"none"})}})}})},showEditor:function(e){1==e?(this.new_title=this.storeTitle,this.mask_display1=!0):2==e?(this.new_range=this.storeRange,this.mask_display2=!0):3==e&&(this.mask_display3=!0)},_confirm:function(t){var s=this;1==t?(this.mask_display1=!1,this.new_title?this.$req.post({data:{module:"app",action:"mch",m:"set_shop",shop_id:this.shop_id,shop_information:this.new_title}}).then((function(t){200==t.code?(e.showToast({title:s.language.storeSetup.Tips[8],duration:1500,icon:"none"}),setTimeout((function(){s._axios()}),1500)):e.showToast({title:t.message,duration:1500,icon:"none"})})):e.showToast({title:this.language.storeSetup.Tips[10],duration:1500,icon:"none"})):2==t?(this.mask_display2=!1,this.new_range?this.$req.post({data:{module:"app",action:"mch",m:"set_shop",shop_id:this.shop_id,shop_range:this.new_range}}).then((function(t){200==t.code?(e.showToast({title:s.language.storeSetup.Tips[8],duration:1500,icon:"none"}),setTimeout((function(){s._axios()}),1500)):e.showToast({title:t.message,duration:1500,icon:"none"})})):e.showToast({title:this.language.storeSetup.Tips[10],duration:1500,icon:"none"})):3==t&&(this.mask_display3=!1,11==this.new_phone.length?this.$req.post({data:{module:"app",action:"mch",m:"set_shop",shop_id:this.shop_id,tel:this.new_phone}}).then((function(t){200==t.code?(e.showToast({title:s.language.storeSetup.Tips[8],duration:1500,icon:"none"}),setTimeout((function(){s._axios()}),1500)):e.showToast({title:t.message,duration:1500,icon:"none"})})):e.showToast({title:this.language.storeSetup.Tips[11],duration:1500,icon:"none"}))},_cancel:function(e){1==e?this.mask_display1=!1:2==e?this.mask_display2=!1:3==e&&(this.mask_display3=!1)},_axios:function(){var t=this;this.$req.post({data:{module:"app",action:"mch",m:"into_set_shop",shop_id:this.shop_id}}).then((function(s){if(200==s.code){var n=s.list[0];t.storeImg=n.logo,t.storeName=n.name,t.storeRange=n.shop_range,t.storeTitle=n.shop_information,t.userName=n.realname,t.userID=n.ID_number.replace(/^(\d{8})\d{6}(\d+)/,"$1******$2"),t.userPhone=n.tel.replace(/^(\d{3})\d{4}(\d+)/,"$1****$2"),t.userAdd=n.sheng+"-"+n.shi+"-"+n.xian,t.address=n.address,t.cashable_money=n.cashable_money,1==n.is_open?t.businessIndex=1:t.businessIndex=0}else e.showToast({title:s.message,duration:1500,icon:"none"})}))}}};t.default=i}).call(this,s("543d")["default"])}},[["8a88","common/runtime","common/vendor"]]]);