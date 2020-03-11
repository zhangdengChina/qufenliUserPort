<template>
	<view class="goodsDetails">
		<!-- header -->
		<commonHeader headerTitl="产品详情" xingHide=true lingHide=true></commonHeader>
		
		<view class="goodsDetails-content">
			<view class="goodsDetails-content-background">
				<image src="../../static/images/content01.png" mode=""></image>
			</view>
			<view class="goodsDetails-content-title">
				<view class="title">
					烤牛板筋
				</view>
				<view class="sale">
					<text>月售520</text>好评率92%  
				</view>
				 <view class="jiesao">
				 	主要原料：海报蔬菜其他各种肉类和芝士
				 </view> 
				 <view class="price">
				 	￥10
				 </view>
			</view>
			<view class="goodsDetails-content-details">
				<view class="title">
					商品详情
				</view>
				<view class="details">
					 汉堡 美味你，经典口味，久盛不衰，一致获得大众的口味，香滑牛奶搭配，回味无穷，主材料，是葡萄干、仙草、红包
				</view>
			</view>
			<view class="goodsDetails-content-evaluate">
				<view class="title">
					评价
				</view>
				<view class="item">
					<view class="left">
						<image src="../../static/images/cartLOGO.png" mode=""></image>
					</view>
					<view class="right">
						<view class="name">
							地主家的傻儿子
						</view>
						<view class="date">
							2019-09-01 15:40
						</view>
						<view class="text">
							这个汉堡确实很不错，都是我喜欢吃的口味，下次还会再买
						</view>
					</view>
				</view>
				<view class="item">
					<view class="left">
						<image src="../../static/images/cartLOGO.png" mode=""></image>
					</view>
					<view class="right">
						<view class="name">
							地主家的傻儿子
						</view>
						<view class="date">
							2019-09-01 15:40
						</view>
						<view class="text">
							这个汉堡确实很不错，都是我喜欢吃的口味，下次还会再买
						</view>
					</view>
				</view>
				<view class="item">
					<view class="left">
						<image src="../../static/images/cartLOGO.png" mode=""></image>
					</view>
					<view class="right">
						<view class="name">
							地主家的傻儿子
						</view>
						<view class="date">
							2019-09-01 15:40
						</view>
						<view class="text">
							这个汉堡确实很不错，都是我喜欢吃的口味，下次还会再买
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- tabbar -->
		<tabbar></tabbar>
	</view>
</template>

<script>
	import commonHeader from "@/components/common-header/common-header";
	import tabbar from "@/components/common-tabbar/common-tabbar"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			tabbar,
			commonHeader
		}
	}
</script>

<style lang="less">
	.goodsDetails{
		background: #f7f7f7;
		color: #333;
		padding-top: 90rpx;
		min-height: 100%;
		padding-bottom: 100rpx;
		/* #ifdef APP-PLUS */
		padding-top: 130rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 130rpx;
		/* #endif */
		.goodsDetails-content{
			.goodsDetails-content-background{
				height: 390rpx;
				width: 100%;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.goodsDetails-content-title{
				background: #fff;
				padding: 20rpx 30rpx;
				font-size: 24rpx;
				color: #666;
				.title{
					color: #000;
					font-size: 36rpx;
					font-weight: bold;
				}
				.sale{
					padding-top: 15rpx;
					text{margin-right: 30rpx;}
				}
				.jiesao{
					margin-top: 5rpx;
				}
				.price{
					font-size: 28rpx;
					color: #FF5A32;
					margin-top: 15rpx;
				}
			}
			.goodsDetails-content-details{
				padding: 30rpx;
				background: #fff;
				margin-top: 20rpx;
				.title{
					font-size: 32rpx;
					font-weight: bold;
				}
				.details{
					font-size: 28rpx;
					color: #666;
					margin-top: 10rpx;
				}
			}
			.goodsDetails-content-evaluate{
				margin-top: 20rpx;
				background: #fff;
				.title{
					font-size: 28rpx;
					padding: 30rpx;
				}
				.item{
					display: flex;
					padding: 30rpx;
					border-bottom: 1px solid #e0e0e0;
					.left{
						width: 65rpx;
						height: 65rpx;
						border-radius: 50%;
						overflow: hidden;
						image{width: 100%;height: 100%;}
					}
					.right{
						flex: 1;
						margin-left: 30rpx;
						.name{
							font-size: 30rpx;
							font-weight: bold;
						}
						.date{
							font-size: 24rpx;
							color: #666;
							padding: 10rpx 0;
							color: #666;
						}
						.text{
							font-size: 30rpx;
							letter-spacing: 5rpx;
						}
					}
				}
			}
		}
	}
</style>
