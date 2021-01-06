<template>
    <div>
        <map id="navi_map" :latitude="latitude" :longitude="longitude" :scale="scale" :markers="markers" :polyline="polyline"
            :show-location="true" @markertap="markertap" @updated='mapUpdated' @tap='closeMapMarker' style="width: 100%;height: 537px;position: relative;display: block;"></map>
    </div>
</template>

<script>
    import amap from "../../js_sdk/amap-wx.js";
    import {
        copyText
    } from '@/common/util.js'
    export default {
        data() {
            return {
                latitude: 31.629235,
                longitude: 121.438998,
				scale:10,
                markers: [{
                    iconPath: "http://jcsp.hzjcwlkj.cn/images/uni-app/555.png",
                    id: 0,
                    latitude: 31.629235,
                    longitude: 121.438998,
                    width: 23,
                    height: 33
                }, {
                    iconPath: "../../img/mapicon_navi_e.png",
                    id: 0,
                    latitude: 31.230238,
                    longitude: 121.515559,
                    width: 24,
                    height: 34
                }],
                distance: '14734米',
                cost: '打车约39元',
                polyline: [],
                zwwl: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/zwwl.png'
            }
        },
        onLoad(option) {
			// console.log(option,"option")
            var that = this;
            var key = "9eeabfea76b4855bac703046fba9b04e";
            var myAmapFun = new amap.AMapWX({
                key: key
            });
			// (终1-起点)/2 +起点
			let s =option.start
			let e = option.dest
			let s1,s2;
			let e1,e2;
			s1 = s.split(",")[0];
			s2 = s.split(",")[1];
			e1 = e.split(",")[0];
			e2 = e.split(",")[1];
			that.latitude = Number(s2-e2)/2+Number(e2)
			that.longitude = Number(s1-e1)/2+Number(e1)
			
			that.markers[0].latitude = s2;
			that.markers[0].longitude = s1;
			that.markers[1].latitude=e2;
			that.markers[1].longitude = e1;
			
			   
			// that.latitude = option.dest.;
			// that.longitude = option.start;
			 
			// dest: "121.438998,31.629235"// 终点
				
			// start: "121.515559,31.230238"// 终点
			
            uni.request({
		     url: 'https://restapi.amap.com/v3/direction/driving?origin='+ option.dest  +  ' &destination='+  option.start+'&key=9eeabfea76b4855bac703046fba9b04e&s=rsx&platform=WXJS&appname=9eeabfea76b4855bac703046fba9b04e&sdkversion=1.2.0&logversion=2.0',
                // url: 'https://restapi.amap.com/v3/direction/driving?origin=116.481028%2C39.989643&destination=116.434446%2C39.90816&key=9eeabfea76b4855bac703046fba9b04e&s=rsx&platform=WXJS&appname=9eeabfea76b4855bac703046fba9b04e&sdkversion=1.2.0&logversion=2.0',
              
				method: 'GET',
                data: {},
                success: function(res) {
                    // console.log(res,'gdfgf') //成功后调用的函数
                    var data = res.data.route;
                    var points = [];
                    if (data.paths && data.paths[0] && data.paths[0].steps) {
                        var steps = data.paths[0].steps;
                        for (var i = 0; i < steps.length; i++) {
                            var poLen = steps[i].polyline.split(';');
                            for (var j = 0; j < poLen.length; j++) {
                                points.push({
                                    longitude: parseFloat(poLen[j].split(',')[0]),
                                    latitude: parseFloat(poLen[j].split(',')[1])
                                })
                            }
                        }
                    }
                    let polyline = [{
                        points: points,
                        color: "#0091ff",
                        width: 6
                    }];
                   that.polyline = polyline;
                }
            });
            
            
        },
        onShow() {},
        methods: {},
        goToRide: function(e) {
            wx.redirectTo({
                url: '../navigation_ride/navigation'
            })
        },
        goToWalk: function(e) {
            wx.redirectTo({
                url: '../navigation_walk/navigation'
            })
        },
    }
</script>

<style scoped lang="less">
    @import url("../../static/css/expressage/expressage.less");
</style>
