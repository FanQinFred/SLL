let host = 'https://dactylology.frogking.cn'

// 是否是调试模式。如果是生产环境，请设置为false
const debug = false

// 程序信息，置空则不显示
const info = {
	about: 'help/about', // "关于我们"的文档标识
	version: 'v1.5.1',
	copyright: 'BookCode.CN',
	license: 'Apache 2.0',
	author: 'Siller',
}
// SLL API
const api = {
	sendMessage: `${host}/loginService/sendMessage`,
	register: `${host}/loginService/register`,
	login: `${host}/loginService/login`,
	unLogin: `${host}/loginService/unLogin`,
	transfor2: `${host}/dactylology/transfor2`,
	resource3:`${host}/resourceService/resource3`,
	transfor1:`${host}/dactylology/transfor1`,
}

module.exports = {
	api,
	debug,
	info,
}
