(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-receivingAddress"],{"02f9":function(e,t,a){"use strict";a.r(t);var i=a("e6e4"),n=a("d09b");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("f168");var d,r=a("f0c5"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"f94913da",null,!1,i["a"],d);t["default"]=o.exports},3036:function(e,t,a){var i=a("e24c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("2e841a46",i,!0,{sourceMap:!1,shadowMode:!1})},"32d4":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".delmodel[data-v-f94913da]{width:100%;min-height:100vh;position:fixed;background:rgba(0,0,0,.6);top:0;z-index:9999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.delmodel-card[data-v-f94913da]{width:%?550?%;height:%?250?%;background:#fff;-webkit-border-radius:%?23?%;border-radius:%?23?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.delmodel-card-body[data-v-f94913da]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#020202;font-size:%?30?%}.delmodel-card-btn[data-v-f94913da]{border-top:%?2?% solid #eee;-webkit-column-count:2;column-count:2;-webkit-column-rule:%?2?% solid #eee;column-rule:%?2?% solid #eee;text-align:center}.delmodel-card-btn .cancel[data-v-f94913da]{color:#999;font-size:%?34?%;line-height:%?100?%}.delmodel-card-btn .confirm[data-v-f94913da]{color:#020202;font-size:%?34?%;line-height:%?100?%}.delmodel-card .cardbtn1[data-v-f94913da]{-webkit-column-count:1;column-count:1}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */",""]),e.exports=t},"417a":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"receivingAddress  ",staticStyle:{"min-height":"100vh"},style:e.address?"background-color: #F6f6f6;":""},[a("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(t){arguments[0]=t=e.$handleEvent(t),e.changeLoginStatus.apply(void 0,arguments)}}}),a("div",{staticStyle:{position:"relative"}},[a("heads",{attrs:{title:e.language.receivingAddress.title}}),e.manage?a("div",{staticClass:"manage",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._manage.apply(void 0,arguments)}}},[e._v(e._s(e.address_m))]):e._e()],1),e.address.length?a("ul",{staticClass:"address"},e._l(e.address,(function(t,i){return a("li",{key:t.id},[a("div",{staticClass:"address_top",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e._state_manage(t)}}},[a("div",[a("div",{staticClass:"address_user"},[a("span",{staticStyle:{"margin-right":"30upx"}},[e._v(e._s(t.name))]),a("span",[e._v(e._s(t.tel))])]),a("div",{staticClass:"address_xs"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.is_default,expression:"item.is_default==0?false:true"}],staticClass:"address_ms"},[e._v(e._s(e.language.receivingAddress.defaults))]),a("p",[e._v(e._s(t.address_xq))])])]),e.re_img?a("img",{staticClass:"quan_img",attrs:{src:e.addre_id==t.addr_id?e.circle_hei:e.circle_hui}}):e._e()]),e.del?a("div",{staticClass:"address_foot"},[a("div",{staticClass:"address_left",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e._default(t.addr_id,i)}}},[a("img",{staticClass:"quan_img",attrs:{src:0==t.is_default?e.circle_hui:e.circle_hei}}),a("span",[e._v(e._s(e.language.receivingAddress.defaultaddress))])]),a("div",{staticClass:"address_right",staticStyle:{display:"flex"}},[a("div",{on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.navTo("addAddress?state_addre=2&addr_id="+t.addr_id)}}},[a("img",{staticClass:"quan_img",attrs:{src:e.edtAdd}}),a("span",{staticStyle:{"margin-right":"30rpx"}},[e._v(e._s(e.language.receivingAddress.edit))])]),a("div",{on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.delAddress(t.addr_id,i)}}},[a("img",{staticClass:"quan_img",attrs:{src:e.delAdd}}),a("span",[e._v(e._s(e.language.receivingAddress.deletes))])])])]):e._e()])})),0):a("div",{staticClass:"address_wu",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("addAddress?state_addre=1")}}},[a("img",{attrs:{src:e.add}}),a("p",[e._v(e._s(e.language.receivingAddress.add_address))])]),e.address?a("div",{staticClass:"bottom  ",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("addAddress?state_addre=1")}}},[e._v(e._s(e.language.receivingAddress.addnewaddress))]):e._e(),a("lkdelModel",{attrs:{content:e.text,canceltext:e.language.receivingAddress.cancel,confirmtext:e.language.receivingAddress.confirm},on:{"on-click":function(t){arguments[0]=t=e.$handleEvent(t),e._delAddress.apply(void 0,arguments)}},model:{value:e.lkdelModel,callback:function(t){e.lkdelModel=t},expression:"lkdelModel"}})],1)},s=[]},"47ca":function(e,t,a){var i=a("32d4");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("0303d854",i,!0,{sourceMap:!1,shadowMode:!1})},5083:function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var n=i(a("1da1")),s=i(a("5530")),d=a("2f62"),r=i(a("02f9")),o={data:function(){return{title:"收货地址",add:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/tianjiadizhi2x.png",edtAdd:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/bianjidizhi2x.png",delAdd:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/shanchudizhi2x.png",fastTap:!0,manage:"",del:"",del_index:-1,state_manage:"",address:"",circle_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehui2x.png",circle_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/2.png",order_id:"",re_img:"",addre_id:"",address_m:"管理",flag:!0,lkdelModel:!1,delobj:{},text:""}},onShow:function(){this._axios(),this.address_id=this.$store.state.address_id,this.address_m=this.language.receivingAddress.management},onLoad:function(e){this.order_id=this.$store.state.order_id,this.state_manage=e.state_manage,this.addre_id=e.addre_id,uni.setStorageSync("canshu","false"),1==this.state_manage?(this.manage=!0,this.del=!1,this.re_img=!0):2==this.state_manage&&(this.manage=!1,this.del=!0,this.re_img=!1)},components:{lkdelModel:r.default},methods:(0,s.default)({changeLoginStatus:function(){this._axios()},_state_manage:function(e){this.addre_id=e.id;var t=this;t.$store.state.address_id=e.id,uni.setStorageSync("chooseAddress",e)},_manage:function(){this.del=!this.del,this.del?this.address_m=this.language.receivingAddress.complete:this.address_m=this.language.receivingAddress.management},delAddress:function(e,t){this.delobj={addr_id:e,index:t},1==this.address[t].is_default?this.text=this.language.receivingAddress.confirm_delete:this.text="",this.lkdelModel=!0},_delAddress:function(){var e=this,t=this.delobj,a=t.addr_id,i=t.index;if(this.fastTap){this.fastTap=!1;var n=this,s={module:"app",action:"address",app:"del_adds",addr_id:a};this.$req.post({data:s}).then((function(t){n.fastTap=!0;var a=t.code;200===a?(1===e.address.length?n.$store.state.address_id_def="":1===e.address[i].is_default&&(n.$store.state.address_id_def="",uni.setStorageSync("lkt_address_id_def","")),uni.showToast({title:n.language.receivingAddress.delete_success,icon:"none",duration:1e3}),n._axios()):uni.showToast({title:t.message,duration:1500,icon:"none"})})).catch((function(e){n.fastTap=!0})),this.lkdelModel=!1}},_default:function(e,t){var a=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var n,s,d,r,o,c;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a.fastTap){i.next=2;break}return i.abrupt("return");case 2:return a.fastTap=!1,n=a,s={module:"app",action:"address",app:"set_default",addr_id:e},i.prev=5,i.next=8,a.$req.post({data:s});case 8:if(d=i.sent,r=d.code,o=d.message,200===r){for(c=0;c<n.address.length;c++)n.address[c].is_default=0;n.address[t].is_default=1,n.$store.state.address_id_def=n.address[t].id}else uni.showToast({title:o,duration:1500,icon:"none"});n.fastTap=!0,i.next=18;break;case 15:i.prev=15,i.t0=i["catch"](5),n.fastTap=!0;case 18:case"end":return i.stop()}}),i,null,[[5,15]])})))()},_axios:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a,i,n,s,d,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,i={module:"app",action:"address",app:"index"},t.next=4,e.$req.post({data:i});case 4:if(n=t.sent,s=n.adds||[],200!=n.code){t.next=20;break}if(a.address=s,!uni.getStorageSync("address_default")){t.next=18;break}d=0;case 10:if(!(d<s.length)){t.next=17;break}if(1!=s[d].is_default){t.next=14;break}return a.addre_id=s[d].id,t.abrupt("break",17);case 14:d++,t.next=10;break;case 17:uni.removeStorageSync("address_default");case 18:t.next=21;break;case 20:a.address="";case 21:if(s.length>0&&""==a.$store.state.address_id_def)if(""==a.$store.state.address_id_def)for(r in s)1==s[r].is_default&&(a.$store.state.address_id_def=s[r].id,uni.setStorageSync("lkt_address_id_def",s[r].id),a.$store.state.address_id=s[r].id);else a.$store.state.address_id_def=a.$store.state.address_id_def,uni.setStorageSync("lkt_address_id_def",a.$store.state.address_id_def);case 22:case"end":return t.stop()}}),t)})))()}},(0,d.mapMutations)({address_id:"SET_ADDRESS_ID"}))};t.default=o},"6aac":function(e,t,a){"use strict";a.r(t);var i=a("417a"),n=a("8d71");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("6f00");var d,r=a("f0c5"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"0015e39c",null,!1,i["a"],d);t["default"]=o.exports},"6f00":function(e,t,a){"use strict";var i=a("3036"),n=a.n(i);n.a},"8d71":function(e,t,a){"use strict";a.r(t);var i=a("5083"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},"9fc5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:["value","content","noconfirm","nocancel","canceltext","confirmtext"],data:function(){return{text:"确认将这个地址删除？",show:!1,isnoconfirm:!0,iscancel:!0}},watch:{value:function(e){this.show=e},show:function(e){this.$emit("input",e)}},created:function(){this.setLang(),this.text=this.language.delModel.text,this.noconfirm?this.isnoconfirm=!1:this.isnoconfirm=!0,this.nocancel?this.iscancel=!1:this.iscancel=!0},methods:{cancel:function(){this.show=!this.show},handleClick:function(){this.$emit("on-click")}}};t.default=i},d09b:function(e,t,a){"use strict";a.r(t);var i=a("9fc5"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},e24c:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".head[data-v-0015e39c],\n.address_top[data-v-0015e39c],\n.address_xs[data-v-0015e39c],\n.address_foot[data-v-0015e39c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row;flex-flow:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.head[data-v-0015e39c]{padding:%?20?% %?30?%;font-size:%?40?%;border-bottom:1px solid #f6f6f6;height:%?88?%;position:fixed;top:0;left:0;width:100%;background-color:#fff;color:#020202}\n/* 加入 border: 20upx solid transparent;border-left: 0;background-clip: padding-box;解决返回箭头的点击区域太小问题*/.head img[data-v-0015e39c]{width:%?24?%;height:%?36?%;border:%?20?% solid transparent;border-left:0;background-clip:padding-box}.manage1[data-v-0015e39c]{width:%?120?%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?30?%;color:#020202;margin-left:auto}\n/* .head p{text-align: center;width: 100%;position: absolute;left: 0;} */.head p[data-v-0015e39c]{text-align:center;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.manage[data-v-0015e39c]{position:absolute;font-size:%?30?%;right:%?20?%;bottom:0;width:%?100?%;height:%?88?%;line-height:%?88?%;z-index:999999;color:#fff}.address_wu[data-v-0015e39c]{margin:%?60?% %?30?%;border:1px dashed #ddd;padding:%?34?% 0;text-align:center;font-size:%?30?%;color:#9d9d9d}.address_wu img[data-v-0015e39c]{width:%?62?%;height:%?62?%;margin-bottom:%?20?%}.address[data-v-0015e39c]{background-color:#f6f6f6;padding-bottom:%?100?%;position:relative}.address li[data-v-0015e39c]{background-color:#fff;padding:%?20?% %?30?% 0 %?30?%;margin-bottom:%?20?%}.address li[data-v-0015e39c]:last-child{margin-bottom:0}.address_top[data-v-0015e39c]{padding-bottom:%?30?%}.address_user span[data-v-0015e39c]{font-weight:700;font-size:%?30?%;color:#020202}.address_xs[data-v-0015e39c]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin-top:%?10?%}.address_xs p[data-v-0015e39c]{font-size:%?24?%;color:#9d9d9d;margin-right:%?40?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:%?530?%}.address_ms[data-v-0015e39c]{width:%?52?%;text-align:center;color:#fff;background-color:#ff7d00;font-size:%?20?%;margin-right:%?20?%;padding-top:%?2?%}.address_foot[data-v-0015e39c]{height:%?60?%;border-top:1px solid #f6f6f6;font-size:%?24?%;color:#020202}.quan_img[data-v-0015e39c]{width:%?30?%;height:%?30?%;margin-right:%?10?%;vertical-align:sub}.bottom[data-v-0015e39c]{height:%?98?%;width:100%;font-size:%?30?%;color:#fff;text-align:center;line-height:%?98?%;position:fixed;left:0;bottom:0;background-color:#ff612a}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */",""]),e.exports=t},e6e4:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("v-uni-view",{staticClass:"delmodel"},[a("v-uni-view",{staticClass:"delmodel-card"},[a("v-uni-view",{staticClass:"delmodel-card-body"},[e._v(e._s(e.content||e.text))]),a("v-uni-view",{staticClass:"delmodel-card-btn",class:{cardbtn1:!e.iscancel}},[e.iscancel?a("v-uni-view",{staticClass:"cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}},[e._v(e._s(e.canceltext||e.language.delModel.cancel))]):e._e(),e.isnoconfirm?a("v-uni-view",{staticClass:"confirm",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick.apply(void 0,arguments)}}},[e._v(e._s(e.confirmtext||e.language.delModel.confirm))]):e._e()],1)],1)],1):e._e()},s=[]},f168:function(e,t,a){"use strict";var i=a("47ca"),n=a.n(i);n.a}}]);