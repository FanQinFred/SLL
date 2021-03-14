<template>
    <view>
        <camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
        <button type="primary" @click="takePhoto">拍照</button>
        <view>预览</view>
        <image mode="widthFix" :src="src"></image>
    </view>
</template>
<script>
	export default {
	    data() {
	        return {
	            src:""
	        }
	    },
	    methods: {
	         takePhoto() {
	            const ctx = uni.createCameraContext();
	            ctx.takePhoto({
	                quality: 'high',
	                success: (res) => {
	                    this.src = res.tempImagePath
	                }
	            });
	        },
	        error(e) {
	            console.log(e.detail);
	        }
	    }
	}
</script>

<style lang="scss">
    /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
    @import "uview-ui/index.scss";
</style>