// 匹配 img标签 增加 style样式
export const imgTagAddStyle = (htmldoc = '', style = '') => {
	// 正则匹配不含style="" 或 style='' 的img标签
	var reg1 = new RegExp('(i?)(\<p)(?!(.*?style=[\'"](.*)[\'"])[^\>]+\>)', 'gmi')

	// 给不含style="" 或 style='' 的img标签加上style=""
	htmldoc = htmldoc.replace(reg1, '$2 style=""$3')

	// 正则匹配含有style的img标签
	var reg2 = new RegExp('(i?)(\<p.*?style=[\'"])([^\>]+\>)', 'gmi')
	// 在img标签的style里面增加css样式(这里增加的样式：display:block;max-width:100%;height:auto;border:5px solid red;)
	htmldoc = htmldoc.replace(reg2, `$2${style}$3`)
	return htmldoc
}

// rpx转px
export const toPx = (rpx = 0) => {
	return Math.floor((uni.getWindowInfo().screenWidth / 750) * rpx)
}

// px转rpx
export const toRpx = (px = 0) => {
	return Math.floor(750 * (px / uni.getWindowInfo().screenWidth))
}