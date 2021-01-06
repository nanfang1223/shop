<template>
	<div style='height: 100%;'>
		<lktauthorize ref="lktAuthorizeComp" v-on:pChangeLoginStatus="changeLoginStatus"></lktauthorize>
		<heads :title='title'></heads>
		<!-- <div class="search-box">
			<div class="mymap">


				<input type="text" placeholder="输入关键字搜索" v-model="search_key" />
				<span class="clear" v-if="search_key" @click="search_key ='' "></span>
				<span class="buts" @click="keySearch()">搜索</span>
			</div>
			<div class="con-box" style="width: 100%; height: 600rpx; border:1rpx solid #F0AD4E">
			
					<div class="mapbox">
						<div class="map" id="container"></div>
						<div class="sign"></div>
					</div>
			
					<div class="list-box">
						<ul>
							<li v-for="(item, index) in lists" :key="index" @click="onResli(item)">
								<span>{{item.name}}</span>
								<p>{{item.address}}</p>
							</li>
						</ul>
					</div>
			</div> -->
		<!-- <web-view  id= 'aaaaa' src="https://m.amap.com/picker/?keywords=%E5%86%99%E5%AD%97%E6%A5%BC,%E5%B0%8F%E5%8C%BA,%E5%AD%A6%E6%A0%A1&zoom=15&center=%20120.264721,30.221428&radius=1000&total=8&key=de6ae0e1c2978247ba6fcc339b72a76b"></web-view> -->
		<!-- <web-view  id= 'aaaaa' src=" https://apis.map.qq.com/tools/locpicker?search=1&type=1&backurl=https://3gimg.qq.com/lightmap/components/locationPicker2/back.html&key=UVYBZ-YFM2F-P64JJ-JT5QF-5LYEV-JKBJM&referer=myapp"></web-view> -->
		<!-- -->
		<!-- <web-view id="message" src="https://apis.map.qq.com/tools/locpicker?search=1&type=0&key=UVYBZ-YFM2F-P64JJ-JT5QF-5LYEV-JKBJM&referer=myapp"></web-view> -->
		<web-view :src="dizhi"></web-view>

	</div>
	</div>
</template>
<!-- <script src="https://webapi.amap.com/maps?v=1.4.14&key=b2a7018d65c1935cb8a84ce369e794aa"></script> -->

<script>
	import {
		mapMutations
	} from 'vuex'
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	import {
		telephone
	} from '../../common/landing.js'

	export default {
		data() {
			return {
				dizhi: '../../static/dizhi.html', //引入的路径

				addNum: '',
				jiantou: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/jiantou2x.png',
				fastTap: true,
				title: '编辑地址',


			}
		},
		onLoad(option) {
			// debugger;
			// alert(this.$refs.validateImg;);
			// let currentWebview = this.$scope.$getAppWebview(); //获取当前web-view  
			//  console.log( currentWebview,"currentWebview")
			//                  let duration_timeout = setTimeout(function() {  
			//                      let wv = currentWebview.children()[0];  
			//                      console.log(wv);  
			//                      wv.setStyle({  
			//                          //设置web-view距离顶部的距离以及自己的高度，单位为px  
			//                          top: 45,  
			//                          left: 80,  
			//                          width: 1120,  
			//                          height: 630,  
			//                      });  
			//                      clearTimeout(duration_timeout);  
			//                  }, 500)
		},

		watch: {
			// plus.addEventListener('netchange', function(){
			// 	alert(55555555555555)
			// });
		},
		methods: {


		},
		mounted() {


		},

		onShow() {},

	}
</script>

<style scoped lang="less">
	@import url("../../static/css/address/addAddress.less");
</style>
