


class MovieClipDataLoader {

    public url;
    public handle;
    public dispatcher: egret.EventDispatcher;
    public movieClipData;

    public get(key: string, callback: Function) {
        var rs = GameRes.getRes(key)
        if (rs) {
            this.url = key;
            callback(rs);
        } else {
            this.fetch(key, callback)
        }

    }
    public fetch(key: string, callback: Function) {
        this.url = key
        this.handle = callback;
        GameRes.getResAsync(key,callback,this)
    }
    public onEvent(e) {
        this.handle(e.data),
            this.handle = null
    }
    public release() {
        null != this.movieClipData && (this.movieClipData = null),
            this.handle = null,
            this.url = null
    }
}