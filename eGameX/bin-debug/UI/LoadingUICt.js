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
var UI;
(function (UI) {
    var FitComponent = (function (_super) {
        __extends(FitComponent, _super);
        function FitComponent() {
            var _this = _super.call(this) || this;
            _this.left = 0,
                _this.right = 0,
                _this.top = 0,
                _this.bottom = 0;
            return _this;
        }
        return FitComponent;
    }(eui.Component));
    UI.FitComponent = FitComponent;
    __reflect(FitComponent.prototype, "UI.FitComponent");
})(UI || (UI = {}));
var LoadingUICT = (function (_super) {
    __extends(LoadingUICT, _super);
    function LoadingUICT() {
        var _this = _super.call(this) || this;
        //使用
        _this.skinName = RES.getRes("Loading.exml");
        _this.img = "loading_bg_under.jpg";
        _this.m_layer = LayerManager.EUI_LODING_LAYER;
        return _this;
    }
    LoadingUICT.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.refresh.textFlow = [{
                text: this.refresh.text,
                style: {
                    underline: true
                }
            }],
            this.refresh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRefresh, this);
    };
    LoadingUICT.prototype.onRefresh = function () {
        window.location.reload();
    };
    LoadingUICT.prototype.onProgress = function (e, t) {
        this.maximum = t,
            this.value = e,
            this.percent = this.progressGroup.width * this.value / this.maximum;
    };
    return LoadingUICT;
}(BaseLayer));
__reflect(LoadingUICT.prototype, "LoadingUICT");
//# sourceMappingURL=LoadingUICt.js.map