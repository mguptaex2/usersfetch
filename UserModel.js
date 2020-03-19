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
    var UserModel = /** @class */ (function () {
        function UserModel() {
            this.Addresses = new Array();
            this.Phones = new Array();
        }
        return UserModel;
    }());
    exports.UserModel = UserModel;
    var phones = /** @class */ (function () {
        function phones(contacttype, number, countrycode, areacode) {
            this.ContactNumberType = contacttype;
            this.Number = number;
            this.CountryCode = countrycode;
            this.AreaCode = areacode;
        }
        return phones;
    }());
    exports.phones = phones;
    var addresses = /** @class */ (function () {
        function addresses(addresstype, addressline, city, state, country, pin) {
            this.AddressType = addresstype;
            this.AddressLine = addressline;
            this.City = city;
            this.State = state;
            this.Country = country;
            this.PIN = pin;
        }
        return addresses;
    }());
    exports.addresses = addresses;
});
