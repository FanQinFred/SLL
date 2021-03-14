<template>
	<view>
		<!-- 头部导航 -->
		<u-navbar back-text="返回" :title="word"></u-navbar>
		<description></description>
		
	</view>
</template>

<script>
	import description from '../../components/description.vue';
	
	export default {
		components: {description},
		
		data() {
			return {
				word:"SLL",
			}
		},
		methods: {
			
		},
		onLoad(e){
			let that=this;
			console.log(e);
			that.word=e.word;
		}
	}
</script>

<style>

</style>
