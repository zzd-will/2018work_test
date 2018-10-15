

namespace Game{

    export function removeFromParent(){
         null != this.parent && this.parent.removeChild(this);
    }
}