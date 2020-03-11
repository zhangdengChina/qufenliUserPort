<template>
	<view class="header">
		<view class="common-header">
			<text class="iconfont icon-zuojiantou" @tap="backPage"></text>
			<text class="title">{{headerTitl}}</text>
			<view class="right">
				<text class="iconfont icon-xingxing" :class="xingHide?'xingHide':''"></text>
				<text class="iconfont icon-lingdang-xianxing" @tap="goNews" :class="lingHide?'lingHide':''"></text>
				<text class="iconfont icon-fenxiang" @tap="maskState=true" :class="fenxiangHide?'fenxiangHide':''"></text>
				<text class="iconfont icon-gengduo" :class="gengduoHide?'gengduoHide':''"></text>
			</view>
		</view>
		<!-- 分享提示蒙层 -->
		<view class="mask" :class="maskState?'':'maskShow'">
			<view class="mask-top" @tap="maskState=false">

			</view>
			<view class="mask-content">
				<view class="mask-content-cancel">
					<text class="iconfont icon-shanchu" @tap="maskState=false"></text>
				</view>
				<view class="mask-content-title">
					——<text>分享到</text>——
				</view>
				<view class="mask-content-item">
					<view class="weixin" @tap="share(1)">
						<view class="iconfont icon-weixin">

						</view>
						<text>微信</text>
					</view>
					<view class="pengyouquan" @tap="share(2)">
						<view>
							<image src="../../static/images/pengyouquan.png" mode=""></image>
						</view>
						<text>朋友圈</text>
					</view>
					<view class="weibo" @tap="share(3)">
						<view>
							<text class="iconfont icon-weibo"></text>
						</view>
						<text>微博</text>
					</view>
					<view class="qq" @tap="share(4)">
						<view>
							<text class="iconfont icon-qq"></text>
						</view>
						<text>QQ</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			headerTitl: {
				type: String,
				default: ""
			},
			xingHide: {
				type: String,
				default: ""
			},
			lingHide: {
				type: String,
				default: ""
			},
			fenxiangHide: {
				type: String,
				default: ""
			},
			gengduoHide: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				maskState: false
			}
		},
		methods: {
			backPage() {
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
				// 修复小程序app返回退出应用bug(无法返回重定向至首页)
				var pagelength = getCurrentPages();
				if (pagelength.length === 1) {
					var path = pagelength[0].route;
					// console.log(path)
					uni.reLaunch({
						url: '/' + path
					})
				} else {
					uni.navigateBack(1)
				}
			},
			// 进入消息
			goNews() {
				uni.navigateTo({
					url: "../../pages/news/news"
				})
			},
			// 分享
			// #ifdef APP-PLUS
			shareDemo(platform, type, typeNum) {
				uni.share({
					provider: platform,
					scene: type,
					type: typeNum,
					href: "http://uniapp.dcloud.io/",
					title: "uni-app分享",
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					imageUrl: "../../static/images/youhui.png",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			// #endif
			// 分享功能开始
			share(index) {
				// 分享到微信
				if (index === 1) {
					// #ifdef APP-PLUS
					this.shareDemo('weixin', 'WXSceneSession')
					// #endif
					// #ifdef H5
					this.jweixin.ready(()=> { //需在用户可能点击分享按钮前就先调用
						this.jweixin.updateAppMessageShareData({
							title: '公众号分享', // 分享标题
							desc: '这是一个测试', // 分享描述
							link: 'http://www.qfl168.cn/static/#/pages/news/news', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
							imgUrl: '../../static/images/youhui.png', // 分享图标
							success: function() {
								// 设置成功
								alert('分享成功')
							}
						})
					});
					// #endif
				}
				// 分享朋友圈
				if (index === 2) {
					// #ifdef APP-PLUS
					this.shareDemo('weixin', 'WXSenceTimeline')
					// #endif
					// #ifdef H5
					this.jweixin.ready( ()=> {      //需在用户可能点击分享按钮前就先调用
					  this.jweixin.updateTimelineShareData({ 
					    title: '公众号分享', // 分享标题
					    link: 'http://www.qfl168.cn/static/#/pages/news/news', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					    imgUrl: '../../static/images/youhui.png', // 分享图标
					    success: function () {
					      // 设置成功
						  alert('分享成功')
					    }
					  })
					}); 
					// #endif
				}
				// 分享微博
				if (index === 3) {
					// #ifdef APP-PLUS
					this.shareDemo('sinaweibo')
					// #endif
				}
				// 分享QQ
				if (index === 4) {
					// #ifdef APP-PLUS
					this.shareDemo('qq', '', 1)
					// #endif
				}
			}
		},
	}
</script>

<style lang="less">
	.common-header {
		height: 100rpx;
		font-size: 40rpx;
		background: url(../../static/images/bg1.jpg) no-repeat;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		position: fixed;
		width: 100%;
		z-index: 99999;
		top: 0;
		/* #ifdef APP-PLUS */
		padding-top: 40rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 40rpx;

		/* #endif */
		>.iconfont {
			position: absolute;
			left: 30rpx;
		}

		.title {
			width: 100%;
			text-align: center;
		}

		.right {
			position: absolute;
			right: 30rpx;
			display: flex;
			align-items: center;
			justify-content: flex-end;

			.iconfont {
				margin-left: 20rpx;
			}

			.icon-lingdang-xianxing {
				font-size: 38rpx;
			}

			.icon-fenxiang {
				font-size: 30rpx;
			}

			.icon-gengduo {
				display: none;
			}

			.xingHide {
				display: none;
			}

			.lingHide {
				display: none;
			}

			.fenxiangHide {
				display: none;
			}

			.gengduoHide {
				display: block;
			}
		}
	}

	// 蒙层
	// 显示隐藏
	.maskShow {
		display: none;
	}

	.mask {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.8);
		z-index: 9999999;
		font-size: 30rpx;

		.mask-top {
			position: absolute;
			top: 0;
			min-height: 75%;
			width: 100%;
		}

		.mask-content {
			height: 376rpx;
			width: 100%;
			background: #fff;
			position: absolute;
			bottom: 0;

			.mask-content-cancel {
				display: flex;
				padding: 30rpx;
				justify-content: flex-end;

				text {
					font-size: 40rpx;
					color: #999;
				}
			}

			.mask-content-title {
				text-align: center;
				font-weight: bold;
				color: #D8D8D8;

				text {
					color: #000;
					font-size: 30rpx;
					margin: 0 20rpx;
				}
			}

			.mask-content-item {
				margin-top: 40rpx;
				display: flex;
				color: #666;
				font-size: 28rpx;
				text-align: center;
				justify-content: space-around;

				>view>view {
					margin-bottom: 10rpx;
				}

				.iconfont {
					font-size: 60rpx;
				}

				image {
					width: 80rpx;
					height: 80rpx;
				}

				.weixin .iconfont {
					font-size: 100rpx;
					color: #1bac19;
				}

				.pengyouquan {
					view {
						width: 100rpx;
						height: 100rpx;
						border-radius: 50%;
						border: 1px solid #e0e0e0;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}

				.weibo,
				.qq {
					view {
						width: 100rpx;
						height: 100rpx;
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
						color: #fff;
					}
				}

				.weibo view {
					background: #FF9206;
				}

				.qq view {
					background: #4DCFFC;
				}
			}
		}
	}
</style>
