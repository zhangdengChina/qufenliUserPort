<template>
	<view class="news">
		<commonHeader @finish="getVal" :headerTitl="headerTitl" xingHide=true lingHide=true></commonHeader>
		<!-- tab切换 -->
		<view class="news-title">
			<text :class="active?'active':''" @tap="active=true">平台公告</text>
			<text :class="active?'':'active'" @tap="active=false">客服通知</text>
		</view>
		<!-- 平台公告 -->
		<view class="news-gonggao new-common" :class="active?'':'hide'">
			<view class="news-gonggao-msg" v-for="item in guanggaoData" :key="item.id" @tap="goNotice">
				<view class="news-gonggao-msg-left">
					<view class="logo">
						<text class="iconfont icon-yinlianglabashengyin"></text>
					</view>
					<view class="text">
						<text>{{item.tite}}</text>
						<view>{{item.msg}}</view>
					</view>
				</view>
				<view class="news-gonggao-msg-right">
					<text>{{item.date}}</text>
					<view>{{item.number}}</view>
				</view>
			</view>
		</view>
		<!-- 客服通知 -->
		<view class="news-tongzhi new-common" :class="active?'hide':''">
			<view class="news-gonggao-msg" v-for="item in kefuData" :key="item.id"  @tap="goNotice">
				<view class="news-gonggao-msg-left">
					<view class="logo">
						<text class="iconfont icon-kefu"></text>
					</view>
					<view class="text">
						<text>{{item.tite}}</text>
						<view>{{item.msg}}</view>
					</view>
				</view>
				<view class="news-gonggao-msg-right">
					<text>{{item.date}}</text>
					<view>{{item.number}}</view>
				</view>
			</view>
		</view>
		<!-- tabbar -->
		<tabbar active="2"></tabbar>
	</view>
</template>

<script>
	// 引入tabbar
	import tabbar from"@/components/common-tabbar/common-tabbar";
	// 引入公用头部
	import commonHeader from"@/components/common-header/common-header";
	export default {
		data() {
			return {
				headerTitl:"消息",
				active: true,
				guanggaoData: [{
						"id": "01",
						"tite": "平台公告",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "1"
					},
					{
						"id": "02",
						"tite": "平台公告",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "99"
					},
					{
						"id": "03",
						"tite": "平台公告",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "20"
					},
					{
						"id": "04",
						"tite": "平台公告",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "10"
					},
					{
						"id": "05",
						"tite": "平台公告",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "06",
						"tite": "平台公告",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "07",
						"tite": "平台公告",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "08",
						"tite": "平台公告",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "09",
						"tite": "平台公告",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "10",
						"tite": "平台公告",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "11",
						"tite": "平台公告",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "12",
						"tite": "平台公告",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
				],
				kefuData: [{
						"id": "01",
						"tite": "客服通知",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "1"
					},
					{
						"id": "02",
						"tite": "客服通知",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "99"
					},
					{
						"id": "03",
						"tite": "客服通知",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "20"
					},
					{
						"id": "04",
						"tite": "客服通知",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "10"
					},
					{
						"id": "05",
						"tite": "客服通知",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "06",
						"tite": "客服通知",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "07",
						"tite": "客服通知",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "08",
						"tite": "客服通知",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "09",
						"tite": "客服通知",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "10",
						"tite": "客服通知",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "11",
						"tite": "客服通知",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
					{
						"id": "12",
						"tite": "客服通知",
						"msg": "您关注的店铺打折啦",
						"date": "16: 30",
						"number": "9"
					},
				]
			};
		},
		components:{
			commonHeader,
			tabbar
		},
		methods:{
			getVal(e){
				console.log(e)
			},
			// 查看公告详情
			goNotice(){
				uni.navigateTo({
					url:'../notice/notice'
				})
			}
		}
	}
</script>

<style lang="less">
	.news {
		font-family: PingFangSC-Regular, PingFang SC;
		color: #333333;
		min-height: 100%;
		background: #f7f7f7;
		padding-bottom: 100rpx;
		.news-title {
			display: flex;
			justify-content: space-around;
			font-size: 32rpx;
			border-bottom: 1px solid #ccc;
			background: #fff;
			
			position: fixed;
			width: 100%;
			z-index: 99999;
			top: 90rpx;
			/* #ifdef APP-PLUS */
			top: 130rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			top: 130rpx;
			/* #endif */

			text {
				padding: 30rpx 0;
			}

			.active {
				font-weight: bold;
				border-bottom: 10rpx solid #FF5904;
			}
		}

		// 显示隐藏
		.hide {
			display: none;
		}

		// 通用模板（平台公告）
		.new-common {
			margin-top: 200rpx;
			/* #ifdef APP-PLUS */
			margin-top: 220rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			margin-top: 220rpx;
			/* #endif */
			padding-left: 30rpx;
			border-top: 20rpx solid #f8f6f9;
			background: #fff;

			.news-gonggao-msg {
				display: flex;
				justify-content: space-between;
				padding: 30rpx 30rpx 30rpx 0;
				border-bottom: 1px solid #ccc;

				.news-gonggao-msg-left {
					display: flex;

					.logo {
						width: 90rpx;
						height: 90rpx;
						background: linear-gradient(100deg, rgba(75, 196, 250, 1) 0%, rgba(57, 169, 251, 1) 100%);
						color: #fff;
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;

						.iconfont {
							font-size: 50rpx;
						}
					}

					.text {
						margin-left: 30rpx;

						text {
							font-size: 30rpx;
							font-weight: 550;
							color: #9F3F01;
						}

						view {
							color: #999;
							font-size: 28rpx;
							margin-top: 10rpx;
						}
					}
				}

				.news-gonggao-msg-right {
					margin-top: -20rpx;

					text {
						color: #999;
						font-size: 28rpx;
						display: inline-block;
					}

					view {
						width: 45rpx;
						height: 45rpx;
						background: #FF4B00;
						color: #fff;
						border-radius: 50%;
						line-height: 45rpx;
						text-align: center;
						font-size: 26rpx;
						margin-left: 30rpx;
						margin-top: 20rpx;
					}

				}
			}
		}

		// 客服通知
		.news-tongzhi {
			.news-gonggao-msg {
				.news-gonggao-msg-left {
					.logo {
						background: linear-gradient(100deg, rgba(250, 144, 75, 1) 0%, rgba(255, 109, 51, 1) 100%);

						.iconfont {
							font-size: 80rpx;
						}
					}

					.text {
						text {
							color: #333;
						}
					}
				}
			}
		}
	}
</style>
