(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/myStore/order"],{"0caf":function(i,t,s){"use strict";s.r(t);var e=s("73c3"),n=s.n(e);for(var r in e)"default"!==r&&function(i){s.d(t,i,(function(){return e[i]}))}(r);t["default"]=n.a},"12eb":function(i,t,s){"use strict";var e=s("ca4e"),n=s.n(e);n.a},"5f95":function(i,t,s){"use strict";(function(i){s("1fd4");e(s("66fd"));var t=e(s("90c1"));function e(i){return i&&i.__esModule?i:{default:i}}i(t.default)}).call(this,s("543d")["createPage"])},"73c3":function(i,t,s){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=s("59bd"),n=(s("b5b5"),function(){s.e("components/mpvuePicker").then(function(){return resolve(s("e496"))}.bind(null,s)).catch(s.oe)}),r=function(){Promise.all([s.e("common/vendor"),s.e("components/mpvue-citypicker/mpvueCityPicker")]).then(function(){return resolve(s("52f0"))}.bind(null,s)).catch(s.oe)},u={data:function(){return{orderList_id:"",express_id:"",imgurl:"",closeImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/guanbi2x.png",mask_display:!1,proClass:"",shop_id:"",p_id:"",integral_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integral_hui.png",integral_hong:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/integral.png",integral_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integral_hei.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",guanbi:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/guanbi2x.png",jianX:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jianX.png",jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/jiantou2x.png",goodsimg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/yhqBg.png",buyadd:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/address2x.png",buyhead:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/buyhead2x.png",loadImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/5-121204193R7.gif",addressImg:i.getStorageSync("endurl")+"images/icon1/address2x.png",title:"订单详情",order_id:"",load:!0,diplay:!0,fhDiv:!1,list:"",attrList:"",skuBeanList:"",haveSkuBean:"",okBtn:!0,sNo:"",courier_num:"",kuaidiList:"",themeColor:"#007AFF",mode:"",deepLength:1,pickerValueDefault:[0],pickerValueArray:[],show:!1,backUrl:"myOrder",finishBlur:!1,fastTap:!0,placeStyle:"color:#b8b8b8;font-size:28upx",price:"",num:"",highKeys:{},skuName:"SkuID",skuName1:"Price",skuName2:"Pic",skuName3:"Stock",spliter:",",sku_list:{},result:{},cityPickerValueDefault:[0,0,1],city_all:"",editor:""}},onLoad:function(t){var s=this;1==t.editor&&(this.editor=t.editor),this.isLogin((function(){s.order_id=t.order_id,1==t.editor?s.diplay=!1:s.diplay=!0,s.shop_id=i.getStorageSync("shop_id")?i.getStorageSync("shop_id"):s.$store.state.shop_id,s._axios()}))},onShow:function(){1==this.editor?this.title=this.language.mystore_order.Tips[5]:this.title=this.language.mystore_order.title},methods:{changeLoginStatus:function(){this._axios()},showMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.show()},hideKeyboard:function(){i.hideKeyboard()},powerset:function(i){for(var t=[[]],s=0;s<i.length;s++)for(var e=0,n=t.length;e<n;e++)t.push(t[e].concat(i[s]));return t},initData:function(){this.result={},this.keys=this.getAllKeys();for(var i=0;i<this.keys.length;i++)this.highKeys[this.keys[i]]=!1;this.sku_list=this.combineAttr(this.skuBeanList,this.keys),this.buildResult(this.sku_list.items),this.updateStatus(this.getSelectedItem(),!0);var t={};for(var s in this.result)s.includes(",")||0!=this.result[s].skus.Stock||(t[s]=this.result[s]);for(var e in this.sku_list.result)for(var n in this.sku_list.result[e])for(var r in t)n==r&&(this.sku_list.result[e][n].disabled=!0);this.showResult()},handleNormalClick:function(i,t){this.finishBlur=!0;var s=JSON.parse(JSON.stringify(this.sku_list));for(var e in s.result[i])e!=t.name?s.result[i][e].active=!1:s.result[i][e].active=!0;this.sku_list=s},handleDisableClick:function(i,t){for(var s in this.sku_list.result[i][t.name]["disabled"]=!1,this.sku_list.result)if(s!=i)for(var e in this.sku_list.result[s])this.sku_list.result[s][e].active=!1;this.updateStatus(this.getSelectedItem())},highAttributes:function(){for(var i in this.sku_list.result)for(var t in this.highKeys[i]=!0,this.sku_list.result[i])if(!0===this.sku_list.result[i][t].active){this.highKeys[i]=!1;break}},handleActive:function(t,s){if(!0!==s.disabled){if(1==s.active)return!1;this.handleNormalClick(t,s),!0===s.disabled&&this.handleDisableClick(t,s),this.updateStatus(this.getSelectedItem()),this.highAttributes(),this.showResult()}else i.showToast({title:this.language.mystore_order.Tips[3],icon:"none"})},combineAttr:function(i,t){for(var s=[],e={},n=0;n<i.length;n++){for(var r=i[n],u=[],o=0;o<t.length;o++){var a=t[o];e[a]||(e[a]={}),e[a][r[a]]||(e[a][r[a]]={name:r[a],active:!1,disabled:!(r["Stock"]>0)}),u.push(r[a])}s.push({path:u.join(this.spliter),sku:r["SkuID"],price:r["Price"],Pic:r["Pic"],Stock:r["Stock"]})}return{result:e,items:s}},isJSON:function(i){if("string"==typeof i)try{JSON.parse(i);return!0}catch(t){return!1}},getAllKeys:function(){var i=[];for(var t in this.skuBeanList[0])this.skuBeanList[0].hasOwnProperty(t)&&t!==this.skuName&&t!==this.skuName1&&t!==this.skuName2&&t!==this.skuName3&&i.push(t);return i},getAttruites:function(i){for(var t=[],s=0;s<i.length;s++)t.push(i[s].path);return t},buildResult:function(i){for(var t=this,s=this.getAttruites(i),e={},n=0;n<s.length;n++)for(var r=s[n],u=i[n].sku,o=i[n].Pic,a=i[n].price,h=i[n].Stock,l=r.split(this.spliter),c=this.powerset(l),f=0;f<c.length;f++){var d=c[f],g=d.join(this.spliter);g&&!this.result[g]&&(this.result[g]={skus:{sku:u,Pic:o,price:a,Stock:h}},(!g.includes(",")&&!e[g]||g.includes(",")&&g.split(",").length<s[n].split(",").length)&&(e[g]={skus:{sku:u,Pic:o,price:a,Stock:h}}))}var p=function(i){for(var n in e[i].skus.Stock=0,t.result)i!=n&&n.split(",").length==s[0].split(",").length&&n.includes(i)?e[i].skus.Stock+=Number(t.result[n].skus.Stock):n.split(",").length==s[0].split(",").length&&function(){var s=[];n.split(",").filter((function(t){i.split(",").filter((function(i){t==i&&s.push(!0)}))})),s.length==i.split(",").length&&(e[i].skus.Stock+=Number(t.result[n].skus.Stock))}()};for(var k in e)p(k);Object.assign(this.result,e)},getSelectedItem:function(){var i=[];for(var t in this.sku_list.result){var s="";for(var e in this.sku_list.result[t])!0===this.sku_list.result[t][e].active&&(s=e);i.push(s)}return i},updateStatus:function(i,t){for(var s=0;s<this.keys.length;s++){var e=this.keys[s],n=this.sku_list.result[e],r=(i[s],i.slice());for(var u in n){var o=n[u]["name"];if(i[s]!=o){r[s]=o;var a=this.trimSpliter(r.join(this.spliter),this.spliter);this.sku_list.result[e][u]["disabled"]=t?!this.result[a]:!(this.result[a].skus.Stock>0)}}}},trimSpliter:function(i,t){var s=new RegExp("^"+t+"+","g"),e=new RegExp(t+"+$","g"),n=new RegExp(t+"+","g");return i.replace(s,"").replace(e,"").replace(n,t)},initSeleted:function(i){for(var t in this.skuBeanList)if(this.skuBeanList[t][this.skuName]==i){for(var s in this.skuBeanList[t])s!==this.skuName&&s!==this.skuName1&&s!==this.skuName2&&s!==this.skuName3&&(this.sku_list.result[s][this.skuBeanList[t][s]].active=!0);break}},showResult:function(){for(var i=this.getSelectedItem(),t=[],s=0;s<i.length;s++){var e=i[s];e&&t.push(e)}if(t.length>0&&(this.num=this.result[t.join(this.spliter)].skus.Stock,this.imgurl=this.result[t.join(this.spliter)].skus.Pic),t.length==this.keys.length){var n=this.result[t.join(this.spliter)];n&&(this.SkuID=n.skus.sku,this.Pic=n.skus.Pic,this.price=n.skus.price,this.Stock=n.skus.Stock),this.haveSkuBean={name:t.join(this.spliter),cid:n.skus.sku,skus:n.skus}}else this.haveSkuBean=""},_axios:function(){(0,e.LaiKeTui_axios)(this)},onCopy:function(){i.setClipboardData({data:this.list.sNo,success:function(t){i.showToast({title:this.language.mystore_order.Tips[4],duration:1500,icon:"none"})}})},changeValue:function(){(0,e.LaiKeTui_changeValue)(this)},_changeAttr:function(i,t,s,n){(0,e.LaiKeTui_changeAttr)(this,i,t,s,n)},changeFinish:function(i){this.finishBlur="f"==i},changePrice:function(i){var t=this,s=new Promise((function(i,s){t.changeValue(),i("==")}));s.then((function(){t.finishBlur=!0}))},changeFreight:function(i){this.list.z_freight=i.detail.value,this.changeValue(),this.finishBlur=!0},_edit:function(){this.title=this.language.mystore_order.Tips[5],this.diplay=!1},_seeWL:function(t){var s={module:"app",action:"order",app:"logistics",id:t,o_source:1,type:""};1==this.source&&(s.type="pond"),this.$req.post({data:s}).then((function(s){if(i.hideLoading(),200==s.code){var e=s.res;e.length>1?i.navigateTo({url:"/pagesB/expressage/expressage?sNo="+t}):i.navigateTo({url:"/pages/expressage/expressage?list="+JSON.stringify(e[0])+"&sNo="+t})}else i.showToast({title:s.message,duration:1500,icon:"none"})}))},_showFhDiv:function(){(0,e.LaiKeTui_showFhDiv)(this)},_ok:function(){(0,e.LaiKeTui_ok)(this)},_closeFhDiv:function(){this.fhDiv=!1},showSinglePicker:function(){this.show=!0,this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()},_send:function(){(0,e.LaiKeTui_send)(this)},_confirm:function(i){(0,e.LaiKeTui_confirm)(this,i)},onConfirm:function(i){this.city_all=i.label;i.label.split("-")},onConfirm2:function(i){this.proClass=i.label,this.show=!1,this.express_id=this.kuaidiList[i.index[0]].id},_mask_false:function(){this.mask_display=!1,this.okBtn=!0},QRx:function(){i.navigateTo({url:"/pagesA/myStore/QRdraw"})},QRs:function(i){function t(){return i.apply(this,arguments)}return t.toString=function(){return i.toString()},t}((function(){var t=this;i.scanCode({success:function(s){i.showLoading({title:t.language.mystore_order.Tips[6]}),QRs(t,s)}})}))},components:{mpvuePicker:n,mpvueCityPicker:r}};t.default=u}).call(this,s("543d")["default"])},"90c1":function(i,t,s){"use strict";s.r(t);var e=s("fdcd"),n=s("0caf");for(var r in n)"default"!==r&&function(i){s.d(t,i,(function(){return n[i]}))}(r);s("12eb");var u,o=s("f0c5"),a=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);t["default"]=a.exports},ca4e:function(i,t,s){},fdcd:function(i,t,s){"use strict";var e;s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return r})),s.d(t,"a",(function(){return e}));var n=function(){var i=this,t=i.$createElement;i._self._c},r=[]}},[["5f95","common/runtime","common/vendor"]]]);