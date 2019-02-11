

namespace Game {

    export var TOKEN = "";
    export var FONT_FAMILY = "微软雅黑";
    export var DEBUG = true;
    export var PAY_ENABLED = false;
    export var SHARE_ENABLED = true;
    export var CHANNEL = 0;
    export var TEST_TOKEN;
    export var TEST_SERVER;
    export var SERVER_ADDR;


    export async function initConfigFromFile(filename: string) {

        var e = "resource/config_vutimes.json";
        RES.getResByUrl(e, function (e) {
            initConfig(e);
        }, this, RES.ResourceItem.TYPE_JSON)

    }

    function initConfig(config) {
        DEBUG = config.DEBUG;
        CHANNEL = config.CHANNEL;

        PAY_ENABLED = config.PAY_ENABLED;
        SHARE_ENABLED = config.SHARE_ENABLED;
        TEST_TOKEN = config.TEST_TOKEN;
        TEST_SERVER = config.TEST_SERVER;
        null == PAY_ENABLED && (PAY_ENABLED = true);
        DEBUG && (SERVER_ADDR = TEST_SERVER);
    }

    export function removeFromParent() {
        if (null != this.parent) {
            this.parent.removeChild(this);
        }
    }

    export function getStage() {
        return egret.MainContext.instance.stage
    }

    export function getStageWidth() {
        return egret.MainContext.instance.stage.stageWidth
    }

    export function getStageHeight() {
        return egret.MainContext.instance.stage.stageHeight
    }
    export function createMask(alpha?: number) {
        null == alpha && (alpha = .6);
        var mask_sprite = new egret.Sprite;
        mask_sprite.graphics.beginFill(0, alpha);
        mask_sprite.graphics.drawRect(0, 0, getStageWidth(), getStageHeight());
        mask_sprite.graphics.endFill();
        mask_sprite.touchEnabled = true;
        mask_sprite.touchChildren = false;
        return mask_sprite;
    }

    export function getChildByName(e: eui.Group, name) {
        for (var i = 0; i < e.numElements; i++) {
            var child = e.getElementAt(i);
            if (child.name == name)
                return child;
        }
        return null
    }
    export function hasParent(e: egret.DisplayObject) {
        return null != e.parent;
    }
    export function removeAllChildren(e) {
        for (; e.numChildren > 0;) e.removeChildAt(0)
    }
    export function depthSortChildren(e) {
        for (var t = e.numChildren, i = [], n = 0; t > n; n++) i.push(e.getChildAt(n));
        for (i.sort(function (e, t) {
            return e.y != t.y ? e.y - t.y : e.x - t.x
        }), n = 0; t > n; n++) {
            var s = i[n];
            e.getChildAt(n) != s && e.setChildIndex(s, n)
        }
    }
}


namespace Game{
    export function start(){
        
    }
}