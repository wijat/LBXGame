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