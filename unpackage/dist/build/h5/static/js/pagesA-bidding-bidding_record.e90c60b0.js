(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-bidding-bidding_record"],{"14a7":function(t,e,i){var a=i("5e86");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var d=i("4f06").default;d("afd0e032",a,!0,{sourceMap:!1,shadowMode:!1})},3284:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return d})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"min-height":"100vh"}},[i("div",{staticClass:"yh-ifndefMP"},[i("div",{staticClass:"position_head"},[t.head?i("heads",{attrs:{title:t.language.bidding_record.title}}):t._e(),t.order.length&&!t.load?i("ul",{staticClass:"bid_header"},[i("li",{staticClass:"outer_li"},[i("div",[t._v(t._s(t.language.bidding_record.user))]),i("div",{staticStyle:{"margin-left":"-10upx!important"}},[t._v(t._s(t.language.bidding_record.state))]),i("div",[t._v(t._s(t.language.bidding_record.time))]),i("div",{staticStyle:{"padding-right":"10rpx"}},[t._v(t._s(t.language.bidding_record.bidPrice))])])]):t._e()],1)]),i("div",{staticStyle:{height:"172rpx",width:"100%"}}),t.order.length&&!t.load?i("ul",{staticClass:"bid_header bid_top"},t._l(t.order,(function(e,a){return i("li",{key:a,staticClass:"outer_li"},[i("div",{staticClass:"user_name_long"},[t._v(t._s(e.user_name))]),i("div",0==a?[t._v(t._s(t.language.bidding_record.leading))]:[t._v(t._s(t.language.bidding_record.out))]),i("div",[t._v(t._s(e.add_time))]),i("div",{staticStyle:{width:"18%","text-align":"center"}},[t._v(t._s(e.price))])])})),0):t._e(),t.order.length||t.load?t._e():i("div",{staticClass:"empty_play"},[i("img",{attrs:{src:t.emptyImg}}),i("p",[t._v(t._s(t.language.bidding_record.noRecord))])]),t.load?i("div",{staticClass:"load",staticStyle:{height:"60vh"}},[i("div",[i("img",{attrs:{src:t.loadImg}}),i("p",[t._v(t._s(t.language.bidding_record.load)+"…")])])]):t._e()])},n=[]},"4a14":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var d=a(i("1da1")),n=(i("2f62"),{data:function(){return{fastTap:!0,loadImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/5-121204193R7.gif",emptyImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/empyimg92x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",head:!0,order:"",bindding_id:"",load:!0}},onLoad:function(t){this.bindding_id=t.bindding_id,uni.setNavigationBarTitle({title:this.language.bidding_record.title}),this._axios()},methods:{_axios:function(){var t=this;return(0,d.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i={module:"app",action:"auction",m:"record",id:t.bindding_id},t.$req.post({data:i}).then((function(e){var i=e.res;if(t.load=!1,i.length>0)for(var a in i)i[a].grade=0===a?"领先":"出局";t.order=i}));case 2:case"end":return e.stop()}}),e)})))()},_back:function(){this.flag=!1,uni.navigateBack({delta:1})}}});e.default=n},"4abc":function(t,e,i){"use strict";var a=i("14a7"),d=i.n(a);d.a},5153:function(t,e,i){"use strict";i.r(e);var a=i("4a14"),d=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=d.a},"5e86":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.head[data-v-56356397],\n.order_header[data-v-56356397]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.head[data-v-56356397]{height:%?88?%;padding:0 %?30?%;font-size:%?40?%;color:#242424}.head_img[data-v-56356397]{width:%?24?%;height:%?36?%}.head_search[data-v-56356397]{width:%?40?%;height:%?40?%;visibility:hidden}.order_header[data-v-56356397]{-webkit-justify-content:space-around;justify-content:space-around;width:100%;border-bottom:1px solid #d2d2d2}.header_li[data-v-56356397]{width:25%;text-align:center;height:%?84?%;line-height:%?84?%;border-bottom:1px solid #eee;font-size:%?30?%;color:#9d9d9d}.header_border[data-v-56356397]{color:#020202;font-weight:700;position:relative}.header_border[data-v-56356397]:after{border-bottom:%?5?% solid #020202;position:absolute;bottom:0;width:50%;content:"";left:25%}.last_right > div[data-v-56356397]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.position_head[data-v-56356397]{position:fixed;left:0;top:0;width:100%;z-index:35;background-color:#ff612a;color:#fff;border:0!important}.bid_header[data-v-56356397]{height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?28?%;color:#242424}.bid_header li div[data-v-56356397]{text-align:left;float:left}.bid_header li div[data-v-56356397]:first-child{float:left}.bid_header li div[data-v-56356397]:nth-child(2){float:left}.bid_header li div[data-v-56356397]:last-child{float:left}.bid_top[data-v-56356397]{color:#888!important}.bid_top li[data-v-56356397]:first-child{color:#242424!important}.empty_play[data-v-56356397]{padding-top:5%}.list_break1[data-v-56356397]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.list_break2[data-v-56356397]{word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.outer_li[data-v-56356397]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;text-align:center;padding:%?0?% %?30?%;border-bottom:%?2?% solid #eee;background:#fff}.user_name_long[data-v-56356397]{width:22%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}uni-page-body[data-v-56356397]{background:#f4f4f4}\n/* 优化 */.yh-ifndefMP[data-v-56356397]{height:%?178?%;position:fixed;background:#fff;z-index:999}.yh-ifdefMP[data-v-56356397]{position:fixed;background:#fff;z-index:999}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 皮肤公共颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=e},ac4d:function(t,e,i){"use strict";i.r(e);var a=i("3284"),d=i("5153");for(var n in d)"default"!==n&&function(t){i.d(e,t,(function(){return d[t]}))}(n);i("4abc");var o,r=i("f0c5"),s=Object(r["a"])(d["default"],a["b"],a["c"],!1,null,"56356397",null,!1,a["a"],o);e["default"]=s.exports}}]);