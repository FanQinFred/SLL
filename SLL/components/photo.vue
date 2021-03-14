<template>
	<view>
		<split heightSplit="5px" widthSplit="100%"></split>
		<view class="translate-history">
			<view class="text-history"><text>识别结果</text></view>
			<meaning></meaning>
		</view>
		
		<split heightSplit="5px" widthSplit="100%"></split>
		<view class="translate-history">
			<view class="text-history"><text>相关词语</text></view>
			<meaning></meaning>
		</view>
		
	</view>
</template>
<script>
	
import meaning from './meaning.vue';
import split from './split.vue';

export default {
	components: { meaning, split },

	data() {
		return {
			imgPath:'',
		};
	},
	props: {
		filePath: {
			type: String,
			default: ''
		}
	},
	methods:{},
	onLoad(e){
		this.imgPath=e.filePath;
		console.log(e.filePath);
	}
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
