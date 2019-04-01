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
var TipMsg = (function (_super) {
    __extends(TipMsg, _super);
    function TipMsg(msg) {
        var _this = _super.call(this) || this;
        _this.ThisSore = 0;
        _this.ThisSore = msg;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.TipSomething, _this);
        return _this;
    }
    TipMsg.prototype.TipSomething = function (e) {
        // 添加提示框面板
        console.log('这是传进来的积分：' + this.ThisSore);
        var Tip = new egret.Sprite();
        var stageX = this.stage.stageWidth;
        var stageY = this.stage.stageHeight;
        Tip.graphics.beginFill(0xFCFCFC);
        Tip.width = 400;
        Tip.height = 400;
        Tip.anchorOffsetX = Tip.width / 2;
        Tip.anchorOffsetY = Tip.height / 2;
        Tip.alpha = 0.8;
        Tip.graphics.drawRoundRect(stageX / 2, stageY / 2, 400, 400, 20);
        Tip.graphics.endFill();
        this.addChild(Tip);
        // 添加提示框面板信息
        // 头部信息
        var TipPanelHeadmsg = new egret.TextField();
        TipPanelHeadmsg.text = '游 戏 结 束';
        TipPanelHeadmsg.size = 42;
        TipPanelHeadmsg.textAlign = egret.HorizontalAlign.CENTER;
        TipPanelHeadmsg.verticalAlign = egret.VerticalAlign.MIDDLE;
        TipPanelHeadmsg.bold = true;
        TipPanelHeadmsg.width = 400;
        TipPanelHeadmsg.anchorOffsetX = TipPanelHeadmsg.width / 2;
        TipPanelHeadmsg.anchorOffsetY = TipPanelHeadmsg.height / 2;
        TipPanelHeadmsg.x = stageX / 2;
        TipPanelHeadmsg.y = stageY / 2 - 170;
        TipPanelHeadmsg.fontFamily = "Impact";
        TipPanelHeadmsg.textColor = 0x4D4D4D;
        this.addChild(TipPanelHeadmsg);
        // 底部积分信息
        var TipPanelBottommsg = new egret.TextField();
        TipPanelBottommsg.text = '- 当 前 得 分 -';
        TipPanelBottommsg.size = 36;
        TipPanelBottommsg.textAlign = egret.HorizontalAlign.CENTER;
        TipPanelBottommsg.verticalAlign = egret.VerticalAlign.MIDDLE;
        TipPanelBottommsg.bold = true;
        TipPanelBottommsg.width = 400;
        TipPanelBottommsg.anchorOffsetX = TipPanelBottommsg.width / 2;
        TipPanelBottommsg.anchorOffsetY = TipPanelBottommsg.height / 2;
        TipPanelBottommsg.x = stageX / 2;
        TipPanelBottommsg.y = stageY / 2 - 90;
        TipPanelBottommsg.fontFamily = "Impact";
        TipPanelBottommsg.textColor = 0x4D4D4D;
        this.addChild(TipPanelBottommsg);
        // 多少积分
        var TipPanelNum = new egret.TextField();
        var youselfSore = this.ThisSore;
        TipPanelNum.text = youselfSore + "\u5206";
        TipPanelNum.size = 47;
        TipPanelNum.textAlign = egret.HorizontalAlign.CENTER;
        TipPanelNum.verticalAlign = egret.VerticalAlign.MIDDLE;
        TipPanelNum.bold = true;
        TipPanelNum.width = 400;
        TipPanelNum.anchorOffsetX = TipPanelNum.width / 2;
        TipPanelNum.anchorOffsetY = TipPanelNum.height / 2;
        TipPanelNum.x = stageX / 2;
        TipPanelNum.y = stageY / 2;
        TipPanelNum.fontFamily = "微软雅黑";
        TipPanelNum.textColor = 0x4D4D4D;
        this.addChild(TipPanelNum);
        // 重新开始
        var agin = new egret.TextField();
        agin.text = "\u91CD\u65B0\u5F00\u59CB";
        agin.size = 40;
        agin.textAlign = egret.HorizontalAlign.CENTER;
        agin.verticalAlign = egret.VerticalAlign.MIDDLE;
        agin.bold = true;
        agin.width = 400;
        agin.anchorOffsetX = TipPanelNum.width / 2 + 90;
        agin.anchorOffsetY = TipPanelNum.height / 2 - 110;
        agin.x = stageX / 2;
        agin.y = stageY / 2;
        agin.fontFamily = "微软雅黑";
        agin.textColor = 0x4D4D4D;
        this.addChild(agin);
        agin.touchEnabled = true;
        agin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchAgin, this);
        // 分享
        var share = new egret.TextField();
        share.text = "\u5206\u4EAB";
        share.size = 40;
        share.textAlign = egret.HorizontalAlign.CENTER;
        share.verticalAlign = egret.VerticalAlign.MIDDLE;
        share.bold = true;
        share.width = 400;
        share.anchorOffsetX = TipPanelNum.width / 2 - 130;
        share.anchorOffsetY = TipPanelNum.height / 2 - 110;
        share.x = stageX / 2;
        share.y = stageY / 2;
        share.fontFamily = "微软雅黑";
        share.textColor = 0x4D4D4D;
        this.addChild(share);
    };
    TipMsg.prototype.touchAgin = function (e) {
        var again = new GameScene();
        // location.reload();// 刷新页面重新开始
        if (this.parent) {
            this.parent.removeChild(this);
            GameScene._instance().playAgain();
            // again.onAddToStage();
        }
    };
    return TipMsg;
}(egret.DisplayObjectContainer));
__reflect(TipMsg.prototype, "TipMsg");
