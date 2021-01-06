/*
 * @Description: 表单数据预处理
 * @Author: 绍吉
 * @Date: 2019-08-23 15:37:31
 * @LastEditTime: 2019-08-30 18:14:16
 * @LastEditors: Please set LastEditors
 */
var that2 = '';
const pt = (code) => {
    const status = new Map([
        ['pt-0', that2.language.groupOrder.obligation],
        ['pt-1', that2.language.groupOrder.dfh_order],
        ['pt-2', that2.language.groupOrder.yfh_order],
        ['pt-3', that2.language.groupOrder.dpj_order],
        ['pt-9', that2.language.groupOrder.spelling],
        ['pt-10', that2.language.groupOrder.noRefund],
        ['pt-11', that2.language.groupOrder.refunded],
        ['pt-6', that2.language.groupOrder.closed],
        ['pt-12', that2.language.groupOrder.complete],
        ['pt-5', that2.language.groupOrder.complete],
        ['default', '']
    ])
    return status.get(code) || status.get('default')
}

const p = (code) => {
    const status = new Map([
        ['GM-0', that2.language.order.myorder.to_paid],
        ['GM-1', that2.language.order.myorder.to_delivered],
        ['GM-2', that2.language.order.myorder.to_Receiving],
        ['GM-3', that2.language.order.order.state[3]],
        ['GM-4', that2.language.order.myorder.return_goods],
        ['GM-5', that2.language.order.order.state[3]],
        ['GM-12', that2.language.order.myorder.transaction],
        ['GM-7', that2.language.order.order.state[4]],
        ['GM-6', that2.language.order.order.state[4]],
        ['default', '']
    ])
    return status.get(code) || status.get('default')
}

const integral = (code) => {
    const status = new Map([
        ['integral-0', that2.language.order.myorder.to_paid],
        ['integral-1', that2.language.order.myorder.to_delivered],
        ['integral-2', that2.language.order.myorder.to_Receiving],
        ['integral-3', that2.language.order.order.state[3]],
        ['integral-4', that2.language.order.myorder.return_goods],
        ['integral-5', that2.language.order.order.state[3]],
        ['integral-12', that2.language.order.myorder.transaction],
        ['integral-7', that2.language.order.order.state[4]],
        ['integral-6', that2.language.order.order.state[4]],
        ['default', '']
    ])
    return status.get(code) || status.get('default')
}

const fx = (code) => {
    const status = new Map([
        ['FX-0', that2.language.order.myorder.to_paid],
        ['FX-1', that2.language.order.myorder.to_delivered],
        ['FX-2', that2.language.order.myorder.to_Receiving],
        ['FX-3', that2.language.order.myorder.to_evaluated],
        ['FX-4', that2.language.order.myorder.return_goods],
        ['FX-5', that2.language.order.order.state[3]],
        ['FX-6', that2.language.order.order.state[4]],
        ['FX-7', that2.language.order.order.state[4]],
        ['FX-12', that2.language.order.order.state[3]],
        ['default', '']
    ])
    return status.get(code) || status.get('default')
}

const kj = (code) => {
    const status = new Map([
        ['KJ-0', that2.language.order.myorder.to_paid],
        ['KJ-1', that2.language.order.myorder.to_delivered],
        ['KJ-2', that2.language.order.myorder.to_Receiving],
        ['KJ-3', that2.language.order.myorder.to_evaluated],
        ['KJ-4', that2.language.order.myorder.return_goods],
        ['KJ-5', that2.language.order.order.state[3]],
        ['KJ-6', that2.language.order.order.state[4]],
        ['KJ-7', that2.language.order.order.state[4]],
        ['KJ-12', that2.language.order.order.state[3]],
        ['default', '']
    ])
    return status.get(code) || status.get('default')
}

const ms = (code) => {
    const status = new Map([
        ['MS-0', that2.language.order.myorder.to_paid],
        ['MS-1', that2.language.order.myorder.to_delivered],
        ['MS-2', that2.language.order.myorder.to_Receiving],
        ['MS-3', that2.language.order.myorder.to_evaluated],
        ['MS-4', that2.language.order.myorder.return_goods],
        ['MS-5', that2.language.order.order.state[3]],
        ['MS-6', that2.language.order.order.state[4]],
        ['MS-7', that2.language.order.order.state[4]],
        ['MS-12', that2.language.order.order.state[3]],
        ['default', '']
    ])
    return status.get(code) || status.get('default')
}

const CODE = new Map([
    [/^pt-[0-99]/, pt],
    [/^GM-[0-99]/, p],
    [/^integral-[0-99]/, integral],
    [/^FX-[0-99]/, fx],
    [/^KJ-[0-99]/, kj],
    [/^MS-[0-99]/, ms]
])

const getLeftText = (code, isExtract,that) => {
    const leftText = [
        that.language.order.myorder.cancel_order,
        that.language.order.myorder.View_Logistics,
        that.language.order.myorder.delete_order,
        '',
        that.language.order.myorder.Group_details
    ]
    let status = null
    if (isExtract) {
        status = new Map([
            [0, leftText[0]],
            [1, leftText[3]],
            [2, leftText[1]],
            [3, leftText[1]],
            [4, leftText[3]],
            [5, leftText[1]],
            [6, leftText[2]],
            [7, leftText[2]],
            [12, leftText[3]],
            ['default', '']
        ])
    } else {
        status = new Map([
            [0, leftText[0]],
            [2, leftText[1]],
            [3, leftText[1]],
            [5, leftText[1]],
            [7, leftText[2]],
            [6, leftText[2]],
            [11, leftText[2]],
            [12, leftText[2]],
            [9, leftText[4]],
            [10, leftText[4]],
            [1, leftText[4]],
            ['default', '']
        ])
    }

    return status.get(parseInt(code)) || status.get('default')
}

const getRightText = (code, isExtract,that) => {
    const rightText = [
        that.language.order.myorder.payment,
        that.language.order.myorder.deliver_goods,
        that.language.order.myorder.Confirm_receipt,
        '',
        that.language.order.myorder.return_goods,
        '',
        that.language.order.myorder.Buy_again,
        that.language.order.myorder.Group_details,
        that.language.order.myorder.Invite_friends
    ]
    let status = null
    if (isExtract) {
        status = new Map([
            [0, rightText[0]],
            [1, rightText[1]],
            [2, rightText[2]],
            [3, rightText[3]],
            [4, rightText[4]],
            [5, rightText[5]],
            [6, rightText[6]],
            [7, rightText[6]],
            [12, rightText[6]],
            ['default', '']
        ])
    } else {
        status = new Map([
            [0, rightText[0]],
            [1, rightText[1]],
            [2, rightText[2]],
            [3, rightText[3]],
            [4, rightText[4]],
            [5, rightText[5] + '11'],
            [9, rightText[8]],
            [11, rightText[7]],
            ['default', '']
        ])
    }

    return status.get(parseInt(code)) || status.get('default')
}
export default function(list, type = '',that) {
    if (Array.isArray(list)) {
        for (let item of list) {
            let {
                ismch,
                shop_name,
                shop_id,
                otype,
                status,
                list
            } = item

            if (otype !== 'pt') {
                item['isExtract'] = true
            }

            const code = `${otype}-${status}`
            that2 = that
            for (let or of CODE) {
                if (or[0].test(code)) {
                    item['codetext'] = or[1](code)
                    break
                }
            }
            
            item['leftText'] = getLeftText(status, item.isExtract,that)
            item['rightText'] = getRightText(status, item.isExtract,that)
            item['delete'] = false;
            item['deleteText'] = '';
            // console.log(type);
            if (type === 'evaluete') {
                // 交易关闭订单
                if (status == 3 || status == 5 || status == 8) {
                    //console.log(that.language.order.delete_order);
                    item['delete'] = true;
                    item['deleteText'] = that.language.order.myorder.delete_order;
                }
            }

            // 198 判断提取码
        }

        // 商品数据
        function setComList(list) {

            let arr = []

            // 修复禅道 11340 问题用in 代替
            for (let key in list) {
                let item = list[key] 
                if (item.shop_name !== undefined) {

                    if (!arr.length) {
                        arr.push(item.shop_name)

                        continue
                    }
                    arr.push(item.shop_name)
                }
            }

            let result = repetitionIndex(arr)

            // 删除店铺名
            for (let item of result) {
                list[item].shop_name = ''
            }
        }

        // 获取重复店铺下标
        function repetitionIndex(arr) {
            let result = []

            for (let i = 0; i < arr.length; i++) {
                for (let j = 1; j < arr.length; j++) {
                    if (arr[i] === arr[j] && j !== i && j > i) {
                        result.push(j)
                    }
                }
            }

            return result
        }

        list.forEach(e => {
            setComList(e.list)
        })
    }

}
