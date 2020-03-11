<template>
	<view class="login">
		<view class="login-header">
			手机号登录
		</view>
		<view class="login-title">
			请输入手机号登录
		</view>
		<view class="login-content">
			<view class="login-content-item">
				<text>+86</text>
				<input type="text" :value="phone" @input="inputPhone" :maxlength="11" placeholder="请输入手机号" placeholder-style="color:#999" />
			</view>
			<view class="login-content-item password">
				<text>密码</text>
				<input type="password" :value="pwd" @input="inputPwd" maxlength="6" placeholder="请输入6位数密码" placeholder-style="color:#999" />
			</view>
			<view class="tips">
				<text @tap="forgetPwd">忘记密码</text>
				<text @tap="register">立即注册</text>
			</view>
		</view>
		<button class="login-content-btn" :disabled="btnState" :class="btnState?'btnState':''" @tap="goIndex">登录</button>
		<!-- 提示文本 -->
		<view class="login-tipsText">
			根据国家网络实名的相关规定，自2017年10月1日起，
			您需要绑定手机才能享受正常服务。
			<view class="" style="text-align: center;margin-top: 30rpx;">
				登录或注册即代表已同意
				<navigator url="../userAgreement/userAgreement" style="color:#FF5904;display: inline-block;">《阅读用户协议》</navigator>
			</view>
		</view>

		<!-- 记住密码提示 -->
		<view class="rememberPwd" :class="rememberPwdHide?'rememberPwdHide':''">
			<view class="rememberPwd-content">
				<view class="title">
					是否记住账号密码？
				</view>
				<view class="btn">
					<text @tap="cancelSave">取消</text>
					<text @tap="savePwd">确认</text>
				</view>
			</view>
		</view>

		<!-- 其它登录方式 -->
		<!-- #ifdef APP-PLUS -->
		<view class="otherLogin">
			快捷登录方式 <text class="iconfont icon-weixin" @tap="weixinLogin"></text>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	// 引入api接口
	import {login} from "@/common/apis.js";
	
	export default {
		data() {
			return {
				codeText: "获取验证码",
				btnState: true,
				phone: "",
				pwd: "",
				phoneState: false,
				pwdState: false,
				rememberPwdHide: true,
				saveObj: '',
			}
		},
		methods: {
			// 获取输入手机号
			inputPhone(e) {
				if (e.detail.value.length === 11) {
					this.phoneState = true;
					this.phone = e.detail.value;
				} else {
					this.phoneState = false;
				}
				this.loginState()
			},
			// 获取登录密码
			inputPwd(e) {
				if (e.detail.value.length === 6) {
					this.pwdState = true;
					this.pwd = e.detail.value;
				} else {
					this.pwdState = false;
				}
				this.loginState()
			},
			// 判断登录按钮状态
			loginState() {
				if (this.phoneState && this.pwdState) {
					this.btnState = false;
				} else {
					this.btnState = true;
				}
			},

			// 前往首页
			goIndex() {
				if (this.phone == 11111111111 && this.pwd == 888888) {
					this.saveObj = {
						PHONE: this.phone,
						PASSWORD: this.pwd
					}
					// 登录请求
					login(this.saveObj).then(res=>{
						console.log(res.returnMsg.status);
						if(res.returnMsg.status=='00'){
							uni.getStorage({
								key: 'saveStata',
								success: (res) => {
									if (res.data) {
										uni.reLaunch({
											url: "../index/index"
										})
									} else {
										// 提示保存密码
										this.rememberPwdHide = false;
									}
								},
								fail: () => {
									// 提示保存密码
									this.rememberPwdHide = false;
								}
							})
						}else if(res.returnMsg.status=='01'){
							uni.showToast({
								title:'账号不存在!',
								icon:'none'
							})
						}
						else if(res.returnMsg.status=='02'){
							uni.showToast({
								title:'密码错误!',
								icon:'none'
							})
						}
						else if(res.returnMsg.status=='03'){
							uni.showToast({
								title:'不合法注册!',
								icon:'none'
							})
						}
					}).catch(err=>{
						console.log('请核对账号密码')
					})

				} else {
					uni.showToast({
						title: '登陆失败，请核对后再登录！',
						icon: "none"
					});
				}
			},

			// 忘记密码
			forgetPwd() {
				uni.navigateTo({
					url: "../forgetPwd/forgetPwd"
				})
			},
			// 立即注册
			register() {
				uni.navigateTo({
					url: '../register/register'
				})
			},
			// 保存密码
			savePwd() {
				this.rememberPwdHide = true;
				// 保存状态到本地
				uni.setStorage({
					key: 'saveStata',
					data: true
				})
				// 账号密码保存
				uni.setStorage({
					key: 'name',
					data: JSON.stringify(this.saveObj),
					success() {
						uni.reLaunch({
							url: "../index/index"
						})
					},
					fail() {
						uni.showToast({
							title: '保存失败',
							icon: 'none'

						})
					}
				})
			},
			// 取消保存
			cancelSave() {
				// 保存状态到本地
				uni.setStorage({
					key: 'saveStata',
					data: false
				})
				// 移出本地数据
				uni.removeStorage({
					key: 'name',
					success: () => {
						this.rememberPwdHide = true;
						uni.reLaunch({
							url: "../index/index"
						})
					}
				})
			},
			// 微信登录
			// #ifdef APP-PLUS
			weixinLogin() {
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						console.log(res.provider)
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: (loginRes) => {
									console.log(JSON.stringify(loginRes));

									// 如果已绑定手机跳转至首页
									uni.reLaunch({
										url:'../index/index'
									})
									// 否则进入绑定手机号
									uni.navigateTo({
										url: '../bankphone/bankphone'
									})

								},
								fail: () => {
									uni.showToast({
										title: '您还未安装或登录！',
										icon: 'none'
									})
								}
							});
						}
					}
				});
			},
			// #endif
			// #ifdef H5
			// 判断是否有code
			getCode() { // 非静默授权，第一次有弹框
				this.code = ''
				var local = window.location.href // 获取页面url
				var appid = 'wxcd3e4c058be3dd03'
				this.code = this.getUrlCode().code // 截取code
				if (this.code == null || this.code === '') { // 如果没有code，则去请求
					window.location.href =
						`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
				} else {
					// 你自己的业务逻辑
					alert(this.code);
					uni.reLaunch({
						url:'../index/index'
					})
				}
			},
			// 获取code
			getUrlCode() { // 截取url中的code方法
				var url = location.search
				this.winUrl = url
				var theRequest = new Object()
				if (url.indexOf("?") != -1) {
					var str = url.substr(1)
					var strs = str.split("&")
					for (var i = 0; i < strs.length; i++) {
						theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1])
					}
				}
				return theRequest
			}

			// #endif
		},
		onLoad() {
			// 获取本地存储登录信息
			uni.getStorage({
				key: 'name',
				success: (data) => {
					var data = JSON.parse(data.data);
					this.phone = data.phone;
					this.pwd = data.pwd;
					this.phoneState = true;
					this.pwdState = true;
					this.loginState();
				}
			})
		},
		mounted() {
			// #ifdef H5
			if (!window.localStorage.getItem('openId')) { // 如果缓存localStorage中没有微信openId，则需用code去后台获取
				// this.getCode()
			} else {
				// 别的业务逻辑
			}
			// #endif
		}
	}
</script>

<style lang="less">
	.login {
		height: 100%;
		background: #fffeff;
		color: #333;
		font-family: PingFangSC-Regular, PingFang SC;
		position: relative;

		.login-header {
			padding: 20rpx;
			font-size: 40rpx;
			/* #ifdef APP-PLUS */
			padding-top: 60rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			padding-top: 60rpx;
			/* #endif */
			background: linear-gradient(117deg, rgba(255, 90, 43, 1) 0%, rgba(255, 89, 52, 1) 36%, rgba(255, 156, 31, 1) 100%);
			color: #fff;
			text-align: center;
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
					padding: 15rpx 25rpx;
					background: #f1f1f1;
					border-radius: 40rpx;
					opacity: 0.5;
				}

				/deep/ uni-button {
					line-height: 1em;
				}

				.selectCode {
					opacity: 1;
				}
			}

			.password {
				justify-content: space-between;

				input {
					flex: 1;
				}
			}

			.login-content-userTreaty {
				padding-right: 30rpx;
				font-size: 24rpx;
				padding-top: 20rpx;
				position: relative;

				/deep/ uni-radio .uni-radio-input {
					width: 30rpx;
					height: 30rpx;
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

			.tips {
				display: flex;
				justify-content: space-between;
				font-size: 30rpx;
				padding: 20rpx 0;
				padding-right: 20rpx;
				color: #FF5904;
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


		// 记住密码蒙层
		.rememberPwdHide {
			display: none !important;
		}

		.rememberPwd {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(1, 1, 1, 0.3);

			.rememberPwd-content {
				padding: 30rpx;
				width: 50%;
				height: 200rpx;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				border-radius: 20rpx;
				font-size: 30rpx;
				text-align: center;
				margin: auto;
				background: #fff;
				overflow: hidden;

				.btn {
					position: absolute;
					bottom: 0;
					width: 100%;
					display: flex;
					margin-left: -30rpx;
					justify-content: space-between;
					color: #fff;

					text {
						width: 50%;
						padding: 20rpx 0;
						background: #ccc;
					}

					text:last-child {
						background: #4CD964;
					}
				}
			}
		}

		// 其它登录方式
		.otherLogin {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 30rpx;
			margin-top: 200rpx;

			.icon-weixin {
				font-size: 80rpx;
				color: #1bac19;
				margin-left: 20rpx;
			}
		}

	}
</style>
