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
var Decorator = (function (_super) {
    __extends(Decorator, _super);
    function Decorator() {
        return _super.call(this) || this;
    }
    Decorator.prototype.setCondition = function (condition) {
        this.condition = condition;
    };
    Decorator.prototype.setChild = function (child) {
        this.child = child;
    };
    return Decorator;
}(BaseNode));
__reflect(Decorator.prototype, "Decorator");
//# sourceMappingURL=Decorator.js.map