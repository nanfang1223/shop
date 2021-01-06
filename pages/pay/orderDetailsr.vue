<template>
	<div class="cart_f pages-pay-orderDetailsr" ref='cart'>
		<heads :title=' language.pay.orderDetailsr.title' :returnR='returnR'></heads>

		<paymodel @cancel="wallet_pay_cancel" @success="check_pay_password" v-model="pay_display" />
		<mock :load="load"></mock>

		<div class="order_detail" v-if="load">
			<choose-address :shop_address="shop_list" :shop_id="shop_id" :shop_status="shop_status === 1" v-model="address"
			 :address_status="adds_f" :is_express="is_express" @change="sChange" />

			<!--灰色间隔-->
			<div class="yh-line "></div>
			<!--商品列表-->
			<div>
				<ul :key='indexs' v-for='(items,indexs) in pro'>
					<li class='storeLi' v-if='items.shop_id'>
						<img :src="storeImg" class="yh-storeLi-imga">
						{{items.shop_name}}
						<img :src="jiantou" class="yh-jiantou-img">
					</li>
					<li :key='index' class='goods' v-for="(item,index) in items.list">
						<img :src="item.img" />
						<div class='goods_right'>
							<p style="   line-height:40rpx;">{{item.product_title}}</p>
							<span class="size" style="     line-height: 30rpx;">{{item.color?item.color:''}}{{item.name?item.name:''}}{{item.size?item.size:''}}</span>
							<div class='goods_bottom ' style="      line-height: 50rpx;">
								<p v-if="is_grade" style="font-weight: normal;">
									{{language.pay.orderDetailsr.vip_price}}￥<span style="font-weight: bold;">{{item.membership_price}}</span>
									<span style="font-size: 22rpx;color: #999999;text-decoration: line-through;margin-left: 8rpx;">￥{{item.price}}</span>
								</p>
								<p v-else>
									<span class="yh-goods_bottom-span">￥</span>{{item.price}}
								</p>

								<div class='format'>
									<!-- <p class="yh-format-p" style="max-width: 140px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                        {{item.color?item.color:''}}{{item.name?item.name:''}}{{item.size?item.size:''}}</p> -->
									<p class="yh-format-pa" style="margin-right: 0;color: #020202;">x{{item.num}}</p>
								</div>
							</div>
						</div>
					</li>
					<template v-if="!bargain&&!seckill">
						<li class='order_coupon '>
							<!-- 包邮 -->
							<span>{{language.pay.orderDetailsr.freight}}</span>
							<span v-if="canshu3==0 && kuaidiyunfei==0">包邮</span>
							<span v-else >￥{{canshu3}}</span>
							<!-- <span>{{language.pay.orderDetailsr.freight}}</span>
							<span v-if="items.freight_price==0">{{language.pay.orderDetailsr.Free_mail}}</span>
							<span v-else>￥{{items.freight_price}}</span> -->
						</li>
					<!-- 	<li class='order_coupon ' >
							<span>{{language.pay.orderDetailsr.Clip_coupons}}</span>
							<div class="pickerBox">
								<picker @change="mchCouponChange" :data-id="indexs" :value="mchCouponIndex[indexs]>=0?mchCouponIndex[indexs]:0"
								 :range="items.couponList">
									<view class="uni-input" v-if="mchCouponIndex[indexs]>=0">{{items.couponList[mchCouponIndex[indexs]]}}</view>
									<view class="picher_placeholder" v-else>{{language.pay.orderDetailsr.choose}}</view>
								</picker>
								<img :src="jiantou" class='arrow' style='margin-left: 20rpx;' />
							</div>
						</li> -->
						<!-- <li class='order_coupon' v-if="grade_rate!=1">
                            <span>会员等级折扣</span>
                            <span>{{grade_rate*10}}折</span>
                        </li> -->
						<li class='order_coupon'>
							<span>{{language.pay.orderDetailsr.Order_notes}}</span>
							<span class="yh-order_coupon-spana"><input :placeholder="language.pay.orderDetailsr.order_placeholder"
								 placeholder-style="color:#b8b8b8;font-size:28rpx;display: flex; justify-content: flex-end;" type="text"
								 v-model="remarks[indexs]"></span>
						</li>
						<li class='order_coupon' style="flex-direction: column;align-items: flex-end;padding: 24rpx 30rpx;">
							<span class="yh-order_coupon-spanb ">
								{{language.pay.orderDetailsr.Subtotal}}：
								<!-- 小计 -->
								<!-- <span class="yh-order_coupon-fonta dgdfgdsf">￥{{total.toFixed(2)+fee.toFixed(2)}}</span> -->
								<span class="yh-order_coupon-fonta dgdfgdsf">￥{{total}}</span>
							</span>
							<span class="vip_rate">{{language.pay.orderDetailsr.reduction}}：￥{{grade_rate_amount}}</span>
						</li>
					</template>
					<div class="yh-items"></div>
				</ul>
			</div>
			<ul v-if="!bargain&&!seckill">
				<li class='order_coupon'  style="margin-left: 0;padding-left: 30rpx;">
					<span>{{language.pay.orderDetailsr.Discount[0]}}</span>
					<div class="pickerBox">
						<picker @change="bindCouponChange" :value="couponIndex>=0?couponIndex:0" :range="couponList">
							<view class="uni-input" v-if="couponIndex>=0">{{couponList[couponIndex]}}</view>
							<view class="picher_placeholder" v-else>{{language.pay.orderDetailsr.Discount[1]}}</view>
						</picker>
						<img :src="jiantou" class='arrow' style='margin-left: 20rpx;' />
					</div>
				</li>
				<!-- 选择运输方式 -->
			<li class='order_coupon '>
				<!-- 包邮 -->
				<span>快递方式：</span>
				<span >快递</span>
			
								
			</li>
				<li class="yh-items"></li>
			</ul>

			<!--运费、优惠券、合计信息-->
			<ul v-else>
				<li class='order_coupon' v-if="!bargain && coupon_status && is_distribution!=1">
					<span>{{language.pay.orderDetailsr.Discount[2]}}</span>
					<div @tap="coupon()">
						<span>{{coupon_name? coupon_name : language.pay.orderDetailsr.Tips[1]+ coupon_money +language.pay.orderDetailsr.Tips[2] }}</span>
						<img :src="jiantou" class='arrow' style='margin-left: 20rpx;' />
					</div>
				</li>
				<li class='order_coupon' v-if="!bargain && isDistribution==false && is_distribution!=1 && is_subtraction == 1 && ((reduce_money == 0 && reduce_name != '')||(reduce_money > 0 && reduce_name == ''))">
					<span>{{language.pay.orderDetailsr.Discount[3]}}</span>
					<span v-if="reduce_money == 0 && reduce_name != ''">{{reduce_name}}</span>
					<span v-else>{{reduce_money}}</span>
				</li>
				<li class='order_coupon' v-if="grade_rate!=1">
					<span>{{language.pay.orderDetailsr.Discount[4]}}</span>
					<span>{{grade_rate*10}}{{language.pay.orderDetailsr.fracture}}</span>
				</li>
				<li class='order_coupon' v-if="is_distribution==1 && discount!=1">
					<span>{{language.pay.orderDetailsr.Discount[5]}}</span>
					<span>{{discount*10}}{{language.pay.orderDetailsr.fracture}}</span>
				</li>
				<li class='order_coupon'>
					<span>{{language.pay.orderDetailsr.freight}}</span>
					<span v-if="freightt==0">{{language.pay.orderDetailsr.Free_mail}}</span>
					<span v-else>￥{{freightt}}</span>
				</li>
				<li class='order_coupon'>
					<span>{{language.pay.orderDetailsr.Order_notes}}</span>
					<span class="yh-order_coupon-spana"><input :placeholder="language.pay.orderDetailsr.Order_notes.order_placeholder"
						 placeholder-style="color:#b8b8b8" type="text" v-model="remarks"></span>
				</li>
				<li class='order_coupon'>
					<span></span>
					<span class="yh-order_coupon-spanb" v-if='!bargain'>
						<!-- #ifndef MP-BAIDU || MP-ALIPAY -->
						{{language.pay.orderDetailsr.total}}：<font class="yh-order_coupon-fonta">￥{{total}}</font>
						<!-- #endif -->
						<!-- #ifdef MP-BAIDU || MP-ALIPAY-->
						{{language.pay.orderDetailsr.total}}：<span class="yh-order_coupon-fonta">￥{{total}}</span>
						<!-- #endif -->
					</span>
				</li>
			</ul>

			<choose-pay :aliPayStatue="aliPayStatue" :baidupayStatue="baidupayStatue" :open_alipay="open_alipay" :open_baidu="open_baidu"
			 :open_wallet="open_wallet" :open_wxpay="open_wxpay" :useWallet="useWallet" :user_money="user_money" :wxPayStatue="wxPayStatue"
			 @chooseWay="chooseWay($event)" />
			<!-- 支付功能 -->
			<!-- 如果是0就是快递  加上运费 v-if="kuaidi==2" -->
			<submit-order :total="total" :rate="total_discount" @submit="order_pay()" />
			<!-- <submit-order  v-if="kuaidi==1" :total="total+fee" :rate="total_discount" @submit="order_pay()" /> -->
			<!-- 如果是1就是达达  -->
			<!-- <submit-order v-if='kuaidi==1' :ishide="ishide" :total="total+fee" :rate="total_discount" @submit="order_pay()" /> -->
		</div>

		<!-- 高度屏幕小的时候解决选择不到微信支付的问题 -->
		<div class="yh-wx-pay">
		</div>

		<!--  优惠券    -->
		<div class='copon_div' v-if="use_coupon">
			<ul class='coupon_ul'>
				<li :key='index' @tap="coupon_use(index,item.id,item.coupon_status)" class='coupon_sue' v-for="(item,index) in coupon_list">
					<span v-if="item.activity_type == 1" v-text="item.name?item.name:''+':'+language.pay.orderDetailsr.Free_mail"></span>
					<span v-else v-text="item.name&&item.name==language.pay.orderDetailsr.Tips[0]?language.pay.orderDetailsr.Tips[0]:item.name+language.pay.orderDetailsr.Tips[1]+item.money+language.pay.orderDetailsr.Tips[2]+item.coupon_name"></span>
					<img :src="item.id==coupon_id?quan_hei:quan_hui" class="yh-img-s" />
				</li>
			</ul>
			<div @tap="closeCoupon" class="copou_close">{{language.pay.orderDetailsr.close}}</div>
		</div>
	</div>
</template>
<script>
	import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
	import paymodel from '@/components/paymodel.vue'
	import mixinsOrder from '../../mixins/order'
	import mixinCoupon from '../../mixins/coupon'
	import choosePay from '@/components/choose-pay.vue'
	import chooseAddress from '@/components/order/choose-address.vue'
	import submitOrder from '@/components/order/submit-order.vue'
	import mock from '@/components/skeleton/orderDetailsrMock'

	export default {
		data() {
				return {
					grade_rate_amount:0,
					coupon_id:[],
						baoyujia:0,//包邮
						fdada: 0,
						bosr: '', //参数字段
						xiaoji: 0,
						dizhiid: 0,
						kuaidiyunfei: 0, //快递运费
						total: 0, //运费达达
						deliverFee: '',
						deliveryNo: '',
						distance: '',
						fee: 0,
						sNo: '0',
						canshu1: '',
						canshu2: '',
						canshu3: 0,
						array: ['请选择', '快递', '达达'],
						kuaidi: 1,
						gj: '快递',
						payment: '',
						isDistribution: false, //是否是分销商品？true是，false不是
						jiantou: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/jiantou2x.png',
						load: false,
						returnR: 0,
						cpId: '',
						title: '确认订单信息',
						is_subtraction: 1,
						reduce_name: '',
						pro: [], //购买商品列表
						storeImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/store.png',
						quan_hei: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/94661f89895ca9ab42b080e14c49c56.png',
						quan_hui: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon/xuanzehui2x.png',
						ishide: 0, //是否隐藏底部支付栏 1隐藏 0不隐藏
						sNo: '',
						name: '',
						is_distribution: 0,
						cart_id: '',
						pay_name: '', //pt是普通订单过来的
						firstFlag: true,
						tmplIds: ['2KrrJchj92YRKhZZ0SSHz76dmrT0cLBJ2Wfe0', 'ncs3u3Bmmi0jW7EXAik4KQvxF3JxbaulWNwbLXDto',
							'CZAPo_TqOOeC5K7XYvBeB_LXmyXKIhXkZROArNZDwQ8'
						], //微信订阅消息模板
		
		
						couponList: [], // 平台优惠券
						couponList1: [], // 平台优惠券
						couponIndex: -1,
						mchCouponIndex: [],
		
						canshu: true,
						is_plugin: false, // 是否是插件商品
						is_grade: false, //是否是会员
						total_discount: 0, //会员优惠总金额
					}
				},
				mixins: [mixinsOrder, mixinCoupon],
				onLoad(option) {
					// console.log(option, "参数")
					this.getCode()
					this.canshu = uni.getStorageSync('canshu')
					this.$store.state.address_id = this.$store.state.address_id_def
					this.cpId = option.product //数据参数
					this.returnR = option.returnR
		
					if (this.cpId && JSON.parse(this.cpId).findIndex(item => item.sec_id) === 3) {
						this.sec_id = JSON.parse(this.cpId)[3].sec_id
						this.seckill = true
						this.activity_id = this.$store.state.seckilldata.activity_id
						this.platform_activities_id = this.$store.state.seckilldata.platform_activities_id
					}
		
					if (option.buy_again == true || option.buy_again == 'true') {
						this.buy_again = true
					}
					this.order_id = this.$store.state.order_id
					this.cart_id = this.$store.state.cart_id
					if (this.cart_id instanceof Array) {
						this.cart_id = '';
					}
		
					if (this.cart_id) {
						// console.log('cart_id', this.cart_id);
						uni.setStorageSync('cart_id', this.cart_id)
					}
		
					if (option.cart_id) {
						this.cart_id = option.cart_id
						this.$store.state.cart_id = this.cart_id
						uni.setStorageSync('cart_id', this.cart_id)
					}
		
					// #ifdef H5 
					let storage = window.localStorage
					if (storage['bargain']) {
						this.cpId = storage['product']
					}
		
					if (storage['bargain']) {
						this.bargain = storage['bargain'] ? storage['bargain'] : this.bargain
						this.bargain_id = storage['bargain_id'] ? storage['bargain_id'] : this.bargain_id
						this.order_no = storage['order_no'] ? storage['order_no'] : this.order_no
					}
		
		
		
					if (storage['cart_id'] != null && storage['cart_id'] !== '') {
						// console.log('清理cart_id');
						this.cart_id = storage['cart_id']
						// storage['cart_id'] = ''
					}
		
		
					if (!this.$store.state.address_id) {
						this.$store.state.address_id = storage['address_id']
					}
		
					// #endif
		
					if (this.cpId) {
						uni.setStorageSync('goodsInfo', this.cpId)
					}
		
					if (option.canshu) {
						uni.setStorageSync('canshu', option.canshu)
					}
		
					if (option.isDistribution == 1 && option.isDistribution != 'false') {
						this.isDistribution = true
					}
		
					this.bargain = option.bargain
					this.bargain_id = option.bargain_id
					this.order_no = option.order_no
		
					// #ifdef H5 
					//解决获取code后价格变为普通商品价格的问题
					if (option.product) {
						let kanjia = JSON.parse(option.product)
						if (kanjia[3]) {
							this.bargain = kanjia[3] && kanjia[3].bargain ? kanjia[3].bargain : this.bargain
							this.bargain_id = kanjia[4] && kanjia[4].bargain_id ? kanjia[4].bargain_id : this.bargain_id
							this.order_no = kanjia[5] && kanjia[5].order_no ? kanjia[5].order_no : this.order_no
						}
					}
					// #endif
		
					this.pay_name = this.$store.state.pay_lx
					// console.log('验证code');
					this.checkCode()
					// this.dada()
					
					this._axios()
				},
		onShow() {
				// 每次进入页面接受自提选择的页面
				if (this.hc_address_id != this.$store.state.address_id) {
					this.hc_address_id = this.address_id = this.$store.state.address_id
				}
	
				if (uni.getStorageSync('store_choose')) {
					uni.removeStorageSync('store_choose')
				}
	
				this.shop_address_id = uni.getStorageSync('shop_address_id')
				this._axios('onshow')
	
				// #ifdef MP-WEIXIN
				this.LaiKeTuiCommon.getWXTmplIds(this)
				// #endif
	
				this.fastTap = false;
	
			},
			onUnload() {
				// #ifdef H5
				if (location.hostname === 'localhost') return false;
				setTimeout(() => {
	
					let state = window.location.href.replace(/\?code=.*?\//, '#/')
					// console.log(state);
					history.replaceState(null, null, state)
				}, 300)
				// #endif
	
			},
			watch: {
				// 监听数据变化  监听数据请求   之后请求的值赋值给canshu3
	
				baoyujia: function(val) {

	            // console.log(val,"监听的快递")
					this.canshu3 = val
				},
			},
	
		methods: {
			mchCouponChange(e) {
							let i = Number(e.currentTarget.dataset.id)
							this.mchCouponIndex.splice(i, 1, e.detail.value)
							let coupon_id = []
							this.pro.filter((items, indexs) => {
								this.mchCouponIndex.filter((item, index) => {
									if (indexs == index) {
										if (item >= 0) {
											coupon_id.push(items.coupon_list[item].coupon_id)
										} else {
											coupon_id.push('0')
										}
									}
								})
							})
							if (this.couponIndex >= 0) {
								coupon_id.push(this.couponList1[this.couponIndex].coupon_id)
							} else {
								coupon_id.push('0')
							}
							this.coupon_id = coupon_id.join()
							this._axios()
						},
		
				// 是否使用优惠券
			bindCouponChange(e) {
		
						this.couponIndex = e.detail.value
						   // console.log(e,"使用了优惠券")
		
						// this.mchCouponIndex  店铺优惠券选中的下标 []
						// this.couponIndex  平台优惠券选中的下标
						// this.couponList  平台优惠券展示的数组['','','']
						// this.couponList1  平台优惠券的数据[{},{},{}]
						let coupon_id = []
						   // console.log(this.pro,"this.pro")
						   // 	   console.log(this.mchCouponIndex,"this.mchCouponIndex")
						this.pro.filter((items, indexs) => {
							this.mchCouponIndex.filter((item, index) => {
								if (indexs == index) {
									if (item >= 0) {
										coupon_id.push(items.coupon_list[item].coupon_id)
									} else {
										coupon_id.push('0')
									}
								}
							})
						})
						
						if (this.couponIndex >= 0) {
							coupon_id.push(this.couponList1[this.couponIndex].coupon_id)
						} else {
							coupon_id.push('0')
						}
						
						coupon_id.push(this.couponList1[this.couponIndex].discount_type)
						// console.log(this.couponList1,"this.couponList1")
						//   console.log(coupon_id,"coupon_iddsfd,sgdsjgj" )
						this.coupon_id = coupon_id.join()
						// console.log(this.coupon_id,"数据请求this.coupon_id")
						this._axios()
						// this.gj="快递"
					},
					
					// 快递选择
									//下拉框
									// 配送方式
					peisongshijian(e) { //改变的事件名
								var obj = this.bosr
								let list = [];
								for (var key in obj) {
									var temp = {}
									if (key == "cid") {
						
										temp.cid = obj[key]
										list.push(temp)
						
									}
									if (key == 'pid') {
										temp.pid = obj[key]
										list.push(temp)
									}
									if (key == 'num') {
										temp.num = obj[key]
										list.push(temp)
									}
									// temp.key= obj[key];
								}
						
									
							
							
								this.gj = this.array[this.kuaidi]
								// console.log(this.gj, '快递方变得更返回式')
						
						
						
								if (e.target.value== 2 && this.kuaidi!=2) {
									// console.log("达达")
									this.gj="达达"
									var data = {
										module: 'app',
										action: 'DadaFreight',
										app: 'index',
										address_id: this.dizhiid,
										access_id: this.$store.state.access_id,
										store_id: this.canshu1,
										language: '',
								
										product: JSON.stringify(list),
									}
									this.$req.post({
										data
									}).then(res => {
							
										// 监听包邮
										this.baoyujia= res.result.fee
						
										this.xiaoji = res.result.xiaoji
										
										this.deliverFee = res.result.deliverFee
										this.deliveryNo = res.result.deliveryNo
										this.distance = res.result.distance
										
										// console.log(res, "达达接口快递")
										// 小计
										 // console.log(this.total,"this.total 商品的价格")
										 //  console.log(this.fee,"this.fee,快递运费" )
										var jiage = this.total - this.fee
										this.total = jiage.toFixed(2)
										 
										// 提交的时候加上达达运费
										this.fdada = res.result.fee
										var a = parseFloat(this.total) + res.result.fee;
										this.total = a.toFixed(2);
										  // console.log( this.total,'达达的价格')
										this.sNo = res.result.sNo
						
									})
						
								} else if (e.target.value == 1 && this.kuaidi!=1) {
									  // console.log("快递")
									  this.gj="快递"
									this.baoyujia=this.fee
									// this.feee=''
							
									var jiage = this.total - this.fdada
									this.total = jiage.toFixed(2)
									// console.log(this.total, "选择快递的商品价格")
									var a = parseFloat(this.total) + this.fee;
									// console.log(a, "saaaaa")
									this.total = a.toFixed(2);
									
									// console.log(this.total, "快递价格");
									// this.total- this.fdada +this.fee
						
						
						
						// 			if (this.kuaidiyunfei != 0) {
						// 				this.baoyujia = 0
										
						// 				this.baoyujia= this.kuaidiyunfei
						
						// 			}
						
						
								}
								this.kuaidi = e.target.value
								// console.log(this.kuaidi, "快递代码")
						
						
							},
					
		sChange(is_express) {
						this.is_express = is_express;
						if (is_express) {
							this.shop_list = {
								id: 0
							}
							this._axios('onshow')
						} else {
							this._axios('onshow')
						}
		
					},
						
					dada(){
						var dataaa = {
							module: 'app',
							action: 'DadaFreight',
							app: 'index',
							address_id: this.dizhiid,
							access_id: this.$store.state.access_id,
							store_id: this.canshu1,
							language: '',
														
							product: JSON.stringify(list),
						}
						this.$req.post({
							dataaa
						}).then(res => {
							console.log(res,"达达的数据")
						})
						
						
					},
					
					
					// 数据请求
			_axios(type = '') {
							let product = uni.getStorageSync('goodsInfo')
							// 参数
							let data = {
								module: 'app',
								action: 'order',
								app: 'Settlement',
								cart_id: this.cart_id,
								address_id: this.address_id,
								canshu: this.canshu,
								coupon_id: this.coupon_id ? this.coupon_id : '0',
			
							}
						    //   console.log(this.coupon_id,"this.coupon_id")
							   // console.log( data,"canshu ")
			if (this.cpId) {
							data.product = product || this.cpId;
							data.cart_id = ''
						}
		
						if (!this.is_express) {
							data.shop_address_id = this.shop_address_id
						}
		
						if (this.buy_again) {
							data.buy_type = 1;
						}
						// console.log(data, "data数据")
						// 支付页面请求的数据接口
				this.$req.post({
								data
							}).then(res => {
								console.log(res, "总体数据请求")
								this.bosr = res.products[0].list[0]
								// console.log(this.bosr, "截取字符串S")
			
								this.dizhiid = res.address.id
								// 小计
								this.xiaoji = res.products[0].shop_subtotal
								this.canshu1 = res.address.store_id
								this.canshu2 = res.products[0].list[0].cid
							     // this.baoyujia
								this.canshu = false
								// 报错库存不足的时候 status = 1, 其他的时候会返回 code 不等于 200 的值
					if (res.status === 0 || (res.hasOwnProperty('code') && res.code !== 200)) {
						this.load = true
						uni.showToast({
							title: res.msg,
							duration: 1500,
							icon: 'none'
						});
						setTimeout(() => {
							this.navBack()
						}, 1500)

						// return false
					} else {

						let {
							address,
							coupon_id,
							payment,
							freight,
							password_status,
							products,
							products_total,
							user_money,
							enterless,
							time_id,
							is_distribution,
							discount,
							grade_rate,
							coupon_list,
							total_discount,
						
						} = res;
						// console.log(res,"总分数据")
                        if(res.grade_rate_amount){
							this.grade_rate_amount=res.grade_rate_amount
						}
					 
                          // console.log(res.products[0].freight_price,"hehehebfff")
						if (products[0].freight_price) {
							
							  this.baoyujia=res.products[0].freight_pric
								  
							  
							this.kuaidiyunfei = res.products[0].freight_price
							this.fee = res.products[0].freight_price //快递费
							
						
						// console.log(hhyhy, "快递加jiajia ")
						// 	this.fee = hhyhy.toFixed(2)
							// console.log(this.fee, "快递加减")
							
}


						this.total_discount = total_discount

						// 砍价商品请求的数据
						let coupon_money = res.coupon_money || 0
						let reduce_money = res.reduce_money || 0
						this.coupon_money = coupon_money
						
 
						// this.total = Number.parseFloat(total).toFixed(2)
						//    console.log( this.total,"参数加减的综合")
						// 调用接口的时候重新定义  默认快递  显示快递 是优惠券的时候调用
						
						   this.kuaidi=1
							   
						   if( this.kuaidi==1){
							   this.gj="快递"
							   // this.fee
							   this. baoyujia=this.fee
							  var a = res.total + this.fee;
							this.total = a.toFixed(2);
							  	// console.log(this.total, "ooooooooooooooo");
					    	// console.log(this.total, "参数加减的综合")
						   }
							
							    

						// 处理收货地址的逻辑
						this.handleOrderAddress(address, res.shop_list, res.shop_status)


						if (coupon_list && coupon_list.length > 0) {
							this.couponList1 = coupon_list
							this.couponList = []
							coupon_list.filter((item, index) => {
								this.couponList.push(item.coupon_name)

								if (item.coupon_status) {
									this.couponIndex = index
								}
							})
						}

						this.time_id = time_id
						this.payment = payment
						this.show_pay_way()
						
						if (products && products.length > 0) {
							// 竞拍商品请求数据
							this.pro = products
							console.log(this.pro,"this.profdgfdhd")
							this.payTitle = products[0].list[0].product_title
							this.is_plugin = !products[0].hasOwnProperty('shop_subtotal')

							let flag = false
							if (this.remarks == '') {
								flag = true
								this.remarks = []
							}

							this.mchCouponIndex = []

							products.filter(items => {
								if (flag) {
									this.remarks.push('')
								}

								let couponIndex = -1
								items.couponList = []
								if (items.coupon_list && items.coupon_list.length) {
									items.coupon_list.filter((item, index) => {
										items.couponList.push(item.coupon_name)

										if (item.coupon_status) {
											couponIndex = index
										}
									})
								}
								this.mchCouponIndex.push(couponIndex)
							})

						}

						this.user_money = Number.parseFloat(user_money)

						this.password_status = password_status
						if (type !== 'onshow') {
							this.coupon_id = coupon_id
						} else {
							if (uni.getStorageSync('chooseAddress')) {
								this.address = uni.getStorageSync('chooseAddress')
							}
						}

						this.coupon_status = res.coupon_status
						this.enterless = enterless
						this.is_distribution = is_distribution
						this.discount = discount ? discount : 1
						// this.grade_rate = grade_rate ? grade_rate : 1
						this.is_grade = (grade_rate > 0 && grade_rate < 1) ? true : false
						// this.total = Number.parseFloat(total)
						this.reduce_money = reduce_money
						this.reduce_name = res.reduce_name
						this.is_subtraction = res.is_subtraction
						this.products_total = products_total



						// 运费赋值留到最后，计算价格是放在运费的监听函数里
						this.freightt = parseFloat(freight).toFixed(2)
						this.freight = freight

						

						uni.setStorageSync('cart_id', this.cart_id)
						this.load = true
					}

				}).catch(e => {
					// console.log(e);
					this.load = true
				})
			
			}
		},
		components: {
			wxParse,
			paymodel,
			choosePay,
			chooseAddress,
			submitOrder,
			mock
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/css/pay/orderDetailsr.less");
</style>
