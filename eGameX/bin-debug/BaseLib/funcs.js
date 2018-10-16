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
//# sourceMappingURL=funcs.js.map