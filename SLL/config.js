let host = 'http://dactylology.frogking.cn'

// 是否是调试模式。如果是生产环境，请设置为false
const debug = false

// 程序信息，置空则不显示
const info = {
	about: 'help/about', // "关于我们"的文档标识
	version: 'v1.5.1',
	copyright: 'BookCode.CN',
	license: 'Apache 2.0',
	author: 'SSL',
}
// SLL API
const api = {
	sendMessage: `${host}/loginService/sendMessage`,
	register: `${host}/loginService/register`,
}

module.exports = {
	api,
	debug,
	info,
}
