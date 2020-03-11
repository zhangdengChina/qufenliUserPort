<template>
	<view class="index">
		<!-- 顶部 -->
		<view class="index-top">
			<view>
				<!-- 定位 -->
				<pickerAddress class="index-top-address" @change="setCity">
					<text class="iconfont icon-dingwei"></text>{{newCity}}
					<text class="iconfont icon-jiantou-xia"></text>
				</pickerAddress>
				<!-- 搜索 -->
				<view class="index-top-search" @tap="goSearch">
					<text class="iconfont icon-sousuo"></text>
					<text>请输入商家名称或商品名</text>
					<!-- <input type="text" @tap="showHistory" @confirm="search" value="" placeholder="请输入商家名称或商品名" placeholder-style="fontSize:24rpx" style="font-size: 30rpx;"/> -->
				</view>
				<!-- 扫描 -->
				<text class="iconfont icon-saomiao" @tap="scanCode"></text>
			</view>
		</view>
		<!-- 广告 -->
		<navigator url="../preferencesPage/preferencesPage" class="index-poster">
			<image src="../../static/images/banner.png" mode=""></image>
		</navigator>
		<!-- 分类 -->
		<view class="index-item">
			<navigator url="../localPreferences/localPreferences" class="index-item-left">
				<view class="index-item-left-top">
					<text>本地优惠活动</text>
					<view>
						<text class="iconfont icon-youjiantou"></text>
					</view>
				</view>
			</navigator>
			<view class="index-item-right">
				<view @tap="getItem(1)">
					<text>综合商家</text>
					<image src="../../static/images/item03.png" mode=""></image>
				</view>
				<view @tap="getItem(2)">
					<text>休闲娱乐</text>
					<image src="../../static/images/item04.png" mode=""></image>
				</view>
				<view @tap="getItem(3)">
					<text>餐饮美食</text>
					<image src="../../static/images/item05.png" mode=""></image>
				</view>
				<view @tap="getItem(4)">
					<text>生活便民</text>
					<image src="../../static/images/item06.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 推荐内容 -->
		<view class="index-content" v-for="(item,index) in itemList" :key="index">
			<view class="index-content-title">
				<text>{{item.title}}</text>
				<view @tap="goShopPage">进店逛逛</view>
			</view>
			<view class="index-content-msg">
				<text>累计{{item.cumulative}}人购买</text>
				<view>{{item.address}} 距离{{item.length}}</view>
			</view>
			<view class="index-content-product">
				<view class="index-content-product-msg" v-for="(item1,index1) in item.list" :key="index1">
					<image :src="item1.url" mode=""></image>
					<text>{{item1.name}}</text>
					<view class="msg">
						<text>￥{{item1.price}}</text>{{item1.num}}人购买
					</view>
				</view>
			</view>
		</view>
		<!-- tabbar -->
		<tabbar active="1"></tabbar>

		<!-- 搜索蒙层 -->
		<view class="index-mask" :class="maskHide?'maskHide':''">
			<p class="index-mask-item">豆浆油条先生</p>
		</view>
	</view>
</template>

<script>
	// 引入tabbar
	import tabbar from "@/components/common-tabbar/common-tabbar";
	// 引入高德地图
	import amapPlugin from '@/components/initMap.js';
	// 城市选择器
	import pickerAddress from '@/components/pickerAddress/pickerAddress.vue';
	export default {
		data() {
			return {
				title: '',
				newCity: '',
				maskHide: true,
				menuList: {
					'ZHSJ': [{
							id: '01',
							title: '豆浆油条先生',
							cumulative: '153',
							address: '长沙市岳麓区',
							length: '2km',
							list: [{
									id: '01',
									url: '../../static/images/content01.png',
									name: '黑椒意大利面',
									price: 9.9,
									num: 248
								},
								{
									id: '02',
									url: '../../static/images/demo01.webp',
									name: '散子豆腐脑',
									price: 19.9,
									num: 108
								},
								{
									id: '03',
									url: '../../static/images/demo02.webp',
									name: '肥肠豆腐脑',
									price: 22.9,
									num: 50
								},
							]
						},
						{
							id: '02',
							title: '大米先生',
							cumulative: '153',
							address: '长沙市岳麓区',
							length: '3km',
							list: [{
									id: '04',
									url: '../../static/images/content01.png',
									name: '黑椒意大利面',
									price: 9.9,
									num: 248
								},
								{
									id: '05',
									url: '../../static/images/demo01.webp',
									name: '散子豆腐脑',
									price: 19.9,
									num: 108
								},
								{
									id: '03',
									url: '../../static/images/demo02.webp',
									name: '肥肠豆腐脑',
									price: 22.9,
									num: 50
								},
							]
						},
						{
							id: '03',
							title: '九宫格火锅',
							cumulative: '153',
							address: '长沙市岳麓区',
							length: '4km',
							list: [{
									id: '01',
									url: '../../static/images/content01.png',
									name: '黑椒意大利面',
									price: 9.9,
									num: 248
								},
								{
									id: '02',
									url: '../../static/images/demo01.webp',
									name: '散子豆腐脑',
									price: 19.9,
									num: 108
								},
								{
									id: '03',
									url: '../../static/images/demo02.webp',
									name: '肥肠豆腐脑',
									price: 22.9,
									num: 50
								},
							]
						},
					],
					'XXYL':[{
							id: '01',
							title: '向日葵KTV',
							cumulative: '153',
							address: '长沙市岳麓区',
							length: '2km',
							list: [{
									id: '01',
									url: '../../static/images/content01.png',
									name: '黑椒意大利面',
									price: 9.9,
									num: 248
								},
								{
									id: '02',
									url: '../../static/images/demo01.webp',
									name: '散子豆腐脑',
									price: 19.9,
									num: 108
								},
								{
									id: '03',
									url: '../../static/images/demo02.webp',
									name: '肥肠豆腐脑',
									price: 22.9,
									num: 50
								},
							]
						}
					],
					'CYMS':[{
							id: '01',
							title: '沙县小吃',
							cumulative: '153',
							address: '长沙市岳麓区',
							length: '2km',
							list: [{
									id: '01',
									url: '../../static/images/content01.png',
									name: '黑椒意大利面',
									price: 9.9,
									num: 248
								},
								{
									id: '02',
									url: '../../static/images/demo01.webp',
									name: '散子豆腐脑',
									price: 19.9,
									num: 108
								},
								{
									id: '03',
									url: '../../static/images/demo02.webp',
									name: '肥肠豆腐脑',
									price: 22.9,
									num: 50
								},
							]
						}
					],
					'SHBM':[{
							id: '01',
							title: '红旗超市',
							cumulative: '153',
							address: '长沙市岳麓区',
							length: '2km',
							list: [{
									id: '01',
									url: '../../static/images/content01.png',
									name: '黑椒意大利面',
									price: 9.9,
									num: 248
								},
								{
									id: '02',
									url: '../../static/images/demo01.webp',
									name: '散子豆腐脑',
									price: 19.9,
									num: 108
								},
								{
									id: '03',
									url: '../../static/images/demo02.webp',
									name: '肥肠豆腐脑',
									price: 22.9,
									num: 50
								},
							]
						}
					],
				},
				itemType: 1,
			}
		},
		onLoad() {
			// 判断全局是否有值
			if (getApp().globalData.city.length) {
				this.newCity = getApp().globalData.city.join('')
				console.log(getApp().globalData.city)
			} else {
				// 定位
				// #ifdef MP-WEIXIN
				amapPlugin.getRegeo({
					success: (data) => {
						getApp().globalData.city = [];
						this.newCity = data[0].regeocodeData.addressComponent.city + data[0].regeocodeData.addressComponent.district;
						getApp().globalData.city.push(data[0].regeocodeData.addressComponent.city, data[0].regeocodeData.addressComponent
							.district)
						console.log(getApp().globalData.city)
					},
					fail: (err) => {
						console.log(err);
						uni.showToast({
							title: "定位失败！手动选择",
							icon: 'none'
						})
					}
				})
				// #endif
				// #ifdef H5
				uni.getLocation({
					success: (res) => {
						uni.request({
							url: "https://restapi.amap.com/v3/geocode/regeo?parameters",
							method: 'GET',
							data: {
								key: 'f0d8604522a34fea7af419d353f98e8f',
								location: `${res.longitude}, ${res.latitude}`
							},
							success: (data) => {
								getApp().globalData.city = [];
								this.newCity = data.data.regeocode.addressComponent.city + data.data.regeocode.addressComponent.district;
								getApp().globalData.city.push(data.data.regeocode.addressComponent.city, data.data.regeocode.addressComponent
									.district);
								// console.log(this.newCity) // 注意就是data.data！！！
							},
							fail(err) {
								console.log(err)
								uni.showToast({
									title: "定位失败！手动选择",
									icon: 'none'
								})
							}
						})
					},
					fail(err) {
						console.log('错误');
						uni.showToast({
							title: "定位失败！手动选择",
							icon: 'none'
						})
					},
					complete() {
						console.log('完毕')
					}
				})
				// #endif
				// #ifdef APP-PLUS
				uni.getLocation({
					type: 'gcj02',
					geocode: true,
					success: (res) => {
						console.log(res.address)
						getApp().globalData.city = [];
						this.newCity = res.address.city + res.address.district;
						getApp().globalData.city.push(res.address.city, res.address.district);
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
					},
					fail: (err) => {
						console.log(err);
						uni.showToast({
							title: "定位失败！手动选择",
							icon: 'none'
						})
					}
				});
				// #endif
			}
		},
		methods: {
			// 手动设置城市
			setCity(data) {
				this.newCity = data.data.slice(1).join('')
				// 存入全局变量
				getApp().globalData.city = data.data.slice(1);
			},
			// 分类筛选
			getItem(item) {
				this.itemType = item;
			},
			// 前往店铺
			goShopPage() {
				uni.navigateTo({
					url: "../shopPage/shopPage"
				})
			},
			// 扫描二维码
			scanCode() {
				// 允许从相机和相册扫码
				// #ifdef APP-PLUS
				uni.scanCode({
					success: (res)=> {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						uni.navigateTo({
							url:'../scanPay/scanPay'
						})
					}
				});
				// #endif
				// #ifdef H5
				this.jweixin.scanQRCode({
				  needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
				  scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
				  success: function (res) {
				    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
				  }
				});
				// #endif
			},
			// 搜索
			// search(e){
			// 	this.maskHide = true;
			// 	console.log(e.detail.value)
			// },
			// showHistory(){
			// 	this.maskHide = false;
			// }
			goSearch() {
				uni.navigateTo({
					url: "../search/search"
				})
			}
		},
		components: {
			tabbar,
			pickerAddress
		},
		computed: {
			// 搜索筛选分类
			itemList() {
				// 综合
				if (this.itemType === 1) {
					return this.menuList.ZHSJ;
				}
				// 休闲娱乐
				if (this.itemType === 2) {
					return this.menuList.XXYL;
				}
				// 餐饮美食
				if (this.itemType === 3) {
					return this.menuList.CYMS;
				}
				// 生活便民
				if (this.itemType === 4) {
					return this.menuList.SHBM;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.index {
		min-height: 100%;
		background: #f7f4f8;
		color: #333;
		padding-bottom: 120rpx;
		position: relative;

		// 顶部
		.index-top {
			background: url(../../static/images/bg1.jpg) no-repeat;
			background-size: cover;
			color: #fff;
			height: 220rpx;
			width: 100%;
			z-index: 100;

			>view {
				display: flex;
				align-items: center;
				font-size: 28rpx;
				position: fixed;
				top: 0;
				width: 100%;
				z-index: 900;
				padding: 30rpx 0;
				background: url(../../static/images/bg1.jpg) no-repeat;
				background-size: cover;
				/* #ifdef APP-PLUS */
				padding-top: 70rpx;
				/* #endif */
				/* #ifdef MP-WEIXIN */
				padding-top: 70rpx;

				/* #endif */
				.index-top-address {
					.iconfont:first-child {
						font-size: 38rpx;
						margin: 0 10rpx 0 20rpx;
					}

					.iconfont:last-child {
						font-size: 20rpx;
						margin: 0 20rpx 0 10rpx;
					}
				}

				.index-top-search {
					flex: 1;
					height: 64rpx;
					background: #fff;
					font-size: 24rpx;
					border-radius: 32rpx;
					color: rgba(153, 153, 153, 1);
					display: flex;
					align-items: center;
					justify-content: center;

					.iconfont {
						font-weight: bold;
						margin-right: 15rpx;
					}
				}

				>.iconfont {
					font-size: 50rpx;
					margin: 0 20rpx;
				}
			}

		}

		// 广告
		.index-poster {
			height: 330rpx;
			width: 95%;
			margin: -100rpx auto 0;
			/* #ifdef APP-PLUS */
			margin: -55rpx auto 0;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			margin: -55rpx auto 0;
			/* #endif */
			position: relative;
			z-index: 800;
			border-radius: 20rpx;
			overflow: hidden;
			box-shadow: 2rpx 4rpx 30rpx #4e4e4e;

			image {
				width: 100%;
				height: 100%;
			}
		}

		// 分类
		.index-item {
			height: 324rpx;
			width: 95%;
			background: #fff;
			margin: 50rpx auto 0;
			border-radius: 20rpx;
			display: flex;
			color: #333333;
			font-size: 30rpx;

			.index-item-left {
				width: 40%;
				background: url(../../static/images/item01.png) no-repeat;
				background-position: 0 60rpx;
				border-right: 1px solid #eae8e9;

				.index-item-left-top {
					padding-top: 30rpx;
					display: flex;
					font-weight: bold;
					justify-content: center;
					align-items: center;
					letter-spacing: 4rpx;

					view {
						width: 32rpx;
						height: 32rpx;
						line-height: 32rpx;
						color: #fff;
						font-size: 20rpx;
						background: #fe8c02;
						border-radius: 50%;
						background-size: 100%;
						text-align: center;

						.iconfont {
							font-size: 24rpx;
							margin-left: 5rpx;
						}
					}
				}
			}

			.index-item-right {
				width: 60%;
				height: 100%;
				display: flex;
				flex-wrap: wrap;

				>view {
					width: 49%;
					height: 50%;
					display: flex;
					justify-content: space-around;

					text {
						padding: 20rpx 0 0 10rpx;
					}

					image {
						width: 78rpx;
						height: 78rpx;
						margin-top: 60rpx;
						margin-right: 5rpx;
					}
				}

				view:nth-child(1) {
					border-bottom: 1px solid #eae8e9;
					border-right: 1px solid #eae8e9;
				}

				view:nth-child(2) {
					border-bottom: 1px solid #eae8e9;
				}

				view:nth-child(3) {
					border-right: 1px solid #eae8e9;
				}
			}
		}

		// 推荐内容
		.index-content {
			height: 400rpx;
			width: 90%;
			margin: 30rpx auto 0;
			background: #fff;
			border-radius: 20rpx;
			padding: 30rpx 20rpx;

			.index-content-title,
			.index-content-msg {
				display: flex;
				justify-content: space-between;
			}

			.index-content-title {
				font-size: 34rpx;
				letter-spacing: 4rpx;

				text {
					font-weight: 600;
				}

				view {
					width: 132rpx;
					height: 50rpx;
					font-size: 24rpx;
					color: #fff;
					background: linear-gradient(231deg, rgba(255, 178, 10, 1) 0%, rgba(255, 127, 4, 1) 60%, rgba(255, 89, 4, 1) 100%);
					border-radius: 50rpx;
					text-align: center;
					line-height: 50rpx;
				}
			}

			.index-content-msg {
				align-items: center;
				padding: 10rpx 0;

				text {
					height: 32rpx;
					font-size: 24rpx;
					padding: 3rpx 20rpx;
					background: #ffedec;
					color: #FF403A;
					border-radius: 17px;
				}

				view {
					color: #999999;
					font-size: 28rpx;
				}
			}

			.index-content-product {
				display: flex;
				justify-content: space-between;

				.index-content-product-msg {
					margin-top: 20rpx;
					width: 31%;
					font-size: 26rpx;

					image {
						width: 210rpx;
						height: 178rpx;
						background: rgba(216, 216, 216, 1);
						border-radius: 10rpx;
					}

					>text {
						display: inline-block;
						font-weight: bold;
						margin-top: 10rpx;
						font-size: 24rpx;
					}

					view {
						margin-top: 10rpx;
						color: #999;
						font-size: 24rpx;

						text {
							color: #FF403A;
							font-weight: bold;
							margin-right: 10rpx;
						}
					}
				}
			}
		}

		// 搜索蒙层
		.maskHide {
			display: none;
		}

		.index-mask {
			width: 100%;
			height: 100%;
			background: rgba(1, 1, 1, 0.5);
			position: fixed;
			z-index: 899;
			top: 0;
			left: 0;
			color: #000;
			padding-top: 120rpx;

			.index-mask-item {
				font-size: 30rpx;
				padding: 15rpx;
				background: rgba(255, 255, 255, 0.5);
				border-bottom: 1px solid #ccc;
			}
		}
	}
</style>
