class LayerManager {


    private static m_inst: LayerManager = null;
    public static get inst(): LayerManager {
        if (this.m_inst == null) {
            this.m_inst = new LayerManager();
            return this.m_inst;
        }
        return this.m_inst;
    }


    public m_layerMap;
    public m_UIMap;
    public m_layerEffectMap;
    public m_root: eui.UILayer;
    public static EUI_BTM_LAYER = "bottom";
    public static EUI_MID_LAYER = "middle";
    public static EUI_TOP_LAYER = "top";
    public static EUI_MSG_LAYER = "message";
    //DisplayObjectContainer DOC
    public static DOC_MAP_LAYER = "mapLayer"
    public static DOC_MAPMSG_LAYER = "mapMessageLayer"
    public static EUI_UI_LAYER = "uiLayer"
    public static EUI_LODING_LAYER = "loadingLayer"
    public static EUI_ANNOUNCE_LAYER = "announceLayer"



    private static LAYER_LIST = [LayerManager.EUI_BTM_LAYER, LayerManager.EUI_MID_LAYER,
    LayerManager.EUI_TOP_LAYER, LayerManager.EUI_MSG_LAYER, LayerManager.DOC_MAP_LAYER,
    LayerManager.DOC_MAPMSG_LAYER]

    constructor() {
        this.m_layerMap = {};
        this.m_UIMap = {};
        this.m_layerEffectMap = {};
    }

    public init(root: eui.UILayer) {

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
    }
    public initOneByOne(root: egret.DisplayObjectContainer) {
        var mapLayer = new egret.DisplayObjectContainer,
            mapMessageLayer = new egret.DisplayObjectContainer,
            messageLayer = new eui.UILayer,
            uiLayer = new eui.UILayer,
            loadingLayer = new eui.UILayer,
            announceLayer = new eui.UILayer

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
            announceLayer.bottom = 0
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

    }
    public getRoot() {
        return this.m_root;
    }
    public getLayer(name: string) {
        return this.m_layerMap[name];
    };
    public isShow(ui_name: string) { return ui_name in this.m_UIMap }

    public getUIList() {
        var e = [];
        for (var t in this.m_UIMap) {
            var i = this.m_UIMap[t];
            e.push(i)
        }
        return e
    }
    public showUI(ui_name: string, data?: any) {
        if (!this.m_UIMap[ui_name]) {
            var cls = egret.getDefinitionByName(ui_name);
            if (null == cls) console.warn("[" + ui_name + "] Class Not Defined....");
            else {
                var UI = new cls;
                this.m_UIMap[ui_name] = UI;
                if (UI.mutex) {
                    var s = [];
                    for (var a in this.m_UIMap) {
                        var r = this.m_UIMap[a];
                        r && r.mutex && a != ui_name && s.push(a)
                    }
                    for (var o = 0, h = s; o < h.length; o++) {
                        var b = h[o];
                        this.hideUI(b)
                    }
                }
                var layer = this.m_layerMap[UI.layerID];
                if (UI.modal) {
                    var d = Game.createMask(UI.modalAlpha);
                    layer.addChild(d);
                    UI.__modal__mask = d
                }
                layer.addChild(UI);
                this.playShowEffect(UI);
                UI.setData(data);
                Game.dispatch(Game.EVENT.SHOW_LAYER, ui_name);
                console.log("[ShowLayer] >>> ", ui_name)
            }
        }
    }
    public hideUI(e) {
        var t = this.m_UIMap[e];
        delete this.m_UIMap[e],
            t && (this.playHideEffect(t), t.destory(), Game.dispatch(Game.EVENT.HIDE_LAYER, e), console.log("[HideLayer] <<< ", e))
    }

    public playShowEffect(target) {
        egret.Tween.removeTweens(target), target.__modal__mask && egret.Tween.removeTweens(target.__modal__mask);
        var width = Game.getStageWidth(),
            height = Game.getStageHeight();
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
                }, 600, egret.Ease.backOut)
        }
    }

    public playHideEffect(target) {
        egret.Tween.removeTweens(target);
        target.__modal__mask && egret.Tween.removeTweens(target.__modal__mask);
        var width = Game.getStageWidth(),
            height = Game.getStageHeight();
        switch (target.effectType) {
            case 1:
                egret.Tween.get(target).to({
                    alpha: 0,
                    scaleX: .5,
                    scaleY: .5
                }, 200).call(function () {
                    Game.removeFromParent.apply(target)
                }, this), this.playHideModalEffect(target);
                break;
            case 2:
                egret.Tween.get(target).to({
                    y: target.y + height
                }, 400, egret.Ease.backOut).call(function () {
                    Game.removeFromParent.apply(target)
                }, this), this.playHideModalEffect(target);
                break;
            case 3:
                egret.Tween.get(target).to({
                    y: target.y - height
                }, 400, egret.Ease.backOut).call(function () {
                    Game.removeFromParent.apply(target)
                }, this), this.playHideModalEffect(target);
                break;
            case 4:
                egret.Tween.get(target).to({
                    x: target.x + width
                }, 400, egret.Ease.backOut).call(function () {
                    Game.removeFromParent.apply(target)
                }, this), this.playHideModalEffect(target);
                break;
            case 5:
                egret.Tween.get(target).to({
                    x: target.x - width
                }, 400, egret.Ease.backOut).call(function () {
                    Game.removeFromParent.apply(target)
                }, this), this.playHideModalEffect(target);
                break;
            default:
                Game.removeFromParent.apply(target), Game.removeFromParent.apply(target.__modal__mask)
        }
    }

    public playHideModalEffect(target) {
        target.modalMask && egret.Tween.get(target.modalMask).to({
            alpha: .2
        }, 200).call(function () {
            Game.removeFromParent.apply(target.modalMask)
        }, this)
    }


}