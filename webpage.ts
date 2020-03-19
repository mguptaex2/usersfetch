import { UserData } from "./userData";
import { Display1 } from "./Display";
import { Compare } from "./Compare";

export class GetApi {
  get_request(compare:string) {
    fetch("http://localhost:5000/api/assignment").then
      ((Response) => { return Response.json(); }).then((data) => {
        console.log(data);
        switch (compare) {
          case "sort_by_name": data.sort(new Compare().SortByName);
            break;
          case "sort_by_age": data.sort(new Compare().SortByAge);
            break;
          case "sort_by_exp": data.sort(new Compare().SortByExperience);
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
  // get_request(num: number = -1) {
  //   fetch("http://localhost:5000/api/assignment").then
  //     ((Response) => { return Response.json(); }).then((data) => {
  //       console.log(data);
  //       switch (num) {
  //         case 0: data.sort(new Compare().SortByName);
  //           break;
  //         case 1: data.sort(new Compare().SortByAge);
  //           break;
  //         case 2: data.sort(new Compare().SortByExperience);
  //           break;
  //         default:
  //             break;
  //       }

  //       document.getElementById("out").innerHTML = "";
  //       for (let i = 0; i < data.length; i++) {
  //         let res = new UserData(data[i]);
  //         console.log(res);
  //         let obj = new Display1();
  //         obj.showUserData(res);
  //       }

  //     }).catch(err => console.log(err));
  // }


  entered_name() {
    fetch("http://localhost:5000/api/assignment?search=" + (document.getElementById("fname") as HTMLInputElement).value)
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

    fetch("http://localhost:5000/api/user/" + user + "/remove", {
      method: "DELETE"
    });
  }
}



document.querySelector("#byname").addEventListener("click", function () {
  new GetApi().get_request("sort_by_name");
});
document.querySelector("#byage").addEventListener("click", function () {
  new GetApi().get_request("sort_by_age");
});
document.querySelector("#byexperience").addEventListener("click", function () {
  new GetApi().get_request("sort_by_exp");
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
    document.getElementById("out").innerHTML = "";
    alert(username + " is deleted")
    temp.get_request("");
  }
})
// function deleteHandler () {
//     console.log(this);
//     console.log(this.getAttribute('name'));
//     // 
//   };
// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get("abc");
// console.log(myParam);

