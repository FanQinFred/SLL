(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/hch-menu/video-menu"],{"4d0c":function(e,t,n){"use strict";n.r(t);var o=n("c21d"),c=n("d795");for(var a in c)"default"!==a&&function(e){n.d(t,e,(function(){return c[e]}))}(a);n("c42c");var u,i=n("f0c5"),l=Object(i["a"])(c["default"],o["b"],o["c"],!1,null,"ab263be0",null,!1,o["a"],u);t["default"]=l.exports},"4f03":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;c(n("b3f8"));var o=c(n("d5f1"));c(n("cc19"));function c(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{openFlag:!1,filePath:"1.jpg"}},props:{},methods:{clickMenu:function(){this.openFlag=!this.openFlag},clickCamera:function(){},clickPicture:function(){var t=this,n={token:"",fileName:""};n.token=o.default.getToken(),e.chooseVideo({sourceType:["album"],success:function(c){var a=c.tempFilePath;n.fileName=a.substring(a.lastIndexOf("/")+1),console.log(n.fileName),console.log("文件上传"),e.uploadFile({url:"http://dactylology.frogking.cn/fileService/uploadFile",filePath:a,name:"file",formData:n,header:{"Content-Type":"multipart/form-data"},fail:function(e){console.log(e)},success:function(e){console.log(e),"000"==e.data.code&&console.log("文件上传成功"),setTimeout((function(){o.default.toastSuccess("上传成功")}),100),t.filePath=n.fileName,t.$emit("returnItem",t.filePath)}})}})}}};t.default=a}).call(this,n("543d")["default"])},"956f":function(e,t,n){},c21d:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var c=function(){var e=this,t=e.$createElement;e._self._c},a=[]},c42c:function(e,t,n){"use strict";var o=n("956f"),c=n.n(o);c.a},d795:function(e,t,n){"use strict";n.r(t);var o=n("4f03"),c=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/hch-menu/video-menu-create-component',
    {
        'components/hch-menu/video-menu-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4d0c"))
        })
    },
    [['components/hch-menu/video-menu-create-component']]
]);
