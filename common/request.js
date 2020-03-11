/*
	request封装
	2020-03-09   by   张登
*/
import uniRequest from 'uni-request';

// 判断请求环境
if(process.env.NODE_ENV === 'development'){
    // 开发环境
   // uniRequest.defaults.baseURL = 'http://www.qfl168.cn/'
   // 生产环境
   // #ifdef H5
   uniRequest.defaults.baseURL = '/qfl/'
   // #endif
   // #ifdef APP-PLUS
   uniRequest.defaults.baseURL = 'http://d30013n639.wicp.vip'
   // #endif
}else{
    // 生产环境
	// #ifdef H5
	uniRequest.defaults.baseURL = '/qfl/'
	// #endif
	// #ifdef APP-PLUS
	uniRequest.defaults.baseURL = 'http://d30013n639.wicp.vip'
	// #endif
}
// 跨域请求设置
uniRequest.defaults.withCredentials = true;

// 请求拦截	
uniRequest.interceptors.request.use(
    request => {
		// 所有请求在请求发送之前获取本地token,带上token
		let token =	'';
		uni.getStorage({
			key:'token',
			success:(res)=>{
				token = res.data;
			}
		})
		request.headers.Authorization = 'Bearer ' + token;
        //配置基本信息    
        return request;
    },
    err => {
        console.log('请求失败');
        return Promise.reject(err);
    });

// 响应拦截
uniRequest.interceptors.response.use(response=> {
    console.log('返回进入拦截成功')
    return Promise.resolve(response);
}, error=> {
    console.log('返回进入拦截失败')
    return Promise.reject(error);
});



// 导出两个方法
export default{
	get(url, params = {}) {
		return new Promise((resolve, reject) => {
			uniRequest.get(url, {
					params
				})
				.then(res => {
					resolve(res.data)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	post(url, params = {}) {
		return new Promise((resolve, reject) => {
			uniRequest.post(url, params)
				.then(res => {
					resolve(res.data)
				})
				.catch(err => {
					reject(err)
				})
		})
	}
}