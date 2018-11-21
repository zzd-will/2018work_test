

//
class ClientNpc implements Action.Delegate{
       logicPos:egret.Point;
        dir64
        MoveSpeed
        actor:Actor;
        /////
        workingCmd:Action.CommandAction;
        constructor(){
             this.workingCmd = new Action.CommandAction
        }
        resource
        Name
        skillId
       public  init (e?, t?, n?) {
        this.resource = e,
        this.Name = t,
        this.skillId = n
    }
       public locate(dir64:egret.Point,logicPos:egret.Point){

       }

       public cmdSkill(e){
             var t = new Action.CmdRun(this, e, !0);
            this.pushCommand(Action.Status.Running, t)
       }
       public pushCommand (e, t) {
        null != this.workingCmd.cmd && this.workingCmd.cmd.abort(),
        this.workingCmd.cmd = t,
        this.workingCmd.action = e,
        t.begin()
    }
    public castDirSkill (e, t, n) {
        var i = new Action.CmdDirSkill(this, n, e, t);
        this.pushCommand(Action.Status.Casting, i)
    }
    public update (e) {
        var t = this.workingCmd.cmd;
        return  void(t.execute(e) || (t.end(), this.workingCmd.clear()))
    }
}