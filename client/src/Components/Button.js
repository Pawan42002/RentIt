import React from "react";

const Button = (props) => {
  const { name, onClick } = props;
  return (
    <button
      type="button"
      className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 text-lg rounded-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      onClick={() => {
        onClick();
      }}
    >
      {name}
    </button>
  );
};

export default Button;
