(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/components/swiperPicture"],{18866:function(t,i,n){"use strict";var a=n("d215"),o=n.n(a);o.a},"5de9":function(t,i,n){"use strict";n.r(i);var a=n("db4b"),o=n.n(a);for(var e in a)"default"!==e&&function(t){n.d(i,t,(function(){return a[t]}))}(e);i["default"]=o.a},a44e:function(t,i,n){"use strict";var a;n.d(i,"b",(function(){return o})),n.d(i,"c",(function(){return e})),n.d(i,"a",(function(){return a}));var o=function(){var t=this,i=t.$createElement;t._self._c},e=[]},d215:function(t,i,n){},da07:function(t,i,n){"use strict";n.r(i);var a=n("a44e"),o=n("5de9");for(var e in o)"default"!==e&&function(t){n.d(i,t,(function(){return o[t]}))}(e);n("18866");var r,f=n("f0c5"),s=Object(f["a"])(o["default"],a["b"],a["c"],!1,null,"bcdac162",null,!1,a["a"],r);i["default"]=s.exports},db4b:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"swiperPicture",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:function(){this.imgConfig=this.dataConfig.imgConfig.type,this.marginTop=this.dataConfig.mbConfig.val,this.paddinglr=this.dataConfig.lrConfig.val,this.bgColor=this.dataConfig.bgColor.color,this.imgUrls=this.dataConfig.swiperConfig.list}},data:function(){return{imgConfig:this.dataConfig.imgConfig.type,marginTop:this.dataConfig.mbConfig.val,paddinglr:this.dataConfig.lrConfig.val,bgColor:this.dataConfig.bgColor.color,imageH:0,imgUrls:[],img:""}},created:function(){this.imgUrls=this.dataConfig.swiperConfig.list},mounted:function(){var i=this;this.$nextTick((function(){t.getImageInfo({src:i.setDomain(i.imgUrls[0].img),success:function(t){i.$set(i,"imageH",t.height)},fail:function(t){}})}))},methods:{setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")}}};i.default=n}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/tabBar/components/swiperPicture-create-component',
    {
        'pages/tabBar/components/swiperPicture-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("da07"))
        })
    },
    [['pages/tabBar/components/swiperPicture-create-component']]
]);