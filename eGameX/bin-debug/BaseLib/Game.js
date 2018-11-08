var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Game;
(function (Game) {
    Game.TOKEN = "";
    Game.FONT_FAMILY = "微软雅黑";
    Game.DEBUG = true;
    Game.PAY_ENABLED = false;
    Game.SHARE_ENABLED = true;
    Game.CHANNEL = 0;
    function initConfigFromFile(filename) {
        return __awaiter(this, void 0, void 0, function () {
            var e;
            return __generator(this, function (_a) {
                e = "resource/config_vutimes.json";
                RES.getResByUrl(e, function (e) {
                    initConfig(e);
                }, this, RES.ResourceItem.TYPE_JSON);
                return [2 /*return*/];
            });
        });
    }
    Game.initConfigFromFile = initConfigFromFile;
    function initConfig(config) {
        Game.DEBUG = config.DEBUG;
        Game.CHANNEL = config.CHANNEL;
        Game.PAY_ENABLED = config.PAY_ENABLED;
        Game.SHARE_ENABLED = config.SHARE_ENABLED;
        Game.TEST_TOKEN = config.TEST_TOKEN;
        Game.TEST_SERVER = config.TEST_SERVER;
        null == Game.PAY_ENABLED && (Game.PAY_ENABLED = true);
        Game.DEBUG && (Game.SERVER_ADDR = Game.TEST_SERVER);
    }
    function removeFromParent() {
        if (null != this.parent) {
            this.parent.removeChild(this);
        }
    }
    Game.removeFromParent = removeFromParent;
    function getStage() {
        return egret.MainContext.instance.stage;
    }
    Game.getStage = getStage;
    function getStageWidth() {
        return egret.MainContext.instance.stage.stageWidth;
    }
    Game.getStageWidth = getStageWidth;
    function getStageHeight() {
        return egret.MainContext.instance.stage.stageHeight;
    }
    Game.getStageHeight = getStageHeight;
    function createMask(alpha) {
        null == alpha && (alpha = .6);
        var mask_sprite = new egret.Sprite;
        mask_sprite.graphics.beginFill(0, alpha);
        mask_sprite.graphics.drawRect(0, 0, getStageWidth(), getStageHeight());
        mask_sprite.graphics.endFill();
        mask_sprite.touchEnabled = true;
        mask_sprite.touchChildren = false;
        return mask_sprite;
    }
    Game.createMask = createMask;
    function getChildByName(e, name) {
        for (var i = 0; i < e.numElements; i++) {
            var child = e.getElementAt(i);
            if (child.name == name)
                return child;
        }
        return null;
    }
    Game.getChildByName = getChildByName;
    function hasParent(e) {
        return null != e.parent;
    }
    Game.hasParent = hasParent;
    function removeAllChildren(e) {
        for (; e.numChildren > 0;)
            e.removeChildAt(0);
    }
    Game.removeAllChildren = removeAllChildren;
    function depthSortChildren(e) {
        for (var t = e.numChildren, i = [], n = 0; t > n; n++)
            i.push(e.getChildAt(n));
        for (i.sort(function (e, t) {
            return e.y != t.y ? e.y - t.y : e.x - t.x;
        }), n = 0; t > n; n++) {
            var s = i[n];
            e.getChildAt(n) != s && e.setChildIndex(s, n);
        }
    }
    Game.depthSortChildren = depthSortChildren;
})(Game || (Game = {}));
//# sourceMappingURL=Game.js.map