class testTimer extends egret.DisplayObjectContainer{


    public delayTime = 50;
    public oldTime = 0;
    public timer:egret.Timer;

    constructor(){
        super();


        this.timer = new egret.Timer(this.delayTime,0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.callback, this);
    }
    public start(){
        this.timer.start();
        var time = egret.getTimer();
        this.oldTime = time;
    }
    public callback(){
         var time = egret.getTimer();

        var diff = time - this.oldTime;

        var delta =  diff / this.delayTime;

         var n = ~~ ( delta);

         console.log("<<delta "+delta);

        //  console.log("<<< m "+n);
         egret.log("n<<<< " + n);

           0 == n && (n = 1),0 >= n && egret.error("[GameTick] [ERROR]",  n);

         this.oldTime = time;

    }
}