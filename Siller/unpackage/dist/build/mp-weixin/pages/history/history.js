(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/history/history"],{"0b37":function(t,n,e){},"0f03":function(t,n,e){},"1cc7":function(t,n,e){"use strict";e.r(n);var o=e("8c98"),a=e("b119");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("c595");var c,r=e("f0c5"),i=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"d9ce406e",null,!1,o["a"],c);n["default"]=i.exports},"1da9":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var o={hchMenu:function(){return e.e("components/hch-menu/hch-menu").then(e.bind(null,"f0cb"))}},a=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"217f":function(t,n,e){},"2f1c":function(t,n,e){"use strict";(function(t){e("0e66");o(e("66fd"));var n=o(e("1cc7"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"300c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(e("de48")),a=c(e("b3f8")),u=c(e("d5f1"));function c(t){return t&&t.__esModule?t:{default:t}}var r=function(){e.e("components/split").then(function(){return resolve(e("61f2"))}.bind(null,e)).catch(e.oe)},i=function(){e.e("components/hch-menu/hch-menu").then(function(){return resolve(e("f0cb"))}.bind(null,e)).catch(e.oe)},f={components:{meaning:o.default,split:r,HchMune:i},data:function(){return{imgPath:"",filePath:"",mainwords:[]}},props:{},watch:{filePath:function(t,n){var e=this;console.log("filePath = "+t+" , oldValue = "+n);var o={token:""};o.token=u.default.getToken(),console.log(o),u.default.request(a.default.api.transfor1,o,"POST").then((function(t){var n=t.item;console.log(n.length);for(var o=0;o<n.length;o++)if(""==n[o].result&&(n[o].result="1"),""!=n[o].result){var c={token:"",fid:""};c.token=u.default.getToken(),c.fid=n[o].result,"-1"!=c.fid&&u.default.request(a.default.api.resource3,c,"POST").then((function(t){console.log(t),"301"!=t.code&&(console.log(t),e.mainwords.push(t))})).catch((function(t){e.loading=!1,u.default.toastError(t.data.message||t.errMsg)}))}})).catch((function(t){e.loading=!1,u.default.toastError(t.data.message||t.errMsg)}))}},methods:{returnItem:function(t){console.log(t),this.filePath=t}},onLoad:function(t){this.imgPath=t.filePath,console.log(t.filePath)},onShow:function(t){}};n.default=f},"48d2":function(t,n,e){"use strict";e.r(n);var o=e("1da9"),a=e("ecdc");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("565f");var c,r=e("f0c5"),i=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"05bd7b12",null,!1,o["a"],c);n["default"]=i.exports},"565f":function(t,n,e){"use strict";var o=e("0b37"),a=e.n(o);a.a},"6fde":function(t,n,e){"use strict";e.r(n);var o=e("bf5d"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=a.a},"8c98":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var o={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,"76ac"))}},a=function(){var t=this,n=t.$createElement;t._self._c},u=[]},9383:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e("b3f8")),a=r(e("d5f1")),u=(r(e("cc19")),r(e("de48"))),c=r(e("48d2"));function r(t){return t&&t.__esModule?t:{default:t}}var i=function(){e.e("components/split").then(function(){return resolve(e("61f2"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/video").then(function(){return resolve(e("7e08"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/headernav").then(function(){return resolve(e("33ef"))}.bind(null,e)).catch(e.oe)},d={components:{meaning:u.default,split:i,photo:c.default,videoInspect:f,headernav:l},data:function(){return{historywords:[]}},onShow:function(){var n=this,e=a.default.getUser(),u=[],c=[];void 0==e||void 0==e.token?e={uid:"0",nickname:"请点我登录",avatar:"../static/images/logo.jpg",intro:"",token:""}:t.callFunction({name:"getHistory",data:{tel:e.uid},success:function(t){if(console.log(t),0!=t.result.data.data.length){console.log(t.result.data.data[0].fid),u=t.result.data.data[0].fid;for(var e=0;e<u.length;e++){var r={token:"",fid:""};r.token=a.default.getToken(),r.fid=u[e],"-1"!=r.fid&&a.default.request(o.default.api.resource3,r,"POST").then((function(t){console.log(t),"301"!=t.code&&(c.push(t),console.log(c))})).catch((function(t){n.loading=!1,a.default.toastError(t.data.message||t.errMsg)}))}}},fail:function(t){console.log(t)}}),n.historywords=c,n.historyfids=u}};n.default=d}).call(this,e("a9ff")["default"])},a462:function(t,n,e){"use strict";var o=e("217f"),a=e.n(o);a.a},b119:function(t,n,e){"use strict";e.r(n);var o=e("9383"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=a.a},bf5d:function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;u(e("b3f8"));var a=u(e("d5f1"));u(e("cc19"));function u(t){return t&&t.__esModule?t:{default:t}}var c={name:"meaning",data:function(){return{}},onReady:function(){},methods:{toDetail:function(){var n=a.default.getUser(),e=this;t.navigateTo({url:"/pages/detail/detail?word="+e.word+"&type="+e.type+"&interpretation="+e.interpretation+"&imgsrc="+e.imgsrc+"&videosrc="+e.videosrc}),o.callFunction({name:"getHistory",data:{tel:n.uid},success:function(t){console.log(t),0==t.result.data.data.length&&o.callFunction({name:"addHistory",data:{tel:n.uid,fid:[]},success:function(t){console.log(t)},fail:function(t){console.log(t)}});var u=[];0!=t.result.data.data.length&&(u=t.result.data.data[0].fid);var c=a.default.getFidByWord(e.word);u.push(c),o.callFunction({name:"updateHistory",data:{tel:n.uid,fid:u},success:function(t){console.log(t)},fail:function(t){console.log(t)}})},fail:function(t){console.log(t)}})}},props:{type:{type:String,default:"adj"},interpretation:{type:String,default:"一手食指指眼部"},word:{type:String,default:"眼睛"},imgsrc:{type:String,default:"http://file.bookcodes.cn/pictures/eye.jpg"},videosrc:{type:String,default:"http://file.bookcodes.cn/pictures/eye.jpg"}}};n.default=c}).call(this,e("543d")["default"],e("a9ff")["default"])},c595:function(t,n,e){"use strict";var o=e("0f03"),a=e.n(o);a.a},da18:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement;t._self._c},u=[]},de48:function(t,n,e){"use strict";e.r(n);var o=e("da18"),a=e("6fde");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("a462");var c,r=e("f0c5"),i=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=i.exports},ecdc:function(t,n,e){"use strict";e.r(n);var o=e("300c"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=a.a}},[["2f1c","common/runtime","common/vendor"]]]);