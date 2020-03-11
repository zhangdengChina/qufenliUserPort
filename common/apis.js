// 引入封装的request
import request from './request.js';


// 1.公众号签名
export const autograph = params => request.post('/api/ordersummary/official/sign', params);
// 2.账号密码登录
export const login = params => request.post('/api/ordersummary/login/account', params);
// 3.微信登陆
export const wxLogin = params => request.post('/api/ordersummary/wx/login',params);
// 4.手机验证码发送
export const sendCode = params => request.post('/api/ordersummary/mobile',params);
// 5.支付宝支付
export const alipay = params => request.post('/api/ordersummary/ali/pay',params);
// 6.微信支付
export const wxpay = params => request.post('/api/ordersummary/wx/pay',params);
// 7.账号注册
export const register = params => request.post('/api/ordersummary/register',params);
// 8.根据用户位置推送最近商家
export const pushShop = params => request.post('/api/ordersummary/push/vendor',params);
// 9.商品详情
export const shopDetails = params => request.post('/api/ordersummary/goods',params);
// 10.订单结算
export const orderPay = params => request.post('/api/ordersummary/pay',params);
// 11.我的订单
export const myOrder = params => request.post('/api/ordersummary/myOrder',params);
// 12.设置登录(交易)密码
export const setPassword = params => request.post('/api/userinfo/edit',params);

// 4.我的余额
export const myBalance = params => request.post('/api/balancelog/list',params);
// 5.我的星币
export const myPentacle = params => request.post('/api/starcoinslog/list',params);
// 6.我的消费金
export const myConsume = params => request.post('/api/usercoupons/list',params);
// 7.手机号变更
export const phoneChange = params => request.post('/api/userinfo/edit',params);
// 8.个人资料
export const userinfo = params => request.post('/api/userinfo/edit',params);
