<template>
    <div class="addStore-container">
        <lktauthorize ref="lktAuthorizeComp"></lktauthorize>
        <heads :title="language.addStore.title"></heads>
        <div class="addStore-list">
            <div>
                <p>{{language.addStore.storeName}}</p>
                <input type="text" :placeholder="language.addStore.storeNamePlaceholder" :placeholder-style="placeColor" v-model="shop_name" maxlength="20"/>
            </div>
        </div>
        <div class="addStore-list">
            <div>
                <p>{{language.addStore.tel}}</p>
                <input type="text" :placeholder="language.addStore.telPlaceholder" :placeholder-style="placeColor" v-model="shop_mobile" />
            </div>
        </div>
        <div class="addStore-list" @tap="openDatetimePicker()">
            <div>
                <p>{{language.addStore.times}}</p>
                <input type="text" @focus="hideKeyboard()" disabled :placeholder="language.addStore.timesPlaceholder" :placeholder-style="placeColor" v-model="time_all" />
                <img :src="jiantou" alt="" />
            </div>
        </div>
        <div class="addStore-list" @tap="showMulLinkageThreePicker()">
            <div>
                <p>{{language.addStore.city}}</p>
                <input type="text" @focus="hideKeyboard()" disabled :placeholder="language.addStore.cityPlaceholder" v-model="city_all" :placeholder-style="placeColor" />
                <img :src="jiantou" alt="" />
            </div>
        </div>
        <div class="addStore-list">
            <div>
                <p>{{language.addStore.address}}</p>
                <input type="text" :placeholder="language.addStore.addressPlaceholder" :placeholder-style="placeColor" v-model="shop_address" maxlength="50"/>
            </div>
        </div>
        <button class="addStore-btn" style="background: #FF612A;" @tap="preservation">{{language.addStore.save}}</button>
        <button v-if="edit" class="addStore-btn1" style="border:2rpx solid #FF612A;  color:#FF612A ;" @tap="remove">{{language.addStore.del}}</button>

        <mpvue-city-picker ref="mpvueCityPicker" :themeColor="themeColor" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>

        <!-- 时间选择 -->
        <time-picker ref="timePicker" :themeColor="themeColor" :urseTime="time_ys" @onConfirm="onConfirm1"></time-picker>
    </div>
</template>

<script>
import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue';
import timePicker from '../../components/time-picker.vue';

export default {
    data() {
        return {
            title: '门店信息设置',
            themeColor: '#007AFF',
            cityPickerValueDefault: [0, 0, 1],
            pickerText: '',
            shop_id: '',
            shop_name: '', // 门店名称
            shop_mobile: '', // 门店电话
            time_all: '', //时间段
            time_ys: '', // 原始时间
            city_all: '', //最终选择省市区的值
            shop_address: '', // 详细地址
            edit: '',
            btn_status: true,
            placeColor: 'color:#b8b8b8',
            jiantou: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/jiantou2x.png',
            
            store_id: ''
        };
    },
    onLoad(option) {
        
        this.shop_id = this.$store.state.shop_id;
        this.edit = option.edit;

        if (option.edit) {
            this.store_id = option.id
            this._edit_page();
        }
    },
    onShow() {
        
    },
    methods: {
        remove(){
            uni.showLoading({
                title: this.language.showLoading.axiosing,
                mask: true
            });
            var data = {
                module: 'app',
                action: 'mch',
                m: 'del_store',
                id: this.store_id,
                shop_id: this.shop_id
            };
            // 隐藏做门店编辑，做完解除
            this.$req.post({ data }).then(res => {
                uni.hideLoading();
                uni.showToast({
                    title: res.message,
                    duration: 1500,
                    icon: 'none'
                });
                
                setTimeout(()=>{
                    uni.navigateBack({
                        delta: 1
                    })
                },1500)
            });
        },
        // 点击城市
        showMulLinkageThreePicker() {
            this.$refs.mpvueCityPicker.show();
        },
        hideKeyboard() {
            uni.hideKeyboard();
        },
        // 城市-确定
        onConfirm(e) {
            this.city_all = e.label;
        },
        // 营业时间-确定
        onConfirm1(e) {
            var start = e[0].replace(/undefined/g, '00');
            var end = e[1].replace(/undefined/g, '00');
            this.time_all = start + '~' + end;
            this.time_ys = this.time_all;
        },
        // 点击营业时间
        openDatetimePicker() {
            this.$refs.timePicker.show(this.time_ys);
        },
        // 编辑页面
        _edit_page() {
            uni.showLoading({
                title: this.language.showLoading.loading,
                mask: true
            });
            var data = {
                module: 'app',
                action: 'mch',
                m: 'edit_store_page',
                id: this.store_id,
                shop_id: this.shop_id
            };

            this.$req.post({ data }).then(res => {
                uni.hideLoading();
                if (res.code == 200) {
                    this.shop_name = res.list.name;
                    this.shop_mobile = res.list.mobile;
                    this.time_all = res.list.business_hours[0];
                    this.time_ys = res.list.business_hours[0];
                    this.city_all = res.list.sheng + '-' + res.list.shi + '-' + res.list.xian;
                    this.shop_address = res.list.address;
                } else {
                    uni.showToast({
                        title: res.message,
                        duration: 1500,
                        icon: 'none'
                    });
                }
            });
        },
        // 保存
        preservation() {
            if (this.btn_status) {
                this.btn_status = false;
                if (this.edit) {
                    this._edit();
                } else {
                    this.add();
                }
            }
        },
        // 添加
        add() {
            uni.showLoading({
                title: this.language.showLoading.loading,
                mask: true
            });
            var data = {
                module: 'app',
                action: 'mch',
                m: 'add_store',
                
                shop_id: this.shop_id,
                name: this.shop_name,
                mobile: this.shop_mobile,
                business_hours: this.time_all,
                city_all: this.city_all,
                address: this.shop_address
            };
            this.$req
                .post({ data })
                .then(res => {
                    uni.hideLoading();
                    if (res.code == 200) {
                        uni.showToast({
                            title: res.message,
                            duration: 1500,
                            icon: 'none'
                        });
                        setTimeout(function() {
                            uni.navigateBack({
                                delta: 1
                            });
                        }, 1500);
                    } else {
                        this.btn_status = true;
                        uni.showToast({
                            title: res.message,
                            duration: 1500,
                            icon: 'none'
                        });
                    }
                })
                .catch(error => {
                    this.btn_status = true;
                });
        },
        // 编辑
        _edit() {
            uni.showLoading({
                title: this.language.showLoading.loading,
                mask: true
            });
            var data = {
                module: 'app',
                action: 'mch',
                m: 'edit_store',
                id: this.store_id,
                shop_id: this.shop_id,
                name: this.shop_name,
                mobile: this.shop_mobile,
                business_hours: this.time_all,
                city_all: this.city_all,
                address: this.shop_address
            };
            this.$req.post({ data }).then(res => {
                uni.hideLoading();
                if (res.code == 200) {
                    uni.showToast({
                        title: res.message,
                        duration: 1500,
                        icon: 'none'
                    });
                    setTimeout(function() {
                        uni.navigateBack({
                            delta: 1
                        });
                    }, 1500);
                } else {
                    uni.showToast({
                        title: res.message,
                        duration: 1500,
                        icon: 'none'
                    });
                }
            });
        }
    },
    components: {
        mpvueCityPicker,
        timePicker
    }
};
</script>

<style scoped lang="less">
@import url('../../static/css/myStore/addStore.less');
</style>
