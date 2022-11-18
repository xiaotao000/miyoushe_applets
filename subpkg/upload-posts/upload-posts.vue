<template>
	<view class="upload-view">
		<view class="upload">
			<form @submit="ooSubmit">
				<van-field
					:value="state.title"
					@change="handleInput('title', $event)"
					required
					maxlength="30"
					clearable
					placeholder="标题 (必填)"
				/>
				<van-field
					:value="state.introduce"
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
							<image @click="bindImg(i)" :src="item"></image>
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
					<van-radio-group :value="state.category" @change="selectChage">
						<van-radio name="酒馆">酒馆</van-radio>
						<van-radio name="攻略">攻略</van-radio>
						<van-radio name="硬核">硬核</van-radio>
					</van-radio-group>
				</view>
				<van-field
					:value="state.section"
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
import { reactive, ref } from 'vue'
const fileList = ref([])
const state = reactive({ title: '', introduce: '', section: '', category: '酒馆', cover:[] })

const handleInput = (name, e) => {
	const value = e.detail;
	state[name] = value
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
				url: 'http://172.19.10.138:3000/api/cover', // 仅为示例，非真实的接口地址
				filePath: preview,
				name: 'cover',
				formData: { user: 'test' },
				success(res) {
					const { data } = JSON.parse(res.data)
					state.cover.push(data)
					fileList.value.push(
						'http://172.19.10.138:3000' + data[0].imgUrl
					)
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
	state.category = e.detail
}

const ooSubmit = () => {
	const { title, introduce, cover, section, category } = state
	if (!title) return uni.$Toast('请输入标题')
	if (!introduce) return uni.$Toast('请输入内容')
	if (!cover) return uni.$Toast('请选择图片')
	if (!section) return uni.$Toast('请输入话题')
	console.log(state)
}
// 页面加载
onLoad(message => {})

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
