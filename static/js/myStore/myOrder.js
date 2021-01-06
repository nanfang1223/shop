// 进入上传商品页面
export function LaiKeTui_axios(me) {

    uni.showLoading({
        title: me.language.MsIndex.loading
    })
    let data = {
        module: 'app',
        action: 'mch',
        m: me.m || 'my_order',
        shop_id: me.shop_id,
        order_type: me.order_type
    }
    me.$req.post({data}).then(res => {
        uni.hideLoading()
        if (res.code == 200) {

            let list = res.list;
            
            
            
            if (me.order_type == 'return') {
                for (let i =0; i < list.length; i ++ ) {
                    for (let i1 =0; i1 < list[i].res.length; i1 ++ ) {
                        list[i].res[i1] = list[i].res[i1][0]
                    }
                }
                me.list = list
            }
            for (let i =0; i < list.length; i ++ ) {
                for (let i1 =0; i1 < list[i].res.length; i1 ++ ) {
                    if (!(list[i].res[i1].list instanceof Array)) {
                        list[i].res[i1].list = [
                            list[i].res[i1].list
                        ]
                    }
                }
            }
            me.list = list

            if (res.list.length == 0) {
                me.nodata = 1
            } else {
                me.nodata = -1
            }
            me.payment_num = res.payment_num
            me.return_num = res.return_num
            me.send_num = res.send_num
            me.page = 1
        } else if (res.code == 404) {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
            setTimeout(function() {
                uni.navigateTo({
                    url: '../../pages/login/login?landing_code=1',
                })
            }, 1500)
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
        }
    })
}

export function LaiKeTui_changeTabBar(me, num) {
    me.topTabBar = num
    if (num == 1) {
        me.order_type = ''
    } else if (num == 2) {
        me.order_type = 'payment'
    } else if (num == 3) {
        me.order_type = 'send'
    } else if (num == 4) {
        me.order_type = 'return'
    } else if (num == 5) {
        me.order_type = 'grouping'
    } else if (num == 6) {
        me.order_type = 'fail'
    } else {
        me.order_type = 'return'
    }
    me.list = []
    me._axios()
}

export function LaiKeTui_changeFh(me, id, index, index1, index2) {
    var b = 0
    var a1 = me.list[index].res[index1].list[index2].status
    if (a1) {
        me.list[index].res[index1].list[index2].status = false
    } else {
        me.list[index].res[index1].list[index2].status = true
    }
    for (var i = 0; i < me.list[index].res[index1].list.length; i++) {
        if (me.list[index].res[index1].list[i].status) {
            me.changeFh1 = true
        } else {
            b++
        }
    }
    if (b == me.list[index].res[index1].list.length) {
        me.changeFh1 = false
    }
}

export function LaiKeTui_changeFh1(me, index, index1) {
    me.changeFh1 = !me.changeFh1
    var dd = me.list[index].res[index1]
    if (me.changeFh1) {
        for (var i = 0; i < dd.list.length; i++) {
            dd.list[i].status = true
        }
    } else {
        for (var i = 0; i < dd.list.length; i++) {
            dd.list[i].status = false
        }
    }
}

export function LaiKeTui_showFhDiv(me, sNo, index, index1) {
    me.orderList_id = []
    var dd = me.list[index].res[index1].list
    for (let i = 0; i < dd.length; i++) {
        if (dd[i].status) {
            me.orderList_id.push(dd[i].id)
        }
    }
    me.sNo = sNo
    if (!me.changeFh1) {
        uni.showToast({
            title: me.language.toasts.myOrder.showFhDiv,
            duration: 1500,
            icon: 'none'
        })
        return
    } else {
        me.fhDiv = true
    }
    me.fhRadios = false

    let data = {
        shop_id: me.shop_id,
        module: 'app',
        action: 'mch',
        m: 'into_send'
    }
    me.$req.post({data}).then(res => {
        if (res.code == 200) {
            var list = []
            me.kuaidiList = res.list
            for (var key in res.list) {
                list.push(res.list[key].kuaidi_name)
            }
            me.pickerValueArray = list
        } else if (res.code == 404) {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
            setTimeout(function() {
                uni.navigateTo({
                    url: '/pages/login/login?landing_code=1',
                })
            }, 1500)
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
        }
    })
}

export function LaiKeTui_showFhDiv1(me, sNo, length) {
    me.sNo = sNo
    var a = []
    // console.log(length)
    if (length > 1) {
        me.fhRadios = true
    } else {
        me.fhDiv = true
    }
    let data  = {
        shop_id: me.shop_id,
        module: 'app',
        action: 'mch',
        m: 'into_send',
    }
    me.$req.post({data}).then(res => {
        if (res.code == 200) {
            var list = []
            me.kuaidiList = res.list
            for (var key in res.list) {
                list.push(res.list[key].kuaidi_name)
            }
            me.pickerValueArray = list
        } else if (res.code == 404) {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
            setTimeout(function() {
                uni.navigateTo({
                    url: '../../pages/login/login?landing_code=1',
                })
            }, 1500)
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
        }
    })
}

export function LaiKeTui_closeOrder(me, sNo) {
    let data = {
        module: 'app',
        action: 'mch',
        m: 'closing_order',
        shop_id: me.shop_id,
        access_id: me.access_id,
        sNo,
    }
    me.$req.post({data}).then(res => {
        if (res.code == 200) {
            uni.showToast({
                title: me.language.toasts.myOrder.closeOk,
                duration: 1500,
                icon: 'none'
            })
            setTimeout(function() {
                me._axios()
            }, 1500)
        } else if (res.code == 404) {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
            setTimeout(function() {
                uni.navigateTo({
                    url: '../../pages/login/login?landing_code=1',
                })
            }, 1500)
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
        }
    })
}

export function LaiKeTui_returnM(me, sNo, order_details_id) {
    me.sNo = sNo
    me.orderList_id = order_details_id
    me.mask_display3 = true
    let data = {
        shop_id: me.shop_id,
        sNo,
        id: order_details_id,
        module: 'app',
        action: 'mch',
        m: 'return_amount'
    }
    me.$req.post({data}).then(res => {
        if (res.code == 200) {
            me.refundNum = res.price
        } else if (res.code == 404) {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
            setTimeout(function() {
                uni.navigateTo({
                    url: '../../pages/login/login?landing_code=1',
                })
            }, 1500)
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
        }
    })
}

export function LaiKeTui_send(me) {
    if (me.courier_num.length == 0 || me.proClass == '') {
        uni.showToast({
            title: me.language.toasts.myOrder.send[0],
            duration: 1500,
            icon: 'none'
        })
        return
    }
    if (!me.fastTap) {
        return
    }
    me.fastTap = false
    // console.log(me.re_type)
    if (me.re_type == 3) { // 回寄
        var data = {
            module: 'app',
            action: 'mch',
            m: 'examine',
            shop_id: me.shop_id,
            sNo: me.sNo,
            id: me.orderList_id,
            express_id: me.express_id, // 快递ID
            courier_num: me.courier_num, // 快递单号
            r_type: 11
        }
    } else {
        var data = {
            shop_id: me.shop_id,
            module: 'app',
            action: 'mch',
            m: 'send',
            sNo: me.sNo,
            express_id: me.express_id,
            courier_num: me.courier_num,
            orderList_id: me.orderList_id.join(','),
            id: me.orderList_id.join(','),
        }
    }

    me.$req.post({data}).then(res => {
        if (res.code == 200) {
            uni.showToast({
                title: me.language.toasts.myOrder.send[1],
                duration: 1500,
                icon: 'none'
            })
            setTimeout(function() {
                me._axios()
                me.fhDiv = false
                me.fhRadios = false
                me.fastTap = true
                me.courier_num = ''
                me.proClass = ''
            }, 1500)
        } else if (res.code == 404) {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
            setTimeout(function() {
                uni.navigateTo({
                    url: '../../pages/login/login?landing_code=1',
                })
            }, 1500)
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
            me.fastTap = true
        }
    })
}

export function LaiKeTui_confirm(me, type) {
    var data = {
        shop_id: me.shop_id,
        sNo: me.sNo,
        id: me.orderList_id,
        module: 'app',
        action: 'mch',
        m: 'examine',

    }
    if (type == 1) {
        me.mask_display1 = false
        data.r_type = 1
        me.$req.post({data}).then(res => {
            if (res.code == 200) {
                uni.showToast({
                    title: me.language.toasts.myOrder.confirm[0],
                    duration: 1500,
                    icon: 'none'
                })
                setTimeout(function() {
                    uni.navigateBack({
                        delta: 1
                    })
                }, 1500)
            } else if (res.code == 404) {
                uni.showToast({
                    title: res.message,
                    duration: 1500,
                    icon: 'none'
                })
                setTimeout(function() {
                    uni.navigateTo({
                        url: '/pages/login/login?landing_code=1',
                    })
                }, 1500)
            } else {
                uni.showToast({
                    title: res.message,
                    duration: 1500,
                    icon: 'none'
                })
            }
        })
    } else if (type == 2) {
        me.mask_display2 = false
        data.text = me.reason
        if (me.re_type == 1) {
            if (me.r_type == 3) {
                data.r_type = 5
            } else {
                data.r_type = 2    
            }
            
        } else if (me.re_type == 2) {
            data.r_type = 8
        } else if (me.re_type == 3) {
            data.r_type = 10;
        }
        
        
        me.$req.post({data}).then(res => {
            if (res.code == 200) {
                uni.showToast({
                    title: me.language.toasts.myOrder.confirm[1],
                    duration: 1500,
                    icon: 'none'
                })
                setTimeout(function() {
                    me._axios()
                }, 1500)
            } else if (res.code == 404) {
                uni.showToast({
                    title: res.message,
                    duration: 1500,
                    icon: 'none'
                })
                setTimeout(function() {
                    uni.navigateTo({
                        url: '/pages/login/login?landing_code=1',
                    })
                }, 1500)
            } else {
                uni.showToast({
                    title: res.message,
                    duration: 1500,
                    icon: 'none'
                })
            }
        })
    } else if (type == 3) {
        me.mask_display3 = false
        data.price = me.refundM
        data.r_type = 9
        if (me.refund_re_type == 1) {
            data.r_type = 4
        }
        me.$req.post({data}).then(res => {
            if (res.code == 200) {
                uni.showToast({
                    title: me.language.toasts.myOrder.confirm[2],
                    duration: 1500,
                    icon: 'none'
                })
                setTimeout(function() {
                    me._axios()
                }, 1500)
            } else if (res.code == 404) {
                uni.showToast({
                    title: res.message,
                    duration: 1500,
                    icon: 'none'
                })
                setTimeout(function() {
                    uni.navigateTo({
                        url: '/pages/login/login?landing_code=1',
                    })
                }, 1500)
            } else {
                uni.showToast({
                    title: res.message,
                    duration: 1500,
                    icon: 'none'
                })
            }
        })
    }
}
