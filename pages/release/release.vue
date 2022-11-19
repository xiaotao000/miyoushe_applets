<template>
	<view class="reease-view">
		<view class="upload">
			<view @click="uploadArticle" class="posts">
				<image src="/static/icon_add_mix_post.png" mode=""></image>
				<view class="info">
					<view class="title">帖子</view>
					<view class="text">图片创作</view>
				</view>
			</view>
			<view @click="uploadPicture" class="posts">
				<image src="/static/icon_add_image_post.png" mode=""></image>
				<view class="info">
					<view class="title">图片创作</view>
					<view class="text">绘画 COS手工 表情包</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'

const uploadArticle = () => {
	if (!uni.getStorageSync('TOKEN')) {
		uni.navigateTo({
			url: '/subpkg/login/login'
		})
	} else {
		uni.navigateTo({ url: '/subpkg/upload-posts/upload-posts' })
	}
}
const uploadPicture = () => {
	if (!uni.getStorageSync('TOKEN')) {
		uni.navigateTo({
			url: '/subpkg/login/login'
		})
	} else {
		uni.navigateTo({ url: '/subpkg/upload-picture/upload-picture' })
	}
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
.upload {
	margin: 100rpx auto;
	height: 480rpx;
	background: #fff;
	width: 90%;
	border-radius: 32rpx;
	.posts {
		padding: 24rpx;
		box-sizing: border-box;
		display: flex;
		margin-left: 120rpx;
		align-items: center;
		margin-bottom: 48rpx;
		image {
			width: 64rpx;
			height: 64rpx;
		}
		.info {
			margin-left: 24rpx;
			.title {
				color: #161616;
				font-size: 36rpx;
				margin-bottom: 12rpx;
			}
			.text {
				font-size: 28rpx;
				color: #b8b8b8;
			}
		}
	}
}
</style>
