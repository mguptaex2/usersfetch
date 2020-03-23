import * as abc from "./UserModel";
import { UpdateApi} from "./update";
import { getApiForm } from "./getapiform";
import { GetApi } from "./webpage";
import { closeForm } from "./utilities";

// const form = document.querySelector('.contact-form');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log(toJSONStringUpdate(getApiObject.data));
//     new UpdateApi().update_data(toJSONStringUpdate(getApiObject.data));
//     closeForm();
// });

// document.querySelector("#country").addEventListener("click", function () {
//   new GetApi().get_request("getdata_to_dropdown_country");
// });
// document.querySelector("#country1").addEventListener("click", function () {
//   new GetApi().get_request("getdata_to_dropdown_country");
// });

export function toJSONStringUpdate(getModelObject:any) {

    var obj = new abc.UserModel();
    var countryCode = getModelObject.phones[0].countryCode;
    console.log(countryCode);
    var contactnumbertype = (document.getElementById('Contact') as HTMLInputElement).value;
    var number = (document.getElementById('phone_number1') as HTMLInputElement).value;
    var areaCode = (document.getElementById('AreaCode1') as HTMLInputElement).value;
   var AddressType = 'Current';
    var AddressLine = (document.getElementById('CurrentAddress') as HTMLInputElement).value;
    var city = (document.getElementById('city1') as HTMLInputElement).value;
    var state = (document.getElementById('State1') as HTMLInputElement).value;
    var country = (document.getElementById('Country1') as HTMLInputElement).value;
    var pin = (document.getElementById('pincode1') as HTMLInputElement).value;
   var AddressType1 = 'Permanant';
    var AddressLine1 = (document.getElementById('PermanentAddress') as HTMLInputElement).value;
    var city1 = (document.getElementById('city2') as HTMLInputElement).value;
    var state1 = (document.getElementById('State2') as HTMLInputElement).value;
    var country1 = (document.getElementById('Country2') as HTMLInputElement).value;
    var pin1 = (document.getElementById('pincode2') as HTMLInputElement).value;

    obj.phones.push(new abc.phones(contactnumbertype, number, countryCode, areaCode));
    obj.addresses.push(new abc.addresses(AddressType, AddressLine, city, state, country, pin));
    obj.addresses.push(new abc.addresses(AddressType1, AddressLine1, city1, state1, country1, pin1));
    obj.Salutation = getModelObject.salutation;
    obj.FirstName = (document.getElementById('Firstname') as HTMLInputElement).value;
    obj.MiddleName = (document.getElementById('Middlename') as HTMLInputElement).value;
    obj.LastName = (document.getElementById('Lastname') as HTMLInputElement).value;
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
// const getApiObject = new getApiForm();
// getApiObject.get_data_to_form();