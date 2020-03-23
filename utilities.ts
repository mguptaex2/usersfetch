export function openForm() {
	document.getElementsByClassName("RegisterForm")[0].classList.add("active");
}

export function closeForm() {
	document.getElementsByClassName("RegisterForm")[0].classList.remove("active");
}
export function disableEditing() {
	(<HTMLInputElement>document.getElementById("password")).disabled = true;
	(<HTMLInputElement>document.getElementById("userName")).disabled = true;
	(<HTMLInputElement>document.getElementById("confirmpass")).disabled = true;
}