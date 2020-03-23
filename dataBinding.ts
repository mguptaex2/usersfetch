import * as models from "./UserModel";

export function createObjectFromForm(formElement: HTMLFormElement) {
	let modelObject = new models.UserModel();
	modelObject.salutation = (formElement[
		"salutation"
	] as HTMLInputElement).value;
	modelObject.firstName = (formElement["firstName"] as HTMLInputElement).value;
	modelObject.middleName =
		(formElement["middleName"] as HTMLInputElement).value || null;
	modelObject.lastName = (formElement["lastName"] as HTMLInputElement).value;
	modelObject.departmentName = (formElement[
		"departmentName"
	] as HTMLInputElement).value;
	modelObject.designationName = (formElement[
		"designationName"
	] as HTMLInputElement).value;
	modelObject.email = (formElement["email"] as HTMLInputElement).value;
	modelObject.altEmail =
		(formElement["altEmail"] as HTMLInputElement).value || null;
	modelObject.userName = (formElement["userName"] as HTMLInputElement).value;
	modelObject.password = (formElement["password"] as HTMLInputElement).value;
	modelObject.dob = (formElement["dob"] as HTMLInputElement).value;
	modelObject.gender = (formElement["gender"] as HTMLInputElement).value;
	modelObject.doj = (formElement["doj"] as HTMLInputElement).value;

	for (let i = 1; i <= 3; i++) {
		const container = formElement.querySelector(
			"#phones" + i
		) as HTMLDivElement;
		let contactNumberType = (container.querySelector(
			".contactNumberType"
		) as HTMLInputElement).value;
		let number = (container.querySelector(".number") as HTMLInputElement)
			.value;
		let countryCode = (container.querySelector(
			".countryCode"
		) as HTMLInputElement).value;
		let areaCode = (container.querySelector(".areaCode") as HTMLInputElement)
			.value;
		if (number)
			modelObject.phones.push(
				new models.phones({
					contactNumberType,
					number,
					countryCode,
					areaCode
				})
			);
	}

	for (let i = 1; i <= 2; i++) {
		const container = formElement.querySelector(
			"#addresses" + i
		) as HTMLDivElement;
		let addressType = (container.querySelector(
			".addressType"
		) as HTMLInputElement).value;
		let addressLine = (container.querySelector(
			".addressLine"
		) as HTMLInputElement).value;
		let city = (container.querySelector(".city") as HTMLInputElement).value;
		let state = (container.querySelector(".state") as HTMLInputElement).value;
		let country = (container.querySelector(".country") as HTMLInputElement)
			.value;
		let pin = (container.querySelector(".pin") as HTMLInputElement).value;
		if (addressLine)
			modelObject.addresses.push(
				new models.addresses({
					addressType,
					addressLine,
					city,
					state,
					country,
					pin
				})
			);
	}

	return modelObject;
}

export function populateFormFromObject(
	data: models.UserModel,
	form: HTMLFormElement
) {
	var key;
	for (var prop in data) {
		var value = data[prop];
		if (Array.isArray(value)) {
			var i = 0;
			value.forEach(function(element) {
				++i;
				var className = prop + i;
				var container = <HTMLDivElement>form.querySelector("#" + className);
				for (var keyname in element) {
					key = keyname;
					var val = element[key];
					(<HTMLInputElement>container.querySelector("." + key)).value = val;
				}
			});
		} else if (typeof value == "object") {
			for (var keyname in value) {
				key = keyname;
				var val = value[key];
				(<HTMLInputElement>form[key]).value = val;
			}
		} else {
			key = prop;
			(<HTMLInputElement>form[key]).value = value;
		}
	}
}
