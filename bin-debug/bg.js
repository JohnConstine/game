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
var bg = (function (_super) {
    __extends(bg, _super);
    function bg() {
        var _this = _super.call(this) || this;
        // this.gameHard = num;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    bg._instance = function () {
        if (!this.instance) {
            this.instance = new bg();
        }
        return this.instance;
    };
    bg.prototype.getHard = function (num) {
        this.gameHard = num;
        console.log(this.gameHard);
    };
    bg.prototype.onAddToStage = function () {
        var colorData = [0x001605, 0x474747, 0x636363, 0xEE82EE, 0x7171C6, 0x7B68EE, 0xCD8162, 0xF4F4F4, 0xFFE4C4, 0xFFF8DC, 0x545454]; // 获取随机颜色组
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.bg = new egret.Shape();
        // if (this.gameHard === 2) {
        // 	this.bg.graphics.beginFill(0x636363);
        // } else{
        // 	this.bg.graphics.beginFill(0x001605);
        // }
        this.bg.graphics.beginFill(0x001605); // 0x001605  colorData[Math.floor(Math.random()*colorData.length)]
        this.bg.graphics.drawRect(0, 0, this.stageW, this.stageH);
        this.bg.graphics.endFill();
        this.addChild(this.bg);
    };
    return bg;
}(egret.DisplayObjectContainer));
__reflect(bg.prototype, "bg");
