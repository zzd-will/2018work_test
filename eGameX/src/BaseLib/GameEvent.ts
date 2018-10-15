
namespace GameEvent {


    var dispatcher = new egret.EventDispatcher()

    export var EVENT = {
        Login: "Login",
        LoadingSuccess: "LoadingSuccess",
        LoadingFailed: "LoadingFailed",

    }
    export function dispatch(event: string, data?: any) {
        void 0 === event && (event = null);
        dispatcher.dispatchEventWith(event, false, data)
    }
    export function add(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number) {

        dispatcher.addEventListener(type, listener, thisObject)
    }

}