

export class UpdateApi 
{
      update_data(data)
      {
        console.log(data);
        var uname = (document.getElementById("uname")as HTMLInputElement).value;
       
     fetch("http://localhost:5000/api/user/"+((document.getElementById("uname")as HTMLInputElement).value) + "/update", {
         method: "PUT",
         headers: new Headers({'content-type': 'application/json'}),
         body: data,
         
     })
     
     } 
    }


