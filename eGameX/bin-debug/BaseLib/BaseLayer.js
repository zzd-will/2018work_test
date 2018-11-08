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
var BaseLayer = (function (_super) {
    __extends(BaseLayer, _super);
    function BaseLayer() {
        var _this = _super.call(this) || this;
        _this.m_dataInited = false;
        _this.m_childrenCreated = false;
        _this.m_layer = LayerManager.EUI_UI_LAYER;
        _this.m_mutex = false;
        _this.m_modal = false;
        _this.m_modalMask;
        _this.m_modalAlpha = .6;
        _this.m_effectType = 0;
        return _this;
    }
    Object.defineProperty(BaseLayer.prototype, "data", {
        get: function () {
            return this.m_data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLayer.prototype, "layer", {
        get: function () {
            return this.m_layer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLayer.prototype, "mutex", {
        get: function () {
            return this.m_mutex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLayer.prototype, "modal", {
        get: function () {
            return this.m_modal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLayer.prototype, "modalAlpha", {
        get: function () {
            return this.m_modalAlpha;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLayer.prototype, "effectType", {
        get: function () {
            return this.m_effectType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLayer.prototype, "modalMask", {
        get: function () {
            return this.m_modalMask;
        },
        enumerable: true,
        configurable: true
    });
    BaseLayer.prototype.setData = function (data) {
        this.m_data = data;
        this.m_dataInited = true;
        if (this.m_childrenCreated) {
            this.initData();
        }
    };
    BaseLayer.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.m_childrenCreated = true;
        if (this.m_dataInited) {
            this.initData();
        }
    };
    BaseLayer.prototype.init = function () { };
    BaseLayer.prototype.initData = function () { };
    BaseLayer.prototype.destory = function () { };
    return BaseLayer;
}(eui.Component));
__reflect(BaseLayer.prototype, "BaseLayer");
//# sourceMappingURL=BaseLayer.js.map