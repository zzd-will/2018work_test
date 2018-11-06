

namespace Game{

    export function removeFromParent(){
         if (null != this.parent) {
              this.parent.removeChild(this);
         }
    }
}