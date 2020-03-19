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
                    + " " + " <br> Address : <br>" + obj.AddressLine + " " + obj.City + " " + obj.State + " " + obj.Country + " " + obj.PIN + "<br> "
                    + " " + " <br> Experience : " + obj.companyExperienceInString() + "<br>"
                    + " " + " <br> ContactPrimary:" + obj.ContactPrimary + "<br> "
                    + " " + " <br> ContactSecondary:" + obj.ContactSecondary + "<br> "
                    + " " + " <br> Age :" + obj.userAge() + "<br> "
                    + " " + " <br> IsIndian:" + obj.IsIndian + "<br> "
                    + "<a href=\"updateform.html?abc=" + obj.Username + "\">Update user details</a> <br>"
                    + "<button class=\"delete-button\" name=\"" + obj.Username + "\">Delete</button>";
            }
        };
        return Display1;
    }());
    exports.Display1 = Display1;
});
