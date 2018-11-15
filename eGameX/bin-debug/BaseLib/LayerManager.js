var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LayerManager = (function () {
    function LayerManager() {
        this.m_layerMap = {};
        this.m_UIMap = {};
        this.m_layerEffectMap = {};
    }
    Object.defineProperty(LayerManager, "inst", {
        get: function () {
            if (this.m_inst == null) {
                this.m_inst = new LayerManager();
                return this.m_inst;
            }
            return this.m_inst;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 单屏类游戏初始化
     */
    LayerManager.prototype.init = function (root) {
        this.m_root = root;
        for (var e = 0; e < LayerManager.LAYER_LIST.length; e++) {
            var n = new eui.UILayer;
            n.width = Game.getStageWidth();
            n.height = Game.getStageHeight();
            n.touchEnabled = false;
            n.touchChildren = true;
            root.addChild(n);
            var s = LayerManager.LAYER_LIST[e];
            this.m_layerMap[s] = n;
        }
    };
    /**
     * 大场景的初始化
     */
    LayerManager.prototype.init2 = function (root) {
        var mapLayer = new egret.DisplayObjectContainer, mapMessageLayer = new egret.DisplayObjectContainer, messageLayer = new eui.UILayer, uiLayer = new eui.UILayer, loadingLayer = new eui.UILayer, announceLayer = new eui.UILayer;
        uiLayer.touchEnabled = false,
            messageLayer.touchEnabled = false,
            messageLayer.touchChildren = false,
            messageLayer.left = 0,
            messageLayer.right = 0,
            messageLayer.top = 0,
            messageLayer.bottom = 0,
            loadingLayer.touchEnabled = false,
            announceLayer.touchEnabled = false,
            announceLayer.touchChildren = false,
            announceLayer.left = 0,
            announceLayer.right = 0,
            announceLayer.top = 0,
            announceLayer.bottom = 0;
        root.addChild(mapLayer);
        root.addChild(mapMessageLayer);
        root.addChild(uiLayer);
        root.addChild(loadingLayer);
        root.addChild(announceLayer);
        this.m_layerMap[LayerManager.DOC_MAP_LAYER] = mapLayer;
        this.m_layerMap[LayerManager.DOC_MAPMSG_LAYER] = mapMessageLayer;
        this.m_layerMap[LayerManager.EUI_UI_LAYER] = uiLayer;
        this.m_layerMap[LayerManager.EUI_LODING_LAYER] = loadingLayer;
        this.m_layerMap[LayerManager.EUI_ANNOUNCE_LAYER] = announceLayer;
    };
    LayerManager.prototype.getRoot = function () {
        return this.m_root;
    };
    LayerManager.prototype.getLayer = function (name) {
        return this.m_layerMap[name];
    };
    ;
    LayerManager.prototype.isShow = function (ui_name) { return ui_name in this.m_UIMap; };
    LayerManager.prototype.getUIList = function () {
        var UIlist = [];
        for (var name in this.m_UIMap) {
            var ui = this.m_UIMap[name];
            UIlist.push(ui);
        }
        return UIlist;
    };
    LayerManager.prototype.showUI = function (ui_name, data) {
        if (!this.m_UIMap[ui_name]) {
            var cls = egret.getDefinitionByName(ui_name);
            if (null == cls)
                console.warn("[" + ui_name + "] Class Not Defined....");
            else {
                var UI = new cls;
                this.m_UIMap[ui_name] = UI;
                if (UI.mutex) {
                    var s = [];
                    for (var a in this.m_UIMap) {
                        var r = this.m_UIMap[a];
                        r && r.mutex && a != ui_name && s.push(a);
                    }
                    for (var o = 0, h = s; o < h.length; o++) {
                        var b = h[o];
                        this.hideUI(b);
                    }
                }
                var layer = this.m_layerMap[UI.layerID];
                if (UI.modal) {
                    var mask_sprite = Game.createMask(UI.modalAlpha);
                    layer.addChild(mask_sprite);
                    UI.__modal__mask = mask_sprite;
                }
                layer.addChild(UI);
                this.playShowEffect(UI);
                UI.setData(data);
                Game.dispatch(Game.EVENT.SHOW_LAYER, ui_name);
                console.log("[ShowUI] >>> ", ui_name);
            }
        }
    };
    LayerManager.prototype.hideUI = function (e) {
        var t = this.m_UIMap[e];
        delete this.m_UIMap[e],
            t && (this.playHideEffect(t), t.destory(), Game.dispatch(Game.EVENT.HIDE_LAYER, e), console.log("[HideLayer] <<< ", e));
    };
    LayerManager.prototype.playShowEffect = function (target) {
        egret.Tween.removeTweens(target), target.__modal__mask && egret.Tween.removeTweens(target.__modal__mask);
        var width = Game.getStageWidth(), height = Game.getStageHeight();
        switch (target.effectType) {
            case 1:
                target.scaleX = .5, target.scaleY = .5, egret.Tween.get(target).to({
                    scaleX: 1,
                    scaleY: 1
                }, 400, egret.Ease.backOut), target.__modal__mask && (target.__modal__mask.alpha = .2, egret.Tween.get(target.__modal__mask).to({
                    alpha: 1
                }, 400, egret.Ease.backOut));
                break;
            case 2:
                target.y = target.y - height, egret.Tween.get(target).to({
                    y: target.y + height
                }, 600, egret.Ease.backOut);
                break;
            case 3:
                target.y = target.y + height, egret.Tween.get(target).to({
                    y: target.y - height
                }, 600, egret.Ease.backOut);
                break;
            case 4:
                target.x = target.x - width, egret.Tween.get(target).to({
                    x: target.x + width
                }, 600, egret.Ease.backOut);
                break;
            case 5:
                target.x = target.x + width, egret.Tween.get(target).to({
                    x: target.x - width
                }, 600, egret.Ease.backOut);
        }
    };
    LayerManager.prototype.playHideEffect = function (target) {
        egret.Tween.removeTweens(target);
        target.__modal__mask && egret.Tween.removeTweens(target.__modal__mask);
        var width = Game.getStageWidth(), height = Game.getStageHeight();
        switch (target.effectType) {
            case 1:
                egret.Tween.get(target).to({
                    alpha: 0,
                    scaleX: .5,
                    scaleY: .5
                }, 200).call(function () {
                    Game.removeFromParent.apply(target);
                }, this), this.playHideModalEffect(target);
                break;
            case 2:
                egret.Tween.get(target).to({
                    y: target.y + height
                }, 400, egret.Ease.backOut).call(function () {
                    Game.removeFromParent.apply(target);
                }, this), this.playHideModalEffect(target);
                break;
            case 3:
                egret.Tween.get(target).to({
                    y: target.y - height
                }, 400, egret.Ease.backOut).call(function () {
                    Game.removeFromParent.apply(target);
                }, this), this.playHideModalEffect(target);
                break;
            case 4:
                egret.Tween.get(target).to({
                    x: target.x + width
                }, 400, egret.Ease.backOut).call(function () {
                    Game.removeFromParent.apply(target);
                }, this), this.playHideModalEffect(target);
                break;
            case 5:
                egret.Tween.get(target).to({
                    x: target.x - width
                }, 400, egret.Ease.backOut).call(function () {
                    Game.removeFromParent.apply(target);
                }, this), this.playHideModalEffect(target);
                break;
            default:
                Game.removeFromParent.apply(target), Game.removeFromParent.apply(target.__modal__mask);
        }
    };
    LayerManager.prototype.playHideModalEffect = function (target) {
        target.modalMask && egret.Tween.get(target.modalMask).to({
            alpha: .2
        }, 200).call(function () {
            Game.removeFromParent.apply(target.modalMask);
        }, this);
    };
    LayerManager.m_inst = null;
    LayerManager.EUI_BTM_LAYER = "bottom";
    LayerManager.EUI_MID_LAYER = "middle";
    LayerManager.EUI_TOP_LAYER = "top";
    LayerManager.EUI_MSG_LAYER = "message";
    //DisplayObjectContainer DOC
    LayerManager.DOC_MAP_LAYER = "mapLayer";
    LayerManager.DOC_MAPMSG_LAYER = "mapMessageLayer";
    LayerManager.EUI_UI_LAYER = "uiLayer";
    LayerManager.EUI_LODING_LAYER = "loadingLayer";
    LayerManager.EUI_ANNOUNCE_LAYER = "announceLayer";
    LayerManager.LAYER_LIST = [LayerManager.EUI_BTM_LAYER, LayerManager.EUI_MID_LAYER,
        LayerManager.EUI_TOP_LAYER, LayerManager.EUI_MSG_LAYER, LayerManager.DOC_MAP_LAYER,
        LayerManager.DOC_MAPMSG_LAYER];
    return LayerManager;
}());
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map