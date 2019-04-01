class TipMsg extends egret.DisplayObjectContainer{
    private ThisSore:number = 0;
    public constructor(msg:number){
        super();
        this.ThisSore = msg;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.TipSomething,this);
    }
    public TipSomething(e:egret.Event) {
        // 添加提示框面板
        console.log('这是传进来的积分：'+this.ThisSore)
        let Tip:egret.Sprite = new egret.Sprite();
        let stageX = this.stage.stageWidth;
        let stageY = this.stage.stageHeight;
        Tip.graphics.beginFill(0xFCFCFC);
        Tip.width = 400;
        Tip.height = 400;
        Tip.anchorOffsetX = Tip.width/2;
        Tip.anchorOffsetY = Tip.height/2;
        Tip.alpha = 0.8;
        Tip.graphics.drawRoundRect(stageX/2,stageY/2,400,400,20);
        Tip.graphics.endFill();
        this.addChild(Tip);
        // 添加提示框面板信息
        // 头部信息
        let TipPanelHeadmsg:egret.TextField = new egret.TextField();
        TipPanelHeadmsg.text = '游 戏 结 束';
        TipPanelHeadmsg.size = 42;
        TipPanelHeadmsg.textAlign = egret.HorizontalAlign.CENTER;
        TipPanelHeadmsg.verticalAlign = egret.VerticalAlign.MIDDLE;
        TipPanelHeadmsg.bold = true;
        TipPanelHeadmsg.width = 400;
        TipPanelHeadmsg.anchorOffsetX = TipPanelHeadmsg.width/2;
        TipPanelHeadmsg.anchorOffsetY = TipPanelHeadmsg.height/2;
        TipPanelHeadmsg.x = stageX/2;
        TipPanelHeadmsg.y = stageY/2-170;
        TipPanelHeadmsg.fontFamily = "Impact";
        TipPanelHeadmsg.textColor = 0x4D4D4D;
        this.addChild(TipPanelHeadmsg);
        // 底部积分信息
        let TipPanelBottommsg:egret.TextField = new egret.TextField();
        TipPanelBottommsg.text = '- 当 前 得 分 -';
        TipPanelBottommsg.size = 36;
        TipPanelBottommsg.textAlign = egret.HorizontalAlign.CENTER;
        TipPanelBottommsg.verticalAlign = egret.VerticalAlign.MIDDLE;
        TipPanelBottommsg.bold = true;
        TipPanelBottommsg.width = 400;
        TipPanelBottommsg.anchorOffsetX = TipPanelBottommsg.width/2;
        TipPanelBottommsg.anchorOffsetY = TipPanelBottommsg.height/2;
        TipPanelBottommsg.x = stageX/2;
        TipPanelBottommsg.y = stageY/2-90;
        TipPanelBottommsg.fontFamily = "Impact";
        TipPanelBottommsg.textColor = 0x4D4D4D;
        this.addChild(TipPanelBottommsg);
        // 多少积分
        let TipPanelNum:egret.TextField = new egret.TextField();
        let youselfSore = this.ThisSore;
        TipPanelNum.text = `${youselfSore}分`;
        TipPanelNum.size = 47;
        TipPanelNum.textAlign = egret.HorizontalAlign.CENTER;
        TipPanelNum.verticalAlign = egret.VerticalAlign.MIDDLE;
        TipPanelNum.bold = true;
        TipPanelNum.width = 400;
        TipPanelNum.anchorOffsetX = TipPanelNum.width/2;
        TipPanelNum.anchorOffsetY = TipPanelNum.height/2;
        TipPanelNum.x = stageX/2;
        TipPanelNum.y = stageY/2;
        TipPanelNum.fontFamily = "微软雅黑";
        TipPanelNum.textColor = 0x4D4D4D;
        this.addChild(TipPanelNum);
        // 重新开始
        let agin:egret.TextField = new egret.TextField();
        agin.text = `重新开始`;
        agin.size = 40;
        agin.textAlign = egret.HorizontalAlign.CENTER;
        agin.verticalAlign = egret.VerticalAlign.MIDDLE;
        agin.bold = true;
        agin.width = 400;
        agin.anchorOffsetX = TipPanelNum.width/2+90;
        agin.anchorOffsetY = TipPanelNum.height/2-110;
        agin.x = stageX/2;
        agin.y = stageY/2;
        agin.fontFamily = "微软雅黑";
        agin.textColor = 0x4D4D4D;
        this.addChild(agin);
        agin.touchEnabled = true;
        agin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchAgin, this );
        // 分享
        let share:egret.TextField = new egret.TextField();
        share.text = `分享`;
        share.size = 40;
        share.textAlign = egret.HorizontalAlign.CENTER;
        share.verticalAlign = egret.VerticalAlign.MIDDLE;
        share.bold = true;
        share.width = 400;
        share.anchorOffsetX = TipPanelNum.width/2-130;
        share.anchorOffsetY = TipPanelNum.height/2-110;
        share.x = stageX/2;
        share.y = stageY/2;
        share.fontFamily = "微软雅黑";
        share.textColor = 0x4D4D4D;
        this.addChild(share);
    }
    private touchAgin(e:egret.Event){
        let again:GameScene = new GameScene();
        // location.reload();// 刷新页面重新开始
        if(this.parent){ // 如果父级容器存在，则移除子级游戏
            this.parent.removeChild(this);
            GameScene._instance().playAgain();
            // again.onAddToStage();
        }
    }
}