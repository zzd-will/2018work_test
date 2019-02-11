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
var testMap = (function (_super) {
    __extends(testMap, _super);
    function testMap() {
        var _this = _super.call(this) || this;
        _this.url = "resource/outsidemap/outside11.tmx";
        var data = RES.getResByUrl(_this.url, _this.onLoaded, _this, RES.ResourceItem.TYPE_XML);
        return _this;
    }
    testMap.prototype.onLoaded = function (e) {
        var t = e.attributes.width * e.attributes.tilewidth, n = e.attributes.height * e.attributes.tileheight, i = new tiled.TMXTilemap(t, n, e, this.url);
        // i.y = 500;
        i.render(),
            i.touchEnabled = !0;
        this.addChild(i);
        i.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMove, this);
    };
    testMap.prototype.onMove = function (e) {
        e.target.x += 7;
        e.target.y += 3;
    };
    return testMap;
}(egret.DisplayObjectContainer));
__reflect(testMap.prototype, "testMap");
//# sourceMappingURL=testMap.js.map