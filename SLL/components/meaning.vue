<template>
	<view class="box" @click="toDetail">
		<view class="word">
			<text style="font-weight: bold; font-family: '楷体'; margin-left: 5px;">{{ type }}. {{ word }}</text>
		</view>
		<view class="picture"><image style="width: 120px; height: 120px" mode="aspectFill" :src="imgsrc"></image></view>
		<view class="interpretation" style="font-weight: normal; font-family: '楷体'">{{ interpretation }}</view>
	</view>
</template>

<script>
	import config from "../config.js";
	import util from "../utils/util.js";
	import api from "../utils/api.js";
	
export default {
	name: 'meaning',
	data() {
		return {};
	},
	onReady() {},
	methods:{
		toDetail(){
			let user = util.getUser();
			let that=this;
			uni.navigateTo({
				url: '/pages/detail/detail?word=' + that.word+ "&type="+that.type+"&interpretation="+that.interpretation+"&imgsrc="+that.imgsrc+"&videosrc="+that.videosrc,
			});
			
			//获取历史记录 判断是否已存在历史记录
			uniCloud.callFunction({
			    name: "getHistory",
			    data: {
			        tel: user.uid,
			    },
			    success: (res) => {
					console.log(res);
			        console.log(res.result.data.data[0].length==0);
					//不存在数据
					if(res.result.data.data[0].length==0){
						uniCloud.callFunction({
						    name:"addHistory",
						    data:{
						        tel: user.uid,
						        fid:[]
						    },
						    success: (res) => {
						        console.log(res)
						    },
						    fail: (err) => {
						        console.log(err)
						    }
						})
					}
					let oldhistory=res.result.data.data[0].fid;
					
					let fid=util.getFidByWord(that.word);
					oldhistory.push(fid);
					uniCloud.callFunction({
					        name:"updateHistory",
					        data:{
					            tel: user.uid,
					            fid:oldhistory
					        },
					        success: (res) => {
					            console.log(res)
					        },
					        fail: (err) => {
					            console.log(err)
					        }
					    })
					

			    },
			    fail: (err) => {
			        console.log(err);
			    },
			});
			
			
		},
	},
	props: {
		type: {
			type: String,
			default: 'adj'
		},
		interpretation: {
			type: String,
			default: '一手食指指眼部'
		},
		word: {
			type: String,
			default: '眼睛'
		},
		imgsrc: {
			type: String,
			default: 'http://file.bookcodes.cn/pictures/eye.jpg'
		},
		videosrc: {
			type: String,
			default: 'http://file.bookcodes.cn/pictures/eye.jpg'
		}
	}
};
</script>

<style lang="scss">
.box {
	margin: 5px auto;
	position: relative;
	width: 95%;
	height: 190px;
	// 边界线 后面删除
	border-radius: 10%;
	box-shadow: 2px 2px 2px 2px #d4d0d0;
}
.word {
	border-radius: 5%;
	background-color: rgb(245, 236, 247);
	line-height: 40px;
	vertical-align: middle;
	position: absolute;
	height: 40px;
	width: 95%;
	left: 0;
	right: 0;
	margin: 0 auto;
	top: 10px;
	overflow: hidden;
}
.picture {
	position: absolute;
	top: 55px;
	left: 10px;
	width: 120px;
	height: 120px;
	overflow: hidden;
}
.interpretation {
	height: 120px;
	width: 60%;
	position: absolute;
	top: 55px;
	left: 141px;
	overflow: hidden;
}
</style>
