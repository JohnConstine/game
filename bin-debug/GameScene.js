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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    // 所有人物以及逻辑入口容器---在这里汇总
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    GameScene._instance = function () {
        if (!this.instance) {
            this.instance = new GameScene();
        }
        return this.instance;
    };
    GameScene.prototype.onAddToStage = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        var bgr = new bg(); // 引入游戏背景
        this.addChild(bgr); //添加游戏背景
        var mapr = new StoneMap();
        this.map = mapr;
        this.addChild(this.map);
        var leafr = new leaf();
        this.leaf = leafr;
        this.addChild(this.leaf);
        var palyer = new Player();
        this.player = palyer;
        this.addChild(this.player);
        this.player.x = this.stageW / 2;
        this.player.y = this.map.getCanPassStone()[0].y;
        this.player.playerDirection(this.map.getCanPassStoneDis()[1]);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playerJump, this);
        this.touchEnabled = true;
        this.stoneDownTimer = new egret.Timer(3000, 1); // 控制时间，时间到，机器人就挂了
        this.stoneDownTimer.addEventListener(egret.TimerEvent.TIMER, this.timeOver, this);
    };
    GameScene.prototype.playerJump = function (e) {
        if (this.stoneDownTimer.running) {
            this.stoneDownTimer.stop();
        }
        this.canPassStoneDis = this.map.getCanPassStoneDis();
        this.canPassStone = this.map.getCanPassStone();
        var downStone = this.canPassStone[0];
        var touchX = e.stageX;
        if (touchX <= this.stageW / 2) {
            this.player.playerJump(0);
            if (this.canPassStoneDis[1] == 0) {
                this.jumpRight();
            }
            else {
                downStone.stoneDown();
                this.jumpDied();
            }
        }
        if (touchX > this.stageW / 2) {
            this.player.playerJump(1);
            if (this.canPassStoneDis[1] == 1) {
                this.jumpRight();
            }
            else {
                downStone.stoneDown();
                this.jumpDied();
            }
        }
    };
    GameScene.prototype.jumpRight = function () {
        this.map.mapMove();
        this.leaf.move();
        this.stoneDownTimer.start();
    };
    GameScene.prototype.jumpDied = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.playerJump, this);
        this.player.playerDied(0);
        // let gameOver:TipMsg = new TipMsg(this.player.scoring); 这样也可以
        var gameOver = this.player.setSore;
        this.addChild(gameOver);
    };
    GameScene.prototype.timeOver = function (e) {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.playerJump, this);
        this.stoneDownTimer.removeEventListener(egret.TimerEvent.TIMER, this.timeOver, this);
        this.canPassStone = this.map.getCanPassStone();
        var downStone = this.canPassStone[0];
        downStone.stoneDown();
        this.player.playerDied(1);
        var gameOver = this.player.setSore;
        this.addChild(gameOver);
    };
    GameScene.prototype.playAgain = function () {
        if (this.GameScene == null) {
            this.addChild(new GameScene());
        }
        // return this.GameScene;
    };
    return GameScene;
}(egret.DisplayObjectContainer));
__reflect(GameScene.prototype, "GameScene");
