(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-returnGoods-refund"],{"41ea":function(e,t,a){"use strict";a.r(t);var n=a("5c4a"),i=a("89f3");for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("d808");var r,d=a("f0c5"),o=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"5d238a6a",null,!1,n["a"],r);t["default"]=o.exports},"5c4a":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(t){arguments[0]=t=e.$handleEvent(t),e.changeLoginStatus.apply(void 0,arguments)}}}),a("heads",{attrs:{title:e.language.refund.title,returnR:e.returnR}}),e.return_suess?e._e():a("div",[a("ul",{staticClass:"order_goods"},e._l(e.order,(function(t,n){return a("li",{key:n,staticClass:"order_two"},[a("img",{attrs:{src:t.image}}),a("div",{staticClass:"order_two_div"},[a("p",{staticClass:"p_name"},[e._v(e._s(t.p_name))]),a("p",{staticClass:"color_one"},[e._v(e._s(t.size))])]),a("div",[a("p",[e._v("￥"+e._s(t.p_price))]),a("p",{staticClass:"color_two"},[e._v("x"+e._s(t.num))])])])})),0),a("div",{staticClass:"yh-line"}),a("ul",{staticClass:"refund_pay"},[3!=e.r_status&&3!=e.refund_type?a("li",[a("div",{staticClass:"right_d"},[a("div",{staticClass:"right_d_div"},[a("span",{staticClass:"leftText"},[a("span",[e._v(e._s(e.language.refund.amount))]),e._v("：")]),a("p",{staticClass:"refund_color font_red"},[e._v("￥")]),a("v-uni-input",{staticClass:"refund_color font_red",attrs:{type:"number"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.refund_price_rule.apply(void 0,arguments)}},model:{value:e.refund_price_,callback:function(t){e.refund_price_=t},expression:"refund_price_"}})],1),a("div",[a("span",{staticClass:"refund_color yh-refund_color"},[e._v(e._s(e.language.refund.most)+"￥"+e._s(e.refund_price))])])])]):e._e(),3==e.r_status?a("li",{staticStyle:{display:"flex","justify-content":"start"}},[a("span",{staticClass:"leftText"},[a("span",[e._v(e._s(e.language.refund.type))]),e._v("：")]),a("span",[e._v(e._s(e.language.refund.Return))])]):e._e(),a("li",{style:{"align-items":"flex-start"}},[a("span",{staticClass:"leftText"},[a("span",[e._v(e._s(3!=e.r_status&&3!=e.refund_type?e.language.refund.r_status[0]:e.language.refund.r_status[1]))]),e._v("：")]),a("v-uni-textarea",{staticClass:"input_text",staticStyle:{"margin-left":"0"},attrs:{rows:"4",maxlength:"200",placeholder:e.language.refund.input_placeholder},on:{keydown:function(t){arguments[0]=t=e.$handleEvent(t),e._text.apply(void 0,arguments)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),a("li",{staticClass:"evaluat_ul evaluat_imgBox"},[a("span",{staticClass:"yh-evaluat_ul leftText"},[a("span",[e._v(e._s(e.language.refund.upload))]),e._v("：")]),e._l(e.src,(function(t,n){return a("div",{key:n,staticClass:"evaluat_li"},[a("img",{staticClass:"evaluat_img",attrs:{src:t},on:{touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e._touchstart(n)},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e._touchend.apply(void 0,arguments)}}}),a("img",{staticClass:"img_dele",attrs:{src:e.delete_img},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._delete(n)}}})])})),e.src.length<3?a("div",{staticClass:"uploadphoto",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choiceImg(e.src.length)}}},[a("img",{staticClass:"xiangji",attrs:{src:e.xiangji_img}}),a("p",{staticClass:"p"},[e._v(e._s(e.language.refund.most))]),a("p",{staticClass:"p"},[e._v(e._s(e.language.refund.Upload3))])]):e._e()],2)]),a("div",{staticClass:"yh-return_suess-div "}),a("div",{staticClass:"bottom",staticStyle:{background:"#FF612A"},style:e.dsb?"opcity: 0.4":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._button.apply(void 0,arguments)}}},[e._v(e._s(e.language.refund.Submit))])]),e.return_suess?a("div",{staticClass:"return_end "},[e._m(0),a("p",{staticClass:"end_one"},[e._v(e._s(3!=e.refund_type?e.language.refund.r_status[2]:e.language.refund.r_status[3])+e._s(e.language.refund.Tips[0]))]),a("p",{staticClass:"end_two"},[e._v(e._s(e.language.refund.Tips[1]))]),a("div",{staticClass:"yh-return-end-div"}),a("div",{staticClass:"return_message"},[e._v(e._s(3!=e.refund_type?e.language.refund.r_status[4]:e.language.refund.r_status[5]))]),a("ul",{staticClass:"end_msg_ul"},[a("li",{staticClass:"end_message"},[a("div",{staticClass:"end_lef"},[e._v(e._s(e.language.refund.Trade_name)+"：")]),a("div",{staticClass:"flex1"},[e._v(e._s(e.order_end.product_title[0]))])]),a("li",{staticClass:"end_message"},[a("div",{staticClass:"end_lef"},[e._v(e._s(e.language.refund.order_number)+"：")]),a("div",{staticClass:"flex1"},[e._v(e._s(e.order_end.sNo))])]),a("li",{staticClass:"end_message"},[a("div",{staticClass:"end_lef"},[e._v(e._s(e.language.refund.apply)+"：")]),a("div",{staticClass:"flex1"},[e._v(e._s(e.order_end.time))])]),a("li",{staticClass:"end_message"},[a("div",{staticClass:"end_lef"},[e._v(e._s(e.language.refund.amount_type)+"：")]),a("div",{staticClass:"flex1"},[e._v(e._s(3==e.refund_type?e.language.refund.refund_type[0]:2==e.refund_type?e.language.refund.refund_type[1]:e.language.refund.refund_type[2]))])]),a("li",{staticClass:"end_message"},[a("div",{staticClass:"end_lef"},[e._v(e._s(e.language.refund.amount)+"：")]),a("div",{staticClass:"flex1"},[e._v("￥"+e._s(e.refund_price_))])]),a("li",{staticClass:"end_message"},[a("div",{staticClass:"end_lef"},[e._v(e._s(e.language.refund.explain)+"：")]),a("div",{staticClass:"flex1"},[e._v(e._s(e.content))])]),a("li",{staticClass:"end_message"},[a("div",{staticClass:"end_lef"},[e._v(e._s(e.language.refund.upload)+"：")]),e._l(e.src,(function(t,n){return a("div",{key:n,staticClass:"evaluat_li"},[a("img",{staticClass:"evaluat_img",attrs:{src:t},on:{touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e._touchstart(n)},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e._touchend.apply(void 0,arguments)}}})])}))],2)])]):e._e()],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pic"},[a("img",{attrs:{src:"http://app.hygapp.com/images/uni-app/chenggong.png"}})])}]},"5fce":function(e,t,a){"use strict";var n=a("4ea4");a("99af"),a("4de4"),a("a434"),a("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=n(a("1da1")),s={data:function(){return{title:"申请售后",delete_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/delete2x.png",xiangji_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/xiangji2x.png",gouhei_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/gouhei.png",refund_type:"",order_details_id:"",order:"",returnR:"",money:"",content:"",src:[],srcLength:[3,2,1,0],requestTime:"",requestTime1:0,img_index:-1,return_suess:!1,order_end:"",src_img:[],return_r:1,refund_price:"",refund_price_:"",order_anking:"",fastTap:!0,rType:!1,can_sbm:!0,r_status:"",dsb:!1}},watch:{src:function(e,t){this.requestTime=this.src.length}},onLoad:function(e){this.isLogin((function(){})),this.refund_type=e.refund_type,this.order_details_id=e.order_details_id,this.order_anking=e.order_anking,this.r_status=e.r_status,this.r_status&&(this.returnR=1),"true"==e.isbatch&&(this.returnR=4),this._axios(),this.rType=e.rType},methods:{changeLoginStatus:function(){this._axios()},_button:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.can_sbm){t.next=6;break}e.dsb=!0,e.can_sbm=!1,setTimeout((function(){e.dsb=!1,e.can_sbm=!0}),1e4),t.next=7;break;case 6:return t.abrupt("return",!1);case 7:if(e.fastTap){t.next=9;break}return t.abrupt("return");case 9:if(e.fastTap=!1,!e.content||!e.rType||0!=e.src.length){t.next=15;break}a={module:"app",action:"order",app:"ReturnData",order_details_id:e.order_details_id,refund_amount:e.refund_price,explain:e.content,type:e.refund_type,refund_apply_money:e.refund_price_},e.$req.post({data:a}).then((function(t){var a=t.code,n=t.date,i=t.message;e.dsb=!1,e.can_sbm=!0,200==a?(e.return_suess=!0,e.return_r=4,e.order_end=n,e.fastTap=!0,uni.showToast({title:e.language.refund.Tips[2],icon:"none",duration:1e3})):uni.showToast({title:i,duration:1500,icon:"none"}),e.fastTap=!0,uni.hideLoading()})).catch((function(t){e.dsb=!1,e.can_sbm=!0,e.fastTap=!0,uni.hideLoading(),uni.showToast({title:e.language.refund.Tips[3],icon:"none",duration:1e3})})),t.next=33;break;case 15:if(!(e.content&&e.src.length>0)){t.next=28;break}n=0;case 17:if(!(n<e.src.length)){t.next=26;break}return a={module:"app",action:"order",app:"ReturnData",order_details_id:e.order_details_id,refund_amount:e.refund_price,explain:encodeURI(e.content),type:e.refund_type,access_id:e.access_id,upload_z_num:e.src.length,upload_num:n,refund_apply_money:e.refund_price_},t.next=21,e._upload(n,a);case 21:a=t.sent,n+1==e.src.length&&uni.hideLoading();case 23:n++,t.next=17;break;case 26:t.next=33;break;case 28:return e.fastTap=!0,e.content?0!=e.src.length||e.rType||uni.showToast({title:e.language.refund.Tips[5],duration:1e3,icon:"none"}):uni.showToast({title:e.language.refund.Tips[4],duration:1e3,icon:"none"}),e.dsb=!1,e.can_sbm=!0,t.abrupt("return",!1);case 33:case"end":return t.stop()}}),t)})))()},_upload:function(e,t){var a=this;return new Promise((function(n){uni.uploadFile({url:uni.getStorageSync("url"),filePath:a.src[e],name:"file",formData:t,success:function(t){var i=JSON.parse(t.data);if(a.fastTap=!0,200==i.code){if(e++,e==a.src.length){a.return_suess=!0,a.return_r=4;var s=JSON.parse(t.data);a.order_end=s.date,a.fastTap=!0,uni.showToast({title:this.language.refund.Tips[2],duration:1500,icon:"none"})}n(i)}else uni.showToast({title:i.status,duration:1500,icon:"none"})},error:function(){a.fastTap=!0}})}))},_text:function(){200==this.content.length&&uni.showToast({title:this.language.refund.Tips[6],duration:1e3,icon:"none"})},_axios:function(){var e=this,t={module:"app",action:"order",app:"return_method",order_details_id:this.order_details_id};this.$req.post({data:t}).then((function(t){if(200==t.code){var a=t.data,n=a.list,i=a.refund_price;e.order=n,e.refund_price_=e.refund_price=i}else uni.showToast({title:t.message,duration:1500,icon:"none"})}))},choiceImg:function(e){var t=this,a=this.srcLength[e];uni.chooseImage({count:a,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){e.tempFilePaths.filter((function(e){uni.getImageInfo({src:e,success:function(e){t.src=t.src.concat([e.path])}})}))}})},_touchstart:function(e){var t=this;this.timeout=setTimeout((function(a){t.img_index=e}),800)},_touchend:function(){clearTimeout(this.timeout)},_delete:function(e){this.src.length>0&&(this.src.splice(e,1),this.img_index=-1)},refund_price_rule:function(){(this.refund_price_>this.refund_price||""==this.refund_price_||this.refund_price_<0)&&(this.refund_price_=this.refund_price)}}};t.default=s},"89f3":function(e,t,a){"use strict";a.r(t);var n=a("5fce"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},b61e:function(e,t,a){var n=a("c4ab");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("ae42f088",n,!0,{sourceMap:!1,shadowMode:!1})},c4ab:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'.order_two[data-v-5d238a6a]{border:none}.refund_pay[data-v-5d238a6a]{margin-left:%?30?%;font-size:%?28?%;color:#020202}.refund_pay > li[data-v-5d238a6a],\n.right_d[data-v-5d238a6a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%}.refund_pay > li[data-v-5d238a6a]:nth-child(1){-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.refund_pay > li[data-v-5d238a6a]{padding:%?30?% %?30?% %?30?% 0;border-bottom:1px solid #eee}.uploadphoto[data-v-5d238a6a]{padding-top:%?4?%;border:1px dashed #999;position:relative;width:%?150?%;height:%?150?%;float:left;margin-right:%?15?%;text-align:center;padding-bottom:%?10?%}.uploadphoto .p[data-v-5d238a6a]{font-size:%?24?%;width:%?100?%;margin:0 auto}.xiangji[data-v-5d238a6a]{width:%?40?%;height:%?33?%;margin-top:%?16?%}.input_text[data-v-5d238a6a]{border:none;height:%?120?%;font-size:%?24?%;margin-left:%?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.refund_money[data-v-5d238a6a]{border:none;width:51%;margin:%?2?% 0 0 %?10?%}.refund_color[data-v-5d238a6a]{font-size:%?24?%;color:#9d9d9d}.font_red[data-v-5d238a6a]{color:red}.bottom[data-v-5d238a6a]{height:%?98?%;width:100%;font-size:%?30?%;color:#fff;text-align:center;line-height:%?98?%;position:fixed;left:0;bottom:0;background-color:#ff612a}.p_name[data-v-5d238a6a]{width:100%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.img_dele[data-v-5d238a6a]{position:absolute;top:%?-10?%;right:0;height:%?20?%;width:%?20?%}.evaluat_img[data-v-5d238a6a]{height:100%;width:100%}.img_dele[data-v-5d238a6a]{height:%?28?%;width:%?28?%}.evaluat_li[data-v-5d238a6a]{float:left;height:%?150?%;width:%?150?%;margin-right:%?10?%;position:relative}.evaluat_ul[data-v-5d238a6a]:after{display:block;content:"";clear:both}\n/*  申请成功     */.return_end[data-v-5d238a6a]{font-size:%?28?%;color:#020202}.pic[data-v-5d238a6a]{margin-top:%?60?%;text-align:center}.pic img[data-v-5d238a6a]{width:%?100?%;height:%?100?%;margin:0 auto}.end_one[data-v-5d238a6a]{font-size:%?30?%;text-align:center;margin-top:%?30?%}.end_two[data-v-5d238a6a]{font-size:%?24?%;color:#9d9d9d;text-align:center;margin:%?18?% 0 %?60?% 0}.return_message[data-v-5d238a6a]{height:%?90?%;padding:%?30?% 0 %?30?% %?30?%;border-bottom:1px solid #eee}.end_message[data-v-5d238a6a]{display:-webkit-box;display:-webkit-flex;display:flex}.end_message[data-v-5d238a6a]{padding:%?30?% %?30?% 0 %?30?%}.end_text[data-v-5d238a6a]{width:%?450?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:right}.end_lef[data-v-5d238a6a]{text-align:justify;width:%?150?%;height:%?39?%}.end_lef[data-v-5d238a6a]:after{width:100%;height:0;margin:0;display:inline-block;overflow:hidden;content:""}\n/* 优化 */.order_two_div[data-v-5d238a6a]{margin-right:%?40?%;width:58%}.yh-line[data-v-5d238a6a]{height:%?30?%;width:100%;background-color:#eee}.right_d_div[data-v-5d238a6a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.yh-refund_color[data-v-5d238a6a]{color:#bbb;padding-right:%?30?%}.yh-return_suess-div[data-v-5d238a6a]{height:%?150?%}.yh-return-end-div[data-v-5d238a6a]{height:%?30?%;width:100%;background-color:#eee}.evaluat_imgBox[data-v-5d238a6a]{-webkit-box-align:start!important;-webkit-align-items:flex-start!important;align-items:flex-start!important;-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;justify-content:flex-start!important}.flex1[data-v-5d238a6a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.end_msg_ul[data-v-5d238a6a]{color:#666;font-size:%?28?%}.leftText[data-v-5d238a6a]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;width:%?160?%}.leftText span[data-v-5d238a6a]{display:inline-block;max-width:%?130?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),e.exports=t},d808:function(e,t,a){"use strict";var n=a("b61e"),i=a.n(n);i.a}}]);