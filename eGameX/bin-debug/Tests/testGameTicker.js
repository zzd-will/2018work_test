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
        //res
        //   var test =  RES.getRes("config/buffdesc.json");
        RES.getRes("config/buffdesc.json").then(function (rs) {
            var p = rs;
            egret.log("hello");
            var b = StringWithFormat(p[7].desc, 20, 3, 5);
            var test = p[7].desc;
        });
        //  egret.log("test<<<<<< "+test[1].desc);
        egret.setTimeout(function () {
            //  var b = test;
        }, _this, 2000);
        return _this;
    }
    return testGameTicker;
}(egret.DisplayObjectContainer));
__reflect(testGameTicker.prototype, "testGameTicker");
//# sourceMappingURL=testGameTicker.js.map