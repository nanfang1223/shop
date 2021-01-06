<template>
    <div>
        <lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>

        <heads :title='language.myinfo.title'></heads>

        <ul class="yh-ul">

            <li class='myMessage_title' @tap="choiceImg">
                <p>{{language.myinfo.Avatar_settings}}</p>
                <div class='myMessage_right'>
                    <img class='myMessage_img' :src="img"/>
                    <img class='arrow' :src="jiantou"/>
                </div>
            </li>

            <li class='myMessage_name' @tap="_myname">
                <p>{{language.myinfo.My_nickname}}</p>
                <div>
                    <span>{{name}}</span>
                    <img class='arrow' :src="jiantou"/>
                </div>
            </li>

            <!-- #ifndef MP-ALIPAY -->
            <li class='myMessage_name'>
                <p>{{language.myinfo.data}}</p>
                <div>
                    <picker class='picker_ yh-picker' mode="date" :disabled="user_birth !== '-0001-11-30'" start="1900-01-01"
                            end="2050-01-01" @change="changeData">
                        <view v-if="!is_birth">{{language.myinfo.change}}</view>
                        <view v-if="is_birth">{{user_birth}}</view>
                    </picker>
                    <img class='arrow' :src="jiantou"/>
                </div>
            </li>
            <!-- #endif -->
            
            <li class='myMessage_name'  @tap="_navigateTo1('/pages/my/my-bankList')">
                <p>银行卡</p>
                <div>
                    <span></span>
                    <img class='arrow' :src="jiantou"/>
                </div>
            </li>
			
			<li class='myMessage_name' @tap="_myname">
			    <p>手机号</p>
			    <div>
			        <span>{{phone}}</span>
			    </div>
			</li>

        </ul>

        <div class='mask' v-if="mask_display">
            <div class='mask_cont'>
                <p>{{language.myinfo.modify_nickname}}</p>
                <input type="text" v-model="new_name"/>
                <div class='mask_button'>
                    <div class='mask_button_left' @tap="_cancel">{{language.myinfo.cancel}}</div>
                    <div @tap="_confirm">{{language.myinfo.determine}}</div>
                </div>
            </div>
        </div>

        <!-- 判断交过押金提示弹框 -->
        <div class="bid_pup" v-if="showEndFlag">
            <div class="bid_pup_flex">
                <div class="bid_pup_auto">
                    <div class="end_tishi">{{language.myinfo.Tips}}</div>
                    <div class="end_content">
                        <div class="yh-sr">{{language.myinfo.Tips_birthday}}</div>
                    </div>
                    <div @tap="closeEndFlag('cancel')" class="end_btn yh-end_btns">{{language.myinfo.cancel}}</div>
                    <div @tap="closeEndFlag('go')" class="end_btn yh-end_btnb">{{language.myinfo.determine}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        data () {
            return {
                jiantou: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jiantou2x.png',
                title: '我的信息',
                name: '',
                new_name: '',
                mask_display: false,
                img: '', //头像
                imgsrc: '',
                show: '',
                src_img: '',
                fastTap: true,
                user_birth: '-0001-11-30',
                is_birth: false, //日期是否为空 fasle 空
                showEndFlag: false, //弹出框  false-不弹出  true-弹出
                birth_flag: true,
                birthday: '',
				isClick: false,
				phone: uni.getStorageSync('user_phone') ? uni.getStorageSync('user_phone') : ''

            }
        },
        onLoad () {
            var me = this
            
            me._axios()
        },
        mounted () {
            var me = this
            this.isLogin(()=>{
            	
            	me._axios()
            })
        },
        methods: {
            _navigateTo1(url) {
                if (this.isClick == false) {
                    this.isClick = true;
                    this.isLogin(()=>{
                        if(url.includes('/pagesA/shop/sign')){
                            this.$req.post({
                                data: {
                                    module: 'app',
                                    action: 'sign',
                                    app: 'sign',
                                }
                            }).then(res=>{
                                if(res.code == 200){
                                    uni.navigateTo({
                                        url: url
                                    });
                                }else{
                                    uni.showToast({
                                        title: res.message,
                                        icon: 'none'
                                    })
                                }
                            })
                            return
                        }
                        
                        uni.navigateTo({
                            url: url
                        });
                    })
                    setTimeout(() => {
                        this.isClick = false;
                    }, 2000);
                }
            },
            empty () {
                
            },
            /**
             *
             * */
            changeData (e) {
                this.birthday = e.detail.value
                if (this.user_birth == '-0001-11-30' && this.birth_flag) {
                    
                    this.showEndFlag = true
                    return false;
                }
                this.submitBirthday()

            },
            /**
             * 弹框提示按钮处理
             * */
            closeEndFlag (flag) {
                var me = this
                if (flag == 'cancel') {
                    me.showEndFlag = false
                    return false

                } else {
                    me.showEndFlag = false
                    me.birth_flag = false
                    this.submitBirthday()
                }

            },
            /**
             *
             * */
            changeLoginStatus () {
                this._axios()
            },
            submitBirthday() {
                var me = this
                var data = {
                    module: 'app',
                    action: 'user',
                    app: 'set_user',
                    birthday: this.birthday
                }

                this.$req.post({data}).then(res => {
                    me.fastTap = true
                    // console.log(res)
                    if (res.code == 200) {
                        me.mask_display = false
                        me.user_birth = me.birthday
                        me.is_birth = true
                        uni.showToast({
                            title: res.message,
                            duration: 1500,
                            icon: 'none'
                        })
                    } else {
                        uni.showToast({
                            title: res.message,
                            duration: 1500,
                            icon: 'none'
                        })
                    }
                })
            },
            /**
             *
             * */
            _axios () {
                var me = this
                var data = {
                    module: 'app',
                    action: 'user',
                    app: 'index'
                }
                this.$req.post({data}).then(res => {
                    if (res.code == 200) {
                        me.name = res.data.user.user_name
                        me.img = res.data.user.headimgurl
                        me.user_birth = res.data.user.birthday

                        if (me.user_birth != '-0001-11-30') {
                            me.is_birth = true
                        } else {
                            me.is_birth = false
                        }

                    } else {
                        uni.showToast({
                            title: res.message,
                            duration: 1500,
                            icon: 'none'
                        })
                    }
                })
            },
            /**
             *
             * */
            _myname () {
                this.mask_display = true
            },
            /**
             *
             * */
            _confirm () {
                // console.log(this.new_name.length)
                if (this.new_name.length > 6) {
                    uni.showToast({
                        title: this.language.myinfo.nickname[0],
                        icon: 'none',
                        duration: 1000
                    })
                    return
                }
                if (this.name && this.new_name != '') {
                    if (this.name == this.new_name) {
                        uni.showToast({
                            title: this.language.myinfo.nickname[1],
                            icon: 'none'
                        })
                        return
                    }
                    if (!this.fastTap) {
                        return
                    }
                    this.fastTap = false
                    var me = this
                    let data = {
                        module: 'app',
                        action: 'user',
                        app: 'set_user',
                        
                        Nickname: this.new_name
                    }
                    this.$req.post({data}).then(res => {
                        me.fastTap = true
                        let {
                            code,
                            message
                        } = res
                        if (code == 200) {
                            me.name = me.new_name
                            me.mask_display = false
                        } else {
                            uni.showToast({
                                title: message,
                                duration: 1500,
                                icon: 'none'
                            })
                        }
                    })
                } else {
                    uni.showToast({
                        title: this.language.myinfo.nickname[2],
                        icon: 'none',
                        duration: 1000
                    })
                }
            },
            /**
             *
             * */
            _cancel () {
                this.mask_display = false
            },
            /**
             *
             * */
            choiceImg () {
                var me = this
                uni.chooseImage({
                    count: 1,
                    success: function (res) {
                        // console.log(res)
                        
                        let data = {
                            src_img: res.tempFilePaths[0],
                            module: 'app',
                            action: 'user',
                            app: 'set_user',
                        }
                        
                        me.$req.upLoad(res.tempFilePaths[0], data).then(res => {
                            let {
                                code,
                                message
                            } = res
                            
                            if (code === 200) {
                                uni.showToast({
                                    title: me.language.myinfo.upload_seccess,
                                    duration: 1500,
                                    icon: 'none'
                                })
                                me._axios()
                            } else {
                                uni.showToast({
                                    title: message,
                                    duration: 1500,
                                    icon: 'none'
                                })
                            }
                        }) 
                        
                    }
                })
            }
        }

    }
</script>

<style scoped lang="less">
    @import url("../../static/css/my/myInfo.less");
</style>
