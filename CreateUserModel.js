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
    var CreateUserModel = /** @class */ (function () {
        function CreateUserModel() {
            this.Addresses = new Array();
            this.Phones = new Array();
        }
        return CreateUserModel;
    }());
    exports.CreateUserModel = CreateUserModel;
    var phones = /** @class */ (function () {
        function phones(a, b, c, d) {
            this.ContactNumberType = a;
            this.Number = b;
            this.CountryCode = c;
            this.AreaCode = d;
        }
        return phones;
    }());
    exports.phones = phones;
    var addresses = /** @class */ (function () {
        function addresses(e, f, g, h, i, j) {
            this.AddressType = e;
            this.AddressLine = f;
            this.City = g;
            this.State = h;
            this.Country = i;
            this.PIN = j;
        }
        return addresses;
    }());
    exports.addresses = addresses;
});
