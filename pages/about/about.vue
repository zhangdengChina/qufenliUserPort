<template>
	<view class="about">
		<!-- header -->
		<commonHeader headerTitl="关于我们" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		<view class="about-content">
			<view>
				<view class="img">
					<image src="../../static/images/codeshoukuan.png" mode=""></image>
					<view>扫描二维码，您就可以下载APP客户端</view>
				</view>
				<view class="content">
					<view class="title">
						简介
					</view>
					<view class="item">
						这本书很好，耐心看完，觉得很不错,很有收获，都是第一次做父母，确实很多地方教育还是很合理，这本书很好，耐心看完，觉得很有收获，教育得很到位 这本书很好，耐心看完，觉得很不错,很有收获，都是第一次做父母，确实很多地方教育还是很合理，这本书很好，耐心看完，觉得很有收获。
					</view>
				</view>
			</view>
		</view>
		<view class="beian">
			<view>Copyright  2020 趣分利版权所有</view>
			<view>ICP备案号 湘ICP备20003506号-1</view>
		</view>
	</view>
</template>

<script>
	// header
	import commonHeader from "@/components/common-header/common-header";
	export default {
		data() {
			return {

			};
		},
		components: {
			commonHeader
		}
	}
</script>

<style lang="less">
	.about {
		background: #f7f7f7;
		height: 100%;
		font-size: 30rpx;
		color: #333;
		/* #ifdef H5 */
		padding-top: 130rpx;
		/* #endif */
		/* #ifdef APP-PLUS */
		padding-top: 170rpx;

		/* #endif */
		.about-content {
			padding: 0 30rpx;

			>view {
				background: #fff;
				border-radius: 20rpx;
			}

			.img {
				text-align: center;
				padding: 50rpx 0;

				image {
					width: 300rpx;
					height: 300rpx;
				}

				view {
					margin-top: 20rpx;
				}
			}

			.content {
				padding: 0 30rpx;
				font-size: 34rpx;
				padding-bottom: 50rpx;

				.title {
					font-weight: bold;
				}

				.item {
					margin-top: 10rpx;
					text-indent: 2em;
				}
			}
		}
		.beian{
			text-align: center;
			margin-top: 50rpx;
			color: #999;
		}
	}
</style>
