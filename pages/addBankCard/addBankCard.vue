<template>
	<view class="addBankCard">
		<!-- header -->
		<commonHeader headerTitl="提现账户绑定" xingHide=true lingHide=true fenxiangHide=true></commonHeader>
		<view class="addTips">
			添加银行卡
		</view>
		<!-- 内容 -->
		<view class="addBankCard-content">
			<view class="item">
				<text>姓名</text>
				<input @blur="getName" type="text" value="" placeholder="请添加卡号姓名" placeholder-style="color:#999;fontSize:28rpx;textAlign:right;"/>
			</view>
			<view class="item">
				<text>卡号</text>
				<input @blur="getCard" maxlength="19" type="text" value="" placeholder="请添加银行卡号" placeholder-style="color:#999;fontSize:28rpx;textAlign:right;"/>
			</view>
		</view>
		<view class="submit-btn" @tap="addCard">
			添加银行卡
		</view>
	</view>
</template>

<script>
	import commonHeader from"@/components/common-header/common-header";
	// 验证银行卡
	import bankCardAttribution from"@/components/bankCardAttribution.js";
	export default {
		data() {
			return {
				username:'',
				card:'',
				usernameState:false,
				cardState:false
			};
		},
		components:{
			commonHeader
		},
		methods:{
			// 获取姓名
			getName(e){
				var nameReg = /^[\u4E00-\u9FA5]{2,4}$/;
				if(nameReg.test(e.detail.value)){
					this.username = e.detail.value;
					this.usernameState = true;
				}else if(!e.detail.value.length) {
					this.usernameState = false;
					return false;
				}else{
					this.usernameState = false;
					uni.showToast({
						title:"请输入正确姓名",
						icon:'none'
					})
				}
			},
			// 获取卡号
			getCard(e){
				 var regExp = /^([1-9]{1})(\d{15}|\d{18})$/;
				 // var arr = regExp.test(e.detail.value);
				 if(regExp.test(e.detail.value)){
					 this.cardState = true;
					 this.card = e.detail.value;
				 }else if(!e.detail.value.length){
					 this.cardState = false;
					 return false
				 } else{
					this.cardState = false;
					uni.showToast({
						title:"请核对卡号",
						icon:'none'
					})
				 }
			},
			// 添加银行卡
			addCard(){
				if(this.cardState&&this.usernameState){
					console.log(this.username,this.card)
					var cardList = bankCardAttribution(this.card);
					console.log(bankCardAttribution(this.card));
					uni.showToast({
						title:'添加成功'
					})
					getApp().globalData.cardStata = true;
					uni.navigateTo({
						url:'../myCard/myCard'
					})
				}else{
					uni.showToast({
						title:'请先输入正确信息',
						icon:'none'
					})
				}
			}
		}
	}
</script>

<style lang="less">
	.addBankCard{
		background: #f7f7f7;
		padding-top: 120rpx;
		/* #ifdef APP-PLUS */
		padding-top: 160rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 160rpx;
		/* #endif */
		height: 100%;
		color: #333;
		.addTips{
			font-size: 40rpx;
			font-weight: bold;
			padding-left: 30rpx;
		}
		.addBankCard-content{
			padding-left: 30rpx;
			background: #fff;
			margin-top: 30rpx;
			.item{
				height: 90rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 30rpx;
				border-bottom: 1px solid #e0e0e0;
				input{
					width: 400rpx;
					margin-right: 30rpx;
					text-align: right;
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
			margin: 250rpx auto 90rpx;
			text-align: center;
			line-height: 88rpx;
			box-shadow: 0 10rpx 20rpx #FF9960;
		}
	}
</style>
