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
            this.AddressLine = data.addresses[0].AddressLine;
            this.City = data.addresses[0].City;
            this.State = data.addresses[0].State;
            this.Country = data.addresses[0].Country;
            this.PIN = data.addresses[0].PIN;
            this.Phone_number = data.phones[0].Number;
            this.Salutation = data.Salutation;
            this.FirstName = data.FirstName;
            this.MiddleName = data.MiddleName;
            this.LastName = data.LastName;
            this.DepartmentName = data.DepartmentName;
            this.DesignationName = data.DesignationName;
            this.Email = data.Email;
            this.AltEmail = data.AltEmail;
            this.UserName = data.UserName;
            this.Password = data.Password;
            this.DOB = data.DOB;
            this.Gender = data.Gender;
            this.DOJ = data.DOJ;
        }
        UserData.prototype.getNewName = function () {
            return this.Salutation + " " + this.FirstName + " " + this.MiddleName + " " + this.LastName;
        };
        UserData.prototype.address = function () {
            return this.AddressLine + " ," + this.City + " ," + this.State + " ," + this.Country + " ," + this.PIN;
        };
        return UserData;
    }());
    exports.UserData = UserData;
});
//  export class phones{
//     ContactNumberType:string;
//     Number:string;
//      CountryCode : string;
//     AreaCode:string;
//     constructor(contacttype,number,countrycode,areacode)
//     {
//         this.ContactNumberType=contacttype;
//         this.Number=number;
//         this.CountryCode=countrycode;
//         this.AreaCode=areacode;
//     }
// }
//  export class addresses{
//     AddressType:string;
//     AddressLine:string;
//     City:string;
//     State:string;
//     Country:string;
//     PIN:string;
//     constructor(addresstype,addressline,city,state,country,pin)
//     {
//         this.AddressType =addresstype;
//         this.AddressLine=addressline;
//         this.City=city;
//         this.State=state;
//         this.Country=country;
//         this.PIN=pin;
//     }
// }
// companyExperienceInString(){
//    let res: String = "";
//    if(this.CurrentCompanyExpInYears > 0){
//     res+=this.getSingularOrPluralString(this.CurrentCompanyExpInYears,"Year");
//    }
//    if(this.CurrentCompanyExpInMonths > 0){
//      res+= this.getSingularOrPluralString(this.CurrentCompanyExpInMonths,"Month");
//    }
//    return res;
// }
// userAge(){
//    let res: String = "";
//    if(this.AgeInYears > 0){
//     res+=this.getSingularOrPluralString(this.AgeInYears,"Year");
//    }
//    if(this.AgeInMonths > 0){
//      res+= this.getSingularOrPluralString(this.AgeInMonths,"Month");
//    }
//    return res;
// }
// getSingularOrPluralString(quantity:number,value:string)
// {
//   let res=quantity + value;
//   res += quantity > 1 ? "s " : " ";
//   return res;
// }
