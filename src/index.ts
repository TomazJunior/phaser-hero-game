'use strict';
import * as Phaser from 'phaser';

//Resolves to node_modules
import MainScene from './scenes/MainScene';

// import TitleScene from './TitleScene';
// import LevelsScene from './OverWorldScene';

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [
    MainScene
  ]
};

new Phaser.Game(config);