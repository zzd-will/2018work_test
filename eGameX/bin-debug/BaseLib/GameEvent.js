var GameEvent;
(function (GameEvent) {
    var dispatcher = new egret.EventDispatcher();
    GameEvent.EVENT = {
        Login: "Login",
        LoadingSuccess: "LoadingSuccess",
        LoadingFailed: "LoadingFailed",
    };
    function dispatch(event, data) {
        void 0 === event && (event = null);
        dispatcher.dispatchEventWith(event, false, data);
    }
    GameEvent.dispatch = dispatch;
    function add(type, listener, thisObject, useCapture, priority) {
        dispatcher.addEventListener(type, listener, thisObject);
    }
    GameEvent.add = add;
})(GameEvent || (GameEvent = {}));
//# sourceMappingURL=GameEvent.js.map