<template>
	<view class="myaddress">
		<!-- header -->
		<commonHeader headerTitl="我的收货地址" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		<!-- 内容开始 -->
		<view class="myaddress-content">
			<view class="myaddress-content-address">
				<view @longpress="delStata" @longtap="delStata" class="item" v-for="(item,index) in addressList" :key="index">
					<view class="item-left" @tap="goAddress(item)">
						<text class="iconfont icon-dingwei"></text>
						<view class="item-msg">
							<view>
								{{item.username}}
								<text>{{item.phone}}</text>
							</view>
							<text>{{item.address}}</text>
						</view>
					</view>
					<text class="iconfont icon-youjiantou" @tap="goAddress(item)" :class="rightText?'rightText':''"></text>
					<text class="del" :class="rightText?'':'rightText'" @tap="delAddress(item.id)">删除</text>
				</view>
			</view>
			<!-- 新增 -->
			<view class="myaddress-content-btn" @tap="goNewAddress">
				新增收货地址
			</view>
		</view>
		<!-- 内容结束 -->
	</view>
</template>

<script>
	// header
	import commonHeader from "@/components/common-header/common-header";
	export default {
		data() {
			return {
				addressList:[
					{id:'01',username:'刘女士',sex:false,phone:'18799998888',address:'湖南省长沙市岳麓区蓝春苑',roomNum:'2-3-11'},
					{id:'02',username:'张先生',sex:true,phone:'17788882222',address:'湖南省长沙市岳麓区蓝春苑',roomNum:'2-3-11'},
				],
				rightText:false,
			};
		},
		components:{
			commonHeader
		},
		methods:{
			goNewAddress(){
				uni.navigateTo({
					url:"../newAddress/newAddress"
				})
			},
			// 删除收货地址
			delStata(){
				this.rightText = true;
			},
			// 删除选中
			delAddress(id){
				console.log(id)
				this.addressList.map((item,index)=>{
					if(item.id===id){
						this.addressList.splice(index,1)
					}
				})
				this.rightText = false;
			},
			// 前往地址编辑
			goAddress(item){
				if(this.rightText){
					this.rightText = false;
				}else{
					uni.navigateTo({
						url:'../newAddress/newAddress?item='+encodeURIComponent(JSON.stringify(item))
					})
				}
			}
		}
	}
</script>

<style lang="less">
	.myaddress{
		max-height: 100%;
		background: #f7f7f7;
		padding-top: 120rpx;
		color: #333;
		/* #ifdef APP-PLUS */
		padding-top: 160rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 160rpx;
		/* #endif */
		.myaddress-content{
			.myaddress-content-address{
				.item{
					background: #fff;
					width: 86%;
					height: 140rpx;
					margin: 30rpx auto;
					border-radius: 20rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 30rpx;
					padding: 0 30rpx;
					overflow: hidden;
					.item-left{
						display: flex;
						align-items: center;
						.iconfont{
							font-size: 60rpx;
							color: #FF602E;
							margin-right: 30rpx;
						}
						.item-msg{
							view{
								margin-bottom: 10rpx;
								text{
									margin-left: 20rpx;
								}
							}
							>text{
								font-size: 28rpx;
								color: #999;
							}
						}
					}
					>.iconfont{
						font-size: 40rpx;
						font-weight: bold;
						color: #999;
					}
					.del{
						background: red;
						height: 100%;
						width: 100rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						color: #fff;
						letter-spacing: 5rpx;
						margin-right: -30rpx;
					}
					.rightText{
						display: none !important;
					}
				}
			}
			.myaddress-content-btn{
				width: 95%;
				background:linear-gradient(243deg,rgba(255,153,96,1) 0%,rgba(255,90,44,1) 100%);
				height: 88rpx;
				border-radius: 10rpx;
				color: #fff;
				font-size: 40rpx;
				margin: 100rpx auto 90rpx;
				text-align: center;
				line-height: 88rpx;
				box-shadow: 0 10rpx 20rpx #FF9960;
			}
		}
	}
</style>
