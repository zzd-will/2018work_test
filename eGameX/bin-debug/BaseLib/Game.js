var Game;
(function (Game) {
    function removeFromParent() {
        if (null != this.parent) {
            this.parent.removeChild(this);
        }
    }
    Game.removeFromParent = removeFromParent;
})(Game || (Game = {}));
//# sourceMappingURL=Game.js.map