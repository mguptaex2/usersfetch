(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./updatemodel", "./update"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var abc = require("./updatemodel");
    var update_1 = require("./update");
    var form = document.querySelector('.contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(toJSONString(getApiObject.data));
        new update_1.UpdateApi().update_data(toJSONString(getApiObject.data));
    });
    function toJSONString(getModelObject) {
        var obj = new abc.UpdateModel();
        var countryCode = getModelObject.phones[0].countryCode;
        var contactnumbertype = document.getElementById('contacttype').value;
        var number = document.getElementById('contactnumber').value;
        var areaCode = document.getElementById('areacode').value;
        var AddressType = document.getElementById('addresstype').value;
        var AddressLine = document.getElementById('address').value;
        var city = document.getElementById('city').value;
        var state = document.getElementById('state').value;
        var country = document.getElementById('country').value;
        var pin = document.getElementById('pincode').value;
        var AddressType1 = document.getElementById('addresstype1').value;
        var AddressLine1 = document.getElementById('address1').value;
        var city1 = document.getElementById('city1').value;
        var state1 = document.getElementById('state1').value;
        var country1 = document.getElementById('country1').value;
        var pin1 = document.getElementById('pincode1').value;
        obj.phones.push(new abc.phones(contactnumbertype, number, countryCode, areaCode));
        obj.addresses.push(new abc.addresses(AddressType, AddressLine, city, state, country, pin));
        obj.addresses.push(new abc.addresses(AddressType1, AddressLine1, city1, state1, country1, pin1));
        obj.Salutation = getModelObject.salutation;
        obj.FirstName = document.getElementById('fname').value;
        obj.MiddleName = document.getElementById('mname').value;
        obj.LastName = document.getElementById('lname').value;
        console.log(getModelObject);
        obj.DepartmentName = getModelObject.departmentName;
        obj.DesignationName = getModelObject.designationName;
        obj.Email = getModelObject.email;
        obj.AltEmail = getModelObject.altEmail;
        obj.UserName = getModelObject.userName;
        obj.Password = getModelObject.password;
        obj.DOB = getModelObject.dob;
        obj.Gender = getModelObject.gender;
        obj.DOJ = getModelObject.doj;
        return JSON.stringify(obj);
    }
    var getApiObject = new update_1.getApiForm();
    getApiObject.get_data_to_form();
});
