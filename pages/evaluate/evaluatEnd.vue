<template>
    <div class='box'>
        <heads :title='language.evaluate.evaluatEnd.title'></heads>
        <div class='pic'>
            <img   src="http://jcsp.hzjcwlkj.cn/images/uni-app/chenggong.png"/>
        </div>
        <p >{{language.evaluate.evaluatEnd.title}}</p>
        <div class='button' style="background: #FF612A;" @tap="navToHome()">{{language.evaluate.evaluatEnd.return_home}}</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                gouhei_img: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/gouhei.png',
                title: '发布成功'
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../static/css/evaluate/evaluatEnd.less");
</style>
