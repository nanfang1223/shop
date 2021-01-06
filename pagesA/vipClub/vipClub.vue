<template>
    <view>
        <div class='relative'>
            <heads :title='language.vipClub.title' :returnR='returnR'></heads>
            <!-- #ifndef MP -->
            <div id='copyshare' v-if='share_s==1' @tap="vipshare" :style="'top: '+top+'px'"
                 :data-clipboard-text='shareHref'>{{language.vipClub.Member_sharing}}
            </div>
            <!-- #endif -->
        </div>

        <!-- #ifdef MP -->

        <!-- #ifdef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU -->
        <button class='vip_share_box' open-type="share">
            <div class='div'>{{language.vipClub.Member_sharing}}</div>
        </button>
        <!-- #endif -->

        <!-- #ifndef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU -->
        <div class='vip_share_box' v-if='share_s==1'>
            <span class='div' @tap="vipshare">{{language.vipClub.Member_sharing}}</span>
        </div>
        <!-- #endif -->

        <!-- #endif -->
        <div class='all' v-for='(item, i) in userVipMsg' :key='i'>
            <div>
                <!-- 会员卡面 -->
                <div class='vip-card' :style="'height:'+TT_height">
                    <image :src="item.imgurl" id='vip-card-img' :style="'height:'+TT_height"></image>
                    <div>
                        <image :src="item.headimgurl" class='vip-card-headimg'></image>
                        <div class='vip-msg'>
							<span class='name'>
								<span class="user_name_style"
                                      :style="'color:'+item.font_color">{{item.user_name}}</span>
								<div class='tag vip-level' :style="'color:'+item.font_color">
									<img class='img' :src="item.imgurl_s">
									<span>{{item.grade}}</span>
								</div>
							</span>
                            <div class='pay_btn_box'>
                                <span v-if='vip_up==1' class='tag pay-tag' @tap="toVip(3)">{{language.vipClub.upgrade}}</span>
                            </div>
                        </div>
                    </div>
                    <span class='tag-xf' @tap="toVip(2)">{{language.vipClub.renew}}</span>
                    <span class='time' :style="'color:'+item.date_color">{{item.grade}}{{language.vipClub.Valid}}{{item.grade_end}}</span>
                </div>
                <!-- 权益 -->
                <span class='desc-title'>{{language.vipClub.interests}}</span>

                <div class='up-title' @tap='_toGradeUse'>{{language.vipClub.rules}}</div>
				    <div class='desc dfdfa'>
				         <div class='desc-item'>
				             <div class='desc-img rate'></div>
				             <span>{{item.rate}}{{language.vipClub.fracture}}</span>
				         </div>
				         <div class='desc-item' v-for='(item, id) in vipRights' :key='id'>
				             <div class='desc-img'></div>
				             <span>{{item.name}}</span>
				         </div>
				     </div>
           <!--     <div class='desc dfdfa'>
                    <div class='desc-item'>
                        <div class='desc-img rate'>{{item.rate}}</div>
                        <span>{{item.rate}}{{language.vipClub.fracture}}</span>
                    </div>
                    <div class='desc-item' v-for='(item, id) in vipRights' :key='id'>
                        <div class='desc-img'></div>
                        <span>{{item.name}}</span>
                    </div>
                </div> -->
                <!-- 会员商品 -->
                <span class='good-title'>{{language.vipClub.Member_Specials}}</span>
                <div class='good'>
                    <div class='good-item' v-for='(item, num) in product' :key='num'>
                        <image class="good-img" :src="item.imgurl" mode="widthFix" @tap="_goods(item.id)"></image>
                        <div class='good-msg'>
							<span class='good-name'>
								<span class='span'>{{language.vipClub.member}}</span>
								{{item.product_title}}
							</span>
                            <span class='good-price'>{{language.vipClub.member_price}} ¥{{item.price}}</span>
                            <span class='yj-price'>{{language.vipClub.original}} ¥{{item.yprice}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 会员分享蒙版 -->
        <div v-if='shareFlag' class='vipshare' @tap="shareStop" @touchmove.stop.prevent='stopmove'>
            <div>
                <!-- #ifdef MP-WEIXIN -->
                <div class='relative'>
                    <img :src="wechatimg">
                    <p style='margin-top: -26rpx;'>{{language.vipClub.Wechat_friends}}</p>
                    <button class="share_btn" open-type="share">{{language.vipClub.share}}</button>
                </div>
                <!-- #endif -->

                <!-- #ifdef APP-PLUS -->
                <div @tap.stop='_shareApp(2)'>
                    <img :src="wechatimg">
                    <p>{{language.vipClub.WeChat}}</p>
                </div>
              <!--  <div @tap.stop='_shareApp(1)'>
                    <img :src="pyq_img">
                    <p>{{language.vipClub.Wechat_Moments}}</p>
                </div> -->
                <!-- #endif -->

          <!--      <div @tap.stop='_shareApp(3)'>
                    <img :src="ewmShareimg">
                    <p>{{language.vipClub.QR}}</p>
                </div> -->

            </div>
        </div>
        <ruleModal v-model="isShow" @click="_toGradeUse" :title="language.vipClub.rules" :details="rule"/>
    </view>
</template>

<script>
    import ruleModal from '@/components/ruleModal.vue'
    import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
    import '../../common/clipboard.js'

    export default {
        data () {
            return {
                returnR: 7,
                title: 'VIP会员中心', //页面标题
                userVipMsg: [],
                share_img: '',
                rule: '',
                product: [],
                shareFlag: false, //会员分享控制
                top: '0',  //设备顶部状态栏高度
                share_s: 0,
                vip_up: 1,  //1、可以升级
                gz_height: '',
                user_id: '',
                shareHref: '',  //分享链接
                isShow: false,
                TT_height: '',
                pyq_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/wepyq.png',
                wechatimg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/wechat.png',
                ewmShareimg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/ewmShare.png',

                // 以下为各会员权益，测试版
                vipRights: [
                    {
                        name: '快速退货', //权益名称
                        image: uni.getStorageSync('endurl') + 'images/image_1/156404126821.png', //权益图标
                    }, {
                        name: '活动专属', //权益名称
                        image: uni.getStorageSync('endurl') + 'images/image_1/156404126821.png', //权益图标
                    }, {
                        name: '快速发货', //权益名称
                        image: uni.getStorageSync('endurl') + 'images/image_1/156404126821.png', //权益图标
                    }, {
                        name: '其他优惠', //权益名称
                        image: uni.getStorageSync('endurl') + 'images/image_1/156404126821.png', //权益图标
                    }
                ]
            }
        },
        components: {
            wxParse,
            ruleModal
        },
        //转发
        onShareAppMessage: function (res) {

            let data = {
                isfx: 1,
                tui_id: this.user_id,
            }

            let share = '/pagesA/vip/vip?data=' + JSON.stringify(data)

         
            if (res.from === 'button') {
      
            }

            return {
                title: this.language.vipClub.Member_sharing,
                path: share,
                imageUrl: this.share_img,
                // bgImgUrl:this.userVipMsg[0].imgurl,
                success: function (res) {
            
                }
            }
        },
        onLoad (option) {
            if(option.toBack){
                this.returnR = 0
            }
            //#ifdef MP
            let data = {
                isfx: 1,
                tui_id: this.user_id,
            }
            // #endif
            //微信小程序中自定义标题
            //#ifdef MP-WEIXIN
            uni.setNavigationBarTitle({
                title: this.title
            })
            // #endif
            // #ifdef APP-PLUS
            var that = this
            uni.getSystemInfo({
                success (res) {
                    that.top = res.statusBarHeight
                }
            })
            // #endif

            this.gz_height = uni.upx2px(150) + 'px'
            // 适配头条小程序
            this.TT_height = uni.upx2px(300) + 'px'
        },
        onShow () {
            
             this._axios()
             this.vipRights = [
                    {
                        name: this.language.vip.vipRights[2], //权益名称
                        image: uni.getStorageSync('endurl') + 'images/image_1/156404126821.png', //权益图标
                    }, {
                        name:this.language.vip.vipRights[3],//权益名称
                        image: uni.getStorageSync('endurl') + 'images/image_1/156404126821.png', //权益图标
                    }, {
                        name: this.language.vip.vipRights[4],//权益名称
                        image: uni.getStorageSync('endurl') + 'images/image_1/156404126821.png', //权益图标
                    }, {
                        name: this.language.vip.vipRights[5], //权益名称
                        image: uni.getStorageSync('endurl') + 'images/image_1/156404126821.png', //权益图标
                    }
                ]
        },
        methods: {
            _navigateTo (url) {
                uni.navigateTo({
                    url: url,
                })
            },
            /*   跳转商品详情页    */
            _goods (id) {
                uni.navigateTo({
                    url: '../../pages/goods/goodsDetailed?pro_id=' + id
                })
            },
            _axios () {
                var me = this
                var data = {
                    module: 'app',
                    action: 'recharge',
                    app: 'grade_center'
                }
                this.$req.post({data}).then(res => {
                    if (res.code == 404) {
                        me.access_id1 = false
                    } else if (res.code == 200) {

                        me.userVipMsg = res.data
                        me.share_img = res.share_img

                        me.userVipMsg[0].grade_end = me.userVipMsg[0].grade_end.substring(0, 11)
                        me.userVipMsg[0].rate = Number(me.userVipMsg[0].rate).toFixed(1)
                        me.rule = res.rule
                        me.product = res.product
                        me.share_s = res.share
                        me.vip_up = res.up
                        me.user_id = res.data[0].user_id
                    }
                })
            },
            // 进入vip支付页面
            toVip (flag) {
                uni.setStorageSync('edit_flag', flag)
                uni.setStorageSync('edit_grade', this.userVipMsg[0].grade)
                this._navigateTo('/pagesA/vip/vip')
            },
            // 会员分享,控制蒙版打开
            vipshare () {

                // #ifdef H5
                let data = {
                    isfx: 1,
                    tui_id: this.user_id
                }
                let me = this
                me.shareHref = uni.getStorageSync('h5_url') + 'pagesA/vip/vip?data=' + encodeURIComponent(JSON.stringify(data))
                var Clipboard = require('../../common/clipboard.js')
                var clipboard = new Clipboard('#copyshare')
                clipboard.on('success', function (e) {
                  
                    uni.showToast({
                        title: this.language.vipClub.Tips[0],
                        duration: 1000,
                        icon: 'none'
                    })
                })
                clipboard.on('error', function (e) {
                
                    uni.showToast({
                        title: this.language.vipClub.Tips[1],
                        duration: 1000,
                        icon: 'none'
                    })
                    document.querySelector('.copy')
                })
                // #endif

                // #ifndef H5
                this.shareFlag = true
                // #endif
            },
            // 查看更多
            _gzgd () {
                if (this.gz_height != 'auto') {
                    this.gz_height = 'auto'
                } else {
                    this.gz_height = uni.upx2px(150) + 'px'
                }
            },
            // 关闭会员分享蒙版
            shareStop () {
                this.shareFlag = false
            },
            // 分享方法
            _shareApp (type) {
                if (type == 3) {
                    uni.navigateTo({
                        url: '/pagesB/vip/vip_share'
                    })
                    return
                }
                var me = this
                var scene = ''
                if (type == 1) {
                    //App分享到 微信朋友圈
                    scene = 'WXSenceTimeline'
                } else if (type == 2) {
                    //App分享到 微信好友
                    scene = 'WXSceneSession'
                }
                let data = {
                    isfx: 1,
                    tui_id: this.user_id
                }
                var url = uni.getStorageSync('h5_url') + 'pagesA/vip/vip?data=' + encodeURIComponent(JSON.stringify(data))
                uni.share({
                    provider: 'weixin',
                    scene,
                    type: 0,
                    href: url,
                    title: this.language.vipClub.shareTitle,
                    summary: this.language.vipClub.shareSummary,
                    imageUrl: me.userVipMsg[0].headimgurl,
                    success: function (res) {
                      
                    },
                    fail: function (err) {
                        
                    }
                })
            },
            _toGradeUse () {
                this.isShow = !this.isShow
            },
        }
    }
</script>

<style scoped lang="less">
    @import url("../../static/css/vip/vipClub.less");
</style>
