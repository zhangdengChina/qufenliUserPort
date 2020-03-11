<template>
	<view class="mybalance">
		<!-- hader -->
		<commonHeader :headerTitl="headerTitl" xingHide=true></commonHeader>
		<view class="mybalance-date">
			<!-- 日期选择 -->
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
				</view>
			</view>
			<text class="iconfont icon-zuishao"></text>
		</view>
		<view class="mybalance-content">
			<view class="mybalance-content-item" v-for="item in listData" :key="item.id">
				<view class="left">
					<text class="icon">
						<text class="iconfont icon-shouzhimingxicaifuhongbaoyue"></text>
					</text>
					<view class="text">
						<text>{{item.title}}</text>
						<view v-if="item.feiyong">
							手续费{{item.feiyong}}%
						</view>
						<view>
							{{item.date}}
						</view>
					</view>
				</view>
				<view class="right">
					+￥{{item.price}}
				</view>
			</view>
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
			const currentDate = this.getDate({
				format: true
			})
			return {
				headerTitl: "我的余额",
				listData: [{
						"id": "01",
						"title": "提现",
						"feiyong": "",
						"date": "12月30日 08:11",
						"price": "34.00"
					},
					{
						"id": "02",
						"title": "转账",
						"feiyong": "",
						"date": "12月30日 08:11",
						"price": "34.00"
					},
					{
						"id": "03",
						"title": "星币兑换",
						"feiyong": "2",
						"date": "12月30日 08:11",
						"price": "134.00"
					},
					{
						"id": "04",
						"title": "提现",
						"feiyong": "",
						"date": "12月30日 08:11",
						"price": "34.00"
					},
					{
						"id": "05",
						"title": "提现",
						"feiyong": "2",
						"date": "12月30日 08:11",
						"price": "4.00"
					},
					{
						"id": "06",
						"title": "提现",
						"feiyong": "",
						"date": "12月30日 08:11",
						"price": "40.00"
					},
					{
						"id": "07",
						"title": "提现",
						"feiyong": "2",
						"date": "12月30日 08:11",
						"price": "100.00"
					}
				],
				// 日期选择
				date: currentDate,
			}
		},
		methods: {
			// 日期选择
			bindDateChange: function(e) {
				var arr = e.detail.value.split('-');
				this.date = `${arr[0]}年${arr[1]}月${arr[2]}日`;
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}年${month}月${day}日`;
			}
		},
		components: {
			commonHeader,
			tabbar
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
	}
</script>

<style lang="less" scoped>
	.mybalance {
		color: #333;
		padding-top: 95rpx;
		padding-bottom: 140rpx;
		.mybalance-date {
			height: 100rpx;
			background: #f8f6f9;
			padding-left: 30rpx;
			line-height: 100rpx;
			font-size: 36rpx;
			display: flex;
			position: fixed;
			top: 90rpx;
			/* #ifdef APP-PLUS */
			top: 130rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			top: 130rpx;
			/* #endif */
			width: 100%;
			text {
				font-size: 20rpx;
				color: #999;
				margin-left: 15rpx;
			}
		}

		.mybalance-content {
			padding-left: 30rpx;
			padding-top: 90rpx;
			/* #ifdef APP-PLUS */
			padding-top: 130rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			padding-top: 130rpx;
			/* #endif */
			.mybalance-content-item {
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #E0E0E0;
				padding: 30rpx;
				padding-left: 0;

				.left {
					display: flex;
					align-items: center;

					.icon {
						width: 60rpx;
						height: 60rpx;
						background: #f8f5f8;
						border-radius: 50%;
						border: 1px solid #E0E0E0;
						display: flex;
						justify-content: center;
						align-items: center;

						text {
							font-size: 40rpx;
							color: #FF5A32;
						}
					}

					.text {
						margin-left: 20rpx;
						font-size: 30rpx;

						view {
							font-size: 26rpx;
							color: #999;
							margin-top: 10rpx;
						}
					}
				}

				.right {
					font-weight: bold;
					font-size: 36rpx;
				}
			}
		}
	}
</style>
