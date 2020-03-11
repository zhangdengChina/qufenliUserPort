<script>
	import {autograph} from '@/common/apis.js';
	// #ifdef H5
	var jweixin = require('jweixin-module');
	// #endif
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			city:[],
			isPwd:false,
			pwd:'',
			cardStata:true,
			openid:''
		},
		mounted() {
			console.log('进入')
			// #ifdef H5
			var appid,timestamp,nonceStr,signature;
			autograph({"url":'https://www.qfl168.cn/static/'}).then(res=>{
				console.log(res)
				// 引入微信JS-SDK
				appid = res.appid;
				timestamp = res.timestamp;
				nonceStr = res.nonceStr;
				signature = res.signature;
			})
			jweixin.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: appid, // 必填，公众号的唯一标识
				timestamp: timestamp, // 必填，生成签名的时间戳
				nonceStr: nonceStr, // 必填，生成签名的随机串
				signature: signature, // 必填，签名
				jsApiList: ['updateAppMessageShareData','updateTimelineShareData','scanQRCode','chooseWXPay'] // 必填，需要使用的JS接口列表
			})
			// #endif
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/fonts/iconfont.css");
	uni-page-head{
		display: none;
	}
	page{
		height: 100%;
		font-family: PingFangSC-Semibold, PingFang SC;
	}
</style>
