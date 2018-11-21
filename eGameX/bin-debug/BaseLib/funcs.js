/**
 *
 * 根据规则依次匹配参数e中符合的所有出现的字符串。{1}{2}{3} => 20 30 40
*/
function StringWithFormat(e) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
    return e.replace(/{(\d+)}/g, function (e, n) {
        return t[n - 1];
    });
}
function NumberFormat(e, t) {
    return (Array(t).join("0") + e).slice(-t);
}
function Clamp(e, t, n) {
    return void 0 === e && (e = 0),
        void 0 === t && (t = 0),
        void 0 === n && (n = 0),
        t > e ? t : e > n ? n : e;
}
function FormatYYYYMMDDHHMM(e, t) {
    var n = new Date(1e3 * e);
    null == t && (t = !0);
    var i = n.getFullYear() + "-" + NumberFormat(n.getMonth() + 1, 2) + "-" + NumberFormat(n.getDate(), 2);
    return t && (i += " " + NumberFormat(n.getHours(), 2) + ":" + NumberFormat(n.getMinutes(), 2)),
        i;
}
function FormatDDHH(e) {
    // return e > 86400 ? lang.StringWithFormat("{1}day{2}hours", Math.floor(e / 86400), Math.floor(e % 86400 / 3600)) : e > 3600 ? lang.StringWithFormat("{1}hours", Math.floor(e / 3600)) + lang.StringWithFormat("{1}minut", Math.floor(e % 3600 / 60)) : lang.StringWithFormat("{1}minut", Math.floor(e / 60))
}
function FormatTimeByRelativeDate(e, t) {
    var n = new Date, i = new Date(1e3 * e), a = "";
    i.getDay() != n.getDay() && (a = i.getFullYear() + "-" + NumberFormat(i.getMonth() + 1, 2) + "-" + NumberFormat(i.getDate(), 2) + " ");
    var r = NumberFormat(i.getHours(), 2) + ":" + NumberFormat(i.getMinutes(), 2);
    return t && (r += ":" + NumberFormat(i.getSeconds(), 2)),
        a + r;
}
function FormatToday() {
    // var e = new Date((new Date).getTime() + Game.deviation * Game.Second);
    // return Number("" + e.getFullYear() + NumberFormat(e.getMonth() + 1, 2) + NumberFormat(e.getDate(), 2) + NumberFormat(e.getHours(), 2) + NumberFormat(e.getMinutes(), 2))
}
function LocalDate() {
    // return new Date((new Date).getTime() + Game.deviation * Game.Second)
}
var MAX_DIR = 64, HALF_DIR = MAX_DIR / 2, QUARTER_DIR = MAX_DIR / 4, EIGHTH_DIR = MAX_DIR / 8;
var g_nSin = [1024, 1019, 1004, 979, 946, 903, 851, 791, 724, 649, 568, 482, 391, 297, 199, 100, 0, -100, -199, -297, -391, -482, -568, -649, -724, -791, -851, -903, -946, -979, -1004, -1019, -1024, -1019, -1004, -979, -946, -903, -851, -791, -724, -649, -568, -482, -391, -297, -199, -100, 0, 100, 199, 297, 391, 482, 568, 649, 724, 791, 851, 903, 946, 979, 1004, 1019], g_nCos = [0, -100, -199, -297, -391, -482, -568, -649, -724, -791, -851, -903, -946, -979, -1004, -1019, -1024, -1019, -1004, -979, -946, -903, -851, -791, -724, -649, -568, -482, -391, -297, -199, -100, 0, 100, 199, 297, 391, 482, 568, 649, 724, 791, 851, 903, 946, 979, 1004, 1019, 1024, 1019, 1004, 979, 946, 903, 851, 791, 724, 649, 568, 482, 391, 297, 199, 100], g_InternalDirSinCosCodeBuffer = [139, 68, 36, 8, 133, 192, 124, 22, 139, 76, 36, 12, 59, 193, 125, 14, 193, 224, 6, 153, 247, 249, 139, 76, 36, 4, 139, 4, 129, 195, 131, 200, 255, 195];
function g_GetDirIndex(e, t) {
    var n = t.subtract(e);
    (n.x % 1 != 0 || n.y % 1 != 0) && egret.error("g_GetDirIndex not int");
    var i = 0, a = Math.sqrt(n.x * n.x + n.y * n.y);
    if (0 == a)
        return egret.error("zero distance"),
            -1;
    for (var r = ~~((n.y << 10) / a), o = 0; HALF_DIR > o && !(r > g_nSin[o]); o++)
        i = o;
    if (g_nSin[i] != r) {
        var s = g_nSin[i] - r, l = r - g_nSin[i + 1];
        s > l && i++;
    }
    return n.x >= 0 && i > 0 && (i = MAX_DIR - i),
        i;
}
function g_InternalDirSinCos(e, t, n) {
    if (0 > t || t >= n)
        return -1;
    var i = (t << 6) / n;
    return e[i];
}
function g_DirCos(e, t) {
    return g_InternalDirSinCos(g_nCos, e, t);
}
function g_DirSin(e, t) {
    return g_InternalDirSinCos(g_nSin, e, t);
}
function g_Dir64To8(e) {
    return e + 4 >> 3 & 7;
}
function g_WithInRange(e, t, n) {
    var i = e.subtract(t);
    return i.x * i.x + i.y * i.y <= n * n;
}
function g_Move(e, t) {
    var n = ~~(g_DirCos(e, MAX_DIR) * t), i = ~~(g_DirSin(e, MAX_DIR) * t);
    return egret.Point.create(n >> 10, i >> 10);
}
function tweenDamage(e) {
    return e.scaleX = 0,
        e.scaleY = 0,
        e.x = e.x,
        e.y = e.y - 50,
        e.alpha = 1,
        egret.Tween.get(e).to({
            scaleX: 1.5,
            scaleY: 1.5
        }, 50).to({
            scaleX: 1,
            scaleY: 1
        }, 100).wait(140).to({
            x: e.x,
            y: e.y - 120,
            scaleX: 1,
            scaleY: 1,
            alpha: .4
        }, 800, egret.Ease.backOut).call(Game.removeFromParent, e);
}
function tweenTalentSkill(e) {
    return e.scaleX = 0,
        e.scaleY = 0,
        e.x = e.x + 100,
        e.y = e.y + 100,
        e.alpha = 1,
        egret.Tween.get(e).to({
            scaleX: 1.8,
            scaleY: 1.8
        }, 100).wait(200).to({
            x: e.x - 150,
            y: e.y - 150,
            scaleX: .7,
            scaleY: .7
        }, 100).wait(500).to({
            alpha: .1
        }, 1200).call(Game.removeFromParent, e);
}
function tweenBleedDamage(e) {
    return e.scaleX = 0,
        e.scaleY = 0,
        e.x = e.x,
        e.y = e.y - 50,
        e.alpha = 1,
        egret.Tween.get(e).to({
            scaleX: 1,
            scaleY: 1
        }, 100).wait(140).to({
            x: e.x,
            y: e.y - 120,
            scaleX: 1,
            scaleY: 1,
            alpha: .4
        }, 800, egret.Ease.backOut).call(Game.removeFromParent, e);
}
function int(e) {
    return ~~e;
}
//tiled map 
var GAMEMAP_RATIOY = 64;
function logicPos2DisplayPos(e) {
    return new egret.Point(e.x, int(e.y / GAMEMAP_RATIOY));
}
function tweenSongjinKillStrike(e) {
    return e.scaleX = 0,
        e.scaleY = 0,
        e.x = e.x,
        e.y = e.y + 5,
        e.alpha = 1,
        egret.Tween.get(e).to({
            scaleX: .5,
            scaleY: .5
        }, 50).to({
            scaleX: 1,
            scaleY: 1
        }, 50).to({
            scaleX: 1.5,
            scaleY: 1.5
        }, 50).wait(200).to({
            x: e.x,
            y: e.y - 120,
            alpha: 1
        }, 800, egret.Ease.backOut).call(Game.removeFromParent, e);
}
function tweenHurtStrike(e) {
    return e.scaleX = 0,
        e.scaleY = 0,
        e.x = e.x,
        e.y = e.y + 5,
        e.alpha = 1,
        egret.Tween.get(e).to({
            scaleX: 1.5,
            scaleY: 1.5
        }, 50).to({
            scaleX: 1,
            scaleY: 1
        }, 100).wait(140).to({
            x: e.x,
            y: e.y + 100,
            alpha: .4
        }, 800, egret.Ease.backOut).call(Game.removeFromParent, e);
}
function tweenHurt(e) {
    return e.scaleX = 0,
        e.scaleY = 0,
        e.x = e.x,
        e.y = e.y - 50,
        e.alpha = 1,
        egret.Tween.get(e).to({
            scaleX: 1.5,
            scaleY: 1.5
        }, 50).to({
            scaleX: 1,
            scaleY: 1
        }, 100).wait(140).to({
            x: e.x,
            y: e.y - 140,
            alpha: .4
        }, 800, egret.Ease.backOut).call(Game.removeFromParent, e);
}
function tweenBleedHurt(e) {
    return e.scaleX = 0,
        e.scaleY = 0,
        e.x = e.x,
        e.y = e.y - 50,
        e.alpha = 1,
        egret.Tween.get(e).to({
            scaleX: 1,
            scaleY: 1
        }, 100).wait(140).to({
            x: e.x,
            y: e.y + 100,
            alpha: .4
        }, 800, egret.Ease.backOut).call(Game.removeFromParent, e);
}
function tweenDamageStrike(e) {
    return e.scaleX = 0,
        e.scaleY = 0,
        e.x = e.x,
        e.y = e.y - 50,
        e.alpha = 1,
        egret.Tween.get(e).to({
            scaleX: 1.5,
            scaleY: 1.5
        }, 50).to({
            scaleX: 1,
            scaleY: 1
        }, 100).wait(140).to({
            x: e.x,
            y: e.y - 120,
            alpha: .4
        }, 800, egret.Ease.backOut).call(Game.removeFromParent, e);
}
//# sourceMappingURL=funcs.js.map