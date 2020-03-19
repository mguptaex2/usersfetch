import { UserData } from "./userData";

export class Display1 {
    showUserData(obj: UserData) {
        {

            document.getElementById("out").innerHTML += "<p class='ss'> Name:" + obj.getNewName() + "<br>"
                + " " + " <br> Address : <br>" + obj.AddressLine +" " +obj.City+" "+ obj.State+ " "+obj.Country+" "+obj.PIN+ "<br> "
                + " " + " <br> Experience : " + obj.companyExperienceInString() + "<br>"
                + " " + " <br> ContactPrimary:" + obj.ContactPrimary + "<br> "
                + " " + " <br> ContactSecondary:" + obj.ContactSecondary + "<br> "
                + " " + " <br> Age :" + obj.userAge() + "<br> "
                + " " + " <br> IsIndian:" + obj.IsIndian + "<br> "
                + "<a href=\"updateform.html?abc=" + obj.Username + "\">Update user details</a> <br>"
                + "<button class=\"delete-button\" name=\"" + obj.Username + "\">Delete</button>";
              
        }
    }
}