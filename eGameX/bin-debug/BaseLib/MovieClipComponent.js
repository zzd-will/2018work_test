var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var UI;
(function (UI) {
    var MovieClipComponent = (function (_super) {
        __extends(MovieClipComponent, _super);
        function MovieClipComponent() {
            var _this = _super.call(this) || this;
            _this.position = "center";
            _this.source = "",
                _this.name = "",
                _this.position = "center",
                _this.touchEnabled = false,
                _this.touchChildren = false,
                _this.contentJustify = false,
                _this.justify = true,
                _this.auto = false,
                _this.removeWhenComplete = true;
            return _this;
        }
        MovieClipComponent.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.load(this.source, this.name),
                this.addEventListener(egret.Event.RESIZE, this.onResize, this);
        };
        MovieClipComponent.prototype.updatePosition = function () {
            switch (this.position) {
                case "center":
                    this.mc.x = this.width / 2,
                        this.mc.y = this.height / 2;
                    break;
                case "TL":
                    this.mc.x = 0,
                        this.mc.y = 0;
                    break;
                case "top":
                    this.mc.x = this.width / 2,
                        this.mc.y = 0;
                    break;
                case "bottom":
                    this.mc.x = this.width / 2,
                        this.mc.y = this.height;
                    break;
                default:
                    egret.error(this.source + " invalid position " + this.position);
            }
        };
        MovieClipComponent.prototype.onResize = function () {
            if (null != this.mc) {
                if (this.justify) {
                    this.mc.scaleX = this.width / this.mc.width;
                    this.mc.scaleY = this.height / this.mc.height;
                }
                this.updatePosition();
            }
        };
        MovieClipComponent.prototype.removeFromParent = function () {
            Game.removeFromParent.apply(this),
                this.free();
        };
        MovieClipComponent.prototype.free = function () {
            if (null != this.mc) {
                this.mc.scaleX = 1;
                this.mc.scaleY = 1;
                this.mc.stop();
                Game.removeFromParent.apply(this.mc);
                this.mc.visible = false;
            }
            if (null != this.loader) {
                if (null != this.loader.url) {
                    RES.destroyRes(this.loader.url);
                    this.loader.release();
                }
            }
            this.source = null;
            this.name = null;
        };
        MovieClipComponent.prototype.Load = function (source, name) {
            (this.source != source || this.name != name) && (this.free(),
                this.source = source, this.name = name,
                this.load(source, name));
        };
        MovieClipComponent.prototype.onLoaded = function (e) {
            this.source,
                this.name;
        };
        MovieClipComponent.prototype.load = function (url, name) {
            var thisobj = this;
            if (null != url && "" != url && null != name) {
                if (null == this.loader) {
                    this.loader = new MovieClipDataLoader;
                }
                if (null == this.loader.dispatcher) {
                    this.loader.get(url, function (mcf) {
                        var mcd = mcf.generateMovieClipData(name);
                        if (null == thisobj.mc) {
                            thisobj.mc = new egret.MovieClip(mcd);
                            thisobj.mc.addEventListener(egret.MovieClipEvent.COMPLETE, thisobj.onMovieClipComplete, thisobj);
                            thisobj.addChild(thisobj.mc);
                        }
                        else {
                            thisobj.mc.movieClipData = mcd;
                            thisobj.mc.visible = true;
                            thisobj.invalidateSize();
                            null == thisobj.mc.parent && thisobj.addChild(thisobj.mc);
                        }
                        thisobj.mc.blendMode = tables.blendMode[0];
                        if (thisobj.contentJustify) {
                            thisobj.width = thisobj.mc.width;
                            thisobj.height = thisobj.mc.height;
                            eui.PropertyEvent.dispatchPropertyEvent(thisobj, eui.PropertyEvent.PROPERTY_CHANGE, "contentWidth");
                            eui.PropertyEvent.dispatchPropertyEvent(thisobj, eui.PropertyEvent.PROPERTY_CHANGE, "contentHeight");
                        }
                        else {
                            if (thisobj.justify) {
                                thisobj.mc.scaleX = thisobj.width / thisobj.mc.width;
                                thisobj.mc.scaleY = thisobj.height / thisobj.mc.height;
                            }
                        }
                        thisobj.updatePosition();
                        if (null != thisobj.playTimes || null != thisobj.frame) {
                            if (null != thisobj.frame) {
                                thisobj.mc.gotoAndPlay(thisobj.frame, thisobj.playTimes);
                            }
                            else {
                                thisobj.mc.play(thisobj.playTimes);
                            }
                        }
                        else {
                            thisobj.auto && thisobj.mc.play(-1);
                        }
                    });
                }
            }
        };
        MovieClipComponent.prototype.gotoAndStop = function (e) {
            null != this.mc && this.mc.gotoAndStop(e);
        };
        MovieClipComponent.prototype.onMovieClipComplete = function () {
            this.removeWhenComplete ? Game.removeFromParent.apply(this) : this.visible = false;
        };
        MovieClipComponent.prototype.play = function (playTimes) {
            this.playTimes = playTimes;
            if (null != this.mc) {
                this.mc.play(playTimes);
            }
        };
        MovieClipComponent.prototype.gotoAndPlay = function (e, t) {
            this.frame = e,
                this.playTimes = t,
                null != this.mc && this.mc.gotoAndPlay(e, t);
        };
        MovieClipComponent.prototype.stop = function () {
            this.playTimes = null,
                this.frame = null,
                null != this.mc && this.mc.stop();
        };
        MovieClipComponent.prototype.measure = function () {
            null != this.mc ? this.setMeasuredSize(this.mc.width, this.mc.height) : _super.prototype.measure.call(this);
        };
        return MovieClipComponent;
    }(eui.Component));
    UI.MovieClipComponent = MovieClipComponent;
    __reflect(MovieClipComponent.prototype, "UI.MovieClipComponent");
})(UI || (UI = {}));
//# sourceMappingURL=MovieClipComponent.js.map