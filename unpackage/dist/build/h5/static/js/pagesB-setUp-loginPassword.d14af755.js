(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-setUp-loginPassword"],{"178a":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".setup-ul > li[data-v-1ace13b3]{padding:%?30?% 0;font-size:%?30?%;border-bottom:1px solid #eee}.setup-ul > li span[data-v-1ace13b3]{margin-right:%?30?%}.last[data-v-1ace13b3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.last i[data-v-1ace13b3],\n.color[data-v-1ace13b3],\n.active[data-v-1ace13b3]{margin-right:0!important;font-size:%?24?%;cursor:pointer}.last uni-input[data-v-1ace13b3]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.active[data-v-1ace13b3]{color:#9d9d9d}.input[data-v-1ace13b3]{width:%?250?%}.head[data-v-1ace13b3],\n.order_header[data-v-1ace13b3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.head[data-v-1ace13b3]{height:%?88?%;padding:0 %?30?%;border-bottom:1px solid #eee;font-size:%?40?%;color:#242424}.head_img[data-v-1ace13b3]{width:%?24?%;height:%?36?%}.head_search[data-v-1ace13b3]{width:%?40?%;height:%?40?%;visibility:hidden}.order_header[data-v-1ace13b3]{-webkit-justify-content:space-around;justify-content:space-around;width:100%;border-bottom:1px solid #d2d2d2}\n/* 优化 */.yh-setup-ul[data-v-1ace13b3]{position:relative}.yh-color[data-v-1ace13b3]{font-size:%?28?%}.yh-time[data-v-1ace13b3]{font-size:%?28?%;margin:0!important}.yh-setupButtomWrap[data-v-1ace13b3]{margin-top:%?72?%!important}.yh-setup-buttom[data-v-1ace13b3]{width:%?690?%;height:%?90?%;-webkit-border-radius:%?8?%;border-radius:%?8?%}.yh-isset[data-v-1ace13b3]{width:%?690?%;height:%?90?%;background-color:#fff;color:#000;border:1px solid #000;margin-top:10px}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */",""]),t.exports=e},"2bde":function(t,e){var s=function(t){var e=60;t.timer||(t.display=!1,t.count=e,t.timer=setInterval((function(){t.count>0&&t.count<=e?t.count--:(t.display=!0,clearInterval(t.timer),t.timer=null)}),1e3))};t.exports={_timeCommon:s}},"3a90":function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return i})),s.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[t.status?s("heads",{attrs:{title:t.language.setup2.loginPass.title}}):s("heads",{attrs:{title:t.language.setup2.loginPass.title2}}),s("toload",{attrs:{load:t.load}},[s("ul",{staticClass:"setup-ul yh-setup-ul"},[s("li",[s("v-uni-input",{attrs:{type:"number",disabled:"true",readonly:!0},model:{value:t.user_phone,callback:function(e){t.user_phone=e},expression:"user_phone"}})],1),s("li",{staticClass:"last"},[s("v-uni-input",{staticClass:"input",attrs:{"placeholder-style":"color:#b8b8b8",type:"number",placeholder:t.language.setup2.loginPass.code_placeHolder},model:{value:t.codeone,callback:function(e){t.codeone=e},expression:"codeone"}}),t.display?s("div",{staticClass:"color yh-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._verif.apply(void 0,arguments)}}},[t._v(t._s(t.language.setup2.loginPass.obtain))]):t._e(),t.display?t._e():s("div",{staticClass:"active yh-color"},[s("span",{ref:"time",staticClass:"yh-time"},[t._v(t._s(t.count)+"S")]),t._v(t._s(t.language.setup2.loginPass.again))])],1),s("li",[s("v-uni-input",{attrs:{"placeholder-style":"color:#b8b8b8",type:"password",placeholder:t.language.setup2.loginPass.pass_placeHolder},model:{value:t.passone,callback:function(e){t.passone=e},expression:"passone"}})],1),s("li",[s("v-uni-input",{attrs:{"placeholder-style":"color:#b8b8b8",type:"password",placeholder:t.language.setup2.loginPass.new_password},model:{value:t.passtwo,callback:function(e){t.passtwo=e},expression:"passtwo"}})],1),s("li",{staticClass:"yh-setupButtomWrap",attrs:{id:"setupButtomWrap"}},[s("div",{staticClass:"setup-buttom yh-setup-buttom",staticStyle:{background:"#FF612A"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._sub.apply(void 0,arguments)}}},[t._v(t._s(t.language.setup2.loginPass.confirm))])])])])],1)},i=[]},"6a52":function(t,e,s){"use strict";s.r(e);var a=s("b789"),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,(function(){return a[t]}))}(i);e["default"]=n.a},ac04:function(t,e,s){"use strict";var a=s("dddf"),n=s.n(a);n.a},acd9:function(t,e,s){"use strict";s.r(e);var a=s("3a90"),n=s("6a52");for(var i in n)"default"!==i&&function(t){s.d(e,t,(function(){return n[t]}))}(i);s("ac04");var o,u=s("f0c5"),l=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"1ace13b3",null,!1,a["a"],o);e["default"]=l.exports},b789:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s("2bde"),n={data:function(){return{load:!1,title:"修改登录密码",title1:"设置登录密码",status:!0,display:!0,count:"",timer:null,code:"",name:"",passone:"",passtwo:"",codeone:"",user_phone:"",rez:"",fastTap:!0,isset:!1,back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},onLoad:function(t){this.user_phone=uni.getStorageSync("user_phone")?uni.getStorageSync("user_phone"):this.$store.state.user_phone,this.status="true"==t.havePass,this.load=!0},methods:{_back:function(){uni.switchTab({url:"/pages/tabBar/my"})},_verif:function(){var t=this;if(this.fastTap){this.fastTap=!1;var e={module:"app",action:"user",app:"secret_key",phone:this.user_phone,message_type:0,message_type1:4};this.$req.post({data:e}).then((function(e){t.fastTap=!0;var s=e.code,n=e.message;if(200!=s)uni.showToast({title:n,duration:1e3,icon:"none"});else if(200==s){(0,a._timeCommon)(t);var i=300,o=i,u=setInterval((function(){o>0?o--:(clearInterval(u),u=null,t.code="")}),1e3)}})).catch((function(e){t.fastTap=!0}))}},_passone:function(){var t=/^[a-z0-9]{6,15}$/i;if(""!=this.passone){var e=t.test(this.passone);if(1!=e)return uni.showToast({title:this.language.setup2.loginPass.Tips[0],duration:1e3,icon:"none"}),this.allok=!1,!1;this.allok=!0}},_passtwo:function(){if(""!=this.passone&&""!=this.passtwo){if(this.passone!=this.passtwo||""==this.passtwo)return uni.showToast({title:this.language.setup2.loginPass.Tips[1],duration:1e3,icon:"none"}),this.allok=!1,!1;this.allok=!0}},_sub:function(){var t=this,e=/^[a-z0-9]{6,15}$/i;if(""!=this.passone&&(this.rez=e.test(this.passone)),this.fastTap)if(this.fastTap=!1,""==this.passone||""==this.passtwo||6!=this.codeone.length)uni.showToast({title:this.language.setup2.loginPass.Tips[2],duration:1e3,icon:"none",success:function(e){t.fastTap=!0}});else if(this.rez)if(""!=this.passtwo&&this.passone!=this.passtwo)uni.showToast({title:this.language.setup2.loginPass.Tips[4],duration:1e3,icon:"none",success:function(e){t.fastTap=!0}});else if(6!=this.codeone.length)uni.showToast({title:this.language.setup2.loginPass.Tips[5],duration:1e3,icon:"none",success:function(e){t.fastTap=!0}});else if(""!=this.passone&&this.passone==this.passtwo&&6==this.codeone.length){if(this.status)var s={module:"app",action:"user",app:"updatepassword",password:this.passtwo,phone:this.user_phone,keyCode:this.codeone};else s={module:"app",action:"user",app:"set_password",password:this.passtwo,phone:this.user_phone,keyCode:this.codeone};this.$req.post({data:s}).then((function(e){t.fastTap=!0;var s=e.code,a=e.message;200==s?(uni.showToast({title:t.language.setup2.loginPass.Tips[6],duration:1500,icon:"none",success:function(e){t.fastTap=!0}}),setTimeout((function(){uni.navigateBack({delta:1})}),1e3)):uni.showToast({title:a,duration:1e3,icon:"none"})})).catch((function(e){t.fastTap=!0}))}else uni.showToast({title:this.language.setup2.loginPass.Tips[2],duration:1e3,icon:"none",success:function(e){t.fastTap=!0}});else uni.showToast({title:this.language.setup2.loginPass.Tips[3],duration:1e3,icon:"none",success:function(e){t.fastTap=!0}})}}};e.default=n},dddf:function(t,e,s){var a=s("178a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=s("4f06").default;n("59264461",a,!0,{sourceMap:!1,shadowMode:!1})}}]);