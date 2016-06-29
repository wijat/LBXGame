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

    properties: (_properties = {}, _defineProperty(_properties, "分数", 0), _defineProperty(_properties, "背景音乐", {
        "default": null,
        url: cc.AudioClip
    }), _defineProperty(_properties, "是否开启音乐", true), _properties),

    // use this for initialization
    onLoad: function onLoad() {
        require('App');

        if (this["是否开启音乐"]) {
            cc.audioEngine.playEffect(this["背景音乐"], true);
        }
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"App":"App"}],"InitLBXFrame":[function(require,module,exports){
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
    }), _properties),

    //检测消除
    checkXC: function checkXC(argument) {
        //放下都加分
        this.addScore(this.curFKLen, true);

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
                    var xIndex = arguments[1];
                    var effNode = cc.instantiate(this.boomEffPrefab);
                    this.frameList[xIndex].addChild(effNode);
                }, this, xIndex));

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
        }

        this.addScore(count);
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
        }
    },

    //加分，参数是消除的总数,isDropAdd是是否是放下的单纯加分
    addScore: function addScore(XCCount, isDropAdd) {
        var addScoreCount = isDropAdd ? XCCount : 2 * XCCount * XCCount; //数量的平方
        var node = cc.find('Canvas/score/scoreLabel');
        var label = node.getComponent(cc.Label);

        label.string = addScoreCount + Number(label.string);
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
},{}]},{},["ZIndexSet","Util","BgRandomMove","BackBtnCp","Game","InitLBXFrame","StartBtnCp","NewLBXKuai","App","ButtonControl","ScoreBtnCp","GameData"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvQXBwRGF0YS9Mb2NhbC9Db2Nvc0NyZWF0b3IvYXBwLTEuMS4xL3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic2NyaXB0L2dhbWVDb3JlL0FwcC5qcyIsInNjcmlwdC9CYWNrQnRuQ3AuanMiLCJzY3JpcHQvQmdSYW5kb21Nb3ZlLmpzIiwic2NyaXB0L2dhbWVDb3JlL2NvbW1vbi9CdXR0b25Db250cm9sLmpzIiwic2NyaXB0L0dhbWVEYXRhLmpzIiwic2NyaXB0L0dhbWUuanMiLCJzY3JpcHQvZ2FtZUNvcmUvSW5pdExCWEZyYW1lLmpzIiwic2NyaXB0L2dhbWVDb3JlL05ld0xCWEt1YWkuanMiLCJzY3JpcHQvU2NvcmVCdG5DcC5qcyIsInNjcmlwdC9TdGFydEJ0bkNwLmpzIiwic2NyaXB0L2dhbWVDb3JlL2NvbW1vbi9VdGlsLmpzIiwic2NyaXB0L1pJbmRleFNldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdiYzk3NzJaVmVWTTJvbXdTdlAra0FhcicsICdBcHAnKTtcbi8vIHNjcmlwdFxcZ2FtZUNvcmVcXEFwcC5qc1xuXG52YXIgYXBwID0ge1xuICAgIHN0YXJ0R2FtZTogZnVuY3Rpb24gc3RhcnRHYW1lKCkge31cbn07XG5cbi8v5Yqg6L295qih5Z2XKOaciemhuuW6jylcbnZhciBtb2RQYXRoID0gWydVdGlsJ107XG5cbmZvciAodmFyIGkgaW4gbW9kUGF0aCkge1xuICAgIHZhciBwYXRoID0gbW9kUGF0aFtpXTtcbiAgICByZXF1aXJlKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzNjNWU5RllIRDlMeFpXWjM5dWRRRm5pJywgJ0JhY2tCdG5DcCcpO1xuLy8gc2NyaXB0XFxCYWNrQnRuQ3AuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAvL3RoaXMubm9kZS5wYXJlbnQuZGVzdHJveSgpXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVTY2VuZVwiKTtcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMmVmZmZKMWhsUk15Nk5FSHA3SU1jSmknLCAnQmdSYW5kb21Nb3ZlJyk7XG4vLyBzY3JpcHRcXEJnUmFuZG9tTW92ZS5qc1xuXG52YXIgX3Byb3BlcnRpZXM7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczogKF9wcm9wZXJ0aWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJY6L2056e75Yqo6Led56a7XCIsIDEpLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwieei9tOenu+WKqOi3neemu1wiLCAxKSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcIuenu+WKqOmAn+W6pijljZXkvY3vvJrlg4/ntKAv56eSKVwiLCAyMCksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCLpmo/mnLrph49cIiwgMTApLCBfcHJvcGVydGllcyksXG5cbiAgICAvL+maj+acuuenu+WKqFxuICAgIHJhbmRvbU1vdmU6IGZ1bmN0aW9uIHJhbmRvbU1vdmUoKSB7XG5cbiAgICAgICAgdmFyIGR0ID0gY2MucExlbmd0aChjYy5wKHRoaXNbXCJY6L2056e75Yqo6Led56a7XCJdLCB0aGlzW1wieei9tOenu+WKqOi3neemu1wiXSkpIC8gdGhpc1tcIuenu+WKqOmAn+W6pijljZXkvY3vvJrlg4/ntKAv56eSKVwiXTtcbiAgICAgICAgdmFyIHJhbmRvbURpciA9IGNjLnBNdWx0KGNjLnBOb3JtYWxpemUoY2MucChjYy5yYW5kb21NaW51czFUbzEoKSwgY2MucmFuZG9tTWludXMxVG8xKCkpKSwgdGhpc1tcIumaj+acuumHj1wiXSk7XG5cbiAgICAgICAgdmFyIG1vdmVEaXIgPSBjYy5wQWRkKGNjLnAodGhpc1tcIljovbTnp7vliqjot53nprtcIl0sIHRoaXNbXCJ56L2056e75Yqo6Led56a7XCJdKSwgcmFuZG9tRGlyKTtcblxuICAgICAgICB2YXIgYWN0aW9uID0gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoZHQsIG1vdmVEaXIpLCBjYy5tb3ZlQnkoZHQsIGNjLnBNdWx0KG1vdmVEaXIsIC0xKSkpKTtcblxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnJhbmRvbU1vdmUoKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdjMmQ1YlZJNjdaUEFxOFU1alhsbUd3QycsICdCdXR0b25Db250cm9sJyk7XG4vLyBzY3JpcHRcXGdhbWVDb3JlXFxjb21tb25cXEJ1dHRvbkNvbnRyb2wuanNcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiBfZGVmaW5lUHJvcGVydHkoe30sIFwi6Z+z5pWIXCIsIHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgIHVybDogY2MuQXVkaW9DbGlwXG4gICAgfSksXG5cbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXNbXCLpn7PmlYhcIl0pO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdmOTA2OTNHVG1sR1M3VDVma25uRE5UeScsICdHYW1lRGF0YScpO1xuLy8gc2NyaXB0XFxHYW1lRGF0YS5qc1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCLliIbmlbBcIiwgMCksXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc3MDFiOWh0VG4xUEZJT3J1QTZtbm9vSycsICdHYW1lJyk7XG4vLyBzY3JpcHRcXEdhbWUuanNcblxudmFyIF9wcm9wZXJ0aWVzO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IChfcHJvcGVydGllcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwi5YiG5pWwXCIsIDApLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwi6IOM5pmv6Z+z5LmQXCIsIHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgIHVybDogY2MuQXVkaW9DbGlwXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCLmmK/lkKblvIDlkK/pn7PkuZBcIiwgdHJ1ZSksIF9wcm9wZXJ0aWVzKSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICByZXF1aXJlKCdBcHAnKTtcblxuICAgICAgICBpZiAodGhpc1tcIuaYr+WQpuW8gOWQr+mfs+S5kFwiXSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzW1wi6IOM5pmv6Z+z5LmQXCJdLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzczODEwdW4vTDlCKzdwdHViUWZMdkh5JywgJ0luaXRMQlhGcmFtZScpO1xuLy8gc2NyaXB0XFxnYW1lQ29yZVxcSW5pdExCWEZyYW1lLmpzXG5cbnZhciBfcHJvcGVydGllcztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGRpc0xpc3QgPSBbXG4vL+S4gOS4quaWueWQkVxuWzAsIDEsIDIsIDMsIDRdLCBbNSwgNiwgNywgOCwgOSwgMTBdLCBbMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTddLCBbMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1XSwgWzI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzRdLCBbMzUsIDM2LCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyXSwgWzQzLCA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5XSwgWzUwLCA1MSwgNTIsIDUzLCA1NCwgNTVdLCBbNTYsIDU3LCA1OCwgNTksIDYwXSxcblxuLy/lj6bkuIDkuKrmlrnlkJFcblsyNiwgMzUsIDQzLCA1MCwgNTZdLCBbMTgsIDI3LCAzNiwgNDQsIDUxLCA1N10sIFsxMSwgMTksIDI4LCAzNywgNDUsIDUyLCA1OF0sIFs1LCAxMiwgMjAsIDI5LCAzOCwgNDYsIDUzLCA1OV0sIFswLCA2LCAxMywgMjEsIDMwLCAzOSwgNDcsIDU0LCA2MF0sIFsxLCA3LCAxNCwgMjIsIDMxLCA0MCwgNDgsIDU1XSwgWzIsIDgsIDE1LCAyMywgMzIsIDQxLCA0OV0sIFszLCA5LCAxNiwgMjQsIDMzLCA0Ml0sIFs0LCAxMCwgMTcsIDI1LCAzNF0sXG5cbi8v5qiq5ZCRXG5bMCwgNSwgMTEsIDE4LCAyNl0sIFsxLCA2LCAxMiwgMTksIDI3LCAzNV0sIFsyLCA3LCAxMywgMjAsIDI4LCAzNiwgNDNdLCBbMywgOCwgMTQsIDIxLCAyOSwgMzcsIDQ0LCA1MF0sIFs0LCA5LCAxNSwgMjIsIDMwLCAzOCwgNDUsIDUxLCA1Nl0sIFsxMCwgMTYsIDIzLCAzMSwgMzksIDQ2LCA1MiwgNTddLCBbMTcsIDI0LCAzMiwgNDAsIDQ3LCA1MywgNThdLCBbMjUsIDMzLCA0MSwgNDgsIDU0LCA1OV0sIFszNCwgNDIsIDQ5LCA1NSwgNjBdXTtcblxudmFyIFV0aWwgPSByZXF1aXJlKCdVdGlsJyk7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczogKF9wcm9wZXJ0aWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJiaWFuY2hhbmdnZXppc2h1XCIsIDUpLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwibGl1YmlhbnhpbmdIXCIsIDApLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwibGl1YmlhbnhpbmdBXCIsIDApLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwiZnJhbWVQaWNcIiwge1xuICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWVcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcImJpYW5cIiwge1xuICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWVcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcInhpYW9jaHVTb3VuZFwiLCB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwic2h1UHJlZmFiXCIsIHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsIFwiYm9vbUVmZlByZWZhYlwiLCB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICB9KSwgX3Byb3BlcnRpZXMpLFxuXG4gICAgLy/mo4DmtYvmtojpmaRcbiAgICBjaGVja1hDOiBmdW5jdGlvbiBjaGVja1hDKGFyZ3VtZW50KSB7XG4gICAgICAgIC8v5pS+5LiL6YO95Yqg5YiGXG4gICAgICAgIHRoaXMuYWRkU2NvcmUodGhpcy5jdXJGS0xlbiwgdHJ1ZSk7XG5cbiAgICAgICAgdmFyIGhhdmVGS0luZGV4TGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnJhbWVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZUxpc3RbaV0uaXNIYXZlRkspIHtcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyh0aGlzLmZyYW1lTGlzdFtpXS5GS0luZGV4KVxuICAgICAgICAgICAgICAgIGhhdmVGS0luZGV4TGlzdC5wdXNoKHRoaXMuZnJhbWVMaXN0W2ldLkZLSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaGF2ZUZLSW5kZXhMaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jYy5sb2coXCJoYXZlRktJbmRleExpc3TvvJpcIiwgaGF2ZUZLSW5kZXhMaXN0LnRvU3RyaW5nKCkpXG5cbiAgICAgICAgdmFyIHhjTGlzdCA9IFtdOyAvL+imgea2iOmZpOeahOaWueWdl+WIl+ihqFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvbmVYQ0xpc3QgPSBkaXNMaXN0W2ldO1xuICAgICAgICAgICAgdmFyIGludGVyc2VjdEFyeSA9IHRoaXMuZ2V0MkFyeUludGVyc2VjdChoYXZlRktJbmRleExpc3QsIG9uZVhDTGlzdCk7XG5cbiAgICAgICAgICAgIGlmIChpbnRlcnNlY3RBcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiaW50ZXJzZWN0QXJ5OlwiLCBpbnRlcnNlY3RBcnkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIm9uZVhDTGlzdDpcIiwgb25lWENMaXN0LnRvU3RyaW5nKCkpXG5cbiAgICAgICAgICAgICAgICB2YXIgaXNYQyA9IHRoaXMuY2hlY2syQXJ5SXNFcXVhbChvbmVYQ0xpc3QsIGludGVyc2VjdEFyeSk7XG5cbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcImludGVyc2VjdEFyeSDlkowgb25lWENMaXN05piv5ZCm55u4562J77yaXCIsIGlzWEMpXG4gICAgICAgICAgICAgICAgaWYgKGlzWEMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5raI77yB77yBXCIpO1xuICAgICAgICAgICAgICAgICAgICB4Y0xpc3QucHVzaChvbmVYQ0xpc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy54aWFvY2h1U291bmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vY2MubG9nKFwi5raI6Zmk6KGo546w77yB77yBXCIpXG5cbiAgICAgICAgdmFyIGFjdGlvbkFyeSA9IFtdO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8v5raI6ZmkXG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeGNMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIHZhciBvbmVMaXN0ID0geGNMaXN0W2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvbmVMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHhJbmRleCA9IG9uZUxpc3Rbal07XG5cbiAgICAgICAgICAgICAgICBhY3Rpb25BcnkucHVzaChjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4SW5kZXggPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBlZmZOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib29tRWZmUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUxpc3RbeEluZGV4XS5hZGRDaGlsZChlZmZOb2RlKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLCB4SW5kZXgpKTtcblxuICAgICAgICAgICAgICAgIGFjdGlvbkFyeS5wdXNoKGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhJbmRleCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUxpc3RbeEluZGV4XS5pc0hhdmVGSyA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIEZLTm9kZSA9IHRoaXMuZnJhbWVMaXN0W3hJbmRleF0uZ2V0Q2hpbGRCeU5hbWUoXCJjb2xvclNwclwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFGS05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy/pmLLmraLmsqHmnInov5nkuKrmlrnlnZfnmoTml7blgJlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBGS05vZGUuY2FzY2FkZU9wYWNpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvL+i/meS4quWBh+aWueWdl+WPmOWkp+W5tuS4lOa4kOmakOaOiVxuICAgICAgICAgICAgICAgICAgICBGS05vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLnNjYWxlVG8oMC41LCAyKSwgY2MuZmFkZU91dCgwLjUpKSwgY2MucmVtb3ZlU2VsZih0cnVlKSkpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMsIHhJbmRleCkpO1xuXG4gICAgICAgICAgICAgICAgYWN0aW9uQXJ5LnB1c2goY2MuZGVsYXlUaW1lKDAuMDUpKTtcblxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uQXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFjdGlvbkFyeS5wdXNoKGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSXNMb3NlKCk7XG4gICAgICAgICAgICB9LCB0aGlzKSk7XG5cbiAgICAgICAgICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2Muc2VxdWVuY2UoYWN0aW9uQXJ5KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkU2NvcmUoY291bnQpO1xuICAgIH0sXG5cbiAgICAvL+ajgOa1i+aYr+S4jeaYr+i+k+S6hlxuICAgIGNoZWNrSXNMb3NlOiBmdW5jdGlvbiBjaGVja0lzTG9zZSgpIHtcbiAgICAgICAgLy/lpoLmnpzmraPlnKjmtojpmaTkuK3vvIzpgqPlsLHkuI3liKTmlq3ovpPotaLvvIzlm6DkuLrmtojpmaTlkI7kvJrlho3liKTmlq1cbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGluZykgcmV0dXJuO1xuXG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9nZXROZXdGSycgKyAoaSArIDEpKTtcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBub2RlLmdldENvbXBvbmVudCgnTmV3TEJYS3VhaScpO1xuICAgICAgICAgICAgaWYgKHNjcmlwdC5jaGVja0lzTG9zZSgpKSB7XG5cbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIuaWueWdl1wiICsgKGkgKyAxKSArIFwi5bey57uP5peg5aSE5a6J5pS+XCIpXG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAxMjU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCLmlrnlnZdcIiArIChpICsgMSkgKyBcIuWPr+S7peWuieaUvlwiKVxuICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudCA9PSAzKSB7XG4gICAgICAgICAgICB2YXIgc2h1Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2h1UHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoc2h1Tm9kZSk7XG5cbiAgICAgICAgICAgIGNjLmxvZyhcIuS/neWtmOWOhuWPsuacgOmrmOWIhlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL+WKoOWIhu+8jOWPguaVsOaYr+a2iOmZpOeahOaAu+aVsCxpc0Ryb3BBZGTmmK/mmK/lkKbmmK/mlL7kuIvnmoTljZXnuq/liqDliIZcbiAgICBhZGRTY29yZTogZnVuY3Rpb24gYWRkU2NvcmUoWENDb3VudCwgaXNEcm9wQWRkKSB7XG4gICAgICAgIHZhciBhZGRTY29yZUNvdW50ID0gaXNEcm9wQWRkID8gWENDb3VudCA6IDIgKiBYQ0NvdW50ICogWENDb3VudDsgLy/mlbDph4/nmoTlubPmlrlcbiAgICAgICAgdmFyIG5vZGUgPSBjYy5maW5kKCdDYW52YXMvc2NvcmUvc2NvcmVMYWJlbCcpO1xuICAgICAgICB2YXIgbGFiZWwgPSBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgbGFiZWwuc3RyaW5nID0gYWRkU2NvcmVDb3VudCArIE51bWJlcihsYWJlbC5zdHJpbmcpO1xuICAgIH0sXG5cbiAgICAvL+iOt+W+l+S4pOS4quaVsOe7hOeahOS6pOmbhlxuICAgIGdldDJBcnlJbnRlcnNlY3Q6IGZ1bmN0aW9uIGdldDJBcnlJbnRlcnNlY3QoYXJ5MSwgYXJ5Mikge1xuICAgICAgICB2YXIgaW50ZXJzZWN0QXJ5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5MS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnkyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyeTJbal0gPT0gYXJ5MVtpXSkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3RBcnkucHVzaChhcnkyW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW50ZXJzZWN0QXJ5O1xuICAgIH0sXG5cbiAgICAvL+iOt+W+l+S4pOS4quaVsOe7hOeahOS6pOmbhlxuICAgIGNoZWNrMkFyeUlzRXF1YWw6IGZ1bmN0aW9uIGNoZWNrMkFyeUlzRXF1YWwoYXJ5MSwgYXJ5Mikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeTEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhcnkyW2ldICE9IGFyeTFbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzcmNQb3MgPSBjYy5wKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSk7XG4gICAgICAgIHZhciBsYnhOb2RlcyA9IFtdO1xuICAgICAgICB2YXIgbGJ4Tm9kZXNJbmRleCA9IDA7XG4gICAgICAgIHZhciBtYXhDb3VudCA9IHRoaXNbXCJiaWFuY2hhbmdnZXppc2h1XCJdICogMiAtIDE7XG5cbiAgICAgICAgLy/kvY3nva7ooahcbiAgICAgICAgdmFyIHBvc0xpc3QgPSBbXG4gICAgICAgIC8v56ys5LiA6KGM55qE5L2N572u5L+h5oGvXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvdW50OiA1LFxuICAgICAgICAgICAgc3JjUG9zOiBjYy5wKDAsIDApXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy/nrKzkuozooYznmoTkvY3nva7kv6Hmga9cbiAgICAgICAge1xuICAgICAgICAgICAgY291bnQ6IDYsXG4gICAgICAgICAgICBzcmNQb3M6IGNjLnAoMiAqIHRoaXNbXCJsaXViaWFueGluZ0hcIl0sIDApXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy/nrKzkuInooYznmoTkvY3nva7kv6Hmga9cbiAgICAgICAge1xuICAgICAgICAgICAgY291bnQ6IDcsXG4gICAgICAgICAgICBzcmNQb3M6IGNjLnAoMiAqIHRoaXNbXCJsaXViaWFueGluZ0hcIl0gKiAyLCAwKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8v56ys5Zub6KGM55qE5L2N572u5L+h5oGvXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvdW50OiA4LFxuICAgICAgICAgICAgc3JjUG9zOiBjYy5wKDIgKiB0aGlzW1wibGl1YmlhbnhpbmdIXCJdICogMywgMClcbiAgICAgICAgfSxcblxuICAgICAgICAvL+esrOS6lOihjOeahOS9jee9ruS/oeaBr1xuICAgICAgICB7XG4gICAgICAgICAgICBjb3VudDogOSxcbiAgICAgICAgICAgIHNyY1BvczogY2MucCgyICogdGhpc1tcImxpdWJpYW54aW5nSFwiXSAqIDQsIDApXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy/nrKzlha3ooYznmoTkvY3nva7kv6Hmga9cbiAgICAgICAge1xuICAgICAgICAgICAgY291bnQ6IDgsXG4gICAgICAgICAgICBzcmNQb3M6IGNjLnAoMiAqIHRoaXNbXCJsaXViaWFueGluZ0hcIl0gKiA0ICsgdGhpc1tcImxpdWJpYW54aW5nSFwiXSwgLTMgKiB0aGlzW1wibGl1YmlhbnhpbmdBXCJdIC8gMilcbiAgICAgICAgfSxcblxuICAgICAgICAvL+esrOS4g+ihjOeahOS9jee9ruS/oeaBr1xuICAgICAgICB7XG4gICAgICAgICAgICBjb3VudDogNyxcbiAgICAgICAgICAgIHNyY1BvczogY2MucCgyICogdGhpc1tcImxpdWJpYW54aW5nSFwiXSAqIDQgKyB0aGlzW1wibGl1YmlhbnhpbmdIXCJdICogMiwgLTMgKiB0aGlzW1wibGl1YmlhbnhpbmdBXCJdICogMiAvIDIpXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy/nrKzlhavooYznmoTkvY3nva7kv6Hmga9cbiAgICAgICAge1xuICAgICAgICAgICAgY291bnQ6IDYsXG4gICAgICAgICAgICBzcmNQb3M6IGNjLnAoMiAqIHRoaXNbXCJsaXViaWFueGluZ0hcIl0gKiA0ICsgdGhpc1tcImxpdWJpYW54aW5nSFwiXSAqIDMsIC0zICogdGhpc1tcImxpdWJpYW54aW5nQVwiXSAqIDMgLyAyKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8v56ys5Lmd6KGM55qE5L2N572u5L+h5oGvXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvdW50OiA1LFxuICAgICAgICAgICAgc3JjUG9zOiBjYy5wKDIgKiB0aGlzW1wibGl1YmlhbnhpbmdIXCJdICogNCArIHRoaXNbXCJsaXViaWFueGluZ0hcIl0gKiA0LCAtMyAqIHRoaXNbXCJsaXViaWFueGluZ0FcIl0gKiA0IC8gMilcbiAgICAgICAgfV07XG5cbiAgICAgICAgLy/opoHliqDnmoTljZXkvY3lkJHph49cbiAgICAgICAgdmFyIGFkZFZlYyA9IGNjLnBNdWx0KGNjLnBGb3JBbmdsZSgyNDAgKiAoMiAqIE1hdGguUEkgLyAzNjApKSwgdGhpc1tcImxpdWJpYW54aW5nSFwiXSAqIDIpO1xuXG4gICAgICAgIC8v5YGP56e76Iez5rqQ54K5MO+8jDDnmoTlkJHph49cbiAgICAgICAgdmFyIHBpYW55aVRvMHAwVmVjID0gY2MucE11bHQoY2MucEZvckFuZ2xlKDEyMCAqICgyICogTWF0aC5QSSAvIDM2MCkpLCB0aGlzW1wibGl1YmlhbnhpbmdIXCJdICogMiAqIDQpO1xuXG4gICAgICAgIHZhciBmcmFtZUxpc3QgPSBbXTtcblxuICAgICAgICB2YXIgZlBvc0xpc3QgPSBbXTtcbiAgICAgICAgLy/kuIDliJfliJfmnaXnlJ/miJBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSBwb3NMaXN0W2ldLmNvdW50OyAvL+aVsOmHj1xuICAgICAgICAgICAgdmFyIG9uZVNyY1BvcyA9IGNjLnBBZGQocG9zTGlzdFtpXS5zcmNQb3MsIHBpYW55aVRvMHAwVmVjKTsgLy/otbflp4vkvY3nva5cbiAgICAgICAgICAgIHZhciBhaW1Qb3MgPSBjYy5wQWRkKHNyY1Bvcywgb25lU3JjUG9zKTsgLy/kuIDmnaHnmoTotbflp4vkvY3nva5cblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZQb3MgPSBjYy5wQWRkKGFpbVBvcywgY2MucE11bHQoYWRkVmVjLCBqKSk7XG4gICAgICAgICAgICAgICAgZlBvc0xpc3QucHVzaChmUG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v5Yid5aeL5YyWXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBmUG9zTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoXCJmcmFtZVwiKTtcbiAgICAgICAgICAgIHZhciBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpc1tcImZyYW1lUGljXCJdO1xuXG4gICAgICAgICAgICBub2RlLnggPSBmUG9zTGlzdFtpbmRleF0ueDtcbiAgICAgICAgICAgIG5vZGUueSA9IGZQb3NMaXN0W2luZGV4XS55O1xuXG4gICAgICAgICAgICAvL2RlYnVn5a2X55SoXG4gICAgICAgICAgICAvLyB2YXIgbGFiZWxOb2RlID0gbmV3IGNjLk5vZGUoXCJOZXcgTGFiZWxcIilcbiAgICAgICAgICAgIC8vIHZhciBsYWJlbENwID0gbm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpXG4gICAgICAgICAgICAvLyBsYWJlbENwLnN0cmluZyA9IGluZGV4Ly9cIng6XCIrTWF0aC5mbG9vcihub2RlLngpICsgXCJcXG55OlwiICsgTWF0aC5mbG9vcihub2RlLnkpXG4gICAgICAgICAgICAvLyBsYWJlbENwLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVFxuICAgICAgICAgICAgLy8gbGFiZWxDcC5mb250U2l6ZSA9IDE4XG4gICAgICAgICAgICAvLyBsYWJlbE5vZGUucGFyZW50ID0gbm9kZVxuXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgICAgICAgbm9kZS5GS0luZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICAgIC8v5Yqg6L65XG4gICAgICAgICAgICB2YXIgcGljTm9kZSA9IG5ldyBjYy5Ob2RlKFwiYmlhblNwclwiKTtcbiAgICAgICAgICAgIHZhciBzcHIgPSBwaWNOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgc3ByLnNwcml0ZUZyYW1lID0gdGhpc1tcImJpYW5cIl07XG4gICAgICAgICAgICBwaWNOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcGljTm9kZS5wYXJlbnQgPSBub2RlO1xuXG4gICAgICAgICAgICBmcmFtZUxpc3QucHVzaChub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZnJhbWVMaXN0ID0gZnJhbWVMaXN0O1xuICAgICAgICB0aGlzLnBvc0xpc3QgPSBwb3NMaXN0O1xuICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTsgLy/liKTmlq3mmK/lkKbmraPlnKjmtojpmaTnmoTkvp3mja5cblxuICAgICAgICAvL+ebkeWQrOaIkOWKn+aUvuS4i+S6i+S7tlxuICAgICAgICB0aGlzLm5vZGUub24oJ3N1Y2NEcm9wRG93bk9uZScsIHRoaXMuY2hlY2tYQywgdGhpcyk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vL3VwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4vL2NjLmxvZyhcIuajgOa1i+aji+ebmOS4rS4uLi4uXCIsIHRoaXMuZnJhbWVMaXN0KVxuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZyYW1lTGlzdC5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8v5piv5ZCm6ZyA6KaB5Y+Y6ImyXG4vLyAgICAgaWYgKHRoaXMuZnJhbWVMaXN0W2ldLmlzTmVlZFRvQ2hhbmdlQ29sb3IpIHtcbi8vICAgICAgICAgdGhpcy5mcmFtZUxpc3RbaV0uY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMClcbi8vICAgICB9ZWxzZXtcbi8vICAgICAgICAgdGhpcy5mcmFtZUxpc3RbaV0uY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1KVxuLy8gICAgIH1cblxuLy8gfVxuLy99LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnN2Y3ZWVjc2ZlTkx4TDdwTURnWFRkQUEnLCAnTmV3TEJYS3VhaScpO1xuLy8gc2NyaXB0XFxnYW1lQ29yZVxcTmV3TEJYS3VhaS5qc1xuXG52YXIgX3Byb3BlcnRpZXM7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBJbml0TEJYRnJhbWUgPSByZXF1aXJlKCdJbml0TEJYRnJhbWUnKTtcbnZhciBVdGlsID0gcmVxdWlyZSgnVXRpbCcpO1xudmFyIHNjYWxlUGFyYW0gPSAwLjc7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IChfcHJvcGVydGllcyA9IHtcbiAgICAgICAgY2hlY2tlcmJvYXJkOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBJbml0TEJYRnJhbWVcbiAgICAgICAgfVxuXG4gICAgfSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcIktjb3VudFwiLCAzKSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcImxpdWJpYW54aW5nSFwiLCAwKSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcImxpdWJpYW54aW5nQVwiLCAwKSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCBcImt1YWlUZXhcIiwge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJjb2xvcjFcIiwge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJjb2xvcjJcIiwge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJjb2xvcjNcIiwge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgXCJjb2xvcjRcIiwge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgJ2FuU291bmQnLCB7XG4gICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCAnZmFuZ3hpYVNvdW5kMScsIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Byb3BlcnRpZXMsICdmYW5neGlhU291bmQyJywge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHVybDogY2MuQXVkaW9DbGlwXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgJ2Zhbmd4aWFTb3VuZDMnLCB7XG4gICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcm9wZXJ0aWVzLCAnY2FuTm90U291bmQxJywge1xuICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgIHVybDogY2MuQXVkaW9DbGlwXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcGVydGllcywgJ2Nhbk5vdFNvdW5kMicsIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pLCBfcHJvcGVydGllcyksXG5cbiAgICBnZXRUaGVDb25maWc6IGZ1bmN0aW9uIGdldFRoZUNvbmZpZygpIHtcblxuICAgICAgICB2YXIgYSA9IHRoaXNbXCJsaXViaWFueGluZ0FcIl07XG4gICAgICAgIHZhciBoID0gdGhpc1tcImxpdWJpYW54aW5nSFwiXTtcblxuICAgICAgICB2YXIgY29uZmlnTGlzdHMgPSBbXG4gICAgICAgIC8v5LiA5LiqXG4gICAgICAgIFtjYy5wKDAsIDApXSxcbiAgICAgICAgLy/kuKTkuKpcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApXSwgLy/mqKrmkYZcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgYSAqIDEuNSldLCAvL+aWnOaRhjFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgLWEgKiAxLjUpXSwgLy/mlpzmkYYyXG4gICAgICAgIC8v5LiJ5LiqXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogNCwgMCldLCAvL+aoquaRhlxuXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogMywgYSAqIDEuNSldLCAvL+aoquaRhjFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiAzLCAtYSAqIDEuNSldLCAvL+aoquaRhjJcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGgsIGEgKiAxLjUpXSwgLy/loIYxXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoLCAtYSAqIDEuNSldLCAvL+WghjJcblxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoLCBhICogMS41KSwgY2MucChoICogMywgYSAqIDEuNSldLCAvL+aWnOaRhjFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgYSAqIDEuNSksIGNjLnAoaCAqIDIsIGEgKiAzKV0sIC8v5pac5pGGMlxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoLCBhICogMS41KSwgY2MucCgwLCBhICogMyldLCAvL+aWnOaRhjNcblxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoLCAtYSAqIDEuNSksIGNjLnAoaCAqIDMsIC1hICogMS41KV0sIC8v5pac5LiL5pGGMVxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoLCAtYSAqIDEuNSksIGNjLnAoaCAqIDIsIC1hICogMyldLCAvL+aWnOS4i+aRhjJcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgLWEgKiAxLjUpLCBjYy5wKDAsIC1hICogMyldLCAvL+aWnOS4i+aRhjNcbiAgICAgICAgLy/lm5vkuKpcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiA0LCAwKSwgY2MucChoICogNiwgMCldLCAvL+aoquaRhjFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiA0LCAwKSwgY2MucChoICogNSwgYSAqIDEuNSldLCAvL+aoquaRhjJcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiA0LCAwKSwgY2MucChoICogNSwgLWEgKiAxLjUpXSwgLy/mqKrmkYYzXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogNCwgMCksIGNjLnAoaCAqIDMsIGEgKiAxLjUpXSwgLy/mqKrmkYY0XG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogNCwgMCksIGNjLnAoaCAqIDMsIC1hICogMS41KV0sIC8v5qiq5pGGNVxuXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogMywgYSAqIDEuNSksIGNjLnAoaCwgYSAqIDEuNSldLCAvL+aWnOS4iuaRhjFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGggKiAzLCBhICogMS41KSwgY2MucChoICogMiwgYSAqIDMpXSwgLy/mlpzkuIrmkYYyXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogMywgYSAqIDEuNSksIGNjLnAoaCAqIDQsIGEgKiAzKV0sIC8v5pac5LiK5pGGM1xuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDMsIGEgKiAxLjUpLCBjYy5wKGggKiA1LCBhICogMS41KV0sIC8v5pac5LiK5pGGNFxuXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoICogMywgLWEgKiAxLjUpLCBjYy5wKGgsIC1hICogMS41KV0sIC8v5pac5LiL5pGGMVxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDMsIC1hICogMS41KSwgY2MucChoICogMiwgLWEgKiAzKV0sIC8v5pac5LiL5pGGMlxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDMsIC1hICogMS41KSwgY2MucChoICogNCwgLWEgKiAzKV0sIC8v5pac5LiL5pGGM1xuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCAqIDMsIC1hICogMS41KSwgY2MucChoICogNSwgLWEgKiAxLjUpXSwgLy/mlpzkuIvmkYY0XG5cbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCAqIDIsIDApLCBjYy5wKGgsIC1hICogMS41KSwgY2MucCgtaCwgLWEgKiAxLjUpXSwgLy/kuIvloIYxXG4gICAgICAgIFtjYy5wKDAsIDApLCBjYy5wKGggKiAyLCAwKSwgY2MucChoLCAtYSAqIDEuNSksIGNjLnAoMCwgLWEgKiAzKV0sIC8v5LiL5aCGMlxuICAgICAgICBbY2MucCgwLCAwKSwgY2MucChoICogMiwgMCksIGNjLnAoaCwgLWEgKiAxLjUpLCBjYy5wKGggKiAyLCAtYSAqIDMpXSwgLy/kuIvloIYzXG5cbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoaCwgLWEgKiAxLjUpLCBjYy5wKGggKiAyLCAtYSAqIDMpLCBjYy5wKGggKiAzLCAtYSAqIDQuNSldLCAvL+aWnOaJmzFcbiAgICAgICAgW2NjLnAoMCwgMCksIGNjLnAoLWgsIC1hICogMS41KSwgY2MucCgtaCAqIDIsIC1hICogMyksIGNjLnAoLWggKiAzLCAtYSAqIDQuNSldXTtcblxuICAgICAgICAvL+aWnOaJmzJcblxuICAgICAgICByZXR1cm4gY29uZmlnTGlzdHM7XG4gICAgfSxcblxuICAgIG5ld09uZUs6IGZ1bmN0aW9uIG5ld09uZUsoY29sb3JJbmRleCkge1xuICAgICAgICAvL+WIm+W7uuS4gOS4quWdl1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKFwiY29sb3JTcHJcIik7XG4gICAgICAgIHZhciBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzW1wiY29sb3JcIiArIGNvbG9ySW5kZXhdO1xuXG4gICAgICAgIC8vY2MubG9nKFwi56ysXCIsY29sb3JJbmRleCxcIuS4quminGNvbG9yXCIpXG5cbiAgICAgICAgLy/liqDnurnnkIZcbiAgICAgICAgdmFyIHdlbmxpTm9kZSA9IG5ldyBjYy5Ob2RlKFwid2VubGlTcHJcIik7XG4gICAgICAgIHZhciB3ZW5saVNwcml0ZSA9IHdlbmxpTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgd2VubGlTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzW1wia3VhaVRleFwiXTtcblxuICAgICAgICB3ZW5saU5vZGUucGFyZW50ID0gbm9kZTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgbmV3T25lTm9kZTogZnVuY3Rpb24gbmV3T25lTm9kZSgpIHtcbiAgICAgICAgdmFyIGt1YWlOb2RlID0gbmV3IGNjLk5vZGUoXCJrdWFpXCIpO1xuXG4gICAgICAgIHZhciBjb25maWcgPSB0aGlzLmdldFRoZUNvbmZpZygpO1xuXG4gICAgICAgIC8v6ZqP5py65qC35a2QXG4gICAgICAgIHZhciByYW5kb21JbmRleCA9IFV0aWwucmFuZG9tKDAsIGNvbmZpZy5sZW5ndGggLSAxKTtcbiAgICAgICAgdmFyIHBvc0xpc3QgPSBjb25maWdbcmFuZG9tSW5kZXhdO1xuXG4gICAgICAgIHZhciByYW5kb21JbmRleCA9IFV0aWwucmFuZG9tKDEsIDQpO1xuICAgICAgICB2YXIgc3VtWCA9IDA7XG4gICAgICAgIHZhciBjb3VudFggPSAwO1xuICAgICAgICB2YXIgc3VtWSA9IDA7XG4gICAgICAgIHZhciBjb3VudFkgPSAwO1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcG9zTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBwb3NMaXN0W2luZGV4XTtcbiAgICAgICAgICAgIHZhciBrdWFpID0gdGhpcy5uZXdPbmVLKHJhbmRvbUluZGV4KTtcbiAgICAgICAgICAgIGt1YWkueCA9IHBvcy54O1xuXG4gICAgICAgICAgICBzdW1YICs9IGt1YWkueDtcbiAgICAgICAgICAgIGNvdW50WCsrO1xuXG4gICAgICAgICAgICBrdWFpLnkgPSBwb3MueTtcblxuICAgICAgICAgICAgc3VtWSArPSBrdWFpLnk7XG4gICAgICAgICAgICBjb3VudFkrKztcblxuICAgICAgICAgICAga3VhaU5vZGUuYWRkQ2hpbGQoa3VhaSk7XG4gICAgICAgIH1cblxuICAgICAgICBrdWFpTm9kZS54ID0gLXN1bVggLyBjb3VudFg7XG4gICAgICAgIGt1YWlOb2RlLnkgPSAtc3VtWSAvIGNvdW50WTtcblxuICAgICAgICBrdWFpTm9kZS5zZXRTY2FsZShzY2FsZVBhcmFtKTtcblxuICAgICAgICByZXR1cm4ga3VhaU5vZGU7XG4gICAgfSxcblxuICAgIC8v5re75Yqg6Kem5pG4XG4gICAgYWRkVG91Y2hFdmVudDogZnVuY3Rpb24gYWRkVG91Y2hFdmVudCgpIHtcbiAgICAgICAgdmFyIHVwSCA9IDEwMDtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubm9kZS5veCA9IHRoaXMubm9kZS54O1xuICAgICAgICB0aGlzLm5vZGUub3kgPSB0aGlzLm5vZGUueTtcblxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMueSArPSB1cEg7XG4gICAgICAgICAgICAvL2NjLmxvZyhcIuWOn+S9jee9ru+8mlwiLCB0aGlzLm94LCB0aGlzLm95KVxuXG4gICAgICAgICAgICB0aGlzLmdldENoaWxkQnlOYW1lKFwia3VhaVwiKS5zZXRTY2FsZSgxKTtcblxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzZWxmLmFuU291bmQpO1xuICAgICAgICB9LCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LnRvdWNoLmdldERlbHRhKCk7XG4gICAgICAgICAgICB0aGlzLnggKz0gZGVsdGEueDtcbiAgICAgICAgICAgIHRoaXMueSArPSBkZWx0YS55O1xuXG4gICAgICAgICAgICBzZWxmLmNvbGxpc2lvbkZ1bmMoKTtcblxuICAgICAgICAgICAgLy/lj5joibLlpITnkIZcbiAgICAgICAgICAgIGlmICghc2VsZi5jaGVja0lzQ2FuRHJvcCgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VDb2xvckRlYWwodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlQ29sb3JEZWFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMubm9kZSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRyb3BEb3duRnVuYygpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRyb3BEb3duRnVuYygpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgLy/lj5joibLlpITnkIZcbiAgICBjaGFuZ2VDb2xvckRlYWw6IGZ1bmN0aW9uIGNoYW5nZUNvbG9yRGVhbChpc0p1c3RDbGVhckNvbG9yKSB7XG4gICAgICAgIC8vY2MubG9nKFwi5Y+Y6Imy77yBXCIraXNKdXN0Q2xlYXJDb2xvciwgdGhpcy5jaGVja0ZyYW1lTGlzdC5sZW5ndGgsIFwidGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0Lmxlbmd0aDpcIiwgdGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0Lmxlbmd0aClcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hlY2tlcmJvYXJkLmZyYW1lTGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICB2YXIgZ3VhbmdQaWNOb2RlID0gdGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0W2ldLmdldENoaWxkQnlOYW1lKFwiYmlhblNwclwiKTtcbiAgICAgICAgICAgIGd1YW5nUGljTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5aaC5p6c5Y+C5pWw5pyJ5YC877yM55u05o6l6L+U5Zue77yM5LiN5YGa5LiL6Z2i55qEXG4gICAgICAgIGlmIChpc0p1c3RDbGVhckNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hlY2tGcmFtZUxpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgdmFyIGd1YW5nUGljTm9kZSA9IHRoaXMuY2hlY2tGcmFtZUxpc3RbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJiaWFuU3ByXCIpO1xuICAgICAgICAgICAgZ3VhbmdQaWNOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy/norDmkp7pgLvovpFcbiAgICBjb2xsaXNpb25GdW5jOiBmdW5jdGlvbiBjb2xsaXNpb25GdW5jKCkge1xuICAgICAgICAvL2RlYnVn5a2X55SoXG4gICAgICAgIC8vIHRoaXMuZGVidWdMYWJlbC5zdHJpbmcgPSBcIng6XCIrTWF0aC5mbG9vcih0aGlzLm5vZGUueCkgKyBcIlxcbnk6XCIgKyBNYXRoLmZsb29yKHRoaXMubm9kZS55KVxuICAgICAgICAvL2NjLmxvZyhcIng6XCIsIHRoaXMubm9kZS54LCBcInk6XCIsIHRoaXMubm9kZS55LCB0aGlzLm5vZGUpXG5cbiAgICAgICAgdGhpcy5jaGVja0ZyYW1lTGlzdCA9IFtdOyAvL+a4heepuuaVsOe7hFxuICAgICAgICB0aGlzLmNoZWNrRktsaXN0ID0gW107IC8v5riF56m65pWw57uEXG5cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgdmFyIHBpYW55aUNQb3MgPSBjYy5wQWRkKGNjLnAodGhpcy5ub2RlLmNoaWxkcmVuWzBdLngsIHRoaXMubm9kZS5jaGlsZHJlblswXS55KSwgY2MucChjaGlsZHJlbltpXS54LCBjaGlsZHJlbltpXS55KSk7XG4gICAgICAgICAgICB2YXIgY2hpbGRQb3MgPSBjYy5wQWRkKHRoaXMubm9kZS5wb3NpdGlvbiwgcGlhbnlpQ1Bvcyk7XG4gICAgICAgICAgICB2YXIgZnJhbWUgPSB0aGlzLmNoZWNrUG9zRnVuYyhjaGlsZFBvcyk7XG5cbiAgICAgICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGS2xpc3QucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZyYW1lTGlzdC5wdXNoKGZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL+S4gOS4queCueWSjOaji+ebmOeahOaJgOacieahhuajgOa1i1xuICAgIGNoZWNrUG9zRnVuYzogZnVuY3Rpb24gY2hlY2tQb3NGdW5jKHBvcykge1xuICAgICAgICB2YXIgbGVuID0gMjc7IC8v56Kw5pKe6Led56a7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoZWNrZXJib2FyZC5mcmFtZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmcmFtZU5vZGUgPSB0aGlzLmNoZWNrZXJib2FyZC5mcmFtZUxpc3RbaV07XG4gICAgICAgICAgICB2YXIgZGlzID0gY2MucERpc3RhbmNlKGNjLnAoZnJhbWVOb2RlLngsIGZyYW1lTm9kZS55KSwgcG9zKTtcbiAgICAgICAgICAgIGlmIChkaXMgPD0gbGVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1lTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL+ajgOa1i+iHqui6q+aYr+WQpuW3sue7j+aXoOWkhOWPr+aUvlxuICAgIGNoZWNrSXNMb3NlOiBmdW5jdGlvbiBjaGVja0lzTG9zZSgpIHtcbiAgICAgICAgdmFyIGNhbkRyb3BDb3VudCA9IDA7XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuO1xuXG4gICAgICAgIC8v5LiA5Liq5Liq5qC85a2Q5pS+6K+V5LiA5LiL6IO95LiN6IO95pS+XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZnJhbWVOb2RlID0gdGhpcy5jaGVja2VyYm9hcmQuZnJhbWVMaXN0W2ldO1xuICAgICAgICAgICAgdmFyIHNyY1BvcyA9IGNjLnAoZnJhbWVOb2RlLngsIGZyYW1lTm9kZS55KTtcblxuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIGlmICghZnJhbWVOb2RlLmlzSGF2ZUZLKSB7XG5cbiAgICAgICAgICAgICAgICAvL+i/memHjOWBmuaYr+WQpuWPr+S7peaUvueahOWIpOaWrVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gMjc7IC8v56Kw5pKe6Led56a7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZFBvcyA9IGNjLnBBZGQoc3JjUG9zLCBjYy5wKGNoaWxkcmVuW2pdLngsIGNoaWxkcmVuW2pdLnkpKTtcblxuICAgICAgICAgICAgICAgICAgICAvL+eisOaSnuajgOa1i1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMuY2hlY2tlcmJvYXJkLmZyYW1lTGlzdC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRGcmFtZU5vZGUgPSB0aGlzLmNoZWNrZXJib2FyZC5mcmFtZUxpc3Rba107XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzID0gY2MucERpc3RhbmNlKGNjLnAodEZyYW1lTm9kZS54LCB0RnJhbWVOb2RlLnkpLCBjaGlsZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzIDw9IGxlbiAmJiAhdEZyYW1lTm9kZS5pc0hhdmVGSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7IC8v5Y+v5Lul5pS+5bCx6KaB57Sv5Yqg6K6h5pWwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCLmoLzlrZBcIisgZnJhbWVOb2RlLkZLSW5kZXggK1wi5Yik5pat5piv5ZCm6IO95pS+77yaXCIsY2hpbGRyZW4ubGVuZ3RoLCBjb3VudClcblxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5pWw6YeP55u4562J5bCx6K+05piO6L+Z5Liq5pa55Z2X5Zyo6L+Z5Liq5qC85a2Q5piv5Y+v5Lul5pS+5LiL55qEXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhmcmFtZU5vZGUuRktJbmRleCArIFwi55qE5L2N572u5Y+v5Lul5pS+XCIsIGNoaWxkcmVuLmxlbmd0aCwgY291bnQpXG4gICAgICAgICAgICAgICAgICAgIGNhbkRyb3BDb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYW5Ecm9wQ291bnQgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy/mo4DmtYvmmK/lkKbog73lpJ/mlL7kuItcbiAgICBjaGVja0lzQ2FuRHJvcDogZnVuY3Rpb24gY2hlY2tJc0NhbkRyb3AoKSB7XG4gICAgICAgIC8v5YWI5Yik5pat5pWw6YeP5piv5ZCm5LiA6Ie077yM5LiN5LiA6Ie06K+05piO5pyJ5LiA5Liq6LaF5Ye65Y675LqGXG4gICAgICAgIGlmICh0aGlzLmNoZWNrRnJhbWVMaXN0Lmxlbmd0aCA9PSAwIHx8IHRoaXMuY2hlY2tGcmFtZUxpc3QubGVuZ3RoICE9IHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5qOA5rWL5pS+5LiL55qE5qC85a2Q5piv5ZCm5bey57uP5pyJ5pa55Z2XXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGVja0ZyYW1lTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tGcmFtZUxpc3RbaV0uaXNIYXZlRkspIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLy/mlL7kuIvpgLvovpFcbiAgICBkcm9wRG93bkZ1bmM6IGZ1bmN0aW9uIGRyb3BEb3duRnVuYygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc0NhbkRyb3AoKSkge1xuICAgICAgICAgICAgLy/mlL7lm57ljrtcbiAgICAgICAgICAgIHRoaXMudGFrZUJhY2soKTtcblxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNhbk5vdFNvdW5kMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hlY2tGS2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGS2xpc3RbaV0ueCA9IDA7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRktsaXN0W2ldLnkgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLmNoZWNrRktsaXN0W2ldLnBhcmVudCA9IHRoaXMuY2hlY2tGcmFtZUxpc3RbaV07XG4gICAgICAgICAgICB0aGlzLmNoZWNrRnJhbWVMaXN0W2ldLmlzSGF2ZUZLID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy9jYy5sb2coXCJ0aGlzLmNoZWNrRnJhbWVMaXN0W1wiK2krXCJdOlwiLCB0aGlzLmNoZWNrRnJhbWVMaXN0W2ldKVxuXG4gICAgICAgICAgICAvL+eJueaViFxuICAgICAgICAgICAgdmFyIHBpY05vZGUgPSBuZXcgY2MuTm9kZShcImd1YW5nRWZmTm9kZVwiKTtcbiAgICAgICAgICAgIHZhciBzcHIgPSBwaWNOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgc3ByLnNwcml0ZUZyYW1lID0gdGhpcy5jaGVja2VyYm9hcmRbXCJiaWFuXCJdO1xuICAgICAgICAgICAgdGhpcy5jaGVja0ZyYW1lTGlzdFtpXS5hZGRDaGlsZChwaWNOb2RlLCAtMSk7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShjYy5zcGF3bihjYy5mYWRlT3V0KDEpLCBjYy5zY2FsZVRvKDEsIDEuMikpLCBjYy5yZW1vdmVTZWxmKCkpKTtcbiAgICAgICAgICAgIHBpY05vZGUucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdmFyIG9uZU5vZGUgPSB0aGlzLm5ld09uZU5vZGUoKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG9uZU5vZGUpO1xuXG4gICAgICAgIHRoaXMuY2hlY2tlcmJvYXJkLmN1ckZLTGVuID0gdGhpcy5jaGVja0ZLbGlzdC5sZW5ndGg7XG4gICAgICAgIHRoaXMuY2hlY2tlcmJvYXJkLm5vZGUuZW1pdCgnc3VjY0Ryb3BEb3duT25lJyk7XG5cbiAgICAgICAgdmFyIHJhbkMgPSBVdGlsLnJhbmRvbSgxLCAzKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzW1wiZmFuZ3hpYVNvdW5kXCIgKyByYW5DXSk7XG5cbiAgICAgICAgLy/mlL7lm57ljrtcbiAgICAgICAgdGhpcy50YWtlQmFjaygpO1xuXG4gICAgICAgIC8v55u05o6l55So5qOL55uY5qOA5rWL5piv5LiN5piv6L6T5LqGXG4gICAgICAgIHRoaXMuY2hlY2tlcmJvYXJkLmNoZWNrSXNMb3NlKCk7XG4gICAgfSxcblxuICAgIC8v5Zue5Yiw5Y6f5L2NXG4gICAgdGFrZUJhY2s6IGZ1bmN0aW9uIHRha2VCYWNrKCkge1xuICAgICAgICAvL+WPmOiJsuWkhOeQhlxuICAgICAgICB0aGlzLmNoZWNrRnJhbWVMaXN0ID0gW107IC8v5riF56m65pWw57uEXG4gICAgICAgIHRoaXMuY2hhbmdlQ29sb3JEZWFsKCk7XG5cbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwia3VhaVwiKS5zZXRTY2FsZShzY2FsZVBhcmFtKTtcblxuICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMubm9kZS5veDtcbiAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLm5vZGUub3k7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNoZWNrRnJhbWVMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2hlY2tGS2xpc3QgPSBbXTtcblxuICAgICAgICB0aGlzLm5vZGUuY2FzY2FkZU9wYWNpdHkgPSB0cnVlO1xuXG4gICAgICAgIHZhciBvbmVOb2RlID0gdGhpcy5uZXdPbmVOb2RlKCk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChvbmVOb2RlKTtcblxuICAgICAgICAvL+a3u+WKoOinpuaRuFxuICAgICAgICB0aGlzLmFkZFRvdWNoRXZlbnQoKTtcblxuICAgICAgICAvL2RlYnVn5a2X55SoXG4gICAgICAgIC8vIHZhciBsYWJlbE5vZGUgPSBuZXcgY2MuTm9kZShcIk5ldyBMYWJlbFwiKVxuICAgICAgICAvLyB2YXIgbGFiZWxDcCA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpXG4gICAgICAgIC8vIGxhYmVsQ3Auc3RyaW5nID0gXCJ4OlwiK01hdGguZmxvb3IodGhpcy5ub2RlLngpICsgXCJcXG55OlwiICsgTWF0aC5mbG9vcih0aGlzLm5vZGUueSlcbiAgICAgICAgLy8gbGFiZWxDcC5mb250U2l6ZSA9IDE4XG4gICAgICAgIC8vIGxhYmVsTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgLy8gbGFiZWxOb2RlLnpJbmRleCA9IDFcbiAgICAgICAgLy8gY2MubG9nKFwiTm9kZSB6SW5kZXg6IFwiICsgbGFiZWxOb2RlLnpJbmRleClcbiAgICAgICAgLy8gdGhpcy5kZWJ1Z0xhYmVsID0gbGFiZWxDcFxuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2ZhMDkzZXlxOVJPR0pud1lMRW40eFJMJywgJ1Njb3JlQnRuQ3AnKTtcbi8vIHNjcmlwdFxcU2NvcmVCdG5DcC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge31cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzdkOWRkNGptaTlJN1oxZmdWUEhmRVhTJywgJ1N0YXJ0QnRuQ3AnKTtcbi8vIHNjcmlwdFxcU3RhcnRCdG5DcC5qc1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCLmuLjmiI/nlYzpnaJcIiwge1xuICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgfSksXG5cbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgdmFyIGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC4yLCAwKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MubG9nKFwi5byA5aeL5ri45oiPXCIpO1xuXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lU2NlbmVcIik7XG5cbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKFwic2NvcmVCdG5cIiwgZnVuY3Rpb24gKGVyciwgbm9kZSkge1xuICAgICAgICAgICAgLy8gICAgIHZhciBuZXdOb2RlID0gY2MuaW5zdGFudGlhdGUobm9kZSk7XG4gICAgICAgICAgICAvLyAgICAgY2FudmFzLmFkZENoaWxkKG5ld05vZGUpO1xuICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoXCJsYnhMYXlvdXRcIiwgZnVuY3Rpb24gKGVyciwgbm9kZSkge1xuICAgICAgICAgICAgLy8gICAgIHZhciBuZXdOb2RlID0gY2MuaW5zdGFudGlhdGUobm9kZSk7XG4gICAgICAgICAgICAvLyAgICAgY2FudmFzLmFkZENoaWxkKG5ld05vZGUpO1xuXG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhcImdldE5ld0ZLXCIsIGZ1bmN0aW9uIChlcnIsIG5vZGUpIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgbmV3Tm9kZSA9IGNjLmluc3RhbnRpYXRlKG5vZGUpO1xuICAgICAgICAgICAgLy8gICAgIGNhbnZhcy5hZGRDaGlsZChuZXdOb2RlKTtcblxuICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSwgdGhpcykpO1xuXG4gICAgICAgIHZhciBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgYW5pbS5zdG9wKCk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcxZjU3ZkpYVy81TXdwekdFMnRoNXFHRScsICdVdGlsJyk7XG4vLyBzY3JpcHRcXGdhbWVDb3JlXFxjb21tb25cXFV0aWwuanNcblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE2LzUvNi5cclxuICovXG52YXIgX3AgPSB7XG5cbiAgICAvL+mBjeWOhuWvueixoeeahOWxnuaAp+WSjOaWueazlVxuICAgIHByaW50T2JqOiBmdW5jdGlvbiBwcmludE9iaihvYmopIHtcbiAgICAgICAgLy8g55So5p2l5L+d5a2Y5omA5pyJ55qE5bGe5oCn5ZCN56ew5ZKM5YC8XG4gICAgICAgIHZhciBwcm9wcyA9IFwiXCI7XG4gICAgICAgIC8vIOW8gOWni+mBjeWOhlxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgLy8g5pa55rOVXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwXSA9PSBcIiBmdW5jdGlvbiBcIikge1xuICAgICAgICAgICAgICAgIHByb3BzICs9IHAgKyBcIiBcXG4gXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHAg5Li65bGe5oCn5ZCN56ew77yMb2JqW3Bd5Li65a+55bqU5bGe5oCn55qE5YC8XG4gICAgICAgICAgICAgICAgcHJvcHMgKz0gcCArIFwiIFxcbiBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAvLyDmnIDlkI7mmL7npLrmiYDmnInnmoTlsZ7mgKdcblxuICAgICAgICBjYy5sb2cocHJvcHMpO1xuICAgIH0sXG5cbiAgICAvL+maj+aculxuICAgIHJhbmRvbTogZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gICAgfSxcblxuICAgIC8v6YCa6L+H5Y+C5pWw5L+d5a2Y6Zet5YyF5aSW6YOo55qE5Y+Y6YeP5b2i5oiQ6Z2Z5oCB5b+r54Wn5p2l5L2/55So77yM6YG/5YWN6Zet5YyF5YWx5Lqr5aSW6YOo5Y+Y6YeP55qE5pe25YCZ55SoXG4gICAgLy/nrKzkuIDkuKrlj4LmlbDlv4XpobvmmK/lh73mlbDvvIzlkI7pnaLnmoTlj4LmlbDmmK/opoHlgZrlv6vnhafnmoTlj5jph49cbiAgICBjcmVhdGVGdW5jOiBmdW5jdGlvbiBjcmVhdGVGdW5jKCkge1xuICAgICAgICB2YXIgbmV3QXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3QXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coXCJhcmd1bWVudHM6XCIsIGFyZ3VtZW50cywgXCJuZXdBcmdzOlwiLCBuZXdBcmdzKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5ld0FyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmd1bWVudHNbMF0obmV3QXJncyk7IC8v56ys5LiA5Liq5Y+C5pWw5piv5LiA5Liq5Ye95pWw55qE5ZibXG4gICAgICAgIH07XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9wO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMGY3MjdSVmZ6WklIWmdla0Y1QTJtSVMnLCAnWkluZGV4U2V0Jyk7XG4vLyBzY3JpcHRcXFpJbmRleFNldC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgekluZGV4OiAwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gdGhpcy56SW5kZXg7XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7Il19
