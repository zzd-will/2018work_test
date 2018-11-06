


namespace UI {

    export class MovieClipComponent extends eui.Component {

        public mc: egret.MovieClip;

        public position = "center";

        public source;
        public contentJustify;
        public justify;
        public auto;
        public removeWhenComplete;
        public loader: MovieClipDataLoader;

        public playTimes;
        public frame;
        constructor() {
            super();
            this.source = "",
                this.name = "",
                this.position = "center",
                this.touchEnabled = false,
                this.touchChildren = false,
                this.contentJustify = false,
                this.justify = true,
                this.auto = false,
                this.removeWhenComplete = true
        }
        public childrenCreated() {
            super.childrenCreated();
            this.load(this.source, this.name),
                this.addEventListener(egret.Event.RESIZE, this.onResize, this)
        }
        public updatePosition() {
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
                    egret.error(this.source + " invalid position " + this.position)
            }
        }
        public onResize() {
            if (null != this.mc) {
                if (this.justify) {
                    this.mc.scaleX = this.width / this.mc.width;
                    this.mc.scaleY = this.height / this.mc.height;
                }
                this.updatePosition();
            }
        }
        public removeFromParent() {
            Game.removeFromParent.apply(this),
                this.free()
        }
        public free() {
            if (null != this.mc) {
                this.mc.scaleX = 1
                this.mc.scaleY = 1
                this.mc.stop()
                Game.removeFromParent.apply(this.mc)
                this.mc.visible = false
            }
            if (null != this.loader) {
                if (null != this.loader.url) {
                    RES.destroyRes(this.loader.url)
                    this.loader.release()
                }

            }
            this.source = null;
            this.name = null;
        }
        public Load(source: string, name: string) {
            (this.source != source || this.name != name) && (
                this.free(),
                this.source = source, this.name = name,
                this.load(source, name)
            )
        }
        public onLoaded(e) {
            this.source,
                this.name
        }
        private load(url: string, name: string) {

            var thisobj = this;

            if (null != url && "" != url && null != name) {
                if (null == this.loader) {
                    this.loader = new MovieClipDataLoader
                }
                this.loader.get(url, (mcf: egret.MovieClipDataFactory) => {
                    var mcd: egret.MovieClipData = mcf.generateMovieClipData(name);
                    if (null == thisobj.mc) {
                        thisobj.mc = new egret.MovieClip(mcd);
                        thisobj.mc.addEventListener(egret.MovieClipEvent.COMPLETE, thisobj.onMovieClipComplete, thisobj)
                        thisobj.addChild(thisobj.mc)
                    } else {
                        thisobj.mc.movieClipData = mcd
                        thisobj.mc.visible = true;
                        thisobj.invalidateSize();
                        null == thisobj.mc.parent && thisobj.addChild(thisobj.mc)
                    }

                    thisobj.mc.blendMode = tables.blendMode[0]
                    if (thisobj.contentJustify) {
                        thisobj.width = thisobj.mc.width;
                        thisobj.height = thisobj.mc.height;
                        eui.PropertyEvent.dispatchPropertyEvent(thisobj, eui.PropertyEvent.PROPERTY_CHANGE, "contentWidth");
                        eui.PropertyEvent.dispatchPropertyEvent(thisobj, eui.PropertyEvent.PROPERTY_CHANGE, "contentHeight");
                    } else {
                        if (thisobj.justify) {
                            thisobj.mc.scaleX = thisobj.width / thisobj.mc.width;
                            thisobj.mc.scaleY = thisobj.height / thisobj.mc.height;
                        }
                    }
                    thisobj.updatePosition()

                    if (null != thisobj.playTimes || null != thisobj.frame) {

                        if (null != thisobj.frame) {
                            thisobj.mc.gotoAndPlay(thisobj.frame, thisobj.playTimes)
                        } else {
                            thisobj.mc.play(thisobj.playTimes)
                        }

                    } else {
                        thisobj.auto && thisobj.mc.play(-1)
                    }
                })

            }

        }
        public gotoAndStop(e) {
            null != this.mc && this.mc.gotoAndStop(e)
        }
        public onMovieClipComplete() {
            this.removeWhenComplete ? Game.removeFromParent.apply(this) : this.visible = false
        }
        public play(playTimes?: number) {
            this.playTimes = playTimes;
            if (null != this.mc) {
                this.mc.play(playTimes)
            }
        }
        public gotoAndPlay(e, t) {
            this.frame = e,
                this.playTimes = t,
                null != this.mc && this.mc.gotoAndPlay(e, t)
        }
        public stop() {
            this.playTimes = null,
                this.frame = null,
                null != this.mc && this.mc.stop()
        }
        //自动测量合适的显示宽高
        public measure() {
            null != this.mc ? this.setMeasuredSize(this.mc.width, this.mc.height) : super.measure.call(this)
        }



    }


}