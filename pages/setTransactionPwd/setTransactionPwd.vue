<template>
	<view class="loginPassword">
		<!-- header -->
		<commonHeader headerTitl="设置交易密码" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		<view class="tips">
			设置交易密码
		</view>
		<input type="password" @blur="getPwd" maxlength="6" placeholder-style="color:#333" value="" placeholder="请输入6位数交易密码"/>
		<input type="password" @blur="getPwd1" maxlength="6" placeholder-style="color:#333" value="" placeholder="确认交易密码"/>
		<view class="submit" @tap="submit">
			确认
		</view>
	</view>
</template>

<script>
	import commonHeader from "@/components/common-header/common-header"
	export default {
		data() {
			return {
				pwd:'',
				pwd1:''
			};
		},
		components:{commonHeader},
		methods:{
			// 获取新密码
			getPwd(e){
				this.pwd = e.detail.value;
			},
			getPwd1(e){
				this.pwd1 = e.detail.value;
			},
			// 确认
			submit(){
				if(this.pwd !== this.pwd1){
					uni.showToast({
						title:'两次输入密码不一致！',
						icon:'none'
						
					})
				}else{
					uni.showToast({
						title:'设置成功',
						success:()=>{
							getApp().globalData.isPwd = true;
							getApp().globalData.pwd = this.pwd1;
							uni.reLaunch({
								url:'../setting/setting'
							})
						}
					})
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
