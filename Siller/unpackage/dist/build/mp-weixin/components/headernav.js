(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/headernav"],{"01b7":function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var o={uPopup:function(){return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null,"4a1a"))}},i=function(){var n=this,e=n.$createElement;n._self._c},u=[]},1507:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(t("b3f8")),i=u(t("d5f1"));function u(n){return n&&n.__esModule?n:{default:n}}var r={name:"headernav",data:function(){return{menuShow:!1,redirect:encodeURIComponent("/pages/index/index"),info:{},user:{}}},onLoad:function(n){this.info=o.default.info},onShow:function(){this.initUser()},beforeUpdate:function(){console.log("Headernav mounted"),this.initUser()},methods:{toMenu:function(){var n=this;n.menuShow=!n.menuShow,console.log(n.menuShow)},userLoginEvent:function(e){console.log(this.user.uid);var t=this;0==t.user.uid&&(console.log(this.user.uid),t.menuShow=!1,n.navigateTo({url:"/pages/login/login?redirect="+this.redirect}))},logout:function(e){var t=this;n.showModal({title:"温馨提示",content:"您确定要退出登录吗？",duration:2e3,image:"../static/img/back.png",success:function(e){if(e.confirm){var u={token:"",type:"1"};u.token=t.user.token,i.default.request(o.default.api.unLogin),i.default.clearUser(),i.default.toastSuccess("退出成功"),t.initUser(),i.default.setSignedAt(0),t.menuShow=!1,n.redirectTo({url:"/pages/index/index"})}}})},initUser:function(){var n=this,e=i.default.getUser();console.log("user: "+e),void 0!=e&&void 0!=e.token||(console.log("user == undefined || user.token == undefined"),e={uid:"0",nickname:"请点我登录",avatar:"/static/images/logo.jpg",intro:"心灵也手巧"},n.moreInfo={uid:0,signed_at:0,created_at:0,total_sign:0,total_continuous_sign:0,history_continuous_sign:0,today_reading:0,month_reading:0,total_reading:0,today_reading_hour:0,today_reading_min:0,month_reading_hour:0,month_reading_min:0,total_reading_hour:0,total_reading_min:0,join_day:0}),console.log("user: "+e),n.user=e}},props:{}};e.default=r}).call(this,t("543d")["default"])},2184:function(n,e,t){"use strict";t.r(e);var o=t("1507"),i=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=i.a},"33ef":function(n,e,t){"use strict";t.r(e);var o=t("01b7"),i=t("2184");for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t("ebc7");var r,a=t("f0c5"),s=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=s.exports},"45ed":function(n,e,t){},ebc7:function(n,e,t){"use strict";var o=t("45ed"),i=t.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/headernav-create-component',
    {
        'components/headernav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("33ef"))
        })
    },
    [['components/headernav-create-component']]
]);