export class UserModel
{
    Salutation:string;
    FirstName:string;
    MiddleName:string;
    LastName:string;
    DepartmentName:string;
    DesignationName:string;
    Email:string;
    AltEmail:string;
    UserName:string;
    Password:string;
    DOB:string;
    Gender:string;
    DOJ:string;
 
   Phones:phones[];
   Addresses:addresses[];
   constructor(){
       this.Addresses = new Array();
       this.Phones=new Array();
   }
}
 export class phones{
    ContactNumberType:string;
    Number:string;
     CountryCode : string;
    AreaCode:string;
    constructor(contacttype,number,countrycode,areacode)
    {
        this.ContactNumberType=contacttype;
        this.Number=number;
        this.CountryCode=countrycode;
        this.AreaCode=areacode;
    }
}
 export class addresses{
   
    AddressType:string;
    AddressLine:string;
    City:string;
    State:string;
    Country:string;
    PIN:string;
    constructor(addresstype,addressline,city,state,country,pin)
    {
        
        this.AddressType =addresstype;
        this.AddressLine=addressline;
        this.City=city;
        this.State=state;
        this.Country=country;
        this.PIN=pin;
    }
}