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