(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./userData", "./Display"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var userData_1 = require("./userData");
    var Display_1 = require("./Display");
    console.log("askhfg");
    var GetApi = /** @class */ (function () {
        function GetApi() {
        }
        GetApi.prototype.get_request = function () {
            fetch("https://localhost:5001/api/user/all").then(function (Response) { return Response.json(); }).then(function (data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var res = new userData_1.UserData(data[i]);
                    console.log(res);
                    var obj = new Display_1.Display1();
                    obj.showUserData(res);
                }
            })["catch"](function (err) { return console.log(err); });
        };
        return GetApi;
    }());
    exports.GetApi = GetApi;
    document.querySelector("button").addEventListener("click", function () {
        new GetApi().get_request();
    });
});
