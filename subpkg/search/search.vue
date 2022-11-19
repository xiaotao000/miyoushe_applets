<template>
	<view class="search-view">
		<!-- 搜索 -->
		<view class="header">
			<view class="header-search">
				<icon type="search" size="16"></icon>
				<input type="text" placeholder="纳西妲" v-model="keyword" />
			</view>
			<view class="search-btn" @click="search">搜索</view>
		</view>
	</view>
	
	<!-- 内容列表 -->
	<view class="content">
		<scroll-view scroll-y class="search-list">
			<view class="search-item" v-if="searchList.length" v-for="item in searchList" :key="item.id" @click="goDetail(item.id)">
				<!-- 作者 -->
				<view class="author">
					<view class="author-left">
						<image :src="'http://172.19.10.125:3000' + item.avatar" mode=""></image>
						<text>{{ item.author }}</text>
					</view>
					<view class="time">{{ item.time }} 原神</view>
				</view>
				
				<!-- 内容 -->
				<view class="center">
					<!-- 标题 -->
					<view class="title">{{ item.title }}</view>
					<!-- 介绍 -->
					<view class="introduce">
						<rich-text :nodes="item.introduce"></rich-text>
					</view>
					<!-- 图片 -->
					<view class="img">
						<image v-for="item2,i in item.cover" :key="i" :src="'http://172.19.10.125:3000' + item.cover[0].imgUrl" mode=""></image>
					</view>
					<!-- 浏览量 -->
					<view class="desc">
						<view class="desc-item">
							<image src="/static/image/icon_post_card_view48.png" mode=""></image>
							<text>{{ item.browse }}</text>
						</view>
						<view class="desc-item">
							<image src="/static/image/ic_post_comment_60.png" mode=""></image>
							<text>{{ item.comment }}</text>
						</view>
						<view class="desc-item">
							<image src="/static/image/icon_like_gray_60.png" mode=""></image>
							<text>{{ item.count }}</text>
						</view>
					</view>
				</view>
			</view>
		
		<template v-else>
			<!-- 历史记录 -->
			<view class="history-view" v-if="historyList.length">
				<view class="history-title">
					<text>历史记录</text>
					<van-icon name="delete-o" @click="state.historyList = []" />
				</view>
				<view class="history-list">
					<view @click="historySearch(item)" v-for="item, i in historyList" :key="i" style="margin-bottom: 10rpx;">
						<van-tag color="#fff" text-color="#000" size="large" type="primary">{{ item }}</van-tag>
					</view>
				</view>
			</view>
			<!-- 空状态 -->
			<view  class="search-tip">
				<image class="empty" src="/static/image/no-search.png" alt="搜索"></image>
				<view class="finished-text">未找到内容？换个词试试</view>
			</view>
		</template>
		</scroll-view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app';
import { reactive, toRefs, watch } from "vue";
import { searchApi } from '../../api/modules/search';

const state = reactive({
	keyword: '', 
	loading: false, 
	searchList: [], 
	historyList: uni.getStorageSync('HISTORY') || [],
})

// 搜索内容
const search = () => {
	// 保存关键词
	addHistory(state.keyword)
	state.searchList = []
	getData()
}

// 获取数据
const getData = async () => {
	const { keyword } = state
	// 关键词不能为空
	if (!state.keyword) return
	state.loading = true
	const { data } = await searchApi(keyword)
	state.searchList = data
	state.loading = false
	console.log(data);
}

// 监听history改变
watch(() => state.historyList, () => {
	uni.setStorageSync('HISTORY', state.historyList)
}, { deep: true })

// 添加历史记录
const addHistory = (value) => {
	if (!value) return
	const index = state.historyList.indexOf(value)
	if (index !== -1) {
		state.historyList.splice(index, 1)
	}
	state.historyList.unshift(value)
	if (state.historyList.length > 10) {
		state.historyList.pop()
	}
}

// 历史记录搜索
const historySearch = (value) => {
	state.keyword = value
	state.searchList = []
	getData()
}

// 跳转详情
const goDetail = (id) => {
	uni.navigateTo({ url: '/subpkg/article-details/article-details?id=' + id })
}

// 页面加载
onLoad((message) => {
	getData()
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

const { keyword, searchList, historyList } = toRefs(state)
</script>

<style lang="scss">
page {
	background: #F6F6F6;
}
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 20rpx;
	.header-search {
		flex: 1;
		display: flex;
		align-items: center;
		background-color: #fff;
		padding: 14rpx 30rpx;
		border-radius: 40rpx;
		input {
			padding-left: 20rpx;
			font-size: 28rpx;
		}
	}
	.search-btn {
		padding: 20rpx;
		font-size: 34rpx;
	}
}

.content {
	.search-list {
		.search-item {
			background-color: #fff;
			padding: 20rpx 30rpx;
			margin-bottom: 16rpx;
			.author {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 20rpx;
				.author-left {
					display: flex;
					align-items: center;
					image {
						width: 64rpx;
						height: 64rpx;
						border-radius: 50%;
					}
					text {
						font-size: 28rpx;
						margin-left: 16rpx;
					}
				}
				.time {
					font-size: 24rpx;
					color: #ccc;
				}
			}
			.center {
				overflow: hidden;
				.title {
					font-size: 36rpx;
				}
				.introduce {
					margin-top: 20rpx;
					font-size: 30rpx;
					color: #ccc;
					overflow: hidden;
					text-overflow: ellipsis;
					display:-webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2;
				}
				.img {
					margin-top: 20rpx;
					width: 100%;
					height: 200rpx;
					image {
						width: 33.3%;
						height: 100%;
						margin-right: 12rpx;
					}
				}
				.desc {
					display: flex;
					align-items: center;
					float: right;
					margin-top: 20rpx;
					font-size: 26rpx;
					color: #ccc;
					.desc-item {
						display: flex;
						align-items: center;
						margin-left: 40rpx;
					}
					image {
						width: 40rpx;
						height: 40rpx;
						margin-right: 10rpx;
					}
				}
			}
		}
		//历史记录
		.history-view {
			padding: 20rpx 32rpx;
			.history-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 20rpx;
				text {
					color: #656771;
				}
			}
			.history-list {
				display: flex;
				flex-wrap: wrap;
				van-tag {
					margin-right: 10rpx;
				}
			}
		}
		// 空状态
		.search-tip {
			padding-top: 140rpx;
			.empty {
				display: block;
				width: 300rpx;
				height: 300rpx;
				margin: 0rpx auto 40rpx;
			}
			.finished-text {
				color: #969799;
				font-size: 28rpx;
				line-height: 28rpx;
				text-align: center;
			}
		}
	}
}
</style>
