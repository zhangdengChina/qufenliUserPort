<template>
	<view class="scanPay">
		<!-- header -->
		<commonHeader headerTitl="付款" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		<!-- 内容开始 -->
		<view class="scanPay-content">
			<view class="title">
				付款给某某商家
			</view>
			<view class="money">
				<view class="money-text">
					金额
					<view class="money-text-input">
						<text>￥</text>
						<input @input="moneyInput" type="number" value="" placeholder="输入金额" placeholder-style="fontSize:28rpx"/>
					</view>
				</view>
				<view class="money-text-yhq"  @tap="setCouponHide=false">
					<text>优惠券:</text>
					<view class="">
						<text>{{yhqTetx}}</text>
						<text class="iconfont icon-youjiantou" style="color: #333;"></text>
					</view>
				</view>
				<view class="money-text-dk">
					<view class="text">
						您有10个星币，抵扣可省10元，是否抵扣
					</view>
					<view class="radio-area">
						<label class="radio">
							<radio value="" :checked="isRadio" style="transform:scale(0.7)" @tap="isRadio=true"/><text>是</text>
						</label>
						<label class="radio">
							<radio value="" :checked="!isRadio" style="transform:scale(0.7)" @tap="isRadio=false"/><text>否</text>
						</label>
					</view>
				</view>
			</view>
			<!-- 付款方式 -->
			<view class="payMode">
				<text>应付：{{money}}元</text>
				<view class="right">
					<text>实付：{{money?money:0}}元</text>
					<view @tap="payMaskHide=false">
						支付
					</view>
				</view>
			</view>
		</view>
		<!-- 内容结束 -->
		
		
		
		<!-- 选择优惠券弹窗 -->
		<view class="setCoupon" :class="setCouponHide?'setCouponHide':''">
			<view class="top" @tap="setCouponHide=true">
			</view>
			<view class="content">
				<view class="content-top">
					优惠详情
					<text class="iconfont icon-shanchu" @tap="setCouponHide=true"></text>
				</view>
				<view class="redpackge">
					<view class="redpackge-title">
						<label class="radio" @tap="ljsy(0);checkedradio=!checkedradio">
							<radio value="" :checked="checkedradio"/><text>不使用优惠券</text>
						</label>
					</view>
					<view class="redpackge-item" v-for="item in redpackgeList" :key="item.id">
						<view class="left">
							<view class="left-quan">
								<view class="price">
									<text>￥</text>
									<text>{{item.price}}</text>
									<view>
										抵扣券
									</view>
								</view>
							</view>
							<view class="left-title">
								<text>
									{{item.title}}
								</text>
								<view>
									有效期至：{{item.date}}
								</view>
								<text>使用规则</text>
							</view>
						</view>
						<view class="right" @tap="ljsy(item)">
							立即使用
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 支付选择蒙层 -->
		<view class="payMask" :class="payMaskHide?'payMaskHide':''">
			<view class="payMask-content">
				<view class="title">
					<text class="iconfont icon-zuojiantou" @tap="payMaskHide=true"></text>
					请选择支付方式
				</view>
				<view class="item" @tap="pay(0)">
					<view class="item-left">
						<text class="iconfont icon-shouzhimingxicaifuhongbaoyue" style="color: #FF5A32;"></text>
						余额支付
					</view>
					<view class="item-right">
						<text class="iconfont icon-youjiantou"></text>
					</view>
				</view>
				<view class="item" @tap="pay(1)">
					<view class="item-left">
						<text class="iconfont icon-weixin" style="color: #09BB07;"></text>
						微信支付
					</view>
					<view class="item-right">
						<text class="iconfont icon-youjiantou"></text>
					</view>
				</view>
				<view class="item" @tap="pay(2)">
					<view class="item-left">
						<text class="iconfont icon-zhifubao" style="color: #06B4FD;"></text>
						支付宝支付
					</view>
					<view class="item-right">
						<text class="iconfont icon-youjiantou"></text>
					</view>
				</view>
				<view class="item" @tap="pay(3)">
					<view class="item-left">
						<text class="iconfont icon-bangdingshezhiyinxingqiabangding" style="color: #F7601C;"></text>
						银行卡支付
					</view>
					<view class="item-right">
						<text class="iconfont icon-youjiantou"></text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 支付密码蒙层 -->
		<view class="payPwdMask" :class="payPwdMaskHide?'payPwdMaskHide':''">
			<view class="payPwdMask-content">
				<view class="title">
					<text class="iconfont icon-shanchu" @tap="backPay"></text>
					请输入支付密码
				</view>
				<view class="content">
					<text>向某某商家支付</text>
					<view>
						￥9.9
					</view>
				</view>
				<view class="pwdinput">
					<view class="mode">
						<view class="modeLeft">
							支付方式
						</view>
						<view class="modeRight" @tap="backPay">
							{{payMode}}
							<text class="iconfont icon-youjiantou"></text>
						</view>
					</view>
					<view class="flex-box">
						<input
						    :value="val"
							type="number"
							:focus="focusStata"
							:maxlength="maxlength"
							class="hide-input"
							@input="getVal"
						/>
						<view v-bind:class="['item', { active: codeIndex == 1 }]">
							<view class="line"></view>
							<block v-if="isPwd && codeArr.length >= 1">
								<text class="dot">.</text>
							</block>
							<block v-else>	{{ codeArr[0] ? codeArr[0] : ''}}</block>
						</view>
						<view v-bind:class="['item', { active: codeIndex == 2 }]">
							<view class="line"></view>
							<block v-if="isPwd && codeArr.length >= 2">
								<text class="dot">.</text>
							</block>
							<block v-else>	{{ codeArr[1] ? codeArr[1] : ''}}</block>
						</view>
						<view v-bind:class="['item', { active: codeIndex == 3 }]">
							<view class="line"></view>
							<block v-if="isPwd && codeArr.length >= 3">
								<text class="dot">.</text>
							</block>
							<block v-else>	{{ codeArr[2] ? codeArr[2] : ''}}</block>
						</view>
						<view v-bind:class="['item', { active: codeIndex == 4 }]">
							<view class="line"></view>
							<block v-if="isPwd && codeArr.length >= 4">
								<text class="dot">.</text>
							</block>
							<block v-else>	{{ codeArr[3] ? codeArr[3] : ''}}</block>
						</view>
						<block v-if="maxlength === 6">				
							<view v-bind:class="['item', { active: codeIndex == 5 }]">
								<view class="line"></view>
								<block v-if="isPwd && codeArr.length >= 5">
									<text class="dot">.</text>
								</block>
								<block v-else>	{{ codeArr[4] ? codeArr[4] : ''}}</block>
							</view>
							<view v-bind:class="['item', { active: codeIndex == 6 }]">
								<view class="line"></view>
								<block v-if="isPwd && codeArr.length >= 6">
									<text class="dot">.</text>
								</block>
								<block v-else>	{{ codeArr[5] ? codeArr[5] : ''}}</block>
							</view>
						</block>
					</view>
				</view>
			</view>
		</view>
			
	</view>
</template>

<script>
	// header
	import commonHeader from "@/components/common-header/common-header";
	export default {
		props: {
			//最大长度 值为4或者6
			maxlength: {
				type: Number,
				default: 6
			},
			//是否是密码
			isPwd: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				money:0,
				// 优惠弹窗
				yhqTetx:'暂无优惠券',
				setCouponHide:true,
				redpackgeList:[
					{id:"01",price:5,title:"5元剪发券",date:"2019-12-31"},
					{id:"02",price:10,title:"5元剪发券",date:"2019-12-31"},
					{id:"03",price:5,title:"5元剪发券",date:"2019-12-31"},
					{id:"04",price:99,title:"5元剪发券",date:"2019-12-31"},
					{id:"05",price:99,title:"5元剪发券",date:"2019-12-31"}
				],
				checkedradio:false,
				isRadio : false,
				// 选择付款方式
				payMaskHide:true,
				// 支付密码
				payPwdMaskHide:true,
				// 支付方式
				payMode:'',
				// 支付自动聚焦
				focusStata:false,
				val:'',//输入框的值
				codeIndex: 1, //下标
				codeArr: [],
			};
		},
		components:{
			commonHeader
		},
		methods:{
			// 输入金额
			moneyInput(e){
				this.money = e.detail.value;
			},
			// 返回支付选择
			backPay(){
				// 显示支付方式选择
				this.payMaskHide = false;
				// 隐藏密码输入
				this.payPwdMaskHide = true;
			},
			// 立即使用优惠券
			ljsy(item){
				if(item){
					this.yhqTetx = item.title;
					this.checkedradio = false;
					this.setCouponHide = true;
				}else{
					this.yhqTetx = '暂无优惠券';
					// this.setCouponHide = true;
				}
			},
			// 支付
			pay(index){
				if(index===0){
					this.payMode = '余额支付';
				}
				if(index===1){
					this.payMode = '微信支付';
				}
				if(index===2){
					this.payMode = '支付宝支付';
				}
				if(index===3){
					this.payMode = '银行卡支付';
				}
				// 隐藏当前支付方式选择
				this.payMaskHide = true;
				// 显示密码输入
				this.payPwdMaskHide = false;
			},
			//取值
			getVal(e) {
				let { value } = e.detail;
				this.val=value;
				let arr = value.split('');
				this.codeIndex = arr.length + 1;
				this.codeArr = arr;
				console.log(this.val)
				if(this.val==888888){
					uni.showLoading({
					    title: '支付中...',
						mask:true
					});
					setTimeout( ()=> {
						uni.showToast({
							title:'支付成功',
							success:()=> {
								  uni.hideLoading();
							}
						})
						uni.reLaunch({
							url:'../index/index'
						})
					}, 2000);
				}
			},
		}
	}
</script>

<style lang="less">
	.scanPay{
		padding-top: 100rpx;
		/* #ifdef APP-PLUS */
		padding-top: 140rpx;
		/* #endif */
		font-size: 30rpx;
		background: #f7f7f7;
		height: 100%;
		color: #333;
		.scanPay-content{
			.title{
				padding: 30rpx;
			}
			.money{
				background: #fff;
				padding: 0 30rpx;
				.money-text{
					padding: 20rpx 0;
					border-bottom: 1px solid #e0e0e0;
					.money-text-input{
						display: flex;
						padding-top: 30rpx;
						align-items: center;
						text{
							font-size: 50rpx;
							font-weight: bold;
						}
						input{
							font-size: 40rpx;
							text-indent: 20rpx;
						}
					}
				}
				.money-text-yhq{
					display: flex;
					align-items: center;
					padding: 30rpx 0;
					border-bottom: 1px solid #e0e0e0;
					>text{
						width: 180rpx;
					}
					>view{
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: space-between;
						color: #999;
						font-size: 26rpx;
					}
				}
				.money-text-dk{
					.text{
						padding: 30rpx 0;
						border-bottom: 1px solid #e0e0e0;
					}
					.radio-area{
						display: flex;
						padding: 20rpx 0;
						.radio{
							margin-right: 120rpx;
							display: flex;
							align-items: center;
							font-size: 26rpx;
						}
					}
				}
			}
		}
		.payMode{
			height: 100rpx;
			background: #fff;
			margin-top: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			>text{
				margin-left: 30rpx;
				color: #666;
			}
			.right{
				display: flex;
				height: 100rpx;
				align-items: center;
				font-weight: bold;
				color:  #333;
				view{
					margin-left: 30rpx;
					height: 100rpx;
					width: 150rpx;
					line-height: 100rpx;
					font-weight: bold;
					font-size: 36rpx;
					background: #FF6B37;
					text-align: center;
					color: #fff;
				}
			}
		}
		
		
		// 优惠弹窗
		.setCouponHide{
			display: none;
		}
		.setCoupon{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(1,1,1,0.5);
			.top{
				height: 40%;
			}
			.content{
				height: 60%;
				background: #fff;
				font-size: 30rpx;
				display: flex;
				flex-direction: column;
				.content-top{
					text-align: center;
					padding: 20rpx 0;
					position: relative;
					margin-bottom: 30rpx;
					text{
						position: absolute;
						right: 30rpx;
						top: 20rpx;
						font-size: 40rpx;
						color: #666;
					}
				}
				.redpackge{
					flex: 1;
					padding-top: 30rpx;
					overflow-y: auto;
					.redpackge-title{
						padding: 30rpx;
					}
				}
				.redpackge-item{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 30rpx;
					border-radius: 20rpx;
					height: 200rpx;
					background: #fff;
					width: 86%;
					margin: 0 auto 20rpx;
					box-shadow: 0 4rpx 20rpx #999;
					.left{
						display: flex;
						.left-quan{
							.price{
								color: #FF5830;
								text:first-child{
									font-size: 40rpx;
								}
								text:nth-child(2){
									font-size: 70rpx;
								}
								view{
									font-size: 28rpx;
								}
							}
						}
						.left-title{
							flex: 1;
							margin-left: 40rpx;
							font-size: 28rpx;
							text:first-child{
								font-weight: bold;
							}
							view{
								font-weight: bold;
								margin: 10rpx 0;
							}
							text:last-child{
								color: #999;
							}
						}
					}
					.right{
						color: #fff;
						font-size: 28rpx;
						padding: 10rpx 24rpx;
						background:linear-gradient(244deg,rgba(255,137,36,1) 0%,rgba(255,90,45,1) 100%);
						border-radius: 40rpx;
					}
				}
			}
		}
		
		// 支付弹框
		.payMaskHide{
			display: none !important;
		}
		.payMask{
			position: fixed;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
			background: rgba(1,1,1,0.5);
			z-index: 999999;
			color: #000;
			.payMask-content{
				width: 80%;
				height: 500rpx;
				background: #fff;
				padding: 30rpx 30rpx 50rpx 30rpx;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				border-radius: 20rpx;
				.title{
					position: relative;
					text-align: center;
					padding-bottom: 20rpx;
					border-bottom: 1px solid #E6E6E6;
					text{
						position: absolute;
						left: 0;
						top: 10rpx;
					}
				}
				.item{
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 100rpx;
					border-bottom: 1px solid #E6E6E6;
					.item-left{
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 34rpx;
						text{
							font-size: 50rpx;
							margin-right: 20rpx;
						}
					}
				}
			}
		}
		// 输入密码弹窗
		.payPwdMaskHide{
			display: none !important;
		}
		.payPwdMask{
			position: fixed;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
			background: rgba(1,1,1,0.5);
			z-index: 999999;
			color: #000;
			.payPwdMask-content{
				width: 80%;
				height: 550rpx;
				background: #fff;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				border-radius: 20rpx;
				font-size: 37rpx;
				.title{
					padding: 20rpx 0;
					display: flex;
					align-items: center;
					justify-content: center;
					border-bottom: 1rpx solid #E6E6E6;
					text{
						position: absolute;
						top: 20rpx;
						left: 20rpx;
						color: #E6E6E6;
						font-size: 50rpx;
					}
				}
				.content{
					text-align: center;
					padding: 30rpx 0;
					border-bottom: 1rpx solid #E6E6E6;
					view{
						font-weight: bold;
						font-size: 57rpx;
					}
				}
				.pwdinput{
					padding: 0 30rpx;
					.mode{
						display: flex;
						justify-content: space-between;
						font-size: 30rpx;
						color: #666;
						padding: 20rpx 0;
						.modeRight{
							text{
								margin-left: 10rpx;
							}
						}
					}
					.flex-box {
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						margin-top: 40rpx;
						height: 100rpx;
						position: relative;
					}
					.item {
						position: relative;
						width: 90upx;
						height: 90upx;
						font-size: 30upx;
						font-weight: bold;
						color: #333333;
						line-height: 90upx;
						text-align: center;
						box-sizing: border-box;
						border: 1px solid #CCCCCC;
						border-right: 0;
					}
					.item:last-child {
						border-right: 1px solid #ccc;
					}
					.active {
						border-color: #ff4b4b;
					}
					.active .line {
						display: block;
					}
					.line {
						display: none;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						width: 2upx;
						height: 40upx;
						background: #ff4b4b;
						animation: twinkling 1s infinite ease;
					}
					.hide-input {
						position: absolute;
						top: 0;
						left: -100%;
						width: 200%;
						height: 100%;
						text-align: left;
						z-index: 9;
						opacity: 1;
					}
					@keyframes twinkling {
						0% {
							opacity: 0.2;
						}
						50% {
							opacity: 0.5;
						}
						100% {
							opacity: 0.2;
						}
					}
					
					.dot{
						font-size: 80upx;
						line-height: 40upx;
					}
				}
			}
		}
	}
</style>
