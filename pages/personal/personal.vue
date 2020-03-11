<template>
	<view class="personal">
		<view class="personal-bg">
			<!-- header -->
			<view class="personal-header">
				<view class="position">
					<text class="iconfont icon-dingwei"></text>
					{{newCity}}
					<text class="iconfont icon-jiantou-xia"></text>
				</view>
				<text class="title">个人中心</text>
				<text class="iconfont icon-saomiao" @tap="scanCode"></text>
			</view>
			<!-- 顶部 -->
			<view class="personal-top">
				<view class="personal-top-left">
					<image src="../../static/images/cartLOGO.png" mode="" @tap="goSetting"></image>
					<view class="title">
						<text class="name">台北豆浆一号店</text>
						<view class="dengji" @tap="goGrade">
							<text class="iconfont icon-w_dengji"></text>
							V9
						</view>
					</view>
				</view>
				<view class="personal-top-right">
					<navigator url="../setting/setting" class="iconfont icon-shezhi"></navigator>
				</view>
			</view>
		</view>
		<!-- 个人信息 -->
		<view class="personal-msg">
			<view class="personal-msg-top">
				<view>
					<text>900.000</text>
					<view>上一天分利</view>
				</view>
				<view>
					<text>50.00</text>
					<view>总消费金</view>
				</view>
				<view @tap="goMyConsume">
					<text>900.00</text>
					<view>我的消费金</view>
				</view>

			</view>
			<view class="personal-msg-bottom">
				<view class="text">
					<text @tap="goMyPentacle">999.00000000</text>
					<view class="xingbi" @tap="goMyPentacle">我的星币</view>
					<view class="duihuan" @tap="goXbExchange">兑换</view>
				</view>
				<view class="text">
					<text @tap="goMyBalance">9.000</text>
					<view class="xingbi" @tap="goMyBalance">账户余额</view>
					<navigator url="../myCard/myCard?text=提现" class="duihuan">提现</navigator>
				</view>
			</view>
		</view>
		<!-- 标题列表 -->
		<view class="personal-titleList">
			<view class="item" v-for="item in menuList" :key="item.id" @tap="goPage(item.id)">
				<view class="left">
					<text class="iconfont" :class="item.icon" :style="{'color': item.color}"></text>
					<text>{{item.text}}</text>
				</view>
				<text class="iconfont icon-youjiantou"></text>
			</view>
		</view>
		<!-- tabbar -->
		<tabbar active="4"></tabbar>
	</view>
</template>

<script>
	// 引入tabbar
	import tabbar from "@/components/common-tabbar/common-tabbar";
	// 引入高德地图
	import amapPlugin from '@/components/initMap.js';
	export default {
		data() {
			return {
				menuList: [{
						"id": "01",
						"icon": "icon-dingdanmian",
						"color": "#ff808d",
						"text": "我的订单"
					},
					{
						"id": "02",
						"icon": "icon-pingjia-tianchong",
						"color": "#367feb",
						"text": "评价管理"
					},
					{
						"id": "03",
						"icon": "icon-aixin",
						"color": "#fa5d6a",
						"text": "收藏店铺"
					},
					{
						"id": "04",
						"icon": "icon-shangpu",
						"color": "#fca71e",
						"text": "商家入驻"
					},
					{
						"id": "05",
						"icon": "icon-dingwei",
						"color": "#367feb",
						"text": "收货地址"
					},
					{
						"id": "06",
						"icon": "icon-weibiaoti--",
						"color": "#fca71e",
						"text": "我的卡券"
					},
					{
						"id": "07",
						"icon": "icon-zhinanzhen",
						"color": "#367feb",
						"text": "新手指南"
					},
				],
				newCity: ''
			};
		},
		components: {
			tabbar
		},
		methods: {
			goPage(index) {
				if (index == 1) {
					uni.navigateTo({
						url: "../myOrder/myOrder"
					})
				}
				if (index == 2) {
					uni.navigateTo({
						url: "../myEvaluate/myEvaluate"
					})
				}
				if (index == 3) {
					uni.navigateTo({
						url: "../collectShop/collectShop"
					})
				}
				if (index == 4) {
					uni.navigateTo({
						url: "../merchantEntry/merchantEntry"
					})
				}
				if (index == 5) {
					uni.navigateTo({
						url: "../myAddress/myAddress"
					})
				}
				if (index == 6) {
					uni.navigateTo({
						url: "../myCard/myCard"
					})
				}
			},
			// 进入设置
			goSetting(){
				uni.navigateTo({
					url:'../setting/setting'
				})
			},
			// 进入我的消费金
			goMyConsume() {
				uni.navigateTo({
					url: "../myConsume/myConsume"
				})
			},
			// 进入我的余额
			goMyBalance() {
				uni.navigateTo({
					url: "../myBalance/myBalance"
				})
			},
			// 进入我的星币
			goMyPentacle() {
				uni.navigateTo({
					url: "../myPentacle/myPentacle"
				})
			},
			// 扫描二维码
			scanCode() {
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			// 等级
			goGrade() {
				uni.navigateTo({
					url: "../grade/grade"
				})
			},
			// 星币兑换
			goXbExchange() {
				uni.navigateTo({
					url: "../xbExchange/xbExchange"
				})
			}
		},
		onLoad() {
			// 获取全局城市地址
			console.log(getApp().globalData.city[1])
			this.newCity = getApp().globalData.city[1];	
		}
	}
</script>

<style lang="less">
	.personal {
		min-height: 100%;
		background: #f5f6f7;
		padding-bottom: 100rpx;

		.personal-bg {
			background: url(../../static/images/bg2.jpg) no-repeat;
			background-size: cover;
			padding-top: 90rpx;
		}
	
		.personal-header {
			padding: 20rpx;
			font-size: 40rpx;
			/* #ifdef APP-PLUS */
			padding-top: 60rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			padding-top: 60rpx;
			/* #endif */
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #fff;
			position: fixed;
			width: 95%;
			z-index: 99999;
			top: 0;
			background: url(../../static/images/bg2.jpg) no-repeat;
			background-size: 100%;
			.position {
				font-size: 30rpx;

				text:first-child {
					font-size: 33rpx;
					margin-right: 10rpx;
				}

				text:last-child {
					font-size: 18rpx;
					margin-left: 10rpx;
				}
			}

			.title {
				margin-left: -80rpx;
			}

			>.iconfont {
				font-size: 48rpx;
			}
		}

		.personal-top {
			color: #fff;
			display: flex;
			justify-content: space-between;
			padding: 30rpx 20rpx 100rpx;
			/* #ifdef APP-PLUS */
			padding-top: 70rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			padding-top: 70rpx;
			/* #endif */
			.personal-top-left {
				display: flex;

				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					margin-right: 20rpx;
				}

				.title {
					margin-top: -5rpx;

					.name {
						font-size: 38rpx;
					}

					.dengji {
						margin-top: 15rpx;
						width: 108rpx;
						height: 42rpx;
						border-radius: 21rpx;
						background: #fff;
						color: #FF7900;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 28rpx;

						text {
							font-size: 50rpx;
						}
					}
				}
			}

			.personal-top-right {
				.iconfont {
					font-size: 50rpx;
				}
			}
		}

		// 个人信息
		.personal-msg {
			position: relative;
			top: -70rpx;
			background: #fff;
			width: 95%;
			margin: auto;
			border-radius: 20rpx;

			>view {
				display: flex;
			}

			.personal-msg-top {
				border-bottom: 1px solid #ccc;

				>view {
					width: 33%;
					padding: 30rpx 0;
					text-align: center;

					text {
						font-size: 38rpx;
						color: #FF5A32;
						font-weight: bold;
					}

					view {
						margin-top: 25rpx;
						font-size: 30rpx;
					}
				}

				>view:not(:last-child) {
					border-right: 1px solid #ccc;
				}
			}

			.personal-msg-bottom {
				padding: 30rpx 0;

				.text:first-child {
					border-right: 1px solid #ccc;
				}

				.text {
					width: 50%;
					text-align: center;

					text {
						font-weight: bold;
						color: #FF5A32;
					}

					.xingbi {
						font-size: 30rpx;
						margin: 20rpx 0;
					}

					.duihuan {
						width: 156rpx;
						height: 50rpx;
						border-radius: 25rpx;
						background: #f2e1db;
						color: #FF5904;
						font-size: 24rpx;
						font-weight: bold;
						line-height: 50rpx;
						margin: auto;
					}
				}
			}
		}

		// 标题列表
		.personal-titleList {
			background: #fff;
			padding-left: 30rpx;
			width: 91%;
			margin: -40rpx auto 0;
			border-radius: 20rpx;

			.item {
				display: flex;
				justify-content: space-between;
				font-size: 30rpx;
				padding: 30rpx 0;

				.iconfont {
					font-size: 40rpx;
					margin-right: 20rpx;
					color: #999;
				}
			}

			.item:not(:last-child) {
				border-bottom: 1px solid #ccc;
			}
		}
	}
</style>
