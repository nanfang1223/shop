(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-collection-collection"],{"0111":function(t,e,i){"use strict";i.r(e);var a=i("493b"),l=i("ce85");for(var n in l)"default"!==n&&function(t){i.d(e,t,(function(){return l[t]}))}(n);i("4b37");var o,s=i("f0c5"),c=Object(s["a"])(l["default"],a["b"],a["c"],!1,null,"4b7d607e",null,!1,a["a"],o);e["default"]=c.exports},"261f":function(t,e,i){"use strict";var a=i("4ea4");i("c740"),i("4160"),i("a434"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=a(i("5530")),n=i("2f62"),o={data:function(){return{noCol:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/noCol.png",toImage:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/jiantou2x.png",collection:[],collection1:[],state:"编辑",statevalue:!1,selectvalue:"",selectvalue1:"",selectAll:"",selectAll1:"",selectArray:[],selectArray1:[],deletecolle:{},quan_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehui2x.png",quan_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/2.png",display_img:[],display_img1:[],flag:!0,fastTap:!0,navActive:!0,navType:1,loadFlag:!1}},onLoad:function(){this.navType=1,this._axios()},onShow:function(){var t=this;this.state=this.language.collection.edit,t.LaiKeTuiCommon.getLKTApiUrl().then((function(){t.isLogin((function(){t._axios()}))}))},methods:(0,l.default)({changeLoginStatus:function(){this._axios()},_goStore:function(t){uni.navigateTo({url:"/pagesA/store/store?shop_id="+t.mch_id})},_find:function(t){this.pro_id(t),uni.navigateTo({url:"discover?pro_id="+t})},_back:function(){this.flag=!1,uni.navigateBack({delta:1})},_state:function(){this.collection1.length||this.collection.length?(this.selectAll="",this.selectAll1="",this.statevalue=!this.statevalue,this.statevalue?this.state=this.language.collection.complete:this.state=this.language.collection.edit):(this.statevalue=!this.statevalue,this.statevalue?this.state=this.language.collection.complete:this.state=this.language.collection.edit)},_axios:function(){var t=this,e={module:"app",action:"addFavorites",app:"collection",type:this.navType};this.$req.post({data:e}).then((function(e){t.loadFlag=!0,200==e.code?1==t.navType?t.collection1=e.data:t.collection=e.data:(t.collection="",uni.showToast({title:e.message,duration:1500,icon:"none"}))}))},changeNav:function(t,e){this.navActive=t,this.navType=e,this.loadFlag=!1,this._axios()},_checkedOne:function(t,e){if(1==this.navType){var i=this.selectArray1.findIndex((function(e){return t.id==e.id}));if(this.statevalue){this.$refs.img;i<0?(this.selectArray1.push(t),this.$set(this.display_img1,e,!0)):(this.selectArray1.splice(i,1),this.$set(this.display_img1,e,!1)),this.selectArray1.length==this.collection1.length?this.selectAll1=!0:this.selectAll1=!1}}else{i=this.selectArray.findIndex((function(e){return t.id==e.id}));if(this.statevalue){this.$refs.img;i<0?(this.selectArray.push(t),this.$set(this.display_img,e,!0)):(this.selectArray.splice(i,1),this.$set(this.display_img,e,!1)),this.selectArray.length==this.collection.length?this.selectAll=!0:this.selectAll=!1}}},_selectHandle:function(t){t.selectAll1=!t.selectAll1;this.$refs.img;if(t.selectAll1)for(var e=0;e<t.collection1.length;e++)this.$set(t.selectArray1,e,t.collection1[e]),this.$set(t.display_img1,e,!0);else{t.selectArray1=[];for(e=0;e<t.collection1.length;e++)this.$set(t.display_img1,e,!1)}return t},_selectAll:function(){if(1==this.navType){var t={selectAll1:this.selectAll1,display_img1:this.display_img1,selectArray1:this.selectArray1,collection1:this.collection1};t=this._selectHandle(t),this.selectAll1=t.selectAll1}else{t={selectAll1:this.selectAll,display_img1:this.display_img,selectArray1:this.selectArray,collection1:this.collection};t=this._selectHandle(t),this.selectAll=t.selectAll1}},_delete:function(){var t=this;if(this.fastTap)if(this.fastTap=!1,this.selectArray1.length||this.selectArray.length){this.deletecolle.collection="",this.deletecolle.access_id=this.access_id,1==this.navType?this.selectArray1.forEach((function(e,i){t.deletecolle.collection+=e.id+","})):this.selectArray.forEach((function(e,i){t.deletecolle.collection+=e.id+","})),this.deletecolle.module="app",this.deletecolle.action="addFavorites",this.deletecolle.app="removeFavorites";var e=this.deletecolle;this.$req.post({data:e}).then((function(e){t.fastTap=!0;var i=[],a=[];if(200==e.code){var l=t.deletecolle.collection;for(var n in l)1==t.navType?(t.selectArray1.forEach((function(t,e){l[n]!=t.id&&i.push(t)})),t.selectArray1=i):(t.selectArray.forEach((function(t,e){l[n]!=t.id&&a.push(t)})),t.selectArray=a);t.display_img1=[];for(var o=0;o<t.collection1.length;o++)t.display_img1.push(!1);t.display_img=[];for(o=0;o<t.collection.length;o++)t.display_img.push(!1);var s="";s="编辑"==t.language.collection.edit?e.message:t.language.collection.Cancelled_successfully,uni.showToast({title:s,duration:1500,icon:"none",success:function(){setTimeout((function(){t.collection=[],t.collection1=[],t._axios(),t.selectArray1=[],t.statevalue=!t.statevalue,t.state=t.language.collection.edit}),1500)}})}else uni.showToast({title:e.message,duration:1500,icon:"none"});for(o=0;o<t.display_img.length;o++)t.$set(t.display_img1,o,!1)})).catch((function(e){t.fastTap=!0}))}else this.fastTap=!0,uni.showToast({title:this.language.collection.commodity_delete,duration:1e3,icon:"none"})},_goods:function(t){this.pro_id(t),uni.navigateTo({url:"../goods/goodsDetailed"})}},(0,n.mapMutations)({pro_id:"SET_PRO_ID"})),components:{}};e.default=o},"493b":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLoginStatus.apply(void 0,arguments)}}}),i("heads",{attrs:{title:t.language.collection.title}}),t.navActive?i("div",{staticClass:"bg_F6"},[t.collection1.length&&1==t.navType?i("p",{staticClass:"manege",class:{active:!t.collection1.length},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._state.apply(void 0,arguments)}}},[t._v(t._s(t.state))]):t._e(),t.collection1.length&&2==t.navType?i("p",{staticClass:"manege",class:{active:!t.collection.length},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._state.apply(void 0,arguments)}}},[t._v(t._s(t.state))]):t._e()]):i("div",{staticClass:"bg_F6"},[t.collection.length&&1==t.navType?i("p",{staticClass:"manege",class:{active:!t.collection1.length},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._state.apply(void 0,arguments)}}},[t._v(t._s(t.state))]):t._e(),t.collection.length&&2==t.navType?i("p",{staticClass:"manege",class:{active:!t.collection.length},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._state.apply(void 0,arguments)}}},[t._v(t._s(t.state))]):t._e()]),i("v-uni-view",{staticClass:"twins "},[i("v-uni-view",{staticClass:"nav_twin",class:{nav_twin_hover:t.navActive},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeNav(!0,1)}}},[t._v(t._s(t.language.collection.commodity_collection)),t.navActive?i("v-uni-view",{staticClass:"nav_line"}):t._e()],1),i("v-uni-view",{staticClass:"nav_twin",class:{nav_twin_hover:!t.navActive},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeNav(!1,2)}}},[t._v(t._s(t.language.collection.shop_collection)),t.navActive?t._e():i("v-uni-view",{staticClass:"nav_line"})],1)],1),t.loadFlag?[1==t.navActive?i("v-uni-view",{staticStyle:{flex:"1",overflow:"scroll"}},[t.collection1.length?i("ul",[t._l(t.collection1,(function(e,a){return i("li",{key:e.p_id,staticClass:"list_li"},[t.statevalue?i("div",{staticClass:"list_imgBox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._checkedOne(e,a)}}},[i("img",{staticClass:"quan_img list_img",attrs:{src:t.display_img1[a]?t.quan_hei:t.quan_hui}})]):t._e(),i("img",{attrs:{src:e.imgurl},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._goods(e.p_id)}}}),i("v-uni-view",{class:t.statevalue?"sc_right_X":"sc_right_Y",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._goods(e.p_id)}}},[i("div",{staticClass:"describe",class:{left:t.statevalue}},[i("span",[t._v(t._s(e.product_title))])]),i("v-uni-view",{staticClass:"dp_css"},[t._v(t._s(t.language.collection.shop)+"："+t._s(e.mch_name))]),i("div",{staticClass:"collection_button"},[i("span",{staticClass:"span_b1"},[t._v("￥"+t._s(e.price))]),i("span",{staticClass:"span_b2"},[t._v("￥"+t._s(e.yprice))]),i("div",{staticStyle:{border:"2rpx solid #FF612A",color:"#FF612A"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t._find(e.p_id)}}},[t._v(t._s(t.language.collection.be_similar))])])],1)],1)})),i("li",{staticStyle:{height:"98rpx"}})],2):i("div",{staticClass:"noFindDiv"},[i("div",[i("img",{staticClass:"noFindImg",attrs:{src:t.noCol}})]),i("span",{staticClass:"noFindText"},[t._v(t._s(t.language.collection.commodity_Tips))])])]):i("v-uni-view",{},[t.collection.length?i("ul",t._l(t.collection,(function(e,a){return i("li",{key:a,staticClass:"list_li",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pagesA/store/store?shop_id="+e.mch_id)}}},[t.statevalue?i("div",{staticClass:"list_imgBox",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t._checkedOne(e,a)}}},[i("img",{staticClass:"quan_img list_img1",attrs:{src:t.display_img[a]?t.quan_hei:t.quan_hui}})]):t._e(),i("img",{staticClass:"dp_img",attrs:{src:e.img}}),i("v-uni-view",{staticClass:"dp_con"},[i("v-uni-view",{staticClass:"dp_con1"},[t._v(t._s(e.mch_name))]),i("v-uni-view",{staticClass:"dp_con2"},[t._v(t._s(e.collection_num)+t._s(t.language.collection.people_collection))])],1),i("v-uni-image",{staticClass:"dp_right",attrs:{src:t.toImage}})],1)})),0):i("div",{staticClass:"noFindDiv"},[i("div",[i("img",{staticClass:"noFindImg",attrs:{src:t.noCol}})]),i("span",{staticClass:"noFindText"},[t._v(t._s(t.language.collection.shop_Tips))])])]),t.statevalue&&1==t.navType?i("div",{staticClass:"del"},[i("div",{staticClass:"del_sele",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._selectAll.apply(void 0,arguments)}}},[i("img",{staticClass:"quan_img",attrs:{src:t.selectAll1?t.quan_hei:t.quan_hui}}),i("span",[t._v(t._s(t.language.collection.Select_all))])]),i("div",{staticClass:"del_div",staticStyle:{background:"#FF612A"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._delete.apply(void 0,arguments)}}},[t._v(t._s(t.language.collection.Cancel_collection))])]):t.statevalue?i("div",{staticClass:"del"},[i("div",{staticClass:"del_sele",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._selectAll.apply(void 0,arguments)}}},[i("img",{staticClass:"quan_img",attrs:{src:t.selectAll?t.quan_hei:t.quan_hui}}),i("span",[t._v(t._s(t.language.collection.Select_all))])]),i("div",{staticClass:"del_div",staticStyle:{background:"#FF612A"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._delete.apply(void 0,arguments)}}},[t._v(t._s(t.language.collection.Cancel_collection))])]):t._e()]:t._e()],2)},n=[]},"4b37":function(t,e,i){"use strict";var a=i("8e93"),l=i.n(a);l.a},"62d1":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".box[data-v-4b7d607e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100vh;overflow:hidden}.header[data-v-4b7d607e]{background-color:#fff;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?30?%}.header uni-view[data-v-4b7d607e]{font-size:%?32?%}.header img[data-v-4b7d607e]{width:%?24?%;height:%?36?%}.header p[data-v-4b7d607e]{font-size:%?40?%;color:#020202}.header p[data-v-4b7d607e]:last-child{font-size:%?28?%;font-weight:100}.manege[data-v-4b7d607e]{width:%?120?%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?30?%;color:#020202;margin-left:auto}ul[data-v-4b7d607e],\n.del[data-v-4b7d607e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.del[data-v-4b7d607e],\n.del_sele[data-v-4b7d607e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.del[data-v-4b7d607e]{height:%?98?%;width:100%;font-size:%?30?%;color:#242424;border-top:1px solid #eee;position:fixed;left:0;bottom:0;z-index:20;background-color:#fff;padding-left:%?30?%}.del_div[data-v-4b7d607e]{background-color:#ff612a;color:#fff;border:0!important;width:%?240?%;height:100%;line-height:%?98?%;text-align:center;margin-left:%?30?%}.del span[data-v-4b7d607e]{margin-left:%?0?%}.del > p[data-v-4b7d607e]{color:#e83737}ul[data-v-4b7d607e]{padding:%?30?% %?20?% 0 %?20?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap;font-size:%?30?%}li[data-v-4b7d607e]{width:100%;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-bottom:%?2?%;background-color:#fff;padding-bottom:%?20?%}.list_li[data-v-4b7d607e]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;-webkit-border-radius:%?0?%;border-radius:%?0?%;border-bottom:%?1?% solid #eee}.list_imgBox[data-v-4b7d607e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list_img[data-v-4b7d607e],\n.list_img1[data-v-4b7d607e]{width:%?34?%;height:%?34?%}li > img[data-v-4b7d607e]{width:%?200?%;height:%?200?%;vertical-align:middle;float:left}.describe[data-v-4b7d607e]{color:#020202;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.collection_button .span_b1[data-v-4b7d607e]{color:red}.collection_button .span_b2[data-v-4b7d607e]{color:#999;text-decoration:line-through;font-size:%?24?%;display:inline-block;margin-left:%?10?%}.collection_button div[data-v-4b7d607e]{border:1px solid #ff612a;color:#ff612a;background-color:#fff;width:%?100?%;height:%?44?%;font-size:%?24?%;font-weight:500;text-align:center;line-height:%?40?%;-webkit-border-radius:%?22?%;border-radius:%?22?%;float:right}.collection_button > div > img[data-v-4b7d607e]{vertical-align:inherit;width:%?8?%;height:%?14?%}.left[data-v-4b7d607e]{position:relative}.describe i[data-v-4b7d607e],\n.del i[data-v-4b7d607e]{width:%?30?%;height:%?30?%;border:%?1?% solid #999;-webkit-border-radius:50%;border-radius:50%}.describe i[data-v-4b7d607e]{display:block;position:absolute;left:0;top:%?8?%}.describe i > img[data-v-4b7d607e],\n.del i > img[data-v-4b7d607e]{vertical-align:top;width:%?28?%;height:%?28?%}.describe i > img[data-v-4b7d607e]{display:none}.active[data-v-4b7d607e]{opacity:.8}.quan_img[data-v-4b7d607e]{vertical-align:middle;margin-right:%?10?%;padding:%?10?%;width:%?34?%!important;height:%?34?%!important}.none1[data-v-4b7d607e]{text-align:center;padding-top:45%}.none1 img[data-v-4b7d607e]{width:%?160?%;height:%?160?%;display:block;margin:0 auto;margin-bottom:%?30?%}.sc_right_X[data-v-4b7d607e]{width:%?401?%;float:left;margin-left:%?30?%}.sc_right_Y[data-v-4b7d607e]{width:%?458?%;float:left;margin-left:%?30?%}.dp_css[data-v-4b7d607e]{font-size:%?24?%;font-family:PingFang-SC-Medium;font-weight:500;color:#999;margin-top:%?24?%;margin-bottom:%?32?%}.noFindDiv[data-v-4b7d607e]{padding-top:%?240?%!important}.nav_twin[data-v-4b7d607e]{font-size:%?30?%;font-family:PingFang-SC-Medium;color:#999;width:50%;text-align:center;float:left;height:%?90?%;line-height:%?90?%;position:relative}.twins[data-v-4b7d607e]{width:100%;height:%?90?%;background:#fff;border-top:1px solid #eee;border-bottom:1px solid #eee}.nav_twin_hover[data-v-4b7d607e]{font-size:%?30?%;font-family:PingFang-SC-Bold;font-weight:700;color:#ff612a}.nav_line[data-v-4b7d607e]{position:absolute;bottom:%?0?%;left:29.9%;width:%?150?%;height:2px;background-color:#ff612a;display:block}.dp_img[data-v-4b7d607e]{width:%?80?%!important;height:%?80?%!important;float:left}.dp_con[data-v-4b7d607e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?20?%;margin-right:%?30?%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.dp_con1[data-v-4b7d607e]{font-size:%?28?%;font-family:PingFang-SC-Medium;font-weight:500;color:#020202}.dp_con2[data-v-4b7d607e]{font-size:%?22?%;font-family:PingFang-SC-Medium;font-weight:500;color:#999}.dp_right[data-v-4b7d607e]{width:%?16?%;height:%?28?%;float:right;margin-top:%?30?%}.status_p[data-v-4b7d607e]{position:relative;z-index:9999;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding-right:%?30?%;font-size:%?28?%;color:#020202;background:#f8f8f8}.data_h_h[data-v-4b7d607e]{position:fixed;top:0;width:100%;background:#ff612a}.navtion[data-v-4b7d607e]{z-index:100;width:100%}.navtion > div[data-v-4b7d607e]{height:%?88?%}.bg_F6[data-v-4b7d607e]{background-color:#fff}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */",""]),t.exports=e},"8e93":function(t,e,i){var a=i("62d1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var l=i("4f06").default;l("ecfa1f58",a,!0,{sourceMap:!1,shadowMode:!1})},ce85:function(t,e,i){"use strict";i.r(e);var a=i("261f"),l=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=l.a}}]);