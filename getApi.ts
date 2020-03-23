// import { UserData } from "./userData";
import { Display1 } from "./Display";
import { Compare } from "./Compare";
import { UserData } from "./userData";



export class GetUserApi {
	array: any = [];
	getRequest(compare: string) {
		fetch("http://localhost:5000/api/user")
			.then(Response => {
				return Response.json();
			})
			.then(data => {
				data.forEach((userObject: any) => {
					this.array.push(new UserData(userObject));
				});
				console.log('Array', this.array);
				switch (compare) {
					case "sort_by_name":
						this.array.sort((FirstPerson: any, SecondPerson: any) =>
							FirstPerson.FirstName > SecondPerson.FirstName ? 1 : -1
						);
						console.log(this.array.sort(new Compare().SortByName));
						console.log("aggfdgf" + data[0].DOB);

						break;
					case "sort_by_age":
						console.log(this.array.sort(new Compare().SortByAge));
						this.array.sort(new Compare().SortByAge);
						break;
					case "sort_by_exp":
						this.array.sort(new Compare().SortByExperience);
						break;
					default:
						break;
				}

				(document.getElementById("out") as HTMLFormElement).innerHTML = "";
				for (let i = 0; i < this.array.length; i++) {
					//let res = new UserData(this.array[i]);
					console.log(this.array);
					let obj = new Display1();
					obj.showUserData(this.array[i]);
				}
			})
			.catch(err => console.log(err));
	}
	getUserByName(userName: string) {
		return fetch("http://localhost:5000/api/user/" + userName)
			.then(res => res.json())
			.then(data => {
				return data;
			})
			.catch(err => console.error(err));
	}

	enteredName() {
		fetch(
			"http://localhost:5000/api/user?search=" +
				(document.getElementById("fname") as HTMLInputElement).value
		)
			.then(Response => Response.json())
			.then(data => {
				console.log(data);
				(document.getElementById("out") as HTMLFormElement).innerHTML = "";
				for (let i = 0; i < data.length; i++) {
					let res = new UserData(data[i]);
					let obj = new Display1();
					obj.showUserData(res);
				}
			})
			.catch(err => console.log(err));
	}
	deleteData(user: string) {
		fetch("http://localhost:5000/api/user/" + user + "/remove", {
			method: "DELETE"
		});
	}
}
