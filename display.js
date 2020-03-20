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
            {
                document.getElementById("out").innerHTML += "<p class='ss'> Name:" + obj.getNewName() + "<br>"
                    + " " + " <br> Address : <br>" + obj.address() + "<br> "
                    + " " + " <br> ContactPrimary:" + obj.Phone_number + "<br> "
                    + " " + " <br> Email:" + obj.Email + "<br>"
                    + " " + " <br> DOB :" + obj.DOB + "<br> "
                    + "<a href=\"updateform.html?abc=" + obj.UserName + "\">Update user details</a> <br>"
                    + "<button class=\"delete-button\" name=\"" + obj.UserName + "\">Delete</button>";
            }
        };
        return Display1;
    }());
    exports.Display1 = Display1;
});
