<template>
	<view class="notice">
		<!-- header -->
		<commonHeader headerTitl="公告"></commonHeader>
		
		<!-- 内容开始 -->
		<view class="notice-content">
			<image src="../../static/images/banner.png" mode=""></image>
			
			<view class="text">
				<view class="text-item">
					这本书很好，耐心看完，觉得很不错,很有收获，都是第一次做父母，确实很多地方教育还是很合理，这本书很好，耐心看完，觉得很有收获，教育得很到位
				</view>
				<view class="text-item">
					这本书很好，耐心看完，觉得很有收获，教育得很到位 这本书很好，耐心看完，觉得很不错,很有收获，都是第一次做父母，确实很多地方教育还是很合理，这本书很好，耐心看完，觉得很有收获。
				</view>
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
	// 引入tabbar
	import tabbar from "@/components/common-tabbar/common-tabbar";
	export default {
		data() {
			return {
				
			};
		},
		components:{
			commonHeader,
			tabbar
		}
	}
</script>

<style lang="less">
	.notice{
		background: #F7F7F7;
		height: 90%;
		padding-top: 130rpx;
		/* #ifdef APP-PLUS */
		padding-top: 170rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 170rpx;
		/* #endif */
		font-size: 30rpx;
		color: #333;
		.notice-content{
			width: 85%;
			background: #fff;
			border-radius: 20rpx;
			margin: auto;
			height: 100%;
			padding: 30rpx;
			image{
				width: 100%;
				height: 269rpx;
			}
			.text{
				margin-top: 30rpx;
				.text-item{
					line-height: 1.5em;
				}
			}
		}
	}
</style>
