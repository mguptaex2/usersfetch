import { UserData } from "./userData";

export class Display1 {
    showUserData(obj: UserData) {
        {

            document.getElementById("out").innerHTML += "<p class='ss'> Name:" + obj.getNewName() + "<br>"
                + " " + " <br> Address : <br>" + obj.getAddress()+ "<br> "
                + " " + " <br> ContactPrimary:" + obj.Phone_number + "<br> "
                + " " + " <br> Email:" + obj.Email + "<br>"
                + " " + " <br> DOB :" + obj.DOB + "<br> "
                + "<button class=\"edit-button\" data-username=\"" + obj.UserName + "\">Update user details</a> <br>"
                + "<button class=\"delete-button\" name=\"" + obj.UserName + "\">Delete</button>";
              
        }
    }
}