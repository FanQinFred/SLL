'use strict';
const db = uniCloud.database() //对数据库的对象获取；
const collection = db.collection('history') //对holle数据库的获取；

exports.main = async (event, context) => {

	let {
		tel
	} = event
	// 查找数据 寻找key为 更新出现的
	if(tel!='undefined'){
		let res = await collection.where({
			tel: tel
		}).get()
	}else{
		let res=[];
	}

	console.log(JSON.stringify(res));

	return {
		code: 200,
		msg: '查询成功',
		data: res
	}
}
