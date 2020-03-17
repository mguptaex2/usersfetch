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
                document.getElementById("out").innerHTML += "<p class='ss'> Name:" + obj.Name + "<br>"
                    + " " + " <br> Address : <br>" + obj.Address + "<br> "
                    + " " + " <br> Experience : " + obj.CurrentCompanyExpInYears + " Years " + obj.CurrentCompanyExpInMonths + " Months" + "<br>"
                    + " " + " <br> ContactPrimary:" + obj.ContactPrimary + "<br> "
                    + " " + " <br> ContactSecondary:" + obj.ContactSecondary + "<br> "
                    + " " + " <br> Age :" + obj.AgeInYears + " Years " + obj.AgeInMonths + " Months " + "<br> "
                    + " " + " <br> IsIndian:" + obj.IsIndian + "<br> ";
            }
        };
        return Display1;
    }());
    exports.Display1 = Display1;
});
