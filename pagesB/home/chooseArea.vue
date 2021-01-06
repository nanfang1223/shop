<template>
    <view class="container">
        <heads :title="language.chooseArea.title" :border="true"></heads>
        <view class="topBox ">
            <!-- 		<view class="searchBox ">
				<view class="searchBox_left">
					<image class='searchImg' :src="serchimg"></image>
					<input type="text" v-model="searchKey" :placeholder="language.chooseArea.search_placeholder" />
				</view>

				<view class="searchBox_btn" style="color: #000000;" @tap="search">{{language.chooseArea.search}}</view>
			</view> -->

            <view class="area">
                <view class="area_left">
                    <!-- <text>{{language.chooseArea.current_location}}：cxvd</text> -->

                    <view class="area_left_item" v-if="choose_area.length>0">
                        <image src="../../static/iconfont/weizhion.png" mode="" />
                        <text style="margin-left: 14rpx; font-size: 30rpx;">{{ wezhi}}</text>
                    </view>
                    <view v-else>{{language.chooseArea.change_address}}</view>
                </view>
                <view>
                    <!--  <view class="area_right" @tap="seeAreaClick" style="display: inline-block;">
                        <text>{{language.chooseArea.Switch}}</text>
                        <image :src="jianX" :style="{transform: seeAreaFlag?'rotate(180deg)':''}"></image>
                    </view> -->
                    <view class="area_right" @tap="getLocationAuthorize" style="display: inline-block; padding-left: 15rpx;  position: absolute;

         right: 40rpx;top: 20rpx;">
                        <image src="../../static/iconfont/dingwei.png" mode="" />
                        <text style=" font-size: 30rpx;">重新定位</text>
                        <!-- <image :src="jianX" :style="{transform: seeAreaFlag?'rotate(180deg)':''}"></image> -->
                    </view>
                </view>
            </view>
            <view class="areaItemBox" v-if="seeAreaFlag">
                <view class="areaItem" :class="{active: choose_area[1]&&choose_area[1].GroupID == item.GroupID}" v-for="item,index of area_list"
                    :key="index">{{item.G_CName}}</view>
            </view>
        </view>
        <!-- 我的收获地址 -->
        <view class="xie_shou">
            <view class="xie_ab">
                <image src="../../static/iconfont/jia.png" mode="" />
                <view class="zi_ab"> 我的收货地址 </view>
                <view class="qisir" @click="zengjia"> 新增地址</view>
            </view>
            <!-- 地址 -->
            <view class="xie_ba" v-for="item,index in shouhuo" :key="index" @tap="clickArea(item,0,8)">
                <view class="xie_bc">{{item.address_xq}}</view>
                <view class="xie_fost">{{item.name}}&nbsp;&nbsp;&nbsp;{{item.tel}}</view>
            </view>
            <!-- <view class="xie_ba" @tap="clickArea(item,0)" >
				<view class="xie_bc">地下hi的表格艰苦奋斗手机关机讽德诵功见多识广</view>
				<view class="xie_fost">张三&nbsp;&nbsp;&nbsp;5566546544</view>
			</view> -->


        </view>

        <!-- 附近的地址 -->
        <view class="zhi_ab">
            <view class="xie_ab">
                <image src="../../static/iconfont/weizhion.png" mode="" />
                <view class="zi_ab"> 附近的地址 </view>
            </view>
            <view class="dizhi" v-for="item,index in fujin" :key="index" v-if="index<index1" @tap="clickArea(item,0,9)">
                {{item.name}}</view>
                <view class="more" v-if="show" @click="loadMore" style="width: 100%;text-align: center;font-size: 30rpx;height: 80rpx;line-height: 80rpx;">
                    查看更多
                </view>
            <!-- <view class="dizhi"> 杭州西湖区fgfhfdghdgfhgfhhhggfhgfdhhgfdhfd古墩路三坝</view>
					<view class="dizhi"> 杭州西湖区古墩路三坝</view> -->
        </view>
        <!--  <scroll-view scroll-y="true" class="content" @scroll="contentScroll" :scroll-into-view="scrollKey"
            :scroll-with-animation="true">
            <view v-for="items,indexs of city_list" :id="indexs" :key="indexs">
                <view v-if="!filterKey" class="listTitle">{{indexs}}</view>

                <template v-for="item,index of items">
                    <view v-if="!item.hidden" :key="index" class="list" @tap="clickArea(item,0)" :class="{active: choose_area.length>0&&choose_area[0].GroupID == item.GroupID}">{{item.G_CName}}</view>
                </template>

            </view>

            <view class="listRight" v-if="!filterKey">
                <view v-for="item,index of city_list" :key="index" :class="{active: index == titleKey}" @tap="changeTitle(index)">{{index}}</view>
            </view>
        </scroll-view> -->
    </view>
</template>

<script>
    import {
        getTimeDiff
    } from '@/common/util.js';
    export default {
        data() {
            return {
                jindi: '',
                weidu: '',
                shouhuo: "",
                fujin: '',
                wezhi: '',
                title: '选择收货地址',
                serchimg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/searchNew.png',
                jianX: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jianX.png',
                city_list: {},
                area_list: [],
                choose_area: [],
                level: 0,
                GroupID: '',
                titleKey: 'A',
                scrollKey: 'A',

                seeAreaFlag: false,
                searchKey: '',
                filterKey: '',
                time: {
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                },

                keyTop: [],
                boxTop: '',
                class_pro: [],
                class_cid: '',
                index1: 15,
                show: true
            };
        },
        onBackPress() {
            if (this.choose_area.length == 0) {
                uni.showToast({
                    title: this.language.chooseArea.change_address,
                    icon: 'none'
                })
                return true
            }
        },
        onLoad(option) {
            // console.log(option,"option")
            let region = uni.getStorageSync('region')
            uni.setStorageSync('jz', 1)
            if (uni.getStorageSync('location') != "") {
                this.wezhi = uni.getStorageSync('location')
            }
            //uni.removeStorageSync('location');
            this.choose_area = [{
                    G_CName: region.city,
                    GroupID: region.city_GroupID
                },
                {
                    G_CName: region.district,
                    GroupID: region.district_GroupID
                }
            ]
            //console.log(this.region, "数据结果4是什么")
            this.GroupID = region.city_GroupID
            this.axios();
            // 获取位置

            // this.$nextTick(() => {
            // 	const query = uni.createSelectorQuery()
            // 	query.select('.content').fields({
            // 		rect: true,
            // 	}, data => {
            // 		   console.log(data,"top的报错")
            // 		this.boxTop = data.top


            // 	}).exec();
            // })
        },

        methods: {
            loadMore(){
                this.index1 = this.fujin.length;
                this.show = false;
            },
            zengjia() {
                console.log(55)
                uni.navigateTo({
                    url: '/pages/address/receivingAddress'
                })
            },
            // 重新定位

         getLocationAuthorize() {
                uni.setStorageSync('jz', 1)
                    
                if( uni.getStorageSync('latitude')){
                    uni.removeStorage({
                        key: 'latitude',
                        success: function(res) {
                            console.log('删除成功');
                        }
                    });
                }if(uni.getStorageSync('longitude') ){
                    uni.removeStorage({
                        key: 'longitude',
                        success: function(res) {
                            console.log('删除成功');
                        }
                    });
                }
              
              
                // #ifdef MP

                // #endif
                // #ifdef APP
                // console.log("333333");
                this.getLocationaaaa();
                // #endif
          

                // #ifdef H5
                if (this.is_wx()) {
                    this.getLocationaaaa()
                } else {
                    if (this.is_diy) {
                        this._diy_axios()
                    } else {
                        this._axios()
                    }
                }
                // #endif

            },
            getLocationaaaa() {
                // console.log("666666");
              uni.getLocation({
                    success: res => {
                        // console.log('hg回调获得定位了');
                        this.longitude = res.longitude
                        this.latitude = res.latitude
                        this.opensetting = false;
                        this.isRequest = true;
                        if (this.is_diy) {
                            this._diy_axios()
                        } else {
                            this._axios()
                        }
                        return resolve();
                    },
                    fail: (e) => {
                        // console.log(e)
                        //同意授权但未开启定位
                        // console.log('失败失败失败失败');
                        // this.opensetting = true;
                        this.opensetting2 = true;

                        if (this.is_diy) {
                            this._diy_axios()
                        } else {

                            this._axios()
                        }
                        return resolve();
                    },
                    complete: () => {
                        // console.log('完成');
                        return resolve();
                    }
                });
            },
            // 定位是1调用
            async _diy_axios() {
                await this.getDiy()
                // div的接口
                await this.getSignStatus();
                this.load = true;
            },
            async getSignStatus() {
                let data = {
                    module: 'app',
                    action: 'diy',
                    app: 'getSignStatus',


                }
                let {
                    data: {
                        is_sign_status,
                        sign_status
                    }
                } = await this.$req.post({
                    data
                })
                if (is_sign_status === 1 && sign_status === 1 && !uni.getStorageSync('signFlag')) {
                    this.is_sign = true;
                    uni.setStorageSync('signFlag', true)
                }

            },
            _axios() {


                this.changeBottom(0)
                if (uni.getStorageSync('longitude')) {
                    //console.log(uni.getStorageSync('longitude'),"uni.getStorageSync('longitude')" )
                    this.longitude = uni.getStorageSync('longitude')
                    this.latitude = uni.getStorageSync('latitude')
                } else {
                    //console.log( this.longitude,"222222222 this.longitude" )
                    uni.setStorageSync('longitude', this.longitude)
                    uni.setStorageSync('latitude', this.latitude)


                }
                var data = {
                    module: 'app',
                    action: 'index',
                    app: 'index',
                    longitude: this.longitude,
                    latitude: this.latitude,
                    // tyop_cai: uni.getStorageSync('history')
                };

                if (uni.getStorageSync('region')) {
                    let region1 = uni.getStorageSync('region')
                    if (region1.district.length > 3) {
                        region1.district = region1.district.substr(0, 2) + '...'
                    }
                    this.region = region1
                }

                this.$req
                    .post({
                        data,
                        xhrFields: {
                            withCredentials: true
                        }
                    })
                    .then(res => {
                        let {
                            data: {
                                banner,
                                list2,
                                xxnum,
                                plugin_arr,
                                r_mch,
                                is_sign_status,
                                sign_status,
                                go_group_list,
                                seckill_list,
                                grade,
                                region,
                                login_status
                            }
                        } = res;
                        uni.setStorageSync('location', res.data.region.formatted_addresses)
                        this.wezhi = res.data.region.formatted_addresses
                        uni.setStorageSync('region', res.data.region)

                        if (res.data) {
                            // console.log(res.data.Image[0].url, "res.datda.Image[0].picture")
                            this.tupian = res.data.Image[0].picture
                            this.tiaozhuan = res.data.Image[0].url
                            this.xiaodaohnag = res.data.header //头部小导航

                            // this.xiaoliebiao = res.data.header[0]

                            // console.log(this.xiaoliebiao, "this.xiaodaohnag")
                        }
                        // 轮播图
                        if (res.data.lanmu) {
                            this.nav_list = res.data.lanmu

                        }

                        //                       
                        if (grade && grade != 0) {
                            this.is_grade = true;
                        }
                        // 地图
                        if (region.district.length > 3) {
                            region.district = region.district.substr(0, 2) + '...'
                        }
                        // cons                      地图 region
                        if (!uni.getStorageSync('region')) {
                            this.region = region
                        }

                        if (is_sign_status == 1 && sign_status == 1 && !uni.getStorageSync('signFlag')) {
                            this.is_sign = true;
                            uni.setStorageSync('signFlag', true)
                        }

                        let nav_list = JSON.parse(JSON.stringify(this.nav_list))
                        if (grade == 0) {
                            nav_list[nav_list.length - 1].url = '/pagesA/vip/vip?toBack=true'
                        } else {
                            nav_list[nav_list.length - 1].url = '/pagesA/vipClub/vipClub?toBack=true'
                        }
                        this.nav_list = nav_list

                        this.banner = banner;

                        if (this.class_pro.length == 0) {
                            if (this.class_cid == '' && list2.length > 0) {
                                this.class_cid = list2[0].cid
                            }
                            // 循环的二级标题
                            list2.filter(item => {

                                item.list.filter(it => {
                                    it.vip_price = Number(it.vip_price).toFixed(2)
                                    it.vip_yprice = Number(it.vip_yprice).toFixed(2)
                                })

                                if (item.cid == this.class_cid) {
                                    this.show = false

                                    this.class_pro = item.list.concat()
                                    this.empty();
                                    setTimeout(() => {
                                        this.waterfall();
                                        this.show = true
                                    }, 100)
                                }
                            })

                            this.bottom_list = list2;

                            if (list2.length > 0) {
                                this.loadingType = 0
                            } else {
                                this.loadingType = 2
                            }
                        }

                        this.xxnum = xxnum > 99 ? '99+' : Number(xxnum); //限制消息数超过99时显示99+

                        this.plugin_arr = plugin_arr;

                        for (let i in plugin_arr) {
                            this.nav_list.filter(item => {
                                item.status = true;

                            });
                        }

                        this.r_mch = r_mch;
                        this.go_group_list = go_group_list ? go_group_list : [];

                        this.seckill_list = []
                        if (seckill_list && seckill_list.current_time && seckill_list.current_time[0]) {
                            this.setCountDown(seckill_list.current_time[0]);
                            this.seckill_list = seckill_list.pro_list;
                        }

                        this.load = true
                    });
            },
            empty() {
                this.listRight = [];
                this.listLeft = [];
                this.cardLeftHeight = 0;
                this.cardRightHeight = 0;
            },
            /**
             * 倒计时
             * */
            setCountDown(item) {
                clearInterval(this.Intervalid);

                let year = new Date().getFullYear();
                let month = new Date().getMonth() + 1;
                let dates = new Date().getDate();
                let endtime = '';

                if (item.type == 2) {
                    endtime = `${year}-${month}-${dates} ${item.starttime}`;
                } else {
                    endtime = `${year}-${month}-${dates} ${item.endtime}`;
                }

                this.timeFun(endtime, item);

                this.Intervalid = setInterval(() => {
                    this.timeFun(endtime, item);
                }, 1000);
            },
            timeFun(endtime, item) {
                let result = getTimeDiff(endtime);

                this.time.hours = result.hours;
                this.time.minutes = result.minutes;

                if (result.seconds < 0 || result.hours < 0 || result.minutes < 0) {
                    clearInterval(this.Intervalid);
                    this._axios();
                    return;
                }
                this.time.seconds = result.seconds;
            },
            waterfall() {
                if (this.class_pro.length == 0) {
                    return
                }
                if (this.cardLeftHeight > this.cardRightHeight) {
                    let cardList = this.class_pro.splice(0, 1); //初始化图片显示
                    this.listRight.push(cardList[0]);
                } else if (this.cardLeftHeight <= this.cardRightHeight) {
                    let cardList = this.class_pro.splice(0, 1); //初始化图片显示
                    this.listLeft.push(cardList[0]);
                }
            },
            async changeBottom(val) {
                // console.log(val, "点击")
                this.bottomIndex = val
                this.page = 1
                if (this.bottomIndex == 0) {

                    this.storag = uni.getStorageSync('history')

                    var data = {
                        module: 'app',
                        action: 'Tabletype',
                        app: 'index',
                        tyop_cai: this.storag
                    }
                } else if (this.bottomIndex == 1) {
                    var data = {
                        module: 'app',
                        action: 'Tabletype',
                        app: 'index',
                        tyop_cai: 2
                    }
                } else if (this.bottomIndex == 2) {
                    var data = {
                        module: 'app',
                        action: 'Tabletype',
                        app: 'index',
                        page: 1,
                        tyop_cai: 3
                    }
                }

                await this.$req.post({
                    data
                }).then(res => {

                    setTimeout(() => {
                        this.listRight = []
                        this.listRight = res.res

                    }, 700)
                })


            },
            is_wx() {
                let en = window.navigator.userAgent.toLowerCase()
                // 匹配en中是否含有MicroMessenger字符串
                return en.match(/MicroMessenger/i) == 'micromessenger'
            },
            async getDiy() {
                if (uni.getStorageSync('longitude')) {
                    this.longitude = uni.getStorageSync('longitude')
                    this.latitude = uni.getStorageSync('latitude')
                } else {

                    uni.setStorageSync('longitude', this.longitude)
                    uni.setStorageSync('latitude', this.latitude)

                }

                if (uni.getStorageSync('region')) {
                    let region1 = uni.getStorageSync('region')
                    if (region1.district.length > 3) {
                        region1.district = region1.district.substr(0, 2) + '...'
                    }
                    this.region = region1
                }



                let data = {
                    module: 'app',
                    action: 'diy',
                    app: 'index',
                    longitude: this.longitude,
                    latitude: this.latitude
                }
                // 数据请求的轮播图
                let res = await this.$req.post({
                    data
                })
                this.styleConfig = this.objToArr(res.data);
                console.log(res.data, "数据")
                this.objToArr(res.data).forEach((item) => {

                    if (item.name === 'homeBg') {
                        this.bgColor = item.bgColor.color
                    }

                    if (item.name === 'headerSerch') {
                        this.onReachBottomBg = item.bgColor.color
                    }
                })

                if (res.grade && res.grade != 0) {
                    this.is_grade = true;
                }



                let region = res.region
                if (region.district.length > 3) {
                    region.district = region.district.substr(0, 2) + '...'
                }

                if (!uni.getStorageSync('region')) {
                    this.region = region
                }
            },
            // 对象转数组
            objToArr(data) {
                let obj = Object.keys(data);
                let m = obj.map(key => data[key]);
                return m
            },


            search() {
                this.filterKey = this.searchKey
                let city_list = JSON.parse(JSON.stringify(this.city_list))

                for (let i in city_list) {
                    city_list[i].filter(item => {
                        if (!item.G_CName.includes(this.filterKey)) {
                            item.hidden = true
                        } else {
                            item.hidden = false
                        }
                    })
                }
                this.city_list = city_list
            },
            changeTitle(key) {
                this.titleKey = key;
                this.scrollKey = key;
            },
            contentScroll(e) {
                console.log(this.keyTop, "top的报错2222")
                let index = this.keyTop.findIndex(item => {
                    return item.top > e.detail.scrollTop
                })

                this.titleKey = this.keyTop[index - 1].key

            },
            // seeAreaClick() {
            //     this.seeAreaFlag = !this.seeAreaFlag
            // },
            clickArea(item, index, val) {
                uni.setStorageSync('jz', 1)
                if (val == 8) {

                    uni.setStorageSync('location', item.address_xq)
                }
                if (val == 9) {
                    uni.setStorageSync('location', item.name)
                }
                console.log(item, "4444444444444444444444444444")



                // address_xq
                if (index == 0) {
                    this.choose_area = []
                }
                this.choose_area.splice(index, 1, item)
                // this.GroupID = item.GroupID
                // jindi:'',
                // weidu:'',
                // lat: "30.184779"
                // lng: "120.264217"
                this.jingdi = item.lng
                this.weidu = item.lat
                uni.setStorageSync('longitude', item.lng)
                uni.setStorageSync('latitude', item.lat)



                if (this.choose_area.length == 1) {
                    this.axios(true)
                } else {
                    let region = {
                        city: this.choose_area[0].G_CName,
                        city_GroupID: this.choose_area[0].GroupID,
                        district: this.choose_area[1].G_CName,
                        district_GroupID: this.choose_area[1].GroupID,
                    }
                    uni.setStorageSync('region', region)

                    this.getLocation(this.choose_area[1].GroupID)
                }

                uni.navigateBack({
                    delta: 1
                })
            },

            toUrl(url) {
                uni.navigateTo({
                    url
                })
            },
            getLocation(GroupID) {
                let data = {
                    module: 'app',
                    action: 'index',
                    app: 'get_Longitude_and_latitude',
                    GroupID: GroupID, // 市ID

                    lng: this.jingdi,
                    lat: this.weidu
                }
                console.log(data, "参数")
                this.$req.post({
                    data
                }).then(res => {

                    uni.setStorageSync('longitude', res.data.longitude)
                    uni.setStorageSync('latitude', res.data.latitude)
                })
            },
            axios(type) {
                let data = {
                    module: 'app',
                    action: 'index',
                    app: 'get_location',
                    GroupID: this.GroupID, // 市ID
                    lng: uni.getStorageSync('longitude'),
                    lat: uni.getStorageSync('latitude'),
                }
                this.$req.post({
                    data
                }).then(res => {
                    let {
                        code,
                        data,
                        message,
                    } = res
                    console.log(res, "总数据")
                    if (code == 200) {
                        this.shouhuo = res.data.address
                        this.fujin = res.data.region
                        console.log(this.fujin, "item")
                        // this.city_list = data.list
                        // this.area_list = data.xian

                        // if (this.keyTop.length == 0) {
                        // 	const query = uni.createSelectorQuery()

                        // setTimeout(() => {
                        // 	let keysArr = Object.keys(this.city_list)

                        // 	keysArr.filter((item, index) => {
                        // 		query.select('#' + item).fields({
                        // 			rect: true,
                        // 		}, data => {
                        // 			let itemTop = data.top - this.boxTop

                        // 			this.keyTop.splice(index, 1, {
                        // 				key: item,
                        // 				top: itemTop
                        // 			})
                        // 		}).exec();
                        // 	})
                        // }, 200)

                        // keysArr.filter(item=>{
                        //     // query.select('#'+item).fields({
                        //     //     rect: true,
                        //     // }, data => {

                        //     //     let itemTop = data.top + e.detail.scrollTop - boxTop
                        //     //     console.log(itemTop)
                        //     //     this.keyTop.push(
                        //     //         {
                        //     //             key: item,
                        //     //             top: itemTop,
                        //     //         }
                        //     //     )

                        //     //     // if(e.detail.scrollTop>=itemTop){
                        //     //     //     titleKey = item
                        //     //     // }

                        //     //     // if(item == 'Z'){
                        //     //     //     if(this.titleKey!=titleKey){
                        //     //     //         this.titleKey = titleKey
                        //     //     //     }
                        //     //     // }
                        //     // }).exec();
                        // })
                        // Object.keys(this.city_list).findIndex(item=>{

                        // })
                        // }

                        // if (type) {
                        // 	let region = {
                        // 		city: this.choose_area[0].G_CName,
                        // 		city_GroupID: this.choose_area[0].GroupID,
                        // 		district: this.area_list[0].G_CName,
                        // 		district_GroupID: this.area_list[0].GroupID,
                        // 	}
                        // 	uni.setStorageSync('region', region)

                        // 	this.getLocation(this.area_list[0].GroupID)
                        // }

                        // 	this.search()
                        // } else {
                        // 	uni.showToast({
                        // 		title: message,
                        // 		icon: 'none'
                        // 	})
                    }
                })
            }
        },
    };
</script>

<style lang="less">
    @import url('../../static/css/home/chooseArea.less');
</style>
