import { CreateUserApi } from "./createApi";
import { GetUserApi } from "./getApi";
import * as util from "./utilities";
import { UpdateUserApi } from "./updateApi";
import { populateFormFromObject, createObjectFromForm } from "./dataBinding";
import { UserModel } from "./UserModel";
import { validateForm } from "./validation";

let form_mode: "create" | "edit";

(document.querySelector("#byname") as HTMLFormElement).addEventListener(
	"click",
	function() {
		new GetUserApi().getRequest("sort_by_name");
	}
);
(document.querySelector("#byage") as HTMLFormElement).addEventListener(
	"click",
	function() {
		new GetUserApi().getRequest("sort_by_age");
	}
);
(document.querySelector("#byexperience") as HTMLFormElement).addEventListener(
	"click",
	function() {
		new GetUserApi().getRequest("sort_by_exp");
	}
);
(document.querySelector("#sr") as HTMLButtonElement).addEventListener(
	"click",
	function() {
		console.log(1);
		const temp = new GetUserApi();
		temp.enteredName();
	}
);
(document.querySelector(
	"#register-button"
) as HTMLButtonElement).addEventListener("click", function() {
	util.openForm();
	form_mode = "create";
});

document.querySelectorAll(".form-close-button").forEach(button =>
	button.addEventListener("click", ev => {
		util.closeForm();
	})
);

(document.querySelector(".contact-form") as HTMLFormElement).addEventListener(
	"submit",
	function(e) {
		e.preventDefault();
		var validationResult = validateForm();
		if (!validationResult) {
			return;
		}
		if (form_mode == "create") {
			new CreateUserApi().createUserData(createObjectFromForm(this));
		} else if (form_mode == "edit") {
			new UpdateUserApi().updateUserData(createObjectFromForm(this));
		}
		util.closeForm();
	}
);

document.addEventListener("click", function(e) {
	if ((e.target as HTMLButtonElement).className == "delete-button") {
		const temp = new GetUserApi();

		const username: any = (e.target as HTMLButtonElement).getAttribute("name");

		temp.deleteData(username);
		(document.getElementById("out") as HTMLFormElement).innerHTML = "";
		alert(username + " is deleted");
		temp.getRequest("");
	}
	if ((e.target as HTMLButtonElement).className == "edit-button") {
		util.openForm();
		const username: string = (e.target as HTMLButtonElement).dataset[
			"username"
		] as string;
		var userObject: UserModel;
		new GetUserApi().getUserByName(username).then(res => {
			userObject = (res as unknown) as UserModel;
			const form = document.forms["contact-form"] as HTMLFormElement;
			populateFormFromObject(userObject, form);
			form_mode = "edit";
			util.disableEditing();
		});
	}
});
