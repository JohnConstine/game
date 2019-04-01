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
// 游戏进来页面--有开始游戏---选择角色
var HomeGame = (function (_super) {
    __extends(HomeGame, _super);
    function HomeGame() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    HomeGame._install = function () {
        if (!this.install) {
            this.install = new HomeGame();
        }
        return this.install;
    };
    HomeGame.prototype.onAddToStage = function (e) {
        // 舞台
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.shp = new egret.Bitmap();
        this.shp.texture = RES.getRes('sha_jpg');
        this.shp.scaleX = 0.7;
        this.shp.scaleY = 0.7;
        this.shp.alpha = 0.5;
        this.addChild(this.shp);
    };
    return HomeGame;
}(egret.DisplayObjectContainer));
__reflect(HomeGame.prototype, "HomeGame");
