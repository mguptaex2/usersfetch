
export class UserData
{
   Name:string;
   Username: string;
   AddressLine:string;
   City:string;
   State:string;
   Country:string;
   PIN:string;
   CurrentCompanyExpInYears:any;
   CurrentCompanyExpInMonths:any;
   CurrentCompanyExpInDays:string;
   ContactPrimary:string;
   ContactSecondary:string;
   AgeInYears:number;
   AgeInMonths:number;
   AgeInDays:string;
   IsIndian:string;
   constructor(data)
   {   
        this.Name =data.name;
        this.Username = data.username;
        this.AddressLine =data.address.AddressLine;
        this.City=data.address.City;
        this.State=data.address.State;
        this.Country=data.address.Country;
        this.PIN=data.address.PIN;
        this.CurrentCompanyExpInYears=data.currentCompanyExp.Years;
        this.CurrentCompanyExpInMonths=data.currentCompanyExp.Months;
        this.CurrentCompanyExpInDays=data.currentCompanyExp.Days;
        this.ContactPrimary=data.contactDetail.Primary;
        this.ContactSecondary=data.contactDetail.Secondary;
        this.AgeInYears=data.age.Years;
        this.AgeInMonths=data.age.Months;
        this.AgeInDays=data.age.Days;
        this.IsIndian=data.isIndian;
        
   }
   companyExperienceInString(){
      let res: String = "";
      if(this.CurrentCompanyExpInYears > 0){
       res+=this.getSingularOrPluralString(this.CurrentCompanyExpInYears,"Year");
      }
      if(this.CurrentCompanyExpInMonths > 0){
        res+= this.getSingularOrPluralString(this.CurrentCompanyExpInMonths,"Month");
      }
      return res;
   }
   userAge(){

      let res: String = "";
      if(this.AgeInYears > 0){
       res+=this.getSingularOrPluralString(this.AgeInYears,"Year");
      }
      if(this.AgeInMonths > 0){
        res+= this.getSingularOrPluralString(this.AgeInMonths,"Month");
      }
      return res;
   }
   getSingularOrPluralString(quantity:number,value:string)
   {
     let res=quantity + value;
     res += quantity > 1 ? "s " : " ";
     return res;
   }
   getNewName(){
      return this.Name + "-------";
   }
}