(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/myInfo"],{"09d5":function(t,n,i){"use strict";(function(t){i("1fd4");a(i("66fd"));var n=a(i("230d"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("543d")["createPage"])},"230d":function(t,n,i){"use strict";i.r(n);var a=i("dc55"),e=i("582e");for(var s in e)"default"!==s&&function(t){i.d(n,t,(function(){return e[t]}))}(s);i("7868");var o,u=i("f0c5"),r=Object(u["a"])(e["default"],a["b"],a["c"],!1,null,"7110c400",null,!1,a["a"],o);n["default"]=r.exports},"582e":function(t,n,i){"use strict";i.r(n);var a=i("5fd5"),e=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(n,t,(function(){return a[t]}))}(s);n["default"]=e.a},5835:function(t,n,i){},"5fd5":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jiantou2x.png",title:"我的信息",name:"",new_name:"",mask_display:!1,img:"",imgsrc:"",show:"",src_img:"",fastTap:!0,user_birth:"-0001-11-30",is_birth:!1,showEndFlag:!1,birth_flag:!0,birthday:""}},onLoad:function(){var t=this;t._axios()},mounted:function(){var t=this;this.isLogin((function(){t._axios()}))},methods:{empty:function(){},changeData:function(t){if(this.birthday=t.detail.value,"-0001-11-30"==this.user_birth&&this.birth_flag)return this.showEndFlag=!0,!1;this.submitBirthday()},closeEndFlag:function(t){var n=this;if("cancel"==t)return n.showEndFlag=!1,!1;n.showEndFlag=!1,n.birth_flag=!1,this.submitBirthday()},changeLoginStatus:function(){this._axios()},submitBirthday:function(){var n=this,i={module:"app",action:"user",app:"set_user",birthday:this.birthday};this.$req.post({data:i}).then((function(i){n.fastTap=!0,200==i.code?(n.mask_display=!1,n.user_birth=n.birthday,n.is_birth=!0,t.showToast({title:i.message,duration:1500,icon:"none"})):t.showToast({title:i.message,duration:1500,icon:"none"})}))},_axios:function(){var n=this,i={module:"app",action:"user",app:"index"};this.$req.post({data:i}).then((function(i){200==i.code?(n.name=i.data.user.user_name,n.img=i.data.user.headimgurl,n.user_birth=i.data.user.birthday,"-0001-11-30"!=n.user_birth?n.is_birth=!0:n.is_birth=!1):t.showToast({title:i.message,duration:1500,icon:"none"})}))},_myname:function(){this.mask_display=!0},_confirm:function(){if(this.new_name.length>6)t.showToast({title:this.language.myinfo.nickname[0],icon:"none",duration:1e3});else if(this.name&&""!=this.new_name){if(this.name==this.new_name)return void t.showToast({title:this.language.myinfo.nickname[1],icon:"none"});if(!this.fastTap)return;this.fastTap=!1;var n=this,i={module:"app",action:"user",app:"set_user",Nickname:this.new_name};this.$req.post({data:i}).then((function(i){n.fastTap=!0;var a=i.code,e=i.message;200==a?(n.name=n.new_name,n.mask_display=!1):t.showToast({title:e,duration:1500,icon:"none"})}))}else t.showToast({title:this.language.myinfo.nickname[2],icon:"none",duration:1e3})},_cancel:function(){this.mask_display=!1},choiceImg:function(){var n=this;t.chooseImage({count:1,success:function(i){var a={src_img:i.tempFilePaths[0],module:"app",action:"user",app:"set_user"};n.$req.upLoad(i.tempFilePaths[0],a).then((function(i){var a=i.code,e=i.message;200===a?(t.showToast({title:n.language.myinfo.upload_seccess,duration:1500,icon:"none"}),n._axios()):t.showToast({title:e,duration:1500,icon:"none"})}))}})}}};n.default=i}).call(this,i("543d")["default"])},7868:function(t,n,i){"use strict";var a=i("5835"),e=i.n(a);e.a},dc55:function(t,n,i){"use strict";var a;i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return a}));var e=function(){var t=this,n=t.$createElement;t._self._c},s=[]}},[["09d5","common/runtime","common/vendor"]]]);