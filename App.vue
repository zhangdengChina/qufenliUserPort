<script>

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
