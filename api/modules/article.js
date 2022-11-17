import http from '@/api'

// 帖子发布
const uploadArticleApi = (data) => http.post('/my/user/addArticle', data)