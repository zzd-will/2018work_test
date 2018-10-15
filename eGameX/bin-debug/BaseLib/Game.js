var Game;
(function (Game) {
    function removeFromParent() {
        null != this.parent && this.parent.removeChild(this);
    }
    Game.removeFromParent = removeFromParent;
})(Game || (Game = {}));
//# sourceMappingURL=Game.js.map