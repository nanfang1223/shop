<template>
    <div class="login_contaienr">
        <heads :title="title"></heads>
        <div class="phone_container">
            <!-- 登录表单 -->
            <div class="content">
                <div :class="chooseIndex == 1 ? 'active item' : 'item'" @click="chooseIndex = 1">
                    <input placeholder="请输入手机号" @focus="chooseIndex == 1 ? 'auto-focus' : ''" v-model="phone" type="number"></input>
                </div>
                <div :class="chooseIndex == 2 ? 'active item' : 'item'" @click="chooseIndex = 2">
                    <input placeholder="请输入验证码" @focus="chooseIndex == 2 ? 'auto-focus' : ''" v-model="verifyCode" type="number"></input>
                    <div class="code" @click="countDown">{{msg}}</div>
                </div>
            </div>
            <div class="finish" @click="submit">登录</div>
            <div class="explain">新用户首次登录后即自动注册成为豪眼光用户</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '手机号登录',
                chooseIndex: 1,
                msg: '获取验证码',
                count: 60, //倒计时
                timer: null, //倒计时  
                verifyCode: "", //验证码
                phone: "", //手机号
                flag: true, //防止多次触发
                code: ''
            }
        },
       
        methods: {
            countDown() {
                let that = this;
                if (!this.timer) {
                    this.timer = setInterval(() => {
                        if (that.count <= 60 && that.count > 0) {
                            that.count--
                            that.msg = that.count + 's'
                        } else if (that.count == 0) {
                            clearInterval(that.timer)
                            that.msg = '重新获取';
                            that.count = 60;
                            that.timer = null;
                            that.flag = true
                        }
                    }, 1000)
                }
            }

        }
    }
</script>

<style scoped lang="less">
    .phone_container {
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
    }

    /* 表单内容 */
    .phone_container .content {
        width: 90%;
        margin: 46rpx auto 0;

    }

    .phone_container .content .active {
        border-bottom: 2rpx solid #FF612A !important;
    }

    .phone_container .content .item {
        width: 100%;
        height: 111rpx;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 2rpx solid #E2E2E2;
    }

    .phone_container .content .item input {
        font-size: 32rpx;
        margin-bottom: 10rpx;
    }

    .phone_container .content .item .code {
        width: 160rpx;
        height: 61rpx;
        line-height: 61rpx;
        text-align: center;
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #222222;
        margin-bottom: 10rpx;
        border-radius: 5px;
    }

    .phone_container .finish {
        width: 90%;
        margin: 180rpx auto 0;
        height: 80rpx;
        line-height: 80rpx;
        background: #FF612A;
        opacity: 1;
        border-radius: 10rpx;
        font-size: 36rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        text-align: center;
    }

    .phone_container .explain {
        width: 100%;
        margin-top: 40rpx;
        text-align: center;
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #666666;
    }

    .phone_container .agree {
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #222222;
        position: fixed;
        bottom: 0;
        left: 0;
    }

    .phone_container .agree span {
        color: #FF5E00;
    }
</style>
