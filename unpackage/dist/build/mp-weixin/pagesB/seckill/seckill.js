(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesB/seckill/seckill"],{"18d0":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"3d3f":function(t,e,i){"use strict";var n=i("8d4b"),o=i.n(n);o.a},"55a5":function(t,e,i){"use strict";(function(t){i("1fd4");n(i("66fd"));var e=n(i("b07a"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},8461:function(t,e,i){"use strict";i.r(e);var n=i("ae20"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"8d4b":function(t,e,i){},ae20:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("c612")),o=i("b5b5"),r=i("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u=function(){i.e("components/ruleModal").then(function(){return resolve(i("35f7"))}.bind(null,i)).catch(i.oe)},d={data:function(){return{title:"限时秒杀",t_list:[],type:0,kill_bg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/seckillBg1.png",seckill_rule:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/seckill_rule.png",empty_bg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/emptybg.png",t_index:0,page:1,list:[],id:"",navType:0,scroll_index:"scroll_0",isShow:!1,content:"",rule:"",time:{hours:"00",minutes:"00",seconds:"00"}}},onLoad:function(){var t=this;t._axios(t.id),clearInterval(this.Intervalid)},components:{ruleModal:u},onUnload:function(){clearInterval(this.Intervalid)},methods:c(c({},(0,r.mapMutations)({setseckilldata:"setseckilldata"})),{},{timeFun:function(t,e){var i=(0,o.getTimeDiff)(t);this.time.hours=i.hours,this.time.minutes=i.minutes,-1===i.seconds.toString().indexOf("-")||1!==e.type&&2!==e.type?this.time.seconds=i.seconds:this._axios()},setCountDown:function(t){var e=this;clearInterval(this.Intervalid);var i=(new Date).getFullYear(),n=(new Date).getMonth()+1,o=(new Date).getDate(),r="";r=2==t.type?"".concat(i,"-").concat(n,"-").concat(o," ").concat(t.starttime):"".concat(i,"-").concat(n,"-").concat(o," ").concat(t.endtime),this.timeFun(r,t),this.Intervalid=setInterval((function(){e.timeFun(r,t)}),1e3)},_axios:function(e){var i=this,n=this,o={module:"app",action:"seckill",m:"seckillhome",page:n.page,id:e};this.$req.post({data:o}).then((function(o){var r=o.code,s=o.list,a=o.rule,c=o.time_list,l=o.msg;if(200!==r)t.showToast({title:o.message||l,duration:1500,icon:"none"});else{if(i.content=a,i.list=s,i.rule=a,s.length)for(var u in s){s[u].progress=n._progress(s[u]);var d=100-parseInt((s[u].max_num-s[u].num)/s[u].max_num*100);s[u].per=d}if(!e){i.t_list=c;for(var f=function(t){if(1==n.t_list[t].type)return setTimeout((function(){n._change(t,n.t_list[t])}),100),{v:void 0}},m=0;m<n.t_list.length;m++){var p=f(m);if("object"===typeof p)return p.v}n._change(0,n.t_list[0])}}}))},_go_details:function(e){if(e.num<=0)return t.showToast({title:this.language.seckill.seckill.Tips[1],icon:"none"}),!1;this.setseckilldata(e),t.navigateTo({url:"/pagesB/seckill/seckill_detail?pro_id="+e.pro_id+"&navType="+e.type+"&id="+e.id})},_change:function(t,e){var i=this;i.t_index=t,1==e.type?i.navType=0:2==e.type&&(i.navType=1),i.setCountDown(e),i.type=e.type,i.id=e.id,i._axios(i.id),i.scroll_index="scroll_"+t},_remind:function(e){e.setremind=1==e.setremind?0:1;var i={module:"app",action:"seckill",m:"setremind",activity_id:e.activity_id,pro_id:e.pro_id,time_id:e.time_id,type:e.setremind};this.$req.post({data:i}).then((function(i){200!=i.code&&(e.setremind=1==e.setremind?0:1),t.showToast({title:i.message,duration:1500,icon:"none"})}))},_remain_time:function(t,e){var i=t.lefttime,n="0",o="0";return i>60&&(n=parseInt(i/60),i=parseInt(i%60),n>60&&(o=parseInt(n/60),n=parseInt(n%60))),1==e?o<10?"0"+o:o:2==e?n<10?"0"+n:n:3==e?i<10?"0"+i:i:void 0},_progress:function(t){var e=100-parseInt((t.max_num-t.num)/t.max_num*100);return"width:".concat(e,"%")},_setTime:function(){var t=this;clearTimeout(t.settime),t.settime=setTimeout((function(){for(var e=0;e<t.list.length;e++)t.list[e].lefttime>0&&(t.list[e].lefttime--,t.list[e].count_hour=t._remain_time(t.list[e],1),t.list[e].count_min=t._remain_time(t.list[e],2),t.list[e].count_s=t._remain_time(t.list[e],3),t.list[e].progress=t._progress(t.list[e])),0==t.list[e].lefttime&&t._axios(t.id);t._setTime()}),1e3)},_toGradeUse:function(t){var e=this;t?(this.content=(0,n.default)(e.rule),this.isShow=!this.isShow):this.isShow=!this.isShow}})};e.default=d}).call(this,i("543d")["default"])},b07a:function(t,e,i){"use strict";i.r(e);var n=i("18d0"),o=i("8461");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("3d3f");var s,a=i("f0c5"),c=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"1f3a583c",null,!1,n["a"],s);e["default"]=c.exports}},[["55a5","common/runtime","common/vendor"]]]);