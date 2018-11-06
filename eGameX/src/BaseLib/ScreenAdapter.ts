

class ScreenAdapter implements egret.sys.IScreenAdapter {

    constructor() {

    }

    public calculateStageSize(scaleMode: string, screenWidth: number, screenHeight: number,
        contentWidth: number, contentHeight: number): egret.sys.StageDisplaySize {

        var r = screenWidth,
        o = screenHeight,
        s = contentWidth,
        l = contentHeight,
        c = screenWidth / s || 0,
        u = screenHeight / l || 0;

        switch (scaleMode) {
        case egret.StageScaleMode.EXACT_FIT:
            break;
        case egret.StageScaleMode.FIXED_HEIGHT:
            s = Math.round(screenWidth / u);
            break;
        case egret.StageScaleMode.FIXED_WIDTH:
            l = Math.round(screenHeight / c);
            break;
        case egret.StageScaleMode.NO_BORDER:
            c > u ? o = Math.round(l * c) : r = Math.round(s * u);
            break;
        case egret.StageScaleMode.SHOW_ALL:
            c > u ? r = Math.round(s * u) : o = Math.round(l * c);
            break;
        case egret.StageScaleMode.FIXED_NARROW:
            c > u ? s = Math.round(screenWidth / u) : l = Math.round(screenHeight / c);
            break;
        case egret.StageScaleMode.FIXED_WIDE:
            c > u ? l = Math.round(screenHeight / c) : s = Math.round(screenWidth / u);
            break;
        case "custom":
            if (egret.Capabilities.isMobile) c > u ? s = Math.round(screenWidth / u) : l = Math.round(screenHeight / c);
            else {
                var h = 1024,
                d = 880;
                r = screenWidth > h ? h: screenWidth,
                o = screenHeight > d ? d: screenHeight;
                var p = r / s || 0,
                g = o / l || 0;
                p > g ? s = Math.round(r / g) : l = Math.round(o / p)
            }
            break;
        default:
            s = screenWidth,
            l = screenHeight
        }

        s % 2 != 0 && (s += 1);
        l % 2 != 0 && (l += 1);
        r % 2 != 0 && (r += 1);
        o % 2 != 0 && (o += 1);

        var obj= {
            stageWidth: s,
            stageHeight: l,
            displayWidth: r,
            displayHeight: o
        }

        return obj;
    }

}