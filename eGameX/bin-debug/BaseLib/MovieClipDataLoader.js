var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MovieClipDataLoader = (function () {
    function MovieClipDataLoader() {
    }
    MovieClipDataLoader.prototype.get = function (key, callback) {
        var rs = GameRes.getRes(key);
        if (rs) {
            this.url = key;
            callback(rs);
        }
        else {
            this.fetch(key, callback);
        }
    };
    MovieClipDataLoader.prototype.fetch = function (url, callback) {
        this.url = url;
        this.handle = callback;
        RES.getResByUrl(url, this.onEvent, this, RES.ResourceItem.TYPE_JSON);
    };
    MovieClipDataLoader.prototype.onEvent = function (e) {
        this.handle(e),
            this.handle = null;
    };
    MovieClipDataLoader.prototype.release = function () {
        null != this.movieClipData && (this.movieClipData = null),
            this.handle = null,
            this.url = null;
    };
    return MovieClipDataLoader;
}());
__reflect(MovieClipDataLoader.prototype, "MovieClipDataLoader");
//# sourceMappingURL=MovieClipDataLoader.js.map