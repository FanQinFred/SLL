<template>
	<view>
		<!-- 头部导航 -->
		<u-navbar back-text="返回" title="翻译"></u-navbar>
		<split heightSplit="5px" widthSplit="100%"></split>
		<!-- 翻译类型选择 -->

		<u-tabs active-color="#b3c5ff" :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<!-- 文本 -->
		<view v-if="current == 0">
			<view class="translate-content"><textarea placeholder="眼睛"></textarea></view>
			<split heightSplit="10px" widthSplit="100%"></split>
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
			
		</view>
		<!-- 视频 -->
		<view v-if="current == 2">
			
		</view>
	</view>
</template>

<script>
import config from '../../config.js';
import util from '../../utils/util.js';
import api from '../../utils/api.js';

import meaning from '../../components/meaning.vue';
import split from '../../components/split.vue';

export default {
	components: { meaning, split },
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
					count: 5
				}
			],
			current: 0
		};
	},
	methods: {
		change(index) {
			this.current = index;
		}
	}
};
</script>

<style lang="scss" scoped>
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
	// border-color: red($color: #000000);
	// border-width: 1px;
	// border-style: solid;

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
