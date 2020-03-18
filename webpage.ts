import { UserData } from "./userData";
import { Display1 } from "./Display";
import { Compare } from "./Compare";

export class GetApi {
  get_request(num: number = -1) {
    fetch("https://localhost:5001/api/assignment").then
      ((Response) => { return Response.json(); }).then((data) => {
        console.log(data);
        switch (num) {
          case 0: data.sort(new Compare().SortByName);
            break;
          case 1: data.sort(new Compare().SortByAge);
            break;
          case 2: data.sort(new Compare().SortByExperience);
            break;
          default:
              break;
        }

        document.getElementById("out").innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          let res = new UserData(data[i]);
          console.log(res);
          let obj = new Display1();
          obj.showUserData(res);
        }

      }).catch(err => console.log(err));
  }



  entered_name() {
    fetch("https://localhost:5001/api/assignment?search=" + (document.getElementById("fname") as HTMLInputElement).value)
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
      document.getElementById("out").innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        let res = new UserData(data[i]);
        let obj = new Display1();
        obj.showUserData(res);
      }

    }).catch(err => console.log(err));
  }
  delete_data(user: string) {
    fetch("https://localhost:5001/api/user/" + user + "/remove", {
      method: "DELETE"
    });
  }
}



document.querySelector("#byname").addEventListener("click", function () {
  new GetApi().get_request(0);
});
document.querySelector("#byage").addEventListener("click", function () {
  new GetApi().get_request(1);
});
document.querySelector("#byexperience").addEventListener("click", function () {
  new GetApi().get_request(2);
});
document.querySelector("#sr").addEventListener("click", function () {
  console.log(1);
  const temp = new GetApi();
  temp.entered_name();

});
document.addEventListener("click", function(e){
  if ((e.target as HTMLButtonElement).className=="delete-button"){
    const temp = new GetApi();
    const username = (e.target as HTMLButtonElement).getAttribute('name');
    temp.delete_data(username);
    alert(username + " is deleted!")
    temp.get_request();
  }
})

// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get("abc");
// console.log(myParam);

