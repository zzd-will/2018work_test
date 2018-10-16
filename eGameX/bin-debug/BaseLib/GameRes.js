// TypeScript file
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
//另外一种加载资源的方式，主要用自定义解析器自动处理资源
var GameRes;
(function (GameRes) {
    var loaded = {};
    function preInit() {
        RES.processor.map("zip", {
            onLoadStart: function (host, resource) {
                return host.load(resource, RES.processor.BinaryProcessor).then(function (config_data) {
                    var zip = new JSZip();
                    zip.loadAsync(config_data, {
                        checkCRC32: true
                    }).then(function (e) {
                        var files = e.files;
                        for (var key in files) {
                            // RES.config.addSubkey(key, resource.name);
                            host.resourceConfig.addSubkey(key, resource.name);
                            // egret.log(key);
                        }
                    }, function (e) {
                        var i = e.message;
                        e && e.stack && (i += e.stack);
                        egret.error(egret.getTimer() + "zzp文件解析出错！长度：" + i);
                    });
                    return zip;
                });
            },
            onRemoveStart: function (host, resource) {
                return Promise.resolve();
            },
            getData: function (host, resource, key, subkey) {
                var a = host.get(resource);
                var result;
                return new Promise(function (resole, rejcet) {
                    a.file(subkey).async("string").then(function (data) {
                        if (subkey.indexOf(".json") >= 0) {
                            result = JSON.parse(data);
                            resole(result);
                        }
                        else if (subkey.indexOf(".tmx") >= 0) {
                            result = egret.XML.parse(data);
                            resole(result);
                            resole(result);
                        }
                        else {
                            result = "parse data failed!";
                            rejcet(result);
                        }
                    });
                });
            }
        });
    }
    GameRes.preInit = preInit;
    function getRes(key) {
        return new Promise(function (resole, rejcet) {
            if (RES.hasRes(key)) {
                RES.getRes(key).then(function (rs, rej) {
                    resole(rs);
                });
            }
            else {
                rejcet("getRes not have this key: " + key);
            }
        });
    }
    GameRes.getRes = getRes;
    function getResAsync(key) {
        if (RES.hasRes(key)) {
            return RES.getResAsync(key);
        }
        else {
            egret.log("getResAsync not have this key: ", key);
            return false;
        }
    }
    GameRes.getResAsync = getResAsync;
    function init() {
        var JsonObjs, objName, ojbNames, needIndex, needName, needObj, optionRes, s, l, c;
        ojbNames = [];
        JsonObjs = RES.getRes("preload_json");
        egret.log("rrrrrrrrrrrrrrr", JsonObjs);
        for (objName in JsonObjs) {
            ojbNames.push(objName);
            egret.log("nnnn", objName);
        }
        needIndex = 0;
        if (!(needIndex < ojbNames.length))
            return false;
        needName = ojbNames[needIndex];
        needObj = JsonObjs[needName];
        null == needObj.files && (needObj.files = []);
        optionRes = void 0;
        if (null != needObj.option) {
            for (s = needObj.option.length, l = 0; s > l; l++) {
                optionRes = needObj.option[l],
                    RES.hasRes(optionRes) && needObj.files.push(optionRes);
            }
        }
        optionRes = needObj.replaceable;
        if (null == needObj.replaceable) {
        }
        else if (RES.hasRes(optionRes)) {
            needObj.files.push(optionRes);
        }
        RES.createGroup(needName, needObj.files);
    }
    GameRes.init = init;
    function load(name, reporter) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                if (!RES.isGroupLoaded(name)) {
                    i = RES.loadGroup(name, 0, reporter);
                    if ("config" == name) {
                        (loaded[name] = i);
                    }
                }
                return [2 /*return*/];
            });
        });
    }
    GameRes.load = load;
})(GameRes || (GameRes = {}));
//# sourceMappingURL=GameRes.js.map