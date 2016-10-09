"use strict";
cc._RFpush(module, 'bc9772ZVeVM2omwSvP+kAar', 'App');
// script\gameCore\App.js

var app = {
    startGame: function startGame() {}
};

//加载模块(有顺序)
var modPath = ['Util'];

for (var i in modPath) {
    var path = modPath[i];
    require(path);
}

module.exports = app;

cc._RFpop();