(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-localPreferences-localPreferences","components-common-tabbar-common-tabbar"],{"2b6c":function(e,t,n){"use strict";n.r(t);var i=n("6238"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},"31c0":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"common-tabbar"},e._l(e.tabList,function(t){return n("v-uni-view",{key:t.id,staticClass:"item",class:e.active==t.id?"active":"",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.goPage(t.id)}}},[n("v-uni-text",{staticClass:"iconfont",class:t.icon}),n("v-uni-view",[e._v(e._s(t.text))])],1)}),1)},r=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i})},3600:function(e,t,n){"use strict";n.r(t);var i=n("31c0"),a=n("bf3f");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("d5af");var c,o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"e86c0c78",null,!1,i["a"],c);t["default"]=s.exports},"402f":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.banner-container[data-v-57c778ec]{width:100vw;height:%?426?%}.banner-container .image-container[data-v-57c778ec]{box-sizing:border-box;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.banner-container .image-container .slide-image[data-v-57c778ec]{width:%?550?%;height:%?328?%;z-index:200}.banner-container .item-left[data-v-57c778ec]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:%?56?% %?26?% 0 0}.banner-container .item-right[data-v-57c778ec]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:%?56?% 0 0 %?26?%}.banner-container .item-center[data-v-57c778ec]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?56?% 0 0 0}.banner-container .desc-wrap[data-v-57c778ec]{box-sizing:border-box;width:100%;height:%?98?%;padding:%?24?% %?66?% 0}.banner-container .desc-wrap .title[data-v-57c778ec]{width:100%;height:%?42?%;line-height:%?42?%;color:#222;font-size:%?30?%;font-family:PingFangTC-Regular;font-weight:600;text-align:left}.banner-container .desc-wrap .desc[data-v-57c778ec]{margin-top:%?4?%;width:100%;height:%?34?%;line-height:%?34?%;color:#999;font-size:%?24?%;font-family:PingFangTC-Regular;text-align:left}@keyframes descAnimation-data-v-57c778ec{0%{opacity:1}25%{opacity:.5}50%{opacity:0}75%{opacity:.5}to{opacity:1}}@-webkit-keyframes descAnimation-data-v-57c778ec{0%{opacity:1}25%{opacity:.5}50%{opacity:0}75%{opacity:.5}to{opacity:1}}.banner-container .hideAndShowDesc[data-v-57c778ec]{animation:descAnimation-data-v-57c778ec .3s ease 1;-webkit-animation:descAnimation-data-v-57c778ec .3s ease 1}',""])},"521e":function(e,t,n){"use strict";n.r(t);var i=n("67bb8"),a=n("90e3");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("acb5");var c,o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"57c778ec",null,!1,i["a"],c);t["default"]=s.exports},"53a2":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".localPreferences[data-v-63f196d4]{background:#f7f7f7;min-height:100%;color:#333;padding:%?120?% 0}.localPreferences .localPreferences-content .localPreferences-content-hot[data-v-63f196d4]{margin-top:%?20?%}.localPreferences .localPreferences-content .localPreferences-content-hot .localPreferences-content-hot-title[data-v-63f196d4]{font-size:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.localPreferences .localPreferences-content .localPreferences-content-hot .localPreferences-content-hot-title uni-text[data-v-63f196d4]{color:#ff5d06;margin-left:%?10?%;font-size:%?40?%}.localPreferences .localPreferences-content .localPreferences-content-hot .localPreferences-content-hot-item[data-v-63f196d4]{display:-webkit-box;display:-webkit-flex;display:flex;background:#fff;padding:%?20?%;width:90%;border-radius:%?20?%;margin:%?20?% auto 0;box-shadow:0 %?8?% %?20?% #999}.localPreferences .localPreferences-content .localPreferences-content-hot .localPreferences-content-hot-item .left[data-v-63f196d4]{width:%?213?%;height:%?181?%;border-radius:%?20?%;margin-right:%?20?%}.localPreferences .localPreferences-content .localPreferences-content-hot .localPreferences-content-hot-item .left uni-image[data-v-63f196d4]{width:100%;height:100%}.localPreferences .localPreferences-content .localPreferences-content-hot .localPreferences-content-hot-item .right[data-v-63f196d4]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.localPreferences .localPreferences-content .localPreferences-content-hot .localPreferences-content-hot-item .right .right-title[data-v-63f196d4]{font-size:%?30?%;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.localPreferences .localPreferences-content .localPreferences-content-hot .localPreferences-content-hot-item .right .right-title uni-view[data-v-63f196d4]{width:%?45?%;height:%?45?%;border-radius:50%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:-webkit-linear-gradient(245deg,#fb9748,#fe7834);background:linear-gradient(205deg,#fb9748,#fe7834)}.localPreferences .localPreferences-content .localPreferences-content-hot .localPreferences-content-hot-item .right .right-text[data-v-63f196d4]{font-size:%?24?%;color:#666;width:%?400?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:%?10?%}.localPreferences .localPreferences-content .localPreferences-content-hot .localPreferences-content-hot-item .right .right-score[data-v-63f196d4]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?24?%}.localPreferences .localPreferences-content .localPreferences-content-hot .localPreferences-content-hot-item .right .right-score uni-text[data-v-63f196d4]{margin-top:%?-15?%;margin-left:%?15?%}.localPreferences .localPreferences-content .localPreferences-content-hot .localPreferences-content-hot-item .right .right-date[data-v-63f196d4]{font-size:%?24?%;color:#666;margin-top:%?10?%}",""])},5529:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".common-tabbar[data-v-e86c0c78]{color:#333;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;background:#fff;position:fixed;bottom:0;-webkit-justify-content:space-around;justify-content:space-around;text-align:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.common-tabbar .active uni-text[data-v-e86c0c78]{color:#f5671f}.common-tabbar .item uni-text[data-v-e86c0c78]{font-size:%?48?%}.common-tabbar .item uni-view[data-v-e86c0c78]{font-size:%?20?%}",""])},5567:function(e,t,n){"use strict";var i=n("d312"),a=n.n(i);a.a},6238:function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("088e")),r=i(n("3600")),c=i(n("521e")),o=i(n("f1e0")),s={data:function(){return{bannerList:[{picture:"http://image.mishi.cn/r/yry_h5_test/detail/3_1535359279285.png",title:"",description:"",path:"/pages/preferencesPage/preferencesPage"},{picture:"http://image.mishi.cn/r/yry_h5_test/detail/2_1535359240426.png",title:"",description:"",path:"/pages/preferencesPage/preferencesPage"},{picture:"http://image.mishi.cn/r/yry_h5_test/detail/1_1535359204228.png",title:"",description:"",path:"/pages/preferencesPage/preferencesPage"},{picture:"http://image.mishi.cn/r/yry_h5_test/detail/4_1535359327213.png",title:"",description:"",path:"/pages/preferencesPage/preferencesPage"}],swiperConfig:{indicatorDots:!0,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",autoplay:!1,interval:3e3,duration:300,circular:!0,previousMargin:"58rpx",nextMargin:"58rpx"},hotLIst:[{id:"01",imgUrl:"../../static/images/content01.png",title:"油条豆浆先生",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"4",date:"2019-12-02"},{id:"02",imgUrl:"../../static/images/content01.png",title:"油条豆浆先生",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"4.5",date:"2019-12-12"},{id:"03",imgUrl:"../../static/images/content01.png",title:"油条豆浆先生",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"3.5",date:"2019-12-22"},{id:"04",imgUrl:"../../static/images/content01.png",title:"油条豆浆先生",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"4",date:"2019-10-02"},{id:"05",imgUrl:"../../static/images/content01.png",title:"油条豆浆先生",text:"虫草花羊腿锅底，新品套餐半价尝鲜",score:"3",date:"2019-12-02"}]}},components:{commonHeader:a.default,specialBanner:c.default,tabbar:r.default,uniRate:o.default}};t.default=s},"67bb8":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner-container"},[n("v-uni-swiper",{style:{width:"100vw",height:"410rpx"},attrs:{"indicator-dots":e.swiperConfig.indicatorDots,"indicator-color":e.swiperConfig.indicatorColor,"indicator-active-color":e.swiperConfig.indicatorActiveColor,autoplay:e.swiperConfig.autoplay,interval:e.swiperConfig.interval,duration:e.swiperConfig.duration,circular:e.swiperConfig.circular,"previous-margin":e.swiperConfig.previousMargin,"next-margin":e.swiperConfig.nextMargin},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.swiperChange.apply(void 0,arguments)},animationfinish:function(t){arguments[0]=t=e.$handleEvent(t),e.animationfinish.apply(void 0,arguments)}}},e._l(e.bannerList,function(t,i){return n("v-uni-swiper-item",{key:i},[n("div",{staticClass:"image-container",class:[0===e.curIndex?i===e.listLen-1?"item-left":1===i?"item-right":"item-center":e.curIndex===e.listLen-1?0===i?"item-right":i===e.listLen-2?"item-left":"item-center":i===e.curIndex-1?"item-left":i===e.curIndex+1?"item-right":"item-center"]},[n("v-uni-image",{staticClass:"slide-image",style:{transform:e.curIndex===i?"scale("+e.scaleX+","+e.scaleY+")":"scale(1,1)",transitionDuration:".3s",transitionTimingFunction:"ease"},attrs:{src:t.picture},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.getBannerDetail(t.path)}}})],1)])}),1)],1)},r=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i})},"714c":function(e,t,n){var i=n("402f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("2618906e",i,!0,{sourceMap:!1,shadowMode:!1})},"81aa":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{active:{type:String,default:""}},data:function(){return{tabList:[{id:1,icon:"icon-shouye",text:"首页"},{id:2,icon:"icon-755danzi",text:"消息"},{id:3,icon:"icon-daohanggouwuche",text:"购物车"},{id:4,icon:"icon-gerenzhongxin",text:"个人中心"}]}},methods:{goPage:function(e){var t=this.active;t=e,1==t&&uni.reLaunch({url:"../../pages/index/index"}),2==t&&uni.reLaunch({url:"../../pages/news/news"}),3==t&&uni.reLaunch({url:"../../pages/cart/cart"}),4==t&&uni.reLaunch({url:"../../pages/personal/personal"})}}};t.default=i},"90e3":function(e,t,n){"use strict";n.r(t);var i=n("a9c8"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},a9c8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{bannerList:{type:Array,default:function(){return[]}},swiperConfig:{type:Object,default:function(){return{indicatorDots:!0,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",autoplay:!1,interval:3e3,duration:300,circular:!0,previousMargin:"58rpx",nextMargin:"58rpx"}}},scaleX:{type:String,default:(634/550).toFixed(4)},scaleY:{type:String,default:(378/328).toFixed(4)}},computed:{listLen:function(){return this.bannerList.length}},data:function(){return{curIndex:0,descIndex:0,isDescAnimating:!1}},methods:{swiperChange:function(e){var t=this;this.curIndex=e.mp.detail.current,this.isDescAnimating=!0;var n=setTimeout(function(){t.descIndex=e.mp.detail.current,clearTimeout(n)},150)},animationfinish:function(e){this.isDescAnimating=!1},getBannerDetail:function(e){uni.showLoading({title:"loading...",duration:2e3,mask:!0}),uni.navigateTo({url:e})}}};t.default=i},acb5:function(e,t,n){"use strict";var i=n("714c"),a=n.n(i);a.a},bf3f:function(e,t,n){"use strict";n.r(t);var i=n("81aa"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},d312:function(e,t,n){var i=n("53a2");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("ff610f22",i,!0,{sourceMap:!1,shadowMode:!1})},d553:function(e,t,n){"use strict";var i={"uni-rate":n("f1e0").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"localPreferences"},[n("commonHeader",{attrs:{headerTitl:"本地优惠"}}),n("v-uni-view",{staticClass:"localPreferences-content"},[n("v-uni-view",{staticClass:"localPreferences-content-banner"},[n("special-banner",{attrs:{"banner-list":e.bannerList,"swiper-config":e.swiperConfig}})],1),n("v-uni-view",{staticClass:"localPreferences-content-hot"},[n("v-uni-view",{staticClass:"localPreferences-content-hot-title"},[n("v-uni-text",{staticClass:"iconfont icon-dian"}),e._v("热门推荐")],1),e._l(e.hotLIst,function(t){return n("v-uni-navigator",{key:t.id,staticClass:"localPreferences-content-hot-item",attrs:{url:"../preferencesPage/preferencesPage"}},[n("v-uni-view",{staticClass:"left"},[n("v-uni-image",{attrs:{src:t.imgUrl,mode:""}})],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"right-title"},[n("v-uni-text",[e._v(e._s(t.title))]),n("v-uni-view",[n("v-uni-text",{staticClass:"iconfont icon-youjiantou"})],1)],1),n("v-uni-view",{staticClass:"right-text"},[e._v(e._s(t.text))]),n("v-uni-view",{staticClass:"right-score"},[n("uni-rate",{attrs:{disabled:"true",value:t.score,"active-color":"#FF5D06",size:"18"}}),n("v-uni-text",[e._v(e._s(t.score)+"分")])],1),n("v-uni-view",{staticClass:"right-date"},[e._v(e._s(t.date))])],1)],1)})],2)],1),n("tabbar")],1)},r=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i})},d5af:function(e,t,n){"use strict";var i=n("f0f7"),a=n.n(i);a.a},f0f7:function(e,t,n){var i=n("5529");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("cd013ba6",i,!0,{sourceMap:!1,shadowMode:!1})},ff46:function(e,t,n){"use strict";n.r(t);var i=n("d553"),a=n("2b6c");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("5567");var c,o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"63f196d4",null,!1,i["a"],c);t["default"]=s.exports}}]);