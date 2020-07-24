import { sceneEvents } from "../events/EventsCenter";
import { PLAYER_RESETED } from "../events/events";

export default class Hero extends Phaser.Physics.Arcade.Sprite {
  score: number;
    
  constructor(scene: Phaser.Scene, x: number, y: number)
	{
    super(scene, x, y, 'dude');
    
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
    this.score = 0;
  }
  
  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
		if (cursors.left.isDown)
    {
      this.setVelocityX(-160);
      this.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
      this.setVelocityX(160);
      this.anims.play('right', true);
    }
    else
    {
      this.setVelocityX(0);
      this.anims.play('turn');
    }

    if (cursors.up.isDown && this.body.touching.down)
    {
      this.setVelocityY(-330);
    }
  }
  
  reset(x, y) {
    this.setTint(0xff0000);
    this.anims.play('turn');
    this.alpha = 0.5;
    
    this.scene.tweens.add({
      targets: this,
      y: -100,
      ease: 'Power1',
      duration: 1500,
      repeat:0,
      onComplete: () => {
        this.scene.time.addEvent({
          delay: 1000,
          callback: () => { this.resetPlayer(x, y); },
          callbackScope: this,
          loop: false
        });
      },
      callbackScope: this
    }); 
  }

  addScore = (value) => {
    this.score += value;
  }

  getScoreFormated = () => this.score.toString().padStart(6, '0');

  on(eventName: string | symbol, listener: (...args: any[]) => void) {
    sceneEvents.on(eventName, listener);
    return this;
  }

  private resetPlayer(x: integer, y: integer) {
    this.alpha = 1;
    this.clearTint();
    this.enableBody(true, x, y, true, true);
    sceneEvents.emit(PLAYER_RESETED);
  }
}