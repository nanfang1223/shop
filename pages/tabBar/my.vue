<template>
    <view class="container">
        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>
        
        <view class="container_top " style="height: 70rpx;" >
            <!-- #ifndef MP-ALIPAY -->
            <!-- <view :style="{ height: halfWidth }">
                <view class="topHeight" :style="{ height: halfWidth }"></view>
            </view> -->
            <!-- #endif -->
            
            <!-- #ifdef MP -->
            <!-- <view style="height: 88rpx;"></view> -->
            <!-- #endif -->
            
            <image :src="my_set" v-if="shezhi" lazy-load="true" @tap="_navigateTo1('/pagesB/setUp/setUp')" style="top:70rpx;"></image>
           
		</view>
        
      <view class="card " style="background: #ffffff; padding-bottom: 30rpx; border-radius: 20rpx;box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.1);">
            <image  v-if="access_id1" style="border-radius: 50%; margin: 15rpx 0 0 15rpx;" @tap="_navigateTo1('/pages/my/myInfo')" :src="user.headimgurl" mode=""></image>
            <image   style="margin: 10px;" v-else :src="unLogin" @tap="_navigateTo1('/pages/my/myInfo')" mode=""></image>
            <view class="card_center" style="margin-left: 20rpx;">
                <view class="card_username" style="color: #000000; margin-top: 30rpx;" v-if="access_id1">{{user.user_name}}</view>
                <!-- <view class="card_username" style="color: #000000; margin-top: 10rpx;" v-if="user.mobile != ''">{{user.mobile}}</view> -->
                <view class="card_username" style="color: #000000; margin-top: 30rpx;" v-else>{{language.my.loginPrompt}}</view>
                <view v-if="access_id1" class="card_vip" :style="{backgroundImage: 'url('+ my_vipIBg +')', marginTop: user.grade=='普通会员'?'20rpx':''}">
                    {{user.grade}}
                    <image :src="level==0?vip_icon0:level==1?vip_icon1:level==2?vip_icon2:vip_icon3"></image>
                </view>
                <!-- #ifdef MP-ALIPAY -->
                <button v-else class="card_btn card_btn1" open-type="getAuthorize" @tap="onGetAuthorize" size="mini" type="primary" scope='userInfo'>{{language.my.authorization}}</button>
                <!-- #endif -->
                <!-- #ifdef MP-BAIDU -->
                <button v-else class="card_btn card_btn1" open-type="getUserInfo" @tap="bdAuth" size="mini" type="primary">{{language.my.authorization}}</button>
                <!-- #endif -->
                <!-- #ifdef MP-TOUTIAO -->
                <button v-else class="card_btn card_btn1" open-type="getUserInfo" @tap="ttAuth" size="mini" type="primary">{{language.my.authorization}}</button>
                <!-- #endif -->
                <!-- #ifdef MP-WEIXIN -->
                <!-- <button v-else class="card_btn card_btn1" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" type="primary" size="mini">{{language.my.authorization}}</button> -->
				<view v-else class="card_btn card_btn1" type="primary" @tap="_navigateTo('/pages/login/loginpage')" size="mini">立即登录</view>
                <!-- #endif -->
                <!-- #ifndef MP -->
                <view class="card_btn card_btn1" v-else @tap="_navigateTo('/pages/login/login?landing_code=1')">{{language.my.toLogin}}</view>
                <!-- #endif -->
                <text v-if="access_id1 && user.grade!='普通会员'" class="card_time">{{user.grade_end}} {{language.my.endTime}}</text>
            </view>
			<!-- 判断是否是vip -->
			<view v-if="vipzongxin"  @tap="_navigateTo1('/pagesA/vipClub/vipClub')">
				 <image style="width: 160rpx; height: 60rpx;margin-left: 75%; margin-top: 15%;" src="http://jcsp.hzjcwlkj.cn/images/uni-app/huiyuan.png" mode=""></image>
			</view>
			<view v-if="huiyuan"  @tap="_navigateTo1('/pagesA/vip/vip')" >
				 <image style="width: 160rpx; height: 60rpx;margin-left: 75%; margin-top: 15%;" src="http://jcsp.hzjcwlkj.cn/images/uni-app/huiyaun.png" mode=""></image>
			</view>
            
         
            
        </view>
 
        <view class="content" style="margin-top: 10rpx;">
            
            <view class="order">
                <view class="order_top" style="border-bottom: 1rpx solid #DEDEDE;">
                    {{language.my.myOrder}}
                    <view @tap="_order(0)">
                        {{language.my.seeOrder}}
                        <image :src="jiantou"></image>
                    </view>
                </view>
                <!-- 待付款 -->
                <view class="order_bottom">
                    <view @tap="_order(1)">
                        <view>
                            <image src="http://jcsp.hzjcwlkj.cn/images/uni-app/bian18.png" mode="widthFix"></image>
                            <view v-if="access_id1&&orderNum.dfk_num>0" class="order_bottom_icon">{{orderNum.dfk_num}}</view>
                        </view>
                        <text>{{language.my.dfk_order}}</text>
                    </view>
                    <view @tap="_order(2)">
                        <view>
                            <image src="http://jcsp.hzjcwlkj.cn/images/uni-app/bian17.png"  mode="widthFix"></image>
                            <view v-if="access_id1&&orderNum.dfh_num>0" class="order_bottom_icon">{{orderNum.dfh_num}}</view>
                        </view>
                        <text>{{language.my.dfh_order}}</text>
                    </view>
                    <view @tap="_order(3)">
                        <view>
                            <image src="http://jcsp.hzjcwlkj.cn/images/uni-app/bian120.png" mode="widthFix"></image>
                            <view v-if="access_id1&&orderNum.dsh_num>0" class="order_bottom_icon">{{orderNum.dsh_num}}</view>
                        </view>
                        <text>{{language.my.dsh_order}}</text>
                    </view>
                    <view @tap="_order(4)">
                        <view>
                            <image src="http://jcsp.hzjcwlkj.cn/images/uni-app/bian19.png" mode="widthFix"></image>
                            <view v-if="access_id1&&orderNum.dpj_num>0" class="order_bottom_icon">{{orderNum.dpj_num}}</view>
                        </view>
                        <text>{{language.my.dpj_order}}</text>
                    </view>
                    <view @tap="_navigateTo1('/pagesA/afterSale/afterSale')">
                        <view>
                            <image src="http://jcsp.hzjcwlkj.cn/images/uni-app/bian121.png" mode="widthFix"></image>
                            <view v-if="access_id1&&orderNum.th_num>0" class="order_bottom_icon">{{orderNum.th_num}}</view>
                        </view>
                        <text>{{language.my.th_order}}</text>
                    </view>
                </view>
            </view>
            <!-- 优惠券 -->
			<view class="card_bottom" style="box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.1);    padding: 30rpx;">
			     <view @tap="_navigateTo1('/pagesB/coupon/mycoupon')" v-if="plugin.coupon == 1"  style="  border-radius: 10rpx;  margin-right: 15px;background-image: linear-gradient(to bottom right, #FFBABB ,#FFE7E1);">
			         <view>{{access_id1&&user.coupon_num?user.coupon_num:0}}</view>
			         <!-- <text>{{language.my.couponNum}}</text> -->
					      <text>优惠券</text>
			     </view>
				 <view @tap="_navigateTo1('/pagesB/myWallet/myWallet')" style="    margin-right: 15px; border-radius: 10rpx;   background-image: linear-gradient(to bottom right, #FED5B8, #FEEBD4);">
				     <view>
				         <text>￥</text>
				         {{access_id1&&user.money?user.money:'0.00'}}
				     </view>
				     <!-- <text>{{language.my.remainingNum}}</text> -->
					   <text>钱包</text>
				 </view>
			     <view @tap="_navigateTo1('/pages/my/myScore?signPlugin='+sign)" style=" border-radius: 10rpx;   background-image: linear-gradient(to bottom right, #F5DBA9, #FEEDD1);">
			         <view>{{access_id1&&user.score?user.score:0}}</view>
			         <!-- <text>{{language.my.integralNum}}</text> -->
					 		         <text>积分</text>
			     </view>
			    
			   <!--  <view @tap="_navigateTo1('/pages/message/systemMesage')">
			         <view class="relative" style="top: -6rpx;">
			             <image :src="xiaoxi" mode=""></image>
			             <view class="xxnum" v-if="access_id1&&user.xxnum>0">{{ user.xxnum }}</view>
			         </view>
			         <text>{{language.my.messageNum}}</text>
			     </view> -->
			 </view>
			
            <view class="listBox" v-if="plugin.mch == 1 || plugin.PT == 1 || plugin.MS == 1 || plugin.KJ == 1 || plugin.JP == 1 || plugin.JF == 1 || plugin.FX == 1">
               <!-- 我的拼团 -->
               <!-- #ifndef MP-ALIPAY -->
              <!-- <view v-if="plugin.PT == 1" @tap="_navigateTo1('/pagesA/group/groupOrder')">
                   <image class="list_left" src="http://jcsp.hzjcwlkj.cn/images/uni-app/bian14.png" mode="widthFix"></image>
				        <text>我的拼团</text>
               </view> -->
               <!-- 我的秒杀 -->
              <!-- <view v-if="plugin.MS == 1" @tap="_navigateTo1('/pagesB/seckill/seckill_my')">
                   <image class="list_left" src="http://jcsp.hzjcwlkj.cn/images/uni-app/bian11.png" mode="widthFix"></image> -->
                   <!-- <text>{{language.my.my_seckill}}</text> -->
               	<!-- <text>我的秒杀</text> -->
                   <!-- <image class="jiantou" :src="jiantou"></image> -->
               <!-- </view> -->
               <!-- 我的砍价 -->
              <!-- <view v-if="plugin.KJ == 1" @tap="_navigateTo1('/pagesA/bargain/bargain')">
                   <image class="list_left"  src="http://jcsp.hzjcwlkj.cn/images/uni-app/bian15.png" mode="widthFix"></image>
                   <!-- <text>{{language.my.my_bargain}}</text> -->
               	 <!-- <text>我的砍价</text> -->
                   <!-- <image class="jiantou" :src="jiantou"></image> -->
               <!-- </view> --> 
               <!-- 我的兑换  /pagesB/integral/integral?toBack=true-->
               <!-- <view v-if="plugin.JF == 1" @tap="_navigateTo1('/pagesB/integral/integral?toBack=true')">
                   <image class="list_left" src="http://jcsp.hzjcwlkj.cn/images/uni-app/biaoti4.png" mode="widthFix"></image>
                   <!-- <text>{{language.my.my_exchange}}</text> -->
               	<!-- <text>积分商城</text> -->
                   <!-- <image class="jiantou" :src="jiantou"></image> -->
               <!-- </view> -->
               <!-- 我的竞拍   -->
               <!-- <view v-if="plugin.JP == 1" @tap="_navigateTo1('/pagesA/distribution/distribution_center')">
                   <image class="list_left" src="http://jcsp.hzjcwlkj.cn/images/uni-app/bioati1.png" mode="widthFix"></image>
                   <!-- <text>{{language.my.my_bidding}}</text> -->
               	<!-- <text>代理中心</text> -->
                   <!-- <image class="jiantou" :src="jiantou"></image> -->
               <!-- </view> -->
		
				<!-- 我的店铺 -->
				<!-- <view v-if="plugin.mch == 1" @tap="_navigateTo1('/pagesA/myStore/myStore')">
                    <image class="list_left" src="http://jcsp.hzjcwlkj.cn/images/uni-app/bian16.png" mode="widthFix"></image> -->
                    <!-- <text>{{language.my.my_store}}</text> -->
					<!-- <text>我的店铺</text> -->
                    <!-- <image class="jiantou" :src="jiantou"></image> -->
                <!-- </view> -->
				
                <!-- #endif -->
				
		
			<!-- 我的收藏 -->
			           
			    <view @tap="_navigateTo1('/pages/collection/collection')">
			        <image class="list_left" src="http://jcsp.hzjcwlkj.cn/images/uni-app/bian12.png" mode="widthFix"></image>
			        <!-- <text>{{language.my.my_collection}}</text> -->
					<text>我的收藏</text>
			        <!-- <image class="jiantou" :src="jiantou"></image> -->
			    </view>
				
				
				<!-- 收货地址 -->
				<view @tap="_navigateTo1('/pages/address/receivingAddress?state_manage=2')">
				    <image class="list_left" src="http://jcsp.hzjcwlkj.cn/images/uni-app/biaoti3.png" mode="widthFix"></image>
				    <text>收货地址</text>
				    <!-- <image class="jiantou" :src="jiantou"></image> -->
				</view>
				
				<view v-if="plugin.JF == 1" @tap="_navigateTo1('/pages/message/systemMesage')">
				    <image class="list_left" src="http://jcsp.hzjcwlkj.cn/images/uni-app/biaoti5.png" mode="widthFix"></image>
				    <!-- <text>{{language.my.my_exchange}}</text> -->
					<text style="margin-left: 30rpx;">消息</text> 
				    <!-- <image class="jiantou" :src="jiantou"></image> -->
				</view>
            <!-- </view> -->
           
				<!-- 关于我们 -->
                <!-- #ifndef MP-TOUTIAO -->
               <view @tap="toKeFu">
                   
                    <button class="button_kefu" open-type="contact" type="default" />              
                    <button class="button_kefu" open-type="contact" bindcontact="contactCB"></button>                
                    <image class="list_left" src="http://jcsp.hzjcwlkj.cn/images/uni-app/biaoti6.png" mode="widthFix"></image>
				
						    <text   style="margin-left: 30rpx;">客服</text>
                </view>
                <!-- #endif -->
		
				<view @tap="_navigateTo('/pagesB/setUp/setUp')">
				    <image class="list_left"  src="http://jcsp.hzjcwlkj.cn/images/uni-app/biaoti8.png"  mode="widthFix"></image>
				    <text  style="margin-left: 30rpx;">设置</text>
				    <!-- <image class="jiantou" :src="jiantou"></image> -->
				</view>
				<view @tap="_navigateTo('/pages/my/aboutMe')">
				    <image class="list_left"  src="http://jcsp.hzjcwlkj.cn/images/uni-app/biaoti7.png"  mode="widthFix"></image>
				    <text  >关于我们</text>
				    <!-- <image class="jiantou" :src="jiantou"></image> -->
				</view>
                
              <!-- <view style="position: relative;">
                    <image class="list_left" src="../../static/img/biaoti7.png" mode="widthFix"></image>
                    <text  >关于我们</text>
              
                </view> -->
			
            </view>
            
        </view>
        
        
        
        
        <!-- 会员到期弹窗  -->
        <view v-if="vip_modal_flag" class="vip_modal" @touchmove.stop>
            <view class="vip_modal_data" :style="bg_vip">
                <view class="vip_expire">
                    <p>{{language.my.Tips[0]}}</p>
                    <p>{{language.my.Tips[1]}}</p>
                </view>
                <view class="vip_act">
                    <span class="span">{{ rate }}</span>
                    <p>{{language.my.Tips[2]}}{{ rate }}{{language.my.Tips[3]}}</p>
                    <p class="pr_10">{{language.my.Tips[4]}}</p>
                    <p>{{language.my.Tips[5]}}</p>
                </view>
                <p @tap="vip_renew">{{language.my.Tips[6]}}</p>
                <view class="vip_radio" @tap="check_vip_radio">
                    <image :src="vip_check ? vip_check_img1 : vip_check_img2"></image>
                    <span>{{language.my.Tips[7]}}</span>
                </view>
                <image class="vip_modal_close" :src="close_img" @tap="vip_modal_close"></image>
            </view>
        </view>
        
        <!-- 绑定手机号弹框 -->
        <view class="bindPhone" v-if="bindShow">
            <view class="bind_content">
                您还未绑定手机号,前去 <span @tap="_navigateTo('/pagesB/setUp/setUp')">绑定</span>
            </view>
        </view>
            
    </view>
</template>

<script>
    import { mapMutations, mapState } from 'vuex';

    export default {
        data() {
            return {
                 shezhi:false,//头部设置
				huiyuan:false,//不是会员 要加会员
				vipzongxin:false,// 是会员 
                title: '个人中心',
                access_id: '',
                access_id1: false,
                isClick: false, //防止因为频繁点击导致的页面跳转出错
                vip_modal_flag: false,
                bg_vip: 'background-image: url(' + this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/vip_modal.png)',
                rate: '',
                vip_check: false,
                vip_check_img1: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/vip_checked.png',
                vip_check_img2: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/vip_nocheck.png',
                close_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/vip_close.png',
                my_set: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_set.png',
                my_vipIBg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_vipIBg.png',
                vip_icon0: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/vip_icon0.png',
                vip_icon1: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/vip_icon1.png',
                vip_icon2: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/vip_icon2.png',
                vip_icon3: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/vip_icon3.png',
                xiaoxi: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/xiaoxi.png',
                xiaoxi_h: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/xiaoxi_h.png',
                my_VIPbg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_VIPbg.png',
                my_VIPwz: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_VIPwz.png',
                my_VIPwz1: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_VIPwz1.png',
                my_VIPjt: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_VIPjt.png',
                jiantou: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jiantou.png',
                my_dfh: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_dfh.png',
                my_dfk: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_dfk.png',
                my_dpj: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_dpj.png',
                my_dsh: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_dsh.png',
                my_tk: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_tk.png',
                my_abouts: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_abouts.png',
                my_bargain: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_bargain.png',
                my_seckill: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_seckill.png',
                my_bidding: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_bidding.png',
                my_dh: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_dh.png',
                my_fx: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_fx.png',
                my_group: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_group.png',
                my_kefu: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_kefu.png',
                my_mch: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_mch.png',
                my_sc: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_sc.png',
                my_sh: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/my_sh.png',
                unLogin: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/unLogin.png',
                languageImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/language.png',
                level: 0,
                user: {},
                sign: 0,
                plugin: {},
                orderNum: {},
                
                lang_value: 0,
                
                bindShow: false,   //绑定手机号弹框
            };
        },
        onLoad() {
			uni.setStorageSync('jz', 1)
            this.$store.state.frompage = 'my';
           
            if(uni.getStorageSync('language') == 'en'){
                this.lang_value = 1
            }
        },
		computed:{
			...mapState({
			    _cart_num: 'cart_num'
			})
		},
        onShow() {
			this.getCart();
			// 监听设置的隐藏
			// #ifdef H5 || APP-PLUS
			    this.shezhi=true
			// #endif
			
            this.LaiKeTuiCommon.getUrlFirst(this._axios);
            this.isClick = false;
            // #ifdef MP-WEIXIN
			
            this.LaiketuiWeixinAuth.laiketui_mp_weixin_checkauth(this, this._axios);
            // #endif
            // #ifdef MP-ALIPAY
            this.LaiketuiAliAuth.laiketui_mp_alipay_check(null, this, this._axios);
            // #endif
            // #ifdef MP-TOUTIAO
            this.LaiketuiTTAuth.laiketui_mp_tt_check(null, this, this._axios);
            // #endif
            // #ifdef MP-BAIDU
            this.LaiketuiBDAuth.laiketui_mp_baidu_check(null, this, this._axios);
            // #endif
        },
        onTabItemTap(e) {
            this.LaiKeTuiCommon.closeMPAuthWin(this);
        },
        onUnload() {
            uni.removeStorageSync('isfx');
        },
        methods: {
            toLogin(){
                console.log('0')
              uni.navigateTo({
                  url: 'pages/login/loginpage'
              })  
            },
            jumpUrl(){
              uni.navigateTo({
                  url: 'pagesB/setUp/setUp'
              })  
            },
            changeLang(e){
                let oldlang = uni.getStorageSync('language')
			
                if(e.detail.value == 0){
                    uni.removeStorageSync('language')
                }else if(e.detail.value == 1){
                    uni.setStorageSync('language', 'en')
                }
                this.setLang();
                
                this.lang_value = e.detail.value
				
				let data = {
					module: 'app',
					action:'index',
					app:'select_language',
				}
				this.$req.post({data}).then(res=>{
                    let { code, message } = res
                    
                    uni.showToast({
                        title: message,
                        icon: 'none'
                    })
                    
                    if(code != 200){
                        if(oldlang == 'en'){
                            uni.setStorageSync('language', 'en')
                        }else{
                            uni.removeStorageSync('language')
                        }
                        this.setLang();
                    }
                })
            },
			getCart(){
			    var data = {
			        module: 'app',
			        action: 'cart',
			        app: 'index',
			        cart_id: '',
			        page: 1
			    }
			    
			    this.$req.post({ data }).then(res => {
					   console.log(res,"WODE ")
			        let { code, data, list, mch_list, login_status, message, grade } = res
						
					// if( grade==24){//是会员 显示会员中心
					// 	this.huiyuan=false
					// 	this.vipzongxin=true
						
					// } 
						
					if(grade){
					
						if(grade==0){//是不是会员 需要加入会员
					 this.huiyuan=true
					this.vipzongxin=false
						
					}else{
						this.huiyuan=false
						this.vipzongxin=true	
					}
				
						
					}else{
						this.vipzongxin=false
						this.huiyuan=false
					}
					
			          
			        if (code == 200) {
			    		if (data && data.length) {
			    		    var allnum = 0
			    		    for (var i = 0; i < data.length; i++) {
			    		        allnum += Number(data[i].num)
			    		    }
			    		    this.cart_num(allnum)
			    		} else if (data.length == 0) {
			    		    this.cart_num(0)
			    		}
			    		//添加，移除tabbar购物车小点提醒
			    		if (this._cart_num) {
			    		    var cart_num_str = String(this._cart_num)
			    		
			    		    // #ifdef MP-WEIXIN
			    		    uni.setTabBarBadge({
			    		        index: 2,//控制点的位置、
			    		        text: cart_num_str
			    		    })
			    		    // #endif
			    		
			    		    // #ifndef MP-WEIXIN
			    		    uni.setTabBarBadge({
			    		        index: 2,
			    		        text: cart_num_str
			    		    })
			    		    // #endif
			    		
			    		} else {
			    		    // #ifdef MP-WEIXIN
			    		    uni.removeTabBarBadge({
			    		        index: 2
			    		    })
			    		    // #endif
			    		
			    		    // #ifndef MP-WEIXIN
			    		    uni.removeTabBarBadge({
			    		        index: 2
			    		    })
			    		    // #endif
			    		}
			        } else {
			            // #ifdef MP-WEIXIN
			            uni.removeTabBarBadge({
			                index: 2
			            })
			            // #endif
			                        		
			            // #ifndef MP-WEIXIN
			            uni.removeTabBarBadge({
			                index: 2
			            })
			            // #endif
			        }
			    })
			},
            //微信授权
            bindGetUserInfo (res) {
                this.LaiketuiWeixinAuth.laiketui_mp_weixin_auth(res, this)
                if(res.detail.errMsg == "getUserInfo:ok"){
                    if(!user_phone){
                        this.bindShow = true;
                    }
                }
            },
            
            //头条授权
            ttAuth (res) {
                this.LaiketuiTTAuth.laiketui_mp_tt_userInfo(this)
            },
            
            //百度授权
            bdAuth (res) {
                this.LaiketuiBDAuth.laiketui_mp_baidu_userInfo(this)
            },
            
            //支付宝授权
            onGetAuthorize (res) {
                this.LaiketuiAliAuth.laiketui_mp_alipay_userInfo(res, this)
            },
			
			
            toKeFu(){
                // #ifndef MP-WEIXIN ||  MP-TOUTIAO || MP-BAIDU
                this._navigateTo1('/pages/message/service')
                // #endif
            },
            _order(status) {
                this.isLogin(()=>{
                    this.status(status);
                    uni.navigateTo({
                        url: '/pages/order/myOrder'
                    });
                })
            },
            openVip(){
                this.isLogin(()=>{
                    if(this.user.grade!='普通会员'){
                        this._navigateTo('/pagesA/vipClub/vipClub')
                    }else{
                        this.toVip(1);
                    }
                })
                
            },
            vip_renew() {
                // this.vip_check传给后台的数据，有无勾选不再显示续费弹窗
                if (this.vip_check) {
                    var data = {
                        module: 'app',
                        action: 'recharge',
                        app: 'close',
            
                    };
            
                    this.$req.post({data}).then(res=>{
            
                    })
            
                }
                this.toVip(2);
            },
            // 进入vip支付页面
            toVip(flag) {
                uni.setStorageSync('edit_flag', flag);
                uni.setStorageSync('edit_grade', this.grade);
                this._navigateTo('/pagesA/vip/vip');
            },
            check_vip_radio() {
                this.vip_check = !this.vip_check;
            },
            vip_modal_close() {
                setTimeout(function() {
                    uni.showTabBar();
                }, 10);
                this.vip_modal_flag = !this.vip_modal_flag;
                if (this.vip_modal_flag) {
                    uni.hideTabBar();
                } else {
                    uni.showTabBar();
                }
                if (this.vip_check) {
                    var data = {
                        module: 'app',
                        action: 'recharge',
                        app: 'close',

                    };

                    this.$req.post({data}).then(res=>{

                    })

                }
            },
            changeLoginStatus() {
                this._axios();
            },
            _navigateTo(url) {
                uni.navigateTo({
                    url: url
                });
            },
            _navigateTo1(url) {
                if (this.isClick == false) {
                    this.isClick = true;
                    this.isLogin(()=>{
                        if(url.includes('/pagesA/shop/sign')){
                            this.$req.post({
                                data: {
                                    module: 'app',
                                    action: 'sign',
                                    app: 'sign',
                                }
                            }).then(res=>{
                                if(res.code == 200){
                                    uni.navigateTo({
                                        url: url
                                    });
                                }else{
                                    uni.showToast({
                                        title: res.message,
                                        icon: 'none'
                                    })
                                }
                            })
                            return
                        }
                        
                        uni.navigateTo({
                            url: url
                        });
                    })
                    setTimeout(() => {
                        this.isClick = false;
                    }, 2000);
                }
            },
            _axios() {
                var data = {
                    module: 'app',
                    action: 'user',
                    app: 'index'
                };

                this.$req.post({data}).then(res=>{
                    this.coupon = res.plugin.coupon;
                    this.sign = res.plugin.sign;
                    if(res.plugin.sign == undefined){
                        this.sign = 0
                    }
                    this.mch = res.plugin.mch;
                    if (res.code == 200) {
                        let {
                            data: {
                                level,
                                grade,
                                user,
                                grade_end,
                                xxnum,
                                
                                dfh_num,
                                dfk_num,
                                dpj_num,
                                dsh_num,
                                th,
                                
                                remind,
                                rate,
                            },
                            plugin
                        } = res;
                        this.level = level
                        user.grade = grade
                        user.grade_end = grade_end
                        user.xxnum = xxnum
                        this.user = user;
                        
                        this.orderNum = {
                            th_num: th,
                            dfk_num: dfk_num,
                            dfh_num: dfh_num,
                            dsh_num: dsh_num,
                            dpj_num: dpj_num
                        }
                        // this.th_num = th;
                        // this.dfk_num = dfk_num;
                        // this.dfh_num = dfh_num;
                        // this.dsh_num = dsh_num;
                        // this.dpj_num = dpj_num;
                        
                        this.$store.state.user_phone = user.mobile;
                        uni.setStorage({
                            key: 'user_phone',
                            data: user.mobile
                        });
                        
                        this.access_id1 = true;
                        this.rate = rate;
                        this.vip_modal_flag = remind ? true : false;
                        if (this.vip_modal_flag) {
                            uni.hideTabBar();
                        } else {
                            uni.showTabBar();
                        }
                        
                        this.plugin = plugin
                        
                        this.load = true
                    }else{
                        this.access_id1 = false;
                        this.plugin = res.plugin

                        this.load = true
                    }
                })

            },
            
            ...mapMutations({
                status: 'SET_STATUS',
				cart_num: 'SET_CART_NUM'
            })
        }
    };
</script>

<style scoped lang="less">
    @import url('../../static/css/tabBar/my.less');
    .bindPhone{
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,0.6);
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 999999;
        
    }
    .bindPhone .bind_content{
        width: 70%;
        height: 330rpx;
        background-color: #FFFFFF;
        margin: 50% auto 0;
        border-radius: 46rpx;
        text-align: center;
        line-height: 330rpx;
        font-size: 28rpx;
        
    }
    .bindPhone .bind_content span{
         font-size: 28rpx;
         color: #FF612A;
         text-underline: 2rpx solid #FF612A;
    }
</style>
