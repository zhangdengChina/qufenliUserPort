<template>
	<view class="bindBankcard">
		<!-- header -->
		<commonHeader headerTitl="提现账户绑定" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		
		<!-- 内容开始 -->
		<view class="bindBankcard-content">
			<!-- card -->
			<view class="bindAlipay-content-card">
				<view class="addCard">
					<view class="addCard-add" :class="addCardHide?'addCardHide':''" @tap="goAdd">
						<image src="../../static/images/addIcon.png" mode=""></image>
						添加银行卡
					</view>
					<view class="addCard-card" @longpress="delCard" :class="addCardHide?'':'addCardHide'">
						<view class="left">
							<view class="img">
								<image src="../../static/images/jsLogo.png" mode=""></image>
							</view>
							<view class="text">
								<view>
									中国建设银行
								</view>
								<text>储蓄卡</text>
							</view>
						</view>
						<view class="right">
							**** <text>3715</text>
						</view>
					</view>
				</view>
				<view class="other" :class="addCardHide?'addCardHide':''">支持储蓄卡</view>
			</view>
			
			<!-- btn -->
			<view class="submit-btn" @tap="bindsucc">
				{{addCardHide?'解除绑定':'去绑定'}}
			</view>
		</view>
		<!-- 内容结束 -->
		
		<!-- 提示蒙板层 -->
		<view class="phoneMask" :class="phoneMaskShow?'':'phoneMaskShow'">
			<view class="phoneMask-content">
				<view class="phoneMask-content-title">
					解除银行卡绑定
				</view>
				<view class="phoneMask-content-text">
					当前为中国建设银行卡<text></text>，确定要解除绑定吗？
				</view>
				<view class="phoneMask-content-btn">
					<text @tap="phoneMaskShow=false">取消</text>
					<text @tap="submit">确认</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonHeader from"@/components/common-header/common-header";
	export default {
		data() {
			return {
				addCardHide:false,
				goChange:'',
				phoneMaskShow: false,
			};
		},
		components:{
			commonHeader
		},
		methods:{
			goAdd(){
				uni.navigateTo({
					url:"../addBankCard/addBankCard"
				})
			},
			// 绑定
			bindsucc(){
				// uni.showToast({
				// 	title:"绑定成功",
				// 	success:function(){
				// 		console.log(11)
				// 	}
				// });
				// uni.hideToast();
				if(this.addCardHide){
					this.phoneMaskShow = true;
					console.log(111)
				}else{
					uni.navigateTo({
						url:"../addBankCard/addBankCard"
					})
				}
			},
			// 删除银行卡
			delCard(){
				console.log(111)
			},
			// 确认注销
			submit(){
				this.phoneMaskShow = false;
				getApp().globalData.cardStata = false;
				uni.navigateTo({
					url:'../myCard/myCard'
				})
			}
		},
		onLoad() {
			this.addCardHide = getApp().globalData.cardStata;
		}
	}
</script>

<style lang="less" scoped>
	.bindBankcard{
		color: #333;
		background: #f7f7f7;
		height: 97.5%;
		padding-top: 120rpx;
		/* #ifndef MP-WEIXIN */
			min-height: 100%;
			padding-top: 160rpx;
		/* #endif */
		/* #ifdef APP-PLUS */
		padding-top: 160rpx;
		/* #endif */
		.bindBankcard-content{
			.bindAlipay-content-card{
				width: 95%;
				height: 330rpx;
				background: #fff;
				margin: auto;
				border-radius: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.addCardHide{
					display: none !important;
				}
				.addCard{
					.addCard-add{
						background: #fedfd8;
						width: 590rpx;
						height: 90rpx;
						color: #FF5A2C;
						font-size: 34rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						image{
							width: 50rpx;
							height: 50rpx;
							margin-right: 20rpx;
						}
					}
					.addCard-card{
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 590rpx;
						height: 90rpx;
						border-radius: 20rpx;
						padding: 20rpx 0;
						background: #fedfd8;
						.left{
							display: flex;
							>view{
								margin-left: 20rpx;
							}
							.img{
								width: 80rpx;
								height: 80rpx;
								border-radius: 50%;
								background: #fff;
								overflow: hidden;
								display: flex;
								align-items: center;
								justify-content: center;
								image{
									width: 80%;
									height: 80%;
								}
							}
							.text{
								font-size: 34rpx;
								font-weight: bold;
								text{
									font-weight: normal;
									font-size: 28rpx;
									color: #999;
								}
							}
						}
						.right{
							font-size: 30rpx;
							color: #999;
							margin-right: 20rpx;
							text{
								font-size: 34rpx;
								color: #000;
								font-weight: bold;
								margin-left: 10rpx;
							}
						}
					}
				}
				.other{
					color: #999;
					font-size: 34rpx;
					margin-top: 20rpx;
				}
			}
			.submit-btn{
				width: 95%;
				background:linear-gradient(243deg,rgba(255,153,96,1) 0%,rgba(255,90,44,1) 100%);
				height: 88rpx;
				border-radius: 10rpx;
				color: #fff;
				font-size: 40rpx;
				margin: 50rpx auto 90rpx;
				text-align: center;
				line-height: 88rpx;
				box-shadow: 0 10rpx 20rpx #FF9960;
			}
		}
	
		// 蒙层
		// 显示隐藏
		.phoneMaskShow {
			display: none;
		}
		
		.phoneMask {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background: rgba(0, 0, 0, 0.8);
			z-index: 9999999;
			font-size: 30rpx;
		
			.phoneMask-content {
				color: #333;
				position: absolute;
				top: -400rpx;
				bottom: 0;
				left: 0;
				right: 0;
				width: 80%;
				height: 355rpx;
				border-radius: 20rpx;
				background: #fff;
				margin: auto;
				padding-top: 30rpx;
		
				.phoneMask-content-title {
					padding-bottom: 20rpx;
					font-size: 37rpx;
					font-weight: bold;
					text-align: center;
					border-bottom: 1px solid #e0e0e0;
				}
		
				.phoneMask-content-text {
					padding: 30rpx;
		
					text {
						color: #FF5A2C;
					}
				}
		
				.phoneMask-content-btn {
					display: flex;
					justify-content: space-around;
					padding-top: 30rpx;
		
					text {
						width: 240rpx;
						height: 80rpx;
						text-align: center;
						line-height: 80rpx;
						border-radius: 20rpx;
					}
		
					text:first-child {
						background: #F7F7F7;
					}
		
					text:last-child {
						background: #FF5A2C;
						color: #fff;
					}
				}
			}
		}
	}
</style>
