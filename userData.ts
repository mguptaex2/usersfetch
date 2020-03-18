
export class UserData
{
   Name:string;
   Username: string;
   Address:string;
   CurrentCompanyExpInYears:string;
   CurrentCompanyExpInMonths:string;
   CurrentCompanyExpInDays:string;
   ContactPrimary:string;
   ContactSecondary:string;
   AgeInYears:string;
   AgeInMonths:string;
   AgeInDays:string;
   IsIndian:string;
   constructor(data)
   {   
        this.Name =data.name;
        this.Username = data.username;
        this.Address =data.address;
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
}