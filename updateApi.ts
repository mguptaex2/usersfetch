import { UserModel } from "./UserModel";

export class UpdateUserApi {
	updateUserData(data: UserModel) {
		//console.log(data);
		//var uname = (document.getElementById("username")as HTMLInputElement).value;

		fetch("http://localhost:5000/api/user/" + data.userName + "/update", {
			method: "PUT",
			headers: new Headers({ "content-type": "application/json" }),
			body: JSON.stringify(data)
		});
	}
}
