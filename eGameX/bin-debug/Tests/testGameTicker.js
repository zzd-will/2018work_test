var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var testGameTicker = (function (_super) {
    __extends(testGameTicker, _super);
    function testGameTicker() {
        var _this = _super.call(this) || this;
        //GameTicker test
        // GameTicker.init();
        // GameTicker.start();
        // GameTicker.addEventListener(function(){
        // egret.log("test");
        // },this);
        //GameEvent test
        //   GameEvent.add(GameEvent.EVENT.Login,function(){
        //        egret.log("<<<< addEventListener");
        //   },this);
        //   GameEvent.dispatch(GameEvent.EVENT.Login);
        //zip资源获取
        GameRes.getZipRes("config/buffdesc.json").then(function (rs) {
            var b = StringWithFormat(rs[7].desc, 20);
            egret.log(b);
        });
        //普通资源获取
        //  var res =  GameRes.getRes("track.png");
        //promise使用
        // this.get("");
        //tables json 加载
        // tables.load();
        // this.testmc();
        _this.testui();
        return _this;
        // this.testLayerManager();
    }
    //promise 使用
    testGameTicker.prototype.get = function (key) {
        GameRes.getZipRes("config/buffdesc.json").then(function (rs) {
            var b = StringWithFormat(rs[7].desc, 20);
            egret.log(b);
        }).catch(function (rej) {
            egret.log(rej);
        });
    };
    //  img.onload = ()=>{
    //      console.log("onload");
    //  }
    // }
    testGameTicker.prototype.test = function () {
        var mc = new MovieClipDataLoader();
        mc.get("st_2_1.json", function (res) {
            console.log(res);
        });
        mc.fetch("st_2_1.json", function (rs) {
            console.log(rs);
        });
    };
    testGameTicker.prototype.testmc = function () {
        var mc = new UI.MovieClipComponent;
        mc.Load("skill02.json", "skill02");
        // mc.Load("wd_shifa1.json","wd_shifa1")
        // mc.Load("tw_dingshen.json","tw_dingshen")
        mc.auto = true;
        //    mc.play(-1)
        // mc.justify = false;
        // mc.contentJustify=false;
        mc.x = 500;
        mc.y = 400;
        this.addChild(mc);
    };
    testGameTicker.prototype.testui = function () {
        var loadingView = new UI.LoadingUICT();
        loadingView.skinName = RES.getRes("Loading.exml");
        loadingView.once(egret.Event.ADDED_TO_STAGE, function () {
            var e = document.getElementById("launchDiv");
            null != e && e.parentNode.removeChild(e);
        }, null);
        // loadingView.verticalCenter = 0
        // loadingView.horizontalCenter = 0
        var euiLayer = new eui.UILayer;
        euiLayer.addChild(loadingView);
        euiLayer.touchEnabled = !1;
        this.addChild(euiLayer);
        //  RES.loadGroup("init",0,loadingView)
        loadingView.onProgress(3, 5);
    };
    testGameTicker.prototype.testLayerManager = function () {
        LayerManager.inst.showUI("LoadingUICT");
    };
    testGameTicker.prototype.testloadingUI = function () {
        RES.loadGroup("init", 0);
    };
    testGameTicker.prototype.testLoader = function () {
    };
    return testGameTicker;
}(egret.DisplayObjectContainer));
__reflect(testGameTicker.prototype, "testGameTicker");
var TestSkin = (function (_super) {
    __extends(TestSkin, _super);
    function TestSkin() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.skinName = "resource/UI/Loading.exml";
        return _this;
    }
    TestSkin.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        console.log("createChildren");
    };
    TestSkin.prototype.onComplete = function () {
        console.log("onComplete");
    };
    return TestSkin;
}(eui.Component));
__reflect(TestSkin.prototype, "TestSkin");
//# sourceMappingURL=testGameTicker.js.map