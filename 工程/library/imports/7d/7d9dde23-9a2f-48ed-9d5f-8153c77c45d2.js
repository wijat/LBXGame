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