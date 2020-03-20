export class Compare {
          
        //   SortByName(first_person_name,second_person_name)
        //  {
        //    if(first_person_name.name!= null && second_person_name.name!= null  && first_person_name.name!= undefined && second_person_name.name!= undefined)
        //    {   
        //       var first_person= first_person_name.name.toString().toLowerCase();
        //       var second_person= second_person_name.name.toString().toLowerCase();
        //       return ((first_person<second_person) ? -1 : ((first_person>second_person) ? 1 : 0)); 
        //    }
        //  }
         SortByAge(first_person_age,second_person_age)
         {     
            // var  first_person_age_Years = first_person_age.DOB.toString("yyyy");
            //  console.log(first_person_age_Years); 
             
           
              return new Date(first_person_age.DOB) - (new Date(second_person_age.DOB));
        }
             // if(first_person_age.age.Years!=seconde_person_age.age.Years)
              // { 
              //   console.log(1);  
              //   if(first_person_age.age.Years > seconde_person_age.age.Years)return 1;
              //   else if(first_person_age.age.Years < seconde_person_age.age.Years) return -1;
                
              // }
              // else if(first_person_age.age.Months!=seconde_person_age.age.Months)
              // {
              //   console.log(2);  
              //   if(first_person_age.age.Months>seconde_person_age.age.Months) return 1;
              //   else if(first_person_age.age.Months<seconde_person_age.age.Months) return -1;
              // }
              // else if(first_person_age.age.Days!=seconde_person_age.age.Days)
              // {
              //   console.log(3);  
              //   if(first_person_age.age.Days>seconde_person_age.age.Days) return 1;
              //   else if(first_person_age.age.Days<seconde_person_age.age.Days) return -1;
              // }
              // else return 0;
        
        SortByExperience(first_person_exp,second_person_exp)
         {
             console.log(10);
                  if(first_person_exp.currentCompanyExp.Years!=second_person_exp.currentCompanyExp.Years)
                 {
                      console.log(1);
                     if(first_person_exp.currentCompanyExp.Years>second_person_exp.currentCompanyExp.Years)return 1;
                     else if(first_person_exp.currentCompanyExp.Years<second_person_exp.currentCompanyExp.Years)return -1;
                 }
                 
            else if(first_person_exp.currentCompanyExp.Months!=second_person_exp.currentCompanyExp.Months)
            {
                if(first_person_exp.currentCompanyExp.Months>second_person_exp.currentCompanyExp.Months)return 1;
                else if(first_person_exp.currentCompanyExp.Months<second_person_exp.currentCompanyExp.Months)return -1;
            }


            else return 0;
        }

}