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
var Actor = (function (_super) {
    __extends(Actor, _super);
    function Actor() {
        var _this = _super.call(this) || this;
        _this.objectPool = new egret.Recycler;
        _this.count = 0;
        _this.turnTimer = new Ticker(1000);
        _this.bodys = {};
        _this.effects = {};
        _this.head = new egret.Sprite(); //ActorHead
        _this.addChild(_this.head);
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouchTap, _this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemoveFromStage, _this);
        return _this;
    }
    Actor.prototype.generate = function (e) {
        var n = this.objectPool.pop();
        return null == n && (n = new Actor),
            n.load(e);
    };
    Actor.prototype.init = function () {
        if (null == this.selected) {
            var e = RES.getRes("mc/target/target.json");
            this.selected = new egret.MovieClip(e.generateMovieClipData("target")),
                this.selected.play(-1);
        }
    };
    Actor.prototype.updateResource = function (e) {
        this.res = e,
            null != this.body && (Game.removeFromParent.apply(this.body), this.body = null);
        for (var t in this.bodys) {
            var n = this.bodys[t];
            null != n.url && RES.destroyRes(n.url),
                n.release();
        }
        this.bodyhight = tables.actor[this.res].body,
            this.head.y = -tables.actor[this.res].head,
            this.feet = tables.actor[this.res].feet,
            this.frontEffects.y = -this.feet,
            this.backEffects.y = -this.feet,
            this.loadbody(this.status, this.totalFrame);
    };
    Actor.prototype.load = function (e) {
        this.status = ActorAnimation.st,
            this.res = e,
            this.body = null,
            this.lastId = 0,
            this.dir64 = 0,
            this.curDir64 = 0,
            this.bodyhight = tables.actor[this.res].body,
            this.head.y = -tables.actor[this.res].head,
            this.feet = tables.actor[this.res].feet,
            null == this.frontEffects && (this.frontEffects = new egret.DisplayObjectContainer, this.addChildAt(this.frontEffects, 3), this.frontEffects.touchEnabled = !1),
            null == this.backEffects && (this.backEffects = new egret.DisplayObjectContainer, this.addChildAt(this.backEffects, 0), this.backEffects.touchEnabled = !1),
            this.frontEffects.y = -this.feet,
            this.backEffects.y = -this.feet,
            this.loadbody(this.status, 0),
            this.touchChildren = !1,
            this.touchEnabled = !1;
    };
    Actor.prototype.$hitTest = function (e, t) {
        if (!this.$visible)
            return null;
        var n = this.$getInvertedConcatenatedMatrix(), i = n.a * e + n.c * t + n.tx, a = n.b * e + n.d * t + n.ty, r = this.$scrollRect ? this.$scrollRect : this.$maskRect;
        if (r && !r.contains(i, a))
            return null;
        if (this.$mask && !this.$mask.$hitTest(e, t))
            return null;
        for (var o = this.$children, s = !1, l = null, c = o.length - 1; c >= 0; c--) {
            var u = o[c];
            if (!u.$maskedObject) {
                switch (u) {
                    case this.frontEffects:
                    case this.backEffects:
                        continue;
                }
                if (l = u.$hitTest(e, t)) {
                    s = !0,
                        l.$touchEnabled || (l = null);
                    break;
                }
            }
        }
        return l ? this.$touchChildren ? l : this : s ? this : null;
    };
    Actor.prototype.onTouchTap = function (e) {
        this["char"] && this["char"].selectable && (this["char"].select(), e.stopImmediatePropagation());
    };
    Actor.prototype.__recycle = function () {
        this.backEffects.removeChildren(),
            this.frontEffects.removeChildren(),
            null != this.body && null != this.body.parent && this.removeChild(this.body),
            this.lastId = 0,
            this.body = null,
            this.res = null;
    };
    Actor.prototype.release = function () {
        this.res;
        for (var e in this.bodys) {
            var n = this.bodys[e];
            null != n.url && RES.destroyRes(n.url),
                n.release();
        }
        for (var e in this.effects) {
            var i = this.effects[e];
            null != i.loader.url && RES.destroyRes(i.loader.url),
                i.loader.release(),
                i.displayObject = null,
                e.match(/^effect\d+/) && delete this.effects[e];
        }
        egret.Tween.removeTweens(this),
            this["char"] = null,
            this.head.destory(),
            this.enableRecycle && this.objectPool.push(this);
    };
    Actor.prototype.onAddToStage = function () {
        this.turnTimer.addEventListener(this.update, this);
        this.count++;
    };
    Actor.prototype.onRemoveFromStage = function () {
        this.turnTimer.removeEventListener(this.update, this);
        this.count--;
    };
    Actor.prototype.attachCharacter = function (e) {
        this["char"] = e;
    };
    Actor.findBodyResource = function (e, n, i) {
        var a = 1, r = i;
        r > 5 && (a = -1, r = 10 - r);
        var o = ActorAnimation[n] + "_" + r, s = "actor/" + e + "/" + o + ".json";
        if (!RES.hasRes(s))
            switch (n) {
                case ActorAnimation.st:
                    if (1 != i)
                        return Actor.findBodyResource(e, ActorAnimation.st, 1);
                case ActorAnimation.at01:
                    return 1 == i ? Actor.findBodyResource(e, ActorAnimation.st, i) : Actor.findBodyResource(e, ActorAnimation.at01, 1);
                case ActorAnimation.at02:
                    return Actor.findBodyResource(e, ActorAnimation.at01, i);
                case ActorAnimation.wlk:
                    return Actor.findBodyResource(e, ActorAnimation.st, i);
                case ActorAnimation.die:
                    return 1 == i ? Actor.findBodyResource(e, ActorAnimation.st, i) : Actor.findBodyResource(e, ActorAnimation.die, 1);
            }
        return {
            url: s,
            key: o,
            scaleX: a
        };
    };
    Actor.prototype.loadbody = function (e, n) {
        var i = this;
        var a = g_Dir64To8(this.dir64) + 1;
        a > 8 && (a -= 8);
        var r = Actor.findBodyResource(this.res, e, a), o = r.key, s = r.url, l = r.scaleX;
    };
    Actor.calcWlkFrame = function (e, MoveSpeed, frameRate, numFrames) {
        var a = tables.actor[e];
        null == a.baseSpeed && (a.baseSpeed = tables.actor[e].step * frameRate / numFrames);
        var r = Math.round(frameRate * MoveSpeed / a.baseSpeed);
        return r;
    };
    Actor.prototype.onBodyLoaded = function (e, n, i, a, r) {
        var o = 1;
        null == this.body ? (this.body = new egret.MovieClip(i), this.body.touchEnabled = !0, this.body.name = ActorAnimation[e], this.body.scaleX = n) : (this.body.name == ActorAnimation[e] && (o = this.body.currentFrame), this.body.name = ActorAnimation[e], this.body.movieClipData = i, this.body.scaleX = n);
        var s = i.frameRate;
        switch (e) {
            case ActorAnimation.wlk:
                null != this["char"] && (s = Actor.calcWlkFrame(this.res, this["char"].MoveSpeed, i.frameRate, i.numFrames));
        }
        this.body.frameRate = s;
    };
    Actor.prototype.changeRunSpeed = function () {
        if (null != this.body && null != this["char"] && this.status == ActorAnimation.wlk) {
            var e = this.body.movieClipData.frameRate;
            this.body.frameRate = Actor.calcWlkFrame(this.res, this["char"].MoveSpeed, e, this.body.movieClipData.numFrames);
        }
    };
    Actor.prototype.changeAttackSpeed = function (e) {
        // null != this.body && null != this["char"] && (this.status == ActorAnimation.at01 || this.status == ActorAnimation.at02) && (this.body.frameRate = Math.ceil(Game.FPS * this.body.movieClipData.numFrames / e))
    };
    Actor.prototype.removeShieldEffect = function (e) {
        this.removeEffect("shield" + e);
    };
    Actor.prototype.removeEffect = function (e) {
        var t = this.effects[e];
        if (null != t) {
            var n = t.loader;
            null != n.url && RES.destroyRes(n.url),
                n.release();
            var i = t.displayObject;
            null != i && (Game.removeFromParent.apply(i), t.displayObject = null);
        }
    };
    Actor.prototype.appendEffect = function (e, t, n) {
        var i = this.effects[e];
        if (null == i && (i = {
            loader: new MovieClipDataLoader,
            displayObject: null
        },
            this.effects[e] = i), null == i.loader.dispatcher) {
            i.loader.get(t, n);
        }
    };
    Actor.prototype.onDie = function () {
        for (var e in this.effects)
            if ("weapon" != e) {
                var t = this.effects[e];
                null != t.loader.url && RES.destroyRes(t.loader.url),
                    t.loader.release(),
                    t.displayObject = null,
                    e.match(/^effect\d+/) && delete this.effects[e];
            }
        this.frontEffects.removeChildren(),
            this.backEffects.removeChildren();
        var n = this.effects.weapon;
        n && n.displayObject && this.frontEffects.addChild(n.displayObject);
    };
    Actor.prototype.addShieldEffect = function (e) {
        var t = this;
        if (!this["char"].liteModeLimit()) {
            var n, i = "shield" + e;
            switch (e) {
                case 0:
                    n = "wd_zwww2";
                    break;
                case 1:
                    n = "npc_fang1";
                    break;
                default:
                    return egret.error("[AddShieldEffect] index=" + e + " not found");
            }
            var a = egret.getTimer(), r = "skill/" + n + "/" + n + ".json";
            this.appendEffect(i, r, function (e) {
                var o = (egret.getTimer() - a, e.generateMovieClipData(n)), s = new egret.MovieClip(o);
                s.blendMode = tables.blendMode[r],
                    t.effects[i].displayObject = s,
                    s.play(-1),
                    t.frontEffects.addChild(s);
            });
        }
    };
    Actor.prototype.destroy = function () {
        this.removeSelected(),
            this.release();
    };
    Actor.prototype.doGone = function () {
    };
    Actor.prototype.onRemovingTime = function () {
        this.release();
    };
    Actor.prototype.removeSelected = function () {
        this.selected.parent == this.frontEffects && this.frontEffects.removeChild(this.selected);
    };
    Actor.prototype.to = function (e, t) {
        if (null != e && this.status != e) {
            if (e != ActorAnimation.die) {
            }
            this.totalFrame = t;
            ActorAnimation[e];
            this.status = e,
                this.loadbody(e, t);
        }
    };
    Actor.prototype.update = function () {
        // this.popHealImmediately()
        // this.popHurtImmediately()
        this.status != ActorAnimation.die && (null != this["char"]
            && this["char"].selectable && (this["char"].selected
            ? this.selected.parent != this.frontEffects &&
                (this.selected.y = this.head.y + this.feet - (this.head.height - this.head.roleNameLabel.y) + 10,
                    this.frontEffects.addChild(this.selected)) :
            this.removeSelected()),
            this.updatedir());
    };
    Actor.prototype.updatedir = function () {
        var e = this["char"];
        if (null != e) {
            var t = this.dir64;
            if (e.dir64 != t) {
                var n = e.dir64 - t;
                n > HALF_DIR ? n -= MAX_DIR : -HALF_DIR > n && (n += MAX_DIR);
                var i = (n / 2);
                0 == i ? t = e.dir64 : t += i,
                    t >= MAX_DIR && (t -= MAX_DIR),
                    0 > t && (t += MAX_DIR);
            }
            return t != this.dir64 ? (this.dir64 = t, void this.loadbody(this.status, this.totalFrame)) : void (e.liteModeLimit() || this.loadbody(this.status, this.totalFrame));
        }
    };
    Actor.prototype.popImage = function (e, t, n, i) {
        if (null != this.parent && !this["char"].liteModeLimit()) {
            var a = new egret.Bitmap(RES.getRes(e)), r = this.localToGlobal(n, i);
            a.y = r.y,
                a.x = r.x,
                a.scaleX = 1,
                a.scaleY = 1,
                a.anchorOffsetX = a.width / 2,
                a.anchorOffsetY = a.height / 2,
                // mapMessageLayer.addChild(a),
                t(a);
        }
    };
    Actor.prototype.popImageTalentSkill = function (e) {
        var t = this;
    };
    Actor.prototype.popImageMiss = function () {
        this.popImage("ui/public/miss.png", tweenDamage, 0, 0);
    };
    Actor.prototype.popImageDodge = function () {
        this.popImage("ui/public/dodge.png", tweenHurtStrike, 0, 0);
    };
    Actor.prototype.popImageAbsorb = function () {
        this.popImage("ui/public/absorption.png", tweenDamage, 0, 0);
    };
    Actor.prototype.popText = function (e, t, n, i, a) {
        if (null != this.parent && !this["char"].liteModeLimit()) {
            var r = RES.getRes(t), o = new egret.BitmapText;
            o.font = r,
                o.text = e,
                o.anchorOffsetX = 0,
                o.anchorOffsetY = o.height / 2;
            var s = this.localToGlobal(i, a);
            o.x = s.x,
                o.y = s.y,
                // mapMessageLayer.addChild(o),
                n(o);
        }
    };
    Actor.prototype.beingReflectedDamage = function (e) {
        this.popImage("ui/public/Anti_injury.png", tweenDamage, 0, -this.bodyhight / 2),
            this.popText("" + e, "Number/damage.fnt", tweenDamage, 35, -this.bodyhight / 2);
    };
    Actor.prototype.popHurt = function (e, t) {
        (this.popText("" + e, "Number/strike_number.fnt", tweenHurtStrike, 40, 0),
            this.popImage("ui/public/criticalstrike.png", tweenHurtStrike, 0, 0));
    };
    Actor.prototype.popExp = function (e) {
        this.popImage("ui/public/exp.png", tweenDamage, -15, -this.bodyhight / 2 - 1),
            this.popText("+" + e, "Number/exp_number.fnt", tweenDamage, 15, -this.bodyhight / 2);
    };
    Actor.prototype.popDamage = function (e, t) {
        if (1 == t)
            this.popText(e.toString(), "Number/strike_number.fnt", tweenDamageStrike, 40, -this.bodyhight / 2),
                this.popImage("ui/public/criticalstrike.png", tweenDamageStrike, 0, -this.bodyhight / 2);
        else {
            if (null != this["char"] && this["char"].liteModeLimit())
                return;
            this.popText("-" + e, "Number/damage.fnt", tweenDamage, 0, -this.bodyhight / 2);
        }
    };
    Actor.prototype.popBleedHurt = function (e, t) {
        this.popText("-" + e, "Number/myhurt.fnt", tweenBleedHurt, -35, 0);
    };
    Actor.prototype.popBleedDamage = function (e, t) {
        null != this["char"] && this["char"].liteModeLimit() || this.popText("p" + e, "Number/dot.fnt", tweenBleedDamage, -this.width / 2, -this.bodyhight / 2);
    };
    Actor.prototype.doHitBack = function (e) {
        var t = g_Move(e, 100), n = logicPos2DisplayPos(t);
        egret.Tween.removeTweens(this),
            egret.Tween.get(this).to({
                x: this.x + n.x,
                y: this.y + n.y
            }, 100);
    };
    Actor.prototype.doHurt = function (e, t) {
        egret.Tween.removeTweens(this);
        var n = g_Move(e, 10), i = logicPos2DisplayPos(n);
        egret.Tween.get(this).to({
            x: this.x + i.x,
            y: this.y + i.y
        }, 100).to({
            x: this.x,
            y: this.y
        }, 100, egret.Ease.backInOut).call(this.onShakeFinish, this);
    };
    Actor.prototype.onShakeFinish = function () {
        if (null != this["char"]) {
            var e = logicPos2DisplayPos(this["char"].logicPos);
            this.x = e.x,
                this.y = e.y;
        }
    };
    Actor.prototype.addOneTimeEffect = function (e, t, n) {
        var i = this;
        if (void 0 === n && (n = 0), !this["char"].liteModeLimit()) {
            this.lastId++;
            var a = "effect" + this.lastId, r = "skill/" + e + "/" + e + ".json", o = egret.getTimer();
            this.appendEffect(a, r, function (s) {
                var l = i.effects[a];
                if (null == l)
                    return void egret.error("[ERROR] actor.addOneTimeEffect " + a + " not found");
                null != l.loader.url && RES.destroyRes(l.loader.url),
                    l.loader.release(),
                    delete i.effects[a];
                var c = egret.getTimer() - o, u = s.generateMovieClipData(e);
                // h = EffectSprite.generate(r, u);
                // h.blendMode = tables.blendMode[r];
                // var d = h.movieClipData.numFrames * Game.Second / h.movieClipData.frameRate;
                // c >= d || i._addEffect(h, c, d, t, 0, -n)
            });
        }
    };
    Actor.prototype.addSceneTitle = function (e, t) {
        this.head.SceneTitle = {
            type: e,
            id: t
        };
    };
    Actor.prototype._addEffect = function (e, t, n, i, a, r) {
        switch (e.playDeltaTime(t), e.y += r, e.x += a, n >= 0 && e.setLifeTime(n - t), i) {
            case ActorLayer.front:
                this.frontEffects.addChild(e);
                break;
            case ActorLayer.back:
                this.backEffects.addChild(e);
        }
        e.play(-1);
    };
    Actor.prototype.removeSuperWeaponEffect = function () {
        var e = "weapon";
        this.removeEffect(e);
    };
    Actor.prototype.addSuperWeaponEffect = function (e) {
        var t = this, n = "weapon", i = "tables.superWeaponCfg[e].effect", a = "skill/" + i + "/" + i + ".json", r = this.effects[n];
        if (null == r && (r = {
            loader: new MovieClipDataLoader,
            displayObject: null
        },
            this.effects[n] = r), null != r.loader.url)
            if (r.loader.url != a)
                RES.destroyRes(r.loader.url),
                    r.loader.release(),
                    null != r.displayObject && (Game.removeFromParent.apply(r.displayObject), r.displayObject = null);
            else if (null != r.displayObject)
                return void (null == r.displayObject.parent && this.frontEffects.addChild(r.displayObject));
        var o = egret.getTimer();
        this.appendEffect(n, a, function (e) {
            var r = (egret.getTimer() - o, e.generateMovieClipData(i)), s = new egret.MovieClip(r);
            s.blendMode = tables.blendMode[a],
                t.effects[n].displayObject = s,
                s.play(-1),
                t.frontEffects.addChild(s);
        });
    };
    Actor.prototype.updateSuperWeaponEffect = function (e) {
        if (!this["char"].liteModeLimit()) {
            var t = "weapon", n = this.effects[t];
            null == n && (n = {
                loader: new MovieClipDataLoader,
                displayObject: null
            },
                this.effects[t] = n),
                this.addSuperWeaponEffect(e);
        }
    };
    Actor.prototype.addCommonEffect = function (e, t, n) {
        var i = this;
        this.lastId++;
        var a = "effect" + this.lastId;
        this.appendEffect(a, e, function (e) {
            var t = i.effects[a];
            return null == t ? void egret.error("[ERROR] actor.addCommonEffect " + a + " not found") : (n(e), null != t.loader.url && RES.destroyRes(t.loader.url), t.loader.release(), void delete i.effects[a]);
        });
    };
    return Actor;
}(egret.DisplayObjectContainer));
__reflect(Actor.prototype, "Actor");
//# sourceMappingURL=Actor.js.map