(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-myStore-activities_pro"],{"040a":function(t,i,e){"use strict";e.r(i);var n=e("d94a"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"414a":function(t,i,e){"use strict";var n=e("65ce"),a=e.n(n);a.a},"54fd":function(t,i,e){"use strict";e.r(i);var n=e("f209"),a=e("040a");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("414a");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"27c6cc70",null,!1,n["a"],s);i["default"]=r.exports},"65ce":function(t,i,e){var n=e("e660");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("451473e6",n,!0,{sourceMap:!1,shadowMode:!1})},d94a:function(t,i,e){"use strict";var n=e("4ea4");e("a9e3"),e("25eb"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var a=n(e("1da1")),o={data:function(){return{load:!1,title:"活动商品",display:!1,id:"",list:[],tabIndex:0,type:"",show:!1,tishi:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/tishi.png",noCol:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/lALPDgtYusvs3aLM-szc_220_250.png",num:0,num1:"",pro:{},act_num:"",price:"",product_id:""}},watch:{tabIndex:function(t){this.load=!1,this.axios()}},onLoad:function(t){this.id=t.id,this.type=t.type},onShow:function(){var t=this;this.isLogin((0,a.default)(regeneratorRuntime.mark((function i(){var e,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.getDetail();case 2:return i.next=4,t.axios();case 4:0==t.tabIndex&&(e=(new Date).getTime(),n=new Date(t.pro.join_endtime).getTime(),t.show=e<n);case 5:case"end":return i.stop()}}),i)}))))},methods:{changeLoginStatus:function(){},toEdit1:function(t){uni.setStorageSync("proObject",t),uni.navigateTo({url:"/pagesA/myStore/activities_set?edit=true&type="+this.type})},getDetail:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var e,n,a,o,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e={module:"app",action:"platform_activities",m:"activity_details",activityType:t.type,id:t.id},i.next=3,t.$req.post({data:e});case 3:n=i.sent,a=n.code,o=n.data,s=n.message,200==a?t.pro=o[0]:uni.showToast({title:s,icon:"none"});case 8:case"end":return i.stop()}}),i)})))()},confirm:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var e,n,a,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.act_num){i.next=3;break}return uni.showToast({title:t.language.activities_pro.inventoryTips,icon:"none"}),i.abrupt("return",!1);case 3:if(!(Number.parseInt(t.num)+Number.parseInt(t.act_num)>t.num1)){i.next=6;break}return uni.showToast({title:t.language.activities_pro.addinventoryTips,icon:"none"}),i.abrupt("return",!1);case 6:return e={module:"app",action:"platform_activities",m:"add_num",id:t.product_id,activityType:t.type,num:Number.parseInt(t.act_num)},i.next=9,t.$req.post({data:e});case 9:n=i.sent,a=n.code,o=n.message,uni.showToast({title:o,icon:"none"}),200==a&&(t.load=!1,t.display=!1,t.axios());case 14:case"end":return i.stop()}}),i)})))()},cancel:function(){this.act_num="",this.display=!1},delPro:function(t){var i=this,e={module:"app",action:"platform_activities",m:"del_pro",activityType:this.type,id:t.id};this.$req.post({data:e}).then((function(t){var e=t.code,n=(t.pro,t.message);uni.showToast({title:n,icon:"none"}),200==e&&i.axios()}))},reqSH:function(t,i){var e=this,n={module:"app",action:"platform_activities",m:"modify_pro",id:t.id,activityType:this.type,type:i};this.$req.post({data:n}).then((function(t){var i=t.code,n=(t.pro,t.message);uni.showToast({title:n,icon:"none"}),200==i&&e.axios()}))},toEdit:function(t){this.product_id=t.id,this.num1=t.num1,this.num=t.num,this.price=t.price,this.display=!0},axios:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var e,n,a,o,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e={module:"app",action:"platform_activities",m:"pro_list",id:t.id,type:t.tabIndex,activityType:t.type,mch_id:t.$store.state.shop_id?t.$store.state.shop_id:uni.getStorageSync("shop_id")},i.next=3,t.$req.post({data:e});case 3:n=i.sent,a=n.code,o=n.pro,s=n.message,200==a?(t.list=o,t.load=!0):uni.showToast({title:s,icon:"none"});case 6:case"end":return i.stop()}}),i)})))()}}};i.default=o},e660:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'.btnBox[data-v-27c6cc70]{position:fixed;bottom:0;left:0;right:0;height:%?98?%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%}.btnBox .btn[data-v-27c6cc70]{background-color:#ff612a;color:#fff;border:0!important;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.container[data-v-27c6cc70]{background-color:#f6f6f6;min-height:100vh}.container.pb[data-v-27c6cc70]{padding-bottom:%?100?%}.container_top[data-v-27c6cc70]{position:-webkit-sticky;position:sticky;z-index:888;top:0}.container_top .tab[data-v-27c6cc70]{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff}.container_top .tab .li[data-v-27c6cc70]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?90?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?30?%;color:#999;border-bottom:1px solid #eee}.container_top .tab .active[data-v-27c6cc70]{position:relative;color:#ff612a;font-weight:700}.container_top .tab .active[data-v-27c6cc70]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?150?%;height:2px;background-color:#ff612a}.container .pro[data-v-27c6cc70]{padding-left:%?30?%;background-color:#fff;margin-bottom:%?20?%}.container .pro_top[data-v-27c6cc70]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?30?% 0;border-bottom:1px solid #e6e6e6}.container .pro_top .image[data-v-27c6cc70]{width:%?160?%;height:%?160?%;margin-right:%?22?%}.container .pro_top_right[data-v-27c6cc70]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;padding-right:%?20?%}.container .pro_top_right .proTitle[data-v-27c6cc70]{font-size:%?26?%;line-height:%?30?%;color:#020202;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.container .pro_top_right .proSize[data-v-27c6cc70]{color:#999;font-size:%?24?%;line-height:%?24?%;margin-top:%?20?%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.container .pro_top_right .proPrice[data-v-27c6cc70]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?34?%;color:#666;font-size:%?24?%;line-height:%?24?%}.container .pro_top_right .proPrice .red[data-v-27c6cc70]{color:#ff7d00;font-weight:700;margin-right:%?40?%}.container .pro_top_right .proPrice .black[data-v-27c6cc70]{color:#343434}.container .pro_bottom[data-v-27c6cc70]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding-right:%?10?%}.container .pro_bottom .btn[data-v-27c6cc70]{width:%?140?%;height:%?50?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;margin-right:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?24?%;border:1px solid #ff612a;color:#ff612a;background-color:#fff}.mask[data-v-27c6cc70]{height:100vh;width:100%;background-color:rgba(0,0,0,.5);position:fixed;top:0;left:0;z-index:999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mask_content[data-v-27c6cc70]{width:%?550?%;height:%?414?%;background-color:#fff;text-align:center;font-size:%?30?%;-webkit-border-radius:%?23?%;border-radius:%?23?%;position:relative}.mask_content > .btns[data-v-27c6cc70]{border-top:1px solid #eee;width:100%;font-size:%?34?%;color:#005edf;height:%?94?%;position:absolute;bottom:0;left:0}.cancel[data-v-27c6cc70]{border-right:1px solid #eee;color:#999}.cancel[data-v-27c6cc70],\n.confirm[data-v-27c6cc70]{width:50%;float:left;height:100%;line-height:%?98?%;font-size:%?34?%}.confirm[data-v-27c6cc70]{color:#ff612a}.mask_content .title[data-v-27c6cc70]{position:relative;border:none;background:#f0f6f6;color:#ff612a;font-size:%?34?%;font-weight:500;-webkit-border-top-right-radius:%?22?%;border-top-right-radius:%?22?%;-webkit-border-top-left-radius:%?22?%;border-top-left-radius:%?22?%;line-height:%?94?%}.mask_content .total[data-v-27c6cc70]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?24?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?490?%;margin:0 auto;margin-top:%?24?%}.mask_content .total img[data-v-27c6cc70]{width:%?24?%;height:%?24?%}.mask_content .total p[data-v-27c6cc70]{color:#888;font-size:%?24?%}.mask_content uni-input[data-v-27c6cc70]{width:%?490?%;height:%?70?%;border:%?1?% solid #ddd;-webkit-border-radius:%?8?%;border-radius:%?8?%;margin:0 auto;margin-top:%?58?%;text-align:left;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:%?21?%}.mask_content uni-input.input-placeholder[data-v-27c6cc70]{font-size:%?28?%;font-weight:500;color:#b8b8b8}.noFindDiv .noFindButton[data-v-27c6cc70]{width:%?240?%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;margin:%?61?% auto 0;border:1px solid #ff612a;color:#ff612a;background-color:#fff}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=i},f209:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container",class:{pb:0==t.tabIndex}},[e("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(i){arguments[0]=i=t.$handleEvent(i),t.changeLoginStatus.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"container_top"},[e("heads",{attrs:{title:t.language.activities_pro.title}}),e("v-uni-view",{staticClass:"tab"},[e("v-uni-view",{staticClass:"li",class:{active:0==t.tabIndex},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabIndex=0}}},[t._v(t._s(t.language.activities_pro.goodList))]),e("v-uni-view",{staticClass:"li",class:{active:1==t.tabIndex},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabIndex=1}}},[t._v(t._s(t.language.activities_pro.examined))])],1)],1),t.load?e("v-uni-view",[t._l(t.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"pro"},[e("v-uni-view",{staticClass:"pro_top"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.img}}),e("v-uni-view",{staticClass:"pro_top_right"},[e("v-uni-view",{staticClass:"proTitle",style:1==t.tabIndex?"display: block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;":""},[t._v(t._s(i.group_title))]),e("v-uni-view",{staticClass:"proSize"},[t._v(t._s(t.language.activities_pro.size)+" "+t._s(i.names))]),e("v-uni-view",{staticClass:"proPrice",style:1==t.tabIndex?"margin-top: 20rpx":""},[e("v-uni-view",{staticClass:"red",class:{black:1==t.tabIndex}},[t._v("￥"+t._s(i.price))]),e("v-uni-view",[t._v(t._s(t.language.activities_pro.kucun)+" "+t._s(i.num))])],1),1==t.tabIndex?e("v-uni-view",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","font-size":"28rpx","line-height":"28rpx",color:"#FF7E00","margin-top":"12rpx"}},[t._v(t._s(0==i.audit_status?t.language.activities_pro.pendingReview:1==i.audit_status?t.language.activities_pro.inReview:t.language.activities_pro.auditFailure+i.reason))]):t._e()],1)],1),e("v-uni-view",{staticClass:"pro_bottom"},[0==i.audit_status?e("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.delPro(i)}}},[t._v(t._s(t.language.activities_pro.delete))]):t._e(),1==i.audit_status?e("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reqSH(i,0)}}},[t._v(t._s(t.language.activities_pro.undo))]):t._e(),2==i.audit_status?e("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEdit(i)}}},[t._v(t._s(t.language.activities_pro.addInventory))]):t._e(),1!=i.audit_status&&2!=i.audit_status?e("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEdit1(i)}}},[t._v(t._s(t.language.activities_pro.editor))]):t._e(),0==i.audit_status?e("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reqSH(i,1)}}},[t._v(t._s(t.language.activities_pro.submit))]):t._e()],1)],1)})),0==t.tabIndex&&t.show&&t.list.length?e("v-uni-view",{staticClass:"btnBox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pagesA/myStore/activities_add?id="+t.id+"&type="+t.type+"&platform_activities_id="+t.id)}}},[e("v-uni-view",{staticClass:"btn"},[t._v(t._s(t.language.activities_pro.addGoods))])],1):t._e(),!t.list.length&&0==t.tabIndex&&t.load?e("div",{staticClass:"noFindDiv"},[e("div",[e("img",{staticClass:"noFindImg",attrs:{src:t.noCol}})]),e("span",{staticClass:"noFindText"},[t._v(t._s(t.language.activities_pro.nogoods))]),t.show?e("div",{staticClass:"noFindButton",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pagesA/myStore/activities_add?id="+t.id+"&type="+t.type+"&platform_activities_id="+t.id)}}},[t._v(t._s(t.language.activities_pro.addGoods))]):t._e()]):t._e(),!t.list.length&&1==t.tabIndex&&t.load?e("div",{staticClass:"noFindDiv"},[e("div",[e("img",{staticClass:"noFindImg",attrs:{src:t.noCol}})]),e("span",{staticClass:"noFindText"},[t._v(t._s(t.language.activities_pro.nogoods1))]),t.show?e("div",{staticClass:"noFindButton",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pagesA/myStore/activities_add?id="+t.id+"&type="+t.type+"&platform_activities_id="+t.id)}}},[t._v(t._s(t.language.activities_pro.addGoods))]):t._e()]):t._e()],2):e("toload",{attrs:{load:t.load}}),e("div",{staticClass:"kucun-mask"},[t.display?e("div",{staticClass:"mask",on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i)}}},[e("div",{staticClass:"mask_content"},[e("div",{staticClass:"title"},[t._v(t._s(t.language.activities_pro.addInventory))]),e("v-uni-input",{attrs:{type:"text",placeholder:t.language.activities_pro.addInventoryPlaceholder,"placeholder-class":"input-placeholder","placeholder-style":"color: #B8B8B8;font-weight: 500;font-size: 28rpx;padding-left: 21rpx"},model:{value:t.act_num,callback:function(i){t.act_num=i},expression:"act_num"}}),e("div",{staticClass:"total"},[e("img",{attrs:{src:t.tishi,alt:""}}),e("p",[t._v(t._s(t.language.activities_pro.totalInventory)+" "+t._s(t.num1))])]),e("div",{staticClass:"btns"},[e("div",{staticClass:"cancel",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cancel()}}},[t._v(t._s(t.language.activities_pro.cancel))]),e("div",{staticClass:"confirm",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.confirm()}}},[t._v(t._s(t.language.activities_pro.confirm))])])],1)]):t._e()])],1)},o=[]}}]);