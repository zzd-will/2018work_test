var Game;
(function (Game) {
    var dispatcher = new egret.EventDispatcher();
    Game.EVENT = {
        LOGIN: "Login",
        LOADING_SUCCESS: "LoadingSuccess",
        LOADING_FAILED: "LoadingFailed",
        SHOW_LAYER: "ShowLayer",
        HIDE_LAYER: "HideLayer"
    };
    function dispatch(event, data) {
        void 0 === event && (event = null);
        dispatcher.dispatchEventWith(event, false, data);
    }
    Game.dispatch = dispatch;
    function add(type, listener, thisObject, useCapture, priority) {
        dispatcher.addEventListener(type, listener, thisObject);
    }
    Game.add = add;
})(Game || (Game = {}));
//# sourceMappingURL=GameEvent.js.map