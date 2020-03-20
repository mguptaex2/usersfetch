import { UserData } from "./userData";
import { Display1 } from "./Display";
import { Compare } from "./Compare";
import { openForm } from "./utilities";

import * as ab from "./CreateUserJsonData";
import { CreateUserApi } from "./CreateUserApi";
export class GetApi {
  get_request(compare:string) {
    fetch("http://localhost:5000/api/user").then
      ((Response) => { return Response.json(); }).then((data) => {
        console.log(data);
        switch (compare) {
          case "sort_by_name": data.sort((FirstPerson:any, SecondPerson:any) => (FirstPerson.FirstName > SecondPerson.FirstName) ? 1 : -1);
            break;
          case "sort_by_age": data.sort(new Compare().SortByAge);
            break;
          case "sort_by_exp": data.sort(new Compare().SortByExperience);
            break;
          default:
              break;
        }

        (document.getElementById("out")as HTMLFormElement).innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          let res = new UserData(data[i]);
          console.log(res);
          let obj = new Display1();
          obj.showUserData(res);
        }

      }).catch(err => console.log(err));
  }
  
  entered_name() {
    fetch("http://localhost:5000/api/user?search=" + (document.getElementById("fname") as HTMLInputElement).value)
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
      (document.getElementById("out")as HTMLFormElement).innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        let res = new UserData(data[i]);
        let obj = new Display1();
        obj.showUserData(res);
      }

    }).catch(err => console.log(err));
  }
  delete_data(user: string) {

    fetch("http://localhost:5000/api/user/" + user + "/remove", {
      method: "DELETE"
    });
  }
}



(document.querySelector("#byname")as HTMLFormElement).addEventListener("click", function () {
  new GetApi().get_request("sort_by_name");
});
(document.querySelector("#byage")as HTMLFormElement).addEventListener("click", function () {
  new GetApi().get_request("sort_by_age");
});
(document.querySelector("#byexperience")as HTMLFormElement).addEventListener("click", function () {
  new GetApi().get_request("sort_by_exp");
});

(document.querySelector("#sr")as HTMLFormElement).addEventListener("click", function () {
  console.log(1);
  const temp = new GetApi();
  temp.entered_name();

});
const form = document.querySelector('.contact-form');
 
form.addEventListener('submit', function(e){
    console.log("inside function")
    e.preventDefault();
    console.log(ab.toJSONString(this));
   let xx= new CreateUserApi();
   xx.Create_data(ab.toJSONString( this ));
});

document.addEventListener("click", function(e){
  if ((e.target as HTMLButtonElement).className=="delete-button"){
   
    const temp = new GetApi();
   
    const username:any = (e.target as HTMLButtonElement).getAttribute('name');
 
    temp.delete_data(username);
    (document.getElementById("out")as HTMLFormElement).innerHTML = "";
    alert(username + " is deleted");
    temp.get_request("");
  }

  if ((e.target as HTMLButtonElement).className=="edit-button"){
    openForm();
  }
}

// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get("abc");
// console.log(myParam);

);