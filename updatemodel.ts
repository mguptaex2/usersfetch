
export class UpdateModel
{
    Salutation:string;
    DepartmentName:string;
    DesignationName:string;
    Email:string;
    AltEmail:string;
    UserName:string;
    Password:string;
    DOB:string;
    Gender:string;
    DOJ:string;
   FirstName:string;
   MiddleName:string;
   LastName:string;
   phones:phones[];
   addresses:addresses[];
   constructor(){
       this.addresses = new Array();
       this.phones = new Array();
   }

}
export class phones{
    Number:string;
    ContactNumberType:string;
    countryCode : string;
    areaCode:string;
    constructor(a,b,c,d)
    {
        this.ContactNumberType=a;
        this.Number=b;
        this.countryCode = c;
        this.areaCode=d;
    }
}
export class addresses{
   
    AddressType:string;
    AddressLine:string;
    City:string;
    State:string;
    Country:string;
    PIN:string;
    constructor(e,f,g,h,i,j)
    {
        
        this.AddressType =e;
        this.AddressLine=f;
        this.City=g;
        this.State=h;
        this.Country=i;
        this.PIN=j;
    }
}