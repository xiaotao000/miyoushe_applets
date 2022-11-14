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
			<!-- tab栏 -->
			<van-tabs title-active-color="#1B1B1D" title-inactive-color="#C1C1C3" color="#3FA6F3">
			  <van-tab title="观测枢"></van-tab>
			  <van-tab title="发现"></van-tab>
			  <van-tab title="酒馆"></van-tab>
			  <van-tab title="攻略"></van-tab>
			  <van-tab title="同人图"></van-tab>
			  <van-tab title="cos"></van-tab>
			  <van-tab title="硬核"></van-tab>
			</van-tabs>
			
			<!-- 内容 -->
			<view class="cart-item">
				<!-- 轮播图 -->
				<view class="banner">
					<swiper :indicator-dots="true" :circular="true" :autoplay="true" :interval="2000" :duration="500">
						<swiper-item v-for="item in bannerList" :key="item.id">
							<image :src="item.imgUrl" mode=""></image>
						</swiper-item>
					</swiper>
				</view>
				
				<!-- 宫图 -->
				<view class="gird">
					<view class="gird-item" v-for="item in gridData" :key="item.gridId">
						<image :src="item.imgUrl" mode=""></image>
						<text>{{ item.name }}</text>
					</view>
				</view>
				
				<!-- 热门推荐 -->
				<view class="hot">
					<view class="title">
						<image src="../../static/image/hot.png" mode=""></image>
						<text>热门推荐</text>
					</view>
					<view class="hot-tag">
						<view v-for="item in hotData" :key="item.hotId" class="tag-item">{{ item.name }}</view>
					</view>
				</view>
				
				<!-- 玩法探索 -->
				<view class="explore">
					<view class="title">
						<view class="left">
							<image src="../../static/image/explore.png" mode=""></image>
							<text>玩法探索</text>
						</view>
						<view class="right">
							<text>更多</text>
							<van-icon name="arrow" />
						</view>
					</view>
					<scroll-view scroll-x="true" class="banner" >
						<view v-for="item in 5" :key="item" class="banner-item">
							111
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app';
import { reactive, toRefs } from "vue";
import { bannerApi } from '../../api/modules/home';
import { gridData, hotData } from '../../utils/type_data';

const state = reactive({ bannerList: [] })

// 获取轮播图数据
const getBanner = async () => {
	 const { data } = await bannerApi()
	 state.bannerList = data
}

// 页面加载
onLoad((message) => {
	getBanner()
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

const { bannerList } = toRefs(state)
</script>

<style lang="scss">
	// 搜索
.search {
	height: 120rpx;
	padding: 0 24rpx;
	box-sizing: border-box;
	width: 100%;
	background-image: url("../../static/image/home.jpg");
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
// 内容
.cart-item {
	// 轮播
	.banner {
		height: 200rpx;
		margin-bottom: 20rpx;
		swiper, image {
			width: 100%;
			height: 100%;
		}
	}
	// 宫图
	.gird {
		display: flex;
		flex-wrap: wrap;
		.gird-item {
			width: 25%;
			padding: 15rpx 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			box-sizing: border-box;
			image {
				width: 84rpx;
				height: 84rpx;
			}
			text {
				margin-top: 10rpx;
				font-size: 24rpx;
			}
		}
	}
	
	// 热门推荐
	.hot {
		.title {
			display: flex;
			align-items: center;
			font-size: 30rpx;
			margin-top: 10rpx;
			margin-bottom: 16rpx;
			image {
				width: 50rpx;
				height: 50rpx;
				margin-right: 10rpx;
			}
		}
		.hot-tag {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.tag-item {
				width: 44%;
				padding: 10rpx 18rpx;
				background-color: #F2F2F2;
				border-radius: 10rpx;
				font-size: 28rpx;
				margin-bottom: 20rpx;
			}
		}
	}
	
	// 玩法搜索
	.explore {
		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left{
				display: flex;
				align-items: center;
				font-size: 30rpx;
				margin-top: 10rpx;
				margin-bottom: 16rpx;
				image {
					width: 58rpx;
					height: 58rpx;
					margin-right: 10rpx;
					margin-top: 6rpx;
				}
			}
			.right {
				font-size: 24rpx;
				text {
					margin-right: 10rpx;
				}
			}
		}
		.banner {
			display: flex;
			.banner-item {
				display: flex;
				width: 80%;
				background-color: red;
			}
		}
	}
}
</style>
