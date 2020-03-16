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
            this.Address = data.address;
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
        return UserData;
    }());
    exports.UserData = UserData;
});
