'use strict';
import * as Phaser from 'phaser';
import Stars from '../items/Stars';
import { NUMBER_OF_STARS } from '../configs/game-configs';
import Bombs from '../items/Bombs';
import { ALL_STARS_COLLECTED, STAR_COLLECTED, BOMB_HITTED, PLAYER_RESETED } from '../events/events';
import Hero from '../characters/Hero';
import { createHeroAnims } from '../anims/heroAnims';
import Platforms from '../items/Platforms';
import ScoreText from '../components/ScoreText';

export default class MainScene extends Phaser.Scene {
  
  player: Hero;
  private stars: Stars;
  private platforms: Platforms;
  private scoreText: ScoreText;
  bombs: Bombs;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  
  constructor() {
    super({
      key: 'MainScene'
    });
  }
    
  preload() {
    this.load.image('sky', '../assets/sky.png');
    this.load.image('ground', '../assets/platform.png');
    this.load.image('star', '../assets/star.png');
    this.load.image('bomb', '../assets/bomb.png');
    this.load.spritesheet('dude',
      '../assets/dude.png',
      { frameWidth: 32, frameHeight: 48 }
    );
    this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");
  }

  create(){
    this.add.image(400, 300, 'sky');
    
    this.platforms = new Platforms(this);
    
    this.player = new Hero(this, 100, 450);
    this.player
    .on(PLAYER_RESETED, this.resumeGame);
    
    createHeroAnims(this.anims);

    this.stars = new Stars(this, NUMBER_OF_STARS);
    this.physics.add.collider(this.stars, this.platforms);
    this.stars
    .on(STAR_COLLECTED, this.collectStar) 
    .on(ALL_STARS_COLLECTED, this.nextLevel);

    this.scoreText = new ScoreText(this, 10, 5);
    
    this.bombs = new Bombs(this);
    this.physics.add.collider(this.bombs, this.platforms);
    
    this.bombs
    .on(BOMB_HITTED, this.hitBomb);
    
    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.player, this.platforms);
  }

  update() {
    this.player?.update(this.cursors);
  }

  nextLevel = () => {
    this.stars.showAll();
    this.createBomb();
  }

  collectStar = () => {
    this.scoreText.score = this.player.score;
  }

  createBomb = () => {
    var x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    this.bombs.addBomb(x, 16);
  }

  hitBomb = () => {
    this.physics.pause();
    const x = 800/2 - 100;
    const y = 600/2;
    this.player.reset(x, y);
  }

  resumeGame = () => {
    this.physics.resume();
    this.createBomb();
  }
}