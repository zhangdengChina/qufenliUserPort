<template>
	<view class="preferencesPage">
		<!-- header -->
		<commonHeader headerTitl="我的订单" xingHide=true lingHide=true></commonHeader>
		<!-- 宣传图片 -->
		<view class="preferencesPage-img">
			<image src="../../static/images/youhui.png" mode=""></image>
		</view>
		<!-- 热门推荐 -->
		<view class="preferencesPage-hot">
			<view class="preferencesPage-hot-title">
				<text class="iconfont icon-dian"></text>热门推荐
			</view>
			<navigator url="../shopPage/shopPage" class="preferencesPage-hot-item" v-for="item in hotList" :key="item.id">
				<view class="left">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<view class="right">
					<text class="right-title">{{item.title}}</text>
					<view class="right-text">
						{{item.text}}
					</view>
					<view class="right-score">
						<!-- 不可点击状态 -->
						<uni-rate disabled="true" :value="item.score" active-color="#FF5D06" size="18"></uni-rate>
						<text>{{item.score}}分</text>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import commonHeader from"@/components/common-header/common-header";
	// 评分组件
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		data() {
			return {
				hotList:[
					{id:"01",imgUrl:"../../static/images/content01.png",title:"肥羊肉卷",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"4"},
					{id:"02",imgUrl:"../../static/images/content01.png",title:"肥羊肉卷",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"4"},
					{id:"03",imgUrl:"../../static/images/content01.png",title:"肥羊肉卷",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"4"},
					{id:"04",imgUrl:"../../static/images/content01.png",title:"肥羊肉卷",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"4"},
					{id:"05",imgUrl:"../../static/images/content01.png",title:"肥羊肉卷",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"4"},
					{id:"06",imgUrl:"../../static/images/content01.png",title:"肥羊肉卷",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"4"}
				]
			}
		},
		methods: {
			
		},
		components:{
			commonHeader,
			uniRate
		}
	}
</script>

<style lang="less">
	.preferencesPage{
		padding-top: 90rpx;
		height: 100%;
		color: #333;
		.preferencesPage-img{
			height: 100%;
			width: 100%;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.preferencesPage-hot{
			background: #AB5B18;
			.preferencesPage-hot-title{
				padding: 30rpx;
				color: #fff;
				font-size: 32rpx;
				display: flex;
				align-items: center;
				text{font-size: 45rpx;}
			}
			.preferencesPage-hot-item{
				display: flex;
				border-radius: 20rpx;
				height: 180rpx;
				width: 90%;
				background: #fff;
				margin: auto;
				margin-bottom: 20rpx;
				padding: 20rpx;
				.left{
					width: 213rpx;
					height: 181rpx;
					border-radius: 20rpx;
					image{width: 100%;height: 100%;}
				}
				.right{
					flex: 1;
					margin-left: 20rpx;
					.right-title{
						font-size: 30rpx;
						font-weight: bold;
					}
					.right-text{
						font-size: 24rpx;
						color: #666;
						width: 277rpx;
					}
					.right-score{
						margin-top: 20rpx;
						display: flex;
						align-items: center;
						font-size: 24rpx;
						color: #FF5A2C;
						text{
							margin-top: -10rpx;
							margin-left: 10rpx;
						}
					}
				}
			}
			.preferencesPage-hot-item:last-child{
				margin-bottom: 0;
			}
		}
	}
</style>
