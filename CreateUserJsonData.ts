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

    obj.Salutation= (document.getElementById('sal')as HTMLInputElement).value;
    obj.FirstName = (document.getElementById('fname')as HTMLInputElement).value ;
    obj.MiddleName= (document.getElementById('mname')as HTMLInputElement).value;
    obj.LastName =(document.getElementById('lname')as HTMLInputElement).value;
    obj.DepartmentName =(document.getElementById('dname')as HTMLInputElement).value;
    obj.DesignationName =(document.getElementById('desname')as HTMLInputElement).value;
    obj.Email =(document.getElementById('email')as HTMLInputElement).value;
    obj.AltEmail =(document.getElementById('altemail')as HTMLInputElement).value;
    obj.UserName =(document.getElementById('uname')as HTMLInputElement).value;
    obj.Password =(document.getElementById('pass')as HTMLInputElement).value;
    obj.DOB =(document.getElementById('dob')as HTMLInputElement).value;
    obj.Gender =(document.getElementById('gender')as HTMLInputElement).value;
    obj.DOJ =(document.getElementById('doj')as HTMLInputElement).value;
  
    var ContactNumberType = (document.getElementById('cn')as HTMLInputElement).value;
    var Number = (document.getElementById('cnv')as HTMLInputElement).value;
    var CountryCode = (document.getElementById('cc')as HTMLInputElement).value;
    var AreaCode = (document.getElementById('ac')as HTMLInputElement).value;

    var ContactNumberType1 = (document.getElementById('cn1')as HTMLInputElement).value;
    var Number1 = (document.getElementById('cnv1')as HTMLInputElement).value;
    var CountryCode1 = (document.getElementById('cc1')as HTMLInputElement).value;
    var AreaCode1 = (document.getElementById('ac1')as HTMLInputElement).value;

    var ContactNumberType2 = (document.getElementById('cn2')as HTMLInputElement).value;
    var Number2 = (document.getElementById('cnv2')as HTMLInputElement).value;
    var CountryCode2 = (document.getElementById('cc2')as HTMLInputElement).value;
    var AreaCode2 = (document.getElementById('ac2')as HTMLInputElement).value;

    obj.Phones.push(new abc.phones(ContactNumberType,Number,CountryCode,AreaCode));
    obj.Phones.push(new abc.phones(ContactNumberType1,Number1,CountryCode1,AreaCode1));
    obj.Phones.push(new abc.phones(ContactNumberType2,Number2,CountryCode2,AreaCode2));
   
   
  
    var AddressType ="Current"
    var AddressLine=(document.getElementById('line')as HTMLInputElement).value;
    var city=(document.getElementById('c')as HTMLInputElement).value;
    var state=(document.getElementById('s')as HTMLInputElement).value;
    var country=(document.getElementById('acountry')as HTMLInputElement).value;
    var pin=(document.getElementById('apincode')as HTMLInputElement).value;
   
    var AddressType1 ="Permanant"
    var AddressLine1=(document.getElementById('line1')as HTMLInputElement).value;
    var city1=(document.getElementById('c1')as HTMLInputElement).value;
    var state1=(document.getElementById('s1')as HTMLInputElement).value;
    var country1=(document.getElementById('acountry1')as HTMLInputElement).value;
    var pin1=(document.getElementById('apincode1')as HTMLInputElement).value;

    obj.Addresses.push(new abc.addresses(AddressType,AddressLine,city,state,country,pin));
    obj.Addresses.push(new abc.addresses(AddressType1,AddressLine1,city1,state1,country1,pin1));
   

    return JSON.stringify( obj );
}