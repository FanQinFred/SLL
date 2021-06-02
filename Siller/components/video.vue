<template>
	<view>
		<!-- <split heightSplit="5px" widthSplit="100%"></split>
		<view v-if="mainwords!=''">
		<view class="translate-history">
			<view class="text-history"><text>识别结果</text></view>
			<block v-for="(word, idx) of mainwords" :key="idx">
				<meaning :type="word.pos" :interpretation="word.text" :imgsrc="word.urlPic" :word="word.word" :videosrc="word.urlMov"></meaning>
			</block>
		</view>
		
		<split heightSplit="5px" widthSplit="100%"></split>
		<view class="translate-history">
			<view class="text-history"><text>相似结果</text></view>
			<block v-for="(word, idx) of mainwords" :key="idx">
				<meaning :type="word.pos" :interpretation="word.text" :imgsrc="word.urlPic" :word="word.word" :videosrc="word.urlMov"></meaning>
			</block>
		</view>
		</view>
		<VideoMune v-on:returnItem="returnItem"></VideoMune> -->
		<!-- <split heightSplit="100px" widthSplit="100%"></split> -->
		<split heightSplit="3px" widthSplit="100%"></split>
		<VideoMune v-on:returnItem="returnItem"></VideoMune>
		<split heightSplit="5px" widthSplit="100%"></split>
		
		<!-- <u-loading class="lding" color="red" size="150" :show="showloading" mode="circle"></u-loading> -->

	<!-- 	<view class="video">
			<video
				autoplay="true"
				loop="true"
				object-fit="contain"
				muted="false"
				show-mute-btn="false"
				:src="filePath"
				enable-danmu="false"
				danmu-btn="false"
				controls="false"
			></video>
		</view> -->
		<!-- <view>{{ filePath }}</view> -->
		<!-- <u-modal :v-model="true" :zoom="false"></u-modal> -->
		<u-popup v-model="show" mode="bottom" width="100%" height="80%">
			<split heightSplit="5px" widthSplit="100%"></split>
		<!-- 	<cCircle  :size="80" :percent="60"></cCircle> -->
               <!-- <arprogress percent="80"><text>80%</text></arprogress> -->
			   <!-- <loading ></loading> -->

			<view v-if="mainwords != ''">
				<view class="translate-history">
					<view class="text-history"><text>识别结果</text></view>
					<block v-for="(word, idx) of mainwords" :key="idx">
						<meaning :type="word.pos" :interpretation="word.text" :imgsrc="word.urlPic" :word="word.word" :videosrc="word.urlMov"></meaning>
					</block>
				</view>
				<!-- <hch-menu v-on:returnItem="returnItem"></hch-menu> -->
				<split heightSplit="5px" widthSplit="100%"></split>
				<view class="translate-history">
					<view class="text-history"><text>相似结果</text></view>
					<block v-for="(word, idx) of mainwords" :key="idx">
						<meaning :type="word.pos" :interpretation="word.text" :imgsrc="word.urlPic" :word="word.word" :videosrc="word.urlMov"></meaning>
					</block>
				</view>
			</view>
		</u-popup>
		<split heightSplit="5px" widthSplit="100%"></split>
		<view v-if="mainwords != ''">
			<view class="translate-history">
				<view class="text-history"><text>识别结果</text></view>
				<block v-for="(word, idx) of mainwords" :key="idx">
					<meaning :type="word.pos" :interpretation="word.text" :imgsrc="word.urlPic" :word="word.word" :videosrc="word.urlMov"></meaning>
				</block>
			</view>
			<!-- <hch-menu v-on:returnItem="returnItem"></hch-menu> -->
			<split heightSplit="5px" widthSplit="100%"></split>
			<view class="translate-history">
				<view class="text-history"><text>相似结果</text></view>
				<block v-for="(word, idx) of mainwords" :key="idx">
					<meaning :type="word.pos" :interpretation="word.text" :imgsrc="word.urlPic" :word="word.word" :videosrc="word.urlMov"></meaning>
				</block>
			</view>
		</view>
	</view>
</template>
<script>
import meaning from './meaning.vue';
import split from './split.vue';
import VideoMune from './hch-menu/video-menu.vue';
import config from '../config.js';
import util from '../utils/util.js';

export default {
	components: { meaning, split, VideoMune },

	data() {
		return {
			imgPath: '',
			filePath: '',
			mainwords: [],
			show: false,
			showloading:false
		};
	},
	props: {},
	watch: {
		filePath(val, oldVal) {
			let that = this;
			that.mainwords=[];
			that.show = true;
			
			// that.showloading = false;
			console.log('filePath = ' + val + ' , oldValue = ' + oldVal);
			let fileRequst = {
				token: ''
			};

			fileRequst.token = util.getToken();
			console.log(fileRequst);
			util.request(config.api.transfor1, fileRequst, 'POST')
				.then(res => {
					let items = res.item;
					console.log(items.length);

					for (let i = 0; i < items.length; i++) {
						if (items[i].result == '') {
							items[i].result = '1';
						}
						if (items[i].result != '') {
							let wordRequst = {
								token: '',
								fid: ''
							};
							wordRequst.token = util.getToken();
							wordRequst.fid = items[i].result;
							if (wordRequst.fid != '-1') {
								util.request(config.api.resource3, wordRequst, 'POST')
									.then(res => {
										console.log(res);
										if (res.code != '301') {
											console.log(res);
											that.mainwords.push(res);
										}
									})
									.catch(e => {
										that.loading = false;
										util.toastError(e.data.message || e.errMsg);
									});
							}
						}
					}
					
				})
				.catch(e => {
					that.loading = false;
					util.toastError(e.data.message || e.errMsg);
				});
				
		}
	},

	methods: {
		returnItem: function(filePath) {
			console.log(filePath);
			this.filePath = filePath;
		}
	},
	onLoad(e) {
		this.imgPath = e.filePath;
		console.log(e.filePath);
	},
	onShow(e) {}
};
</script>

<style lang="scss" scoped>
.translate-history {
	height: auto;
	width: 95%;
	border-color: #e1e1e1;
	border-width: 0px;
	border-style: solid;
	margin: 0px auto;
}
.text-history {
	width: 95%;
	height: 25px;
	line-height: 25px;
	vertical-align: middle;
	margin: 10px auto;

	font-size: 20px;
	font-weight: bolder;
	font-family: '楷体';
}

.video {
	text-align: center;
	background-color: #ffffff;
	// top: 60px;
	position: absolute;
	overflow: hidden;
	width: 99%;
	height: auto;
	left: 0;
	right: 0;
	margin: 8 auto;
	// border-radius: 5%;
	// box-shadow: 2px 2px 2px 2px #d4d0d0;
	// z-index: 1;
}

.lding {
	text-align: center;
	background-color: #ffffff;
	// top: 60px;
	position: absolute;
	overflow: hidden;
	height: auto;
	top:50px;
	left: 0;
	right: 0;
	margin: 8 auto;
	// border-radius: 5%;
	// box-shadow: 2px 2px 2px 2px #d4d0d0;
	// z-index: 1;
}


.u-progress-content {
	display: flex;
	align-items: center;
	justify-content: center;
}

.u-progress-dot {
	width: 16rpx;
	height: 16rpx;
	border-radius: 50%;
	background-color: #fb9126;
}

.u-progress-info {
	font-size: 28rpx;
	padding-left: 16rpx;
	letter-spacing: 2rpx;
}
</style>
