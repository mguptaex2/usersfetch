(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./UserModel", "./CreateUserApi"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var abc = require("./UserModel");
    var CreateUserApi_1 = require("./CreateUserApi");
    console.log("as");
    var form = document.querySelector('.contact-form');
    form.addEventListener('submit', function (e) {
        console.log("inside function");
        e.preventDefault();
        console.log(toJSONString(this));
        var xx = new CreateUserApi_1.CreateUserApi();
        xx.Create_data(toJSONString(this));
    });
    function toJSONString(form) {
        var obj = new abc.UserModel();
        obj.Salutation = document.getElementById('sal').value;
        obj.FirstName = document.getElementById('fname').value;
        obj.MiddleName = document.getElementById('mname').value;
        obj.LastName = document.getElementById('lname').value;
        obj.DepartmentName = document.getElementById('dname').value;
        obj.DesignationName = document.getElementById('desname').value;
        obj.Email = document.getElementById('email').value;
        obj.AltEmail = document.getElementById('altemail').value;
        obj.UserName = document.getElementById('uname').value;
        obj.Password = document.getElementById('pass').value;
        obj.DOB = document.getElementById('dob').value;
        obj.Gender = document.getElementById('gender').value;
        obj.DOJ = document.getElementById('doj').value;
        var ContactNumberType = document.getElementById('cn').value;
        var Number = document.getElementById('cnv').value;
        var CountryCode = document.getElementById('cc').value;
        var AreaCode = document.getElementById('ac').value;
        var ContactNumberType1 = document.getElementById('cn1').value;
        var Number1 = document.getElementById('cnv1').value;
        var CountryCode1 = document.getElementById('cc1').value;
        var AreaCode1 = document.getElementById('ac1').value;
        var ContactNumberType2 = document.getElementById('cn2').value;
        var Number2 = document.getElementById('cnv2').value;
        var CountryCode2 = document.getElementById('cc2').value;
        var AreaCode2 = document.getElementById('ac2').value;
        obj.Phones.push(new abc.phones(ContactNumberType, Number, CountryCode, AreaCode));
        obj.Phones.push(new abc.phones(ContactNumberType1, Number1, CountryCode1, AreaCode1));
        obj.Phones.push(new abc.phones(ContactNumberType2, Number2, CountryCode2, AreaCode2));
        var AddressType = "Current";
        var AddressLine = document.getElementById('line').value;
        var city = document.getElementById('c').value;
        var state = document.getElementById('s').value;
        var country = document.getElementById('acountry').value;
        var pin = document.getElementById('apincode').value;
        var AddressType1 = "Permanant";
        var AddressLine1 = document.getElementById('line1').value;
        var city1 = document.getElementById('c1').value;
        var state1 = document.getElementById('s1').value;
        var country1 = document.getElementById('acountry1').value;
        var pin1 = document.getElementById('apincode1').value;
        obj.Addresses.push(new abc.addresses(AddressType, AddressLine, city, state, country, pin));
        obj.Addresses.push(new abc.addresses(AddressType1, AddressLine1, city1, state1, country1, pin1));
        return JSON.stringify(obj);
    }
});
