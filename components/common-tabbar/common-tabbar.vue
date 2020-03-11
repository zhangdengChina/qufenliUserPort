<template>
	<view class="common-tabbar">
		<view class="item" @tap="goPage(item.id)" v-for="item in tabList" :key="item.id" :class="active==item.id?'active':''">
			<text class="iconfont" :class="item.icon"></text>
			<view>{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			active:{
				type:String,
				default:""
			}
		},
		data() {
			return {
				tabList:[
					{"id":1,"icon":"icon-shouye","text":"首页"},
					{"id":2,"icon":"icon-755danzi","text":"消息"},
					{"id":3,"icon":"icon-daohanggouwuche","text":"购物车"},
					{"id":4,"icon":"icon-gerenzhongxin","text":"个人中心"}
				]
			}
		},
		methods: {
			goPage(index){
				var id = this.active;
				id = index;
				if(id==1){
					uni.reLaunch({
						url:"../../pages/index/index"
					})
				}
				if(id==2){
					uni.reLaunch({
						url:"../../pages/news/news"
					})
				}
				if(id==3){
					uni.reLaunch({
						url:"../../pages/cart/cart"
					})
				}
				if(id==4){
					uni.reLaunch({
						url:"../../pages/personal/personal"
					})
				}
			},
		},
	}
</script>

<style lang="less">
	.common-tabbar{
		color: #333;
		height: 100rpx;
		display: flex;
		width: 100%;
		background: #fff;
		position: fixed;
		bottom: 0;
		justify-content: space-around;
		text-align: center;
		align-items: center;
		.active{text{color: #f5671f;}}
		.item{
			text{
				font-size: 48rpx;
			}
			view{
				font-size: 20rpx;
			}
		}
	}
</style>
