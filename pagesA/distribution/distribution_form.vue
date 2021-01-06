<!-- 佣金提现的form表单 -->
<template>
    <div class='box'>

        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>

        <div class="yh-title">
            <heads :title='language.distribution_form.title'></heads>
        </div>

        <ul class="message" :style="{ top:halfWidth }">

            <li style="border: none;height: 300rpx;align-items: baseline;">
                <view style="margin-top: 49rpx;width: 100%;">
                    <text style="color: #020202;font-size: 28rpx;">{{language.distribution_form.withdrawalAmount}}</text>

                    <view class="" style="display: flex;margin-top: 49rpx;height: 35rpx;align-items: center;">
                        <text style="font-size: 48rpx;color: #020202;">¥</text>
                        <input placeholder-style="color: #b8b8b8;" type="number" :placeholder="pshd" v-model="put_mon" @blur="_money" id="put_mon" placeholder-class="put_mons" />
                        <text @tap="_put()" style="text-align: end;margin-left: 30rpx;">{{language.distribution_form.allWithdrawal}}</text>
                    </view>

                    <view
                        style="height: 70rpx;margin-top: 60rpx;align-items: center;border-top: 2rpx solid #E6E6E6;border-top: 1px solid rgb(230, 230, 230);display: flex;color: #999999;font-size: 22rpx;"
                    >
                        <image :src="warnIng" style="width: 24rpx;height: 24rpx;margin-right: 9rpx;"></image>
                        {{language.distribution_form.minimum}}¥{{min_amount}}{{language.distribution_form.maximum}}¥{{max_amount}}{{language.distribution_form.withdrawalFee}}{{cash_charge}}%
                    </view>
                </view>
            </li>

            <li>
                <view class="li_title">{{language.distribution_form.cardInformation}}</view>
            </li>

            <li>
                <span class="left_text">{{language.distribution_form.name}}&nbsp;&nbsp;</span>
                <input placeholder-style="color: #b8b8b8;" type="text" :placeholder="language.distribution_form.namePlaceholder" v-model="user_name"
                       @blur="_usname()"/>
            </li>

            <li>
                <span class="left_text">{{language.distribution_form.bankNumber}}</span>
                <input placeholder-style="color: #b8b8b8;" type="text" :placeholder="language.distribution_form.bankNumberPlaceholder" v-model="bank_number"
                       @input="_bank()"
                       @blur='_bank_p'/>
            </li>

            <li>
                <span class="left_text">{{language.distribution_form.bank}}</span>
                <input placeholder-style="color: #b8b8b8;" type="text" :placeholder="language.distribution_form.bankPlaceholer" v-model="bank_name"/>
            </li>

            <li>
                <span class="left_text">{{language.distribution_form.branch}}</span>
                <input placeholder-style="color: #b8b8b8;" type="text" :placeholder="language.distribution_form.branchPlaceholder" v-model="branch"/>
            </li>

            <li>
                <span class="left_text">{{language.distribution_form.tel}}&nbsp;&nbsp;</span>
                <input type="number" :placeholder="language.distribution_form.telPlaceholder" v-model="phone" disabled="true" readonly="readonly"/>
            </li>

            <li class="flex yh-flex" style=''>
                <span class="left_text">{{language.distribution_form.telcode}}&nbsp;&nbsp;</span>
                <input placeholder-style="color: #b8b8b8;" class='input' :class='{marginleft:display}' type="number"
                       :placeholder="language.distribution_form.telcodePlaceholder"
                       v-model="input_code">
                <span class='color yh-color' v-if='display' @tap="_verif">{{language.distribution_form.getcode}}</span>
                <span class='active yh-active' v-if='!display'>
                    <template v-if="languageType == ''">
                        {{count}}s {{language.distribution_form.countdown}}
                    </template>
					<template v-else>
					    {{language.distribution_form.countdown}} {{count}}s
					</template>
				</span>
            </li>

        </ul>
        <div class='setup-buttom' style="background: #FF612A;" @tap="_sumber" :style='{top:halfWidth1}'>{{language.distribution_form.complete}}</div>

    </div>
</template>

<script>
    import {
        telephone
    } from '../../common/landing.js'
    import {
        mapMutations
    } from 'vuex'
    import {
        lkt_money,
        lkt_bank,
        lkt_bank_p,
        lkt_getcode,
        lkt_time,
        lkt_submit
    } from '../../static/js/distribution/distribution_center.js'

    export default {
        data () {
            return {
                type: '',
                title: '佣金提现',
                put_mon: '', 								// 提现金额
                bank_number: '',
                bank_name: '',
                user_name: '',
                branch: '', 								// 支行
                phone: '',
                input_code: '',
                display: true,
                count: '',
                timer: '',
                code: '',
                one_code: '', 							// 手机号码格式正确返回值
                max_amount: '', 						// 提现的最大金额
                min_amount: '', 						// 提现的最小金额
                bank_information: '', 			// 用户银行卡历史信息
                mobile: '',
                oldPhone: '',
                
                allComplete: false,
                fastTap: true,
                shop_id: '',
                cash_charge: 0, 						// 手续费
                warnIng: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/warnIng.png',
                pshd: '',
                total: 0,  //可提现金额
            }
        },
        onLoad (option) {
            let me = this
            this.total = option.total?option.total:0
            me.type = option.type
        },
        onShow(){
            let me = this
            
            me.pshd = this.language.distribution_form.withdrawal_placeholder + me.total + this.language.distribution_form.yuan;
            
            this.isLogin(()=>{

            	me.shop_id = uni.getStorageSync('shop_id') ? uni.getStorageSync('shop_id') : me.$store.state.shop_id
            	if (me.access_id) {
            	    me._axios()
            	}
            })
        },
        computed: {
            halfWidth1: function () {
                var gru = uni.getStorageSync('data_height') ? uni.getStorageSync('data_height') : this.$store.state.data_height
                var heigh = parseInt(gru)
                var he = heigh * 2

                // #ifdef APP-PLUS
                he = 70 + heigh * 2
                // #endif

                // #ifndef APP-PLUS
                he = 70
                // #endif

                return uni.upx2px(he) + 'px'
            },
        },
        methods: {
            /**
             *
             * */
            changeLoginStatus () {
                this._axios()
            },
            /**
             *
             * */
            _axios () {
                let me = this
                let data = {
                    module: 'app',
                    action: 'commcenter',
                    app: 'into_withdrawals',
                }
                this.$req.post({ data }).then(res => {

                    if (res.code == 200) {
                        let {
                            data: {
                                bank_information,
                                max_amount,
                                min_amount,
                                mobile,
                                cash_charge
                            }
                        } = res

                        me.max_amount = max_amount
                        me.min_amount = min_amount
                        me.cash_charge = cash_charge * 100
                        me.bank_information = bank_information
                        me.mobile = mobile
                        me.bank_number = me.bank_information.Bank_card_number ? me.bank_information.Bank_card_number : ''
                        me.bank_name = me.bank_information.Bank_name ? me.bank_information.Bank_name : ''
                        me.branch = me.bank_information.branch ? me.bank_information.branch : ''
                        me.user_name = me.bank_information.Cardholder ? me.bank_information.Cardholder : ''
                        me.phone = me.mobile ? me.mobile : ''
                        if(me.phone == ''){
                            uni.showModal({
                                title: me.language.showModal.hint1,
                                content: me.language.showModal.noTel,
								confirmText: me.language.showModal.confirm,
								cancelText: me.language.showModal.cancel,
                                showCancel: false,
                                success: function (res) {
                                    if (res.confirm) {
                                        uni.navigateTo({
                                            url: '../../pagesB/setUp/changePhone?withdrawalNoPhone=true'
                                        })
                                    } 
                                }
                            })
                        }

                    } else {

                        uni.showToast({
                            title: res.message,
                            duration: 1500,
                            icon: 'none'
                        })

                    }
                })
            },
            /**
             * 全部提现
             * */
            _put () {
                var mon = Number(this.max_amount)
                var monr = Number(this.put_mon)
                var monrys = Number(this.min_amount)
                if (mon < monrys) {
                    uni.showToast({
                        title: this.language.distribution_form.withdrawalTips,
                        duration: 1000,
                        icon: 'none'
                    })
                } else {
                    this.put_mon = mon.toFixed(2)
                }
            },
            /**
             * 金额格式判断
             * */
            _money () {
                lkt_money(this)
            },
            /**
             * 银行卡匹配
             * */
            _bank () {
                lkt_bank(this)
            },
            /**
             *
             * */
            _bank_p () {
                lkt_bank_p(this)
            },
            /**
             * 持卡人验证
             * */
            _usname () {
                var self = this
                var name = /^[\u4e00-\u9fa5]{2,8}$/
                if (!name.test(self.user_name)) {
                    self.user_name = ''
                    uni.showToast({
                        title: this.language.distribution_form.nameTips,
                        duration: 1000,
                        icon: 'none'
                    })
                }
            },
            /**
             * 验证码发送1分钟倒计时
             * */
            _verif () {
                lkt_getcode(this)
            },
            /**
             * 1分钟倒计时
             * */
            _time () {
                lkt_time(this)
            },
            /**
             * 手机号码正则验证
             * */
            _telephone (value) {
                this.one_code = telephone(value)
            },
            /**
             * 提交
             * */
            _sumber () {
                lkt_submit(this)
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../static/css/distribution/distribution_form.less");
</style>
