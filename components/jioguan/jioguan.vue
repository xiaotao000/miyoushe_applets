<template>
	<view>
		<view class="admin">
			<image class="admin1 l" src="../../static/icon_add_mix_post.png"></image>
			<view class="l admin2">参与讨论</view>
			<view class="r admin3">旅行者游戏日常分享 ></view>
		</view>
		<view class="minub">
			<view class="minub1">
				<view class="l admin3">排序</view>
				<view class="r admin3">热门</view>
			</view>
			<view class="minub2">
				<view class="l minub2-huyo">置顶</view>
				<view class="l minub2-huyo1">【公告】米游社原神社区版规（11月17日更新）</view>
			</view>
			<view class="minub2">
				<view class="l minub2-huyo">置顶</view>
				<view class="l minub2-huyo1">【持续更新】原神米游社导航楼</view>
			</view>
			<view class="minub2">
				<view class="l minub2-huyo">置顶</view>
				<view class="l minub2-huyo1">【公告】米游社原神社区版规（11月17日更新）</view>
			</view>
		</view>
		<!-- 内容 -->
		
		<view class="article-item" v-for="item in artilceList" :key="item.id">
			<view class="aboes">
				<!-- 头像 -->
				<view class="taoto">
					<view class="l">
						<img class="l abo" :src="'http://172.19.10.161:3000' + item.avatar" alt="">
						<view class="l modes">
							<view>{{item.author}}</view>
							<view class="vines">{{item.time}}</view>
						</view>
					</view>
				</view>
				<!-- 内容 -->
				<view class="masto">
					<view>{{item.title}}</view>
					<view class="abion van-ellipsis">
						<rich-text :nodes="item.introduce"></rich-text>
					</view>
					<view class="abion1">
						<img v-if="item.cover[0].imgUrl" class="abion2" :src="'http://172.19.10.161:3000' + item.cover[0].imgUrl" alt="">
					</view>
					<view class="modvis">
						<view class="l modvis1">{{item.section}}</view>
						<view class="r">
							<p class="r aose">{{item.browse}}万</p>
							<p class="modvis1-img r">
								<image class="modvis1-img1" src="/static/mihoyoimg/icon_like_gray_60.png" mode="" ></image>
							</p>
							<p class="r aose">{{item.count}}</p>
							<p class="modvis1-img r">
								<image class="modvis1-img1" src="/static/mihoyoimg/ic_post_comment_60.png" mode="" ></image>
							</p>
							<p class="r aose">{{item.comment}}</p>
							<p class="modvis1-img r">
								<image class="modvis1-img1" src="/static/mihoyoimg/icon_post_card_view48.png" mode="" ></image>
							</p>
						</view>
					</view>
				</view>
			</view>
			<view class="n"></view>
		</view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app';
import { ArticleStore } from '../../store/article'
import { cardArticleApi } from '../../api/modules/home.js'
import { onMounted, reactive, toRefs, watch } from 'vue'
const articleStore = ArticleStore()
const state = reactive({ artilceList: [] })
watch(
	() => articleStore.card,
	() => {
		init()
	}
)

const init = async () => {
	if (articleStore.card == '酒馆' || articleStore.card == '攻略' || articleStore.card === '硬核') {
		const { data } = await cardArticleApi({
			category: articleStore.card,
			pagenum: 1
		})
		state.artilceList = data.data
		console.log(data)
	}
}

onMounted(() => {
	init()
})
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

const { artilceList } = toRefs(state)
</script>

<style lang="scss">
.l{
	align-items: center;
	display: flex;
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
.minub{
	margin: 20rpx;
	.minub2{
		height: 60rpx;
		margin: 20rpx 0;
		.minub2-huyo1{
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			font-size: 13px;
			width: 560rpx;
		}
		.minub2-huyo{
			border: 1px solid #00c3ff;
			text-align: center;
			font-weight: 600;
			color: #00c3ff;
			font-size: 13px;
			width: 76rpx;
			margin-right: 40rpx;
		}
	}
	.minub1{
		height: 80rpx;
	}
	.admin3{
		line-height: 80rpx;
		font-size: 13px;
		color:#908484;
	}
}
.admin{
	margin: 20rpx;
	background-color: #f4f4f4;
	height: 80rpx;
	border-radius: 4px;
	padding: 5rpx;
	.admin3{
		line-height: 80rpx;
		font-size: 13px;
		color:#908484;
	}
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
.aboes{
	margin: 20rpx;
	background-color: #fff;
	.masto{
		margin: 20rpx;
		.modvis{
			height: 80rpx;
			.aose{
				margin-top: 5rpx;
				margin-left: 5rpx;
				font-size: 12px;
				color: #d2cccc;
			}
			.modvis1-img{
				width: 50rpx;
				height: 50rpx;
				margin-left: 40rpx;
				.modvis1-img1{
					width: 100%;
					height: 100%;
				}
			}
			.modvis1{
				margin-top: 20rpx;
				padding: 0 10rpx;
				border-radius: 4rpx;
				font-size: 13px;
				background-color: #f4f4f4;
				color: #999;
			}
		}
		.abion1{
			height: 300rpx;
			margin: 20rpx 0;
			.abion2{
				width: 100%;
				height: 100%;
				border-radius: 7px;
			}
		}
		.abion{
			font-size: 13px;
			line-height: 18px;
		    margin-top: 8px;
			color: #999;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
	}
	.taoto{
		height: 80rpx;
	}
	.modes{
		font-size: 11px;
		.vines{
			color: #d2cccc;
		}
	}
	.abo{
		width: 80rpx;
		height: 80rpx;
		margin-right: 10rpx;
		border-radius: 50%;
	}
}
.clion{
	background-color: #f4f4f4;
	border-radius: 7px;
	margin: 20rpx;
	padding: 20rpx;
	.conice{
		height: 80rpx;
		line-height: 80rpx;
		.clion1{
			float: left;
			font-weight: 700;
		}
		.clion2{
			float: right;
			font-size: 12px;
			color: #ccc;
		}
	}
	.abond{
		margin: 20rpx 0;
		display: flex;
		font-size: 12px;
		.abond1{
			color: #fff;
			width: 10%;
			height: 40rpx;
			font-size: 12px;
			padding: 0 10rpx ;
			background-color: #4141f5;
			border-radius: 3px;
		}
		.abond2{
			width: 70%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.abond3{
			font-size: 11px;
			margin-left: 10rpx;
			color: #d2cccc;
		}
	}
}
</style>
