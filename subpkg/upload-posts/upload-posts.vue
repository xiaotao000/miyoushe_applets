<template>
	<view class="upload-view">
		<view class="upload">
			<form @submit="ooSubmit">
				<van-field
					:value="state.article.title"
					@change="handleInput('title', $event)"
					required
					maxlength="30"
					clearable
					placeholder="标题 (必填)"
				/>
				<van-field
					:value="state.article.introduce"
					@change="handleInput('introduce', $event)"
					required
					maxlength="3000"
					type="textarea"
					placeholder="请尽情地发挥吧..."
					:autosize="{ minHeight: 100 }"
				/>
				<view class="upload-box">
					<view class="bg-default">
						<view class="title">图片上传:</view>
						<image
							@click="openImagePage"
							class="upload-image"
							src="/static/上传.png"
						></image>
					</view>
					<view v-if="fileList.length" class="add_img_view">
						<view
							v-for="(item, i) in fileList"
							:key="i"
							class="add_img_item"
						>
							<image @click="bindImg(i)" :src=" 'http://172.19.10.125:3000'+ item.imgUrl"></image>
							<image
								@click="deleteImg(i)"
								class="add_close"
								src="../../static/dfe4f74b0c2b5ca87cfe502a8521c9b.png"
								mode=""
							/>
						</view>
					</view>
				</view>
				<view class="category">
					<view class="title">发布版块：</view>
					<van-radio-group :value="state.article.category" @change="selectChage">
						<van-radio name="酒馆">酒馆</van-radio>
						<van-radio name="攻略">攻略</van-radio>
						<van-radio name="硬核">硬核</van-radio>
					</van-radio-group>
				</view>
				<van-field
					:value="state.article.section"
					@change="handleInput('section', $event)"
					required
					maxlength="30"
					clearable
					placeholder="话题"
				/>
				<van-button type="info" round block form-type="submit">保存</van-button>
			</form>
		</view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { getDetailsApi, updateArticleApi, uploadArticleApi } from '../../api/modules/article.js'
import { reactive, ref } from 'vue'
const fileList = ref([])
const state = reactive({
	article: { id: '', title: '', introduce: '', section: '', category: '酒馆', cover:[]}
})

const handleInput = (name, e) => {
	const value = e.detail;
	state.article[name] = value
}

// 图片上传
const openImagePage = e => {
	uni.chooseImage({
		sizeType: 'compressed',
		// 选择图片的数量
		count: 1,
		success: res => {
			const preview = res.tempFilePaths[0]
			wx.uploadFile({
				url: 'http://172.19.10.125:3000/api/cover', // 仅为示例，非真实的接口地址
				filePath: preview,
				name: 'cover',
				formData: { user: 'test' },
				success(res) {
					const { data } = JSON.parse(res.data)
					// 'http://172.19.10.125:3000' + data[0].imgUrl
					fileList.value.push({imgUrl: data[0].imgUrl, name: data[0].name})
				}
			})
		}
	})
}

// 删除图片
const deleteImg = index => {
	fileList.value.splice(index, 1)
}

// 图片预览
const bindImg = index => {
	if (fileList.value.length !== 0) {
		console.log(index)
		uni.previewImage({
			urls: fileList.value,
			current: index
		})
	}
}

const selectChage = (e) => {
	state.article.category = e.detail
}

const ooSubmit = async () => {
	const { title, introduce, cover, section, category } = state.article
	if (!title) return uni.$Toast('请输入标题')
	if (!introduce) return uni.$Toast('请输入内容')
	if (!cover) return uni.$Toast('请选择图片')
	if (!section) return uni.$Toast('请输入话题')
	try{
		const data = fileList.value.map(item => ({ imgUrl: item.imgUrl, name: item.name }))
		state.article.cover = data
		state.article.id ? await updateArticleApi(state.article):  await uploadArticleApi(state.article)
		uni.$Toast(state.article.id? '修改成功' : '新增成功')
		state.article.id ? uni.switchTab({ url: '/pages/my/my' }) : uni.switchTab({ url: '/pages/home/home'})
	}catch(e){
		//TODO handle the exception
		uni.$Toast('发布失败')
	}
}
const init = async (id) => {
	uni.setNavigationBarTitle({
		title: '修改帖子'
	})
	const { data } = await getDetailsApi({ id })
	fileList.value = data[0].cover
	state.article = data[0]
}
// 页面加载
onLoad(async message => {
	const { id } = message
	if (!id) return
	init(id)
})

// 页面显示
onShow(() => {})

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
	.bg-default {
		display: flex;
		align-items: center;
		margin-top: 24rpx;
		margin-left: 24rpx;
		.title {
			color: var(--cell-value-color, #969799);
			font-size: 32rpx;
		}
		.upload-image {
			width: 100rpx;
			height: 84rpx;
			margin-left: 24rpx;
		}
	}
	.add_img_view {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 24rpx;
		margin-left: 24rpx;
		.add_img_item {
			width: calc(50% - 12rpx);
			height: 240rpx;
			margin-bottom: 24rpx;
			position: relative;
			margin-left: 12rpx;
			image {
				width: 100%;
				height: 100%;
			}
			.add_close {
				width: 32rpx;
				height: 32rpx;
				position: absolute;
				right: 15rpx;
				top: 15rpx;
			}
		}
	}
	.category {
		display: flex;
		align-items: center;
		margin-top: 24rpx;
		margin-left: 24rpx;
		.title {
			color: var(--cell-value-color, #969799);
			font-size: 32rpx;
			margin-right: 24rpx;
		}
		.van-radio-group {
			display: flex;
			align-items: center;
			.van-radio {
				margin-left: 24rpx;
			}
		}
	}
	.van-button {
		margin-top: 24rpx;
	}
}
</style>
