(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"081d":function(e,t,n){"use strict";n.r(t);var o=n("bd0a"),a=n("7e7d");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("c0a7");var i,u=n("f0c5"),d=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"bcaa1c2c",null,!1,o["a"],i);t["default"]=d.exports},"281f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("b3f8")),a=r(n("d5f1"));r(n("cc19"));function r(e){return e&&e.__esModule?e:{default:e}}var i={components:{},data:function(){return{loading:!1,about:o.default.info.about,redirect:encodeURIComponent("/pages/index/index"),loadingWechat:!1,waitingtime:"发送验证码",telNumber:"",disabledSendCode:!1}},onLoad:function(e){o.default.debug&&console.log("onLoad",e),e.redirect&&(this.redirect=e.redirect)},onShow:function(){var t=a.default.getToken();if(t){var n=decodeURIComponent(this.redirect);n.indexOf("?")>-1?e.redirectTo({url:n}):e.switchTab({url:n})}},methods:{toReg:function(){e.navigateTo({url:"/pages/reg/reg?redirect="+this.redirect})},findPassword:function(t){e.showModal({title:"温馨提示",content:"目前暂不支持找回密码的功能"})},formSubmit:function(t){var n=this;if(""!=t.detail.value.password&&""!=t.detail.value.username){n.loading=!0;var r={id:t.detail.value.username,password:t.detail.value.password,type:"2"};a.default.request(o.default.api.login,r,"POST").then((function(t){if(console.log(t),"000"==t.code){var o={uid:n.telNumber,nickname:"Siller",avatar:"http://file.bookcodes.cn/pictures/logo.jpg",intro:"心灵也手巧",token:""};if(o.token=t.token,console.log("token: "+o.token),void 0==o||""==o.token)return a.default.toastError("登录失败：未知错误"),void(n.loading=!1);a.default.setUser(o),a.default.toastSuccess("登录成功"),setTimeout((function(){e.redirectTo({url:"/pages/index/index"})}),1500),n.loading=!1}})).catch((function(e){o.default.debug&&console.log(e),n.loading=!1,a.default.toastError(e.data.message||e.errMsg)}))}else a.default.toastError("手机号或验证码不能为空")},getTelNumber:function(e){var t=this;t.telNumber=e.detail.value},sendCode:function(e){console.log("发送验证码"),console.log(e);var t=this;t.disabledSendCode=!0;var n=60;t.waitingtime=n+"秒重新发送";var r=null;r=setInterval((function(){n>0&&n<=60?(n--,t.waitingtime=n+"秒重新发送"):(t.waitingtime="发送验证码",n=60,t.disabledSendCode=!1,clearInterval(r))}),1e3),console.log(t.telNumber);var i={phoneNumber:t.telNumber};a.default.request(o.default.api.sendMessage,i,"POST").then((function(e){console.log("config.api.sendMessage"),console.log(e)})).catch((function(e){a.default.toastError(e.data.message||e.errMsg)}))}}};t.default=i}).call(this,n("543d")["default"])},"28b4":function(e,t,n){"use strict";(function(e){n("0e66");o(n("66fd"));var t=o(n("081d"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"5ec6":function(e,t,n){},"7e7d":function(e,t,n){"use strict";n.r(t);var o=n("281f"),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=a.a},bd0a:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var o={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"76ac"))}},a=function(){var e=this,t=e.$createElement;e._self._c},r=[]},c0a7:function(e,t,n){"use strict";var o=n("5ec6"),a=n.n(o);a.a}},[["28b4","common/runtime","common/vendor"]]]);