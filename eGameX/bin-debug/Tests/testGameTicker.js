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
        var res = GameRes.getRes("track_png");
        //promise使用
        _this.get("");
        return _this;
        //tables json 加载
        // tables.load();
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
    return testGameTicker;
}(egret.DisplayObjectContainer));
__reflect(testGameTicker.prototype, "testGameTicker");
//# sourceMappingURL=testGameTicker.js.map