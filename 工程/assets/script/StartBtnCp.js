cc.Class({
    extends: cc.Component,

    properties: {
        ["游戏界面"]: {
            default: null,
            type: cc.Prefab
        },
    },

    onClick: function(){
        var canvas = this.node.parent
        var action = cc.sequence(
            cc.scaleTo(0.2, 0),
            cc.callFunc(function(){
                cc.log("开始游戏")

                cc.director.loadScene("gameScene")

                this.node.destroy()
            }, this)
        )

        var anim = this.getComponent(cc.Animation)
        anim.stop()

        this.node.runAction(action)


    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
