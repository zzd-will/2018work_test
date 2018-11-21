


class BaseNode{

    protected name;
    protected hashid;
    protected condition;

    public static hashid = 1;
    constructor(){
            this.name = "Node",
            this.hashid = 0,
            this.hashid = BaseNode.hashid++
    }
    public precondition(condition){
       return  this.condition ? this.condition.execute(condition) : true
    }
    public tick(e){
        return this.precondition(e) ? this.execute(e) : 1
    }
    public execute(e){
        return true;
    }
}