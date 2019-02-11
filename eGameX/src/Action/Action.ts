
namespace zz {
    class Action extends BaseNode {

        constructor() {
            super();
            this.name = "Action";
        }

        public setCondition(condition) {
            this.condition = condition;
        }
    }
}
namespace Action {

    export interface Node {
        begin()
        end()
        abort()
        execute(e?)
        actionName
    }
    export class CmdRun implements Action.Node {
        delegate;
        ignoreObstacles;
        desPoint;
        public frame;
        public prePoint: egret.Point;
        public onFinished;

        constructor(e, t, n) {
            this.delegate = e
            this.ignoreObstacles = n
            this.desPoint = new egret.Point(t.x, t.y)
        }

        public get actionName() {
            return "run"
        }
        public begin() {
            this.frame = 0
            this.delegate.actor.to(ActorAnimation.run)
            this.prePoint = null
        }
        public end() {
            this.prePoint = null
            null != this.onFinished && this.onFinished.apply(this.delegate)
            this.delegate = null
        }
        public abort() {
            if (null != this.prePoint) {
                this.delegate.locate(this.delegate.dir64, this.prePoint);
                this.end()
            }
        }
        public execute() {
            var e = this.delegate.MoveSpeed;
            return this.frame++ ,
                this.run(this.desPoint, e)
        }
        public run(e, t) {
            var n = this.delegate.logicPos,
                i = false;
            if (null == this.prePoint) {
                this.prePoint = new egret.Point(n.x, n.y);
                i = true
            }
            else {
                n = this.prePoint;
                this.prePoint = null;
                t *= 2;
            }

            var a = e.x - n.x,
                r = e.y - n.y;
            if (0 == a && 0 == r) return !1;
            var o = g_GetDirIndex(n, e);
            if (g_WithInRange(n, e, t)) return this.runStep(o, n, a, r),
                !1;
            var s = g_Move(o, t);
            return this.runStep(o, n, s.x, s.y) ? !this.delegate.logicPos.equals(e) : i
        }
        public runStep(e, t, n, i) {
            // return ! this.ignoreObstacles && Scene.HitObstacle(this.delegate.logicPos, n, i) ? !1 : (this.delegate.locate(e, new egret.Point(t.x + n, t.y + i)), !0)
            this.delegate.locate(e, new egret.Point(t.x + n, t.y + i));
        }
    }

    export class CmdRush extends CmdRun {
        public speed;

        constructor(e, t, n) {
            super(e, t, n);
            this.speed = n;

        }
        public execute() {
            var e = this.speed;
            return this.run(this.desPoint, e)
        }
    }

    export enum Status {
        Idle,
        Running,
        Casting,
        Last
    }
    export class CommandAction {
        action;
        cmd: Action.Node
        const
        constructor() {
            this.clear()
        }
        public clear() {
            this.action = Action.Status.Idle,
                this.cmd = null
        }
        public copyFrom(e) {
            this.action = e.action,
                this.cmd = e.cmd
        }
        public get actionName() {
            return null == this.cmd ? ActorAnimation[ActorAnimation.st] :
                this.cmd.actionName
        }
    }

    export interface Delegate {
        logicPos: egret.Point;
        dir64
        MoveSpeed
        actor: Actor;
        locate(dir64: egret.Point, logicPos: egret.Point)
    }

    export class CmdSkill implements Action.Node {
        skillId
        skillLevel
        constructor(e, t) {
            this.skillId = -1,
                this.skillLevel = -1,
                this.skillId = e,
                this.skillLevel = t
        }
        public get actionName() {
            return  //Skill.mapSkill[this.skillId].action
        }
        public begin() { }
        public end() { }
        public abort() { }
        public onSkill() { }
        public castanimition() { }
        public execute() {
             var c = this.onSkill();
         }
    }

    export class CmdDirSkill extends CmdSkill {
        constructor(a, b, c?, d?) {
            super(a, b)
        }
        public onSkill() {

        }
    }
}