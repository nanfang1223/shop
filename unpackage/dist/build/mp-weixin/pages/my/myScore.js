(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/myScore"],{"287c":function(t,n,i){"use strict";var a;i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return a}));var e=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"361c":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("c612"));function e(t){return t&&t.__esModule?t:{default:t}}var o=function(){i.e("components/ruleModal").then(function(){return resolve(i("35f7"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{loadingType0:0,loadingType1:0,loadingType2:0,topStatus:0,title:"我的积分",load:!1,scoreNum:"",list1:"",list2:"",list3:"",page0:1,page1:1,page2:1,myScoreimg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integralback.png",useExp:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/sign_rule.png",loadGif:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/loading.gif",sign_bg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/sign_bg.png",isShow:!1,content:"",signPlugin:0}},onLoad:function(t){this.signPlugin=parseInt(t.signPlugin)},onShow:function(){try{var t=this;this.isLogin((function(){t._axios()}))}catch(n){}},methods:{jmpNav:function(){t.navigateTo({url:"/pagesA/shop/sign"})},changeLoginStatus:function(){this._axios()},_toGradeUse:function(n){var i=this;if(n){var e={module:"app",action:"sign",app:"Instructions"};this.$req.post({data:e}).then((function(n){200==n.code?(i.content=(0,a.default)(n.Instructions),i.isShow=!i.isShow):t.showToast({title:n.message,duration:1500,icon:"none"})}))}else this.isShow=!this.isShow},topChange:function(n){this.topStatus=n,t.pageScrollTo({scrollTop:0,duration:10})},_axios:function(){var n=this,i={module:"app",action:"sign",app:"integral"};this.$req.post({data:i}).then((function(i){200==i.code?(n.scoreNum=i.data.score||0,n.list1=i.data.whole||[],n.list2=i.data.sign||[],n.list3=i.data.consumption||[]):t.showToast({title:i.message,duration:1500,icon:"none"}),n.load=!0}))}},computed:{halfWidth1:function(){var n=t.getStorageSync("data_height")?t.getStorageSync("data_height"):this.$store.state.data_height,i=(parseInt(n),0);return i=350,t.upx2px(i)+"px"},halfWidth2:function(){var n=t.getStorageSync("data_height")?t.getStorageSync("data_height"):this.$store.state.data_height,i=parseInt(n),a=2*i;return a=0,t.upx2px(a)+"px"}},onReachBottom:function(){var t=this;if(0==this.topStatus){if(0!=this.loadingType0)return;this.loadingType0=1;var n={module:"app",action:"sign",app:"load_integral",type:"",page:this.page0};this.$req.post({data:n}).then((function(n){var i=n.list||[];t.page0+=1,i.length>0?(t.list1=t.list1.concat(i),t.loadingType0=0):t.loadingType0=2}))}else if(1==this.topStatus){if(0!=this.loadingType1)return;this.loadingType1=1;n={module:"app",action:"sign",app:"load_integral",type:1,page:this.page1};this.$req.post({data:n}).then((function(n){var i=n.list||[];t.page0+=1,i.length>0?(t.list2=t.list2.concat(i),t.loadingType1=0):t.loadingType1=2}))}else if(2==this.topStatus){if(0!=this.loadingType2)return;this.loadingType2=1;n={module:"app",action:"sign",app:"load_integral",type:2,page:this.page2};this.$req.post({data:n}).then((function(n){var i=n.list||[];t.page0+=1,i.length>0?(t.list3=t.list3.concat(i),t.loadingType2=0):t.loadingType2=2}))}},components:{ruleModal:o}};n.default=s}).call(this,i("543d")["default"])},4727:function(t,n,i){"use strict";(function(t){i("1fd4");a(i("66fd"));var n=a(i("9439"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("543d")["createPage"])},"814f":function(t,n,i){},9439:function(t,n,i){"use strict";i.r(n);var a=i("287c"),e=i("97e8");for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);i("c5cd");var s,c=i("f0c5"),u=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"6241d3ec",null,!1,a["a"],s);n["default"]=u.exports},"97e8":function(t,n,i){"use strict";i.r(n);var a=i("361c"),e=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);n["default"]=e.a},c5cd:function(t,n,i){"use strict";var a=i("814f"),e=i.n(a);e.a}},[["4727","common/runtime","common/vendor"]]]);