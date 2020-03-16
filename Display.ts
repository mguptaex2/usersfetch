import { UserData } from "./userData";


export class Display1
{
    showUserData(obj : UserData){
    {
        document.body.innerHTML += "<p class='ss'> Name:"+ obj.Name + "<br>"
                                    +" "+" <br> Address : <br>"+obj.Address+"<br> "
                                    +" "+" <br> Experience : "+obj.CurrentCompanyExpInYears+" Years "+obj.CurrentCompanyExpInMonths+" Months"+"<br>"
                                    +" "+" <br> ContactPrimary:"+obj.ContactPrimary+"<br> "
                                    +" "+" <br> ContactSecondary:"+obj.ContactSecondary+"<br> "
                                    +" "+" <br> Age :"+obj.AgeInYears+" Years "+obj.AgeInMonths+" Months "+"<br> "
                                    +" "+" <br> IsIndian:"+obj.IsIndian+"<br> ";
    }
}
}