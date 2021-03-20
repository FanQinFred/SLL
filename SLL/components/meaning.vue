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
export default {
	name: 'meaning',
	data() {
		return {};
	},
	onReady() {},
	methods:{
		toDetail(){
			let that=this;
			uni.navigateTo({
				url: '/pages/detail/detail?word=' + that.word+ "&type="+that.type+"&interpretation="+that.interpretation+"&imgsrc="+that.imgsrc+"&videosrc="+that.videosrc,
			})
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
