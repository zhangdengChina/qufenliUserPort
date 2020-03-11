<template>
	<view class="setting">
		<view class="setting-header">
			<text class="iconfont icon-zuojiantou" @tap="backPage"></text>
			<text>设置</text>
			<text class="iconfont"></text>
		</view>
		<view class="setting-content">
			<view class="setting-content-item" @tap="goPersonal">
				<view class="left">
					个人资料
				</view>
				<view class="right">
					<text class="iconfont icon-youjiantou"></text>
				</view>
			</view>
			<view class="setting-content-item" @tap="goLoginPassword">
				<view class="left">
					修改密码
				</view>
				<view class="right">
					<text class="iconfont icon-youjiantou"></text>
				</view>
			</view>
			<view class="setting-content-item" :class="isPwd?'ispwd':''" @tap="goSetPwd">
				<view class="left">
					设置交易密码
				</view>
				<view class="right">
					<text class="iconfont icon-youjiantou"></text>
				</view>
			</view>
			<view class="setting-content-item" :class="isPwd?'':'ispwd'" @tap="goTransactionPassword">
				<view class="left">
					修改交易密码
				</view>
				<view class="right">
					<text class="iconfont icon-youjiantou"></text>
				</view>
			</view>
			<view class="setting-content-item" @tap="goPasswordBack">
				<view class="left">
					忘记密码
				</view>
				<view class="right">
					<text class="iconfont icon-youjiantou"></text>
				</view>
			</view>
			<view class="setting-content-item" @tap="goCertification">
				<view class="left">
					实名认证
				</view>
				<view class="right">
					<text class="iconfont icon-youjiantou"></text>
				</view>
			</view>
			<view class="setting-content-item" @tap="phoneMaskShow=true;type1=false">
				<view class="left">
					账号注销
				</view>
				<view class="right">
					<text class="iconfont icon-youjiantou"></text>
				</view>
			</view>
			<view class="setting-content-item" @tap="goChangePhone();type1=true">
				<view class="left">
					手机号更换
				</view>
				<view class="right">
					<text class="iconfont icon-youjiantou"></text>
				</view>
			</view>
			<view class="setting-content-item" @tap="goAbout">
				<view class="left">
					关于我们
				</view>
				<view class="right">
					<text class="iconfont icon-youjiantou"></text>
				</view>
			</view>
		</view>
		<!-- 手机号更换提示蒙层 -->
		<view class="phoneMask" :class="phoneMaskShow?'':'phoneMaskShow'">
			<view class="phoneMask-content">
				<view class="phoneMask-content-title">
					账号注销
				</view>
				<view class="phoneMask-content-text">
					当前账号为<text>17788889999</text>手机号，确定注销账号吗？
				</view>
				<view class="phoneMask-content-btn">
					<text @tap="phoneMaskShow=false">取消</text>
					<text @tap="submit">确认</text>
				</view>
			</view>
		</view>
		<!-- 退出登录 -->
		<!-- #ifdef APP-PLUS -->
		<view class="submit-btn" @tap="outLogin;hideBox=false;type=0">
			退出登录
		</view>
		<!-- #endif -->
		<!-- tabbar -->
		<tabbar></tabbar>
		<!-- 验证登录密码蒙层 -->
		<view class="shopManage-testPwd" :class="hideBox?'hideBox':''">
			<text class="back" @tap="hideBox=true">返回</text>
			<view class="shopManage-testPwd-title">
				请输入登录密码
			</view>
			<testCode :maxlength="6" :isPwd="true" @finish="getPwd" :focusStata='!hideBox'></testCode>
			<!-- 密码错误提示 -->
			<view class="shopManage-testPwd-tips" :class="hideTips?'hideTips':''">
				密码错误！
			</view>
		</view>
		<!-- 验证交易密码蒙层 -->
		<view class="shopManage-testPwd" :class="hideBox1?'hideBox':''">
			<text class="back" @tap="hideBox1=true">返回</text>
			<view class="shopManage-testPwd-title">
				请输入交易密码
			</view>
			<testCode :maxlength="6" :isPwd="true" @finish="getPwd1" :focusStata='!hideBox1'></testCode>
			<!-- 密码错误提示 -->
			<view class="shopManage-testPwd-tips" :class="hideTips1?'hideTips':''">
				密码错误！
			</view>
		</view>
	</view>
</template>

<script>
	// 引入tabbar
	import tabbar from "@/components/common-tabbar/common-tabbar";
	import testCode from '@/components/testCode/testCode';
	export default {
		data() {
			return {
				phoneMaskShow: false,
				hideBox: true,
				hideBox1: true,
				hideTips:false,
				hideTips1:false,
				type:0,
				type1:false,
				isPwd:'',
			};
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
				uni.navigateBack(1)
			},
			// 前往个人资料
			goPersonal() {
				uni.navigateTo({
					url: "../personalData/personalData"
				})
			},
			// 前往更换页面
			goChangePhone() {
				if(getApp().globalData.isPwd){
					this.hideBox1 = false;
				}else{
					uni.showToast({
						title:'请先设置交易密码'
					})
				}
				
			},
			// 前往登录密码
			goLoginPassword() {
				uni.navigateTo({
					url: "../loginPassword/loginPassword"
				})
			},
			// 前往设置交易密码
			goSetPwd(){
				uni.navigateTo({
					url:"../setTransactionPwd/setTransactionPwd"
				})
			},
			// 前往交易密码
			goTransactionPassword() {
				uni.navigateTo({
					url: "../transactionPassword/transactionPassword"
				})
			},
			// 前往找回密码
			goPasswordBack(){
				uni.navigateTo({
					url:"../passwordback/passwordback"
				})
			},
			// 前往实名认证
			goCertification() {
				uni.navigateTo({
					url: "../certification/certification"
				})
			},
			// 确认注销
			submit() {
				// 关闭确认弹窗
				this.phoneMaskShow = false;
				// 弹出交易密码验证
				this.hideBox1=false;
				
			},
			// 获取输入登录密码
			getPwd(val) {
				if(val==888888){
					this.hideBox = true;
					if(this.type===2||this.type===0){
						this.phoneMaskShow=true;
						uni.reLaunch({
							url:"../login/login"
						})
					}
				}else{
					this.hideTips = true;
				}
			},
			// 获取输入交易密码、
			getPwd1(val){
				if(val==getApp().globalData.pwd){
					this.hideBox1 = true;
					if(this.type1){
						// 前往修改手机号
						uni.navigateTo({
							url: "../changePhone/changePhone"
						})
					}else{
						uni.removeStorage({
							key:'saveStata'
						})
						uni.removeStorage({
							key:'name',
							success:()=>{
								uni.reLaunch({
									url:'../login/login'
								})
							}
						})
						
					}
					
				}else{
					this.hideTips1 = true;
				}
			},
			// 关于我们
			goAbout(){
				uni.navigateTo({
					url:'../about/about'
				})
			},
			// 退出登录
			outLogin(){
				uni.reLaunch({
					url:"../login/login"
				})
			}
		},
		components: {
			tabbar,
			testCode
		},
		onLoad() {
			console.log(getApp().globalData)
			this.isPwd = getApp().globalData.isPwd;
		}
	}
</script>

<style lang="less">
	.setting {
		position: relative;
		height: 100%;
		background: #f6f7f8;
		color: #333;

		.setting-header {
			padding: 20rpx;
			/* #ifdef APP-PLUS */
			padding-top: 60rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			padding-top: 60rpx;
			/* #endif */
			font-size: 40rpx;
			background: linear-gradient(117deg, rgba(255, 90, 43, 1) 0%, rgba(255, 89, 52, 1) 36%, rgba(255, 156, 31, 1) 100%);
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #fff;
			width: 95%;
		}

		.setting-content {
			margin-top: 20rpx;
			background: #fff;
			padding-left: 30rpx;
			.ispwd{
				display: none !important;
			}
			.setting-content-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid #ccc;
				padding: 30rpx 30rpx 30rpx 0;
				font-size: 30rpx;

				.right {
					input {
						width: 200rpx;
						font-size: 30rpx;
					}
				}
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

	// 验证密码蒙层
	.hideBox {
		display: none;
	}

	.shopManage-testPwd {
		position: fixed;
		height: 100%;
		width: 100%;
		z-index: 9999;
		padding-top: 100rpx;
		top: 0;
		background: #fff;
		.back{
			font-size: 30rpx;
			margin-left: 30rpx;
			margin-top: 30rpx;
			color: #FF5A2C;
		}
		.shopManage-testPwd-title {
			margin-top: 300rpx;
			text-align: center;
			font-size: 40rpx;
			font-weight: bold;
			margin-bottom: 100rpx;
		}

		.shopManage-testPwd-tips {
			text-align: center;
			margin-top: 20rpx;
			color: red;
			display: none;
		}

		.hideTips {
			display: block;
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
</style>
