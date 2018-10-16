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
        // GameRes.getRes("config/buffdesc.json").then(function (rs) {
        //     var b = StringWithFormat(rs[7].desc, 20)
        //     egret.log(b);
        // });


        //promise使用
        // this.get("");

        //tables json 加载
        tables.load();
    }
    //promise 使用
    public get(key: string) {

        GameRes.getRes("config/buffdesc.json").then(function(rs) {
            var b = StringWithFormat(rs[7].desc, 20)
            egret.log(b);
        }).catch(function (rej) {
            egret.log(rej)
        });

    }


}