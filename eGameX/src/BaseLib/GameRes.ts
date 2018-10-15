// TypeScript file

//另外一种加载资源的方式，主要用自定义解析器自动处理资源

namespace GameRes {

    var loaded = {};
    export function preInit() {
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
                        e && e.stack && (i += e.stack)
                        egret.error(egret.getTimer() + "zzp文件解析出错！长度：" + i);

                    })
                    return zip;
                })

            },
            onRemoveStart: function (host: RES.ProcessHost, resource: RES.ResourceInfo) {
                return Promise.resolve()
            },
            getData: async function (host: RES.ProcessHost, resource: RES.ResourceInfo, key: string, subkey: string) {
                var a = host.get(resource);
                var result;
                await a.file(subkey).async("string").then(function (data) {
                    if (subkey.indexOf(".json") >= 0) {
                        result = JSON.parse(data)
                        // egret.log("result", result);

                    } else if (subkey.indexOf(".tmx") >= 0) {
                        result = egret.XML.parse(data)

                    } else {
                        result = "parse data failed!";
                    }


                })
                return result;


            }
        });

    }
    export function getRes(key: string) {
        if (RES.hasRes(key)) {
            return RES.getRes(key);

        } else {
            egret.log("getRes not have this key: ", key);
            return false;
        }

    }
    export function getResAsync(key: string) {
        if (RES.hasRes(key)) {
            return RES.getResAsync(key);

        } else {
            egret.log("getResAsync not have this key: ", key);
            return false;
        }

    }


    export function init() {
        var JsonObjs, objName, ojbNames, needIndex, needName, needObj, optionRes, s, l, c;
        ojbNames = [];
        JsonObjs = RES.getRes("preload_json");
        egret.log("rrrrrrrrrrrrrrr", JsonObjs);
        for (objName in JsonObjs) {
            ojbNames.push(objName);
            egret.log("nnnn", objName);
        }
        needIndex = 0;
        if (!(needIndex < ojbNames.length)) return false;
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

        } else if (RES.hasRes(optionRes)) {
            needObj.files.push(optionRes);
        }


        RES.createGroup(needName, needObj.files)

    }
    export async function load(name: string, reporter?: RES.PromiseTaskReporter) {
        var i;
        if (!RES.isGroupLoaded(name)) {
            i = RES.loadGroup(name, 0, reporter);
            if ("config" == name) {
                (loaded[name] = i)
            }
        }

    }



}