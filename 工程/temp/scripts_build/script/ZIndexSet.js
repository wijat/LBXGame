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