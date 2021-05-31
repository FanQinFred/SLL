<template>
	<view>
		<u-navbar back-text="返回" title="登陆"></u-navbar>

		<view class="base-padding">
			<form @submit="formSubmit">
				<view class="form-body">
					<view><image src="/static/images/logo.jpg"></image></view>
					<view class="row font-lv2 overHidden">
						<view class="col-3">+86</view>
						<view class="col-5"><input @input="getTelNumber" name="username" type="number" auto-focus="true" placeholder="请输入电话号码" /></view>
						<button @click="sendCode" :disabled="disabledSendCode" class="col-4 senCode font-lv2">{{ waitingtime }}</button>
					</view>
					<view class="row font-lv2">
						<view class="col-3">验证码</view>
						<view class="col-9"><input type="number" maxlength="8" name="password" placeholder="请输入验证码" /></view>
					</view>
				</view>
				<view class="row mgb-30 font-lv3 color-grey">
					<navigator class="col" :url="'/pages/read/read?identify=' + about">关于我们</navigator>
					<view class="col text-right" @click="findPassword">用户协议</view>
				</view>
				<view class="row"><button class="btn-submit btn-block login-button" :loading="loading" form-type="submit">确认登陆</button></view>
				<view class="row"><button @click="toReg" class="btn-login btn-block login-button">注册账号</button></view>
			</form>
		</view>
	</view>
</template>

<script>
import config from '../../config.js';
import util from '../../utils/util.js';
import api from '../../utils/api.js';

export default {
	components: {},
	data() {
		return {
			loading: false,
			about: config.info.about,
			redirect: encodeURIComponent('/pages/index/index'),
			loadingWechat: false,
			waitingtime: '发送验证码',
			telNumber: '',
			disabledSendCode: false
		};
	},
	onLoad: function(op) {
		if (config.debug) console.log('onLoad', op);
		if (op.redirect) this.redirect = op.redirect;
	},
	onShow: function() {
		let token = util.getToken();
		if (token) {
			let url = decodeURIComponent(this.redirect);
			if (url.indexOf('?') > -1) {
				uni.redirectTo({
					url: url
				});
			} else {
				uni.switchTab({
					url: url
				});
			}
		}
	},
	methods: {
		toReg: function() {
			uni.navigateTo({
				url: '/pages/reg/reg?redirect=' + this.redirect
			});
		},
		findPassword: function(e) {
			uni.showModal({
				title: '温馨提示',
				content: '目前暂不支持找回密码的功能'
			});
		},
		formSubmit: function(e) {
			let that = this;
			if (e.detail.value.password == '' || e.detail.value.username == '') {
				util.toastError('手机号或验证码不能为空');
				return;
			}
			that.loading = true;
			let requestData = {
				id: e.detail.value.username,
				password: e.detail.value.password,
				type: '2'
			};
			util.request(config.api.login, requestData, 'POST')
				.then(res => {
					console.log(res);
					if (res.code == '000') {
						let user = {
							uid: that.telNumber,
							nickname: 'Siller',
							avatar: 'http://file.bookcodes.cn/pictures/logo.jpg',
							intro: '心灵也手巧',
							token: ''
						};
						user.token = res.token;
						console.log('token: ' + user.token);
						if (user == undefined || user.token == '') {
							util.toastError('登录失败：未知错误');
							that.loading = false;
							return;
						}
						util.setUser(user);
						util.toastSuccess('登录成功');
						setTimeout(function() {
							let url = '/pages/index/index';
							uni.redirectTo({
								url:'/pages/index/index'
							});
						}, 1500);
						that.loading = false;
					}
				})
				.catch(e => {
					if (config.debug) console.log(e);
					that.loading = false;
					util.toastError(e.data.message || e.errMsg);
				});
		},
		getTelNumber: function(e) {
			let that = this;
			that.telNumber = e.detail.value;
		},
		sendCode: function(e) {
			console.log('发送验证码');
			console.log(e);
			let that = this;
			that.disabledSendCode = true;
			var resttime = 60;
			that.waitingtime = resttime + '秒重新发送';

			let timer = null;

			timer = setInterval(() => {
				if (resttime > 0 && resttime <= 60) {
					resttime--;
					that.waitingtime = resttime + '秒重新发送';
				} else {
					that.waitingtime = '发送验证码';
					resttime = 60;
					that.disabledSendCode = false;
					clearInterval(timer);
				}
			}, 1000);
			console.log(that.telNumber);
			let requestData = { phoneNumber: that.telNumber };

			util.request(config.api.sendMessage, requestData, 'POST')
				.then(res => {
					console.log('config.api.sendMessage');
					console.log(res);
				})
				.catch(e => {
					util.toastError(e.data.message || e.errMsg);
				});
		}
	}
};
</script>

<style scoped>
@import url('../../static/css/reg-login.css');

image {
	width: 180upx;
	height: 180upx;
	border-radius: 90upx;
	border: 1px solid #ddd;
	margin: 15px auto;
	display: block;
}

.senCode {
	text-align: center;
	vertical-align: middle;
	height: 75upx;
	background-color: transparent;
	margin-top: 10upx;
	border-radius: 5%;
	border-width: 0px 0px 0px 0px;
	border-color: #bebfba;
	border-style: solid;
	line-height: 75upx;
}

.overHidden {
	overflow: hidden;
}
.login-button {
	width: 95%;
}

/* bookchat global css */
.text-center {
	text-align: center;
}

.block {
	display: block !important;
}

/*  字体大小规范  */

.font-lv1 {
	font-size: 18px !important;
}

.font-lv2 {
	font-size: 16px !important;
}

.font-lv3 {
	font-size: 14px !important;
}

.font-lv4 {
	font-size: 12px !important;
}

.font-lv5 {
	font-size: 10px !important;
}

/*  margin   */

.mgt-15 {
	margin-top: 15upx;
}

.mgb-15 {
	margin-bottom: 15upx;
}

.mgt-30 {
	margin-top: 30upx;
}

.mgb-30 {
	margin-bottom: 30upx;
}

.mgl-30 {
	margin-left: 30upx;
}

.mgr-30 {
	margin-right: 30upx;
}

/*  padding  */

.pdt-15 {
	padding-top: 15upx;
}

.pdb-15 {
	padding-bottom: 15upx;
}

.pdt-30 {
	padding-top: 30upx;
}

.pdb-30 {
	padding-bottom: 30upx;
}

.pdl-30 {
	padding-left: 30upx;
}

.plr-30 {
	padding-right: 30upx;
}

/*  颜色规范  */

.color-black {
	color: #000;
}

.color-semi {
	color: #353535;
}

.color-grey {
	color: #888;
}

.color-light {
	color: #b2b2b2;
}

.color-green {
	color: #09bb09;
}

.color-red {
	color: #e64340;
}

.color-info,
.color-link,
.color-active {
	color: #00acff;
}

.bd-color {
	border-color: #f1f1f1;
}

.bg-color {
	background-color: #f1f1f1;
}

.img-responsive {
	max-width: 100%;
}

.border-basic {
	border: 1px solid #efefef;
}

.radius-basic,
.cover {
	border-radius: 6upx;
}

.radius-circle {
	border-radius: 100%;
}

.row {
	display: flex;
	flex-wrap: wrap;
}

.col {
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;
}

.col-1 {
	flex: 0 0 8.333333%;
	max-width: 8.333333%;
}

.col-2 {
	flex: 0 0 16.666667%;
	max-width: 16.666667%;
}

.col-3 {
	flex: 0 0 25%;
	max-width: 25%;
}

.col-4 {
	flex: 0 0 33.333333%;
	max-width: 33.333333%;
}

.col-5 {
	flex: 0 0 41.666667%;
	max-width: 41.666667%;
}

.col-6 {
	flex: 0 0 50%;
	max-width: 50%;
}

.col-7 {
	flex: 0 0 58.333333%;
	max-width: 58.333333%;
}

.col-8 {
	flex: 0 0 66.666667%;
	max-width: 66.666667%;
}

.col-9 {
	flex: 0 0 75%;
	max-width: 75%;
}

.col-10 {
	flex: 0 0 83.333333%;
	max-width: 83.333333%;
}

.col-11 {
	flex: 0 0 91.666667%;
	max-width: 91.666667%;
}

.col-12 {
	flex: 0 0 100%;
	max-width: 100%;
}

/**app.wxss**/

.box-shadow {
	box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.09);
	/* border: 1upx solid rgba(0, 0, 0, 0.08); */
}

.base-padding {
	box-sizing: border-box;
	padding: 0upx 30upx;
}

.base-margin-bottom {
	margin-bottom: 60upx;
}

.pull-right {
	float: right;
}

.text-right {
	text-align: right;
}

navigator:hover,
navigator:active {
	background-color: transparent;
}

.panel-heading {
	margin-bottom: 30upx;
}

/* 显示两行，溢出文字用‘...’替换 */

.ellipsis-1row {
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.ellipsis-2row {
	text-overflow: ellipsis;
	display: -webkit-box;
	box-decoration-break: ;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	/* box-orient: vertical;
		height: 3em;
		line-height: 1.5; */
	overflow: hidden;
}

.ellipsis-3row {
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.text-muted {
	color: #888;
	/* font-size: 28upx; */
	/* line-height: 170%; */
	/* text-align: left; */
}

.cover {
	border-radius: 6upx;
}

.score {
	height: 14.5px;
	padding-left: 170upx;
	background: transparent
		url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAClCAYAAAAUAAAYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNrs3T9rFEEcxvG7qEQIglaCICKkin9AUEtBKxU7wS61VlYivgWj70TtNFj5BqzE7qxEWwsxKIoYn4UtluFmbm8nczvzm+/BjxyuDwNzu3uXD0+46f7LC5PA45Hm+WTYw1x2LRDc0jzTXB+wqMlsaLPutz8fDFjYZHYauAz3NBvt83XNnyUWNpn1nVm3OsHmsb3EomazzZnVXKMPNcc0xzUnNKc0Rzv/77fms+Z7O3vt9b1eU7bZrNN68l5zcolX4ofmsuZXTdnmMvyi2dR86Bmcac62P6vKrnVubpc0bxYE32nOab45N8YqsvPeDfcD4SOav4HjprPuu+H5BTt9LXDMfNbdLPfT678Fx6vKupt1o/O8+R3pkOaJ5/iktqx7z/qp+aq5q/nY+fczmheaK03Gs7D5rLtZdzSvA6/Ebc2u55j57HQB0TzW7AzkjiKzny6+2hlKNE8juMNcFqKBaIZndRlCNBBNgmx7ZkE0fbLtZkE0EA1EM17WuQwhGogGooFoss6296y52cNO+J6HLJoPaFdbsvA9zGerIxrPh85eWYgGooFoDiQbuAxp0UA0EVmdWbRo+ma1WbRoIBqIZtzsnHdDWjQQDUQD0WSbde5ZS2UhmtqJJtSEiVkXooFoIJre2VATJmZdiKZ2ogk1YSb8oVMvDeUPnSAaiCaPJkzMuhANRAPRQDQpsqEmTMy6EI11oolpwkA0EA1EcyDZmCYMRAPR+LMxTZjqiCamCQPRQDQQzehNGIgGooFoIJpVZ2OaMBBN7USTqgkD0UA0EE3vbKomDERTO9GkasKYJJpUTRiIBqKBaEZvwkA0EA1EA9GkyKZqwkA01olmrCYMRAPRQDR9LkO+0QmiKbAJUyTRjNWEgWggGohm9CYMRAPRQDQQzZDsWE0YiMYC0eTYhIFoIJrKiCbHJgxEY4FocmzCZEs0OTZhIBqIpjKiybEJA9FANBANROPL5tiEgWhKIJoSmzAQDURjjGhKbMJANCUQTYlNmNGIpsQmDEQD0RgjmhKbMBANRAPR1Es0JTZhIJpciMZaEwaigWgKJBprTRiIJheisdaESUo01powEA1EUyDRWGvCQDQQDURjm2isNWEgmlURzWw2q4pZIBqIJkOiCVyGJpkFolkV0ejMMvel28mIRptl7ku3IRqIpjCimfNuaJpZIBqIBqIpm2ice5Z5ZonJupvVkMRu4JW4qXnrOWY++1+AAQBw9BJSCTeN9wAAAABJRU5ErkJggg==)
		no-repeat 0upx 4upx;
	font-size: 15px;
	color: #999;
	margin-bottom: 15upx;
}

.score text {
	position: relative;
	top: -2px;
}

/*  评分  */

.score-50,
.score-49,
.score-48,
.score-47 {
	background-position-y: 0px;
}

.score-45,
.score-46,
.score-44,
.score-43 {
	background-position-y: -15px;
}

.score-40,
.score-41,
.score-42,
.score-39,
.score-28,
.score-37 {
	background-position-y: -30px;
}

.score-35,
.score-36,
.score-34,
.score-33 {
	background-position-y: -45px;
}

.score-30,
.score-32,
.score-31,
.score-29,
.score-28,
.score-27 {
	background-position-y: -60px;
}

.score-25,
.score-26,
.score-24,
.score-23 {
	background-position-y: -75px;
}

.score-20,
.score-21,
.score-22,
.score-19,
.score-18,
.score-17 {
	background-position-y: -90px;
}

.score-15,
.score-16,
.score-14,
.score-13 {
	background-position-y: -105px;
}

.score-10,
.score-11,
.score-12,
.score-9,
.score-8,
.score-7 {
	background-position-y: -239upx;
}

.score-5,
.score-6,
.score-4,
.score-3 {
	background-position-y: -269upx;
}

.score-2,
.score-1,
.score-0 {
	background-position-y: -299upx;
}

/* 平板样式兼容 */

@media (min-width: 768px) {
	.font-lv1 {
		font-size: 22px !important;
	}

	.font-lv2 {
		font-size: 20px !important;
	}

	.font-lv3 {
		font-size: 18px !important;
	}

	.font-lv4 {
		font-size: 16px !important;
	}

	.font-lv5 {
		font-size: 14px !important;
	}
}

/* pages/reg/reg.wxss */

.form-body {
	margin-bottom: 30upx;
}

.form-body .row {
	border-bottom: 1upx solid #efefef;
	color: #353535;
	height: 100upx;
	line-height: 100upx;
}
.form-body .row input {
	margin-top: 24upx;
}

.btn-captcha {
	border-radius: 6upx;
}

.btn-block {
	width: 100%;
	border-radius: 6upx;
	color: #fff;
	margin-bottom: 30upx;
}
.btn-submit {
	background-color: #00acff;
	border-color: #00acff;
}

.btn-auth {
	background-color: #00c706;
	border-color: #00c706;
}
.btn-reg,
.btn-login {
	color: #353535;
}

image {
	width: 160upx;
	height: 160upx;
	display: block;
	margin: 30upx auto;
}
</style>
