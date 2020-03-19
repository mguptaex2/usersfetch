import * as abc from "./UserModel";
import { UpdateApi} from "./update";
import { getApiForm } from "./getapiform";
import { GetApi } from "./webpage";

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(toJSONString(getApiObject.data));
    new UpdateApi().update_data(toJSONString(getApiObject.data));
});

// document.querySelector("#country").addEventListener("click", function () {
//   new GetApi().get_request("getdata_to_dropdown_country");
// });
// document.querySelector("#country1").addEventListener("click", function () {
//   new GetApi().get_request("getdata_to_dropdown_country");
// });

function toJSONString(getModelObject) {

    var obj = new abc.UserModel();
    var countryCode = getModelObject.phones[0].countryCode;
    console.log(countryCode);
    var contactnumbertype = (document.getElementById('contacttype') as HTMLInputElement).value;
    var number = (document.getElementById('contactnumber') as HTMLInputElement).value;
    var areaCode = (document.getElementById('areacode') as HTMLInputElement).value;
    var AddressType = (document.getElementById('addresstype') as HTMLInputElement).value;
    var AddressLine = (document.getElementById('address') as HTMLInputElement).value;
    var city = (document.getElementById('city') as HTMLInputElement).value;
    var state = (document.getElementById('state') as HTMLInputElement).value;
    var country = (document.getElementById('country') as HTMLInputElement).value;
    var pin = (document.getElementById('pincode') as HTMLInputElement).value;
    var AddressType1 = (document.getElementById('addresstype1') as HTMLInputElement).value;
    var AddressLine1 = (document.getElementById('address1') as HTMLInputElement).value;
    var city1 = (document.getElementById('city1') as HTMLInputElement).value;
    var state1 = (document.getElementById('state1') as HTMLInputElement).value;
    var country1 = (document.getElementById('country1') as HTMLInputElement).value;
    var pin1 = (document.getElementById('pincode1') as HTMLInputElement).value;

    obj.Phones.push(new abc.phones(contactnumbertype, number, countryCode, areaCode));
    obj.Addresses.push(new abc.addresses(AddressType, AddressLine, city, state, country, pin));
    obj.Addresses.push(new abc.addresses(AddressType1, AddressLine1, city1, state1, country1, pin1));
    obj.Salutation = getModelObject.salutation;
    obj.FirstName = (document.getElementById('fname') as HTMLInputElement).value;
    obj.MiddleName = (document.getElementById('mname') as HTMLInputElement).value;
    obj.LastName = (document.getElementById('lname') as HTMLInputElement).value;
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
const getApiObject = new getApiForm();
getApiObject.get_data_to_form();