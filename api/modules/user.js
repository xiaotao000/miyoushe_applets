import http from '@/api'

// 注册
export const reguserApi  = (data) => http.post('/api/reguser', data)

// 登录
export const loginApi  = (data) => http.post('/api/login', data)

// 验证码
export const sendCodeApi  = (data) => http.post('/api/sendCode', data)

// 获取用户信息
export const getUserinfoApi  = () => http.get('/my/userinfo')

// 修改用户信息
export const updateInfoApi  = (data) => http.post('/my/update/userinfo', data)

// 获取用户发布的帖子
export const getArticleApi  = () => http.get('/my/user/article')

// 删除用户帖子
export const removeArticleApi  = (id) => http.delete(`/my/user/removeArticle/${id}`)