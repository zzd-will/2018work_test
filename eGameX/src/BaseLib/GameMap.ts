
// class  GameMap{
//      ratioY = 2;
//      LayerRole = "role"
//      LayerObstacle = "obstacle"
//      LayerShade = "shade"
//      tmxTileMap:tiled.TMXTilemap
//     destory() {
//         var e = this.tmxTileMap;
//         this.tmxTileMap = null,
//         e.destory(),
//         e.removeChildren()
//     }
//     focus(t, n) {
//         var i = this.tmxTileMap;
//         if (null != i) {
//             var a = t.localToGlobal(0, 0),
//             r = egret.MainContext.instance.stage,
//             o = r.stageWidth,
//             s = r.stageHeight,
//             l = 0,
//             c = 0,
//             u = this.width,
//             h = this.height / e.ratioY;
//             o > u ? l = o / 2 - u / 2 - i.x: (l = o / 2 - a.x, i.x + l > 0 ? l = -i.x: i.x + u + l < o && (l = o - u - i.x)),
//             s > h ? c = s / 2 - h / 2 - i.y: (c = s / 2 - a.y, i.y + c > 0 ? c = -i.y: i.y + h + c < s && (c = s - i.y - h)),
//             (0 != l || 0 != c) && i.moveMap(l, c)
//         }
//     }
// }