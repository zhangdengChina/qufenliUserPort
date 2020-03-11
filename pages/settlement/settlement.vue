<template>
	<view class="settlement">
		<!-- 顶部 -->
		<commonHeader :headerTitl="headerTitl" xingHide=true lingHide=true></commonHeader>
		<view class="settlement-content">
			<view class="setting-content-top" @tap="goAddress">
				<view class="setting-content-top-left">
					<text class="iconfont icon-dingwei"></text>
				</view>
				<view class="setting-content-top-right">
					<view class="title">
						<text>张先生</text>
						<text>17729848359</text>
					</view>
					<view class="text">
						湖南省长沙市岳麓区望城坡街道枫林三路杨明山庄40栋2单元
					</view>
				</view>
			</view>
			<view class="setting-content-product">
				<image src="../../static/images/content01.png" mode=""></image>
				<view class="product">
					<view class="title">
						<text>意大利黑胡椒面</text>
						<text>X1</text>
					</view>
					<view class="date">
						下单时间：2019-11-12 08:11
					</view>
					<view class="price">
						单价：￥9.9
					</view>
				</view>
			</view>
			<view class="setting-content-total">
				<text></text>
				<view class="right">
					<text>共计1商品</text>
					<text>合计 ￥</text>
					<text>9.9</text>
				</view>
			</view>
			<view class="setting-content-remarks">
				<text>订单备注:</text>
				<textarea placeholder-style="color:#999;marginTop:20rpx;margin-left:20rpx" value="" placeholder="选填, 请输入备注" @blur="remarks"/>
			</view>
			<view class="setting-content-code">
				订单编号:<text>08e0890890232842343</text>
			</view>
			<view class="setting-content-quan" @tap="setCouponHide=false">
				<text>优惠券:<text>{{yhqTetx}}</text></text>
				<text class="iconfont icon-youjiantou"></text>
			</view>
			<view class="setting-content-radio">
				<text>您有10个星币，抵扣可省10元，是否抵扣</text>
				<view class="xuanxiang">
					<label class="radio" @tap="checked = !checked">
						<radio value="" :checked="checked"/><text>是</text>
					</label>
					<label class="radio" @tap="checked = !checked">
						<radio value="" :checked="!checked" /><text>否</text>
					</label>
				</view>
				<view class="phone">
					联系商家: <text>0713-88888888</text>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="settlement-footer">
			<text></text>
			<view class="right">
				共1件商品
				<text class="total">合计:</text>
				<view class="price">￥<text>9.9</text></view>
				<view class="tijiao" @tap="submitOrder">
					提交订单
				</view>	
			</view>
		</view>
		<!-- tabbar -->
		<tabbar></tabbar>
		
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
	</view>
</template>

<script>
	// 引入tabbar
	import tabbar from"@/components/common-tabbar/common-tabbar";
	import commonHeader from"@/components/common-header/common-header"
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
				headerTitl:'结算',
				checked:false,
				payMaskHide:true,
				val:'',//输入框的值
				codeIndex: 1, //下标
				codeArr: [],
				payPwdMaskHide:true,
				// 支付方式
				payMode:'',
				// 支付自动聚焦
				focusStata:false,
				
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
				checkedradio:false
			}
		},
		methods: {
			remarks(){
				console.log(111)
			},
			// 前往地址
			goAddress(){
				uni.navigateTo({
					url:'../myAddress/myAddress'
				})
			},
			// 提交订单
			submitOrder(){
				this.payMaskHide = false;
			},
			// 获取输入的值
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
			//清除验证码或者密码
			clear(){
				this.codeIndex=1;
				this.codeArr=[];
				this.val="";
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
			}
		},
		components:{
			commonHeader,
			tabbar
		}
	}
</script>	

<style lang="less" scoped>
	.settlement{
		background: #f6f7f8;
		color: #333;
		padding-top: 30rpx;
		/* #ifdef APP-PLUS */
		padding-top: 70rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 70rpx;
		/* #endif */
		margin-bottom: 100rpx;
		.settlement-content{
			background: #fff;
			border-radius: 20rpx;
			width: 90%;
			margin: 90rpx auto 0;
			padding: 20rpx;
			padding-bottom: 0;
			.setting-content-top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid #D8D8D8;
				padding-bottom: 20rpx;
				.setting-content-top-left{
					width: 66rpx;
					height: 66rpx;
					background:linear-gradient(143deg,rgba(255,119,43,1) 0%,rgba(255,91,52,1) 100%);
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 20rpx;
					text{
						font-size: 40rpx;
						color: #fff;
					}
				}
				.setting-content-top-right{
					flex: 1;
					font-size: 32rpx;
					.title{
						display: flex;
						justify-content: space-between;
						text:first-child{
							font-weight: bold;
						}
						text:last-child{
							color: #666;
							font-size: 28rpx;
						}
					}
					.text{
						margin-top: 20rpx;
						font-size: 30rpx;
						line-height: 42rpx;
					}
				}
			}
			.setting-content-product{
				padding: 20rpx 0;
				display: flex;
				image{
					width: 180rpx;
					height: 152rpx;
					border-radius: 20rpx;
					margin-right: 20rpx;
				}
				.product{
					flex: 1;
					color: #666;
					font-size: 28rpx;
					.title{
						font-size: 32rpx;
						display: flex;
						justify-content: space-between;
						text:first-child{
							color: #333;
						}
					}
					.date{
						margin: 15rpx 0;
					}
				}
			}
			.setting-content-total{
				display: flex;
				justify-content: space-between;
				font-size: 30rpx;
				padding: 30rpx 0;
				text:nth-child(2){
					margin-left: 30rpx;
					color: #666666;
				}
				text:last-child{
					color: #f16012;
				}
			}
			.setting-content-remarks{
				font-size: 30rpx;
				textarea{
					height: 171rpx;
					width: 100%;
					margin: 30rpx 0;
					border-radius: 20rpx;
					background: #f7f7f7;
					text-indent: 15rpx;
				}
			}
			.setting-content-code{
				font-size: 30rpx;
				padding: 30rpx 0;
				text{
					margin-left: 30rpx;
					color: #666;
				}
			}
			.setting-content-quan{
				font-size: 30rpx;
				padding-left: 30rpx;
				display: flex;
				justify-content: space-between;
				>text text{
					color: #999999;
					margin-left: 30rpx;
					font-size: 28rpx;
				}
			}
			.setting-content-radio{
				font-size: 30rpx;
				padding: 40rpx 0;
				.xuanxiang{
					padding: 30rpx 0;
					.radio{
						margin-right: 100rpx;
					}
				}
				.phone{
					text{
						margin-left: 30rpx;
						color: #0E88FF;
					}
				}
			}
		}
		.settlement-footer{
			height: 100rpx;
			background: #faf7fa;
			position: fixed;
			bottom: 100rpx;
			width: 100%;
			box-shadow:0px -10px 21px 0px rgba(0,0,0,0.2);
			display: flex;
			font-size: 30rpx;
			color: #666;
			justify-content: space-between;
			.right{
				display: flex;
				align-items: center;
				.tijiao{
					width: 220rpx;
					height: 100rpx;
					background: #FF6B37;
					text-align: center;
					line-height: 100rpx;
					color: #fff;
					font-size: 32rpx;
				}
				.total{
					margin: 0 20rpx;
				}
				.price{
					color: #ff6b37;
					margin-right: 20rpx;
					text{
						font-size: 38rpx;
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
	}
</style>
