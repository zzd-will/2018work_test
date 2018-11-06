


class MovieClipDataLoader {

    public url;
    public handle;
    public movieClipData;

    public get(key: string, callback: Function) {
        var rs :egret.MovieClipDataFactory= GameRes.getRes(key)
        if (rs) {
            this.url = key;
            callback(rs);
        } else {
            this.fetch(key, callback)
        }

    }
    public fetch(url: string, callback: Function) {
        this.url = url
        this.handle = callback;
        RES.getResByUrl(url,this.onEvent,this,RES.ResourceItem.TYPE_JSON)
    }
    public onEvent(e:egret.MovieClipData) {
        this.handle(e),
        this.handle = null
    }
    public release() {
        null != this.movieClipData && (this.movieClipData = null),
            this.handle = null,
            this.url = null
    }
}