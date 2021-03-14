<template>
	<view>
	<view v-bind:style="{height:heightSplit,width:widthSplit}" class="split"></view>
	</view>
</template>

<script>
	export default {
		name:"split",
		data() {
			return {
				
			};
		},
		props:{
			heightSplit: {
				type: String,
				default: "10px",
			},
			widthSplit: {
				type: String,
				default: "100%",
			},
			colorSplit: {
				type: String,
				default: "#fff9f7",
			},
		}
	}
</script>

<style>
	.split{
		background-color: #fff9f7;
	}
</style>
