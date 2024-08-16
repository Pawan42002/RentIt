import React from "react";

const WeakPassword = () => {
	return (
		<>
			<div className="text-red-500">
				<div>Password is weak</div>
				<div>A strong password contains a lower case english alphabet</div>
				<div>A strong password contains a upper case english alphabet</div>
				<div>A strong password contains a Number</div>
			</div>
		</>
	);
};

export default WeakPassword;
