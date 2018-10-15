class testGameTicker extends egret.DisplayObjectContainer{

    constructor(){
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


      //res
     
    //   var test =  RES.getRes("config/buffdesc.json");
  
         RES.getRes("config/buffdesc.json").then(function(rs){
             var b = StringWithFormat(rs[7].desc, 20)       
             egret.log(b);
         });

        //  egret.log("test<<<<<< "+test[1].desc);
         egret.setTimeout(function(){

            //  var b = test;
         },this,2000)   
      
    }

}