<template>
	<view>
		<u-navbar back-text="返回" title="历史"></u-navbar>
				<view>
					<block v-for="(word, idx) of historywords" :key="idx">
						<meaning :type="word.pos" :interpretation="word.text" :imgsrc="word.urlPic" :word="word.word" :videosrc="word.urlMov"></meaning>
					</block>
						<split heightSplit="5px" widthSplit="100%"></split>

				</view>
		
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
			historywords: []
			
		};
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

