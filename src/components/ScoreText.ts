export default class ScoreText extends Phaser.GameObjects.BitmapText {
  private _score: integer;
  
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "pixelFont", "", 20);
    scene.add.existing(this);
    this.score = 0;
  }

  public set score(v : integer) {
    this._score = v;
    this.setScoreFormated();
  }
  
  private setScoreFormated() {
    
    this.text = "SCORE " + this._score.toString().padStart(6, '0');
  }
}