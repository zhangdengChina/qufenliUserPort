<template>
	<view class="shopPage">
		<view class="shopPage-Top">
			<view class="shopPage-Top-header">
				<view class="left">
					<text class="iconfont icon-zuojiantou" @tap="backPage"></text>
				</view>
				<view class="right">
					<view>
						<text class="iconfont icon-xingxing"></text>
					</view>
					<view>
						<text class="iconfont icon-lingdang-xianxing" @tap="goNews"></text>
					</view>
					<view>
						<text class="iconfont icon-fenxiang" @tap="maskState=true"></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 标题 -->
		<view class="shopPage-shopTitle">
			<view class="shopPage-shopTitle-top">
				<view class="img">
					<image src="../../static/images/cartLOGO.png" mode=""></image>
				</view>
				<view class="title">
					<text>客串出品烧烤岳麓店</text>
					<view>
						联系电话：13599994444
						<image style="marginLeft: 10rpx;" src="../../static/images/phone.jpg" mode="" @tap="callPhone"></image>
						<image src="../../static/images/weixin.jpg" mode="" @tap="weixinMaskHide=false"></image>
					</view>
				</view>
			</view>
			<view class="shopPage-shopTitle-content">
				<view class="address">
					地址：湖南省长沙市岳麓区某某小区40栋904 <text class="iconfont icon-yiliaohangyedeICON-" @tap="goMap"></text>
				</view>
				<view class="tips">
					<text>公告：距离圣诞节嗨翻天天活动还有3天 </text>
					<text>查看更多 ></text>
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="shopPage-content">
			<!-- 左侧 -->
			<view class="shopPage-content-left">
				<scroll-view scroll-y="true" :style="{ 'height':scrollHeight }">
					<view v-for="(item,index) in mainArray" :key="index" :class="{'leftActive':index==leftIndex}" :data-index="index"
					 @tap="leftTap">
						<text class="iconfont" :class="item.icon" :style="{'color': item.color}"></text>
						{{item.title}}
					</view>
				</scroll-view>
			</view>
			<!-- 右侧 -->
			<view class="shopPage-content-right">
				<scroll-view scroll-y="true" :style="{ 'height':scrollHeight }" @scroll="mainScroll" :scroll-into-view="scrollInto"
				 scroll-with-animation="true" @touchstart="mainTouch" id="scroll-el">
					<view v-for="(item,index) in mainArray" :key="index" id="rightArr">
						<view class="shopPage-content-right-title" :id="'item-'+index">
							<view>{{item.title}}</view>
						</view>
						<view class="shopPage-content-right-item" v-for="(item1,index1) in item.list" :key="index1">
							<view class="left" @tap="goDetails">
								<image :src="item1.imgUrl" mode=""></image>
							</view>
							<view class="right">
								<text class="title" @tap="goDetails">{{item1.title}}</text>
								<view class="text" @tap="goDetails">
									<text>月售{{item1.monthSale}}</text>
									<text>好评率{{item1.praise}}%</text>
								</view>
								<view class="addGoods">
									<view @tap="goDetails" class="addGoods-left">
										¥<text>{{item1.price}}</text>
									</view>
									<view class="addGoods-right">
										<text v-if="item1.num" @tap="changeNum(item1.id,-1)" class="text">-</text>
										<text v-if="item1.num">{{item1.num}}</text>
										<text @tap="changeNum(item1.id,+1)" class="text">+</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 购物车 -->
		<view class="shopPage-footer">
			<view class="shopPage-footer-left" @tap="hideCartMask=!hideCartMask">
				<view class="icon">
					<view class="">
						<text class="iconfont icon-gouwucheman"></text>
					</view>
				</view>
				<view class="text" v-if="titleAll">
					共{{selectArr.length}}件商品总计 ￥{{titleAll}}
				</view>
				<view class="text" v-if="!titleAll">
					未选购商品
				</view>
			</view>
			<view class="shopPage-footer-right" @tap="goSettlement">
				去结算
			</view>
		</view>
		<!-- 购物车蒙层 -->
		<view class="cartMask" :class="hideCartMask?'hideCartMask':''">
			<view class="cartMask-top" @tap="hideCartMask=true">

			</view>
			<view class="cartMask-content">
				<view class="cartMask-content-top">
					<view class="left">
						已选商品
					</view>
					<view class="right" @tap="clearCart">
						<text class="iconfont icon-qingkongshanchu"></text>清空
					</view>
				</view>
				<view class="cartMask-content-item">
					<view class="item" v-for="(item,index) in selectArr" :key="index">
						<view class="item-left">
							{{item.title}}
						</view>
						<view class="item-right">
							<view class="item-right-price">
								￥<text>{{item.price}}</text>
							</view>
							<view class="item-right-num">
								<text class="iconfont icon-jian1" @tap="changeNum(item.id,-1)"></text>
								{{item.num}}
								<text class="iconfont icon-jia1" @tap="changeNum(item.id,+1)"></text>
							</view>
						</view>
					</view>
				</view>

				<view class="cartMask-content-other">
					<text>餐盒</text>
					<text>5</text>
				</view>
			</view>
		</view>
		<!-- 添加微信 -->
		<view class="weixinMask" :class="weixinMaskHide?'weixinMaskHide':''">
			<view class="weixinMask-content">
				<view class="title">
					添加客服微信
					<text class="iconfont icon-quxiao" @tap="weixinMaskHide=true"></text>
				</view>
				<!-- #ifdef APP-PLUS -->
				<view class="one">
					<text>步骤</text>
				</view>
				<view class="text">
					<view class="">
						复制微信号，添加客服为好友
					</view>
					<view class="">
						微信号：Zhang1132741223
					</view>
				</view>
				<view class="copy" @tap="copy">
					复制微信号
				</view>
				
				<view class="btn">
					<text @tap="addWeiXin">打开微信</text>
					<text @tap="weixinMaskHide=true">取消</text>
				</view>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view class="h5wx">
					<text class="iconfont icon-shanchu" @tap="weixinMaskHide=true"></text>
					<image src="../../static/images/1583633378.jpg" mode=""></image>
					<view class="h5tips">
						<text>长按识别图中二维码</text>
					</view>
				</view>
				<!-- #endif -->
			</view>
		</view>
		<!-- 分享提示蒙层 -->
		<view class="mask" :class="maskState?'':'maskShow'">
			<view class="mask-top" @tap="maskState=false">
				
			</view>
			<view class="mask-content">
				<view class="mask-content-cancel">
					<text class="iconfont icon-shanchu" @tap="maskState=false"></text>
				</view>
				<view class="mask-content-title">
					——<text>分享到</text>——
				</view>
				<view class="mask-content-item">
					<view class="weixin" @tap="share(1)">
						<view class="iconfont icon-weixin">
							
						</view>
						<text>微信</text>
					</view>
					<view class="pengyouquan" @tap="share(2)">
						<view>
							<image src="../../static/images/pengyouquan.png" mode=""></image>
						</view>
						<text>朋友圈</text>
					</view>
					<view class="weibo" @tap="share(3)">
						<view>
							<text class="iconfont icon-weibo"></text>
						</view>
						<text>微博</text>
					</view>
					<view class="qq" @tap="share(4)">
						<view>
							<text class="iconfont icon-qq"></text>
						</view>
						<text>QQ</text>
					</view>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	// #ifdef H5
	// 复制
	import h5Copy from '@/components/junyi-h5-copy/junyi-h5-copy.js';
	// #endif
	export default {
		data() {
			return {
				scrollHeight: '100%',
				mainArray: [{
						title: "热销榜",
						icon: "icon-huore-s",
						color: "#FF5904",
						list: [{
								id: 1,
								imgUrl: "../../static/images/content01.png",
								title: "黑胡椒意大利面",
								monthSale: "214",
								praise: "96",
								price: "9.9",
								num: 0
							},
							{
								id: 2,
								imgUrl: "../../static/images/demo01.webp",
								title: "散子豆腐脑",
								monthSale: "108",
								praise: "96",
								price: "19.9",
								num: 0
							}
						]
					},
					{
						title: "优惠",
						icon: "icon-youhuiquan",
						color: "#FF9223",
						list: [{
							id: 3,
							imgUrl: "../../static/images/demo02.webp",
							title: "肥肠豆腐脑",
							monthSale: "50",
							praise: "96",
							price: "22.9",
							num: 0
						}]
					},
					{
						title: "黄金系列",
						list: [{
								id: 4,
								imgUrl: "../../static/images/content01.png",
								title: "黑胡椒意大利面",
								monthSale: "214",
								praise: "96",
								price: "30",
								num: 0
							},
							{
								id: 5,
								imgUrl: "../../static/images/content01.png",
								title: "黑胡椒意大利面",
								monthSale: "214",
								praise: "96",
								price: "17",
								num: 0
							}
						]
					}, {
						title: "客串新品",
						list: [{
								id: 6,
								imgUrl: "../../static/images/content01.png",
								title: "黑胡椒意大利面",
								monthSale: "214",
								praise: "96",
								price: "10",
								num: 0
							},
							{
								id: 7,
								imgUrl: "../../static/images/content01.png",
								title: "黑胡椒意大利面",
								monthSale: "214",
								praise: "96",
								price: "10",
								num: 0
							},
							{
								id: 8,
								imgUrl: "../../static/images/content01.png",
								title: "黑胡椒意大利面",
								monthSale: "214",
								praise: "96",
								price: "10",
								num: 0
							}
						]
					},
					{
						title: "匠心烧烤",
						list: [{
								id: 9,
								imgUrl: "../../static/images/content01.png",
								title: "黑胡椒意大利面",
								monthSale: "214",
								praise: "96",
								price: "10",
								num: 0
							},
							{
								id: 10,
								imgUrl: "../../static/images/content01.png",
								title: "黑胡椒意大利面",
								monthSale: "214",
								praise: "96",
								price: "10",
								num: 0
							},
							{
								id: 11,
								imgUrl: "../../static/images/content01.png",
								title: "黑胡椒意大利面",
								monthSale: "214",
								praise: "96",
								price: "10",
								num: 0
							}
						]
					},
					{
						title: "早酒凉卤",
						list: [{
								id: 12,
								imgUrl: "../../static/images/content01.png",
								title: "黑胡椒意大利面",
								monthSale: "214",
								praise: "96",
								price: "10",
								num: 0
							},
							{
								id: 13,
								imgUrl: "../../static/images/content01.png",
								title: "黑胡椒意大利面",
								monthSale: "214",
								praise: "96",
								price: "10",
								num: 0
							},
							{
								id: 14,
								imgUrl: "../../static/images/content01.png",
								title: "黑胡椒意大利面",
								monthSale: "214",
								praise: "96",
								price: "10",
								num: 0
							}
						]
					}
				],
				leftIndex: 0,
				scrollInto: '',
				topArr: [],
				isMainScroll: false,
				rightTopArr: [],
				shopArr: [],
				hideCartMask: true,
				weixinMaskHide: true,
				maskState: false
			};
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					/* 设置当前滚动容器的高，若非窗口的告诉，请自行修改 */
					this.scrollHeight = `${res.windowHeight*0.65}px`;
				}
			});
		},
		components:{
			// #ifdef H5
			h5Copy
			// #endif
		},
		methods: {
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
				uni.navigateBack(1)
			},
			// 前往详情页
			goDetails() {
				uni.navigateTo({
					url: "../goodsDetails/goodsDetails"
				})
			},
			// 点击切换左侧状态
			leftTap(e) {
				let index = e.currentTarget.dataset.index;
				this.isMainScroll = false;
				this.leftIndex = Number(index);
				this.scrollInto = `item-${index}`;
			},
			/* 主区域滚动监听 */
			mainScroll(e) {
				if (!this.isMainScroll) {
					return;
				}
				let top = e.detail.scrollTop;
				let index = -1;

				if (top >= this.topArr[this.topArr.length - 1]) {
					index = this.topArr.length - 1;
				} else {
					index = this.topArr.findIndex((item, index) => {
						return this.topArr[index + 1] >= top;
					});
				}
				this.leftIndex = (index < 0 ? 0 : index);
				// 右连左
				for (var i = 0; i < this.rightTopArr.length; i++) {
					// #ifdef H5
					if (top > this.rightTopArr[i] && top < this.rightTopArr[i + 1]) {
						this.leftIndex = i;
					}
					// #endif
					if (top > this.rightTopArr[i] && top < this.rightTopArr[i + 1]) {
						this.leftIndex = i;
					}
				}
			},
			/* 主区域触摸 */
			mainTouch() {
				this.isMainScroll = true;
			},
			//获取距离顶部的高度
			getScrollTop(selector) {
				return new Promise((resolve, reject) => {
					let query = uni.createSelectorQuery().in(this);
					query.select(selector + '').boundingClientRect(data => {
						resolve(data.top)
					}).exec();
				})
			},
			// 获取右侧高度数组
			async getTopArr() {
				/* Promise 对象数组 */
				let p_arr = [];

				/* 遍历数据，创建相应的 Promise 数组数据 */
				for (let i = 0; i < this.mainArray.length; i++) {
					const resu = await this.getScrollTop(`#item-${i}`)
					p_arr.push(resu)
				}
			
				this.rightTopArr = p_arr;
				/* 主区域滚动容器的顶部距离 */
				this.getScrollTop("#scroll-el").then((res) => {

					let top = res;
					// #ifdef H5
					top += 43; //因固定提示块的需求，H5的默认标题栏是44px
					// #endif

					/* 所有节点信息返回后调用该方法 */
					Promise.all(p_arr).then((data) => {
						this.tipsTop = `${data}px`;
						this.topArr = data;
					});
				})
			},
			// 拨打电话
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: '17729848359' //仅为示例
				});
			},
			// 打开微信
			addWeiXin() {
				let _this = this;
				// 判断平台 
				// #ifdef APP-PLUS
				if (plus.os.name == 'Android') {
					plus.runtime.launchApplication({
							name:'微信',
							pname: 'com.tencent.mm',
							scheme: 'weixin://'  
							
						},	
						function(e) {
							console.log('Open system default browser failed: ' + e.message);
							uni.showToast({
								title:'您可能还未安装该应用',
								duration:2000,
								icon:'none'
							})
						}	
					);	
				}
				// #endif

			},
			// 复制微信号
			copy() {
				// #ifdef APP-PLUS
				uni.setClipboardData({
					data: 'Zhang1132741223',
					success(){
						uni.showToast({
							title: '复制成功',
						})
					},
					fail() {
						uni.showToast({
							title: '复制失败',
						})
					}
				});
				// #endif
				// #ifdef H5
				let content = 'Zhang1132741223' // 复制内容，必须字符串，数字需要转换为字符串
				const result = h5Copy(content)
				if (result === true) {
					uni.showToast({
						title: '复制成功',
					})
				} else {
					uni.showToast({
						title: '复制失败',
						icon: 'none'
					})
				}
				// #endif
			},
			// 前往地图
			goMap() {

				uni.navigateTo({
					url: '../address/address'
				})
			},
			// 改变数量
			changeNum(id, num) {
				console.log(id, num)
				// 改变数量	
				this.mainArray.map(item => {
					item.list.map(item1 => {
						if (item1.id == id) {
							item1.num += num;
						}
					})
				})
			},
			// 去结算
			goSettlement() {
				console.log(111)
				if (this.titleAll) {
					uni.navigateTo({
						url: "../settlement/settlement"
					})
				} else {
					uni.showToast({
						title: "请先选购商品",
						duration: 2000,
						icon: 'none'
					})
				}
			},
			// 清空购物车
			clearCart() {
				// 改变数量
				this.mainArray.map(item => {
					item.list.map(item1 => {
						item1.num = 0;
					})
				})
				this.hideCartMask = true;
			},
			// 进入消息
			goNews(){
				uni.navigateTo({
					url:"../../pages/news/news"
				})
			},
			// 分享功能开始
			share(index){
				console.log(index)
				// 分享到微信
				if(index===1){
					uni.share({
					    provider: "weixin",
					    scene: "WXSceneSession",
					    type: 0,
					    href: "http://uniapp.dcloud.io/",
					    title: "uni-app分享",
					    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					    success: function (res) {
					        console.log("success:" + JSON.stringify(res));
					    },
					    fail: function (err) {
					        console.log("fail:" + JSON.stringify(err));
					    }
					});
				}
				// 分享朋友圈
				if(index===2){
					uni.share({
					    provider: "weixin",
					    scene: "WXSenceTimeline",
					    type: 0,
					    href: "http://uniapp.dcloud.io/",
					    title: "uni-app分享",
					    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					    success: function (res) {
					        console.log("success:" + JSON.stringify(res));
					    },
					    fail: function (err) {
					        console.log("fail:" + JSON.stringify(err));
					    }
					});
				}
				// 分享微博
				if(index===3){
					uni.share({
					    provider: "sinaweibo",
					    type: 0,
					    href: "http://uniapp.dcloud.io/",
					    title: "uni-app分享",
					    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					    imageUrl: "../../static/images/youhui.png",
					    success: function (res) {
					        console.log("success:" + JSON.stringify(res));
					    },
					    fail: function (err) {
					        console.log("fail:" + JSON.stringify(err));
					    }
					});
				}
				// 分享QQ
				if(index===4){
					uni.share({
					    provider: "qq",
					    type: 1,
					    href: "http://uniapp.dcloud.io/",
					    title: "uni-app分享",	// qq分享必填
					    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					    imageUrl: "../../static/logo.png",
					    success: function (res) {
					        console.log("success:" + JSON.stringify(res));
					    },
					    fail: function (err) {
					        console.log("fail:" + JSON.stringify(err));
					    }
					});
				}
			}
		},
		mounted() {
			this.getTopArr();

		},
		computed: {
			// 筛选数量已选
			selectArr() {
				var arr = [];
				this.mainArray.map((item, index) => {
					item.list.map((item1, index1) => {
						if (item1.num) {
							arr.push(item1);
						}
					})
				})
				return arr;
			},
			// 计算总价
			titleAll() {
				var all = 0;
				this.selectArr.map(item => {
					all += item.num * item.price;
				})
				return all;
			}
		}
	}
</script>

<style lang="less">
	.shopPage {
		color: #333;
		position: relative;
		height: 100%;
		.shopPage-Top {
			height: 250rpx;
			width: 100%;
			background: url(../../static/images/demo03.webp);
			background-size: 100%;
			/* #ifdef APP-PLUS */
			padding-top: 40rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			padding: 40rpx;

			/* #endif */
			.shopPage-Top-header {
				height: 100rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #fff;

				.left {
					margin-left: 30rpx;
				}

				.right {
					display: flex;

					>view {
						width: 50rpx;
						height: 50rpx;
						border-radius: 50%;
						background: rgba(1, 1, 1, 0.3);
						display: flex;
						align-items: center;
						justify-content: center;
						margin-right: 20rpx;

						text {}
					}
				}

				.iconfont {
					font-size: 32rpx;
				}
			}
		}

		.shopPage-shopTitle {
			height: 200rpx;
			width: 90%;
			margin: -120rpx auto 0;
			border-radius: 20rpx;
			background: #fff;
			box-shadow: 0 10rpx 20rpx #999;
			padding: 20rpx;

			.shopPage-shopTitle-top {
				display: flex;

				.img {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					margin-right: 30rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.title {
					text {
						font-size: 36rpx;
						font-weight: bold;
					}

					view {
						font-size: 26rpx;
						color: #666;
						margin-top: 8rpx;
						display: flex;
						align-items: center;

						image {
							width: 40rpx;
							height: 40rpx;
							margin-left: 20rpx;
						}
					}
				}
			}

			.shopPage-shopTitle-content {
				color: #666;
				font-size: 24rpx;

				.address {
					margin-top: 15rpx;

					text {
						color: #FF4A1A;
						margin-left: 15rpx;
					}
				}

				.tips {
					margin-top: 15rpx;
					display: flex;
					justify-content: space-between;

					text:last-child {
						font-size: 20rpx;
						color: #999;
					}

				}
			}
		}

		.shopPage-content {
			display: flex;
			margin-top: 30rpx;
			height: 66%;

			.shopPage-content-left {
				view {
					width: 160rpx;
					height: 100rpx;
					background: #f8f6f9;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;
					font-weight: bold;

					text {
						margin-right: 10rpx;
					}
				}

				.leftActive {
					background: #fff;
				}
			}

			.shopPage-content-right {
				flex: 1;
				padding-left: 20rpx;

				.shopPage-content-right-title {
					font-size: 32rpx;
					margin-top: 20rpx;
					color: #FF5A32;
				}

				.shopPage-content-right-item:not(:first-child) {
					margin-top: 40rpx;
				}

				.shopPage-content-right-item {

					display: flex;

					.left {
						width: 180rpx;
						height: 152rpx;
						border-radius: 20rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.right {
						padding: 0 20rpx;
						flex: 1;
						margin-top: -10rpx;

						.title {
							font-size: 30rpx;
							font-weight: bold;
						}

						.text {
							margin: 10rpx 0 20rpx 0;
							font-size: 24rpx;
							color: #666;

							text:last-child {
								margin-left: 30rpx;
							}
						}

						.addGoods {
							display: flex;
							justify-content: space-between;
							align-items: center;

							.addGoods-left {
								color: #FF5A32;
								font-size: 28rpx;

								text {
									font-size: 40rpx;
								}
							}

							.addGoods-right {
								display: flex;
								align-items: center;
								justify-content: center;

								text {
									color: #000;
								}

								.text {
									background: #FF5A32;
									width: 48rpx;
									height: 48rpx;
									border-radius: 50%;
									color: #fff;
									font-size: 60rpx;
									line-height: 38rpx;
									text-align: center;
								}

								text:first-child {
									margin-right: 20rpx;
									background: 0;
									color: #FF5A32;
									border: 1px solid #FF5A32;
								}

								text:last-child {
									margin-left: 20rpx;
								}
							}
						}
					}
				}
			}
		}

		.shopPage-footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100rpx;
			width: 100%;
			position: fixed;
			bottom: 0;
			background: #fff;
			box-shadow: 20rpx 0 20rpx #999;
			z-index: 9999;

			.shopPage-footer-left {
				display: flex;
				margin-left: 50rpx;

				.icon {
					width: 105rpx;
					height: 105rpx;
					border-radius: 50%;
					background: #fee6e3;
					margin-top: -30rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					view {
						width: 90rpx;
						height: 90rpx;
						background: linear-gradient(117deg, rgba(255, 90, 43, 1) 0%, rgba(255, 89, 52, 1) 36%, rgba(255, 156, 31, 1) 100%);
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;

						text {
							color: #fff;
							font-size: 50rpx;
						}
					}
				}

				.text {
					font-size: 28rpx;
					color: #666;
					display: flex;
					align-items: center;
					margin-left: 20rpx;
				}
			}

			.shopPage-footer-right {
				width: 219rpx;
				height: 100%;
				background: #FF6B37;
				color: #fff;
				font-size: 32rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.hideCartMask {
			display: none;
		}

		// 购物车蒙层
		.cartMask {
			position: fixed;
			width: 100%;
			height: 100%;
			background: rgba(1, 1, 1, 0.5);
			z-index: 999;
			font-size: 30rpx;
			top: 0;

			.cartMask-top {
				min-height: 80%;
				width: 100%;
				position: absolute;
				top: 0;
				z-index: 900;
			}

			.cartMask-content {
				max-height: 50%;
				overflow-y: auto;
				color: #333;
				position: absolute;
				bottom: 100rpx;
				width: 100%;
				z-index: 901;

				.cartMask-content-top {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20rpx 30rpx;
					background: #eceff1;
					color: #666;

					.iconfont {
						margin-right: 10rpx;
					}
				}

				.cartMask-content-item {
					.item {
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 0 30rpx;
						height: 100rpx;
						background: #fff;
						border-bottom: 1px solid #eee;

						.item-left {}

						.item-right {
							display: flex;
							align-items: center;

							.item-right-price {
								color: #ff5339;
								font-size: 20rpx;
								font-weight: bold;
								margin-right: 50rpx;

								text {
									font-size: 30rpx;
								}
							}

							.item-right-num {
								display: flex;
								align-items: center;

								text {
									color: #ff5532;
									font-size: 46rpx;
								}

								text:first-child {
									margin-right: 20rpx;
								}

								text:last-child {
									margin-left: 20rpx;
								}
							}
						}
					}
				}

				.cartMask-content-other {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20rpx 30rpx;
					background: #fff;
					border-bottom: 1px solid #eee;
					text:last-child {
						color: #ff5339;
						font-weight: bold;
						margin-right: 170rpx;
					}
				}
			}
		}
	
		// 添加微信
		.weixinMask {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 9999;
			background: rgba(1, 1, 1, 0.5);

			.weixinMask-content {
				background: #fff;
				border-radius: 20rpx;
				width: 65%;
				height: 460rpx;
				position: absolute;
				overflow: hidden;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				margin: auto;
				color: #999;
				font-size: 26rpx;
				padding: 0 30rpx;

				.title {
					text-align: center;
					font-size: 32rpx;
					color: #4e4e4e;
					padding: 30rpx 0 15rpx 0;

					text {
						position: absolute;
						right: 20rpx;
						top: 20rpx;
						font-size: 50rpx;
					}
				}
				/* #ifdef APP-PLUS */
				
				.one {
					border-top: 1px solid #f2f2f2;
					margin-top: 40rpx;
					display: flex;
				
					text {
						width: 140rpx;
						background: #fff;
						margin: -20rpx auto 0;
						text-align: center;
					}
				}
				
				.tips {
					text-align: center;
					margin-top: 40rpx;
				
					view {
						margin-bottom: 10rpx;
					}
				}
				
				.img {
					width: 240rpx;
					height: 240rpx;
					overflow: hidden;
					margin: auto;
				
					image {
						width: 100%;
						height: 100%;
					}
				}
				
				.text {
					text-align: center;
					margin-top: 20rpx;
				
					view {
						margin-bottom: 10rpx;
					}
				}
				
				.copy {
					text-align: center;
					color: #4081d6;
					margin-top: 10rpx;
				}
				
				.btn {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					display: flex;
				
					text {
						width: 50%;
						text-align: center;
						padding: 20rpx 0;
						background: #ccc;
						color: #fff;
						font-size: 30rpx;
					}
				
					text:first-child {
						background: #4CD964;
					}
				}
				/* #endif */
				/* #ifdef H5 */
				.h5wx{
					text-align: center;
					image{
						width: 300rpx;
						height: 300rpx;
					}
					.icon-shanchu{
						position: absolute;
						font-size: 50rpx;
						right: 0;
						top: 0;
					}
				}
				/* #endif */
			}
		}

		.weixinMaskHide {
			display: none;
		}
		
		// 蒙层
		// 显示隐藏
		.maskShow {
			display: none;
		}
		
		.mask {
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background: rgba(0, 0, 0, 0.8);
			z-index: 9999999;
			font-size: 30rpx;
			.mask-top{
				position: absolute;
				top: 0;
				min-height: 75%;
				width: 100%;
			}
			.mask-content{
				height: 376rpx;
				width: 100%;
				background: #fff;
				position: absolute;
				bottom: 0;
				.mask-content-cancel{
					display: flex;
					padding: 30rpx;
					justify-content: flex-end;
					text{
						font-size: 40rpx;
						color: #999;
					}
				}
				.mask-content-title{
					text-align: center;
					font-weight: bold;
					color: #D8D8D8;
					text{
						color: #000;
						font-size: 30rpx;
						margin: 0 20rpx;
					}
				}
				.mask-content-item{
					margin-top: 40rpx;
					display: flex;
					color: #666;
					font-size: 28rpx;
					text-align: center;
					justify-content: space-around;
					>view >view{
						margin-bottom: 10rpx;
					}
					.iconfont{font-size: 60rpx;}
					image{width: 80rpx;height: 80rpx;}
					.weixin .iconfont{
						font-size: 100rpx;
						color: #1bac19;
					}
					.pengyouquan{
						view{
							width: 100rpx;
							height: 100rpx;
							border-radius: 50%;
							border: 1px solid #e0e0e0;
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
					.weibo,.qq{
						view{width: 100rpx;
							height: 100rpx;
							border-radius: 50%;
							display: flex;
							align-items: center;
							justify-content: center;
							color: #fff;}
					}
					.weibo view{background: #FF9206;}
					.qq view{background: #4DCFFC;}
				}
			}
		}
	}
</style>
