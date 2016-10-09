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