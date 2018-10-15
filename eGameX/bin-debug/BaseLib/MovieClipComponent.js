// namespace UI{
//     class MovieClipComponent extends eui.Component{
//       public mc:egret.MovieClip;
//       public position = "center";
//       public source;
//       public contentJustify;
//       public justify;
//       public auto;
//       public removeWhenComplete;
//       public loader;
//         constructor(){
//             super();
//             this.source = "",
//             this.name = "",
//             this.position = "center",
//             this.touchEnabled = !1,
//             this.touchChildren = !1,
//             this.contentJustify = !1,
//             this.justify = !0,
//             this.auto = !1,
//             this.removeWhenComplete = !0
//         }
//          public  childrenCreated(){
//             super.childrenCreated();
//             this.load(this.source, this.name),
//             this.addEventListener(egret.Event.RESIZE, this.onResize, this)
//         }
//          public updatePosition() {
//             switch (this.position) {
//             case "center":
//                 this.mc.x = this.width / 2,
//                 this.mc.y = this.height / 2;
//                 break;
//             case "TL":
//                 this.mc.x = 0,
//                 this.mc.y = 0;
//                 break;
//             case "top":
//                 this.mc.x = this.width / 2,
//                 this.mc.y = 0;
//                 break;
//             case "bottom":
//                 this.mc.x = this.width / 2,
//                 this.mc.y = this.height;
//                 break;
//             default:
//                 egret.error(this.source + " invalid position " + this.position)
//             }
//         }
//         public onResize() {
//             null != this.mc && (this.justify && (this.mc.scaleX = this.width / this.mc.width, this.mc.scaleY = this.height / this.mc.height), this.updatePosition())
//         }
//         public removeFromParent() {
//             Game.removeFromParent.apply(this),
//             this.free()
//         }re
//         public free () {
//             null != this.mc && (this.mc.scaleX = 1, this.mc.scaleY = 1, this.mc.stop(), Game.removeFromParent.apply(this.mc), this.mc.visible = !1),
//             null != this.loader && (null != this.loader.url && RES.destroyRes(this.loader.url), this.loader.release()),
//             this.source = null,
//             this.name = null
//         }
//         public Load(e, t){ 
//             (this.source != e || this.name != t) && (
//                 this.free(), 
//                 this.source = e, this.name = t, 
//                 this.load(e, t)
//                 )
//         }
//         public onLoaded (e) {
//             this.source,
//             this.name
//         }
//         public load(e, t) {
//             var n = this;
//             null != e && "" != e && null != t && (null == this.loader && (this.loader = new MovieClipDataLoader), null == this.loader.dispatcher && (RES.addRel(e), this.loader.get(e,
//             function(i) {
//                 var a = i.generateMovieClipData(t);
//                 null == n.mc ? (n.mc = new egret.MovieClip(a), n.mc.addEventListener(egret.MovieClipEvent.COMPLETE, n.onMovieClipComplete, n), n.addChild(n.mc)) : (n.mc.movieClipData = a, n.mc.visible = !0, n.invalidateSize(), null == n.mc.parent && n.addChild(n.mc)),
//                 n.mc.blendMode = table.blendMode[e],
//                 n.contentJustify ? (n.width = n.mc.width, n.height = n.mc.height, eui.PropertyEvent.dispatchPropertyEvent(n, eui.PropertyEvent.PROPERTY_CHANGE, "contentWidth"), eui.PropertyEvent.dispatchPropertyEvent(n, eui.PropertyEvent.PROPERTY_CHANGE, "contentHeight")) : n.justify && (n.mc.scaleX = n.width / n.mc.width, n.mc.scaleY = n.height / n.mc.height),
//                 n.updatePosition(),
//                 null != n.playTimes || null != n.frame ? null != n.frame ? n.mc.gotoAndPlay(n.frame, n.playTimes) : n.mc.play(n.playTimes) : n.auto && n.mc.play( - 1)
//             })))
//         }
//         public gotoAndStop(e) {
//             null != this.mc && this.mc.gotoAndStop(e)
//         }
//         public onMovieClipComplete() {
//             this.removeWhenComplete ? Game.removeFromParent.apply(this) : this.visible = !1
//         }
//         public play(e) {
//             this.playTimes = e,
//             null != this.mc && this.mc.play(e)
//         }
//         public gotoAndPlay(e, t) {
//             this.frame = e,
//             this.playTimes = t,
//             null != this.mc && this.mc.gotoAndPlay(e, t)
//         }
//         public stop() {
//             this.playTimes = null,
//             this.frame = null,
//             null != this.mc && this.mc.stop()
//         }
//         public measure() {
//             null != this.mc ? this.setMeasuredSize(this.mc.width, this.mc.height) : e.prototype.measure.call(this)
//         }
//     }
// } 
//# sourceMappingURL=MovieClipComponent.js.map