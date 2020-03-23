import * as abc from "./UserModel";
import { CreateUserApi } from "./CreateUserApi";

console.log("as");
//   const form = document.querySelector('.contact-form');
 
//    form.addEventListener('submit', function(e){
//        console.log("inside function")
//        e.preventDefault();
//        console.log(toJSONString(this));
//       let xx= new CreateUserApi();
//       xx.Create_data(toJSONString( this ));
//    });


export function toJSONString( form:any ) {
    
    var obj = new abc.UserModel();

    obj.Salutation= (document.getElementById('Salutation')as HTMLInputElement).value;
    obj.FirstName = (document.getElementById('Firstname')as HTMLInputElement).value ;
    obj.MiddleName= (document.getElementById('Middlename')as HTMLInputElement).value;
    obj.LastName =(document.getElementById('Lastname')as HTMLInputElement).value;
    obj.DepartmentName =(document.getElementById('department')as HTMLInputElement).value;
    obj.DesignationName =(document.getElementById('designation')as HTMLInputElement).value;
    obj.Email =(document.getElementById('email')as HTMLInputElement).value;
    obj.AltEmail =(document.getElementById('altemail')as HTMLInputElement).value;
    obj.UserName =(document.getElementById('username')as HTMLInputElement).value;
    obj.Password =(document.getElementById('password')as HTMLInputElement).value;
    obj.DOB =(document.getElementById('DOB')as HTMLInputElement).value;
    obj.Gender =(document.getElementById('Gender')as HTMLInputElement).value;
    obj.DOJ =(document.getElementById('DOJ')as HTMLInputElement).value;
  
    var ContactNumberType = (document.getElementById('Contact')as HTMLInputElement).value;
    var Number = (document.getElementById('phone_number1')as HTMLInputElement).value;
    var CountryCode = (document.getElementById('CountryCode1')as HTMLInputElement).value;
    var AreaCode = (document.getElementById('AreaCode1')as HTMLInputElement).value;

    var ContactNumberType1 = (document.getElementById('Contact2')as HTMLInputElement).value;
    var Number1 = (document.getElementById('phone_number2')as HTMLInputElement).value;
    var CountryCode1 = (document.getElementById('CountryCode2')as HTMLInputElement).value;
    var AreaCode1 = (document.getElementById('AreaCode2')as HTMLInputElement).value;

    var ContactNumberType2 = (document.getElementById('Contact3')as HTMLInputElement).value;
    var Number2 = (document.getElementById('phone_number3')as HTMLInputElement).value;
    var CountryCode2 = (document.getElementById('CountryCode3')as HTMLInputElement).value;
    var AreaCode2 = (document.getElementById('AreaCode3')as HTMLInputElement).value;

    obj.phones.push(new abc.phones(ContactNumberType,Number,CountryCode,AreaCode));
    obj.phones.push(new abc.phones(ContactNumberType1,Number1,CountryCode1,AreaCode1));
    obj.phones.push(new abc.phones(ContactNumberType2,Number2,CountryCode2,AreaCode2));
   
   
  
    var AddressType ="Current"
    var AddressLine=(document.getElementById('CurrentAddress')as HTMLInputElement).value;
    var city=(document.getElementById('city1')as HTMLInputElement).value;
    var state=(document.getElementById('State1')as HTMLInputElement).value;
    var country=(document.getElementById('Country1')as HTMLInputElement).value;
    var pin=(document.getElementById('pincode1')as HTMLInputElement).value;
   
    var AddressType1 ="Permanant"
    var AddressLine1=(document.getElementById('PermanentAddress')as HTMLInputElement).value;
    var city1=(document.getElementById('city2')as HTMLInputElement).value;
    var state1=(document.getElementById('State2')as HTMLInputElement).value;
    var country1=(document.getElementById('Country2')as HTMLInputElement).value;
    var pin1=(document.getElementById('pincode2')as HTMLInputElement).value;

    obj.addresses.push(new abc.addresses(AddressType,AddressLine,city,state,country,pin));
    obj.addresses.push(new abc.addresses(AddressType1,AddressLine1,city1,state1,country1,pin1));
   

    return JSON.stringify( obj );
}