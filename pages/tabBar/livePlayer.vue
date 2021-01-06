<template>
    <view class="live">
        <heads :title="language.livePlayer.title" :border="true" :returnFlag="true" ishead_w="1"></heads>
        <view class="topBarBox">
            <view v-for="(item, index) in topBar" :key="index" 
             :class="currentIndex == index ? 'checked' : ''" @tap="changeTab(index)"
            >
                {{ item }}
            </view>
        </view>
        
        <div class="skeleton" v-if="!load">
            <div >
                <view class="liveItem">
                    <view class="box" v-for="(item, index) of 4" :key="index">
                        <view class="imgBox">
                            <img class="skeleton-rect" src="" alt="" />

                            <view class="imgfooter">
                                <view class="left skeleton-rect">
                                </view>
                            </view>
                        </view>
                        <view class="under skeleton-rect">
                            <view>{{language.livePlayer.live_broadcast}}</view>
                        </view>
                    </view>
                </view>
            </div>
        </div>
        
        
        <!-- 无数据的时候 -->
        <view class="null" v-if="isNull">{{language.livePlayer.no_data}}</view>
        <!-- 直播列表的组件 -->
        <scroll-view scroll-y="true" class="scroll" lower-threshold="10"  @scrolltolower="getLiveList" v-else >
            <view><live-item :liveList="list"></live-item></view>
        </scroll-view>
        <uni-load-more v-if="list.length > 4" :loadingType="loadingType"></uni-load-more>

        <skeleton :animation="true" :loading="!load" bgColor="#FFF"></skeleton>
        
    </view>
</template>

<script>
import liveItem from '../../components/liveItem.vue';

export default {
    data() {
        return {
            topBar: ['正在直播', '未开始', '已结束'],
            currentIndex: 0,
            notStartList: [], //未开始的
            endList: [], //结束的数据
            Listing: [], //进行中数据
            list: [], //传给组件的的数组
            isNull: false,
            start: 0,
            limit: 10 ,//一次返5条吧
            loadingType: 0,
            load: false,
        };
    },
    onShow(){
		uni.setStorageSync('jz', 1)
        this.$nextTick(() => {
            this.load = false
            this.start = 0;
            this.notStartList = []
            this.endList = []
            this.Listing = [] 
            this.list = []
            this.loadingType = 0
            this.isNull = false
            this.getLiveList()
        });
        this.topBar = this.language.livePlayer.topBar
    },
    methods: {
        async getLiveList() {
            this.loadingType = 1;
            if(this.loadingType === 2){
                return;
            }
            let data = {
                module: 'app',
                action: 'liveBroadcast',
                app: 'getLiveList',
                start: this.start,
                limit: this.limit
            };
            let res = await this.$req.post({ data });

            if (res.code === 200) {
                this.start = this.start+this.limit
                this.classificationByStatus(res.list.room_info);
                this.loadingType = 0;
            }else if(res.code === 400){
                this.loadingType = 2
            }else {
                this.isNull = true;
            }
            this.load = true;
        },
        /* 把数据根据状态分类
         * 101 直播中
         * 102未开始
         * 103已结束
         */
        classificationByStatus(allList) {
            allList.filter(item => {
                if (item.live_status === 101) {
                    this.Listing.push(item);
                } else if (item.live_status === 102) {
                    this.notStartList.push(item);
                } else if (item.live_status === 103) {
                    this.endList.push(item);
                }
            });
            // 根据tabs选中的哪一个渲染对应的数据
            switch (this.currentIndex){
                case 0:
                    this.list = this.Listing
                    break;
                case 1:
                    this.list = this.notStartList
                    break;
                case 2:
                    this.list = this.endList
                    break;
            }
            if (!this.list.length) {
                this.isNull = true;
            }
        },
        // 切换导航
        changeTab(index) {
            this.currentIndex = index;
            switch (index) {
                case 0:
                    this.list = this.Listing;
                    break;
                case 1:
                    this.list = this.notStartList;
                    break;
                case 2:
                    this.list = this.endList;
                    break;
            }
            this.isNull = this.list.length === 0;
        }
    },
    components: {
        liveItem
    }
};
</script>

<style lang="less" scoped>
.null {
    width: 100%;
    line-height: 100rpx;
    text-align: center;
    color: #999;
    font-size: 24rpx;
    padding-top: 50px;
}

.topBarBox {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 90rpx;

    view {
        font-size: 28rpx;
        color: @uni-text-color-grey;
        text-align: center;
        flex: 1;
    }
}

.checked {
    position: relative;
    color: @btnBackground !important;

    &::after {
        content: '';
        position: absolute;
        width: 120rpx;
        height: 2px;
        background-color: @btnBackground;
        bottom: 0;
        left: 64rpx;
    }
}

.scroll {
    box-sizing: border-box;
    height: 81vh;
}
.skeleton {
    .liveItem {
        width: 95%;
        margin: 10rpx auto;
        display: grid;
        grid-column-gap: 20rpx;
        grid-template-columns: 1fr 1fr;
        font-size: 24rpx;
    }

    .box {
        border-radius: 20rpx 20rpx 0 0;
        box-shadow: 0px 0px 15px 2px #eee;
        margin-bottom: 20rpx;

        .imgBox {
            img {
                width: 340rpx;
                height: 440rpx;
                border-radius: 20rpx 20rpx 0 0;
            }

            position: relative;

            .tips {
                position: absolute;
                top: 16rpx;
                left: 10rpx;
                font-size: 24rpx;
                color: #fff;

                view {
                    padding: 8rpx 10rpx;
                    border-radius: 20rpx;

                    image {
                        width: 32rpx;
                        height: 32rpx;
                        margin-right: 5rpx;
                        vertical-align: middle;
                    }
                }
            }

            .imgfooter {
                width: 94%;
                position: absolute;
                bottom: 0;
                font-size: 24rpx;
                padding: 10rpx;
                color: #fff;
                background-image: linear-gradient(to top, #333, transparent);
            }
        }

        .under {
            margin: 10rpx;
            padding: 10rpx 0 0 0;
        }
    }

    .red {
        background-image: linear-gradient(to right, #ff7272, #ff4444);
    }

    .blue {
        background-image: linear-gradient(to right, #50b6f4, #4b9af3);
    }

    .black {
        background-image: linear-gradient(to right, #ffa03a, #ffbd42);
    }
}
</style>
