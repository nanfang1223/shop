import {later} from '@/common/util'
import {mapMutations} from 'vuex';

const PAY_TYPE = {
    ALI: 'ali',
    WX: 'wx',
    BAIDU: 'baidu'
}

export default {
    data () {
        return {
            open_wallet: false, // 是否开启钱包支付
            open_wxpay: false, // 是否开启微信支付
            open_alipay: false, // 是否开启支付宝支付
            open_baidu: false, // 是否开启百度支付

            wxPayStatue: false, // 是否选中微信支付
            useWallet: false, // 是否选中钱包余额支付
            aliPayStatue: false, // 是否选中支付宝支付
            baidupayStatue: false, // 是否选中百度支付
            pay_display: false, // 显示余额支付密码框
            password_status: false, // 显示余额支付密码框
            pay_password: '', // 支付密码
            enterless: true, // true,密码错误，还能继续输入， false 密码错误达到上限
            payTitle: '', // 
            fastTap: false, //重复点击

            payment: {
                jsapi_wechat: 0, // h5 微信支付
                mini_wechat: 0, // 小程序微信支付
                app_wechat: 0,
                alipay: 0,
                alipay_minipay: 0,
                tt_alipay: 0,
                wallet_pay: 0,
            },

            pay_type: '', // 支付方式 PAY_TYPE
            myappid: '', // 微信APPID
            code: '', // 微信授权 code
            showPay: false, // 从订单列表进来的订单需要获取订单详情
        }
    },
    methods: {
        ...mapMutations({
            status: 'SET_STATUS'
        }),
        /**
         * 客户端调用支付
         * @returns {Promise<void>}
         */
        async clientTransferPay () {
            let paymentData = await this.getPaymentData()
            // console.log(paymentData);
            let providerStr = ''
            if (this.pay_type === PAY_TYPE.WX) {
                providerStr = 'wxpay'
            } else if (this.pay_type === PAY_TYPE.ALI) {
                providerStr = 'alipay'
            }
            uni.hideLoading()
            // #ifdef H5
            this._h5_pay(paymentData)
            // #endif
            // #ifdef MP-WEIXIN
            this._wechat_mini_pay(paymentData)
            // #endif
            // #ifdef APP-PLUS 
            this._app_pay(providerStr, paymentData)
            // #endif
            // #ifdef MP-ALIPAY
            this._ali_mini_pay(paymentData)
            // #endif
            // #ifdef MP-TOUTIAO
            this._tt_pay(paymentData)
            // #endif
            // #ifdef MP-BAIDU
            this._baidu_pay(paymentData)
            // #endif
        },
        _baidu_pay (paymentData) {
            swan.requestPolymerPayment({
                orderInfo: {
                    'dealId': paymentData.data.dealId,					// 后台配置
                    'appKey': paymentData.data.appKey,					// 后台配置
                    'totalAmount': paymentData.data.totalAmount,			// 订单金额
                    'tpOrderId': paymentData.data.tpOrderId,				// 商户平台自己记录的订单ID
                    'dealTitle': paymentData.data.dealTitle,				// 订单的名称
                    'signFieldsRange': paymentData.data.signFieldsRange,	// 固定值1
                    'rsaSign': paymentData.data.rsaSign,					// 对appKey+dealId+tpOrderId+totalAmount进行RSA加密后的签名，防止订单被伪造
                    'bizInfo': paymentData.data.bizInfo					// 订单详细信息
                },
                success: () =>{
                    uni.showToast({
                        title: this.language.laikepay.paySuccess,
                        duration: 1000,
                        icon: 'none',
                    })

                    setTimeout( () => {
                        uni.setStorageSync('payRes', this.order_pay_info)
                        uni.redirectTo({
                            url: '/pages/pay/payResult'
                        })
                        this.pay_display = false
                    }, 1000)
                },
                fail: () => {
                    this._pay_fail()
                }
            })
        },
        /**
         * 头条支付
         * @param paymentData
         * @private
         */
        _tt_pay (paymentData) {
            tt.requestPayment({
                data: paymentData.data,
                success: () => {
                    uni.showToast({
                        title: this.language.laikepay.paySuccess,
                        duration: 1000,
                        icon: 'none',
                    })
                    setTimeout( () => {
                        uni.setStorageSync('payRes', this.order_pay_info)
                        uni.redirectTo({
                            url: '/pages/pay/payResult'
                        })
                        this.pay_display = false
                    }, 1000)
                },
                fail: () => {
                    this._pay_fail()
                }
            })
        },
        /**
         * 阿里小程序支付
         * @param paymentData
         * @private
         */
        _ali_mini_pay (paymentData) {
            my.tradePay({
                tradeNO: paymentData,
                success: (res) => {
                    if (res.resultCode === 9000) {
                        uni.showToast({
                            title: this.language.laikepay.paySuccess,
                            icon: 'none'
                        })
                        setTimeout( () => {
                            uni.setStorageSync('payRes', this.order_pay_info)
                            uni.redirectTo({
                                url: '/pages/pay/payResult'
                            })
                            this.pay_display = false
                        }, 1000)
                    } else if (res.resultCode === 6001) {
                        setTimeout( () => {
                            this._pay_fail()
                        }, 1000)
                    }
                },
                fail: (res) => {
                    uni.showToast({
                        title: res.memo,
                        icon: 'none'
                    })
                    setTimeout( () => {
                        this._pay_fail()
                    }, 1000)
                },
            })
        },
        /**
         * app 支付
         * @param providerStr
         * @param paymentData
         * @private
         */
        _app_pay (providerStr, paymentData) {
            uni.requestPayment({
                provider: providerStr,
                orderInfo: paymentData, //订单数据
                success: () => {
                    uni.showToast({
                        title: this.language.laikepay.paySuccess,
                        duration: 1000,
                        icon: 'none',
                    })
                    setTimeout( () => {
                        uni.setStorageSync('payRes', this.order_pay_info)
                        uni.redirectTo({
                            url: '/pages/pay/payResult'
                        })
                        this.pay_display = false
                    }, 1000)
                },
                fail: (err) => {
                    // console.log(err)
                    this._pay_fail()
                },
                complete: () => {
                    this.loading = false
                }
            })
        },
        /**
         * 小程序支付
         * @param paymentData
         * @private
         */
        _wechat_mini_pay (paymentData) {
            this.loading = true
            uni.requestPayment({
                timeStamp: paymentData.timeStamp,
                nonceStr: paymentData.nonceStr,
                package: paymentData.package,
                signType: 'MD5',
                paySign: paymentData.paySign,
                success: () => {
                    uni.showToast({
                        title: this.language.laikepay.paySuccess,
                        duration: 1000,
                        icon: 'none'
                    })
                    setTimeout(() => {
                        uni.setStorageSync('payRes', this.order_pay_info)
                        uni.redirectTo({
                            url: '/pages/pay/payResult'
                        })
                    }, 1000)
                },
                fail: (err) => {
                    // console.log(err)
                    this._pay_fail()
                },
                complete: () => {
                    this.loading = false
                }
            })
        },
        /**
         * h5 支付
         * @param paymentData
         * @private
         */
        _h5_pay (paymentData) {
            if (this.pay_type === PAY_TYPE.ALI) {
                window.location.href = uni.getStorageSync('endurl') + 'order/' + this.sNo + '_alipay.html'
            } else {
                let me = this

                // TODO 这里的me 不知道怎么去除
                function onBridgeReady () {
                    WeixinJSBridge.invoke(
                        'getBrandWCPayRequest', {
                            'appId': paymentData.appid, //公众号名称，由商户传入     
                            'timeStamp': paymentData.timeStamp, //时间戳，自1970年以来的秒数     
                            'nonceStr': paymentData.nonceStr, //随机串     
                            'package': paymentData.package,
                            'signType': paymentData.signType, //微信签名方式：     
                            'paySign': paymentData.paySign //微信签名 
                        },
                        function (res) {
                            me.code = ''
                            //支付成功
                            if (res.err_msg === 'get_brand_wcpay_request:ok') {
                                uni.setStorageSync('payRes', me.order_pay_info)
                                window.location.href = uni.getStorageSync('h5_url') + 'pages/pay/payResult'
                            } else {
                                //支付失败
                                me._pay_fail()
                            }
                        }
                    )
                }

                if (typeof WeixinJSBridge !== 'undefined') {
                    onBridgeReady(paymentData)
                } else {
                    if (typeof WeixinJSBridge === 'undefined') {
                        if (document.addEventListener) {
                            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
                        } else if (document.attachEvent) {
                            document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
                            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
                        }
                    }
                }
            }

        },
        async getOrderInfoExt () {
            let data = {
                type: '',
                code: '',
                store_type: 1
            }
            // #ifdef H5
            if (this.pay_type === PAY_TYPE.WX) {
                data.type = 'jsapi_wechat'
                data.code = this.code
            } else if (this.pay_type === PAY_TYPE.ALI) {
                data.type = 'alipay_mobile'
            }
            // #endif

            // #ifndef H5
            if (this.pay_type === PAY_TYPE.WX) {

                // #ifdef MP-WEIXIN

                return new Promise(resolve => {
                    uni.login({
                        success: (e) => {
                            data.type = 'mini_wechat'
                            data.code = e.code
                            return resolve(data)
                        }
                    })
                })
                // #endif   

                // #ifdef APP
                data.type = 'app_wechat'
                // #endif    

            } else if (this.pay_type === PAY_TYPE.ALI) {
                data.type = 'alipay'
                // #ifdef MP-ALIPAY
                data.type = 'alipay_minipay'
                // #endif
                // #ifdef MP-TOUTIAO
                data.type = 'tt_alipay'
                // #endif
            } else if (this.pay_type === PAY_TYPE.BAIDU) {
                // #ifdef MP-BAIDU
                data.type = 'baidu_pay'
                // #endif
            }
            // #endif 
            return data
        },
        /**
         * 显示能支付方式
         */
        show_pay_way () {
            // #ifdef H5
            if (Number.parseInt(this.payment.jsapi_wechat)) {
                this.open_wxpay = true
            }
            // #endif

            // #ifdef MP-WEIXIN
            if (Number.parseInt(this.payment.mini_wechat)) {
                this.open_wxpay = true
            }
            // #endif

            // #ifdef APP-PLUS
            if (Number.parseInt(this.payment.app_wechat)) {
                this.open_wxpay = true
            }
            if (Number.parseInt(this.payment.alipay)) {
                this.open_alipay = true
            }
            if (Number.parseInt(this.payment.baidu_pay)) {
                this.open_baidu = true
            }
            // #endif

            // #ifdef MP-BAIDU
            if (Number.parseInt(this.payment.baidu_pay)) {
                this.open_baidu = true
            }
            // #endif

            // #ifdef MP-ALIPAY
            if (Number.parseInt(this.payment.alipay_minipay)) {
                this.open_alipay = true
            }
            // #endif

            // #ifdef MP-TOUTIAO
            if (Number.parseInt(this.payment.tt_alipay)) {
                this.open_alipay = true
            }
            // #endif

            
            if (Number.parseInt(this.payment.wallet_pay)) {
                this.chooseWay('balance')
                this.open_wallet = true
                this.useWallet = true

            }
        },
        /**
         * 选择支付方式
         * @param way
         */
        chooseWay (way) {
            switch (way) {
                case 'wxPay':
                    this._chooseWxPayWay()
                    break
                case 'aliPay':
                    this._chooseAlipayPayWay()
                    break
                case 'baidu':
                    this._chooseBaiduPayWay()
                    break
                case 'balance':
                    this._chooseBalancePayWay()
                    break
                default:
                    break
            }
        },
        /**
         * 选择微信支付方式
         */
        _chooseWxPayWay () {
            this.useWallet = false
            this.wxPayStatue = true
            this.aliPayStatue = false
            this.baidupayStatue = false
        },
        /**
         * 选择支付宝支付方式
         */
        _chooseAlipayPayWay () {
            if (!this.aliPayStatue) {
                this.useWallet = false
                this.wxPayStatue = false
                this.aliPayStatue = true
                this.baidupayStatue = false
            } else {
                this.aliPayStatue = false
            }
        },
        /**
         * 选择百度支付方式
         */
        _chooseBaiduPayWay () {
            this.useWallet = false
            this.wxPayStatue = false
            this.aliPayStatue = false
            this.baidupayStatue = true
        },
        /**
         * 选择余额支付方式
         */
        _chooseBalancePayWay () {
            this.useWallet = true
            this.wxPayStatue = false
            this.aliPayStatue = false
            this.baidupayStatue = false
        },
        /**
         * 支付失败
         * @private
         */
        _pay_fail () {
            uni.showModal({
                title: this.language.showModal.hint,
                content: this.language.showModal.payFail,
				confirmText: this.language.showModal.confirm,
				cancelText: this.language.showModal.cancel,
                success: res => {
                    this.fastTap = false
                    if (res.confirm) {
                        this.status(1);
                        uni.redirectTo({
                            url: '/pages/order/myOrder?status=1'
                        })
                    } else if (res.cancel) {
                        uni.switchTab({
                            url: '/pages/tabBar/home'
                        })
                    }
                }
            })
        },
        _pay_fail_pt () {
            uni.showModal({
                title: this.language.laikepay.hint,
                content: this.language.laikepay.payFail,
				confirmText: this.language.showModal.confirm,
				cancelText: this.language.showModal.cancel,
                success: res => {
                    this.fastTap = false
                    if (res.confirm) {
                        this.status(1);
                        uni.redirectTo({
                            url: '/pagesA/group/groupOrder?status=1'
                        })
                    } else if (res.cancel) {
                        uni.switchTab({
                            url: '/pages/tabBar/home'
                        })
                    }
                }
            })
        },
        /**
         * 余额支付时取消支付密码
         */
        wallet_pay_cancel () {
            if (this.fastTap) return false
            this.pay_display = false
            this.pay_password = ''
            this._pay_fail()
        },
        wallet_pay_cancel_pt () {
            if (this.fastTap) return false
            this.pay_display = false
            this.pay_password = ''
            this._pay_fail_pt()
        },
        /**
         * 验证支付密码是否正确
         * @param pay_password
         * @returns {boolean}
         */
        check_pay_password (pay_password) {
            if (!this.enterless) {
                uni.showToast({
                    title: this.language.laikepay.mimaError,
                    icon: 'none',
                })
                return false
            }
            this.pay_password = pay_password

            let data = {
                module: 'app',
                action: 'user',
                app: 'payment_password',
                password: pay_password
            }

            this.$req.post({ data }).then(async res => {
                let { code, enterless } = res
                if (code === 200) {
                    this.pay_display = false
                    uni.showLoading({
                        title: this.language.showLoading.paying,
                        mask: true,
                    })
                    await this._wallet_pay()
                    uni.hideLoading()
                } else if (enterless) {
                    this.pay_password = ''
                    uni.hideLoading()
                    uni.showToast({
                        title: this.language.laikepay.pswdFail,
                        duration: 1000,
                        icon: 'none'
                    })
                    this.enterless = enterless
                } else if (!enterless) {
                    uni.hideLoading()
                    this.enterless = false
                }
            })
        },
        /**
         * 验证订单是否关闭
         * @returns {Promise<void>}
         * @private
         */
        async _check_order_status () {
            let postData = {
                module: 'app',
                action: 'order',
                m: 'order_details',
                order_id: this.order_id
            }
            if(this.ordertype=='pt'){
                postData.action = 'groupbuy'
            }
            let {
                data: {
                    status
                }
            } = await this.$req.post({data: postData})
            status = Number.parseInt(status)
            if(status === 7 || status === 6) {
                return Promise.reject('订单已关闭，支付失败')
            }
            return true
        },
        
        /**
         * 余额支付
         * @returns {Promise<void>}
         * @private
         */
        async _wallet_pay () {

	 	 // order_pay_info=''
			
   //          if(this.kuaidiyunfei==1 ){
			// 	// this.kuaidiyunfei.toFixed(2)
			// 	  console.log(this.kuaidiyunfei )
			// 	this.total+=this.kuaidiyunfei
			// 	console.log(this.total,"快递的时候")
				
			// }
				
			// if( this.canshu3!=0){
			// 	this.total+=this.canshu3
			// 	    console.log(this.total,"选择大大时候")
			// }

		// let bosd=''
		// uni.getStorage({
		// 	key:'payRes',
		// 	success(e){
		// bosd= e.data//这就是你想要取的token
		// 	  // console.log(e.data, " cid的参数")
		// 	}
		// 	}) 
			// console.log(this.order_pay_info," this.order_pay_info参数")
			
            let postData = {
                module: 'app',
                action: 'pay',
                app: 'wallet_pay',
                m: 'wallet_pay',
                type: 'wallet_pay',
                address_id: this.address_id ? this.address_id : this.addre_id,
                order_list:this.order_pay_info,
				// order_list:bosd,
                remarks: this.remarks,
                payment_money: this.total
            }

         // console.log( postData,"点击支付接口输入密码的时候的参数")
            if (this.bargain) {
                postData = this.getBargainWalletPayData(postData)
            } else if (this.seckill) {
                postData = this.getSeckillWalletPayData(postData)
            } else if (this.pay_name === 'jp') {
                postData = this.getJPWalletPayData(postData)
            }
			
            if (!this.is_express) {
                postData.shop_address_id = this.shop_address_id
            }
            
            let {  code, message } = await this.$req.post({ data: postData })
			// console.log(code, message,"code, messages")
            uni.hideLoading()
            if (code === 0) {
                uni.showToast({
                    title: message,
                    duration: 1000,
                    icon: 'none'
                })
                return false;
            }
            
            uni.showToast({
                title: this.language.laikepay.paySuccess,
                duration: 1000,
                icon: 'none'
            })
            await later(1000)
            uni.setStorageSync('payRes', this.order_pay_info)
            uni.redirectTo({
                url: '/pages/pay/payResult'
            })
        },
        /**
         * 取得支付时的支付类型和终端类型
         * @returns {{pay_type: string, store_type: number}}
         */
        getPayTypeAndStoreType () {
            let data = {
                pay_type: '',
            }
            if (this.wxPayStatue) {
                // #ifdef MP-WEIXIN
                data.pay_type = 'mini_wechat'
                // #endif
                //#ifdef APP-PLUS
                data.pay_type = 'app_wechat'
                // #endif
                //#ifdef H5
                data.pay_type = 'jsapi_wechat'
                // #endif
            } else if (this.aliPayStatue) {
                // #ifdef MP-ALIPAY
                data.pay_type = 'alipay_minipay'
                // #endif
                //#ifdef APP-PLUS
                data.pay_type = 'aliPay'
                // #endif
                //#ifdef MP-TOUTIAO
                data.pay_type = 'tt_alipay'
                this.tt_alipay_app = true
                // #endif
            } else if (this.baidupayStatue) {
                // #ifdef MP-BAIDU
                data.pay_type = 'baidu_pay'
                // #endif
            }
            return data
        }
    },
    watch: {
        enterless (val) {
            if (val) {
                this.fastTap = true
                this.pay_display = false
                uni.showToast({
                    title: this.language.laikepay.maxFail,
                    duration: 1000,
                    icon: 'none'
                })
            }
        }
    }
}
