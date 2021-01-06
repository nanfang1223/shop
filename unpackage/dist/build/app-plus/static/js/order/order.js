// 加载数据
export function _axios(me) {
    me.axios_times++

    if (me.group) {
        var data = {
            access_id: me.access_id,
            order_id: me.orde_id,
            module: 'app',
            action: 'groupbuy',
            m: 'order_details'
        }
    } else {
        var data = {
            access_id: me.access_id,
            order_id: me.orde_id,
            module: 'app',
            action: 'order',
            app: 'order_details'
        }
    }
    if(me.r_status_==1 || me.r_status_==2 || me.r_status_==5 || me.r_status_==7){
        data.action = 'order'
    }
    uni.request({
        data,
        url: uni.getStorageSync('url'),
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: function(res) {
            if (res.data.code == 200) {
                let {
                    data: {
                        data,
                        data: {
                            password_status,
                            logistics,
                            z_price,
                            user_money,
                            enterless,
                            payment,
                            sNo,
                            id,
                            remarks,
                            subtraction_list
                        }
                    }
                } = res
                if (res.data.data.p_sNo) {
                    me.p_sNo = res.data.data.p_sNo 
                }
                
                
                let stores = []
                data.list.filter(items=>{
                    if(!stores.some(item=>item.shop_id==items.shop_id)){
                        stores.push({
                            shop_name: items.shop_name,
                            shop_id: items.shop_id,
                            shop_logo: items.shop_logo,
                        })
                    }
                })
                data.stores = stores
                if (data.status == 0 && data.otype == 'pt') {
                    data.product_total2 = data.product_total.toFixed(2)
                    me.is_end = data.is_end
                    data.product_total = data.list[0].p_price = data.z_price = ((data.z_price * 100) / 100)
                        .toFixed(2)
                }
                // me.is_end = data.is_end
                me.user_can_open = data.user_can_open
                me.user_can_can = data.user_can_can
                me.user_can_after = data.user_can_after
                me.payment = payment
                data.coupon_price = Number(data.coupon_price).toFixed(2)
                data.preferential_amount = Number(data.preferential_amount).toFixed(2)
                me.order = data
                me.btnText1 = me.order.status == 0 && me.leftText ? me.leftText[0] : (me.order.status == 3 ||
                me.order.status == 5 || me.order.status == 4 ? me.leftText[1] : (me.order.status ==
                7 || me.order.status == 6 ? me.leftText[2] : ''))
                me.btnText2 = me.pttype == 'cantuan' && (me.order.status == 7 || me.order.status == 6 || me
                    .order.status == 11 || me.order.status == 12) ? me.leftText[1] : me.order.status ==
                0 && (me.pttype != 'cantuan' || (me.pttype == 'cantuan' && me.gstatus.ptstatus == 1)) &&
                me.rightText ? me.rightText[0] : (me.order.status == 1 ? (me.order.list.length > 1 ? me
                    .rightText[7] : me.rightText[1]) : (me.order.status == 2 ? me.rightText[2] : (
                    me.order.status == 3 ? me.rightText[3] : (me.order.status == 7 || me.order.status ==
                    6 || me.order.status == 12 ? me.rightText[4] : (me.order.status == 4 ?
                        me.rightText[5] : (me.order.status == 8 || me.order.status == 5 ?
                            me.rightText[6] : (me.rightText && me.rightText[0])))))))
                if (me.axios_times == 1) {
                    me.flag = (me.pttype == 'cantuan' && me.gstatus.ptstatus == 2)
                }
                
                if (me.btnText2 == me.rightText[0] && me.order.sale_type != 0 && me.order.sale_type!=undefined ) {
                    me.showBtn = false
                }

                if (me.btnText2 == me.rightText[2] && me.order.sale_type != 0 && me.order.sale_type!=undefined ) {
                    me.showBtn = false
                }
                
                me.enterless = enterless
                me.load = false
                me.sNo = sNo
                me.order_id = id
                me.z_price_ = z_price
                me.remarks = remarks
                me.password_status = password_status
                me.cancelGoods = res.data.data.list[0].prompt
                me.is_distribution = res.data.data.list[0].is_distribution
                me.cancelGoodsReason = res.data.data.list[0].content || '暂无！'
                if (logistics.length > 0) {
                    me.logistics = logistics
                } else {
                    me.logistics = false
                }
                me.price = z_price
                me.user_money = user_money
                me.message = me.order.sNo
                me.otype = me.order.otype
                me.pttype = me.order.pttype
                me.gstatus = me.order.gstatus
                me.ordermsg = me.order.omsg
                me.p_id = me.order.pro_id
                me.subtraction_list = subtraction_list

                // me.checkgroup()
                if (me.message.indexOf('KJ') > -1) {
                    me.kanjia = true
                }
                if (me.otype == 'pt') {
                    me.endpay = me.order.z_price
                    me.price = me.endpay
                } else {
                    me.endpay = me.order.z_price
                }
                if (me.order.status == 2 || me.order.status == 3 || me.order.status == 5 || me.order.status ==
                    8) {
                    me.order_wl = true
                    me.showPay1 = false
                } else if (me.order.status == 0) {
                    if (me.pttype != 'cantuan' || (me.pttype == 'cantuan' && me.gstatus.ptstatus == 1)) { //排除团成功或者团失败的拼团订单
                        //待付款，倒计时关闭订单
                        me.order_wl = false
                        var time = me.order.add_time
                        var Htime = time.split(' ')
                        var Dtime = Htime[0].replace('-', '/')
                        var Time = Dtime.replace('-', '/')
                        var start = Time + ',' + Htime[1]
                        var startTime = new Date(start)
                        var endTime = startTime.getTime() + (me.order.order_failure * 60 * 60 * 1000)
                        if (me.pttype == 'cantuan') {
                            var gend = me.gstatus.endtime
                            gend = new Date(gend.replace(/-/g, '/')).getTime()
                            endTime = endTime > gend ? gend : endTime //如果结束时间比拼团结束时间长就用拼团时间
                        }
                        me.setTime = setInterval(function() {
                            _time(endTime)
                        }, 1000)

                        function _time(endTime) {
                            var myDate = new Date()
                            me.time_c = parseInt((endTime - myDate.getTime()) / 1000) //得到剩余的毫秒数
                            if (me.time_c >= 0) {
                                me.time_D = Math.floor(me.time_c / 60 / 60 / 24) //得到天
                                me.time_H = Math.floor(me.time_c / (60 * 60) % 24) //得到小时 取模24小时
                                me.time_M = Math.floor(me.time_c / 60 % 60) //得到分钟
                                me.time_S = Math.floor(me.time_c % 60) //得到秒数
                                me.order_zt = `${me.time_H}`+me.language.order.order.Time+`${me.time_M}`+me.language.order.order.branch+`${me.time_S}`+me.language.order.order.second
                            } else {
                                clearInterval(me.setTime)

                            }
                        }
                    } else if (me.pttype == 'cantuan' && me.gstatus.ptstatus == 2) {
                        me.showPay1 = false
                        me.order_zt = me.language.toasts.order.axios[0]
                        me.can_pay = false
                        setTimeout(function() {
                            uni.showToast({
                                title: me.language.toasts.order.axios[0],
                                icon: 'none',
                                duration: 2000
                            })
                            return false
                            var data = {
                                module: 'app',
                                action: 'order',
                                order_id: me.orde_id,
                                app: 'removeOrder',
                                access_id: me.access_id
                            }
                            data.app = 'removeOrder'
                            uni.request({
                                data,
                                url: uni.getStorageSync('url'),
                                header: {
                                    'content-type': 'application/x-www-form-urlencoded'
                                },
                                method: 'POST',
                                success: function(res) {
                                    let {
                                        data: {
                                            code,
                                            message
                                        }
                                    } = res
                                },
                                error: function(err) {
                                    console.log(err)
                                }
                            })
                        }, 700)
                    } else if (me.pttype == 'cantuan' && me.gstatus.ptstatus == 3) {
                        me.showPay1 = false
                        me.order_zt = me.language.toasts.order.axios[1]
                        me.can_pay = false

                        setTimeout(function() {
                            uni.showToast({
                                title: me.language.toasts.order.axios[1],
                                icon: 'none',
                                duration: 2000
                            })
                            var data = {
                                module: 'app',
                                action: 'order',
                                order_id: me.orde_id,
                                app: 'removeOrder',
                                access_id: me.access_id
                            }
                            data.app = 'removeOrder'
                            uni.request({
                                data,
                                url: uni.getStorageSync('url'),
                                header: {
                                    'content-type': 'application/x-www-form-urlencoded'
                                },
                                method: 'POST',
                                success: function(res) {
                                    let {
                                        data: {
                                            code,
                                            message
                                        }
                                    } = res
                                },
                                error: function(err) {
                                    console.log(err)
                                }
                            })
                        }, 700)
                    }
                } else if (me.order.status == 1) {
                    me.order_wl = false
                    me.order_zt = me.language.toasts.order.axios[2]
                    me.showPay1 = false
                } else if (me.order.status == 7) {
                    me.order_wl = false
                    me.order_zt = me.language.toasts.order.axios[3]
                    me.showPay1 = false
                }

                //只要订单状态时不为待付款就不显示支付部分
                if (me.order.status != 0) {
                    me.showPay1 = false
                }
                me.isshow && me.isshow()
            } else {
                uni.showToast({
                    title: res.data.message,
                    duration: 1500,
                    icon: 'none'
                })
            }
        }
    })
}

// H5获取微信支付code
export function toUrl(me) {
    var locationUrl = window.location.href
    var data = {
        type: 'jsapi_wechat',
        access_id: me.access_id,
        app: 'get_config',
        module: 'app',
        action: 'order',
        url: locationUrl
    }
    uni.request({
        data,
        url: uni.getStorageSync('url'),
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: (res) => {
            if (res.data.code == 200) {
                var myappid = res.data.data.config.appid
                me.myappid = myappid
                var myUrl = res.data.data.url
                var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + myappid +
                    '&redirect_uri=' + myUrl +
                    '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'
                window.location.href = url
            } else {
                uni.showToast({
                    title: res.data.message,
                    duration: 1500,
                    icon: 'none'
                })
            }
        },
        error: function(err) {
            // console.log(err)
        },
    })
}

// 提醒发货
export function txfh(id, me) {
    //请求接口
    if (!me.fastTap) {
        return
    }
    me.fastTap = false
    var data = {
        module: 'app',
        order_id: id,
        access_id: me.access_id,
        app: 'delivery_delivery',
        action: 'order'
    }
    uni.request({
        data,
        url: uni.getStorageSync('url'),
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: function(res) {
            me.fastTap = true
            if (res.data.code == 200) {
                uni.showToast({
                    title: me.language.toasts.order.txfh,
                    duration: 1000,
                    icon: 'none'
                })
                _axios(me)
            } else {
                uni.showToast({
                    title: res.data.message,
                    duration: 1500,
                    icon: 'none'
                })
            }
        }
    })
}

//余额支付校验密码等信息 payNum似乎没有用
export function _confirm(payNum, me) {
    if (!me.fastTap) {
        return
    }
    me.fastTap = false
    if (me.enterless) {
        if (me.msg.length == 6) {
            var data = {
                module: 'app',
                action: 'user',
                app: 'payment_password',
                access_id: me.access_id,
                password: me.msg,
                endTime: '',
            }
            uni.request({
                data,
                url: uni.getStorageSync('url'),
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                success: (res) => {
                    me.pay_display = false
                    me.fastTap = true
                    let {
                        data: {
                            code,
                            message,
                            enterless
                        }
                    } = res
                    if (code == 200) {
                        //验证密码等
                        me._payAxios(payNum)
                    } else if (enterless) {
                        uni.showToast({
                            title: me.language.toasts.order.submit[0],
                            duration: 1000,
                            icon: 'none'
                        })
                        me.pay_display = false
                        me.msg = ''
                    } else if (!enterless) {
                        me.pay_display = false
                        me.enterless = false
                        uni.showToast({
                            title: me.language.toasts.order.submit[1],
                            duration: 1000,
                            icon: 'none'
                        })
                    }
                },
                error: function(err) {
                    me.fastTap = true
                }
            })
        } else {
            me.fastTap = true
            uni.showToast({
                title: me.language.toasts.order.submit[2],
                duration: 1000,
                icon: 'none'
            })
        }
    } else {
        me.fastTap = true
        uni.showToast({
            title: me.language.toasts.order.submit[3],
            duration: 1000,
            icon: 'none'
        })
        me.pay_display = false
    }
}

// 余额支付
export function _payAxios(payNum, me) {
    var data = {
        module: 'app',
        action: 'pay',
        app: 'wallet_pay',
        m: 'wallet_pay',
        type: 'wallet_pay',
        access_id: me.access_id,
        payment_money: me.value,
        orde_id: me.orde_id,
        sNo: me.sNo,
        parameter: 'order'
    }
    if (me.otype == 'pt') {
        data.grade_rate = me.order.comm_discount,
            data.ptcode = me.ordermsg.ptcode
        data.pro_id = me.p_id
        data.man_num = me.ordermsg.groupman
        data.page = me.pttype
    }

    uni.request({
        data,
        url: uni.getStorageSync('url'),
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: (res) => {
            me.fastTap = true
            let {
                data: {
                    code,
                    message
                }
            } = res
            if (code == 200) {
                if (Number(me.price1) > 0) {
                    // #ifdef MP-WEIXIN
                    me.weixinPay()
                    // #endif
                    //#ifndef MP-WEIXIN
                    if (me.wxPayStatue) {
                        me.pay_wx('wx')
                    } else if (me.aliPayStatue) {
                        me.pay_wx('ali')
                    } else if (me.baidupayStatue) {
                        me.pay_wx('baidu_pay')
                    }
                    // #endif
                } else {
                    uni.showToast({
                        title: me.language.toasts.order.payOk,
                        duration: 1000,
                        icon: 'none'
                    })
                    var dat_id = ''
                    if (me.order_id) {
                        dat_id = me.order_id
                    } else {
                        dat_id = me.or_id
                    }
                    me.pay_display = false
                    var path = ''
                    let z_prices = Number(me.order.z_price) + Number(me.order.offset_balance)
                    if (me.otype == 'pt') {
                        if (parseFloat(me.price1) <= 0) {
                            path = '/pagesA/group/group_end?sNo=' + me.sNo + '&ptcode1=' + me.ptcode
                        } else {
                            path = '/pages/pay/payResult?payment_money=' + z_prices + '&sNo=' + me.sNo +
                                '&order_id=' + dat_id
                        }
                    } else {
                        path = '/pages/pay/payResult?payment_money=' + z_prices + '&sNo=' + me.sNo +
                            '&order_id=' + dat_id
                    }
                    uni.redirectTo({
                        url: path
                    })
                }
            } else {
                me.pay_display = false
                me.msg = ''
                uni.showToast({
                    title: res.data.message,
                    duration: 1500,
                    icon: 'none'
                })
            }
        },
        error: function(err) {
            // console.log(err)
        },
        fail: function(res) {
            // #ifdef MP-ALIPAY
            if (res.data.indexOf('200') != -1) {
                if (Number(me.price1) > 0) {
                    // #ifdef MP-WEIXIN
                    me.weixinPay()
                    // #endif
                    //#ifndef MP-WEIXIN
                    if (me.wxPayStatue) {
                        me.pay_wx('wx')
                    } else if (me.aliPayStatue) {
                        me.pay_wx('ali')
                    } else if (me.baidupayStatue) {
                        me.pay_wx('baidu_pay')
                    }
                    // #endif
                } else {
                    uni.showToast({
                        title: me.language.toasts.order.payOk,
                        duration: 1000,
                        icon: 'none'
                    })
                    var dat_id = ''
                    if (me.order_id) {
                        dat_id = me.order_id
                    } else {
                        dat_id = me.or_id
                    }
                    me.pay_display = false
                    var path = ''
                    if (me.otype == 'pt') {
                        if (parseFloat(me.price1) <= 0) {
                            path = '/pagesA/group/group_end?sNo=' + me.sNo + '&ptcode1=' + me.ptcode
                        } else {
                            path = '/pages/pay/payResult?payment_money=' + me.order.z_price + '&sNo=' +
                                me.sNo + '&order_id=' + dat_id
                        }
                    } else {
                        path = '/pages/pay/payResult?payment_money=' + me.order.z_price + '&sNo=' + me
                            .sNo + '&order_id=' + dat_id
                    }
                    uni.redirectTo({
                        url: path
                    })
                }
            } else {
                me.pay_display = false
                me.msg = ''
                uni.showToast({
                    title: res.data.message,
                    duration: 1500,
                    icon: 'none'
                })
            }
            // #endif
        }
    })
}

//判断支付类型，根据类型做出弹窗
export function payThree(me) {
    if (me.useWallte) {
        if (me.wxPayStatue) {
            me.pay_wx()
        } else {
            uni.showToast({
                title: me.language.toasts.order.choosePay,
                duration: 1000,
                icon: 'none'
            })
            me.firstFlag = true
        }
    } else {
        if (me.wxPayStatue || me.aliPayStatue || me.baidupayStatue) {
            if (me.wxPayStatue) {
                me.pay_wx('wx')
            } else if (me.aliPayStatue) {
                me.pay_wx('ali')
            } else if (me.baidupayStatue) {
                me.pay_wx('baidu_pay')
            }
        } else {
            uni.showToast({
                title: me.language.toasts.order.choosePay,
                duration: 1000,
                icon: 'none'
            })
            me.firstFlag = true
        }
    }
}

export function _pay_style(me) {

    if (!me.value) {
        me.value = 0
    }
    me.price1 = me.price - Number(me.value)
    me.price1 = me.price1.toFixed(2)
    me._gotPayType()

    // 提交订单
    if (me.useWallte) { //钱包支付
        if (me.password_status == 0) {
            uni.showModal({
                title: me.language.showModal.hint,
                content: me.language.showModal.mima,
				confirmText: me.language.showModal.confirm,
				cancelText: me.language.showModal.cancel,
                showCancel: true,
                success: function(resM) {
                    me.firstFlag = true
                    if (resM.confirm) {
                        uni.navigateTo({
                            url: '../../pagesB/setUp/payment'
                        })
                    }
                }
            })
        } else {
            if (me.price1 > 0) { //其他方式抵扣
                if (Number(me.needpay) != 0) {
                    if (me.wxPayStatue || me.aliPayStatue || me.baidupayStatue) {
                        if (Number(me.value) == 0) {
                            me.useWallte = false
                            me.payThree()
                        } else {
                            me.pay_display = true
                        }
                    } else {
                        me.firstFlag = true
                        uni.showToast({
                            title: me.language.toasts.order.yueFail,
                            icon: 'none',
                            duration: 1500
                        })
                    }
                } else {
                    me.pay_display = true
                }
            } else { //余额支付
                me.pay_display = true
            }
        }
    } else { //支付宝或微信支付

        if (!me.wxPayStatue && !me.baidupayStatue && !me.aliPayStatue) {
            uni.showToast({
                title: me.language.toasts.order.choosePay,
                duration: 1000,
                icon: 'none'
            })
            me.firstFlag = true
            return
        }

        // #ifdef MP-WEIXIN
        me.weixinPay()
        // #endif
        //#ifndef MP-WEIXIN
        me.payThree()
        // #endif
    }
}


//支付类型选中操作
export function chooseWay(way, me) {

    if (way == 'wxPay') {
        if (!me.wxPayStatue) {
            me.wxPayStatue = true
            me.aliPayStatue = false
            me.baidupayStatue = false
        } else {
            me.wxPayStatue = false
        }
    } else if (way == 'aliPay') {

        if (!me.aliPayStatue) {
            me.wxPayStatue = false
            me.baidupayStatue = false
            me.aliPayStatue = true
        } else {
            me.aliPayStatue = false
        }

    } else if (way == 'baidu') {

        if (!me.baidupayStatue) {
            me.wxPayStatue = false
            me.aliPayStatue = false

            me.baidupayStatue = true
        } else {
            me.baidupayStatue = false
        }

    }
}

// 微信支付
export function weixinPay(me) {
    me.loading = true
    uni.hideLoading()
    uni.login({
        provider: 'weixin',
        success: (e) => {
            let data = {
                code: e.code,
                sNo: me.sNo,
                title: me.order.list[0].p_name,
                type: 'mini_wechat',
                access_id: me.access_id,
                total: me.price1,
                module: 'app',
                action: 'pay',
            }
            uni.request({
                url: uni.getStorageSync('url'),
                data,
                success: (res) => {
                    if (res.statusCode !== 200) {
                        uni.showModal({
                            title: me.language.showModal.hint,
                            content: me.language.showModal.payFail2,
							confirmText: me.language.showModal.confirm,
							cancelText: me.language.showModal.cancel,
                            success: function(res) {
                                me.$store.state.payRes = me.order_list
                                if (res.confirm) {
                                    uni.redirectTo({
                                        url: '/pages/order/myOrder'
                                    })
                                } else if (res.cancel) {
                                    uni.switchTab({
                                        url: '/pages/tabBar/home'
                                    })
                                }
                            }
                        })
                        return
                    } else if (res.statusCode == 200) {
                        let paymentData = res.data

                        uni.requestPayment({
                            provider: 'wxpay',
                            timeStamp: paymentData.timeStamp,
                            nonceStr: paymentData.nonceStr,
                            package: paymentData.package,
                            signType: 'MD5',
                            paySign: paymentData.paySign,
                            success: (res) => {
                                var dat_id = ''
                                if (me.orde_id) {
                                    dat_id = me.orde_id
                                } else {
                                    dat_id = me.or_id
                                }
                                setTimeout(function() {
                                    uni.showToast({
                                        title: me.language.toasts.order.payOk,
                                        duration: 1000,
                                        icon: 'none'
                                    })
                                    var path = ''
                                    if (me.otype == 'pt') {
                                        path =
                                            '/pagesA/group/group_end?sNo=' +
                                            me.sNo + '&ptcode=' + me.ptcode
                                    } else {
                                        path =
                                            '/pages/pay/payResult?payment_money=' +
                                            me.order.z_price + '&sNo=' + me
                                                .sNo + '&order_id=' + dat_id
                                    }
                                    uni.redirectTo({
                                        url: path
                                    })

                                }, 1000)
                            },
                            fail: (res) => {
                                uni.showModal({
                                    title: me.language.showModal.hint,
                                    content: me.language.showModal.payFail2,
									confirmText: me.language.showModal.confirm,
									cancelText: me.language.showModal.cancel,
                                    success: function(res) {
                                        me.$store.state.payRes = me.order_list
                                        if (res.confirm) {
                                            uni.redirectTo({
                                                url: '/pages/order/myOrder'
                                            })
                                        } else if (res.cancel) {
                                            uni.switchTab({
                                                url: '/pages/tabBar/home'
                                            })
                                        }
                                    }
                                })
                            },
                            complete: () => {
                                me.loading = false
                                uni.hideLoading()
                            }
                        })
                    } else {
                        uni.showModal({
                            title: me.language.showModal.hint,
                            content: me.language.showModal.payFail2,
							confirmText: me.language.showModal.confirm,
							cancelText: me.language.showModal.cancel,
                            success: function(res) {
                                me.$store.state.payRes = me.order_list
                                if (res.confirm) {
                                    uni.redirectTo({
                                        url: '/pages/order/myOrder'
                                    })
                                } else if (res.cancel) {
                                    uni.switchTab({
                                        url: '/pages/tabBar/home'
                                    })
                                }
                            }
                        })
                    }
                },
                fail: (e) => {
                    me.loading = false
                    uni.hideLoading()
                    uni.showModal({
                        title: me.language.showModal.hint,
                        content: me.language.showModal.payFail2,
						confirmText: me.language.showModal.confirm,
						cancelText: me.language.showModal.cancel,
                        success: function(res) {
                            me.$store.state.payRes = me.order_list
                            if (res.confirm) {
                                uni.redirectTo({
                                    url: '/pages/order/myOrder'
                                })
                            } else if (res.cancel) {
                                uni.switchTab({
                                    url: '/pages/tabBar/home'
                                })
                            }
                        }
                    })
                }
            })
        },
        fail: (e) => {
            me.loading = false
            uni.hideLoading()
            uni.showModal({
                title: me.language.showModal.hint,
                content: me.language.showModal.payFail2,
				confirmText: me.language.showModal.confirm,
				cancelText: me.language.showModal.cancel,
                success: function(res) {
                    me.$store.state.payRes = me.order_list
                    if (res.confirm) {
                        uni.redirectTo({
                            url: '/pages/order/myOrder'
                        })
                    } else if (res.cancel) {
                        uni.switchTab({
                            url: '/pages/tabBar/home'
                        })
                    }
                }
            })
        }
    })
}

// 改变是否余额支付
export function switchChange(e, me) {
    me.frist_show = false

    // #ifdef MP-BAIDU
    me.useWallte = e.detail.checked
    // #endif

    // #ifndef MP-BAIDU
    me.useWallte = e.detail.value
    // #endif

    if (!me.useWallte) {
        me.value = ''
        me.needpay = ''
    } else {

        if (me.otype != 'pt') { //不是拼团订单
            if (Number(me.order.z_price) > Number(me.user_money)) {
                me.value = me.user_money
                me.needpay = parseFloat(me.order.z_price - me.user_money).toFixed(2)
            } else {
                me.value = me.order.z_price
                me.needpay = 0
            }

        } else {
            if (Number(me.endpay) > Number(me.user_money)) {
                me.value = me.user_money
                me.needpay = parseFloat(me.endpay - me.user_money).toFixed(2)
            } else {
                me.value = me.endpay
                me.needpay = 0
            }
        }
    }
}

// 售后
export function _after(e, id, content, r_status, me, comments_type = null) {
    var order_details_id = []
    order_details_id.push(id)

    if (r_status == 1 || r_status == 0 || r_status == 2 || comments_type == 1 || comments_type == 2 || r_status == 12) {

        if (me.order.list.length > 1) {
            if (r_status == 1) {
                uni.navigateTo({
                    url: '/pagesA/returnGoods/returnGoods?rType=true&order_details_id=' + order_details_id +
                        '&order_anking=1&r_status=' + r_status
                })
            } else {
                uni.navigateTo({
                    // url:'batchOrder?orde_id='+this.orde_id
                    url: '/pagesA/returnGoods/returnGoods?order_details_id=' + order_details_id +
                        '&order_anking=1&r_status=' + r_status
                })
            }
        } else {
            uni.navigateTo({
                url: '/pagesA/returnGoods/returnGoods?rType=true&order_details_id=' + order_details_id +
                    '&order_anking=1&r_status=' + r_status
            })
        }
    } else if (r_status == 4) {

    } else if (comments_type == 1) {
        uni.navigateTo({
            url: '../evaluate/evaluating?order_id=' + id + '&num=one'
        })
    }
}

export function _receiving(me) {
    var data = {
        module: 'app',
        order_id: me.orde_id,
        access_id: me.access_id,
        app: 'see_extraction_code',
        action: 'order'
    }
    uni.request({
        data,
        url: uni.getStorageSync('url'),
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: function(res) {
            me.receiving_shop.flag = true

            me.fastTap = true
            if (res.data.code == 200) {
                me.receiving_check = res.data.list
            } else {
                uni.showToast({
                    title: res.data.message,
                    duration: 1500,
                    icon: 'none'
                })
            }
        }
    })
}

// 功能按钮1(根据状态做出不同操作)
export function _submitOne(event, sNo, order_id, status, me) {
    // ['取消订单','删除订单','查看详情']
    
    let action = 'order';
    if (me.otype === 'pt') {
        action = 'groupbuy'
    }
    var data = {
        module: 'app',
        action: action,
        order_id: order_id,
        access_id: me.access_id
    }
    if (status == 0) {
        if(me.otype === 'pt'){
            data.m = 'removeOrder'
        }else{
            data.app = 'removeOrder'
        }

        uni.request({
            data,
            url: uni.getStorageSync('url'),
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function(res) {
                let {
                    data: {
                        code,
                        message
                    }
                } = res
                if (code == 200) {
                    me.is_remove_order = true
                    uni.showToast({
                        title: me.language.toasts.order.qxOk,
                        duration: 1000,
                        icon: 'none'
                    })
                    setTimeout(function() {
                        uni.navigateBack({
                            delta: 1
                        })
                    }, 1000)
                } else if (code == 202) {
                    uni.showToast({
                        title: me.language.toasts.order.yfh,
                        duration: 1000,
                        icon: 'none'
                    })
                    _axios(me)
                } else {
                    // console.log(11111111);
                    uni.showToast({
                        title: res.data.message,
                        duration: 1000,
                        icon: 'none'
                    })
                }
            },
            error: function(err) {
                // console.log(err)
            }
        })
    } else if (status == 7 || status == 6) {
        if (me.logistics.length == 1) {
            uni.navigateTo({
                url: '/pages/expressage/expressage?list=' + JSON.stringify(me.logistics[0]) + '&sNo=' + sNo
            });
        } else if (me.logistics.length > 1) {
            uni.navigateTo({
                url: '/pagesB/expressage/expressage?sNo=' + sNo
            });
        }
    } else if (status == 2 || status == 3 || status == 5) {
        data.app = 'del_order'
        uni.request({
            data,
            url: uni.getStorageSync('url'),
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function(res) {
                let {
                    data: {
                        code,
                        message
                    }
                } = res
                if (code == 200) {
                    uni.showToast({
                        title: me.language.toasts.order.delOk,
                        duration: 1000,
                        icon: 'none'
                    })
                    setTimeout(() => {
                        uni.navigateBack({
                            delta: 1
                        })
                    }, 1000)
                } else {
                    uni.showToast({
                        title: message,
                        duration: 1000,
                        icon: 'none'
                    })
                }
            },
            error: function(err) {
                // console.log(err)
            }
        })
    }
}

// 功能按钮2(根据状态做出不同操作)
export async function _submitTwo(event, order_id, status, me) {

    if (status == 1) {
        uni.navigateTo({
            url: '/pagesA/returnGoods/returnGoods?order_details_id=' + order_id + '&order_anking=1'
        })
    } else if (status == 0) {
        if (me.is_end) {
            uni.showToast({
                title: me.language.toasts.order.submitTwo[0],
                duration: 1500,
                icon: 'none'
            })
            return false
        }
        if (!me.order.user_can_ms) {
            uni.showToast({
                title: me.language.toasts.order.submitTwo[1],
                duration: 1500,
                icon: 'none'
            })
            return false
        }
        if (!me.order.user_can_buy_ms) {
            uni.showToast({
                title: me.language.toasts.order.submitTwo[2],
                duration: 1500,
                icon: 'none'
            })
            return false
        }
        if (!me.order.user_can_can) {
            uni.showToast({
                title: me.language.toasts.order.submitTwo[3],
                duration: 1500,
                icon: 'none'
            })
            return false
        }
        if (!me.order.user_can_open) {
            uni.showToast({
                title: me.language.toasts.order.submitTwo[4],
                duration: 1500,
                icon: 'none'
            })
            return false
        }
        if (me.order.isagain_can && me.pttype == 'cantuan') {
            uni.showToast({
                title: me.language.toasts.order.submitTwo[5],
                duration: 1500,
                icon: 'none'
            })
            return false
        }
        if (me.order.isagain_open && me.pttype == 'kaituan') {
            uni.showToast({
                title: me.language.toasts.order.submitTwo[6],
                duration: 1500,
                icon: 'none'
            })
            return false
        }
        if (me.order.isinpt) {
            uni.showToast({
                title: me.language.toasts.order.submitTwo[7],
                duration: 1500,
                icon: 'none'
            })
            return false
        }
        me._pay_style()
    } else if (status == 2) {
        var data = {
            module: 'app',
            action: 'order',
            app: 'ok_Order',
            order_id: order_id,
            access_id: me.access_id
        }
        uni.request({
            data,
            url: uni.getStorageSync('url'),
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function(res) {
                let {
                    data: {
                        code,
                        message
                    }
                } = res
                if (code == 200) {
                    uni.showToast({
                        title: me.language.toasts.order.submitTwo[8],
                        duration: 1500,
                        icon: 'none'
                    })
                    setTimeout(function() {
                        _axios(me)
                    }, 1500)
                } else {
                    uni.showToast({
                        title: res.data.message,
                        duration: 1500,
                        icon: 'none'
                    })
                }
            },
            error: function(err) {
                // console.log(err)
            }
        })
    } else if (status == 3) {
        uni.navigateTo({
            url: '/pages/evaluate/evaluating?order_id=' + me.orde_id + '&num=all'
        })
    } else if (status == 7 || status == 6 || status == 12) {
        if (me.is_end) {
            uni.showToast({
                title: me.language.toasts.order.submitTwo[9],
                duration: 1500,
                icon: 'none'
            })
            return false
        }

        let data = {
            module: 'app',
            action: 'order ',
            app: 'buy_again',
            id: order_id,
            access_id: me.access_id
        }
        
        let {
            cart_id,
            code,
            message
        } = await me.$req.post({data})
        if (code == 200) {
            me.cart_id(cart_id)
            me.address_id('')
            uni.navigateTo({
                url: '/pages/pay/orderDetailsr?returnR=2&&buy_again=true'
            })
        } else {
            uni.showToast({
                title: message,
                duration: 1500,
                icon: 'none'
            })
        }
    } else if (status == 4) {
        // #ifdef H5
        var url = uni.getStorageSync('url') + '&module=app&action=kefu'
        setTimeout(function() {
            window.location.href = url
        }, 500)
        // #endif
        // #ifndef H5
        uni.navigateTo({
            url: '../message/service'
        })
        // #endif

    } else if (status == 5 || status == 8) {
        uni.navigateTo({
            url: '/pages/evaluate/evaluating?order_id=' + order_id + '&add=true'
        })
    }
}

// 暂无使用
export function back_click(id, me) {
    if (id == 1) {
        uni.showToast({
            title: me.language.toasts.order.back_click[0],
            duration: 1000,
            icon: 'none'
        })
    } else if (id == 0) {
        me.stau_num = 1
        //请求接口
        const TIME_COUNT = 24 * 60 * 60
        if (!me.timer) {
            me.count = TIME_COUNT
            me.timer = setInterval(() => {
                if (me.count > 0 && me.count <= TIME_COUNT) {
                    me.count--
                } else {
                    me.stau_num = 0
                    clearInterval(me.timer)
                    me.timer = null
                }
            }, 1000)
        }
        uni.showToast({
            title: me.language.toasts.order.back_click[1],
            duration: 1000,
            icon: 'none'
        })
    }

}

// value值改变执行方法
export function changeValue(newValue, oldValue, me) {
    me.needpay = parseFloat(me.endpay - newValue).toFixed(2)
    me.$nextTick(function() {
        me.price1 = me.price - me.value
        me.price1 = Number(me.price1).toFixed(2)
        if (Number(me.value) > me.price) { //输入金额大于商品金额
            if (Number(me.price) <= Number(me.user_money)) {
                me.value = me.price
            } else {
                me.value = me.user_money
            }
            uni.showToast({
                title: me.language.toasts.order.changeValue,
                icon: 'none',
                duration: 1500
            })
        } else if (Number(me.value) < Number(me.price)) { //输入金额小于商品金额
            if (Number(me.value) > Number(me.user_money)) {
                me.value = me.user_money
                uni.showToast({
                    title: me.language.toasts.order.changeValue,
                    icon: 'none',
                    duration: 1500
                })
            }
        }

        if (Math.abs(newValue - oldValue) == 0) {
            var x = String(newValue).indexOf('.') + 1
            var y = String(newValue).length - x

            if (y > 2 && x != 0) {
                me.value = Number(newValue).toFixed(2)
            }
        } else if (Math.abs(newValue - oldValue) < 0.009999999999) {
            me.value = Number(me.value).toFixed(2)
        }

    })
}

// 获取订单信息
export function getOrderInfo(type, me) {
    const appid = 'wxf6e29bcc719cf499'
    let data = {
        access_id: me.access_id,
        sNo: me.sNo,
        title: me.order.list[0].p_name,
        module: 'app',
        action: 'pay',
        type: 'app_wechat',
        total: me.price1,
    }
    if (me.wxPayStatue) {
        // #ifdef H5
        data.type = 'jsapi_wechat'
        data.code = me.code
        // #endif
        // #ifndef H5
        data.type = 'app_wechat'
        // #endif
    } else if (me.aliPayStatue) {
        // #ifdef H5
        data.type = 'alipay_mobile'
        // #endif
        // #ifndef H5
        data.type = 'alipay'
        // #endif
        // #ifdef MP-ALIPAY
        data.type = 'alipay_minipay'
        // #endif
        // #ifdef MP-TOUTIAO
        data.type = 'tt_alipay'
        // #endif
    } else if (me.baidupayStatue) {
        // #ifdef MP-BAIDU
        data.type = 'baidu_pay'
        // #endif
    }
    let p = me.LaiKeTuiCommon.getMPAliAuthCode()
    return p.then((authcode) => {
        if (authcode) {
            // #ifdef MP-ALIPAY
            data.alimp_authcode = authcode
            // #endif
            // #ifdef MP-TOUTIAO
            data.tt_authcode = authcode
            // #endif
        }
        return new Promise((res) => {
            uni.request({
                url: uni.getStorageSync('url'),
                data,
                success: (result) => {
                    if (result.statusCode == 200) {
                        // #ifndef MP-ALIPAY
                        res(result)
                        // #endif

                        // #ifdef MP-ALIPAY
                        let tno = result.data
                        res(tno.substr(1, tno.length))
                        // #endif
                    } else {
                        uni.showToast({
                            title: result.data.message,
                            duration: 1500,
                            icon: 'none'
                        })
                    }
                },
                fail: (e) => {
                    // #ifndef MP-ALIPAY
                    res(e)
                    // #endif

                    // #ifdef MP-ALIPAY
                    let tno = e.data
                    res(tno.substr((tno.indexOf('s') + 1), (tno.length - 4)))
                    // #endif
                }
            })
        })
    })
}

// 支付失败
export function _payFail(me) {
    uni.showModal({
        title: me.language.showModal.hint,
        content: me.language.showModal.payFail,
		confirmText: me.language.showModal.confirm,
		cancelText: me.language.showModal.cancel,
        success: function(res) {
            me.firstFlag = true
            // #ifdef H5
            if (res.confirm) {
                window.location.href = uni.getStorageSync('h5_url') + 'pages/order/myOrder?status=1'
            } else if (res.cancel) {
                window.location.href = uni.getStorageSync('h5_url') + 'pages/tabBar/home'
            }
            // #endif
            // #ifndef H5
            me.$store.state.payRes = me.order_list
            if (res.confirm) {
                uni.redirectTo({
                    url: '../order/myOrder'
                })
            } else if (res.cancel) {
                uni.switchTab({
                    url: '../tabBar/home'
                })
            }
            // #endif
        }
    })
}

//复制连接
export function onCopy(me, $) {
    // #ifndef H5
    uni.setClipboardData({
        data: me.message,
        success: function(res) {
            uni.showToast({
                title: me.language.toasts.order.copyOk,
                duration: 1500,
                icon: 'none'
            })
        }
    })
    // #endif
    // #ifdef H5
    let input = $('#order_no input')
    input.select()
    document.execCommand('Copy')
    uni.showToast({
        title: me.language.toasts.order.copyOk,
        duration: 1500,
        icon: 'none'
    })
    // #endif
}
