

class testMap extends egret.DisplayObjectContainer {

    constructor() {
        super();
        var url: string = "resource/outsidemap/outside11.tmx";
        var data = RES.getResByUrl(url, this.onLoaded, this, RES.ResourceItem.TYPE_XML);
    }
    public onLoaded(e) {

        var t = e.attributes.width * e.attributes.tilewidth,
            n = e.attributes.height * e.attributes.tileheight,
            i = new tiled.TMXTilemap(t, n, e, "resource/outsidemap/");
        // i.y = 500;
        i.render(),
        i.touchEnabled = !0;
        this.addChild(i);
       
    }
}




