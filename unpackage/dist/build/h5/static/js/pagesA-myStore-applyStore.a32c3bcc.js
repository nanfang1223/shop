(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-myStore-applyStore"],{"1e92":function(t,e,a){"use strict";var s=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=s(a("1da1")),n={data:function(){return{upImg1:"",goOn:!1,licence:"",storeType:0,warnTextStatus:!1,upImg:"",name:"",title:"申请开店",fastTap:!0,storeName:"",storeNamePH:"请填写店铺名称",storeNamePH1:"请填写店铺名称",storeTitle:"",storeTitlePH:"请填写店铺简介信息（50字以内）",storeTitlePH1:"请填写店铺简介信息（50字以内）",userName:"",userNamePH:"请填写真实姓名",userNamePH1:"请填写真实姓名",userID:"",userIDPH:"请填写身份证号",userIDPH1:"请填写身份证号",userPhone:"",userPhonePH:"请填写联系电话",userPhonePH1:"请填写联系电话",userAdd:"",address:"",userAddPH:"请填写联系地址",userAddPH1:"请填写联系地址",sellRange:"",sellRangePH:"请填写店铺经营范围",sellRangePH1:"请填写店铺经营范围",agreement:!1,warnImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/warnIng.png",addImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/tianjiadizhi2x.png",agreement_t:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/landing_gou2x.png",agreement_f:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/landing_wei2x.png",delImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/delete2x.png",storeNameStatus:!1,storeTitleStatus:!1,userNameStatus:!1,userIDStatus:!1,userPhoneStatus:!1,userAddStatus:!1,compStatus:!1,sellRangeStatus:!1,quan_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehui2x.png",quan_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/2.png",placeStyle:"color:#b8b8b8;font-size:28rpx;",jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/jiantou2x.png"}},onLoad:function(t){this.goOn=t.goOn,this.axios()},onShow:function(){uni.getStorageSync("applyCity")&&(this.userAdd=uni.getStorageSync("applyCity"),this.address=uni.getStorageSync("applyAddress"),uni.removeStorageSync("applyCity"),uni.removeStorageSync("applyAddress")),this.storeNamePH=this.language.applyStore.shopNamePlaceholder,this.storeNamePH1=this.language.applyStore.shopNamePlaceholder,this.storeTitlePH=this.language.applyStore.informationPlaceholder,this.storeTitlePH1=this.language.applyStore.informationPlaceholder,this.sellRangePH=this.language.applyStore.businessPlaceholder,this.sellRangePH1=this.language.applyStore.businessPlaceholder,this.userNamePH=this.language.applyStore.usernamePlaceholder,this.userNamePH1=this.language.applyStore.usernamePlaceholder,this.userIDPH=this.language.applyStore.IDnumberPlaceholder,this.userIDPH1=this.language.applyStore.IDnumberPlaceholder,this.userPhonePH=this.language.applyStore.telPlaceholder,this.userPhonePH1=this.language.applyStore.telPlaceholder,this.userAddPH=this.language.applyStore.addressPlaceholder,this.userAddPH1=this.language.applyStore.addressPlaceholder,this.axios()},mounted:function(){var t=this;this.isLogin((function(){t.shop_id=uni.getStorageSync("shop_id")?uni.getStorageSync("shop_id"):t.$store.state.shop_id,t.goOn&&t.$req.post({data:{module:"app",action:"mch",m:"continue_apply",shop_id:t.shop_id}}).then((function(e){var a=e.list;t.storeName=a.name,t.storeTitle=a.shop_information,t.sellRange=a.shop_range,t.userName=a.realname,t.userID=a.ID_number,t.userPhone=a.tel,t.userAdd=a.sheng+"-"+a.shi+"-"+a.xian,t.address=a.address,t.storeType=a.shop_nature,t.agreement=!0,t.upImg=a.business_license,t.upImg1=a.business_license,t.storeNameStatus=!0,t.storeTitleStatus=!0,t.userNameStatus=!0,t.userIDStatus=!0,t.userPhoneStatus=!0,t.userAddStatus=!0}))}))},methods:{modifyAddress:function(){uni.navigateTo({url:"/pagesA/myStore/modifyAdress?pageType=apply&shop_id="+this.shop_id+"&userAdd="+this.userAdd+"&address="+this.address})},changeLoginStatus:function(){},_delImg:function(){this.upImg=""},upLoadImg:function(){var t=this;this.fastTap&&(this.fastTap=!1,this.upImg?(this.fastTap=!0,uni.previewImage({urls:this.upImg,success:function(){}})):(this.fastTap=!0,uni.chooseImage({count:1,success:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.getImageInfo({src:a.tempFilePaths[0]});case 2:s=e.sent,t.upImg=s[1].path;case 4:case"end":return e.stop()}}),e)})));function a(t){return e.apply(this,arguments)}return a}(),error:function(){}})))},_submit:function(){var t=this;if(this.fastTap){this.userAddStatus=this.address&&this.userAdd,this.fastTap=!1;var e=this.storeNameStatus&&this.storeTitleStatus&&this.userNameStatus&&this.userIDStatus&&this.userPhoneStatus&&this.userAddStatus&&this.agreement&&this.sellRange;if(e)if(this.upImg&&this.upImg!=this.upImg1){var a={m:"apply",name:t.storeName,shop_information:t.storeTitle,shop_range:t.sellRange,realname:t.userName,ID_number:t.userID,tel:t.userPhone,city_all:t.userAdd,address:t.address,shop_nature:t.storeType};console.log(a,"参数"),t.$req.upLoad(t.upImg,a).then((function(e){t.fastTap=!0,200==e.code?uni.redirectTo({url:"/pagesA/myStore/applySuc"}):(t.fastTap=!0,uni.showToast({title:e.message,duration:1500,icon:"none"}))}))}else{var s={module:"app",action:"mch",m:"apply",name:t.storeName,shop_information:t.storeTitle,shop_range:t.sellRange,realname:t.userName,ID_number:t.userID,tel:t.userPhone,city_all:t.userAdd,address:t.address,shop_nature:t.storeType};t.$req.post({data:s}).then((function(e){t.fastTap=!0,200==e.code?uni.redirectTo({url:"../myStore/applySuc"}):(t.fastTap=!0,uni.showToast({title:e.message,duration:1500,icon:"none"}))})).catch((function(){t.fastTap=!0}))}else if(this.agreement){this.fastTap=!0;var i="";this.storeNameStatus?this.storeTitleStatus?this.userNameStatus?this.userIDStatus?this.userPhoneStatus?this.userAddStatus?this.agreement?this.sellRange||(i=this.language.applyStore.businessFail):i=this.language.applyStore.agreementFail:i=this.language.applyStore.addressFail:i=this.language.applyStore.telFail:i=this.language.applyStore.IDFail:i=this.language.applyStore.usernameFail:i=this.language.applyStore.informationFail:i=this.language.applyStore.shopNameFail,uni.showToast({title:i,icon:"none",duration:1500})}else this.fastTap=!0,uni.showToast({title:this.language.applyStore.agreementFail,icon:"none"})}},_agreement:function(){this.agreement=!this.agreement},_lookXY:function(){uni.navigateTo({url:"./applyAgreement"})},_changeType:function(t){this.storeType=t},_changePH:function(t){var e=this;if("storeName"==t){if(this.storeNamePH=this.storeNamePH1,0==this.storeName.length)this.storeNameStatus=!1;else if(this.storeName.length>0){var a={module:"app",action:"mch",m:"verify_store_name",name:e.storeName};e.$req.post({data:a}).then((function(t){200==t.code?(e.storeNameStatus=!0,e.warnTextStatus=!1):(uni.showToast({title:t.message,duration:1500,icon:"none"}),e.storeNameStatus=!1,e.warnTextStatus=!0)}))}}else"storeTitle"==t?(this.storeTitlePH=this.storeTitlePH1,0==this.storeTitle.length?this.storeTitleStatus=!1:this.storeTitle.length>0&&(this.storeTitleStatus=!0)):"userName"==t?(this.userNamePH=this.userNamePH1,0==this.userName.length?this.userNameStatus=!1:this.userName.length>1&&(this.userNameStatus=!0)):"userID"==t?(this.userIDPH=this.userIDPH1,0==this.userID.length?this.userIDStatus=!1:this.userID.length<18?(uni.showToast({title:this.language.applyStore.IDFail1,duration:1500,icon:"none"}),this.userIDStatus=!1):18==this.userID.length&&(this.userIDStatus=!0)):"userPhone"==t?(this.userPhonePH=this.userPhonePH1,0==this.userPhone.length?this.userPhoneStatus=!1:this.userPhone.length<11?(uni.showToast({title:this.language.applyStore.telFail1,duration:1500,icon:"none"}),this.userPhoneStatus=!1):11==this.userPhone.length&&(this.userPhoneStatus=!0)):"userAdd"==t?(this.userAddPH=this.userAddPH1,0==this.userAdd.length?this.userAddStatus=!1:this.userAdd.length>0&&(this.userAddStatus=!0)):"sellRange"==t&&(this.sellRangePH=this.sellRangePH1,0==this.sellRange.length?this.sellRangeStatus=!1:this.sellRange.length>0&&(this.sellRangeStatus=!0))},_changePH1:function(t){"storeName"==t?this.storeNamePH="":"storeTitle"==t?this.storeTitlePH="":"userName"==t?this.userNamePH="":"userID"==t?this.userIDPH="":"userPhone"==t?this.userPhonePH="":"userAdd"==t?this.userAddPH="":"sellRange"==t&&(this.sellRangePH="")},axios:function(){var t=this,e={module:"app",action:"mch",m:"agreement"};this.$req.post({data:e}).then((function(e){var a=e.code,s=e.message,i=(e.agreement,e.name);200==a?t.name=i:uni.showToast({title:s,icon:"none"}),t.loadFlag=!0}))}}};e.default=n},5880:function(t,e,a){"use strict";var s=a("a8d2"),i=a.n(s);i.a},"6dbd":function(t,e,a){"use strict";a.r(e);var s=a("f946"),i=a("bcc4");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("5880");var r,o=a("f0c5"),l=Object(o["a"])(i["default"],s["b"],s["c"],!1,null,"2c643300",null,!1,s["a"],r);e["default"]=l.exports},a8d2:function(t,e,a){var s=a("dd7b");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("4f06").default;i("bcffec10",s,!0,{sourceMap:!1,shadowMode:!1})},bcc4:function(t,e,a){"use strict";a.r(e);var s=a("1e92"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);e["default"]=i.a},dd7b:function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".closeImg[data-v-2c643300]{position:absolute;top:%?0?%;right:%?0?%;padding:%?10?%;width:%?28?%;height:%?28?%;z-index:9999}.submitBtn[data-v-2c643300]{background-color:#ff612a;width:%?690?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?30?%;height:%?90?%;margin:%?30?% auto %?40?%;-webkit-border-radius:%?8?%;border-radius:%?8?%}.upLoadPic[data-v-2c643300]{width:100%;height:%?280?%;border:%?4?% #ddd dashed;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative}.radio[data-v-2c643300]{font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.dzf uni-radio .uni-radio-input[data-v-2c643300]{width:%?34?%;height:%?34?%}uni-radio .uni-radio-input.uni-radio-input-checked[data-v-2c643300]:before{font-size:%?28?%}.warnImg[data-v-2c643300]{width:%?24?%;height:%?24?%;margin-right:%?10?%}.formDiv[data-v-2c643300]{border-bottom:%?1?% solid #e9ecef}.formList[data-v-2c643300]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%}.leftText[data-v-2c643300]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:30%;font-size:%?28?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding-left:%?10?%}.rightInput[data-v-2c643300]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:70%}.leftText1[data-v-2c643300]{height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:30%;font-size:%?28?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding-left:%?10?%}.rightInput1[data-v-2c643300]{height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:70%}.rightInput uni-input[data-v-2c643300]{font-size:%?24?%;width:100%}.rightInput1 uni-input[data-v-2c643300]{font-size:%?24?%;width:100%}.warningText[data-v-2c643300]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?30?%;font-size:%?24?%;color:red;width:70%;margin-left:30%;margin-bottom:%?20?%}.must[data-v-2c643300]{color:red;margin-right:%?10?%}.formList .rightInput1 .uni-radio-wrapper .uni-radio-input[data-v-2c643300]{width:%?36?%!important;height:%?36?%!important}.ri_outer[data-v-2c643300]{position:relative;margin-right:%?60?%;font-size:%?28?%}.ri_outer .quan_img[data-v-2c643300]{position:relative;top:%?8?%;left:%?0?%;margin-right:%?10?%;width:%?34?%;height:%?34?%}.rightInput1 uni-input[data-v-2c643300]{font-size:%?28?%}.contentBox[data-v-2c643300]{padding:0 %?20?%}.permit[data-v-2c643300]{height:%?280?%;margin-top:%?20?%;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.permitDiv[data-v-2c643300]{height:%?280?%;margin-top:%?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.upLoadPic .img[data-v-2c643300]{width:%?48?%;height:%?48?%;margin-bottom:%?20?%}.upLoadPic .img1[data-v-2c643300]{width:100%;height:100%}.permitDiv .text[data-v-2c643300]{font-size:%?28?%;font-weight:500;color:#ddd}.protocol[data-v-2c643300]{color:#b8b8b8;text-align:center;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?20?%}.protocol > div[data-v-2c643300]:first-child{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.protocol > div[data-v-2c643300]:last-child{color:#000;text-decoration:underline}.font_28[data-v-2c643300]{font-size:%?28?%}.hr[data-v-2c643300]{background-color:#f6f6f6;height:%?20?%}.tc[data-v-2c643300]{text-align:center}.addressC[data-v-2c643300]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.jiantouDiv[data-v-2c643300]{margin-left:%?20?%}.jiantouDiv img[data-v-2c643300]{width:%?15?%;height:%?27?%}.addressC_left[data-v-2c643300]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */",""]),t.exports=e},f946:function(t,e,a){"use strict";var s;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLoginStatus.apply(void 0,arguments)}}}),a("heads",{attrs:{title:t.language.applyStore.title}}),a("div",{staticClass:"relative"},[a("div",{staticClass:"contentBox"},[a("div",{staticClass:"formDiv"},[a("div",{staticClass:"formList"},[a("div",{staticClass:"leftText1"},[a("span",{staticClass:"must"},[t._v("*")]),a("span",{staticClass:"font_28"},[t._v(t._s(t.language.applyStore.shopName))])]),a("div",{staticClass:"rightInput1"},[a("v-uni-input",{attrs:{"placeholder-style":t.placeStyle,type:"text",maxlength:"14",placeholder:t.storeNamePH},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t._changePH1("storeName")},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._changePH("storeName")}},model:{value:t.storeName,callback:function(e){t.storeName=e},expression:"storeName"}})],1)]),t.warnTextStatus?a("div",{staticClass:"warningText"},[a("img",{staticClass:"warnImg",attrs:{src:t.warnImg}}),t._v(t._s(t.language.applyStore.nameExisting))]):t._e()]),a("div",{staticClass:"formDiv"},[a("div",{staticClass:"formList"},[a("div",{staticClass:"leftText1"},[a("span",{staticClass:"must"},[t._v("*")]),a("span",{staticClass:"font_28"},[t._v(t._s(t.language.applyStore.information))])]),a("div",{staticClass:"rightInput1"},[a("v-uni-input",{attrs:{"placeholder-style":t.placeStyle,type:"text",maxlength:"50",placeholder:t.storeTitlePH},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t._changePH1("storeTitle")},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._changePH("storeTitle")}},model:{value:t.storeTitle,callback:function(e){t.storeTitle=e},expression:"storeTitle"}})],1)])]),a("div",{staticClass:"formDiv border_0"},[a("div",{staticClass:"formList"},[a("div",{staticClass:"leftText1"},[a("span",{staticClass:"must"},[t._v("*")]),a("span",{staticClass:"font_28"},[t._v(t._s(t.language.applyStore.business))])]),a("div",{staticClass:"rightInput1"},[a("v-uni-input",{attrs:{"placeholder-style":t.placeStyle,type:"text",maxlength:"50",placeholder:t.sellRangePH},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t._changePH1("sellRange")},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._changePH("sellRange")}},model:{value:t.sellRange,callback:function(e){t.sellRange=e},expression:"sellRange"}})],1)])])]),a("div",{staticClass:"hr"}),a("div",{staticClass:"contentBox"},[a("div",{staticClass:"formDiv"},[a("div",{staticClass:"formList"},[a("div",{staticClass:"leftText1"},[a("span",{staticClass:"must"},[t._v("*")]),a("span",{staticClass:"font_28"},[t._v(t._s(t.language.applyStore.username))])]),a("div",{staticClass:"rightInput1"},[a("v-uni-input",{attrs:{maxlength:"20","placeholder-style":t.placeStyle,type:"text",placeholder:t.userNamePH},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t._changePH1("userName")},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._changePH("userName")}},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1)])]),a("div",{staticClass:"formDiv"},[a("div",{staticClass:"formList"},[a("div",{staticClass:"leftText1"},[a("span",{staticClass:"must"},[t._v("*")]),a("span",{staticClass:"font_28"},[t._v(t._s(t.language.applyStore.IDnumber))])]),a("div",{staticClass:"rightInput1"},[a("v-uni-input",{attrs:{"placeholder-style":t.placeStyle,type:"idcard",maxlength:"18",placeholder:t.userIDPH},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t._changePH1("userID")},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._changePH("userID")}},model:{value:t.userID,callback:function(e){t.userID=e},expression:"userID"}})],1)])]),a("div",{staticClass:"formDiv"},[a("div",{staticClass:"formList"},[a("div",{staticClass:"leftText1"},[a("span",{staticClass:"must"},[t._v("*")]),a("span",{staticClass:"font_28"},[t._v(t._s(t.language.applyStore.tel))])]),a("div",{staticClass:"rightInput1"},[a("v-uni-input",{attrs:{maxlength:"11","placeholder-style":t.placeStyle,type:"number",placeholder:t.userPhonePH},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t._changePH1("userPhone")},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._changePH("userPhone")}},model:{value:t.userPhone,callback:function(e){t.userPhone=e},expression:"userPhone"}})],1)])]),a("div",{staticClass:"formDiv border_0"},[a("div",{staticClass:"formList"},[a("div",{staticClass:"leftText1"},[a("span",{staticClass:"must"},[t._v("*")]),a("span",{staticClass:"font_28"},[t._v(t._s(t.language.applyStore.address))])]),a("div",{staticClass:"rightInput1 addressC",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.modifyAddress.apply(void 0,arguments)}}},[a("v-uni-input",{attrs:{"placeholder-style":t.placeStyle,maxlength:"18",placeholder:t.userAddPH,value:t.userAdd?t.userAdd+" "+t.address:""}}),a("div",{staticClass:"jiantouDiv"},[a("img",{attrs:{src:t.jiantou,alt:""}})])],1)])])]),a("div",{staticClass:"hr"}),a("div",{staticClass:"contentBox"},[a("div",{staticClass:"formDiv"},[a("div",{staticClass:"formList"},[a("div",{staticClass:"leftText1"},[a("span",{staticClass:"font_28"},[t._v(t._s(t.language.applyStore.nature))])]),a("div",{staticClass:"rightInput1"},[a("v-uni-view",{staticClass:"ri_outer",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._changeType(0)}}},[a("img",{staticClass:"quan_img",attrs:{src:0==t.storeType?t.quan_hei:t.quan_hui}}),a("span",[t._v(t._s(t.language.applyStore.personal))])]),a("v-uni-view",{staticClass:"ri_outer",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._changeType(1)}}},[a("img",{staticClass:"quan_img",attrs:{src:1==t.storeType?t.quan_hei:t.quan_hui}}),a("span",[t._v(t._s(t.language.applyStore.enterprise))])])],1)])]),a("div",{staticClass:"formDiv",staticStyle:{"border-bottom":"0"}},[a("div",{staticClass:"formList",staticStyle:{"padding-bottom":"20rpx"}},[a("div",{staticClass:"leftText1 permit"},[a("span",{staticClass:"font_28"},[t._v(t._s(t.language.applyStore.license))])]),a("div",{staticClass:"rightInput1 permitDiv"},[a("div",{staticClass:"upLoadPic",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upLoadImg()}}},[t.upImg?a("img",{staticClass:"closeImg",attrs:{src:t.delImg},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t._delImg()}}}):t._e(),t.upImg?a("img",{staticClass:"img1",attrs:{src:t.upImg}}):a("div",{staticClass:"tc"},[a("img",{staticClass:"img",attrs:{src:t.addImg,alt:""}}),a("div",{staticClass:"text"},[t._v(t._s(t.language.applyStore.upload))])])])])])]),a("div",[a("div",{staticClass:"protocol"},[a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._agreement()}}},[a("img",{staticStyle:{width:"26rpx",height:"26rpx","margin-right":"10rpx"},attrs:{src:t.agreement?t.agreement_t:t.agreement_f}}),t._v(t._s(t.language.applyStore.read))]),a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._lookXY()}}},[t._v("《"+t._s(t.name)+"》")])]),a("div",{staticClass:"submitBtn",staticStyle:{background:"#FF612A"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._submit()}}},[t._v(t._s(t.language.applyStore.submit))])])])])],1)},n=[]}}]);