(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/group/group_end"],{"24d3":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},2668:function(t,e,i){"use strict";var n=i("78a2"),a=i.n(n);a.a},"4d9f":function(t,e,i){"use strict";i.r(e);var n=i("80e2"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"78a2":function(t,e,i){},"80e2":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("c612"));function a(t){return t&&t.__esModule?t:{default:t}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/mpvue-wxparse/src/wxParse")]).then(function(){return resolve(i("e345"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{gdOuterImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/gd_outer.png",overflow:"scroll",mask_display1:!1,fastTap:!0,list_bg1:"",list_bg2:"",list_bg3:"",list_bg4:"",is_end:!1,title:"一起拼团",ptcode:"",img:"",attr__:"",isload:"",login:"",data_:"",saves:"",groupmsg:"",attrList:"",skuBeanList:"",groupList:"",load:!0,timeStr:"",groupMember:[],shareMask:!1,saveEWM:!1,shares:{},show_rule:!1,rule:"",shareContent:"一起来用豪眼光吧！",shareHref:"",sharehrefTitle:"一起来用豪眼光吧1",sharehrefDes:"一起来用豪眼光吧2",ewmImg:"",mask_display:!1,num:"",price:"",imgurl:"",numb:1,haveSkuBean:"",goodscode:"",head:!0,clickFlag:!1,loseEfficacyImg:"",isshow:!0,returnR:"",otype:"",status_pt:"",friend:!1,isonload:0,user_can_open:"",user_can_can:"",group_again_by:"",inter:"",activity_no:"",list_bg_pic:"background-image: url("+this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/bj.png)",success_gou_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanzehei2x.png",shopImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/shopping_l2x.png",you_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jiantou2x.png",noImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/icon-no.png",guan_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/guanbi2x.png",jian_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jian2x.png",jian_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jianhui2x.png",loadImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/loading.gif",jia_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jia+2x.png",jia_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/add+2x.png",wx_person:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/fdc.png",wx_ewmfxt:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/ewmShare.png",wx_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/wechat.png",erm_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/ewmShare.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},onLoad:function(t){var e=this;e.LaiKeTuiCommon.getLKTApiUrl().then((function(){e.mask_display=!1,e.returnR=t.returnR,e.otype=t.otype,e.sNo=t.sNo,e.friend=t.friend,e.activity_no=t.activity_no,e.status_pt=t.status,e._axios()}))},onShow:function(){var t=this;t.mask_display=!1,t.isload=!0,0==t.isonload?t.isonload=1:t._axios()},onShareAppMessage:function(t){return t.from,{title:this.groupmsg.p_name,path:"/pagesA/group/group_end?sNo="+this.sNo+"&activity_no="+me.activity_no+"&friend=true&isfx=true&cc=1",imageUrl:this.groupmsg.img}},methods:{changeLoginStatus:function(){this._axios()},gotoHomePage:function(){var e=this;e.clickFlag||(e.clickFlag=!0,t.navigateTo({url:"./groupDetailed?pro_id="+e.groupmsg.ptgoods_id+"&activity_no="+this.activity_no}))},_axios:function(){var t=this,e=this,i={module:"app",action:"groupbuy",m:"cangroup",oid:this.sNo};1==e.status_pt||2==e.status_pt||5==e.status_pt||7==e.status_pt?i.m="group_success_detail":i.m="group_other_detail",this.$req.post({data:i}).then((function(i){if(404!=i.code){e.attrList=i.attrList,e.skuBeanList=i.skuBeanList,e.groupList=i.groupList,e.groupmsg=i.groupmsg,e.groupmsg.activity_no&&(e.activity_no=e.groupmsg.activity_no),e.user_can_can=i.user_can_can,e.user_can_open=i.user_can_open,e.group_again_by=i.group_again_by,e.rule=i.rule,e.content="<div style='padding-left:8px;padding-right:8px;'>"+e.rule.replace(new RegExp("<view","gm"),"<p").replace(new RegExp("</view>","gm"),"</p>")+"</div>";var a=e.content.replace(/\\/g,"").replace(/<img/g,'<img style="display:none;"');a=a.replace("<div style='padding-left:8px;padding-right:8px;'>",'<div style="padding: 0 15px;">'),e.contentNodes=(0,n.default)(a),Number(e.groupmsg.leftTime)>0?e.is_end=!1:e.is_end=!0,e.imgurl=e.groupmsg.img,e.num=e.groupmsg.p_num,e.login=i.islogin,e.ptcode=i.ptcode,e.goodscode=i.goodscode;for(var o=e.groupmsg.price,s=0;s<e.attrList[0].attr.length;s++)e.attrList[0].attr[s].enable&&e.attrList[0].attr[s].select&&(o=e.attrList[0].attr[s].price);e.price=e._money(o,e.groupmsg.zekou),e.load=!1,e.orderNo=i.groupmsg.id,e.orderStatus=i.groupmsg.status,1==i.isshow?e.isshow=!0:e.isshow=!1,e.loseEfficacyImg=i.loseEfficacyImg,e.groupList.length&&e.setTimeList(e.groupList),clearInterval(e.inter),e.setTimeData(e.groupmsg.leftTime);var r=[];for(s=e.groupmsg.groupman-1;s>=0;s--)i.groupMember[s]?r[s]=i.groupMember[s]:r[s]={};e.groupMember=r,e._spec(),e.attr__=e.attr_=i.attrList[0].attr,e.data_=i,e.isload=!1,e.price=i.min_price;for(s=0;s<e.attr_.length;s++)e.attr_[s].select&&e.attr_[s].enable&&(e.num=e.attr_[s].count,e.haveSkuBean=e.data_.skuBeanList[s],e.isshopping,e.market_price=e.market_price2=e.attr_[s].price)}else t.isLogin((function(){}))}))},_money:function(t,e){return t=e*t/100,t.toFixed(2)},setTimeData:function(t){var e=this;e.inter=setInterval((function(){if(t<=0)return clearInterval(e.inter),e.timeStr="00:00:00",!1;var i=--t,n=Math.floor(i/60/60),a=Math.floor((i-60*n*60)/60),o=i%60;n<10&&(n="0"+n),a<10&&(a="0"+a),o<10&&(o="0"+o),e.timeStr=n+":"+a+":"+o}),1e3)},setTimeList:function(t){var e=this,i=t;setInterval((function(){for(var t=0;t<i.length;t++){var n=--i[t].leftTime,a=Math.floor(n/60/60),o=Math.floor((n-60*a*60)/60),s=n%60;a<10&&(a="0"+a),o<10&&(o="0"+o),s<10&&(s="0"+s),i[t].leftTimeStr=a+":"+o+":"+s,i[t].leftTime<=0&&(i[t].leftTimeStr="00:00:00")}e.groupList=i}),1e3)},_downEWM:function(){var e=this;t.getImageInfo({src:e.ewmImg_url,success:function(i){t.saveImageToPhotosAlbum({filePath:i.path,success:function(){t.showToast({title:e.language.group_end.saveImgOk,duration:1500,icon:"none"})},fail:function(){t.showToast({title:e.language.group_end.saveImgFail,duration:1500,icon:"none"})}})},fail:function(){t.showToast({title:e.language.group_end.saveImgFail,duration:1500,icon:"none"})}})},_shareShow:function(){var e=this,i=e.groupmsg;t.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:t.getStorageSync("h5_url")+"pagesA/group/group_end?sNo="+e.sNo+"&activity_no="+e.activity_no+"&friend=true&isfx=true&cc=2",title:i.p_name,summary:"",imageUrl:i.img,success:function(t){},fail:function(t){}})},_showPerson:function(){var e=this,i=e.groupmsg;t.share({provider:"weixin",scene:"WXSceneSession",type:0,href:t.getStorageSync("h5_url")+"pagesA/group/group_end?sNo="+e.sNo+"&activity_no="+e.activity_no+"&friend=true&isfx=true&cc=3",title:i.p_name,summary:"",imageUrl:i.img,success:function(t){},fail:function(t){}})},showShareMask:function(){var t=this;this.isLogin((function(){t.shareMask=!0}))},closeShareMask:function(){this.saveEWM=!1,this.shareMask=!1,this.overflow="scroll"},_closeAllMask:function(){this.shareMask=!1,this.saveEWM=!1,this.overflow="scroll"},showSaveEWM:function(e){var i=this,n=this,a={module:"app",action:"getcode",m:"share",proId:this.groupmsg.ptgoods_id,type:"pt_end",sNo:n.sNo,activity_no:n.activity_no||n.groupmsg.activity_no,friend:"true"};this.$req.post({data:a}).then((function(e){200==e.code?(n.ewmImg=t.getStorageSync("endurl")+e.imgUrl,n.ewmImg_url=t.getStorageSync("endurl")+e.imgUrl,n.saveEWM=!0,n.shareMask=!0):404==e.code?i.isLogin((function(){})):t.showToast({title:e.message,duration:1500,icon:"none"})}))},_navigateTo:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("todetail"==i)t.navigateTo({url:e});else{if("true"!=this.friend)return 1==Number(this.returnR)?(t.navigateBack({delta:1}),!1):2==Number(this.returnR)?(t.navigateBack({delta:2}),!1):(t.reLaunch({url:"/pagesA/group/group"}),!1);t.reLaunch({url:"/pages/tabBar/home"})}},_toDetail:function(){t.navigateTo({url:"/pagesA/group/group"})},_toOrderDetail:function(){t.navigateTo({url:"../../pages/order/order?order_id="+this.orderNo+"&returnR=1&group=1"})},_reduce:function(){this.numb>1&&Boolean(this.haveSkuBean)?this.numb--:(this.numb,t.showToast({title:this.language.group_end.noReduce,duration:1e3,icon:"none"}))},_add:function(){Boolean(this.haveSkuBean)?3!=this.type||""!=this.num_peo?this.num<=this.numb?t.showToast({title:this.language.group_end.noStock,duration:1e3,icon:"none"}):this.numb++:t.showToast({title:this.language.group_end.selectAllTips1,duration:1e3,icon:"none"}):t.showToast({title:this.language.group_end.selectAllTips,duration:1e3,icon:"none"})},showrule:function(){this.show_rule=!0},closerule:function(){this.show_rule=!1},_buy:function(){var e=this,i=this;i.fastTap=!1,this.isLogin((function(){return 1==i.goodscode.g_status?(t.showToast({title:e.language.group_end.nostart,duration:1e3,icon:"none"}),!1):3==i.goodscode.g_status?(t.showToast({title:e.language.group_end.activityOver,duration:1e3,icon:"none"}),!1):i.group_again_by?i.user_can_can?(i._mask_display(),void(i.fastTap=!0)):(t.showToast({title:e.language.group_end.upperLimit,duration:1e3,icon:"none"}),!1):(t.showToast({title:e.language.group_end.noAgain,duration:1e3,icon:"none"}),!1)}))},_gocantuan:function(e){t.navigateTo({url:"../group/group_end?sNo="+e})},_selectG:function(){this.type=1,this._mask_display()},_mask_display:function(){this.mask_display=!0,this.overflow="hidden"},_mask_false:function(){var t=this;this.haveSkuBean="",this.overflow="scroll",this.mask_display1=!0,setTimeout((function(){t.mask_display=!1,t.mask_display1=!1}),500);for(var e=0;e<this.attrList.length;e++)for(var i=0;i<this.attrList[e].attr.length;i++)this.attrList[e].attr[i].select=!1},_mask_f:function(){this.haveSkuBean="",this._mask_false(),this.overflow="scroll"},_confirm:function(){var e=this;if(Boolean(this.haveSkuBean)){if(0==this.num)t.showToast({title:this.language.group_end.noStock,duration:1e3,icon:"none"});else if(0!=this.num){var i={};i["pid"]=this.groupmsg.ptgoods_id,i["cid"]=this.haveSkuBean.cid,i["num"]=this.numb,i["groupnum"]=this.groupmsg.groupman,i["ptcode"]=this.ptcode,i["price"]=this.price,i["price"]=this.price,i["activity_no"]=this.activity_no,i["frompage"]="cantuan",i=JSON.stringify(i),t.navigateTo({url:"../group/payfor?product="+i+"&returnR=1"}),e.fastTap=!0}}else""==this.haveSkuBean?t.showToast({title:this.language.group_end.selectAllTips,duration:1e3,icon:"none"}):0==this.num?t.showToast({title:this.language.group_end.noStock,duration:1e3,icon:"none"}):t.showToast({title:this.language.group_end.selectAllTips,duration:1e3,icon:"none"})},_spec:function(){for(var t=this.attrList,e=0;e<t.length;e++){for(var i=t[e],n=[],a=0;a<t.length;a++){var o=t[a];if(o.id!=i.id)for(var s=0;s<o.attr.length;s++){var r=o.attr[s];r.enable&&r.select&&n.push(r)}}for(var u=[],g=this.skuBeanList,c=0;c<g.length;c++){var l=!0,h=g[c];for(a=0;a<n.length;a++){var p=!1;for(s=0;s<h.attributes.length;s++){var _=h.attributes[s];if(n[a].attributeId==_.attributeId&&n[a].id==_.attributeValId){p=!0;break}}l=p&&l}if(l)for(var m=0;m<h.attributes.length;m++){_=h.attributes[m];i.id==_.attributeId&&u.push(_.attributeValId)}}for(var d=u,f=0;f<i.attr.length;f++){var v=i.attr[f];v.enable=-1!=d.indexOf(v.id)}}this.attrList=t,this.skuBeanList=g},showState:function(t,e){var i=this.attrList,n=i[e],a=n.attr[t];if(a.enable){for(var o=!a.select,s=0;s<n.attr.length;s++)n.attr[s].select=!1;a.select=o;for(var r=[],u=0;u<i.length;u++)for(var g=0;g<i[u].attr.length;g++)i[u].attr[g].enable&&i[u].attr[g].select&&r.push(i[u].attr[g]);for(var c=this.skuBeanList,l=[],h=0;h<c.length;h++){for(var p=0,_=0;_<c[h].attributes.length;_++)r.length==c[h].attributes.length?c[h].attributes[_].attributeValId==r[_].id&&p++:"库存清单不存在此属性 ";p==c[h].attributes.length&&l.push(c[h])}for(var m=0;m<r.length;m++)r[m].attributeValue+" ";if(0!=l.length){var d=l[0].price;d=this._money(d,this.groupmsg.zekou),this.num=l[0].count,this.price=d,this.imgurl=l[0].imgurl,this.haveSkuBean=l[0]}else this.num=1,this.price=this.groupmsg.price,this.haveSkuBean="";this.attrList=i,this._spec()}}},components:{wxParse:o}};e.default=s}).call(this,i("543d")["default"])},b926:function(t,e,i){"use strict";(function(t){i("1fd4");n(i("66fd"));var e=n(i("d005"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},d005:function(t,e,i){"use strict";i.r(e);var n=i("24d3"),a=i("4d9f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2668");var s,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"ca021056",null,!1,n["a"],s);e["default"]=u.exports}},[["b926","common/runtime","common/vendor"]]]);