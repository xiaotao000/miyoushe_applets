<template>
	<view class="upload-view">
		<view class="upload">
			<form @submit="ooSubmit">
				<van-field
					required
					maxlength="30"
					clearable
					placeholder="标题 (必填)"
				/>
				<van-field
					required
					maxlength="3000"
					type="textarea"
					placeholder="请尽情地发挥吧..."
					:autosize="{ minHeight: 100 }"
				/>
				<van-uploader :file-list="fileList" deletable @after-read="uploadChage" />
			</form>
		</view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { reactive, ref } from 'vue'
import { coverApi } from '../../api/modules/article'

const fileList = ref([
	{
		url: 'http://172.19.10.192:3000/upload/cover-1668569125332.jpeg',
		name: '图片1'
	},
	{
		url: 'http://172.19.10.192:3000/upload/cover-1668569125332.jpeg',
		name: '图片1'
	},
	{
		url: 'http://172.19.10.192:3000/upload/cover-1668569125332.jpeg',
		name: '图片1'
	},
])
const state = reactive({})

const handleInput = e => {
	const value = e.detail
	const { name } = e.target.dataset
	state[name] = value
}
const uploadChage = async event => {
	const { file } = event.detail
	wx.uploadFile({
		url: 'http://172.19.10.192:3000/api/cover', // 仅为示例，非真实的接口地址
		filePath: file.url,
		name: 'cover',
		formData: { user: 'test' },
		success(res) {
			const { data } = JSON.parse(res.data)
			fileList.value.push(
				data.map(item => ({
					url: 'http://172.19.10.192:3000' + item.imgUrl,
					name: item.name
				}))[0]
			)
			console.log(fileList.value)
		}
	})
}
// 页面加载
onLoad(message => {})

// 页面显示
onShow(() => {
	setTimeout(() => {
		fileList.value.push({
		url: 'http://172.19.10.192:3000/upload/cover-1668569125332.jpeg',
		name: '图片1'
	})
	console.log(fileList.value);
	}, 3000)
})

// 页面隐藏
onHide(() => {})

// 页面分享(不定义该函数 页面将无法分享)
onShareAppMessage(() => {})
</script>

<style lang="scss">
.upload {
	padding: 24rpx;
	:deep(.van-uploader) {
		margin-top: 24rpx;
	}
}
</style>
