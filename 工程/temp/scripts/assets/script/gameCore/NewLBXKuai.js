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