<template>
	<view class="artice-view">
		<view class="info-box">
			<view class="info">
				<image class="portrait" src="../../static/0.jpg" mode=""></image>
				<view class="author-box">
					<view class="author">提瓦特徒步团</view>
					<view class="introduce">梦想是环游世界</view>
				</view>
			</view>
			<view class="follow"> + 关注</view>
		</view>
		<view class="title">【绮思晚星】·莱依拉登场 参与活动赢周边~</view>
		<view class="time">文章发表: 11-11</view>
		<view class="details"></view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'

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
.info-box {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24rpx;
	box-sizing: border-box;
	.info {
		display: flex;
		align-items: center;
		.portrait {
			width: 64rpx;
			height: 64rpx;
			border-radius: 50%;
		}
		.author-box {
			margin-left: 12rpx;
			.author {
				font-size: 32rpx;
				color: #111;
				font-weight: 500;
				margin-bottom: 12rpx;
			}
			.introduce {
				font-size: 28rpx;
				color: #7D7D7D;
			}
		}
	}
	.follow {
		padding: 6rpx 12rpx;
		border: 2rpx solid #00A3FF;
		color: #00A3FF;
		border-radius: 6rpx;
		font-size: 24rpx;
	}
}
.title {
	padding: 0 24rpx;
	font-size: 42rpx;
	font-weight: 600;
}
.time {
	text-align: center;
	font-size: 32rpx;
	color: #E4E5E8;
}
</style>
