<template>
	<view>
		<!-- 背景 -->
		<view class="mihuyo">
			<image
				class="mihuyo1"
				src="../../static/bg_user_center_header.png"
			></image>
		</view>

		<template v-if="info.id">
			<!-- 头像 -->
			<view class="maines">
				<view class="maines3">
					<view class="maines1">
						<image
							class="maines1-img"
							:src="
								info.avatar
									? 'http://172.19.10.125:3000' + info.avatar
									: '/static/image/no-login.png'
							"
						></image>
					</view>
				</view>
				<view class="miond r" @click="admin">
					<image
						class="miond1"
						src="../../static/icon_user_info_edit.png"
					></image>
					编辑
				</view>
			</view>

			<!-- 姓名 -->
			<view class="name">
				<view class="name1">{{ info.nickname }}</view>
				<view class="name2">
					<image
						class="name2-img l"
						src="../../static/icon_user_home_desc_icon.png"
					></image>
					{{
						info.autograph
							? info.autograph
							: '系统原装签名，送给每一位小可爱~'
					}}
				</view>
				<view class="name2">
					<image
						class="name2-img l"
						src="/static/icon_user_ip.png"
					></image>
					ip属地：湖南
				</view>
			</view>
		</template>

		<!-- 没登录状态 -->
		<view v-else class="no-login" @click="goLogin">
			<view class="info">
				<image src="/static/image/no-login.png" mode=""></image>
				<view class="btn">点击登录</view>
			</view>
			<view class="desc">登录解锁更多精彩内容</view>
		</view>

		<template v-if="info.id">
			<!-- 粉丝数 -->
			<view class="finrse">
				<view class="finrse1 l">
					<view class="l fbg">0</view> <view class="l">粉丝</view>
				</view>
				<view class="finrse1 l">
					<view class="l fbg">0</view> <view class="l">关注</view>
				</view>
				<view class="finrse1 l">
					<view class="l fbg">0</view> <view class="l">获赞</view>
				</view>
			</view>
			<!-- 分割线 -->
			<view class="n"></view>

			<!-- tabs -->
			<view class="dmxia">
				<van-tabs sticky>
					<van-tab title="发布">
						<view v-if="state.bannerList.length >= 1">
							<!-- 内容 -->
							<view
								class="article-item"
								v-for="item in state.bannerList"
								:key="item.id"
							>
								<view class="aboes">
									<!-- 头像 -->
									<view class="taoto">
										<view class="l">
											<view class="l modes">
												<view>{{ item.author }}</view>
												<view class="vines">{{
													item.time
												}}</view>
											</view>
										</view>
										<view
											class="r modes1"
											@click="showPopup(item.id, item.category)"
											>...</view
										>
									</view>
									<!-- 内容 -->
									<view
										class="masto"
										@click="admines(item.id)"
									>
										<view>{{ item.title }}</view>
										<view class="abion van-ellipsis">
											<rich-text
												:nodes="item.introduce"
											></rich-text>
										</view>
										<view class="abion1">
											<img
												v-if="item.cover.length"
												class="abion2"
												:src="
													'http://172.19.10.125:3000' +
														item.cover[0].imgUrl
												"
												alt=""
											/>
										</view>
										<view class="modvis">
											<view class="l modvis1">{{
												item.section
											}}</view>
											<view class="r">
												<p class="r aose">
													{{ item.browse }}万
												</p>
												<p class="modvis1-img r">
													<image
														class="modvis1-img1"
														src="/static/mihoyoimg/icon_like_gray_60.png"
														mode=""
													></image>
												</p>
												<p class="r aose">
													{{ item.count }}
												</p>
												<p class="modvis1-img r">
													<image
														class="modvis1-img1"
														src="/static/mihoyoimg/ic_post_comment_60.png"
														mode=""
													></image>
												</p>
												<p class="r aose">
													{{ item.comment }}
												</p>
												<p class="modvis1-img r">
													<image
														class="modvis1-img1"
														src="/static/mihoyoimg/icon_post_card_view48.png"
														mode=""
													></image>
												</p>
											</view>
										</view>
									</view>
								</view>
								<view class="n"></view>
							</view>
							<van-popup
								:show="bpin"
								position="bottom"
								custom-style="height: 20%;"
								@close="onClose"
							>
							<view @click="goUpdate" class="edit">
								<view class="left">
									<image src="/static/9fe548b745380ddab7b423f089b1642.png" mode=""></image>
									<text>编辑</text>
								</view>
								<view class="right"> > </view>
							</view>
							<view @click="removeArtilce" class="remove">
								<view class="left">
									<image src="/static/2e3b8888e2323d428dceb7dc6f317ed.png" mode=""></image>
									<text>删除</text>
								</view>
								<view class="right"> > </view>
							</view>
							</van-popup>
						</view>
						<view class="faobu" v-else>
							<view class="njh"
								><image
									class="faobu1"
									src="../../static/noData.png"
								></image
							></view>
							<view class="faobu2">空空如也</view>
						</view>
					</van-tab>
					<van-tab title="评论">
						<view class="faobu">
							<view class="njh"
								><image
									class="faobu1"
									src="../../static/noData.png"
								></image
							></view>
							<view class="faobu2">你暂时没有评论</view>
						</view>
					</van-tab>
					<van-tab title="收藏">
						<view class="faobu">
							<view class="njh"
								><image
									class="faobu1"
									src="../../static/noData.png"
								></image
							></view>
							<view class="faobu2">暂无收藏</view>
						</view>
					</van-tab>
					<van-tab title="合集">
						<view class="faobu">
							<view class="njh"
								><image
									class="faobu1"
									src="/static/icon_status_collection_no_content.png"
								></image
							></view>
							<view class="faobu2">暂无合集</view>
						</view>
					</van-tab>
				</van-tabs>
			</view>
		</template>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { UserStore } from '../../store/user'
import { reactive, ref, toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import { getArticleApi, removeArticleApi } from '../../api/modules/user'
const userStore = UserStore()
// 跳转登录
const state = reactive({ bannerList: [] })
const bpin = ref(false)
const category = ref('')
const goLogin = () => {
	uni.navigateTo({ url: '/subpkg/login/login' })
}
const removeId = ref()
const showPopup = (id, cate) => {
	bpin.value = true
	removeId.value = id
	category.value = cate
}

const onClose = () => {
	bpin.value = false
	removeId.value = ''
	category.value = ''
}
const admines = id => {
	uni.navigateTo({ url: `/subpkg/article-details/article-details?id=${id}` })
}

const admin = () => {
	uni.navigateTo({ url: '/fainse/bjtpes/bjtpes' })
}

const init = async () => {
	const { data } = await getArticleApi()
	state.bannerList = data
}
// 删除帖子
const removeArtilce = () => {
	uni.showModal({
			title: '提示',
			content: '你确定要删除?',
			cancelText: '容我想想',
			confirmText: '狠心删除',
			success: async ({ confirm }) => {
				if (confirm) {
					await removeArticleApi(removeId.value)
					bpin.value = false
					uni.$Toast('操作成功')
					init()
				}
			}
		})
	 
}
const goUpdate = () => {
	if (category.value === '酒馆' || category.value === '硬核' || category.value === '攻略') {
		bpin.value = false
		uni.navigateTo({
			url: '/subpkg/upload-posts/upload-posts?id='+ removeId.value
		})
	}else {
		bpin.value = false
		uni.navigateTo({
			url: '/subpkg/upload-picture/upload-picture?id='+ removeId.value
		})
	}
}
// 页面加载
onLoad(message => {
})

// 页面显示
onShow(() => {
	userStore.getUserinfo()
	init()
})

// 页面隐藏
onHide(() => {})

// 页面分享(不定义该函数 页面将无法分享)
onShareAppMessage(() => {})
const { info } = storeToRefs(userStore)
</script>

<style lang="scss">
.van-popup {
	padding: 32rpx;
	box-sizing: border-box;
	.edit {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24rpx;
		.left {
			image {
				width: 32rpx;
				height: 32rpx;
			}
			text {
				margin-left: 32rpx;
			}
		}
		.right {
			color: #BFBFBF;
		}
	}
	.remove {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left {
			image {
				width: 32rpx;
				height: 32rpx;
			}
			text {
				margin-left: 32rpx;
			}
		}
		.right {
			color: #BFBFBF;
		}
	}
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
.finrse {
	height: 80rpx;
	margin: 20rpx;
	padding: 10rpx;
	font-size: 12px;
	color: #ccc;
	.finrse1 {
		margin-right: 40rpx;
		height: 100%;
		line-height: 80rpx;
		.fbg {
			font-size: 14px;
			color: #000;
			margin-right: 10rpx;
		}
	}
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
			height: 350rpx;
			overflow: hidden;
			border-radius: 7px;
			margin: 0 auto;
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
	.taoto {
		height: 80rpx;
	}
	.modes {
		font-size: 11px;
		.vines {
			color: #d2cccc;
		}
	}
	.aboesit {
	}
	.modes1 {
		text-align: center;
		line-height: 40rpx;
		color: #d2cccc;
		width: 80rpx;
		height: 40rpx;
	}
	.abo {
		width: 80rpx;
		height: 80rpx;
		margin-right: 10rpx;
		border-radius: 50%;
	}
}
.name {
	margin: 20rpx;
	padding-bottom: 40rpx;
	border-bottom: 1px solid #f4f4f4;
	.name2 {
		font-size: 12px;
		margin: 10rpx 0;
		color: #ccc;
		height: 40rpx;
		.name2-img {
			margin-top: 4rpx;
			margin-right: 10rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}
	.name1 {
		font-size: 15px;
		font-weight: 600;
	}
}

.dmxia {
	margin: 20rpx;
	.faobu {
		height: 800rpx;
		margin: 0 auto;
		.njh {
			padding-top: 60rpx;
			width: 300rpx;
			margin: 0 auto;
			.faobu1 {
				width: 300rpx;
				height: 300rpx;
				margin: 0 auto;
			}
		}
		.faobu2 {
			margin: 0 auto;
			text-align: center;
			color: #ccc;
		}
	}
	.van-tabs__wrap {
		border-bottom: 1px solid #f4f4f4;
	}
	.van-tabs__line {
		background-color: #1aa3ff;
		margin: 0 auto;
		left: -2rpx;
		width: 50rpx !important;
		border-bottom: 1px solid #1aa3ff;
	}
	.van-tab--active {
		font-weight: 600;
		border-bottom: 1px solid #1aa3ff;
	}
}
.maines {
	margin: 20rpx 20rpx 60rpx 20rpx;
	height: 80rpx;
	.miond {
		right: 40rpx;
		width: 120rpx;
		font-size: 13px;
		padding: 8rpx 12rpx 10rpx 14rpx;
		color: #1aa3ff;
		border-radius: 4px;
		text-align: center;
		border: 1px solid #1aa3ff;
		.miond1 {
			width: 20rpx;
			height: 20rpx;
		}
	}
	.maines3 {
		position: absolute;
		.maines1 {
			width: 180rpx;
			height: 180rpx;
			border-radius: 50%;
			position: relative;
			border: 2px solid #fff;
			overflow: hidden;
			top: -80rpx;
			.maines1-img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
.mihuyo {
	height: 400rpx;
	border: 0 6px;
	overflow: hidden;
	.mihuyo1 {
		width: 100%;
		height: 100%;
	}
}

// 没登录
.no-login {
	margin: 20rpx 20rpx 60rpx 20rpx;
	position: relative;
	.info {
		width: 180rpx;
		image {
			width: 180rpx;
			height: 180rpx;
			position: absolute;
			top: -80rpx;
			border: 2rpx solid #efefef;
			border-radius: 50%;
		}
		.btn {
			padding-top: 120rpx;
			text-align: center;
			font-size: 44rpx;
			margin-bottom: 10rpx;
		}
	}
	.desc {
		font-size: 30rpx;
	}
}
</style>
