class testGameTicker extends egret.DisplayObjectContainer {

    constructor() {
        super();
        //GameTicker test
        // GameTicker.init();
        // GameTicker.start();
        // GameTicker.addEventListener(function(){

        // egret.log("test");

        // },this);


        //GameEvent test
        //   GameEvent.add(GameEvent.EVENT.Login,function(){
        //        egret.log("<<<< addEventListener");
        //   },this);
        //   GameEvent.dispatch(GameEvent.EVENT.Login);

        //zip资源获取
        GameRes.getZipRes("config/buffdesc.json").then(function (rs) {
            var b = StringWithFormat(rs[7].desc, 20)
            egret.log(b);
        });


        //普通资源获取

        //  var res =  GameRes.getRes("track.png");

        //promise使用
        // this.get("");

        //tables json 加载
        // tables.load();

        // this.testmc();
        // this.testui();
        this.testLayerManager();
        
    }
    //promise 使用
    public get(key: string) {

        GameRes.getZipRes("config/buffdesc.json").then(function (rs) {
            var b = StringWithFormat(rs[7].desc, 20)
            egret.log(b);
        }).catch(function (rej) {
            egret.log(rej)
        });

    }

    //  img.onload = ()=>{
    //      console.log("onload");
    //  }
    // }

    public test() {

        var mc = new MovieClipDataLoader()
        mc.get("st_2_1.json", function (res) {
            console.log(res)
        });

        mc.fetch("st_2_1.json", (rs) => {
            console.log(rs)
        })
    }

    public testmc() {

        var mc = new UI.MovieClipComponent
        mc.Load("skill02.json", "skill02")
        // mc.Load("wd_shifa1.json","wd_shifa1")
        // mc.Load("tw_dingshen.json","tw_dingshen")
        mc.auto = true;
        //    mc.play(-1)
        // mc.justify = false;
        // mc.contentJustify=false;

        mc.x = 500;
        mc.y = 400
        this.addChild(mc);

    }
    public testui() {

        var loadingView = new UI.LoadingUICT();

        loadingView.skinName = RES.getRes("Loading.exml")

        loadingView.once(egret.Event.ADDED_TO_STAGE,
            function () {
                var e = document.getElementById("launchDiv");
                null != e && e.parentNode.removeChild(e)
            },
            null)
        loadingView.verticalCenter = 0
        loadingView.horizontalCenter = 0

        var euiLayer = new eui.UILayer
        euiLayer.addChild(loadingView);
        euiLayer.touchEnabled = !1

        this.addChild(loadingView);

    }

    public testLayerManager(){

        LayerManager.inst.showUI("LoadingUICT");

    }



}

class TestSkin extends eui.Component {
    constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
        this.skinName = "resource/UI/Loading.exml";
    }
    protected createChildren() {
        super.createChildren();
        console.log("createChildren")
    }
    private onComplete(): void {
        console.log("onComplete");
    }
}
