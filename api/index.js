import { $http } from '../utils/request.js'
$http.baseUrl = 'http://172.16.9.93:3000'

$http.beforeRequest = function(res) {
	res.header.Authorization = 'Bearer ' + uni.getStorageSync('TOKEN') || ''
	console.log('拦截前');
}

	
$http.afterRequest = function (){
	uni.hideLoading()
}

export default $http