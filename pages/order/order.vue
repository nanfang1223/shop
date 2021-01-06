<template>
    <div class="order">
        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>
        <heads :title="language.order.order.title" :returnR="returnR"></heads>
        <toload v-if="load"></toload>
        <div v-else style="position: relative;">
            <div class="order_zt " :style="order.status != 2 ? 'height:156upx' : ''" style="flex-direction: column;justify-content: center;background: #FF612A;">
                <p   style="color: #ffffff;"
                    v-text="
                        order.status == 0
                            ? language.order.order.state[0]
                            : order.status == 1
                            ? language.order.order.state[1]
                            : order.status == 2
                            ? language.order.order.state[2]
                            : order.status == 3 || order.status == 5 || order.status == 8
                            ? language.order.order.state[3]
                            : order.status == 7 || order.status == 6
                            ? language.order.order.state[4]
                            : order.status == 4
                            ? cancelGoods
                            : order.status == 12
                            ? language.order.order.state[5]
                            : order.status == 10 || order.status == 11
                            ? language.order.order.state[6]
                            : order.status == 9
                            ? language.order.order.state[7]
                            : ''
                    "
                ></p>
                <div class="order_wl" v-if="order_wl && order.status == 2">
                    <div>
                        <div v-if="logistics.length">
                            <p class="order_puls" v-if="logistics.length == 1 && logistics[0].list.length >= 1">{{language.order.order.logistics[0]}}: {{ logistics[0].list[0].context }}</p>
                            <p class="order_puls" v-if="logistics.length > 1">{{language.order.order.logistics[1]}}{{ logistics.length }}{{language.order.order.logistics[2]}}</p>
                            <p class="order_time" style="color: #ffffff;">{{ logistics[0].deliver_time }}</p>
                        </div>
                        <p class="order_p" v-if="!logistics">{{language.order.order.logistics[3]}}</p>
                    </div>
                </div>
                <div class="order_p" v-else>
                    <p
                        v-text="
                            order.status == 4 && cancelGoods != '审核中' && cancelGoods != '审核通过' && cancelGoods != '退货完成' && cancelGoods != '已退款'
                                ? language.order.order.Reasons+'：' + cancelGoodsReason
                                : order.status == 6 && order.list && order.list[0].re_type == 0 && order.hand_del == 1
                                ? language.order.order.order_cancel
                                : order.status == 6 && order.list && order.list[0].re_type == 0 && order.hand_del == 0
                                ? language.order.order.Order_timeout
                                : ''
                        "
                    ></p>
                </div>
                <p class="order_p" v-if="order_zt">{{ order_zt }}</p>
                <image class="orderbg" :src="order.status == 2 ? orderbg_dsh : orderbg_qt" mode="aspectFit"></image>
            </div>

            <div class="address_one">
                <span class="address_one_a">{{ order.name }}</span>
                <span class="address_one_b">{{ order.mobile }}</span>
                <p>{{ order.address }}</p>
            </div>

            <ul class="order_goods">
                <li class="order_goods_lis lis_one" v-for="items,indexs of order.stores">
                    <div class="order_one" @click="_goStore(items.shop_id)">
                        <img :src="storeImg" />
                        {{ items.shop_name }}
                        <img class="dd-boxa-img" :src="jiantou" />
                    </div>

                    <template v-for="(item, index) of order.list">
                        <template v-if="item.shop_id == items.shop_id">
                            <div class="order_two " :key="index">
                                <img :src="item.imgurl" />
                                <div class="order_two_a" @tap="_goods(item.p_id)">
                                    <p class="order_p_name ">{{ item.p_name }}</p>
                                    <p class="color_one">{{ item.size }}</p>
                                </div>
                                <div>
                                    <p v-if="order.status == 0 && order.otype == 'pt'">￥{{ order.product_total2 }}</p>
                                    <p v-else-if="order.otype == 'KJ'">￥{{ order.omsg.spz_price }}</p>
                                    <p v-else-if="order.otype == 'JP'">￥{{ order.jp.jp_price }}</p>
                                    <p v-else-if="order.otype == 'integral'" style="width: 180rpx;">
                                        <span v-if="item.p_price > 0">￥{{ item.p_price }}+</span>
                                        <img :src="integral_hei" class="integral_hei integral-img" style="padding-top: 4rpx;" />
                                        {{ order.allow }}
                                    </p>
                                    <p v-else>￥{{ item.p_price }}</p>
                                    <p class="color_two">x{{ item.num }}</p>
                                    <div
                                        class="retreat dfdsfds"
                                        v-if="
                                            (item.r_status == 2 || item.r_status == 1) &&
                                                item.is_distribution != 1 &&
                                                order.otype != 'integral' &&
                                                order.otype != 'JP' &&
                                                order.otype != 'PT' &&
                                                order.otype != 'MS' &&
                                                order.otype != 'vipzs' &&
                                                !kanjia &&
                                                order.self_lifting == 0 &&
                                                item.s_type == 0
                                        "
                                        @tap="_after($event, item.id, item.r_content, item.r_status)"
                                    >
                                        {{language.order.order.button[0]}}
                                    </div>
                                    <div class="retreat" v-if="item.s_type == 1" @click="navTo('/pagesA/afterSale/afterSale?searchtxt=' + message)">
                                        {{language.order.order.button[4]}}
                                    </div>
                                    <div class="order_goods_adiv">
                                        <div
                                            class="retreat order_goods_adiv_b"
                                            v-if="(item.comments_type == 1 || item.comments_type == 2 || item.r_status == 12) && item.r_status != 7 && order.otype != 'integral' && user_can_after && item.s_type == 0"
                                            @tap="_after($event, item.id, item.r_content, item.r_status, item.comments_type)"
                                        >
                                            {{language.order.order.button[1]}}
                                        </div>
                                        <!-- <div class="retreat" v-if="item.comments_type == 1 && !kanjia && order.otype != 'JP' && item.r_status != 7" @tap="comment(item.id, item.comments_type)">{{language.order.order.button[2]}}</div> -->
                                        <!-- <div class="retreat" v-if="item.comments_type == 2 && !kanjia && order.otype != 'JP' && item.r_status != 7" @tap="comment(item.id, item.comments_type)">{{language.order.order.button[3]}}</div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="complete complete_b" :key="index+'com'" v-if="item.r_status == 4 && item.r_type == 2 && display_t">
                                <div class="complete_qiandao">
                                    <img class="complete_img" :src="guanbi" @tap="_onafter" />
                                    <p>{{language.order.order.Reasons}}：{{ rr_content }}</p>
                                </div>
                            </div>
                            <div class="" :key="index+'com_1'"></div>

                            <div class="subtraction_list" :key="index+'sub'" v-if="subtraction_list">
                                <div class="order_two" >
                                    <img :src="subtraction_list.imgurl" />
                                    <div class="order_two_a" >
                                        <span style="color: red;">【{{language.order.order.gift}}】</span>

                                        {{ subtraction_list.product_title }}
                                    </div>
                                    <div>
                                        <p>￥0.00</p>
                                        <p class="color_two">x{{ subtraction_list.num }}</p>
                                    </div>
                                </div>
                                <div class=""></div>
                            </div>
                        </template>
                    </template>
                </li>
                <li class="order_last">
                    <div class="order_color">
                        <p>{{language.order.order.total}}</p>
                        <p v-if="order.status == 0 && order.otype == 'pt'">￥{{ order.product_total2 }}</p>
                        <p v-else-if="order.otype == 'integral'" class="order_color_a">
                            <span v-if="order.product_total > 0">￥{{ order.product_total + ' + ' }}</span>
                            <img :src="integral_hui" class="order_color_a_b integral-img" />
                            {{ order.allow }}
                        </p>
                        <p v-else-if="order.otype == 'KJ'">￥{{ order.omsg.spz_price }}</p>
                        <p v-else-if="order.otype == 'JP'">￥{{ order.jp.jp_price }}</p>
                        <p v-else>￥{{ order.product_total }}</p>
                    </div>
                    <template v-if="otype == 'GM' || otype == ''">
                        <div
                            class="order_color"
                            v-if="order.coupon_price>0"
                        >
                            <p>{{language.order.order.Discount[0]}}</p>
                            <p>
                                ￥{{ order.coupon_price }}
                            </p>
                        </div>
                        <div
                            v-if="order.discount_type"
                            class="order_color"
                        >
                            <p>{{order.discount_type}}{{language.order.order.Discount[1]}}</p>
                            <p>
                                ￥{{ order.preferential_amount }}
                            </p>
                        </div>
                        <div
                            v-if="order.grade_rate != 1 && order.grade_rate != '1.00' "
                            class="order_color"
                        >
                            <p>{{language.order.order.Discount[2]}}</p>
                            <p>
                                ￥{{ order.grade_rate_amount }}
                            </p>
                        </div>
                    </template>
                    <template v-else>
                        <div
                            class="order_color"
                            v-if="
                                is_distribution != 1 &&
                                    order.comm_discount == 1 &&
                                    otype != 'JP' &&
                                    otype != 'KJ' &&
                                    otype != 'pt' &&
                                    otype != 'MS' &&
                                    otype != 'vipzs' &&
                                    otype != 'VIP'
                            "
                        >
                            <p>{{language.order.order.Discount[3]}}</p>
                            <p>
                                ￥{{ order.coupon_price }}
                                <span v-if="isDiscount">{{ order.coupon_name }}</span>
                            </p>
                        </div>
                        <div class="order_color" v-if="order.comm_discount < 1 && order.comm_discount > 0 && otype != 'MS'">
                            <p>{{language.order.order.Discount[4]}}</p>
                            <p>{{ order.comm_discount * 10 }}{{language.order.order.fracture}}</p>
                        </div>
                        <div class="order_color" v-if="order.grade_rate < 1 && order.grade_rate > 0 && otype != 'vipzs' && otype != 'VIP'">
                            <p>{{language.order.order.Discount[5]}}</p>
                            <p>{{ order.grade_rate * 10 }}{{language.order.order.fracture}}</p>
                        </div>
                        <div
                            class="order_color"
                            v-if="
                                is_distribution != 1 &&
                                    order.comm_discount == 1 &&
                                    otype != 'KJ' &&
                                    otype != 'JP' &&
                                    otype != 'pt' &&
                                    otype != 'MS' &&
                                    otype != 'vipzs' &&
                                    otype != 'VIP'
                            "
                        >
                            <p>{{language.order.order.Discount[6]}}</p>
                            <p>{{ order.coupon_activity_name }}</p>
                        </div>
                    </template>
                    <div class="order_color">
                        <p>{{language.order.order.freight}}</p>
                        <p>￥{{ order.z_freight }}</p>
                    </div>
                    <div class="order_color" v-if="order.remarks">
                        <p>{{language.order.order.Order_notes}}</p>
                        <p class="order_color_b">{{ order.remarks }}</p>
                    </div>
                    <div>
                        <p class="margin-top-zj mt_0">{{language.order.order.order_total}}</p>
                        <p class="margin-top-zj mt_0" v-if="order.otype != 'integral'">￥{{ order.z_price }}</p>
                        <p class="margin-top-zj margin-top-flex mt_0" v-else>
                            <span v-if="order.z_price > 0">￥{{ order.z_price }}+</span>
                            <img :src="integral_hei" class="integral_hei integral-img" />
                            {{ order.allow }}
                        </p>
                    </div>
                </li>
                <li class="order_pay_li mt_0"></li>
                <li class="order_pay">
                    <p>{{language.order.order.Actual_payment}}</p>
                    <p class="z_price_bold" v-if="order.otype != 'integral'">￥{{ order.z_price }}</p>
                    <p class="z_price_color" v-else>
                        <span v-if="order.z_price > 0">￥{{ order.z_price }}+</span>
                        <img :src="integral_hong" class="integral_hei integral-img" />
                        {{ order.allow }}
                    </p>
                </li>
                <li class="order_pay_li_a"></li>
            </ul>
            <div class="order_xx">
                <div>
                    <p>{{language.order.order.order_number}}： {{ message }}</p>
                    <input id="order_no" disabled="disabled" class="order_no_opacity" type="hidden" v-model="message" />
                    <p>{{language.order.order.Order_time}}：{{ order.add_time }}</p>
                </div>
                <div class="order_border" type="button" @tap="onCopy()">{{language.order.order.copy}}</div>
            </div>
            <div style="height: 98rpx;">
                <div class="" v-if="order.status == 10 || order.status == 11"></div>
                <div class="order_foot" v-else-if="order.status == 9"><div class="commonBtn a1" @tap="_yaoqing(order.sNo)">{{language.order.myorder.Invite_friends}}</div></div>
                <div class="order_foot" v-else-if="order.self_lifting == '1' && (order.status == 2 || order.status == 3)">
                    <!-- 查看提取码 -->
                    <div v-if="order.sale_type != 2" class="commonBtn a2" @tap="_receiving(order.id)" v-text="order.status == 2 ? language.order.myorder.Extraction[0] : language.order.myorder.Extraction[1]"></div>
                </div>
                <div class="order_foot" v-else-if="flag">
                    <template v-if="(btnText1!='查看物流' && btnText1!='Logistics') || (logistics&&logistics.length>0)">
                        <div
                            class="commonBtn a2"
                            @tap="_submitOne($event, order.sNo, order.id, order.status)"
                            v-if="order.status != 12 ? (order.status == 1 || order.status == 6 ? false : true) : false"
                        >
                            {{ btnText1 }}
                        </div>
                        
                    </template>
                </div>
                <div class="order_foot" v-else :class="ishide == 1 ? 'hide' : ''">
					<!-- #ifdef MP-WEIXIN -->
					<div class="commonBtn a2 commonBtnstyle2" style='margin-right: 10rpx;'>
					    <button class="kf_button_css center" style="background: none;padding: 0;height: 50rpx;line-height: 50rpx;font-size: 24rpx;border: 0;display: inline-block;border-radius: 0;" open-type="contact">
					        {{language.goods.goodsDet.customer_service}}
					    </button>
					</div>
					<!-- #endif -->
					
					<!-- #ifdef MP-BAIDU -->
					<div class="commonBtn a2 commonBtnstyle2" style='margin-right: 10rpx;'>
					    <button class="center" open-type="contact" bindcontact="contactCB" style="background:none;padding:0px;height: 100%;">
					        {{language.goods.goodsDet.customer_service}}
					    </button>
					</div>
					<!-- #endif -->
					
					<!-- #ifndef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU -->
					<div class="commonBtn a2 commonBtnstyle2" style='margin-right: 10rpx;'>
					    {{language.goods.goodsDet.customer_service}}
					</div>
					<!-- #endif -->
                    <!-- <div class="commonBtn a2 commonBtnstyle2" style='margin-right: 10rpx;'>联系客服</div> -->
                    <div style="position: absolute;left: 30rpx;" v-if="(order.status == 2 || order.status == 1) && order.batch_del == 0 && order.list.length > 1 && order.self_lifting == 0" @tap="_shou">
                        {{language.order.order.button2[0]}}
                    </div>
                    <template v-if="btnText1!= language.order.order.leftText[2] || (logistics&&logistics.length>0)">
                        <div
                            class="commonBtn a2 a3"
                            @tap="_submitOne($event, order.sNo, order.id, order.status)"
                            v-if="order.status != 12 ? (order.status == 1 || order.status == 6 || order.status == 2 ? false : true) : false"
                        >
                            {{ btnText1 }}
                        </div>
                       <!-- <div
                            class="commonBtn a2 a3"
                            @tap="lookLogistics(order.sNo)"
                            v-if="order.status != 12 ? (order.status == 1 || order.status == 6 || order.status == 2 ? false : true) : false"
                        >
                            {{leftText[2]}}
                        </div> -->
                        <div
                            class="commonBtn a2 a3  dggagd"
							style="background: #ffffff;border:2rpx solid #FF612A; color: #FF612A;"
                            @tap="lookLogistics(order.sNo)"
                            v-if="order.status == 5 && btnText1 === language.order.order.leftText[1]"
                        >
                            {{leftText[2]}}
                        </div>
                    </template>
                   
                    <div class="commonBtn a2 commonBtnstyle2" @tap="_chakan(order.sNo)" v-if="order.status == 2 || order.status == 3">{{language.order.order.button2[1]}}</div>
                    <div class="commonBtn a2 commonBtnstyle3" @tap="_delOrder(order.sNo, order.id)" v-if="order.status == 6 || order.status==7">{{language.order.order.button2[2]}}</div>
                    <template v-if="showBtn">
                        
                        <div
                            v-if="
                            ((order.status != 1 && can_pay && order.status != 3 && order.status != 5 && order.status != 12 && order.status != 4) ||
                                (order.status == 6 && order.list && order.list[0].re_type == 0)) && order.sale_type != 1
                        "
                        >
                            <div class="commonBtnn a1" @tap="_submitTwo($event, order.id, order.status)" v-if="order.status != 12 && order.status != 1">{{ btnText2 }}</div>
                        </div>
                    </template>
                    

                    <div v-if="order.status == 1 && order.delivery_status == 0" @tap="txfh(order.id)" style="border-radius: 5rpx;">{{language.order.order.button2[3]}}</div>
                    <div v-else-if="order.status == 1 && order.delivery_status == 1" style="border-radius: 5rpx;background: #a9a9a9 ;">{{language.order.order.button2[3]}}</div>
                </div>
            </div>
        </div>
        <!-- 提取码弹出框 -->
        <div v-if="receiving_shop.flag" class="receiving_modal" @tap="receiving_stop">
            <div @tap.stop>
                <!-- 已完成 -->
                <img class="receiving_finish" v-if="receiving_check.status == 3" :src="finish2x" />
                <div class="receiving_content">
                    <div class="receiving_content_title">{{language.order.order.order_number}}: {{ receiving_check.sNo }}</div>
                    <div class="receiving_content_data" v-if="receiving_check.por_list.length == 1">
                        <div class="receiving_shop_img"><img :src="receiving_check.por_list[0].img" alt="" style="width:100%;height:100%;" /></div>
                        <div class="receiving_content_item">
                            <p>{{ receiving_check.por_list[0].product_title }}</p>
                            <div>
                                <p>
                                    <span class="receiving_rmb">￥</span>
                                    {{ receiving_check.por_list[0].p_price }}
                                </p>
                                <div class="receiving_size">
                                    <span class="receiving_size_item">{{ receiving_check.por_list[0].size }}</span>
                                    <span class="receiving_count">×{{ receiving_check.por_list[0].num }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <scroll-view scroll-x v-else>
                        <div class="receiving_content_data1" :style="'width:' + imgWidth">
                            <div class="receiving_shop_img" v-for="(item, index) in receiving_check.por_list" :key="index">
                                <p class="receiving_shop_num" v-if="item.num > 1">{{ item.num }}</p>
                                <img :src="item.img" alt="" style="width:100%;height:100%;" />
                            </div>
                        </div>
                    </scroll-view>
                    <div class="receiving_content_bottom">
                        {{language.order.order.common}}{{ receiving_check.num }}{{language.order.order.piece}}, {{language.order.order.total2}}
                        <p class="red bold">￥{{ receiving_check.z_price }}</p>
                    </div>
                </div>
                <div class="receiving_img"><img :src="receiving_check.extraction_code_img" alt="" :style="receiving_check.status == 3 ? 'opacity: 0.4' : ''" /></div>
                <div class="receiving_code" :style="receiving_check.status == 3 ? 'opacity: 0.6' : ''">
                    <span class="receiving_name">{{language.order.order.code}}:</span>
                    <span class="receiving_code_data">{{ receiving_check.extraction_code }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        _after,
        _axios,
        _pay_style,
        _payAxios,
        _payFail,
        _receiving,
        _submitOne,
        _submitTwo,
        back_click,
        changeValue,
        checkgroup,
        chooseWay,
        getOrderInfo,
        payThree,
        switchChange,
        txfh,
        weixinPay
    } from '../../static/js/order/order.js';
    // #ifdef H5
    import {copyText} from '@/common/util.js';
    // #endif
    import {mapMutations} from 'vuex';

    export default {
        data() {
            return {
                showPayWay1: false,
                showPayWay: false,
                returnR: '',
                password_status: '',
                integral_hui: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/integral_hui.png',
                integral_hei: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/integral_hei.png',
                integral_hong: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/integral.png',
                finish2x: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/finish2x.png',

                storeImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/store.png',
                guanbiImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/close2x.png',
                quan_hui: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/xuanzehui2x.png',
                quan_hei: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/xuanzehei2x.png',
                guanbi: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/qiandaoguanbi2x.png',
                jiantou: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/jiantou2x.png',
                pay_y: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/yuezhifu2x.png',
                pay_z: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/zhifubaozhifu2x.png',
                pay_w: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/weixinzhifu2x.png',
                orderbg_dsh: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/orderbg_dsh.png',
                orderbg_qt: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/orderbg_qt.png',
                notWallte: false,
                useWallte: false,
                iscan: '',
                focus: true,
                msg: '',
                remarks: '', //订单备注
                frist_show: true,
                ishide: 0, //是否隐藏底部栏 1隐藏 0否
                msgLength: 0,
                digits: ['', '', '', '', '', ''],
                pay: [
                    {
                        imgUrl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/yuezhifu2x.png',
                        name: '钱包余额'
                    },
                    {
                        imgUrl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/weixinzhifu2x.png',
                        name: '微信支付'
                    },
                    {
                        imgUrl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/zhifubaozhifu2x.png',
                        name: '支付宝'
                    }
                ], //支付方式
                pay_index: -1,
                can_pay: true,
                pay_style: '', //支付方式
                content: '是否抵扣余额？',
                enterless: true,
                z_price_: '', //最初默认总价
                title: '订单详情',
                orde_id: '', //订单ID
                showBtn: true,
                order: '',
                order_wl: '', //物流信息显示状态
                order_zt: '', //
                time_c: '', //待付款倒计时，时间差
                time_D: '', //待付款倒计时，天
                time_H: '', //待付款倒计时，小时
                time_M: '', //待付款倒计时，分
                time_s: '', //待付款倒计时，秒
                message: '',
                rightText: ['立即付款', '申请退货', '确认收货', '立即评价', '再次购买', '联系客服', '追加评价', '批量售后'],
                leftText: ['取消订单',  '查看物流', '删除订单'],
                leftText1: ['立即付款', '追加评价', '确认收货', '立即评价', '提醒发货', '退货', '再次购买', '拼团详情', '邀请好友'],
                stau_num: 0, //提醒发货
                timer: null,
                orderInfo: [], //订单信息
                count: '',
                load: true,
                user_can_open: '', //是否能够继续开团
                user_can_can: '', //是否能够继续参团
                user_can_after: '', //是否申请售后
                logistics: [],
                display_t: false,
                rr_content: '',
                showPay: false,
                showPay1: false,
                aliPayStatue: false,
                wxPayStatue: false,
                user_money: '',
                price: '',
                value: '',
                sNo: '',
                fastTap: true,
                otype: '', //订单类型
                endpay: '', //剩余支付
                pttype: '', //剩余支付
                // gstatus:'',
                ordermsg: '', //订单信息
                p_id: '', //产品id
                needpay: '',
                kanjia: false,
                code: '',
                myappid: '',
                firstFlag: true,
                head: true, //头部切换
                back1: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/back2x.png',
                r_status_: '',
                has_status: false,
                cancelGoods: '', //退货中的状态
                cancelGoodsReason: '', //退货原因
                btnText1: '',
                btnText2: '',
                flag: false,
                is_remove_order: false,
                oldheight: '',
                is_distribution: 0,
                is_end: false, //拼团活动是否结束（true结束 false未结束）
                axios_times: 0,

                receiving_check: {},
                receiving_shop: {
                    flag: false,
                    bottom: ''
                },
                subtraction_list: null,
                p_sNo: 0,
                group: 0 // 是否是拼团订单
            };
        },
        computed: {
            //是否显示折扣
            isDiscount: function() {
                if (this.order.coupon_name) {
                    if (this.order.coupon_name == '(0折)') {
                        return 0;
                    } else {
                        return 1;
                    }
                }
            },

            imgWidth() {
                if (this.receiving_check.por_list) {
                    if (this.receiving_check.por_list.length > 1) {
                        let width = this.receiving_check.por_list.length * 150;
                        return uni.upx2px(width) + 'px';
                    }
                }
            }
        },
        onLoad(option) {
            // console.log(option)
            this.receiving_shop.bottom = uni.upx2px(160);


            this.orde_id = option.order_id;
            this.showPay = option.showPay;
            this.group = option.group;
            if (option.returnR != undefined) {
                this.returnR = option.returnR;
            }
            if (option._store != undefined) {
                this.returnR = option._store;
            }
            // #ifdef H5
            var storage = window.localStorage;
            if (storage['_store'] == 'h5') {
                this.returnR = 'h5';
            }
            // #endif

            this.r_status_ = option.status;
            if (this.r_status_ != '') {
                this.has_status = true;
            }
            if (this.showPay) {
                this.showPay1 = true;
            }
            // console.log(this.returnR)
            // #ifdef MP-WEIXIN
            wx.getSystemInfo({
                success: res => {
                    this.receiving_shop.bottom -= res.statusBarHeight;
                }
            });
            // #endif
            // #ifndef MP-ALIPAY
            uni.onWindowResize(res => {
                if (this.oldheight == '' || !this.oldheight) {
                    this.oldheight = res.size.windowHeight;
                    this._hide();
                } else {
                    if (Number(this.oldheight) < Number(res.size.windowHeight)) {
                        this.oldheight = res.size.windowHeight;
                        this._show();
                    } else if (Number(this.oldheight) == Number(res.size.windowHeight)) {
                        this._show();
                    } else {
                        this._hide();
                    }
                }
            });
            // #endif
        },
        onShow() {
            this.isLogin(()=>{

            })
            this.leftText = this.language.order.order.leftText
            this.rightText = this.language.order.order.rightText
            _axios(this);
            // #ifdef H5
            var a = window.location.href;
            if (a.split('?').length > 1) {
                var str = a.split('?')[1];
                var arr = str.split('&');
                for (var i in arr) {
                    if (typeof arr[i] == 'String' || typeof arr[i] == 'string') {
                        if (arr[i].substring(0, 4) == 'code') {
                            str = arr[i].substring(5);
                            this.code = str;
                        }
                    }
                }
            }

            this.showPay1 = true;
            // #endif
        },
        beforeDestroy() {
            clearInterval(this.timer);
            clearInterval(this.setTime);

            let data = {
                module: 'app',
                app: 'up_remarks',
                action: 'order',
                remarks: this.remarks,
                sNo: this.sNo
            };
            this.$req.post({ data }).then(res => {});

            this.$store.state.order_id = '';
            var order_list = {
                sNo: this.sNo,
                total: this.z_price_,
                order_id: this.orde_id
            };
            order_list = JSON.stringify(order_list);

            if (this.otype == '' && this.order.status == 0 && !this.is_remove_order) {
                //离开界面的时候去生成订单
                this.$req
                    .post({
                        data: {
                            module: 'app',
                            app: 'leave_Settlement',
                            action: 'order',

                            order_list: order_list,
                            price: this.value
                        }
                    })
                    .then(res => {});
            }
        },
        methods: {
            changeLoginStatus(){
                _axios(this);
            },
            _goStore(shop_id) {
                uni.navigateTo({
                    url: '/pagesA/store/store?shop_id=' + shop_id
                });
            },
            _hide() {
                this.ishide = 1;
            },
            _show() {
                this.ishide = 0;
                if (this.value.length == 0) {
                    this.value = 0;
                }
            },
            _back() {
                uni.switchTab({
                    url: '/pages/order/myOrder'
                });
            },
            _yaoqing(sNo) {
                var me = this;
                var path = '/pagesA/group/group_end?returnR=1&sNo=' + sNo + '&ptcode=' + me.ptcode;
                uni.navigateTo({
                    url: path
                });
            },
            //提醒发货
            txfh(id) {
                txfh(id, this);
            },
            _usyue: function() {
                if (this.otype == 'pt') {
                    this.needpay = parseFloat(this.endpay - this.value).toFixed(2);
                } else {
                    this.needpay = parseFloat(this.order.z_price - this.value).toFixed(2);
                }
            },
            _showPayWay() {
                this.showPayWay1 = true;
                setTimeout(() => {
                    this.showPayWay = false;
                    this.showPayWay1 = false;
                }, 500);
            },
            focust() {
                this.focus = true;
            },
            //支付密码框取消，开始余额支付
            _payAxios(payNum) {
                _payAxios(payNum, this);
            },
            payThree() {
                payThree(this);
            },
            //是否已经选择支付方式
            _gotPayType() {
                var path = '/pages/order/order_payment?order_id=' + this.orde_id + '&showPay=true&ordertype=' + this.order.otype;
                // #ifdef H5
                path = '/pages/order/order_payment?order_id=' + this.orde_id + '&showPay=true&_store=h5&ordertype=' + this.order.otype;
                // #endif
                uni.navigateTo({
                    url: path
                });
            },
            async _pay_style() {
                _pay_style(this);
            },
            checkgroup() {
                //验证是否可以进行参团
                checkgroup(this);
            },
            chooseWay(way) {
                chooseWay(way, this);
            },
            getOrderInfo(type) {
                return getOrderInfo(type, this);
            },
            weixinPay() {
                weixinPay(this);
            },
            _payFail() {
                _payFail(this);
            },
            async pay_wx(type) {
                if (!type) {
                    return;
                }
                let orderInfo = null;
                let p = new Promise(laikeOk => {
                    orderInfo = this.getOrderInfo(type);

                    laikeOk(orderInfo);
                });
                p.then(orderInfo => {
                    var providerStr = '';
                    if (type == 'wx') {
                        providerStr = 'wxpay';
                    } else if (type == 'ali') {
                        providerStr = 'alipay';
                    }
                    var str = JSON.stringify(orderInfo.data);
                    uni.hideLoading();
                    // #ifdef H5
                    this.laikepay.weixin_jsapipay(this, type, orderInfo);
                    // #endif
                    // #ifdef APP-PLUS
                    this.laikepay.app_pay(this, providerStr, orderInfo);
                    // #endif
                    // #ifdef MP-ALIPAY
                    this.laikepay.alipay_minipay(this, orderInfo);
                    // #endif
                });
            },
            switchChange(e) {
                switchChange(e, this);
            },
            _navigateTo(url) {
                uni.navigateTo({
                    url
                });
            },
            ...mapMutations({
                cart_id: 'SET_CART_ID',
                order_id: 'SET_ORDER_ID',
                address_id: 'SET_ADDRESS_ID',
                pro_id: 'SET_PRO_ID'
            }),
            _shou() {
                uni.navigateTo({
                    url: 'batchOrder?orde_id=' + this.orde_id
                });
            },
            
            onCopy: function() {
                var me = this
                // #ifndef H5
                uni.setClipboardData({
                    data: this.message,
                    success: function(res) {
                        uni.showToast({
                            title: me.language.order.order.copy_success,
                            duration: 1500,
                            icon: 'none'
                        });
                    }
                });
                // #endif
                // #ifdef H5
                copyText('', this.message);
                // #endif
            },
            comment(order_details_id, comments_type) {
                if (comments_type == 1) {
                    uni.navigateTo({
                        url: '/pages/evaluate/evaluating?order_details_id=' + order_details_id + '&num=all'
                    });
                } else {
                    uni.navigateTo({
                        url: '/pages/evaluate/evaluating?order_details_id=' + order_details_id + '&add=true&num=all'
                    });
                }
            },
            _after(e, id, content, r_status, comments_type) {
                _after(e, id, content, r_status, this, comments_type);
            },
            _onafter() {
                this.display_t = false;
            },
            _goods(id) {
                if (this.order.otype == 'integral') {
                    uni.navigateTo({
                        url: '/pagesB/integral/integral_detail?pro_id=' + this.p_sNo
                    })
                    return
                }
                uni.navigateTo({
                    url: '/pages/goods/goodsDetailed?pro_id=' + id
                });
            },
            // 关闭提取码弹框
            receiving_stop() {
                this.receiving_shop.flag = false;
            },
            // 查看提取码
            _receiving() {
                _receiving(this);
            },
            lookLogistics (sNo) {
                let data = {
                    module: 'app',
                    action: 'order',
                    app: 'logistics',
                    id: sNo,
                    o_source: 1,
                    type: ''
                };
                this.$req
                    .post({ data })
                    .then(res => {
                        uni.hideLoading();
                        if (res.code == 200) {
                            let data = res.res;
                            if (data.length > 1) {
                                uni.navigateTo({
                                    url: '/pagesB/expressage/expressage?sNo=' + sNo
                                });
                            } else {
                                uni.navigateTo({
                                    url: '/pages/expressage/expressage?list=' + JSON.stringify(data[0]) + '&sNo=' + sNo
                                });
                            }
                        } else {
                            uni.showToast({
                                title: res.message,
                                duration: 1500,
                                icon: 'none'
                            });
                        }
                    })
                    .catch(error => {
                        uni.showToast({
                            title: '数据加载失败！',
                            duration: 2000,
                            icon: 'none'
                        });
                    });
            },
            _submitOne(event, sNo, order_id, status) {
                _submitOne(event, sNo, order_id, status, this);
            },
            _submitTwo(event, order_id, status) {
                _submitTwo(event, order_id, status, this);
            },
            back_click(id) {
                back_click(id, this);
            },

            changeValue(newValue, oldValue) {
                changeValue(newValue, oldValue, this);
            },
            _chakan(sNo) {
                if (!this.logistics) {
                    this.lookLogistics(sNo)
                    return false;
                    
                }
                if (this.logistics.length == 1) {
                    uni.navigateTo({
                        url: '/pages/expressage/expressage?list=' + JSON.stringify(this.logistics[0]) + '&sNo=' + sNo
                    });
                } else if (this.logistics.length > 1) {
                    uni.navigateTo({
                        url: '/pagesB/expressage/expressage?sNo=' + sNo
                    });
                }
            },
            _delOrder(sNo, order_id) {
                var data = {
                    module: 'app',
                    action: 'order',
                    order_id: order_id,

                    app: 'del_order'
                };

                this.$req.post({ data }).then(res => {
                    let { code, message } = res;
                    if (code == 200) {
                        uni.showToast({
                            title: this.language.order.order.delete_success,
                            duration: 1000,
                            icon: 'none'
                        });
                        uni.navigateBack({
                            delta: 1
                        });
                    } else {
                        uni.showToast({
                            title: message,
                            duration: 1000,
                            icon: 'none'
                        });
                    }
                });
            }
        },
        watch: {
            time_c(newvalue, oldvalue) {
                if (newvalue == 0) {
                    _axios(me);
                }
            },
            value: function(newValue, oldValue) {
                this.changeValue(newValue, oldValue);
            },
            msg(curVal) {
                this.msgLength = curVal.length;
            }
        }
    };
</script>

<style lang="less" scoped>
    @import url('../../static/css/order/order.less');

    .order_one {
        justify-content: flex-start;
        padding: 0 !important;
        font-size: 28rpx;
        color: #666666;
        border-bottom: 1px solid rgb(238, 238, 238);
    }

    .order_one img:first-child {
        width: 33rpx;
        height: 30rpx;
        margin-right: 11rpx;
    }

    .order_one img:last-child {
        width: 15rpx;
        height: 27rpx;
        margin-left: 16rpx;
    }

    .order_two {
        padding-bottom: 0 !important;
    }

    .color_two {
        margin: 0;
    }

    .order_foot > div,
    .retreat {
        // .outBtn();
		color: #FF612A;
		border: 2rpx solid #FF9A54;
        border-radius: 6rpx;
    }

    .order_zt {
        position: relative;
        overflow: hidden;
    }

    .orderbg {
        position: absolute;
        right: -120rpx;
        top: 0;
        height: 100%;
    }

    .mt_0 {
        margin-top: 0 !important;
    }

    .order_time {
        font-size: 20rpx;
        color: #bbbbbb;
        margin-top: 16rpx;
    }

    .color_one{
        max-width: 260rpx;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
	button::after {
		border: none !important;
	}
</style>
