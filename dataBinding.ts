import * as models from './UserModel';

export function bindFormToObject(formElement: HTMLFormElement){
    var obj = new models.UserModel();
    
    //console.log(countryCode);

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
  
    for(let i = 0; i < 3; i++){
        let ContactNumberType = (document.getElementById('cn' + i)as HTMLInputElement).value;
        let ContactNumber = (document.getElementById('cnv' + i)as HTMLInputElement).value;
        let CountryCode = (document.getElementById('cc' + i)as HTMLInputElement).value;
        let AreaCode = (document.getElementById('ac' + i)as HTMLInputElement).value;
        if(ContactNumber != '')
            obj.Phones.push(new models.phones(ContactNumberType,ContactNumber,CountryCode,AreaCode));
    }
   
    for(let i = 0; i < 2; i++){
        var AddressType = (document.getElementById('address_type' + i)as HTMLInputElement).value
        var AddressLine=(document.getElementById('line' + i)as HTMLInputElement).value;
        var city=(document.getElementById('c' + i)as HTMLInputElement).value;
        var state=(document.getElementById('s' + i)as HTMLInputElement).value;
        var country=(document.getElementById('acountry' + i)as HTMLInputElement).value;
        var pin=(document.getElementById('apincode' + i)as HTMLInputElement).value;
        if(AddressLine)
            obj.Addresses.push(new models.addresses(AddressType,AddressLine,city,state,country,pin));
    }

    return obj;
}