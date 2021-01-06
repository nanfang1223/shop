<script>
    import {mapMutations} from 'vuex';

    export default {
    data() {
        return {
            access_id: false,
            getGrade: true,
            hasGrade: ''
        };
    },
    onLaunch: function(options) {
        
        uni.removeStorageSync('hasGrade')
        
        var me = this;
        
        uni.setStorageSync('url', me.LaiKeTuiCommon.LKT_API_URL)
        
        // 导航信息条高度
        uni.getSystemInfo({
            success: function(res) {
                var nate = res.statusBarHeight;
                uni.setStorageSync('data_height', nate);
                me.data_height(nate);
                
                if(res.language.includes('en')){
                    uni.setStorageSync('language', 'en')
                }
            }
        });

        let p = null;
        // #ifdef MP-WEIXIN
        p = me.gd();
        if (p) {
            p.then(function(request_url) {
                me.geturl(request_url);
            });
        }
        // #endif

        // #ifndef MP-WEIXIN
        var m_url = me.LaiKeTuiCommon.LKT_API_URL;
        me.geturl(m_url);
        // #endif

        // type: 1.文章海报 2.红包海报 3.商品海报 4.分销海报 5.邀请海报 6.竞拍海报
        // store_type=1小程序,=2app
        // store_id商城id
        //proType商品的类型：

        // #ifdef H5
        var a = window.location.href;
        if (a.split('?').length > 1) {
            var e = a.split('?')[1].substring(10);
            if (e.length == 0) {
                return;
            }
            var str = decodeURIComponent(e);
            while (str.indexOf('%22') >= 0) str = str.replace('%22', '"');
            str = str.split('#')[0];
            var json = eval('(' + str + ')');
            var toUrl = a.split('?')[0];
            if (json.proType == 'pingtuan') {
                window.location.href = toUrl + '#/pagesA/group/groupDetailed?pro_id=' + json.productId;
            } else if (json.proType == 'putong') {
                window.location.href = toUrl + '#/pages/goods/goodsDetailed?productId=' + json.productId;
            } else if (json.proType == 'distribution') {
                window.location.href = toUrl + '#/pages/login/login?fatherId=' + json.reUser;
            } else if (json.proType == 'JP') {
                window.location.href = toUrl + '#/pagesA/bidding/bidding_detailed?biddingId=' + json.reUser;
            }
        }
        // #endif

        // #ifdef APP-PLUS
        var cid = me.LaiKeTuiCommon.getClientid();
        let timer = setInterval(() => {
            if (!cid || cid == null || cid == 'null') {
                cid = me.LaiKeTuiCommon.getClientid();
            } else {
                clearInterval(timer);
                timer = null;
                uni.setStorageSync('cid', cid);
            }
        }, 1000);

        const _handlePush = function(message) {
            uni.switchTab({
                url: 'pages/tabBar/my'
            });
        };
        plus.push.addEventListener(
            'click',
            function(message) {
                _handlePush();
            },
            false
        );
        plus.push.addEventListener(
            'receive',
            function(message) {
                logoutPushMsg(message);
            },
            false
        );

        //创建本地推送
        function createLocalPushMsg(content) {
            var options = { cover: false };
            plus.push.createMessage(content, 'LocalMSG', options);
        }

        //获取穿透参数
        function logoutPushMsg(msg) {
            if (msg.payload && msg.payload != 'LocalMSG') {
                if (typeof msg.payload == 'string') {
                    createLocalPushMsg(msg.content);
                } else {
                    var data = JSON.parse(msg.payload);
                    createLocalPushMsg(data.content);
                }
            }
        }

        // #endif
        
        let data = {
            module: 'app',
            action: 'index',
            app: 'get_membership_status'
        }
        this.$req.post({data}).then(res=>{
            this.getGrade = true
            if(res.code == 200){
                this.hasGrade = res.data
                uni.setStorageSync('hasGrade', this.hasGrade)
            }
        })
    },
	onShow() {
		 // this.handleAuthorize()
	},
    methods: {
		getLocationFn() {
		            const _this = this
		            uni.getLocation({
		                type: 'gcj02', // <map> 组件默认为国测局坐标gcj02
		                altitude: true,
		                success(res) {
		                    // console.log('返回的位置信息', res, _this)
		                    _this.globalData.userInfo = {
		                        latitude: res.latitude,
		                        longitude: res.longitude
		                    }
		                }
		            })
		        },
				 // handleAuthorize() {
				 //            const _this = this // 下边this 为undefined
				 //            uni.authorize({
				 //                scope: 'scope.userLocation', // 获取地理信息必填的参数，其它参数见文档
				 //                success(res) {
				 //                    _this.getLocationFn()
				 //                },
				 //                // 授权失败
				 //                fail(err) {
				 //                    err = err['errMsg']
				 //                    uni.showModal({
				 //                        title: '温馨提示',content: '为享受智能小程序，您必须授权!',
				 //                        showCancel: false,confirmText: '确认授权'
				 //                    })
				 //                     // 这里只设置了确认按钮，没有取消按钮
				 //                    .then(res => {
				 //                        //res ： [null, {cancel: false, confirm: true, errMsg: 'showModal: ok'}]
				 //                        if(res[1]['confirm']) { // 点击了确认按钮时
				 //                            // 调用下边方法时，会弹出 【使用我的地理位置】界面， 未设置直接返回，还是会走fail授权失败的函数，
				 //                            // 还是会弹出上边的温馨提示！！！
				 //                            // 如果设置, scope.userLocation: true
				 //                            uni.openSetting({
				 //                                success(res) {
				 //                                // 如果不设置，res结果：
				 //                                // {errMsg: "openSetting:ok", authSetting: {scope.userLocation: false}}
				 //                                // 如果设置, res结果： 
				 //                                // {errMsg: "openSetting:ok", authSetting: {scope.userLocation: true}}
				 //                                // console.log('小程序设置界面：', res)
				 //                                }
				 //                            })
				 //                        }
				 //                    })
				 //                }
				 //            })
				 //         },

        //第三方授权，接口地址获取函数
        gd: function() {
            var me = this;
            let extConfig = uni.getExtConfigSync? uni.getExtConfigSync(): {}
            if (extConfig.url) {
                me.$store.state.url = extConfig.url;
            } else {
                me.$store.state.url = me.LaiKeTuiCommon.LKT_API_URL;
            }
            me.$store.state.url = me.$store.state.url + 'store_type=1';
            let request_url = me.$store.state.url;
            return Promise.resolve(request_url)
        },
        geturl: function(request_url) {
            var me = this;
            var data = {
                module: 'app',
                action: 'url',
                app: 'geturl',
                get: 'mini_url,H5,endurl'
            };
            uni.request({
                data,
                url: request_url,
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                success: res => {
					
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
					
                    if (res.data.code == 200) {
                        me.$store.state.url = res.data.url.mini_url;
                        me.$store.state.h5_url = res.data.url.H5;
                        me.$store.state.endurl = res.data.url.endurl;
                    } else {
                        me.$store.state.url = me.LaiKeTuiCommon.LKT_API_URL;
                        me.$store.state.h5_url = me.LaiKeTuiCommon.LKT_H5_DEFURL;
                        me.$store.state.endurl = me.LaiKeTuiCommon.LKT_ENDURL;
                    }
                    me.$store.state.url = me.$store.state.url + '&store_type='+store_type;
                    uni.setStorageSync('url', me.$store.state.url);
                    uni.setStorageSync('h5_url', me.$store.state.h5_url);
                    uni.setStorageSync('endurl', me.$store.state.endurl);
                }
            });
        },
        ...mapMutations({
            data_height: 'SET_DATA_HEIGHT'
        })
    }
};
</script>
<style lang="less">
/*每个页面公共css */
@import './common/public.less';
@import 'static/iconfont/iconfont.css';
@import 'static/css/base.css';
/*@import 'static/css/style.scss';*/

</style>
