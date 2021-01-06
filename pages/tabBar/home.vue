<template>
    <view class="skeleton containerBg">
        <view class="onReachBottomBg" v-if="!is_diy && load"></view>
        <view class="onReachBottomBg" v-if="is_diy && load" :style="{background: `linear-gradient(90deg,${onReachBottomBg[0].item} 0%,${onReachBottomBg[1].item} 100%)`}"></view>


        <!--   首页diy-->
        <view v-if="is_diy && load" class="diy" :style="{background: `linear-gradient(90deg,${bgColor[0].item} 0%,${bgColor[1].item} 100%)`}">
            <lktauthorize ref="lktAuthorizeComp"></lktauthorize>
            <block v-for="(item,index) in styleConfig" :key='index'>
                <blankPage v-if='item.name=="blankPage"' :dataConfig="item"></blankPage>
                <combination v-if='item.name=="combination"' :dataConfig="item" @toUrl="toUrl"></combination>
                <guide v-if='item.name=="guide"' :dataConfig="item"></guide>
                <headerSerch v-if='item.name=="headerSerch"' :dataConfig="item" @toUrl="toUrl" :region="region"></headerSerch>
                <homeAdv v-if='item.name=="homeAdv"' :dataConfig="item" @toUrl="toUrl"></homeAdv>
                <homeStore v-if='item.name=="homeStore"' :dataConfig="item" @toUrl="toUrl"></homeStore>
                <homeVideo v-if='item.name=="homeVideo"' :dataConfig="item"></homeVideo>
                <menus v-if='item.name=="menus"' :dataConfig="item" @toUrl="toUrl"></menus>
                <richText v-if='item.name=="richText"' :dataConfig="item" @toUrl="toUrl"></richText>
                <seckill v-if='item.name=="seckill"' :dataConfig="item" @refresh="_axios" @toUrl="toUrl"></seckill>
                <swiperBg v-if='item.name=="swiperBg"' :dataConfig="item" @toUrl="toUrl"></swiperBg>
                <swiperPicture v-if='item.name=="swiperPicture"' :dataConfig="item" @toUrl="toUrl"></swiperPicture>
                <tabNav v-if='item.name=="tabNav"' :dataConfig="item" :page="page" :is_grade="is_grade" @loadingType="onHandleLoadingType"
                    @changePage="changePage" @toUrl="toUrl"></tabNav>
            </block>

        </view>

        <!-- 普通的首页-->
        <view v-if="!is_diy && load" class="container">
            <!-- 头部组件 -->
            <lktauthorize ref="lktAuthorizeComp"></lktauthorize>

            <view class="container_top">
                <!-- #ifndef MP -->
                <view class="data_h" :style="{ height: halfWidth }">
                    <view class="data_h_h" :style="{ height: halfWidth }"></view>
                </view>
                <!-- #endif -->
                <!-- #ifdef MP -->
                <heads :title="language.home.title" :border="true" :returnFlag="true" ishead_w="1"></heads>
                <!-- #endif -->
                <view style="height: 88rpx;">
                    <view class="container_top_item">
                        <view class="container_top_item_left" @tap="toArea" style="white-space: nowrap; max-width:90%">
                            <image :src="jianX_h" lazy-load="true"></image>
                            <view style="white-space: nowrap; max-width:80%;
    overflow: hidden;text-overflow:ellipsis;">

                                <!-- {{region.district?region.district:'岳麓区'}} -->
                                <!-- {{region.formatted_addresses?region.formatted_addresses:'萧山区'}} -->
                                {{wezhi}}


                            </view>


                        </view>
                        <view class="container_top_item_right" style="position: absolute;   top: 10rpx; right: 20rpx;"
                            @tap="_navigateTo('/pages/message/systemMesage')">
                            <image src="../../static/iconfont/tubiao15.png" lazy-load="true"></image>
                            <view v-if="xxnum">{{ xxnum }}</view>
                        </view>
                    </view>
                </view>
                <!-- <view style="width:100vw;height: 88rpx; position: fixed;top: 208rpx;z-index: 999;background-color: #FF612A;"> -->
                <!-- <view style="width:100vw;height: 88rpx; position: fixed;top: 43px;z-index: 999;background-color: #FF612A;"> -->
                <view style="width:100vw;height: 88rpx; position: fixed;z-index: 999;background-color: #FF612A;">
                    <view class="container_top_item_center" style="color: #999999;" @tap="toUrl('/pagesA/search/search')">
                        <image :src="search2x" lazy-load="true"></image>
                        搜索你想要的商品
                    </view>

                    <view class="" style=" width: 40rpx; height:40rpx; position: relative;    left:88%;top: -56rpx; ">

                        <image @tap.stop="hehehe('image')" src="../../static/iconfont/xiangji.png" style=" width: 50rpx; height:50rpx;"
                            lazy-load="true"></image>
                    </view>
                </view>
            </view>
            <!-- tsbyqi切换 -->

            <div style=" position: relative;  top: 110rpx  ;z-index: 20; height: 100%; ">

                <!-- 首页第一个轮播图 -->
                <view class="swiperBox">
                    <swiper class="swiper" autoplay="true" interval="3000" circular="true" @change="changeBanner">
                        <swiper-item v-for="(item, index) in banner" :key="index">
                            <image class="swiper_image" :src="item.image" @tap="toUrl(item.url)"></image>
                        </swiper-item>
                    </swiper>
                    <view class="swiper_dots">
                        <view :class="{ active: dotIndex == index }" v-for="(item, index) in banner" :key="index"></view>
                    </view>
                </view>

                <view class="nav" style="background:rgb(249, 249, 249);">
                    <template v-for="(item, index) of nav_list">
                        <view class="nav_item" v-if="item.status" :key="index" @tap="navClick(item,item.name)">
                            <image :src="item.picture" lazy-load="true"></image>
                            <p>{{ item.name }}</p>
                        </view>
                    </template>
                </view>
                <view class="nav" style="background:rgb(249, 249, 249);padding: 0px 0px 0px;">
                    <template>
                        <view class="nav_item"  @tap="_navigateTo1('/pagesA/group/groupOrder')">
                            <image src="https://app.hygapp.com/images/uni-app/bian14.png" lazy-load="true"></image>
                            <p>我的拼团</p>
                        </view>
                    </template>
                    <template>
                        <view class="nav_item"  @tap="_navigateTo1('/pagesB/seckill/seckill_my')">
                            <image src="https://app.hygapp.com/images/uni-app/bian11.png" lazy-load="true"></image>
                            <p>我的秒杀</p>
                        </view>
                    </template>
                    <template>
                        <view class="nav_item"  @tap="_navigateTo1('/pagesA/bargain/bargain')">
                            <image src="https://app.hygapp.com/images/uni-app/bian15.png" lazy-load="true"></image>
                            <p>我的砍价</p>
                        </view>
                    </template>
                    <template>
                        <view class="nav_item"  @tap="_navigateTo1('/pagesB/integral/integral?toBack=true')">
                            <image src="https://app.hygapp.com/images/uni-app/biaoti4.png" lazy-load="true"></image>
                            <p>积分商城</p>
                        </view>
                    </template>
                    <template>
                        <view class="nav_item"  @tap="_navigateTo1('/pagesA/distribution/distribution_center')">
                            <image src="https://app.hygapp.com/images/uni-app/bioati1.png" lazy-load="true"></image>
                            <p>代理中心</p>
                        </view>
                    </template>
                    <template>
                        <view class="nav_item"  @tap="_navigateTo1('/pagesA/myStore/myStore')">
                            <image src="https://app.hygapp.com/images/uni-app/bian16.png" lazy-load="true"></image>
                            <p>我的店铺</p>
                        </view>
                    </template>
                    
                </view>
                <view class="mch" v-if="r_mch && r_mch.length > 0">
                    <view class="home_title">
                        <view>{{language.home.shop}}</view>
                        <image :src="home_title_bg"></image>
                    </view>

                    <view class="mch_content" v-if="!opensetting">
                        <view class="mch_content_item" v-for="(item, index) of r_mch" :key="index" @tap="toUrl('/pagesB/home/mchList')">
                            <image :src="item.logo" lazy-load="true" mode=""></image>
                            <view>{{ item.name }}</view>
                            <text>{{item.distance}}km</text>
                        </view>
                    </view>
                    <view v-else>
                        <button class="openSetting" type="primary" open-type="openSetting" @tap="openSetting">{{language.home.access_to_locate}}</button>

                        <view class="locationDisc">{{language.home.please_open_locate}}</view>

                    </view>
                </view>

                <view class="swiperBox" style="width: 95%;height:600rpx;margin: 0 auto;display:flex;justify-content: space-between;background-color: #EEEEEE;">
                    <view class="banner" style="width: 52%;">
                        <!-- 页面第二个轮播图 -->
                        <!-- <swiper-item>
                              <image class="swiper_image" :src="tupian" @tap="toUrl(tiaozhuan)"></image>
                          </swiper-item> -->
                          
                          
                        <!-- 新增 -->
                        <!-- <swiper class="swiper" autoplay="true" interval="3000" circular="true" @change="changeBanner">
                          
                            <swiper-item v-for="(item, index) in Image" :key="index">
                                <image class="swiper_image" :src="item.picture" @tap="toUrl(item.url)"></image>
                            </swiper-item>
                        </swiper>
                        <view class="swiper_dots" style="margin-left: -84px;">
                            <view :class="{ active: dotIndex == index }" v-for="(item, index) in Image" :key="index"></view>
                        </view> -->
                        <swiper class="swiper" autoplay="true" interval="3000" circular="true" @change="changeBanner">
                            <swiper-item v-for="(item, index) in Image" :key="index">
                                <image class="swiper_image" :src="item.picture" @tap="toUrl(item.url)"></image>
                            </swiper-item>
                        </swiper>
                        <!-- <view class="swiper_dots">
                            <view :class="{ active: dotIndex == index }" v-for="(item, index) in banner" :key="index"></view>
                        </view> -->
                    </view>
                    <!-- 第二个轮播图右侧开始 -->
                    <view class="banner" style="width: 48%;height: 600rpx;display: flex;flex-direction: column;justify-content: space-between;">
                        <swiper class="swiper1" autoplay="true" interval="3000" circular="true" vertical="true" style="width: 95%;">
                            <!-- <swiper-item>
                                <image class="swiper_image" :src="tupian" @tap="toUrl(tiaozhuan)" style="width:95%; 1px solid white;border-radius: 4%;margin-left: 8px;"></image>
                            </swiper-item> -->
                            <swiper-item v-for="(item, index) in Images" :key="index">
                                <image class="swiper_image" :src="item.picture" @tap="toUrl(item.url)" style="width:95%; 1px solid white;border-radius: 4%;margin-left: 8px;"></image>
                            </swiper-item>
                        </swiper>
                        <swiper class="swiper1" autoplay="true" interval="3000" circular="true" vertical="true" style="width: 95%;">
                            <!-- <swiper-item>
                                <image class="swiper_image" :src="tupian" @tap="toUrl(tiaozhuan)" style="width:95%; 1px solid white;border-radius: 4%;margin-left: 8px;"></image>
                            </swiper-item> -->
                            
                            <swiper-item v-for="(item, index) in ImageTwo" :key="index">
                                <image class="swiper_image" :src="item.picture" @tap="toUrl(item.url)" style="width:95%; 1px solid white;border-radius: 4%;margin-left: 8px;"></image>
                            </swiper-item>
                            
                        </swiper>
                    </view>
                    <!-- 第二个轮播图右侧结束 -->
                    <!-- <image class="home_gg" style="border-radius: 12rpx;  width: 92%;    " :src="tupian" lazy-load="true" @tap="toUrl(tiaozhuan)"></image> -->
                </view>





            </div>


            <view class="content">


                <view class="goodsBox" style="background: #F9F9F9;">
                    <scroll-view scroll-x="true" class="goods_title" style=" padding-top: 65px">
                        <view class="seckill_content_view" style="padding-bottom: 16rpx; flex:1">

                            <view @tap="changeBottom(0)" class="goods_title_item" :class="{ active: bottomIndex == 0 } ">
                                <view>猜你喜欢</view>

                            </view>
                            <view @tap="changeBottom(1)" class="goods_title_item" :class="{ active:bottomIndex == 1 }">
                                <view>精选人气商品</view>

                            </view>
                            <view @tap="changeBottom(2)" class="goods_title_item" :class="{ active:bottomIndex == 2 }">
                                <view>为你推荐</view>

                            </view>

                        </view>
                    </scroll-view>
                    <div style="width: 100%;  ">
                        <div style="width: 46%; border-radius: 9rpx;background: #ffffff;  
                          box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
                         margin-bottom: 15rpx;display: inline-block; margin-left: 20rpx;"
                            v-for="(item, index) in listRight" :key="index" @tap="_goods(item.id)">
                            <div class="goods_like_img relative">
                                <image class="goods_like_img " :src="item.cover_map || item.imgurl" mode=""></image>
                                <!-- <image lazy-load style="width: 100%;  border-radius: 10rpx;" :src="item.cover_map || item.imgurl" data-name="0"
								 mode="widthFix"     @load="onImageLoad($event, 'goods_ul_left_li' + index )" /> -->

                                <div v-if="item.status == 3" class="dowmPro">
                                    {{language.store.shelf}}
                                </div>
                            </div>
                            <view :id="'goods_ul_left_li' + index">
                                <p class="overtitle">{{ item.product_title || item.name }} </p>
                                <div class="goods_mun">

                                    <div class="allgoods_price">
                                        <view class='red'>
                                            <text class="currency">￥</text>
                                            <text class="vip_price">{{item.price}}</text>
                                            <!-- </text> -->
                                        </view>
                                        <!-- <p class="vip_price no_grade_vip_price" v-if="hasGrade">{{language.store.member_price}}￥{{item.vip_price}}</p> -->
                                        <p class="vip_price no_grade_vip_price" style="color: #999999;">
                                            已售{{item.volume}}件</p>
                                    </div>
                                </div>
                            </view>
                        </div>
                    </div>

                    </div>
                </view>


                <uni-load-more v-if="xianshi" :loadingType="loadingType"></uni-load-more>
                <!-- 各分类推荐商品结束 -->
            </view>
            <view class="" v-if="xianshi">
                加载到底了
            </view>
        </view>
        <!-- APP更新 -->
        <div class="mask" v-if="widgetinfoo">
            <div class="mask_all">
                <img :src="upbg" class="mask_bg" />
                <img :src="close" class="mask_close" @tap="close_mask()" />
                <b class="mask_titel">{{ newapp.version }}{{language.home.Tips[2]}}</b>
                <div class="mask_content">
                    <wxParse :content="newapp.note"></wxParse>
                </div>
                <div class="mask_text">
                    <div class="mask_btn" @tap="update()">{{language.home.Tips[1]}}</div>
                </div>
            </div>
        </div>

        <!-- 提醒签到  -->
        <div class="mask" v-if="is_sign" @touchmove.stop.prevent>
            <div class="signMask">
                <img class="home_sign" :src="home_sign" alt="" />
                <div class="sign_content">
                    {{language.home.Tips[3]}}
                    <br />
                    {{language.home.Tips[4]}}
                    <span>{{language.home.Tips[5]}}</span>
                </div>

                <div class="btn" @tap="_navigateTo('/pagesA/shop/sign')">{{language.home.Tips[6]}}</div>

                <img class="cha" :src="cha" alt="" @tap="closeSign" />
            </div>
        </div>

        <!-- 提醒用户去设置打开定位  -->
        <div v-if="opensetting2" class="opensetting" @touchmove.stop>
            <div class="y_cont" style="padding: 0; height: auto; bottom: auto; top: 50%; transform: translateY(-50%);">
                <p class="con" style="padding: 54rpx;">{{language.home.position_user}}</p>
                <div class="y_btn"><button type="primary" @tap="opensetting2 = false">{{language.home.got}}</button></div>
            </div>
        </div>

        <!-- 拒绝授权之后再次提醒授权的弹窗 -->
        <div class="opensetting" @touchmove.stop v-if="opensetting1">
            <div class="y_cont" style="padding: 0; height: auto; bottom: auto; top: 50%; transform: translateY(-50%);">
                <p class="con" style="padding: 109rpx 0 92rpx;line-height: 28rpx;">{{language.home.Tips[0]}}</p>
                <div class="y_btn1">
                    <button type="primary" @tap="opensetting1 = false">{{language.home.cancel}}</button>
                    <button type="primary" open-type="openSetting" @tap="openSetting" style="color: #020202;">{{language.home.confirm}}</button>
                </div>
            </div>
        </div>

        <!--        骨架屏组件-->
        <view class="container skeleton">
            <view v-if="!load">
                <view class="container_top">
                    <!-- #ifndef MP -->
                    <view class="data_h skeleton-rect">
                        <view class="data_h_h"></view>
                    </view>
                    <!-- #endif -->
                    <!-- #ifdef MP -->
                    <heads class="skeleton-rect" :title="language.home.title" :border="true" :returnFlag="true"
                        ishead_w="1"></heads>
                    <!-- #endif -->
                    <view style="height: 88rpx;">
                        <view class="container_top_item">
                            <view class="container_top_item_left skeleton-rect" style="white-space: nowrap;width: 120rpx;height: 68rpx">

                            </view>

                            <view class="container_top_item_center skeleton-fillet">

                            </view>

                            <view class="container_top_item_right skeleton-circle">
                                <image src="" lazy-load="true"></image>
                            </view>
                        </view>
                    </view>
                </view>

                <view class="swiperBox skeleton-fillet" style="height: 320rpx;width: 710rpx;margin: 0 auto;"></view>
                <view class="nav">
                    <template v-for="item in 10">
                        <view class="nav_item">
                            <image src="" class="skeleton-circle" lazy-load="true" style="width: 60rpx;height: 60rpx;"></image>
                            <span class="skeleton-rect"></span>
                        </view>
                    </template>
                </view>

                <view class="content_top">
                    <image class="skeleton-rect" src="" lazy-load="true"></image>
                    <image class="skeleton-rect" src="" lazy-load="true"></image>
                </view>

                <div class="seckill skeleton-rect">

                </div>
            </view>
            <skeleton :loading="!load" :animation="true" bgColor="#FFF"></skeleton>
        </view>


    </view>

</template>

<script>
    import headerSerch from './components/headerSerch';
    import blankPage from './components/blankPage';
    import combination from './components/combination';
    import guide from './components/guide';
    import menus from './components/menus';
    import richText from './components/richText';
    import seckill from './components/seckill';
    import swiperBg from './components/swiperBg';
    import tabNav from './components/tabNav';
    import homeAdv from './components/homeAdv';
    import homeStore from './components/homeStore';
    import HomeVideo from "@/pages/tabBar/components/homeVideo";
    import SwiperPicture from "@/pages/tabBar/components/swiperPicture";

    // #ifdef APP-PLUS
    import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue';
    // #endif


    import {
        getTimeDiff
    } from '@/common/util.js';
    import {
        mapMutations,
        mapState
    } from 'vuex';

    export default {
        data() {
            return {
                loadingStatus: true,
                xians1: false,
                xianshi: true,
                centre_list: '', //导航下面的图片
                title_index: 0, //商品导航切换
                xiaodaohnag: '', //头部小导航
                xiaoliebiao: '', //头部
                tiaozhuan: '', //跳转路径
                tiaozhuan2: '', //其他的跳转路径
                tupian: '', //展示
                xianshi: false,
                paizhaoshu: "",
                paizhao: "拍照识图",
                paizhaoid: "55555555",
                btnnum: 8, //头部tabay切换
                is_grade: false,
                // isClick: true,
                isClick: false,
                jianX_h: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/location.png',
                search2x: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/home_search.png',
                xiaoxi2x: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/xiaoxi172x.png',
                jiantou: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jiantou2x.png',
                home_xp: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/home_xp.png',
                home_hw: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/home_hw.png',
                home_seckillTitle: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/home_seckillTitle.png',
                seckill_btn: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/seckill_btn.png',
                home_title_bg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/home_title_bg.png',
                group_icon: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/group_icon.png',
                home_gg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/home_gg.png',
                upbg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/upbg1.png',
                close: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/close_w.png',
                home_sign: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + '/images/icon1/home_sign.png',
                cha: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + '/images/icon1/close_y.png',
                banner: [{
                        id: 1,
                        image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2202441305,2761956096&fm=26&gp=0.jpg'
                    },
                    {
                        id: 2,
                        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606112434935&di=d025a8fb67a207d34602c7f235f9c0b8&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F547fffe6aab65.jpg'
                    },
                ],
                dotIndex: 0, //轮播图下标
                yulan: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + '/images/icon1/yulan.gif', //加载动画
                nav_list: [{
                        id: 1,
                        name: '服饰',
                        appimg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/home_bidding.png?v=' +
                            Math.random(),
                        url: '/pages/goods/goods',
                        status: false,
                        plugin_name: 'auction',
                        is_login: false
                    },
                    {
                        id: 2,
                        name: '鞋靴',
                        appimg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/home_sign1.png?v=' + Math.random(),
                        url: '/pages/goods/goods',
                        status: false,
                        plugin_name: 'sign',
                        is_login: true
                    },
                    {
                        id: 3,
                        name: '箱包',
                        appimg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/home_group.png?v=' + Math.random(),
                        url: '/pages/goods/goods',
                        status: false,
                        plugin_name: 'go_group',
                        is_login: false
                    },
                    {
                        id: 4,
                        name: '百货',
                        appimg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/home_seckill.png?v=' +
                            Math.random(),
                        url: '/pages/goods/goods',
                        status: false,
                        plugin_name: 'seconds',
                        is_login: false
                    },
                    {
                        id: 5,
                        name: '数码',
                        appimg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/home_intergral.png?v=' +
                            Math.random(),
                        url: '/pages/goods/goods',
                        status: false,
                        plugin_name: 'integral',
                        is_login: true
                    },
                    {
                        id: 6,
                        name: '电器',
                        appimg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/home_coupon.png?v=' + Math
                            .random(),
                        url: '/pages/goods/goods',
                        status: false,
                        plugin_name: 'coupon',
                        is_login: false
                    },
                ],
                plugin_arr: {},
                bottom_list: [],
                xxnum: '',
                bottomIndex: 0,
                r_mch: [],
                wezhi: '北京',
                region: {
                    formatted_addresses: '萧山区'
                },

                newapp: {},
                widgetinfoo: false,
                is_sign: false,

                opensetting: false,
                opensetting1: false,
                opensetting2: false,
                go_group_list: [],
                seckill_list: [],

                Intervalid: '',
                time: {
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                },
                loadingType: 0,
                page: 1,
                class_pro: [],
                class_cid: '',

                // longitude: '112.951227',
                // latitude: '28.227965',
                longitude: 39.9, //用户订单
                latitude: 116.4,
                is_diy: false,
                bgColor: [{
                        item: '#FFFFFF'
                    },
                    {
                        item: '#FFFFFF'
                    }
                ],
                onReachBottomBg: [{
                        item: '#FF612A'
                    },
                    {
                        item: '#FF612A'
                    }
                ],
                styleConfig: [],

                tempArr: [],
                load: false,
                isRequest: false,
                listLeft: [], //列表商品
                listRight: [],
                cardLeftHeight: 0,
                cardRightHeight: 0,
                closeDiy: false, // 通过页面参数关闭diy来方便调试
                show: true,
				Images: [],
				Image:[],
				ImageTwo: []
            };
        },
        components: {
            SwiperPicture,
            HomeVideo,
            headerSerch,
            blankPage,
            combination,
            guide,
            menus,
            richText,
            seckill,
            swiperBg,
            tabNav,
            homeAdv,
            homeStore,
            // #ifdef APP-PLUS
            wxParse,
            // #endif
        },
        computed: {
            halfWidth: function() {
                var gru = uni.getStorageSync('data_height') ? uni.getStorageSync('data_height') : this.$store.state
                    .data_height;
                var heigh = parseInt(gru);

                // #ifdef MP
                heigh = 0;
                // #endif

                var he = heigh * 2;
                return uni.upx2px(he) + 'px';
            },
            ...mapState({
                _cart_num: 'cart_num'
            })
        },
        
        onTabItemTap(e) {
            this.LaiKeTuiCommon.closeMPAuthWin(this);
        },
        onShareAppMessage: function(res) {
            return {
                title: this.language.home.title,
                path: '/pages/tabBar/home',
                success: function(res1) {
                    // console.log('转发成功');
                }
            };
        },
        onLoad(option) {

            uni.removeStorageSync('region');
            uni.removeStorageSync('signFlag');

            clearInterval(this.Intervalid);
            // 调用 
            this.closeDiy = option.closeDiy

            // 有分享的属性
            if (option.isfx) {
                if (option.pages == 'goodsDetailed') {
                    if (option.fatherId != '' || option.fatherId) {
                        uni.navigateTo({
                            url: '/pages/goods/goodsDetailed?productId=' + option.productId +
                                '&isfx=true&fatherId=' + option.fatherId
                        });
                        return false;
                    }
                    uni.navigateTo({
                        url: '/pages/goods/goodsDetailed?productId=' + option.productId + '&isfx=true'
                    });
                    return false;
                } else if (option.pages == 'groupDetailed') {
                    uni.navigateTo({
                        url: '/pagesA/group/groupDetailed?pro_id=' + option.pro_id + '&activity_no=' + this.option
                            .activity_no +
                            '&isfx=true'
                    });
                    return false;
                } else if (option.pages == 'group_end') {
                    uni.navigateTo({
                        url: '/pagesA/group/group_end?sNo=' + option.sNo + '&friend=true&isfx=true'
                    });
                    return false;
                }
            }

            // #ifdef APP-PLUS
            this.widgetinfo();
            // #endif

        },
        onUnload() {
            clearInterval(this.Intervalid);
        },
        onHide() {
            this.opensetting1 = false;
        },
        onReady() {
            uni.setNavigationBarTitle({
                title: this.language.home.title
            });
        },
        async onShow() {
            this.getCart()
            let {
                data
            } = await this.has_diy()

            this.page = 1;

            this.loadingType = 0;

            this.is_diy = data

            if (this.closeDiy) {
                this.is_diy = false;
            }

            this.is_sign = false;

            // this.isClick = true;
            this.isClick = false;


            var isfx = uni.getStorageSync('isfx');
            if (this.is_diy) {
                if (uni.getStorageSync('region')) {
                    let region1 = uni.getStorageSync('region')
                    if (region1.district.length > 3) {
                        region1.district = region1.district.substr(0, 2) + '...'
                    }
                    this.region = region1
                }
                // TODO 未使用首页地址选择和店铺列表时应该不获取地址
                this.LaiKeTuiCommon.getUrlFirst(this.getLocationAuthorize);
            } else {
                this.LaiKeTuiCommon.getUrlFirst(this.getLocationAuthorize);
            }

            if (isfx) {
                var pages = uni.getStorageSync('pages');
                if (pages == 'goodsDetailed') {
                    var fatherId = uni.getStorageSync('fatherId');
                    var productId = uni.getStorageSync('productId');
                    uni.removeStorageSync('isfx');
                    uni.removeStorageSync('pages');
                    uni.removeStorageSync('fatherId');
                    uni.removeStorageSync('productId');
                    if (fatherId != '' || fatherId) {
                        uni.navigateTo({
                            url: '/pages/goods/goodsDetailed?productId=' + productId +
                                '&isfx=true&fatherId=' + fatherId
                        });
                        return false;
                    }
                    uni.navigateTo({
                        url: '/pages/goods/goodsDetailed?productId=' + productId + '&isfx=true'
                    });
                    return false;
                } else if (pages == 'groupDetailed') {
                    var pro_id = uni.getStorageSync('pro_id');
                    var activity_no = uni.getStorageSync('activity_no');
                    uni.removeStorageSync('pro_id');
                    uni.removeStorageSync('activity_no');
                    uni.removeStorageSync('isfx');
                    uni.removeStorageSync('pages');
                    uni.navigateTo({
                        url: '/pagesA/group/groupDetailed?pro_id=' + pro_id + '&activity_no=' + activity_no +
                            '&isfx=true'
                    });
                    return false;
                } else if (pages == 'group_end') {
                    var sNo = uni.getStorageSync('sNo');
                    uni.removeStorageSync('sNo');
                    uni.removeStorageSync('isfx');
                    uni.removeStorageSync('pages');
                    uni.removeStorageSync('friend');
                    uni.navigateTo({
                        url: '/pagesA/group/group_end?sNo=' + sNo + '&friend=true&isfx=true'
                    });
                    return false;
                }
            }

            // #ifndef H5
            // if (!this.$store.state.isMe) {
            // 	uni.getClipboardData({
            // 		success: res => {
            // 			var r = new RegExp('lkt-', 'ig');
            // 			if (res.data) {
            // 				if (res.data.match(r)) {
            // 					var url = res.data.replace(r, '../../');
            // 					uni.navigateTo({
            // 						url,
            // 						success: () => {
            // 							this.$store.state.isMe = true;
            // 						}
            // 					});
            // 				}
            // 			}
            // 		}
            // 	});
            // }
            // #endif
            if (uni.getStorageSync('jz') != 1) {
                uni.removeStorage({
                    key: 'latitude',
                    success: function(res) {
                        // console.log('删除成功');
                    }
                });
                uni.removeStorage({
                    key: 'longitude',
                    success: function(res) {
                        // console.log('删除成功');
                    }
                });
                uni.removeStorage({
                    key: 'location',
                    success: function(res) {
                        // console.log('删除成功');
                    }
                });
            }
            uni.removeStorageSync('jz');

            let nav_list = this.language.home.nav_list

            this.nav_list.filter((item, index) => {
                item.name = nav_list[index]
            })

            this.nav_list = JSON.parse(JSON.stringify(this.nav_list))
        },
        // 上啦加载
        onReachBottom: function() {
            // console.log(222)
            // 猜你喜欢
            if (this.bottomIndex == 0) {
                this.page++;

                this.storag = uni.getStorageSync('history')

                var data = {
                    module: 'app',
                    action: 'Tabletype',
                    app: 'index',
                    page: this.page,
                    tyop_cai: this.storag
                }
                this.hangshu(data)

            } else if (this.bottomIndex == 1) { //为你推荐
                this.page++;

                // this.storag = uni.getStorageSync('history')

                var data = {
                    module: 'app',
                    action: 'Tabletype',
                    app: 'index',
                    page: this.page,
                    tyop_cai: 2
                }
                this.hangshu(data)
            } else if (this.bottomIndex == 2) {
                this.page++;

                // this.storag = uni.getStorageSync('history')

                var data = {
                    module: 'app',
                    action: 'Tabletype',
                    app: 'index',
                    page: this.page,
                    tyop_cai: 3
                }
                this.hangshu(data)
            }



        },
        methods: {
            // 点击首页的事件
            hehehehe(val) {

                this.btnnum = val
                this.xians1 = false

                // console.log(this.btnnum, "this.btnnum")
            },
           
    
            // 头部切换数据
            change(index) {
                this.xians1 = true
                // let naozi=index-1
                this.btnnum = index - 1;
                // console.log(this.btnnum, "this.btnnum")
                this.xiaoliebiao = this.xiaodaohnag[index - 1].children;
                this.tiaozhuan2 = this.xiaodaohnag[index - 1].testimg[0]
                // console.log(index,"跳转的页面路径。")
                // this.cindex(index);
            },
            // 上拉加载的数据请求函数

            async hangshu(data) {

                await this.$req.post({
                    data
                }).then(res => {
                    // console.log(res.res, "加载")
                    var jiazai = res.res
                    if (jiazai.lenth = 10) {

                        jiazai.map((item) => {
                            this.listRight.push(item)
                            // console.log(this.listRight, "jiazai")
                        })

                    } else if (jiazai.length < 10) {
                        jiazai.map((item) => {
                            this.listRight.push(item)
                            // console.log(this.listRight, "jiazai")
                        })

                        this.xianshi = true

                    }


                })

            },

            // 拍照识别商品
            hehehe(type) {
                let me = this
                if (type == 'image') {
                    let data = {
                        module: 'app',
                        action: 'shibie',
                        app: 'index',
                        file: 'uploadImgs'
                    }

                    uni.chooseImage({
                        count: 1, //默认9
                        // #ifndef MP-TOUTIAO
                        sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
                        // #endif
                        sourceType: ['album', 'camera'], //从相册选择
                        success: res => {
                            this.load = false;

                            // console.log(res, "res")
                            // console.log(uni.getStorageSync('url'), "uni.getStorageSync('url')")
                            uni.uploadFile({
                                url: uni.getStorageSync('url'), //仅为示例，非真实的接口地址
                                filePath: res.tempFilePaths[0],
                                name: 'image',
                                formData: data,
                                success: (res) => {
                                    this.load = true;


                                    // console.log(res.data, "dddddddd")
                                    var obj = JSON.parse(res.data);
                                    // console.log(obj, "hhhhhhhhhh")
                                    if (obj.code == 400) {
                                        // console.log(obj, "ooooo")
                                        uni.showToast({
                                            title: '没有找到匹配的商品',
                                            icon: 'none'
                                        });

                                    } else if (obj.code == 200) {
                                        // this.paizhaoshu = JSON.stringify(obj)

                                        // 数据存到本地
                                        uni.setStorage({
                                            key: 'canshu',
                                            data: obj
                                        })


                                        uni.navigateTo({
                                            url: '/pages/goods/fanggoods?cid=' + this.paizhaoid +
                                                '&name=' + this.paizhao
                                        });
                                    }
                                },
                            })

                        }
                    })
                }
            },
            
            toKeFu(){
                // #ifndef MP-WEIXIN ||  MP-TOUTIAO || MP-BAIDU
                this._navigateTo1('/pages/message/service')
                // #endif
            },
            _navigateTo1(url) {
                console.log(url,"hhhhhhhhhhhhhhhh")
                console.log(this.isClick,"kkkkkkkkkkkkkkkk")
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
            // 切换tapey
            closeSign() {
                this.is_sign = false
            },
            ...mapMutations({
                cart_num: 'SET_CART_NUM'
            }),
            async has_diy() {
                var data = {
                    module: 'app',
                    action: 'index',
                    app: 'hasDiy'
                }
                return this.$req.post({
                    data
                })

            },
            changePage(page) {
                this.page = page
            },
            onHandleLoadingType(loadingType) {
                // console.log('loadingType', loadingType);
                this.loadingType = loadingType;
            },
            async getRegion(longitude, latitude) {
                let data = {
                    module: 'app',
                    action: 'diy',
                    app: 'get_region',
                    longitude: longitude,
                    latitude: latitude
                }
                let {
                    data: region
                } = await this.$req.post({
                    data
                })
                // console.log(data,"定位信息")
                this.region.district = region.district
                if (region.district.length > 3) {
                    region.district = region.district.substr(0, 2) + '...'
                }
                if (!uni.getStorageSync('region')) {
                    this.region = Object.assign({}, region)
                }
                // console.log(this.region);
            },
            waterfall() {
                if (this.class_pro.length == 0) {
                    return
                }
                if (this.cardLeftHeight > this.cardRightHeight) {
                    let cardList = this.class_pro.splice(0, 1); //初始化图片显示
                    this.listRight.push(cardList[0]);
                } else if (this.cardLeftHeight <= this.cardRightHeight) {
                    let cardList = this.class_pro.splice(0, 1); //初始化图片显示
                    this.listLeft.push(cardList[0]);
                }
            },
            getCart() {
                var data = {
                    module: 'app',
                    action: 'cart',
                    app: 'index',
                    cart_id: '',
                    page: 1
                }

                this.$req.post({
                    data
                }).then(res => {
                    let {
                        code,
                        data,
                        list,
                        mch_list,
                        login_status,
                        message,
                        grade
                    } = res

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
                                index: 2,
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
            // 地图定位
            toArea() {
                uni.setStorageSync('region', this.region)
                this.toUrl('/pagesB/home/chooseArea')

            },
            async changeBottom(val) {
                // console.log(val, "点击")
                this.bottomIndex = val
                this.page = 1
                if (this.bottomIndex == 0) {

                    this.storag = uni.getStorageSync('history')

                    var data = {
                        module: 'app',
                        action: 'Tabletype',
                        app: 'index',
                        tyop_cai: this.storag
                    }
                } else if (this.bottomIndex == 1) {
                    var data = {
                        module: 'app',
                        action: 'Tabletype',
                        app: 'index',
                        tyop_cai: 2
                    }
                } else if (this.bottomIndex == 2) {
                    var data = {
                        module: 'app',
                        action: 'Tabletype',
                        app: 'index',
                        page: 1,
                        tyop_cai: 3
                    }
                }

                await this.$req.post({
                    data
                }).then(res => {

                    setTimeout(() => {
                        this.listRight = []
                        this.listRight = res.res

                    }, 700)
                })


            },

            close_mask() {
                uni.showTabBar();
                this.widgetinfoo = false;
            },
            /* 
                获取当前地址
            */
            getLocationAuthorize() {

                // #ifdef MP
                // uni.removeStorage({ 'latitude', 'longitude' })
                // uni.removeStorage({
                //               key: 'latitude',
                //            success: function (res) {
                //               console.log('删除成功');
                //             }
                //        });
                //        uni.removeStorage({
                //                      key: 'longitude',
                //                   success: function (res) {
                //                      console.log('删除成功');
                //                    }
                //               });
                uni.authorize({
                    scope: 'scope.userLocation',
                    success: res => {
                        // console.log(res, "标题看看")
                        uni.getLocation({
                            type: 'gcj02',
                            altitude: true,
                            success: res => {
                                // console.log(res, '打开定位并同意授权了');
                                this.longitude = res.longitude
                                this.latitude = res.latitude

                                // uni.setStorageSync('longitude', this.longitude)
                                // uni.setStorageSync('latitude', this.latitude)
                                this.opensetting1 = false;

                                if (this.is_diy) {
                                    this._diy_axios()
                                } else {

                                    this._axios()
                                }

                            },
                            fail: () => {
                                //同意授权但未开启定位
                                // console.log('失败失败失败失败');
                                // this.opensetting = true;
                                this.opensetting1 = true;

                                if (this.is_diy) {
                                    this._diy_axios()
                                } else {
                                    this._axios()
                                }
                            }
                        });
                    },
                    fail: () => {
                        // 再次让用户授权
                        // this.opensetting = true;
                        this.opensetting1 = true;

                        if (this.is_diy) {
                            this._diy_axios()
                        } else {
                            this._axios()
                        }
                    }
                });
                // #endif
                // #ifdef APP
                this.getLocation();
                // #endif

                // #ifdef H5
                if (this.is_wx()) {
                    this.getLocation()
                } else {
                    if (this.is_diy) {
                        this._diy_axios()
                    } else {
                        this._axios()
                    }
                }
                // #endif


            },
            getLocation() {
                uni.getLocation({
                    success: res => {
                        // console.log('hg回调获得定位了');
                        this.longitude = res.longitude
                        this.latitude = res.latitude
                        this.opensetting = false;
                        this.isRequest = true;
                        if (this.is_diy) {
                            this._diy_axios()
                        } else {
                            this._axios()
                        }
                        return resolve();
                    },
                    fail: (e) => {
                        // console.log(e)
                        //同意授权但未开启定位
                        // console.log('失败失败失败失败');
                        // this.opensetting = true;
                        this.opensetting2 = true;

                        if (this.is_diy) {
                            this._diy_axios()
                        } else {

                            this._axios()
                        }
                        return resolve();
                    },
                    complete: () => {
                        // console.log('完成');
                        return resolve();
                    }
                });
            },
            is_wx() {
                let en = window.navigator.userAgent.toLowerCase()
                // 匹配en中是否含有MicroMessenger字符串
                return en.match(/MicroMessenger/i) == 'micromessenger'
            },

            navClickdao(val) {
                // console.log(val,"xioa")

                if (val.name) {
                    uni.navigateTo({
                        url: '/pages/goods/goods?cid=' + val.child_id + '&name=' + val.name
                    });
                }

            },
            // 副页下面的图标
            navClicktu(val) {
                uni.navigateTo({
                    url: val
                });
            },
            // 首页导航图标
            navClick(item, name) {
                // console.log(item,name, "dhdtthdtojhiodjhi[ojtrhjr]")

                // _goods(id, name) {
                // console.log(item.cid, "用户id", item.name, "用户名")
                uni.navigateTo({
                    url: '/pages/goods/goods?cid=' + item.cid + '&name=' + name
                });
                // },

                // if (!item.status) {
                // 	uni.showToast({
                // 		title: this.language.home.noAvailable,
                // 		icon: 'none'
                // 	});
                // 	return;
                // }
                // _goods(id, name) {
                // 		    console.log(id,"用户id",name,"用户名" )
                //             uni.navigateTo({
                //                 url: '/pages/goods/goods?cid=' + id + '&name=' + name
                //             });
                //         },

                // #ifndef MP-WEIXIN
                // if (item.name == '豪眼光直播' || item.name == 'live') {
                // 	uni.showToast({
                // 		title: this.language.home.openWeChat,
                // 		icon: 'none'
                // 	});
                // 	return;
                // }
                // #endif


                // if (item.is_login) {
                // 	this.isLogin(() => {
                // 		if (!this.isClick) {
                // 			return
                // 		}
                // 		this.isClick = false
                // 		if (item.url.includes('tabBar')) {
                // 			uni.switchTab({
                // 				url: item.url
                // 			});
                // 		} else {
                // 			uni.navigateTo({
                // 				url: item.url
                // 			});
                // 		}
                // 	});
                // } else {
                // 	if (!this.isClick) {
                // 		return
                // 	}
                // 	this.isClick = false
                // 	if (item.url.includes('tabBar')) {
                // 		uni.switchTab({
                // 			url: item.url
                // 		});
                // 	} else {
                // 		uni.navigateTo({
                // 			url: item.url
                // 		});
                // 	}
                // }

            },
            /* 
                轮播图切换
            */
            changeBanner(e) {
                this.dotIndex = e.detail.current;
            },
            widgetinfo() {
                var me = this;
                plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
                    uni.request({
                        url: uni.getStorageSync('endurl') + 'widgetinfo/update.php?store_id=' + me.LaiKeTuiCommon
                            .LKT_STORE_ID,
                        data: {
                            version: widgetInfo.version,
                            name: widgetInfo.name
                        },
                        success: result => {
                            me.newapp = result.data;
                            if (uni.getSystemInfoSync().platform === 'android') {
                                me.newapp.url = me.newapp.android_url;
                            } else {
                                me.newapp.url = me.newapp.ios_url;
                            }
                            if (me.newapp.status == 1) {
                                me.widgetinfoo = true;
                                uni.hideTabBar();
                            }
                        }
                    });
                });
            },
            update() {
                this.widgetinfoo = false;
                uni.showTabBar();
                plus.runtime.openURL(this.newapp.url, function(res) {
                    uni.showToast({
                        title: this.language.home.updateFail,
                        duration: 1000,
                        icon: 'none'
                    });
                });
            },
            // 定位是1调用
            async _diy_axios() {
                await this.getDiy()
                // div的接口
                await this.getSignStatus();
                this.load = true;
            },
            empty() {
                this.listRight = [];
                this.listLeft = [];
                this.cardLeftHeight = 0;
                this.cardRightHeight = 0;
            },

            async getSignStatus() {
                let data = {
                    module: 'app',
                    action: 'diy',
                    app: 'getSignStatus'
                }
                let {
                    data: {
                        is_sign_status,
                        sign_status
                    }
                } = await this.$req.post({
                    data
                })
                if (is_sign_status === 1 && sign_status === 1 && !uni.getStorageSync('signFlag')) {
                    this.is_sign = true;
                    uni.setStorageSync('signFlag', true)
                }

            },
            async getDiy() {
                if (uni.getStorageSync('longitude')) {
                    this.longitude = uni.getStorageSync('longitude')
                    this.latitude = uni.getStorageSync('latitude')
                } else {

                    uni.setStorageSync('longitude', this.longitude)
                    uni.setStorageSync('latitude', this.latitude)

                }

                if (uni.getStorageSync('region')) {
                    let region1 = uni.getStorageSync('region')
                    if (region1.district.length > 3) {
                        region1.district = region1.district.substr(0, 2) + '...'
                    }
                    this.region = region1
                }



                let data = {
                    module: 'app',
                    action: 'diy',
                    app: 'index',
                    longitude: this.longitude,
                    latitude: this.latitude
                }
                // 数据请求的轮播图
                let res = await this.$req.post({
                    data
                })
                this.styleConfig = this.objToArr(res.data);
                // console.log(res.data, "数据")
                this.objToArr(res.data).forEach((item) => {

                    if (item.name === 'homeBg') {
                        this.bgColor = item.bgColor.color
                    }

                    if (item.name === 'headerSerch') {
                        this.onReachBottomBg = item.bgColor.color
                    }
                })

                if (res.grade && res.grade != 0) {
                    this.is_grade = true;
                }



                let region = res.region
                if (region.district.length > 3) {
                    region.district = region.district.substr(0, 2) + '...'
                }

                if (!uni.getStorageSync('region')) {
                    this.region = region
                }
            },
            changeBarg(item) {

            },
            // 促销列表的点击事件；
            changeTab(type) {

            },
            goDetail() {

            },
            getGroomList() {



            },
            // 对象转数组
            objToArr(data) {
                let obj = Object.keys(data);
                let m = obj.map(key => data[key]);
                return m
            },
            _axios() {


                this.changeBottom(0)
                if (uni.getStorageSync('longitude')) {
                    //console.log(uni.getStorageSync('longitude'),"uni.getStorageSync('longitude')" )
                    this.longitude = uni.getStorageSync('longitude')
                    this.latitude = uni.getStorageSync('latitude')
                } else {
                    //console.log( this.longitude,"222222222 this.longitude" )
                    uni.setStorageSync('longitude', this.longitude)
                    uni.setStorageSync('latitude', this.latitude)


                }
                var data = {
                    module: 'app',
                    action: 'index',
                    app: 'index',
                    longitude: this.longitude,
                    latitude: this.latitude,
                    // tyop_cai: uni.getStorageSync('history')
                };

                if (uni.getStorageSync('region')) {
                    let region1 = uni.getStorageSync('region')
                    if (region1.district.length > 3) {
                        region1.district = region1.district.substr(0, 2) + '...'
                    }
                    this.region = region1
                }

                this.$req
                    .post({
                        data,
                        xhrFields: {
                            withCredentials: true
                        }
                    })
                    .then(res => {

                        let {
                            data: {
                                banner,
                                list2,
                                xxnum,
                                plugin_arr,
                                r_mch,
                                is_sign_status,
                                sign_status,
                                go_group_list,
                                seckill_list,
                                grade,
                                region,
                                login_status,
                                Image,
                                Images,
                                ImageTwo
                            }
                        } = res;
                        // this.wezhi= res.data.region.formatted_addresses

                        if (uni.getStorageSync('location') == "") {
                            uni.setStorageSync('location', res.data.region.formatted_addresses)
                            this.wezhi = uni.getStorageSync('location')

                        } else {
                            this.wezhi = uni.getStorageSync('location')
                        }

                        console.log(res.data.region.formatted_addresses, "位置")

                        if (res.data) {
                            // console.log(res.data.Image[0].url, "res.datda.Image[0].picture")
                            this.tupian = res.data.Image[0].picture
                            this.tiaozhuan = res.data.Image[0].url
                            this.xiaodaohnag = res.data.header //头部小导航
                                
                            // this.xiaoliebiao = res.data.header[0]

                            // console.log(this.xiaoliebiao, "this.xiaodaohnag")
                        }
                        // 轮播图
                        if (res.data.lanmu) {
                            this.nav_list = res.data.lanmu

                        }

                        //                       
                        if (grade && grade != 0) {
                            this.is_grade = true;
                        }
                        // 地图
                        if (region.district.length > 3) {
                            region.district = region.district.substr(0, 2) + '...'
                        }
                        // cons                      地图 region
                        if (!uni.getStorageSync('region')) {
                            this.region = region
                        }

                        if (is_sign_status == 1 && sign_status == 1 && !uni.getStorageSync('signFlag')) {
                            this.is_sign = true;
                            uni.setStorageSync('signFlag', true)
                        }

                        let nav_list = JSON.parse(JSON.stringify(this.nav_list))
                        if (grade == 0) {
                            nav_list[nav_list.length - 1].url = '/pagesA/vip/vip?toBack=true'
                        } else {
                            nav_list[nav_list.length - 1].url = '/pagesA/vipClub/vipClub?toBack=true'
                        }
                        this.nav_list = nav_list

                        this.banner = banner;
                        this.Image = Image;
                        this.Images = Images;
                        this.ImageTwo = ImageTwo;
                        console.log(this.banner,"ffffffffffffffffffff")
                        console.log(this.Image,"ggggggggggggggggggggggg")
                        if (this.class_pro.length == 0) {
                            if (this.class_cid == '' && list2.length > 0) {
                                this.class_cid = list2[0].cid
                            }
                            // 循环的二级标题
                            list2.filter(item => {

                                item.list.filter(it => {
                                    it.vip_price = Number(it.vip_price).toFixed(2)
                                    it.vip_yprice = Number(it.vip_yprice).toFixed(2)
                                })

                                if (item.cid == this.class_cid) {
                                    this.show = false

                                    this.class_pro = item.list.concat()
                                    this.empty();
                                    setTimeout(() => {
                                        this.waterfall();
                                        this.show = true
                                    }, 100)
                                }
                            })

                            this.bottom_list = list2;

                            if (list2.length > 0) {
                                this.loadingType = 0
                            } else {
                                this.loadingType = 2
                            }
                        }

                        this.xxnum = xxnum > 99 ? '99+' : Number(xxnum); //限制消息数超过99时显示99+

                        this.plugin_arr = plugin_arr;

                        for (let i in plugin_arr) {
                            this.nav_list.filter(item => {
                                item.status = true;

                            });
                        }

                        this.r_mch = r_mch;
                        this.go_group_list = go_group_list ? go_group_list : [];

                        this.seckill_list = []
                        if (seckill_list && seckill_list.current_time && seckill_list.current_time[0]) {
                            this.setCountDown(seckill_list.current_time[0]);
                            this.seckill_list = seckill_list.pro_list;
                        }

                        this.load = true
                    });
            },
            /**
             * 倒计时
             * */
            setCountDown(item) {
                clearInterval(this.Intervalid);

                let year = new Date().getFullYear();
                let month = new Date().getMonth() + 1;
                let dates = new Date().getDate();
                let endtime = '';

                if (item.type == 2) {
                    endtime = `${year}-${month}-${dates} ${item.starttime}`;
                } else {
                    endtime = `${year}-${month}-${dates} ${item.endtime}`;
                }

                this.timeFun(endtime, item);

                this.Intervalid = setInterval(() => {
                    this.timeFun(endtime, item);
                }, 1000);
            },
            timeFun(endtime, item) {
                let result = getTimeDiff(endtime);

                this.time.hours = result.hours;
                this.time.minutes = result.minutes;

                if (result.seconds < 0 || result.hours < 0 || result.minutes < 0) {
                    clearInterval(this.Intervalid);
                    this._axios();
                    return;
                }
                this.time.seconds = result.seconds;
            },
            _navigateTo(url) {
                if (this.isClick) {
                    this.isClick = false;
                    this.isLogin(() => {
                        uni.navigateTo({
                            url: url
                        });
                    });
                    setTimeout(function() {
                        this.isClick = true;
                    }, 800);
                }
            },
            onImageLoad(e, id) {
                let divWidth = 336; //实际显示的单栏宽度，345upx
                let oImgW = e.detail.width; //图片原始宽度
                let oImgH = e.detail.height; //图片原始高度
                // console.log(oImgH);
                let rImgH = divWidth * oImgH / oImgW; //重新计算当前载入的card的高度


                const query = uni.createSelectorQuery().in(this);

                let height = 0;

                query.select('#' + id).boundingClientRect(data => {
                    height = data.height;
                }).exec();

                rImgH = rImgH + (height * 2);

                if (e.target.dataset.name == 0) {
                    this.cardLeftHeight += rImgH
                } else {
                    this.cardRightHeight += rImgH
                }

                this.waterfall()
            },
            _goods(id) {
                this.$store.state.pro_id = id;
                uni.navigateTo({
                    url: '/pages/goods/goodsDetailed?toback=true&pro_id=' + id
                });
            },
            toUrl(url, is_login = false, is_sign) {
                if (this.is_diy) {
                    if (is_login) {
                        this.isLogin(() => {

                            if (is_sign) {
                                this.$req.post({
                                    data: {
                                        module: 'app',
                                        action: 'sign',
                                        app: 'sign',
                                    }
                                }).then(res => {
                                    if (res.code == 200) {
                                        this.toUrl(url, false)
                                    } else {
                                        uni.showToast({
                                            title: res.message,
                                            icon: 'none'
                                        })
                                    }
                                })

                                return
                            }

                            this.toUrl(url, false)
                        })
                        return false
                    }
                    if (url.includes('tabBar')) {
                        uni.switchTab({
                            url
                        });
                    } else {
                        uni.navigateTo({
                            url
                        });
                    }
                    return false;
                }

                if (url.includes('tabBar')) {
                    uni.switchTab({
                        url
                    });
                } else {
                    uni.navigateTo({
                        url
                    });
                }
            },
            openSetting() {
                uni.openSetting({
                    success(res) {
                        // console.log(res.authSetting);
                    }
                });
                this.getLocationAuthorize();
            }
        }
    };
</script>

<style scoped lang="less">
    @import url('../../static/css/tabBar/home.less');
    .banner{
        border-radius: 24rpx;
    }
    .swiper1{
        height: 290rpx;
    }
</style>
