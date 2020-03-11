<template>
	<view class="loginPassword">
		<!-- header -->
		<commonHeader headerTitl="修改交易密码" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		<view class="tips">
			请输入交易密码
		</view>
		<input type="password" placeholder-style="color:#333" value="" placeholder="请输入原密码"/>
		<input type="password" placeholder-style="color:#333" value="" placeholder="请输入新密码"/>
		<input type="password" placeholder-style="color:#333" value="" placeholder="请再次输入新密码"/>
		<view class="submit" @tap="submit">
			确认修改
		</view>
	</view>
</template>

<script>
	import commonHeader from "@/components/common-header/common-header"
	export default {
		data() {
			return {
				
			};
		},
		components:{commonHeader},
		methods:{
			submit(){
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
				if(pagelength.length===1){
					var path = pagelength[0].route;
					// console.log(path)
					uni.reLaunch({
						url:'/'+path
					})
				}else{
					uni.navigateBack(1)
				}
			}
		}
	}
</script>

<style lang="less">
	.loginPassword{
		color: #333;
		background: #f6f7f8;
		height: 100%;
		padding-top: 90rpx;
		/* #ifdef APP-PLUS */
		padding-top: 130rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 130rpx;
		/* #endif */
		.tips{
			padding: 40rpx 0 40rpx 30rpx;
			font-size: 41rpx;
		}
		input{
			height: 90rpx;
			background: #fff;
			text-indent: 30rpx;
			border-bottom: 1px solid #e0e0e0;
		}
		.submit{
			height:88rpx;
			line-height: 88rpx;
			width: 95%;
			margin: 150rpx auto 0;
			border-radius: 10rpx;
			text-align: center;
			color: #fff;
			background:linear-gradient(243deg,rgba(255,153,96,1) 0%,rgba(255,90,44,1) 100%);
			box-shadow: 0px 10rpx 6px #FF9960;
		}
	}
</style>
