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
            this.Name = data.name;
            this.Username = data.username;
            this.AddressLine = data.address.AddressLine;
            this.City = data.address.City;
            this.State = data.address.State;
            this.Country = data.address.Country;
            this.PIN = data.address.PIN;
            this.CurrentCompanyExpInYears = data.currentCompanyExp.Years;
            this.CurrentCompanyExpInMonths = data.currentCompanyExp.Months;
            this.CurrentCompanyExpInDays = data.currentCompanyExp.Days;
            this.ContactPrimary = data.contactDetail.Primary;
            this.ContactSecondary = data.contactDetail.Secondary;
            this.AgeInYears = data.age.Years;
            this.AgeInMonths = data.age.Months;
            this.AgeInDays = data.age.Days;
            this.IsIndian = data.isIndian;
        }
        UserData.prototype.companyExperienceInString = function () {
            var res = "";
            if (this.CurrentCompanyExpInYears > 0) {
                res += this.getSingularOrPluralString(this.CurrentCompanyExpInYears, "Year");
            }
            if (this.CurrentCompanyExpInMonths > 0) {
                res += this.getSingularOrPluralString(this.CurrentCompanyExpInMonths, "Month");
            }
            return res;
        };
        UserData.prototype.userAge = function () {
            var res = "";
            if (this.AgeInYears > 0) {
                res += this.getSingularOrPluralString(this.AgeInYears, "Year");
            }
            if (this.AgeInMonths > 0) {
                res += this.getSingularOrPluralString(this.AgeInMonths, "Month");
            }
            return res;
        };
        UserData.prototype.getSingularOrPluralString = function (quantity, value) {
            var res = quantity + value;
            res += quantity > 1 ? "s " : " ";
            return res;
        };
        UserData.prototype.getNewName = function () {
            return this.Name + "-------";
        };
        return UserData;
    }());
    exports.UserData = UserData;
});
