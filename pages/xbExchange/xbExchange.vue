<template>
	<view class="xbExchange">
		<!-- header -->
		<commonHeader headerTitl="星币兑换" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		
		<view class="xbExchange-content">
			<!-- 现在数量 -->
			<view class="xbExchange-content-new item">
				<view>
					{{newNum+'.000'}}
				</view>
				<text>
					现在金币数量
				</text>
			</view>
			<!-- 可兑换数量 -->
			<view class="xbExchange-content-duihuan item">
				<view>
					可兑换数量
				</view>
				<text>{{num}}/个</text>
			</view>
			<!-- 明细 -->
			<view class="xbExchange-content-detail item" @tap="goMyPentacle">
				<view>
					星币明细
				</view>
				<text class="iconfont icon-youjiantou"></text>
			</view>
			<!-- 兑换 -->
			<view class="xbExchange-content-input item">
				<view class="num">
					<input @input="changeNum" placeholder-style="fontSize:28rpx;color:#999;" type="text" :value="value" placeholder="请输入要兑换的数量"/>
					<text @tap="allduixian">全部兑换</text>
				</view>
				
				<view class="btn">
					兑换
				</view>
			</view>
			
			<!-- 兑换规则 -->
			<view class="xbExchange-content-GZ">
				<view class="tips">
					<text>兑换规则</text>
					<view class="one">1、星币1：1比例兑换余额  </view>
					<view>2、星币可以用作购物，也可以提现</view>
					<view>3、星币兑换按会员等级扣除相应手续费</view>
				</view>
				
				<view class="grade-tips">
					用户等级兑换星币规则
				</view>
				<view class="grade-title">
					<text>用户等级</text>
					<text>消费金</text>
					<text>交易手续费</text>
				</view>
				<view class="grade-item">
					<view class="item1" v-for="(item,index) in gradeList" :key="index">
						<text>{{item.DJ}}</text>
						<text>{{item.XFJ}}</text>
						<text>{{item.SXF}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- tabbar -->
		<tabbar></tabbar>
	</view>
</template>

<script>
	// header
	import commonHeader from "@/components/common-header/common-header";
	// 引入tabbar
	import tabbar from"@/components/common-tabbar/common-tabbar";
	export default {
		data() {
			return {
				gradeList:[
					{id:1,DJ:'V1',XFJ:1,SXF:'25%'},
					{id:2,DJ:'V2',XFJ:100,SXF:'22%'},
					{id:3,DJ:'V3',XFJ:300,SXF:'20%'},
					{id:4,DJ:'V4',XFJ:1000,SXF:'15%'},
					{id:5,DJ:'V5',XFJ:2000,SXF:'12%'},
					{id:6,DJ:'V6',XFJ:3000,SXF:'10%'},
					{id:7,DJ:'V7',XFJ:10000,SXF:'8%'},
					{id:8,DJ:'V8',XFJ:20000,SXF:'7%'},
					{id:9,DJ:'V9',XFJ:30000,SXF:'5%'},
				],
				newNum:8000,
				num:800,
				value:'',
			};
		},
		components:{
			commonHeader,
			tabbar
		},
		methods:{
			// 前往星币明细
			goMyPentacle(){
				uni.navigateTo({
					url:'../myPentacle/myPentacle'
				})
			},
			// 兑换数量
			changeNum(e){
				this.value = e.detail.value;
			},
			// 全部兑换
			allduixian(){
				this.value = this.num;
			}
		}
	}
</script>

<style lang="less">
	.xbExchange{
		background: #f7f7f7;
		padding: 130rpx 0;
		min-height: 100%;
		/* #ifdef APP-PLUS */
		padding-top: 170rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 170rpx;
		/* #endif */
		font-family:PingFangSC-Medium,PingFang SC;
		.xbExchange-content{
			.item{
				width: 87%;
				padding: 30rpx;
				background: #fff;
				margin: auto;
				box-shadow:0px 2px 16px 0px rgba(0,0,0,0.1);
				border-radius: 20rpx;
				font-size: 30rpx;
				color: #333;
			}
			.xbExchange-content-new{
				view{
					color: #FF5A32;
					font-size: 38rpx;
					margin-bottom: 10rpx;
					font-weight: bold;
				}
				text{
					font-weight: bold;
				}
			}
			.xbExchange-content-duihuan{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 30rpx;
				text{
					color: #FF5A32;
					font-weight: bold;
				}
			}
			.xbExchange-content-detail{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 20rpx;
				text{
					color: #d8d8d8;
					font-size: 34rpx;
					font-weight: bold;
				}
			}
			.xbExchange-content-input{
				margin-top: 20rpx;
				.num{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-bottom: 20rpx;
					border-bottom: 1px solid #e4e4e4;
					text{
						color: #4A90E2;
					}
				}
				.btn{
					height: 88rpx;
					background:linear-gradient(243deg,rgba(255,153,96,1) 0%,rgba(255,90,44,1) 100%);
					border-radius: 10rpx;
					margin-top: 50rpx;
					color: #fff;
					font-size: 40rpx;
					line-height: 88rpx;
					text-align: center;
				}
			}
			.xbExchange-content-GZ{
				font-size: 30rpx;
				color: #333;
				.tips{
					padding: 50rpx 30rpx;
					text{
						font-weight: bold;
					}
					view{
						margin-top: 10rpx;
					}
					.one{
						margin-top: 20rpx;
					}
				}
				.grade-tips{
					font-weight: bold;
					padding: 30rpx;
					padding-bottom: 20rpx;
				}
				.grade-title{
					background: #fff;
					display: flex;
					justify-content: space-around;
					color: #666;
					font-size: 32rpx;
					padding: 18rpx 0;
					border-bottom: 1px solid #e4e4e4;
				}
				.grade-item{
					padding:0 30rpx;
					background: #fff;
					.item1{
						display: flex;
						justify-content: space-around;
						align-items: center;
						height: 100rpx;
						border-bottom: 1px solid #e4e4e4;
						text{
							margin-left: -30rpx;
						}
					}
					
				}
			}
		}
	}
</style>
