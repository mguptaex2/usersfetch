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
    var UpdateApi = /** @class */ (function () {
        function UpdateApi() {
        }
        UpdateApi.prototype.update_data = function (data) {
            console.log(data);
            var uname = document.getElementById("uname").value;
            fetch("http://localhost:5000/api/user/" + (document.getElementById("uname").value) + "/update", {
                method: "PUT",
                headers: new Headers({ 'content-type': 'application/json' }),
                body: data
            });
        };
        return UpdateApi;
    }());
    exports.UpdateApi = UpdateApi;
});
