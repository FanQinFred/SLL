<template>
	<view class="box">
		<view class="word">
			<text style="font-weight: bold; font-family: '楷体'; margin-left: 5px;">{{ type }}. {{ word }}</text>
		</view>
		<view class="picture"><image style="width: 120px; height: 120px" mode="aspectFill" :src="imgsrc"></image></view>
		<view class="interpretation" style="font-weight: normal; font-family: '楷体'">{{ interpretation }}</view>
		<view class="video">
			<video style="position:static; z-index: 1;"
				id="myVideo"
				autoplay="true"
				loop="true"
				object-fit="contain"
				muted="false"
				show-mute-btn="true"
				src="https://sllvideo.oss-cn-beijing.aliyuncs.com/test01.mp4"
				@error="videoErrorCallback"
				:danmu-list="danmuList"
				enable-danmu="true"
				danmu-btn="true"
				controls="true"
			></video>
		</view>
	</view>
</template>

<script>
export default {
	name: 'meaning',
	data() {
		return {
			src: '',
			danmuList: [
				{
					text: '第 1s 出现的弹幕',
					color: '#ff0000',
					time: 1
				},
				{
					text: '第 3s 出现的弹幕',
					color: '#ff00ff',
					time: 3
				}
			],
			danmuValue: ''
		};
	},
	onReady() {},
	methods: {
		sendDanmu: function() {
			this.videoContext.sendDanmu({
				text: this.danmuValue,
				color: this.getRandomColor()
			});
			this.danmuValue = '';
		},
		videoErrorCallback: function(e) {
			// uni.showModal({
			// 	content: e.target.errMsg,
			// 	showCancel: false
			// });
		},
		getRandomColor: function() {
			const rgb = [];
			for (let i = 0; i < 3; ++i) {
				let color = Math.floor(Math.random() * 256).toString(16);
				color = color.length == 1 ? '0' + color : color;
				rgb.push(color);
			}
			return '#' + rgb.join('');
		}
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
			default: 'https://sllvideo.oss-cn-beijing.aliyuncs.com/test01.mp4'
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
.video {
	text-align: center;
	background-color: #006666;
	top: 200px;
	position: absolute;
	overflow: hidden;
	width: 100%;
	height: auto;
	margin: 0 auto;
	border-radius: 10%;
	box-shadow: 5px 5px 5px 5px #d4d0d0;
	z-index: 10;
}
</style>
