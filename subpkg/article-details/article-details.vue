<template>
	<view class="artice-view">
		<view class="info-box">
			<view class="info">
				<image
					class="portrait"
					:src="'http://172.19.10.125:3000' + article.avatar"
					mode=""
				></image>
				<view class="author-box">
					<view class="author">{{ article.author }}</view>
					<view class="introduce">{{ article.autograph }}</view>
				</view>
			</view>
			<view class="follow"> + 关注</view>
		</view>
		<view class="title">{{ article.title }}</view>
		<view class="time">文章发表: {{ article.time }}</view>
		<view class="details">
			<rich-text :nodes="article.introduce"></rich-text>
			<template v-if="article.category === '同人图' || article.category === 'COS'">
				<image @click="previewImage(i)" class="cover" v-for="item, i in article.cover" :src="'http://172.19.10.125:3000' + item.imgUrl" :key="i" mode=""></image>
			</template>
		</view>
		<view class="browse">浏览量：{{ article.browse }}</view>
		<view class="talk">
			<text>{{ article.section }}</text>
		</view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { reactive, toRefs } from 'vue'
import { imgTagAddStyle } from '../../utils/index.js'

const state = reactive({ article: {} })

import http from '../../api/index.js'

const previewImage = (index) => {
	const imageList = state.article.cover.map(item => 'http://172.19.10.125:3000'+ item.imgUrl)
	uni.previewImage({
		urls: imageList,
		current: index
	})
}
const init = async(id) => {
	const { data } = await http.get(`/api/home/articledDetails?id=${id}`)
	data[0].introduce = imgTagAddStyle(
		data[0].introduce,
		'color: #111 !important; margin-bottom: 24rpx;'
	)
	state.article = data[0]
	uni.setNavigationBarTitle({
		title: '原神- '+ state.article.category
	})
}
// 页面加载
onLoad( message => {
	const id = message.id
	init(id)
})

// 页面显示
onShow(() => {
	
})

// 页面隐藏
onHide(() => {})

// 页面分享(不定义该函数 页面将无法分享)
onShareAppMessage(() => {})
const { article } = toRefs(state)
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
				color: #7d7d7d;
			}
		}
	}
	.follow {
		padding: 6rpx 12rpx;
		border: 2rpx solid #00a3ff;
		color: #00a3ff;
		border-radius: 6rpx;
		font-size: 24rpx;
	}
}
.title {
	padding: 0 24rpx;
	font-size: 42rpx;
	font-weight: 600;
	margin-bottom: 24rpx;
}
.time {
	text-align: center;
	font-size: 32rpx;
	color: #e4e5e8;
	margin-bottom: 24rpx;
}
.details {
	font-size: 32rpx;
	padding: 0 24rpx;
	margin-bottom: 24rpx;
	.cover {
		width: 100%;
	}
}
.browse {
	color: #e4e5e8;
	padding: 0 24rpx;
	font-size: 28rpx;
}
.talk {
	font-size: 28rpx;
	margin-bottom: 24rpx;
	padding: 24rpx;
	box-sizing: border-box;
	text {
		display: inline-block;
		border-radius: 8rpx;
		background-color: #F0F1F5;
		padding: 0 12rpx;
	}
}
</style>
