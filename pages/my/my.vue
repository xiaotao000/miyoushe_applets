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
			<view class="miond r" @click="admin">
				<image class="miond1" src="../../static/icon_user_info_edit.png"></image>
				编辑
			</view>
		</view>
		<!-- 姓名 -->
		<view class="name">
			<view class="name1">八块腹肌的老头</view>
			<view class="name2">
					<image class="name2-img l" src="../../static/icon_user_home_desc_icon.png"></image>
					快乐 啪！没了
			</view>
			<view class="name2">
					<image class="name2-img l" src="/static/icon_user_ip.png"></image>
					ip属地：湖南
			</view>
		</view>
		<!-- 粉丝数 -->
		<view class="finrse">
			<view class="finrse1 l">
				<view class="l fbg">386</view>
				<view class="l">粉丝</view>
			</view>
			<view class="finrse1 l">
				<view class="l fbg">0</view>
				<view class="l">关注</view>
			</view>
			<view class="finrse1 l">
				<view class="l fbg">1386</view>
				<view class="l">获赞</view>
			</view>
		</view>
		<!-- 分割线 -->
		<view class="n"></view>
		<!-- tabs -->
		<view class="dmxia">
			<van-tabs sticky animated>
			  <van-tab title="发布">
				  <view class="faobu">
					  <view class="njh"><image class="faobu1" src="../../static/noData.png"></image></view>
					  <view class="faobu2">空空如也</view>
				  </view>
			  </van-tab>
			  <van-tab title="评论">
				  <view class="faobu">
				  		<view class="njh"><image class="faobu1" src="../../static/noData.png"></image></view>
				  		<view class="faobu2">你暂时没有评论</view>
				  </view>
			  </van-tab>
			  <van-tab title="收藏">
				  <view class="faobu">
				  		<view class="njh"><image class="faobu1" src="../../static/noData.png"></image></view>
				  		<view class="faobu2">暂无收藏</view>
				  </view>
			  </van-tab>
			  <van-tab title="合集">
				  <view class="faobu">
				  		<view class="njh"><image class="faobu1" src="/static/icon_status_collection_no_content.png"></image></view>
				  		<view class="faobu2">暂无合集</view>
				  </view>
			  </van-tab>
			</van-tabs>
		</view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app';
const admin = () => {
	uni.navigateTo({ url: '/fainse/bjtpes/bjtpes' })
}
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
.finrse{
	height: 80rpx;
	margin: 20rpx;
	padding: 10rpx;
	font-size: 12px;
	color: #ccc;
	.finrse1{
		margin-right: 40rpx;
		height: 100%;
		line-height: 80rpx;
		.fbg{
			font-size: 14px;
			color: #000;
			margin-right: 10rpx;
		}
	}
}
.name{
	margin: 20rpx;
	padding-bottom: 40rpx;
	border-bottom: 1px solid #f4f4f4;
	.name2{
		font-size: 12px;
		margin: 10rpx 0;
		color: #ccc;
		height: 40rpx;
		.name2-img{
			margin-top: 4rpx;
			margin-right: 10rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}
	.name1{
		font-size: 15px;
		font-weight: 600;
	}
}
.dmxia{
	margin: 20rpx;
	.faobu{
		height: 800rpx;
		margin: 0 auto;
		.njh{
			padding-top: 60rpx;
			width: 300rpx;
			margin: 0 auto;
			.faobu1{
				width: 300rpx;
				height: 300rpx;
				margin: 0 auto;
			}
		}
		.faobu2{
			margin: 0 auto;
			text-align:center;
			color: #ccc;
		}
	}
	.van-tabs__wrap{
		border-bottom: 1px solid #f4f4f4;
	}
	.van-tabs__line{
		background-color: #1aa3ff;
		margin: 0 auto;
		left: -2rpx;
		width: 50rpx !important;
		border-bottom:  1px solid #1aa3ff;
	}
	.van-tab--active {
		font-weight: 600;
		border-bottom:  1px solid #1aa3ff;
	}
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
