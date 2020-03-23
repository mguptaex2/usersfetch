import { UserData } from "./userData";

export class Compare {
        SortByName(User_1: UserData, User_2: UserData){
            return User_1.getName().localeCompare(User_2.getName());
        }
        SortByAge(User_1: UserData,User_2: UserData)
        {
            return User_1.getDate("DOB") - User_2.getDate("DOB");
        }

        SortByExperience(User_1: UserData,User_2: UserData)
        {
            return User_1.getDate("DOJ") - User_2.getDate("DOJ");
        }
}