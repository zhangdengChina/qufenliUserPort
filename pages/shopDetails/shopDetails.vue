<template>
	<view class="shopDetails">
		<view class="shopDetails-Top">
			<view class="shopDetails-Top-header">
				<view class="left">
					<text class="iconfont icon-zuojiantou" @tap="backPage"></text>
				</view>
				<view class="right">
					<view>
						<text class="iconfont icon-xingxing"></text>
					</view>
					<view>
						<text class="iconfont icon-lingdang-xianxing"></text>
					</view>
					<view>
						<text class="iconfont icon-fenxiang"></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 主题 -->
		<view class="shopDetails-header">
			<text class="shopDetails-header-title">烤牛板筋</text>
			<view class="shopDetails-header-text">
				月售520<text>好评率92%</text>
			</view>
			<view class="shopDetails-header-tips">
				主要原料：海报蔬菜其他各种肉类和芝士
			</view>
			<view class="shopDetails-header-addGoods">
				<view class="addGoods-left">
					¥<text>10</text>
				</view>
				<view class="addGoods-right">
					<text>-</text>
					2
					<text>+</text>
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="shopDetails-content">
			<view class="shopDetails-content-item" @tap="goDetails">
				<view class="left">
					<image src="../../static/images/content01.png" mode=""></image>
				</view>
				<view class="right">
					<text class="title">黑胡椒意大利面</text>
					<view class="text">
						<text>月售520</text>
						<text>好评率92%</text>
					</view>
					<view class="addGoods">
						<view class="addGoods-left">
							¥<text>10</text>
						</view>
						<view class="addGoods-right">
							<text>-</text>
							2
							<text>+</text>
						</view>
					</view>
				</view>
			</view>
			<view class="shopDetails-content-item" @tap="goDetails">
				<view class="left">
					<image src="../../static/images/content01.png" mode=""></image>
				</view>
				<view class="right">
					<text class="title">黑胡椒意大利面</text>
					<view class="text">
						<text>月售520</text>
						<text>好评率92%</text>
					</view>
					<view class="addGoods">
						<view class="addGoods-left">
							¥<text>10</text>
						</view>
						<view class="addGoods-right">
							<text>-</text>
							3
							<text>+</text>
						</view>
					</view>
				</view>
			</view>
			<view class="shopDetails-content-item" @tap="goDetails">
				<view class="left">
					<image src="../../static/images/content01.png" mode=""></image>
				</view>
				<view class="right">
					<text class="title">黑胡椒意大利面</text>
					<view class="text">
						<text>月售520</text>
						<text>好评率92%</text>
					</view>
					<view class="addGoods">
						<view class="addGoods-left">
							¥<text>10</text>
						</view>
						<view class="addGoods-right">
							<text>-</text>
							3
							<text>+</text>
						</view>
					</view>
				</view>
			</view>
			<view class="shopDetails-content-item" @tap="goDetails">
				<view class="left">
					<image src="../../static/images/content01.png" mode=""></image>
				</view>
				<view class="right">
					<text class="title">黑胡椒意大利面</text>
					<view class="text">
						<text>月售520</text>
						<text>好评率92%</text>
					</view>
					<view class="addGoods">
						<view class="addGoods-left">
							¥<text>10</text>
						</view>
						<view class="addGoods-right">
							<text>-</text>
							2
							<text>+</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 购物车 -->
		<view class="shopDetails-footer">
			<view class="shopDetails-footer-left">
				<view class="icon">
					<view class="">
						<text class="iconfont icon-gouwucheman"></text>
					</view>
				</view>
				<view class="text">
					共5件商品总计 ￥49
				</view>
			</view>
			<view class="shopDetails-footer-right">
				去结算
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			backPage(){
				// #ifdef H5
				let canBack = true;
				const pages = getCurrentPages();
				// 有可返回的页面则直接返回，uni.navigateBack默认返回失败之后会自动刷新页面 ，无法继续返回  
				if (pages.length > 1) {
					uni.navigateBack(1)
					return;
				}
				// vue router 可以返回uni.navigateBack失败的页面 但是会重新加载  
				let a = this.$router.go(-1)
				// router.go失败之后则重定向到首页  
				if (a == undefined) {
					uni.reLaunch({
						url: "/pages/index/index"
					})
				}
				return;
				// #endif  
				uni.navigateBack(1)
			},
		}
	}
</script>

<style lang="less">
	.shopDetails {
		color: #333;
		.shopDetails-Top {
			height: 380rpx;
			background: #0086B3;

			.shopDetails-Top-header {
				height: 100rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #fff;

				.left {
					margin-left: 30rpx;
				}

				.right {
					display: flex;

					>view {
						width: 50rpx;
						height: 50rpx;
						border-radius: 50%;
						background: rgba(1, 1, 1, 0.3);
						display: flex;
						align-items: center;
						justify-content: center;
						margin-right: 20rpx;

						text {}
					}
				}

				.iconfont {
					font-size: 32rpx;
				}
			}
		}
		.shopDetails-header{
			height: 253rpx;
			background: #fff;
			padding-left: 30rpx;
			font-size: 24rpx;
			color: #666;
			padding-top: 20rpx;
			.shopDetails-header-title{
				font-size: 36rpx;
				font-weight: bold;
				color: #000;
			}
			.shopDetails-header-text{
				margin-top: 30rpx;
			}
			.shopDetails-header-addGoods{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 30rpx;
				padding-right: 50rpx;
				.addGoods-left{
					color: #FF5A32;
					font-size: 28rpx;
					text{
						font-size: 40rpx;
					}
				}
				.addGoods-right{
					display: flex;
					font-size: 32rpx;
					color: #333;
					align-items: center;
					text{
						background: #FF5A32;
						width: 48rpx;
						height:48rpx;
						border-radius: 50%;
						color: #fff;
						font-size: 60rpx;
						line-height: 38rpx;
						text-align: center;
					}
					text:first-child{
						margin-right: 20rpx;
						background: 0;
						color: #FF5A32;
						border: 1px solid #FF5A32;
					}
					text:last-child{
						margin-left: 20rpx;
					}
				}
			}
		}	
		.shopDetails-content{
			background: #f8f6f5;
			padding: 20rpx 0 120rpx 0;
			.shopDetails-content-item{
				padding: 20rpx;
				background: #fff;
				display: flex;
				width: 90%;
				margin: auto;
				border-radius: 20rpx;
				.left{
					width: 180rpx;
					height: 152rpx;
					border-radius: 20rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.right{
					padding: 0 20rpx;
					flex: 1;
					margin-top: -10rpx;
					.title{
						font-size: 30rpx;
						font-weight: bold;
					}
					.text{
						margin: 10rpx 0 20rpx 0;
						font-size: 24rpx;
						color: #666;
						text:last-child{
							margin-left: 30rpx;
						}
					}
					.addGoods{
						display: flex;
						justify-content: space-between;
						align-items: center;
						.addGoods-left{
							color: #FF5A32;
							font-size: 28rpx;
							text{
								font-size: 40rpx;
							}
						}
						.addGoods-right{
							display: flex;
							text{
								background: #FF5A32;
								width: 48rpx;
								height:48rpx;
								border-radius: 50%;
								color: #fff;
								font-size: 60rpx;
								line-height: 38rpx;
								text-align: center;
							}
							text:first-child{
								margin-right: 20rpx;
								background: 0;
								color: #FF5A32;
								border: 1px solid #FF5A32;
							}
							text:last-child{
								margin-left: 20rpx;
							}
						}
					}
				}
			}
			.shopDetails-content-item:not(:first-child){
				margin-top: 20rpx;
			}
		}
		
		.shopDetails-footer{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100rpx;
			width: 100%;
			position: fixed;
			bottom: 0;
			background: #fff;
			box-shadow: 20rpx 0 20rpx #999;
			z-index: 9999;
			.shopDetails-footer-left{
				display: flex;
				margin-left: 50rpx;
				.icon{
					width: 105rpx;
					height: 105rpx;
					border-radius: 50%;
					background: #fee6e3;
					margin-top: -30rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					view{
						width: 90rpx;
						height: 90rpx;
						background: linear-gradient(117deg, rgba(255, 90, 43, 1) 0%, rgba(255, 89, 52, 1) 36%, rgba(255, 156, 31, 1) 100%);
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
						text{
							color: #fff;
							font-size: 50rpx;
						}
					}
				}
				.text{
					font-size: 28rpx;
					color: #666;
					display: flex;
					align-items: center;
					margin-left: 20rpx;
				}
			}
			.shopDetails-footer-right{
				width: 219rpx;
				height: 100%;
				background: #FF6B37;
				color: #fff;
				font-size: 32rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
