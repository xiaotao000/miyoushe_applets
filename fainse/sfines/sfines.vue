<template>
	<view>
		<view class="clion">
			<view class="conice">
				<view class="clion1">官方资讯</view>
				<view class="clion2">全部 ></view>
			</view>
			<view>
				<view class="abond">
					<view class="abond1">公告</view>
					<view class="abond2">【公告】米游社原神社区版规（11月17日更新</view>
					<view class="abond3">今天</view>
				</view>
				<view class="abond">
					<view class="abond1">资讯</view>
					<view class="abond2">【公告】米游社原神社区版规（11月17日更新</view>
					<view class="abond3">今天</view>
				</view>
				<view class="abond">
					<view class="abond1">活动</view>
					<view class="abond2">【公告】米游社原神社区版规（11月17日更新</view>
					<view class="abond3">今天</view>
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<view>
			<view class="aboes">
				<!-- 头像 -->
				<view class="taoto">
					<view class="l">
						<img class="l abo" src="https://img-static.mihoyo.com/communityweb/upload/82b1971538505baa318d7f9bc7bc8efe.png" alt="">
						<view class="l modes">
							<view>苏超越</view>
							<view class="vines">11-10</view>
						</view>
					</view>
					<view class="r zhu">
						<view class="r">...</view>
						<view class="r guan">+ 关注</view>
					</view>
				</view>
				<!-- 内容 -->
				<view class="masto">
					<view>【投票】女角色受欢迎度（43名角色）</view>
					<view class="abion">一个简易的汇总投票。！提示！如果你还没有做完某角色的相关任务，可能会被轻度剧透。！提示！觉得长可以适当跳过。#1～5【3.x角色】佣兵“炽鬃之狮”，黑皮/金色挑染/伪兽耳/披风，莽撞，飒爽，</view>
					<view class="abion1">
						<img class="abion2" src="https://upload-bbs.mihoyo.com/upload/2022/11/14/3c265b221bb5e8e3edbbdf39f09fe4bf_4997314291190074779.jpg" alt="">
					</view>
					<view class="modvis">
						<view class="l modvis1">原神同人</view>
						<view class="r">
							<p class="r aose">10万</p>
							<p class="modvis1-img r">
								<image class="modvis1-img1" src="/static/mihoyoimg/icon_like_gray_60.png" mode="" ></image>
							</p>
							<p class="r aose">47</p>
							<p class="modvis1-img r">
								<image class="modvis1-img1" src="/static/mihoyoimg/ic_post_comment_60.png" mode="" ></image>
							</p>
							<p class="r aose">10</p>
							<p class="modvis1-img r">
								<image class="modvis1-img1" src="/static/mihoyoimg/icon_post_card_view48.png" mode="" ></image>
							</p>
						</view>
					</view>
				</view>
			</view>
			<view class="n"></view>
		</view>
		<view>
			<view class="aboes">
				<!-- 头像 -->
				<view class="taoto">
					<view class="l">
						<img class="l abo" src="https://img-static.mihoyo.com/communityweb/upload/82b1971538505baa318d7f9bc7bc8efe.png" alt="">
						<view class="l modes">
							<view>苏超越</view>
							<view class="vines">11-10</view>
						</view>
					</view>
					<view class="r zhu">
						<view class="r">...</view>
						<view class="r guan">+ 关注</view>
					</view>
				</view>
				<!-- 内容 -->
				<view class="masto">
					<view>【投票】女角色受欢迎度（43名角色）</view>
					<view class="abion">一个简易的汇总投票。！提示！如果你还没有做完某角色的相关任务，可能会被轻度剧透。！提示！觉得长可以适当跳过。#1～5【3.x角色】佣兵“炽鬃之狮”，黑皮/金色挑染/伪兽耳/披风，莽撞，飒爽，</view>
					<view class="abion1">
						<img class="abion2" src="https://upload-bbs.mihoyo.com/upload/2022/11/14/3c265b221bb5e8e3edbbdf39f09fe4bf_4997314291190074779.jpg" alt="">
					</view>
					<view class="modvis">
						<view class="l modvis1">原神同人</view>
						<view class="r">
							<p class="r aose">10万</p>
							<p class="modvis1-img r">
								<image class="modvis1-img1" src="/static/mihoyoimg/icon_like_gray_60.png" mode="" ></image>
							</p>
							<p class="r aose">47</p>
							<p class="modvis1-img r">
								<image class="modvis1-img1" src="/static/mihoyoimg/ic_post_comment_60.png" mode="" ></image>
							</p>
							<p class="r aose">10</p>
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
	.zhu{
		color: #d2cccc;
		font-size: 20px;
	}
	.taoto{
		height: 80rpx;
	}
	.guan{
		margin-right: 20rpx;
		margin-top: 20rpx;
		color: #4141f5;
		font-size: 14px;
		padding: 0 10rpx;
		border: 2rpx solid #4141f5 ;
		border-radius: 4px;
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
