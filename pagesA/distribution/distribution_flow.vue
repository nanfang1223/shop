<!-- 佣金明细列表 -->
<template>
    <div>
        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>
        <heads :title="language.distribution_flow.title"></heads>
        <view class="content">
            <view class="c_top">
                <view class="">
                    {{language.distribution_flow.total}}
                </view>
                <view class="">
                    +{{total||0}} {{language.distribution_flow.yuan}}
                </view>
            </view>
            <!-- 有记录的时候 -->
            <view class="c_bottom">
                <view class="c_b_item" v-for="(item,index) in order">
                    <view class="item_flex">
                        <view class="sty1">{{item.from_user}}</view>
                        <view class="sty2">+{{item.money}}</view>
                    </view>
                    <view class="item_flex">
                        <view class="sty3">{{item.add_date}}</view>
                        <view class="sty4">{{language.distribution_flow.status}} {{item.status}}</view>
                    </view>
                </view>
                <uni-load-more v-if='order.length>10' :loadingType="loadingType"></uni-load-more>
            </view>

            <!-- 没有记录的时候 -->
            <div class='empty_play' v-if='!hasFlag&&!load'>
                <img :src="emptyImg"/>
                <p>{{language.distribution_flow.noFlow}}</p>
            </div>
        </view>
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
                head: true, 								// 头部切换
                
                order: '', 									// 订单数据 
                bindding_id: '', 						// 订单状态
                load: true,
                hasFlag: '', 								// 是否有佣金明细
                total: 0,
                page: 0,
                loadingType: 0,
                emptyImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/' + 'fx_nodata1.png',
                loadImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/5-121204193R7.gif',
                back1: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/back2x.png',
            }
        },
        async onReachBottom () {
            var me = this
            if (this.loadingType != 0) {
                return
            }
            this.loadingType = 1
            var data = {
                module: 'app',
                action: 'commcenter',
                app: 'comm_list',
                
                page: this.page
            }

            if (this.order.length > 0) {
                let res = await this.$req.post({data})
                let data = res.list;
                
                this.page += 1
                if (res.code == 200) {
                    me.order = me.order.concat(data)
                    me.loadingType = 0
                } else {
                    me.loadingType = 2
                }
            }
        },
        onLoad () {
            let me = this
            this.isLogin(()=>{})

            me.bindding_id = me.$store.state.bindding_num
            
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
             * 获取数据
             * */
            _axios () {

                let data = {
                    module: 'app',
                    action: 'commcenter',
                    app: 'comm_list',
                    page: this.page
                }

                this.$req.post({ data }).then(res => {
                    
                    this.load = false

                    if (res.code == 103) {

                        if (this.page > 0) {
                            this.hasFlag = true
                        } else {
                            this.hasFlag = false
                        }

                    } else if (res.code == 200) {

                        this.hasFlag = true
                        this.order = res.list
                        this.total = res.total
                        this.page = 1
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../static/css/distribution/distribution_flow.less");
</style>
