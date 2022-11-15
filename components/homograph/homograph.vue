<template>
	<view class="homograph-view">
		<view class="ranking">
			<view class="top">
				<view class="top-left">同人榜</view>
				<view class="top-right">全部 ></view>
			</view>
			<view class="bottom">
				<view class="first">
					<image class="cover" src="https://upload-bbs.mihoyo.com/upload/2022/11/13/107650746/758f388b9095740b1a128073410b68e6_9201839867160409392.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg" mode=""></image>
					<image class="one" src="../../static/image/icon_forum_1.png" mode=""></image>
				</view>
				<view class="second">
					<image class="cover" src="https://upload-bbs.mihoyo.com/upload/2022/11/13/107613873/498084101089faed65cd9dc2c718b1fe_2838086025727462986.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg" mode=""></image>
					<image class="two" src="../../static/image/icon_forum_2.png" mode=""></image>
				</view>
				<view class="third">
					<image class="cover" src="https://upload-bbs.mihoyo.com/upload/2022/11/12/275505388/f098dd111c7f85ca5466c09aa44fec03_3367594016310446206.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg" mode=""></image>
					<image class="three" src="../../static/image/icon_forum_3.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="new">
			<view class="top">
				<view class="top-left">排序</view>
				<view class="top-right">最新回复</view>
			</view>
			<view class="bottom">
				<view class="text">置顶</view>
				<view class="notice">[公告]图区版规</view>
			</view>
		</view>
		<view class="artice">
			<view class="artice-item" v-for="item in 10" :key="item">
				<image class="cover" src="../../static/0.jpg" mode=""></image>
				<view class="title">[荧四格]452</view>
				<view class="info">
					<view class="left">
						<image class="head" src="../../static/0.jpg" mode=""></image>
						<text class="author">雷肾老司机</text>
					</view>
					<view class="right">
						<image class="give" src="../../static/image/icon_like_gray_60.png" mode=""></image>
						<text class="count">11</text>
					</view>
				</view>
			</view>
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
page{
	background-color: #F8F8F8;
}
.ranking {
	padding: 12rpx 24rpx;
	box-sizing: border-box;
	background-color: #fff;
	border-bottom: 2rpx solid #FAF9F9;
	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24rpx;
		.top-left {
			font-size: 32rpx;
			color: #111;
			font-weight: 600;
		}
		.top-right{
			font-size: 28rpx;
			color: #818284;
		}
	}
	.bottom {
		display: flex;
		margin-bottom: 24rpx;
		.first {
			width: 33.33%;
			height: 320rpx;
			border-radius: 24rpx;
			position: relative;
			.cover {
				width: 100%;
				height: 100%;
			}
			.one {
				position: absolute;
				top: 0;
				left: 0;
				width: 64rpx;
				height: 64rpx;
			}
			
		}
		.second {
			width: 33.33%;
			height: 320rpx;
			margin-left: 24rpx;
			border-radius: 24rpx;
			position: relative;
			.cover {
				width: 100%;
				height: 100%;
			}
			.two {
				position: absolute;
				top: 0;
				left: 0;
				width: 64rpx;
				height: 64rpx;
			}
		}
		.third {
			width: 33.33%;
			height: 320rpx;
			margin-left: 24rpx;
			border-radius: 24rpx;
			position: relative;
			.cover {
				width: 100%;
				height: 100%;
			}
			.three {
				position: absolute;
				top: 0;
				left: 0;
				width: 64rpx;
				height: 64rpx;
			}
		}
	}
}
.new {
	padding: 12rpx 24rpx;
	box-sizing: border-box;
	background-color: #fff;
	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24rpx;
		color: #818284;
		.top-left {
			font-size: 28rpx;
		}
		.top-right{
			font-size: 28rpx;
		}
	}
	.bottom {
		display: flex;
		margin-bottom: 24rpx;
		.text {
			padding: 6rpx;
			font-size: 24rpx;
			border-radius: 12rpx;
			background-color: #19A3FF;
			color: #fff;
		}
		.notice {
			margin-left: 24rpx;
			font-size: 32rpx;
			font-weight: 500;
		}
	}
}
.artice {
	padding: 32rpx;
	display: flex;
	flex-wrap: wrap;
	.artice-item {
		width: calc(50% - 12rpx);
		background-color: #fff;
		box-sizing: border-box;
		border-radius: 0 0 24rpx;
		margin-bottom: 24rpx;
		&:nth-child(odd){
			margin-right: 12rpx;
		}
		&:nth-child(even){
			margin-left: 12rpx;
		}
		.cover {
			width: 100%;
			margin-bottom: 12rpx;
			border-radius:24rpx 24rpx 0 0; 
		}
		.title {
			font-weight: 600;
			font-size: 36rpx;
			margin-bottom: 12rpx;
			padding: 0 24rpx;
		}
		.info {
			padding: 24rpx;
			padding-top: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #CACACA;
			.left{
				display: flex;
				.head {
					width: 32rpx;
					height: 32rpx;
					border-radius: 50%;
					margin-right: 12rpx;
				}
				.author {
					font-size: 24rpx;
				}
			}
			.right {
				display: flex;
				.give  {
					width: 32rpx;
					height: 32rpx;
					margin-right: 12rpx;
				}
				.count{ 
					font-size: 24rpx;
				}
			}
		}
	}
}
</style>
