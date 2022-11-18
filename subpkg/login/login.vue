<template>
	<view class="login-view">
		<!-- 图片 -->
		<view class="backdrop">
			<image src="/static/bg_user_center_header.png" mode=""></image>
		</view>

		<!-- 登录 -->
		<form v-if="type === 'login'" @submit="ooSubmit">
			<view class="center">
				<view class="title">账号密码登录</view>
				<van-field
					:value="state.phone"
					clearable
					placeholder="手机号/邮箱/用户名"
					data-name="phone"
					@change="handleInput"
				/>
				<van-field
					:value="state.password"
					type="password"
					clearable
					placeholder="密码"
					right-icon="closed-eye"
					data-name="password"
					@change="handleInput"
				/>
				<view class="btn" @click="switchType('register')"
					>立即注册</view
				>
				<van-checkbox
					:value="isCheck"
					icon-size="34rpx"
					@change="checkChange"
				>
					我已阅读并同意<text>《米哈游用户协议》</text>和<text
						>《米哈游隐私政策》</text
					>
				</van-checkbox>
				<button class="button" form-type="submit">登录</button>
			</view>
		</form>
		<!-- 注册 -->
		<form @submit="ooSubmit" v-else>
			<view class="center">
				<view class="title">注册用户</view>
				<van-field
					:value="state.phone"
					clearable
					placeholder="手机号登录/注册"
					data-name="phone"
					@change="handleInput"
				/>
				<van-field
					:value="state.code"
					@change="handleInput"
					data-name="code"
					center
					clearable
					placeholder="验证码"
					use-button-slot
				>
					<van-button
						slot="button"
						size="small"
						type="primary"
						color="#1296db"
						@click="getCode"
					>
						发送验证码
					</van-button>
				</van-field>
				<van-field
					:value="state.password"
					type="password"
					clearable
					placeholder="密码"
					right-icon="closed-eye"
					data-name="password"
					@change="handleInput"
				/>
				<view class="btn" @click="switchType('login')">立即登录</view>
				<van-checkbox
					:value="isCheck"
					icon-size="34rpx"
					@change="checkChange"
				>
					我已阅读并同意<text>《米哈游用户协议》</text>和<text
						>《米哈游隐私政策》</text
					>
				</van-checkbox>
				<button form-type="submit" class="button">注册</button>
			</view>
		</form>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { reactive, toRefs } from 'vue'
import { sendCodeApi } from '../../api/modules/user.js';
import { UserStore } from '../../store/user.js'

const state = reactive({
	phone: '',
	password: '',
	code: '',
	type: 'login',
	isCheck: false
})
const userStore = UserStore()

// * 输入框双向绑定
const handleInput = e => {
	const value = e.detail
	const { name } = e.target.dataset
	state[name] = value
}

// * 切换操作类型
const switchType = type => {
	state.type = type
	state.phone = ''
	state.password = ''
	state.code = ''
}

const getCode = async () => {
	const { data } = await sendCodeApi({phone: state.phone})
	state.code = data
}
const ooSubmit = async () => {
	const { phone, password, isCheck, code, type } = state
	if (!phone) return uni.$Toast('请输入手机号')
	if (!password) return uni.$Toast('请输入手机号')
	if (!isCheck) return uni.$Toast('请勾选权限')
	if(!code && type === 'register') return uni.$Toast('请输入验证码')
	if (type === 'login') {
		await userStore.login({ phone, password })
	} else {
		await userStore.register({phone, code, password})
	}
}

// 复选框
const checkChange = e => {
	const value = e.detail
	state.isCheck = value
}

// 页面加载
onLoad(message => {})

// 页面显示
onShow(() => {})

// 页面隐藏
onHide(() => {})

// 页面分享(不定义该函数 页面将无法分享)
onShareAppMessage(() => {})

const { phone, password, code, type, isCheck } = toRefs(state)
</script>

<style lang="scss">
.backdrop {
	height: 300rpx;
	image {
		width: 100%;
		height: 100%;
	}
}
.center {
	.title {
		margin: 30rpx;
		font-size: 40rpx;
	}
	.btn {
		margin: 20rpx 0 0 30rpx;
		font-size: 28rpx;
		color: #1296db;
	}
	.van-checkbox {
		margin: 20rpx 0 0 30rpx;
		font-size: 24rpx;
		text {
			color: #1296db;
		}
	}
	.van-field {
		.van-button {
			margin: 0;
		}
	}
	.button {
		margin: 30rpx;
		width: 90%;
		background-color: #1296db;
		color: #fff;
		border-radius: 10rpx;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
	}
}
</style>
