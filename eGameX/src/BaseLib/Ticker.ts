class Ticker{
    
    //repeate ticker
    protected timer:egret.Timer;
    constructor(delay:number){
        this.timer = new egret.Timer(delay, 0)
    }
    public addEventListener(listener, thisobj) {

        if (!this.timer.running) {
            this.timer.start();
            this.timer.addEventListener(egret.TimerEvent.TIMER, listener, thisobj);
        }
    }
    public removeEventListener(listener, thisobj) {
        this.timer.removeEventListener(egret.TimerEvent.TIMER, listener, thisobj);
        if (!this.timer.willTrigger(egret.TimerEvent.TIMER) && this.timer.running) {
            this.timer.stop();
        }
    }
    public start() {
        if (this.timer.willTrigger(egret.TimerEvent.TIMER) && !this.timer.running)
        { this.timer.start(); }
    }
    public stop() {
        this.timer.stop();
    }
}