<template>
	<view class="menu-content">
		<image class="menu icon" @click="clickMenu"  :class="{'menuOpen':openFlag}" src="/static/img/add-circle.png" alt="" srcset="">
		<image  @click="clickCamera" class="bg-menu icon" :class="{'open open1' : openFlag}" src="/static/img/camera.png" alt="" srcset="">
		<image  @click="clickPicture" class="pic-menu icon" :class="{'open open2' : openFlag}" src="/static/img/picture.png" alt="" srcset="">
		
	</view>
</template>

<script>
import config from '../../config.js';
import util from '../../utils/util.js';
import api from '../../utils/api.js';



export default {
		data() {
			return {
        openFlag:false, //是否展开菜单
		filePath:'1.jpg'
      }
		},
		props: {
			
		},
		methods: {
			clickMenu(){
				this.openFlag=!this.openFlag;
			},
			clickCamera(){
				let that=this;
					let requestData = {
						token: '',
						fileName:'1.jpg',
					};
					requestData.token = util.getToken();
					
					uni.chooseImage({
						sourceType: ['camera'], //从相册选择
					    success: (chooseImageRes) => {
					        const tempFilePaths = chooseImageRes.tempFilePaths;
							requestData.fileName=tempFilePaths[0].substring(tempFilePaths[0].lastIndexOf("/")+1);
							console.log(requestData.fileName);
					        // 上传文件部分
							console.log('文件上传');
							uni.uploadFile({
							    url:'http://dactylology.frogking.cn/fileService/uploadFile',     // 后端api接口
							    filePath: tempFilePaths[0], // uni.chooseImage函数调用后获取的本地文件路劲
							    name:'file',     //后端通过'file'获取上传的文件对象
							    formData: requestData,
							    header:{"Content-Type": "multipart/form-data"},
								fail:(res)=>{
									console.log(res);
								},
							    success:(res) => {
									console.log(res);
							        if (res.data.code == '000'){
							            console.log('文件上传成功')
							        }
									setTimeout(function() {
										util.toastSuccess('上传成功');
									}, 100);
									that.filePath=requestData.fileName;
									that.$emit('returnItem', that.filePath)
							    },
								
							});
							// 上传文件后
					    }
					});
				
			},
			clickPicture(){
				let that=this;
				let requestData = {
					token: '',
					fileName:'1.jpg',
				};
				requestData.token = util.getToken();
				
				uni.chooseImage({
					sourceType: ['album'], //从相册选择
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						requestData.fileName=tempFilePaths[0].substring(tempFilePaths[0].lastIndexOf("/")+1);
						console.log(requestData.fileName);
				        // 上传文件部分
						console.log('文件上传');
						uni.uploadFile({
						    url:'http://dactylology.frogking.cn/fileService/uploadFile',     // 后端api接口
						    filePath: tempFilePaths[0], // uni.chooseImage函数调用后获取的本地文件路劲
						    name:'file',     //后端通过'file'获取上传的文件对象
						    formData: requestData,
						    header:{"Content-Type": "multipart/form-data"},
							fail:(res)=>{
								console.log(res);
							},
						    success:(res) => {
								console.log(res);
						        if (res.data.code == '000'){
						            console.log('文件上传成功')
						        }
								setTimeout(function() {
									util.toastSuccess('上传成功');
								}, 100);
								that.filePath=requestData.fileName;
								that.$emit('returnItem', that.filePath)
						    },
							
						});
						// 上传文件后
				    }
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.menu-content {
    .icon{
      position: fixed;
      bottom: 120rpx;
      right: 80rpx;
      width: 80rpx;
      height: 80rpx;
      opacity: 0;
      transform: rotate(0deg);
      transition: all 0.5s ease-out 0s;
    }
    .text-menu{
      width: 86rpx;
      height: 86rpx;
    }
    .menu{
      z-index: 1;
      opacity: 1;
    }
    .menuOpen{
      transform: rotate(180deg);
      animation-fill-mode:forwards;
      transition: all 0.5s ease-out 0s;
    }
    .open {
      opacity: 1;
      transform: rotate(360deg);
      animation-fill-mode:forwards;
      transition: all 0.5s ease-out 0s;
    }
    .open1{
      right: 80rpx;
      bottom: 250rpx;
    }
    
    .open2{
      right: 190rpx;
      bottom: 210rpx;
    }
    .open3{
      right: 230rpx;
      bottom: 100rpx;
    }
    .open4{
       right: 160rpx;
      bottom: 20rpx;
    }
    .bg-menu{
    }
	}
</style>
