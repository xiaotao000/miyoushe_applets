import http from '@/api'

export const bannerApi = () => http.get('/api/home/rotation')