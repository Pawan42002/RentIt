const generateStrongPassword = (length = 16) => {
	const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowercase = "abcdefghijklmnopqrstuvwxyz";
	const numbers = "0123456789";
	const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

	const allChars = uppercase + lowercase + numbers + specialChars;

	let password = "";

	// Ensure the password has at least one character from each character set
	password += uppercase[Math.floor(Math.random() * uppercase.length)];
	password += lowercase[Math.floor(Math.random() * lowercase.length)];
	password += numbers[Math.floor(Math.random() * numbers.length)];
	password += specialChars[Math.floor(Math.random() * specialChars.length)];

	// Fill the remaining length of the password with random characters
	for (let i = password.length; i < length; i++) {
		password += allChars[Math.floor(Math.random() * allChars.length)];
	}

	// Shuffle the password to avoid predictable patterns
	password = password
		.split("")
		.sort(() => 0.5 - Math.random())
		.join("");

	return password;
};

module.exports = generateStrongPassword;
