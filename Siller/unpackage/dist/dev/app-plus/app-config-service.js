
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/detail/detail","components/hch-menu/video-menu","components/description","components/headernav","components/meaning","components/photo","components/split","components/video","pages/dictionary/dictionary","pages/login/login","pages/reg/reg","pages/collection/collection","pages/history/history","uview-ui/components/u-full-screen/u-full-screen"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"Siller","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF","navigationStyle":"custom"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Siller","compilerVersion":"2.8.11","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"Siller"}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/hch-menu/video-menu","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/description","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/headernav","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/meaning","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/photo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/split","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/video","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/dictionary/dictionary","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/reg/reg","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/collection/collection","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/history/history","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/uview-ui/components/u-full-screen/u-full-screen","meta":{},"window":{"navigationStyle":"custom","animationType":"fade-in","background":"transparent","backgroundColor":"rgba(0,0,0,0)","popGesture":"none"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
