<template>
	<view>
		<!-- 头部导航 -->
		<u-navbar back-text="返回" title="含义"></u-navbar>

	<!--
		type:		
	    interpretation
		word: 
		imgsrc:
		videosrc: 
 -->
		<description :type="type" :interpretation="interpretation" :word="word" :imgsrc="imgsrc" :videosrc="videosrc"></description>
		
	</view>
</template>

<script>
	import description from '../../components/description.vue';
	
	export default {
		components: {description},
		
		data() {
			return {
				type:"",
				word:"",
				interpretation:"",
				imgsrc:"",
				videosrc:"",

			}
		},
		methods: {
			
		},
		onLoad(e){
			let that=this;
			console.log(e);
			that.word=e.word;
			that.type=e.type;
			that.interpretation=e.interpretation;
			that.imgsrc=e.imgsrc;
			that.videosrc=e.videosrc;
			console.log(that.videosrc);
		}
	}
</script>

<style>

</style>
