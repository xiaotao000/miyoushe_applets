import http from '@/api'

// 图片上传
export const coverApi = (data) => http.post('/api/cover', data)