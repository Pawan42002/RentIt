import React from "react";

function Input({ label, placeholder, value, setValue }) {
  return (
    <div className="w-full">
      {/* <labels */}
      <input
        className="text-md md:text-lg placeholder-gray-500 pl-4 pr-4 rounded-md border-2 border-gray-300 w-full py-2 focus:outline-none focus:border-purple-700 bg-gray-50"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
