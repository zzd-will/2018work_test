var GameTicker;
(function (GameTicker) {
    GameTicker.timer = null;
    var delayTime = 50;
    var oldTime = 0;
    function init() {
        GameTicker.timer = new egret.Timer(delayTime, 0);
        GameTicker.timer.addEventListener(egret.TimerEvent.TIMER, callback, null);
    }
    GameTicker.init = init;
    function start() {
        GameTicker.timer.start();
        var time = egret.getTimer();
        oldTime = time;
    }
    GameTicker.start = start;
    function addEventListener(listener, thisObject, useCapture, priority) {
        GameTicker.timer.addEventListener(egret.TimerEvent.TIMER, listener, thisObject, useCapture, priority);
    }
    GameTicker.addEventListener = addEventListener;
    function removeEventListener(listener, thisObject, useCapture) {
        GameTicker.timer.removeEventListener(egret.TimerEvent.TIMER, listener, thisObject, useCapture);
    }
    GameTicker.removeEventListener = removeEventListener;
    function stop() {
        if (null != GameTicker.timer) {
            GameTicker.timer.stop();
        }
    }
    GameTicker.stop = stop;
    function running() {
        return GameTicker.timer && GameTicker.timer.running;
    }
    GameTicker.running = running;
    function checkTimeout() {
        var time = egret.getTimer();
        var diff = time - oldTime;
        if (diff >= 60 * 1000) {
            egret.warn("[GameTick] now - nextGameTick=" + diff);
            return true;
        }
        return false;
    }
    GameTicker.checkTimeout = checkTimeout;
    function callback() {
        var time = egret.getTimer();
        var diff = time - oldTime;
        if (diff >= 60 * 1000) {
            egret.warn("[GameTick] now - nextGameTick=" + diff);
        }
        var delta = diff / delayTime;
        var n = ~~(delta);
        console.log("<<delta " + delta);
        //  console.log("<<< m "+n);
        egret.log("n<<<< " + n);
        0 == n && (n = 1), 0 >= n && egret.error("[GameTick] [ERROR]", n);
        oldTime = time;
    }
})(GameTicker || (GameTicker = {}));
//# sourceMappingURL=GameTicker.js.map