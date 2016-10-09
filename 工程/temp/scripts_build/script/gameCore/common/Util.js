"use strict";
cc._RFpush(module, '1f57fJXW/5MwpzGE2th5qGE', 'Util');
// script\gameCore\common\Util.js

/**
 * Created by Administrator on 2016/5/6.
 */

var _p = {

    //遍历对象的属性和方法
    printObj: function printObj(obj) {
        // 用来保存所有的属性名称和值
        var props = "";
        // 开始遍历
        for (var p in obj) {
            // 方法
            if (typeof obj[p] == " function ") {
                props += p + " \n ";
            } else {
                // p 为属性名称，obj[p]为对应属性的值
                props += p + " \n ";
            }
        } // 最后显示所有的属性

        cc.log(props);
    },

    //随机
    random: function random(min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    testCode1: function testCode1() {
        this.start = new Date().getTime(); //起始时间
    },

    testCode2: function testCode2() {
        this.end = new Date().getTime(); //接受时间
        var timeStr = this.end - this.start + "ms";
        cc.log("此处花时间：" + timeStr);
    }

};

module.exports = _p;

cc._RFpop();