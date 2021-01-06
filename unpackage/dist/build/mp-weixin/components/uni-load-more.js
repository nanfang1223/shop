(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-load-more"],{"05d9":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"}},data:function(){return{contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},created:function(){this.setLang(),this.contentText=this.language.loadMore.contentText}};n.default=o},"27cd":function(t,n,e){},"4b90":function(t,n,e){"use strict";var o=e("27cd"),r=e.n(o);r.a},"96dc":function(t,n,e){"use strict";e.r(n);var o=e("05d9"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=r.a},af42:function(t,n,e){"use strict";e.r(n);var o=e("f2ef"),r=e("96dc");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("4b90");var a,c=e("f0c5"),f=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=f.exports},f2ef:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var r=function(){var t=this,n=t.$createElement;t._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-load-more-create-component',
    {
        'components/uni-load-more-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("af42"))
        })
    },
    [['components/uni-load-more-create-component']]
]);
