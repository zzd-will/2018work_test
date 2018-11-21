// // TypeScript file
// var MAX_DIR = 64,
// HALF_DIR = MAX_DIR / 2,
// QUARTER_DIR = MAX_DIR / 4,
// EIGHTH_DIR = MAX_DIR / 8;
// var g_nSin = [1024, 1019, 1004, 979, 946, 903, 851, 791, 724, 649, 568, 482, 391, 297, 199, 100, 0, -100, -199, -297, -391, -482, -568, -649, -724, -791, -851, -903, -946, -979, -1004, -1019, -1024, -1019, -1004, -979, -946, -903, -851, -791, -724, -649, -568, -482, -391, -297, -199, -100, 0, 100, 199, 297, 391, 482, 568, 649, 724, 791, 851, 903, 946, 979, 1004, 1019],
// g_nCos = [0, -100, -199, -297, -391, -482, -568, -649, -724, -791, -851, -903, -946, -979, -1004, -1019, -1024, -1019, -1004, -979, -946, -903, -851, -791, -724, -649, -568, -482, -391, -297, -199, -100, 0, 100, 199, 297, 391, 482, 568, 649, 724, 791, 851, 903, 946, 979, 1004, 1019, 1024, 1019, 1004, 979, 946, 903, 851, 791, 724, 649, 568, 482, 391, 297, 199, 100],
// g_InternalDirSinCosCodeBuffer = [139, 68, 36, 8, 133, 192, 124, 22, 139, 76, 36, 12, 59, 193, 125, 14, 193, 224, 6, 153, 247, 249, 139, 76, 36, 4, 139, 4, 129, 195, 131, 200, 255, 195]
// function StringWithFormat(e) {
//     for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
//     return e.replace(/{(\d+)}/g,
//     function(e, n) {
//         return t[n - 1]
//     })
// }
// function NumberFormat(e, t) {
//     return (Array(t).join("0") + e).slice( - t)
// }
// function tweenHurtStrike(e) {
//     return e.scaleX = 0,
//     e.scaleY = 0,
//     e.x = e.x,
//     e.y = e.y + 5,
//     e.alpha = 1,
//     egret.Tween.get(e).to({
//         scaleX: 1.5,
//         scaleY: 1.5
//     },
//     50).to({
//         scaleX: 1,
//         scaleY: 1
//     },
//     100).wait(140).to({
//         x: e.x,
//         y: e.y + 100,
//         alpha: .4
//     },
//     800, egret.Ease.backOut).call(Game.removeFromParent, e)
// }
// function tweenHurt(e) {
//     return e.scaleX = 0,
//     e.scaleY = 0,
//     e.x = e.x,
//     e.y = e.y - 50,
//     e.alpha = 1,
//     egret.Tween.get(e).to({
//         scaleX: 1.5,
//         scaleY: 1.5
//     },
//     50).to({
//         scaleX: 1,
//         scaleY: 1
//     },
//     100).wait(140).to({
//         x: e.x,
//         y: e.y - 140,
//         alpha: .4
//     },
//     800, egret.Ease.backOut).call(Game.removeFromParent, e)
// }
// function tweenBleedHurt(e) {
//     return e.scaleX = 0,
//     e.scaleY = 0,
//     e.x = e.x,
//     e.y = e.y - 50,
//     e.alpha = 1,
//     egret.Tween.get(e).to({
//         scaleX: 1,
//         scaleY: 1
//     },
//     100).wait(140).to({
//         x: e.x,
//         y: e.y + 100,
//         alpha: .4
//     },
//     800, egret.Ease.backOut).call(Game.removeFromParent, e)
// }
// function tweenDamageStrike(e) {
//     return e.scaleX = 0,
//     e.scaleY = 0,
//     e.x = e.x,
//     e.y = e.y - 50,
//     e.alpha = 1,
//     egret.Tween.get(e).to({
//         scaleX: 1.5,
//         scaleY: 1.5
//     },
//     50).to({
//         scaleX: 1,
//         scaleY: 1
//     },
//     100).wait(140).to({
//         x: e.x,
//         y: e.y - 120,
//         alpha: .4
//     },
//     800, egret.Ease.backOut).call(Game.removeFromParent, e)
// }
// function tweenDamage(e) {
//     return e.scaleX = 0,
//     e.scaleY = 0,
//     e.x = e.x,
//     e.y = e.y - 50,
//     e.alpha = 1,
//     egret.Tween.get(e).to({
//         scaleX: 1.5,
//         scaleY: 1.5
//     },
//     50).to({
//         scaleX: 1,
//         scaleY: 1
//     },
//     100).wait(140).to({
//         x: e.x,
//         y: e.y - 120,
//         scaleX: 1,
//         scaleY: 1,
//         alpha: .4
//     },
//     800, egret.Ease.backOut).call(Game.removeFromParent, e)
// }
// function tweenBleedDamage(e) {
//     return e.scaleX = 0,
//     e.scaleY = 0,
//     e.x = e.x,
//     e.y = e.y - 50,
//     e.alpha = 1,
//     egret.Tween.get(e).to({
//         scaleX: 1,
//         scaleY: 1
//     },
//     100).wait(140).to({
//         x: e.x,
//         y: e.y - 120,
//         scaleX: 1,
//         scaleY: 1,
//         alpha: .4
//     },
//     800, egret.Ease.backOut).call(Game.removeFromParent, e)
// }
// function tweenSongjinKillStrike(e) {
//     return e.scaleX = 0,
//     e.scaleY = 0,
//     e.x = e.x,
//     e.y = e.y + 5,
//     e.alpha = 1,
//     egret.Tween.get(e).to({
//         scaleX: .5,
//         scaleY: .5
//     },
//     50).to({
//         scaleX: 1,
//         scaleY: 1
//     },
//     50).to({
//         scaleX: 1.5,
//         scaleY: 1.5
//     },
//     50).wait(200).to({
//         x: e.x,
//         y: e.y - 120,
//         alpha: 1
//     },
//     800, egret.Ease.backOut).call(Game.removeFromParent, e)
// }
// function MakeDelayExecute(e, t, n) {
//     // var i = function() {
//     //     i.stop(),
//     //     i.timer = egret.setTimeout(function() {
//     //         e.call(t),
//     //         i.timer = null
//     //     },
//     //     t, n)
//     // };
//     // return i.stop = function() {
//     //     null != i.timer && (egret.clearTimeout(i.timer), i.timer = null)
//     // },
//     // i
// }
// function Clamp(e, t, n) {
//     return void 0 === e && (e = 0),
//     void 0 === t && (t = 0),
//     void 0 === n && (n = 0),
//     t > e ? t: e > n ? n: e
// }
// function FormatYYYYMMDDHHMM(e, t) {
//     var n = new Date(1e3 * e);
//     null == t && (t = !0);
//     var i = n.getFullYear() + "-" + NumberFormat(n.getMonth() + 1, 2) + "-" + NumberFormat(n.getDate(), 2);
//     return t && (i += " " + NumberFormat(n.getHours(), 2) + ":" + NumberFormat(n.getMinutes(), 2)),
//     i
// }
// function FormatDDHH(e) {
//     // return e > 86400 ? lang.StringWithFormat("{1}day{2}hours", Math.floor(e / 86400), Math.floor(e % 86400 / 3600)) : e > 3600 ? lang.StringWithFormat("{1}hours", Math.floor(e / 3600)) + lang.StringWithFormat("{1}minut", Math.floor(e % 3600 / 60)) : lang.StringWithFormat("{1}minut", Math.floor(e / 60))
// }
// function FormatTimeByRelativeDate(e, t) {
//     var n = new Date,
//     i = new Date(1e3 * e),
//     a = "";
//     i.getDay() != n.getDay() && (a = i.getFullYear() + "-" + NumberFormat(i.getMonth() + 1, 2) + "-" + NumberFormat(i.getDate(), 2) + " ");
//     var r = NumberFormat(i.getHours(), 2) + ":" + NumberFormat(i.getMinutes(), 2);
//     return t && (r += ":" + NumberFormat(i.getSeconds(), 2)),
//     a + r
// }
// function FormatToday() {
//     var e = new Date((new Date).getTime() + Game.deviation * Game.Second);
//     return Number("" + e.getFullYear() + NumberFormat(e.getMonth() + 1, 2) + NumberFormat(e.getDate(), 2) + NumberFormat(e.getHours(), 2) + NumberFormat(e.getMinutes(), 2))
// }
// function LocalDate() {
//     return new Date((new Date).getTime() + Game.deviation * Game.Second)
// }
// function updateDisplayList(e, t) {
//     if (this.$target) {
//         var n = this.$target,
//         i = this._paddingLeft,
//         a = this._paddingRight,
//         r = this._paddingTop,
//         o = this._paddingBottom;
//         if (this.indexInViewCalculated) this.indexInViewCalculated = !1;
//         else {
//             if (this.calculateRowAndColumn(e, t), 0 == this._rowCount || 0 == this._columnCount) return void n.setContentSize(i + a, r + o);
//             this.adjustForJustify(e, t),
//             this.getIndexInView()
//         }
//         if (this.$useVirtualLayout && (this.calculateRowAndColumn(e, t), this.adjustForJustify(e, t)), -1 == this.startIndex || -1 == this.endIndex) return void n.setContentSize(0, 0);
//         var s = this.endIndex;
//         n.setVirtualElementIndicesInView(this.startIndex, s);
//         for (var l, c, u, h, d, p = this._orientation == eui.TileOrientation.COLUMNS,
//         g = this.startIndex,
//         m = isNaN(this._horizontalGap) ? 0 : this._horizontalGap, f = isNaN(this._verticalGap) ? 0 : this._verticalGap, v = this._rowCount, y = this._columnCount, b = this._columnWidth, C = this._rowHeight, E = this.startIndex; s >= E; E++) if (l = this.$useVirtualLayout ? this.target.getVirtualElementAt(E) : this.target.getElementAt(E), egret.is(l, "eui.UIComponent") && l.$includeInLayout) {
//             switch (p ? (h = Math.ceil((g + 1) / v) - 1, d = Math.ceil((g + 1) % v) - 1, -1 == d && (d = v - 1)) : (h = Math.ceil((g + 1) % y) - 1, -1 == h && (h = y - 1), d = Math.ceil((g + 1) / y) - 1), this._horizontalAlign) {
//             case egret.HorizontalAlign.RIGHT:
//                 c = e - (h + 1) * (b + m) + m - a;
//                 break;
//             case egret.HorizontalAlign.CENTER:
//                 c = e / 2 - (y * b + (y - 1) * m) / 2 + h * (b + m);
//                 break;
//             case egret.HorizontalAlign.LEFT:
//                 c = h * (b + m) + i;
//                 break;
//             default:
//                 c = h * (b + m) + i
//             }
//             switch (this._verticalAlign) {
//             case egret.VerticalAlign.TOP:
//                 u = d * (C + f) + r;
//                 break;
//             case egret.VerticalAlign.BOTTOM:
//                 u = t - (d + 1) * (C + f) + f - o;
//                 break;
//             case egret.VerticalAlign.MIDDLE:
//                 u = t / 2 - (v * C + (v - 1) * f) / 2 + d * (C + f);
//                 break;
//             default:
//                 u = d * (C + f) + r
//             }
//             this.sizeAndPositionElement(l, c, u, b, C),
//             g++
//         }
//         var T = i + a,
//         S = r + o,
//         I = (b + m) * y - m,
//         A = (C + f) * v - f;
//         n.setContentSize(I + T, A + S)
//     }
// }
// function g_GetDirIndex(e, t) {
//     var n = t.subtract(e); (n.x % 1 != 0 || n.y % 1 != 0) && egret.error("g_GetDirIndex not int");
//     var i = 0,
//     a = Math.sqrt(n.x * n.x + n.y * n.y);
//     if (0 == a) return egret.error("zero distance"),
//     -1;
//     for (var r = ~~ ((n.y << 10) / a), o = 0; HALF_DIR > o && !(r > g_nSin[o]); o++) i = o;
//     if (g_nSin[i] != r) {
//         var s = g_nSin[i] - r,
//         l = r - g_nSin[i + 1];
//         s > l && i++
//     }
//     return n.x >= 0 && i > 0 && (i = MAX_DIR - i),
//     i
// }
// function g_InternalDirSinCos(e, t, n) {
//     if (0 > t || t >= n) return - 1;
//     var i = (t << 6) / n;
//     return e[i]
// }
// function g_DirCos(e, t) {
//     return g_InternalDirSinCos(g_nCos, e, t)
// }
// function g_DirSin(e, t) {
//     return g_InternalDirSinCos(g_nSin, e, t)
// }
// function g_Dir64To8(e) {
//     return e + 4 >> 3 & 7
// }
// function g_WithInRange(e, t, n) {
//     var i = e.subtract(t);
//     return i.x * i.x + i.y * i.y <= n * n
// }
// function g_Move(e, t) {
//     var n = ~~ (g_DirCos(e, MAX_DIR) * t),
//     i = ~~ (g_DirSin(e, MAX_DIR) * t);
//     return egret.Point.create(n >> 10, i >> 10)
// }
// function StatLog(e, t) {
// }
// function uuid() {
//     var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
//     n = [],
//     i = 16,
//     a = t.length;
//     for (e = 0; i > e; e++) n[e] = t[0 | Math.random() * a];
//     return n.join("")
// }
// function int(e) {
//     return~~e
// } 
//# sourceMappingURL=Global.js.map