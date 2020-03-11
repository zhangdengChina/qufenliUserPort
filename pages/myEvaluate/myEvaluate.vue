<template>
	<view class="myEvaluate">
		<!-- header -->
		<commonHeader headerTitl="我的评价" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		<!-- 内容开始 -->
		<view class="myEvaluate-content">
			<view class="myEvaluate-content-item" v-for="item in myEvaluateList" :key="item.id">
				<view class="title">
					{{item.title}}
				</view>
				<view class="content">
					<view class="content-left">
						<image :src="item.goodsUrl" mode=""></image>
					</view>
					<view class="content-right">
						<text>下单时间：{{item.date}}</text>
						<view>
							{{item.text}}
						</view>
					</view>
				</view>
				<view class="btn">
					<text @tap="deleteEvaluate(item.id)">删除</text>
					<text @tap="goEvaluate(item.id)">评价</text>
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
	// tabbar
	import tabbar from "@/components/common-tabbar/common-tabbar";
	export default {
		data() {
			return {
				myEvaluateList:[
					{id:"01",title:"豆浆油条先生","goodsUrl":"../../static/images/content01.png",date:"2019-11-11 08:11",text:"这个意大利面真的是撒飒飒太好吃下次还要再来飒飒as一份这个意大利面真的是太好吃下次还要再来一份大厦上师大奥"},
					{id:"02",title:"豆浆油条先生","goodsUrl":"../../static/images/content01.png",date:"2019-11-11 08:11",text:"这个意大利面真的是撒飒飒太好吃下次还要再来飒飒as一份这个意大利面真的是太好吃下次还要再来一份大厦上师大奥"},
					{id:"03",title:"豆浆油条先生","goodsUrl":"../../static/images/content01.png",date:"2019-11-11 08:11",text:"这个意大利面真的是撒飒飒太好吃下次还要再来飒飒as一份这个意大利面真的是太好吃下次还要再来一份大厦上师大奥"},
					{id:"04",title:"豆浆油条先生","goodsUrl":"../../static/images/content01.png",date:"2019-11-11 08:11",text:"这个意大利面真的是撒飒飒太好吃下次还要再来飒飒as一份这个意大利面真的是太好吃下次还要再来一份大厦上师大奥"},
					{id:"05",title:"豆浆油条先生","goodsUrl":"../../static/images/content01.png",date:"2019-11-11 08:11",text:"这个意大利面真的是撒飒飒太好吃下次还要再来飒飒as一份这个意大利面真的是太好吃下次还要再来一份大厦上师大奥"}
				]
			};
		},
		methods:{
			// 删除
			deleteEvaluate(index){
				console.log(index)
			},
			// 前往评价页
			goEvaluate(index){
				console.log(index)
				uni.navigateTo({
					url:"../evaluate/evaluate"
				})
			}
		},
		components:{
			commonHeader,
			tabbar
		}
	}
</script>

<style lang="less">
	.myEvaluate{
		min-height: 100%;
		background: #f6f7f8;
		padding: 130rpx 0;
		/* #ifdef APP-PLUS */
		padding-top: 170rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 170rpx;
		/* #endif */
		.myEvaluate-content{
			.myEvaluate-content-item{
				background: #fff;
				padding: 0 20rpx;
				width: 90%;
				margin: 0 auto 30rpx;
				border-radius: 20rpx;
				color: #333;
				.title{
					padding: 30rpx 0;
					font-weight: bold;
					font-size: 32rpx;
					border-bottom: 1px solid #e0e0e0;
				}
				.content{
					display: flex;
					padding: 30rpx 0;
					.content-left{
						width: 180rpx;
						height: 152rpx;
						border-radius: 20rpx;
						image{width: 100%;height: 100%;}
					}
					.content-right{
						margin-left: 20rpx;
						flex: 1;
						margin-top: -10rpx;
						text{
							font-size: 28rpx;
							color: #666;
						}
						view{
							margin-top: 10rpx;
							height: 105rpx;
							width: 461rpx;
							color: #999;
							font-size: 28rpx;
							overflow: hidden;
							text-overflow:ellipsis;
							 display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 3;
						}
					}
				}
				.btn{
					display: flex;
					justify-content: flex-end;
					padding-bottom: 20rpx;
					text{
						padding: 9rpx 44rpx;
						color: #FF6504;
						border: 1px solid  #FF6504;
						border-radius: 44rpx;
						font-size: 24rpx;
					}
					text:first-child{
						margin-right: 30rpx;
					}
				}
			}
		}
	}
</style>
