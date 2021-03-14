<!-- @author [crxk] -->
<template>
	<view class="photo">
		<camera device-position="back" flash="off" @error="error" class="bg">
			<cover-view class="p-list">
				<cover-view class="l-item" v-for="(item, index) in photoArr" :key="index">
					<cover-image class="i-img" :src="item" mode="scaleToFill"></cover-image>
					<cover-image @click="deletePhoto(index)" class="i-icon" src="../../static/camera/delete.png" mode="scaleToFill"></cover-image>
				</cover-view>
			</cover-view>
		</camera>

		<view class="btns">
			<view @click="back" class="close"><image src="../../static/camera/back.png" mode="aspectFit"></image></view>
			<view class="camera">
				<image @click="takePhoto" src="../../static/camera/camera.png" mode="aspectFit"></image>
				<view class="upload">拍照上传</view>
				<view class="blank"></view>
			</view>
			<view @click="uploadFoodImg" class="album">相册上传</view>
			<view @click="finish" class="finished"><image mode="aspectFit" src="../../static/camera/finish.png"></image></view>
		</view>
	</view>
</template>

<script>
var that = null;
var camera = null;
export default {
	data() {
		return {
			photoArr: [],
			photoArrCapacity: 6
		};
	},
	onLoad(parameters) {
		that = this;
		uni.showLoading({
			mask: true,
			title: '相机加载中……'
		});
	},
	onShow() {},
	onReady() {
		camera = uni.createCameraContext();
		// 等待相机加载，处理白屏
		setTimeout(() => {
			uni.hideLoading();
		}, 1000);
	},
	methods: {
		uploadImg(filePath) {
			uni.showLoading({
				mask: true,
				title: '正在上传'
			});
			const header = {
				'Content-Type': 'application/json;charset=UTF-8',
				token: uni.getStorageSync('token')
			};

			return new Promise((resolve, reject) => {
				uni.uploadFile({
					url: '后台图片上传API地址',
					filePath,
					header,
					name: 'file',
					success(res) {
						uni.hideLoading();
						resolve(JSON.parse(res.data));
					},
					fail(err) {
						reject(err);
					}
				});
			});
		},
		tips(title) {
			uni.showToast({
				icon: 'none',
				title
			});
		},
		finish() {
			if (that.photoArr.length < 1) {
				return 0;
			}
			uni.navigateTo({
				url: '自定义跳转地址?photoArr=' + encodeURIComponent(JSON.stringify(that.photoArr))
			});
		},
		// 拍照
		takePhoto() {
			camera.takePhoto({
				success(res) {
					if (that.photoArr.length < that.photoArrCapacity) {
						console.log(' ==>', res);
						// 正式环境下调用此方法上传图片
						// that.uploadImg(res.tempImagePath).then(result => {
						// 	that.photoArr.push(result.data);
						// });
						that.photoArr.push(res.tempImagePath);
					} else {
						that.tips('超出限制~');
					}
				},
				fail(res) {
					console.log('fail ==>', res);
					that.tips('拍照出现故障，请重试~');
				}
			});
		},
		deletePhoto(index) {
			that.photoArr.splice(index, 1);
		},
		back() {
			uni.navigateBack({
				delta: 0
			});
		},
		// 相册上传
		uploadFoodImg() {
			if (that.photoArr.length > that.photoArrCapacity) {
				that.tips('超出限制咯~');
				return 0;
			}
			uni.chooseImage({
				count: that.photoArrCapacity - that.photoArr.length,
				success(res) {
					console.log('res ==>', res);
					res.tempFilePaths.forEach(item => {
						// 正式环境下调用此方法上传图片
						// that.uploadImg(item).then(result => {
						// 	that.photoArr.push(result.data);
						// });
						that.photoArr.push(item);
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
.bg {
	width: 100%;
	height: 75vh;
	display: block;
	position: relative;
}
.p-list {
	background-color: rgba(9, 9, 9, 0.3);
	position: absolute;
	bottom: 0rpx;
	width: 100%;
	height: 140rpx;
	display: flex;
	.l-item {
		margin-left: 7rpx;
		color: #ff0000;
		height: 160rpx;
		width: 118rpx;
		.i-img {
			margin-top: 20rpx;
			width: 100rpx;
			height: 100rpx;
		}
		.i-icon {
			position: relative;
			top: -110rpx;
			left: 80rpx;
			width: 30rpx;
			height: 30rpx;
		}
	}
}
.btns {
	position: fixed;
	bottom: 0rpx;
	width: 100%;
	height: 245rpx;
	display: flex;
	letter-spacing: 0.48px;
	.close {
		color: #cbcdd7;
		margin-left: 60rpx;
		margin-top: 40rpx;
		> image {
			width: 60rpx;
			height: 60rpx;
		}
	}
	.camera {
		margin-left: 157rpx;
		text-align: center;
		> image {
			display: block;
			width: 150rpx;
			height: 150rpx;
		}
		.upload {
			font-size: 30rpx;
			margin-top: 20rpx;
			font-weight: bold;
		}
	}
	.album {
		margin-left: 60rpx;
		color: #909399;
		font-size: 30rpx;
		margin-top: 170rpx;
	}
	.finished {
		color: #81d9d1;
		margin-left: 30rpx;
		margin-top: 40rpx;
		> image {
			width: 60rpx;
			height: 60rpx;
		}
	}
}
</style>
