class PartnerNpcManager{


    public mapPartnerFakeNpc = {}

    //  ticker中调用
    public update(t){
        for (var n in this.mapPartnerFakeNpc)
         this.mapPartnerFakeNpc[n].update(t)
    }

    public delayfigthing(){
           var  c = new ClientNpc
            c.init()
            this.mapPartnerFakeNpc[0] = c
    }
}