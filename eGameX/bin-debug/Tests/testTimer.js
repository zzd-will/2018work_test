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
var testTimer = (function (_super) {
    __extends(testTimer, _super);
    function testTimer() {
        var _this = _super.call(this) || this;
        _this.delayTime = 50;
        _this.oldTime = 0;
        _this.timer = new egret.Timer(_this.delayTime, 0);
        _this.timer.addEventListener(egret.TimerEvent.TIMER, _this.callback, _this);
        return _this;
    }
    testTimer.prototype.start = function () {
        this.timer.start();
        var time = egret.getTimer();
        this.oldTime = time;
    };
    testTimer.prototype.callback = function () {
        var time = egret.getTimer();
        var diff = time - this.oldTime;
        var delta = diff / this.delayTime;
        var n = ~~(delta);
        console.log("<<delta " + delta);
        //  console.log("<<< m "+n);
        egret.log("n<<<< " + n);
        0 == n && (n = 1), 0 >= n && egret.error("[GameTick] [ERROR]", n);
        this.oldTime = time;
    };
    return testTimer;
}(egret.DisplayObjectContainer));
__reflect(testTimer.prototype, "testTimer");
//# sourceMappingURL=testTimer.js.map