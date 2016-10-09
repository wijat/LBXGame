require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"App":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'bc9772ZVeVM2omwSvP+kAar', 'App');
// script\gameCore\App.js

var app = {
    startGame: function startGame() {}
};

//加载模块(有顺序)
var modPath = ['Util'];

for (var i in modPath) {
    var path = modPath[i];
    require(path);
}

module.exports = app;

cc._RFpop();
},{}],"BackBtnCp":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3c5e9FYHD9LxZWZ39udQFni', 'BackBtnCp');
// script\BackBtnCp.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

    },

    onClick: function onClick() {
        //this.node.parent.destroy()
        cc.director.loadScene("gameScene");
    },

    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"BgRandomMove":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2efffJ1hlRMy6NEHp7IMcJi', 'BgRandomMove');
// script\BgRandomMove.js

var _properties;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

cc.Class({
    "extends": cc.Component,

    properties: (_properties = {}, _defineProperty(_properties, "X轴移动距离", 1), _defineProperty(_properties, "y轴移动距离", 1), _defineProperty(_properties, "移动速度(单位：像素/秒)", 20), _defineProperty(_properties, "随机量", 10), _properties),

    //随机移动
    randomMove: function randomMove() {

        var dt = cc.pLength(cc.p(this["X轴移动距离"], this["y轴移动距离"])) / this["移动速度(单位：像素/秒)"];
        var randomDir = cc.pMult(cc.pNormalize(cc.p(cc.randomMinus1To1(), cc.randomMinus1To1())), this["随机量"]);

        var moveDir = cc.pAdd(cc.p(this["X轴移动距离"], this["y轴移动距离"]), randomDir);

        var action = cc.repeatForever(cc.sequence(cc.moveBy(dt, moveDir), cc.moveBy(dt, cc.pMult(moveDir, -1))));

        this.node.runAction(action);
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.randomMove();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"ButtonControl":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c2d5bVI67ZPAq8U5jXlmGwC', 'ButtonControl');
// script\gameCore\common\ButtonControl.js

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

cc.Class({
    "extends": cc.Component,

    properties: _defineProperty({}, "音效", {
        "default": null,
        url: cc.AudioClip
    }),

    onClick: function onClick() {
        cc.audioEngine.playEffect(this["音效"]);
    },

    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"GameData":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f90693GTmlGS7T5fknnDNTy', 'GameData');
// script\GameData.js

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

cc.Class({
    "extends": cc.Component,

    properties: _defineProperty({}, "分数", 0),

    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"InitLBXFrame":[function(require,module,exports){
"use strict";
cc._RFpush(module, '73810un/L9B+7ptubQfLvHy', 'InitLBXFrame');
// script\gameCore\InitLBXFrame.js

var _properties;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var disList = [
//一个方向
[0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23, 24, 25], [26, 27, 28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41, 42], [43, 44, 45, 46, 47, 48, 49], [50, 51, 52, 53, 54, 55], [56, 57, 58, 59, 60],

//另一个方向
[26, 35, 43, 50, 56], [18, 27, 36, 44, 51, 57], [11, 19, 28, 37, 45, 52, 58], [5, 12, 20, 29, 38, 46, 53, 59], [0, 6, 13, 21, 30, 39, 47, 54, 60], [1, 7, 14, 22, 31, 40, 48, 55], [2, 8, 15, 23, 32, 41, 49], [3, 9, 16, 24, 33, 42], [4, 10, 17, 25, 34],

//横向
[0, 5, 11, 18, 26], [1, 6, 12, 19, 27, 35], [2, 7, 13, 20, 28, 36, 43], [3, 8, 14, 21, 29, 37, 44, 50], [4, 9, 15, 22, 30, 38, 45, 51, 56], [10, 16, 23, 31, 39, 46, 52, 57], [17, 24, 32, 40, 47, 53, 58], [25, 33, 41, 48, 54, 59], [34, 42, 49, 55, 60]];

var Util = require('Util');
var theScore = 0;

cc.Class({
    "extends": cc.Component,

    properties: (_properties = {}, _defineProperty(_properties, "bianchanggezishu", 5), _defineProperty(_properties, "liubianxingH", 0), _defineProperty(_properties, "liubianxingA", 0), _defineProperty(_properties, "framePic", {
        "default": null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, "bian", {
        "default": null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, "xiaochuSound", {
        "default": null,
        url: cc.AudioClip
    }), _defineProperty(_properties, "shuPrefab", {
        "default": null,
        type: cc.Prefab
    }), _defineProperty(_properties, "boomEffPrefab", {
        "default": null,
        type: cc.Prefab
    }), _defineProperty(_properties, "tipPrefab", {
        "default": null,
        type: cc.Prefab
    }), _properties),

    /**
     * 消除检测
     * @param  {[type]}
     * @return {[type]}
     */
    checkXC: function checkXC(argument) {
        Util.testCode1('消除逻辑');

        //放下都加分
        this.addScore(this.curFKLen, true);
        //加分飘字
        var tipNode = cc.instantiate(this.tipPrefab);
        tipNode.color = cc.color(211, 70, 50, 255);
        var label = tipNode.getComponent(cc.Label);
        label.string = "+" + this.getAddScoreCal(this.curFKLen, true);
        this.node.addChild(tipNode);

        var haveFKIndexList = [];
        for (var i = 0; i < this.frameList.length; i++) {
            if (this.frameList[i].isHaveFK) {
                //cc.log(this.frameList[i].FKIndex)
                haveFKIndexList.push(this.frameList[i].FKIndex);
            }
        }

        haveFKIndexList.sort(function (a, b) {
            return a - b;
        });

        //cc.log("haveFKIndexList：", haveFKIndexList.toString())

        var xcList = []; //要消除的方块列表
        for (var i = 0; i < disList.length; i++) {
            var oneXCList = disList[i];
            var intersectAry = this.get2AryIntersect(haveFKIndexList, oneXCList);

            if (intersectAry.length > 0) {
                //cc.log("intersectAry:", intersectAry.toString())
                //cc.log("oneXCList:", oneXCList.toString())

                var isXC = this.check2AryIsEqual(oneXCList, intersectAry);

                //cc.log("intersectAry 和 oneXCList是否相等：", isXC)
                if (isXC) {
                    cc.log("消！！");
                    xcList.push(oneXCList);

                    cc.audioEngine.playEffect(this.xiaochuSound);
                }
            }
        }

        //cc.log("消除表现！！")

        var actionAry = [];
        var self = this;
        //消除
        var count = 0;
        for (var i = 0; i < xcList.length; i++) {

            var oneList = xcList[i];
            for (var j = 0; j < oneList.length; j++) {
                var xIndex = oneList[j];

                actionAry.push(cc.callFunc(function () {
                    var xIndex = arguments[1][0];
                    var count = arguments[1][1];
                    var effNode = cc.instantiate(this.boomEffPrefab);
                    this.frameList[xIndex].addChild(effNode);

                    //加分飘字
                    var tipNode = cc.instantiate(this.tipPrefab);
                    var label = tipNode.getComponent(cc.Label);
                    label.string = "+" + this.getAddScoreCal(count);
                    this.frameList[xIndex].addChild(tipNode);
                }, this, [xIndex, count]));

                actionAry.push(cc.callFunc(function () {
                    var xIndex = arguments[1];
                    this.frameList[xIndex].isHaveFK = null;

                    var FKNode = this.frameList[xIndex].getChildByName("colorSpr");
                    if (!FKNode) {
                        return; //防止没有这个方块的时候
                    }
                    //FKNode.removeFromParent()

                    FKNode.cascadeOpacity = true;
                    //这个假方块变大并且渐隐掉
                    FKNode.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.5, 2), cc.fadeOut(0.5)), cc.removeSelf(true)));
                }, this, xIndex));

                actionAry.push(cc.delayTime(0.1));

                count++;
            }
        }

        if (actionAry.length > 0) {
            actionAry.push(cc.callFunc(function () {
                this.isDeleting = false;
                this.checkIsLose();
            }, this));

            this.isDeleting = true;
            var action = cc.sequence(actionAry);
            this.node.runAction(action);

            //加分
            this.addScore(count);
        }

        Util.testCode2('消除逻辑');
    },

    //检测是不是输了
    checkIsLose: function checkIsLose() {
        //如果正在消除中，那就不判断输赢，因为消除后会再判断
        if (this.isDeleting) return;

        var count = 0;
        for (var i = 0; i < 3; i++) {
            var node = cc.find('Canvas/getNewFK' + (i + 1));
            var script = node.getComponent('NewLBXKuai');
            if (script.checkIsLose()) {

                //cc.log("方块" + (i + 1) + "已经无处安放")
                count++;
                node.opacity = 125;
            } else {

                //cc.log("方块" + (i + 1) + "可以安放")
                node.opacity = 255;
            }
        }

        if (count == 3) {
            var shuNode = cc.instantiate(this.shuPrefab);
            this.node.parent.addChild(shuNode);

            cc.log("保存历史最高分");
            var oldScore = cc.sys.localStorage.getItem("score");
            if (oldScore < theScore) {
                cc.sys.localStorage.setItem("score", theScore);
            }
        }
    },

    //加分，参数是消除的总数,isDropAdd是是否是放下的单纯加分
    addScore: function addScore(XCCount, isDropAdd) {
        var addScoreCount = this.getAddScoreCal(XCCount, isDropAdd);
        var node = cc.find('Canvas/score/scoreLabel');
        var label = node.getComponent(cc.Label);

        label.string = addScoreCount + Number(label.string);
        theScore = Number(label.string);
    },

    //计算加分的公式
    getAddScoreCal: function getAddScoreCal(XCCount, isDropAdd) {
        var x = XCCount + 1;
        var addScoreCount = isDropAdd ? x : 2 * x * x; //数量的平方
        return addScoreCount;
    },

    //获得两个数组的交集
    get2AryIntersect: function get2AryIntersect(ary1, ary2) {
        var intersectAry = [];
        for (var i = 0; i < ary1.length; i++) {
            for (var j = 0; j < ary2.length; j++) {
                if (ary2[j] == ary1[i]) {
                    intersectAry.push(ary2[j]);
                }
            }
        }

        return intersectAry;
    },

    /**
     * 获得两个数组的交集
     * @param  {array}数组1
     * @param  {array}数组2
     * @return {boolean}是否相交
     */
    check2AryIsEqual: function check2AryIsEqual(ary1, ary2) {
        for (var i = 0; i < ary1.length; i++) {
            if (ary2[i] != ary1[i]) {
                return false;
            }
        }

        return true;
    },

    // use this for initialization
    onLoad: function onLoad() {

        var srcPos = cc.p(this.node.x, this.node.y);
        var lbxNodes = [];
        var lbxNodesIndex = 0;
        var maxCount = this["bianchanggezishu"] * 2 - 1;

        //位置表
        var posList = [
        //第一行的位置信息
        {
            count: 5,
            srcPos: cc.p(0, 0)
        },

        //第二行的位置信息
        {
            count: 6,
            srcPos: cc.p(2 * this["liubianxingH"], 0)
        },

        //第三行的位置信息
        {
            count: 7,
            srcPos: cc.p(2 * this["liubianxingH"] * 2, 0)
        },

        //第四行的位置信息
        {
            count: 8,
            srcPos: cc.p(2 * this["liubianxingH"] * 3, 0)
        },

        //第五行的位置信息
        {
            count: 9,
            srcPos: cc.p(2 * this["liubianxingH"] * 4, 0)
        },

        //第六行的位置信息
        {
            count: 8,
            srcPos: cc.p(2 * this["liubianxingH"] * 4 + this["liubianxingH"], -3 * this["liubianxingA"] / 2)
        },

        //第七行的位置信息
        {
            count: 7,
            srcPos: cc.p(2 * this["liubianxingH"] * 4 + this["liubianxingH"] * 2, -3 * this["liubianxingA"] * 2 / 2)
        },

        //第八行的位置信息
        {
            count: 6,
            srcPos: cc.p(2 * this["liubianxingH"] * 4 + this["liubianxingH"] * 3, -3 * this["liubianxingA"] * 3 / 2)
        },

        //第九行的位置信息
        {
            count: 5,
            srcPos: cc.p(2 * this["liubianxingH"] * 4 + this["liubianxingH"] * 4, -3 * this["liubianxingA"] * 4 / 2)
        }];

        //要加的单位向量
        var addVec = cc.pMult(cc.pForAngle(240 * (2 * Math.PI / 360)), this["liubianxingH"] * 2);

        //偏移至源点0，0的向量
        var pianyiTo0p0Vec = cc.pMult(cc.pForAngle(120 * (2 * Math.PI / 360)), this["liubianxingH"] * 2 * 4);

        var frameList = [];

        var fPosList = [];
        //一列列来生成
        for (var i = 0; i < posList.length; i++) {
            var count = posList[i].count; //数量
            var oneSrcPos = cc.pAdd(posList[i].srcPos, pianyiTo0p0Vec); //起始位置
            var aimPos = cc.pAdd(srcPos, oneSrcPos); //一条的起始位置

            for (var j = 0; j < count; j++) {
                var fPos = cc.pAdd(aimPos, cc.pMult(addVec, j));
                fPosList.push(fPos);
            }
        }

        //初始化
        for (var index = 0; index < fPosList.length; index++) {
            var node = new cc.Node("frame");
            var sprite = node.addComponent(cc.Sprite);
            sprite.spriteFrame = this["framePic"];

            node.x = fPosList[index].x;
            node.y = fPosList[index].y;

            //debug字用
            // var labelNode = new cc.Node("New Label")
            // var labelCp = node.addComponent(cc.Label)
            // labelCp.string = index//"x:"+Math.floor(node.x) + "\ny:" + Math.floor(node.y)
            // labelCp.overflow = cc.Label.Overflow.RESIZE_HEIGHT
            // labelCp.fontSize = 18
            // labelNode.parent = node

            node.parent = this.node;

            node.FKIndex = index;

            //加边
            var picNode = new cc.Node("bianSpr");
            var spr = picNode.addComponent(cc.Sprite);
            spr.spriteFrame = this["bian"];
            picNode.active = false;
            picNode.parent = node;

            frameList.push(node);
        }

        this.frameList = frameList;
        this.posList = posList;
        this.isDeleting = false; //判断是否正在消除的依据

        //监听成功放下事件
        this.node.on('succDropDownOne', this.checkXC, this);

        //初始化历史最高分
        var node = cc.find('Canvas/highScore/scoreLabel');
        var label = node.getComponent(cc.Label);
        label.string = cc.sys.localStorage.getItem("score") || 0;

        //cc.log(cc.myAssets)
    }

});

cc._RFpop();
},{"Util":"Util"}],"LoadCp":[function(require,module,exports){
"use strict";
cc._RFpush(module, '1e722mUEcZHqq0Plb9cwFF7', 'LoadCp');
// script\LoadCp.js



cc.Class({
    "extends": cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {

        cc.log("开始加载资源");
        cc.view.enableRetina(false);
        // cc.view.enableAutoFullScreen(true)
        cc.myAssets = {};

        var resList = [
        //"sounds",
        "pics",
        // "scenes",
        "prefabs", "fonts", "anims"];

        // var soundResList = [
        //     "res/raw-assets/sounds/an.mp3",
        //     "res/raw-assets/sounds/an.mp3",
        //     "res/raw-assets/sounds/bgm.mp3",
        //     "res/raw-assets/sounds/cannot1.mp3",
        //     "res/raw-assets/sounds/cannot2.mp3",
        //     "res/raw-assets/sounds/fangxia1.mp3",
        //     "res/raw-assets/sounds/fangxia2.mp3",
        //     "res/raw-assets/sounds/fangxia3.mp3",
        //     "res/raw-assets/sounds/xiaochu.mp3",
        // ]

        // 加载目录下所有资源
        var count = 0;
        for (var i = 0; i < resList.length; i++) {
            cc.loader.loadResAll(resList[i], (function (i, err, assets) {
                cc.myAssets[resList[i]] = assets;
                cc.log("资源加载完成" + count);
                count++;
                if (count >= resList.length) {
                    //为了前置加载音效，这里直接为这个场景添加所有声音的组件
                    // for (var j = 0; j < soundResList.length; j++) {
                    //     cc.audioEngine.playEffect(cc.url.raw(soundResList[j]), false, 0)
                    // }

                    //开始游戏
                    cc.director.loadScene("startScene");
                }
            }).bind(this, i));
        }
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"NewLBXKuai":[function(require,module,exports){
"use strict";
cc._RFpush(module, '7f7eecsfeNLxL7pMDgXTdAA', 'NewLBXKuai');
// script\gameCore\NewLBXKuai.js

var _properties;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InitLBXFrame = require('InitLBXFrame');
var Util = require('Util');
var scaleParam = 0.7;

cc.Class({
    'extends': cc.Component,

    properties: (_properties = {
        checkerboard: {
            'default': null,
            type: InitLBXFrame
        }

    }, _defineProperty(_properties, "Kcount", 3), _defineProperty(_properties, "liubianxingH", 0), _defineProperty(_properties, "liubianxingA", 0), _defineProperty(_properties, "kuaiTex", {
        'default': null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, "color1", {
        'default': null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, "color2", {
        'default': null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, "color3", {
        'default': null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, "color4", {
        'default': null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, 'anSound', {
        'default': null,
        url: cc.AudioClip
    }), _defineProperty(_properties, 'fangxiaSound1', {
        'default': null,
        url: cc.AudioClip
    }), _defineProperty(_properties, 'fangxiaSound2', {
        'default': null,
        url: cc.AudioClip
    }), _defineProperty(_properties, 'fangxiaSound3', {
        'default': null,
        url: cc.AudioClip
    }), _defineProperty(_properties, 'canNotSound1', {
        'default': null,
        url: cc.AudioClip
    }), _defineProperty(_properties, 'canNotSound2', {
        'default': null,
        url: cc.AudioClip
    }), _properties),

    getTheConfig: function getTheConfig() {

        var a = this["liubianxingA"];
        var h = this["liubianxingH"];

        var configLists = [
        //一个
        [cc.p(0, 0)],
        //两个
        [cc.p(0, 0), cc.p(h * 2, 0)], //横摆
        [cc.p(0, 0), cc.p(h, a * 1.5)], //斜摆1
        [cc.p(0, 0), cc.p(h, -a * 1.5)], //斜摆2
        //三个
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 4, 0)], //横摆

        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 3, a * 1.5)], //横摆1
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 3, -a * 1.5)], //横摆2
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h, a * 1.5)], //堆1
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h, -a * 1.5)], //堆2

        [cc.p(0, 0), cc.p(h, a * 1.5), cc.p(h * 3, a * 1.5)], //斜摆1
        [cc.p(0, 0), cc.p(h, a * 1.5), cc.p(h * 2, a * 3)], //斜摆2
        [cc.p(0, 0), cc.p(h, a * 1.5), cc.p(0, a * 3)], //斜摆3

        [cc.p(0, 0), cc.p(h, -a * 1.5), cc.p(h * 3, -a * 1.5)], //斜下摆1
        [cc.p(0, 0), cc.p(h, -a * 1.5), cc.p(h * 2, -a * 3)], //斜下摆2
        [cc.p(0, 0), cc.p(h, -a * 1.5), cc.p(0, -a * 3)], //斜下摆3
        //四个
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 4, 0), cc.p(h * 6, 0)], //横摆1
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 4, 0), cc.p(h * 5, a * 1.5)], //横摆2
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 4, 0), cc.p(h * 5, -a * 1.5)], //横摆3
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 4, 0), cc.p(h * 3, a * 1.5)], //横摆4
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 4, 0), cc.p(h * 3, -a * 1.5)], //横摆5

        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 3, a * 1.5), cc.p(h, a * 1.5)], //斜上摆1
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 3, a * 1.5), cc.p(h * 2, a * 3)], //斜上摆2
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 3, a * 1.5), cc.p(h * 4, a * 3)], //斜上摆3
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 3, a * 1.5), cc.p(h * 5, a * 1.5)], //斜上摆4

        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 3, -a * 1.5), cc.p(h, -a * 1.5)], //斜下摆1
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 3, -a * 1.5), cc.p(h * 2, -a * 3)], //斜下摆2
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 3, -a * 1.5), cc.p(h * 4, -a * 3)], //斜下摆3
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h * 3, -a * 1.5), cc.p(h * 5, -a * 1.5)], //斜下摆4

        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h, -a * 1.5), cc.p(-h, -a * 1.5)], //下堆1
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h, -a * 1.5), cc.p(0, -a * 3)], //下堆2
        [cc.p(0, 0), cc.p(h * 2, 0), cc.p(h, -a * 1.5), cc.p(h * 2, -a * 3)], //下堆3

        [cc.p(0, 0), cc.p(h, -a * 1.5), cc.p(h * 2, -a * 3), cc.p(h * 3, -a * 4.5)], //斜扛1
        [cc.p(0, 0), cc.p(-h, -a * 1.5), cc.p(-h * 2, -a * 3), cc.p(-h * 3, -a * 4.5)]];

        //斜扛2

        return configLists;
    },

    newOneK: function newOneK(colorIndex) {
        //创建一个块
        var node = new cc.Node("colorSpr");
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = this["color" + colorIndex];

        //cc.log("第",colorIndex,"个颜color")

        //加纹理
        var wenliNode = new cc.Node("wenliSpr");
        var wenliSprite = wenliNode.addComponent(cc.Sprite);
        wenliSprite.spriteFrame = this["kuaiTex"];

        wenliNode.parent = node;

        return node;
    },

    newOneNode: function newOneNode() {
        var kuaiNode = new cc.Node("kuai");

        var config = this.getTheConfig();

        //随机样子
        var randomIndex = Util.random(0, config.length - 1);
        var posList = config[randomIndex];

        var randomIndex = Util.random(1, 4);
        var sumX = 0;
        var countX = 0;
        var sumY = 0;
        var countY = 0;
        for (var index = 0; index < posList.length; index++) {
            var pos = posList[index];
            var kuai = this.newOneK(randomIndex);
            kuai.x = pos.x;

            sumX += kuai.x;
            countX++;

            kuai.y = pos.y;

            sumY += kuai.y;
            countY++;

            kuaiNode.addChild(kuai);
        }

        kuaiNode.x = -sumX / countX;
        kuaiNode.y = -sumY / countY;

        kuaiNode.setScale(scaleParam);

        return kuaiNode;
    },

    //添加触摸
    addTouchEvent: function addTouchEvent() {
        var upH = 100;
        var self = this;

        this.node.ox = this.node.x;
        this.node.oy = this.node.y;

        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            this.y += upH;
            //cc.log("原位置：", this.ox, this.oy)

            this.getChildByName("kuai").setScale(1);

            cc.audioEngine.playEffect(self.anSound);
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {

            var delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;

            self.collisionFunc();

            //变色处理
            if (!self.checkIsCanDrop()) {
                self.changeColorDeal(true);
            } else {
                self.changeColorDeal();
            }
        }, this.node);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            this.dropDownFunc();
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            this.dropDownFunc();
        }, this);
    },

    //变色处理
    changeColorDeal: function changeColorDeal(isJustClearColor) {
        //cc.log("变色！"+isJustClearColor, this.checkFrameList.length, "this.checkerboard.frameList.length:", this.checkerboard.frameList.length)

        for (var i = 0; i < this.checkerboard.frameList.length; i++) {

            var guangPicNode = this.checkerboard.frameList[i].getChildByName("bianSpr");
            guangPicNode.active = false;
        }

        //如果参数有值，直接返回，不做下面的
        if (isJustClearColor) {
            return;
        }

        for (var i = 0; i < this.checkFrameList.length; i++) {

            var guangPicNode = this.checkFrameList[i].getChildByName("bianSpr");
            guangPicNode.active = true;
        }
    },

    //碰撞逻辑
    collisionFunc: function collisionFunc() {
        //debug字用
        // this.debugLabel.string = "x:"+Math.floor(this.node.x) + "\ny:" + Math.floor(this.node.y)
        //cc.log("x:", this.node.x, "y:", this.node.y, this.node)

        this.checkFrameList = []; //清空数组
        this.checkFKlist = []; //清空数组

        var children = this.node.children[0].children;

        for (var i = 0; i < children.length; i++) {

            var pianyiCPos = cc.pAdd(cc.p(this.node.children[0].x, this.node.children[0].y), cc.p(children[i].x, children[i].y));
            var childPos = cc.pAdd(this.node.position, pianyiCPos);
            var frame = this.checkPosFunc(childPos);

            if (frame) {
                this.checkFKlist.push(children[i]);
                this.checkFrameList.push(frame);
            }
        }
    },

    //一个点和棋盘的所有框检测
    checkPosFunc: function checkPosFunc(pos) {
        var len = 27; //碰撞距离

        for (var i = 0; i < this.checkerboard.frameList.length; i++) {
            var frameNode = this.checkerboard.frameList[i];
            var dis = cc.pDistance(cc.p(frameNode.x, frameNode.y), pos);
            if (dis <= len) {
                return frameNode;
            }
        }
    },

    //检测自身是否已经无处可放
    checkIsLose: function checkIsLose() {
        var canDropCount = 0;

        var children = this.node.children[0].children;

        //一个个格子放试一下能不能放
        for (var i = 0; i < this.checkerboard.frameList.length; i++) {
            var frameNode = this.checkerboard.frameList[i];
            var srcPos = cc.p(frameNode.x, frameNode.y);

            var count = 1;
            if (!frameNode.isHaveFK) {

                //这里做是否可以放的判断

                for (var j = 1; j < children.length; j++) {
                    var len = 27; //碰撞距离
                    var childPos = cc.pAdd(srcPos, cc.p(children[j].x, children[j].y));

                    //碰撞检测
                    for (var k = 0; k < this.checkerboard.frameList.length; k++) {
                        var tFrameNode = this.checkerboard.frameList[k];
                        var dis = cc.pDistance(cc.p(tFrameNode.x, tFrameNode.y), childPos);
                        if (dis <= len && !tFrameNode.isHaveFK) {
                            count++; //可以放就要累加计数
                        }
                    }
                }
                //cc.log("格子"+ frameNode.FKIndex +"判断是否能放：",children.length, count)

                //如果数量相等就说明这个方块在这个格子是可以放下的
                if (count == children.length) {
                    //cc.log(frameNode.FKIndex + "的位置可以放", children.length, count)
                    canDropCount++;
                }
            }
        }

        if (canDropCount == 0) {
            return true;
        } else {
            return false;
        }
    },

    //检测是否能够放下
    checkIsCanDrop: function checkIsCanDrop() {
        //先判断数量是否一致，不一致说明有一个超出去了
        if (this.checkFrameList.length == 0 || this.checkFrameList.length != this.node.children[0].children.length) {
            return false;
        }

        //检测放下的格子是否已经有方块
        for (var i = 0; i < this.checkFrameList.length; i++) {
            if (this.checkFrameList[i].isHaveFK) {
                return false;
            }
        }

        return true;
    },

    //放下逻辑
    dropDownFunc: function dropDownFunc() {
        //Util.testCode1('放下逻辑')

        if (!this.checkIsCanDrop()) {
            //放回去
            this.takeBack();

            cc.audioEngine.playEffect(this.canNotSound1);
            return;
        }

        for (var i = 0; i < this.checkFKlist.length; i++) {
            this.checkFKlist[i].x = 0;
            this.checkFKlist[i].y = 0;

            this.checkFKlist[i].parent = this.checkFrameList[i];
            this.checkFrameList[i].isHaveFK = true;

            //cc.log("this.checkFrameList["+i+"]:", this.checkFrameList[i])

            //特效
            // var picNode = new cc.Node("guangEffNode")
            // var spr = picNode.addComponent(cc.Sprite)
            // spr.spriteFrame = this.checkerboard["bian"]
            // this.checkFrameList[i].addChild(picNode, -1)
            // var action = cc.repeatForever(cc.sequence(
            //     cc.spawn(cc.fadeOut(1), cc.scaleTo(1, 1.2)),
            //     cc.removeSelf()
            // ))
            // picNode.runAction(action)
        }

        this.node.removeAllChildren();
        var oneNode = this.newOneNode();
        this.node.addChild(oneNode);

        this.checkerboard.curFKLen = this.checkFKlist.length;
        this.checkerboard.node.emit('succDropDownOne');

        var ranC = Util.random(1, 3);
        cc.audioEngine.playEffect(this["fangxiaSound" + ranC]);

        //放回去
        this.takeBack();

        //直接用棋盘检测是不是输了
        this.checkerboard.checkIsLose();

        //Util.testCode2()
    },

    //回到原位
    takeBack: function takeBack() {
        //变色处理
        this.checkFrameList = []; //清空数组
        this.changeColorDeal();

        this.node.getChildByName("kuai").setScale(scaleParam);

        this.node.x = this.node.ox;
        this.node.y = this.node.oy;
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.checkFrameList = [];
        this.checkFKlist = [];

        this.node.cascadeOpacity = true;

        var oneNode = this.newOneNode();
        this.node.addChild(oneNode);

        //添加触摸
        this.addTouchEvent();

        //debug字用
        // var labelNode = new cc.Node("New Label")
        // var labelCp = this.node.addComponent(cc.Label)
        // labelCp.string = "x:"+Math.floor(this.node.x) + "\ny:" + Math.floor(this.node.y)
        // labelCp.fontSize = 18
        // labelNode.parent = this.node
        // labelNode.zIndex = 1
        // cc.log("Node zIndex: " + labelNode.zIndex)
        // this.debugLabel = labelCp
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{"InitLBXFrame":"InitLBXFrame","Util":"Util"}],"ScoreBtnCp":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'fa093eyq9ROGJnwYLEn4xRL', 'ScoreBtnCp');
// script\ScoreBtnCp.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"StartBtnCp":[function(require,module,exports){
"use strict";
cc._RFpush(module, '7d9dd4jmi9I7Z1fgVPHfEXS', 'StartBtnCp');
// script\StartBtnCp.js

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

cc.Class({
    "extends": cc.Component,

    properties: _defineProperty({}, "游戏界面", {
        "default": null,
        type: cc.Prefab
    }),

    onClick: function onClick() {
        var canvas = this.node.parent;
        var action = cc.sequence(cc.scaleTo(0.2, 0), cc.callFunc(function () {
            cc.log("开始游戏");

            cc.director.loadScene("gameScene");

            this.node.destroy();
        }, this));

        var anim = this.getComponent(cc.Animation);
        anim.stop();

        this.node.runAction(action);
    },

    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"TipCp":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2da59+FgkRFGqzGIbcv57tI', 'TipCp');
// script\TipCp.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.x = 0;
        this.node.y = 0;
        this.node.runAction(cc.sequence(cc.spawn(cc.fadeOut(1), cc.moveBy(1, cc.p(0, 100))), cc.removeSelf(true)));
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"Util":[function(require,module,exports){
"use strict";
cc._RFpush(module, '1f57fJXW/5MwpzGE2th5qGE', 'Util');
// script\gameCore\common\Util.js

/**
 * Created by Administrator on 2016/5/6.
 */

var _p = {

    //遍历对象的属性和方法
    printObj: function printObj(obj) {
        // 用来保存所有的属性名称和值
        var props = "";
        // 开始遍历
        for (var p in obj) {
            // 方法
            if (typeof obj[p] == " function ") {
                props += p + " \n ";
            } else {
                // p 为属性名称，obj[p]为对应属性的值
                props += p + " \n ";
            }
        } // 最后显示所有的属性

        cc.log(props);
    },

    //随机
    random: function random(min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    testCodeStr: '',

    testCode1: function testCode1(str) {
        this.start = new Date().getTime(); //起始时间
        this.testCodeStr = str;
    },

    testCode2: function testCode2(str) {
        this.end = new Date().getTime(); //接受时间
        var timeStr = this.end - this.start + "ms";
        cc.log("此处花时间：" + timeStr + this.testCodeStr);
    }

};

module.exports = _p;

cc._RFpop();
},{}],"ZIndexSet":[function(require,module,exports){
"use strict";
cc._RFpush(module, '0f727RVfzZIHZgekF5A2mIS', 'ZIndexSet');
// script\ZIndexSet.js

cc.Class({
    "extends": cc.Component,

    properties: {
        zIndex: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.zIndex = this.zIndex;
    }

});

cc._RFpop();
},{}]},{},["ZIndexSet","LoadCp","Util","TipCp","BgRandomMove","BackBtnCp","InitLBXFrame","StartBtnCp","NewLBXKuai","App","ButtonControl","GameData","ScoreBtnCp"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9zY3JpcHQvZ2FtZUNvcmUvQXBwLmpzIiwiYXNzZXRzL3NjcmlwdC9CYWNrQnRuQ3AuanMiLCJhc3NldHMvc2NyaXB0L0JnUmFuZG9tTW92ZS5qcyIsImFzc2V0cy9zY3JpcHQvZ2FtZUNvcmUvY29tbW9uL0J1dHRvbkNvbnRyb2wuanMiLCJhc3NldHMvc2NyaXB0L0dhbWVEYXRhLmpzIiwiYXNzZXRzL3NjcmlwdC9nYW1lQ29yZS9Jbml0TEJYRnJhbWUuanMiLCJhc3NldHMvc2NyaXB0L0xvYWRDcC5qcyIsImFzc2V0cy9zY3JpcHQvZ2FtZUNvcmUvTmV3TEJYS3VhaS5qcyIsImFzc2V0cy9zY3JpcHQvU2NvcmVCdG5DcC5qcyIsImFzc2V0cy9zY3JpcHQvU3RhcnRCdG5DcC5qcyIsImFzc2V0cy9zY3JpcHQvVGlwQ3AuanMiLCJhc3NldHMvc2NyaXB0L2dhbWVDb3JlL2NvbW1vbi9VdGlsLmpzIiwiYXNzZXRzL3NjcmlwdC9aSW5kZXhTZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2JjOTc3MlpWZVZNMm9td1N2UCtrQWFyJywgJ0FwcCcpO1xuLy8gc2NyaXB0XFxnYW1lQ29yZVxcQXBwLmpzXG5cbnZhciBhcHAgPSB7XG4gICAgc3RhcnRHYW1lOiBmdW5jdGlvbiBzdGFydEdhbWUoKSB7fVxufTtcblxuLy/liqDovb3mqKHlnZco5pyJ6aG65bqPKVxudmFyIG1vZFBhdGggPSBbJ1V0aWwnXTtcblxuZm9yICh2YXIgaSBpbiBtb2RQYXRoKSB7XG4gICAgdmFyIHBhdGggPSBtb2RQYXRoW2ldO1xuICAgIHJlcXVpcmUocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnM2M1ZTlGWUhEOUx4WldaMzl1ZFFGbmknLCAnQmFja0J0bkNwJyk7XG4vLyBzY3JpcHRcXEJhY2tCdG5DcC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG5cbiAgICB9LFxuXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgLy90aGlzLm5vZGUucGFyZW50LmRlc3Ryb3koKVxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lU2NlbmVcIik7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge31cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzJlZmZmSjFobFJNeTZORUhwN0lNY0ppJywgJ0JnUmFuZG9tTW92ZScpO1xuLy8gc2NyaXB0XFxCZ1JhbmRvbU1vdmUuanNcblxudmFyIF9wcm9wZXJ0aWVzO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IChfcHJvcGVydGllcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwiWOi9tOenu+WKqOi3neemu1wiLCAxKSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcInnovbTnp7vliqjot53nprtcIiwgMSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCLnp7vliqjpgJ/luqYo5Y2V5L2N77ya5YOP57SgL+enkilcIiwgMjApLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwi6ZqP5py66YePXCIsIDEwKSwgX3Byb3BlcnRpZXMpLFxuXG4gICAgLy/pmo/mnLrnp7vliqhcbiAgICByYW5kb21Nb3ZlOiBmdW5jdGlvbiByYW5kb21Nb3ZlKCkge1xuXG4gICAgICAgIHZhciBkdCA9IGNjLnBMZW5ndGgoY2MucCh0aGlzW1wiWOi9tOenu+WKqOi3neemu1wiXSwgdGhpc1tcInnovbTnp7vliqjot53nprtcIl0pKSAvIHRoaXNbXCLnp7vliqjpgJ/luqYo5Y2V5L2N77ya5YOP57SgL+enkilcIl07XG4gICAgICAgIHZhciByYW5kb21EaXIgPSBjYy5wTXVsdChjYy5wTm9ybWFsaXplKGNjLnAoY2MucmFuZG9tTWludXMxVG8xKCksIGNjLnJhbmRvbU1pbnVzMVRvMSgpKSksIHRoaXNbXCLpmo/mnLrph49cIl0pO1xuXG4gICAgICAgIHZhciBtb3ZlRGlyID0gY2MucEFkZChjYy5wKHRoaXNbXCJY6L2056e75Yqo6Led56a7XCJdLCB0aGlzW1wieei9tOenu+WKqOi3neemu1wiXSksIHJhbmRvbURpcik7XG5cbiAgICAgICAgdmFyIGFjdGlvbiA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoY2MubW92ZUJ5KGR0LCBtb3ZlRGlyKSwgY2MubW92ZUJ5KGR0LCBjYy5wTXVsdChtb3ZlRGlyLCAtMSkpKSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5yYW5kb21Nb3ZlKCk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYzJkNWJWSTY3WlBBcThVNWpYbG1Hd0MnLCAnQnV0dG9uQ29udHJvbCcpO1xuLy8gc2NyaXB0XFxnYW1lQ29yZVxcY29tbW9uXFxCdXR0b25Db250cm9sLmpzXG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczogX2RlZmluZVByb3BlcnR5KHt9LCBcIumfs+aViFwiLCB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pLFxuXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzW1wi6Z+z5pWIXCJdKTtcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZjkwNjkzR1RtbEdTN1Q1ZmtubkROVHknLCAnR2FtZURhdGEnKTtcbi8vIHNjcmlwdFxcR2FtZURhdGEuanNcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiBfZGVmaW5lUHJvcGVydHkoe30sIFwi5YiG5pWwXCIsIDApLFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNzM4MTB1bi9MOUIrN3B0dWJRZkx2SHknLCAnSW5pdExCWEZyYW1lJyk7XG4vLyBzY3JpcHRcXGdhbWVDb3JlXFxJbml0TEJYRnJhbWUuanNcblxudmFyIF9wcm9wZXJ0aWVzO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgZGlzTGlzdCA9IFtcbi8v5LiA5Liq5pa55ZCRXG5bMCwgMSwgMiwgMywgNF0sIFs1LCA2LCA3LCA4LCA5LCAxMF0sIFsxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxN10sIFsxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjVdLCBbMjYsIDI3LCAyOCwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNF0sIFszNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDJdLCBbNDMsIDQ0LCA0NSwgNDYsIDQ3LCA0OCwgNDldLCBbNTAsIDUxLCA1MiwgNTMsIDU0LCA1NV0sIFs1NiwgNTcsIDU4LCA1OSwgNjBdLFxuXG4vL+WPpuS4gOS4quaWueWQkVxuWzI2LCAzNSwgNDMsIDUwLCA1Nl0sIFsxOCwgMjcsIDM2LCA0NCwgNTEsIDU3XSwgWzExLCAxOSwgMjgsIDM3LCA0NSwgNTIsIDU4XSwgWzUsIDEyLCAyMCwgMjksIDM4LCA0NiwgNTMsIDU5XSwgWzAsIDYsIDEzLCAyMSwgMzAsIDM5LCA0NywgNTQsIDYwXSwgWzEsIDcsIDE0LCAyMiwgMzEsIDQwLCA0OCwgNTVdLCBbMiwgOCwgMTUsIDIzLCAzMiwgNDEsIDQ5XSwgWzMsIDksIDE2LCAyNCwgMzMsIDQyXSwgWzQsIDEwLCAxNywgMjUsIDM0XSxcblxuLy/mqKrlkJFcblswLCA1LCAxMSwgMTgsIDI2XSwgWzEsIDYsIDEyLCAxOSwgMjcsIDM1XSwgWzIsIDcsIDEzLCAyMCwgMjgsIDM2LCA0M10sIFszLCA4LCAxNCwgMjEsIDI5LCAzNywgNDQsIDUwXSwgWzQsIDksIDE1LCAyMiwgMzAsIDM4LCA0NSwgNTEsIDU2XSwgWzEwLCAxNiwgMjMsIDMxLCAzOSwgNDYsIDUyLCA1N10sIFsxNywgMjQsIDMyLCA0MCwgNDcsIDUzLCA1OF0sIFsyNSwgMzMsIDQxLCA0OCwgNTQsIDU5XSwgWzM0LCA0MiwgNDksIDU1LCA2MF1dO1xuXG52YXIgVXRpbCA9IHJlcXVpcmUoJ1V0aWwnKTtcbnZhciB0aGVTY29yZSA9IDA7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczogKF9wcm9wZXJ0aWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJiaWFuY2hhbmdnZXppc2h1XCIsIDUpLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwibGl1YmlhbnhpbmdIXCIsIDApLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwibGl1YmlhbnhpbmdBXCIsIDApLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwiZnJhbWVQaWNcIiwge1xuICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWVcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcImJpYW5cIiwge1xuICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWVcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcInhpYW9jaHVTb3VuZFwiLCB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwic2h1UHJlZmFiXCIsIHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwiYm9vbUVmZlByZWZhYlwiLCB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcInRpcFByZWZhYlwiLCB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICB9KSwgX3Byb3BlcnRpZXMpLFxuXG4gICAgLyoqXHJcbiAgICAgKiDmtojpmaTmo4DmtYtcclxuICAgICAqIEBwYXJhbSAge1t0eXBlXX1cclxuICAgICAqIEByZXR1cm4ge1t0eXBlXX1cclxuICAgICAqL1xuICAgIGNoZWNrWEM6IGZ1bmN0aW9uIGNoZWNrWEMoYXJndW1lbnQpIHtcbiAgICAgICAgVXRpbC50ZXN0Q29kZTEoJ+a2iOmZpOmAu+i+kScpO1xuXG4gICAgICAgIC8v5pS+5LiL6YO95Yqg5YiGXG4gICAgICAgIHRoaXMuYWRkU2NvcmUodGhpcy5jdXJGS0xlbiwgdHJ1ZSk7XG4gICAgICAgIC8v5Yqg5YiG6aOY5a2XXG4gICAgICAgIHZhciB0aXBOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBQcmVmYWIpO1xuICAgICAgICB0aXBOb2RlLmNvbG9yID0gY2MuY29sb3IoMjExLCA3MCwgNTAsIDI1NSk7XG4gICAgICAgIHZhciBsYWJlbCA9IHRpcE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gXCIrXCIgKyB0aGlzLmdldEFkZFNjb3JlQ2FsKHRoaXMuY3VyRktMZW4sIHRydWUpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGlwTm9kZSk7XG5cbiAgICAgICAgdmFyIGhhdmVGS0luZGV4TGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnJhbWVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZUxpc3RbaV0uaXNIYXZlRkspIHtcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyh0aGlzLmZyYW1lTGlzdFtpXS5GS0luZGV4KVxuICAgICAgICAgICAgICAgIGhhdmVGS0luZGV4TGlzdC5wdXNoKHRoaXMuZnJhbWVMaXN0W2ldLkZLSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaGF2ZUZLSW5kZXhMaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jYy5sb2coXCJoYXZlRktJbmRleExpc3TvvJpcIiwgaGF2ZUZLSW5kZXhMaXN0LnRvU3RyaW5nKCkpXG5cbiAgICAgICAgdmFyIHhjTGlzdCA9IFtdOyAvL+imgea2iOmZpOeahOaWueWdl+WIl+ihqFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvbmVYQ0xpc3QgPSBkaXNMaXN0W2ldO1xuICAgICAgICAgICAgdmFyIGludGVyc2VjdEFyeSA9IHRoaXMuZ2V0MkFyeUludGVyc2VjdChoYXZlRktJbmRleExpc3QsIG9uZVhDTGlzdCk7XG5cbiAgICAgICAgICAgIGlmIChpbnRlcnNlY3RBcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiaW50ZXJzZWN0QXJ5OlwiLCBpbnRlcnNlY3RBcnkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIm9uZVhDTGlzdDpcIiwgb25lWENMaXN0LnRvU3RyaW5nKCkpXG5cbiAgICAgICAgICAgICAgICB2YXIgaXNYQyA9IHRoaXMuY2hlY2syQXJ5SXNFcXVhbChvbmVYQ0xpc3QsIGludGVyc2VjdEFyeSk7XG5cbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcImludGVyc2VjdEFyeSDlkowgb25lWENMaXN05piv5ZCm55u4562J77yaXCIsIGlzWEMpXG4gICAgICAgICAgICAgICAgaWYgKGlzWEMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5raI77yB77yBXCIpO1xuICAgICAgICAgICAgICAgICAgICB4Y0xpc3QucHVzaChvbmVYQ0xpc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy54aWFvY2h1U291bmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vY2MubG9nKFwi5raI6Zmk6KGo546w77yB77yBXCIpXG5cbiAgICAgICAgdmFyIGFjdGlvbkFyeSA9IFtdO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8v5raI6ZmkXG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeGNMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIHZhciBvbmVMaXN0ID0geGNMaXN0W2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvbmVMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHhJbmRleCA9IG9uZUxpc3Rbal07XG5cbiAgICAgICAgICAgICAgICBhY3Rpb25BcnkucHVzaChjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4SW5kZXggPSBhcmd1bWVudHNbMV1bMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IGFyZ3VtZW50c1sxXVsxXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVmZk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJvb21FZmZQcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lTGlzdFt4SW5kZXhdLmFkZENoaWxkKGVmZk5vZGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8v5Yqg5YiG6aOY5a2XXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aXBOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBQcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSB0aXBOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwiK1wiICsgdGhpcy5nZXRBZGRTY29yZUNhbChjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVMaXN0W3hJbmRleF0uYWRkQ2hpbGQodGlwTm9kZSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcywgW3hJbmRleCwgY291bnRdKSk7XG5cbiAgICAgICAgICAgICAgICBhY3Rpb25BcnkucHVzaChjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4SW5kZXggPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVMaXN0W3hJbmRleF0uaXNIYXZlRksgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBGS05vZGUgPSB0aGlzLmZyYW1lTGlzdFt4SW5kZXhdLmdldENoaWxkQnlOYW1lKFwiY29sb3JTcHJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghRktOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8v6Ziy5q2i5rKh5pyJ6L+Z5Liq5pa55Z2X55qE5pe25YCZXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9GS05vZGUucmVtb3ZlRnJvbVBhcmVudCgpXG5cbiAgICAgICAgICAgICAgICAgICAgRktOb2RlLmNhc2NhZGVPcGFjaXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy/ov5nkuKrlgYfmlrnlnZflj5jlpKflubbkuJTmuJDpmpDmjolcbiAgICAgICAgICAgICAgICAgICAgRktOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihjYy5zY2FsZVRvKDAuNSwgMiksIGNjLmZhZGVPdXQoMC41KSksIGNjLnJlbW92ZVNlbGYodHJ1ZSkpKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLCB4SW5kZXgpKTtcblxuICAgICAgICAgICAgICAgIGFjdGlvbkFyeS5wdXNoKGNjLmRlbGF5VGltZSgwLjEpKTtcblxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uQXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFjdGlvbkFyeS5wdXNoKGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSXNMb3NlKCk7XG4gICAgICAgICAgICB9LCB0aGlzKSk7XG5cbiAgICAgICAgICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2Muc2VxdWVuY2UoYWN0aW9uQXJ5KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcblxuICAgICAgICAgICAgLy/liqDliIZcbiAgICAgICAgICAgIHRoaXMuYWRkU2NvcmUoY291bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgVXRpbC50ZXN0Q29kZTIoJ+a2iOmZpOmAu+i+kScpO1xuICAgIH0sXG5cbiAgICAvL+ajgOa1i+aYr+S4jeaYr+i+k+S6hlxuICAgIGNoZWNrSXNMb3NlOiBmdW5jdGlvbiBjaGVja0lzTG9zZSgpIHtcbiAgICAgICAgLy/lpoLmnpzmraPlnKjmtojpmaTkuK3vvIzpgqPlsLHkuI3liKTmlq3ovpPotaLvvIzlm6DkuLrmtojpmaTlkI7kvJrlho3liKTmlq1cbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGluZykgcmV0dXJuO1xuXG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9nZXROZXdGSycgKyAoaSArIDEpKTtcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBub2RlLmdldENvbXBvbmVudCgnTmV3TEJYS3VhaScpO1xuICAgICAgICAgICAgaWYgKHNjcmlwdC5jaGVja0lzTG9zZSgpKSB7XG5cbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIuaWueWdl1wiICsgKGkgKyAxKSArIFwi5bey57uP5peg5aSE5a6J5pS+XCIpXG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAxMjU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCLmlrnlnZdcIiArIChpICsgMSkgKyBcIuWPr+S7peWuieaUvlwiKVxuICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudCA9PSAzKSB7XG4gICAgICAgICAgICB2YXIgc2h1Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2h1UHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoc2h1Tm9kZSk7XG5cbiAgICAgICAgICAgIGNjLmxvZyhcIuS/neWtmOWOhuWPsuacgOmrmOWIhlwiKTtcbiAgICAgICAgICAgIHZhciBvbGRTY29yZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjb3JlXCIpO1xuICAgICAgICAgICAgaWYgKG9sZFNjb3JlIDwgdGhlU2NvcmUpIHtcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY29yZVwiLCB0aGVTY29yZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy/liqDliIbvvIzlj4LmlbDmmK/mtojpmaTnmoTmgLvmlbAsaXNEcm9wQWRk5piv5piv5ZCm5piv5pS+5LiL55qE5Y2V57qv5Yqg5YiGXG4gICAgYWRkU2NvcmU6IGZ1bmN0aW9uIGFkZFNjb3JlKFhDQ291bnQsIGlzRHJvcEFkZCkge1xuICAgICAgICB2YXIgYWRkU2NvcmVDb3VudCA9IHRoaXMuZ2V0QWRkU2NvcmVDYWwoWENDb3VudCwgaXNEcm9wQWRkKTtcbiAgICAgICAgdmFyIG5vZGUgPSBjYy5maW5kKCdDYW52YXMvc2NvcmUvc2NvcmVMYWJlbCcpO1xuICAgICAgICB2YXIgbGFiZWwgPSBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgbGFiZWwuc3RyaW5nID0gYWRkU2NvcmVDb3VudCArIE51bWJlcihsYWJlbC5zdHJpbmcpO1xuICAgICAgICB0aGVTY29yZSA9IE51bWJlcihsYWJlbC5zdHJpbmcpO1xuICAgIH0sXG5cbiAgICAvL+iuoeeul+WKoOWIhueahOWFrOW8j1xuICAgIGdldEFkZFNjb3JlQ2FsOiBmdW5jdGlvbiBnZXRBZGRTY29yZUNhbChYQ0NvdW50LCBpc0Ryb3BBZGQpIHtcbiAgICAgICAgdmFyIHggPSBYQ0NvdW50ICsgMTtcbiAgICAgICAgdmFyIGFkZFNjb3JlQ291bnQgPSBpc0Ryb3BBZGQgPyB4IDogMiAqIHggKiB4OyAvL+aVsOmHj+eahOW5s+aWuVxuICAgICAgICByZXR1cm4gYWRkU2NvcmVDb3VudDtcbiAgICB9LFxuXG4gICAgLy/ojrflvpfkuKTkuKrmlbDnu4TnmoTkuqTpm4ZcbiAgICBnZXQyQXJ5SW50ZXJzZWN0OiBmdW5jdGlvbiBnZXQyQXJ5SW50ZXJzZWN0KGFyeTEsIGFyeTIpIHtcbiAgICAgICAgdmFyIGludGVyc2VjdEFyeSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeTEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJ5Mi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChhcnkyW2pdID09IGFyeTFbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0QXJ5LnB1c2goYXJ5MltqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGludGVyc2VjdEFyeTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiDojrflvpfkuKTkuKrmlbDnu4TnmoTkuqTpm4ZcclxuICAgICAqIEBwYXJhbSAge2FycmF5feaVsOe7hDFcclxuICAgICAqIEBwYXJhbSAge2FycmF5feaVsOe7hDJcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW595piv5ZCm55u45LqkXHJcbiAgICAgKi9cbiAgICBjaGVjazJBcnlJc0VxdWFsOiBmdW5jdGlvbiBjaGVjazJBcnlJc0VxdWFsKGFyeTEsIGFyeTIpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnkxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJ5MltpXSAhPSBhcnkxW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuXG4gICAgICAgIHZhciBzcmNQb3MgPSBjYy5wKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSk7XG4gICAgICAgIHZhciBsYnhOb2RlcyA9IFtdO1xuICAgICAgICB2YXIgbGJ4Tm9kZXNJbmRleCA9IDA7XG4gICAgICAgIHZhciBtYXhDb3VudCA9IHRoaXNbXCJiaWFuY2hhbmdnZXppc2h1XCJdICogMiAtIDE7XG5cbiAgICAgICAgLy/kvY3nva7ooahcbiAgICAgICAgdmFyIHBvc0xpc3QgPSBbXG4gICAgICAgIC8v56ys5LiA6KGM55qE5L2N572u5L+h5oGvXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvdW50OiA1LFxuICAgICAgICAgICAgc3JjUG9zOiBjYy5wKDAsIDApXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy/nrKzkuozooYznmoTkvY3nva7kv6Hmga9cbiAgICAgICAge1xuICAgICAgICAgICAgY291bnQ6IDYsXG4gICAgICAgICAgICBzcmNQb3M6IGNjLnAoMiAqIHRoaXNbXCJsaXViaWFueGluZ0hcIl0sIDApXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy/nrKzkuInooYznmoTkvY3nva7kv6Hmga9cbiAgICAgICAge1xuICAgICAgICAgICAgY291bnQ6IDcsXG4gICAgICAgICAgICBzcmNQb3M6IGNjLnAoMiAqIHRoaXNbXCJsaXViaWFueGluZ0hcIl0gKiAyLCAwKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8v56ys5Zub6KGM55qE5L2N572u5L+h5oGvXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvdW50OiA4LFxuICAgICAgICAgICAgc3JjUG9zOiBjYy5wKDIgKiB0aGlzW1wibGl1YmlhbnhpbmdIXCJdICogMywgMClcbiAgICAgICAgfSxcblxuICAgICAgICAvL+esrOS6lOihjOeahOS9jee9ruS/oeaBr1xuICAgICAgICB7XG4gICAgICAgICAgICBjb3VudDogOSxcbiAgICAgICAgICAgIHNyY1BvczogY2MucCgyICogdGhpc1tcImxpdWJpYW54aW5nSFwiXSAqIDQsIDApXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy/nrKzlha3ooYznmoTkvY3nva7kv6Hmga9cbiAgICAgICAge1xuICAgICAgICAgICAgY291bnQ6IDgsXG4gICAgICAgICAgICBzcmNQb3M6IGNjLnAoMiAqIHRoaXNbXCJsaXViaWFueGluZ0hcIl0gKiA0ICsgdGhpc1tcImxpdWJpYW54aW5nSFwiXSwgLTMgKiB0aGlzW1wibGl1YmlhbnhpbmdBXCJdIC8gMilcbiAgICAgICAgfSxcblxuICAgICAgICAvL+esrOS4g+ihjOeahOS9jee9ruS/oeaBr1xuICAgICAgICB7XG4gICAgICAgICAgICBjb3VudDogNyxcbiAgICAgICAgICAgIHNyY1BvczogY2MucCgyICogdGhpc1tcImxpdWJpYW54aW5nSFwiXSAqIDQgKyB0aGlzW1wibGl1YmlhbnhpbmdIXCJdICogMiwgLTMgKiB0aGlzW1wibGl1YmlhbnhpbmdBXCJdICogMiAvIDIpXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy/nrKzlhavooYznmoTkvY3nva7kv6Hmga9cbiAgICAgICAge1xuICAgICAgICAgICAgY291bnQ6IDYsXG4gICAgICAgICAgICBzcmNQb3M6IGNjLnAoMiAqIHRoaXNbXCJsaXViaWFueGluZ0hcIl0gKiA0ICsgdGhpc1tcImxpdWJpYW54aW5nSFwiXSAqIDMsIC0zICogdGhpc1tcImxpdWJpYW54aW5nQVwiXSAqIDMgLyAyKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8v56ys5Lmd6KGM55qE5L2N572u5L+h5oGvXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvdW50OiA1LFxuICAgICAgICAgICAgc3JjUG9zOiBjYy5wKDIgKiB0aGlzW1wibGl1YmlhbnhpbmdIXCJdICogNCArIHRoaXNbXCJsaXViaWFueGluZ0hcIl0gKiA0LCAtMyAqIHRoaXNbXCJsaXViaWFueGluZ0FcIl0gKiA0IC8gMilcbiAgICAgICAgfV07XG5cbiAgICAgICAgLy/opoHliqDnmoTljZXkvY3lkJHph49cbiAgICAgICAgdmFyIGFkZFZlYyA9IGNjLnBNdWx0KGNjLnBGb3JBbmdsZSgyNDAgKiAoMiAqIE1hdGguUEkgLyAzNjApKSwgdGhpc1tcImxpdWJpYW54aW5nSFwiXSAqIDIpO1xuXG4gICAgICAgIC8v5YGP56e76Iez5rqQ54K5MO+8jDDnmoTlkJHph49cbiAgICAgICAgdmFyIHBpYW55aVRvMHAwVmVjID0gY2MucE11bHQoY2MucEZvckFuZ2xlKDEyMCAqICgyICogTWF0aC5QSSAvIDM2MCkpLCB0aGlzW1wibGl1YmlhbnhpbmdIXCJdICogMiAqIDQpO1xuXG4gICAgICAgIHZhciBmcmFtZUxpc3QgPSBbXTtcblxuICAgICAgICB2YXIgZlBvc0xpc3QgPSBbXTtcbiAgICAgICAgLy/kuIDliJfliJfmnaXnlJ/miJBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSBwb3NMaXN0W2ldLmNvdW50OyAvL+aVsOmHj1xuICAgICAgICAgICAgdmFyIG9uZVNyY1BvcyA9IGNjLnBBZGQocG9zTGlzdFtpXS5zcmNQb3MsIHBpYW55aVRvMHAwVmVjKTsgLy/otbflp4vkvY3nva5cbiAgICAgICAgICAgIHZhciBhaW1Qb3MgPSBjYy5wQWRkKHNyY1Bvcywgb25lU3JjUG9zKTsgLy/kuIDmnaHnmoTotbflp4vkvY3nva5cblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZQb3MgPSBjYy5wQWRkKGFpbVBvcywgY2MucE11bHQoYWRkVmVjLCBqKSk7XG4gICAgICAgICAgICAgICAgZlBvc0xpc3QucHVzaChmUG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v5Yid5aeL5YyWXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBmUG9zTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoXCJmcmFtZVwiKTtcbiAgICAgICAgICAgIHZhciBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpc1tcImZyYW1lUGljXCJdO1xuXG4gICAgICAgICAgICBub2RlLnggPSBmUG9zTGlzdFtpbmRleF0ueDtcbiAgICAgICAgICAgIG5vZGUueSA9IGZQb3NMaXN0W2luZGV4XS55O1xuXG4gICAgICAgICAgICAvL2RlYnVn5a2X55SoXG4gICAgICAgICAgICAvLyB2YXIgbGFiZWxOb2RlID0gbmV3IGNjLk5vZGUoXCJOZXcgTGFiZWxcIilcbiAgICAgICAgICAgIC8vIHZhciBsYWJlbENwID0gbm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpXG4gICAgICAgICAgICAvLyBsYWJlbENwLnN0cmluZyA9IGluZGV4Ly9cIng6XCIrTWF0aC5mbG9vcihub2RlLngpICsgXCJcXG55OlwiICsgTWF0aC5mbG9vcihub2RlLnkpXG4gICAgICAgICAgICAvLyBsYWJlbENwLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVFxuICAgICAgICAgICAgLy8gbGFiZWxDcC5mb250U2l6ZSA9IDE4XG4gICAgICAgICAgICAvLyBsYWJlbE5vZGUucGFyZW50ID0gbm9kZVxuXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgICAgICAgbm9kZS5GS0luZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICAgIC8v5Yqg6L65XG4gICAgICAgICAgICB2YXIgcGljTm9kZSA9IG5ldyBjYy5Ob2RlKFwiYmlhblNwclwiKTtcbiAgICAgICAgICAgIHZhciBzcHIgPSBwaWNOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgc3ByLnNwcml0ZUZyYW1lID0gdGhpc1tcImJpYW5cIl07XG4gICAgICAgICAgICBwaWNOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcGljTm9kZS5wYXJlbnQgPSBub2RlO1xuXG4gICAgICAgICAgICBmcmFtZUxpc3QucHVzaChub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZnJhbWVMaXN0ID0gZnJhbWVMaXN0O1xuICAgICAgICB0aGlzLnBvc0xpc3QgPSBwb3NMaXN0O1xuICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTsgLy/liKTmlq3mmK/lkKbmraPlnKjmtojpmaTnmoTkvp3mja5cblxuICAgICAgICAvL+ebkeWQrOaIkOWKn+aUvuS4i+S6i+S7tlxuICAgICAgICB0aGlzLm5vZGUub24oJ3N1Y2NEcm9wRG93bk9uZScsIHRoaXMuY2hlY2tYQywgdGhpcyk7XG5cbiAgICAgICAgLy/liJ3lp4vljJbljoblj7LmnIDpq5jliIZcbiAgICAgICAgdmFyIG5vZGUgPSBjYy5maW5kKCdDYW52YXMvaGlnaFNjb3JlL3Njb3JlTGFiZWwnKTtcbiAgICAgICAgdmFyIGxhYmVsID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBsYWJlbC5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZVwiKSB8fCAwO1xuXG4gICAgICAgIC8vY2MubG9nKGNjLm15QXNzZXRzKVxuICAgIH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcxZTcyMm1VRWNaSHFxMFBsYjljd0ZGNycsICdMb2FkQ3AnKTtcbi8vIHNjcmlwdFxcTG9hZENwLmpzXG5cblxuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG5cbiAgICAgICAgY2MubG9nKFwi5byA5aeL5Yqg6L296LWE5rqQXCIpO1xuICAgICAgICBjYy52aWV3LmVuYWJsZVJldGluYShmYWxzZSk7XG4gICAgICAgIC8vIGNjLnZpZXcuZW5hYmxlQXV0b0Z1bGxTY3JlZW4odHJ1ZSlcbiAgICAgICAgY2MubXlBc3NldHMgPSB7fTtcblxuICAgICAgICB2YXIgcmVzTGlzdCA9IFtcbiAgICAgICAgLy9cInNvdW5kc1wiLFxuICAgICAgICBcInBpY3NcIixcbiAgICAgICAgLy8gXCJzY2VuZXNcIixcbiAgICAgICAgXCJwcmVmYWJzXCIsIFwiZm9udHNcIiwgXCJhbmltc1wiXTtcblxuICAgICAgICAvLyB2YXIgc291bmRSZXNMaXN0ID0gW1xuICAgICAgICAvLyAgICAgXCJyZXMvcmF3LWFzc2V0cy9zb3VuZHMvYW4ubXAzXCIsXG4gICAgICAgIC8vICAgICBcInJlcy9yYXctYXNzZXRzL3NvdW5kcy9hbi5tcDNcIixcbiAgICAgICAgLy8gICAgIFwicmVzL3Jhdy1hc3NldHMvc291bmRzL2JnbS5tcDNcIixcbiAgICAgICAgLy8gICAgIFwicmVzL3Jhdy1hc3NldHMvc291bmRzL2Nhbm5vdDEubXAzXCIsXG4gICAgICAgIC8vICAgICBcInJlcy9yYXctYXNzZXRzL3NvdW5kcy9jYW5ub3QyLm1wM1wiLFxuICAgICAgICAvLyAgICAgXCJyZXMvcmF3LWFzc2V0cy9zb3VuZHMvZmFuZ3hpYTEubXAzXCIsXG4gICAgICAgIC8vICAgICBcInJlcy9yYXctYXNzZXRzL3NvdW5kcy9mYW5neGlhMi5tcDNcIixcbiAgICAgICAgLy8gICAgIFwicmVzL3Jhdy1hc3NldHMvc291bmRzL2Zhbmd4aWEzLm1wM1wiLFxuICAgICAgICAvLyAgICAgXCJyZXMvcmF3LWFzc2V0cy9zb3VuZHMveGlhb2NodS5tcDNcIixcbiAgICAgICAgLy8gXVxuXG4gICAgICAgIC8vIOWKoOi9veebruW9leS4i+aJgOaciei1hOa6kFxuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzQWxsKHJlc0xpc3RbaV0sIChmdW5jdGlvbiAoaSwgZXJyLCBhc3NldHMpIHtcbiAgICAgICAgICAgICAgICBjYy5teUFzc2V0c1tyZXNMaXN0W2ldXSA9IGFzc2V0cztcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLotYTmupDliqDovb3lrozmiJBcIiArIGNvdW50KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCA+PSByZXNMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvL+S4uuS6huWJjee9ruWKoOi9vemfs+aViO+8jOi/memHjOebtOaOpeS4uui/meS4quWcuuaZr+a3u+WKoOaJgOacieWjsOmfs+eahOe7hOS7tlxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKHZhciBqID0gMDsgaiA8IHNvdW5kUmVzTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjYy51cmwucmF3KHNvdW5kUmVzTGlzdFtqXSksIGZhbHNlLCAwKVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy/lvIDlp4vmuLjmiI9cbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic3RhcnRTY2VuZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMsIGkpKTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzdmN2VlY3NmZU5MeEw3cE1EZ1hUZEFBJywgJ05ld0xCWEt1YWknKTtcbi8vIHNjcmlwdFxcZ2FtZUNvcmVcXE5ld0xCWEt1YWkuanNcblxudmFyIF9wcm9wZXJ0aWVzO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgSW5pdExCWEZyYW1lID0gcmVxdWlyZSgnSW5pdExCWEZyYW1lJyk7XG52YXIgVXRpbCA9IHJlcXVpcmUoJ1V0aWwnKTtcbnZhciBzY2FsZVBhcmFtID0gMC43O1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiAoX3Byb3BlcnRpZXMgPSB7XG4gICAgICAgIGNoZWNrZXJib2FyZDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogSW5pdExCWEZyYW1lXG4gICAgICAgIH1cblxuICAgIH0sIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJLY291bnRcIiwgMyksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJsaXViaWFueGluZ0hcIiwgMCksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJsaXViaWFueGluZ0FcIiwgMCksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJrdWFpVGV4XCIsIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwiY29sb3IxXCIsIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwiY29sb3IyXCIsIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwiY29sb3IzXCIsIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwiY29sb3I0XCIsIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsICdhblNvdW5kJywge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHVybDogY2MuQXVkaW9DbGlwXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgJ2Zhbmd4aWFTb3VuZDEnLCB7XG4gICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCAnZmFuZ3hpYVNvdW5kMicsIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsICdmYW5neGlhU291bmQzJywge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHVybDogY2MuQXVkaW9DbGlwXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgJ2Nhbk5vdFNvdW5kMScsIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsICdjYW5Ob3RTb3VuZDInLCB7XG4gICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICB9KSwgX3Byb3BlcnRpZXMpLFxuXG4gICAgZ2V0VGhlQ29uZmlnOiBmdW5jdGlvbiBnZXRUaGVDb25maWcoKSB7XG5cbiAgICAgICAgdmFyIGEgPSB0aGlzW1wibGl1YmlhbnhpbmdBXCJdO1xuICAgICAgICB2YXIgaCA9IHRoaXNbXCJsaXViaWFueGluZ0hcIl07XG5cbiAgICAgICAgdmFyIGNvbmZpZ0xpc3RzID0gW1xuICAgICAgICAvL+S4gOS4qlxuICAgICAgICBbY2MucCgwLCAwKV0sXG4gICAgICAgIC8v5Lik5LiqXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKV0sIC8v5qiq5pGGXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGgsIGEgKiAxLjUpXSwgLy/mlpzmkYYxXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGgsIC1hICogMS41KV0sIC8v5pac5pGGMlxuICAgICAgICAvL+S4ieS4qlxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDQsIDApXSwgLy/mqKrmkYZcblxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDMsIGEgKiAxLjUpXSwgLy/mqKrmkYYxXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogMywgLWEgKiAxLjUpXSwgLy/mqKrmkYYyXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoLCBhICogMS41KV0sIC8v5aCGMVxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCwgLWEgKiAxLjUpXSwgLy/loIYyXG5cbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgYSAqIDEuNSksIGNjLnAoaCAqIDMsIGEgKiAxLjUpXSwgLy/mlpzmkYYxXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGgsIGEgKiAxLjUpLCBjYy5wKGggKiAyLCBhICogMyldLCAvL+aWnOaRhjJcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgYSAqIDEuNSksIGNjLnAoMCwgYSAqIDMpXSwgLy/mlpzmkYYzXG5cbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgLWEgKiAxLjUpLCBjYy5wKGggKiAzLCAtYSAqIDEuNSldLCAvL+aWnOS4i+aRhjFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgLWEgKiAxLjUpLCBjYy5wKGggKiAyLCAtYSAqIDMpXSwgLy/mlpzkuIvmkYYyXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGgsIC1hICogMS41KSwgY2MucCgwLCAtYSAqIDMpXSwgLy/mlpzkuIvmkYYzXG4gICAgICAgIC8v5Zub5LiqXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogNCwgMCksIGNjLnAoaCAqIDYsIDApXSwgLy/mqKrmkYYxXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogNCwgMCksIGNjLnAoaCAqIDUsIGEgKiAxLjUpXSwgLy/mqKrmkYYyXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogNCwgMCksIGNjLnAoaCAqIDUsIC1hICogMS41KV0sIC8v5qiq5pGGM1xuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDQsIDApLCBjYy5wKGggKiAzLCBhICogMS41KV0sIC8v5qiq5pGGNFxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDQsIDApLCBjYy5wKGggKiAzLCAtYSAqIDEuNSldLCAvL+aoquaRhjVcblxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDMsIGEgKiAxLjUpLCBjYy5wKGgsIGEgKiAxLjUpXSwgLy/mlpzkuIrmkYYxXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogMywgYSAqIDEuNSksIGNjLnAoaCAqIDIsIGEgKiAzKV0sIC8v5pac5LiK5pGGMlxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDMsIGEgKiAxLjUpLCBjYy5wKGggKiA0LCBhICogMyldLCAvL+aWnOS4iuaRhjNcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiAzLCBhICogMS41KSwgY2MucChoICogNSwgYSAqIDEuNSldLCAvL+aWnOS4iuaRhjRcblxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDMsIC1hICogMS41KSwgY2MucChoLCAtYSAqIDEuNSldLCAvL+aWnOS4i+aRhjFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiAzLCAtYSAqIDEuNSksIGNjLnAoaCAqIDIsIC1hICogMyldLCAvL+aWnOS4i+aRhjJcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiAzLCAtYSAqIDEuNSksIGNjLnAoaCAqIDQsIC1hICogMyldLCAvL+aWnOS4i+aRhjNcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiAzLCAtYSAqIDEuNSksIGNjLnAoaCAqIDUsIC1hICogMS41KV0sIC8v5pac5LiL5pGGNFxuXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoLCAtYSAqIDEuNSksIGNjLnAoLWgsIC1hICogMS41KV0sIC8v5LiL5aCGMVxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCwgLWEgKiAxLjUpLCBjYy5wKDAsIC1hICogMyldLCAvL+S4i+WghjJcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGgsIC1hICogMS41KSwgY2MucChoICogMiwgLWEgKiAzKV0sIC8v5LiL5aCGM1xuXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGgsIC1hICogMS41KSwgY2MucChoICogMiwgLWEgKiAzKSwgY2MucChoICogMywgLWEgKiA0LjUpXSwgLy/mlpzmiZsxXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKC1oLCAtYSAqIDEuNSksIGNjLnAoLWggKiAyLCAtYSAqIDMpLCBjYy5wKC1oICogMywgLWEgKiA0LjUpXV07XG5cbiAgICAgICAgLy/mlpzmiZsyXG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZ0xpc3RzO1xuICAgIH0sXG5cbiAgICBuZXdPbmVLOiBmdW5jdGlvbiBuZXdPbmVLKGNvbG9ySW5kZXgpIHtcbiAgICAgICAgLy/liJvlu7rkuIDkuKrlnZdcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZShcImNvbG9yU3ByXCIpO1xuICAgICAgICB2YXIgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpc1tcImNvbG9yXCIgKyBjb2xvckluZGV4XTtcblxuICAgICAgICAvL2NjLmxvZyhcIuesrFwiLGNvbG9ySW5kZXgsXCLkuKrpopxjb2xvclwiKVxuXG4gICAgICAgIC8v5Yqg57q555CGXG4gICAgICAgIHZhciB3ZW5saU5vZGUgPSBuZXcgY2MuTm9kZShcIndlbmxpU3ByXCIpO1xuICAgICAgICB2YXIgd2VubGlTcHJpdGUgPSB3ZW5saU5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHdlbmxpU3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpc1tcImt1YWlUZXhcIl07XG5cbiAgICAgICAgd2VubGlOb2RlLnBhcmVudCA9IG5vZGU7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIG5ld09uZU5vZGU6IGZ1bmN0aW9uIG5ld09uZU5vZGUoKSB7XG4gICAgICAgIHZhciBrdWFpTm9kZSA9IG5ldyBjYy5Ob2RlKFwia3VhaVwiKTtcblxuICAgICAgICB2YXIgY29uZmlnID0gdGhpcy5nZXRUaGVDb25maWcoKTtcblxuICAgICAgICAvL+maj+acuuagt+WtkFxuICAgICAgICB2YXIgcmFuZG9tSW5kZXggPSBVdGlsLnJhbmRvbSgwLCBjb25maWcubGVuZ3RoIC0gMSk7XG4gICAgICAgIHZhciBwb3NMaXN0ID0gY29uZmlnW3JhbmRvbUluZGV4XTtcblxuICAgICAgICB2YXIgcmFuZG9tSW5kZXggPSBVdGlsLnJhbmRvbSgxLCA0KTtcbiAgICAgICAgdmFyIHN1bVggPSAwO1xuICAgICAgICB2YXIgY291bnRYID0gMDtcbiAgICAgICAgdmFyIHN1bVkgPSAwO1xuICAgICAgICB2YXIgY291bnRZID0gMDtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHBvc0xpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gcG9zTGlzdFtpbmRleF07XG4gICAgICAgICAgICB2YXIga3VhaSA9IHRoaXMubmV3T25lSyhyYW5kb21JbmRleCk7XG4gICAgICAgICAgICBrdWFpLnggPSBwb3MueDtcblxuICAgICAgICAgICAgc3VtWCArPSBrdWFpLng7XG4gICAgICAgICAgICBjb3VudFgrKztcblxuICAgICAgICAgICAga3VhaS55ID0gcG9zLnk7XG5cbiAgICAgICAgICAgIHN1bVkgKz0ga3VhaS55O1xuICAgICAgICAgICAgY291bnRZKys7XG5cbiAgICAgICAgICAgIGt1YWlOb2RlLmFkZENoaWxkKGt1YWkpO1xuICAgICAgICB9XG5cbiAgICAgICAga3VhaU5vZGUueCA9IC1zdW1YIC8gY291bnRYO1xuICAgICAgICBrdWFpTm9kZS55ID0gLXN1bVkgLyBjb3VudFk7XG5cbiAgICAgICAga3VhaU5vZGUuc2V0U2NhbGUoc2NhbGVQYXJhbSk7XG5cbiAgICAgICAgcmV0dXJuIGt1YWlOb2RlO1xuICAgIH0sXG5cbiAgICAvL+a3u+WKoOinpuaRuFxuICAgIGFkZFRvdWNoRXZlbnQ6IGZ1bmN0aW9uIGFkZFRvdWNoRXZlbnQoKSB7XG4gICAgICAgIHZhciB1cEggPSAxMDA7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLm5vZGUub3ggPSB0aGlzLm5vZGUueDtcbiAgICAgICAgdGhpcy5ub2RlLm95ID0gdGhpcy5ub2RlLnk7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnkgKz0gdXBIO1xuICAgICAgICAgICAgLy9jYy5sb2coXCLljp/kvY3nva7vvJpcIiwgdGhpcy5veCwgdGhpcy5veSlcblxuICAgICAgICAgICAgdGhpcy5nZXRDaGlsZEJ5TmFtZShcImt1YWlcIikuc2V0U2NhbGUoMSk7XG5cbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3Qoc2VsZi5hblNvdW5kKTtcbiAgICAgICAgfSwgdGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBldmVudC50b3VjaC5nZXREZWx0YSgpO1xuICAgICAgICAgICAgdGhpcy54ICs9IGRlbHRhLng7XG4gICAgICAgICAgICB0aGlzLnkgKz0gZGVsdGEueTtcblxuICAgICAgICAgICAgc2VsZi5jb2xsaXNpb25GdW5jKCk7XG5cbiAgICAgICAgICAgIC8v5Y+Y6Imy5aSE55CGXG4gICAgICAgICAgICBpZiAoIXNlbGYuY2hlY2tJc0NhbkRyb3AoKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlQ29sb3JEZWFsKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZUNvbG9yRGVhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLm5vZGUpO1xuXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5kcm9wRG93bkZ1bmMoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5kcm9wRG93bkZ1bmMoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfSxcblxuICAgIC8v5Y+Y6Imy5aSE55CGXG4gICAgY2hhbmdlQ29sb3JEZWFsOiBmdW5jdGlvbiBjaGFuZ2VDb2xvckRlYWwoaXNKdXN0Q2xlYXJDb2xvcikge1xuICAgICAgICAvL2NjLmxvZyhcIuWPmOiJsu+8gVwiK2lzSnVzdENsZWFyQ29sb3IsIHRoaXMuY2hlY2tGcmFtZUxpc3QubGVuZ3RoLCBcInRoaXMuY2hlY2tlcmJvYXJkLmZyYW1lTGlzdC5sZW5ndGg6XCIsIHRoaXMuY2hlY2tlcmJvYXJkLmZyYW1lTGlzdC5sZW5ndGgpXG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoZWNrZXJib2FyZC5mcmFtZUxpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgdmFyIGd1YW5nUGljTm9kZSA9IHRoaXMuY2hlY2tlcmJvYXJkLmZyYW1lTGlzdFtpXS5nZXRDaGlsZEJ5TmFtZShcImJpYW5TcHJcIik7XG4gICAgICAgICAgICBndWFuZ1BpY05vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL+WmguaenOWPguaVsOacieWAvO+8jOebtOaOpei/lOWbnu+8jOS4jeWBmuS4i+mdoueahFxuICAgICAgICBpZiAoaXNKdXN0Q2xlYXJDb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoZWNrRnJhbWVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIHZhciBndWFuZ1BpY05vZGUgPSB0aGlzLmNoZWNrRnJhbWVMaXN0W2ldLmdldENoaWxkQnlOYW1lKFwiYmlhblNwclwiKTtcbiAgICAgICAgICAgIGd1YW5nUGljTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8v56Kw5pKe6YC76L6RXG4gICAgY29sbGlzaW9uRnVuYzogZnVuY3Rpb24gY29sbGlzaW9uRnVuYygpIHtcbiAgICAgICAgLy9kZWJ1Z+Wtl+eUqFxuICAgICAgICAvLyB0aGlzLmRlYnVnTGFiZWwuc3RyaW5nID0gXCJ4OlwiK01hdGguZmxvb3IodGhpcy5ub2RlLngpICsgXCJcXG55OlwiICsgTWF0aC5mbG9vcih0aGlzLm5vZGUueSlcbiAgICAgICAgLy9jYy5sb2coXCJ4OlwiLCB0aGlzLm5vZGUueCwgXCJ5OlwiLCB0aGlzLm5vZGUueSwgdGhpcy5ub2RlKVxuXG4gICAgICAgIHRoaXMuY2hlY2tGcmFtZUxpc3QgPSBbXTsgLy/muIXnqbrmlbDnu4RcbiAgICAgICAgdGhpcy5jaGVja0ZLbGlzdCA9IFtdOyAvL+a4heepuuaVsOe7hFxuXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlbjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIHZhciBwaWFueWlDUG9zID0gY2MucEFkZChjYy5wKHRoaXMubm9kZS5jaGlsZHJlblswXS54LCB0aGlzLm5vZGUuY2hpbGRyZW5bMF0ueSksIGNjLnAoY2hpbGRyZW5baV0ueCwgY2hpbGRyZW5baV0ueSkpO1xuICAgICAgICAgICAgdmFyIGNoaWxkUG9zID0gY2MucEFkZCh0aGlzLm5vZGUucG9zaXRpb24sIHBpYW55aUNQb3MpO1xuICAgICAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5jaGVja1Bvc0Z1bmMoY2hpbGRQb3MpO1xuXG4gICAgICAgICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRktsaXN0LnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGcmFtZUxpc3QucHVzaChmcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy/kuIDkuKrngrnlkozmo4vnm5jnmoTmiYDmnInmoYbmo4DmtYtcbiAgICBjaGVja1Bvc0Z1bmM6IGZ1bmN0aW9uIGNoZWNrUG9zRnVuYyhwb3MpIHtcbiAgICAgICAgdmFyIGxlbiA9IDI3OyAvL+eisOaSnui3neemu1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZnJhbWVOb2RlID0gdGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0W2ldO1xuICAgICAgICAgICAgdmFyIGRpcyA9IGNjLnBEaXN0YW5jZShjYy5wKGZyYW1lTm9kZS54LCBmcmFtZU5vZGUueSksIHBvcyk7XG4gICAgICAgICAgICBpZiAoZGlzIDw9IGxlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmcmFtZU5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy/mo4DmtYvoh6rouqvmmK/lkKblt7Lnu4/ml6DlpITlj6/mlL5cbiAgICBjaGVja0lzTG9zZTogZnVuY3Rpb24gY2hlY2tJc0xvc2UoKSB7XG4gICAgICAgIHZhciBjYW5Ecm9wQ291bnQgPSAwO1xuXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlbjtcblxuICAgICAgICAvL+S4gOS4quS4quagvOWtkOaUvuivleS4gOS4i+iDveS4jeiDveaUvlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hlY2tlcmJvYXJkLmZyYW1lTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZyYW1lTm9kZSA9IHRoaXMuY2hlY2tlcmJvYXJkLmZyYW1lTGlzdFtpXTtcbiAgICAgICAgICAgIHZhciBzcmNQb3MgPSBjYy5wKGZyYW1lTm9kZS54LCBmcmFtZU5vZGUueSk7XG5cbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICBpZiAoIWZyYW1lTm9kZS5pc0hhdmVGSykge1xuXG4gICAgICAgICAgICAgICAgLy/ov5nph4zlgZrmmK/lkKblj6/ku6XmlL7nmoTliKTmlq1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9IDI3OyAvL+eisOaSnui3neemu1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRQb3MgPSBjYy5wQWRkKHNyY1BvcywgY2MucChjaGlsZHJlbltqXS54LCBjaGlsZHJlbltqXS55KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy/norDmkp7mo4DmtYtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmNoZWNrZXJib2FyZC5mcmFtZUxpc3QubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0RnJhbWVOb2RlID0gdGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0W2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpcyA9IGNjLnBEaXN0YW5jZShjYy5wKHRGcmFtZU5vZGUueCwgdEZyYW1lTm9kZS55KSwgY2hpbGRQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcyA8PSBsZW4gJiYgIXRGcmFtZU5vZGUuaXNIYXZlRkspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrOyAvL+WPr+S7peaUvuWwseimgee0r+WKoOiuoeaVsFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwi5qC85a2QXCIrIGZyYW1lTm9kZS5GS0luZGV4ICtcIuWIpOaWreaYr+WQpuiDveaUvu+8mlwiLGNoaWxkcmVuLmxlbmd0aCwgY291bnQpXG5cbiAgICAgICAgICAgICAgICAvL+WmguaenOaVsOmHj+ebuOetieWwseivtOaYjui/meS4quaWueWdl+WcqOi/meS4quagvOWtkOaYr+WPr+S7peaUvuS4i+eahFxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coZnJhbWVOb2RlLkZLSW5kZXggKyBcIueahOS9jee9ruWPr+S7peaUvlwiLCBjaGlsZHJlbi5sZW5ndGgsIGNvdW50KVxuICAgICAgICAgICAgICAgICAgICBjYW5Ecm9wQ291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FuRHJvcENvdW50ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8v5qOA5rWL5piv5ZCm6IO95aSf5pS+5LiLXG4gICAgY2hlY2tJc0NhbkRyb3A6IGZ1bmN0aW9uIGNoZWNrSXNDYW5Ecm9wKCkge1xuICAgICAgICAvL+WFiOWIpOaWreaVsOmHj+aYr+WQpuS4gOiHtO+8jOS4jeS4gOiHtOivtOaYjuacieS4gOS4qui2heWHuuWOu+S6hlxuICAgICAgICBpZiAodGhpcy5jaGVja0ZyYW1lTGlzdC5sZW5ndGggPT0gMCB8fCB0aGlzLmNoZWNrRnJhbWVMaXN0Lmxlbmd0aCAhPSB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL+ajgOa1i+aUvuS4i+eahOagvOWtkOaYr+WQpuW3sue7j+acieaWueWdl1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hlY2tGcmFtZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrRnJhbWVMaXN0W2ldLmlzSGF2ZUZLKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIC8v5pS+5LiL6YC76L6RXG4gICAgZHJvcERvd25GdW5jOiBmdW5jdGlvbiBkcm9wRG93bkZ1bmMoKSB7XG4gICAgICAgIC8vVXRpbC50ZXN0Q29kZTEoJ+aUvuS4i+mAu+i+kScpXG5cbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNDYW5Ecm9wKCkpIHtcbiAgICAgICAgICAgIC8v5pS+5Zue5Y67XG4gICAgICAgICAgICB0aGlzLnRha2VCYWNrKCk7XG5cbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jYW5Ob3RTb3VuZDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoZWNrRktsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRktsaXN0W2ldLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5jaGVja0ZLbGlzdFtpXS55ID0gMDtcblxuICAgICAgICAgICAgdGhpcy5jaGVja0ZLbGlzdFtpXS5wYXJlbnQgPSB0aGlzLmNoZWNrRnJhbWVMaXN0W2ldO1xuICAgICAgICAgICAgdGhpcy5jaGVja0ZyYW1lTGlzdFtpXS5pc0hhdmVGSyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vY2MubG9nKFwidGhpcy5jaGVja0ZyYW1lTGlzdFtcIitpK1wiXTpcIiwgdGhpcy5jaGVja0ZyYW1lTGlzdFtpXSlcblxuICAgICAgICAgICAgLy/nibnmlYhcbiAgICAgICAgICAgIC8vIHZhciBwaWNOb2RlID0gbmV3IGNjLk5vZGUoXCJndWFuZ0VmZk5vZGVcIilcbiAgICAgICAgICAgIC8vIHZhciBzcHIgPSBwaWNOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpXG4gICAgICAgICAgICAvLyBzcHIuc3ByaXRlRnJhbWUgPSB0aGlzLmNoZWNrZXJib2FyZFtcImJpYW5cIl1cbiAgICAgICAgICAgIC8vIHRoaXMuY2hlY2tGcmFtZUxpc3RbaV0uYWRkQ2hpbGQocGljTm9kZSwgLTEpXG4gICAgICAgICAgICAvLyB2YXIgYWN0aW9uID0gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIC8vICAgICBjYy5zcGF3bihjYy5mYWRlT3V0KDEpLCBjYy5zY2FsZVRvKDEsIDEuMikpLFxuICAgICAgICAgICAgLy8gICAgIGNjLnJlbW92ZVNlbGYoKVxuICAgICAgICAgICAgLy8gKSlcbiAgICAgICAgICAgIC8vIHBpY05vZGUucnVuQWN0aW9uKGFjdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB2YXIgb25lTm9kZSA9IHRoaXMubmV3T25lTm9kZSgpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQob25lTm9kZSk7XG5cbiAgICAgICAgdGhpcy5jaGVja2VyYm9hcmQuY3VyRktMZW4gPSB0aGlzLmNoZWNrRktsaXN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5jaGVja2VyYm9hcmQubm9kZS5lbWl0KCdzdWNjRHJvcERvd25PbmUnKTtcblxuICAgICAgICB2YXIgcmFuQyA9IFV0aWwucmFuZG9tKDEsIDMpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXNbXCJmYW5neGlhU291bmRcIiArIHJhbkNdKTtcblxuICAgICAgICAvL+aUvuWbnuWOu1xuICAgICAgICB0aGlzLnRha2VCYWNrKCk7XG5cbiAgICAgICAgLy/nm7TmjqXnlKjmo4vnm5jmo4DmtYvmmK/kuI3mmK/ovpPkuoZcbiAgICAgICAgdGhpcy5jaGVja2VyYm9hcmQuY2hlY2tJc0xvc2UoKTtcblxuICAgICAgICAvL1V0aWwudGVzdENvZGUyKClcbiAgICB9LFxuXG4gICAgLy/lm57liLDljp/kvY1cbiAgICB0YWtlQmFjazogZnVuY3Rpb24gdGFrZUJhY2soKSB7XG4gICAgICAgIC8v5Y+Y6Imy5aSE55CGXG4gICAgICAgIHRoaXMuY2hlY2tGcmFtZUxpc3QgPSBbXTsgLy/muIXnqbrmlbDnu4RcbiAgICAgICAgdGhpcy5jaGFuZ2VDb2xvckRlYWwoKTtcblxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJrdWFpXCIpLnNldFNjYWxlKHNjYWxlUGFyYW0pO1xuXG4gICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5ub2RlLm94O1xuICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMubm9kZS5veTtcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tGcmFtZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jaGVja0ZLbGlzdCA9IFtdO1xuXG4gICAgICAgIHRoaXMubm9kZS5jYXNjYWRlT3BhY2l0eSA9IHRydWU7XG5cbiAgICAgICAgdmFyIG9uZU5vZGUgPSB0aGlzLm5ld09uZU5vZGUoKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG9uZU5vZGUpO1xuXG4gICAgICAgIC8v5re75Yqg6Kem5pG4XG4gICAgICAgIHRoaXMuYWRkVG91Y2hFdmVudCgpO1xuXG4gICAgICAgIC8vZGVidWflrZfnlKhcbiAgICAgICAgLy8gdmFyIGxhYmVsTm9kZSA9IG5ldyBjYy5Ob2RlKFwiTmV3IExhYmVsXCIpXG4gICAgICAgIC8vIHZhciBsYWJlbENwID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbClcbiAgICAgICAgLy8gbGFiZWxDcC5zdHJpbmcgPSBcIng6XCIrTWF0aC5mbG9vcih0aGlzLm5vZGUueCkgKyBcIlxcbnk6XCIgKyBNYXRoLmZsb29yKHRoaXMubm9kZS55KVxuICAgICAgICAvLyBsYWJlbENwLmZvbnRTaXplID0gMThcbiAgICAgICAgLy8gbGFiZWxOb2RlLnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICAvLyBsYWJlbE5vZGUuekluZGV4ID0gMVxuICAgICAgICAvLyBjYy5sb2coXCJOb2RlIHpJbmRleDogXCIgKyBsYWJlbE5vZGUuekluZGV4KVxuICAgICAgICAvLyB0aGlzLmRlYnVnTGFiZWwgPSBsYWJlbENwXG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZmEwOTNleXE5Uk9HSm53WUxFbjR4UkwnLCAnU2NvcmVCdG5DcCcpO1xuLy8gc2NyaXB0XFxTY29yZUJ0bkNwLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnN2Q5ZGQ0am1pOUk3WjFmZ1ZQSGZFWFMnLCAnU3RhcnRCdG5DcCcpO1xuLy8gc2NyaXB0XFxTdGFydEJ0bkNwLmpzXG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczogX2RlZmluZVByb3BlcnR5KHt9LCBcIua4uOaIj+eVjOmdolwiLCB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICB9KSxcblxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgICAgICB2YXIgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjIsIDApLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5sb2coXCLlvIDlp4vmuLjmiI9cIik7XG5cbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVTY2VuZVwiKTtcblxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSwgdGhpcykpO1xuXG4gICAgICAgIHZhciBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgYW5pbS5zdG9wKCk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyZGE1OStGZ2tSRkdxekdJYmN2NTd0SScsICdUaXBDcCcpO1xuLy8gc2NyaXB0XFxUaXBDcC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUueCA9IDA7XG4gICAgICAgIHRoaXMubm9kZS55ID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihjYy5mYWRlT3V0KDEpLCBjYy5tb3ZlQnkoMSwgY2MucCgwLCAxMDApKSksIGNjLnJlbW92ZVNlbGYodHJ1ZSkpKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcxZjU3ZkpYVy81TXdwekdFMnRoNXFHRScsICdVdGlsJyk7XG4vLyBzY3JpcHRcXGdhbWVDb3JlXFxjb21tb25cXFV0aWwuanNcblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE2LzUvNi5cclxuICovXG5cbnZhciBfcCA9IHtcblxuICAgIC8v6YGN5Y6G5a+56LGh55qE5bGe5oCn5ZKM5pa55rOVXG4gICAgcHJpbnRPYmo6IGZ1bmN0aW9uIHByaW50T2JqKG9iaikge1xuICAgICAgICAvLyDnlKjmnaXkv53lrZjmiYDmnInnmoTlsZ7mgKflkI3np7DlkozlgLxcbiAgICAgICAgdmFyIHByb3BzID0gXCJcIjtcbiAgICAgICAgLy8g5byA5aeL6YGN5Y6GXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XG4gICAgICAgICAgICAvLyDmlrnms5VcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW3BdID09IFwiIGZ1bmN0aW9uIFwiKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMgKz0gcCArIFwiIFxcbiBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcCDkuLrlsZ7mgKflkI3np7DvvIxvYmpbcF3kuLrlr7nlupTlsZ7mgKfnmoTlgLxcbiAgICAgICAgICAgICAgICBwcm9wcyArPSBwICsgXCIgXFxuIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IC8vIOacgOWQjuaYvuekuuaJgOacieeahOWxnuaAp1xuXG4gICAgICAgIGNjLmxvZyhwcm9wcyk7XG4gICAgfSxcblxuICAgIC8v6ZqP5py6XG4gICAgcmFuZG9tOiBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcblxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICB9LFxuXG4gICAgdGVzdENvZGVTdHI6ICcnLFxuXG4gICAgdGVzdENvZGUxOiBmdW5jdGlvbiB0ZXN0Q29kZTEoc3RyKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgLy/otbflp4vml7bpl7RcbiAgICAgICAgdGhpcy50ZXN0Q29kZVN0ciA9IHN0cjtcbiAgICB9LFxuXG4gICAgdGVzdENvZGUyOiBmdW5jdGlvbiB0ZXN0Q29kZTIoc3RyKSB7XG4gICAgICAgIHRoaXMuZW5kID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7IC8v5o6l5Y+X5pe26Ze0XG4gICAgICAgIHZhciB0aW1lU3RyID0gdGhpcy5lbmQgLSB0aGlzLnN0YXJ0ICsgXCJtc1wiO1xuICAgICAgICBjYy5sb2coXCLmraTlpIToirHml7bpl7TvvJpcIiArIHRpbWVTdHIgKyB0aGlzLnRlc3RDb2RlU3RyKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX3A7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcwZjcyN1JWZnpaSUhaZ2VrRjVBMm1JUycsICdaSW5kZXhTZXQnKTtcbi8vIHNjcmlwdFxcWkluZGV4U2V0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB6SW5kZXg6IDBcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSB0aGlzLnpJbmRleDtcbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
