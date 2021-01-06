/*分销中心
/*佣金明细*/
/*提现*/

// 金额格式判断
export function lkt_back (me) {
    var mon = Number(me.put_mon)
    var monrys = Number(me.min_amount)
    // console.log(mon + '===' + monrys)
    if (mon < monrys) {
        mon = 0
        me.put_mon = mon.toFixed(2)
        uni.showToast({
            title: `${me.language.toasts.distribution_center.lkt_money[0]} ${monrys} ${me.language.toasts.distribution_center.lkt_money[1]}`,
            duration: 1000,
            icon: 'none'
        })
    } else if (mon > me.max_amount) {
        mon = 0
        me.put_mon = mon.toFixed(2)
        uni.showToast({
            title: me.language.toasts.distribution_center.lkt_money[2],
            duration: 1000,
            icon: 'none'
        })
    } else {
        mon = mon
    }
    me.mon_kc = mon.toFixed(2)
    // console.log(me.put_mon > 0)
}

//银行卡匹配
export function lkt_bank (self) {
    var pattern = /^([1-9]{1})(\d{5})$/
    if (pattern.test(self.bank_number)) {
        var data = {
            module: 'app',
            action: 'user',
            app: 'Verification',
            Bank_name: self.bank_name,
            Bank_card_number: self.bank_number
        }
        uni.request({
            data,
            url: uni.getStorageSync('url'),
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function (res) {
                // console.log(res)
                let { data: { code, message } } = res
                // console.log(code, message)
                if (code != 200) {
                    self.bank_number = ''
                    uni.showToast({
                        title: me.language.toasts.distribution_center.lkt_bank,
                        duration: 1000,
                        icon: 'none'
                    })
                } else {
                    self.bank_name = res.data.Bank_name
                }
            }
        })
    }
    if (self.bank_number == '') {
        self.bank_name = ''
    }
}

//获取银行名称
export function lkt_bank_p (self) {
    var patt = /^[1-9]{1}\d{15}|\d{18}$/
    if (!patt.test(self.bank_number)) {
        self.bank_name = ''
        self.bank_number = ''
        uni.showToast({
            title: me.language.toasts.distribution_center.lkt_bank_p[0],
            duration: 1000,
            icon: 'none'
        })
    } else {
        var data = {
            module: 'app',
            action: 'user',
            app: 'Verification',
            Bank_name: self.bank_name,
            Bank_card_number: self.bank_number
        }
        uni.request({
            data,
            url: uni.getStorageSync('url'),
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function (res) {
                // console.log(res)
                let { data: { code, message } } = res
                // console.log(code, message)

                if (code != 200) {
                    self.bank_number = ''
                    uni.showToast({
                        title: me.language.toasts.distribution_center.lkt_bank_p[1],
                        duration: 1000,
                        icon: 'none'
                    })
                } else {
                    self.bank_name = res.data.Bank_name
                }
            }
        })
    }
}

//获取短信验证码
export function lkt_getcode (me) {
    if (!me.fastTap) {
        return
    }
    me.fastTap = false
    me._telephone(me.phone)
    var data = {
        module: 'app',
        action: 'user',
        app: 'secret_key',
        phone: me.phone
    }
    if (me.phone) {
        uni.request({
            data,
            url: uni.getStorageSync('url'),
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function (res) {
                me.fastTap = true
                let { data: { code, message } } = res
                if (code != 200) {
                    uni.showToast({
                        title: message,
                        duration: 1000,
                        icon: 'none'
                    })
                } else if (code == 200) {
                    me._time()
                    me.one_code == 1
                    me.oldPhone = me.phone
                }
                // console.log(res)
            },
            error: function (err) {
                me.fastTap = true
            }
        })
    } else {
        me.fastTap = true
        uni.showToast({
            title: me.language.toasts.distribution_center.lkt_getcode,
            duration: 1000,
            icon: 'none'
        })
    }
}

//1分钟倒计时
export function lkt_time (self) {
    const TIME_COUNT = 60
    if (!self.timer) {
        self.display = false
        self.count = TIME_COUNT
        self.timer = setInterval(() => {
            if (self.count > 0 && self.count <= TIME_COUNT) {
                self.count--
            } else {
                self.display = true
                clearInterval(self.timer)
                self.timer = null
            }
        }, 1000)
    }
}

//申请提现
export function lkt_submit (me) {
    if (!me.fastTap) {
        return
    }
    me.fastTap = false
    // console.log(me.put_mon, me.bank_number, me.user_name, me.one_code == 1, me.input_code.length == 6, me.bank_name)

    var patt = /^([1-9]{1})(\d{15}|\d{18})$/

    if (me.put_mon && me.bank_number && me.user_name && me.bank_name && me.branch) {
        var data = {
            module: 'app',
            action: 'commcenter',
            app: 'withdrawals',
            amoney: me.put_mon,//提现金额
            Bank_name: me.bank_name,// 银行名称
            branch: me.branch,// 支行名称
            Bank_card_number: me.bank_number,// 银行卡号
            Cardholder: me.user_name,// 持卡人
            mobile: me.phone,//手机号码
            code: me.input_code//验证码
        }
        me.$req.post({data}).then(res => {
            if (res.code == 200) {
                uni.showToast({
                    title: me.language.toasts.distribution_center.lkt_submit[0],
                    duration: 1000,
                    icon: 'none'
                })
                setTimeout(function () {
                    me.fastTap = true
                    uni.navigateTo({
                        url: './distribution_result?txId=' + res.withdraw_id
                    })
                }.bind(me), 1000)
            
            } else if (res.code != 200) {
                me.fastTap = true
                uni.showToast({
                    title: res.message,
                    duration: 1000,
                    icon: 'none'
                })
            }
        }).catch(()=>{
            me.fastTap = true
        })
    } else if (me.one_code != 1) {
        uni.showToast({
            title: me.language.toasts.distribution_center.lkt_submit[1],
            duration: 1000,
            icon: 'none'
        })
        me.fastTap = true
    } else if (me.oldPhone != me.phone) {
        uni.showToast({
            title: me.language.toasts.distribution_center.lkt_submit[2],
            duration: 1000,
            icon: 'none'
        })
        me.fastTap = true
    } else {
        setTimeout(function () {
            uni.showToast({
                title: me.language.toasts.distribution_center.lkt_submit[3],
                duration: 1000,
                icon: 'none'
            })
            me.fastTap = true
        }, 1500)
    }
}

//金额格式判断
export function lkt_money (me) {
    var mon = Number(me.put_mon)
    var monrys = Number(me.min_amount)
    // console.log(mon + '===' + monrys)
    if (mon < monrys) {
        mon = 0
        me.put_mon = mon.toFixed(2)
        uni.showToast({
            title: `${me.language.toasts.distribution_center.lkt_money[0]} ${monrys} ${me.language.toasts.distribution_center.lkt_money[1]}`,
            duration: 1000,
            icon: 'none'
        })
    } else if (mon > me.max_amount) {
        mon = 0
        me.put_mon = mon.toFixed(2)
        uni.showToast({
            title: me.language.toasts.distribution_center.lkt_money[2],
            duration: 1000,
            icon: 'none'
        })
    } else {
        mon = mon
    }
    me.mon_kc = mon.toFixed(2)
    // console.log(me.put_mon > 0)
}

/*提现 end*/
/*分销商品*/

//获取所有分销等级
export function lkt_getgrade (me) {
    var data = {
        module: 'app',
        action: 'commproduct',
        app: 'getstart',
    }
    me.$req.post({data}).then(res => {
        me.load = false
        me.header = res.pro
        me.status_id = res.pro[0].id
        
        if(res.pro[0].sonlist){
            res.pro[0].sonlist.filter(item=>{
                item.vip_price = Number(item.vip_price).toFixed(2)
                item.vip_yprice = Number(item.vip_yprice).toFixed(2)
            })
        }
        
        me.order = res.pro[0].sonlist
        
        me.is_grade = res.grade==0?false:true;
        
        if (res.pro[0].sonlist.length == 0) {
            me.hasGoods = -1
        } else if (res.pro[0].sonlist.length > 0) {
            me.hasGoods = 1
        }
    }).catch((err)=>{
        // console.log(err)
    })
}

/*分销商品 end*/
/*分销规则*/
/*扫码分享*/

//保存图片
export function lkt_saveimg (me) {
    uni.downloadFile({
        url: me.ewmImg,
        success (res) {
            if (res.statusCode === 200) {
                uni.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success () {
                        uni.showToast({
                            title: me.language.toasts.distribution_center.lkt_saveimg[0],
                            duration: 1000
                        })
                    },
                    fail (e) {
                        // console.log(e);
                        uni.showToast({
                            title: me.language.toasts.distribution_center.lkt_saveimg[1],
                            duration: 1000
                        })
                    }
                })
            } else {
                uni.showToast({
                    title: me.language.toasts.distribution_center.lkt_saveimg[2],
                    icon: 'none',
                    duration: 1000
                })    
            }
        }
    })
    
}

//获取分享二维码
export function lkt_getimg (me) {
    var data = {
        module: 'app',
        action: 'getcode',
        app: 'index',
        m: 'product_share',
        scene: 'productId',
        path: '../tabBar/home',
        type: 4,
        proType: 'distribution',
    }
    me.$req.post({data}).then(res => {
        var last = JSON.stringify(res)
        uni.hideLoading()
        if (res.code == 200) {
            me.ewmImg = res.url + ''
            me.saveEWM = true
        } else if (res.code == 404) {
            uni.showToast({
                title: me.language.laiketuiCommon.noLogin,
                icon: 'none',
                duration: 1500
            })
            setTimeout(function () {
                uni.navigateTo({
                    url: '../login/login?landing_code=1'
                })
            }, 1000)
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
        }
    })
}

/*我的团队*/

//查看下级
export function lkt_seedown (userId, index, openFlag, me) {
    if (openFlag) {
        me.order[index].src = me.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/fx_bottom.png'
        me.sonList = []
    } else {
        me.order[index].src = me.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/fx_top.png'
        for (var i in me.order) {
            me.order[i].openFlag = false
        }
        var data = {
            module: 'app',
            action: 'commcenter',
            app: 'mygroup',
            uid: userId
        }
        me.$req.post({data}).then(res => {
             me.sonList = res.data.list
        }).catch((err)=>{
            // console.log(err)
        })
    }
    me.order[index].openFlag = !me.order[index].openFlag
}

/*提现明细*/
