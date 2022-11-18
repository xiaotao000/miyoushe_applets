import {
	defineStore
} from 'pinia'
import {
	getUserinfoApi,
	loginApi,
	reguserApi
} from '../api/modules/user.js'

export const UserStore = defineStore('userStore', {
	state: () => ({
		avatarUrl: uni.getStorageSync('INFO') || '',
		token: uni.getStorageSync('TOKEN') || '',
		info: {}
	}),
	actions: {
		// 登入
		async login(info) {
			const res = await loginApi(info)
			if (res.status === 1) return
			uni.setStorageSync('TOKEN', res.data.token)
			this.token = res.data.token
			this.getUserinfo()
			uni.switchTab({ url: '/pages/my/my' })
		},
		// 注册
		async register(info) {
			 const res = await reguserApi(info)
			if (res.status === 1) return
			uni.setStorageSync('TOKEN', res.data.token)
			this.token = res.data.token
			this.getUserinfo()
			uni.switchTab({ url: '/pages/my/my' })
		},
		// 获取用户信息
		async getUserinfo() {
			const {
				data
			} = await getUserinfoApi()
			this.info = data
		},

		// 清理状态
		clearUser() {
			uni.removeStorageSync('TOKEN')
			this.token = ''
			this.info = {}
		}
	},
	getters: {

	}
})
