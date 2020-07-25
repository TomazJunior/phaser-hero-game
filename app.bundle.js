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
var MainScene_1 = __webpack_require__(/*! ./scenes/MainScene */ "./src/scenes/MainScene.ts");
var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1zL2hlcm9Bbmltcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy9IZXJvLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Njb3JlVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy9nYW1lLWNvbmZpZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9FdmVudHNDZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pdGVtcy9Cb21icy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlbXMvUGxhdGZvcm1zLnRzIiwid2VicGFjazovLy8uL3NyYy9pdGVtcy9TdGFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL01haW5TY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztR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QUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDBCQUFNLEdBQU47O1FBQ0UsVUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7SUFDcEMsQ0FBQztJQTJCSCxnQkFBQztBQUFELENBQUMsQ0FyRnNDLE1BQU0sQ0FBQyxLQUFLLEdBcUZsRCIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiY29uc3QgY3JlYXRlSGVyb0FuaW1zID0gKGFuaW1zOiBQaGFzZXIuQW5pbWF0aW9ucy5BbmltYXRpb25NYW5hZ2VyKSA9PiB7XG5cdGFuaW1zLmNyZWF0ZSh7XG4gICAga2V5OiAnbGVmdCcsXG4gICAgZnJhbWVzOiBhbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnZHVkZScsIHsgc3RhcnQ6IDAsIGVuZDogMyB9KSxcbiAgICBmcmFtZVJhdGU6IDEwLFxuICAgIHJlcGVhdDogLTFcbiAgfSk7XG5cbiAgYW5pbXMuY3JlYXRlKHtcbiAgICBrZXk6ICd0dXJuJyxcbiAgICBmcmFtZXM6IFsgeyBrZXk6ICdkdWRlJywgZnJhbWU6IDQgfSBdLFxuICAgIGZyYW1lUmF0ZTogMjBcbiAgfSk7XG5cbiAgYW5pbXMuY3JlYXRlKHtcbiAgICBrZXk6ICdyaWdodCcsXG4gICAgZnJhbWVzOiBhbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnZHVkZScsIHsgc3RhcnQ6IDUsIGVuZDogOCB9KSxcbiAgICBmcmFtZVJhdGU6IDEwLFxuICAgIHJlcGVhdDogLTFcbiAgfSk7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZUhlcm9Bbmltc1xufSIsImltcG9ydCB7IHNjZW5lRXZlbnRzIH0gZnJvbSBcIi4uL2V2ZW50cy9FdmVudHNDZW50ZXJcIjtcbmltcG9ydCB7IFBMQVlFUl9SRVNFVEVEIH0gZnJvbSBcIi4uL2V2ZW50cy9ldmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xuICBzY29yZTogbnVtYmVyO1xuICAgIFxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlcilcblx0e1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5LCAnZHVkZScpO1xuICAgIFxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICBzY2VuZS5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICB0aGlzLnNldEJvdW5jZSgwLjIpO1xuICAgIHRoaXMuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICB9XG4gIFxuICB1cGRhdGUoY3Vyc29yczogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXMpIHtcblx0XHRpZiAoY3Vyc29ycy5sZWZ0LmlzRG93bilcbiAgICB7XG4gICAgICB0aGlzLnNldFZlbG9jaXR5WCgtMTYwKTtcbiAgICAgIHRoaXMuYW5pbXMucGxheSgnbGVmdCcsIHRydWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjdXJzb3JzLnJpZ2h0LmlzRG93bilcbiAgICB7XG4gICAgICB0aGlzLnNldFZlbG9jaXR5WCgxNjApO1xuICAgICAgdGhpcy5hbmltcy5wbGF5KCdyaWdodCcsIHRydWUpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgdGhpcy5zZXRWZWxvY2l0eVgoMCk7XG4gICAgICB0aGlzLmFuaW1zLnBsYXkoJ3R1cm4nKTtcbiAgICB9XG5cbiAgICBpZiAoY3Vyc29ycy51cC5pc0Rvd24gJiYgdGhpcy5ib2R5LnRvdWNoaW5nLmRvd24pXG4gICAge1xuICAgICAgdGhpcy5zZXRWZWxvY2l0eVkoLTMzMCk7XG4gICAgfVxuICB9XG4gIFxuICByZXNldCh4LCB5KSB7XG4gICAgdGhpcy5zZXRUaW50KDB4ZmYwMDAwKTtcbiAgICB0aGlzLmFuaW1zLnBsYXkoJ3R1cm4nKTtcbiAgICB0aGlzLmFscGhhID0gMC41O1xuICAgIFxuICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiB0aGlzLFxuICAgICAgeTogLTEwMCxcbiAgICAgIGVhc2U6ICdQb3dlcjEnLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICByZXBlYXQ6MCxcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zY2VuZS50aW1lLmFkZEV2ZW50KHtcbiAgICAgICAgICBkZWxheTogMTAwMCxcbiAgICAgICAgICBjYWxsYmFjazogKCkgPT4geyB0aGlzLnJlc2V0UGxheWVyKHgsIHkpOyB9LFxuICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXG4gICAgICAgICAgbG9vcDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgY2FsbGJhY2tTY29wZTogdGhpc1xuICAgIH0pOyBcbiAgfVxuXG4gIGFkZFNjb3JlID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zY29yZSArPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFNjb3JlRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLnNjb3JlLnRvU3RyaW5nKCkucGFkU3RhcnQoNiwgJzAnKTtcblxuICBvbihldmVudE5hbWU6IHN0cmluZyB8IHN5bWJvbCwgbGlzdGVuZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCkge1xuICAgIHNjZW5lRXZlbnRzLm9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFBsYXllcih4OiBpbnRlZ2VyLCB5OiBpbnRlZ2VyKSB7XG4gICAgdGhpcy5hbHBoYSA9IDE7XG4gICAgdGhpcy5jbGVhclRpbnQoKTtcbiAgICB0aGlzLmVuYWJsZUJvZHkodHJ1ZSwgeCwgeSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgc2NlbmVFdmVudHMuZW1pdChQTEFZRVJfUkVTRVRFRCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZVRleHQgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQml0bWFwVGV4dCB7XG4gIHByaXZhdGUgX3Njb3JlOiBpbnRlZ2VyO1xuICBcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSwgXCJwaXhlbEZvbnRcIiwgXCJcIiwgMTYpO1xuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgc2NvcmUodiA6IGludGVnZXIpIHtcbiAgICB0aGlzLl9zY29yZSA9IHY7XG4gICAgdGhpcy5zZXRTY29yZUZvcm1hdGVkKCk7XG4gIH1cbiAgXG4gIHByaXZhdGUgc2V0U2NvcmVGb3JtYXRlZCgpIHtcbiAgICBcbiAgICB0aGlzLnRleHQgPSBcIlNDT1JFIFwiICsgdGhpcy5fc2NvcmUudG9TdHJpbmcoKS5wYWRTdGFydCg2LCAnMCcpO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IE5VTUJFUl9PRl9TVEFSUyA9IDg7XG4iLCJjb25zdCBzY2VuZUV2ZW50cyA9IG5ldyBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcigpXG5cbmV4cG9ydCB7XG5cdHNjZW5lRXZlbnRzXG59IiwiZXhwb3J0IGNvbnN0IEFMTF9TVEFSU19DT0xMRUNURUQgPSAnQUxMX1NUQVJTX0NPTExFQ1RFRCc7XG5leHBvcnQgY29uc3QgU1RBUl9DT0xMRUNURUQgPSAnU1RBUl9DT0xMRUNURUQnO1xuXG5leHBvcnQgY29uc3QgQk9NQl9ISVRURUQgPSAnQk9NQl9ISVRURUQnO1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9SRVNFVEVEID0gJ1BMQVlFUl9SRVNFVEVEJzsiLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcblxuaW1wb3J0IE1haW5TY2VuZSBmcm9tICcuL3NjZW5lcy9NYWluU2NlbmUnO1xuXG5sZXQgY29uZmlnID0ge1xuICB0eXBlOiBQaGFzZXIuQVVUTyxcbiAgc2NhbGU6IHtcbiAgICBtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxuICAgIHBhcmVudDogJ3BoYXNlci1leGFtcGxlJyxcbiAgICBhdXRvQ2VudGVyOiBQaGFzZXIuU2NhbGUuQ0VOVEVSX0JPVEgsXG4gICAgd2lkdGg6IDgwMCxcbiAgICBoZWlnaHQ6IDYwMFxuICB9LFxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgYXJjYWRlOiB7XG4gICAgICBncmF2aXR5OiB7IHk6IDMwMCB9LFxuICAgICAgZGVidWc6IGZhbHNlXG4gICAgfVxuICB9LFxuICBzY2VuZTogW1xuICAgIE1haW5TY2VuZVxuICBdXG59O1xuXG5uZXcgUGhhc2VyLkdhbWUoY29uZmlnKTsiLCJpbXBvcnQgeyBCT01CX0hJVFRFRCB9IGZyb20gXCIuLi9ldmVudHMvZXZlbnRzXCI7XG5pbXBvcnQgTWFpblNjZW5lIGZyb20gXCIuLi9zY2VuZXMvTWFpblNjZW5lXCI7XG5pbXBvcnQgeyBzY2VuZUV2ZW50cyB9IGZyb20gXCIuLi9ldmVudHMvRXZlbnRzQ2VudGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvbWJzIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwIHtcbiAgY29uc3RydWN0b3Ioc2NlbmU6IE1haW5TY2VuZSkge1xuICAgIHN1cGVyKHNjZW5lLnBoeXNpY3Mud29ybGQsIHNjZW5lLCB7XG4gICAgICBjb2xsaWRlV29ybGRCb3VuZHM6IHRydWVcbiAgICB9KTtcbiAgICBzY2VuZS5waHlzaWNzLmFkZC5jb2xsaWRlcihzY2VuZS5wbGF5ZXIsIHRoaXMsIHRoaXMuaGl0Qm9tYiwgbnVsbCwgdGhpcyk7XG4gIH1cblxuICBhZGRCb21iKHgsIHkpIHtcbiAgICBjb25zdCBib21iID0gdGhpcy5jcmVhdGUoeCwgeSwgXCJib21iXCIpO1xuICAgIGJvbWIuc2V0Qm91bmNlKDEsMSlcbiAgICAgIC5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSlcbiAgICAgIC5zZXRWZWxvY2l0eShQaGFzZXIuTWF0aC5CZXR3ZWVuKC0yMDAsIDIwMCksIDIwKTtcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nIHwgc3ltYm9sLCBsaXN0ZW5lcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKSB7XG4gICAgc2NlbmVFdmVudHMub24oZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGhpdEJvbWIocGxheWVyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLCBib21iOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlKSB7XG4gICAgLy9UT0RPOiBtYWtlIGV4cGxvc2lvbiBoZXJlXG4gICAgdGhpcy5kZXN0cm95QWxsKCk7XG4gICAgc2NlbmVFdmVudHMuZW1pdChCT01CX0hJVFRFRCk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lBbGwoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5lYWNoKGJvbWIgPT4gYm9tYi5kZXN0cm95KCkpO1xuICB9XG5cbn0iLCJpbXBvcnQgTWFpblNjZW5lIGZyb20gXCIuLi9zY2VuZXMvTWFpblNjZW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtcyBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TdGF0aWNHcm91cCB7XG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBNYWluU2NlbmUpIHtcbiAgICBzdXBlcihzY2VuZS5waHlzaWNzLndvcmxkLCBzY2VuZSk7XG4gICAgdGhpcy5jcmVhdGUoNDAwLCA1NjgsICdncm91bmQnKS5zZXRTY2FsZSgyKS5yZWZyZXNoQm9keSgpO1xuICAgIHRoaXMuY3JlYXRlKDYwMCwgNDAwLCAnZ3JvdW5kJyk7XG4gICAgdGhpcy5jcmVhdGUoNTAsIDI1MCwgJ2dyb3VuZCcpO1xuICAgIHRoaXMuY3JlYXRlKDc1MCwgMjIwLCAnZ3JvdW5kJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFMTF9TVEFSU19DT0xMRUNURUQsIFNUQVJfQ09MTEVDVEVEIH0gZnJvbSBcIi4uL2V2ZW50cy9ldmVudHNcIjtcbmltcG9ydCBNYWluU2NlbmUgZnJvbSBcIi4uL3NjZW5lcy9NYWluU2NlbmVcIjtcbmltcG9ydCB7IHNjZW5lRXZlbnRzIH0gZnJvbSBcIi4uL2V2ZW50cy9FdmVudHNDZW50ZXJcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jaGFyYWN0ZXJzL0hlcm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnMgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXAge1xuICBjb25zdHJ1Y3RvcihzY2VuZTogTWFpblNjZW5lLCBudW1iZXI6IGludGVnZXIpIHtcbiAgICBzdXBlcihzY2VuZS5waHlzaWNzLndvcmxkLCBzY2VuZSwge1xuICAgICAgY29sbGlkZVdvcmxkQm91bmRzOiB0cnVlXG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5jcmVhdGVNdWx0aXBsZSh7XG4gICAgICBrZXk6ICdzdGFyJyxcbiAgICAgIHJlcGVhdDogbnVtYmVyLFxuICAgICAgc2V0WFk6IHsgeDogMTIsIHk6IDAsIHN0ZXBYOiA3MCB9XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5jaGlsZHJlbi5pdGVyYXRlKGZ1bmN0aW9uIChzdGFyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuSW1hZ2UpIHtcbiAgICAgIHN0YXIuc2V0Qm91bmNlWShQaGFzZXIuTWF0aC5GbG9hdEJldHdlZW4oMC40LCAwLjgpKTtcbiAgICB9KTtcbiAgICBzY2VuZS5waHlzaWNzLmFkZC5vdmVybGFwKHNjZW5lLnBsYXllciwgdGhpcywgdGhpcy5jb2xsZWN0U3RhciwgbnVsbCwgdGhpcyk7XG4gIH1cblxuICBjb2xsZWN0U3RhcihwbGF5ZXI6IEhlcm8sIHN0YXI6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUpIHtcbiAgICBzdGFyLmRpc2FibGVCb2R5KHRydWUsIHRydWUpO1xuICAgIHBsYXllci5hZGRTY29yZSgxMCk7XG4gICAgc2NlbmVFdmVudHMuZW1pdChTVEFSX0NPTExFQ1RFRCk7XG4gICAgaWYgKHRoaXMuY291bnRBY3RpdmUodHJ1ZSkgPT09IDApIHtcbiAgICAgIHNjZW5lRXZlbnRzLmVtaXQoQUxMX1NUQVJTX0NPTExFQ1RFRCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0FsbCgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLml0ZXJhdGUoZnVuY3Rpb24gKHN0YXI6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5JbWFnZSkge1xuICAgICAgc3Rhci5lbmFibGVCb2R5KHRydWUsIHN0YXIueCwgMCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBvbihldmVudE5hbWU6IHN0cmluZyB8IHN5bWJvbCwgbGlzdGVuZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCkge1xuICAgIHNjZW5lRXZlbnRzLm9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgU3RhcnMgZnJvbSAnLi4vaXRlbXMvU3RhcnMnO1xuaW1wb3J0IHsgTlVNQkVSX09GX1NUQVJTIH0gZnJvbSAnLi4vY29uZmlncy9nYW1lLWNvbmZpZ3MnO1xuaW1wb3J0IEJvbWJzIGZyb20gJy4uL2l0ZW1zL0JvbWJzJztcbmltcG9ydCB7IEFMTF9TVEFSU19DT0xMRUNURUQsIFNUQVJfQ09MTEVDVEVELCBCT01CX0hJVFRFRCwgUExBWUVSX1JFU0VURUQgfSBmcm9tICcuLi9ldmVudHMvZXZlbnRzJztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NoYXJhY3RlcnMvSGVybyc7XG5pbXBvcnQgeyBjcmVhdGVIZXJvQW5pbXMgfSBmcm9tICcuLi9hbmltcy9oZXJvQW5pbXMnO1xuaW1wb3J0IFBsYXRmb3JtcyBmcm9tICcuLi9pdGVtcy9QbGF0Zm9ybXMnO1xuaW1wb3J0IFNjb3JlVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL1Njb3JlVGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5TY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIFxuICBwbGF5ZXI6IEhlcm87XG4gIHByaXZhdGUgc3RhcnM6IFN0YXJzO1xuICBwcml2YXRlIHBsYXRmb3JtczogUGxhdGZvcm1zO1xuICBwcml2YXRlIHNjb3JlVGV4dDogU2NvcmVUZXh0O1xuICBib21iczogQm9tYnM7XG4gIHByaXZhdGUgY3Vyc29yczogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBrZXk6ICdNYWluU2NlbmUnXG4gICAgfSk7XG4gIH1cbiAgICBcbiAgcHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NreScsICcuL2Fzc2V0cy9za3kucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdncm91bmQnLCAnLi9hc3NldHMvcGxhdGZvcm0ucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdzdGFyJywgJy4vYXNzZXRzL3N0YXIucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdib21iJywgJy4vYXNzZXRzL2JvbWIucG5nJyk7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdkdWRlJyxcbiAgICAgICcuL2Fzc2V0cy9kdWRlLnBuZycsXG4gICAgICB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogNDggfVxuICAgICk7XG4gICAgdGhpcy5sb2FkLmJpdG1hcEZvbnQoXCJwaXhlbEZvbnRcIiwgXCIuL2Fzc2V0cy9mb250L2ZvbnQucG5nXCIsIFwiLi9hc3NldHMvZm9udC9mb250LnhtbFwiKTtcbiAgfVxuXG4gIGNyZWF0ZSgpe1xuICAgIHRoaXMuYWRkLmltYWdlKDQwMCwgMzAwLCAnc2t5Jyk7XG4gICAgXG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBuZXcgUGxhdGZvcm1zKHRoaXMpO1xuICAgIFxuICAgIHRoaXMucGxheWVyID0gbmV3IEhlcm8odGhpcywgMTAwLCA0NTApO1xuICAgIHRoaXMucGxheWVyXG4gICAgLm9uKFBMQVlFUl9SRVNFVEVELCB0aGlzLnJlc3VtZUdhbWUpO1xuICAgIFxuICAgIGNyZWF0ZUhlcm9Bbmltcyh0aGlzLmFuaW1zKTtcblxuICAgIHRoaXMuc3RhcnMgPSBuZXcgU3RhcnModGhpcywgTlVNQkVSX09GX1NUQVJTKTtcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuc3RhcnMsIHRoaXMucGxhdGZvcm1zKTtcbiAgICB0aGlzLnN0YXJzXG4gICAgLm9uKFNUQVJfQ09MTEVDVEVELCB0aGlzLmNvbGxlY3RTdGFyKSBcbiAgICAub24oQUxMX1NUQVJTX0NPTExFQ1RFRCwgdGhpcy5uZXh0TGV2ZWwpO1xuXG4gICAgdGhpcy5zY29yZVRleHQgPSBuZXcgU2NvcmVUZXh0KHRoaXMsIDEwLCA1KTtcbiAgICBcbiAgICB0aGlzLmJvbWJzID0gbmV3IEJvbWJzKHRoaXMpO1xuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5ib21icywgdGhpcy5wbGF0Zm9ybXMpO1xuICAgIFxuICAgIHRoaXMuYm9tYnNcbiAgICAub24oQk9NQl9ISVRURUQsIHRoaXMuaGl0Qm9tYik7XG4gICAgXG4gICAgdGhpcy5jdXJzb3JzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgdGhpcy5wbGF0Zm9ybXMpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMucGxheWVyPy51cGRhdGUodGhpcy5jdXJzb3JzKTtcbiAgfVxuXG4gIG5leHRMZXZlbCA9ICgpID0+IHtcbiAgICB0aGlzLnN0YXJzLnNob3dBbGwoKTtcbiAgICB0aGlzLmNyZWF0ZUJvbWIoKTtcbiAgfVxuXG4gIGNvbGxlY3RTdGFyID0gKCkgPT4ge1xuICAgIHRoaXMuc2NvcmVUZXh0LnNjb3JlID0gdGhpcy5wbGF5ZXIuc2NvcmU7XG4gIH1cblxuICBjcmVhdGVCb21iID0gKCkgPT4ge1xuICAgIHZhciB4ID0gKHRoaXMucGxheWVyLnggPCA0MDApID8gUGhhc2VyLk1hdGguQmV0d2Vlbig0MDAsIDgwMCkgOiBQaGFzZXIuTWF0aC5CZXR3ZWVuKDAsIDQwMCk7XG4gICAgdGhpcy5ib21icy5hZGRCb21iKHgsIDE2KTtcbiAgfVxuXG4gIGhpdEJvbWIgPSAoKSA9PiB7XG4gICAgdGhpcy5waHlzaWNzLnBhdXNlKCk7XG4gICAgY29uc3QgeCA9IDgwMC8yIC0gMTAwO1xuICAgIGNvbnN0IHkgPSA2MDAvMjtcbiAgICB0aGlzLnBsYXllci5yZXNldCh4LCB5KTtcbiAgfVxuXG4gIHJlc3VtZUdhbWUgPSAoKSA9PiB7XG4gICAgdGhpcy5waHlzaWNzLnJlc3VtZSgpO1xuICAgIHRoaXMuY3JlYXRlQm9tYigpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==