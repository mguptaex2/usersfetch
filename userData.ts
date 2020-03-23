
export class UserData
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
       Phone_number:Number;
       AddressLine: string;
       City:string;
       State:string;
       Country:string;
       PIN : number;
      
      constructor(data){
          this.AddressLine =data.addresses[0].AddressLine ;
          this.City=data.addresses[0].City;
          this.State=data.addresses[0].State;
          this.Country=data.addresses[0].Country;
          this.PIN=data.addresses[0].PIN;
          this.Phone_number=data.phones[0].Number;
          this.Salutation=data.Salutation;
          this.FirstName=data.FirstName;
          this.MiddleName=data.MiddleName;
          this.LastName=data.LastName;
          this.DepartmentName=data.DepartmentName;
          this.DesignationName=data.DesignationName;
          this.Email=data.Email;
          this.AltEmail=data.AltEmail;
          this.UserName=data.UserName;
          this.Password=data.Password;
          this.DOB=data.DOB;
          this.Gender=data.Gender;
          this.DOJ=data.DOJ;

      }
      getNewName(){
         return this.Salutation + " "+this.FirstName +" "+ this.MiddleName +" " + this.LastName;
      }
      getAddress()
      {
         return this.AddressLine + " ," + this.City + " ,"+ this.State + " ,"+ this.Country + " ," + this.PIN; 
      }
      getDate(dateString: string){
         const [day, month, year] = this[dateString].split("-").map(Number);
         return new Date(year, month - 1, day);
      }
   }
     
   // companyExperienceInString(){
   //    let res: String = "";
   //    if(this.CurrentCompanyExpInYears > 0){
   //     res+=this.getSingularOrPluralString(this.CurrentCompanyExpInYears,"Year");
   //    }
   //    if(this.CurrentCompanyExpInMonths > 0){
   //      res+= this.getSingularOrPluralString(this.CurrentCompanyExpInMonths,"Month");
   //    }
   //    return res;
   // }
   // userAge(){

   //    let res: String = "";
   //    if(this.AgeInYears > 0){
   //     res+=this.getSingularOrPluralString(this.AgeInYears,"Year");
   //    }
   //    if(this.AgeInMonths > 0){
   //      res+= this.getSingularOrPluralString(this.AgeInMonths,"Month");
   //    }
   //    return res;
   // }
   // getSingularOrPluralString(quantity:number,value:string)
   // {
   //   let res=quantity + value;
   //   res += quantity > 1 ? "s " : " ";
   //   return res;
   // }
   
