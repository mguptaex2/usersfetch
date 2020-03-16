import { UserData } from "./userData";
import { Display1 } from "./Display";
import { Compare } from "./Compare";

export class GetApi 
{
      get_request(num : number)
      {
     fetch("https://localhost:5001/api/assignment").then
      ((Response)=>{return Response.json();}).then((data)=>{
        console.log(data);
        switch(num)
        {
        case 0 : data.sort(new Compare().SortByName);
        break;
        case 1 : data.sort(new Compare().SortByAge);
        break ;
        case 2 : data.sort(new Compare().SortByExperience);
        break ;
        }
         
         for(let i=0;i<data.length;i++)
         {
          let res =new UserData(data[i]);
          console.log(res);
          let obj = new Display1();
          obj.showUserData(res);   
         }
        
        }).catch(err =>console.log(err));
     } 
     
     
     
     entered_name()
     {
       console.log(document.getElementById("fname").value);
        return fetch("https://localhost:5001/api/assignment?search="+document.getElementById("fname").value).then(Response=>Response.json()).then(data=>{
         console.log(data[0]);
         let res =new UserData(data[0]);
         console.log(res);
         let obj = new Display1();
         obj.showUserData(res);  


       }).catch(err=>console.log(err));
     }
}





















document.querySelector("#byname").addEventListener("click",function(){
  new GetApi().get_request(0);
});
document.querySelector("#byage").addEventListener("click",function(){
  new GetApi().get_request(1);
});
document.querySelector("#byexperience").addEventListener("click",function(){
  new GetApi().get_request(2);
});
document.querySelector("#sr").addEventListener("click",function(){console.log(1);
  new GetApi().entered_name();
});

