(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/evaluate/evaluate"],{"18a0":function(a,e,t){"use strict";var i;t.d(e,"b",(function(){return l})),t.d(e,"c",(function(){return n})),t.d(e,"a",(function(){return i}));var l=function(){var a=this,e=a.$createElement,t=(a._self._c,a.__map(a.allevaluat,(function(e,t){var i=a.__get_orig(e),l=e.reply?a.spanIndex.indexOf(t):null,n=e.reply?a.spanIndex.indexOf(t):null;return{$orig:i,g0:l,g1:n}})));a.$mp.data=Object.assign({},{$root:{l0:t}})},n=[]},"6b9e":function(a,e,t){"use strict";(function(a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=l(t("a34a"));function l(a){return a&&a.__esModule?a:{default:a}}function n(a,e,t,i,l,n,s){try{var o=a[n](s),u=o.value}catch(r){return void t(r)}o.done?e(u):Promise.resolve(u).then(i,l)}function s(a){return function(){var e=this,t=arguments;return new Promise((function(i,l){var s=a.apply(e,t);function o(a){n(s,i,l,o,u,"next",a)}function u(a){n(s,i,l,o,u,"throw",a)}o(void 0)}))}}var o=function(){t.e("components/header").then(function(){return resolve(t("3ba9"))}.bind(null,t)).catch(t.oe)},u={data:function(){return{bargain:!1,fff:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/ffff3x.png",title:"评价",pid:"",evaluat:"",praise:[],review:[],negativeComment:[],reply:"",img:[],allevaluat:"",allevaluat1:!0,allevaluat2:!1,allevaluat3:!1,allevaluat4:!1,allevaluat5:!1,isBigimg:!1,src:"",comments_cha:"",comments_hao:"",comments_image:"",comments_total:"",comments_zhong:"",type:0,starOffImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xing12x.png",starOnImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xing22x.png",stars:[],page:1,allLoaded:!1,autoFill:!1,bottomStatus:"",bottomPullText:"上拉加载更多...",bottomDropText:"释放更新...",loading:!1,all_img:[],logo:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/lktlogo.png",defaultIndex:0,imgurl:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/landing_logo2x.png",spanIndex:[]}},onLoad:function(a){this.pid=a.pid,this.bargain=a.bargain,this._axios()},methods:{_bigimg:function(e,t,i,l){var n=this,s=[];if("next"==l)for(var o=0;o<n.allevaluat[t].review_images.length;o++)s.push(n.allevaluat[t].review_images[o].url);else for(o=0;o<n.allevaluat[t].images.length;o++)s.push(n.allevaluat[t].images[o].url);a.previewImage({current:s[i],urls:s})},_smallimg:function(){this.isBigimg=!this.isBigimg},_comment:function(a){this.page=1,"好评"==a?(this.type=1,this.allevaluat1=!1,this.allevaluat2=!0,this.allevaluat3=!1,this.allevaluat4=!1,this.allevaluat5=!1):"中评"==a?(this.type=2,this.allevaluat1=!1,this.allevaluat2=!1,this.allevaluat3=!0,this.allevaluat4=!1,this.allevaluat5=!1):"差评"==a?(this.type=3,this.allevaluat1=!1,this.allevaluat2=!1,this.allevaluat3=!1,this.allevaluat4=!0,this.allevaluat5=!1):"有图"==a?(this.type=4,this.allevaluat1=!1,this.allevaluat2=!1,this.allevaluat3=!1,this.allevaluat4=!1,this.allevaluat5=!0):"全部"==a&&(this.type=0,this.allevaluat1=!0,this.allevaluat2=!1,this.allevaluat3=!1,this.allevaluat4=!1,this.allevaluat5=!1),this._axios()},_axios:function(){var e=this;return s(i.default.mark((function t(){var l,n,s,o,u,r,m,c,f,v,h,d,g,p,_,b,x,O;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return l=e,n={module:"app",action:"product",app:"getcomment",pid:e.pid,type:e.type},e.bargain&&(n.bargain=!0),t.next=5,e.$req.post({data:n});case 5:if(s=t.sent,200==s.code){for(o=s.comments_cha,u=s.comments_hao,r=s.comments_image,m=s.comments_total,c=s.comments_zhong,f=s.data,l.comments_cha=o,l.comments_hao=u,l.comments_image=r,l.comments_total=m,l.comments_zhong=c,f&&f.length>0&&f.filter((function(a){a.add_time=a.add_time.substr(0,10),a.review_time=a.review_time.substr(0,10)})),0==l.type?(l.evaluat=f,l.allevaluat=l.evaluat):1==l.type?(l.praise=f,l.allevaluat=l.praise):2==l.type?(l.review=f,l.allevaluat=l.review):3==l.type?(l.negativeComment=f,l.allevaluat=l.negativeComment):4==l.type&&(l.img=f,l.allevaluat=l.img),f.length<10?l.allLoaded=!0:l.allLoaded=!1,v=[],h=0;h<f.length;h++){for(d=[],g=0;g<5;g++)d.push(!1);for(l.$set(l.stars,h,d),p=f[h].CommentType,_=0;_<p;_++)l.$set(l.stars[h],_,!0);if(f[h].images&&f[h].review_images)for(b=f[h].images.concat(f[h].review_images),x=0;x<b.length;x++)v.push(b[x].url);else if(f[h].images||f[h].review_images)for(b=f[h].images?f[h].images:f[h].review_images,x=0;x<b.length;x++)v.push(b[x].url)}for(O=0;O<v.length;O++)l.$set(l.all_img,O,v[O])}else a.showToast({title:s.message,duration:1500,icon:"none"});case 7:case"end":return t.stop()}}),t)})))()},Open:function(a){var e=this.spanIndex.indexOf(a);e>-1?this.spanIndex.splice(e,1):this.spanIndex.push(a)},Close:function(a){var e=this.spanIndex.indexOf(a);e>-1?this.spanIndex.splice(e,1):this.spanIndex.push(a)}},components:{Heads:o}};e.default=u}).call(this,t("543d")["default"])},"7ab2":function(a,e,t){"use strict";t.r(e);var i=t("18a0"),l=t("bfdf");for(var n in l)"default"!==n&&function(a){t.d(e,a,(function(){return l[a]}))}(n);t("dfe7");var s,o=t("f0c5"),u=Object(o["a"])(l["default"],i["b"],i["c"],!1,null,"0f9cdab4",null,!1,i["a"],s);e["default"]=u.exports},ab0c:function(a,e,t){"use strict";(function(a){t("1fd4");i(t("66fd"));var e=i(t("7ab2"));function i(a){return a&&a.__esModule?a:{default:a}}a(e.default)}).call(this,t("543d")["createPage"])},bfdf:function(a,e,t){"use strict";t.r(e);var i=t("6b9e"),l=t.n(i);for(var n in i)"default"!==n&&function(a){t.d(e,a,(function(){return i[a]}))}(n);e["default"]=l.a},de7e:function(a,e,t){},dfe7:function(a,e,t){"use strict";var i=t("de7e"),l=t.n(i);l.a}},[["ab0c","common/runtime","common/vendor"]]]);