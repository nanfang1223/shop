(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register"],{"1a82":function(t,e,s){},3145:function(t,e,s){"use strict";s.r(e);var n=s("ff42"),i=s("667e");for(var o in i)"default"!==o&&function(t){s.d(e,t,(function(){return i[t]}))}(o);s("ad7e");var a,h=s("f0c5"),r=Object(h["a"])(i["default"],n["b"],n["c"],!1,null,"023035a9",null,!1,n["a"],a);e["default"]=r.exports},"5c73":function(t,e,s){"use strict";(function(t){s("1fd4");n(s("66fd"));var e=n(s("3145"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("543d")["createPage"])},"667e":function(t,e,s){"use strict";s.r(e);var n=s("84de"),i=s.n(n);for(var o in n)"default"!==o&&function(t){s.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"84de":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s("2895"),i=s("2f62"),o=s("6f23");function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){r(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function r(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var u={data:function(){return{del:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/delete2x.png",guanbi:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/guanbi2x.png",regId:"",toHome:!1,regPWStatus1:!0,regPWStatus2:!0,regBtnStatus:!1,phone_codeStatus2:!1,fastTap:!0,passone:"",passtwo:"",phone_y:"",passone_y:"",passtwo_y:"",pwShow:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/pwShow.png",pwHide:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/pwHide.png",phone:"",phone_code:"",one_code:"",time_code:"获取验证码",timer:null,count:"",old_phone:"",flag:!0,fatherId:"",baiduHeadTop:0,Agreement:""}},onShow:function(){this.time_code=this.language.login.page2.getCode},onLoad:function(t){var e=this;t.fatherId&&(this.fatherId=t.fatherId);var s={module:"app",action:"login",app:"index"};this.$req.post({data:s}).then((function(t){200==t.code&&(e.Agreement=t.Agreement)}))},methods:h({_banck:function(){this.toHome?t.switchTab({url:"../tabBar/home"}):t.navigateBack({delta:2})},_landing_q:function(){this.regId="",this.flag=!1,this.regBtnStatus=!1,this.phone_codeStatus2=!1,this.phone="",this.phone_code="",this.passone="",this.passtwo="",clearInterval(this.timer),this.time_code=this.language.login.page2.getCode,this.timer=null,this.count="",this.flag=!0,t.navigateBack({delta:1})},_close_empty:function(t){1==t?this.phone_y=!0:2==t?this.passone_y=!0:3==t&&(this.passtwo_y=!0)},_empty:function(t){1==t?this.regId="":2==t?this.password="":3==t?this.phone="":4==t?this.passone="":5==t&&(this.passtwo="")},_regIdIpt:function(t){t.target.value.length>5&&this.passone.length>5&&this.passtwo.length>5&&6==this.phone_code.length&&this.passone.length==this.passtwo.length?this.regBtnStatus=!0:this.regBtnStatus=!1},blurReg:function(e){var s=/^[a-z0-9]{6,15}$/i;if(""!=e.target.value){var n=s.test(e.target.value);1==n||(e.target.value="",t.showToast({title:this.language.register.zhanghaoTips,duration:2e3,icon:"none"}))}this.regId=e.target.value},_regPW1Ipt:function(t){this.regId.length>5&&11==this.phone.length&&t.target.value.length>5&&this.passtwo.length>5&&6==this.phone_code.length?this.regBtnStatus=!0:this.regBtnStatus=!1},_regPW2Ipt:function(t){this.regId.length>5&&11==this.phone.length&&this.passone.length>5&&this.passtwo.length>5&&t.target.value.length>5&&6==this.phone_code.length?this.regBtnStatus=!0:this.regBtnStatus=!1},_passone:function(){this.passone_y=!1;var e=/^[a-z0-9]{6,15}$/i;if(""!=this.passone){var s=e.test(this.passone);1==s||(this.passone="",t.showToast({title:this.language.register.mimaTips1,duration:3e3,icon:"none"}))}},_passtwo_t:function(){this.passtwo_y=!1,this.passone!=this.passtwo&&t.showToast({title:this.language.register.mimaTips2,duration:1e3,icon:"none"})},pwStatus:function(t){(0,o.lkt_pwStatus)(t,this)},_regPhoneIpt:function(t){11==t.target.value.length&&this.passone.length>5&&this.passtwo.length>5&&6==this.phone_code.length&&this.passone.length==this.passtwo.length?this.regBtnStatus=!0:this.regBtnStatus=!1},_telephone:function(t,e){this.one_code=(0,n.telephone)(t),(0,o.lkt_telephone)(e,this)},_phone_code:function(t){(0,o.lkt_phone_code)(t,this)},_regCodeIpt:function(t){this.regId.length>5&&11==this.phone.length&&this.passone.length>5&&this.passtwo.length>5&&6==t.target.value.length&&this.passone.length==this.passtwo.length?this.regBtnStatus=!0:this.regBtnStatus=!1},_register:function(){var e=this,s=this;if(this.phone&&1==this.one_code&&this.passone==this.passtwo&&this.passone){if(!this.fastTap)return;this.fastTap=!1;var n={module:"app",action:"login",app:"user_register",phone:this.phone,password:this.passone,access_id:this.$store.state.access_id,keyCode:this.phone_code,userId:this.regId};""!=this.fatherId&&(n.pid=this.fatherId),this.$req.post({data:n}).then((function(n){s.fastTap=!0;var i=n.code,o=n.message,a=n.access_id,h=(n.y_password,n.wx_status);200==i&&a?(t.showToast({title:e.language.register.registerOk,duration:1e3,icon:"none"}),t.setStorageSync("LoingByHand",!0),s.set_access_id(a),t.setStorageSync("access_id",a),setTimeout((function(){t.reLaunch({url:"../tabBar/my",success:function(){1!=h&&(s.$store.state.shouquan=!0)}})}),1e3)):t.showToast({title:o,icon:"none"})})).catch((function(t){s.fastTap=!0}))}else 1!=this.one_code?t.showToast({title:this.language.register.telTips,duration:1e3,icon:"none"}):6!=this.phone_code.length?t.showToast({title:this.language.register.yzmTips,duration:1e3,icon:"none"}):this.passone!=this.passtwo&&this.passone?t.showToast({title:this.language.register.mimaTips3,duration:1e3,icon:"none"}):t.showToast({title:this.language.register.wanzhengTips,duration:1e3,icon:"none"})},_navigateTo:function(e){t.navigateTo({url:e})}},(0,i.mapMutations)({set_access_id:"SET_ACCESS_ID",user_phone:"SET_USER_PHONE"}))};e.default=u}).call(this,s("543d")["default"])},ad7e:function(t,e,s){"use strict";var n=s("1a82"),i=s.n(n);i.a},ff42:function(t,e,s){"use strict";var n;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return o})),s.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]}},[["5c73","common/runtime","common/vendor"]]]);