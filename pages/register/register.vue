<template>
	<view class="login">
		<!-- header -->
		<commonHeader headerTitl="注册" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		<view class="login-title">
			请输入手机号注册
		</view>
		<view class="login-content">
			<view class="login-content-item">
				<text>+86</text>
				<input type="text" :value="phone" @input="inputPhone" :maxlength="11" placeholder="请输入手机号" placeholder-style="color:#999" />
			</view>
			<view class="login-content-item">
				<text>验证码</text>
				<input type="text" :value="testCode" maxlength="6" placeholder="请输入验证码" placeholder-style="color:#999" @blur="inputTestCode"/>
				<button class="testCode" :class="selectCode?'selectCode':''" :disabled="disabled" @tap="getCode">{{codeText}}</button>
			</view>
			<view class="login-content-item password">
				<text>新密码</text>
				<input type="password" :value="password" maxlength="6" placeholder="请输入6位数密码" placeholder-style="color:#999;" @input="inputPwd"/>
			</view>
			<view class="login-content-item password">
				<text>确认密码</text>
				<input type="password" :value="password1" maxlength="6" placeholder="请再次输入密码" placeholder-style="color:#999;" @blur="inputPwd1"/>
			</view>
			<!-- 用户协议 -->
			<view class="login-content-userTreaty">
				<label class="radio" :class="treatyHide?'treatyHide':''" @tap="checked=!checked">
					<radio value="" :checked="checked" style="transform:scale(0.7)"/>
					<text>用户协议</text>
				</label>
				<view class="radio" :class="codeHide?'codeHide':''">
					<image src="../../static/images/loginTest.png" mode=""></image>
					验证码已发送，可能会有延后，请耐心等待
				</view>
				<!-- <text>忘记密码</text> -->
			</view>
			<view @tap="gologinPage" class="gologin" style="textAlign: right;padding: 30rpx;fontSize: 30rpx;color: #FF5904;">
				已有账号，立即登录
			</view>
		</view>
		<button class="login-content-btn" :disabled="btnState" :class="btnState?'btnState':''" @tap="goIndex">注册</button>
		<!-- 提示文本 -->
		<view class="login-tipsText">
			根据国家网络实名的相关规定，自2017年10月1日起，
			您需要绑定手机才能享受正常服务。
			<view class="" style="text-align: center;margin-top: 30rpx;">
				登录或注册即代表已同意
				<navigator url="../userAgreement/userAgreement" style="color:#FF5904;display: inline-block;">《阅读用户协议》</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	// header
	import commonHeader from"@/components/common-header/common-header";
	// 注册接口
	import {register,sendCode} from "@/common/apis.js";
	export default {
		data() {
			return {
				selectCode: false,
				codeText: "获取验证码",
				disabled: false,
				treatyHide: false,
				codeHide: true,
				btnState: true,
				checked:true,
				phone:"",
				testCode:"",
				password:"",
				password1:"",
				phoneState:false,
				testCodeState:false,
				passwordState:false,
				password1State:false,
			}
		},
		methods: {
			// 获取输入手机号
			inputPhone(e) {
				if(!this.checked){
					uni.showToast({
						title:'请先勾选用户协议！'
					})
					return false;
				}
				if (e.detail.value.length === 11) {
					this.selectCode = true;
					this.phoneState = true;
					this.treatyHide = true;
				} else if (e.detail.value.length === 0) {
					this.treatyHide = false;
				} else {
					this.selectCode = false;
					this.phoneState = false;
				}
				this.phone = e.detail.value;
				this.loginBtnState();
			},
			// 获取输入验证码
			inputTestCode(e){
				if(e.detail.value.length === 6){
					this.testCodeState = true;
				}else{
					this.testCodeState = false;
				}
				this.testCode = e.detail.value;
				// console.log(e.detail.value)
				this.loginBtnState();
			},
			// 获取输入的密码
			inputPwd(e){
				if(e.detail.value.length === 6){
					this.passwordState = true;
				}else{
					this.passwordState = false;
				}
				this.password = e.detail.value;
				// console.log(e.detail.value)
				this.loginBtnState();
			},
			// 确认输入密码
			inputPwd1(e){
				this.password1 = e.detail.value;
				if(this.password1 === this.password){
					this.password1State = true;
				}else{
					this.password1State = false;
					uni.showToast({
						title:'两次密码不一致！',
						icon:'none'
					})
				}
				// console.log(e.detail.value)
				this.loginBtnState();
			},
			// 获取验证码
			getCode() {
				if (this.selectCode) {
					this.disabled = true;
					this.codeHide = false;
					var time = 59;
					this.codeText = time + 's后重新获取';
					// 发送验证码
					sendCode({MOBILE:this.phone}).then(res=>{
						if(res.returnMsg.status=='00'){
							uni.showToast({
								title:'发送成功！',
								icon:'none'
							})
						}else{
							uni.showToast({
								title:'发送失败！',
								icon:'none'
							})
						}
					}).catch(err=>{
						uni.showToast({
							title:'发送失败！',
							icon:'none'
						})
					})
					var setTime = setInterval(() => {
						time--;
						this.codeText = time + 's后重新获取';
					}, 1000)
					setTimeout(() => {
						this.codeText = "获取验证码";
						this.disabled = false;
						this.codeHide = true;
						clearInterval(setTime);
					}, 59000)
				}
			},
			// 判断登录按钮状态
			loginBtnState(){
				if(this.phoneState&&this.testCodeState&&this.passwordState&&this.password1State){
					this.btnState = false;
				}else{
					this.btnState = true;
				}
			},
			// 注册
			goIndex() {
				let obj = {
					"PHONE":this.phone,
					"code":this.testCode,
					"PASSWORD":this.password1,
					"openId":getApp().globalData.openid
				}
				register(obj).then(res=>{
					console.log(res)
					if(res.returnMsg.status=='00'){
						uni.showToast({
							title:'注册成功！',
							icon:'none',
							success:()=>{
								uni.navigateTo({
									url:'../login/login'
								})
							}
						})
					}else if(res.returnMsg.status=='01'){
						uni.showToast({
							title:'验证码不正确！',
							icon:'none'
						})
					}
					else if(res.returnMsg.status=='02'){
						uni.showToast({
							title:'验证码超时！',
							icon:'none'
						})
					}else if(res.returnMsg.status=='03'){
						uni.showToast({
							title:'此账号已注册,前往登录！',
							icon:'none'
						})
					}
				}).catch(err=>{
					uni.showToast({
						title:'注册失败！',
						icon:'none'
					})
				})
				// uni.showToast({
				// 	title:'注册成功',
				// 	success:()=>{
				// 		uni.navigateTo({
				// 			url:'../login/login'
				// 		})
				// 	}
				// })
			},
			// 前往登录
			gologinPage(){
				uni.reLaunch({
					url:'../login/login'
				})
			}
		},
		components:{
			commonHeader
		}
	}
</script>

<style lang="less">
	.login {
		max-height: 100%;
		background: #fffeff;
		color: #333;
		font-family: PingFangSC-Regular, PingFang SC;

		.login-header {
			padding: 20rpx;
			font-size: 40rpx;
			background: linear-gradient(117deg, rgba(255, 90, 43, 1) 0%, rgba(255, 89, 52, 1) 36%, rgba(255, 156, 31, 1) 100%);
			color: #fff;
			text-align: center;
			padding-top: 50rpx;
		}

		.login-title {
			padding: 40rpx 30rpx 0;
			font-size: 44rpx;
			font-weight: bold;
		}

		.login-content {
			padding-left: 30rpx;

			.login-content-item {
				padding: 30rpx 0;
				display: flex;
				border-bottom: 1px solid #e0e0e0;
				margin-top: 40rpx;
				position: relative;

				text:first-child {
					width: 150rpx;
					border-right: 1px solid #999;
					font-size: 36rpx;
				}

				input {
					margin-left: 30rpx;
				}

				.testCode {
					position: absolute;
					right: 30rpx;
					bottom: 30rpx;
					font-size: 30rpx;
					color: #FF5904;
					padding: 9rpx 25rpx;
					background: #f1f1f1;
					border-radius: 40rpx;
					opacity: 0.5;
				}

				/deep/ uni-button {
					line-height: 1em;
				}

				/deep/ button {
					line-height: 1em;
				}

				.selectCode {
					opacity: 1;
				}
			}

			.password {
				justify-content: space-between;
				display: flex;
				input {
					flex: 1;
					margin-right: 30rpx;
					// text-align: right;
				}
			}

			.login-content-userTreaty {
				padding-right: 30rpx;
				font-size: 24rpx;
				padding-top: 20rpx;
				position: relative;

				>text {
					position: absolute;
					right: 30rpx;
					color: #FF5904;
				}
			}

			.radio {
				display: flex;
				align-items: center;
				color: #666;
				position: absolute;
				left: 0;

				image {
					width: 30rpx;
					height: 30rpx;
					margin-right: 10rpx;
				}
			}

			>text {
				color: #FF5904;
				position: absolute;
				right: 30rpx;
			}

			.treatyHide {
				display: none;
			}

			.codeHide {
				display: none;
			}
		}
	}

	.login-content-btn {
		width: 95%;
		background: linear-gradient(243deg, rgba(255, 153, 96, 1) 0%, rgba(255, 90, 44, 1) 100%);
		height: 88rpx;
		border-radius: 10rpx;
		color: #fff;
		font-size: 40rpx;
		text-align: center;
		margin: 150rpx auto 0;
		line-height: 88rpx;
		box-shadow: 0 10rpx 20rpx #FF9960;
	}

	.btnState {
		opacity: 0.5;
		color: #fff !important;
	}

	.login-tipsText {
		font-size: 28rpx;
		color: #999999;
		width: 88%;
		margin: 100rpx auto 0;
	}
</style>
