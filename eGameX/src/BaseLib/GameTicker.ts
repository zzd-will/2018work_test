


namespace GameTicker{

    export var  timer:egret.Timer = null;

    var  delayTime=50;
    var  oldTime=0;

    export function init(){
        timer = new egret.Timer(delayTime,0);
        timer.addEventListener(egret.TimerEvent.TIMER, callback, null);
    }
    export function start(){
        timer.start();
        var time = egret.getTimer();
        oldTime = time;
    }
    export function addEventListener(listener: Function, thisObject: any, useCapture?: boolean, priority?: number){
        timer.addEventListener(egret.TimerEvent.TIMER, listener, thisObject, useCapture, priority)
    }
    export function removeEventListener(listener: Function, thisObject: any, useCapture?: boolean){
        timer.removeEventListener(egret.TimerEvent.TIMER, listener, thisObject, useCapture)
    }
    export function stop(){
       if( null != timer){ 
            timer.stop();
        }
    }
    export function running(){
          return  timer &&  timer.running;
    }
    export function checkTimeout(){
         var time = egret.getTimer();
         var diff = time - oldTime;

         if(diff >= 60*1000){//Game.Second=1000 timeout
             egret.warn("[GameTick] now - nextGameTick=" + diff)
             return true;
         }
        return false;
    }
    function callback(){
        var time = egret.getTimer();

        var diff = time - oldTime;

        if(diff >= 60*1000){//Game.Second=1000 timeout
             egret.warn("[GameTick] now - nextGameTick=" + diff)
         }

        var delta =  diff / delayTime;

         var n = ~~ ( delta);

         console.log("<<delta "+delta);

        //  console.log("<<< m "+n);
         egret.log("n<<<< " + n);

           0 == n && (n = 1),0 >= n && egret.error("[GameTick] [ERROR]",  n);

         oldTime = time;

    }

}