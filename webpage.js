(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./userData", "./Display", "./Compare"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var userData_1 = require("./userData");
    var Display_1 = require("./Display");
    var Compare_1 = require("./Compare");
    var GetApi = /** @class */ (function () {
        function GetApi() {
        }
        GetApi.prototype.get_request = function (num) {
            fetch("https://localhost:5001/api/assignment").then(function (Response) { return Response.json(); }).then(function (data) {
                console.log(data);
                switch (num) {
                    case 0:
                        data.sort(new Compare_1.Compare().SortByName);
                        break;
                    case 1:
                        data.sort(new Compare_1.Compare().SortByAge);
                        break;
                    case 2:
                        data.sort(new Compare_1.Compare().SortByExperience);
                        break;
                }
                for (var i = 0; i < data.length; i++) {
                    var res = new userData_1.UserData(data[i]);
                    console.log(res);
                    var obj = new Display_1.Display1();
                    obj.showUserData(res);
                }
            })["catch"](function (err) { return console.log(err); });
        };
        GetApi.prototype.entered_name = function () {
            console.log(document.getElementById("fname").value);
            return fetch("https://localhost:5001/api/assignment?search=" + document.getElementById("fname").value).then(function (Response) { return Response.json(); }).then(function (data) {
                console.log(data[0]);
                var res = new userData_1.UserData(data[0]);
                console.log(res);
                var obj = new Display_1.Display1();
                obj.showUserData(res);
            })["catch"](function (err) { return console.log(err); });
        };
        return GetApi;
    }());
    exports.GetApi = GetApi;
    document.querySelector("#byname").addEventListener("click", function () {
        new GetApi().get_request(0);
    });
    document.querySelector("#byage").addEventListener("click", function () {
        new GetApi().get_request(1);
    });
    document.querySelector("#byexperience").addEventListener("click", function () {
        new GetApi().get_request(2);
    });
    document.querySelector("#sr").addEventListener("click", function () {
        console.log(1);
        new GetApi().entered_name();
    });
});
