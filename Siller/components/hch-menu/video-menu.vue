<template>
	<view class="menu-content">
		<image class="menu icon" @click="clickMenu"  :class="{'menuOpen':openFlag}" src="/static/img/add-circle.png" alt="" srcset="">
		<image  @click="clickCamera" class="bg-menu icon" :class="{'open open1' : openFlag}" src="/static/img/video.png" alt="" srcset="">
		<image  @click="clickPicture" class="pic-menu icon" :class="{'open open2' : openFlag}" src="/static/img/sp.png" alt="" srcset="">
		
		<u-loading class="lding" color="red" size="150" :show="showloading" mode="circle"></u-loading>
		<view v-if="showloading">
			<u-notice-bar type="success" :volume-icon="false" mode="horizontal" :list="list"></u-notice-bar>
		</view>
	</view>
</template>

<script>
import config from '../../config.js';
import util from '../../utils/util.js';
import api from '../../utils/api.js';



export default {
		data() {
			return {
        openFlag:true, //是否展开菜单
		filePath:'1.jpg',
		show:false,
		showloading:false,
		list: [
				'正在上传文件...'
			]
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
						fileName:'',
					};
					requestData.token = util.getToken();
					
					uni.chooseVideo({
						sourceType: ['camera'], //从相册选择
					    success: (chooseImageRes) => {
					        const tempFilePath = chooseImageRes.tempFilePath;
							requestData.fileName=tempFilePath.substring(tempFilePath.lastIndexOf("/")+1);
							console.log(requestData.fileName);
					        // 上传文件部分
							console.log('文件上传');
							that.show=true;
							that.showloading = true;
							that.openFlag=false;
							uni.uploadFile({
								
							    url:'https://dactylology.frogking.cn/fileService/uploadFile',     // 后端api接口
							    filePath: tempFilePath, // uni.chooseImage函数调用后获取的本地文件路劲
							    name:'file',     //后端通过'file'获取上传的文件对象
							    formData: requestData,
							    header:{"Content-Type": "multipart/form-data"},
								fail:(res)=>{
									console.log(res);
									that.showloading = false;
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
									
									that.openFlag=false;
									that.$emit('returnItem', tempFilePath);
									that.showloading = false;
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
					fileName:'',
				};
				requestData.token = util.getToken();
				
				uni.chooseVideo({
					sourceType: ['album'], //从相册选择
				    success: (chooseImageRes) => {
				        const tempFilePath = chooseImageRes.tempFilePath;
						requestData.fileName=tempFilePath.substring(tempFilePath.lastIndexOf("/")+1);
						console.log(requestData.fileName);
				        // 上传文件部分
						console.log('文件上传');
						that.show=true;
						that.showloading = true;
						that.openFlag=false;
						uni.uploadFile({
							
						    url:'https://dactylology.frogking.cn/fileService/uploadFile',     // 后端api接口
						    filePath: tempFilePath, // uni.chooseImage函数调用后获取的本地文件路劲
						    name:'file',     //后端通过'file'获取上传的文件对象
						    formData: requestData,
						    header:{"Content-Type": "multipart/form-data"},
							fail:(res)=>{
								console.log(res);
								that.showloading = false;
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
								
								that.openFlag=false;
								that.$emit('returnItem', tempFilePath);
								that.showloading = false;
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
      z-index: 10;
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
	.u-progress-content {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		
		.u-progress-dot {
			width: 16rpx;
			height: 16rpx;
			border-radius: 50%;
			background-color: #fb9126;
		}
		
		.u-progress-info {
			font-size: 28rpx;
			padding-left: 16rpx;
			letter-spacing: 2rpx
		}
		.lding {
			text-align: center;
			background-color: #ffffff;
			// top: 60px;
			position: absolute;
			overflow: hidden;
			height: auto;
			top:200px;
			left: 0;
			right: 0;
			margin: 8 auto;
			// border-radius: 5%;
			// box-shadow: 2px 2px 2px 2px #d4d0d0;
			// z-index: 1;
		}
</style>
