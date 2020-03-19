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
    var getApiForm = /** @class */ (function () {
        function getApiForm() {
        }
        getApiForm.prototype.get_data_to_form = function () {
            var _this = this;
            console.log("efb");
            var urlParams = new URLSearchParams(window.location.search);
            var myParam = urlParams.get("abc");
            console.log(myParam);
            fetch("http://localhost:5000/api/user/" + myParam)
                .then(function (response) {
                return response.json();
            })
                .then(function (data) {
                console.log(data);
                _this.data = data;
                document.getElementById("uname").value = data.userName;
                document.getElementById("fname").value = data.firstName;
                document.getElementById("mname").value = data.middleName;
                document.getElementById("lname").value = data.lastName;
                document.getElementById("contactnumber").value = data.phones[0].number;
                document.getElementById("contacttype").value = data.phones[0].contactNumberType;
                document.getElementById("areacode").value = data.phones[0].areaCode;
                document.getElementById("address").value = data.addresses[0].addressLine;
                document.getElementById("addresstype").value = data.addresses[0].addressType;
                document.getElementById("city").value = data.addresses[0].city;
                document.getElementById("state").value = data.addresses[0].state;
                document.getElementById("country").value = data.addresses[0].country;
                document.getElementById("pincode").value = data.addresses[0].pin;
                document.getElementById("address1").value = data.addresses[1].addressLine;
                document.getElementById("addresstype1").value = data.addresses[1].addressType;
                document.getElementById("city1").value = data.addresses[1].city;
                document.getElementById("state1").value = data.addresses[1].state;
                document.getElementById("country1").value = data.addresses[1].country;
                document.getElementById("pincode1").value = data.addresses[1].pin;
            });
        };
        getApiForm.prototype.getdata_to_dropdown_country = function () {
            fetch("http://localhost:5000/api/dropdown/country")
                .then(function (response) {
                return response.json();
            })
                .then(function (data) {
                console.log(data);
            });
        };
        return getApiForm;
    }());
    exports.getApiForm = getApiForm;
});
