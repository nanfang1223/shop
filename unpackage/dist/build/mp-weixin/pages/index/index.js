(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0fe0":function(t,e,n){"use strict";var r=n("61ff"),u=n.n(r);u.a},"61ff":function(t,e,n){},"77e4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("36ae"),u={data:function(){return{title:"Hello",guiderImg:[],time:3,autoplay:!0,clear:""}},onLoad:function(){var e=this,n=null;n=this.gd(),n&&n.then((function(n){e._geturl(n).then((function(){e.getImg(),t.getSystemInfo({success:function(t){e.$store.state.data_height=t.statusBarHeight}})}))}))},onUnload:function(){clearInterval(this.clear)},onShow:function(){this.autoplay=!0,this.time=3},methods:{getImg:function(){var e=this,n={app:"guided_graph",action:"index",module:"app",store_type:1};this.$req.post({data:n}).then((function(n){var r=n.list;r&&r.length>0?(e.guiderImg=r,e.clear=setInterval(e.countDown,1e3)):t.switchTab({url:"/pages/tabBar/home"})}))},countDown:function(e){1==this.time||e?(t.reLaunch({url:"../tabBar/home"}),clearInterval(this.clear)):this.time>1&&this.time--},gd:function(){var e=t.getExtConfigSync?t.getExtConfigSync():{};e.url?this.$store.state.url=e.url:this.$store.state.url=this.LaiKeTuiCommon.LKT_API_URL,this.$store.state.url=this.$store.state.url+"store_type=1";var n=this.$store.state.url;return t.getStorageSync("needRegister")||(0,r.getLaiketuiNoRegisterLoginInfo)(1),Promise.resolve(n)},_geturl:function(e){var n=this;return new Promise((function(r,u){var a={module:"app",action:"url",app:"geturl",get:"mini_url,H5,endurl"};t.setStorageSync("url",e),n.$req.post({data:a}).then((function(e){var u;u=1,200==e.code?(n.$store.state.url=e.url.mini_url,n.$store.state.h5_url=e.url.H5,n.$store.state.endurl=e.url.endurl):(n.$store.state.url=n.LaiKeTuiCommon.LKT_API_URL,n.$store.state.h5_url=n.LaiKeTuiCommon.LKT_H5_DEFURL,n.$store.state.endurl=n.LaiKeTuiCommon.LKT_ENDURL),n.$store.state.url=n.$store.state.url+"&store_type="+u,t.setStorageSync("url",n.$store.state.url),t.setStorageSync("h5_url",n.$store.state.h5_url),t.setStorageSync("endurl",n.$store.state.endurl),r(n)}))}))}}};e.default=u}).call(this,n("543d")["default"])},b092:function(t,e,n){"use strict";n.r(e);var r=n("77e4"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=u.a},b3a7:function(t,e,n){"use strict";(function(t){n("1fd4");r(n("66fd"));var e=r(n("b90e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},b90e:function(t,e,n){"use strict";n.r(e);var r=n("c7fa"),u=n("b092");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("0fe0");var o,i=n("f0c5"),s=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=s.exports},c7fa:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var u=function(){var t=this,e=t.$createElement;t._self._c},a=[]}},[["b3a7","common/runtime","common/vendor"]]]);