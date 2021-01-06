<template>
    <div class="box">
        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>
        <heads :title="language.putForward.title"></heads>
        <ul class="message">
            <li style="border: none;height: 300rpx;align-items: baseline;">
                <view style="margin-top: 49rpx;width: 100%;">
                    <text style="color: #020202;font-size: 28rpx;">{{language.putForward.withdrawal}}</text>

                    <view class="" style="display: flex;margin-top: 49rpx;height: 35rpx;align-items: center;">
                        <text style="font-size: 48rpx;color: #020202;">¥</text>
                        <input placeholder-style="color: #b8b8b8;" type="number" :placeholder="pshd" v-model="put_mon" @blur="_money" id="put_mon" placeholder-class="put_mons" />
                        <text @tap="_put()" style="text-align: end;">{{language.putForward.allBtn}}</text>
                    </view>

                    <view
                        style="height: 70rpx;margin-top: 60rpx;align-items: center;border-top: 2rpx solid #E6E6E6;border-top: 1px solid rgb(230, 230, 230);display: flex;color: #999999;font-size: 22rpx;"
                    >
                        <image :src="warnIng" style="width: 24rpx;height: 24rpx;margin-right: 9rpx;"></image>
                        {{language.putForward.minWithdrawal}}¥{{ min_amount }}，{{language.putForward.poundage}}{{ service_charge }}
                    </view>
                </view>
            </li>

            <view class="hr"></view>
            <li><text style="height: 90rpx;font-size: 30rpx;color: #020202;line-height:88rpx;">{{language.putForward.information}}</text></li>
            <li>
                <span>{{language.putForward.number}}</span>
                <input placeholder-style="color: #b8b8b8;" type="text" :placeholder="language.putForward.number_placeholder" v-model="bank_number" @input="_bank()" @blur="_bank_p" />
            </li>
            <li>
                <span>{{language.putForward.bank}}</span>
                <input placeholder-style="color: #b8b8b8;" type="text" :placeholder="language.putForward.bank_placeholder" v-model="bank_name" @blur="_bank_p" />
            </li>
            <li>
                <span>{{language.putForward.branch}}</span>
                <input placeholder-style="color: #b8b8b8;" type="text" :placeholder="language.putForward.branch_placeholder" v-model="branch"/>
            </li>
            <li>
                <span>{{language.putForward.cardholder}}&nbsp;&nbsp;</span>
                <input placeholder-style="color: #b8b8b8;" type="text" :placeholder="language.putForward.cardholder_placeholder" v-model="user_name" @blur="_usname()" />
            </li>
            <li>
                <span>{{language.putForward.phone}}&nbsp;&nbsp;</span>
                <input type="number" :placeholder="language.putForward.phone_placeholder" v-model="phone" disabled="true" readonly="readonly" />
            </li>
            <li class="yz_li">
                <span>{{language.putForward.verification}}&nbsp;&nbsp;</span>
                <input
                    placeholder-style="color: #b8b8b8;"
                    class="input"
                    :class="{ marginleft: display }"
                    type="number"
                    :placeholder="language.putForward.verification_placeholder"
                    v-model="input_code"
                    style="flex: 1;"
                />

                <span class="color yz_span" v-if="display" @tap="_verif">{{language.putForward.getCode}}</span>
                <span class="active" v-if="!display">
                    <template v-if="is_en == 'en'">
                        {{language.putForward.countdown}} {{ count }}s
                    </template>
                    <template v-else>
                        {{ count }}s{{language.putForward.countdown}}
                    </template>
                
                </span>
            </li>
        </ul>
        <div class="setup-buttom" style="background: #FF612A;" @tap="_sumber">{{language.putForward.bottomBtn}}</div>
    </div>
</template>

<script>
import { telephone } from '../../common/landing.js';
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            pshd: '',
            type: '',
            title: '提现申请',
            put_mon: '', //提现金额
            bank_number: '',
            bank_name: '',
            user_name: '',
            phone: '',
            input_code: '',
            display: true,
            count: '',
            timer: '',
            code: '',
            one_code: '', //手机号码格式正确返回值
            max_amount: '', //提现的最大金额
            min_amount: '', //提现的最小金额
            bank_information: '', //用户银行卡历史信息
            mobile: '',
            oldPhone: '',
            
            allComplete: false,
            fastTap: true,
            shop_id: '',
            money: '',
            warnIng: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/warnIng.png',

            service_charge: '' ,//提现手续费
            id: '',
            is_en: '',
            back_type: '', // 1 从提现详情重新申请过来的
            branch: ''
        };
    },
    onShow(){
        if(uni.getStorageSync('language')){
            this.is_en = uni.getStorageSync('language')
        }
        
    },
    onLoad(option) {
        
        this.shop_id = uni.getStorageSync('shop_id') ? uni.getStorageSync('shop_id') : this.$store.state.shop_id;
        this.type = option.type;
        if(option.id){
            this.id = option.id;
        }
        this.back_type = option.back_type
        this._axios();
    },
    methods: {
        changeLoginStatus() {
            this._axios();
        },
        _axios() {
            var data = {
                module: 'app',
                action: 'user',
                app: 'into_withdrawals',
                id:this.id
            };
            if (this.type == 'store') {
                data.shop_id = this.$store.state.shop_id;
            }

            this.$req.post({ data }).then(res => {
                if (res.code == 200) {
                    let {
                        data: { bank_information, pshd, max_amount, min_amount, money, mobile, service_charge, total }
                    } = res;
                    this.max_amount = max_amount;
                    this.min_amount = min_amount;
                    this.bank_information = bank_information;
                    this.mobile = mobile;
                    this.bank_number = this.bank_information.Bank_card_number ? this.bank_information.Bank_card_number : '';
                    this.bank_name = this.bank_information.Bank_name ? this.bank_information.Bank_name : '';
                    this.user_name = this.bank_information.Cardholder ? this.bank_information.Cardholder : '';
                    this.phone = this.mobile ? this.mobile : '';

                    if (this.type == 'store') {
                        this.pshd = this.language.putForward.money_placeholder + (total?total:0);
                    }else {
                        this.pshd = this.language.putForward.money_placeholder + (money?money:0);
                    }
                    
                    this.money = total || money;

                    this.service_charge = service_charge;
                } else if (res.code == 115) {
                    this.isLogin(()=>{})
                } else {
                    uni.showToast({
                        title: res.message,
                        duration: 1500,
                        icon: 'none'
                    });
                }
            });
        },
        back() {
            this.myforward('');
            this.mybacks('');
            uni.navigateBack({
                delta: 1
            });
        },
        //全部提现
        _put() {
            var mon = Number(this.max_amount);
            var monr = Number(this.put_mon);
            
            // console.log(this.max_amount)
            // console.log(this.put_mon)
            // console.log(this.money)

            if (this.money == 0) {
                uni.showToast({
                    title: this.language.putForward.noWithdraw,
                    duration: 1000,
                    icon: 'none'
                });
            } else if (this.money > this.max_amount) {
                this.put_mon = this.max_amount;
            } else {
                this.put_mon = this.money;
            }
        },

        //金额格式判断
        _money() {
            var mon = Number(this.put_mon);
            var monrys = Number(this.min_amount);

            if (mon < monrys) {
                mon = 0;
                this.put_mon = mon.toFixed(2);
                uni.showToast({
                    title: `${this.language.putForward.moneyTips[0]} ${monrys} ${this.language.putForward.moneyTips[1]}`,
                    duration: 1000,
                    icon: 'none'
                });
            } else if (mon > this.max_amount) {
                mon = 0;
                this.put_mon = mon.toFixed(2);
                uni.showToast({
                    title: this.language.putForward.moneyTips[2],
                    duration: 1000,
                    icon: 'none'
                });
            }
            this.put_mon = mon.toFixed(2);
        },
        //银行卡匹配
        _bank() {
            var pattern = /^([1-9]{1})(\d{5})$/;
            if (pattern.test(this.bank_number)) {
                var data = {
                    module: 'app',
                    action: 'user',
                    app: 'Verification',
                    Bank_name: this.bank_name,
                    Bank_card_number: this.bank_number
                };

                this.$req.post({ data }).then(res => {
                    let { code, message } = res;

                    if (code != 200) {
                        this.bank_number = '';
                        uni.showToast({
                            title: this.language.putForward.bankTip,
                            duration: 1000,
                            icon: 'none'
                        });
                    } else {
                        this.bank_name = res.Bank_name;
                    }
                });
            }
            if (this.bank_number == '') {
                this.bank_name = '';
            }
        },
        // 银行卡号输入完毕
        _bank_p() {
            var patt = /^[1-9]{1}\d{15}|\d{18}$/;
            if (!patt.test(Number.parseInt(this.bank_number))) {
                uni.showToast({
                    title: this.language.putForward.bankpTips[0],
                    duration: 1000,
                    icon: 'none'
                });
            } else {
                if (this.bank_name) {
                    var data = {
                        module: 'app',
                        action: 'user',
                        app: 'Verification',
                        Bank_name: this.bank_name,
                        Bank_card_number: this.bank_number
                    };

                    this.$req.post({ data }).then(res => {
                        let { code, message } = res;

                        if (code != 200) {
                            this.bank_number = '';
                            uni.showToast({
                                title: this.language.putForward.bankpTips[1],
                                duration: 1000,
                                icon: 'none'
                            });
                        } else {
                            this.bank_name = res.Bank_name;
                        }
                    });
                }
            }
        },
        //持卡人验证
        _usname() {
            var name = /^[\u4e00-\u9fa5]{2,8}$/;
            if (!name.test(this.user_name)) {
                this.user_name = '';
                uni.showToast({
                    title: this.language.putForward.nameTip,
                    duration: 1000,
                    icon: 'none'
                });
            }
        },
        /*   验证码发送1分钟倒计时     */
        _verif() {
            if (!this.fastTap) {
                return;
            }
            this.fastTap = false;
            this._telephone(this.phone);
            var me = this;
            var data = {
                module: 'app',
                action: 'user',
                app: 'secret_key',
                phone: this.phone,
                message_type: 0, // 短信类型 0.验证码 1.短信通知
                message_type1: 6 // 短信类别 6.提现
            };
            if (this.phone) {
                this.$req
                    .post({ data })
                    .then(res => {
                        this.fastTap = true;
                        let { code, message } = res;
                        if (code != 200) {
                            uni.showToast({
                                title: message,
                                duration: 1000,
                                icon: 'none'
                            });
                        } else {
                            this._time();
                            this.one_code == 1;
                            this.oldPhone = this.phone;
                        }
                    })
                    .catch(error => {
                        this.fastTap = true;
                    });
            } else {
                this.fastTap = true;
                uni.showToast({
                    title: this.language.putForward.telTip,
                    duration: 1000,
                    icon: 'none'
                });
            }
        },
        //1分钟倒计时
        _time() {
            const TIME_COUNT = 60;
            if (!this.timer) {
                this.display = false;
                this.count = TIME_COUNT;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--;
                    } else {
                        this.display = true;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000);
            }
        },
        //手机号码正则验证
        _telephone(value) {
            this.one_code = telephone(value);
        },
        //提交
        _sumber() {
            if (!this.fastTap) {
                return;
            }
            this.fastTap = false;

            var patt = /^([1-9]{1})(\d{15}|\d{18})$/;

            if (this.put_mon && this.bank_number && this.user_name && this.one_code == 1 && this.input_code.length == 6 && this.bank_name && this.oldPhone == this.phone) {
                var data = {
                    module: 'app',
                    action: 'user',
                    app: 'withdrawals',
                    
                    amoney: this.put_mon,
                    Bank_name: this.bank_name,
                    Bank_card_number: this.bank_number,
                    Cardholder: this.user_name,
                    mobile: this.phone,
                    keyCode: this.input_code,
                    id:this.id,
                    branch: this.branch
                };
                if (this.type == 'store') {
                    data.shop_id = this.shop_id;
                }

                this.$req
                    .post({ data })
                    .then(res => {
                        if (res.code == 200) {
                            uni.showToast({
                                title: this.language.putForward.tixianTip,
                                duration: 1000,
                                icon: 'none'
                            });
                            setTimeout(() => {
                                this.fastTap = true;
                                
                                let url = 'rechargeSuccess?id_name=' + this.bank_name + '&id_catd=' + this.bank_number + '&id_monsy=' + this.put_mon + '&store=true';
                                if (this.back_type) {
                                    url += '&back_type=' + this.back_type
                                }
                                
                                uni.redirectTo({
                                    url: url
                                });
                            }, 1000);
                        } else {
                            this.fastTap = true;
                            uni.showToast({
                                title: res.message,
                                duration: 1000,
                                icon: 'none'
                            });
                        }
                    })
                    .catch(error => {
                        this.fastTap = true;
                    });
            } else if (this.one_code != 1) {
                uni.showToast({
                    title: this.language.putForward.yzmTip,
                    duration: 1000,
                    icon: 'none'
                });
                this.fastTap = true;
            } else if (this.oldPhone != this.phone) {
                uni.showToast({
                    title: this.language.putForward.telTip1,
                    duration: 1000,
                    icon: 'none'
                });
                this.fastTap = true;
            } else {
                setTimeout(() => {
                    uni.showToast({
                        title: this.language.putForward.wzTip,
                        duration: 1000,
                        icon: 'none'
                    });
                    this.fastTap = true;
                }, 1500);
            }
        }
    }
};
</script>

<style scoped lang="less">
@import url('../../static/css/myWallet/putForward.less');
</style>
