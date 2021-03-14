<template>
	<view>
		<!-- 头部导航 -->
		<u-navbar :is-back="false" back-text="" title="">
			<headernav class="slot-wrap"></headernav>
		</u-navbar>
		<split heightSplit="5px" widthSplit="100%"></split>
		<!-- 翻译类型选择 -->

		<u-tabs active-color="#b3c5ff" :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<split heightSplit="1px" widthSplit="100%"></split>
		<!-- 文本 -->
		<view v-if="current == 0">
			<view class="translate-content"><textarea placeholder="眼睛"></textarea></view>
			<split heightSplit="2px" widthSplit="100%"></split>
			<!-- 翻译结果 -->
			<view class="translate-history">
				<meaning></meaning>
			</view>
			<split heightSplit="15px" widthSplit="100%"></split>
			
			<!-- 翻译历史 -->
			<view class="translate-history">
				<view class="text-history"><text>翻译历史</text></view>
				<meaning></meaning>
				<meaning></meaning>
				<meaning></meaning>
				<meaning></meaning>
				<meaning></meaning>
			</view>
		</view>
		<!-- 图片 -->
		<view v-if="current == 1">
			<photo :filePath="filePath">
				
			</photo>
		</view>
		<!-- 视频 -->
		<view v-if="current == 2">
			<videoInspect :videoPath="videoPath"></videoInspect>
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
	components: { meaning, split, photo,videoInspect,headernav },
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
					name: '视频',
				}
			],
			current: 0,
			filePath: '',
			videoPath:'',
		};
	},
	methods: {
		change(index) {
			this.current = index;
			if (index == 1) {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera '], //从相册选择
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));
						this.filePath = JSON.stringify(res.tempFilePaths);
					}
				});
			}
			if (index == 2) {
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function(res) {
						self.src = res.tempFilePath;
						this.videoPath = JSON.stringify(res.tempFilePaths);
					}
				});
			}
		}
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
