(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/components/combination"],{"043b":function(i,t,o){"use strict";o.r(t);var n=o("583a"),a=o.n(n);for(var e in n)"default"!==e&&function(i){o.d(t,i,(function(){return n[i]}))}(e);t["default"]=a.a},"27d2":function(i,t,o){"use strict";var n;o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return e})),o.d(t,"a",(function(){return n}));var a=function(){var i=this,t=i.$createElement;i._self._c},e=[]},4541:function(i,t,o){},"530d":function(i,t,o){"use strict";o.r(t);var n=o("27d2"),a=o("043b");for(var e in a)"default"!==e&&function(i){o.d(t,i,(function(){return a[i]}))}(e);o("e917");var l,r=o("f0c5"),f=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);t["default"]=f.exports},"583a":function(i,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"combination",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:function(){this.numConfig=this.dataConfig.numConfig.val,this.txtColor=this.dataConfig.titleTxtColor.color[0].item,this.priceTxtColor=this.dataConfig.priceTxtColor.color[0].item,this.title=this.dataConfig.titleConfig.value,this.titleBg=this.dataConfig.imgConfig.url,this.mbConfig=this.dataConfig.mbConfig.val,this.lrConfig=this.dataConfig.lrConfig.val,this.home_title_bg=this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/home_title_bg.png",this.group_icon=this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/group_icon.png",this.combinationList=this.dataConfig.list.splice(0,this.numConfig),this.bgColor=this.dataConfig.bgColor.color}},data:function(){return{combinationList:this.dataConfig.list,numConfig:this.dataConfig.numConfig.val,txtColor:this.dataConfig.titleTxtColor.color[0].item,priceTxtColor:this.dataConfig.priceTxtColor.color[0].item,title:this.dataConfig.titleConfig.value,titleBg:this.dataConfig.imgConfig.url,mbConfig:this.dataConfig.mbConfig.val,lrConfig:this.dataConfig.lrConfig.val,home_title_bg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/home_title_bg.png",group_icon:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/group_icon.png",bgColor:[{item:"#FFFFFF"},{item:"#FFFFFF"}]}},created:function(){this.combinationList=this.dataConfig.list.splice(0,this.numConfig),this.bgColor=this.dataConfig.bgColor.color}};t.default=n},e917:function(i,t,o){"use strict";var n=o("4541"),a=o.n(n);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/tabBar/components/combination-create-component',
    {
        'pages/tabBar/components/combination-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("530d"))
        })
    },
    [['pages/tabBar/components/combination-create-component']]
]);
