class bg extends egret.DisplayObjectContainer{
	// 游戏背景
	private bg:egret.Shape;
	private gameHard:number; // 获取游戏难度
	public static instance:bg; //单列
	public constructor() {
		super();
		// this.gameHard = num;
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}
	public static _instance(){ // 声明单例类--方便调用唯一
		if(!this.instance){
			this.instance = new bg();
		}
		return this.instance;
	}
	private stageW:number;
	private stageH:number;
	public getHard(num:number){
		this.gameHard = num;
		console.log(this.gameHard)
	}
	private onAddToStage(){
		let colorData = [0x001605,0x474747,0x636363,0xEE82EE,0x7171C6,0x7B68EE,0xCD8162,0xF4F4F4,0xFFE4C4,0xFFF8DC,0x545454];// 获取随机颜色组
		this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
		
		this.stageW = this.stage.stageWidth;
		this.stageH = this.stage.stageHeight;
		
		this.bg = new egret.Shape();
		// if (this.gameHard === 2) {
		// 	this.bg.graphics.beginFill(0x636363);
		// } else{
		// 	this.bg.graphics.beginFill(0x001605);
		// }
		this.bg.graphics.beginFill(0x001605); // 0x001605  colorData[Math.floor(Math.random()*colorData.length)]
		this.bg.graphics.drawRect(0,0,this.stageW,this.stageH);
		this.bg.graphics.endFill();
		this.addChild(this.bg);
	}
}