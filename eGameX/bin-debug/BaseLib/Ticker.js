var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ticker = (function () {
    function Ticker(delay) {
        this.timer = new egret.Timer(delay, 0);
    }
    Ticker.prototype.addEventListener = function (listener, thisobj) {
        if (!this.timer.running) {
            this.timer.start();
            this.timer.addEventListener(egret.TimerEvent.TIMER, listener, thisobj);
        }
    };
    Ticker.prototype.removeEventListener = function (listener, thisobj) {
        this.timer.removeEventListener(egret.TimerEvent.TIMER, listener, thisobj);
        if (!this.timer.willTrigger(egret.TimerEvent.TIMER) && this.timer.running) {
            this.timer.stop();
        }
    };
    Ticker.prototype.start = function () {
        if (this.timer.willTrigger(egret.TimerEvent.TIMER) && !this.timer.running) {
            this.timer.start();
        }
    };
    Ticker.prototype.stop = function () {
        this.timer.stop();
    };
    return Ticker;
}());
__reflect(Ticker.prototype, "Ticker");
//# sourceMappingURL=Ticker.js.map