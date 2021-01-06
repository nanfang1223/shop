<!-- 分销商品展示 -->
<template>
    <div class="yh-distr">
        <heads :title="language.distribution_list.title"></heads>

        <view class="content">

            <!-- #ifdef MP -->
            <ul class='order_header'>
                <li class='header_li' :class="{header_border:status_id==item.id}" v-for='(item,index) in header'
                    :key='item.id'
                    @tap="_header_index(item.id)">{{item.levelname}}
                </li>
            </ul>
            <!-- #endif -->

            <!-- #ifndef MP -->
            <ul class='order_header yh-order_header'>
                <li class='header_li' :class="{header_border:status_id==item.id}" v-for='(item,index) in header'
                    :key='item.id'
                    @tap="_header_index(item.id)">{{item.levelname}}
                </li>
            </ul>
            <!-- #endif -->

        </view>

        <div>
            <ul class='allgoods yh-allgoods'>
                <li @tap="_goods(item.id)" class="allgoods_li" v-for='(item,index) in order' :key="index">
                    <img :src="item.imgurl"/>
                    <p class="allgoods_name">{{item.name}}</p>
                    <!-- <p class='allgoods_p'>{{item.subtitle}} </p> -->
                    <div>
                        <div class="allgoods_li_priceBox" >
                            <div>
                                <span>￥</span>
                                {{ item.vip_yprice }}
                            </div>
               <p style="color: #333333;">{{language.distribution_list.vip_yprice}} ￥{{item.vip_price}}</p>
                        </div>
                       <!-- <div class="allgoods_li_priceBox" >
                            <div>
                                <span>￥</span>
                                {{item.vip_price}}
                            </div>

                        </div> -->
                       <img :src="shopImg" class="allgoods_shopImg" @tap.stop="shopping_j(item.id)"/>
                    </div>
                </li>
            </ul>
            <div v-if="hasGoods==-1" class="yh-hasGoods" :style="{top:halfWidth}">

                <div class="search_no yh-search_no">
                    <div class="font_14 yh-font_14">
                        <img class="yh-font-img" :src="emptyImg">
                    </div>
                    <span class="yh-sp-color">{{language.distribution_list.nopro}}</span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'
    import {
        lkt_getgrade
    } from '../../static/js/distribution/distribution_center.js'

    export default {
        data () {
            return {
                is_grade: false,
                mask_display: false,
                fastTap: true,
                head: true, 								// 头部切换
                
                order: '', 									// 订单数据 
                bindding_id: '', 						// 订单状态
                load: true,
                header: [],
                status_id: '', 							// nav的选择
                numb: 1, 										// 规格选择的数量
                ys_price: '', 							// 规格初始价格
                num: '', 										// 规格数量
                price: '', 									// 规格价格
                hasGoods: 1,
                page: 1,
                loadingType: 0,
                jian_hei: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jian2x.png',
                jian_hui: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jianhui2x.png',
                jia_hei: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jia+2x.png',
                jia_hui: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/add+2x.png',
                closed: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/guanbi2x.png',
                loadImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/5-121204193R7.gif',
                emptyImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/empyimg92x.png',
                back1: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/back2x.png',
                shopImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/allgoods_shopImg.png',
            }
        },

        onLoad () {
            let me = this
            this.bindding_id = this.$store.state.bindding_num
            
        },
        onShow () {
            this.bindding_id = this.$store.state.bindding_num
            
            if (this.status_id) {
                this._axios()
            } else {
                this._grade()
            }
        },

        methods: {
            /**
             *
             * */
            ...mapMutations({
                pro_id: 'SET_PRO_ID',
            }),
            /**
             *
             * */
            _header_index (id) {
                this.status_id = id
                this.page = 1
                this.loadingType = 0
                this._axios()
            },
            /**
             *
             * */
            _grade () {
                lkt_getgrade(this)
            },
            /**
             *
             * */
            _axios () {
                let data = {
                    module: 'app',
                    action: 'commproduct',
                    app: 'listdetail',
                    distributor_id: this.status_id,
                    page: this.page,
                }

                this.$req.post({data}).then(res => {
                    this.load = false
                    
                    if(res.pro){
                        res.pro.filter(item=>{
                            item.vip_price = Number(item.vip_price).toFixed(2)
                            item.vip_yprice = Number(item.vip_yprice).toFixed(2)
                        })
                    }
                    
                    this.order = res.pro?res.pro:[];
                    this.is_grade = res.grade==0?false:true;
                    if (this.order.length==0) {
                        this.hasGoods = -1
                    } else {
                        this.hasGoods = 1
                    }                
                })

            },
            /**
             * 跳转商品详情页
             * */
            _goods (id) {
           
                this.pro_id(id)
                uni.navigateTo({
                    url: '/pages/goods/goodsDetailed?isDistribution=true&productId=' + id
                })
            },
        }
    }
</script>

<style scoped lang="less">
    @import url("../../static/css/distribution/distribution_list.less");
</style>
