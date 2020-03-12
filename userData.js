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
    var UserData = /** @class */ (function () {
        function UserData(data) {
            this.firstName = data.firstName;
            this.middleName = data.middleName;
            this.lastName = data.lastName;
            this.email = data.email;
            this.userName = data.userName;
            console.log(this.firstName);
        }
        return UserData;
    }());
    exports.UserData = UserData;
});
