export class Compare {
          SortByName(a,b)
         {
           if(a.name!= null && b.name!= null  && a.name!= undefined && b.name!= undefined)
           {   
              var f1= a.name.toString().toLowerCase();
              var f2= b.name.toString().toLowerCase();
              return ((f1<f2) ? -1 : ((f1>f2) ? 1 : 0)); 
           }
         }
         SortByAge(a,b)
         {       
             
              if(a.age.Years!=b.age.Years)
              { 
                console.log(1);  
                if(a.age.Years > b.age.Years)return 1;
                else if(a.age.Years < b.age.Years) return -1;
                
              }
              else if(a.age.Months!=b.age.Months)
              {
                console.log(2);  
                if(a.age.Months>b.age.Months) return 1;
                else if(a.age.Months<b.age.Months) return -1;
              }
              else if(a.age.Days!=b.age.Days)
              {
                console.log(3);  
                if(a.age.Days>b.age.Days) return 1;
                else if(a.age.Days<b.age.Days) return -1;
              }
              else return 0;

                 
            //  else if(a.age.months > b.age.months)return 1;
            //  else if(a.age.months < b.age.months) return -1;
            //  else if(a.age.days < b.age.days) return 1;
            //  else if(a.age.days > b.age.days) return -1;
            
             
           // return ((a.age.months < b.age.months) ? -1 : ((a.age.months>b.age.months) ? 1 : 0));
        }
        SortByExperience(a,b)
         {
             console.log(10);
                  if(a.currentCompanyExp.Years!=b.currentCompanyExp.Years)
                 {
                      console.log(1);
                     if(a.currentCompanyExp.Years>b.currentCompanyExp.Years)return 1;
                     else if(a.currentCompanyExp.Years<b.currentCompanyExp.Years)return -1;
                 }
                 
            else if(a.currentCompanyExp.Months!=b.currentCompanyExp.Months)
            {
                if(a.currentCompanyExp.Months>b.currentCompanyExp.Months)return 1;
                else if(a.currentCompanyExp.Months<b.currentCompanyExp.Months)return -1;
            }


            else return 0;
        }

}