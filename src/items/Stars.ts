import { ALL_STARS_COLLECTED, STAR_COLLECTED } from "../events/events";
import MainScene from "../scenes/MainScene";
import { sceneEvents } from "../events/EventsCenter";
import Hero from "../characters/Hero";

export default class Stars extends Phaser.Physics.Arcade.Group {
  constructor(scene: MainScene, number: integer) {
    super(scene.physics.world, scene, {
      collideWorldBounds: true
    });
    
    this.createMultiple({
      key: 'star',
      repeat: number,
      setXY: { x: 12, y: 0, stepX: 70 }
    });
    
    this.children.iterate(function (star: Phaser.Physics.Arcade.Image) {
      star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
    scene.physics.add.overlap(scene.player, this, this.collectStar, null, this);
  }

  collectStar(player: Hero, star: Phaser.Physics.Arcade.Sprite) {
    star.disableBody(true, true);
    player.addScore(10);
    sceneEvents.emit(STAR_COLLECTED);
    if (this.countActive(true) === 0) {
      sceneEvents.emit(ALL_STARS_COLLECTED);
    }
  }

  showAll() {
    this.children.iterate(function (star: Phaser.Physics.Arcade.Image) {
      star.enableBody(true, star.x, 0, true, true);
    });
  }

  on(eventName: string | symbol, listener: (...args: any[]) => void) {
    sceneEvents.on(eventName, listener);
    return this;
  }
}