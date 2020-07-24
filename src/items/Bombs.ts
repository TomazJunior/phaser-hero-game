import { BOMB_HITTED } from "../events/events";
import MainScene from "../scenes/MainScene";
import { sceneEvents } from "../events/EventsCenter";

export default class Bombs extends Phaser.Physics.Arcade.Group {
  constructor(scene: MainScene) {
    super(scene.physics.world, scene, {
      collideWorldBounds: true
    });
    scene.physics.add.collider(scene.player, this, this.hitBomb, null, this);
  }

  addBomb(x, y) {
    const bomb = this.create(x, y, "bomb");
    bomb.setBounce(1,1)
      .setCollideWorldBounds(true)
      .setVelocity(Phaser.Math.Between(-200, 200), 20);
  }

  on(eventName: string | symbol, listener: (...args: any[]) => void) {
    sceneEvents.on(eventName, listener);
    return this;
  }

  private hitBomb(player: Phaser.Physics.Arcade.Sprite, bomb: Phaser.Physics.Arcade.Sprite) {
    //TODO: make explosion here
    this.destroyAll();
    sceneEvents.emit(BOMB_HITTED);
  }

  private destroyAll() {
    this.children.each(bomb => bomb.destroy());
  }

}