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