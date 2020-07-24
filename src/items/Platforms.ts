import MainScene from "../scenes/MainScene";

export default class Platforms extends Phaser.Physics.Arcade.StaticGroup {
  constructor(scene: MainScene) {
    super(scene.physics.world, scene);
    this.create(400, 568, 'ground').setScale(2).refreshBody();
    this.create(600, 400, 'ground');
    this.create(50, 250, 'ground');
    this.create(750, 220, 'ground');
  }
}
