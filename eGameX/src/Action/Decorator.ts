class Decorator extends BaseNode {

    protected child;

    constructor() {
        super()
    }
    public setCondition(condition) {
        this.condition = condition;
    }

    public setChild(child) {
        this.child = child;
    }

}