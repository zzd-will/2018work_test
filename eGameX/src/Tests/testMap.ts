

class testMap extends egret.DisplayObjectContainer {

    private url:string;

    constructor() {
        super();
        this.url = "resource/outsidemap/outside11.tmx";
        var data = RES.getResByUrl(this.url, this.onLoaded, this, RES.ResourceItem.TYPE_XML);
    }
    public onLoaded(e) {

        var t = e.attributes.width * e.attributes.tilewidth,
            n = e.attributes.height * e.attributes.tileheight,
            i = new tiled.TMXTilemap(t, n, e, this.url);
        // i.y = 500;
        i.render(),
        i.touchEnabled = !0;
        this.addChild(i);

        i.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onMove,this);
    }

    private onMove(e:egret.Event){

        e.target.x +=7;
        e.target.y +=3;

    }
}




