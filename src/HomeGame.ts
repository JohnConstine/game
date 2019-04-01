// 游戏进来页面--有开始游戏---选择角色
class HomeGame extends egret.DisplayObjectContainer {
    private shp:egret.Bitmap;
    private stageW;
    private stageH;
    public static install:HomeGame;// 单列
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    public static _install():HomeGame{ // 单列
        if (!this.install) {
            this.install = new HomeGame();
        }
        return this.install;
    }
    private onAddToStage(e:egret.Event) {
        // 舞台
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.shp = new egret.Bitmap();
        this.shp.texture = RES.getRes('sha_jpg');
        this.shp.scaleX = 0.7;
        this.shp.scaleY = 0.7;
        this.shp.alpha = 0.5;
        this.addChild(this.shp);
    }
}