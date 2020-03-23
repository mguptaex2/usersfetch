export function validateForm() {
	var usernames = document.getElementById("userName").value;
	if (usernames == "") {
		document.getElementById("usernames").innerHTML = "Fill User Name";
		return false;
	}

	if (usernames.length < 5 || usernames.length > 20) {
		document.getElementById("usernames").innerHTML =
			"Username Should Be Between 5 and 20";
		return false;
	}
	// var Firstname = document.getElementById('FirstName').value;
	// if(Firstname == "")
	// {
	//     document.getElementById('FirstName').innerHTML = "Fill First Name";
	// }
	var passwords = document.getElementById("password").value;
	if (passwords == "") {
		document.getElementById("passwords").innerHTML = "Fill Password";
		return false;
	}

	if (passwords.length < 5 || passwords.length > 20) {
		document.getElementById("passwords").innerHTML =
			"Password Should Be Between 5 and 20";
		return false;
	}

	var confirmpasss = document.getElementById("confirmpass").value;
	if (confirmpasss == "") {
		document.getElementById("confirmpasss").innerHTML = "Fill Confirm Password";
		return false;
	}

	if (confirmpasss.length < 5 || confirmpasss.length > 20) {
		document.getElementById("confirmpasss").innerHTML =
			"Confirm Password Should Be Between 5 and 20";
		return false;
	}
	if (passwords != confirmpasss) {
		document.getElementById("confirmpasss").innerHTML = "Passwords Dont Match";
		return false;
	}
	var departments = document.getElementById("departmentName").value;
	if (departments == "") {
		document.getElementById("departments").innerHTML = "Fill Department";
		return false;
	}
	var designations = document.getElementById("designationName").value;
	if (designations == "") {
		document.getElementById("designations").innerHTML = "Fill Designation";
		return false;
	}
	var emails = document.getElementById("email").value;
	if (emails == "") {
		document.getElementById("emails").innerHTML = "Fill Email";
		return false;
	}
	if (emails.indexOf("@") <= 0) {
		document.getElementById("emails").innerHTML = "@ Is At Invalid position";
		return false;
	}
	if (
		emails.charAt(emails.length - 4) != "." &&
		emails.charAt(emails.length - 3) != "."
	) {
		document.getElementById("emails").innerHTML = ". Is At Invalid position";
		return false;
	}
	var altemails = document.getElementById("altEmail").value;
	if (altemails == "") {
		document.getElementById("altemails").innerHTML = "Fill Alternate Email";
		return false;
	}
	if (altemails.indexOf("@") <= 0) {
		document.getElementById("altemails").innerHTML = "@ Is At Invalid position";
		return false;
	}
	if (
		altemails.charAt(altemails.length - 4) != "." &&
		altemails.charAt(altemails.length - 3) != "."
	) {
		document.getElementById("altemails").innerHTML = ". Is At Invalid position";
		return false;
	}
}
