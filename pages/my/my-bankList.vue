<template>
    <div class="receivingAddress  " style="min-height: 100vh;" :style="address?'background-color: #F6f6f6;':''">
        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>
        <!-- 标题 -->
        <div style='position: relative;'>
            <heads :title="'我的银行卡'"></heads>
            <!-- #ifndef MP -->
            <div class='manage' v-if='manage' @tap="_manage">{{address_m}}</div>
            <!-- #endif -->
        </div>

        <!-- 银行卡列表 -->
        <ul class='address' v-if='address.length'>
            <li v-for="(item,index) in address" :key='item.id'>
                <!-- 银行卡信息 -->
                <div class='address_top' @tap="_state_manage(item)">
                    <div>
                        <div class='address_user'>
                            <span style="margin-right: 30upx">
                                {{item.Bank_name}}
                            </span>
                            <span>
                                {{item.Bank_card_number | hideBank}}
                            </span>
                        </div>
                        <div class='address_xs'>
                            <div class='address_ms' v-show='item.is_default==0?false:true'>默认</div>
                            <!-- <p>{{item.address_xq}}</p> -->
                        </div>
                    </div>
                    <!-- <img class='quan_img' v-if="re_img" :src="addre_id== item.addr_id ? circle_hei : circle_hui" /> -->
                </div>
                <!-- 银行卡 删除 编辑操作 -->
                <div class='address_foot'>
                   <!-- <div class="address_left" @tap="_default(item.addr_id,index)">
                        <img class='quan_img' :src="item.is_default==0 ? circle_hui : circle_hei" />
                        <span>默认银行卡</span>
                    </div> -->
                    <!-- 银行卡组件 -->
                    <div class='address_right' style="display: flex;">
                        <div @tap="navTo('/pages/my/my-bind-bank?bank_id=2&id=' + item.id)">
                            <img class='quan_img' :src="edtAdd" />
                            <span style="margin-right: 30rpx;">{{language.receivingAddress.edit}}</span>
                        </div>
                        <div @tap="delAddress(item.id,index)">
                            <img class='quan_img' :src="delAdd" />
                            <span>{{language.receivingAddress.deletes}}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>


        <!-- 底部按钮 -->
        <div class='bottom' v-if="address.length" @tap="navTo('/pages/my/my-bind-bank?bank_id=1')">添加新银行卡</div>
        <!-- 当没有设置银行卡的时候，页面显示添加地图图片提示 -->
        <div class="address_wu" @tap="navTo('/pages/my/my-bind-bank?bank_id=1')" v-else>
            <img :src="add" />
            <p>添加银行卡</p>
        </div>
        <lkdelModel :content="text" :canceltext="language.receivingAddress.cancel" :confirmtext="language.receivingAddress.confirm"
            v-model="lkdelModel" @on-click="_delAddress" />
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'
    import lkdelModel from '@/components/delModel.vue'

    export default {
        filters: {
            // 银行卡星号隐藏
            hideBank(banknumber) {
                let str = banknumber;
                let reg = /^(\d{4})\d+(\d{4})$/;
                str = str.replace(reg, "$1 **** **** $2");
                return str
            },
        },
        data() {
            return {
                title: '银行卡列表',
                add: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/tianjiadizhi2x.png',
                edtAdd: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/bianjidizhi2x.png',
                delAdd: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/shanchudizhi2x.png',
                fastTap: true,
                manage: '', //管理状态
                del: '', //删除编辑状态
                del_index: -1, //删除地址的index
                state_manage: '', //判断从个人中心页面进(1)，还是订单页面进(2)

                address: '', //接受后台返回地址
                circle_hui: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/xuanzehui2x.png',
                circle_hei: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/2.png',
                order_id: '',
                re_img: '',
                addre_id: '', //地址id
                address_m: '管理',
                flag: true,
                lkdelModel: false,
                delobj: {},
                text: '',
                kk: '2222333344445555',
            }
        },
        onShow() {
            if (uni.getStorageSync('biaoji')) {
                uni.removeStorage({
                    key: 'dizhi2',
                    success: function(res) {}
                });
                uni.removeStorage({
                    key: 'biaoji',
                    success: function(res) {}
                });
            }
            this._axios()
            this.address_id = this.$store.state.address_id

            this.address_m = this.language.receivingAddress.management
        },
        onLoad(option) {
            this.order_id = this.$store.state.order_id

            this.state_manage = option.state_manage
            this.addre_id = option.addre_id
            uni.setStorageSync('canshu', 'false')
            if (this.state_manage == 1) {
                this.manage = true
                this.del = false
                this.re_img = true
            } else if (this.state_manage == 2) {
                this.manage = false
                this.del = true
                this.re_img = false
            }
        },
        components: {
            lkdelModel
        },
        methods: {
            navTo(url) {
                uni.navigateTo({
                    url: url
                });
            },
            changeLoginStatus() {
                this._axios()
            },
            //从订单页面进入点击调回前一页
            _state_manage(item) {
                this.addre_id = item.id
                var me = this
                me.$store.state.address_id = item.id
                uni.setStorageSync('chooseAddress', item)
            },
            //点击管理切换状态
            _manage() {
                this.del = !this.del
                if (this.del) {
                    this.address_m = this.language.receivingAddress.complete
                } else {
                    this.address_m = this.language.receivingAddress.management
                }
            },
            // 删除提示弹框
            delAddress(id, index) {

                this.delobj = {
                    id
                }
                // console.log(this.language.receivingAddress.confirm_delete);
                if (this.address[index].is_default == 1) {
                    this.text = '确认删除默认银行卡?'
                } else {
                    this.text = ''
                }

                this.lkdelModel = true
            },
            // 删除银行卡
            _delAddress() {

                let {
                    id
                } = this.delobj
                // let tokens = localStorage.getItem('access_id')
               let tokens = uni.getStorageSync('access_id')
                if (!this.fastTap) {
                    return
                }
                console.log(this.delobj,'this.delobj')
                this.fastTap = false
                var me = this

                var data = {
                    module: 'app',
                    action: 'DadaFreight',
                    app: 'delBank',

                    bank_id: id,
                    access_id: tokens
                }


                this.$req.post({
                    data
                }).then(res => {
                    me.fastTap = true

                    let {
                        code
                    } = res
                    if (code == 200) {
                        me._axios()
                        uni.showToast({
                            title: me.language.receivingAddress.delete_success,
                            icon: 'none',
                            duration: 1000
                        })
                        // if (this.address.length === 1) {
                        //     me.$store.state.address_id_def = ''
                        // } else if (this.address[index].is_default === 1) {
                        //     me.$store.state.address_id_def = ''
                        //     // console.log('设置lkt_address_id_def为空')
                        //     uni.setStorageSync('lkt_address_id_def', '')
                        // }
                        // uni.showToast({
                        //     title: me.language.receivingAddress.delete_success,
                        //     icon: 'none',
                        //     duration: 1000
                        // })
                        
                    } else {
                        uni.showToast({
                            title: res.message,
                            duration: 1500,
                            icon: 'none'
                        })
                    }
                }).catch((e) => {
                    me.fastTap = true
                })


                this.lkdelModel = false
            },
            //设置默认银行卡
            async _default(address_id, index) {
                if (!this.fastTap) {
                    return
                }
                this.fastTap = false
                var me = this
                var data = {
                    module: 'app',
                    action: 'address',
                    app: 'set_default',
                    addr_id: address_id
                }

                try {
                    let {
                        code,
                        message
                    } = await this.$req.post({
                        data
                    })
                    if (code === 200) {
                        for (let i = 0; i < me.address.length; i++) {
                            me.address[i].is_default = 0
                        }
                        me.address[index].is_default = 1
                        me.$store.state.address_id_def = me.address[index].id
                    } else {
                        uni.showToast({
                            title: message,
                            duration: 1500,
                            icon: 'none'
                        })
                    }
                    me.fastTap = true
                } catch (e) {
                    me.fastTap = true
                }
            },
            async _axios() {
                let tokens = uni.getStorageSync('access_id')
                var me = this
                var data = {
                    module: 'app',
                    action: 'DadaFreight',
                    app: 'bankList',
                    access_id: tokens

                }

                let res = await this.$req.post({
                    data
                })
                let adds = res.data || []
                console.log(adds,'454')
                if (res.code == 200) {
                    me.address = adds
                    // 如果创建的新银行卡选择了默认
                    if (uni.getStorageSync('address_default')) {
                        for (let i = 0; i < adds.length; i++) {
                            if (adds[i].is_default == 1) {
                                me.addre_id = adds[i].id
                                break
                            }
                        }
                        uni.removeStorageSync('address_default')
                    }
                } else {
                    me.address = ''
                }

                if (adds.length > 0 && me.$store.state.address_id_def == '') {
                    if (me.$store.state.address_id_def == '') {
                        for (var k in adds) {
                            if (adds[k].is_default == 1) {
                                me.$store.state.address_id_def = adds[k].id
                                uni.setStorageSync('lkt_address_id_def', adds[k].id)
                                me.$store.state.address_id = adds[k].id
                            }
                        }
                    } else {
                        me.$store.state.address_id_def = me.$store.state.address_id_def
                        uni.setStorageSync('lkt_address_id_def', me.$store.state.address_id_def)
                    }
                }
            },
            ...mapMutations({
                address_id: 'SET_ADDRESS_ID'
            })
        },
    }
</script>
<style scoped lang="less">
    @import url("../../static/css/address/receivingAddress.less");
</style>
