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
			<van-tabs @click="tabChage" title-active-color="#1B1B1D" title-inactive-color="#C1C1C3" color="#3FA6F3">
			  <van-tab title="观测枢" name="观测枢"></van-tab>
			  <van-tab title="发现" name="发现"></van-tab>
			  <van-tab title="酒馆" name="酒馆"></van-tab>
			  <van-tab title="攻略" name="攻略"></van-tab>
			  <van-tab title="同人图" name="同人图"></van-tab>
			  <van-tab title="cos" name="cos"></van-tab>
			  <van-tab title="硬核" name="硬核"></van-tab>
			</van-tabs>
		</view>	
		
		<scroll-view scroll-y="true" class="scroll-center">
			<!-- 内容 -->
			<view v-if="card === '观测枢'" class="cart-item">
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
					<scroll-view scroll-x="true" enable-flex="true" class="banner" >
						<view v-for="item in exploreData" :key="item.id" class="banner-item">
							<!-- 左边 -->
							<image class="img" :src="item.imgUrl" mode=""></image>
							<!-- 右边 -->
							<view class="right">
								<view class="banner-title">
									<image src="../../static/image/download4.png" mode=""></image>
									<text>{{ item.title }}</text>
									<image src="../../static/image/download4.png" mode=""></image>
								</view>
								<view class="center" v-for="item2 in item.itemData" :key="item2.itemId">
									<image src="../../static/image/download6.png" mode=""></image>
									<text>{{ item2.name }}</text>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
				
				<!-- 最新内容 -->
				<view class="newest-center">
					<view class="title">
						<view class="left">
							<image src="../../static/image/newest.png" mode=""></image>
							<text>最新内容</text>
						</view>
						<view class="right">
							<text>更多</text>
							<van-icon name="arrow" />
						</view>
					</view>
					<view class="newest-item" v-for="item in newestData" :key="item.newestId">
						<!-- 左 -->
						<image :src="item.imgUrl" mode=""></image>
						<!-- 右 -->
						<view class="newest-right">
							<view class="right-title">{{ item.title }}</view>
							<view class="info">
								<view class="left">
									<image :src="item.headImag" mode=""></image>
									<text>{{ item.author }}</text>
								</view>
								<view class="time">{{ item.time }}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- 专题推荐 -->
				<view class="special-view">
					<view class="title">
						<image src="../../static/image/special.png" mode=""></image>
						<text>专题推荐</text>
					</view>
					<view class="special-tag">
						<view v-for="item in specialData" :key="item.specialId" class="tag-item">
							<image :src="item.imgUrl" mode="aspectFill"></image>
							<view class="tag-center">
								<view class="tag-title">{{ item.title }}</view>
								<view class="tag-desc">{{ item.desc }}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- 索引分类 -->
				<view class="Indexes">
					<view class="title">
						<image src="/static/image/Indexes.png" mode=""></image>
						<text>索引分类</text>
					</view>
					<view class="Indexes-tag">
						<view v-for="item in IndexesData" :key="item.id" class="tag-item">
							<image :src="item.imgUrl" mode="aspectFill"></image>
							<text>{{ item.name }}</text>
						</view>
					</view>
				</view>
				
				<!-- 提示 -->
				<view class="tips">
					申请观测枢编辑 | 关于观测区 | 建议与反馈
				</view>
				
				<!-- 公众号 -->
				<view class="image"> <image src="/static/image/36fdebe.png" mode=""></image> </view>
			</view>
		</scroll-view>
		<sfinesVue v-if="card === '发现'"></sfinesVue>
		<homograph v-if="card === '同人图' || card === 'cos'"></homograph>
		<jioguanVue v-if="card === '酒馆' || card === '硬核' || card === '攻略'"></jioguanVue>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app';
import { reactive, ref, toRefs } from "vue";
import { bannerApi } from '../../api/modules/home';
import homograph from '../../components/homograph/homograph.vue';
import { ArticleStore } from '../../store/article';
import { storeToRefs } from 'pinia';
import jioguanVue from '../../components/jioguan/jioguan.vue';
import sfinesVue from '../../components/sfines/sfines.vue';
import { exploreData, gridData, hotData, IndexesData, newestData, specialData } from '../../utils/type_data';
import './home.scss'

const state = reactive({ bannerList: [] })
const articleStore = ArticleStore()

// 获取轮播图数据
const getBanner = async () => {
	 const { data } = await bannerApi()
	 state.bannerList = data
}
const tabChage = (e) => {
	const { name } = e.detail
	articleStore.card = name
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
const { card } =  storeToRefs(articleStore)
</script>

<style lang="scss" scoped>
.scroll-center {
	// height: calc(100vh - 120rpx - 44rpx);
}
</style>
