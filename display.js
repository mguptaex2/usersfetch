(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Display1 = /** @class */ (function () {
        function Display1() {
        }
        Display1.prototype.showUserData = function (obj) {
            document.body.innerHTML += "<p class='ss'> Name:" + obj.firstName + " " + obj.middleName + " " + obj.lastName + " <br> Email:" + obj.email + "<br> username:" + obj.userName + "<br>";
        };
        return Display1;
    }());
    exports.Display1 = Display1;
});
