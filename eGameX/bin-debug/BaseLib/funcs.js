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
//# sourceMappingURL=funcs.js.map