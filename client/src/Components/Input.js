import React from "react";

function Input({ label, placeholder, value, setValue, type = "text" }) {
	return (
		<div className="w-full">
			<label className="block mb-2 text-sm font-medium text-gray-700">
				{label}
			</label>
			<input
				className="text-md md:text-lg placeholder-gray-500 pl-4 pr-4 rounded-md border-2 border-gray-300 w-full py-2 focus:outline-none focus:border-purple-700 bg-gray-50"
				placeholder={placeholder}
				type={type} // This allows the type to be set dynamically
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</div>
	);
}

export default Input;
