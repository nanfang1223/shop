<template>
    <view class="rePlay">
        <view id="myVideo" class="video">
            <video :src="src"
                   object-fit="fill"
                   :autoplay="true"
                   show-play-btn
                   show-center-play-btn
                   enable-progress-gesture
                   enable-play-gesture
                   auto-pause-if-navigate
                   auto-pause-if-open-native
                   :poster="img"
                   @ended='playNext'
            >
            </video>
        </view>
        <view class="goods" @tap="showPopup=true" :style="'background-image: url('+goodsImgBox+');'">
            <text>{{goodsNum}}</text>
        </view>
        <!-- 遮罩 -->
        <view class="popup" @tap="showPopup = false" v-if="showPopup">
            <view class="goodBox">
                <view>{{language.liveReplay.Live_products}}({{goodsNum}})</view>
                <scroll-view scroll-y="true" class="goodScroll">
                    <view v-for="(item,index) in replayGoods" :key="index" @tap.stop="toGoodDetail(item.url)">
                        <view class="left">
                            <image :src="item.cover_img" mode=""></image>
                            <text>{{index}}</text>
                            <view @tap.stop="toGoodDetail(item.url)">{{language.liveReplay.go_buy}}</view>
                        </view>
                        <view class="right">
                            <text>{{item.name}}</text>
                            <text>￥{{item.price}}</text>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>

    </view>
</template>

<script>
    export default {
        data () {
            return {
                title: '',
                roomid: '',
                src: '',  //回放链接
                img: '',
                isMore: true, //是否有多条视频
                currentPlay: 0,
                total: 0,  //视频总条数
                goodsImgBox: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/goodBox.png',
                goodsNum: 0, //商品总数
                showPopup: false,  //商品弹窗
                replayGoods: [],
                guan_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/guanbi2x.png',
            }
        },
        onReady () {
            this.videoContext = uni.createVideoContext('myVideo')
        },
        onLoad (option) {
            this.img = option.img
            uni.setNavigationBarTitle({
                title: option.title
            })
            this.getReplayList(option.roomID)
            this.replayGoods = this.$store.state.replayGoods
            this.goodsNum = this.$store.state.replayGoods.length
        },
        methods: {
            async getReplayList (roomid) {
                let data = {
                    module: 'app',
                    action: 'liveBroadcast',
                    app: 'getLiveHistory',
                    start: 0,
                    limit: 10,
                    roomid: roomid
                }
                let res = await this.$req.post({ data })
                // console.log(res)
                if (res.code == 200) {
                    this.total = res.list.total
                    if (res.list.total == 1) {
                        this.isMore = false
                    } else {
                        this.currentPlay = 0
                    }
                    let reversArr = res.list.live_replay.reverse()
                    this.playList = reversArr
                    this.src = reversArr[0].media_url
                }

            },
            // 结束
            playNext () {
                if (this.isMore) {
                    if (this.total - 1 == this.currentPlay) {
                        uni.showToast({
                            title: this.language.liveReplay.over
                        })
                        this.isMore = false
                    } else {
                        this.currentPlay++
                        this.src = this.playList[this.currentPlay]
                    }
                }
            },
            toGoodDetail (url) {
                uni.navigateTo({
                    url: `/${url}`
                })
            }
        },
    }
</script>

<style lang="less" scoped>
    .rePlay {
        position: relative;
    }

    .video {
        width: 100%;
        height: 100vh;

        video {
            width: 100%;
            height: 100vh;
        }
    }

    .goods {
        position: absolute;
        bottom: 130rpx;
        right: 30rpx;
        width: 130rpx;
        height: 150rpx;
        text-align: center;
        background-size: contain;
        background-repeat: no-repeat;

        text {
            line-height: 180rpx;
            font-weight: bold;
            color: #fff;
            font-size: 28rpx;
        }
    }

    // 遮罩
    .popup {
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
        position: fixed;
        top: 0;
        left: 0;

        .goodBox {
            width: 100%;
            max-height: 40vh;
            border-radius: 20rpx 20rpx 0 0;
            background-color: #fff;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 24rpx;
            box-sizing: border-box;

            & > view {
                font-size: 28rpx;
                color: #666;
                padding-bottom: 30rpx;
            }

            .goodScroll {
                max-height: 40vh;
                margin-bottom: 10rpx;

                view {
                    display: flex;

                    .left {
                        width: 160rpx;
                        height: 160rpx;
                        position: relative;

                        image {
                            width: 100%;
                            height: 100%;
                        }

                        text {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 60rpx;
                            line-height: 36rpx;
                            text-align: center;
                            background: rgba(0, 0, 0, .3);
                            color: #fff;
                            font-size: 24rpx;
                        }

                        view {
							.solidBtn();
                            width: 120rpx;
                            line-height: 60rpx;
                            text-align: center;
                            font-size: 28rpx;
                            position: absolute;
                            bottom: 20rpx;
                            right: -457rpx;
                            border-radius: 15rpx;
                            box-sizing: border-box;
                            padding-left: 16rpx;
                        }
                    }

                    .right {
                        flex: 1;
                        display: flex;
                        flex-flow: column;
                        justify-content: space-around;
                        font-size: 24rpx;
                        margin-left: 20rpx;

                        &text:nth-child(1) {
                            color: @uni-text-color;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }

                        &text:nth-child(2) {
                            color: @uni-text-color-obvious;
                        }
                    }
                }
            }
        }
    }
</style>
