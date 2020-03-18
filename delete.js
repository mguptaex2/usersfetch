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
    var DeleteApi = /** @class */ (function () {
        function DeleteApi() {
        }
        DeleteApi.prototype.delete_data = function () {
            var user = (document.getElementById("uname").value);
            fetch("https://localhost:5001/api/user/" + user + "/remove", {
                method: "DELETE"
            });
        };
        return DeleteApi;
    }());
    exports.DeleteApi = DeleteApi;
    document.querySelector("#delete").addEventListener("click", function (e) {
        e.preventDefault();
        new DeleteApi().delete_data();
    });
});
