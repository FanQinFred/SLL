<template>
	<!-- <view class="box">
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
	</view> -->
	<view>
		<view class="box1">
			<text style="font-weight: bold;font-size: 24px; font-family: '楷体'; margin: 0px auto;">{{ type }}. {{ word }}</text>
		</view>
		<view class="box2">
			<u-tabs active-color="#b3c5ff" :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
			<view v-if="current == 0" class="picture"><image style="width: 240px; height:  240px" mode="aspectFill" :src="imgsrc"></image></view>
			<view v-else class="video">
				<video
					style="position:static; z-index: 1;"
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
		<view class="box3">
			<view class="interpretation" style="font-weight: normal; font-family: '楷体'"><text style="font-weight:bolder;">释义：</text>{{ interpretation }}</view>
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
			danmuValue: '',
			list: [
				{
					name: '图片'
				},
				{
					name: '视频'
				}
			],
			current: 0
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
		},
		change(index) {
			this.current = index;
			if (index == 0) {
			}
			if (index == 1) {
			}
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
.box1 {
	margin-top: 30px;
	width: 100%;
	height: 40px;
	text-align: center;
	justify-content: center;
}
.box2 {
	width: 100%;
	height: 280px;
	margin-top: 30px;
	position: relative;
}
.box3 {
	width: 100%;
	height: 240px;

	margin-top: 30px;
	position: relative;
}
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
	width: 240px;
	height: 240px;
	overflow: hidden;
	left: 0;
	right: 0;
	margin: 0 auto;
}
.interpretation {
	top:20px;
	height: 120px;
	width: 80%;
	position: absolute;
	overflow: hidden;
	left: 0;
	right: 0;
	margin: 0 auto;
}
.video {
	text-align: center;
	background-color: #006666;
	top: 60px;
	position: absolute;
	overflow: hidden;
	width: 80%;
	height: auto;
	left: 0;
	right: 0;
	margin: 0 auto;
	border-radius: 5%;
	box-shadow: 2px 2px 2px 2px #d4d0d0;
	z-index: 1;
}
</style>
