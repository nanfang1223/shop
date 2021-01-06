<template>
	<div class="login_contaienr">
		<heads :title="title"></heads>
		<div class="content">
			<div class="wechat_login">
				<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">
					<img src="../../static/img/wechat.png"></img>
					<span>微信授权登录</span>
				</button>
			</div>
			<div class="phone_login" @click="phone_login">
				<img src="../../static/img/phone.png"></img>
				<span>手机号码登录</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: '选择登录方式',
                code: '',   //登录获取code
			}
		},
		onShow() {
            let that = this;
		    uni.login({
		        provider: 'weixin',
		        success: function(res) {
		            console.log(res);
                    that.code = res.code
		        }
		    })
		},
		methods:{
			phone_login(){
				uni.navigateTo({
					url: '/pages/login/phonelogin'
				})
			}
		}
	}
</script>

<style scoped lang="less">
/* 微信登录 */
.login_contaienr .wechat_login {
    width: 90%;
    height: 106rpx;
    text-align: center;
    background: #FF612A;
    margin: 90rpx auto;
    overflow: hidden;
    border-radius: 5px;
}
.content{
	margin-top: 350rpx;
}
button::after{ border: none; }
.login_contaienr .wechat_login button{
    width: 100%;
    height: 106rpx;
    line-height: 106rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    border-radius: 0;
    font-size: 32rpx;
    font-family: PingFang SC;
    font-weight: bold;
    color: #FFFFFF;
    background: #FF612A;
    outline: none;
    border-radius: 5px;
}

.login_contaienr .wechat_login img {
    width: 48rpx;
    height: 39rpx;
    margin-right: 22rpx;
}

/* 手机登录 */
.login_contaienr .phone_login {
    width: 90%;
    height: 106rpx;
    line-height: 106rpx;
    text-align: center;
    background: #EBEBEB;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32rpx;
    font-family: PingFang SC;
    font-weight: bold;
    color: #222222;
    border-radius: 5px;
}
.login_contaienr .phone_login img {
    width: 30rpx;
    height: 47rpx;
    margin-right: 22rpx;
}

</style>
