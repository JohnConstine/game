class Stone extends egret.Sprite {
	// 石头以及带障碍物的石头都在这里
	public constructor(bmpNum: number) {
		super();
		this.createBmp(bmpNum);
	}

	private spSheet: egret.SpriteSheet = new egret.SpriteSheet(RES.getRes("spritestairs_png"));
	private stoneBmp: egret.Bitmap; //0:stone 1:wood 2:bomb 3:ice 4:mushroom
	private otherBmp: egret.Bitmap;

	private createBmp(bmpNum: number) {
		let stoneTex: egret.Texture;
		let otherTex: egret.Texture;
		stoneTex = this.spSheet.createTexture("stone", 0, 0, 150, 126);
		// 使用SpriteSheet 是一张由多个子位图拼接而成的集合位图，它包含多个 Texture 对象。截取指定纹理做成图片
		if (bmpNum == 1) {
			otherTex = this.spSheet.createTexture("wood", 0, 126, 170, 180);
		}
		if (bmpNum == 2) {
			otherTex = this.spSheet.createTexture("bomb", 170, 126, 170, 180);
		}
		if (bmpNum == 3) {
			otherTex = this.spSheet.createTexture("ice", 340, 126, 170, 180);
		}
		if (bmpNum == 4) {
			otherTex = this.spSheet.createTexture("mushroom", 510, 126, 170, 180);
		}

		this.stoneBmp = new egret.Bitmap(stoneTex);
		this.addChild(this.stoneBmp);
		this.name = "0";

		if(otherTex){
			this.otherBmp = new egret.Bitmap(otherTex);
			this.addChild(this.otherBmp);	
			this.anchorOffsetX = 0;
			this.anchorOffsetY = this.stoneBmp.y;
			this.otherBmp.y -= 60;
			this.name = bmpNum.toString();
		}
	}

	public stoneDown() {
		egret.Tween.get(this).to({ y: this.y + 300 }, 300).call(function () {
			if(this.parent){
				StonePool.addObjectPool(this);
				this.parent.removeChild(this);
			}
		}, this);
	}

}