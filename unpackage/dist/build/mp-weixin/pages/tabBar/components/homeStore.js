(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/components/homeStore"],{3359:function(t,i,n){},"5fd3":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={name:"homeStore",props:{dataConfig:{type:Object,default:function(){}},opensetting:{type:Boolean}},watch:{dataConfig:function(){this.r_mch=this.dataConfig.list.splice(0,this.numberConfig),this.bgColor=this.dataConfig.bgColor.color,this.numberConfig=this.dataConfig.numberConfig.val,this.title=this.dataConfig.titleConfig.value,this.txtColor=this.dataConfig.titleTxtColor.color[0].item,this.titleBg=this.dataConfig.imgConfig.url,this.lrConfig=this.dataConfig.lrConfig.val,this.mbConfig=this.dataConfig.mbConfig.val}},data:function(){return{home_title_bg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/home_title_bg.png",r_mch:this.dataConfig.list,numberConfig:this.dataConfig.numberConfig.val,bgColor:[{item:"#FFFFFF"},{item:"#FFFFFF"}],title:this.dataConfig.titleConfig.value,txtColor:this.dataConfig.titleTxtColor.color[0].item,titleBg:this.dataConfig.imgConfig.url,lrConfig:this.dataConfig.lrConfig.val,mbConfig:this.dataConfig.mbConfig.val}},created:function(){this.setLang()},mounted:function(){this.r_mch=this.dataConfig.list.splice(0,this.numberConfig),this.bgColor=this.dataConfig.bgColor.color}};i.default=o},"7c10":function(t,i,n){"use strict";var o=n("3359"),a=n.n(o);a.a},8160:function(t,i,n){"use strict";n.r(i);var o=n("b985"),a=n("a8f7");for(var e in a)"default"!==e&&function(t){n.d(i,t,(function(){return a[t]}))}(e);n("7c10");var f,r=n("f0c5"),l=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"7ef4f19a",null,!1,o["a"],f);i["default"]=l.exports},a8f7:function(t,i,n){"use strict";n.r(i);var o=n("5fd3"),a=n.n(o);for(var e in o)"default"!==e&&function(t){n.d(i,t,(function(){return o[t]}))}(e);i["default"]=a.a},b985:function(t,i,n){"use strict";var o;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return e})),n.d(i,"a",(function(){return o}));var a=function(){var t=this,i=t.$createElement;t._self._c},e=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/tabBar/components/homeStore-create-component',
    {
        'pages/tabBar/components/homeStore-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8160"))
        })
    },
    [['pages/tabBar/components/homeStore-create-component']]
]);
