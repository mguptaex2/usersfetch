export class Compare {
          
        SortByAge(data_object_1,data_object_2)
         { 
            let x=data_object_1.DOB.split("-");
            let y=data_object_2.DOB.split("-");
            if(x[2]!==y[2])
            {
              if(x[2]-y[2]>0)
              return 1;
              else
              return -1;
            }else if(x[1]!==y[1])
            {
              if(x[1]-y[1]>0)
              return 1;
              else return -1;
            }
            else if(x[0]!==y[0])
            {
              if(x[0]-y[0]>0)
              return 1;
              else return -1;
            }
            else return 0;
            }

          
            SortByExp(data_object_1,data_object_2)
            { 
              let d1= new Date(data_object_1.DOJ);
               let d2=new Date(data_object_2.DOJ);
               console.log(d1.getTime());
               if(d1.getTime()>d2.getTime())
               return 1;
               else if(d1.getTime()<d2.getTime())
               return -1;
               else return 0;
               }
        
}