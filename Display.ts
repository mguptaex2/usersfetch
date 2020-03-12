import { UserData } from "./userData";


export class Display1
{
    showUserData(obj : UserData)
    {
        document.body.innerHTML += "<p class='ss'> Name:"+ obj.firstName+" "+ obj.middleName + " "  + obj.lastName +" <br> Email:"+obj.email+"<br> username:"+obj.userName+"<br>";
    }
}