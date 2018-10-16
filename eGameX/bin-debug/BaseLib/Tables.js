var tables;
(function (tables) {
    /**
     * 所有策划配置的表转化为json后在这里加工
     *
     *
     * sample：
     *              a = mapId,
                    r = table.maps[a],
                    null == r.preload ? return : (o = "map_" + a, RES.isGroupLoaded(o) ? [3, 4] : (s = r.preload.length, [4, RES.loadGroup(o, 0, Scene.loadingView)]))
     */
    function load() {
        RES.getRes("config/maps.json").then(function (rs) {
            var length = rs.length;
            for (var C = 0; length > C; C++) {
                var k = rs[C];
                if (tables.maps[k.id] = k, k.preload) {
                    for (var P = [], G = k.preload.length, w = 0; G > w; w++)
                        P.push(k.preload[w]);
                    P.length > 0 && RES.createGroup("map_" + k.id, P);
                }
            }
            //野外地图数据按照level为下标存入wilds里面
            for (var R in tables.maps)
                0 != tables.maps[R].wild && (null == tables.wilds[tables.maps[R].level] && (tables.wilds[tables.maps[R].level] = []), tables.wilds[tables.maps[R].level].push({
                    Id: Number(R),
                    map: tables.maps[R]
                }));
            // for(var i in wilds){
            //     egret.log(wilds[i]);
            // }
        });
        tables.blendMode[0] = egret.BlendMode.ADD;
    }
    tables.load = load;
    tables.maps = {};
    tables.wilds = {};
    tables.blendMode = {};
    tables.tmx = {};
})(tables || (tables = {}));
//# sourceMappingURL=Tables.js.map