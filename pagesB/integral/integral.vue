<template>
    <div class="yh-integral">
        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>
        <heads :title='language.integral.integral.title' :returnR='returnR'></heads>

        <div class="skeleton">
            <div v-if="!load">
<!--            <toload :load="!load">-->
                <div class="yh-loads">
                    <img v-show="topTabBar" :src="brHeadImg" class="banner">
                    <div class="div1">
                        <div class="div1_left">
                            {{language.integral.integral.my_integral}}：
                            <img :src="integral_img" alt="">
                            <text class="red">{{ myscore }}</text>
                        </div>
                        <div v-if="go_sign" class="div1_right" @tap='gosign'>{{language.integral.integral.Leading_integral}}</div>
                        <div class='guize_bg'>
                            <img class='wen_img' :src="hei_wen"/>
                            <p @tap='_toGradeUse(true)' class='guize'>{{language.integral.integral.Usage_rules}}</p>
                        </div>
                    </div>

                    <ul class="div2" v-if="!nogoods">
                        <li @tap="_goods(item.id)" v-for='(item,index) in list' :key='index'>
                            <div class="pro_all">

                                
                                <view class="imageBox relative">
                                    <image class="pro_img" :src="item.imgurl" lazy-load="true" mode=""></image>
                                    <view v-if="item.status == 3">{{language.integral.integral.shelf}}</view>
                                    <view v-else-if="item.num == 0 || item.num == '0'">{{language.integral.integral.Sold_out}}</view>
                                </view>
                                <div class="pro_title">{{item.product_title}}</div>

                                <div class="pro_div3">

								<span class="pro_price" v-if="item.money>0 && item.integral>0">
									￥{{ item.money + ' + ' }}
									<img :src="integral_img" style="margin-right: 8rpx;">
									{{ item.integral }}
								</span>

                                <span class="pro_price" v-else>
									<img :src="integral_img" style="margin-right: 8rpx;">
									{{item.integral}}
								</span>

                                    <div class="pro_two">

                                        <span>{{language.integral.integral.market_value}}:￥<span class="yh-price">{{ item.price }}</span></span>
                                        <span>{{language.integral.integral.sales}}:{{item.sales}}</span>
                                    </div>

                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- 如果没有商品的话显示 -->
                    <view class="no-bargain" v-if="nogoods">
                        <img :src="nogoodsImg"/>
                        <p>{{language.integral.integral.Tips[0]}}~</p>
                    </view>
                </div>
                <uni-load-more :loadingType="loadingType" v-if="list.length>9" v-show="uniLoadMore"></uni-load-more>
                <ruleModal v-model="isShow" @click="_toGradeUse" :title="language.integral.integral.Usage_rules" :details="content"/>
<!--            </toload>-->
            </div>
            <div v-else>
                <div class="yh-loads">
                    <img  :src="brHeadImg" class="skeleton-rect banner">
                    <div class="div1">
                        <div class="div1_left">
                            <span class="skeleton-rect">{{language.integral.integral.my_integral}}：</span>
                            <img class="skeleton-circle" :src="integral_img" alt="">
                            <text class="skeleton-rect red">{{ myscore }}</text>
                        </div>
                        <div class="div1_right skeleton-rect" @tap='gosign'>{{language.integral.integral.Leading_integral}}</div>
                        <div class='guize_bg'>
                            <img class='wen_img skeleton-rect' :src="hei_wen"/>
                            <p @tap='_toGradeUse(true)' class='guize skeleton-rect'>{{language.integral.integral.Usage_rules}}</p>
                        </div>
                    </div>
                    <ul class="div2">
                        <li v-for='(item,index) in mocklist' :key='index'>
                            <div class="pro_all">
                                <img :src="item.imgurl" class="pro_img skeleton-rect">
                                <div class="pro_title">
                                    <p class="skeleton-rect">xxxxxxxxxxxxxxxx</p>
                                    <p class="skeleton-rect">xxxxxxx</p>
                                </div>

                                <div class="pro_div3">

								<span class="pro_price skeleton-rect">
									￥{{ item.money + ' + ' }}
									<img :src="integral_img">
									{{ item.integral }}
								</span>

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <skeleton  :animation="true" :loading="true" v-if="load" bgColor="#FFF"></skeleton>
       

    </div>
</template>

<script>
    import ruleModal from '@/components/ruleModal.vue'
    import htmlParser from '@/common/html-parser.js'
    import {mocklist} from "../../mock/integral/integral";

    export default {
        data () {
            return {
                title: '积分商城',
                mocklist,
                nogoods: false,
                hei_wen: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/fx_heiwenhao.png',
                nogoodsImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + '/images/icon1/noFind.png',
                integral_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/integral.png',
                loadGif: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/loading.gif',
                brHeadImg: '',
                load: true,
                topTabBar: false,
                list: '',
                page: 1,
                loadingType: 0,
                uniLoadMore: false, //默认不显示上拉加载
                daodi: false,
                myscore: 0,
                go_sign: false,
                isShow: false, //规则控制
                content: '', //规则
                returnR: 7
            }
        },
        onLoad(option) {
            if(option.toBack){
                this.returnR = 0
            }
            this.isLogin(()=>{
            	this._axios()
            })
        },
        methods: {
            /**
             *
             * */
            _back () {
                uni.switchTab({
                    url: '/pages/tabBar/my'
                })
            },
            /**
             *
             * */
            gosign () {
                uni.navigateTo({
                    url: '/pagesA/shop/sign'
                })
            },
            /**
             *
             * */
            changeLoginStatus () {
                this.page = 1
                this.daodi = false
                this._axios()
            },
            /**
             * 跳转商品详情页
             * */
            _goods (id) {
                // console.log(id)
                uni.navigateTo({
                    url: '../integral/integral_detail?pro_id=' + id
                })
            },
            /**
             *
             * */
            _axios () {
                var me = this

                if (me.page == 1) {
                    me.list = ''
                }

                me.loadingType = 1

                let data = {
                    
                    module: 'app',
                    action: 'integral',
                    app: 'index',
                    page: me.page
                }

                this.$req.post({
                    data
                }).then(res => {

                    let list = res.list

                    // 关闭加载中
                    this.load = false

                    if (res.code == 200) {

                        if (me.page == 1) {

                            me.nogoods = false
                            me.list = list
                            

                            if (res.bg_img && res.bg_img.length > 0 && me.brHeadImg == '') {
                                me.brHeadImg = res.bg_img
                                me.topTabBar = true
                            }

                            me.myscore = res.score
                            me.go_sign = res.go_sign

                            if (list.length <= 0) {
                                me.nogoods = true
                            }

                        } else {

                            if (list.length > 0) {
                                me.list.push(...res.list)
                            }

                        }

                        if (list.length) {
                            me.nogoods = false
                            if (list.length < 10) {
                                me.page = 1
                                me.daodi = true
                            }
                            me.loadingType = 2
                        } else {
                            me.loadingType = 2
                        }

                    } else {

                        if (res.data.msg) {
                            uni.showToast({
                                title: res.data.msg,
                                icon: 'none',
                                duration: 1500
                            })
                        }
                    }
                })

            },
            /**
             * 规则
             * */
            async _toGradeUse (is) {
                if (is) {
                    let data =  {
                        module: 'app',
                        action: 'integral',
                        app: 'rule',
                        
                    }
                    let res = await this.$req.post({data})
                    if (res.code == 200) {
                        this.content = htmlParser(res.content)
                        this.isShow = !this.isShow
                    } else {
                        uni.showToast({
                            title: res.message,
                            duration: 1500,
                            icon: 'none'
                        })
                    }
                } else {
                    this.isShow = !this.isShow
                }

            },
        },
        onReachBottom () {
            var me = this

            if (me.daodi) {
                return false
            }

            me.page = ++me.page
            me._axios()
        },
        components: {
            ruleModal,
        },
    }
</script>

<style scoped lang="less">
    @import url("../../static/css/integral/integral.less");
</style>
