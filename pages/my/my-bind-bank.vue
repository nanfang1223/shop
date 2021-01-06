<template>
    <div class="box">
        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>
        <heads :title="shop_id == 1 ? '添加银行卡':'编辑银行卡'"></heads>
        <ul class="message">
            <view class="hr"></view>
            <li>
                <text style="height: 90rpx;font-size: 30rpx;color: #020202;line-height:88rpx;">
                    {{language.putForward.information}}
                </text>
            </li>
            <li>
                <span>{{language.putForward.number}}</span>
                <input placeholder-style="color: #b8b8b8;" type="text" :placeholder="language.putForward.number_placeholder"
                    v-model="bank_number" @input="_bank()" @blur="_bank_p" />
            </li>
            <li>
                <span>{{language.putForward.bank}}</span>
                <input placeholder-style="color: #b8b8b8;" type="text" :placeholder="language.putForward.bank_placeholder"
                    v-model="bank_name" @blur="_bank_p" />
            </li>
            <li>
                <span>{{language.putForward.branch}}</span>
                <input placeholder-style="color: #b8b8b8;" type="text" :placeholder="language.putForward.branch_placeholder"
                    v-model="branch" />
            </li>
            <li>
                <span>{{language.putForward.cardholder}}&nbsp;&nbsp;</span>
                <input placeholder-style="color: #b8b8b8;" type="text" :placeholder="language.putForward.cardholder_placeholder"
                    v-model="user_name" @blur="_usname()" />
            </li>
            <li>
                <span>{{language.putForward.phone}}&nbsp;&nbsp;</span>
                <input type="number" :placeholder="language.putForward.phone_placeholder" v-model="phone" disabled="true"
                    readonly="readonly" />
            </li>
            <li class="yz_li">
                <span>{{language.putForward.verification}}&nbsp;&nbsp;</span>
                <input placeholder-style="color: #b8b8b8;" class="input" :class="{ marginleft: display }" type="number"
                    :placeholder="language.putForward.verification_placeholder" v-model="input_code" style="flex: 1;" />

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
            <li class="flex adddis">
                <span class="leftText"> 默认银行卡</span>
                <!-- <img v-if="modify_default_flag" class='quan_img' :src="modify_default" /> -->
                <img class='quan_img' :src="is_default==1 ? circle_hei : circle_hui" @click='_is_default' />
            </li>
        </ul>
        <div class="setup-buttom" style="background: #FF612A;" @tap="_sumber">{{shop_id == 1 ? '确认添加':'确认编辑'}}</div>
    </div>
</template>

<script>
    import {
        telephone
    } from '../../common/landing.js';
    import {
        mapMutations
    } from 'vuex';

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
                shop_id: 1, //1 添加 2 修改
                money: '',
                warnIng: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/warnIng.png',

                service_charge: '', //提现手续费
                id: '',
                is_en: '',
                back_type: '', // 1 从提现详情重新申请过来的
                branch: '',
                is_default: 0, //是否默认地址
                circle_hui: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/xuanzehui2x.png', //图片地址
                circle_hei: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/2.png', //图片地址
            };
        },
        onShow() {
            if (uni.getStorageSync('language')) {
                this.is_en = uni.getStorageSync('language')
            }

        },
        onLoad(option) {
            this.shop_id = option.bank_id
            this.type = option.type;
            if (option.id) {
                this.id = option.id;
            }
            // console.log(option, 'option')
            this.back_type = option.back_type
            this._axios();
            this.getPhone()
        },
        methods: {
            // 银行卡星号隐藏
            hideBank(banknumber) {
                let str = banknumber;
                let reg = /^(\d{4})\d+(\d{4})$/;
                str = str.replace(reg, "$1 **** **** $2");
                return str
            },
            //默认地址
            _is_default() {
                if (this.is_default === 1) {
                    this.is_default = 0
                } else {
                    this.is_default = 1
                }
            },
            changeLoginStatus() {
                this._axios();
            },
            // 回显信息查询
            _axios() {
               let tokens = uni.getStorageSync('access_id')
                var data = {
                    module: 'app',
                    action: 'DadaFreight',
                    app: 'updateBank',
                    bank_id: this.id,
                    access_id: tokens
                };
                if (this.type == 'store') {
                    data.shop_id = this.$store.state.shop_id;
                }

                this.$req.post({
                    data
                }).then(res => {
                    // let user_phone = localStorage.getItem('user_phone')
                    // console.log(user_phone)
                    if (res.code == 200) {
                        if (this.shop_id == 2) {
                            let {
                                Bank_card_number,
                                Bank_name,
                                Cardholder,
                                branch,
                                is_default,
                                mobile
                            } = res.data[0];
                            this.branch = branch
                            this.bank_number = Bank_card_number ? Bank_card_number :
                                '';
                                this.bank_number = this.hideBank(this.bank_number)
                            this.bank_name = Bank_name ? Bank_name :
                                '';
                            this.user_name = Cardholder ? Cardholder :
                                '';
                            this.is_default = is_default
                        }
                        

                    } else if (res.code == 115) {
                        this.isLogin(() => {})
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

                    this.$req.post({
                        data
                    }).then(res => {
                        let {
                            code,
                            message
                        } = res;

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

                        this.$req.post({
                            data
                        }).then(res => {
                            let {
                                code,
                                message
                            } = res;

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
                        .post({
                            data
                        })
                        .then(res => {
                            this.fastTap = true;
                            let {
                                code,
                                message
                            } = res;
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
               let tokens = uni.getStorageSync('access_id')
                // console.log(tokens, 'tokens')
                this.fastTap = false;

                var patt = /^([1-9]{1})(\d{15}|\d{18})$/;
                // 
                if (this.bank_number && this.user_name && this.bank_name && this.one_code == 1 && this.oldPhone == this
                    .phone && this.input_code.length == 6) {
                    var data = {
                        module: 'app',
                        action: 'DadaFreight',
                        app: 'bindingBank',

                        Bank_name: this.bank_name,
                        Bank_card_number: this.bank_number,
                        Cardholder: this.user_name,
                        mobile: this.phone,
                        keyCode: this.input_code,
                        bankid: this.id,
                        branch: this.branch,
                        access_id: tokens,
                        is_default: this.is_default
                    };
                    // if (this.type == 'store') {
                    //     data.shop_id = this.shop_id;
                    // }

                    this.$req
                        .post({
                            data
                        })
                        .then(res => {
                            if (res.code == 200) {
                                uni.showToast({
                                    title: '提交成功!',
                                    duration: 1000,
                                    icon: 'none'
                                });
                                setTimeout(() => {
                                    this.fastTap = true;
                                    let url = '/pages/my/my-bankList'
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
                    // console.log(this.oldPhone, '555', this.phone)
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
            },
            // 获取手机号
            getPhone() {
                let tokens = uni.getStorageSync('access_id')
                var data = {
                    module: 'app',
                    action: 'DadaFreight',
                    app: 'bindingBankView',
                    access_id: tokens
                };
                
                this.$req.post({
                    data
                }).then(res => {
                    let {mobile} = res.data[0]
                    if(mobile) {
                        this.phone = mobile ? mobile : ''
                    }else {
                        uni.showToast({
                            title: '请绑定手机号',
                            duration: 1000,
                            icon: 'none'
                        });
                        setTimeout(() => {
                            uni.navigateTo({
                                url: '/pagesB/setUp/setUp'
                            });
                        },1000)
                        
                    }
                    
                    console.log(res,'resd')
                });
            }
        }
    };
</script>

<style scoped lang="less">
    @import url('../../static/css/myWallet/putForward.less');
</style>
