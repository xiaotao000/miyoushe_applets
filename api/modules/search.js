import http from '@/api'

// 帖子发布
export const searchApi = keyword => http.get(`/api/home/search?search=${keyword}`)