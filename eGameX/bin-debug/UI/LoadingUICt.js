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
    var LoadingUICT = (function (_super) {
        __extends(LoadingUICT, _super);
        function LoadingUICT() {
            var _this = _super.call(this) || this;
            //使用
            _this.skinName = RES.getRes("Loading.exml");
            _this.img = "loading_bg_under.jpg";
            //在哪个层上
            _this.m_layerID = LayerManager.EUI_LODING_LAYER;
            _this.verticalCenter = 0;
            _this.horizontalCenter = 0;
            _this.m_effectType = 4;
            _this.left = 0,
                _this.right = 0,
                _this.top = 0,
                _this.bottom = 0;
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
            // LayerManager.inst.hideUI("LoadingUICT");
            window.location.reload();
        };
        LoadingUICT.prototype.onProgress = function (e, t) {
            this.maximum = t,
                this.value = e,
                this.percent = this.progressGroup.width * this.value / this.maximum;
        };
        return LoadingUICT;
    }(BaseUI));
    UI.LoadingUICT = LoadingUICT;
    __reflect(LoadingUICT.prototype, "UI.LoadingUICT");
})(UI || (UI = {}));
//# sourceMappingURL=LoadingUICt.js.map