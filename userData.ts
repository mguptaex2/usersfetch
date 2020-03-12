
export class UserData
{
    firstName:string;
    middleName:string;
    lastName:string;
    email:string;
    userName:string;
   constructor(data)
   {   

        this.firstName =data.firstName;
        this.middleName= data.middleName;
        this.lastName= data.lastName;
        this.email=data.email;
        this.userName=data.userName;
        console.log(this.firstName);
   }
}