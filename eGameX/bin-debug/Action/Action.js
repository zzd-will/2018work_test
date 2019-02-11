var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var zz;
(function (zz) {
    var Action = (function (_super) {
        __extends(Action, _super);
        function Action() {
            var _this = _super.call(this) || this;
            _this.name = "Action";
            return _this;
        }
        Action.prototype.setCondition = function (condition) {
            this.condition = condition;
        };
        return Action;
    }(BaseNode));
    __reflect(Action.prototype, "Action");
})(zz || (zz = {}));
var Action;
(function (Action) {
    var CmdRun = (function () {
        function CmdRun(e, t, n) {
            this.delegate = e;
            this.ignoreObstacles = n;
            this.desPoint = new egret.Point(t.x, t.y);
        }
        Object.defineProperty(CmdRun.prototype, "actionName", {
            get: function () {
                return "run";
            },
            enumerable: true,
            configurable: true
        });
        CmdRun.prototype.begin = function () {
            this.frame = 0;
            this.delegate.actor.to(ActorAnimation.run);
            this.prePoint = null;
        };
        CmdRun.prototype.end = function () {
            this.prePoint = null;
            null != this.onFinished && this.onFinished.apply(this.delegate);
            this.delegate = null;
        };
        CmdRun.prototype.abort = function () {
            if (null != this.prePoint) {
                this.delegate.locate(this.delegate.dir64, this.prePoint);
                this.end();
            }
        };
        CmdRun.prototype.execute = function () {
            var e = this.delegate.MoveSpeed;
            return this.frame++,
                this.run(this.desPoint, e);
        };
        CmdRun.prototype.run = function (e, t) {
            var n = this.delegate.logicPos, i = false;
            if (null == this.prePoint) {
                this.prePoint = new egret.Point(n.x, n.y);
                i = true;
            }
            else {
                n = this.prePoint;
                this.prePoint = null;
                t *= 2;
            }
            var a = e.x - n.x, r = e.y - n.y;
            if (0 == a && 0 == r)
                return !1;
            var o = g_GetDirIndex(n, e);
            if (g_WithInRange(n, e, t))
                return this.runStep(o, n, a, r),
                    !1;
            var s = g_Move(o, t);
            return this.runStep(o, n, s.x, s.y) ? !this.delegate.logicPos.equals(e) : i;
        };
        CmdRun.prototype.runStep = function (e, t, n, i) {
            // return ! this.ignoreObstacles && Scene.HitObstacle(this.delegate.logicPos, n, i) ? !1 : (this.delegate.locate(e, new egret.Point(t.x + n, t.y + i)), !0)
            this.delegate.locate(e, new egret.Point(t.x + n, t.y + i));
        };
        return CmdRun;
    }());
    Action.CmdRun = CmdRun;
    __reflect(CmdRun.prototype, "Action.CmdRun", ["Action.Node"]);
    var CmdRush = (function (_super) {
        __extends(CmdRush, _super);
        function CmdRush(e, t, n) {
            var _this = _super.call(this, e, t, n) || this;
            _this.speed = n;
            return _this;
        }
        CmdRush.prototype.execute = function () {
            var e = this.speed;
            return this.run(this.desPoint, e);
        };
        return CmdRush;
    }(CmdRun));
    Action.CmdRush = CmdRush;
    __reflect(CmdRush.prototype, "Action.CmdRush");
    var Status;
    (function (Status) {
        Status[Status["Idle"] = 0] = "Idle";
        Status[Status["Running"] = 1] = "Running";
        Status[Status["Casting"] = 2] = "Casting";
        Status[Status["Last"] = 3] = "Last";
    })(Status = Action.Status || (Action.Status = {}));
    var CommandAction = (function () {
        function CommandAction() {
            this.clear();
        }
        CommandAction.prototype.clear = function () {
            this.action = Action.Status.Idle,
                this.cmd = null;
        };
        CommandAction.prototype.copyFrom = function (e) {
            this.action = e.action,
                this.cmd = e.cmd;
        };
        Object.defineProperty(CommandAction.prototype, "actionName", {
            get: function () {
                return null == this.cmd ? ActorAnimation[ActorAnimation.st] :
                    this.cmd.actionName;
            },
            enumerable: true,
            configurable: true
        });
        return CommandAction;
    }());
    Action.CommandAction = CommandAction;
    __reflect(CommandAction.prototype, "Action.CommandAction");
    var CmdSkill = (function () {
        function CmdSkill(e, t) {
            this.skillId = -1,
                this.skillLevel = -1,
                this.skillId = e,
                this.skillLevel = t;
        }
        Object.defineProperty(CmdSkill.prototype, "actionName", {
            get: function () {
                return; //Skill.mapSkill[this.skillId].action
            },
            enumerable: true,
            configurable: true
        });
        CmdSkill.prototype.begin = function () { };
        CmdSkill.prototype.end = function () { };
        CmdSkill.prototype.abort = function () { };
        CmdSkill.prototype.onSkill = function () { };
        CmdSkill.prototype.castanimition = function () { };
        CmdSkill.prototype.execute = function () {
            var c = this.onSkill();
        };
        return CmdSkill;
    }());
    Action.CmdSkill = CmdSkill;
    __reflect(CmdSkill.prototype, "Action.CmdSkill", ["Action.Node"]);
    var CmdDirSkill = (function (_super) {
        __extends(CmdDirSkill, _super);
        function CmdDirSkill(a, b, c, d) {
            return _super.call(this, a, b) || this;
        }
        CmdDirSkill.prototype.onSkill = function () {
        };
        return CmdDirSkill;
    }(CmdSkill));
    Action.CmdDirSkill = CmdDirSkill;
    __reflect(CmdDirSkill.prototype, "Action.CmdDirSkill");
})(Action || (Action = {}));
//# sourceMappingURL=Action.js.map