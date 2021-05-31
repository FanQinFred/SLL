'use strict';
// 获取数据库对象
const database = uniCloud.database();
// 通过数据库对象获取表对象
const userCollection = database.collection("history");
/**
 * 我们打算给他传一个user对象然后让其插入数据库中。
 */
exports.main = async (event, context) => {
    // 对前端参数进行解构
    let {tel,fid} = event
    // 对数据库进行添加操作
    let res = await userCollection.add({
        tel,
        fid
    })
    // 返回添加结果，也就是id
    return res
};