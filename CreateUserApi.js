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
    var CreateUserApi = /** @class */ (function () {
        function CreateUserApi() {
        }
        CreateUserApi.prototype.Create_data = function (data) {
            console.log(data);
            fetch("http://localhost:5000/api/user/add", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: data
            })["catch"](function (Error) { return console.log(Error); });
        };
        return CreateUserApi;
    }());
    exports.CreateUserApi = CreateUserApi;
});
