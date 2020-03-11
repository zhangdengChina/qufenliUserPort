<template>
	<view class="myCard">
		<!-- header -->
		<commonHeader headerTitl="我的卡券" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		<!-- 内容开始 -->
		<view class="myCard-content">
			<view class="myCard-content-title">
				卡包
			</view>
			<view class="kabao">
				<!-- 微信 -->
				<view class="myCard-content-item">
					<view class="left">
						<text class="iconfont icon-weixin" style="color: #34C117;"></text>
						<view class="text">
							<text>微信</text>
							<view>
								哈哈哈哈哈
							</view>
						</view>
					</view>
					<view class="right" @tap="goBindWeixin">
						提现
					</view>
				</view>
				<!-- 支付宝 -->
				<view class="myCard-content-item">
					<view class="left">
						<text class="iconfont icon-zhifubao" style="color: #00AAEE;"></text>
						<view class="text">
							<text>支付宝</text>
							<view>
								哈哈哈哈哈
							</view>
						</view>
					</view>
					<view class="right" @tap="goBindAlipay">
						提现
					</view>
				</view>
				<!-- 招商银行卡 -->
				<view class="myCard-content-item" v-if="!cardStata">
					<view class="left">
						<text class="iconfont icon-bangdingshezhiyinxingqiabangding" style="color: #FF9707;"></text>
						<view class="text">
							<text>添加银行卡</text>
							<view>
								
							</view>
						</view>
					</view>
					<view class="right"  @tap="goBindBankCard">
						去绑定
					</view>
				</view>
				<view class="myCard-content-item" v-if="cardStata">
					<view class="left">
						<text class="iconfont icon-bangdingshezhiyinxingqiabangding" style="color: #FF9707;"></text>
						<view class="text">
							<text>建设银行卡</text>
							<view>
								6217************715
							</view>
						</view>
					</view>
					<view class="right"  @tap="goBindBankCard">
						提现
					</view>
				</view>
			</view>
			<!-- 红包 -->
			<view class="redpackge">
				红包/抵用券
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
				<view class="right">
					立即使用
				</view>
			</view>
		</view>
		<!-- 内容结束 -->
		<!-- tabbar -->
		<tabbar></tabbar>
	</view>
</template>

<script>
	// header
	import commonHeader from "@/components/common-header/common-header";
	import tabbar from "@/components/common-tabbar/common-tabbar";
	export default {
		data() {
			return {
				redpackgeList:[
					{id:"01",price:8,title:"5元剪发券",date:"2019-12-31"},
					{id:"02",price:10,title:"5元剪发券",date:"2019-12-31"},
					{id:"03",price:5,title:"5元剪发券",date:"2019-12-31"},
					{id:"04",price:99,title:"5元剪发券",date:"2019-12-31"}
				],
				cardStata:false,
			};
		},
		components:{
			commonHeader,
			tabbar
		},
		methods:{
			// 前往绑定支付宝
			goBindAlipay(){
				uni.navigateTo({
					url:"../bindAlipay/bindAlipay"
				})
			},
			// 前往绑定微信
			goBindWeixin(){
				uni.navigateTo({
					url:"../bindWeixin/bindWeixin"
				})
			},
			// 前往绑定银行卡
			goBindBankCard(){
				uni.navigateTo({
					url:"../bindBankCard/bindBankCard"
				})
			}
		},
		onLoad() {
			console.log(getApp().globalData.cardStata)
			this.cardStata = getApp().globalData.cardStata;
		}
	}
</script>

<style lang="less">
	.myCard{
		background: #f7f7f7;
		min-height: 100%;
		color: #333;
		padding-bottom: 100rpx;
		.myCard-content{
			/* #ifdef APP-PLUS */
			margin-top: 40rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			margin-top: 40rpx;
			/* #endif */
			.myCard-content-title{
				height: 300rpx;
				background:linear-gradient(117deg,rgba(255,90,43,1) 0%,rgba(255,89,52,1) 36%,rgba(255,156,31,1) 100%);
				line-height: 300rpx;
				font-size: 44rpx;
				color: #fff;
				padding-left: 30rpx;
			}
			.kabao{
				margin-top: -90rpx;
			}
			.myCard-content-item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 30rpx;
				border-radius: 20rpx;
				height: 184rpx;
				background: #fff;
				width: 86%;
				margin: 0 auto 20rpx;
				box-shadow: 0 4rpx 20rpx #999;
				.left{
					display: flex;
					.iconfont{
						font-size: 120rpx;
						margin-right: 40rpx;
						margin-left: 10rpx;
					}
					.text{
						font-size: 28rpx;
						margin-top: 20rpx;
						text{
							font-size: 32rpx;
							font-weight: bold;
						}
						view{
							margin-top: 10rpx;
						}
					}
				}
				.right{
					font-size: 28rpx;
					color: #999;
				}
			}
			.redpackge{
				font-size: 44rpx;
				padding: 10rpx 0 30rpx 30rpx;
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
</style>
