import http from '@/api'

// 获取轮播图
export const bannerApi = () => http.get('/api/home/rotation')

// 获取分类数据
export const cardArticleApi = (data) => http.get('/api/home/app-article', data)