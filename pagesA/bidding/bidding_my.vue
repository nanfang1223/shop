<template>
    <div>
        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>
        <heads :title='title'>发</heads>
        <toload :load="load">
            <!--   订单列表     -->
            <div class="yh-ddlist">
                <div class="list_height"></div>
                <ul class="list_ul" v-for='(item,index) in order' :key="index">
                    <li v-if="order.length&&load" @tap="nav_click(item.id,item.mark,item.is_promise)"
                        :class="status_id==1?'list_li2':''">
                        <div>
                            <img class="list_imgurl" :src="item.imgurl"/>
                            <div class="list_content">
                                <div class="list_title list_break2">{{item.title}}</div>
                                <div class="list_up list_break1">{{language.bidding_my.startingPrice}}<span>¥{{item.price}}</span>{{language.bidding_my.offer}} {{item.pepole}} {{language.bidding_my.people}}</div>
                                <div class="list_number list_break1">{{language.bidding_my.bidBy}} ¥{{item.add_price}} {{language.bidding_my.time}}</div>
                            </div>
                            <!-- mark（1-继续竞拍 2-已结束，不是得主  3.已结束，是得主未付款 4.已结束，是得主已付款） -->
                            <div class="list_bottom">
                                <span>{{item.mark==1?language.bidding_my.ongoing:(item.mark==2?language.bidding_my.finished:(item.mark==3?language.bidding_my.obligation:(item.mark==4?language.bidding_my.done:(item.mark==5?language.bidding_my.finished:''))))}}</span>
                                <img class='list_time' :src="timeIcon"/>
                                <span class="list_nt" v-if='item.mark == 3'>{{item.invalid_time}} {{language.bidding_my.agoOrder}}</span>
                                <span class="list_nt"
                                      v-if='item.mark == 4 && item.is_buy == 0'>{{item.endtime}} {{language.bidding_my.cutOff}}</span>
                                <span class="list_nt"
                                      v-if='item.mark == 4 && item.is_buy == 1'>{{item.endtime}} {{language.bidding_my.cutOff}}</span>
                                <span class="list_nt" v-if='item.mark != 3 && item.mark != 4'>{{item.endtime}} {{language.bidding_my.cutOff}}</span>


                                <!-- 待付款和我的订单阻止冒泡 -->
                                <div v-if="item.mark==3||item.mark==4" class="list_status"
                                     :class="{noBtn: item.mark==2||item.mark ==5}"
                                     @click.stop="nav_click_sm(item.id,item.mark,item.is_promise)">
                                    {{(item.mark==1?language.bidding_my.continueAuction:(item.mark==2?language.bidding_my.finished:(item.mark==3?language.bidding_my.obligation:(item.mark==4?language.bidding_my.myOrder:(item.mark==5?language.bidding_my.finished:'')))))}}
                                </div>

                                <div v-else class="list_status"
                                     :class="{noBtn: item.mark==2||item.mark ==5}">
                                    {{(item.mark==1?language.bidding_my.continueAuction:(item.mark==2?language.bidding_my.finished:(item.mark==3?language.bidding_my.obligation:(item.mark==4?language.bidding_my.myOrder:(item.mark==5?language.bidding_my.finished:'')))))}}
                                </div>
                            </div>
                        </div>

                        <div class="list_height"></div>
                    </li>
                </ul>
            </div>

            <div class='empty_play' v-if='!order.length && load'>
                <img :src="emptyImg"/>
                <p>{{language.bidding_my.noOrderText}}</p>
                <p class='empty_p'>{{language.bidding_my.noOrderText1}}</p>
                <div class="empty_btn" style="border:2rpx solid #FF612A; color: #FF612A;" @tap="navToHome()">{{language.bidding_my.goHome}}</div>
            </div>
        </toload>
    </div>
</template>

<script>
    import Heads from '../../components/header.vue'
    import {mapMutations} from 'vuex'

    export default {
        data () {
            return {
                title: '代理中心',
                fastTap: true,
                loadImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/5-121204193R7.gif',
                emptyImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/noFind.png',
                back1: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/back2x.png',
                search2x: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/search@2x.png',
                timeIcon: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/timeIcon.png',
                list_n: false,
                head: true, //头部切换
                // header: ['即将开拍', '正在热拍', '我的竞拍'],
                header: ['即将开拍', '正在热拍'],
                
                order: '', //订单数据 
                status_id: '', //订单状态
                dis_play: '', //
                sreach_value: '', //搜索框的值
                page: 1, //加载页码
                load_next: true, //能否继续下拉 true:能 false:不能
                allLoaded: false,
                autoFill: false, //若为真，loadmore 会自动检测并撑满其容器
                bottomStatus: '',
                bottomPullText: '上拉加载更多...',
                bottomDropText: '释放更新...',
                loading: false,
                load: false,
                stau_num: null,
                timer: null,
                count: '',
                flag: true,
                loadingType: 0,
                value: '',
                clickFlag: false,
            }
        },
        components: {
            Heads
        },
        onLoad () {
            this.isLogin(() => {
                this.status_id = this.$store.state.head_id;
            });
            this._axios()
        },
        computed: {
            halfWidth: function () {
                var gru = uni.getStorageSync('data_height') ? uni.getStorageSync('data_height') : this.$store.state.data_height
                var heigh = parseInt(gru)
                var he = heigh * 2

                // #ifdef MP-WEIXIN
                return '0px'
                // #endif

                // #ifndef MP-WEIXIN
                return uni.upx2px(he) + 'px'
                // #endif

            },
        },
        onReachBottom: function () {
            var me = this

            if (me.load_next) { //有可加载的商品
                me.page += 1
                var data = {
                    module: 'app',
                    action: 'auction',
                    m: 'index',
                    type: 'my',
                    page: this.page
                }
                this.$req.post({data}).then(res => {
					 // console.log(res,"竞拍数据")
                    if (res.code == 200) {
                        if (res.list.length > 0) {
                            me.order = me.order.concat(res.list)
                        } else {
                            me.load_next = false
                            uni.showToast({
                                title: me.language.loadMore.contentText.contentnomore,
                                duration: 1500,
                                icon: 'none'
                            })
                        }
                    }
                    uni.hideLoading()
                })
            }
        },
        methods: {
			changeLoginStatus(){
				this.page = 1;
				this._axios();
			},
            ...mapMutations({
                order_id: 'SET_ORDER_ID',
                address_id: 'SET_ADDRESS_ID',
                bindding_num: 'SET_BINDDING_NUM',
                bind_status: 'SET_BIND_STATUS',
                bind_promise: 'SET_BIND_PPOMISE',
                head_id: 'SET_HEAD_ID',
                pay_lx: 'SET_PAY_LX',
            }),
            /**
             * 跳转
             * */
            nav_click (id, stat, promise) {
                this.bindding_num(id)
                if (this.status_id == 0) {
                    this.bind_promise(0)
                    this.bind_status(0)
                } else if (this.status_id == 2) {
                    this.bind_promise(1)
                    this.bind_status(stat)
                } else if (this.status_id == 1) {
                    if (stat == 1) {
                        this.bind_promise(promise)
                    } else {
                        this.bind_promise(1)
                    }
                    this.bind_status(stat)
                }
                //经我的竞拍页面进入出价详情页
                uni.navigateTo({
                    url: 'bidding_detailed_Two?mark=' + stat + '&from_my=1',
                })
            },
            /**
             * 待付款和我的订单跳转处理
             * */
            nav_click_sm (id, stat, promise) {
                //一堆不知道操作设么的东西
                this.bindding_num(id)
                if (this.status_id == 0) {
                    this.bind_promise(0)
                    this.bind_status(0)
                } else if (this.status_id == 2) {
                    this.bind_promise(1)
                    this.bind_status(stat)
                } else if (this.status_id == 1) {
                    if (stat == 1) {
                        this.bind_promise(promise)
                    } else {
                        this.bind_promise(1)
                    }
                    this.bind_status(stat)
                }

                if (stat == 3) {
                    this.pay_lx('jp')
                    uni.navigateTo({
                        url: '/pagesA/bidding/bidding_order'
                    })
                    return false
                } else if (stat == 4) {
                    uni.navigateTo({
                        url: '/pages/order/myOrder',
                    })
                }
            },
            /**
             * 初始加载函数
             * */
            async _axios () {
                let data = {
                    module: 'app',
                    action: 'auction',
                    m: 'index',
                    type: 'my',
                    page: this.page,
                }
                this.$req.post({data}).then(res => {
                    if(res.res){
                        this.order = res.res
                        this.allLoaded = res.res.length < 10;
                        this.load = true
                        // console.log(this.order.length)
                    }else{
                        uni.navigateBack({
                            delta:1
                        })
                    }
                })

            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../static/css/bidding/bidding_my.less");
</style>
