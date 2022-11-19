<template>
	<view>
		<scroll-view
			scroll-y="true"
			class="scroll-view"
			refresher-enabled
			@scrolltolower="loadMore"
			@refresherrefresh="refresh"
			:refresher-triggered="isRefresh"
		>
			<view class="clion">
				<view class="conice">
					<view class="clion1">官方资讯</view>
					<view class="clion2">全部 ></view>
				</view>
				<view>
					<view class="abond">
						<view class="abond1">公告</view>
						<view class="abond2"
							>【公告】米游社原神社区版规（11月17日更新</view
						>
						<view class="abond3">今天</view>
					</view>
					<view class="abond">
						<view class="abond1">资讯</view>
						<view class="abond2"
							>【公告】米游社原神社区版规（11月17日更新</view
						>
						<view class="abond3">今天</view>
					</view>
					<view class="abond">
						<view class="abond1">活动</view>
						<view class="abond2"
							>【公告】米游社原神社区版规（11月17日更新</view
						>
						<view class="abond3">今天</view>
					</view>
				</view>
			</view>
			<!-- 内容 -->
			<view @click="admines(item.id)" v-for="item in artilceList" :key="item.id">
				<view class="aboes">
					<!-- 头像 -->
					<view class="taoto">
						<view class="l">
							<img class="l abo" :src="'http://172.19.10.125:3000' + item.avatar" alt="">
							<view class="l modes">
								<view>{{ item.author }}</view>
								<view class="vines">{{ item.time }}</view>
							</view>
						</view>
						<view class="r zhu">
							<view class="r">...</view>
							<view class="r guan">+ 关注</view>
						</view>
					</view>
					<!-- 内容 -->
					<view class="masto">
						<view>{{ item.title }}</view>
						<view class="abion">
							<rich-text :nodes="item.introduce"></rich-text>
						</view>
						<view class="abion1">
							<img
								v-if="item.cover[0].imgUrl"
								class="abion2"
								:src="
									'http://172.19.10.125:3000' +
										item.cover[0].imgUrl
								"
								alt=""
							/>
						</view>
						<view class="modvis">
							<view class="l modvis1">{{ item.section }}</view>
							<view class="r">
								<p class="r aose">{{ item.browse }}万</p>
								<p class="modvis1-img r">
									<image class="modvis1-img1" src="/static/mihoyoimg/icon_like_gray_60.png" mode="" ></image>
								</p>
								<p class="r aose">{{ item.count }}</p>
								<p class="modvis1-img r">
									<image class="modvis1-img1" src="/static/mihoyoimg/ic_post_comment_60.png" mode="" ></image>
								</p>
								<p class="r aose">{{ item.comment }}</p>
								<p class="modvis1-img r">
									<image class="modvis1-img1" src="/static/mihoyoimg/icon_post_card_view48.png" mode="" ></image>
								</p>
							</view>
						</view>
					</view>
				</view>
				<view class="n"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { ArticleStore } from '../../store/article'
import { cardArticleApi } from '../../api/modules/home.js'
import { onMounted, reactive, toRefs, watch } from 'vue'

const articleStore = ArticleStore()
const state = reactive({
	artilceList: [],
	page: 1,
	isRefresh: false,
	hasMore: true,
	loading: false
})
const admines = id => {
	uni.navigateTo({ url: `/subpkg/article-details/article-details?id=${id}` })
}
watch(
	() => articleStore.card,
	() => {
		refresh()
	}
)

const init = async () => {
	state.loading = true
	const { data } = await cardArticleApi({ pagenum: state.page })
	state.artilceList = state.artilceList.concat(data.data)
	// 关闭上拉刷新
	state.isRefresh = false
	state.loading = false
	// 判断是否还有数据
	if (state.page >= data.totalPage) {
		state.hasMore = false
	}
}

// 下拉刷新
const refresh = () => {
	state.isRefresh = true
	state.hasMore = true
	state.page = 1
	state.artilceList = []
	init()
}

// 上拉加载
const loadMore = () => {
	console.log(11)
	if (state.loading) return
	if (!state.hasMore) return
	state.page += 1
	init()
}

onMounted(() => {
	init()
})
// 页面加载
onLoad(message => {})

// 页面显示
onShow(() => {})

// 页面隐藏
onHide(() => {})

// 页面分享(不定义该函数 页面将无法分享)
onShareAppMessage(() => {})

const { artilceList, isRefresh } = toRefs(state)
</script>

<style lang="scss">
.scroll-view {
	height: calc(100vh - 120rpx - 44rpx);
}
.l {
	float: left;
}
.r {
	float: right;
}
.n {
	width: 100%;
	height: 20rpx;
	background-color: #f4f4f4;
}
.aboes {
	margin: 20rpx;
	background-color: #fff;
	.masto {
		margin: 20rpx;
		.modvis {
			height: 80rpx;
			.aose {
				margin-top: 5rpx;
				margin-left: 5rpx;
				font-size: 12px;
				color: #d2cccc;
			}
			.modvis1-img {
				width: 50rpx;
				height: 50rpx;
				margin-left: 40rpx;
				.modvis1-img1 {
					width: 100%;
					height: 100%;
				}
			}
			.modvis1 {
				margin-top: 20rpx;
				padding: 0 10rpx;
				border-radius: 4rpx;
				font-size: 13px;
				background-color: #f4f4f4;
				color: #999;
			}
		}
		.abion1 {
			height: 300rpx;
			margin: 20rpx 0;
			.abion2 {
				width: 100%;
				height: 100%;
				border-radius: 7px;
			}
		}
		.abion {
			font-size: 13px;
			line-height: 18px;
			margin-top: 8px;
			color: #999;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
	}
	.zhu {
		color: #d2cccc;
		font-size: 20px;
	}
	.taoto {
		height: 80rpx;
	}
	.guan {
		margin-right: 20rpx;
		margin-top: 20rpx;
		color: #4141f5;
		font-size: 14px;
		padding: 0 10rpx;
		border: 2rpx solid #4141f5;
		border-radius: 4px;
	}
	.modes {
		font-size: 11px;
		.vines {
			color: #d2cccc;
		}
	}
	.abo {
		width: 80rpx;
		height: 80rpx;
		margin-right: 10rpx;
		border-radius: 50%;
	}
}
.clion {
	background-color: #f4f4f4;
	border-radius: 7px;
	margin: 20rpx;
	padding: 20rpx;
	.conice {
		height: 80rpx;
		line-height: 80rpx;
		.clion1 {
			float: left;
			font-weight: 700;
		}
		.clion2 {
			float: right;
			font-size: 12px;
			color: #ccc;
		}
	}
	.abond {
		margin: 20rpx 0;
		display: flex;
		font-size: 12px;
		.abond1 {
			color: #fff;
			width: 10%;
			height: 40rpx;
			font-size: 12px;
			padding: 0 10rpx;
			background-color: #4141f5;
			border-radius: 3px;
		}
		.abond2 {
			width: 70%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.abond3 {
			font-size: 11px;
			margin-left: 10rpx;
			color: #d2cccc;
		}
	}
}
</style>
