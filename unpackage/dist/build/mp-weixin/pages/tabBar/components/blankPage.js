(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/components/blankPage"],{"0ce6":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"blankPage",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:function(){this.bgColor=this.dataConfig.bgColor.color[0].item,this.heightConfig=this.dataConfig.heightConfig.val}},data:function(){return{bgColor:this.dataConfig.bgColor.color[0].item,heightConfig:this.dataConfig.heightConfig.val}},created:function(){},methods:{}};n.default=e},"320a":function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement;t._self._c},i=[]},f50a:function(t,n,a){"use strict";a.r(n);var e=a("0ce6"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=o.a},f96c:function(t,n,a){"use strict";a.r(n);var e=a("320a"),o=a("f50a");for(var i in o)"default"!==i&&function(t){a.d(n,t,(function(){return o[t]}))}(i);var f,r=a("f0c5"),u=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],f);n["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/tabBar/components/blankPage-create-component',
    {
        'pages/tabBar/components/blankPage-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f96c"))
        })
    },
    [['pages/tabBar/components/blankPage-create-component']]
]);
