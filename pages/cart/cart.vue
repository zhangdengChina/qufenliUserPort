<template>
	<view class="cart">
		<!-- 顶部 -->
		<commonHeader :headerTitl="headerTitl"  xingHide=true lingHide=true></commonHeader>
		<!-- 购物内容 -->
		<view class="cart-content">
			<view class="cart-content-item" v-for="(item,index) in cartList" :key="item.id">
				<!-- 标题 -->
				<view class="cart-content-item-title">
					<label class="radio">
						<radio value="" :checked="item.checked" @tap="changeRadio(item.id)"/>
						<image :src="item.img" mode=""></image>
						<text>{{item.shopName}}</text>
					</label>
				</view>
				<!-- 内容 -->
				<view class="cart-content-item-content">
					<label class="radio">
						<radio value="" :checked="item.checked" @tap="changeRadio(item.id)"/>
						<image :src="item.productImg" mode="" @tap="goShopDetails"></image>
						<view class="text" @tap="goShopDetails">
							<text class="title">{{item.productName}}</text>
							<view class="num">
								<text>月售{{item.monthSale}}</text>
								<text>好评率{{item.praise}}%</text>
							</view>
							<text class="price">
								¥{{item.price}}
							</text>
						</view>
					</label>
					<!-- 数量加减 -->
					<view class="changeNum">
						<view class="left">
							
						</view>
						<view class="right">
							<text class="iconfont icon-jian" @tap="changeNun(-1,index)"></text>
							{{item.num}}
							<text class="iconfont icon-jia" @tap="changeNun(1,index)"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部结算 -->
		<view class="cart-footer">
			<label class="radio">
				<radio value="" :checked="allChecked" @tap="changeAllChecked"/><text>全选</text>
			</label>
			<view class="right">
				<view class="price">
					合计：<text>{{allTotal}}</text>
				</view>
				<navigator url="../settlement/settlement" class="total" @tap="settlement">去结算</navigator>
			</view>
		</view>
		<!-- tabbar -->
		<tabbar active="3"></tabbar>
	</view>
</template>

<script>
	// 引入tabbar
	import tabbar from"@/components/common-tabbar/common-tabbar";
	// 引入公用头部
	import commonHeader from"@/components/common-header/common-header";
	export default {
		data() {
			return {
				headerTitl:"购物车",
				cartList:[
					{"id":"01","img":"../../static/images/cartLOGO.png","shopName":"好丽友","productImg":"../../static/images/content01.png",
					"productName":"意大利黑胡椒牛肉泥","monthSale":"520","praise":"92","price":15,"num":2,"checked":true},
					{"id":"02","img":"../../static/images/cartLOGO.png","shopName":"好丽友","productImg":"../../static/images/content01.png",
					"productName":"意大利黑胡椒牛肉泥","monthSale":"520","praise":"92","price":15,"num":2,"checked":true},
					{"id":"03","img":"../../static/images/cartLOGO.png","shopName":"好丽友","productImg":"../../static/images/content01.png",
					"productName":"意大利黑胡椒牛肉泥","monthSale":"520","praise":"92","price":15,"num":2,"checked":true},
					// {"id":"04","img":"../../static/images/cartLOGO.png","shopName":"好丽友","productImg":"../../static/images/content01.png",
					// "productName":"意大利黑胡椒牛肉泥","monthSale":"520","praise":"92","price":15,"num":2,"checked":true},
					// {"id":"05","img":"../../static/images/cartLOGO.png","shopName":"好丽友","productImg":"../../static/images/content01.png",
					// "productName":"意大利黑胡椒牛肉泥","monthSale":"520","praise":"92","price":15,"num":2,"checked":true},
					// {"id":"06","img":"../../static/images/cartLOGO.png","shopName":"好丽友","productImg":"../../static/images/content01.png",
					// "productName":"意大利黑胡椒牛肉泥","monthSale":"520","praise":"92","price":15,"num":2,"checked":true},
					// {"id":"07","img":"../../static/images/cartLOGO.png","shopName":"好丽友","productImg":"../../static/images/content01.png",
					// "productName":"意大利黑胡椒牛肉泥","monthSale":"520","praise":"92","price":15,"num":2,"checked":true}
				],
				allChecked:false
			};
		},
		components:{
			commonHeader,
			tabbar
		},
		mounted() {
			this.loopState();
		},
		methods:{
			// 循环遍历选中状态
			loopState(){
				var state = this.cartList.every(item=>{
					return item.checked
				})
				if(state){
					this.allChecked = true;
				}else{
					this.allChecked = false;
				}
			},
			// 改变单选状态
			changeRadio(index){
				this.cartList.map(item=>{
					if(item.id===index){
						item.checked = !item.checked
					}
				})
				this.loopState();
			},
			// 全选改变状态
			changeAllChecked(){
				this.allChecked?this.allChecked=false:this.allChecked=true;
				this.cartList.map(item=>{
					item.checked = this.allChecked;
				})
			},
			// 改变数量
			changeNun(num,index1){
				console.log(num,index1)
				this.cartList.map((item,index)=>{
					if(index === index1){
						item.num += num;
						if(item.num<1){
							this.cartList.splice(index,1)
						}
					}
				})
			},
			// 结算
			settlement(){
				console.log(this.cartList)
			},
			// 前往商品详情
			goShopDetails(){
				uni.navigateTo({
					url:"../goodsDetails/goodsDetails"
				})
			}
		},
		computed:{
			// 计算总价
			allTotal(){
				var all = 0;
				this.cartList.map(item=>{
					if(item.checked){
						all += item.num*item.price;
					}
				})
				return all;
			}
		}
	}
</script>

<style lang="less" scoped>
	.cart{
		color: #333;
		min-height: 100%;
		background: #f7f7f7;
		padding-bottom: 100rpx;
		/* #ifdef MP-WEIXIN */
		padding-top: 40rpx;
		/* #endif */
		/* #ifdef APP-PLUS */
		padding-top: 40rpx;
		/* #endif */
		// 购物内容
		.cart-content{
			margin-top: 100rpx;
			background: #f8f6f9;
			padding: 20rpx 0;
			margin-bottom: 100rpx;
			.cart-content-item{
				width: 90%;
				margin: auto;
				padding: 20rpx;
				background: #fff;
				border-radius: 20rpx;
				margin-bottom: 20rpx;
				.cart-content-item-title{
					display: flex;
					border-bottom: 1px solid #ccc;
					padding-bottom: 30rpx;
					font-size: 32rpx;
					font-weight: 600;
					.radio{
						display: flex;
						align-items: center;
						image{
							width: 50rpx;
							height: 50rpx;
							margin: 0 15rpx;
						}
					}
				}
				.cart-content-item-content{
					padding-top: 40rpx;
					.radio{
						display: flex;
						align-items: center;
						image{
							width:180rpx;
							height:152rpx;
							border-radius: 20rpx;
							margin: 0 20rpx;
						}
						.text{
							margin-top: -20rpx;
							height: 152rpx;
							.title{
								font-size: 28rpx;
								font-weight: 600;
							}
							.num{
								margin: 20rpx 0;
								font-size: 24rpx;
								color: #999;
								text{
									margin-right: 40rpx;
								}
							}
							.price{
								color: #FF5A32;
							}
						}
					}
					.changeNum{
						display: flex;
						align-items: center;
						justify-content: space-between;
						text{
							font-size: 60rpx;
							color: #FF5A32;
							margin-left: 30rpx;
						}
						text:not(:last-child){
							margin-right: 30rpx;
						}
					}
				}
			}
		}
		// 底部结算
		.cart-footer{
			display: flex;
			align-items: center;
			justify-content: space-between;
			background: #f8f8f8;
			height: 100rpx;
			position: fixed;
			width: 100%;
			font-size: 28rpx;
			bottom: 90rpx;
			.radio{margin-left: 30rpx;}
			.right{
				display: flex;
				.price{
					line-height: 100rpx;
					margin-right: 30rpx;
					text{
						color: #FF6B37;
					}
				}
				.total{
					background: #FF6B37;
					height: 100rpx;
					width: 220rpx;
					color: #fff;
					font-size: 32rpx;
					line-height: 100rpx;
					text-align: center;
				}
			}
		}
	}
</style>
