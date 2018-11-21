var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//
var ClientNpc = (function () {
    function ClientNpc() {
        this.workingCmd = new Action.CommandAction;
    }
    ClientNpc.prototype.locate = function (dir64, logicPos) {
    };
    ClientNpc.prototype.cmdSkill = function (e) {
        var t = new Action.CmdRun(this, e, !0);
        this.pushCommand(Action.Status.Running, t);
    };
    ClientNpc.prototype.pushCommand = function (e, t) {
        null != this.workingCmd.cmd && this.workingCmd.cmd.abort(),
            this.workingCmd.cmd = t,
            this.workingCmd.action = e,
            t.begin();
    };
    ClientNpc.prototype.update = function (e) {
        var t = this.workingCmd.cmd;
        return void (t.execute(e) || (t.end(), this.workingCmd.clear()));
    };
    return ClientNpc;
}());
__reflect(ClientNpc.prototype, "ClientNpc", ["Action.Delegate"]);
//# sourceMappingURL=ClientNpc.js.map