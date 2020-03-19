export class getApiForm
{
    data:any;
    get_data_to_form()
    {
        console.log("efb");
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("abc");
        console.log(myParam);
        fetch("http://localhost:5000/api/user/"+myParam)
      
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.data = data;
        (document.getElementById("uname")as HTMLInputElement).value = data.userName;
        (document.getElementById("fname")as HTMLInputElement).value = data.firstName;
        (document.getElementById("mname")as HTMLInputElement).value = data.middleName;
        (document.getElementById("lname")as HTMLInputElement).value = data.lastName;
        (document.getElementById("contactnumber")as HTMLInputElement).value = data.phones[0].number;
        (document.getElementById("contacttype")as HTMLInputElement).value = data.phones[0].contactNumberType;
        (document.getElementById("areacode")as HTMLInputElement).value = data.phones[0].areaCode;
        (document.getElementById("address")as HTMLInputElement).value = data.addresses[0].addressLine;
        (document.getElementById("addresstype")as HTMLInputElement).value = data.addresses[0].addressType;
        (document.getElementById("city")as HTMLInputElement).value = data.addresses[0].city;
        (document.getElementById("state")as HTMLInputElement).value = data.addresses[0].state;
        (document.getElementById("country")as HTMLInputElement).value = data.addresses[0].country;
        (document.getElementById("pincode")as HTMLInputElement).value = data.addresses[0].pin;
        (document.getElementById("address1")as HTMLInputElement).value = data.addresses[1].addressLine;
        (document.getElementById("addresstype1")as HTMLInputElement).value = data.addresses[1].addressType;
        (document.getElementById("city1")as HTMLInputElement).value = data.addresses[1].city;
        (document.getElementById("state1")as HTMLInputElement).value = data.addresses[1].state;
        (document.getElementById("country1")as HTMLInputElement).value = data.addresses[1].country;
        (document.getElementById("pincode1")as HTMLInputElement).value = data.addresses[1].pin;
          
        
      
        });
    }
     getdata_to_dropdown_country()
     {
       fetch("http://localhost:5000/api/dropdown/country")
      
       .then((response) => {
         return response.json();
      })
      .then((data) => {
         console.log(data);
        
      });
     }
}