<template>
	<view class="search">
		<view class="search-top">
			<text class="iconfont icon-zuojiantou" @tap="backPage"></text>
			<view class="search-input">
				<text class="iconfont icon-sousuo"></text>
				<input @blur="searchText" focus="true" type="text" :value="inputValue" placeholder="搜索关键字" placeholder-style="color:#999;fontSize:28rpx;"/>
			</view>
			<view class="btn" @tap="search">
				搜索
			</view>
		</view>
		<!-- 历史记录 -->
		<view class="history">
			<view class="search-history">
				<view class="item" v-for="(item,index) in historyArr" :key="index">
					{{item}}
				</view>
			</view>
			<!-- 清空历史 -->
			<view class="search-record">
				<text @tap="clearHistory"><text class="iconfont icon-qingkongshanchu"></text>清空历史记录</text>
			</view>
		</view>
		<!-- 搜索信息 -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue:'',
				historyArr:[]
			};
		},
		methods:{
			// 获取搜索框内容
			searchText(e){
				console.log(e.detail.value)
				this.inputValue = e.detail.value;
			},
			// 搜索
			search(){
				if(this.inputValue){
					
					// 历史存入
					this.historyArr.push(this.inputValue);
					uni.setStorage({
						key:'history',
						data:JSON.stringify(this.historyArr),
						success:()=>{
							// 清空搜索框
							this.inputValue ='';
						}
					})
					console.log('搜索')
					uni.showToast({
						title:"未查询到该条内容！！！",
						// icon:'none'
					})
				}
			},
			// 清空历史记录
			clearHistory(){
				uni.removeStorage({
				    key: 'history',
					success:()=>{
						this.historyArr = []
					}
				});
			},
			// 返回
			backPage() {
				// #ifdef H5
				let canBack = true;
				const pages = getCurrentPages();
				// 有可返回的页面则直接返回，uni.navigateBack默认返回失败之后会自动刷新页面 ，无法继续返回  
				if (pages.length > 1) {
					uni.navigateBack(1)
					return;
				}
				// vue router 可以返回uni.navigateBack失败的页面 但是会重新加载  
				let a = this.$router.go(-1)
				// router.go失败之后则重定向到首页 
				if (a == undefined) {
					uni.reLaunch({
						url: "/pages/index/index"
					})
				}
				return;
				// #endif
				// 修复小程序app返回退出应用bug(无法返回重定向至首页)
				var pagelength = getCurrentPages();
				if(pagelength.length===1){
					var path = pagelength[0].route;
					// console.log(path)
					uni.reLaunch({
						url:'/'+path
					})
				}else{
					uni.navigateBack(1)
				}
			},
		},
		onLoad() {
			// 获取本地历史记录
			uni.getStorage({
			    key: 'history',
			    success:  (res)=> {
					if(res.data){
						this.historyArr = JSON.parse(res.data);
					}
			    }
			});
		}
	}
</script>

<style lang="less">
	.search{
		.search-top{
			height: 145rpx;
			background: url(../../static/images/bg1.jpg) no-repeat;
			background-size: cover;
			display: flex;
			padding: 0 30rpx;
			/* #ifdef APP-PLUS */
			padding-top: 40rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			padding-top: 40rpx;
			/* #endif */
			align-items: center;
			justify-content: space-between;
			>.iconfont{
				font-size: 40rpx;
				color: #fff;
			}
			.search-input{
				width: 75%;
				height: 70rpx;
				background: #fff;
				display: flex;
				border-radius: 10rpx;
				align-items: center;
				margin-left: 30rpx;
				.iconfont{
					font-size: 30rpx;
					color: #999;
					margin: 0 30rpx;
				}
				.input{
					flex: 1;
					color: #000;
				}
			}
			.btn{
				font-size: 28rpx;
				color: #fff;
			}
		}
		.search-history{
			padding: 0 30rpx;
			.item{
				color: #666;
				font-size: 28rpx;
				height: 90rpx;
				line-height: 90rpx;
				border-bottom: 1px solid #f3f3f3;
			}
		}
		.search-record{
			font-size: 28rpx;
			color: #666;
			padding-right: 30rpx;
			text-align: right;
			margin-top: 50rpx;
			text{
				margin-right: 10rpx;
			}
		}
	}
</style>
