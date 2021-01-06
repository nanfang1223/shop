<!-- 提现的三种结果：审核失败，提现成功，审核中 -->
<template>
    <div>
        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>
        <heads :title="language.distribution_result.title" :return-r="order.status ==2 ? 0 : 10 " > </heads>
        <toload>
            <!-- 提现审核失败 -->
            <view class="content" v-if="order.status==2">
                <img class='fail_icon' :src="result3"/>
                <view class="">
                    {{language.distribution_result.failText}}
                </view>
                <view class="content_v2">
                    {{language.distribution_result.failReason}}
                </view>
                <view class="content_v3">
                    {{order.refuse}}
                </view>
            </view>

            <!-- 提现审核成功 -->
            <view class="content" v-else-if="order.status==1">
                <img class='fail_icon' :src="result2"/>
                <view class="">
                    {{language.distribution_result.successText}}
                </view>
                <view class="cg_desc">
                    {{language.distribution_result.successText1}}
                </view>
                <view class="cg_items">
                    <view class="cg_item">
                        <view>{{language.distribution_result.cashCard}}</view>
                        <view>{{order.bank_name}} {{language.distribution_result.tail}} ({{order.last}})</view>
                    </view>
                    <view class="cg_item">
                        <view>{{language.distribution_result.amount}}</view>
                        <view>￥{{totalPrice}}</view>
                    </view>
                </view>
                <view class="cg_btn" @tap="goCenter()">
                    {{language.distribution_result.complete}}
                </view>
            </view>

            <!-- 提现审核中 -->
            <view class="content" v-else-if="order.status==0">
                <img class='fail_icon' :src="result1"/>
                <view class="">
                    {{language.distribution_result.auditText}}
                </view>
                <view class="cg_desc">
                    {{language.distribution_result.auditing}}
                </view>
                <view class="cg_items">
                    <view class="cg_item">
                        <view>{{language.distribution_result.cashCard}}</view>
                        <view>{{order.bank_name}} {{language.distribution_result.tail}} ({{order.last}})</view>
                    </view>
                    <view class="cg_item">
                        <view>{{language.distribution_result.amount}}</view>
                        <view>￥{{totalPrice}}</view>
                    </view>
                </view>
                <view class="cg_btn" @tap="goCenter()">
                    {{language.distribution_result.complete}}
                </view>
            </view>
        </toload>
        
        
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'

    export default {
        data () {
            return {
                fastTap: true,
                head: true, 							// 头部切换
                
                order: '', 								// 订单数据 
                bindding_id: '', 					// 订单状态
                load: true,
                title: '提现',
                txId: '',
                totalPrice: 0,
                result1: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/' + 'fx_status0.png',
                result2: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/' + 'fx_status1.png',
                result3: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/' + 'fx_status2.png',
                loadImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/5-121204193R7.gif',
                emptyImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/empyimg92x.png',
                back1: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/back2x.png',
                fail: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/fx_fail.png',
            }
        },
        onLoad (options) {
            let me = this
            this.isLogin(()=>{
				me.bindding_id = me.$store.state.bindding_num
				
				me.txId = options.txId
				if (me.access_id) {
				    me._axios()
				}
			})
        },
        computed: {
            halfWidth: function () {
                var gru = uni.getStorageSync('data_height') ? uni.getStorageSync('data_height') : this.$store.state.data_height
                var heigh = parseInt(gru)
                var he = heigh * 2
                return uni.upx2px(he) + 'px'
            },
        },
        onShow () {
            this.bindding_id = this.$store.state.bindding_num
            
            this._axios()
        },
        methods: {
            ...mapMutations({}),
            /**
             *
             * */
            changeLoginStatus () {
                this._axios()
            },
            /**
             *
             * */
            goCenter () {
                uni.navigateTo({
                    url: './distribution_center'
                })
            },
            /**
             *
             * */
            _axios () {
                var me = this

                var data = {
                    module: 'app',
                    action: 'commcenter',
                    app: 'cash_detail',
                    
                    id: me.txId
                }
                this.$req.post({data}).then(res => {
                    me.load = false
                    me.totalPrice = res.data.res.money

                    // res.data.res.money = parseInt(res.data.res.money)+parseInt(res.data.res.s_charge)
                    me.order = res.data.res
                })
                
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../static/css/distribution/distribution_result.less");
</style>
