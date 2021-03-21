<template>
  <view>
    <view class="box">
      <view class="menu" @click="toMenu"
        ><image
          style="width: 25px; height: 25px; margin: 11.5px auto"
          mode="aspectFit"
          src="../static/img/menu.png"
        ></image
      ></view>
      <view class="logoword">Siller</view>
    </view>

    <slot></slot>
    <u-popup v-model="menuShow" width="85%" mode="left" border-radius="14">
      <view class="func">
        <view class="base-padding row" @click="userLoginEvent">
          <view class="user">
            <image :src="user.avatar"></image>
            <view class="username font-lv2">{{ user.nickname }}</view>
          </view>
          <view v-if="true" class="color-grey font-lv3 user-intro">{{ user.intro }}</view>
        </view>

        <view class="base-padding row base-info font-lv2">
          <navigator url="" class="col-12">
            <image class="me-icon" src="../static/images/search.png"></image>
            <text>我的收藏</text>
            <image
              class="pull-right me-icon"
              src="../static/images/right-angle.png"
            ></image>
          </navigator>
          <navigator url="" class="col-12">
            <image class="me-icon" src="../static/images/history.png"></image>
            <text>历史记录</text>
            <image
              class="pull-right me-icon"
              src="../static/images/right-angle.png"
            ></image>
          </navigator>
        </view>

        <view class="base-padding row base-info font-lv2">
          <navigator url="" class="col-12">
            <image class="me-icon" src="../static/images/about-us.png"></image>
            意见反馈
            <image
              class="pull-right me-icon"
              src="../static/images/right-angle.png"
            ></image>
          </navigator>
          <navigator url="" class="col-12">
            <image class="me-icon" src="../static/images/about-us.png"></image>
            关于我们
            <image
              class="pull-right me-icon"
              src="../static/images/right-angle.png"
            ></image>
          </navigator>
        </view>
        <view v-if="user.uid != '0'" class="base-padding row base-info font-lv2">
          <view @click="logout" class="col-12">
            <image class="me-icon" src="../static/images/login.png"></image>
            退出登录
            <image
              class="pull-right me-icon"
              src="/static/images/right-angle.png"
            ></image>
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
import config from '../config.js';
import util from '../utils/util.js';

export default {
	name: 'headernav',
	data() {
		return { menuShow: false, redirect: encodeURIComponent('/pages/index/index'), info: {}, user: {} };
	},
	onLoad(op) {
		this.info = config.info;
	},
	onShow() {
		this.initUser();

	},
	beforeUpdate() {
		console.log("Headernav mounted");
		this.initUser();
	},

	methods: {
		toMenu() {
			let that = this;
			that.menuShow = !that.menuShow;
			console.log(that.menuShow);
		},
		userLoginEvent: function(e) {
			console.log(this.user.uid);
			if (this.user.uid == 0) {
				console.log(this.user.uid);
				uni.navigateTo({
					url: '/pages/login/login?redirect=' + this.redirect
				});
			}
		},
		logout: function(e) {
			let that = this;
			uni.showModal({
				title: '温馨提示',
				content: '您确定要退出登录吗？',
				success(res) {
					if (res.confirm) {
						let requestData = {
							token:'',
							type:'1'
						};
						requestData.token=that.user.token;
						util.request(config.api.unLogin); // 只需调用，不需要处理返回结果
						util.clearUser();
						util.toastSuccess('退出成功');
						that.initUser();
						util.setSignedAt(0);
					// 	let sysInfo = util.getSysInfo();
					// 	sysInfo.bookshelfChanged = true;
					// 	util.setSysInfo(sysInfo);
					}
				}
			});
		},
		initUser: function() {
			let that = this;
			let user = util.getUser();
			console.log('user: '+ user);
			if (user == undefined || user.token == undefined) {
				console.log("user == undefined || user.token == undefined");
				user = {
					uid: '0',
					nickname: '请点我登录',
					avatar: '/static/images/logo.jpg',
					intro: '心灵也手巧'
				};
				that.moreInfo = {
					uid: 0,
					signed_at: 0,
					created_at: 0,
					total_sign: 0,
					total_continuous_sign: 0,
					history_continuous_sign: 0,
					today_reading: 0,
					month_reading: 0,
					total_reading: 0,
					today_reading_hour: 0,
					today_reading_min: 0,
					month_reading_hour: 0,
					month_reading_min: 0,
					total_reading_hour: 0,
					total_reading_min: 0,
					join_day: 0
				};
			}
			console.log('user: '+ user);
			that.user = user;
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
.logoword {
  height: 38px;
  line-height: 48px;
  margin: 0 auto;
  padding-right: 53px;
  font-size: 21px;
  font-weight: bold;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
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
