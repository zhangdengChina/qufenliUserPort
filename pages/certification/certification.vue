<template>
	<view class="certification">
		<!-- header -->
		<commonHeader headerTitl="实名认证" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		<view class="certification-content">
			<view class="certification-content-username">
				<view class="left">
					姓名
				</view>
				<input @blur="inputValue" type="text" value="" placeholder="请输入真实姓名" placeholder-style="color:#999" />
			</view>
			<view class="certification-content-upload">
				上传身份证照
			</view>
		</view>
		<view class="certification-upload">
			<view class="certification-upload-zhang" @tap="zheng">
				<view class="top" :class="imgHide1?'':'imgHide'">
					<image src="../../static/images/renzheng01.png" mode=""></image>
					<view>请上传身份证正面</view>
					<text>注：请上传jpg/png格式图片</text>
				</view>
				<view class="img" :class="imgHide1?'imgHide':''">
					<image :src="imgUrl1" mode=""></image>
				</view>
			</view>
			<view class="certification-upload-fan" @tap="fan">
				<view class="top" :class="imgHide2?'':'imgHide'">
					<image src="../../static/images/renzheng02.png" mode=""></image>
					<view>请上传身份证反面</view>
					<text>注：请上传jpg/png格式图片</text>
				</view>
				<view class="img" :class="imgHide2?'imgHide':''">
					<image :src="imgUrl2" mode=""></image>
				</view>
			</view>
		</view>
		<view class="submit-btn" @tap="submit">
			提交审核
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
				imgHide1:true,
				imgHide2:true,
				imgUrl1:"",
				imgUrl2:"",
				username:''
			};
		},
		components: {
			commonHeader,
			tabbar
		},
		methods: {
			// 身份证正面上传
			zheng() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: (res)=> {
						this.imgUrl1 = res.tempFilePaths[0];
						this.imgHide1 = false;
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			fan(){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: (res)=> {
						this.imgUrl2 = res.tempFilePaths[0];
						this.imgHide2 = false;
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			inputValue(e){
				console.log(e.detail.value)
				this.username = e.detail.value;
			},
			// 提交审核
			submit(){
				var arr = [];
				arr.push(this.imgUrl1,this.imgUrl2);
				console.log(arr)
				uni.uploadFile({
					url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
					files: arr,
					name: 'img',
					filePath:'',
					formData: {
						'user': 'test'
					},
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data);
					}
				});
			}
		}
	}
</script>

<style lang="less">
	.certification {
		color: #333;
		height: 100%;
		background: #f6f7f8;
		padding-top: 90rpx;
		/* #ifdef APP-PLUS */
		padding-top: 130rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 130rpx;
		/* #endif */

		.certification-content {
			padding-left: 30rpx;
			background: #FFF;
			font-size: 30rpx;

			.certification-content-username {
				margin-top: 20rpx;
				height: 90rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid #e0e0e0;
				padding-right: 30rpx;

				input {
					width: 200rpx;
					font-size: 28rpx;
					text-align: right;
				}
			}

			.certification-content-upload {
				height: 90rpx;
				line-height: 90rpx;
			}
		}

		.certification-upload {
			>view {
				width: 500rpx;
				height: 302rpx;
				border: 20rpx solid #fff;
				border-radius: 10rpx;
				margin: 30rpx auto;
				background: #f7f4f8;
				text-align: center;
				font-size: 24rpx;

				image {
					width: 180rpx;
					height: 105rpx;
				}

				.top {
					margin-top: 40rpx;
					margin-bottom: 10rpx;
				}

				text {
					color: #999;
				}
				.img{
					width: 100%;
					height: 100%;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
			.imgHide{
				display: none;
			}
			.certification-upload-zhang {
				margin-bottom: 50rpx;
			}
		}
		.submit-btn{
				width: 95%;
				background:linear-gradient(243deg,rgba(255,153,96,1) 0%,rgba(255,90,44,1) 100%);
				height: 88rpx;
				border-radius: 10rpx;
				color: #fff;
				font-size: 40rpx;
				margin: 50rpx auto 90rpx;
				text-align: center;
				line-height: 88rpx;
				box-shadow: 0 10rpx 20rpx #FF9960;
			}
	}
</style>
