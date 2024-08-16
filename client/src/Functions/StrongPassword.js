export const StrongPassword = (password) => {
	let number = false;
	let largeCase = false,
		smallCase = false;
	for (let index = 0; index < password.length; index++) {
		let c = password[index];
		if (c >= "a" && c <= "z") {
			smallCase = true;
		}
		if (c >= "A" && c <= "Z") {
			largeCase = true;
		}
		if (c >= "0" && c <= "9") {
			number = true;
		}
	}
	return number & largeCase & smallCase;
};
