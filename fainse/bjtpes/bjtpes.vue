<template>
	<view class="update-info">
		<view class="upload">
			<image @click="openImagePage" class="portrait" src="../../static/0.jpg" mode="" />
			<view class="text">点击修改头像</view>
		</view>
		<form @submit="ooSubmit" class="form">
			<van-field
				@change="handleInput('nickname', $event)"
				label="昵称"
				placeholder="请输入昵称"
			/>
			<view class="category">
				<view class="title">性别：</view>
				<van-radio-group :value="state.gender" @change="selectChage">
					<van-radio name="男">男</van-radio>
					<van-radio name="女">女</van-radio>
					<van-radio name="保密">保密</van-radio>
				</van-radio-group>
			</view>
			<van-field
				@change="handleInput('autograph', $event)"
				label="个性签名"
				placeholder="请输入个性签名"
			/>
			<van-button type="info" round block form-type="submit">保存</van-button>
		</form>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { reactive, ref } from 'vue'
const fileList = ref([])

const state = reactive({})

const openImagePage =() => {
	uni.chooseImage({
		sizeType: 'compressed',
		count: 1,
		success: res => {
			console.log(res)
		}
	})
}

const handleInput = (name, e) => {
	const value = e.detail
	state[name] = value
}

// 性别
const selectChage = (e) => {
	state.gender = e.detail
}

// 保存
const ooSubmit = () => {
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
page {
	background-color: #f8f8f8;
}
.update-info {
	background-color: #fff;
	padding: 24rpx;
	box-sizing: border-box;
	.upload {
		text-align: center;
		.portrait {
			width: 128rpx;
			height: 128rpx;
			border-radius: 50%;
		}
		.text {
			color: #858585;
			font-size: 28rpx;
		}
	}
}
.form {
	margin-top: 24rpx;
	.category {
		display: flex;
		align-items: center;
		margin-top: 24rpx;
		margin-left: 24rpx;
		padding-bottom: 24rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #ebedf0;
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
