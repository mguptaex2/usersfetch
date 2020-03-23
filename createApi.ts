import { UserModel } from "./UserModel";

export class CreateUserApi {
	createUserData(data: UserModel) {
		console.log(data);
		fetch("http://localhost:5000/api/user/add", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		}).catch(Error => console.log(Error));
	}
}
