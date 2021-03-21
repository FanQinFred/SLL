<template>
	<view>
		<!-- 头部导航 -->
		<u-navbar :is-back="false" back-text="" title=""><headernav class="slot-wrap"></headernav></u-navbar>
		<!-- <split heightSplit="5px" widthSplit="100%"></split> -->
		<!-- 翻译类型选择 -->
		<u-sticky offset-top="140"><u-tabs active-color="#b3c5ff" :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs></u-sticky>
		<split heightSplit="1px" widthSplit="100%"></split>
		<!-- 文本 -->
		<view v-if="current == 0">
			<view class="translate-content"><textarea @input="textareaInput" @focus="textFocus" @blur="textBlur" placeholder="请输入..."></textarea></view>
			<split heightSplit="5px" widthSplit="100%"></split>

			<!-- 翻译结果 -->
			
			<view class="translate-history">
				<view v-if="tranlateWord != ''&&mainwords!=''">
					<view class="text-history"><text>翻译结果</text></view>
					<block v-for="(word, idx) of mainwords" :key="idx">
						<meaning :type="word.pos" :interpretation="word.text" :imgsrc="word.urlPic" :word="word.word" :videosrc="word.urlMov"></meaning>
					</block>
						<split heightSplit="5px" widthSplit="100%"></split>

				</view>
				<view v-if="tranlateWord == ''  && words == ''">
					<view class="text-history"><text>翻译历史</text></view>
					<block v-for="(word, idx) of historywords" :key="idx">
						<meaning :type="word.pos" :interpretation="word.text" :imgsrc="word.urlPic" :word="word.word" :videosrc="word.urlMov"></meaning>
					</block>
						<split heightSplit="5px" widthSplit="100%"></split>

				</view>
				<view v-else>
					<view v-if="relatedwords.length != 0">
					<view class="text-history"><text>相关词语</text></view>
						<block v-for="(word, idx) of relatedwords" :key="idx">
							<meaning :type="word.pos" :interpretation="word.text" :imgsrc="word.urlPic" :word="word.word" :videosrc="word.urlMov"></meaning>
						</block>
					</view>
				</view>
			</view>

			<split heightSplit="15px" widthSplit="100%"></split>

		</view>
		<!-- 图片 -->
		<view v-if="current == 1"><photo :filePath="filePath"></photo></view>
		<!-- 视频 -->
		<view v-if="current == 2"><videoInspect :videoPath="videoPath"></videoInspect></view>
	</view>
</template>

<script>
import config from '../../config.js';
import util from '../../utils/util.js';
import api from '../../utils/api.js';

import meaning from '../../components/meaning.vue';
import split from '../../components/split.vue';
import photo from '../../components/photo.vue';
import videoInspect from '../../components/video.vue';
import headernav from '../../components/headernav.vue';

export default {
	components: { meaning, split, photo, videoInspect, headernav },
	data() {
		return {
			list: [
				{
					name: '文本'
				},
				{
					name: '图片'
				},
				{
					name: '视频'
				}
			],
			current: 0,
			filePath: '',
			videoPath: '',
			tranlateWord: '',
			relatedwordsid: [],
			mainwordsid: [],
			relatedwords: [],
			mainwords: [],
			focus: false,
			words: [],
			fids: [],
			historyfids: [],
			historywords: []
		};
	},
	methods: {
		change(index) {
			this.current = index;
			if (index == 1) {
				// uni.chooseImage({
				// 	count: 1, //默认9
				// 	sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				// 	sourceType: ['camera'], //从相册选择
				// 	success: function(res) {
				// 		this.filePath = JSON.stringify(res.tempFilePaths);
				// 	}
				// });
			}
			if (index == 2) {
				// uni.chooseVideo({
				// 	count: 1,
				// 	sourceType: ['camera'],
				// 	success: function(res) {
				// 		self.src = res.tempFilePath;
				// 		this.videoPath = JSON.stringify(res.tempFilePaths);
				// 	}
				// });
			}
		},
		textareaInput(e) {
			let that = this;
			//清空变量
			that.words.splice(0, that.words.length);
			that.relatedwordsid.splice(0, that.relatedwords.length);
			that.mainwordsid.splice(0, that.mainwords.length);
			that.relatedwords.splice(0, that.relatedwords.length);
			that.mainwords.splice(0, that.mainwords.length);

			this.tranlateWord = e.detail.value;
			console.log(that.tranlateWord);
			let requestData = {
				sentence: '',
				token: ''
			};
			requestData.sentence = this.tranlateWord;
			requestData.token = util.getToken();

			util.request(config.api.transfor2, requestData, 'POST')
				.then(res => {
					for (let i = 0; i < res.item.length; i++) {
						// 保存主词和相关词的fid
						let fids = [];
						if (res.item[i].result != '-1') {
							fids = res.item[i].result.split(',');
							console.log(fids);
						}
						if (fids.length != 0) {
							that.mainwordsid.push(fids[0]);
						}
						for (let k = 1; k < fids.length; k++) {
							if (fids.length > 1) {
								that.relatedwordsid.push(fids[k]);
							}
						}

						for (let j = 0; j < that.mainwordsid.length; j++) {
							let wordRequst = {
								token: '',
								fid: ''
							};
							wordRequst.token = util.getToken();
							wordRequst.fid = fids[i];
							if (wordRequst.fid != '-1') {
								util.request(config.api.resource3, wordRequst, 'POST')
									.then(res => {
										console.log(res);
										if (res.code != '301') {
											console.log(res);
											that.mainwords.push(res);
											util.setFidByWord(res.word, wordRequst.fid);
										}
									})
									.catch(e => {
										that.loading = false;
										util.toastError(e.data.message || e.errMsg);
									});
							}
						}
						// 相关词语
						for (let j = 0; j < that.relatedwordsid.length; j++) {
							let wordRequst = {
								token: '',
								fid: ''
							};
							wordRequst.token = util.getToken();
							wordRequst.fid = fids[i];
							if (wordRequst.fid != '-1') {
								util.request(config.api.resource3, wordRequst, 'POST')
									.then(res => {
										if (res.code != '301') {
											that.relatedwords.push(res);
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
		},
		textFocus(e) {
			this.focus = true;
		},
		textBlur(e) {
			this.focus = false;
		}
	},

	onShow() {
		let that = this;
		let user = util.getUser();
		let historyfids = [];
		let historywords = [];
		if (user == undefined || user.token == undefined) {
			user = {
				uid: '0',
				nickname: '请点我登录',
				avatar: '../static/images/logo.jpg',
				intro: '',
				token: ''
			};
		} else {
			uniCloud.callFunction({
				name: 'getHistory',
				data: {
					tel: user.uid
				},
				success: (res) => {
					console.log(res);
					if (res.result.data.data.length != 0) {
						console.log(res.result.data.data[0].fid);
						historyfids = res.result.data.data[0].fid;

						for (let j = 0; j < historyfids.length; j++) {
							let wordRequst = {
								token: '',
								fid: ''
							};
							wordRequst.token = util.getToken();
							wordRequst.fid = historyfids[j];
							if (wordRequst.fid != '-1') {
								util.request(config.api.resource3, wordRequst, 'POST')
									.then(res => {
										console.log(res);
										if (res.code != '301') {
											historywords.push(res);
											console.log(historywords);
										}
									})
									.catch(e => {
										that.loading = false;
										util.toastError(e.data.message || e.errMsg);
									});
							}
						}
					}
				},
				fail: err => {
					console.log(err);
				}
			});
		}
		that.historywords = historywords;
		that.historyfids = historyfids;
	}
};
</script>

<style lang="scss" scoped>
.slot-wrap {
	display: flex;
	align-items: center;
	/* 如果您想让slot内容占满整个导航栏的宽度 */
	flex: 1;
	/* 如果您想让slot内容与导航栏左右有空隙 */
	/* padding: 0 30rpx; */
}

.translate-content {
	padding: 15px;
	height: 150px;
	width: 95%;
	border-color: #e8e8e8;
	border-width: 0px;
	border-style: solid;
	margin: 0px auto;
	border-radius: 5%;
}

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
