import { UserData } from "./userData";
import { Display1 } from "./Display";

console.log("askhfg");
export class GetApi 
{
      get_request()
      {
       fetch("https://localhost:5001/api/user/all").then
      ((Response)=>{return Response.json();}).then((data)=>{
         console.log(data);
         for(let i=0;i<data.length;i++)
         {
          let res =new UserData(data[i]); 
         
          console.log(res);
          
          let obj = new Display1();
          obj.showUserData(res);   
         }
        }).catch(err =>console.log(err));
     } 
}
document.querySelector("button").addEventListener("click",function(){
  new GetApi().get_request();
});