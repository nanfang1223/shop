// 进入上传商品页面
export function LaiKeTui_axios(me) {
    let data = {
        module: 'app',
        action: 'mch',
        m: 'order_details',
        shop_id: me.shop_id,
        sNo: me.order_id,
    }
    me.$req.post({data}).then(res => {
        me.load = false
        if (res.code == 200) {
            res.list.coupon_price = Number(res.list.coupon_price).toFixed(2)
            res.list.preferential_amount = Number(res.list.preferential_amount).toFixed(2)
            me.list = res.list
            me.city_all = res.list.sheng + '-' + res.list.shi + '-' + res.list.sheng
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
        }
    })
}

export function LaiKeTui_changeValue(me) {
    // console.log(me.list.z_price)
    var list = []
    for (var i = 0; i < me.list.list.length; i++) {
        var json = {
            p_id: me.list.list[i].p_id,
            p_price: me.list.list[i].p_price,
            sid: me.list.list[i].sid,
            size: me.list.list[i].size,
        }
        list.push(json)
    }
    var data1 = {
        // z_freight: me.list.z_freight,
        mobile: me.list.mobile,
        // spz_price: me.list.spz_price,
        name: me.list.name,
        address: me.list.address,
        z_price: me.list.z_price,
        // list,
    }
    data1 = JSON.stringify(data1)
    
    let data = {
        module: 'app',
        action: 'mch',
        m: 'change',
        shop_id: me.shop_id,
        sNo: me.list.sNo,
        data: data1
    }
    me.$req.post({data}).then(res => {
        if (res.code == 200) {
            me.finishBlur = true
            me.list = res.list
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
        }
    })
}

export function LaiKeTui_changeAttr(me, index, sNo, p_id, attribute_id) {
    let data = {
        module: 'app',
        action: 'mch',
        m: 'dj_attribute',
        shop_id: me.shop_id,
        p_id,
    }
    me.$req.post({data}).then(res => {
        if (res.code == 200) {
            me.okBtn = false
            me.p_id = p_id
            me.sNo = sNo
            // console.log(res)
            me.mask_display = true
            me.imgurl = res.data[0].skuBeanList[0].imgurl
            me.attrList = res.data[0].attrList
            me.skuBeanList = res.data[0].attribute_list
            
            me.initData()
            
            // 以下为初始化选中
            for(let i in me.sku_list.items){
                if(me.sku_list.items[i].sku == attribute_id){
                    me.haveSkuBean = {
                        name: me.sku_list.items[i].path,
                        cid: attribute_id,
                        skus: me.sku_list.items[i]
                    };
                }
            }
            
            let selectName = me.haveSkuBean.name.split(',')
            
            for(let i in me.sku_list.result){
                
                for(let k in me.sku_list.result[i]){
                    
                    let flag = selectName.some(item=>item==k)
                    
                    if(flag){
                        me.handleActive(i, me.sku_list.result[i][k])
                    }
                    
                }
                
            }
            
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
        }
    })
}

export function LaiKeTui_showFhDiv(me) {
    me.fhDiv = true
    let data = {
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
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
        }
    })
}

export function LaiKeTui_ok(me) {
    setTimeout(function() {
        // if (me.finishBlur) {
            me.title = me.language.order.order.title
			
            me.diplay = true
            // var list = []
            // for (var i = 0; i < me.list.list.length; i++) {
            //     var a = {
            //         p_id: me.list.list[i].p_id,
            //         p_price: me.list.list[i].p_price,
            //         sid: me.list.list[i].sid,
            //         size: me.list.list[i].size,
            //     }
            //     list.push(a)
            // }
            var orderDetail = {
                address: me.list.address,
                mobile: me.list.mobile,
                name: me.list.name,
                // spz_price: me.list.spz_price,
                // z_freight: me.list.z_freight,
                z_price: me.list.z_price,
                // list,
                area: me.city_all,
                remarks: me.list.remarks
            }
            var data = {
                module: 'app',
                action: 'mch',
                m: 'up_order',
                sNo: me.order_id,
                shop_id: me.shop_id,
                
                orderDetail: JSON.stringify(orderDetail)
            }
            me.$req.post({data}).then(res => {
                if (res.code == 200) {
                    me._axios()
                } else {
                    uni.showToast({
                        title: res.message,
                        duration: 1500,
                        icon: 'none'
                    })
                }
            })
        // } else {
        //     uni.navigateBack({
        //         delta: 1
        //     })
        // }
    }, 500)
}

export function LaiKeTui_send(me) {
    if (!me.fastTap) {
        return
    }
    me.fastTap = false
    
    let data = {
        shop_id: me.shop_id,
        module: 'app',
        action: 'mch',
        m: 'send',
        sNo: me.order_id,
        express_id: me.express_id,
        courier_num: me.courier_num,
        orderList_id: '',
    }
    me.$req.post({data}).then(res => {
        if (res.code == 200) {
            uni.showToast({
                title: me.language.toasts.order.send,
                duration: 1500,
                icon: 'none'
            })
            setTimeout(function() {
                me._axios()
                me.fhDiv = false
                me.fhRadios = false
                me.fastTap = true
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

export function LaiKeTui_confirm(me, num) {
    if (num == 0) {
        uni.showToast({
            title: me.language.toasts.order.confirm[0],
            duration: 1000,
            icon: 'none'
        })
        return
    }
    if (Boolean(me.haveSkuBean)) {

        let data = {
            module: 'app',
            action: 'mch',
            m: 'up_attribute',
            
            shop_id: me.shop_id,
            p_id: me.p_id,
            sNo: me.sNo,
            attribute_id: me.haveSkuBean.cid
        }
        me.$req.post({data}).then(res => {
            if (res.code == 200) {
                me.okBtn = true
                me.mask_display = false
                me.list = res.list
            } else {
                uni.showToast({
                    title: res.message,
                    duration: 1500,
                    icon: 'none'
                })
            }
        })
    } else {
        uni.showToast({
            title: me.language.toasts.order.confirm[1],
            duration: 1000,
            icon: 'none'
        })
    }
}

export function LaiKeTui_spec(me) {
    var attrListIn = me.attrList
    for (var i = 0; i < attrListIn.length; i++) {
        var attrListBig = attrListIn[i]
        //当前类别之外的选择列表
        var attrsOtherSelect = []
        for (var j = 0; j < attrListIn.length; j++) {
            var attrListSmall = attrListIn[j]
            if (attrListSmall.id != attrListBig.id) {

                for (var k = 0; k < attrListSmall.attr.length; k++) {
                    var attrListSmallAttr = attrListSmall.attr[k]

                    if (attrListSmallAttr.enable && attrListSmallAttr.select) {
                        //可选并且已经选择的属性
                        attrsOtherSelect.push(attrListSmallAttr)
                    }
                }
            }
        }
        var enableIds = []
        var skuBeanListIn = me.skuBeanList
        for (var z = 0; z < skuBeanListIn.length; z++) {
            var ism = true
            var skuBean = skuBeanListIn[z]
            for (var j = 0; j < attrsOtherSelect.length; j++) {
                var enable = false
                for (var k = 0; k < skuBean.attributes.length; k++) {
                    var goodAttrBean = skuBean.attributes[k]
                    if (attrsOtherSelect[j].attributeId == goodAttrBean.attributeId &&
                        attrsOtherSelect[j].id == goodAttrBean.attributeValId) {
                        enable = true
                        break
                    }
                }
                ism = enable && ism
            }
            if (ism) {
                for (var o = 0; o < skuBean.attributes.length; o++) {
                    var goodAttrBean = skuBean.attributes[o]
                    if (attrListBig.id == goodAttrBean.attributeId) {
                        enableIds.push(goodAttrBean.attributeValId)
                    }
                }
            }
        }
        var integers = enableIds
        for (var s = 0; s < attrListBig.attr.length; s++) {
            var attrItem = attrListBig.attr[s]
            attrItem.enable = integers.indexOf(attrItem.id) != -1

        }
    }
    // 重新赋值
    me.attrList = attrListIn,
        me.skuBeanList = skuBeanListIn
}

export function QRs(me, rew) {
    var data = {
        module: 'app',
        action: 'mch',
        m: 'sweep_extraction_code',
        
        shop_id: me.shop_id,
        extraction_code: rew.result
    }
    me.$req.post({data}).then(res => {
        uni.hideLoading()
        if (res.code == 200) {
            me.order_id = res.order_id
            me.p_price = res.p_price
            me.sNo = res.sNo
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
            // 成功后跳转 QRsuccess页面
            uni.redirectTo({
                url: 'QRsuccess?p_price=' + me.p_price + '&sNo=' + me.sNo + '&order_id=' + me.order_id
            })
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
        }
    })
    me.$req.post({data}).then(res => {
        uni.hideLoading()
        if (res.code == 200) {
            me.order_id = res.order_id
            me.p_price = res.p_price
            me.sNo = res.sNo
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
            // 成功后跳转 QRsuccess页面
            uni.redirectTo({
                url: 'QRsuccess?p_price=' + me.p_price + '&sNo=' + me.sNo + '&order_id=' + me.order_id
            })
        } else {
            uni.showToast({
                title: res.message,
                duration: 1500,
                icon: 'none'
            })
        }
    })
}
