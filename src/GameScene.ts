class GameScene extends egret.DisplayObjectContainer {
	// 所有人物以及逻辑入口容器---在这里汇总
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}
	public  GameScene:GameScene;
	private stageW: number;
	private stageH: number;
	private player: Player;
	private leaf: leaf;
	private map: StoneMap;
	private canPassStoneDis: number[];
	private canPassStone: Stone[];
	private stoneDownTimer: egret.Timer;
	public static instance:GameScene;

	public static _instance(){ // 声明单例类--方便调用唯一
		if(!this.instance){
			this.instance = new GameScene();
		}
		return this.instance;
	}

	private onAddToStage() {

		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

		this.stageW = this.stage.stageWidth;
		this.stageH = this.stage.stageHeight;
		
		let bgr: bg = new bg(); // 引入游戏背景
		this.addChild(bgr); //添加游戏背景

		let mapr: StoneMap = new StoneMap();
		this.map = mapr;
		this.addChild(this.map);

		let leafr: leaf = new leaf();
		this.leaf = leafr;
		this.addChild(this.leaf);

		let palyer: Player = new Player();
		this.player = palyer;
		this.addChild(this.player);
		
		this.player.x = this.stageW / 2;
		this.player.y = this.map.getCanPassStone()[0].y;
		this.player.playerDirection(this.map.getCanPassStoneDis()[1]);

		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playerJump, this);
		this.touchEnabled = true;

		this.stoneDownTimer = new egret.Timer(3000, 1); // 控制时间，时间到，机器人就挂了
		this.stoneDownTimer.addEventListener(egret.TimerEvent.TIMER, this.timeOver, this);
	}

	private playerJump(e: egret.TouchEvent) {
		if (this.stoneDownTimer.running) {
			this.stoneDownTimer.stop();
		}
		this.canPassStoneDis = this.map.getCanPassStoneDis();
		this.canPassStone = this.map.getCanPassStone();
		let downStone: Stone = this.canPassStone[0];
		let touchX: number = e.stageX;

		if (touchX <= this.stageW / 2) {
			this.player.playerJump(0);
			if (this.canPassStoneDis[1] == 0) {
				this.jumpRight();
			} else {
				downStone.stoneDown();
				this.jumpDied();
			}
		}
		if (touchX > this.stageW / 2) {
			this.player.playerJump(1);
			if (this.canPassStoneDis[1] == 1) {
				this.jumpRight();
			} else {
				downStone.stoneDown();
				this.jumpDied();
			}
		}
	}

	private jumpRight(){
		this.map.mapMove();
		this.leaf.move();
		this.stoneDownTimer.start();
	}

	private jumpDied() {
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.playerJump, this);
		this.player.playerDied(0);
		// let gameOver:TipMsg = new TipMsg(this.player.scoring); 这样也可以
		let gameOver = this.player.setSore;
		this.addChild(gameOver);
	}

	private timeOver(e: egret.TimerEvent) {
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.playerJump, this);
		this.stoneDownTimer.removeEventListener(egret.TimerEvent.TIMER, this.timeOver, this);
		this.canPassStone = this.map.getCanPassStone();
		let downStone: Stone = this.canPassStone[0];
		downStone.stoneDown();
		this.player.playerDied(1);
		let gameOver = this.player.setSore;
		this.addChild(gameOver);
	}
	public playAgain(){
		if (this.GameScene == null) {
			this.addChild(new GameScene());
		}
		// return this.GameScene;
	}
}