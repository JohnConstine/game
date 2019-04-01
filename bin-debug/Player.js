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
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this.scoring = 0; // 初始化积分
        _this.getPlayerAnimation();
        return _this;
    }
    Player.prototype.getPlayerAnimation = function () {
        // 引入资源---角色 (四个角色：猫,猴子,恐龙,运动员)
        var mcDataFactory = new egret.MovieClipDataFactory(RES.getRes("cat_json"), RES.getRes("cat_png"));
        var mc = new egret.MovieClip(mcDataFactory.generateMovieClipData("cat"));
        // let mcDataFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("dinosaur_json"), RES.getRes("dinosaur_png"));
        // let mc: egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("dinosaur"));
        // let mcDataFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("footballer_json"), RES.getRes("footballer_png"));
        // let mc: egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("footballer"));
        // let mcDataFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("monkey_json"), RES.getRes("monkey_png"));
        // let mc: egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("monkey"));
        // 判断选择的角色是什么
        // 0是猫 1是猴子 2是恐龙 3是运动员
        mc.anchorOffsetX = mc.width / 2;
        mc.anchorOffsetY = mc.height - 30;
        this.playerWalkAnimation = mc;
        this.addChild(this.playerWalkAnimation);
    };
    //角色 0:往左跳，1：往右跳
    Player.prototype.playerJump = function (direction) {
        var playerJump = this.playerWalkAnimation;
        var lastDirection;
        if (lastDirection == direction) {
            playerJump.play(2);
        }
        else {
            if (direction == 0) {
                this.scoring++;
                playerJump.scaleX = -1;
            }
            else {
                this.scoring++;
                playerJump.scaleX = 1;
            }
            playerJump.play(2);
        }
        lastDirection = direction;
    };
    //角色 0:面向左，1：面向右
    Player.prototype.playerDirection = function (direction) {
        if (direction == 0) {
            this.playerWalkAnimation.scaleX = -1;
        }
        else if (direction == 1) {
            this.playerWalkAnimation.scaleX = 1;
        }
    };
    //角色 0:跳错 1:时间到
    Player.prototype.playerDied = function (diedNum) {
        if (diedNum == 0) {
            this.scoring--;
            this.playerWalkAnimation.addEventListener(egret.Event.COMPLETE, this.playOver, this);
        }
        else if (diedNum == 1) {
            this.playOver();
        }
        this.setSore = new TipMsg(this.scoring);
    };
    Player.prototype.playOver = function () {
        this.playerWalkAnimation.removeEventListener(egret.Event.COMPLETE, this.playOver, this);
        egret.Tween.get(this).to({ y: this.y + 300 }, 1400).call(function () {
            this.parent.removeChild(this);
        });
    };
    return Player;
}(egret.Sprite));
__reflect(Player.prototype, "Player");
