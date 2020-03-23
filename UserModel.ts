export class UserModel {
	salutation: string = "";
	firstName: string = "";
	middleName: string | null = null;
	lastName: string = "";
	departmentName: string = "";
	designationName: string = "";
	email: string = "";
	altEmail: string| null = null;
	userName: string = "";
	password: string = "";
	dob: string = "";
	gender: string = "";
	doj: string = "";

	phones: phones[];
	addresses: addresses[];
	constructor(obj: any | null = null) {
		this.addresses = new Array<addresses>();
		this.phones = new Array<phones>();
		if(obj){
			for(let property in obj){
				if(typeof obj[property] == 'string'){
					this[property] = obj[property];
				}
			}
			for(const phoneObject of obj.phones){
				this.phones.push(new phones(phoneObject));
			}
			for(const addressObject of obj.addresses){
				this.addresses.push(new addresses(addressObject));
			}
		}
	}
}
export class phones {
	contactNumberType: string;
	number: string;
	countryCode: string;
	areaCode: string;
	constructor(phoneObject: phones) {
		this.contactNumberType = phoneObject.contactNumberType;
		this.number = phoneObject.number;
		this.countryCode = phoneObject.countryCode;
		this.areaCode = phoneObject.areaCode;
	}
}
export class addresses {
	addressType: string;
	addressLine: string;
	city: string;
	state: string;
	country: string;
	pin: string;
	constructor(addressObject: addresses) {
		this.addressType = addressObject.addressType;
		this.addressLine = addressObject.addressLine;
		this.city = addressObject.city;
		this.state = addressObject.state;
		this.country = addressObject.country;
		this.pin = addressObject.pin;
	}
}
