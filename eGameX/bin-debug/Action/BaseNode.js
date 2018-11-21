var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseNode = (function () {
    function BaseNode() {
        this.name = "Node",
            this.hashid = 0,
            this.hashid = BaseNode.hashid++;
    }
    BaseNode.prototype.precondition = function (condition) {
        return this.condition ? this.condition.execute(condition) : true;
    };
    BaseNode.prototype.tick = function (e) {
        return this.precondition(e) ? this.execute(e) : 1;
    };
    BaseNode.prototype.execute = function (e) {
        return true;
    };
    BaseNode.hashid = 1;
    return BaseNode;
}());
__reflect(BaseNode.prototype, "BaseNode");
//# sourceMappingURL=BaseNode.js.map