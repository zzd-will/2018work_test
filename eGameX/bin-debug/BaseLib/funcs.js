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