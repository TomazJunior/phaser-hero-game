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
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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
        this.load.image('sky', '../assets/sky.png');
        this.load.image('ground', '../assets/platform.png');
        this.load.image('star', '../assets/star.png');
        this.load.image('bomb', '../assets/bomb.png');
        this.load.spritesheet('dude', '../assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");
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


/***/ }),

/***/ 0:
/*!****************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:8080 ./src/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/tomazjr/Documents/projects/games/phaser-hero-game/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8080 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8080");
module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1zL2hlcm9Bbmltcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy9IZXJvLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Njb3JlVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy9nYW1lLWNvbmZpZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9FdmVudHNDZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pdGVtcy9Cb21icy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlbXMvUGxhdGZvcm1zLnRzIiwid2VicGFjazovLy8uL3NyYy9pdGVtcy9TdGFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL01haW5TY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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LENBQUM7UUFFL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsMEJBQU0sR0FBTjs7UUFDRSxVQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtJQUNwQyxDQUFDO0lBMkJILGdCQUFDO0FBQUQsQ0FBQyxDQXJGc0MsTUFBTSxDQUFDLEtBQUssR0FxRmxEIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdCBzeW5jIF5cXFxcLlxcXFwvbG9nJFwiOyIsImNvbnN0IGNyZWF0ZUhlcm9BbmltcyA9IChhbmltczogUGhhc2VyLkFuaW1hdGlvbnMuQW5pbWF0aW9uTWFuYWdlcikgPT4ge1xuXHRhbmltcy5jcmVhdGUoe1xuICAgIGtleTogJ2xlZnQnLFxuICAgIGZyYW1lczogYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2R1ZGUnLCB7IHN0YXJ0OiAwLCBlbmQ6IDMgfSksXG4gICAgZnJhbWVSYXRlOiAxMCxcbiAgICByZXBlYXQ6IC0xXG4gIH0pO1xuXG4gIGFuaW1zLmNyZWF0ZSh7XG4gICAga2V5OiAndHVybicsXG4gICAgZnJhbWVzOiBbIHsga2V5OiAnZHVkZScsIGZyYW1lOiA0IH0gXSxcbiAgICBmcmFtZVJhdGU6IDIwXG4gIH0pO1xuXG4gIGFuaW1zLmNyZWF0ZSh7XG4gICAga2V5OiAncmlnaHQnLFxuICAgIGZyYW1lczogYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2R1ZGUnLCB7IHN0YXJ0OiA1LCBlbmQ6IDggfSksXG4gICAgZnJhbWVSYXRlOiAxMCxcbiAgICByZXBlYXQ6IC0xXG4gIH0pO1xufVxuXG5leHBvcnQge1xuXHRjcmVhdGVIZXJvQW5pbXNcbn0iLCJpbXBvcnQgeyBzY2VuZUV2ZW50cyB9IGZyb20gXCIuLi9ldmVudHMvRXZlbnRzQ2VudGVyXCI7XG5pbXBvcnQgeyBQTEFZRVJfUkVTRVRFRCB9IGZyb20gXCIuLi9ldmVudHMvZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8gZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcbiAgc2NvcmU6IG51bWJlcjtcbiAgICBcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpXG5cdHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSwgJ2R1ZGUnKTtcbiAgICBcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgc2NlbmUucGh5c2ljcy5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgdGhpcy5zZXRCb3VuY2UoMC4yKTtcbiAgICB0aGlzLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfVxuICBcbiAgdXBkYXRlKGN1cnNvcnM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzKSB7XG5cdFx0aWYgKGN1cnNvcnMubGVmdC5pc0Rvd24pXG4gICAge1xuICAgICAgdGhpcy5zZXRWZWxvY2l0eVgoLTE2MCk7XG4gICAgICB0aGlzLmFuaW1zLnBsYXkoJ2xlZnQnLCB0cnVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY3Vyc29ycy5yaWdodC5pc0Rvd24pXG4gICAge1xuICAgICAgdGhpcy5zZXRWZWxvY2l0eVgoMTYwKTtcbiAgICAgIHRoaXMuYW5pbXMucGxheSgncmlnaHQnLCB0cnVlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKDApO1xuICAgICAgdGhpcy5hbmltcy5wbGF5KCd0dXJuJyk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnNvcnMudXAuaXNEb3duICYmIHRoaXMuYm9keS50b3VjaGluZy5kb3duKVxuICAgIHtcbiAgICAgIHRoaXMuc2V0VmVsb2NpdHlZKC0zMzApO1xuICAgIH1cbiAgfVxuICBcbiAgcmVzZXQoeCwgeSkge1xuICAgIHRoaXMuc2V0VGludCgweGZmMDAwMCk7XG4gICAgdGhpcy5hbmltcy5wbGF5KCd0dXJuJyk7XG4gICAgdGhpcy5hbHBoYSA9IDAuNTtcbiAgICBcbiAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgIHk6IC0xMDAsXG4gICAgICBlYXNlOiAnUG93ZXIxJyxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcmVwZWF0OjAsXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmUudGltZS5hZGRFdmVudCh7XG4gICAgICAgICAgZGVsYXk6IDEwMDAsXG4gICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHsgdGhpcy5yZXNldFBsYXllcih4LCB5KTsgfSxcbiAgICAgICAgICBjYWxsYmFja1Njb3BlOiB0aGlzLFxuICAgICAgICAgIGxvb3A6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXNcbiAgICB9KTsgXG4gIH1cblxuICBhZGRTY29yZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHRoaXMuc2NvcmUgKz0gdmFsdWU7XG4gIH1cblxuICBnZXRTY29yZUZvcm1hdGVkID0gKCkgPT4gdGhpcy5zY29yZS50b1N0cmluZygpLnBhZFN0YXJ0KDYsICcwJyk7XG5cbiAgb24oZXZlbnROYW1lOiBzdHJpbmcgfCBzeW1ib2wsIGxpc3RlbmVyOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpIHtcbiAgICBzY2VuZUV2ZW50cy5vbihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRQbGF5ZXIoeDogaW50ZWdlciwgeTogaW50ZWdlcikge1xuICAgIHRoaXMuYWxwaGEgPSAxO1xuICAgIHRoaXMuY2xlYXJUaW50KCk7XG4gICAgdGhpcy5lbmFibGVCb2R5KHRydWUsIHgsIHksIHRydWUsIHRydWUpO1xuICAgIHNjZW5lRXZlbnRzLmVtaXQoUExBWUVSX1JFU0VURUQpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVUZXh0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkJpdG1hcFRleHQge1xuICBwcml2YXRlIF9zY29yZTogaW50ZWdlcjtcbiAgXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHksIFwicGl4ZWxGb250XCIsIFwiXCIsIDE2KTtcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gIH1cblxuICBwdWJsaWMgc2V0IHNjb3JlKHYgOiBpbnRlZ2VyKSB7XG4gICAgdGhpcy5fc2NvcmUgPSB2O1xuICAgIHRoaXMuc2V0U2NvcmVGb3JtYXRlZCgpO1xuICB9XG4gIFxuICBwcml2YXRlIHNldFNjb3JlRm9ybWF0ZWQoKSB7XG4gICAgXG4gICAgdGhpcy50ZXh0ID0gXCJTQ09SRSBcIiArIHRoaXMuX3Njb3JlLnRvU3RyaW5nKCkucGFkU3RhcnQoNiwgJzAnKTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBOVU1CRVJfT0ZfU1RBUlMgPSA4O1xuIiwiY29uc3Qgc2NlbmVFdmVudHMgPSBuZXcgUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXIoKVxuXG5leHBvcnQge1xuXHRzY2VuZUV2ZW50c1xufSIsImV4cG9ydCBjb25zdCBBTExfU1RBUlNfQ09MTEVDVEVEID0gJ0FMTF9TVEFSU19DT0xMRUNURUQnO1xuZXhwb3J0IGNvbnN0IFNUQVJfQ09MTEVDVEVEID0gJ1NUQVJfQ09MTEVDVEVEJztcblxuZXhwb3J0IGNvbnN0IEJPTUJfSElUVEVEID0gJ0JPTUJfSElUVEVEJztcbmV4cG9ydCBjb25zdCBQTEFZRVJfUkVTRVRFRCA9ICdQTEFZRVJfUkVTRVRFRCc7IiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5cbi8vUmVzb2x2ZXMgdG8gbm9kZV9tb2R1bGVzXG5pbXBvcnQgTWFpblNjZW5lIGZyb20gJy4vc2NlbmVzL01haW5TY2VuZSc7XG5cbi8vIGltcG9ydCBUaXRsZVNjZW5lIGZyb20gJy4vVGl0bGVTY2VuZSc7XG4vLyBpbXBvcnQgTGV2ZWxzU2NlbmUgZnJvbSAnLi9PdmVyV29ybGRTY2VuZSc7XG5cbmxldCBjb25maWcgPSB7XG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuICB3aWR0aDogODAwLFxuICBoZWlnaHQ6IDYwMCxcbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgIGFyY2FkZToge1xuICAgICAgZ3Jhdml0eTogeyB5OiAzMDAgfSxcbiAgICAgIGRlYnVnOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgc2NlbmU6IFtcbiAgICBNYWluU2NlbmVcbiAgXVxufTtcblxubmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7IiwiaW1wb3J0IHsgQk9NQl9ISVRURUQgfSBmcm9tIFwiLi4vZXZlbnRzL2V2ZW50c1wiO1xuaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi4vc2NlbmVzL01haW5TY2VuZVwiO1xuaW1wb3J0IHsgc2NlbmVFdmVudHMgfSBmcm9tIFwiLi4vZXZlbnRzL0V2ZW50c0NlbnRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb21icyBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cCB7XG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBNYWluU2NlbmUpIHtcbiAgICBzdXBlcihzY2VuZS5waHlzaWNzLndvcmxkLCBzY2VuZSwge1xuICAgICAgY29sbGlkZVdvcmxkQm91bmRzOiB0cnVlXG4gICAgfSk7XG4gICAgc2NlbmUucGh5c2ljcy5hZGQuY29sbGlkZXIoc2NlbmUucGxheWVyLCB0aGlzLCB0aGlzLmhpdEJvbWIsIG51bGwsIHRoaXMpO1xuICB9XG5cbiAgYWRkQm9tYih4LCB5KSB7XG4gICAgY29uc3QgYm9tYiA9IHRoaXMuY3JlYXRlKHgsIHksIFwiYm9tYlwiKTtcbiAgICBib21iLnNldEJvdW5jZSgxLDEpXG4gICAgICAuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpXG4gICAgICAuc2V0VmVsb2NpdHkoUGhhc2VyLk1hdGguQmV0d2VlbigtMjAwLCAyMDApLCAyMCk7XG4gIH1cblxuICBvbihldmVudE5hbWU6IHN0cmluZyB8IHN5bWJvbCwgbGlzdGVuZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCkge1xuICAgIHNjZW5lRXZlbnRzLm9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBoaXRCb21iKHBsYXllcjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSwgYm9tYjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSkge1xuICAgIC8vVE9ETzogbWFrZSBleHBsb3Npb24gaGVyZVxuICAgIHRoaXMuZGVzdHJveUFsbCgpO1xuICAgIHNjZW5lRXZlbnRzLmVtaXQoQk9NQl9ISVRURUQpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95QWxsKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZWFjaChib21iID0+IGJvbWIuZGVzdHJveSgpKTtcbiAgfVxuXG59IiwiaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi4vc2NlbmVzL01haW5TY2VuZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybXMgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXAge1xuICBjb25zdHJ1Y3RvcihzY2VuZTogTWFpblNjZW5lKSB7XG4gICAgc3VwZXIoc2NlbmUucGh5c2ljcy53b3JsZCwgc2NlbmUpO1xuICAgIHRoaXMuY3JlYXRlKDQwMCwgNTY4LCAnZ3JvdW5kJykuc2V0U2NhbGUoMikucmVmcmVzaEJvZHkoKTtcbiAgICB0aGlzLmNyZWF0ZSg2MDAsIDQwMCwgJ2dyb3VuZCcpO1xuICAgIHRoaXMuY3JlYXRlKDUwLCAyNTAsICdncm91bmQnKTtcbiAgICB0aGlzLmNyZWF0ZSg3NTAsIDIyMCwgJ2dyb3VuZCcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBTExfU1RBUlNfQ09MTEVDVEVELCBTVEFSX0NPTExFQ1RFRCB9IGZyb20gXCIuLi9ldmVudHMvZXZlbnRzXCI7XG5pbXBvcnQgTWFpblNjZW5lIGZyb20gXCIuLi9zY2VuZXMvTWFpblNjZW5lXCI7XG5pbXBvcnQgeyBzY2VuZUV2ZW50cyB9IGZyb20gXCIuLi9ldmVudHMvRXZlbnRzQ2VudGVyXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY2hhcmFjdGVycy9IZXJvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJzIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwIHtcbiAgY29uc3RydWN0b3Ioc2NlbmU6IE1haW5TY2VuZSwgbnVtYmVyOiBpbnRlZ2VyKSB7XG4gICAgc3VwZXIoc2NlbmUucGh5c2ljcy53b3JsZCwgc2NlbmUsIHtcbiAgICAgIGNvbGxpZGVXb3JsZEJvdW5kczogdHJ1ZVxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuY3JlYXRlTXVsdGlwbGUoe1xuICAgICAga2V5OiAnc3RhcicsXG4gICAgICByZXBlYXQ6IG51bWJlcixcbiAgICAgIHNldFhZOiB7IHg6IDEyLCB5OiAwLCBzdGVwWDogNzAgfVxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuY2hpbGRyZW4uaXRlcmF0ZShmdW5jdGlvbiAoc3RhcjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkltYWdlKSB7XG4gICAgICBzdGFyLnNldEJvdW5jZVkoUGhhc2VyLk1hdGguRmxvYXRCZXR3ZWVuKDAuNCwgMC44KSk7XG4gICAgfSk7XG4gICAgc2NlbmUucGh5c2ljcy5hZGQub3ZlcmxhcChzY2VuZS5wbGF5ZXIsIHRoaXMsIHRoaXMuY29sbGVjdFN0YXIsIG51bGwsIHRoaXMpO1xuICB9XG5cbiAgY29sbGVjdFN0YXIocGxheWVyOiBIZXJvLCBzdGFyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlKSB7XG4gICAgc3Rhci5kaXNhYmxlQm9keSh0cnVlLCB0cnVlKTtcbiAgICBwbGF5ZXIuYWRkU2NvcmUoMTApO1xuICAgIHNjZW5lRXZlbnRzLmVtaXQoU1RBUl9DT0xMRUNURUQpO1xuICAgIGlmICh0aGlzLmNvdW50QWN0aXZlKHRydWUpID09PSAwKSB7XG4gICAgICBzY2VuZUV2ZW50cy5lbWl0KEFMTF9TVEFSU19DT0xMRUNURUQpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dBbGwoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5pdGVyYXRlKGZ1bmN0aW9uIChzdGFyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuSW1hZ2UpIHtcbiAgICAgIHN0YXIuZW5hYmxlQm9keSh0cnVlLCBzdGFyLngsIDAsIHRydWUsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgb24oZXZlbnROYW1lOiBzdHJpbmcgfCBzeW1ib2wsIGxpc3RlbmVyOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpIHtcbiAgICBzY2VuZUV2ZW50cy5vbihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IFN0YXJzIGZyb20gJy4uL2l0ZW1zL1N0YXJzJztcbmltcG9ydCB7IE5VTUJFUl9PRl9TVEFSUyB9IGZyb20gJy4uL2NvbmZpZ3MvZ2FtZS1jb25maWdzJztcbmltcG9ydCBCb21icyBmcm9tICcuLi9pdGVtcy9Cb21icyc7XG5pbXBvcnQgeyBBTExfU1RBUlNfQ09MTEVDVEVELCBTVEFSX0NPTExFQ1RFRCwgQk9NQl9ISVRURUQsIFBMQVlFUl9SRVNFVEVEIH0gZnJvbSAnLi4vZXZlbnRzL2V2ZW50cyc7XG5pbXBvcnQgSGVybyBmcm9tICcuLi9jaGFyYWN0ZXJzL0hlcm8nO1xuaW1wb3J0IHsgY3JlYXRlSGVyb0FuaW1zIH0gZnJvbSAnLi4vYW5pbXMvaGVyb0FuaW1zJztcbmltcG9ydCBQbGF0Zm9ybXMgZnJvbSAnLi4vaXRlbXMvUGxhdGZvcm1zJztcbmltcG9ydCBTY29yZVRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9TY29yZVRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBcbiAgcGxheWVyOiBIZXJvO1xuICBwcml2YXRlIHN0YXJzOiBTdGFycztcbiAgcHJpdmF0ZSBwbGF0Zm9ybXM6IFBsYXRmb3JtcztcbiAgcHJpdmF0ZSBzY29yZVRleHQ6IFNjb3JlVGV4dDtcbiAgYm9tYnM6IEJvbWJzO1xuICBwcml2YXRlIGN1cnNvcnM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAga2V5OiAnTWFpblNjZW5lJ1xuICAgIH0pO1xuICB9XG4gICAgXG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdza3knLCAnLi4vYXNzZXRzL3NreS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2dyb3VuZCcsICcuLi9hc3NldHMvcGxhdGZvcm0ucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdzdGFyJywgJy4uL2Fzc2V0cy9zdGFyLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnYm9tYicsICcuLi9hc3NldHMvYm9tYi5wbmcnKTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2R1ZGUnLFxuICAgICAgJy4uL2Fzc2V0cy9kdWRlLnBuZycsXG4gICAgICB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogNDggfVxuICAgICk7XG4gICAgdGhpcy5sb2FkLmJpdG1hcEZvbnQoXCJwaXhlbEZvbnRcIiwgXCJhc3NldHMvZm9udC9mb250LnBuZ1wiLCBcImFzc2V0cy9mb250L2ZvbnQueG1sXCIpO1xuICB9XG5cbiAgY3JlYXRlKCl7XG4gICAgdGhpcy5hZGQuaW1hZ2UoNDAwLCAzMDAsICdza3knKTtcbiAgICBcbiAgICB0aGlzLnBsYXRmb3JtcyA9IG5ldyBQbGF0Zm9ybXModGhpcyk7XG4gICAgXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgSGVybyh0aGlzLCAxMDAsIDQ1MCk7XG4gICAgdGhpcy5wbGF5ZXJcbiAgICAub24oUExBWUVSX1JFU0VURUQsIHRoaXMucmVzdW1lR2FtZSk7XG4gICAgXG4gICAgY3JlYXRlSGVyb0FuaW1zKHRoaXMuYW5pbXMpO1xuXG4gICAgdGhpcy5zdGFycyA9IG5ldyBTdGFycyh0aGlzLCBOVU1CRVJfT0ZfU1RBUlMpO1xuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5zdGFycywgdGhpcy5wbGF0Zm9ybXMpO1xuICAgIHRoaXMuc3RhcnNcbiAgICAub24oU1RBUl9DT0xMRUNURUQsIHRoaXMuY29sbGVjdFN0YXIpIFxuICAgIC5vbihBTExfU1RBUlNfQ09MTEVDVEVELCB0aGlzLm5leHRMZXZlbCk7XG5cbiAgICB0aGlzLnNjb3JlVGV4dCA9IG5ldyBTY29yZVRleHQodGhpcywgMTAsIDUpO1xuICAgIFxuICAgIHRoaXMuYm9tYnMgPSBuZXcgQm9tYnModGhpcyk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJvbWJzLCB0aGlzLnBsYXRmb3Jtcyk7XG4gICAgXG4gICAgdGhpcy5ib21ic1xuICAgIC5vbihCT01CX0hJVFRFRCwgdGhpcy5oaXRCb21iKTtcbiAgICBcbiAgICB0aGlzLmN1cnNvcnMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVyLCB0aGlzLnBsYXRmb3Jtcyk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5wbGF5ZXI/LnVwZGF0ZSh0aGlzLmN1cnNvcnMpO1xuICB9XG5cbiAgbmV4dExldmVsID0gKCkgPT4ge1xuICAgIHRoaXMuc3RhcnMuc2hvd0FsbCgpO1xuICAgIHRoaXMuY3JlYXRlQm9tYigpO1xuICB9XG5cbiAgY29sbGVjdFN0YXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zY29yZVRleHQuc2NvcmUgPSB0aGlzLnBsYXllci5zY29yZTtcbiAgfVxuXG4gIGNyZWF0ZUJvbWIgPSAoKSA9PiB7XG4gICAgdmFyIHggPSAodGhpcy5wbGF5ZXIueCA8IDQwMCkgPyBQaGFzZXIuTWF0aC5CZXR3ZWVuKDQwMCwgODAwKSA6IFBoYXNlci5NYXRoLkJldHdlZW4oMCwgNDAwKTtcbiAgICB0aGlzLmJvbWJzLmFkZEJvbWIoeCwgMTYpO1xuICB9XG5cbiAgaGl0Qm9tYiA9ICgpID0+IHtcbiAgICB0aGlzLnBoeXNpY3MucGF1c2UoKTtcbiAgICBjb25zdCB4ID0gODAwLzIgLSAxMDA7XG4gICAgY29uc3QgeSA9IDYwMC8yO1xuICAgIHRoaXMucGxheWVyLnJlc2V0KHgsIHkpO1xuICB9XG5cbiAgcmVzdW1lR2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLnBoeXNpY3MucmVzdW1lKCk7XG4gICAgdGhpcy5jcmVhdGVCb21iKCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9