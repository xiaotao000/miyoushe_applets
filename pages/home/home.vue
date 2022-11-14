<template>
	<view class="home-view">
		<!-- 搜索 -->
		<view class="search">
			<image src="/static/0.jpg" mode=""></image>
			<view class="serch-right">
				<van-icon size="32rpx" name="search" />
				<input class="serch-input" placeholder="虚空鼓动，劫火高扬" type="text">
			</view>
		</view>
		<!-- 分类 -->
		<view class="tab">
			<van-tabs title-active-color="#1B1B1D" title-inactive-color="#C1C1C3" color="#3FA6F3">
			  <van-tab title="观测枢"></van-tab>
			  <van-tab title="发现"></van-tab>
			  <van-tab title="酒馆"></van-tab>
			  <van-tab title="攻略"></van-tab>
			  <van-tab title="同人图"></van-tab>
			  <van-tab title="cos"></van-tab>
			  <van-tab title="硬核"></van-tab>
			</van-tabs>
			<view class="cart-item">11</view>
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
	// 搜索
.search {
	height: 120rpx;
	padding: 0 24rpx;
	box-sizing: border-box;
	width: 100%;
	background-image: url('../../static/home.jpg');
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
	image {
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
	}
	.serch-right {
		width: 90%;
		height: 84rpx;
		margin-left: 24rpx;
		background-color: #111;
		opacity: 0.5;
		display: flex;
		color: #fff;
		padding: 0 24rpx;
		justify-content: center;
		border-radius: 24rpx;
		.serch-input {
			padding-left: 24rpx;
			width: 90%;
			height: 100%;
		}
	}
}
// tab换
.tab {
	.van-tabs {
		border-bottom: 1rpx solid #F2F2F2;
	}
	.cart-item {
		padding: 24rpx;
		box-sizing: border-box;
	}
}
</style>
