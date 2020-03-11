<template>
	<view class="oraderDetails">
		<!-- header -->
		<commonHeader headerTitl="订单详情" xingHide=true lingHide=true></commonHeader>
		<!-- 内容开始 -->
		<view class="oraderDetails-content">
			<view class="oraderDetails-content-message">
				<view class="left">
					<text class="iconfont icon-dingwei"></text>
				</view>
				<view class="right">
					<view class="right-title">
						<view>
							油条豆浆先生
						</view>
						<text>19988887777</text>
					</view>
					<view class="right-address">
						湖南省长沙市岳麓区望城坡街道枫林三路杨明山庄40栋2单元菜鸟驿站
					</view>
				</view>
			</view>
			<view class="oraderDetails-content-content">
				<view class="left">
					<image src="../../static/images/content01.png" mode=""></image>
					<view>
						<text class="left-title">
							意大利黑胡椒面
						</text>
						<view class="left-date">
							下单时间：2019-10-28 15:30:40
						</view>
						<view class="left-price">
							单价：￥29.99
						</view>
					</view>
				</view>
				<view class="right">
					X1
				</view>
			</view>
			<view class="oraderDetails-content-total">
				<view>
					共计1商品
					<text>合计 ￥<text>90990</text></text>
				</view>
			</view>
			<view class="oraderDetails-content-cause">
				<view>
					退款原因:
				</view>
				<textarea value="" style="text-indent: 30rpx;background: #f7f7f7;marginTop: 30rpx;width: 650rpx;height: 171rpx;borderRadius: 20rpx;paddingTop:20rpx;" placeholder="请输入退款原因"  placeholder-style="color:#999"/>
			</view>
			<view class="oraderDetails-content-code">
				订单编号：<text>999090909090</text>
			</view>
			<view class="oraderDetails-content-pay">
				付款方式：<text>微信支付</text>
			</view>
			<view class="oraderDetails-content-shop">
				联系商家：<text>0713-8888888</text>
			</view>
			<view class="oraderDetails-content-btn">
				<text>退款</text>
			</view>
		</view>
		<!-- 内容结束 -->
		<!-- tabbar -->
		<tabbar></tabbar>
	</view>
</template>

<script>
	// header
	import commonHeader from "@/components/common-header/common-header";
	// tabbar
	import tabbar from "@/components/common-tabbar/common-tabbar";
	export default {
		data() {
			return {
				
			};
		},
		components:{
			commonHeader
			,tabbar
		}
	}
</script>

<style lang="less">
	.oraderDetails{
		min-height: 100%;
		background: #f6f7f8;
		padding: 120rpx 0;
		/* #ifdef APP-PLUS */
		padding-top: 160rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 160rpx;
		/* #endif */
		.oraderDetails-content{
			width: 90%;
			margin: auto;
			padding: 0 20rpx;
			background: #fff;
			border-radius: 20rpx;
			font-size: 30rpx;
			color: #333;
			.oraderDetails-content-message{
				display: flex;
				padding: 20rpx 0;
				align-items: center;
				border-bottom: 1px solid #e0e0e0;
				.left{
					width:66rpx;
					height:66rpx;
					background:linear-gradient(143deg,rgba(255,119,43,1) 0%,rgba(255,91,52,1) 100%);
					display: flex;
					align-items: center;
					justify-content: center;
					color: #fff;
					border-radius: 50%;
					margin-right: 20rpx;
					text{
						font-size: 40rpx;
					}
				}
				.right{
					flex: 1;
					.right-title{
						display: flex;
						justify-content: space-between;
						view{
							font-size: 32rpx;
							font-weight: bold;
						}
						text{color: #666;}
					}
					.right-address{
						margin-top: 20rpx;
						line-height:42rpx;
					}
				}
			}
			.oraderDetails-content-content{
				display: flex;
				padding: 30rpx 0;
				justify-content: space-between;
				.left{
					display: flex;
					image{
						width: 180rpx;
						height: 152rpx;
						border-radius: 20rpx;
						margin-right: 20rpx;
					}
					>view{
						.left-title{
							font-size: 32rpx;
						}
						view{
							font-size: 28rpx;
							color: #666;
							margin-top: 10rpx;
						}
					}
				}
				.right{
					font-size: 28rpx;
					color: #666;
				}
			}
			.oraderDetails-content-total{
				display: flex;
				justify-content: flex-end;
				padding: 20rpx 0;
				view{
					>text{margin-left: 40rpx;
						color: #666;
					text{color: #FF5904;}}
				}
			}
			.oraderDetails-content-cause{
				padding: 30rpx 0;
			}
			.oraderDetails-content-code,.oraderDetails-content-pay,.oraderDetails-content-shop{
				padding: 20rpx 0;
				text{
					margin-left: 30rpx;
					color: #666;
				}
			}
			.oraderDetails-content-shop{
				text{color: #0E88FF;}
			}
			.oraderDetails-content-btn{
				display: flex;
				justify-content: flex-end;
				padding: 30rpx 0;
				text{
					padding: 10rpx 40rpx;
					border: 1px solid #999;
					color: #999;
					font-size: 24rpx;
					border-radius: 40rpx;
				}
			}
		}
	}
</style>
