

class Composite extends BaseNode {

    protected children;

    constructor() {
        super()
        this.children = []
    }
    public setCondition(condition) {
        this.condition = condition;
    }

    public addNode(node) {
        this.children.push(node);
    }

}