<template>
	<view>
		<!-- 背景 -->
		<view class="mihuyo">
			<image class="mihuyo1" src="../../static/bg_user_center_header.png"></image>
		</view>
		<!-- 头像 -->
		<view class="maines">
			<view class="maines3">
				<view class="maines1">
					<image class="maines1-img" src="../../static/0.jpg"></image>
				</view>
			</view>
			<view class="miond r">
				<image class="miond1" src="../../static/icon_user_info_edit.png"></image>
				编辑
			</view>
		</view>
		<!-- 姓名 -->
		<view class=""></view>
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
.maines{
	margin: 20rpx 20rpx 60rpx 20rpx;
	height: 80rpx;
	.miond{
		right: 40rpx;
		width: 120rpx;
		font-size: 13px;
		padding: 8rpx 12rpx 10rpx 14rpx;
		color: #1aa3ff;
		border-radius: 4px;
		text-align: center;
		border:  1px solid #1aa3ff;
		.miond1{
			width: 20rpx;
			height: 20rpx;
		}
	}
	.maines3{
		position: absolute;
		.maines1{
			width: 180rpx;
			height: 180rpx;
			border-radius: 50%;
			position: relative;
			border:  2px solid #fff;
			overflow: hidden;
			top: -80rpx;
			.maines1-img{
				width: 100%;
				height: 100%;
			}
		}
	}
}
.mihuyo{
	height: 400rpx;
	border: 0 6px;
	overflow: hidden;
	.mihuyo1{
		width: 100%;
		height: 100%;
	}
}
</style>
