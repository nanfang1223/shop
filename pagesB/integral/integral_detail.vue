<template>
    <div class="order_ii yh-integral">
        <lktauthorize ref="lktAuthorizeComp"></lktauthorize>

        <toload v-if="!goods"></toload>

        <div v-else ref="box" class="yh-boxs" id="boxs" @touchmove="setHead">
            <!-- 客服按钮 -->
            <!-- #ifdef MP-WEIXIN -->
            <button type="primary" open-type="contact"><img class="kefu" :src="integral_kf" /></button>
            <!-- #endif -->

            <!-- #ifndef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU-->
            <img :src="integral_kf" class="kefu" @tap="kf(pro_id)" />
            <!-- #endif -->

            <!-- #ifdef MP-BAIDU -->
            <button open-type="contact" bindcontact="contactCB"><img class="kefu" :src="integral_kf" /></button>
            <!-- #endif -->

            <!--头部-->
            <heads :title="language.integral.integral_detail.title"></heads>
            <!--  轮播图   -->
         <!--   <swiper style="height: 750upx">
                <swiper-item><img v-if="goods.imgurl" style="width:100%;height:750upx" class="swipe" :src="goods.imgurl" /></swiper-item>
            </swiper> -->
            <div class="goods_name">
                <p class="goods_price">
                    <span style="font-size: 34rpx;font-weight: bold;" v-if="goods.money > 0 && goods.integral > 0">
                        ￥{{ goods.money + ' + ' }}
                        <img :src="integral_img" style="height: 26rpx;width: 26rpx;margin-right: 3px;" />
                        {{ goods.integral }}
                    </span>
                    <span style="font-size: 30rpx;" v-else>
                        <img :src="integral_img" style="height: 26rpx;width: 26rpx;margin-right: 3px;" />
                        {{ goods.integral }}
                    </span>
                    <span class="sc_price">{{language.integral.integral_detail.market_value}}：￥{{ goods.price }}</span>
                </p>
                <p style="font-size: 30rpx;font-weight: bold;padding-bottom: 10rpx;">{{ goods.product_title }}</p>
                <p class="attribute" style="padding-bottom: 10rpx;">{{ goods.attribute }}</p>
                <p class="goods_three">
                    <span>{{language.integral.integral_detail.sales}}：{{ goods.score }}</span>
                    <span style="color: #020202;display: flex;align-items: center;" @tap="showShareMask(0)">
                        <!-- #ifdef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU -->
                        <button id="copyy" :data-clipboard-text="shareHref" open-type="share" style="line-height: 0;"><img class="fenxiang" :src="fx_img" /></button>
                        {{language.integral.integral_detail.share}}
                        <!-- #endif -->
                        <!-- #ifndef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU-->
                        <img :src="fx_img" class="fenxiang" id="copyy" :data-clipboard-text="shareHref" />
                        {{language.integral.integral_detail.share}}
                        <!-- #endif -->
                    </span>
                </p>
            </div>
            <div class="kong"></div>
            <div class="user gd_user" v-if="comments.length" @tap="_evaluate(goods.goods_id)">
                <p>{{language.integral.integral_detail.User_evaluation}}（{{ comm_count }}）</p>
                <img class="arrow" :src="you_img" />
            </div>
            <div v-if="comments.length" style="padding: 0 30rpx;margin: 30upx 0;">
                <div style="height: 54rpx;justify-content: flex-start;margin-bottom: 23rpx;" class="allCenter">
                    <img :src="comments[0].anonymous == 0 ? comments[0].headimgurl : niming" style="width: 54rpx;height: 54rpx;margin-right: 24rpx;" />
                    <span v-if="comments[0].anonymous == 0" style="font-size: 28rpx;color: #020202;">{{ comments[0].user_name }}</span>
                    <span v-else style="font-size: 28rpx;color: #020202;">{{language.integral.integral_detail.anonymous}}</span>
                </div>
                <div style="font-size: 24rpx;color: #999999;margin-bottom: 40rpx;">{{ comments[0].add_time }}</div>
                <div style="font-size: 28rpx;color: #020202;">{{ comments[0].content }}</div>
            </div>

            <div class="user" v-if="!comments.length"><p style="font-size: 30rpx;">{{language.integral.integral_detail.No_evaluation}}</p></div>
            <div class="kong"></div>
            <div style="height: 228rpx;">
                <div class="store store1">
                    <div class="store1Div">
                        <img :src="shop_list.shop_logo" />
                        <div style="font-weight: bold;">{{ shop_list.shop_name }}</div>
                    </div>
                    <view style="display: flex;width: 280rpx;justify-content: space-around;">
                        <!-- #ifdef MP-ALIPAY || MP-BAIDU -->
                        <button open-type="share" style="border: none;height: auto;" @tap="showShareMask(shop_list.shop_id)" id="copyshare" :data-clipboard-text="shareHref">
                            <div class="goStore store1Div sharBtn">{{language.integral.integral_detail.Share_shop}}</div>
                        </button>
                        <!-- #endif -->
                        <!-- #ifndef MP-ALIPAY || MP-BAIDU-->
                        <div class="goStore store1Div sharBtn" @tap="showShareMask(shop_list.shop_id)" id="copyshare" :data-clipboard-text="shareHref">{{language.integral.integral_detail.Share_shop}}</div>
                        <!-- #endif -->
                        <div class="goStore store1Div" @tap="_goStore(shop_list.shop_id)">{{language.integral.integral_detail.Shop_in}}</div>
                    </view>
                </div>
                <div class="store store2" style="justify-content: space-around;">
                    <div class="store2Div">
                        <p>{{ shop_list.quantity_on_sale }}</p>
                        <div>{{language.integral.integral_detail.sellingGoods}}</div>
                        <div class="shuxian"></div>
                    </div>
                    <div class="store2Div">
                        <p>{{ shop_list.quantity_sold }}</p>
                        <div>{{language.integral.integral_detail.soldOut}}</div>
                        <div class="shuxian"></div>
                    </div>
                    <div class="store2Div">
                        <p>{{ shop_list.collection_num }}</p>
                        <div>{{language.integral.integral_detail.followers}}</div>
                    </div>
                </div>
            </div>
            <div class="kong"></div>
            <div class="goods_d" id="doogi">{{language.integral.integral_detail.Commodity_details}}</div>
            <!--  商品详情    -->
            <div class="content_d" id="content_d"><rich-text v-if="goods.content" :nodes="goods.content"></rich-text></div>
            <div class="goods_foot">
                <div v-if="goods.status != 3" class="goods_bottom">
				<div class="goods_two" style="width: 100%; background: #FF612A;" @tap="_buy" >{{language.integral.integral_detail.Redeem_now}}</div></div>
                <div v-else class="goods_bottom disable"><div class="goods_two" style="width: 100%;" >{{language.integral.integral_detail.shelf}}</div></div>
            </div>
            <div class="share" v-if="g_show">
                <div><img :src="top_img" /></div>
            </div>
        </div>

        <!-- 遮罩 -->
        <div class="mask" @touchmove.stop.prevent="moveHandle" @tap="_shareDiv" v-if="shareDiv">
            <div class="allCenter yh-allCenter">
                <div class="yh-shareWay" v-for="(item, index1) in shareWay" :key="index1" @tap="_invite(item.name)">
                    <div><img :src="item.imgUrl" class="yh-imgUrl" /></div>

                    <span class="yh-shareWay-name">{{ item.name }}</span>
                </div>
            </div>
        </div>

        <div class="mask" @touchmove.stop.prevent="moveHandle" v-if="saveEWM">
            <div class="shareEwm" v-if="saveEWM">
                <img :src="ewmImg" class="imgEwm" />
                <img :src="close" class="close" @tap="_closeAllMask" />

                <view class="saveEWMBtn" @tap="_downEWM()">
                    <img :src="saves" class="saves" />
                    {{language.integral.integral_detail.Save_picture}}
                </view>
            </div>
        </div>

        <div class="mask" v-if="shareMask && !saveEWM" @tap="_closeAllMask">
            <!-- 邀请链接的弹框 -->
            <div class="shareMask" v-if="!saveEWM" @tap.stop>
                <div class="shareMaskTitle">{{language.integral.integral_detail.Share}}</div>

                <!-- #ifdef MP-WEIXIN -->
                <div class="yh-ptcon">
                    <div class="shareIcon">
                        <button class="share_btn" open-type="share">
                            <img :src="wx_img" />
                            <p class="yh-p">{{language.integral.integral_detail.Wechat_friends}}</p>
                        </button>
                    </div>

                    <div class="shareIcon" @tap="showSaveEWM('wx')">
                        <img :src="erm_img" />
                        <p>{{language.integral.integral_detail.QR}}</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <!-- #endif -->

                <!-- #ifdef APP-PLUS -->
                <div class="yh-ptcon">
                    <div class="shareIcon yh-shareIcon" @tap="_shareApp(1)">
                        <img :src="erm_pyq_img" />
                        <p>{{language.integral.integral_detail.friends}}</p>
                    </div>

                    <div class="shareIcon yh-shareIcon" @tap="_shareApp(2)">
                        <img :src="wx_img" />
                        <p>{{language.integral.integral_detail.Wechat_friends}}</p>
                    </div>

                    <div class="shareIcon yh-shareIcon" @tap="showSaveEWM('app')">
                        <img :src="erm_img" />
                        <p>{{language.integral.integral_detail.QR}}</p>
                    </div>

                    <div class="clearfix"></div>
                </div>
                <!-- #endif -->

                <div class="shareEnd" @tap="closeShareMask()">{{language.integral.integral_detail.cancel}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { LaiKeTui_collection, LaiKeTuiInvite, LaiKeTuiShopEWM, LaiKeTuiShowSaveEWM } from '../../static/js/goods/goodsDetailed.js';

export default {
    data() {
        return {
            close: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/close_bb.png',
            saves: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/save.png',
            integral_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/integral.png',
            integral_sc1: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/integral_sc1.png',
            integral_sc2: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/integral_sc2.png',
            integral_kf: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/integral_kf.png',
            yulan: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + '/images/icon1/yulan.gif',
            fx_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + '/images/icon/share.png',
            top_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + '/images/icon/kaobei2x.png',
            niming: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/landing_logo2x.png',
            wx_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/wechat.png',
            erm_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/ewmShare.png',
            erm_pyq_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/wepyq.png',
            bback_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + '/images/icon/bback.png',
            imgurls: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + '/images/icon/landing_logo.png',
            logo: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + '/images/icon/lktlogo.png',
            you_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + '/images/icon/jiantou2x.png',
            option: '',
            comm_count: 0, //评价总数
            num: '', //规格数量
            price: '', //规格价格
            imgurl: '', //规格图片
            pro: '', //商品信息
            comments: '', //评价信息
            type: '', //判断进入规格选择是从立即购买1、加入购物车2、规格选择进入3

            g_show: false, //回顶部显示
            isfx: '',
            pro_id: '',
            goods: '',
            shop_list: '',
            ewmImg: '', //二维码图片
            saveEWM: false,
            collection: '', //收藏状态
            collection_id: '', //收藏id
            title: '商品详情',
            is_jifen: true,
            is_shop: false,
            shop_id: '',
            sharehrefTitle: '',
            shareImg: '',
            shareContent: '',
            shareHref: '',
            shareMask: false,
            shareDiv: false,
            fastTap: true,
            isopen: 1,
            shareWay: [
                // #ifndef MP-WEIXIN
                {
                    name: '微信',
                    imgUrl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/wechat.png'
                },
                {
                    name: '朋友圈',
                    imgUrl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/fdc.png'
                },
                {
                    name: '二维码分享',
                    imgUrl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/ewmShare.png'
                }
                // #endif
            ],
            headerplus: false
        };
    },
    onLoad(option) {
        this.pro_id = option.pro_id;
        // this._axios()
    },
    onShow() {
        this._axios();
    },
    //转发
    onShareAppMessage: function(res) {
        if (this.login_status == 0) {
            uni.navigateTo({
                url: '../../login/login?landing_code=1'
            });
        } else {
            if (res.from === 'button') {
            }
            return {
                title: this.sharehrefTitle,
                path: this.shareHref2,
                imageUrl: this.shareImg,
                bgImgUrl: this.shareImg,
                success: function(res) {
                    this.shareHref2 = '/pagesB/integral/integral_detail?pro_id=' + this.pro_id;
                }
            };
        }
    },
    methods: {
        moveHandle() {},
        setHead() {
            const query = uni.createSelectorQuery().in(this);
            query
                .select('#boxs')
                .boundingClientRect(data => {
                    if (data.top > -20) {
                        this.headerplus = false;
                    } else if (data.top < -20) {
                        this.headerplus = true;
                    }
                })
                .exec();
        },
        /**
         *
         * */
        _invite(type) {
            this.shareDiv = false;
            LaiKeTuiInvite(type, this);
        },
        /**
         *
         * */
        _evaluate(pro_id) {
            if (this.bargain) {
                uni.navigateTo({
                    url: '../../pages/evaluate/evaluate?bargain=true&pid=' + pro_id
                });
            } else {
                uni.navigateTo({
                    url: '../../pages/evaluate/evaluate?pid=' + pro_id
                });
            }
        },
        /**
         *
         * */
        _buy() {
            if (this.goods.status ==3) {
                return;
            }
            
            if (this.goods.is_delete == 1 || this.isopen == 0) {
                uni.showToast({
                    title: this.language.integral.integral_detail.Tips[0],
                    duration: 1500,
                    icon: 'none'
                });
                return;
            }

            this.isLogin(() => {
                uni.navigateTo({
                    url: '/pagesB/integral/integral_order?id=' + this.pro_id
                });
            });
        },
        _shareDiv() {
            this.shareDiv = false;
        },
        /**
         *
         * */
        _closeAllMask() {
            this.shareMask = false;
            this.saveEWM = false;
        },
        /**
         *
         * */
        _downEWM() {
            let me = this;
            uni.downloadFile({
                url: this.ewmImg,
                success(res) {
                    let filePath = res.tempFilePath;
                    uni.saveImageToPhotosAlbum({
                        filePath: filePath,
                        success() {
                            uni.showToast({
                                title: this.language.integral.integral_detail.Tips[1],
                                duration: 1500,
                                icon: 'none'
                            });
                            me.shareMask = false;
                            me.saveEWM = false;
                        },
                        fail: function() {
                            uni.showToast({
                                title: this.language.integral.integral_detail.Tips[2],
                                duration: 1500,
                                icon: 'none'
                            });
                        }
                    });
                },
                fail: function() {
                    uni.showToast({
                        title: this.language.integral.integral_detail.Tips[2],
                        duration: 1500,
                        icon: 'none'
                    });
                }
            });
        },
        /**
         *
         * */
        showSaveEWM(string) {
            if (this.is_shop) {
                LaiKeTuiShopEWM(string, this);
            } else {
                LaiKeTuiShowSaveEWM(string, this);
            }
        },
        /**
         *
         * */
        showShareMask(shop) {
            if (this.goods.is_delete == 1 || this.isopen == 0) {
                uni.showToast({
                    title:this.language.integral.integral_detail.Tips[0],
                    duration: 1500,
                    icon: 'none'
                });
                return;
            }
            if (shop && shop > 0) {
                // console.log('-------------------shop---------------' + shop);
                this.is_shop = true;
                this.shop_id = shop;
                this.sharehrefTitle = this.shop_list.shop_name;
                this.shareImg = this.shop_list.shop_logo;
                this.shareContent = this.shop_list.shop_name;
                let url = uni.getStorageSync('h5_url');
                this.shareHref = url + 'pagesA/store/store?is_share=true&shop_id=' + shop;
                this.shareHref2 = '/pagesA/store/store?is_share=true&shop_id=' + shop;
            } else {
                // console.log('-------------------noshop---------------' + this.goods.product_title);
                this.is_shop = false;
                this.shareHref2 = '/pagesB/integral/integral_detail?pro_id=' + this.pro_id;
                this.sharehrefTitle = this.goods.product_title;
                this.shareImg = this.goods.imgurl;
                this.shareContent = this.goods.attribute + this.goods.product_title;
                let url = uni.getStorageSync('h5_url');
                this.shareHref = url + 'pagesB/integral/integral_detail?pro_id=' + this.pro_id + '&isfx=true';
            }
            this.isLogin(() => {
                // #ifdef H5
                let Clipboard = require('../../common/clipboard.js');
                if (shop && shop > 0) {
                    var clipboard = new Clipboard('#copyshare');
                } else {
                    var clipboard = new Clipboard('#copyy');
                }
                clipboard.on('success', function(e) {
                    // console.log('--复制分享链接成功--'.e);
                    uni.showToast({
                        title: this.language.integral.integral_detail.Tips[3],
                        duration: 1000,
                        icon: 'none'
                    });
                });
                clipboard.on('error', function(e) {
                    // console.log('--复制分享链接失败--'.e);
                    uni.showToast({
                        title: this.language.integral.integral_detail.Tips[4],
                        duration: 1000,
                        icon: 'none'
                    });
                    document.querySelector('.copy');
                });
                // #endif

                // #ifndef H5
                // #ifdef MP-WEIXIN
                this.shareMask = true;
                // #endif
                // #ifndef MP-WEIXIN
                // #ifndef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU
                this.shareDiv = true;
                // #endif
                // #endif
                // #endif
            });
        },
        closeShareMask() {
            this.shareMask = false;
            this.overflow = 'scroll';
        },
        /**
         *
         * */
        _goback() {
            let num = getCurrentPages();

            if (num.length === 1) {
                uni.switchTab({
                    url: '../../pages/tabBar/home'
                });
                return;
            }

            uni.navigateBack();
        },
        /**
         *
         * */
        _collection() {
            this.isLogin(() => {
                LaiKeTui_collection(this);
            });
        },
        /**
         *
         * */
        kf(pro_id) {
            this.isLogin(() => {
                uni.navigateTo({
                    url: '/pages/message/service?pid=' + pro_id
                });
            });
        },
        /**
         *
         * */
        _goStore(shop_id) {
            uni.navigateTo({
                url: '/pagesA/store/store?shop_id=' + shop_id
            });
        },
        async _axios() {
            let data = {
                module: 'app',
                action: 'integral',
                app: 'goodsdetail',

                id: this.pro_id
            };
            let res = await this.$req.post({ data });
            if (res.code == 200) {
                let goods = res.goods;
                goods.content = goods.content.replace(/<img/g, '<img style="width:100%;"');
                this.goods = goods;
                this.goods.attribute = this.goods.attribute.replace(/：/g, ':');
                this.shop_list = res.shop_list;
                this.collection = this.goods.is_collection == 1 ? true : false;
                this.collection_id = this.goods.collection_id;
                this.comments = res.comments;
                this.isopen = res.isopen;
                this.comm_count = res.comm_count;
            } else {
                uni.showToast({
                    title: res.msg,
                    duration: 1500,
                    icon: 'none'
                });
            }
        }
    }
};
</script>

<style lang="less">
@import url('../../static/css/integral/integral_detail.less');
</style>
