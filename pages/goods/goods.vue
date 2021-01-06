<template>
	<div class="conten" @tap="removeMask">
		<div ref="box" class="conten" :style="{background: pro_list.length==0?'#ffffff':''}">
			<heads :title="title">{{title}}</heads>
			<!-- 有商品的时候显示 -->
			<div style="height: 88rpx;">
				<div class='allgoods_s  home_navigation '>
					<div class='home_input dsfdsg'>
						<img class='searchImg' :src="serchimg" alt="">
						<input type="text" v-model="searchtxt" :placeholder="language.search2.searchRes.search_placeholder" id='input'
						 :placeholder-style="placeStyle" name="sourch" />
					</div>
					<div class="search_btn" @tap='_searchB'>{{language.search2.searchRes.search_button}}</div>
				</div>
			</div>
			<div style="height: 90rpx;">
				<div class='topTabBarshou' style="display: flex; line-height: 90rpx; background: #ffffff; position: fixed;    z-index: 999; width:100%;">
					<div :class='{"active":topTabBarshou == 0}' @tap="_search(0)" style="flex: 1; text-align: center; ">商品</div>

					<div :class='{"active":topTabBarshou == 2}' @tap="_search(2)" style="flex: 1; text-align: center;">店铺</div>
				</div>
			</div>



			<div v-if='topTabBarshou == 0'>
				<div style="height: 90rpx;">
					<div class='topFilter '>
						<div :class='{"active":searchType == ""}' @tap="clickType('')">{{language.search2.searchRes.TopButton[0]}}</div>
						<div :class='{"active":searchType == "volume"}' @tap="clickType('volume')">
							{{language.search2.searchRes.TopButton[1]}}
							<div class="sortingImgBox">
								<img :src="searchType=='volume'&&sorting=='asc'?sortingToph:sortingTop">
								<img :src="searchType=='volume'&&sorting=='desc'?sortingBottomh:sortingBottom">
							</div>
						</div>
						<div :class='{"active":searchType == "price"}' @tap="clickType('price')">
							{{language.search2.searchRes.TopButton[2]}}
							<div class="sortingImgBox">
								<img :src="searchType=='price'&&sorting=='asc'?sortingToph:sortingTop">
								<img :src="searchType=='price'&&sorting=='desc'?sortingBottomh:sortingBottom">
							</div>
						</div>
						<div :class='{"active":searchType == "comment_num"}' @tap="clickType('comment_num')">
							{{language.search2.searchRes.TopButton[5]}}
							<div class="sortingImgBox">
								<img :src="searchType=='comment_num'&&sorting=='asc'?sortingToph:sortingTop">
								<img :src="searchType=='comment_num'&&sorting=='desc'?sortingBottomh:sortingBottom">
							</div>
						</div>

						<!-- <div :class='{"active":searchType == "comment_num"}' @tap="clickType('comment_num')">{{language.search2.searchRes.TopButton[5]}}</div> -->

						<div @tap.stop="shaixuanClick" :class='{"active":filterMaskFlag || brand_id || min_price1 || max_price1}'>
							{{language.search2.searchRes.TopButton[3]}}
							<img :src="filterMaskFlag || brand_id || min_price1 || max_price1?filter_h:filter">
						</div>
						<div class="filterMaskDiv" v-if="filterMaskFlag" @touchmove.stop.prevent @tap.stop>
							<!-- v-if="brand_list.length>0" -->
							<div>
								<div class="filterTitle" @tap="pinpaiClick">
									{{language.search2.searchRes.TopButton[4]}}
									<img :src="pinpaiFlag?jiantouTop:jiantouBottom" alt="">
								</div>
								<scroll-view v-if="pinpaiFlag" class="filterScroll" :scroll-y="true">
									<div class="filterScrollItem">
										<div :class="{active: brand_id == item.brand_id}" v-for="item,index of brand_list" :key="index" @tap="changeBrand(item)">{{item.brand_name}}</div>
									</div>
								</scroll-view>
							</div>

							<div>
								<div class="filterTitle">{{language.search2.searchRes.section}}</div>
								<div class="pricerBox">
									<input v-model="min_price" type="number" :placeholder="language.search2.searchRes.min" placeholder-style="display: flex; justify-content: center;color: #B8B8B8;">
									<span>-</span>
									<input v-model="max_price" type="number" :placeholder="language.search2.searchRes.max" placeholder-style="display: flex; justify-content: center;color: #B8B8B8;" />
								</div>
							</div>

							<div class="filterBottom">
								<div @tap="reset">{{language.search2.searchRes.Reset}}</div>
								<div @tap="filterOk" style="background: #FF612A;">{{language.search2.searchRes.determine}}</div>
							</div>
						</div>
					</div>
					<div class="filterMask" v-if="filterMaskFlag" @touchmove.stop.prevent></div>
				</div>
				<template v-if="pro_list.length > 0">
					<ul class="allgoods relative">
						<li class="allgoods_li" style="padding: 0 !important; " v-for="(item, index) in pro_list" :key="index">
							<div class="proImgBox">
								<img :src="item.imgurl" @tap="_goods(item.id)" />
								<div v-if="item.status == 3" class="dowmPro">
									{{language.goods.goods.shelf}}
								</div>
								<div v-else-if="item.num == 0 || item.num == '0'" class="dowmPro">
									{{language.goods.goods.Sold_out}}
								</div>
							</div>
							<div @tap="_goods(item.id)" class="allgoods_name hehehhe" style="    font-size: 26rpx;
    line-height: 34rpx;
    height: 75rpx;
    margin-top: 4rpx!important;
    margin-bottom: 10rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
        word-break: break-all;">
								{{ item.name }}
							</div>

							<div>
								<div class="allgoods_li_priceBox">
									<div>
										<span>￥</span>
										{{ item.vip_yprice }}
									</div>
									<p style="color: #333333;">已售{{item.volume}} 件</p>
									<!-- <p>{{language.goods.goods.vip_price}}￥{{item.vip_price}}</p> -->
								</div>

							</div>
						</li>
					</ul>
					<uni-load-more v-if="pro_list.length > 4" :loadingType="loadingType" style="background-color: #f8f8f8;"></uni-load-more>
				</template>

				<!-- 无商品的时候显示 -->
				<div v-else class="relative">
					<div class="search_no">
						<div class="font_14"><img class="img" :src="noImg" /></div>
						<span class="span" style="font-size: 28rpx;">{{language.goods.goods.not}}！</span>
					</div>
				</div>
			</div>

			<div v-if='topTabBarshou ==2'>
				<div style="height: 90rpx;">
					<div class='topFilter '>
						<!-- <div :class='{"active":searchType == ""}' @tap="clickType('')">{{language.search2.searchRes.TopButton[0]}}</div> -->
					<div :class='{"active":searchType == "comment_num"}' @tap="clickType('comment_num')">
						{{language.search2.searchRes.TopButton[5]}}
						<div class="sortingImgBox">
							<img :src="searchType=='comment_num'&&sorting=='asc'?sortingToph:sortingTop">
							<img :src="searchType=='comment_num'&&sorting=='desc'?sortingBottomh:sortingBottom">
						</div>
					</div>
						<div :class='{"active":searchType == "volume"}' @tap="clickType('volume')">
							{{language.search2.searchRes.TopButton[1]}}
							<div class="sortingImgBox">
								<img :src="searchType=='volume'&&sorting=='asc'?sortingToph:sortingTop">
								<img :src="searchType=='volume'&&sorting=='desc'?sortingBottomh:sortingBottom">
							</div>
						</div>
					
						<!-- <div :class='{"active":searchType == "comment_num"}' @tap="clickType('comment_num')">{{language.search2.searchRes.TopButton[5]}}</div> -->

					</div>
					<div class="filterMask" v-if="filterMaskFlag" @touchmove.stop.prevent></div>
				</div>
				<ul class="shoping">
					<li v-for="items,index of listdianj">
						<div class="huan">
							<div class="box">
								<!-- <img :src="item.logo"/> -->

								<img :src="items.logo" mode=""></img>
							</div>
							<div class="shop-prop">
								<view class="shop-content">
									<div class="shop-title">{{items.name}}</div>
									<button class="baguette" @tap="_goStore(items.id)">进店</button>
								</view>
								<view class="shop-count">
									<view>
										<p class="sum">{{items.quantity_on_sale}}</p>
										<p class="sum-name">在售商品</p>
									</view>
									<view>
										<p class="sum">{{items.quantity_sold}}</p>
										<p class="sum-name">已售</p>
									</view>
									<view>
										<p class="sum">{{items.follow}}</p>
										<p class="sum-name">关注人数</p>
									</view>
								</view>
							</div>
						</div>
						<div class="gpawei">
							<img src="../../static/iconfont/weizhi.png" mode=""/>
							<!-- (data1.distance)/1000).toFixed(1) -->
							{{items.address}}&nbsp;（{{((items.juli)/1000).toFixed(1) }}km）</div>
					    </li>
				</ul>
			</div>
		</div>
		<!--  遮罩：点击购物小图标弹出  -->
		<skus ref="attrModal" @confirm="_confirm"></skus>

		<skeleton :animation="true" :loading="!load" bgColor="#FFF"></skeleton>
	</div>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	import skus from '../../components/skus.vue';

	export default {
		data() {
			return {
				listdianj: [],
				dianpuj: 0,
				topTabBarshou: 0, //头部上皮

				// height:200,
				is_grade: false,
				fastTap: true,
				shopImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/allgoods_shopImg.png',
				closed: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/guanbi2x.png',
				noImg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/noFind.png',
				title: '', //页面标题
				cid: '', //分类id
				loadingType: 0,
				page: 1, //分页码
				pro_list: [],
				jian_hei: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jian2x.png',
				jian_hui: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jianhui2x.png',
				jia_hei: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jia+2x.png',
				jia_hui: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/add+2x.png',
				attribute_id: '',
				attrList: '',
				skuBeanList: '',
				mask_display: false,
				ys_price: '', //规格初始价格
				num: '', //规格数量
				price: '', //规格价格
				imgurl: '', //规格图片
				scan_d: '', //收藏id
				pro: '', //商品信息
				load_next: true, //是否能继续下滑加载
				haveSkuBean: '', //选择规则属性
				numb: 1, //规格选择的数量
				load: false,
				proid: '',
				msg: '',
				shop_id: '',

				highKeys: {},
				skuName: 'SkuID',
				skuName1: 'Price',
				skuName2: 'Pic',
				skuName3: 'Stock',
				spliter: ',',
				list: {},
				result: {},

				filter: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/filter.png',
				filter_h: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/filter_h.png',
				sortingBottom: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/sortingBottom.png',
				sortingBottomh: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/sortingBottomh.png',
				sortingTop: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/sortingTop.png',
				sortingToph: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/sortingToph.png',
				jiantouBottom: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jiantouBottom.png',
				jiantouTop: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/jiantouTop.png',
				serchimg: this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/searchNew.png',
				placeStyle: 'color:#999999',

				searchtxt: '',

				searchType: '',
				filterMaskFlag: false,
				pinpaiFlag: false,
				sorting: 'asc', //  desc：降序，  asc：升序
				brand_list: [],
				brand_id: '',
				min_price: '', //最低价
				max_price: '',
				brand_id1: '',
				min_price1: '', //最低价
				max_price1: ''
			};
		},
		components: {
			skus
		},
		onLoad(option) {
				uni.setStorageSync('jz', 1)
			this.cid = option.cid;
			this.title = option.name;
			this.shop_id = option.shop_id;

			this._axios();
		},
		// 下拉加载
		onReachBottom: function() {

			if (this.load_next) {
				this.loadingType = 1;
				this.page++;
				this._axios()
			}
		},
		methods: {
			// 进店
			_goStore(shop_id) {
				uni.navigateTo({
					url: '../../pagesA/store/store?shop_id=' + shop_id
				})
			},

			_searchB() {
				this.page = 1
				uni.pageScrollTo({
					duration: 0,
					scrollTop: 0
				})
				this._axios()
			},
			changeBrand(item) {
				this.brand_id = item.brand_id
			},
			removeMask() {
				this.filterMaskFlag = false

				this.min_price = this.min_price1
				this.max_price = this.max_price1
				this.brand_id = this.brand_id1
			},
			reset() {
				this.min_price = ''
				this.max_price = ''
				this.brand_id = ''
			},
			filterOk() {
				this.min_price1 = this.min_price
				this.max_price1 = this.max_price
				this.brand_id1 = this.brand_id

				this.page = 1
				this._axios()
				this.filterMaskFlag = false
			},
			shaixuanClick() {
				this.filterMaskFlag = !this.filterMaskFlag

				if (!this.filterMaskFlag) {
					this.min_price = this.min_price1
					this.max_price = this.max_price1
					this.brand_id = this.brand_id1
				}
			},
			pinpaiClick() {
				this.pinpaiFlag = !this.pinpaiFlag
			},
			clickType(type) {
				// console.log(type, "555")
				if (this.dianpuj == 0) {
					if ((type == 'volume' || type == 'price' || type == 'comment_num') && this.searchType == type) {
						this.sorting = this.sorting == 'asc' ? 'desc' : 'asc'
					} else {
						this.sorting = 'asc'
					}
					this.searchType = type

					this.page = 1
					this._axios();

				}
				if (this.dianpuj == 2) {
					// console.log(this.dianpuj, "this.dianpu")
					if ((type == 'volume' || type == 'comment_num') && this.searchType == type) {
						this.sorting = this.sorting == 'asc' ? 'desc' : 'asc'

					} else {
						this.sorting = 'asc'

					}
					this.searchType = type

					this.page = 1
					this.dianpu();

				}

			},
			dianpu() {
				let data = {

					module: "app",
					action: "DadaFreight",
					app: "mch_list",
					sort_criteria: this.searchType,
					lng1: uni.getStorageSync('longitude'),
					lat1: uni.getStorageSync('latitude')

				}
				if (this.searchType == 'volume' || this.searchType == 'comment_num') {
					data.sort = this.sorting
				}
				this.$req.post({
					data
				}).then(res => {

					if (res.code === 200) {
						this.listdianj = res.data
						// console.log(this.listdianj, "this.listdianj")/
					}
				})

			},
			// 点击头部切换数据
			// 点击导航切换商品/店铺
			_search(type) {
				if (type == 0) {
					this.dianpuj = type
					this.searchType = ""
					// console.log("执行的商品")
				}
				if (type == 2) {
					this.dianpuj = type
					// console.log("执行的店铺")
					this.searchType = 'comment_num'
					this.dianpu()
				}

				// this.searchgoods = ''
				this.topTabBarshou = type
				this.success = true
				// this.page = 1
				// this._axios()
			},
			_axios() {
				let query_criteria = {
					brand_id: this.brand_id1,
					min_price: this.min_price1,
					max_price: this.max_price1
				}

				let data = {
					cid: this.cid,
					module: 'app',
					action: 'search',
					app: 'listdetail',
					page: this.page,
					pro: '',
					keyword: this.searchtxt,
					sort_criteria: this.searchType,
					query_criteria: JSON.stringify(query_criteria),
					lng1: uni.getStorageSync('longitude'),
					lat1: uni.getStorageSync('latitude')

				};

				if (this.searchType == 'volume' || this.searchType == 'price' || this.searchType == 'comment_num') {
					data.sort = this.sorting
				}

				if (this.shop_id) {
					data.shop_id = this.shop_id;
				}
				this.$req.post({
					data
				}).then(res => {
					if (res.code === 200) {
						if (this.page == 1) {
							this.pro_list = []
						}

						let {
							pro,
							pname,
							grade
						} = res;
						this.is_grade = grade == 0 ? false : true;

						if (this.brand_list.length == 0) {
							this.brand_list = res.brand_class_list
						}


						if (pro) {
							pro.filter(item => {
								item.vip_yprice = Number(item.vip_yprice).toFixed(2)
								item.vip_price = Number(item.vip_price).toFixed(2)
							})
						}
						this.pro_list.push(...pro)
						this.title = pname;
						if (res.pro.length > 0) {
							this.loadingType = 0;
						} else {
							this.load_next = false;
							this.loadingType = 2;
						}
						if (pname) {
							//#ifdef MP
							uni.setNavigationBarTitle({
								title: pname
							});
							// #endif
						}
						this.load = true
					} else {
						uni.showToast({
							title: res.message,
							duration: 1500,
							icon: 'none'
						});
					}
				})
			},
			/*   跳转商品详情页    */
			_goods(id) {
				this.pro_id(id);
				uni.navigateTo({
					url: '/pages/goods/goodsDetailed?toback=true&pro_id=' + id
				});
			},
			// 点击购物图标
			shopping_j(id) {
				if (!this.fastTap) {
					return;
				}
				this.fastTap = false;
				this.proid = id;
				var data = {
					module: 'app',
					action: 'product',
					app: 'index',
					pro_id: id
				};

				this.$req.post({
					data
				}).then(res => {
					this.fastTap = true;
					if (res.code == 200) {
						let {
							data: {
								collection_id,
								pro,
								comments,
								attrList,
								skuBeanList,
								qj_price,
								type,
								attribute_list
							}
						} = res;

						this.ys_price = qj_price
						this.attrList = attrList

						this.$refs.attrModal.imgurl = pro.img_arr[0]
						this.$refs.attrModal.num = pro.num
						this.$refs.attrModal.price = qj_price
						this.$refs.attrModal.skuBeanList = attribute_list
						this.$refs.attrModal.initData()
						this.$refs.attrModal._mask_display()

						this.collection = type
					} else {
						uni.showToast({
							title: res.message,
							duration: 1500,
							icon: 'none'
						});
					}
				}).catch(error => {
					this.fastTap = true;
				})
			},
			//打开遮罩层
			_mask_display() {
				this.mask_display = true;
				if (!this.haveSkuBean) {
					for (var i = 0; i < this.attrList.length; i++) {
						var attr = this.attrList[i].attr;
						if (attr.length == 1) {
							this.showState(0, i);
						}
					}
				}
			},
			//关闭遮罩层
			_mask_false() {
				// 关闭弹窗让购买数量重新设为默认
				this.numb = 1;
				this.mask_display = false;
				if (!this.haveSkuBean) {
					for (var i = 0; i < this.attrList.length; i++) {
						var attr = this.attrList[i].attr;
						if (attr.length == 1) {
							this.showState(0, i);
						}
					}
				}
			},
			//点击遮罩层的关闭按钮
			_mask_f() {
				this.haveSkuBean = '';
				this._mask_false();
				this.mask_display = false;
			},
			//确认
			_confirm(sku) {
				Object.assign(this.$data, sku)

				if (Boolean(this.haveSkuBean)) {
					if (this.num == 0) {
						uni.showToast({
							title: this.language.goods.goods.Insufficient_stock,
							duration: 1000,
							icon: 'none'
						});
					} else if (this.num != 0) {
						this._shopping();
					}
				} else {
					if (this.num == 0) {
						uni.showToast({
							title: this.language.goods.goods.Insufficient_stock,
							duration: 1000,
							icon: 'none'
						});
					} else {
						uni.showToast({
							title: this.language.goods.goods.Tips,
							duration: 1000,
							icon: 'none'
						});
					}
				}
			},
			//加入购物车
			_shopping() {
				if (this.haveSkuBean) {
					var data = {
						module: 'app',
						action: 'product',
						app: 'add_cart',
						pro_id: this.proid,
						attribute_id: this.haveSkuBean.cid,
						num: this.numb,
						type: 'addcart'
					};
					if (this.access_id) {
						data.access_id = this.access_id;
					} else {
						data.access_id = '';
					}
					if (this.$store.state.nCart) {
						data.cart_id = this.$store.state.nCart;
					} else {
						data.cart_id = '';
					}

					this.$req.post({
						data
					}).then(res => {
						let {
							code,
							data,
							message
						} = res;
						if (code == 200) {
							uni.showToast({
								title: this.language.goods.goods.add_success,
								duration: 1000,
								icon: 'none'
							});

							this.haveSkuBean = ''
							this.$refs.attrModal._mask_f()
						} else {
							uni.showToast({
								title: message,
								duration: 1500,
								icon: 'none'
							});
						}
						if (data && data.cart_id) {
							if (!this.in_array(data.cart_id, this.$store.state.nCart)) {
								this.$store.state.nCart.push(data.cart_id);
							}
						}
					})
				} else {
					this._mask_display();
				}
			},
			in_array(stringToSearch, arrayToSearch) {
				for (let s = 0; s < arrayToSearch.length; s++) {
					let thisEntry = arrayToSearch[s].toString()
					if (thisEntry == stringToSearch) {
						return true
					}
				}
				return false
			},
			...mapMutations({
				pro_id: 'SET_PRO_ID',
				cindex: 'SET_CINDEX'
			})
		},
	};
</script>

<style lang="less">
	@import url('../../static/css/goods/goods.less');
</style>
