import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// #ifdef H5
var jweixin = require('jweixin-module');
// import {autograph} from '@/common/apis.js';
// autograph({"url":'https://www.qfl168.cn/static/'}).then(res=>{
// 	console.log(res)
// 	// 引入微信JS-SDK
// 	jweixin.config({
// 		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
// 		appId: 'wxcd3e4c058be3dd03', // 必填，公众号的唯一标识
// 		timestamp: '', // 必填，生成签名的时间戳
// 		nonceStr: '', // 必填，生成签名的随机串
// 		signature: '', // 必填，签名
// 		jsApiList: ['updateAppMessageShareData','updateTimelineShareData','scanQRCode','chooseWXPay'] // 必填，需要使用的JS接口列表
// 	})
// })
Vue.prototype.jweixin = jweixin;
// #endif



const app = new Vue({
	...App
})
app.$mount()
