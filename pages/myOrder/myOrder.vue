<template>
	<view class="myOrder">
		<!-- header -->
		<commonHeader headerTitl="我的订单" xingHide=true lingHide=true></commonHeader>
		<!-- tab切换 -->
		<view class="myOrder-title">
			<text :class="active===1?'active':''" @tap="changeTitle(1)">已付款</text>
			<text :class="active===2?'active':''" @tap="changeTitle(2)">未付款</text>
			<text :class="active===3?'active':''" @tap="changeTitle(3)">退款/售后</text>
		</view>
		<view class="myOrder-content">
			<!-- 已付款 -->
			<view class="myOrder-content-complete commonStyle" :class="active===1?'show':''">
				<view class="item" v-for="item in orderList" :key="item.id">
					<view class="item-title">
						<view class="left">
							<image :src="item.imgUrl" mode=""></image>
							<text>{{item.title}}</text>
						</view>
						<view class="right">
							{{item.phone}}
						</view>
					</view>
					<navigator url="../oraderDetails/oraderDetails" class="item-content">
						<view class="left">
							<image :src="item.goodsUrl" mode=""></image>
							<view>
								<text class="left-title">
									{{item.name}}
								</text>
								<view class="left-date">
									下单时间：{{item.date}}
								</view>
								<view class="left-price">
									单价：￥{{item.price}}
								</view>
							</view>
						</view>
						<view class="right">
							X{{item.num}}
						</view>
					</navigator>
					<view class="item-code">
						订单编号：<text>{{item.orderCode}}</text>
					</view>
					<view class="item-pay">
						付款方式：<text>{{item.pay}}</text>
					</view>
					<view class="item-total">
						<text></text>
						<view>
							共计{{item.num}}商品
							<text>合计 ￥<text>{{item.num*item.price}}</text></text>
						</view>
					</view>
					<view class="item-btn">
						<text>申请退款</text>
						<text>确认收货</text>
						<text>再来一单</text>
					</view>
				</view>
			</view>
			<!-- 未付款 -->
			<view class="myOrder-content-uncomplete commonStyle" :class="active===2?'show':''">
				<view class="item" v-for="item in orderList" :key="item.id">
					<view class="item-title">
						<view class="left">
							<image :src="item.imgUrl" mode=""></image>
							<text>{{item.title}}</text>
						</view>
						<view class="right">
							{{item.phone}}
						</view>
					</view>
					<view class="item-content">
						<view class="left">
							<image :src="item.goodsUrl" mode=""></image>
							<view>
								<text class="left-title">
									{{item.name}}
								</text>
								<view class="left-date">
									下单时间：{{item.date}}
								</view>
								<view class="left-price">
									单价：￥{{item.price}}
								</view>
							</view>
						</view>
						<view class="right">
							X{{item.num}}
						</view>
					</view>
					<view class="item-code">
						订单编号：<text>{{item.orderCode}}</text>
					</view>
					<view class="item-pay">
						付款方式：<text>{{item.pay}}</text>
					</view>
					<view class="item-total">
						<text></text>
						<view>
							共计{{item.num}}商品
							<text>合计 ￥<text>{{item.num*item.price}}</text></text>
						</view>
					</view>
					<view class="item-btn">
						<text>待付款</text>
					</view>
				</view>
			</view>
			<!-- 退款售后 -->
			<view class="myOrder-content-refund commonStyle" :class="active===3?'show':''">
				<view class="item" v-for="item in orderList" :key="item.id">
					<view class="item-title">
						<view class="left">
							<image :src="item.imgUrl" mode=""></image>
							<text>{{item.title}}</text>
						</view>
						<view class="right">
							{{item.phone}}
						</view>
					</view>
					<view class="item-content">
						<view class="left">
							<image :src="item.goodsUrl" mode=""></image>
							<view>
								<text class="left-title">
									{{item.name}}
								</text>
								<view class="left-date">
									下单时间：{{item.date}}
								</view>
								<view class="left-price">
									单价：￥{{item.price}}
								</view>
							</view>
						</view>
						<view class="right">
							X{{item.num}}
						</view>
					</view>
					<view class="item-code">
						订单编号：<text>{{item.orderCode}}</text>
					</view>
					<view class="item-pay">
						付款方式：<text>{{item.pay}}</text>
					</view>
					<view class="item-total">
						<text></text>
						<view>
							共计{{item.num}}商品
							<text>合计 ￥<text>{{item.num*item.price}}</text></text>
						</view>
					</view>
					<view class="item-btn">
						<text>进入店铺</text>
						<text>撤销退款</text>
					</view>
				</view>
			</view>
		</view>
		<!-- tabbar -->
		<tabbar></tabbar>
	</view>
</template>

<script>
	import commonHeader from"@/components/common-header/common-header";
	import tabbar from"@/components/common-tabbar/common-tabbar";
	export default {
		data() {
			return {
				active:1,
				orderList:[
					{id:"01",imgUrl:"../../static/images/cartLOGO.png",title:"油条豆浆先生","phone":"13366667777",goodsUrl:"../../static/images/content01.png",
					name:"意大利黑胡椒面",num:1,date:"2019-11-12 08:11",price:"99.99",orderCode:"88080080880","pay":"微信支付"},
					{id:"02",imgUrl:"../../static/images/cartLOGO.png",title:"油条豆浆先生","phone":"13366667777",goodsUrl:"../../static/images/content01.png",
					name:"意大利黑胡椒面",num:3,date:"2019-11-12 08:11",price:"99.99",orderCode:"88080080880","pay":"微信支付"},
					{id:"03",imgUrl:"../../static/images/cartLOGO.png",title:"油条豆浆先生","phone":"13366667777",goodsUrl:"../../static/images/content01.png",
					name:"意大利黑胡椒面",num:4,date:"2019-11-12 08:11",price:"99.99",orderCode:"88080080880","pay":"微信支付"},
					{id:"04",imgUrl:"../../static/images/cartLOGO.png",title:"油条豆浆先生","phone":"13366667777",goodsUrl:"../../static/images/content01.png",
					name:"意大利黑胡椒面",num:2,date:"2019-11-12 08:11",price:"99.99",orderCode:"88080080880","pay":"微信支付"}
				]
			};
		},
		methods:{
			changeTitle(index){
				this.active = index;
			}
		},
		components:{
			commonHeader,
			tabbar
		}
	}
</script>

<style lang="less">
	.myOrder{
		min-height: 100%;
		background: #f6f7f8;
		padding: 210rpx 0;
		color: #333;
		/* #ifdef APP-PLUS */
		padding-top: 250rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 250rpx;
		/* #endif */
		.myOrder-title{
			font-size: 32rpx;
			display: flex;
			justify-content: space-around;
			background: #fff;
			border-bottom: 1px solid #e0e0e0;
			position: fixed;
			top: 90rpx;
			/* #ifdef APP-PLUS */
			top: 130rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			top: 130rpx;
			/* #endif */
			width: 100%;
			z-index: 9999;
			text{
				padding:35rpx 0;
			}
			.active{
				border-bottom: 8rpx solid #FF5904;
				font-weight: bold;
			}
		}
		.myOrder-content{
			.show{
				display: block;
			}
			>view{
				display: none;
				
			}
			.commonStyle{
				width: 95%;
				margin: auto;
				font-size: 30rpx;
				.item{
					background: #fff;
					margin-top: 20rpx;
					border-radius: 20rpx;
					padding: 0 20rpx 30rpx 20rpx;
					.item-title{
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 30rpx 0;
						border-bottom: 1px solid #e0e0e0;
						.left{
							font-size: 32rpx;
							font-weight: bold;
							display: flex;
							align-items: center;
							image{
								width: 50rpx;
								height: 50rpx;
								border-radius: 50%;
								margin-right: 20rpx;
							}
						}
						.right{
							font-size: 38rpx;
							color: #999;
						}
					}
					.item-content{
						display: flex;
						padding: 30rpx 0;
						justify-content: space-between;
						.left{
							display: flex;
							image{
								width: 180rpx;
								height: 152rpx;
								border-radius: 20rpx;
								margin-right: 20rpx;
							}
							>view{
								.left-title{
									font-size: 32rpx;
								}
								view{
									font-size: 28rpx;
									color: #666;
									margin-top: 10rpx;
								}
							}
						}
						.right{
							font-size: 28rpx;
							color: #666;
						}
					}
					.item-code,.item-pay{
						padding: 20rpx 0;
						text{
							color: #666;
							margin-left: 30rpx;
						}
					}
					.item-pay{
						border-bottom: 1px solid #e0e0e0;
					}
					.item-total{
						display: flex;
						justify-content: space-between;
						padding: 30rpx 0;
						view{
							>text{
								color: #666;
								margin-left: 40rpx;
								text{color: #FF5904;}
							}
						}
					}
					.item-btn{
						display: flex;
						justify-content: flex-end;
						text{
							padding: 8rpx 30rpx;
							border: 1px solid #FF6504;
							border-radius: 40rpx;
							color: #FF6504;
							margin-right: 30rpx;
						}
						text:last-child{
							background:linear-gradient(231deg,rgba(255,178,10,1) 0%,rgba(255,127,4,1) 60%,rgba(255,89,4,1) 100%);
							color: #fff;
							border: 0;
							margin-right: 10rpx;
						}
					}
				}
			}
		}
	}
</style>
