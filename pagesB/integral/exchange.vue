<template>
    <view class="container" :style="{background: !list.length?'#ffffff':''}">
        <heads :title="language.integral.exchange.title" :border="true"></heads>
        
        <toload v-if="loadFlag"></toload>
        <view class="content" v-else>
            <view class="list" v-for="item,index of list" :key="index" @tap="toOrder(item.id)">
                <image :src="item.imgurl" lazy-load="true"></image>
                
                <view class="list_right">
                    <view class="list_right_title">{{item.product_title}}</view>
                    
                    <view class="list_right_price">
                        ￥
                        <view>
                            {{item.money}}+
                            <image :src="integral" mode=""></image>
                            {{item.integral}}
                        </view>
                    </view>
                    
                    <text>{{language.integral.exchange.title}}：{{item.add_time}}</text>
                </view>
            </view>
			
			<div class='empty_play' v-if='(!list.length) && !loadFlag'>
			    <img :src="exchangeNo"/>
			    <p class='empty_p'>{{language.integral.exchange.Tips[0]}}~</p>
			    <div class="empty_btn" @tap="navToHome()">{{language.integral.exchange.Tips[1]}}</div>
			</div>
            
            <uni-load-more v-if="list.length > 9" :loadingType="loadingType"></uni-load-more>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: '我的兑换',
            integral: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/integral.png',
            exchangeNo: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/exchangeNo.png',
            page: 1,
            list: [],
            loadingType: 0,
			
			loadFlag: true,
        };
    },
    onLoad(option) {
        this.axios();
    },
    onReachBottom() {
        if(this.loadingType!=0){
            return
        }
        this.loadingType = 1
        
        this.page++
        this.axios()
    },
    methods: {
        /**
         *
         * 查看订单详情
         */
        toOrder(id) {
            let url = '/pages/order/order?order_id=' + id;
        
            uni.navigateTo({
                url
            });
        },
        axios(){
            let data = {
                module: 'app',
                action: 'integral',
                app: 'my_exchange',
                page: this.page
            }
            
            this.$req.post({data}).then(res=>{
                let { code, message, list } = res
                if(code == 200){
                    if(this.page == 1){
                        this.list = []
                    }
                    
                    this.list.push(...list)
                    
                    if(list.length>0){
                        this.loadingType = 0
                    }else{
                        this.loadingType = 2
                    }
					
					this.loadFlag = false
                }else{
                    uni.showToast({
                        title: message,
                        icon: "none"
                    })
                }
            })
        }
    },
};
</script>

<style lang="less">
@import url('../../static/css/integral/exchange.less');
</style>
