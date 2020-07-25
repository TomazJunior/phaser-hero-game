/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/anims/heroAnims.ts":
/*!********************************!*\
  !*** ./src/anims/heroAnims.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeroAnims = void 0;
var createHeroAnims = function (anims) {
    anims.create({
        key: 'left',
        frames: anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20
    });
    anims.create({
        key: 'right',
        frames: anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
};
exports.createHeroAnims = createHeroAnims;


/***/ }),

/***/ "./src/characters/Hero.ts":
/*!********************************!*\
  !*** ./src/characters/Hero.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventsCenter_1 = __webpack_require__(/*! ../events/EventsCenter */ "./src/events/EventsCenter.ts");
var events_1 = __webpack_require__(/*! ../events/events */ "./src/events/events.ts");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(scene, x, y) {
        var _this = _super.call(this, scene, x, y, 'dude') || this;
        _this.addScore = function (value) {
            _this.score += value;
        };
        _this.getScoreFormated = function () { return _this.score.toString().padStart(6, '0'); };
        scene.add.existing(_this);
        scene.physics.add.existing(_this);
        _this.setBounce(0.2);
        _this.setCollideWorldBounds(true);
        _this.score = 0;
        return _this;
    }
    Hero.prototype.update = function (cursors) {
        if (cursors.left.isDown) {
            this.setVelocityX(-160);
            this.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            this.setVelocityX(160);
            this.anims.play('right', true);
        }
        else {
            this.setVelocityX(0);
            this.anims.play('turn');
        }
        if (cursors.up.isDown && this.body.touching.down) {
            this.setVelocityY(-330);
        }
    };
    Hero.prototype.reset = function (x, y) {
        var _this = this;
        this.setTint(0xff0000);
        this.anims.play('turn');
        this.alpha = 0.5;
        this.scene.tweens.add({
            targets: this,
            y: -100,
            ease: 'Power1',
            duration: 1500,
            repeat: 0,
            onComplete: function () {
                _this.scene.time.addEvent({
                    delay: 1000,
                    callback: function () { _this.resetPlayer(x, y); },
                    callbackScope: _this,
                    loop: false
                });
            },
            callbackScope: this
        });
    };
    Hero.prototype.on = function (eventName, listener) {
        EventsCenter_1.sceneEvents.on(eventName, listener);
        return this;
    };
    Hero.prototype.resetPlayer = function (x, y) {
        this.alpha = 1;
        this.clearTint();
        this.enableBody(true, x, y, true, true);
        EventsCenter_1.sceneEvents.emit(events_1.PLAYER_RESETED);
    };
    return Hero;
}(Phaser.Physics.Arcade.Sprite));
exports.default = Hero;


/***/ }),

/***/ "./src/components/ScoreText.ts":
/*!*************************************!*\
  !*** ./src/components/ScoreText.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ScoreText = /** @class */ (function (_super) {
    __extends(ScoreText, _super);
    function ScoreText(scene, x, y) {
        var _this = _super.call(this, scene, x, y, "pixelFont", "", 16) || this;
        scene.add.existing(_this);
        _this.score = 0;
        return _this;
    }
    Object.defineProperty(ScoreText.prototype, "score", {
        set: function (v) {
            this._score = v;
            this.setScoreFormated();
        },
        enumerable: false,
        configurable: true
    });
    ScoreText.prototype.setScoreFormated = function () {
        this.text = "SCORE " + this._score.toString().padStart(6, '0');
    };
    return ScoreText;
}(Phaser.GameObjects.BitmapText));
exports.default = ScoreText;


/***/ }),

/***/ "./src/configs/game-configs.ts":
/*!*************************************!*\
  !*** ./src/configs/game-configs.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NUMBER_OF_STARS = void 0;
exports.NUMBER_OF_STARS = 8;


/***/ }),

/***/ "./src/events/EventsCenter.ts":
/*!************************************!*\
  !*** ./src/events/EventsCenter.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sceneEvents = void 0;
var sceneEvents = new Phaser.Events.EventEmitter();
exports.sceneEvents = sceneEvents;


/***/ }),

/***/ "./src/events/events.ts":
/*!******************************!*\
  !*** ./src/events/events.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PLAYER_RESETED = exports.BOMB_HITTED = exports.STAR_COLLECTED = exports.ALL_STARS_COLLECTED = void 0;
exports.ALL_STARS_COLLECTED = 'ALL_STARS_COLLECTED';
exports.STAR_COLLECTED = 'STAR_COLLECTED';
exports.BOMB_HITTED = 'BOMB_HITTED';
exports.PLAYER_RESETED = 'PLAYER_RESETED';


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
//Resolves to node_modules
var MainScene_1 = __webpack_require__(/*! ./scenes/MainScene */ "./src/scenes/MainScene.ts");
// import TitleScene from './TitleScene';
// import LevelsScene from './OverWorldScene';
var config = {
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
        MainScene_1.default
    ]
};
new Phaser.Game(config);


/***/ }),

/***/ "./src/items/Bombs.ts":
/*!****************************!*\
  !*** ./src/items/Bombs.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! ../events/events */ "./src/events/events.ts");
var EventsCenter_1 = __webpack_require__(/*! ../events/EventsCenter */ "./src/events/EventsCenter.ts");
var Bombs = /** @class */ (function (_super) {
    __extends(Bombs, _super);
    function Bombs(scene) {
        var _this = _super.call(this, scene.physics.world, scene, {
            collideWorldBounds: true
        }) || this;
        scene.physics.add.collider(scene.player, _this, _this.hitBomb, null, _this);
        return _this;
    }
    Bombs.prototype.addBomb = function (x, y) {
        var bomb = this.create(x, y, "bomb");
        bomb.setBounce(1, 1)
            .setCollideWorldBounds(true)
            .setVelocity(Phaser.Math.Between(-200, 200), 20);
    };
    Bombs.prototype.on = function (eventName, listener) {
        EventsCenter_1.sceneEvents.on(eventName, listener);
        return this;
    };
    Bombs.prototype.hitBomb = function (player, bomb) {
        //TODO: make explosion here
        this.destroyAll();
        EventsCenter_1.sceneEvents.emit(events_1.BOMB_HITTED);
    };
    Bombs.prototype.destroyAll = function () {
        this.children.each(function (bomb) { return bomb.destroy(); });
    };
    return Bombs;
}(Phaser.Physics.Arcade.Group));
exports.default = Bombs;


/***/ }),

/***/ "./src/items/Platforms.ts":
/*!********************************!*\
  !*** ./src/items/Platforms.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Platforms = /** @class */ (function (_super) {
    __extends(Platforms, _super);
    function Platforms(scene) {
        var _this = _super.call(this, scene.physics.world, scene) || this;
        _this.create(400, 568, 'ground').setScale(2).refreshBody();
        _this.create(600, 400, 'ground');
        _this.create(50, 250, 'ground');
        _this.create(750, 220, 'ground');
        return _this;
    }
    return Platforms;
}(Phaser.Physics.Arcade.StaticGroup));
exports.default = Platforms;


/***/ }),

/***/ "./src/items/Stars.ts":
/*!****************************!*\
  !*** ./src/items/Stars.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! ../events/events */ "./src/events/events.ts");
var EventsCenter_1 = __webpack_require__(/*! ../events/EventsCenter */ "./src/events/EventsCenter.ts");
var Stars = /** @class */ (function (_super) {
    __extends(Stars, _super);
    function Stars(scene, number) {
        var _this = _super.call(this, scene.physics.world, scene, {
            collideWorldBounds: true
        }) || this;
        _this.createMultiple({
            key: 'star',
            repeat: number,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        _this.children.iterate(function (star) {
            star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
        scene.physics.add.overlap(scene.player, _this, _this.collectStar, null, _this);
        return _this;
    }
    Stars.prototype.collectStar = function (player, star) {
        star.disableBody(true, true);
        player.addScore(10);
        EventsCenter_1.sceneEvents.emit(events_1.STAR_COLLECTED);
        if (this.countActive(true) === 0) {
            EventsCenter_1.sceneEvents.emit(events_1.ALL_STARS_COLLECTED);
        }
    };
    Stars.prototype.showAll = function () {
        this.children.iterate(function (star) {
            star.enableBody(true, star.x, 0, true, true);
        });
    };
    Stars.prototype.on = function (eventName, listener) {
        EventsCenter_1.sceneEvents.on(eventName, listener);
        return this;
    };
    return Stars;
}(Phaser.Physics.Arcade.Group));
exports.default = Stars;


/***/ }),

/***/ "./src/scenes/MainScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/MainScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var Stars_1 = __webpack_require__(/*! ../items/Stars */ "./src/items/Stars.ts");
var game_configs_1 = __webpack_require__(/*! ../configs/game-configs */ "./src/configs/game-configs.ts");
var Bombs_1 = __webpack_require__(/*! ../items/Bombs */ "./src/items/Bombs.ts");
var events_1 = __webpack_require__(/*! ../events/events */ "./src/events/events.ts");
var Hero_1 = __webpack_require__(/*! ../characters/Hero */ "./src/characters/Hero.ts");
var heroAnims_1 = __webpack_require__(/*! ../anims/heroAnims */ "./src/anims/heroAnims.ts");
var Platforms_1 = __webpack_require__(/*! ../items/Platforms */ "./src/items/Platforms.ts");
var ScoreText_1 = __webpack_require__(/*! ../components/ScoreText */ "./src/components/ScoreText.ts");
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this, {
            key: 'MainScene'
        }) || this;
        _this.nextLevel = function () {
            _this.stars.showAll();
            _this.createBomb();
        };
        _this.collectStar = function () {
            _this.scoreText.score = _this.player.score;
        };
        _this.createBomb = function () {
            var x = (_this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
            _this.bombs.addBomb(x, 16);
        };
        _this.hitBomb = function () {
            _this.physics.pause();
            var x = 800 / 2 - 100;
            var y = 600 / 2;
            _this.player.reset(x, y);
        };
        _this.resumeGame = function () {
            _this.physics.resume();
            _this.createBomb();
        };
        return _this;
    }
    MainScene.prototype.preload = function () {
        this.load.image('sky', './assets/sky.png');
        this.load.image('ground', './assets/platform.png');
        this.load.image('star', './assets/star.png');
        this.load.image('bomb', './assets/bomb.png');
        this.load.spritesheet('dude', './assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.bitmapFont("pixelFont", "./assets/font/font.png", "./assets/font/font.xml");
    };
    MainScene.prototype.create = function () {
        this.add.image(400, 300, 'sky');
        this.platforms = new Platforms_1.default(this);
        this.player = new Hero_1.default(this, 100, 450);
        this.player
            .on(events_1.PLAYER_RESETED, this.resumeGame);
        heroAnims_1.createHeroAnims(this.anims);
        this.stars = new Stars_1.default(this, game_configs_1.NUMBER_OF_STARS);
        this.physics.add.collider(this.stars, this.platforms);
        this.stars
            .on(events_1.STAR_COLLECTED, this.collectStar)
            .on(events_1.ALL_STARS_COLLECTED, this.nextLevel);
        this.scoreText = new ScoreText_1.default(this, 10, 5);
        this.bombs = new Bombs_1.default(this);
        this.physics.add.collider(this.bombs, this.platforms);
        this.bombs
            .on(events_1.BOMB_HITTED, this.hitBomb);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.platforms);
    };
    MainScene.prototype.update = function () {
        var _a;
        (_a = this.player) === null || _a === void 0 ? void 0 : _a.update(this.cursors);
    };
    return MainScene;
}(Phaser.Scene));
exports.default = MainScene;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1zL2hlcm9Bbmltcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy9IZXJvLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Njb3JlVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy9nYW1lLWNvbmZpZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9FdmVudHNDZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pdGVtcy9Cb21icy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlbXMvUGxhdGZvcm1zLnRzIiwid2VicGFjazovLy8uL3NyYy9pdGVtcy9TdGFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL01haW5TY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKQSxJQUFNLGVBQWUsR0FBRyxVQUFDLEtBQXlDO0lBQ2pFLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDVixHQUFHLEVBQUUsTUFBTTtRQUNYLE1BQU0sRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDaEUsU0FBUyxFQUFFLEVBQUU7UUFDYixNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNYLEdBQUcsRUFBRSxNQUFNO1FBQ1gsTUFBTSxFQUFFLENBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBRTtRQUNyQyxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDWCxHQUFHLEVBQUUsT0FBTztRQUNaLE1BQU0sRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDaEUsU0FBUyxFQUFFLEVBQUU7UUFDYixNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ1gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUdBLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJoQix1R0FBcUQ7QUFDckQscUZBQWtEO0FBRWxEO0lBQWtDLHdCQUE0QjtJQUc1RCxjQUFZLEtBQW1CLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFBckQsWUFFRSxrQkFBTSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsU0FPM0I7UUFnREQsY0FBUSxHQUFHLFVBQUMsS0FBSztZQUNmLEtBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxzQkFBZ0IsR0FBRyxjQUFNLFlBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQztRQXpEOUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUNqQixDQUFDO0lBRUQscUJBQU0sR0FBTixVQUFPLE9BQStDO1FBQ3RELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ3JCO1lBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMvQjthQUNJLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQzdCO1lBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFFRDtZQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFDaEQ7WUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsb0JBQUssR0FBTCxVQUFNLENBQUMsRUFBRSxDQUFDO1FBQVYsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ3BCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsQ0FBQyxFQUFFLENBQUMsR0FBRztZQUNQLElBQUksRUFBRSxRQUFRO1lBQ2QsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUMsQ0FBQztZQUNSLFVBQVUsRUFBRTtnQkFDVixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ3ZCLEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRSxjQUFRLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsYUFBYSxFQUFFLEtBQUk7b0JBQ25CLElBQUksRUFBRSxLQUFLO2lCQUNaLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCxhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBUUQsaUJBQUUsR0FBRixVQUFHLFNBQTBCLEVBQUUsUUFBa0M7UUFDL0QsMEJBQVcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLDBCQUFXLEdBQW5CLFVBQW9CLENBQVUsRUFBRSxDQUFVO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLDBCQUFXLENBQUMsSUFBSSxDQUFDLHVCQUFjLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQ0E3RWlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0E2RTdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGRDtJQUF1Qyw2QkFBNkI7SUFHbEUsbUJBQVksS0FBbUIsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUFyRCxZQUNFLGtCQUFNLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBR3hDO1FBRkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDekIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBQ2pCLENBQUM7SUFFRCxzQkFBVyw0QkFBSzthQUFoQixVQUFpQixDQUFXO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRU8sb0NBQWdCLEdBQXhCO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQ0FsQnNDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxHQWtCbkU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJZLHVCQUFlLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWpDLElBQU0sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7QUFHbkQsa0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQywyQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztBQUM1QyxzQkFBYyxHQUFHLGdCQUFnQixDQUFDO0FBRWxDLG1CQUFXLEdBQUcsYUFBYSxDQUFDO0FBQzVCLHNCQUFjLEdBQUcsZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNKbEM7O0FBQ2IsdUZBQWlDO0FBRWpDLDBCQUEwQjtBQUMxQiw2RkFBMkM7QUFFM0MseUNBQXlDO0FBQ3pDLDhDQUE4QztBQUU5QyxJQUFJLE1BQU0sR0FBRztJQUNYLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtJQUNqQixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHO0lBQ1gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFFO1lBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUNuQixLQUFLLEVBQUUsS0FBSztTQUNiO0tBQ0Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxtQkFBUztLQUNWO0NBQ0YsQ0FBQztBQUVGLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCeEIscUZBQStDO0FBRS9DLHVHQUFxRDtBQUVyRDtJQUFtQyx5QkFBMkI7SUFDNUQsZUFBWSxLQUFnQjtRQUE1QixZQUNFLGtCQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUNoQyxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsU0FFSDtRQURDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUksRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsQ0FBQzs7SUFDM0UsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUSxDQUFDLEVBQUUsQ0FBQztRQUNWLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDaEIscUJBQXFCLENBQUMsSUFBSSxDQUFDO2FBQzNCLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsa0JBQUUsR0FBRixVQUFHLFNBQTBCLEVBQUUsUUFBa0M7UUFDL0QsMEJBQVcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLHVCQUFPLEdBQWYsVUFBZ0IsTUFBb0MsRUFBRSxJQUFrQztRQUN0RiwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLDBCQUFXLENBQUMsSUFBSSxDQUFDLG9CQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sMEJBQVUsR0FBbEI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFSCxZQUFDO0FBQUQsQ0FBQyxDQTlCa0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQThCN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENEO0lBQXVDLDZCQUFpQztJQUN0RSxtQkFBWSxLQUFnQjtRQUE1QixZQUNFLGtCQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUtsQztRQUpDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvQixLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7O0lBQ2xDLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQ0FSc0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxHQVF2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRCxxRkFBdUU7QUFFdkUsdUdBQXFEO0FBR3JEO0lBQW1DLHlCQUEyQjtJQUM1RCxlQUFZLEtBQWdCLEVBQUUsTUFBZTtRQUE3QyxZQUNFLGtCQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUNoQyxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsU0FZSDtRQVZDLEtBQUksQ0FBQyxjQUFjLENBQUM7WUFDbEIsR0FBRyxFQUFFLE1BQU07WUFDWCxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1NBQ2xDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBaUM7WUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUksRUFBRSxLQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsQ0FBQzs7SUFDOUUsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBWSxNQUFZLEVBQUUsSUFBa0M7UUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQiwwQkFBVyxDQUFDLElBQUksQ0FBQyx1QkFBYyxDQUFDLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQywwQkFBVyxDQUFDLElBQUksQ0FBQyw0QkFBbUIsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQWlDO1lBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQkFBRSxHQUFGLFVBQUcsU0FBMEIsRUFBRSxRQUFrQztRQUMvRCwwQkFBVyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQ0FyQ2tDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssR0FxQzdEOzs7Ozs7Ozs7Ozs7OztBQzFDWTs7Ozs7Ozs7Ozs7Ozs7O0FBQ2IsdUZBQWlDO0FBQ2pDLGdGQUFtQztBQUNuQyx5R0FBMEQ7QUFDMUQsZ0ZBQW1DO0FBQ25DLHFGQUFvRztBQUNwRyx1RkFBc0M7QUFDdEMsNEZBQXFEO0FBQ3JELDRGQUEyQztBQUMzQyxzR0FBZ0Q7QUFFaEQ7SUFBdUMsNkJBQVk7SUFTakQ7UUFBQSxZQUNFLGtCQUFNO1lBQ0osR0FBRyxFQUFFLFdBQVc7U0FDakIsQ0FBQyxTQUNIO1FBK0NELGVBQVMsR0FBRztZQUNWLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFFRCxpQkFBVyxHQUFHO1lBQ1osS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0MsQ0FBQztRQUVELGdCQUFVLEdBQUc7WUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1RixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUVELGFBQU8sR0FBRztZQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckIsSUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDdEIsSUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFDLENBQUMsQ0FBQztZQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUVELGdCQUFVLEdBQUc7WUFDWCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDOztJQXZFRCxDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFDMUIsbUJBQW1CLEVBQ25CLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQ3BDLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGNBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNO2FBQ1YsRUFBRSxDQUFDLHVCQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXJDLDJCQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFLLENBQUMsSUFBSSxFQUFFLDhCQUFlLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUs7YUFDVCxFQUFFLENBQUMsdUJBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3BDLEVBQUUsQ0FBQyw0QkFBbUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsS0FBSzthQUNULEVBQUUsQ0FBQyxvQkFBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCwwQkFBTSxHQUFOOztRQUNFLFVBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0lBQ3BDLENBQUM7SUEyQkgsZ0JBQUM7QUFBRCxDQUFDLENBckZzQyxNQUFNLENBQUMsS0FBSyxHQXFGbEQiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImNvbnN0IGNyZWF0ZUhlcm9BbmltcyA9IChhbmltczogUGhhc2VyLkFuaW1hdGlvbnMuQW5pbWF0aW9uTWFuYWdlcikgPT4ge1xuXHRhbmltcy5jcmVhdGUoe1xuICAgIGtleTogJ2xlZnQnLFxuICAgIGZyYW1lczogYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2R1ZGUnLCB7IHN0YXJ0OiAwLCBlbmQ6IDMgfSksXG4gICAgZnJhbWVSYXRlOiAxMCxcbiAgICByZXBlYXQ6IC0xXG4gIH0pO1xuXG4gIGFuaW1zLmNyZWF0ZSh7XG4gICAga2V5OiAndHVybicsXG4gICAgZnJhbWVzOiBbIHsga2V5OiAnZHVkZScsIGZyYW1lOiA0IH0gXSxcbiAgICBmcmFtZVJhdGU6IDIwXG4gIH0pO1xuXG4gIGFuaW1zLmNyZWF0ZSh7XG4gICAga2V5OiAncmlnaHQnLFxuICAgIGZyYW1lczogYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2R1ZGUnLCB7IHN0YXJ0OiA1LCBlbmQ6IDggfSksXG4gICAgZnJhbWVSYXRlOiAxMCxcbiAgICByZXBlYXQ6IC0xXG4gIH0pO1xufVxuXG5leHBvcnQge1xuXHRjcmVhdGVIZXJvQW5pbXNcbn0iLCJpbXBvcnQgeyBzY2VuZUV2ZW50cyB9IGZyb20gXCIuLi9ldmVudHMvRXZlbnRzQ2VudGVyXCI7XG5pbXBvcnQgeyBQTEFZRVJfUkVTRVRFRCB9IGZyb20gXCIuLi9ldmVudHMvZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8gZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcbiAgc2NvcmU6IG51bWJlcjtcbiAgICBcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpXG5cdHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSwgJ2R1ZGUnKTtcbiAgICBcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgc2NlbmUucGh5c2ljcy5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgdGhpcy5zZXRCb3VuY2UoMC4yKTtcbiAgICB0aGlzLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfVxuICBcbiAgdXBkYXRlKGN1cnNvcnM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzKSB7XG5cdFx0aWYgKGN1cnNvcnMubGVmdC5pc0Rvd24pXG4gICAge1xuICAgICAgdGhpcy5zZXRWZWxvY2l0eVgoLTE2MCk7XG4gICAgICB0aGlzLmFuaW1zLnBsYXkoJ2xlZnQnLCB0cnVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY3Vyc29ycy5yaWdodC5pc0Rvd24pXG4gICAge1xuICAgICAgdGhpcy5zZXRWZWxvY2l0eVgoMTYwKTtcbiAgICAgIHRoaXMuYW5pbXMucGxheSgncmlnaHQnLCB0cnVlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKDApO1xuICAgICAgdGhpcy5hbmltcy5wbGF5KCd0dXJuJyk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnNvcnMudXAuaXNEb3duICYmIHRoaXMuYm9keS50b3VjaGluZy5kb3duKVxuICAgIHtcbiAgICAgIHRoaXMuc2V0VmVsb2NpdHlZKC0zMzApO1xuICAgIH1cbiAgfVxuICBcbiAgcmVzZXQoeCwgeSkge1xuICAgIHRoaXMuc2V0VGludCgweGZmMDAwMCk7XG4gICAgdGhpcy5hbmltcy5wbGF5KCd0dXJuJyk7XG4gICAgdGhpcy5hbHBoYSA9IDAuNTtcbiAgICBcbiAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgIHk6IC0xMDAsXG4gICAgICBlYXNlOiAnUG93ZXIxJyxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcmVwZWF0OjAsXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmUudGltZS5hZGRFdmVudCh7XG4gICAgICAgICAgZGVsYXk6IDEwMDAsXG4gICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHsgdGhpcy5yZXNldFBsYXllcih4LCB5KTsgfSxcbiAgICAgICAgICBjYWxsYmFja1Njb3BlOiB0aGlzLFxuICAgICAgICAgIGxvb3A6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXNcbiAgICB9KTsgXG4gIH1cblxuICBhZGRTY29yZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHRoaXMuc2NvcmUgKz0gdmFsdWU7XG4gIH1cblxuICBnZXRTY29yZUZvcm1hdGVkID0gKCkgPT4gdGhpcy5zY29yZS50b1N0cmluZygpLnBhZFN0YXJ0KDYsICcwJyk7XG5cbiAgb24oZXZlbnROYW1lOiBzdHJpbmcgfCBzeW1ib2wsIGxpc3RlbmVyOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpIHtcbiAgICBzY2VuZUV2ZW50cy5vbihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRQbGF5ZXIoeDogaW50ZWdlciwgeTogaW50ZWdlcikge1xuICAgIHRoaXMuYWxwaGEgPSAxO1xuICAgIHRoaXMuY2xlYXJUaW50KCk7XG4gICAgdGhpcy5lbmFibGVCb2R5KHRydWUsIHgsIHksIHRydWUsIHRydWUpO1xuICAgIHNjZW5lRXZlbnRzLmVtaXQoUExBWUVSX1JFU0VURUQpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVUZXh0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkJpdG1hcFRleHQge1xuICBwcml2YXRlIF9zY29yZTogaW50ZWdlcjtcbiAgXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHksIFwicGl4ZWxGb250XCIsIFwiXCIsIDE2KTtcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gIH1cblxuICBwdWJsaWMgc2V0IHNjb3JlKHYgOiBpbnRlZ2VyKSB7XG4gICAgdGhpcy5fc2NvcmUgPSB2O1xuICAgIHRoaXMuc2V0U2NvcmVGb3JtYXRlZCgpO1xuICB9XG4gIFxuICBwcml2YXRlIHNldFNjb3JlRm9ybWF0ZWQoKSB7XG4gICAgXG4gICAgdGhpcy50ZXh0ID0gXCJTQ09SRSBcIiArIHRoaXMuX3Njb3JlLnRvU3RyaW5nKCkucGFkU3RhcnQoNiwgJzAnKTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBOVU1CRVJfT0ZfU1RBUlMgPSA4O1xuIiwiY29uc3Qgc2NlbmVFdmVudHMgPSBuZXcgUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXIoKVxuXG5leHBvcnQge1xuXHRzY2VuZUV2ZW50c1xufSIsImV4cG9ydCBjb25zdCBBTExfU1RBUlNfQ09MTEVDVEVEID0gJ0FMTF9TVEFSU19DT0xMRUNURUQnO1xuZXhwb3J0IGNvbnN0IFNUQVJfQ09MTEVDVEVEID0gJ1NUQVJfQ09MTEVDVEVEJztcblxuZXhwb3J0IGNvbnN0IEJPTUJfSElUVEVEID0gJ0JPTUJfSElUVEVEJztcbmV4cG9ydCBjb25zdCBQTEFZRVJfUkVTRVRFRCA9ICdQTEFZRVJfUkVTRVRFRCc7IiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5cbi8vUmVzb2x2ZXMgdG8gbm9kZV9tb2R1bGVzXG5pbXBvcnQgTWFpblNjZW5lIGZyb20gJy4vc2NlbmVzL01haW5TY2VuZSc7XG5cbi8vIGltcG9ydCBUaXRsZVNjZW5lIGZyb20gJy4vVGl0bGVTY2VuZSc7XG4vLyBpbXBvcnQgTGV2ZWxzU2NlbmUgZnJvbSAnLi9PdmVyV29ybGRTY2VuZSc7XG5cbmxldCBjb25maWcgPSB7XG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuICB3aWR0aDogODAwLFxuICBoZWlnaHQ6IDYwMCxcbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgIGFyY2FkZToge1xuICAgICAgZ3Jhdml0eTogeyB5OiAzMDAgfSxcbiAgICAgIGRlYnVnOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgc2NlbmU6IFtcbiAgICBNYWluU2NlbmVcbiAgXVxufTtcblxubmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7IiwiaW1wb3J0IHsgQk9NQl9ISVRURUQgfSBmcm9tIFwiLi4vZXZlbnRzL2V2ZW50c1wiO1xuaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi4vc2NlbmVzL01haW5TY2VuZVwiO1xuaW1wb3J0IHsgc2NlbmVFdmVudHMgfSBmcm9tIFwiLi4vZXZlbnRzL0V2ZW50c0NlbnRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb21icyBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cCB7XG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBNYWluU2NlbmUpIHtcbiAgICBzdXBlcihzY2VuZS5waHlzaWNzLndvcmxkLCBzY2VuZSwge1xuICAgICAgY29sbGlkZVdvcmxkQm91bmRzOiB0cnVlXG4gICAgfSk7XG4gICAgc2NlbmUucGh5c2ljcy5hZGQuY29sbGlkZXIoc2NlbmUucGxheWVyLCB0aGlzLCB0aGlzLmhpdEJvbWIsIG51bGwsIHRoaXMpO1xuICB9XG5cbiAgYWRkQm9tYih4LCB5KSB7XG4gICAgY29uc3QgYm9tYiA9IHRoaXMuY3JlYXRlKHgsIHksIFwiYm9tYlwiKTtcbiAgICBib21iLnNldEJvdW5jZSgxLDEpXG4gICAgICAuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpXG4gICAgICAuc2V0VmVsb2NpdHkoUGhhc2VyLk1hdGguQmV0d2VlbigtMjAwLCAyMDApLCAyMCk7XG4gIH1cblxuICBvbihldmVudE5hbWU6IHN0cmluZyB8IHN5bWJvbCwgbGlzdGVuZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCkge1xuICAgIHNjZW5lRXZlbnRzLm9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBoaXRCb21iKHBsYXllcjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSwgYm9tYjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSkge1xuICAgIC8vVE9ETzogbWFrZSBleHBsb3Npb24gaGVyZVxuICAgIHRoaXMuZGVzdHJveUFsbCgpO1xuICAgIHNjZW5lRXZlbnRzLmVtaXQoQk9NQl9ISVRURUQpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95QWxsKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZWFjaChib21iID0+IGJvbWIuZGVzdHJveSgpKTtcbiAgfVxuXG59IiwiaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi4vc2NlbmVzL01haW5TY2VuZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybXMgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXAge1xuICBjb25zdHJ1Y3RvcihzY2VuZTogTWFpblNjZW5lKSB7XG4gICAgc3VwZXIoc2NlbmUucGh5c2ljcy53b3JsZCwgc2NlbmUpO1xuICAgIHRoaXMuY3JlYXRlKDQwMCwgNTY4LCAnZ3JvdW5kJykuc2V0U2NhbGUoMikucmVmcmVzaEJvZHkoKTtcbiAgICB0aGlzLmNyZWF0ZSg2MDAsIDQwMCwgJ2dyb3VuZCcpO1xuICAgIHRoaXMuY3JlYXRlKDUwLCAyNTAsICdncm91bmQnKTtcbiAgICB0aGlzLmNyZWF0ZSg3NTAsIDIyMCwgJ2dyb3VuZCcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBTExfU1RBUlNfQ09MTEVDVEVELCBTVEFSX0NPTExFQ1RFRCB9IGZyb20gXCIuLi9ldmVudHMvZXZlbnRzXCI7XG5pbXBvcnQgTWFpblNjZW5lIGZyb20gXCIuLi9zY2VuZXMvTWFpblNjZW5lXCI7XG5pbXBvcnQgeyBzY2VuZUV2ZW50cyB9IGZyb20gXCIuLi9ldmVudHMvRXZlbnRzQ2VudGVyXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY2hhcmFjdGVycy9IZXJvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJzIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwIHtcbiAgY29uc3RydWN0b3Ioc2NlbmU6IE1haW5TY2VuZSwgbnVtYmVyOiBpbnRlZ2VyKSB7XG4gICAgc3VwZXIoc2NlbmUucGh5c2ljcy53b3JsZCwgc2NlbmUsIHtcbiAgICAgIGNvbGxpZGVXb3JsZEJvdW5kczogdHJ1ZVxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuY3JlYXRlTXVsdGlwbGUoe1xuICAgICAga2V5OiAnc3RhcicsXG4gICAgICByZXBlYXQ6IG51bWJlcixcbiAgICAgIHNldFhZOiB7IHg6IDEyLCB5OiAwLCBzdGVwWDogNzAgfVxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuY2hpbGRyZW4uaXRlcmF0ZShmdW5jdGlvbiAoc3RhcjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkltYWdlKSB7XG4gICAgICBzdGFyLnNldEJvdW5jZVkoUGhhc2VyLk1hdGguRmxvYXRCZXR3ZWVuKDAuNCwgMC44KSk7XG4gICAgfSk7XG4gICAgc2NlbmUucGh5c2ljcy5hZGQub3ZlcmxhcChzY2VuZS5wbGF5ZXIsIHRoaXMsIHRoaXMuY29sbGVjdFN0YXIsIG51bGwsIHRoaXMpO1xuICB9XG5cbiAgY29sbGVjdFN0YXIocGxheWVyOiBIZXJvLCBzdGFyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlKSB7XG4gICAgc3Rhci5kaXNhYmxlQm9keSh0cnVlLCB0cnVlKTtcbiAgICBwbGF5ZXIuYWRkU2NvcmUoMTApO1xuICAgIHNjZW5lRXZlbnRzLmVtaXQoU1RBUl9DT0xMRUNURUQpO1xuICAgIGlmICh0aGlzLmNvdW50QWN0aXZlKHRydWUpID09PSAwKSB7XG4gICAgICBzY2VuZUV2ZW50cy5lbWl0KEFMTF9TVEFSU19DT0xMRUNURUQpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dBbGwoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5pdGVyYXRlKGZ1bmN0aW9uIChzdGFyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuSW1hZ2UpIHtcbiAgICAgIHN0YXIuZW5hYmxlQm9keSh0cnVlLCBzdGFyLngsIDAsIHRydWUsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgb24oZXZlbnROYW1lOiBzdHJpbmcgfCBzeW1ib2wsIGxpc3RlbmVyOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpIHtcbiAgICBzY2VuZUV2ZW50cy5vbihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IFN0YXJzIGZyb20gJy4uL2l0ZW1zL1N0YXJzJztcbmltcG9ydCB7IE5VTUJFUl9PRl9TVEFSUyB9IGZyb20gJy4uL2NvbmZpZ3MvZ2FtZS1jb25maWdzJztcbmltcG9ydCBCb21icyBmcm9tICcuLi9pdGVtcy9Cb21icyc7XG5pbXBvcnQgeyBBTExfU1RBUlNfQ09MTEVDVEVELCBTVEFSX0NPTExFQ1RFRCwgQk9NQl9ISVRURUQsIFBMQVlFUl9SRVNFVEVEIH0gZnJvbSAnLi4vZXZlbnRzL2V2ZW50cyc7XG5pbXBvcnQgSGVybyBmcm9tICcuLi9jaGFyYWN0ZXJzL0hlcm8nO1xuaW1wb3J0IHsgY3JlYXRlSGVyb0FuaW1zIH0gZnJvbSAnLi4vYW5pbXMvaGVyb0FuaW1zJztcbmltcG9ydCBQbGF0Zm9ybXMgZnJvbSAnLi4vaXRlbXMvUGxhdGZvcm1zJztcbmltcG9ydCBTY29yZVRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9TY29yZVRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBcbiAgcGxheWVyOiBIZXJvO1xuICBwcml2YXRlIHN0YXJzOiBTdGFycztcbiAgcHJpdmF0ZSBwbGF0Zm9ybXM6IFBsYXRmb3JtcztcbiAgcHJpdmF0ZSBzY29yZVRleHQ6IFNjb3JlVGV4dDtcbiAgYm9tYnM6IEJvbWJzO1xuICBwcml2YXRlIGN1cnNvcnM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAga2V5OiAnTWFpblNjZW5lJ1xuICAgIH0pO1xuICB9XG4gICAgXG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdza3knLCAnLi9hc3NldHMvc2t5LnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnZ3JvdW5kJywgJy4vYXNzZXRzL3BsYXRmb3JtLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnc3RhcicsICcuL2Fzc2V0cy9zdGFyLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnYm9tYicsICcuL2Fzc2V0cy9ib21iLnBuZycpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZHVkZScsXG4gICAgICAnLi9hc3NldHMvZHVkZS5wbmcnLFxuICAgICAgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDQ4IH1cbiAgICApO1xuICAgIHRoaXMubG9hZC5iaXRtYXBGb250KFwicGl4ZWxGb250XCIsIFwiLi9hc3NldHMvZm9udC9mb250LnBuZ1wiLCBcIi4vYXNzZXRzL2ZvbnQvZm9udC54bWxcIik7XG4gIH1cblxuICBjcmVhdGUoKXtcbiAgICB0aGlzLmFkZC5pbWFnZSg0MDAsIDMwMCwgJ3NreScpO1xuICAgIFxuICAgIHRoaXMucGxhdGZvcm1zID0gbmV3IFBsYXRmb3Jtcyh0aGlzKTtcbiAgICBcbiAgICB0aGlzLnBsYXllciA9IG5ldyBIZXJvKHRoaXMsIDEwMCwgNDUwKTtcbiAgICB0aGlzLnBsYXllclxuICAgIC5vbihQTEFZRVJfUkVTRVRFRCwgdGhpcy5yZXN1bWVHYW1lKTtcbiAgICBcbiAgICBjcmVhdGVIZXJvQW5pbXModGhpcy5hbmltcyk7XG5cbiAgICB0aGlzLnN0YXJzID0gbmV3IFN0YXJzKHRoaXMsIE5VTUJFUl9PRl9TVEFSUyk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnN0YXJzLCB0aGlzLnBsYXRmb3Jtcyk7XG4gICAgdGhpcy5zdGFyc1xuICAgIC5vbihTVEFSX0NPTExFQ1RFRCwgdGhpcy5jb2xsZWN0U3RhcikgXG4gICAgLm9uKEFMTF9TVEFSU19DT0xMRUNURUQsIHRoaXMubmV4dExldmVsKTtcblxuICAgIHRoaXMuc2NvcmVUZXh0ID0gbmV3IFNjb3JlVGV4dCh0aGlzLCAxMCwgNSk7XG4gICAgXG4gICAgdGhpcy5ib21icyA9IG5ldyBCb21icyh0aGlzKTtcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm9tYnMsIHRoaXMucGxhdGZvcm1zKTtcbiAgICBcbiAgICB0aGlzLmJvbWJzXG4gICAgLm9uKEJPTUJfSElUVEVELCB0aGlzLmhpdEJvbWIpO1xuICAgIFxuICAgIHRoaXMuY3Vyc29ycyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIHRoaXMucGxhdGZvcm1zKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnBsYXllcj8udXBkYXRlKHRoaXMuY3Vyc29ycyk7XG4gIH1cblxuICBuZXh0TGV2ZWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zdGFycy5zaG93QWxsKCk7XG4gICAgdGhpcy5jcmVhdGVCb21iKCk7XG4gIH1cblxuICBjb2xsZWN0U3RhciA9ICgpID0+IHtcbiAgICB0aGlzLnNjb3JlVGV4dC5zY29yZSA9IHRoaXMucGxheWVyLnNjb3JlO1xuICB9XG5cbiAgY3JlYXRlQm9tYiA9ICgpID0+IHtcbiAgICB2YXIgeCA9ICh0aGlzLnBsYXllci54IDwgNDAwKSA/IFBoYXNlci5NYXRoLkJldHdlZW4oNDAwLCA4MDApIDogUGhhc2VyLk1hdGguQmV0d2VlbigwLCA0MDApO1xuICAgIHRoaXMuYm9tYnMuYWRkQm9tYih4LCAxNik7XG4gIH1cblxuICBoaXRCb21iID0gKCkgPT4ge1xuICAgIHRoaXMucGh5c2ljcy5wYXVzZSgpO1xuICAgIGNvbnN0IHggPSA4MDAvMiAtIDEwMDtcbiAgICBjb25zdCB5ID0gNjAwLzI7XG4gICAgdGhpcy5wbGF5ZXIucmVzZXQoeCwgeSk7XG4gIH1cblxuICByZXN1bWVHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMucGh5c2ljcy5yZXN1bWUoKTtcbiAgICB0aGlzLmNyZWF0ZUJvbWIoKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=