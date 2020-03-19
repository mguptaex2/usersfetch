(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./userData", "./Display", "./Compare"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var userData_1 = require("./userData");
    var Display_1 = require("./Display");
    var Compare_1 = require("./Compare");
    var GetApi = /** @class */ (function () {
        function GetApi() {
        }
        GetApi.prototype.get_request = function (compare) {
            fetch("http://localhost:5000/api/assignment").then(function (Response) { return Response.json(); }).then(function (data) {
                console.log(data);
                switch (compare) {
                    case "sort_by_name":
                        data.sort(new Compare_1.Compare().SortByName);
                        break;
                    case "sort_by_age":
                        data.sort(new Compare_1.Compare().SortByAge);
                        break;
                    case "sort_by_exp":
                        data.sort(new Compare_1.Compare().SortByExperience);
                        break;
                    default:
                        break;
                }
                document.getElementById("out").innerHTML = "";
                for (var i = 0; i < data.length; i++) {
                    var res = new userData_1.UserData(data[i]);
                    console.log(res);
                    var obj = new Display_1.Display1();
                    obj.showUserData(res);
                }
            })["catch"](function (err) { return console.log(err); });
        };
        // get_request(num: number = -1) {
        //   fetch("http://localhost:5000/api/assignment").then
        //     ((Response) => { return Response.json(); }).then((data) => {
        //       console.log(data);
        //       switch (num) {
        //         case 0: data.sort(new Compare().SortByName);
        //           break;
        //         case 1: data.sort(new Compare().SortByAge);
        //           break;
        //         case 2: data.sort(new Compare().SortByExperience);
        //           break;
        //         default:
        //             break;
        //       }
        //       document.getElementById("out").innerHTML = "";
        //       for (let i = 0; i < data.length; i++) {
        //         let res = new UserData(data[i]);
        //         console.log(res);
        //         let obj = new Display1();
        //         obj.showUserData(res);
        //       }
        //     }).catch(err => console.log(err));
        // }
        GetApi.prototype.entered_name = function () {
            fetch("http://localhost:5000/api/assignment?search=" + document.getElementById("fname").value)
                .then(function (Response) { return Response.json(); })
                .then(function (data) {
                console.log(data);
                document.getElementById("out").innerHTML = "";
                for (var i = 0; i < data.length; i++) {
                    var res = new userData_1.UserData(data[i]);
                    var obj = new Display_1.Display1();
                    obj.showUserData(res);
                }
            })["catch"](function (err) { return console.log(err); });
        };
        GetApi.prototype.delete_data = function (user) {
            fetch("http://localhost:5000/api/user/" + user + "/remove", {
                method: "DELETE"
            });
        };
        return GetApi;
    }());
    exports.GetApi = GetApi;
    document.querySelector("#byname").addEventListener("click", function () {
        new GetApi().get_request("sort_by_name");
    });
    document.querySelector("#byage").addEventListener("click", function () {
        new GetApi().get_request("sort_by_age");
    });
    document.querySelector("#byexperience").addEventListener("click", function () {
        new GetApi().get_request("sort_by_exp");
    });
    document.querySelector("#sr").addEventListener("click", function () {
        console.log(1);
        var temp = new GetApi();
        temp.entered_name();
    });
    document.addEventListener("click", function (e) {
        if (e.target.className == "delete-button") {
            var temp = new GetApi();
            var username = e.target.getAttribute('name');
            temp.delete_data(username);
            document.getElementById("out").innerHTML = "";
            alert(username + " is deleted");
            temp.get_request("");
        }
    });
});
// function deleteHandler () {
//     console.log(this);
//     console.log(this.getAttribute('name'));
//     // 
//   };
// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get("abc");
// console.log(myParam);
