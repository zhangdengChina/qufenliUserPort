<template>
	<view class="merchantEntry">
		<!-- header -->
		<commonHeader headerTitl="商家入驻" xingHide=true lingHide=true></commonHeader>
		<!-- 内容开始 -->
		<view class="merchantEntry-content">
			<view class="merchantEntry-content-item">
				<text>姓名</text>
				<input @blur="getUsername" type="text" value="" placeholder-style="color:#999;fontSize:28rpx;textAlign:right;" placeholder="注册姓名已读取" />
			</view>
			<view class="merchantEntry-content-item">
				<text>手机号码认证注册</text>
				<input @blur="getPhone" type="text" value="" placeholder-style="color:#999;fontSize:28rpx;textAlign:right;" placeholder="注册手机号已读取" />
			</view>
			<view class="merchantEntry-content-item">
				<text>选择入驻城市/区</text>
				<input @blur="getCity" type="text" value="" placeholder-style="color:#999;fontSize:28rpx;textAlign:right;" placeholder="填写入驻城市/区" />
			</view>
			<view class="merchantEntry-content-item">
				<text>负责人邮箱</text>
				<input @blur="getEmail" type="text" value="" placeholder-style="color:#999;fontSize:28rpx;textAlign:right;" placeholder="填写入负责人邮箱" />
			</view>
			<view class="merchantEntry-content-item">
				<text>上传 营业执照身份证照</text>
			</view>
		</view>
		<!-- 身份证 -->
		<view class="merchantEntry-idCard">
			<view class="item" @tap="zheng">
				<view class="item-top" :class="imgHide?'':'imgHide'">
					<image src="../../static/images/renzheng01.png" mode=""></image>
					<view>
						请上传身份证正面
					</view>
					<text>注：请上传jpg/png格式图片</text>
				</view>
				<view class="item-img" :class="imgHide?'imgHide':''">
					<image :src="imgUrl" mode=""></image>
				</view>
			</view>
			<view class="item" @tap="fan">
				<view class="item-top" :class="imgHide1?'':'imgHide'">
					<image src="../../static/images/renzheng02.png" mode=""></image>
					<view>
						请上传身份证正面
					</view>
					<text>注：请上传jpg/png格式图片</text>
				</view>
				<view class="item-img" :class="imgHide1?'imgHide':''">
					<image :src="imgUrl1" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 上传营业执照 -->
		<view class="merchantEntry-yengye">
			<text>上传营业执照</text>
		</view>
		<view class="merchantEntry-item">
			<view class="item" @tap="huzhao">
				<view class="item-top" :class="imgHide2?'':'imgHide'">
					<image src="../../static/images/yingye.png" mode=""></image>
					<view>
						请上传营业执照
					</view>
					<text>注：请上传jpg/png格式图片</text>
				</view>
				<view class="item-img" :class="imgHide2?'imgHide':''">
					<image :src="imgUrl2" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 保存 -->
		<view class="merchantEntry-saveBtn" @tap="submit">
			提交审核
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
				username:'',
				phone:'',
				email:"",
				city:"",
				imgHide:true,
				imgHide1:true,
				imgHide2:true,
				imgUrl:'',
				imgUrl1:'',
				imgUrl2:'',
			};
		},
		components: {
			commonHeader,
			tabbar
		},
		methods: {
			// 添加图片
			zheng() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: (res)=> {
						this.imgUrl = res.tempFilePaths[0];
						this.imgHide = false;
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			fan() {
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
			huzhao() {
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
			// 姓名
			getUsername(e){
				this.username = e.detail.value;
			},
			// 电话
			getPhone(e){
				this.phone = e.detail.value;
			},
			// 城市
			getCity(e){
				this.city = e.detail.value;
			},
			// 邮箱
			getEmail(e){
				this.email = e.detail.value;
			},
			// 提交
			submit(){
				console.log(this.username,this.phone,this.city,this.email,this.imgUrl,this.imgUrl1,this.imgUrl2)
			}
		}
	}
</script>

<style lang="less">
	.merchantEntry {
		min-height: 100%;
		background: #f6f7f8;
		padding: 90rpx 0;
		/* #ifdef APP-PLUS */
		padding-top: 130rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 130rpx;
		/* #endif */
		.merchantEntry-content {
			background: #fff;
			width: 100%;
			padding-left: 30rpx;
			font-size: 30rpx;

			.merchantEntry-content-item {
				padding-right: 30rpx;
				height: 90rpx;
				line-height: 90rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				input {
					width: 280rpx;
					margin-right: 30rpx;
					text-align: right;
				}
			}

			.merchantEntry-content-item:not(:last-child) {
				border-bottom: 1px solid #e0e0e0;
			}
		}

		.merchantEntry-idCard {
			.item {
				border: 20rpx solid #fff;
				border-radius: 20rpx;
				background: #F6F6F6;
				margin: 30rpx auto 0;
				color: #999;
				text-align: center;
				font-size: 24rpx;
				width: 500rpx;
				height: 302rpx;
				.item-top{
					padding-top: 30rpx;
					image {
						width: 180rpx;
						height: 105rpx;
					}
					
					view {
						color: #333;
						margin-top: 40rpx;
						margin-bottom: 10rpx;
					}
				}
				.item-img{
					width: 100%;
					height: 100%;
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

		.merchantEntry-yengye {
			height: 90rpx;
			line-height: 90rpx;
			font-size: 30rpx;
			background: #fff;
			padding-left: 30rpx;
			margin-top: 30rpx;
		}

		.merchantEntry-item {
			.item {
				border: 20rpx solid #fff;
				border-radius: 20rpx;
				background: #f6f6f6;
				width: 421rpx;
				height: 460rpx;
				margin: 40rpx auto 80rpx;
				text-align: center;
				font-size: 24rpx;
				.item-top{
					padding-top: 110rpx;
					image {
						width: 140rpx;
						height: 161rpx;
					}
					
					view {
						margin-top: 40rpx;
						margin-bottom: 10rpx;
					}
					
					text {
						color: #999;
					}
				}
				.item-img{
					width: 100%;
					height: 100%;
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

		.merchantEntry-saveBtn {
			width: 95%;
			background: linear-gradient(243deg, rgba(255, 153, 96, 1) 0%, rgba(255, 90, 44, 1) 100%);
			height: 88rpx;
			border-radius: 10rpx;
			color: #fff;
			font-size: 40rpx;
			margin: 0 auto 90rpx;
			text-align: center;
			line-height: 88rpx;
			box-shadow: 0 10rpx 20rpx #FF9960;
		}
	}
</style>
