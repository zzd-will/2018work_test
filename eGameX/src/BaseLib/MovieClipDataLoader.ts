


class MovieClipDataLoader {

    public url;
    public handle;
    public dispatcher: egret.EventDispatcher;

    public get(key: string, callback: Function) {
        GameRes.getRes(key).then(function (rs) {
            this.url = key;
            callback(rs);
        }).catch(function(rej){
             this.fetch(key, callback)
        })
    }
    public fetch(e, t) {
        this.url = e,
            this.dispatcher = new egret.EventDispatcher(),
            this.handle = t,
            this.dispatcher.once(egret.Event.COMPLETE, this.onEvent, this)
    }
    public onEvent(e) {
        this.handle(e.data),
            this.handle = null
    }
    public release() {
        null != this.movieClipData && (this.movieClipData = null),
            null != this.dispatcher && (this.dispatcher.removeEventListener(egret.Event.COMPLETE, this.onEvent, this), this.dispatcher = null),
            this.handle = null,
            this.url = null
    }
}