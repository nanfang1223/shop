(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/myStore/applyStore"],{"0d04":function(e,t,s){"use strict";var a;s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return i})),s.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"347c":function(e,t,s){"use strict";(function(e){s("1fd4");a(s("66fd"));var t=a(s("d748"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("543d")["createPage"])},"6a6e":function(e,t,s){"use strict";var a=s("d354"),n=s.n(a);n.a},"709f":function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(s("a34a"));function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,s,a,n,i,r){try{var o=e[i](r),u=o.value}catch(l){return void s(l)}o.done?t(u):Promise.resolve(u).then(a,n)}function r(e){return function(){var t=this,s=arguments;return new Promise((function(a,n){var r=e.apply(t,s);function o(e){i(r,a,n,o,u,"next",e)}function u(e){i(r,a,n,o,u,"throw",e)}o(void 0)}))}}var o={data:function(){return{upImg1:"",goOn:!1,licence:"",storeType:0,warnTextStatus:!1,upImg:"",name:"",title:"申请开店",fastTap:!0,storeName:"",storeNamePH:"请填写店铺名称",storeNamePH1:"请填写店铺名称",storeTitle:"",storeTitlePH:"请填写店铺简介信息（50字以内）",storeTitlePH1:"请填写店铺简介信息（50字以内）",userName:"",userNamePH:"请填写真实姓名",userNamePH1:"请填写真实姓名",userID:"",userIDPH:"请填写身份证号",userIDPH1:"请填写身份证号",userPhone:"",userPhonePH:"请填写联系电话",userPhonePH1:"请填写联系电话",userAdd:"",address:"",userAddPH:"请填写联系地址",userAddPH1:"请填写联系地址",sellRange:"",sellRangePH:"请填写店铺经营范围",sellRangePH1:"请填写店铺经营范围",agreement:!1,warnImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/warnIng.png",addImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/tianjiadizhi2x.png",agreement_t:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/landing_gou2x.png",agreement_f:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/landing_wei2x.png",delImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/delete2x.png",storeNameStatus:!1,storeTitleStatus:!1,userNameStatus:!1,userIDStatus:!1,userPhoneStatus:!1,userAddStatus:!1,compStatus:!1,sellRangeStatus:!1,quan_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehui2x.png",quan_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/2.png",placeStyle:"color:#b8b8b8;font-size:28rpx;",jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/jiantou2x.png"}},onLoad:function(e){this.goOn=e.goOn,this.axios()},onShow:function(){e.getStorageSync("applyCity")&&(this.userAdd=e.getStorageSync("applyCity"),this.address=e.getStorageSync("applyAddress"),e.removeStorageSync("applyCity"),e.removeStorageSync("applyAddress")),this.storeNamePH=this.language.applyStore.shopNamePlaceholder,this.storeNamePH1=this.language.applyStore.shopNamePlaceholder,this.storeTitlePH=this.language.applyStore.informationPlaceholder,this.storeTitlePH1=this.language.applyStore.informationPlaceholder,this.sellRangePH=this.language.applyStore.businessPlaceholder,this.sellRangePH1=this.language.applyStore.businessPlaceholder,this.userNamePH=this.language.applyStore.usernamePlaceholder,this.userNamePH1=this.language.applyStore.usernamePlaceholder,this.userIDPH=this.language.applyStore.IDnumberPlaceholder,this.userIDPH1=this.language.applyStore.IDnumberPlaceholder,this.userPhonePH=this.language.applyStore.telPlaceholder,this.userPhonePH1=this.language.applyStore.telPlaceholder,this.userAddPH=this.language.applyStore.addressPlaceholder,this.userAddPH1=this.language.applyStore.addressPlaceholder,this.axios()},mounted:function(){var t=this;this.isLogin((function(){t.shop_id=e.getStorageSync("shop_id")?e.getStorageSync("shop_id"):t.$store.state.shop_id,t.goOn&&t.$req.post({data:{module:"app",action:"mch",m:"continue_apply",shop_id:t.shop_id}}).then((function(e){var s=e.list;t.storeName=s.name,t.storeTitle=s.shop_information,t.sellRange=s.shop_range,t.userName=s.realname,t.userID=s.ID_number,t.userPhone=s.tel,t.userAdd=s.sheng+"-"+s.shi+"-"+s.xian,t.address=s.address,t.storeType=s.shop_nature,t.agreement=!0,t.upImg=s.business_license,t.upImg1=s.business_license,t.storeNameStatus=!0,t.storeTitleStatus=!0,t.userNameStatus=!0,t.userIDStatus=!0,t.userPhoneStatus=!0,t.userAddStatus=!0}))}))},methods:{modifyAddress:function(){e.navigateTo({url:"/pagesA/myStore/modifyAdress?pageType=apply&shop_id="+this.shop_id+"&userAdd="+this.userAdd+"&address="+this.address})},changeLoginStatus:function(){},_delImg:function(){this.upImg=""},upLoadImg:function(){var t=this;this.fastTap&&(this.fastTap=!1,this.upImg?(this.fastTap=!0,e.previewImage({urls:this.upImg,success:function(){}})):(this.fastTap=!0,e.chooseImage({count:1,success:function(){var s=r(a.default.mark((function s(n){var i;return a.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.getImageInfo({src:n.tempFilePaths[0]});case 2:i=s.sent,t.upImg=i[1].path;case 4:case"end":return s.stop()}}),s)})));function n(e){return s.apply(this,arguments)}return n}(),error:function(){}})))},_submit:function(){var t=this;if(this.fastTap){this.userAddStatus=this.address&&this.userAdd,this.fastTap=!1;var s=this.storeNameStatus&&this.storeTitleStatus&&this.userNameStatus&&this.userIDStatus&&this.userPhoneStatus&&this.userAddStatus&&this.agreement&&this.sellRange;if(s)if(this.upImg&&this.upImg!=this.upImg1){var a={m:"apply",name:t.storeName,shop_information:t.storeTitle,shop_range:t.sellRange,realname:t.userName,ID_number:t.userID,tel:t.userPhone,city_all:t.userAdd,address:t.address,shop_nature:t.storeType};console.log(a,"参数"),t.$req.upLoad(t.upImg,a).then((function(s){t.fastTap=!0,200==s.code?e.redirectTo({url:"/pagesA/myStore/applySuc"}):(t.fastTap=!0,e.showToast({title:s.message,duration:1500,icon:"none"}))}))}else{var n={module:"app",action:"mch",m:"apply",name:t.storeName,shop_information:t.storeTitle,shop_range:t.sellRange,realname:t.userName,ID_number:t.userID,tel:t.userPhone,city_all:t.userAdd,address:t.address,shop_nature:t.storeType};t.$req.post({data:n}).then((function(s){t.fastTap=!0,200==s.code?e.redirectTo({url:"../myStore/applySuc"}):(t.fastTap=!0,e.showToast({title:s.message,duration:1500,icon:"none"}))})).catch((function(){t.fastTap=!0}))}else if(this.agreement){this.fastTap=!0;var i="";this.storeNameStatus?this.storeTitleStatus?this.userNameStatus?this.userIDStatus?this.userPhoneStatus?this.userAddStatus?this.agreement?this.sellRange||(i=this.language.applyStore.businessFail):i=this.language.applyStore.agreementFail:i=this.language.applyStore.addressFail:i=this.language.applyStore.telFail:i=this.language.applyStore.IDFail:i=this.language.applyStore.usernameFail:i=this.language.applyStore.informationFail:i=this.language.applyStore.shopNameFail,e.showToast({title:i,icon:"none",duration:1500})}else this.fastTap=!0,e.showToast({title:this.language.applyStore.agreementFail,icon:"none"})}},_agreement:function(){this.agreement=!this.agreement},_lookXY:function(){e.navigateTo({url:"./applyAgreement"})},_changeType:function(e){this.storeType=e},_changePH:function(t){var s=this;if("storeName"==t){if(this.storeNamePH=this.storeNamePH1,0==this.storeName.length)this.storeNameStatus=!1;else if(this.storeName.length>0){var a={module:"app",action:"mch",m:"verify_store_name",name:s.storeName};s.$req.post({data:a}).then((function(t){200==t.code?(s.storeNameStatus=!0,s.warnTextStatus=!1):(e.showToast({title:t.message,duration:1500,icon:"none"}),s.storeNameStatus=!1,s.warnTextStatus=!0)}))}}else"storeTitle"==t?(this.storeTitlePH=this.storeTitlePH1,0==this.storeTitle.length?this.storeTitleStatus=!1:this.storeTitle.length>0&&(this.storeTitleStatus=!0)):"userName"==t?(this.userNamePH=this.userNamePH1,0==this.userName.length?this.userNameStatus=!1:this.userName.length>1&&(this.userNameStatus=!0)):"userID"==t?(this.userIDPH=this.userIDPH1,0==this.userID.length?this.userIDStatus=!1:this.userID.length<18?(e.showToast({title:this.language.applyStore.IDFail1,duration:1500,icon:"none"}),this.userIDStatus=!1):18==this.userID.length&&(this.userIDStatus=!0)):"userPhone"==t?(this.userPhonePH=this.userPhonePH1,0==this.userPhone.length?this.userPhoneStatus=!1:this.userPhone.length<11?(e.showToast({title:this.language.applyStore.telFail1,duration:1500,icon:"none"}),this.userPhoneStatus=!1):11==this.userPhone.length&&(this.userPhoneStatus=!0)):"userAdd"==t?(this.userAddPH=this.userAddPH1,0==this.userAdd.length?this.userAddStatus=!1:this.userAdd.length>0&&(this.userAddStatus=!0)):"sellRange"==t&&(this.sellRangePH=this.sellRangePH1,0==this.sellRange.length?this.sellRangeStatus=!1:this.sellRange.length>0&&(this.sellRangeStatus=!0))},_changePH1:function(e){"storeName"==e?this.storeNamePH="":"storeTitle"==e?this.storeTitlePH="":"userName"==e?this.userNamePH="":"userID"==e?this.userIDPH="":"userPhone"==e?this.userPhonePH="":"userAdd"==e?this.userAddPH="":"sellRange"==e&&(this.sellRangePH="")},axios:function(){var t=this,s={module:"app",action:"mch",m:"agreement"};this.$req.post({data:s}).then((function(s){var a=s.code,n=s.message,i=(s.agreement,s.name);200==a?t.name=i:e.showToast({title:n,icon:"none"}),t.loadFlag=!0}))}}};t.default=o}).call(this,s("543d")["default"])},af36:function(e,t,s){"use strict";s.r(t);var a=s("709f"),n=s.n(a);for(var i in a)"default"!==i&&function(e){s.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a},d354:function(e,t,s){},d748:function(e,t,s){"use strict";s.r(t);var a=s("0d04"),n=s("af36");for(var i in n)"default"!==i&&function(e){s.d(t,e,(function(){return n[e]}))}(i);s("6a6e");var r,o=s("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"63a6efac",null,!1,a["a"],r);t["default"]=u.exports}},[["347c","common/runtime","common/vendor"]]]);