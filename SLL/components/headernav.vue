<template>
	<view>
		<view class="box">
			<view class="menu" @click="toMenu">
				<image style="width: 20px; height: 20px;" mode="aspectFit" src="../static/img/menu.png"></image>
			</view>
		    <view class="logoword">SLLer</view>
		</view>
		
		<slot></slot>
		<u-popup v-model="menuShow" width="85%" mode="left" border-radius="14">
			<view class="func">
				<view class="base-padding row">
					<view class="user">
						<image src="../static/images/logo.jpg"></image>
						<view class="username font-lv2">小凡</view>
					</view>
					<view v-if="true" class="color-grey font-lv3 user-intro">手语也是心里的一种语言</view>
				</view>

				<view class="base-padding row base-info font-lv2">
					<navigator url="" class="col-12">
						<image class="me-icon" src="../static/images/search.png"></image>
						<text>我的收藏</text>
						<image class="pull-right me-icon" src="../static/images/right-angle.png"></image>
					</navigator>
					<navigator url="" class="col-12">
						<image class="me-icon" src="../static/images/history.png"></image>
						<text>历史记录</text>
						<image class="pull-right me-icon" src="../static/images/right-angle.png"></image>
					</navigator>
				</view>

				<view class="base-padding row base-info font-lv2">
					<navigator url="" class="col-12">
						<image class="me-icon" src="../static/images/about-us.png"></image>
						意见反馈
						<image class="pull-right me-icon" src="../static/images/right-angle.png"></image>
					</navigator>
					<navigator url="" class="col-12">
						<image class="me-icon" src="../static/images/about-us.png"></image>
						关于我们
						<image class="pull-right me-icon" src="../static/images/right-angle.png"></image>
					</navigator>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	name: 'headernav',
	data() {
		return { menuShow: false };
	},
	methods: {
		toMenu() {
			let that = this;
			that.menuShow = !that.menuShow;
			console.log(that.menuShow);
		}
	},
	props: {}
};
</script>

<style>
page {
	color: $u-main-color;
	font-size: 28rpx;
}
.logoword{
	
	height: 48px;
	line-height: 48px;
	margin: 0 auto;
	padding-right: 48px;
}
.box {
	display: flex;
	align-items: center;
	justify-content:center;
	/* 如果您想让slot内容占满整个导航栏的宽度 */
	flex: 1;
	/* 如果您想让slot内容与导航栏左右有空隙 */
	padding: 0 30rpx;
	height: 48px;
	width: 100%;
}
.menu {
	width: 48px;
	height: 48px;
	text-align: center;
	vertical-align: middle;
	line-height: 48px;
}
.func {
	margin-top: 50px;
}
.base-padding {
	box-sizing: border-box;
	padding: 0upx 30upx;
}
.row {
	background-color: #fff;
	margin-bottom: 10upx;
	padding: 30upx;
}
.font-lv2 {
	font-size: 16px !important;
}
.base-info {
	padding-top: 0upx;
	padding-bottom: 0upx;
}

.col-12 {
	flex: 0 0 100%;
	max-width: 100%;
}
image.me-icon {
	width: 40upx;
	height: 40upx;
	vertical-align: middle;
	margin-right: 6upx;
	position: relative;
	top: -4upx;
}
.pull-right {
	float: right;
}

.username {
	margin: 15upx auto;
}
.color-grey {
	color: #888;
}
.font-lv3 {
	font-size: 14px !important;
}
.user {
	text-align: center;
	display: block;
	width: 100%;
}
.user .text-muted {
	text-align: center;
}
.user image {
	width: 180upx;
	height: 180upx;
	border-radius: 90upx;
	border: 1px solid #ddd;
	margin: 0 auto;
	display: block;
}
.user-func {
	line-height: 40upx;
	border: 1px solid #000000;
}
.user-func {
	line-height: 40upx;
	border: 1px solid #000000;
}

.user-func .func-item {
	line-height: 300%;
	border-bottom: 1upx dashed #f1f1f1;
	padding: 0;
	margin: 0;
}

.user-func .color-red {
	margin-right: 8upx;
}
.user-intro {
	width: 100%;
	text-align: center;
}
image {
	display: inline-block;
}

.base-info image {
		margin-right: 30upx !important;
	}

.base-info image.pull-right {
		margin-right: 0 !important;
		top: 0;
	}

	.base-info {
		padding-top: 0upx;
		padding-bottom: 0upx;
	}

	.base-info .col-12 {
		border-bottom: 1px solid #f6f6f6;
		padding-bottom: 30upx;
		padding-top: 30upx;
		color: #666;
	}

	.base-info .col-12:last-of-type {
		margin-bottom: 0;
		border-bottom: 0;
	}


</style>
