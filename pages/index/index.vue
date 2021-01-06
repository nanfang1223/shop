<template>
    <div>
        <toload v-if="guiderImg.length == 0"></toload>
        <div v-else class="relative">
            <div class="guiderBtn" @tap="countDown(true)">
                <span class="time">{{ time }}</span>
               {{language.index.In}}
            </div>
            <swiper class="swiper" circular="false" :autoplay="autoplay" indicator-dots="true" interval="1000">
                <swiper-item v-for="(item, index) in guiderImg" :key="index"><image class="image" :src="item.image"></image></swiper-item>
            </swiper>
        </div>
    </div>
</template>
<script>
    import {getLaiketuiNoRegisterLoginInfo} from '../../common/laiketuiNoRegisterLogin.js';

    export default {
    data() {
        return {
            title: 'Hello',
            guiderImg: [], // 轮播图
            time: 3, //倒计时秒数设定
            autoplay: true, //是否自动切换
            clear: ''
        };
    },
    onLoad() {
        var me = this;
        let p = null;
        // #ifdef MP-WEIXIN
        p = this.gd();

        if (p) {
            p.then(url => {
                this._geturl(url).then(() => {
                    this.getImg();
                    uni.getSystemInfo({
                        success: res => {
                            this.$store.state.data_height = res.statusBarHeight;
                        }
                    });
                });
            });
        }
        // #endif

        // #ifndef MP-WEIXIN
        var url = this.LaiKeTuiCommon.LKT_API_URL;
        this._geturl(url).then(() => {
            this.getImg();
            uni.getSystemInfo({
                success: res => {
                    this.$store.state.data_height = res.statusBarHeight;
                }
            });
        });
        // #endif
    },
    // 页面卸载的时候删除定时器
    onUnload() {
        clearInterval(this.clear);
    },
    onShow() {
        this.autoplay = true;
        this.time = 3;
    },
    methods: {
        // 获取轮播图
        getImg: function() {
            let data = {
                app: 'guided_graph',
                action: 'index',
                module: 'app',
                // #ifdef MP-WEIXIN || MP-ALIPAY
                store_type: 1,
                // #endif
                // #ifndef MP-WEIXIN
                store_type: 2
                // #endif
            };

            this.$req.post({ data }).then(res => {
                let { list } = res;
				// console.log(  res,"首页加载的页面图片")

                // 当有轮播图的时候才显示本页面，否则直接跳转到home页
                if (list && list.length > 0) {
                    this.guiderImg = list;
                    // 启动倒计时
                    this.clear = setInterval(this.countDown, 1000);
                } else {
                    uni.switchTab({
                        url: '/pages/tabBar/home'
                    });
                }
            });
        },
        // 倒计时
        countDown(type) {
            if (this.time == 1 || type) {
                uni.reLaunch({
                    url: '../tabBar/home'
                });
                clearInterval(this.clear);
            } else if (this.time > 1) {
                this.time--;
            }
        },
        //第三方授权，接口地址获取函数
        gd: function() {
            let extConfig = uni.getExtConfigSync? uni.getExtConfigSync(): {}
            if (extConfig.url) {
                this.$store.state.url = extConfig.url;
            } else {
                this.$store.state.url = this.LaiKeTuiCommon.LKT_API_URL;
            }
            this.$store.state.url = this.$store.state.url + 'store_type=1';
            let request_url = this.$store.state.url;
            //获取是否免密码登录开关
            if (!uni.getStorageSync('needRegister')) {
                getLaiketuiNoRegisterLoginInfo(1);
            }
            return Promise.resolve(request_url)
        },
        // 获取公共链接地址
        _geturl: function(request_url) {
            var me = this;
            // #ifndef MP-WEIXIN
            request_url = me.LaiKeTuiCommon.LKT_API_URL;
            // #endif
            return new Promise((resolve, reject) => {
                var data = {
                    module: 'app',
                    action: 'url',
                    app: 'geturl',
                    get: 'mini_url,H5,endurl'
                };
                uni.setStorageSync('url', request_url)

                this.$req.post({ data }).then(res => {
					let store_type;
					// #ifdef APP-PLUS
					store_type = 2
					// #endif
					// #ifdef MP-ALIPAY
					store_type = 3
					// #endif
					// #ifdef MP-BAIDU
					store_type = 5
					// #endif
					// #ifdef MP-TOUTIAO
					store_type = 4
					// #endif
					// #ifdef MP-WEIXIN
					store_type = 1
					// #endif
					// #ifdef H5
					store_type = 2
					// #endif
					
                    if (res.code == 200) {
                        this.$store.state.url = res.url.mini_url;
                        this.$store.state.h5_url = res.url.H5;
                        this.$store.state.endurl = res.url.endurl;
                    } else {
                        this.$store.state.url = this.LaiKeTuiCommon.LKT_API_URL;
                        this.$store.state.h5_url = this.LaiKeTuiCommon.LKT_H5_DEFURL;
                        this.$store.state.endurl = this.LaiKeTuiCommon.LKT_ENDURL;
                    }
                    this.$store.state.url = this.$store.state.url + '&store_type='+store_type;
                    uni.setStorageSync('url', this.$store.state.url);
                    uni.setStorageSync('h5_url', this.$store.state.h5_url);
                    uni.setStorageSync('endurl', this.$store.state.endurl);
                    resolve(this);
                });
            });
        }
    }
};
</script>

<style lang="less">
@import url('../../static/css/index/index.less');
</style>
