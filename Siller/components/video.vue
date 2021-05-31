<template>
	<view>
		<!-- <split heightSplit="100px" widthSplit="100%"></split> -->
		<split heightSplit="5px" widthSplit="100%"></split>
		<view v-if="mainwords!=''">
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
		<VideoMune v-on:returnItem="returnItem"></VideoMune>
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
			mainwords: []
		};
	},
	props: {},
	watch: {
		filePath(val, oldVal) {
			let that=this;
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
						if(items[i].result == ''){
							items[i].result='1';
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
</style>
