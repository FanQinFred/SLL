<template>
	<view>
		<iheader title="注册"></iheader>
		<view class="base-padding mgt-30">
			<form @submit="submit">
				<view class='form-body'>
					<view class='row font-lv2 overHidden'>
						<view class='col-3'>电话号码</view>
						<view class='col-5'>
							<input name="email" placeholder="请输入电话号码" />
						</view>
						<button @click="sendCode" :disabled="disabledSendCode" class='col-4 senCode font-lv2'>{{waitingtime}}</button>
						
					</view>
					<view class='row font-lv2'>
						<view class='col-3'>验证码</view>
						<view class='col-9'>
							<input type="number" maxlength="4" password name="code" placeholder="请输入验证码" />
						</view>
					</view>
					<view class='row font-lv2'>
						<view class='col-3'>登录密码</view>
						<view class='col-9'>
							<input password name="password" placeholder="请输入密码" />
						</view>
					</view>
					<view class='row font-lv2'>
						<view class='col-3'>确认密码</view>
						<view class='col-9'>
							<input password name="re_password" placeholder="请再次输入密码" />
						</view>
					</view>
				</view>
				<view class='row text-center'>
					<view class='color-grey mgb-30 font-lv3'>以上资料项全为必填项，请认真填写</view>
				</view>
				<view class='row'>
					<button :loading='loading' form-type="submit" class='btn-submit btn-block'> 立即注册 </button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import config from '../../config.js'
	import util from '../../utils/util.js'
	import api from '../../utils/api.js'
	
	import iheader from '../../components/header.vue'

	export default {
		components: {
			iheader
		},
		data() {
			return {
				loading: false,
				redirect: encodeURIComponent('/pages/me/me'),
				loadingWechat: false,
				waitingtime:"发送验证码",
				telNumber:'',
				disabledSendCode:false,
			}
		},
		onLoad(op) {
			if (config.debug) console.log('onLoad', op)
			if (op.redirect) this.redirect = op.redirect
		},
		onShow: function() {
			let token = util.getToken()
			if (token) {
				let url = decodeURIComponent(this.redirect)
				if (url.indexOf("?") > -1) {
					uni.redirectTo({
						url: url
					})
				} else {
					uni.switchTab({
						url: url
					})
				}
			}
		},
		methods: {
			submit: function(e) {
				let that = this

				if(e.detail.value.re_password!=e.detail.value.password){
					util.toastError('两次输入的密码不一样')
					return
				}
                 
				if (e.detail.value.password == '' || e.detail.value.username == '') {
					util.toastError('手机号或验证码不能为空')
					return
				}

				that.loading = true;
				
				let requestData = {
					phoneNumber:e.detail.value.username,
					code:e.detail.value.code,
					password:e.detail.value.password,
					type:'1'
				};
				
				util.request(config.api.register, requestData, 'POST').then((res) => {
					if (config.debug) console.log(config.api.login, res);
					util.toastSuccess('登录成功')
					setTimeout(function() {
						let url = decodeURIComponent(that.redirect)
						if (url.indexOf("?") > -1) {
							uni.redirectTo({
								url: url
							})
						} else {
							uni.switchTab({
								url: url
							})
						}
					}, 1500)
				}).catch((e) => {
					if (config.debug) console.log(e);
					that.loading = false
					util.toastError(e.data.message || e.errMsg)
				})
			},
			toLogin: function() {
				uni.navigateTo({
					url: '/pages/login/login?redirect=' + this.redirect
				})
			},
			wechatLogin: function(e) {
				let that = this
				let weUser = e.detail
			
				if (that.loadingWechat) return
				that.loadingWechat = true
			
				uni.login({
					success(res) {
						if (config.debug) console.log("微信登录", res, weUser)
						if (res.code) {
							util.request(config.api.loginByWechat, {
								code: res.code,
								userInfo: weUser.rawData,
							}, 'POST').then(function(res) { // 登录成功
								let user = res.data.user
								if (user == undefined || user.uid <= 0 || user.token == '') {
									util.toastError('登录失败：未知错误')
									that.loadingWechat = false
									return
								}
								util.setUser(user)
								util.toastSuccess('登录成功')
								setTimeout(function() {
									util.redirect(decodeURIComponent(that.redirect))
								}, 1500)
							}).catch(function(e) { // 如果是 401，则跳转到信息绑定页面，否则直接提示相关错误信息
								if (config.debug) console.log(e)
								if (e.statusCode == 401) {
									util.setWeChatUser(weUser)
									uni.navigateTo({
										url: '/pages/bind/bind?redirect=' + that.redirect + "&sess=" + encodeURIComponent(e.data.data.sess),
									})
								} else {
									util.toastError(e.data.message || e.errMsg)
								}
								that.loadingWechat = false
							})
						} else {
							util.toastError('登录失败！' + res.errMsg)
						}
					},
					fail: function(e) {
						util.toastError(e.errMsg)
					}
				})
			},
			getTelNumber:function(e){
				let that=this;
				// console.log(e.detail.value);
				that.telNumber=e.detail.value;
			},
			sendCode:function(e){
				console.log("发送验证码")
				console.log(e);
				let that=this;
				that.disabledSendCode=true;
				var resttime=60;
				that.waitingtime=resttime+"秒重新发送";
				
				let timer = null;
				
			    timer = setInterval(() => {
					if(resttime>0&&resttime<=60){
						resttime--;
						that.waitingtime=resttime+"秒重新发送";
					}else{
						that.waitingtime="发送验证码";
						resttime=60;
						that.disabledSendCode=false;
						clearInterval(timer);
					}
				}, 1000);
				
				let requestData={phoneNumber:that.telNumber};
				
				util.request(config.api.sendMessage,requestData, 'POST').then((res) => {
					console.log("config.api.sendMessage")
					console.log(res);
				}).catch((e) => {
					util.toastError(e.data.message || e.errMsg)
				})
			}
		}
	}
</script>

<style scoped>
	@import url("../../static/css/reg-login.css");
	
	.senCode{
		text-align: center;
		vertical-align:middle;
		height:75upx;
		background-color:transparent;
		margin-top: 10upx;
		border-radius: 5%;
		border-width: 0px 0px 0px 2px;
		border-color: #bebfba;
		border-style: solid;
		line-height: 75upx;
	}
	
	.overHidden{
		overflow: hidden;
	}
	.login-button{
		width:95%;
	}
</style>
