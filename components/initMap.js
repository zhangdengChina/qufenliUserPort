// 定位
import amap from "./amap-wx.js";
console.log("初始化高德SDK")
// 调用高德SDK
const amapPlugin = new amap.AMapWX({
	key: "6a827b40e5822fcbde20f50916a59522"
});
export default amapPlugin;
