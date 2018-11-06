var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ScreenAdapter = (function () {
    function ScreenAdapter() {
    }
    ScreenAdapter.prototype.calculateStageSize = function (scaleMode, screenWidth, screenHeight, contentWidth, contentHeight) {
        var displayWidth = screenWidth;
        var displayHeight = screenHeight;
        var stageWidth = contentWidth;
        var stageHeight = contentHeight;
        var scaleX = (screenWidth / stageWidth) || 0;
        var scaleY = (screenHeight / stageHeight) || 0;
        switch (scaleMode) {
            case egret.StageScaleMode.EXACT_FIT:
                break;
            case egret.StageScaleMode.FIXED_HEIGHT:
                stageWidth = Math.round(screenWidth / scaleY);
                break;
            case egret.StageScaleMode.FIXED_WIDTH:
                stageHeight = Math.round(screenHeight / scaleX);
                break;
            case egret.StageScaleMode.NO_BORDER:
                if (scaleX > scaleY) {
                    displayHeight = Math.round(stageHeight * scaleX);
                }
                else {
                    displayWidth = Math.round(stageWidth * scaleY);
                }
                break;
            case egret.StageScaleMode.SHOW_ALL:
                if (scaleX > scaleY) {
                    displayWidth = Math.round(stageWidth * scaleY);
                }
                else {
                    displayHeight = Math.round(stageHeight * scaleX);
                }
                break;
            case egret.StageScaleMode.FIXED_NARROW:
                if (scaleX > scaleY) {
                    stageWidth = Math.round(screenWidth / scaleY);
                }
                else {
                    stageHeight = Math.round(screenHeight / scaleX);
                }
                break;
            case egret.StageScaleMode.FIXED_WIDE:
                if (scaleX > scaleY) {
                    stageHeight = Math.round(screenHeight / scaleX);
                }
                else {
                    stageWidth = Math.round(screenWidth / scaleY);
                }
                break;
            //自定义缩放模式
            case "custom":
                if (egret.Capabilities.isMobile) {
                    if (scaleX > scaleY) {
                        stageWidth = Math.round(screenWidth / scaleY);
                    }
                    else {
                        Math.round(screenHeight / scaleX);
                    }
                }
                else {
                    var h = 1024, d = 880;
                    displayWidth = screenWidth > h ? h : screenWidth,
                        displayHeight = screenHeight > d ? d : screenHeight;
                    var p = displayWidth / stageWidth || 0, g = displayHeight / stageHeight || 0;
                    p > g ? stageWidth = Math.round(displayWidth / g) : stageHeight = Math.round(displayHeight / p);
                }
                break;
            default:
                stageWidth = screenWidth;
                stageHeight = screenHeight;
                break;
        }
        if (egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME) {
            //宽高不是2的整数倍会导致图片绘制出现问题
            if (stageWidth % 2 != 0) {
                stageWidth += 1;
            }
            if (stageHeight % 2 != 0) {
                stageHeight += 1;
            }
            if (displayWidth % 2 != 0) {
                displayWidth += 1;
            }
            if (displayHeight % 2 != 0) {
                displayHeight += 1;
            }
        }
        return {
            stageWidth: stageWidth,
            stageHeight: stageHeight,
            displayWidth: displayWidth,
            displayHeight: displayHeight
        };
    };
    return ScreenAdapter;
}());
__reflect(ScreenAdapter.prototype, "ScreenAdapter", ["egret.sys.IScreenAdapter"]);
//# sourceMappingURL=ScreenAdapter.js.map