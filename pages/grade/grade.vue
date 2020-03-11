<template>
	<view class="grade">
		<!-- header -->
		<commonHeader headerTitl="会员等级" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		<view class="grade-tips">
			用户等级兑换星币规则
		</view>
		<view class="grade-title">
			<text>用户等级</text>
			<text>消费金</text>
			<text>交易手续费</text>
		</view>
		<view class="grade-item">
			<view class="item" v-for="(item,index) in gradeList" :key="index">
				<text>{{item.DJ}}</text>
				<text>{{item.XFJ}}</text>
				<text>{{item.SXF}}</text>
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
				]
			};
		},
		components:{
			commonHeader,
			tabbar
		}
	}
</script>

<style lang="less">
	.grade{
		background: #f7f7f7;
		font-size: 30rpx;
		color: #333;
		height: 100%;
		padding-top: 110rpx;
		/* #ifdef APP-PLUS */
		padding-top: 150rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 150rpx;
		/* #endif */
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
			.item{
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
</style>
