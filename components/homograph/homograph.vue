<template>
	<scroll-view scroll-y="true" class="homograph-scroll" refresher-enabled @scrolltolower="loadMore" @refresherrefresh="refresh" :refresher-triggered="isRefresh">
		<view class="homograph-view">
			<view class="ranking">
				<view class="top">
					<view class="top-left">同人榜</view>
					<view class="top-right">全部 ></view>
				</view>
				<view class="bottom">
					<view class="first">
						<image
							class="cover"
							src="https://upload-bbs.mihoyo.com/upload/2022/11/13/107650746/758f388b9095740b1a128073410b68e6_9201839867160409392.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg"
							mode=""
						></image>
						<image
							class="one"
							src="../../static/image/icon_forum_1.png"
							mode=""
						></image>
					</view>
					<view class="second">
						<image
							class="cover"
							src="https://upload-bbs.mihoyo.com/upload/2022/11/13/107613873/498084101089faed65cd9dc2c718b1fe_2838086025727462986.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg"
							mode=""
						></image>
						<image
							class="two"
							src="../../static/image/icon_forum_2.png"
							mode=""
						></image>
					</view>
					<view class="third">
						<image
							class="cover"
							src="https://upload-bbs.mihoyo.com/upload/2022/11/12/275505388/f098dd111c7f85ca5466c09aa44fec03_3367594016310446206.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg"
							mode=""
						></image>
						<image
							class="three"
							src="../../static/image/icon_forum_3.png"
							mode=""
						></image>
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
				<view
					class="artice-item"
					v-for="item in artilceList"
					:key="item.id"
					@click="admines(item.id)"
				>
					<image
						class="cover"
						:src="'http://172.16.9.93:3000' + item.cover[0].imgUrl"
						mode=""
					></image>
					<view class="title">{{ item.title }}</view>
					<view class="info">
						<view class="left">
							<image
								class="head"
								:src="'http://172.16.9.93:3000' + item.avatar"
								mode=""
							></image>
							<text class="author">{{ item.author }}</text>
						</view>
						<view class="right">
							<image
								class="give"
								src="../../static/image/icon_like_gray_60.png"
								mode=""
							></image>
							<text class="count">{{ item.count }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { ArticleStore } from '../../store/article'
import { cardArticleApi } from '../../api/modules/home.js'
import { onMounted, reactive, toRefs, watch } from 'vue'
const articleStore = ArticleStore()
const state = reactive({ artilceList: [], page: 1, loading: false, isRefresh: false, hasMore: true })
watch(
	() => articleStore.card,
	() => {
		refresh()
	}
)
// 页面加载
onLoad(message => {})

// 页面显示
onShow(() => {})

const init = async () => {
	if (articleStore.card == '同人图' || articleStore.card == 'cos') {
		state.loading = true
		const { data } = await cardArticleApi({
			category: articleStore.card,
			pagenum: state.page
		})
		state.artilceList = state.artilceList.concat(data.data)
		state.isRefresh = false
		state.loading = false
		if (state.page >= data.totalPage) {
			state.hasMore = false
		}
	}
}
const admines =(id) =>{
	uni.navigateTo({ url: `/subpkg/article-details/article-details?id=${id}` })
}
// 下拉刷新
const refresh = () => {
	state.hasMore = true
	state.isRefresh = true
	state.page = 1
	state.artilceList = []
	init()
}

// 上拉加载
const loadMore = () => {
	if (state.loading) return
	if (!state.hasMore) return
	state.page += 1
	init()
}

onMounted(() => {
	init()
})

// 页面隐藏
onHide(() => {})

// 页面分享(不定义该函数 页面将无法分享)
onShareAppMessage(() => {})
const { artilceList, isRefresh } = toRefs(state)
</script>

<style lang="scss">
page {
	background-color: #f8f8f8;
}
.homograph-scroll {
	height: calc(100vh - 120rpx - 44rpx);
}
.ranking {
	padding: 12rpx 24rpx;
	box-sizing: border-box;
	background-color: #fff;
	border-bottom: 2rpx solid #faf9f9;
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
		.top-right {
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
		.top-right {
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
			background-color: #19a3ff;
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
		&:nth-child(odd) {
			margin-right: 12rpx;
		}
		&:nth-child(even) {
			margin-left: 12rpx;
		}
		.cover {
			width: 100%;
			margin-bottom: 12rpx;
			border-radius: 24rpx 24rpx 0 0;
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
			color: #cacaca;
			.left {
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
				.give {
					width: 32rpx;
					height: 32rpx;
					margin-right: 12rpx;
				}
				.count {
					font-size: 24rpx;
				}
			}
		}
	}
}
</style>
