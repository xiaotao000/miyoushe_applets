import { $http } from '../utils/request.js'
$http.baseUrl = 'http://172.19.10.192:3000'

$http.beforeRequest = function(res) {
	console.log('拦截前');
}

	
$http.afterRequest = function (){
	uni.hideLoading()
}

export default $http