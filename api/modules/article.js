import http from '@/api'

// 帖子发布
export const uploadArticleApi = (data) => http.post('/my/user/addArticle', data)

// 修改用户帖子
export const updateArticleApi = (data) => http.put('/my/user/updateArticle', data)

// 获取文章详情
export const getDetailsApi = (data) => http.get('/api/home/articledDetails', data)