cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
    	this.node.x = 0
        this.node.y = 0
    	this.node.runAction(cc.sequence(
    		cc.spawn(cc.fadeOut(1),cc.moveBy(1, cc.p(0, 100))),
    		cc.removeSelf(true)
    	))
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
