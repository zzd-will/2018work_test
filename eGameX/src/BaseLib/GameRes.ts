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
            getData: function (host: RES.ProcessHost, resource: RES.ResourceInfo, key: string, subkey: string) {
                var a = host.get(resource);
                var result;

                return new Promise(function (resole, rejcet) {

                    a.file(subkey).async("string").then(function (data) {
                        if (subkey.indexOf(".json") >= 0) {
                            result = JSON.parse(data)
                            resole(result);

                        } else if (subkey.indexOf(".tmx") >= 0) {
                            result = egret.XML.parse(data)
                            resole(result); 

                        } else {
                            result = "parse data failed!";
                            rejcet(result);
                        }
                    })
                })
            }
        });

    }
    export function getZipRes(key: string) {

        return new Promise(function (resole, rejcet) {
            if (RES.hasRes(key)) {
                RES.getRes(key).then(function (rs, rej) {
                    resole(rs)
                })
            } else {
                rejcet("getZipRes not have this key: " + key)
            }
        })
    }
    /**
     * 获取非zip里面的资源，这里是非异步获取
     * exp:
     * var rs = getRes("key")
     */
    export function getRes(key: string) {
            if (RES.hasRes(key)) {
               return  RES.getRes(key)
            } else {
               egret.log("getRes not have this key: " + key);
               return  undefined
            }
    }
    /**
     * 获取非zip里面的资源，这里是异步获取
     */
    export function getResAsync(key: string,callback?,thisObj?) {
        if (RES.hasRes(key)) {
          return  callback ?  RES.getResAsync(key,callback,thisObj): RES.getResAsync(key)
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