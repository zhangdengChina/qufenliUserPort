<template>
	<view class="personalData">
		<!-- header -->
		<commonHeader headerTitl="个人资料" xingHide=true lingHide=true fenxiangHide=true gengduoHide=true></commonHeader>
		<view class="personalData-content">
			<view class="personalData-content-phone">
				<view class="left">
					头像
				</view>
				<view class="right" @tap="addImg">
					<view class="right-add" :class="imgHide?'':'imgHide'">
						<text class="iconfont icon-tubiaolunkuo-"></text>
						<view>添加图片</view>
					</view>
					<view class="right-img" :class="imgHide?'imgHide':''">
						<image :src="imgUrl" mode=""></image>
					</view>
				</view>
			</view>
			<view class="personalData-content-username">
				<view class="left">
					用户名
				</view>
				<input type="text" value="" @blur="inputValue" placeholder="请输入用户名" placeholder-style="color:#999"/>
			</view>
		</view>
		
		<!-- 修改 -->
		<view class="submit-btn" @tap="upload">
			修改
		</view>
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
				imgHide:true,	// 隐藏/显示图片
				imgUrl:'',	// 图片地址
				username:'',
			};
		},
		components:{commonHeader,tabbar},
		methods:{
			// 添加图片
			addImg(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success:  (res)=> {
				        console.log(res.tempFilePaths[0]);
						this.imgUrl = res.tempFilePaths[0];
						this.imgHide = false;
				    }
				});
			},
			// 获取用户名
			inputValue(e){
				console.log(e.detail.value)
				this.username = e.detail.value;
			},
			// 修改
			upload(){
				uni.uploadFile({
					url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
					filePath: this.imgUrl,
					name: 'img',
					formData: {
						'user': 'test'
					},
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data);
					},
					fail:(err)=>{
						console.log(err)
					}
				});
			}
		}
	}
</script>

<style lang="less">
	.personalData{
		color: #333;
		height: 90%;
		background: #f6f7f8;
		padding-top: 90rpx;
		/* #ifdef APP-PLUS */
		padding-top: 130rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 130rpx;
		/* #endif */
		.personalData-content{
			padding-left: 30rpx;
			background: #FFF;
			font-size: 30rpx;
			.personalData-content-phone{
				margin-top: 20rpx;
				padding: 20rpx 30rpx 20rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid #e0e0e0;
				.right{
					.right-add{
						color: #999;
						width: 180rpx;
						height: 152rpx;
						background: #f8f6f9;
						border-radius: 10rpx;
						display: flex;
						align-items: center;
						flex-direction: column;
						justify-content: center;
						text{
							font-size: 60rpx;
						}
						view{
							margin-top: 10rpx;
							font-size: 24rpx;
						}
					}
					.right-img{
						width: 180rpx;
						height: 152rpx;
						border-radius: 10rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
					.imgHide{
						display: none;
					}
				}
			}
			.personalData-content-username{
				height: 90rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid #e0e0e0;
				input{
					width: 200rpx;
					font-size: 28rpx;
					text-align: right;
					margin-right: 30rpx;
				}
			}
		}
		.submit-btn{
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
</style>
