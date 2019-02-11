var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PartnerNpcManager = (function () {
    function PartnerNpcManager() {
        this.mapPartnerFakeNpc = {};
    }
    //  ticker中调用
    PartnerNpcManager.prototype.update = function (t) {
        for (var n in this.mapPartnerFakeNpc)
            this.mapPartnerFakeNpc[n].update(t);
    };
    PartnerNpcManager.prototype.delayfigthing = function () {
        var c = new ClientNpc;
        c.init();
        this.mapPartnerFakeNpc[0] = c;
    };
    return PartnerNpcManager;
}());
__reflect(PartnerNpcManager.prototype, "PartnerNpcManager");
//# sourceMappingURL=PartnerNpcManager.js.map