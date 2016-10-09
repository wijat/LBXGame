cc.Class({
    extends: cc.Component,

    properties: {
        ["音效"]: {
            default: null,
            url: cc.AudioClip
        },
    },

    onClick: function(){
        cc.audioEngine.playEffect(this["音效"])
    },

    // use this for initialization
    onLoad: function () {
        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
