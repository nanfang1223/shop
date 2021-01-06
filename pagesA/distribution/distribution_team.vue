<!-- 模板页面 -->
<template>
    <div>
        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>

        <heads :title="language.distribution_team.title"></heads>

        <view class="content">
            <!-- 第一个  开始 -->
            <view class="one" v-for='(item,index) in order' :key="index">
                <view class="item">
                    <view class="em">
                        <img class="my_header" :src='item.headimgurl'/>
                        <view class="my_name mz">
                            {{item.user_name}}
                        </view>
                    </view>
                    <view class="em">
                        <view class="my_grade">{{language.distribution_team.level}}{{item.levelname}}</view>
                    </view>
                    <view class="em xj" @tap="_lookDetail(item.user_id,index,item.openFlag)">
                        <view class="my_num">{{language.distribution_team.lower}}({{item.soncount}}人)</view>
                        <image class='rigth_jiantou' :src="item.src"/>
                    </view>
                </view>
                <view class="inner_content" v-if="item.openFlag">
                    <view class="inner_item" v-for='(item2,index2) in sonList' :key="index2">
                        <view class="mzz">{{item2.user_name}}</view>
                        <view>{{language.distribution_team.level}}{{item2.levelname}}</view>
                        <view class="xjj">{{language.distribution_team.lower}}({{item2.soncount}}人)</view>
                    </view>
                </view>
            </view>
            <!-- 第一个  结束 -->

        </view>

        <div class='empty_play' v-if='!order.length&&!load'>
            <img :src="emptyImg"/>
            <p>{{language.distribution_team.noteam}}</p>
        </div>
        <div class='load yh-load' v-if='load'>
            <div>
                <img :src="loadImg"/>
                <p>{{language.distribution_team.load}}…</p>
            </div>
        </div>

    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'
    import {
        lkt_seedown
    } from '../../static/js/distribution/distribution_center.js'

    export default {
        data () {
            return {
                fastTap: true,
                loadImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/5-121204193R7.gif',
                emptyImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/empyimg92x.png',
                back1: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/back2x.png',
                bottom: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/fx_bottom.png',
                head: true, 								// 头部切换
                
                order: [], 									// 订单数据 
                bindding_id: '', 						// 订单状态
                load: true,
                top: '',
                sonList: [], 								// 下级的数组
                page: 0,
                loadingType: 0,
            }
        },

        onLoad () {
            this.isLogin(()=>{})
            this.bindding_id = this.$store.state.bindding_num
            
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
            /**
             *
             * */
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
            _lookDetail (userId, index, openFlag) {
                lkt_seedown(userId, index, openFlag, this)
            },
            /**
             *
             * */
            _axios () {
                var data = {
                    module: 'app',
                    action: 'commcenter',
                    app: 'mygroup',
                    page: this.page
                }
                this.$req.post({data}).then(res => {
                    this.load = false
                    for (var i in res.list) {
                        res.list[i].openFlag == false
                        res.list[i].src = this.bottom
                    }

                    this.order = res.list
                })
            },
            /**
             *
             * */
            onReachBottom () {
                if (this.loadingType != 0) {
                    return
                }
                this.loadingType = 1
                this.page = this.page + 1
                var data = {
                    module: 'app',
                    action: 'commcenter',
                    app: 'mygroup',
                    
                    page: this.page
                }
                this.$req.post({data}).then(res => {
                    this.load = false
                    for (var i in res.list) {
                        res.list[i].openFlag == false
                        res.list[i].src = this.bottom
                    }
                    if (res.list.length < 15) {
                        this.loadingType = 2
                    } else {
                        this.loadingType = 0
                    }
                    this.order = this.order.concat(res.list)
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../static/css/distribution/distribution_team.less");
</style>
