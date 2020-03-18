export class CreateUserModel
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
    constructor(a,b,c,d)
    {
        this.ContactNumberType=a;
        this.Number=b;
        this.CountryCode=c;
        this.AreaCode=d;
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