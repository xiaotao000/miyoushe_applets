<template>
	<view>
		<view class="nomcik">
			<van-uploader :file-list=" fileList " @after-read="uploadChage"/>
		</view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app';
import { ref } from 'vue'
const fileList = ref([
	{
		url:'https://portrait.gitee.com/uploads/avatars/user/3585/10756763_wangbolin200481_1653876042.png!avatar100'
	},
	{
		url:'http://tmp/i62jzlPB7z2l76facede96ac2a45f2ce29aec691cc02.jpg'
	}
])
const uploadChage = async event => {
	const { file } = event.detail
	console.log(file)
	console.log(fileList.value)
	fileList.value.push({url:file.url})
}
// 页面加载
onLoad((message) => {
	
})

// 页面显示
onShow(() => {
	
})

// 页面隐藏
onHide(() => {
	
})

// 页面分享(不定义该函数 页面将无法分享)
onShareAppMessage(() => {
	
})
</script>

<style lang="scss">

</style>
