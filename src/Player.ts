class Player extends egret.Sprite {
	public setSore; //获取带积分的面板提示框
	public bgr:bg; // 获取背景类
	public constructor() {
		super();
		this.getPlayerAnimation();
	}

	private playerWalkAnimation: egret.MovieClip;
	public scoring:number = 0; // 初始化积分
	private getPlayerAnimation() {
		// 引入资源---角色 (四个角色：猫,猴子,恐龙,运动员)
		
		let mcDataFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("cat_json"), RES.getRes("cat_png"));
		let mc: egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("cat"));
		// let mcDataFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("dinosaur_json"), RES.getRes("dinosaur_png"));
		// let mc: egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("dinosaur"));
		// let mcDataFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("footballer_json"), RES.getRes("footballer_png"));
		// let mc: egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("footballer"));
		// let mcDataFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("monkey_json"), RES.getRes("monkey_png"));
		// let mc: egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("monkey"));
		// 判断选择的角色是什么
		// 0是猫 1是猴子 2是恐龙 3是运动员
		
		mc.anchorOffsetX = mc.width / 2;
		mc.anchorOffsetY = mc.height-30;
		this.playerWalkAnimation = mc;
		this.addChild(this.playerWalkAnimation);

	}

	//角色 0:往左跳，1：往右跳
	public playerJump(direction: number) {
		let playerJump: egret.MovieClip = this.playerWalkAnimation;
		let lastDirection: number;
		if (lastDirection == direction) {
			playerJump.play(2);
		} else {
			if (direction == 0) {
				this.scoring++;
				playerJump.scaleX = -1;
			} else {
				this.scoring++;
				playerJump.scaleX = 1;
			}
			playerJump.play(2);
		}
		lastDirection = direction;
	}

	//角色 0:面向左，1：面向右
	public playerDirection(direction: number){
		if(direction == 0){
			this.playerWalkAnimation.scaleX = -1;
		}else if(direction == 1){
			this.playerWalkAnimation.scaleX = 1;
		}
	}

	//角色 0:跳错 1:时间到
	public playerDied(diedNum:number){
		if(diedNum == 0){
			this.scoring--;
			this.playerWalkAnimation.addEventListener(egret.Event.COMPLETE,this.playOver,this);
		}else if(diedNum == 1){
			this.playOver();
		}
		this.setSore= new TipMsg(this.scoring);
	}

	private playOver(){
		this.playerWalkAnimation.removeEventListener(egret.Event.COMPLETE,this.playOver,this);
		egret.Tween.get(this).to({y:this.y + 300},1400).call(function(){ // 我是用tween动画移除角色,可以掉下去控制速度
				this.parent.removeChild(this);});
	}
}