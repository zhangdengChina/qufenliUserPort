<template>
	<view class="bindWeixin">
		<!-- header -->
		<commonHeader headerTitl="绑定微信" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		<!-- 内容 -->
		<view class="bindWeixin-content">
			<view class="bindWeixin-content-item">
				<text>姓名</text>
				<input type="text" value="" placeholder-style="color:#999;fontSize:28rpx;" placeholder="请输入姓名，实名不一致将导致提现失败"/>
			</view>
			<view class="bindWeixin-content-item">
				<text>微信账号</text>
				<input type="text" value=""  placeholder-style="color:#999;fontSize:28rpx;" placeholder="请输入微信号"/>
			</view>
			<view class="bindWeixin-content-item">
				<text>手机号</text>
				<input type="text" value="" maxlength="11" placeholder-style="color:#999;fontSize:28rpx;" placeholder="请输入手机号"/>
			</view>
			<view class="bindWeixin-content-item">
				<text>验证码</text>
				<view>
					<input type="text" value=""  placeholder-style="color:#999;fontSize:28rpx;" placeholder="请填写验证码"/>
					<button class="testCode" :class="selectCode?'selectCode':''" :disabled="disabled" @tap="getCode">{{codeText}}</button>
				</view>
			</view>
		</view>
		<!-- 提交按钮 -->
		<view class="submit-btn" @tap="goBack">
			提交
		</view>
	</view>
</template>

<script>
	import commonHeader from"@/components/common-header/common-header";
	
	export default {
		data() {
			return {
				selectCode:false,
				disabled:false,
				codeText:"获取验证码"
			};
		},
		components:{
			commonHeader
		},
		methods:{
			goBack(){
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
			}
		}
	}
</script>

<style lang="less">
	.bindWeixin{
		min-height: 97%;
		background: #f7f7f7;
		padding-top: 120rpx;
		color: #333;
		font-size: 30rpx;
		/* #ifdef APP-PLUS */
		padding-top: 160rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 160rpx;
		/* #endif */
		.bindWeixin-content{
			background: #fff;
			padding-left: 30rpx;
			.bindWeixin-content-item{
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #e0e0e0;
				height: 90rpx;
				align-items: center;
				text{
					width: 180rpx;
				}
				input{
					width: 250rpx;
					text-align: right;
					margin-right: 30rpx;
				}
				view{
					display: flex;
					input{width: 200rpx;}
					.testCode{
						font-size: 30rpx;
						color: #FF5904;
						padding: 10rpx 25rpx;
						background: #f1f1f1;
						border-radius: 40rpx;
						margin-right: 30rpx;
						opacity: 0.5;
					}
					
					/deep/ uni-button {
						line-height: 1em;
					}
					
					/deep/ button {
						line-height: 1em;
					}
				}
			}
			.bindWeixin-content-item:first-child{
				input{flex: 1;}
			}
			uni-button{
				line-height: 1em;
				padding: 0;
			}
		}
		.submit-btn{
			width: 95%;
			background:linear-gradient(243deg,rgba(255,153,96,1) 0%,rgba(255,90,44,1) 100%);
			height: 88rpx;
			border-radius: 10rpx;
			color: #fff;
			font-size: 40rpx;
			margin: 150rpx auto 90rpx;
			text-align: center;
			line-height: 88rpx;
			box-shadow: 0 10rpx 20rpx #FF9960;
		}
	}
</style>
