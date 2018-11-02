function StringWithFormat(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return e.replace(/{(\d+)}/g,function(e,t){return r[t-1]})}function NumberFormat(e,t){return(Array(t).join("0")+e).slice(-t)}function Clamp(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=0),t>e?t:e>n?n:e}function FormatYYYYMMDDHHMM(e,t){var n=new Date(1e3*e);null==t&&(t=!0);var r=n.getFullYear()+"-"+NumberFormat(n.getMonth()+1,2)+"-"+NumberFormat(n.getDate(),2);return t&&(r+=" "+NumberFormat(n.getHours(),2)+":"+NumberFormat(n.getMinutes(),2)),r}function FormatDDHH(e){}function FormatTimeByRelativeDate(e,t){var n=new Date,r=new Date(1e3*e),i="";r.getDay()!=n.getDay()&&(i=r.getFullYear()+"-"+NumberFormat(r.getMonth()+1,2)+"-"+NumberFormat(r.getDate(),2)+" ");var o=NumberFormat(r.getHours(),2)+":"+NumberFormat(r.getMinutes(),2);return t&&(o+=":"+NumberFormat(r.getSeconds(),2)),i+o}function FormatToday(){}function LocalDate(){}var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,o&&(a=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,o=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(a=u.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){u.label=n[1];break}if(6===n[0]&&u.label<a[1]){u.label=a[1],a=n;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(n);break}a[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(r){n=[6,r],o=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,a,s,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},GameTicker;!function(e){function t(){e.timer=new egret.Timer(c,0),e.timer.addEventListener(egret.TimerEvent.TIMER,u,null)}function n(){e.timer.start();var t=egret.getTimer();l=t}function r(t,n,r,i){e.timer.addEventListener(egret.TimerEvent.TIMER,t,n,r,i)}function i(t,n,r){e.timer.removeEventListener(egret.TimerEvent.TIMER,t,n,r)}function o(){null!=e.timer&&e.timer.stop()}function a(){return e.timer&&e.timer.running}function s(){var e=egret.getTimer(),t=e-l;return t>=6e4?(egret.warn("[GameTick] now - nextGameTick="+t),!0):!1}function u(){var e=egret.getTimer(),t=e-l;t>=6e4&&egret.warn("[GameTick] now - nextGameTick="+t);var n=t/c,r=~~n;console.log("<<delta "+n),egret.log("n<<<< "+r),0==r&&(r=1),0>=r&&egret.error("[GameTick] [ERROR]",r),l=e}e.timer=null;var c=50,l=0;e.init=t,e.start=n,e.addEventListener=r,e.removeEventListener=i,e.stop=o,e.running=a,e.checkTimeout=s}(GameTicker||(GameTicker={}));var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?r(i):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),GameRes.preInit(),this.runGame()["catch"](function(e){})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),[4,this.createGameScene()];case 2:return t.sent(),[4,platform.login()];case 3:return t.sent(),[4,platform.getUserInfo()];case 4:return e=t.sent(),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){new testGameTicker},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function i(e){t.call(r,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(r))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(r,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.split("/");s.pop();var u=s.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(r,generateJSON.paths[e])},this):RES.getResByUrl(u,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(r,generateJSON.paths[e])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Game;!function(e){function t(){null!=this.parent&&this.parent.removeChild(this)}e.removeFromParent=t}(Game||(Game={}));var GameEvent;!function(e){function t(e,t){void 0===e&&(e=null),r.dispatchEventWith(e,!1,t)}function n(e,t,n,i,o){r.addEventListener(e,t,n)}var r=new egret.EventDispatcher;e.EVENT={Login:"Login",LoadingSuccess:"LoadingSuccess",LoadingFailed:"LoadingFailed"},e.dispatch=t,e.add=n}(GameEvent||(GameEvent={}));var GameRes;!function(e){function t(){RES.processor.map("zip",{onLoadStart:function(e,t){return e.load(t,RES.processor.BinaryProcessor).then(function(n){var r=new JSZip;return r.loadAsync(n,{checkCRC32:!0}).then(function(n){var r=n.files;for(var i in r)e.resourceConfig.addSubkey(i,t.name)},function(e){var t=e.message;e&&e.stack&&(t+=e.stack),egret.error(egret.getTimer()+"zzp文件解析出错！长度："+t)}),r})},onRemoveStart:function(e,t){return Promise.resolve()},getData:function(e,t,n,r){var i,o=e.get(t);return new Promise(function(e,t){o.file(r).async("string").then(function(n){r.indexOf(".json")>=0?(i=JSON.parse(n),e(i)):r.indexOf(".tmx")>=0?(i=egret.XML.parse(n),e(i)):(i="parse data failed!",t(i))})})}})}function n(e){return new Promise(function(t,n){RES.hasRes(e)?RES.getRes(e).then(function(e,n){t(e)}):n("getZipRes not have this key: "+e)})}function r(e){return RES.hasRes(e)?RES.getRes(e):void egret.log("getRes not have this key: "+e)}function i(e){return RES.hasRes(e)?RES.getResAsync(e):(egret.log("getResAsync not have this key: ",e),!1)}function o(){var e,t,n,r,i,o,a,s,u;n=[],e=RES.getRes("preload_json"),egret.log("rrrrrrrrrrrrrrr",e);for(t in e)n.push(t),egret.log("nnnn",t);if(r=0,!(r<n.length))return!1;if(i=n[r],o=e[i],null==o.files&&(o.files=[]),a=void 0,null!=o.option)for(s=o.option.length,u=0;s>u;u++)a=o.option[u],RES.hasRes(a)&&o.files.push(a);a=o.replaceable,null==o.replaceable||RES.hasRes(a)&&o.files.push(a),RES.createGroup(i,o.files)}function a(e,t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(r){return RES.isGroupLoaded(e)||(n=RES.loadGroup(e,0,t),"config"==e&&(s[e]=n)),[2]})})}var s={};e.preInit=t,e.getZipRes=n,e.getRes=r,e.getResAsync=i,e.init=o,e.load=a}(GameRes||(GameRes={}));var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Singleton=function(){function e(){}return e.Inst=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=this;if(!n._instance){var r=e.length;0==r?n._instance=new n:1==r?n._instance=new n(e[0]):2==r?n._instance=new n(e[0],e[1]):3==r?n._instance=new n(e[0],e[1],e[2]):4==r?n._instance=new n(e[0],e[1],e[2],e[3]):5==r&&(n._instance=new n(e[0],e[1],e[2],e[3],e[4]))}return n._instance},e}();__reflect(Singleton.prototype,"Singleton");var tables;!function(e){function t(){RES.getRes("config/maps.json").then(function(t){for(var n=t.length,r=0;n>r;r++){var i=t[r];if(e.maps[i.id]=i,i.preload){for(var o=[],a=i.preload.length,s=0;a>s;s++)o.push(i.preload[s]);o.length>0&&RES.createGroup("map_"+i.id,o)}}for(var u in e.maps)0!=e.maps[u].wild&&(null==e.wilds[e.maps[u].level]&&(e.wilds[e.maps[u].level]=[]),e.wilds[e.maps[u].level].push({Id:Number(u),map:e.maps[u]}))}),e.blendMode[0]=egret.BlendMode.ADD}e.load=t,e.maps={},e.wilds={},e.blendMode={},e.tmx={}}(tables||(tables={}));var testGameTicker=function(e){function t(){var t=e.call(this)||this;GameRes.getZipRes("config/buffdesc.json").then(function(e){var t=StringWithFormat(e[7].desc,20);egret.log(t)});var n=(GameRes.getRes("track_png"),"A_B_C_12345876.json"),r=n.indexOf("."),i=n.lastIndexOf("_");n.slice(i+1,r),n.split("."),n.split("_");return t.get(""),t}return __extends(t,e),t.prototype.get=function(e){GameRes.getZipRes("config/buffdesc.json").then(function(e){var t=StringWithFormat(e[7].desc,20);egret.log(t)})["catch"](function(e){egret.log(e)})},t}(egret.DisplayObjectContainer);__reflect(testGameTicker.prototype,"testGameTicker");var testMap=function(e){function t(){var t=e.call(this)||this,n="resource/outsidemap/outside11.tmx";RES.getResByUrl(n,t.onLoaded,t,RES.ResourceItem.TYPE_XML);return t}return __extends(t,e),t.prototype.onLoaded=function(e){var t=e.attributes.width*e.attributes.tilewidth,n=e.attributes.height*e.attributes.tileheight,r=new tiled.TMXTilemap(t,n,e,"resource/outsidemap/");r.render(),r.touchEnabled=!0,this.addChild(r)},t}(egret.DisplayObjectContainer);__reflect(testMap.prototype,"testMap");var testTimer=function(e){function t(){var t=e.call(this)||this;return t.delayTime=50,t.oldTime=0,t.timer=new egret.Timer(t.delayTime,0),t.timer.addEventListener(egret.TimerEvent.TIMER,t.callback,t),t}return __extends(t,e),t.prototype.start=function(){this.timer.start();var e=egret.getTimer();this.oldTime=e},t.prototype.callback=function(){var e=egret.getTimer(),t=e-this.oldTime,n=t/this.delayTime,r=~~n;console.log("<<delta "+n),egret.log("n<<<< "+r),0==r&&(r=1),0>=r&&egret.error("[GameTick] [ERROR]",r),this.oldTime=e},t}(egret.DisplayObjectContainer);__reflect(testTimer.prototype,"testTimer");var uitest=function(e){function t(){return e.call(this)||this}return __extends(t,e),t}(eui.Component);__reflect(uitest.prototype,"uitest",["eui.UIComponent","egret.DisplayObject"]);