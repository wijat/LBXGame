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
},{}],"Game":[function(require,module,exports){
"use strict";
cc._RFpush(module, '701b9htTn1PFIOruA6mnooK', 'Game');
// script\Game.js

var _properties;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

cc.Class({
    "extends": cc.Component,

    properties: (_properties = {}, _defineProperty(_properties, "背景音乐", {
        "default": null,
        url: cc.AudioClip
    }), _defineProperty(_properties, "是否开启音乐", true), _defineProperty(_properties, "是否是加载资源的场景", false), _properties),

    // use this for initialization
    onLoad: function onLoad() {

        if (this["是否开启音乐"]) {
            cc.audioEngine.playEffect(this["背景音乐"], true);
        }

        if (this["是否是加载资源的场景"]) {
            cc.log("加载资源");

            var count = 0;
            var max = 2;

            // 加载目录下所有资源
            cc.loader.loadResAll("sound", function (err, assets) {
                cc.log("加载音乐资源");
                count++;
                if (count >= max) {
                    cc.director.loadScene("startScene");
                }
            });

            cc.loader.loadResAll("pics", function (err, assets) {
                cc.log("加载图片资源");
                count++;
                if (count >= max) {
                    cc.director.loadScene("startScene");
                }
            });
        }
    }

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

    //检测消除
    checkXC: function checkXC(argument) {
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
                    FKNode.cascadeOpacity = true;
                    //这个假方块变大并且渐隐掉
                    FKNode.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.5, 2), cc.fadeOut(0.5)), cc.removeSelf(true)));
                }, this, xIndex));

                actionAry.push(cc.delayTime(0.05));

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
            cc.sys.localStorage.setItem("score", theScore);
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

    //获得两个数组的交集
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
    }

});
// called every frame, uncomment this function to activate update callback
//update: function (dt) {
//cc.log("检测棋盘中.....", this.frameList)
// for (var i = 0; i < this.frameList.length; i++) {
//     //是否需要变色
//     if (this.frameList[i].isNeedToChangeColor) {
//         this.frameList[i].color = cc.color(255, 255, 0)
//     }else{
//         this.frameList[i].color = cc.color(255, 255, 255)
//     }

// }
//},

cc._RFpop();
},{"Util":"Util"}],"NewLBXKuai":[function(require,module,exports){
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
            var picNode = new cc.Node("guangEffNode");
            var spr = picNode.addComponent(cc.Sprite);
            spr.spriteFrame = this.checkerboard["bian"];
            this.checkFrameList[i].addChild(picNode, -1);
            var action = cc.repeatForever(cc.sequence(cc.spawn(cc.fadeOut(1), cc.scaleTo(1, 1.2)), cc.removeSelf()));
            picNode.runAction(action);
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

            // cc.loader.loadRes("scoreBtn", function (err, node) {
            //     var newNode = cc.instantiate(node);
            //     canvas.addChild(newNode);
            // })

            // cc.loader.loadRes("lbxLayout", function (err, node) {
            //     var newNode = cc.instantiate(node);
            //     canvas.addChild(newNode);

            // })

            // cc.loader.loadRes("getNewFK", function (err, node) {
            //     var newNode = cc.instantiate(node);
            //     canvas.addChild(newNode);

            // })

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

    //通过参数保存闭包外部的变量形成静态快照来使用，避免闭包共享外部变量的时候用
    //第一个参数必须是函数，后面的参数是要做快照的变量
    createFunc: function createFunc() {
        var newArgs = [];
        for (var i = 1; i < arguments.length; i++) {
            newArgs.push(arguments[i]);
        }

        cc.log("arguments:", arguments, "newArgs:", newArgs);

        return function (newArgs) {
            return arguments[0](newArgs); //第一个参数是一个函数的嘛
        };
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
},{}]},{},["Util","TipCp","BgRandomMove","BackBtnCp","ZIndexSet","Game","InitLBXFrame","NewLBXKuai","StartBtnCp","App","ButtonControl","GameData","ScoreBtnCp"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvQXBwRGF0YS9Mb2NhbC9Db2Nvc0NyZWF0b3IvYXBwLTEuMS4xL3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic2NyaXB0L2dhbWVDb3JlL0FwcC5qcyIsInNjcmlwdC9CYWNrQnRuQ3AuanMiLCJzY3JpcHQvQmdSYW5kb21Nb3ZlLmpzIiwic2NyaXB0L2dhbWVDb3JlL2NvbW1vbi9CdXR0b25Db250cm9sLmpzIiwic2NyaXB0L0dhbWVEYXRhLmpzIiwic2NyaXB0L0dhbWUuanMiLCJzY3JpcHQvZ2FtZUNvcmUvSW5pdExCWEZyYW1lLmpzIiwic2NyaXB0L2dhbWVDb3JlL05ld0xCWEt1YWkuanMiLCJzY3JpcHQvU2NvcmVCdG5DcC5qcyIsInNjcmlwdC9TdGFydEJ0bkNwLmpzIiwic2NyaXB0L1RpcENwLmpzIiwic2NyaXB0L2dhbWVDb3JlL2NvbW1vbi9VdGlsLmpzIiwic2NyaXB0L1pJbmRleFNldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYmM5NzcyWlZlVk0yb213U3ZQK2tBYXInLCAnQXBwJyk7XG4vLyBzY3JpcHRcXGdhbWVDb3JlXFxBcHAuanNcblxudmFyIGFwcCA9IHtcbiAgICBzdGFydEdhbWU6IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHt9XG59O1xuXG4vL+WKoOi9veaooeWdlyjmnInpobrluo8pXG52YXIgbW9kUGF0aCA9IFsnVXRpbCddO1xuXG5mb3IgKHZhciBpIGluIG1vZFBhdGgpIHtcbiAgICB2YXIgcGF0aCA9IG1vZFBhdGhbaV07XG4gICAgcmVxdWlyZShwYXRoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHA7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICczYzVlOUZZSEQ5THhaV1ozOXVkUUZuaScsICdCYWNrQnRuQ3AnKTtcbi8vIHNjcmlwdFxcQmFja0J0bkNwLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgLy90aGlzLm5vZGUucGFyZW50LmRlc3Ryb3koKVxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lU2NlbmVcIik7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge31cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzJlZmZmSjFobFJNeTZORUhwN0lNY0ppJywgJ0JnUmFuZG9tTW92ZScpO1xuLy8gc2NyaXB0XFxCZ1JhbmRvbU1vdmUuanNcblxudmFyIF9wcm9wZXJ0aWVzO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IChfcHJvcGVydGllcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwiWOi9tOenu+WKqOi3neemu1wiLCAxKSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcInnovbTnp7vliqjot53nprtcIiwgMSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCLnp7vliqjpgJ/luqYo5Y2V5L2N77ya5YOP57SgL+enkilcIiwgMjApLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwi6ZqP5py66YePXCIsIDEwKSwgX3Byb3BlcnRpZXMpLFxuXG4gICAgLy/pmo/mnLrnp7vliqhcbiAgICByYW5kb21Nb3ZlOiBmdW5jdGlvbiByYW5kb21Nb3ZlKCkge1xuXG4gICAgICAgIHZhciBkdCA9IGNjLnBMZW5ndGgoY2MucCh0aGlzW1wiWOi9tOenu+WKqOi3neemu1wiXSwgdGhpc1tcInnovbTnp7vliqjot53nprtcIl0pKSAvIHRoaXNbXCLnp7vliqjpgJ/luqYo5Y2V5L2N77ya5YOP57SgL+enkilcIl07XG4gICAgICAgIHZhciByYW5kb21EaXIgPSBjYy5wTXVsdChjYy5wTm9ybWFsaXplKGNjLnAoY2MucmFuZG9tTWludXMxVG8xKCksIGNjLnJhbmRvbU1pbnVzMVRvMSgpKSksIHRoaXNbXCLpmo/mnLrph49cIl0pO1xuXG4gICAgICAgIHZhciBtb3ZlRGlyID0gY2MucEFkZChjYy5wKHRoaXNbXCJY6L2056e75Yqo6Led56a7XCJdLCB0aGlzW1wieei9tOenu+WKqOi3neemu1wiXSksIHJhbmRvbURpcik7XG5cbiAgICAgICAgdmFyIGFjdGlvbiA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoY2MubW92ZUJ5KGR0LCBtb3ZlRGlyKSwgY2MubW92ZUJ5KGR0LCBjYy5wTXVsdChtb3ZlRGlyLCAtMSkpKSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5yYW5kb21Nb3ZlKCk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYzJkNWJWSTY3WlBBcThVNWpYbG1Hd0MnLCAnQnV0dG9uQ29udHJvbCcpO1xuLy8gc2NyaXB0XFxnYW1lQ29yZVxcY29tbW9uXFxCdXR0b25Db250cm9sLmpzXG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczogX2RlZmluZVByb3BlcnR5KHt9LCBcIumfs+aViFwiLCB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pLFxuXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzW1wi6Z+z5pWIXCJdKTtcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZjkwNjkzR1RtbEdTN1Q1ZmtubkROVHknLCAnR2FtZURhdGEnKTtcbi8vIHNjcmlwdFxcR2FtZURhdGEuanNcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiBfZGVmaW5lUHJvcGVydHkoe30sIFwi5YiG5pWwXCIsIDApLFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNzAxYjlodFRuMVBGSU9ydUE2bW5vb0snLCAnR2FtZScpO1xuLy8gc2NyaXB0XFxHYW1lLmpzXG5cbnZhciBfcHJvcGVydGllcztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiAoX3Byb3BlcnRpZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcIuiDjOaZr+mfs+S5kFwiLCB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwi5piv5ZCm5byA5ZCv6Z+z5LmQXCIsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwi5piv5ZCm5piv5Yqg6L296LWE5rqQ55qE5Zy65pmvXCIsIGZhbHNlKSwgX3Byb3BlcnRpZXMpLFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXNbXCLmmK/lkKblvIDlkK/pn7PkuZBcIl0pIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpc1tcIuiDjOaZr+mfs+S5kFwiXSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpc1tcIuaYr+WQpuaYr+WKoOi9vei1hOa6kOeahOWcuuaZr1wiXSkge1xuICAgICAgICAgICAgY2MubG9nKFwi5Yqg6L296LWE5rqQXCIpO1xuXG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIG1heCA9IDI7XG5cbiAgICAgICAgICAgIC8vIOWKoOi9veebruW9leS4i+aJgOaciei1hOa6kFxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNBbGwoXCJzb3VuZFwiLCBmdW5jdGlvbiAoZXJyLCBhc3NldHMpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLliqDovb3pn7PkuZDotYTmupBcIik7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPj0gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInN0YXJ0U2NlbmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzQWxsKFwicGljc1wiLCBmdW5jdGlvbiAoZXJyLCBhc3NldHMpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLliqDovb3lm77niYfotYTmupBcIik7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPj0gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInN0YXJ0U2NlbmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc3MzgxMHVuL0w5Qis3cHR1YlFmTHZIeScsICdJbml0TEJYRnJhbWUnKTtcbi8vIHNjcmlwdFxcZ2FtZUNvcmVcXEluaXRMQlhGcmFtZS5qc1xuXG52YXIgX3Byb3BlcnRpZXM7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBkaXNMaXN0ID0gW1xuLy/kuIDkuKrmlrnlkJFcblswLCAxLCAyLCAzLCA0XSwgWzUsIDYsIDcsIDgsIDksIDEwXSwgWzExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3XSwgWzE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNV0sIFsyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0XSwgWzM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0Ml0sIFs0MywgNDQsIDQ1LCA0NiwgNDcsIDQ4LCA0OV0sIFs1MCwgNTEsIDUyLCA1MywgNTQsIDU1XSwgWzU2LCA1NywgNTgsIDU5LCA2MF0sXG5cbi8v5Y+m5LiA5Liq5pa55ZCRXG5bMjYsIDM1LCA0MywgNTAsIDU2XSwgWzE4LCAyNywgMzYsIDQ0LCA1MSwgNTddLCBbMTEsIDE5LCAyOCwgMzcsIDQ1LCA1MiwgNThdLCBbNSwgMTIsIDIwLCAyOSwgMzgsIDQ2LCA1MywgNTldLCBbMCwgNiwgMTMsIDIxLCAzMCwgMzksIDQ3LCA1NCwgNjBdLCBbMSwgNywgMTQsIDIyLCAzMSwgNDAsIDQ4LCA1NV0sIFsyLCA4LCAxNSwgMjMsIDMyLCA0MSwgNDldLCBbMywgOSwgMTYsIDI0LCAzMywgNDJdLCBbNCwgMTAsIDE3LCAyNSwgMzRdLFxuXG4vL+aoquWQkVxuWzAsIDUsIDExLCAxOCwgMjZdLCBbMSwgNiwgMTIsIDE5LCAyNywgMzVdLCBbMiwgNywgMTMsIDIwLCAyOCwgMzYsIDQzXSwgWzMsIDgsIDE0LCAyMSwgMjksIDM3LCA0NCwgNTBdLCBbNCwgOSwgMTUsIDIyLCAzMCwgMzgsIDQ1LCA1MSwgNTZdLCBbMTAsIDE2LCAyMywgMzEsIDM5LCA0NiwgNTIsIDU3XSwgWzE3LCAyNCwgMzIsIDQwLCA0NywgNTMsIDU4XSwgWzI1LCAzMywgNDEsIDQ4LCA1NCwgNTldLCBbMzQsIDQyLCA0OSwgNTUsIDYwXV07XG5cbnZhciBVdGlsID0gcmVxdWlyZSgnVXRpbCcpO1xudmFyIHRoZVNjb3JlID0gMDtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiAoX3Byb3BlcnRpZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcImJpYW5jaGFuZ2dlemlzaHVcIiwgNSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJsaXViaWFueGluZ0hcIiwgMCksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJsaXViaWFueGluZ0FcIiwgMCksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJmcmFtZVBpY1wiLCB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwiYmlhblwiLCB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwieGlhb2NodVNvdW5kXCIsIHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgIHVybDogY2MuQXVkaW9DbGlwXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJzaHVQcmVmYWJcIiwge1xuICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJib29tRWZmUHJlZmFiXCIsIHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwidGlwUHJlZmFiXCIsIHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgIH0pLCBfcHJvcGVydGllcyksXG5cbiAgICAvL+ajgOa1i+a2iOmZpFxuICAgIGNoZWNrWEM6IGZ1bmN0aW9uIGNoZWNrWEMoYXJndW1lbnQpIHtcbiAgICAgICAgLy/mlL7kuIvpg73liqDliIZcbiAgICAgICAgdGhpcy5hZGRTY29yZSh0aGlzLmN1ckZLTGVuLCB0cnVlKTtcbiAgICAgICAgLy/liqDliIbpo5jlrZdcbiAgICAgICAgdmFyIHRpcE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpcFByZWZhYik7XG4gICAgICAgIHRpcE5vZGUuY29sb3IgPSBjYy5jb2xvcigyMTEsIDcwLCA1MCwgMjU1KTtcbiAgICAgICAgdmFyIGxhYmVsID0gdGlwTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIitcIiArIHRoaXMuZ2V0QWRkU2NvcmVDYWwodGhpcy5jdXJGS0xlbiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aXBOb2RlKTtcblxuICAgICAgICB2YXIgaGF2ZUZLSW5kZXhMaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mcmFtZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lTGlzdFtpXS5pc0hhdmVGSykge1xuICAgICAgICAgICAgICAgIC8vY2MubG9nKHRoaXMuZnJhbWVMaXN0W2ldLkZLSW5kZXgpXG4gICAgICAgICAgICAgICAgaGF2ZUZLSW5kZXhMaXN0LnB1c2godGhpcy5mcmFtZUxpc3RbaV0uRktJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoYXZlRktJbmRleExpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2NjLmxvZyhcImhhdmVGS0luZGV4TGlzdO+8mlwiLCBoYXZlRktJbmRleExpc3QudG9TdHJpbmcoKSlcblxuICAgICAgICB2YXIgeGNMaXN0ID0gW107IC8v6KaB5raI6Zmk55qE5pa55Z2X5YiX6KGoXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9uZVhDTGlzdCA9IGRpc0xpc3RbaV07XG4gICAgICAgICAgICB2YXIgaW50ZXJzZWN0QXJ5ID0gdGhpcy5nZXQyQXJ5SW50ZXJzZWN0KGhhdmVGS0luZGV4TGlzdCwgb25lWENMaXN0KTtcblxuICAgICAgICAgICAgaWYgKGludGVyc2VjdEFyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCJpbnRlcnNlY3RBcnk6XCIsIGludGVyc2VjdEFyeS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwib25lWENMaXN0OlwiLCBvbmVYQ0xpc3QudG9TdHJpbmcoKSlcblxuICAgICAgICAgICAgICAgIHZhciBpc1hDID0gdGhpcy5jaGVjazJBcnlJc0VxdWFsKG9uZVhDTGlzdCwgaW50ZXJzZWN0QXJ5KTtcblxuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiaW50ZXJzZWN0QXJ5IOWSjCBvbmVYQ0xpc3TmmK/lkKbnm7jnrYnvvJpcIiwgaXNYQylcbiAgICAgICAgICAgICAgICBpZiAoaXNYQykge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmtojvvIHvvIFcIik7XG4gICAgICAgICAgICAgICAgICAgIHhjTGlzdC5wdXNoKG9uZVhDTGlzdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnhpYW9jaHVTb3VuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9jYy5sb2coXCLmtojpmaTooajnjrDvvIHvvIFcIilcblxuICAgICAgICB2YXIgYWN0aW9uQXJ5ID0gW107XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy/mtojpmaRcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Y0xpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgdmFyIG9uZUxpc3QgPSB4Y0xpc3RbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9uZUxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgeEluZGV4ID0gb25lTGlzdFtqXTtcblxuICAgICAgICAgICAgICAgIGFjdGlvbkFyeS5wdXNoKGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhJbmRleCA9IGFyZ3VtZW50c1sxXVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gYXJndW1lbnRzWzFdWzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWZmTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYm9vbUVmZlByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVMaXN0W3hJbmRleF0uYWRkQ2hpbGQoZWZmTm9kZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy/liqDliIbpo5jlrZdcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpcE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpcFByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IHRpcE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCIrXCIgKyB0aGlzLmdldEFkZFNjb3JlQ2FsKGNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUxpc3RbeEluZGV4XS5hZGRDaGlsZCh0aXBOb2RlKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLCBbeEluZGV4LCBjb3VudF0pKTtcblxuICAgICAgICAgICAgICAgIGFjdGlvbkFyeS5wdXNoKGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhJbmRleCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUxpc3RbeEluZGV4XS5pc0hhdmVGSyA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIEZLTm9kZSA9IHRoaXMuZnJhbWVMaXN0W3hJbmRleF0uZ2V0Q2hpbGRCeU5hbWUoXCJjb2xvclNwclwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFGS05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy/pmLLmraLmsqHmnInov5nkuKrmlrnlnZfnmoTml7blgJlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBGS05vZGUuY2FzY2FkZU9wYWNpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvL+i/meS4quWBh+aWueWdl+WPmOWkp+W5tuS4lOa4kOmakOaOiVxuICAgICAgICAgICAgICAgICAgICBGS05vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLnNjYWxlVG8oMC41LCAyKSwgY2MuZmFkZU91dCgwLjUpKSwgY2MucmVtb3ZlU2VsZih0cnVlKSkpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMsIHhJbmRleCkpO1xuXG4gICAgICAgICAgICAgICAgYWN0aW9uQXJ5LnB1c2goY2MuZGVsYXlUaW1lKDAuMDUpKTtcblxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uQXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFjdGlvbkFyeS5wdXNoKGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSXNMb3NlKCk7XG4gICAgICAgICAgICB9LCB0aGlzKSk7XG5cbiAgICAgICAgICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2Muc2VxdWVuY2UoYWN0aW9uQXJ5KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcblxuICAgICAgICAgICAgLy/liqDliIZcbiAgICAgICAgICAgIHRoaXMuYWRkU2NvcmUoY291bnQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8v5qOA5rWL5piv5LiN5piv6L6T5LqGXG4gICAgY2hlY2tJc0xvc2U6IGZ1bmN0aW9uIGNoZWNrSXNMb3NlKCkge1xuICAgICAgICAvL+WmguaenOato+WcqOa2iOmZpOS4re+8jOmCo+WwseS4jeWIpOaWrei+k+i1ou+8jOWboOS4uua2iOmZpOWQjuS8muWGjeWIpOaWrVxuICAgICAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gY2MuZmluZCgnQ2FudmFzL2dldE5ld0ZLJyArIChpICsgMSkpO1xuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IG5vZGUuZ2V0Q29tcG9uZW50KCdOZXdMQlhLdWFpJyk7XG4gICAgICAgICAgICBpZiAoc2NyaXB0LmNoZWNrSXNMb3NlKCkpIHtcblxuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwi5pa55Z2XXCIgKyAoaSArIDEpICsgXCLlt7Lnu4/ml6DlpITlronmlL5cIilcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDEyNTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIuaWueWdl1wiICsgKGkgKyAxKSArIFwi5Y+v5Lul5a6J5pS+XCIpXG4gICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50ID09IDMpIHtcbiAgICAgICAgICAgIHZhciBzaHVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaHVQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzaHVOb2RlKTtcblxuICAgICAgICAgICAgY2MubG9nKFwi5L+d5a2Y5Y6G5Y+y5pyA6auY5YiGXCIpO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2NvcmVcIiwgdGhlU2NvcmUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8v5Yqg5YiG77yM5Y+C5pWw5piv5raI6Zmk55qE5oC75pWwLGlzRHJvcEFkZOaYr+aYr+WQpuaYr+aUvuS4i+eahOWNlee6r+WKoOWIhlxuICAgIGFkZFNjb3JlOiBmdW5jdGlvbiBhZGRTY29yZShYQ0NvdW50LCBpc0Ryb3BBZGQpIHtcbiAgICAgICAgdmFyIGFkZFNjb3JlQ291bnQgPSB0aGlzLmdldEFkZFNjb3JlQ2FsKFhDQ291bnQsIGlzRHJvcEFkZCk7XG4gICAgICAgIHZhciBub2RlID0gY2MuZmluZCgnQ2FudmFzL3Njb3JlL3Njb3JlTGFiZWwnKTtcbiAgICAgICAgdmFyIGxhYmVsID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIGxhYmVsLnN0cmluZyA9IGFkZFNjb3JlQ291bnQgKyBOdW1iZXIobGFiZWwuc3RyaW5nKTtcbiAgICAgICAgdGhlU2NvcmUgPSBOdW1iZXIobGFiZWwuc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgLy/orqHnrpfliqDliIbnmoTlhazlvI9cbiAgICBnZXRBZGRTY29yZUNhbDogZnVuY3Rpb24gZ2V0QWRkU2NvcmVDYWwoWENDb3VudCwgaXNEcm9wQWRkKSB7XG4gICAgICAgIHZhciB4ID0gWENDb3VudCArIDE7XG4gICAgICAgIHZhciBhZGRTY29yZUNvdW50ID0gaXNEcm9wQWRkID8geCA6IDIgKiB4ICogeDsgLy/mlbDph4/nmoTlubPmlrlcbiAgICAgICAgcmV0dXJuIGFkZFNjb3JlQ291bnQ7XG4gICAgfSxcblxuICAgIC8v6I635b6X5Lik5Liq5pWw57uE55qE5Lqk6ZuGXG4gICAgZ2V0MkFyeUludGVyc2VjdDogZnVuY3Rpb24gZ2V0MkFyeUludGVyc2VjdChhcnkxLCBhcnkyKSB7XG4gICAgICAgIHZhciBpbnRlcnNlY3RBcnkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnkxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFyeTIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJ5MltqXSA9PSBhcnkxW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdEFyeS5wdXNoKGFyeTJbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnRlcnNlY3RBcnk7XG4gICAgfSxcblxuICAgIC8v6I635b6X5Lik5Liq5pWw57uE55qE5Lqk6ZuGXG4gICAgY2hlY2syQXJ5SXNFcXVhbDogZnVuY3Rpb24gY2hlY2syQXJ5SXNFcXVhbChhcnkxLCBhcnkyKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5MS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFyeTJbaV0gIT0gYXJ5MVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNyY1BvcyA9IGNjLnAodGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcbiAgICAgICAgdmFyIGxieE5vZGVzID0gW107XG4gICAgICAgIHZhciBsYnhOb2Rlc0luZGV4ID0gMDtcbiAgICAgICAgdmFyIG1heENvdW50ID0gdGhpc1tcImJpYW5jaGFuZ2dlemlzaHVcIl0gKiAyIC0gMTtcblxuICAgICAgICAvL+S9jee9ruihqFxuICAgICAgICB2YXIgcG9zTGlzdCA9IFtcbiAgICAgICAgLy/nrKzkuIDooYznmoTkvY3nva7kv6Hmga9cbiAgICAgICAge1xuICAgICAgICAgICAgY291bnQ6IDUsXG4gICAgICAgICAgICBzcmNQb3M6IGNjLnAoMCwgMClcbiAgICAgICAgfSxcblxuICAgICAgICAvL+esrOS6jOihjOeahOS9jee9ruS/oeaBr1xuICAgICAgICB7XG4gICAgICAgICAgICBjb3VudDogNixcbiAgICAgICAgICAgIHNyY1BvczogY2MucCgyICogdGhpc1tcImxpdWJpYW54aW5nSFwiXSwgMClcbiAgICAgICAgfSxcblxuICAgICAgICAvL+esrOS4ieihjOeahOS9jee9ruS/oeaBr1xuICAgICAgICB7XG4gICAgICAgICAgICBjb3VudDogNyxcbiAgICAgICAgICAgIHNyY1BvczogY2MucCgyICogdGhpc1tcImxpdWJpYW54aW5nSFwiXSAqIDIsIDApXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy/nrKzlm5vooYznmoTkvY3nva7kv6Hmga9cbiAgICAgICAge1xuICAgICAgICAgICAgY291bnQ6IDgsXG4gICAgICAgICAgICBzcmNQb3M6IGNjLnAoMiAqIHRoaXNbXCJsaXViaWFueGluZ0hcIl0gKiAzLCAwKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8v56ys5LqU6KGM55qE5L2N572u5L+h5oGvXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvdW50OiA5LFxuICAgICAgICAgICAgc3JjUG9zOiBjYy5wKDIgKiB0aGlzW1wibGl1YmlhbnhpbmdIXCJdICogNCwgMClcbiAgICAgICAgfSxcblxuICAgICAgICAvL+esrOWFreihjOeahOS9jee9ruS/oeaBr1xuICAgICAgICB7XG4gICAgICAgICAgICBjb3VudDogOCxcbiAgICAgICAgICAgIHNyY1BvczogY2MucCgyICogdGhpc1tcImxpdWJpYW54aW5nSFwiXSAqIDQgKyB0aGlzW1wibGl1YmlhbnhpbmdIXCJdLCAtMyAqIHRoaXNbXCJsaXViaWFueGluZ0FcIl0gLyAyKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8v56ys5LiD6KGM55qE5L2N572u5L+h5oGvXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvdW50OiA3LFxuICAgICAgICAgICAgc3JjUG9zOiBjYy5wKDIgKiB0aGlzW1wibGl1YmlhbnhpbmdIXCJdICogNCArIHRoaXNbXCJsaXViaWFueGluZ0hcIl0gKiAyLCAtMyAqIHRoaXNbXCJsaXViaWFueGluZ0FcIl0gKiAyIC8gMilcbiAgICAgICAgfSxcblxuICAgICAgICAvL+esrOWFq+ihjOeahOS9jee9ruS/oeaBr1xuICAgICAgICB7XG4gICAgICAgICAgICBjb3VudDogNixcbiAgICAgICAgICAgIHNyY1BvczogY2MucCgyICogdGhpc1tcImxpdWJpYW54aW5nSFwiXSAqIDQgKyB0aGlzW1wibGl1YmlhbnhpbmdIXCJdICogMywgLTMgKiB0aGlzW1wibGl1YmlhbnhpbmdBXCJdICogMyAvIDIpXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy/nrKzkuZ3ooYznmoTkvY3nva7kv6Hmga9cbiAgICAgICAge1xuICAgICAgICAgICAgY291bnQ6IDUsXG4gICAgICAgICAgICBzcmNQb3M6IGNjLnAoMiAqIHRoaXNbXCJsaXViaWFueGluZ0hcIl0gKiA0ICsgdGhpc1tcImxpdWJpYW54aW5nSFwiXSAqIDQsIC0zICogdGhpc1tcImxpdWJpYW54aW5nQVwiXSAqIDQgLyAyKVxuICAgICAgICB9XTtcblxuICAgICAgICAvL+imgeWKoOeahOWNleS9jeWQkemHj1xuICAgICAgICB2YXIgYWRkVmVjID0gY2MucE11bHQoY2MucEZvckFuZ2xlKDI0MCAqICgyICogTWF0aC5QSSAvIDM2MCkpLCB0aGlzW1wibGl1YmlhbnhpbmdIXCJdICogMik7XG5cbiAgICAgICAgLy/lgY/np7voh7PmupDngrkw77yMMOeahOWQkemHj1xuICAgICAgICB2YXIgcGlhbnlpVG8wcDBWZWMgPSBjYy5wTXVsdChjYy5wRm9yQW5nbGUoMTIwICogKDIgKiBNYXRoLlBJIC8gMzYwKSksIHRoaXNbXCJsaXViaWFueGluZ0hcIl0gKiAyICogNCk7XG5cbiAgICAgICAgdmFyIGZyYW1lTGlzdCA9IFtdO1xuXG4gICAgICAgIHZhciBmUG9zTGlzdCA9IFtdO1xuICAgICAgICAvL+S4gOWIl+WIl+adpeeUn+aIkFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IHBvc0xpc3RbaV0uY291bnQ7IC8v5pWw6YePXG4gICAgICAgICAgICB2YXIgb25lU3JjUG9zID0gY2MucEFkZChwb3NMaXN0W2ldLnNyY1BvcywgcGlhbnlpVG8wcDBWZWMpOyAvL+i1t+Wni+S9jee9rlxuICAgICAgICAgICAgdmFyIGFpbVBvcyA9IGNjLnBBZGQoc3JjUG9zLCBvbmVTcmNQb3MpOyAvL+S4gOadoeeahOi1t+Wni+S9jee9rlxuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZlBvcyA9IGNjLnBBZGQoYWltUG9zLCBjYy5wTXVsdChhZGRWZWMsIGopKTtcbiAgICAgICAgICAgICAgICBmUG9zTGlzdC5wdXNoKGZQb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy/liJ3lp4vljJZcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGZQb3NMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZShcImZyYW1lXCIpO1xuICAgICAgICAgICAgdmFyIHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzW1wiZnJhbWVQaWNcIl07XG5cbiAgICAgICAgICAgIG5vZGUueCA9IGZQb3NMaXN0W2luZGV4XS54O1xuICAgICAgICAgICAgbm9kZS55ID0gZlBvc0xpc3RbaW5kZXhdLnk7XG5cbiAgICAgICAgICAgIC8vZGVidWflrZfnlKhcbiAgICAgICAgICAgIC8vIHZhciBsYWJlbE5vZGUgPSBuZXcgY2MuTm9kZShcIk5ldyBMYWJlbFwiKVxuICAgICAgICAgICAgLy8gdmFyIGxhYmVsQ3AgPSBub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbClcbiAgICAgICAgICAgIC8vIGxhYmVsQ3Auc3RyaW5nID0gaW5kZXgvL1wieDpcIitNYXRoLmZsb29yKG5vZGUueCkgKyBcIlxcbnk6XCIgKyBNYXRoLmZsb29yKG5vZGUueSlcbiAgICAgICAgICAgIC8vIGxhYmVsQ3Aub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5SRVNJWkVfSEVJR0hUXG4gICAgICAgICAgICAvLyBsYWJlbENwLmZvbnRTaXplID0gMThcbiAgICAgICAgICAgIC8vIGxhYmVsTm9kZS5wYXJlbnQgPSBub2RlXG5cbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXG4gICAgICAgICAgICBub2RlLkZLSW5kZXggPSBpbmRleDtcblxuICAgICAgICAgICAgLy/liqDovrlcbiAgICAgICAgICAgIHZhciBwaWNOb2RlID0gbmV3IGNjLk5vZGUoXCJiaWFuU3ByXCIpO1xuICAgICAgICAgICAgdmFyIHNwciA9IHBpY05vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBzcHIuc3ByaXRlRnJhbWUgPSB0aGlzW1wiYmlhblwiXTtcbiAgICAgICAgICAgIHBpY05vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBwaWNOb2RlLnBhcmVudCA9IG5vZGU7XG5cbiAgICAgICAgICAgIGZyYW1lTGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mcmFtZUxpc3QgPSBmcmFtZUxpc3Q7XG4gICAgICAgIHRoaXMucG9zTGlzdCA9IHBvc0xpc3Q7XG4gICAgICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlOyAvL+WIpOaWreaYr+WQpuato+WcqOa2iOmZpOeahOS+neaNrlxuXG4gICAgICAgIC8v55uR5ZCs5oiQ5Yqf5pS+5LiL5LqL5Lu2XG4gICAgICAgIHRoaXMubm9kZS5vbignc3VjY0Ryb3BEb3duT25lJywgdGhpcy5jaGVja1hDLCB0aGlzKTtcblxuICAgICAgICAvL+WIneWni+WMluWOhuWPsuacgOmrmOWIhlxuICAgICAgICB2YXIgbm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9oaWdoU2NvcmUvc2NvcmVMYWJlbCcpO1xuICAgICAgICB2YXIgbGFiZWwgPSBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGxhYmVsLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjb3JlXCIpIHx8IDA7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vL3VwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4vL2NjLmxvZyhcIuajgOa1i+aji+ebmOS4rS4uLi4uXCIsIHRoaXMuZnJhbWVMaXN0KVxuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZyYW1lTGlzdC5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8v5piv5ZCm6ZyA6KaB5Y+Y6ImyXG4vLyAgICAgaWYgKHRoaXMuZnJhbWVMaXN0W2ldLmlzTmVlZFRvQ2hhbmdlQ29sb3IpIHtcbi8vICAgICAgICAgdGhpcy5mcmFtZUxpc3RbaV0uY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMClcbi8vICAgICB9ZWxzZXtcbi8vICAgICAgICAgdGhpcy5mcmFtZUxpc3RbaV0uY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1KVxuLy8gICAgIH1cblxuLy8gfVxuLy99LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnN2Y3ZWVjc2ZlTkx4TDdwTURnWFRkQUEnLCAnTmV3TEJYS3VhaScpO1xuLy8gc2NyaXB0XFxnYW1lQ29yZVxcTmV3TEJYS3VhaS5qc1xuXG52YXIgX3Byb3BlcnRpZXM7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBJbml0TEJYRnJhbWUgPSByZXF1aXJlKCdJbml0TEJYRnJhbWUnKTtcbnZhciBVdGlsID0gcmVxdWlyZSgnVXRpbCcpO1xudmFyIHNjYWxlUGFyYW0gPSAwLjc7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IChfcHJvcGVydGllcyA9IHtcbiAgICAgICAgY2hlY2tlcmJvYXJkOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBJbml0TEJYRnJhbWVcbiAgICAgICAgfVxuXG4gICAgfSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcIktjb3VudFwiLCAzKSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcImxpdWJpYW54aW5nSFwiLCAwKSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcImxpdWJpYW54aW5nQVwiLCAwKSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcImt1YWlUZXhcIiwge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJjb2xvcjFcIiwge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJjb2xvcjJcIiwge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJjb2xvcjNcIiwge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJjb2xvcjRcIiwge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgJ2FuU291bmQnLCB7XG4gICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCAnZmFuZ3hpYVNvdW5kMScsIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsICdmYW5neGlhU291bmQyJywge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHVybDogY2MuQXVkaW9DbGlwXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgJ2Zhbmd4aWFTb3VuZDMnLCB7XG4gICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCAnY2FuTm90U291bmQxJywge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHVybDogY2MuQXVkaW9DbGlwXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgJ2Nhbk5vdFNvdW5kMicsIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pLCBfcHJvcGVydGllcyksXG5cbiAgICBnZXRUaGVDb25maWc6IGZ1bmN0aW9uIGdldFRoZUNvbmZpZygpIHtcblxuICAgICAgICB2YXIgYSA9IHRoaXNbXCJsaXViaWFueGluZ0FcIl07XG4gICAgICAgIHZhciBoID0gdGhpc1tcImxpdWJpYW54aW5nSFwiXTtcblxuICAgICAgICB2YXIgY29uZmlnTGlzdHMgPSBbXG4gICAgICAgIC8v5LiA5LiqXG4gICAgICAgIFtjYy5wKDAsIDApXSxcbiAgICAgICAgLy/kuKTkuKpcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApXSwgLy/mqKrmkYZcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgYSAqIDEuNSldLCAvL+aWnOaRhjFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgLWEgKiAxLjUpXSwgLy/mlpzmkYYyXG4gICAgICAgIC8v5LiJ5LiqXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogNCwgMCldLCAvL+aoquaRhlxuXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogMywgYSAqIDEuNSldLCAvL+aoquaRhjFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiAzLCAtYSAqIDEuNSldLCAvL+aoquaRhjJcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGgsIGEgKiAxLjUpXSwgLy/loIYxXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoLCAtYSAqIDEuNSldLCAvL+WghjJcblxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoLCBhICogMS41KSwgY2MucChoICogMywgYSAqIDEuNSldLCAvL+aWnOaRhjFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgYSAqIDEuNSksIGNjLnAoaCAqIDIsIGEgKiAzKV0sIC8v5pac5pGGMlxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoLCBhICogMS41KSwgY2MucCgwLCBhICogMyldLCAvL+aWnOaRhjNcblxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoLCAtYSAqIDEuNSksIGNjLnAoaCAqIDMsIC1hICogMS41KV0sIC8v5pac5LiL5pGGMVxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoLCAtYSAqIDEuNSksIGNjLnAoaCAqIDIsIC1hICogMyldLCAvL+aWnOS4i+aRhjJcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgLWEgKiAxLjUpLCBjYy5wKDAsIC1hICogMyldLCAvL+aWnOS4i+aRhjNcbiAgICAgICAgLy/lm5vkuKpcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiA0LCAwKSwgY2MucChoICogNiwgMCldLCAvL+aoquaRhjFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiA0LCAwKSwgY2MucChoICogNSwgYSAqIDEuNSldLCAvL+aoquaRhjJcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiA0LCAwKSwgY2MucChoICogNSwgLWEgKiAxLjUpXSwgLy/mqKrmkYYzXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogNCwgMCksIGNjLnAoaCAqIDMsIGEgKiAxLjUpXSwgLy/mqKrmkYY0XG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogNCwgMCksIGNjLnAoaCAqIDMsIC1hICogMS41KV0sIC8v5qiq5pGGNVxuXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogMywgYSAqIDEuNSksIGNjLnAoaCwgYSAqIDEuNSldLCAvL+aWnOS4iuaRhjFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiAzLCBhICogMS41KSwgY2MucChoICogMiwgYSAqIDMpXSwgLy/mlpzkuIrmkYYyXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogMywgYSAqIDEuNSksIGNjLnAoaCAqIDQsIGEgKiAzKV0sIC8v5pac5LiK5pGGM1xuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDMsIGEgKiAxLjUpLCBjYy5wKGggKiA1LCBhICogMS41KV0sIC8v5pac5LiK5pGGNFxuXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogMywgLWEgKiAxLjUpLCBjYy5wKGgsIC1hICogMS41KV0sIC8v5pac5LiL5pGGMVxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDMsIC1hICogMS41KSwgY2MucChoICogMiwgLWEgKiAzKV0sIC8v5pac5LiL5pGGMlxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDMsIC1hICogMS41KSwgY2MucChoICogNCwgLWEgKiAzKV0sIC8v5pac5LiL5pGGM1xuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDMsIC1hICogMS41KSwgY2MucChoICogNSwgLWEgKiAxLjUpXSwgLy/mlpzkuIvmkYY0XG5cbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGgsIC1hICogMS41KSwgY2MucCgtaCwgLWEgKiAxLjUpXSwgLy/kuIvloIYxXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoLCAtYSAqIDEuNSksIGNjLnAoMCwgLWEgKiAzKV0sIC8v5LiL5aCGMlxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCwgLWEgKiAxLjUpLCBjYy5wKGggKiAyLCAtYSAqIDMpXSwgLy/kuIvloIYzXG5cbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgLWEgKiAxLjUpLCBjYy5wKGggKiAyLCAtYSAqIDMpLCBjYy5wKGggKiAzLCAtYSAqIDQuNSldLCAvL+aWnOaJmzFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoLWgsIC1hICogMS41KSwgY2MucCgtaCAqIDIsIC1hICogMyksIGNjLnAoLWggKiAzLCAtYSAqIDQuNSldXTtcblxuICAgICAgICAvL+aWnOaJmzJcblxuICAgICAgICByZXR1cm4gY29uZmlnTGlzdHM7XG4gICAgfSxcblxuICAgIG5ld09uZUs6IGZ1bmN0aW9uIG5ld09uZUsoY29sb3JJbmRleCkge1xuICAgICAgICAvL+WIm+W7uuS4gOS4quWdl1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKFwiY29sb3JTcHJcIik7XG4gICAgICAgIHZhciBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzW1wiY29sb3JcIiArIGNvbG9ySW5kZXhdO1xuXG4gICAgICAgIC8vY2MubG9nKFwi56ysXCIsY29sb3JJbmRleCxcIuS4quminGNvbG9yXCIpXG5cbiAgICAgICAgLy/liqDnurnnkIZcbiAgICAgICAgdmFyIHdlbmxpTm9kZSA9IG5ldyBjYy5Ob2RlKFwid2VubGlTcHJcIik7XG4gICAgICAgIHZhciB3ZW5saVNwcml0ZSA9IHdlbmxpTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgd2VubGlTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzW1wia3VhaVRleFwiXTtcblxuICAgICAgICB3ZW5saU5vZGUucGFyZW50ID0gbm9kZTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgbmV3T25lTm9kZTogZnVuY3Rpb24gbmV3T25lTm9kZSgpIHtcbiAgICAgICAgdmFyIGt1YWlOb2RlID0gbmV3IGNjLk5vZGUoXCJrdWFpXCIpO1xuXG4gICAgICAgIHZhciBjb25maWcgPSB0aGlzLmdldFRoZUNvbmZpZygpO1xuXG4gICAgICAgIC8v6ZqP5py65qC35a2QXG4gICAgICAgIHZhciByYW5kb21JbmRleCA9IFV0aWwucmFuZG9tKDAsIGNvbmZpZy5sZW5ndGggLSAxKTtcbiAgICAgICAgdmFyIHBvc0xpc3QgPSBjb25maWdbcmFuZG9tSW5kZXhdO1xuXG4gICAgICAgIHZhciByYW5kb21JbmRleCA9IFV0aWwucmFuZG9tKDEsIDQpO1xuICAgICAgICB2YXIgc3VtWCA9IDA7XG4gICAgICAgIHZhciBjb3VudFggPSAwO1xuICAgICAgICB2YXIgc3VtWSA9IDA7XG4gICAgICAgIHZhciBjb3VudFkgPSAwO1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcG9zTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBwb3NMaXN0W2luZGV4XTtcbiAgICAgICAgICAgIHZhciBrdWFpID0gdGhpcy5uZXdPbmVLKHJhbmRvbUluZGV4KTtcbiAgICAgICAgICAgIGt1YWkueCA9IHBvcy54O1xuXG4gICAgICAgICAgICBzdW1YICs9IGt1YWkueDtcbiAgICAgICAgICAgIGNvdW50WCsrO1xuXG4gICAgICAgICAgICBrdWFpLnkgPSBwb3MueTtcblxuICAgICAgICAgICAgc3VtWSArPSBrdWFpLnk7XG4gICAgICAgICAgICBjb3VudFkrKztcblxuICAgICAgICAgICAga3VhaU5vZGUuYWRkQ2hpbGQoa3VhaSk7XG4gICAgICAgIH1cblxuICAgICAgICBrdWFpTm9kZS54ID0gLXN1bVggLyBjb3VudFg7XG4gICAgICAgIGt1YWlOb2RlLnkgPSAtc3VtWSAvIGNvdW50WTtcblxuICAgICAgICBrdWFpTm9kZS5zZXRTY2FsZShzY2FsZVBhcmFtKTtcblxuICAgICAgICByZXR1cm4ga3VhaU5vZGU7XG4gICAgfSxcblxuICAgIC8v5re75Yqg6Kem5pG4XG4gICAgYWRkVG91Y2hFdmVudDogZnVuY3Rpb24gYWRkVG91Y2hFdmVudCgpIHtcbiAgICAgICAgdmFyIHVwSCA9IDEwMDtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubm9kZS5veCA9IHRoaXMubm9kZS54O1xuICAgICAgICB0aGlzLm5vZGUub3kgPSB0aGlzLm5vZGUueTtcblxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMueSArPSB1cEg7XG4gICAgICAgICAgICAvL2NjLmxvZyhcIuWOn+S9jee9ru+8mlwiLCB0aGlzLm94LCB0aGlzLm95KVxuXG4gICAgICAgICAgICB0aGlzLmdldENoaWxkQnlOYW1lKFwia3VhaVwiKS5zZXRTY2FsZSgxKTtcblxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzZWxmLmFuU291bmQpO1xuICAgICAgICB9LCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LnRvdWNoLmdldERlbHRhKCk7XG4gICAgICAgICAgICB0aGlzLnggKz0gZGVsdGEueDtcbiAgICAgICAgICAgIHRoaXMueSArPSBkZWx0YS55O1xuXG4gICAgICAgICAgICBzZWxmLmNvbGxpc2lvbkZ1bmMoKTtcblxuICAgICAgICAgICAgLy/lj5joibLlpITnkIZcbiAgICAgICAgICAgIGlmICghc2VsZi5jaGVja0lzQ2FuRHJvcCgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VDb2xvckRlYWwodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlQ29sb3JEZWFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMubm9kZSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRyb3BEb3duRnVuYygpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRyb3BEb3duRnVuYygpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgLy/lj5joibLlpITnkIZcbiAgICBjaGFuZ2VDb2xvckRlYWw6IGZ1bmN0aW9uIGNoYW5nZUNvbG9yRGVhbChpc0p1c3RDbGVhckNvbG9yKSB7XG4gICAgICAgIC8vY2MubG9nKFwi5Y+Y6Imy77yBXCIraXNKdXN0Q2xlYXJDb2xvciwgdGhpcy5jaGVja0ZyYW1lTGlzdC5sZW5ndGgsIFwidGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0Lmxlbmd0aDpcIiwgdGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0Lmxlbmd0aClcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hlY2tlcmJvYXJkLmZyYW1lTGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICB2YXIgZ3VhbmdQaWNOb2RlID0gdGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0W2ldLmdldENoaWxkQnlOYW1lKFwiYmlhblNwclwiKTtcbiAgICAgICAgICAgIGd1YW5nUGljTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5aaC5p6c5Y+C5pWw5pyJ5YC877yM55u05o6l6L+U5Zue77yM5LiN5YGa5LiL6Z2i55qEXG4gICAgICAgIGlmIChpc0p1c3RDbGVhckNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hlY2tGcmFtZUxpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgdmFyIGd1YW5nUGljTm9kZSA9IHRoaXMuY2hlY2tGcmFtZUxpc3RbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJiaWFuU3ByXCIpO1xuICAgICAgICAgICAgZ3VhbmdQaWNOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy/norDmkp7pgLvovpFcbiAgICBjb2xsaXNpb25GdW5jOiBmdW5jdGlvbiBjb2xsaXNpb25GdW5jKCkge1xuICAgICAgICAvL2RlYnVn5a2X55SoXG4gICAgICAgIC8vIHRoaXMuZGVidWdMYWJlbC5zdHJpbmcgPSBcIng6XCIrTWF0aC5mbG9vcih0aGlzLm5vZGUueCkgKyBcIlxcbnk6XCIgKyBNYXRoLmZsb29yKHRoaXMubm9kZS55KVxuICAgICAgICAvL2NjLmxvZyhcIng6XCIsIHRoaXMubm9kZS54LCBcInk6XCIsIHRoaXMubm9kZS55LCB0aGlzLm5vZGUpXG5cbiAgICAgICAgdGhpcy5jaGVja0ZyYW1lTGlzdCA9IFtdOyAvL+a4heepuuaVsOe7hFxuICAgICAgICB0aGlzLmNoZWNrRktsaXN0ID0gW107IC8v5riF56m65pWw57uEXG5cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgdmFyIHBpYW55aUNQb3MgPSBjYy5wQWRkKGNjLnAodGhpcy5ub2RlLmNoaWxkcmVuWzBdLngsIHRoaXMubm9kZS5jaGlsZHJlblswXS55KSwgY2MucChjaGlsZHJlbltpXS54LCBjaGlsZHJlbltpXS55KSk7XG4gICAgICAgICAgICB2YXIgY2hpbGRQb3MgPSBjYy5wQWRkKHRoaXMubm9kZS5wb3NpdGlvbiwgcGlhbnlpQ1Bvcyk7XG4gICAgICAgICAgICB2YXIgZnJhbWUgPSB0aGlzLmNoZWNrUG9zRnVuYyhjaGlsZFBvcyk7XG5cbiAgICAgICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGS2xpc3QucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZyYW1lTGlzdC5wdXNoKGZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL+S4gOS4queCueWSjOaji+ebmOeahOaJgOacieahhuajgOa1i1xuICAgIGNoZWNrUG9zRnVuYzogZnVuY3Rpb24gY2hlY2tQb3NGdW5jKHBvcykge1xuICAgICAgICB2YXIgbGVuID0gMjc7IC8v56Kw5pKe6Led56a7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoZWNrZXJib2FyZC5mcmFtZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmcmFtZU5vZGUgPSB0aGlzLmNoZWNrZXJib2FyZC5mcmFtZUxpc3RbaV07XG4gICAgICAgICAgICB2YXIgZGlzID0gY2MucERpc3RhbmNlKGNjLnAoZnJhbWVOb2RlLngsIGZyYW1lTm9kZS55KSwgcG9zKTtcbiAgICAgICAgICAgIGlmIChkaXMgPD0gbGVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1lTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL+ajgOa1i+iHqui6q+aYr+WQpuW3sue7j+aXoOWkhOWPr+aUvlxuICAgIGNoZWNrSXNMb3NlOiBmdW5jdGlvbiBjaGVja0lzTG9zZSgpIHtcbiAgICAgICAgdmFyIGNhbkRyb3BDb3VudCA9IDA7XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuO1xuXG4gICAgICAgIC8v5LiA5Liq5Liq5qC85a2Q5pS+6K+V5LiA5LiL6IO95LiN6IO95pS+XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZnJhbWVOb2RlID0gdGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0W2ldO1xuICAgICAgICAgICAgdmFyIHNyY1BvcyA9IGNjLnAoZnJhbWVOb2RlLngsIGZyYW1lTm9kZS55KTtcblxuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIGlmICghZnJhbWVOb2RlLmlzSGF2ZUZLKSB7XG5cbiAgICAgICAgICAgICAgICAvL+i/memHjOWBmuaYr+WQpuWPr+S7peaUvueahOWIpOaWrVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gMjc7IC8v56Kw5pKe6Led56a7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZFBvcyA9IGNjLnBBZGQoc3JjUG9zLCBjYy5wKGNoaWxkcmVuW2pdLngsIGNoaWxkcmVuW2pdLnkpKTtcblxuICAgICAgICAgICAgICAgICAgICAvL+eisOaSnuajgOa1i1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMuY2hlY2tlcmJvYXJkLmZyYW1lTGlzdC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRGcmFtZU5vZGUgPSB0aGlzLmNoZWNrZXJib2FyZC5mcmFtZUxpc3Rba107XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzID0gY2MucERpc3RhbmNlKGNjLnAodEZyYW1lTm9kZS54LCB0RnJhbWVOb2RlLnkpLCBjaGlsZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzIDw9IGxlbiAmJiAhdEZyYW1lTm9kZS5pc0hhdmVGSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7IC8v5Y+v5Lul5pS+5bCx6KaB57Sv5Yqg6K6h5pWwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCLmoLzlrZBcIisgZnJhbWVOb2RlLkZLSW5kZXggK1wi5Yik5pat5piv5ZCm6IO95pS+77yaXCIsY2hpbGRyZW4ubGVuZ3RoLCBjb3VudClcblxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5pWw6YeP55u4562J5bCx6K+05piO6L+Z5Liq5pa55Z2X5Zyo6L+Z5Liq5qC85a2Q5piv5Y+v5Lul5pS+5LiL55qEXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhmcmFtZU5vZGUuRktJbmRleCArIFwi55qE5L2N572u5Y+v5Lul5pS+XCIsIGNoaWxkcmVuLmxlbmd0aCwgY291bnQpXG4gICAgICAgICAgICAgICAgICAgIGNhbkRyb3BDb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYW5Ecm9wQ291bnQgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy/mo4DmtYvmmK/lkKbog73lpJ/mlL7kuItcbiAgICBjaGVja0lzQ2FuRHJvcDogZnVuY3Rpb24gY2hlY2tJc0NhbkRyb3AoKSB7XG4gICAgICAgIC8v5YWI5Yik5pat5pWw6YeP5piv5ZCm5LiA6Ie077yM5LiN5LiA6Ie06K+05piO5pyJ5LiA5Liq6LaF5Ye65Y675LqGXG4gICAgICAgIGlmICh0aGlzLmNoZWNrRnJhbWVMaXN0Lmxlbmd0aCA9PSAwIHx8IHRoaXMuY2hlY2tGcmFtZUxpc3QubGVuZ3RoICE9IHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5qOA5rWL5pS+5LiL55qE5qC85a2Q5piv5ZCm5bey57uP5pyJ5pa55Z2XXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGVja0ZyYW1lTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tGcmFtZUxpc3RbaV0uaXNIYXZlRkspIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLy/mlL7kuIvpgLvovpFcbiAgICBkcm9wRG93bkZ1bmM6IGZ1bmN0aW9uIGRyb3BEb3duRnVuYygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc0NhbkRyb3AoKSkge1xuICAgICAgICAgICAgLy/mlL7lm57ljrtcbiAgICAgICAgICAgIHRoaXMudGFrZUJhY2soKTtcblxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNhbk5vdFNvdW5kMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hlY2tGS2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGS2xpc3RbaV0ueCA9IDA7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRktsaXN0W2ldLnkgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLmNoZWNrRktsaXN0W2ldLnBhcmVudCA9IHRoaXMuY2hlY2tGcmFtZUxpc3RbaV07XG4gICAgICAgICAgICB0aGlzLmNoZWNrRnJhbWVMaXN0W2ldLmlzSGF2ZUZLID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy9jYy5sb2coXCJ0aGlzLmNoZWNrRnJhbWVMaXN0W1wiK2krXCJdOlwiLCB0aGlzLmNoZWNrRnJhbWVMaXN0W2ldKVxuXG4gICAgICAgICAgICAvL+eJueaViFxuICAgICAgICAgICAgdmFyIHBpY05vZGUgPSBuZXcgY2MuTm9kZShcImd1YW5nRWZmTm9kZVwiKTtcbiAgICAgICAgICAgIHZhciBzcHIgPSBwaWNOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgc3ByLnNwcml0ZUZyYW1lID0gdGhpcy5jaGVja2VyYm9hcmRbXCJiaWFuXCJdO1xuICAgICAgICAgICAgdGhpcy5jaGVja0ZyYW1lTGlzdFtpXS5hZGRDaGlsZChwaWNOb2RlLCAtMSk7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShjYy5zcGF3bihjYy5mYWRlT3V0KDEpLCBjYy5zY2FsZVRvKDEsIDEuMikpLCBjYy5yZW1vdmVTZWxmKCkpKTtcbiAgICAgICAgICAgIHBpY05vZGUucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdmFyIG9uZU5vZGUgPSB0aGlzLm5ld09uZU5vZGUoKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG9uZU5vZGUpO1xuXG4gICAgICAgIHRoaXMuY2hlY2tlcmJvYXJkLmN1ckZLTGVuID0gdGhpcy5jaGVja0ZLbGlzdC5sZW5ndGg7XG4gICAgICAgIHRoaXMuY2hlY2tlcmJvYXJkLm5vZGUuZW1pdCgnc3VjY0Ryb3BEb3duT25lJyk7XG5cbiAgICAgICAgdmFyIHJhbkMgPSBVdGlsLnJhbmRvbSgxLCAzKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzW1wiZmFuZ3hpYVNvdW5kXCIgKyByYW5DXSk7XG5cbiAgICAgICAgLy/mlL7lm57ljrtcbiAgICAgICAgdGhpcy50YWtlQmFjaygpO1xuXG4gICAgICAgIC8v55u05o6l55So5qOL55uY5qOA5rWL5piv5LiN5piv6L6T5LqGXG4gICAgICAgIHRoaXMuY2hlY2tlcmJvYXJkLmNoZWNrSXNMb3NlKCk7XG4gICAgfSxcblxuICAgIC8v5Zue5Yiw5Y6f5L2NXG4gICAgdGFrZUJhY2s6IGZ1bmN0aW9uIHRha2VCYWNrKCkge1xuICAgICAgICAvL+WPmOiJsuWkhOeQhlxuICAgICAgICB0aGlzLmNoZWNrRnJhbWVMaXN0ID0gW107IC8v5riF56m65pWw57uEXG4gICAgICAgIHRoaXMuY2hhbmdlQ29sb3JEZWFsKCk7XG5cbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwia3VhaVwiKS5zZXRTY2FsZShzY2FsZVBhcmFtKTtcblxuICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMubm9kZS5veDtcbiAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLm5vZGUub3k7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNoZWNrRnJhbWVMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hlY2tGS2xpc3QgPSBbXTtcblxuICAgICAgICB0aGlzLm5vZGUuY2FzY2FkZU9wYWNpdHkgPSB0cnVlO1xuXG4gICAgICAgIHZhciBvbmVOb2RlID0gdGhpcy5uZXdPbmVOb2RlKCk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChvbmVOb2RlKTtcblxuICAgICAgICAvL+a3u+WKoOinpuaRuFxuICAgICAgICB0aGlzLmFkZFRvdWNoRXZlbnQoKTtcblxuICAgICAgICAvL2RlYnVn5a2X55SoXG4gICAgICAgIC8vIHZhciBsYWJlbE5vZGUgPSBuZXcgY2MuTm9kZShcIk5ldyBMYWJlbFwiKVxuICAgICAgICAvLyB2YXIgbGFiZWxDcCA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpXG4gICAgICAgIC8vIGxhYmVsQ3Auc3RyaW5nID0gXCJ4OlwiK01hdGguZmxvb3IodGhpcy5ub2RlLngpICsgXCJcXG55OlwiICsgTWF0aC5mbG9vcih0aGlzLm5vZGUueSlcbiAgICAgICAgLy8gbGFiZWxDcC5mb250U2l6ZSA9IDE4XG4gICAgICAgIC8vIGxhYmVsTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgLy8gbGFiZWxOb2RlLnpJbmRleCA9IDFcbiAgICAgICAgLy8gY2MubG9nKFwiTm9kZSB6SW5kZXg6IFwiICsgbGFiZWxOb2RlLnpJbmRleClcbiAgICAgICAgLy8gdGhpcy5kZWJ1Z0xhYmVsID0gbGFiZWxDcFxuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2ZhMDkzZXlxOVJPR0pud1lMRW40eFJMJywgJ1Njb3JlQnRuQ3AnKTtcbi8vIHNjcmlwdFxcU2NvcmVCdG5DcC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge31cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzdkOWRkNGptaTlJN1oxZmdWUEhmRVhTJywgJ1N0YXJ0QnRuQ3AnKTtcbi8vIHNjcmlwdFxcU3RhcnRCdG5DcC5qc1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCLmuLjmiI/nlYzpnaJcIiwge1xuICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgfSksXG5cbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgdmFyIGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC4yLCAwKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MubG9nKFwi5byA5aeL5ri45oiPXCIpO1xuXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lU2NlbmVcIik7XG5cbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKFwic2NvcmVCdG5cIiwgZnVuY3Rpb24gKGVyciwgbm9kZSkge1xuICAgICAgICAgICAgLy8gICAgIHZhciBuZXdOb2RlID0gY2MuaW5zdGFudGlhdGUobm9kZSk7XG4gICAgICAgICAgICAvLyAgICAgY2FudmFzLmFkZENoaWxkKG5ld05vZGUpO1xuICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoXCJsYnhMYXlvdXRcIiwgZnVuY3Rpb24gKGVyciwgbm9kZSkge1xuICAgICAgICAgICAgLy8gICAgIHZhciBuZXdOb2RlID0gY2MuaW5zdGFudGlhdGUobm9kZSk7XG4gICAgICAgICAgICAvLyAgICAgY2FudmFzLmFkZENoaWxkKG5ld05vZGUpO1xuXG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhcImdldE5ld0ZLXCIsIGZ1bmN0aW9uIChlcnIsIG5vZGUpIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgbmV3Tm9kZSA9IGNjLmluc3RhbnRpYXRlKG5vZGUpO1xuICAgICAgICAgICAgLy8gICAgIGNhbnZhcy5hZGRDaGlsZChuZXdOb2RlKTtcblxuICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSwgdGhpcykpO1xuXG4gICAgICAgIHZhciBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgYW5pbS5zdG9wKCk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyZGE1OStGZ2tSRkdxekdJYmN2NTd0SScsICdUaXBDcCcpO1xuLy8gc2NyaXB0XFxUaXBDcC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUueCA9IDA7XG4gICAgICAgIHRoaXMubm9kZS55ID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihjYy5mYWRlT3V0KDEpLCBjYy5tb3ZlQnkoMSwgY2MucCgwLCAxMDApKSksIGNjLnJlbW92ZVNlbGYodHJ1ZSkpKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcxZjU3ZkpYVy81TXdwekdFMnRoNXFHRScsICdVdGlsJyk7XG4vLyBzY3JpcHRcXGdhbWVDb3JlXFxjb21tb25cXFV0aWwuanNcblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE2LzUvNi5cclxuICovXG52YXIgX3AgPSB7XG5cbiAgICAvL+mBjeWOhuWvueixoeeahOWxnuaAp+WSjOaWueazlVxuICAgIHByaW50T2JqOiBmdW5jdGlvbiBwcmludE9iaihvYmopIHtcbiAgICAgICAgLy8g55So5p2l5L+d5a2Y5omA5pyJ55qE5bGe5oCn5ZCN56ew5ZKM5YC8XG4gICAgICAgIHZhciBwcm9wcyA9IFwiXCI7XG4gICAgICAgIC8vIOW8gOWni+mBjeWOhlxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgLy8g5pa55rOVXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwXSA9PSBcIiBmdW5jdGlvbiBcIikge1xuICAgICAgICAgICAgICAgIHByb3BzICs9IHAgKyBcIiBcXG4gXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHAg5Li65bGe5oCn5ZCN56ew77yMb2JqW3Bd5Li65a+55bqU5bGe5oCn55qE5YC8XG4gICAgICAgICAgICAgICAgcHJvcHMgKz0gcCArIFwiIFxcbiBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAvLyDmnIDlkI7mmL7npLrmiYDmnInnmoTlsZ7mgKdcblxuICAgICAgICBjYy5sb2cocHJvcHMpO1xuICAgIH0sXG5cbiAgICAvL+maj+aculxuICAgIHJhbmRvbTogZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gICAgfSxcblxuICAgIC8v6YCa6L+H5Y+C5pWw5L+d5a2Y6Zet5YyF5aSW6YOo55qE5Y+Y6YeP5b2i5oiQ6Z2Z5oCB5b+r54Wn5p2l5L2/55So77yM6YG/5YWN6Zet5YyF5YWx5Lqr5aSW6YOo5Y+Y6YeP55qE5pe25YCZ55SoXG4gICAgLy/nrKzkuIDkuKrlj4LmlbDlv4XpobvmmK/lh73mlbDvvIzlkI7pnaLnmoTlj4LmlbDmmK/opoHlgZrlv6vnhafnmoTlj5jph49cbiAgICBjcmVhdGVGdW5jOiBmdW5jdGlvbiBjcmVhdGVGdW5jKCkge1xuICAgICAgICB2YXIgbmV3QXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3QXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coXCJhcmd1bWVudHM6XCIsIGFyZ3VtZW50cywgXCJuZXdBcmdzOlwiLCBuZXdBcmdzKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5ld0FyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmd1bWVudHNbMF0obmV3QXJncyk7IC8v56ys5LiA5Liq5Y+C5pWw5piv5LiA5Liq5Ye95pWw55qE5ZibXG4gICAgICAgIH07XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9wO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMGY3MjdSVmZ6WklIWmdla0Y1QTJtSVMnLCAnWkluZGV4U2V0Jyk7XG4vLyBzY3JpcHRcXFpJbmRleFNldC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgekluZGV4OiAwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gdGhpcy56SW5kZXg7XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7Il19
