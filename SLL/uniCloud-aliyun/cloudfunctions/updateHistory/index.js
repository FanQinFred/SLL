'use strict';
// 获取数据库对象
const database = uniCloud.database();
// 通过数据库对象获取表对象
const historyCollection = database.collection("history");
/**
 * 我们打算给他传一个user对象然后让其插入数据库中。
 */
exports.main = async (event, context) => {
    // 对前端参数进行解构
    let {tel,fid} = event
    // 对数据库进行添加操作
	var temp = []; //一个新的临时数组
	for(var i = 0; i < fid.length; i++){
	    if(temp.indexOf(fid[i]) == -1){
	        temp.push(fid[i]);
	    }
	}
	let res = await historyCollection.where({tel:tel}).update({
	    'fid':temp
	  });
	  
    // 返回添加结果，也就是id
    return res
};