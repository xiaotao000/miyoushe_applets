<template>
	<view>
		<view class="admin">
			<image class="admin1 l" src="../../static/icon_add_mix_post.png"></image>
			<view class="l admin2">参与讨论</view>
		</view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app';

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
.l{
	float: left;
}
.r{
	float: right;
}
.n{
	width: 100%;
	height: 20rpx;
	background-color: #f4f4f4;
}
.admin{
	margin: 20rpx;
	background-color: #f4f4f4;
	height: 80rpx;
	border-radius: 4px;
	padding: 5rpx;
	.admin2{
		line-height: 80rpx;
		font-size: 14px;
		font-weight: 600;
	}
	.admin1{
		width: 80rpx;
		height: 80rpx;
	}
}
</style>
