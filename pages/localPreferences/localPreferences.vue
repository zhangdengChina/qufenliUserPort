<template>
	<view class="localPreferences">
		<!-- header -->
		<commonHeader headerTitl="本地优惠"></commonHeader>
		<!-- 内容 -->
		<view class="localPreferences-content">
			<!-- banner -->
			<view class="localPreferences-content-banner">
				<special-banner :banner-list="bannerList" :swiper-config="swiperConfig"></special-banner>
			</view>
			<!-- 热门推荐 -->
			<view class="localPreferences-content-hot">
				<view class="localPreferences-content-hot-title">
					<text class="iconfont icon-dian"></text>热门推荐
				</view>
				<navigator url="../preferencesPage/preferencesPage" class="localPreferences-content-hot-item" v-for="item in hotLIst" :key="item.id">
					<view class="left">
						<image :src="item.imgUrl" mode=""></image>
					</view>
					<view class="right">
						<view class="right-title">
							<text>{{item.title}}</text>
							<view>
								<text class="iconfont icon-youjiantou"></text>
							</view>
						</view>
						<view class="right-text">
							{{item.text}}
						</view>
						<!-- 评分 -->
						<view class="right-score">
							<!-- 不可点击状态 -->
							<uni-rate disabled="true" :value="item.score" active-color="#FF5D06" size="18"></uni-rate>
							<text>{{item.score}}分</text>
						</view>
						<!-- 时间 -->
						<view class="right-date">
							{{item.date}}
						</view>
					</view>
				</navigator>
			</view>
		</view>
		
		<!-- tabbar -->
		<tabbar></tabbar>
	</view>
</template>

<script>
	
	import commonHeader from"@/components/common-header/common-header";
	import tabbar from"@/components/common-tabbar/common-tabbar";
	// banner
	import specialBanner from '../../components/specialBanner.vue'
	// 评分组件
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		data() {
			return {
				bannerList: [{
					picture: 'http://image.mishi.cn/r/yry_h5_test/detail/3_1535359279285.png',
					title: '',
					description: '',
					path: '/pages/preferencesPage/preferencesPage'
				}, {
					picture: 'http://image.mishi.cn/r/yry_h5_test/detail/2_1535359240426.png',
					title: '',
					description: '',
					path: '/pages/preferencesPage/preferencesPage'
				}, {
					picture: 'http://image.mishi.cn/r/yry_h5_test/detail/1_1535359204228.png',
					title: '',
					description: '',
					path: '/pages/preferencesPage/preferencesPage'
				}, {
					picture: 'http://image.mishi.cn/r/yry_h5_test/detail/4_1535359327213.png',
					title: '',
					description: '',
					path: '/pages/preferencesPage/preferencesPage'
				}],
				swiperConfig: {
					indicatorDots: true,
					indicatorColor: 'rgba(255, 255, 255, .4)',
					indicatorActiveColor: 'rgba(255, 255, 255, 1)',
					autoplay: false,
					interval: 3000,
					duration: 300,
					circular: true,
					previousMargin: '58rpx',
					nextMargin: '58rpx'
				},
				hotLIst:[
					{id:"01",imgUrl:"../../static/images/content01.png",title:"油条豆浆先生",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"4",date:"2019-12-02"},
					{id:"02",imgUrl:"../../static/images/content01.png",title:"油条豆浆先生",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"4.5",date:"2019-12-12"},
					{id:"03",imgUrl:"../../static/images/content01.png",title:"油条豆浆先生",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"3.5",date:"2019-12-22"},
					{id:"04",imgUrl:"../../static/images/content01.png",title:"油条豆浆先生",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"4",date:"2019-10-02"},
					{id:"05",imgUrl:"../../static/images/content01.png",title:"油条豆浆先生",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"3",date:"2019-12-02"}
				]
			};
		},
		components:{
			commonHeader,
			specialBanner,
			tabbar,
			uniRate
		}
	}
</script>

<style lang="less" scoped>
	.localPreferences{
		background: #f7f7f7;
		min-height: 100%;
		color: #333;
		padding: 120rpx 0;
		/* #ifdef APP-PLUS */
		padding-top: 160rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 160rpx;
		/* #endif */
		.localPreferences-content{
			.localPreferences-content-hot{
				margin-top: 20rpx;
				.localPreferences-content-hot-title{
					font-size: 32rpx;
					display: flex;
					align-items: center;
					text{
						color: #FF5D06;
						margin-left: 10rpx;
						font-size: 40rpx;
					}
				}
				.localPreferences-content-hot-item{
					display: flex;
					background: #fff;
					padding: 20rpx;
					width: 90%;
					border-radius: 20rpx;
					margin: 20rpx auto 0;
					box-shadow: 0 8rpx 20rpx #999;
					.left{
						width: 213rpx;
						height: 181rpx;
						border-radius: 20rpx;
						image{
							width: 100%;
							height: 100%;
						}
						margin-right: 20rpx;
					}
					.right{
						flex: 1;
						.right-title{
							font-size: 30rpx;
							font-weight: bold;
							display: flex;
							justify-content: space-between;
							view{
								width: 45rpx;
								height: 45rpx;
								border-radius: 50%;
								color: #fff;
								display: flex;
								justify-content: center;
								align-items: center;
								background: linear-gradient(205deg,rgba(251,151,72,1) 0%,rgba(254,120,52,1) 100%);
							}
						}
						.right-text{
							font-size: 24rpx;
							color: #666;
							width: 400rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							margin-top: 10rpx;
						}
						.right-score{
							margin-top: 30rpx;
							display: flex;
							font-size: 24rpx;
							text{
								margin-top: -15rpx;
								margin-left: 15rpx;
							}
						}
						.right-date{
							font-size: 24rpx;
							color: #666;
							margin-top: 10rpx;
						}
					}
				}
			}
		}
	}
</style>
