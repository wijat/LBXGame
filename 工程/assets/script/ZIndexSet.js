cc.Class({
    extends: cc.Component,

    properties: {
        zIndex: 0,
    },

    // use this for initialization
    onLoad: function () {
        this.node.zIndex = this.zIndex
    },

});