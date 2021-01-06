<template>
    <div class="order_ii goodsDetail" >
        <view class="onReachBottomBg"></view>
        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus" v-on:cancle="cancle"></lktauthorize>
        <div ref="box" id="boxs" class="relative" @touchmove="setHead">
            <template v-if="bargain">
                <heads style="color: red" :title="language.goods.goodsDet.Commodity_details" :rightText="language.goods.goodsDet.rule" @right-click="_goRule"></heads>
            </template>
            <template v-else>
                <heads :title="language.goods.goodsDet.Commodity_details"></heads>
                <!-- :class="{ gd_headerplus: headerplus }" -->
                <div class="gd_header"  :style="{ top: halfWidth }">
                    <!-- #ifdef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU -->
                    <button @tap="showShareMask" id="copyy copyy1" :data-clipboard-text="shareHref" class="gd_card gd_card-bto" open-type="share"><img :src="fx_img" /></button>
                    <!-- #endif -->
                    <!-- #ifndef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU -->
                    <img v-if="!bargain" :src="fx_img" class="gd_card" v-clipboard:copy="shareHref" @tap="showShareMask" id="copyy" :data-clipboard-text="shareHref" />
                    <!-- #endif -->

                    <img v-if="isDistribution == false && active != 6" :src="gw_img" class="gd_share" @tap="navSwitchTab('/pages/tabBar/shoppingCart')" />
                    <div class="cartnum" v-if="isDistribution == false && allCartNum && active != 6">{{ allCartNum }}</div>
                </div>
            </template>
            
            <div class="skeleton">
                <!-- 有数据 -->
                <div v-if="loadFlag">
                    <!--  轮播图   -->
                    <div class="relative">
                        <div class="kanjiaNull" v-if="(bargain && leftTime <= 0) || brStatus == -1"><img :src="list_end" mode="" /></div>
                        <swiper class="swiper" @change="swiperChange">
                            <swiper-item v-for="img in pro.img_arr" :key="img.id"><img class="swipe" :src="img" /></swiper-item>
                        </swiper>
                        <div class="swiperIndex">{{ swiperIndex }}/{{ pro.img_arr && pro.img_arr.length }}</div>
                    </div>
                    <!-- 非砍价商品价格和名称 -->
                    <div class="goods_name" v-if="!bargain">
                        <template v-if="active == 1">
                            <p class="goods_price" v-if="is_grade == 1">
                                <span class="span">{{language.goods.goodsDet.vip_price}}￥</span>
                                {{ pro.vip_price }}
                                
                                <span class="text">￥{{ pro.vip_yprice }}</span>
                            </p>
                            <p class="goods_price" v-else>
                                <span class="span">￥</span>
                                {{ pro.vip_yprice }}
                                
                                <span class="icon" v-if="hasGrade">{{language.goods.goodsDet.vip_price}}￥{{pro.vip_price}}</span>
                            </p>
                        </template>
                        <template v-else>
                            <p class="goods_price">
                                <span class="span">￥</span>
                                {{ pro.price }}
                                <span class="text">￥{{ pro.yprice }}</span>
                            </p>
                        </template>
                        <p class="goods_proName">{{ pro.name }}</p>
                        <div class="volume">
                            <span>{{language.goods.goodsDet.sales}}{{ pro.volume }}</span>
                            <span>{{language.goods.goodsDet.freight}}：{{ pro.yunfei }}</span>
                        </div>
                    </div>
                    <!-- 砍价商品价格和名称 -->
                    <div class="goods_name goods_bargain_name" v-else>
                        <p class="goods_price">
                            {{ cs_num }}{{language.goods.goodsDet.Bargaining_success}}
                            <span class="cs_yprice" style="color: #333333;" >{{ cs_yprice }}</span>
                            <span class="cs_price">{{ cs_price }}</span>
                        </p>
                        <p>{{ pro.name }}</p>
                    </div>
                    <div class="hr" v-if="isDistribution == false && !bargain && active != 6 && coupon_status == true && coupon_str.length>0"></div>
                    <div class="coupon" @tap="getCoupon()" v-if="isDistribution == false && !bargain && active != 6 && coupon_status == true && coupon_str.length>0">
                        <span>{{language.goods.goodsDet.Collect_coupons}}</span>
                        <div>
                            <div v-for="(item, index) in coupon_str" :key="index" class="coupon_data" :style="'background-image:url(' + coupon_img + ')'">{{ item }}</div>
                        </div>
                        <img class="arrow" :src="you_img" />
                    </div>
                    <div class="hr"></div>
                    <!-- 非砍价商品选择商品规格 -->
<!--                    <div v-if="!bargain" class="guige" @tap="_shopping1()" ref="homeHead">-->
<!--                        <span>{{ haveSkuBean == '' ? '选择商品规格' : haveSkuBean.name }}</span>-->
<!--                        <img class="arrow" :src="you_img" />-->
<!--                    </div>-->
                    <!-- <div v-if="!bargain" class="hr"></div> -->
                    <div class="user gd_user" v-if="comments.length && !bargain" @tap="_evaluate(pro_id)">
                        <p>{{language.goods.goodsDet.User_evaluation}}（{{ comments.length }}）</p>
                        <img class="arrow" :src="you_img" />
                    </div>
                    <div class="comments" v-if="comments.length && !bargain">
                        <div class="allCenter">
                            <img class="img" :src="comments[comments.length-1].headimgurl ? comments[comments.length-1].headimgurl : niming" />
                            <span class="span">{{ comments[comments.length-1].user_name }}</span>
                        </div>
                        <div class="time">{{ comments[comments.length-1].add_time }}</div>
                        <div class="disc">{{ comments[comments.length-1].content }}</div>
                    </div>
                    <div class="user" v-if="!comments.length && !bargain"><p style="font-size: 30rpx;">{{language.goods.goodsDet.No_evaluation}}</p></div>
                    <!-- 砍价页面显示 -->
                    <div v-if="bargain">
                        <div v-if="comments.length > 0" class="user gd_user" @tap="_evaluate(pro_id)">
                            <p>{{language.goods.goodsDet.sheets}}（{{ comments.length }}）</p>
                            <img class="arrow" :src="you_img" />
                        </div>
                        <div v-else class="user gd_user">
                            <p>{{language.goods.goodsDet.sheets}}（0）</p>
                            <img class="arrow" :src="you_img" />
                        </div>
                        <template v-if="comments.length">
                            <div class="comments" v-for="(item, index) in comments" :key="index">
                                <div class="allCenter">
                                    <img class="img" :src="item.headimgurl ? item.headimgurl : niming" />
                                    <span class="span">{{ item.user_name }}</span>
                                </div>
                                <div class="time">{{ item.add_time }}</div>
                                <div class="disc">{{ item.content }}</div>
                            </div>
                        </template>
                        <div class="user" v-if="comments.length <= 0"><p class="font_30">{{language.goods.goodsDet.No_evaluation}}</p></div>
                    </div>
                    <div class="hr"></div>
                    <div class="shop_list" v-if="shop_list.shop_id">
                        <div class="store store1">
                            <div class="store1Div">
                                <img :src="shop_list.shop_logo" :class="{ bargainLogo: bargain }" />
                                <div>{{ shop_list.shop_name }}</div>
                            </div>
                            <div class="store_right">
                                <!-- #ifdef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU -->
                                <button class="share_btn" open-type="share" @tap="showShareMask(shop_list.shop_id)" id="copyshare" :data-clipboard-text="shareHref">
                                    <div class="goStore store1Div sharestore">{{language.goods.goodsDet.share_shop}}</div>
                                </button>
                                <!-- #endif -->
                                <!-- #ifndef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU -->
                                <div
                                    class="goStore store1Div sharestore"
                                    v-clipboard:copy="shareHref"
                                    @tap="showShareMask(shop_list.shop_id)"
                                    id="copyshare"
                                    :data-clipboard-text="shareHref"
                                >
                                    {{language.goods.goodsDet.share_shop}}
                                </div>
                                <!-- #endif -->
                                <div class="goStore store1Div" @tap="_goStore(shop_list.shop_id)">{{language.goods.goodsDet.Shop_in}}</div>
                            </div>
                        </div>
                        <div class="store store2">
                            <div class="store2Div">
                                <p>{{ shop_list.quantity_on_sale }}</p>
                                <div>{{language.goods.goodsDet.Goods_sale}}</div>
                                <div class="shuxian"></div>
                            </div>
                            <div class="store2Div">
                                <p>{{ shop_list.quantity_sold }}</p>
                                <div>{{language.goods.goodsDet.Sold}}</div>
                                <div class="shuxian"></div>
                            </div>
                            <div class="store2Div">
                                <p>{{ shop_list.collection_num }}</p>
                                <div>{{language.goods.goodsDet.follow}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="hr"></div>
                    <div class="goods_d" @tap="_goods_x" id="doogi">{{language.goods.goodsDet.Commodity_details}}</div>
                    <!--  商品详情    -->
                    <div class="content_d safe-area-inset-bottom " id="content_d" v-if="goods_x">
                        
                        <rich-text class="richtext" :nodes="pro.content"></rich-text></div>
                    <!--  规格参数   -->
                    <ul class="goods_spec" v-if="goods_g">
                        <li>
                            <div class="g_div"><div>{{language.goods.goodsDet.Trade_name}}：</div></div>
                            <p>{{ pro.name }}</p>
                        </li>
                        <li>
                            <!-- <div class="g_div"><div>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：</div></div> -->
                            <div class="g_div"><div>{{language.goods.goodsDet.brand}}：</div></div>
                            <p>{{ pro.brand_name }} * {{ pro.cat_name }}</p>
                        </li>
                        <li>
                            <div class="g_div"><div>{{language.goods.goodsDet.Commodity_number}}：</div></div>
                            <p>{{ pro_id }}</p>
                        </li>
                        <li>
                            <div class="g_div"><div>{{language.goods.goodsDet.classification}}：</div></div>
                            <p>{{ pro.cat_name }}</p>
                        </li>
                        <li>
                            <div class="g_div"><div>{{language.goods.goodsDet.After_sale}}：</div></div>
                            <p>{{language.goods.goodsDet.qianshou}}</p>
                        </li>
                    </ul>

                    <div class="goods_foot dgfhgfd" v-if="!bargain">
                        <view class="footer-hint" v-if="shop_list.is_open == 2">{{language.goods.goodsDet.close}}</view>
                        <view class="footer-hint" v-else-if="pro.recycle == '1'">{{language.goods.goodsDet.commodity_delete}}~</view>
                        <view class="footer-hint" v-else-if="pro.status == '3'">{{language.goods.goodsDet.shelf}}~</view>
                        <view class="footer-hint" v-else-if="pro.num == 0">{{language.goods.goodsDet.soldOut}}~</view>

                        <div class="goods_bottom safe-area-inset-bottom" :class="{ goods_bottoms: pro.status == '3' }">
                            <!-- #ifdef MP-WEIXIN -->
                            <div class="goods_one ml_25">
                                <button class="kf_button_css center" style="background: none;padding: 0;height: 100%;" type="primary" open-type="contact">
                                    <img :src="kf_img" />
                                    <p>{{language.goods.goodsDet.customer_service}}</p>
                                </button>
                            </div>
                            <!-- #endif -->

                            <!-- #ifdef MP-BAIDU -->
                            <div class="goods_one ml_25">
                                <button class="center" open-type="contact" bindcontact="contactCB" style="background:none;padding:0px;height: 100%;">
                                    <img :src="kf_img" />
                                    <p>{{language.goods.goodsDet.customer_service}}</p>
                                </button>
                            </div>
                            <!-- #endif -->

                            <!-- #ifndef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU -->
                            <div class="goods_one ml_25 center" @tap="kf(pro_id)">
                                <img :src="kf_img" />
                                <p>{{language.goods.goodsDet.customer_service}}</p>
                            </div>
                            <!-- #endif -->

                            <div class="goods_one center" @tap="_collection">
                                <img :src="collection ? xing_hei : xing_hui" />
                                <p v-if="collection">{{language.goods.goodsDet.Collected}}</p>
                                <p v-else>{{language.goods.goodsDet.Collection}}</p>
                            </div>

                            <template v-if="pro.status == '3' || pro.recycle == '1' || shop_list.is_open == 2 || pro.num == 0">
                                <div v-if="pro.is_distribution == '1' || active == '6'"><div class="goods_two  _buy" style="color: #333333;">立即购买</div></div>
                                <div v-else-if="pro.is_distribution == '0' && active != '6'">
                                    <div class="goods_two" style="background-color: #B8B8B8;">{{language.goods.goodsDet.add_cart}}</div>
                                    <div class="goods_two _buy1" style="background-color: #9A9A9A;">{{language.goods.goodsDet.Buy_now}}</div>
                                </div>
                            </template>
							<!--   购物车支付 -->
                            <template v-else>
                                <div v-if="pro.is_distribution == '1' || active == '6'"><div class="goods_two _buy" @tap="_buy">{{language.goods.goodsDet.Buy_now}}</div></div>
                                <div v-else-if="pro.is_distribution == '0' && active != '6'">
                                    <div class="goods_two" @tap="_shopping">{{language.goods.goodsDet.add_cart}}</div>
									  <div class="goods_two _buy2" @tap="_buy(1)"> 同城购买</div>
                                    <div class="goods_two cgffgf _buy1" @tap="_buy(2)">快递购买</div>
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="goods_foot" :style="{ height: height }" v-else>
                        <div class="goods_bottom goods_bottom_time" v-if="leftTime > 0">
                            {{language.goods.goodsDet.end}}：
                            <span v-if="day != 0">{{ day }}{{language.goods.goodsDet.day}}</span>
                            <span v-else>0{{language.goods.goodsDet.day}}</span>
                            <span v-if="hour != 0">{{ hour }}{{language.goods.goodsDet.Time}}</span>
                            <span v-else>00{{language.goods.goodsDet.Time}}</span>
                            <span v-if="mniuate != 0">{{ mniuate }}{{language.goods.goodsDet.branch}}</span>
                            <span v-else>00{{language.goods.goodsDet.branch}}</span>
                            <span v-if="second != 0">{{ second }}{{language.goods.goodsDet.second}}</span>
                            <span v-else>00{{language.goods.goodsDet.second}}</span>
                        </div>
                        <div class="goods_bottom bt_0">
                            <div class="goods_two goods_two_gd" @tap="navTo('/pagesA/bargain/bargain?topTabBar=true')">{{language.goods.goodsDet.More_bargains}}</div>
                           
                            <div v-if="leftTime <= 0 || brStatus == -1" class="goods_two btn-gray">{{language.goods.goodsDet.Bargain_now}}</div>
                            <div v-else-if="brStatus == 4 && isbegin == 1" class="goods_two btn-black" @tap="toBr()">{{language.goods.goodsDet.Bargain_now}}</div>
                            <div v-else-if="brStatus == 0 && leftTime > 0 && isbegin == 1" class="goods_two btn-black" @tap="toBr()">{{language.goods.goodsDet.Continue_bargain}}</div><!--@tap="toBr()" 继续砍价 -->
                            <div v-else-if="leftTime < 0 && isbegin == 1" class="goods_two btn-black">{{language.goods.goodsDet.Finished}}</div>
                            <div v-else-if="leftTime > 0 && isbegin != 1" class="goods_two btn-black">{{language.goods.goodsDet.Not_started}}</div>
                            <div v-else-if="brStatus == 1 && hasorder == 0 && isbegin == 1" :class="{gray:brStatus == 1 && hasorder == 0 && isbegin == 1}" class="goods_two btn-black" >{{language.goods.goodsDet.Bargain_now}}</div><!-- 去付款 -->
                           <!-- @tap="goPay()" -->
                           
                            <div
                                v-else-if="brStatus == 1 && hasorder == 1 && isbegin == 1 || brStatus == 1 && isbegin == 1"
                                class="goods_two btn-black"
                                :class="{gray:brStatus == 1 && hasorder == 1 && isbegin == 1 || brStatus == 1 && isbegin == 1}"
                                
                            >
                           <!-- @tap="navTo('/pages/order/order?order_id=' + sNo_id + '&showPay=true')" -->
                               {{language.goods.goodsDet.Bargain_now}}<!-- 待付款 -->
                            </div>
                            <div v-else-if="brStatus == 2 && isbegin == 1" :class="{gray:brStatus == 2 && isbegin == 1}" class="goods_two btn-black">{{language.goods.goodsDet.Bargain_now}}</div><!-- 已付款 -->
                            <div v-else-if="brStatus == 3 || leftTime < 0" :class="{gray:brStatus == 3 || leftTime < 0}" class="goods_two btn-black">{{language.goods.goodsDet.Bargain_now}}</div><!-- 砍价失败 -->
                        </div>
                    </div>
                    <div class="share" v-if="g_show">
                        <div><img :src="top_img" /></div>
                    </div>
                </div>

                <!-- 没数据 -->
                <div v-else>
                    <!--  轮播图   -->
                    <div class="relative">
                        <swiper class="swiper">
                            <swiper-item><img class="swipe skeleton-rect" src="" /></swiper-item>
                        </swiper>
                    </div>
                    <!-- 非砍价商品价格和名称 -->
                    <div class="goods_name" v-if="!bargain">
                        <p style="width: 80px;" class="goods_price skeleton-rect">
                            <span class="span">￥</span>
                            {{ mockPro.price }}
                        </p>
                        <p style="padding-bottom: 0;margin-bottom: 9px;height: 21px;" class="goods_proName skeleton-rect">{{ mockPro.name }}</p>
                        <div class="volume">
                            <span class="skeleton-rect">{{language.goods.goodsDet.Freight_rules}}：{{ mockPro.yunfei }}</span>
                            <span class="skeleton-rect">{{language.goods.goodsDet.sales_volume}}{{ mockPro.volume }}</span>
                        </div>
                    </div>
                    <!-- 砍价商品价格和名称 -->
                    <div class="goods_name goods_bargain_name skeleton-rect" v-else>
                        <p class="goods_price skeleton-rect">
                            xxxx{{language.goods.goodsDet.completed}}
                            <span class="cs_yprice skeleton-rect">xxxxx</span>
                            <span class="cs_price skeleton-rect">xxxx</span>
                        </p>
                        <p class="">{{ mockPro.name }}</p>
                    </div>
                    <div class="hr" v-if="isDistribution == false"></div>
                    <div class="coupon skeleton-rect" @tap="getCoupon()" v-if="isDistribution == false && !bargain && active != 6 && coupon_status == true">
                        <span class="">{{language.goods.goodsDet.Collect_coupons}}</span>
                    </div>
                    <div class="hr"></div>
                    <!-- 非砍价商品选择商品规格 -->
                    <div v-if="!bargain" class="guige skeleton-rect" @tap="_shopping1()" ref="homeHead">
                        <span>{{ haveSkuBean == '' ? '选择商品规格' : haveSkuBean.name }}</span>
                        <img class="arrow" :src="you_img" />
                    </div>
                    <div v-if="!bargain" class="hr"></div>
                    <div class="user gd_user skeleton-rect" v-if="comments.length && !bargain" @tap="_evaluate(pro_id)">
                        <p>{{language.goods.goodsDet.User_evaluation}}（{{ comments.length }}）</p>
                        <img class="arrow" :src="you_img" />
                    </div>
                    <div class="comments skeleton-rect" v-if="comments.length && !bargain">
                        <div class="allCenter">
                            <img class="img skeleton-circle" />
                            <span class="span skeleton-rect">xxxx</span>
                        </div>
                        <div class="time skeleton-rect">xxxx-xx-xx</div>
                        <div class="disc skeleton-rect">xxxxxxxxxxxxxxxxxxxxx</div>
                    </div>
                    <div class="user skeleton-rect"><p style="font-size: 30rpx;">{{language.goods.goodsDet.No_evaluation}}</p></div>
                    <!-- 砍价页面显示 -->
                    <div>
                        <div class="user gd_user" @tap="_evaluate(pro_id)">
                            <p class="skeleton-rect">{{language.goods.goodsDet.sheets}}（{{ comments.length }}）</p>
                            <img class="arrow" :src="you_img" />
                        </div>
                        <div class="user gd_user skeleton-rect">
                            <p>{{language.goods.goodsDet.sheets}}（0）</p>
                            <img class="arrow" :src="you_img" />
                        </div>
                        <template>
                            <div class="comments">
                                <div class="allCenter">
                                    <img class="img skeleton-circle" />
                                    <span class="span skeleton-rect">xxxxx</span>
                                </div>
                                <div class="time skeleton-rect">xxxx-xx-xx</div>
                                <div class="disc skeleton-rect">xxxxxxxxxxxxxx</div>
                            </div>
                        </template>
                        <div class="user skeleton-rect" v-if="comments.length <= 0"><p class="font_30">{{language.goods.goodsDet.No_evaluation}}</p></div>
                    </div>
                </div>
            </div>
        </div>
        
<!--        苹果底部黑条适配-->
        <div class="goods-detailed-safe-area-inset-bottom">
            
        </div>
        
        <skeleton :animation="true" :loading="true" v-if="!loadFlag" bgColor="#FFF"></skeleton>
        
        <!-- 分享弹框 -->
        <div class="mask" @tap="_shareDiv" v-if="shareDiv">
            <div class="allCenter">
                <!-- 兼容头条小程序 -->
                <!-- #ifdef MP-TOUTIAO -->
                <div @tap="_invite(shareWay[2].name)">
                    <div><img :src="shareWay[2].imgUrl" alt="" style="width: 80rpx;height: 80rpx;" /></div>

                    <span style="font-size: 24rpx;color: #666666;">{{ language.toasts.goodsDetailed.shareWay[2] }}</span>
                </div>
                <!-- #endif -->

                <!-- #ifndef MP-TOUTIAO -->
                <div v-for="(item, index1) in shareWay" :key="index1" @tap="_invite(item.name)">
                    <div><img :src="item.imgUrl" alt="" style="width: 80rpx;height: 80rpx;" /></div>

                    <span style="font-size: 24rpx;color: #666666;">{{ language.toasts.goodsDetailed.shareWay[index1] }}</span>
                </div>
                <!-- #endif -->
            </div>
        </div>

        <div class="mask" v-if="saveEWM">
            <div class="shareEwm" v-if="saveEWM">
                <image style="width: 80rpx;height: 80rpx;" v-if="!ewmImg" :src="load_img"></image>
                <img v-else :src="ewmImg" class="imgEwm" />

                <img :src="close" class="close" @tap="_closeAllMask" />

                <view class="saveEWMBtn" @tap="_downEWM()">
                    <img :src="saves" class="saves" />
                    {{language.goods.goodsDet.Save_picture}}
                </view>
            </div>
        </div>
        <!-- 分享弹框 -->
        <div class="mask" v-if="shareMask && !saveEWM" @tap="_closeAllMask">
            <!-- 邀请链接的弹框 -->
            <div class="h5_yaoqing" v-if="shareMask_H5">
                <div class="h5_top"><div class="h5_top_title"> {{language.goods.goodsDet.Invitation_link}}</div></div>

                <div class="h5_center"><input name="h5_input" id="h5_input" v-model="h5_url" readonly="readonly" /></div>

                <div class="h5_bottom">
                    <div>{{language.goods.goodsDet.cancel}}</div>
                    <div @tap="copyH5Url()">{{language.goods.goodsDet.Copy_link}}</div>
                </div>
            </div>
            <div class="shareMask" v-if="!shareMask_H5 && !saveEWM" @tap.stop>
                <div class="shareMaskTitle">{{language.goods.goodsDet.Share_with}}</div>

                <!-- #ifdef H5 -->
                <div class="sharepyq">
                    <div class="shareIcon" @tap="copy_url()">
                        <img :src="erm_pyq_img" />
                        <p>{{language.goods.goodsDet.Copy_link}}</p>
                    </div>
                    <div class="shareIcon" @tap="showSaveEWM('app')">
                        <img :src="erm_img" />
                        <p>{{language.goods.goodsDet.QR}}</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <!-- #endif -->

                <!-- #ifdef MP-WEIXIN -->
                <div class="sharepyq">
                    <div class="shareIcon">
                        <button class="share_btn" open-type="share">
                            <img :src="wx_img" />
                            <p class="p">{{language.goods.goodsDet.Wechat_friends}}</p>
                        </button>
                    </div>
                    <div class="shareIcon" @tap="showSaveEWM('wx')">
                        <img :src="erm_img" />
                        <p>{{language.goods.goodsDet.QR}}</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <!-- #endif -->

                <!-- #ifdef APP-PLUS -->
                <div class="sharepyq">
                    <div class="shareIcon width_33" @tap="_shareApp(1)">
                        <img :src="erm_pyq_img" />
                        <p>{{language.goods.goodsDet.Wechat_circle}}</p>
                    </div>
                    <div class="shareIcon width_33" @tap="_shareApp(2)">
                        <img :src="wx_img" />
                        <p>{{language.goods.goodsDet.Wechat_friends}}</p>
                    </div>
                    <div class="shareIcon width_33" @tap="showSaveEWM('app')">
                        <img :src="erm_img" />
                        <p>{{language.goods.goodsDet.QR}}</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <!-- #endif -->

                <div class="shareEnd" @tap="closeShareMask()">{{language.goods.goodsDet.cancel}}</div>
            </div>
        </div>

        <img class="zhiding" :src="zhiding" @tap="_zhiding" />

        <!-- 领取优惠券 -->
        <div class="mask" v-if="couponMask">
            <div class="couponMask">
                <div class="couponWapper">
                    <div class="title">
                        <div style="font-weight: bold;">{{language.goods.goodsDet.Collect_coupons}}</div>
                        <img class="cha" :src="guan_img" @tap="closeCouponMask" />
                    </div>
                    <div class="couponList" v-if="coupon_list && coupon_list.length > 0">
                        <div class="couponItem" v-for="(item, index) in coupon_list" :key="index">
                            <div class="rightPart">
                                <div class="limit">{{ item.name }}</div>
                                <span class="money" v-if="item.activity_type == 1">{{language.goods.goodsDet.free_shipping}}</span>
                                <span class="money" v-if="item.activity_type != 1">
                                    <span class="font_32" v-if="item.money > 0">￥</span>
                                    {{ item.money > 0 ? item.money : item.discount }}
                                    <span class="font_32" v-if="item.money <= 0">{{language.goods.goodsDet.fracture}}</span>
                                </span>
                                <span class="payLine">{{ item.limit }}</span>
                            </div>

                            <div class="splitLine"></div>

                            <div class="leftPart">
                                <button class="toReceive" v-if="item.point == '立即领取'" @tap="_receive(index, item.id)">{{ language.goods.goodsDet.lingqu }}</button>
                                <button class="toReceive clicks" v-else-if="item.point == '可用商品'">{{language.goods.goodsDet.Received}}</button>
                                <img class="img" alt="" v-if="item.point == '可用商品'" :src="coupon_on" />
                            </div>
                        </div>
                    </div>

                    <div v-else class="no_coupon">
                        <img :src="no_coupon" alt="" />
                        <p>{{language.goods.goodsDet.coupons}}~</p>
                    </div>
                </div>
            </div>
        </div>
        <ruleModal v-model="isShow" @click="_toGradeUse" :title="language.goods.goodsDet.Usage_rules" :details="bargain_content" />
        
        <skus ref="attrModal" :stock="language.goods.goodsDet.stock" :nums="language.goods.goodsDet.number" :confirm="language.goods.goodsDet.confirm" @confirm="_confirm"></skus>
    </div>
</template>

<script>
    import heads from '../../components/header.vue';
    import skus from '../../components/skus.vue';
    import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue';
    import {mapMutations, mapState} from 'vuex';
    import {mockPro} from '@/mock/goodsDetailed/goodsDetailed.js';
    // #ifdef H5
    import jQuery from '../../common/jquery.js';
    // #endif
    import {
        LaiKeTui_axios,
        LaiKeTui_buy_handle,
        LaiKeTui_collection,
        LaiKeTui_confirm,
        LaiKeTui_receive,
        LaiKeTui_shopping,
        LaiKeTui_spec,
        LaiKeTuiGetCoupon,
        LaiKeTuiInvite,
        LaiKeTuiSetTimeData,
        LaiKeTuiShopEWM,
        LaiKeTuiShowSaveEWM,
        LaiKeTuiShowState,
        LaiKeTuiToBr
    } from '../../static/js/goods/goodsDetailed.js';
    import ruleModal from '@/components/ruleModal.vue';
    import toload from '../../components/toload.vue';
    import htmlParser from '@/common/html-parser.js';

    export default {
    data() {
        return {
			leixing:0,
            mockPro,
            back1: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/back2x_w.png',
            niming: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/landing_logo2x.png', //图片
            zhiding: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/zhiding.png', //置顶
            coupon_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/coupon_detail.png',
            guan_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/guanbi2x.png',
            close: '',
            saves: '',
            cs_yprice: '',
            cs_price: '',
            cs_num: '',
            hour: 0,
            mniuate: 0,
            second: 0,
            day: 0,
            leftTime: '',
            attr_id: '',
            bargain: false,
            bargain_rule: '', //砍价规则
            bargain_content: '', //砍价规则
            isShow: '',
            shop_list: [],
            option: '',
            overflow: 'scroll',
            
            fastTap: true,
            axios_complete: false, //是否已加载完初始数据
            title: '商品详情',
            
            shop_id: '',
            bback_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/bback.png',
            fx_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/fx.png',
            gw_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/gw.png',
            
            you_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jiantouhei2x.png',
            kf_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/kefu2x.png',
            top_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/kaobei2x.png',
            
            wx_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/wechat.png',
            
            xing_hei: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/xinghei2x.png?v='+Math.random(),
            xing_hui: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/xinghui2x.png',
            erm_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/ewmShare.png',
            erm_pyq_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/wepyq.png',
            coupon_on: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/coupon_on.png',
            no_coupon: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/noFind.png',
            attribute_id: '',
            attrList: '',
            
            ys_price: '', //规格初始价格
            
            collection_id: '', //收藏id
            pro: '', //商品信息
            comments: '', //评价信息
            
            collection: '', //收藏状态
            type: '', //判断进入规格选择是从立即购买1、加入购物车2、规格选择进入3
            goods_x: true,
            goods_g: false,

            g_show: false, //回顶部显示
            imgurls: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/landing_logo.png', //图片
            load: true,
            shareMask: false,
            saveEWM: false,
            shares: {},
            shareContent: '一起来用来客推吧！', //分享的内容
            shareHref: '', //分享的链接
            shareHref2: '', //转发的链接
            sharehrefTitle: '一起来用来客推吧!', //分享的链接的标题
            sharehrefDes: '一起来用来客推吧!', //分享的链接的描述
            shareImg: '', //分享的图片
            shareDiv: false,
            pic: '',
            logo: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/lktlogo.png',
            list_end: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jp_end.png',
            pro_id: '',
            order_no: '',
            brStatus: '',
            bargain_id: '',
            isDistribution: false, //是否是分销商品？true是，false不是
            ewmImg: '', //二维码图片
            login_status: '', //0:未登录；1已登录
            is_grade: '', //0:不是会员 1：是会员
            active: '', //活动类型
            hasorder: 0, //是否是待付款 0|1(待付款)
            sNo_id: 0, //订单id
            isbegin: 1, //是否是已开始的砍价商品 0（否）|1（是）
            shareMask_H5: false,
            h5_url: '',
            isfx: '',
            shareshop: 0,
            shareWay: [
                // #ifndef MP-WEIXIN
                {
                    name: '微信',
                    imgUrl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/wechat.png'
                },
                {
                    name: '朋友圈',
                    imgUrl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/fdc.png'
                },
                {
                    name: '二维码分享',
                    imgUrl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/ewmShare.png'
                }
                // #endif
            ],
            couponMask: false,
            coupon_list: [],
            clicktimes: [], //记录点击buy按钮时的时间
            allCartNum: 0, //购物车的总商品数
            status: '2',
            is_shop: false,
            headerplus: false,
            coupon_status: false,
            coupon_str: [], //显示的优惠券图标
            swiperIndex: 1, //轮播图下标

            loadFlag: false,
            
            num: '', //规格数量
            numb: '', 
            haveSkuBean: '', //选择规则属性
        };
    },
    computed: {
        halfWidth: function() {
            var gru = uni.getStorageSync('data_height') ? uni.getStorageSync('data_height') : this.$store.state.data_height;
            var heigh = (parseInt(gru) + 44) * 2;
            heigh = uni.upx2px(heigh)
            return heigh + 'px';
        },
        height: function() {
            if (this.leftTime > 0) {
                return uni.upx2px((750 * 79) / 375) + 'px';
            }
        },
        ...mapState({
            _cart_num: 'cart_num'
        })
    },
    beforeCreate() {
        // #ifdef H5
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
        // #endif
    },
    onLoad(option) {
        this.setLang();
		uni.setStorageSync('jz', 1)
        this.shareContent = this.language.showModal.shareContent
        this.sharehrefTitle = this.language.showModal.shareContent
        this.sharehrefDes = this.language.showModal.shareContent
        
        this.option = option;
        this.fastTap = true;

        this.leftTime = option.leftTime;

        this.isfx = option.isfx;
        if (option.productId) {
            this.pro_id = option.productId;
        } else if (option.pro_id) {
            this.pro_id = option.pro_id;
        }
        this.bargain_id = option.bargain_id;
        this.bargain = option.bargain;
        this.brStatus = option.brStatus;
        console.log(this.brStatus);
        this.attr_id = option.attr_id;
        this.order_no = option.order_no;
        this.sNo_id = option.sNo_id;
        this.isbegin = option.isbegin;
        if (this.bargain) {
            this.LaiKeTuiSetBargainRuleData();
        }

        if (this.pro_id == '' || this.pro_id == undefined) {
            this.pro_id = this.$store.state.pro_id;
        }

        if (option.isDistribution) {
            this.isDistribution = option.isDistribution;
        }
        
        this.hasorder = option.hasorder;
        console.log(this.hasorder);
        uni.setStorageSync('fatherId', option.fatherId);
    },
    onShow(option) {
        this.allCartNum = this.$store.state.cart_num;
        this.close = this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/close_bb.png';
        this.saves = this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/save.png';
        this.fastTap = true;

        let p = new Promise((resolve, reject) => {
            this.LaiKeTuiCommon.getLKTApiUrl().then(function() {
                resolve(1231);
            });
        });

        p.then(() => {
            this._axios();

            this.$nextTick(function() {
                uni.getProvider({
                    service: 'share',
                    success: function(res) {
                        console.log(res.provider);
                    }
                });
            });
        });

        this.couponMask = false;
    },
    //转发
    onShareAppMessage: function(res) {
        if (this.login_status == 0) {
            uni.navigateTo({
                url: '/pages/login/login?landing_code=1'
            });
        } else {
            return {
                title: this.sharehrefTitle,
                path: this.shareHref2,
                imageUrl: this.shareImg,
                bgImgUrl: this.shareImg,
                success: function(res) {
                    this.shareHref2 = '/pages/goods/goodsDetailed?productId=' + this.pro_id;
                }
            };
        }
    },
    methods: {
        SetTimeData() {
            LaiKeTuiSetTimeData(this);
        },
        swiperChange(e) {
            this.swiperIndex = e.detail.current + 1;
        },
        _zhiding() {
            uni.pageScrollTo({
                scrollTop: 0,
                duration: 300
            });
        },
        setHead() {
            const query = uni.createSelectorQuery().in(this);
            query
                .select('#boxs')
                .boundingClientRect(data => {
                    if (data.top > -20) {
                        this.headerplus = false;
                    } else if (data.top < -20) {
                        this.headerplus = true;
                    }
                })
                .exec();
        },
        //授权取消按钮
        cancle() {
            this.fastTap = true;
        },
        changeLoginStatus() {
            this.login_status = 1;
            this.fastTap = true;

            this._axios();
        },
        copy_url() {
            this.shareMask_H5 = true;
            this.h5_url = this.shareHref;
        },
        copyH5Url() {
            jQuery('#h5_input input').select();
            document.execCommand('Copy');
        },
        goPay() {
            
            if (!this.bargain_id) {
                let product = [];
                product.push({
                    pid: this.pro_id
                });
                product.push({
                    cid: this.attr_id
                });
                product.push({
                    num: 1
                });
                product = JSON.stringify(product);
                uni.navigateTo({
                    url: '/pages/pay/orderDetailsr?product=' + product + '&bargain=true&bargain_id=' + this.bargain_id + '&order_no=' + this.order_no + '&returnR=2'
                });    
            } else {
                let product = []
                product.push({
                    pid: this.pro_id
                })
                product.push({
                    cid: this.attr_id
                })
                product.push({
                    num: 1
                })
                product.push({
                    bargain: true
                })
                product.push({
                    bargain_id: this.bargain_id
                })
                product.push({
                    order_no: this.order_no
                })
                product = JSON.stringify(product)

                //#ifdef H5
                var storage = window.localStorage
                storage.product = product
                storage.bargain = true
                storage.bargain_id = this.bargain_id
                storage.order_no = this.order_no
                uni.setStorageSync('bargain', true)
                // #endif
                uni.navigateTo({
                    url: '/pagesA/bargain/bargainDetailsr?product=' + product + '&bargain=true&bargain_id=' + this.bargain_id + '&order_no=' + this.order_no + '&returnR=2'
                });    
            }
            
        },
        toBr() {
            if (this.pro.num < 1) {
                uni.showToast({
                    title: this.language.goods.goodsDet.stock,
                    icon: 'none',
                    duration: 1500
                });
                return;
            }
            LaiKeTuiToBr(this);
        },
        _goStore(shop_id) {
            uni.navigateTo({
                url: '/pagesA/store/store?shop_id=' + shop_id
            });
        },
        
        _closeAllMask() {
            this.shareMask = false;
            this.saveEWM = false;
            this.shareMask_H5 = false;
            this.overflow = 'scroll';
        },
        _shareDiv() {
            this.shareDiv = false;
        },
        _invite(type) {
            LaiKeTuiInvite(type, this);
        },
        _goRule() {
            this._toGradeUse(true);
        },
        _goback() {
            if (this.option.toback == 'true') {
                uni.navigateBack({
                    delta: 1
                });
                return;
            }
            // #ifdef H5
            uni.reLaunch({
                url: '/pages/tabBar/home'
            });
            // #endif
            // #ifndef H5
            if (this.isfx == 'true') {
                uni.reLaunch({
                    url: '/pages/tabBar/home'
                });
                return false;
            } else {
                uni.navigateBack({
                    delta: 1
                });
            }
            // #endif
        },
        _downEWM() {
            let me = this;
            uni.downloadFile({
                url: this.ewmImg,
                success(res) {
                    let filePath = res.tempFilePath;
                    uni.saveImageToPhotosAlbum({
                        filePath: filePath,
                        success () {
                            uni.showToast({
                                title: me.language.goods.goodsDet.Save_success,
                                duration: 1500,
                                icon: 'none'
                            });
                            me.shareMask = false;
                            me.saveEWM = false;
                        },
                        fail: function() {
                            uni.showToast({
                                title: me.language.goods.goodsDet.fail_success,
                                duration: 1500,
                                icon: 'none'
                            });
                        }
                    });
                },
                fail: function() {
                    uni.showToast({
                        title: me.language.goods.goodsDet.fail_success,
                        duration: 1500,
                        icon: 'none'
                    });
                }
            });
        },
        _shareApp(type) {
            var scene = '';
            if (type == 1) {
                //App分享到 微信朋友圈
                scene = 'WXSenceTimeline';
            } else if (type == 2) {
                //App分享到 微信好友
                scene = 'WXSceneSession';
            }
            uni.share({
                provider: 'weixin',
                scene: scene,
                type: 2,
                imageUrl: this.ewmImg,
                success: function(res) {},
                fail: function(err) {}
            });
        },

        showShareMask(shop) {
            if (shop && shop > 0) {
                this.is_shop = true;
                this.shop_id = shop;
                this.sharehrefTitle = this.shop_list.shop_name;
                this.shareImg = this.shop_list.shop_logo;
                this.shareContent = this.shop_list.shop_name;
                var url = uni.getStorageSync('h5_url');
                this.shareHref = url + 'pagesA/store/store?is_share=true&shop_id=' + shop;
                this.shareHref2 = '/pagesA/store/store?is_share=true&shop_id=' + shop;
            } else {
                this.is_shop = false;
                this.shareHref2 = '/pages/goods/goodsDetailed?productId=' + this.pro_id + '&isfx=true';
                this.sharehrefTitle = this.pro.name;
                this.shareImg = this.imgurl;
                this.shareContent = this.pro.name;
                var url = uni.getStorageSync('h5_url');
                this.shareHref = url + 'pages/index/share?pages=goodsDetailed&productId=' + this.pro_id + '&isfx=true';
                if (this.pro.is_distribution == 1) {
                    this.isDistribution = true;
                    this.shareHref = url + 'pages/index/share?pages=goodsDetailed&productId=' + this.pro_id + '&isfx=true&fatherId=' + this.pro.user_id;
                    this.shareHref2 = '/pages/goods/goodsDetailed?productId=' + this.pro_id + '&isfx=true&fatherId=' + this.pro.user_id;
                }
            }

            this.isLogin(() => {
                // #ifdef H5

                uni.showToast({
                    title: this.language.goods.goodsDet.copy_success,
                    duration: 1500,
                    icon: 'none'
                });
                return false;

                // #endif

                // #ifndef H5
                // #ifdef MP-WEIXIN
                this.shareMask = true;
                // #endif
                // #ifndef MP-WEIXIN
                // #ifndef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU
                this.shareDiv = true;
                // #endif
                // #endif
                // #endif
            });
        },
        closeShareMask() {
            this.shareMask = false;
            this.overflow = 'scroll';
        },
        showSaveEWM(string) {
            if (this.is_shop) {
                LaiKeTuiShopEWM(string, this);
            } else {
                LaiKeTuiShowSaveEWM(string, this);
            }
        },
        kf(pro_id) {
            this.isLogin(() => {
                uni.navigateTo({
                    url: '/pages/message/service?pid=' + pro_id
                });
            });
        },
        _load_img() {
            this.load = false;
        },
        _goods_x() {
            this.goods_x = true;
            this.goods_g = false;
        },
        _goods_g() {
            this.goods_x = false;
            this.goods_g = true;
        },
        ...mapMutations({
            cart_id: 'SET_CART_ID',
            order_id: 'SET_ORDER_ID',
            address_id: 'SET_ADDRESS_ID',
            pay_lx: 'SET_PAY_LX',
            cart_num: 'SET_CART_NUM'
        }),
        _evaluate(pro_id) {
            if (this.bargain) {
                uni.navigateTo({
                    url: '/pages/evaluate/evaluate?bargain=true&pid=' + pro_id
                });
            } else {
                uni.navigateTo({
                    url: '/pages/evaluate/evaluate?pid=' + pro_id
                });
            }
        },

        //收藏
        _collection() {
            LaiKeTui_collection(this);
        },
        //规格选择
        _selectG() {
            this.type = 1;
            this._mask_display();
        },
        //加入购物车
        _shopping() {
            if (this.status == 2) {
                LaiKeTui_shopping(this);
            } else {
                uni.showToast({
                    title: this.language.goods.goodsDet.shelf2,
                    icon: 'none'
                });
            }
        },
        _shopping1() {
            this.type = 1;
            this.fastTap = true;
            this._mask_display();
        },
        getCoupon() {
            LaiKeTuiGetCoupon(this);
        },
        _receive(index, id) {
            this.isLogin(() => {
                LaiKeTui_receive(this, id);
            });
        },
        closeCouponMask() {
            this.couponMask = false;
        },
		// 点击购买调用的方法
        _buy(val) {
			// 等于1 达达
		  this.leixing=val
				
            if (!this.axios_complete) {
                return false;
            }
            if (this.status == 2) {
					
					
                if (this.pro.canbuy == 1) {
					
                    this.LaiKeTuiCommon.laiketuiNoDoublePress(this, this._buy_handle);
					// this._buy_handle(this,this.leixing)
                } else {
                    if (this.active == 5) {
						
                        uni.showToast({
                            title: this.language.goods.goodsDet.Membership_level,
                            icon: 'none'
                        });
                    } else {
                        uni.showToast({
                            title: this.language.goods.goodsDet.distribution,
                            icon: 'none'
                        });
                    }
                }
            } else {
                uni.showToast({
                    title: this.language.goods.goodsDet.shelf2,
                    icon: 'none'
                });
            }
            if (this.active == 6) {
			
                if (this.is_grade == 0 && this.login_status == 1) {
                    uni.showToast({
                        icon: 'none',
                        title: this.language.goods.goodsDet.no_vip
                    });
                }

                return;
            }
        },
        //立即购买
        _buy_handle() {
			console.log(55)
            LaiKeTui_buy_handle(this,this.leixing);
        },
        //打开遮罩层
        _mask_display() {
            this.$refs.attrModal._mask_display()
        },
        
        //确认
        _confirm(sku) {
	
            Object.assign(this.$data,sku)
            LaiKeTui_confirm(this);
        },
        _spec() {
            LaiKeTui_spec(this);
        },
        //选择属性
        showState(index, indx) {
            LaiKeTuiShowState(this, index, indx);
        },
        _axios() {
            LaiKeTui_axios(this);
            this.axios_complete = true;
        },
        _toGradeUse(is) {
            if (is) {
                this.bargain_content = htmlParser(this.bargain_rule);
                this.isShow = !this.isShow;
            } else {
                this.isShow = !this.isShow;
            }
        },
        /**
         * 设置砍价规则
         * @param me
         * @constructor
         */
        LaiKeTuiSetBargainRuleData() {
            let data = {
                m: 'getRule',
                action: 'bargain',
                module: 'app'
            };

            this.$req.post({ data }).then(res => {
                this.bargain_rule = res.rule;
            });
        }
    },
    components: {
        heads,
        wxParse,
        // #ifdef H5
        jQuery,
        // #endif
        toload,
        ruleModal,
        skus
    }
};
</script>

<style lang="less" scoped>
@import url('../../static/css/goods/goodsDetailed.less');
.gray{
  background: #9A9A9A;
  color: white;
}
button::after {
	border: none !important;
}
</style>
