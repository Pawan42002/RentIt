import React, { useState } from "react";
import image from "../Assets/logo-social.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const handleOpen = () => {
    if (isopen) {
      setIsopen(false);
    } else {
      setIsopen(true);
    }
  };
  let openMenuIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
  let closeMenuIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <div className="max-w-full shadow-md">
      <nav className="flex justify-between bg-white text-black py-4 ">
        <ul className="flex mx-4 ">
          <li className="cursor-pointer font-bold ">
            <Link to="/">RentIt</Link>
          </li>
        </ul>
        <ul className="hidden md:flex justify-start space-x-4 font-medium pr-[4rem]">
          <li className="cursor-pointer hover:text-purple-500">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-purple-500 ">
            {" "}
            <Link to="/favourites">Favourites</Link>
          </li>
          <li className="cursor-pointer hover:text-purple-500">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className=" cursor-pointer hover:text-purple-500">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <ul className="flex justify-end px-2 font-medium space-x-2 ">
          <div className="flex flex-col md:hidden " onClick={handleOpen}>
            {!isopen ? openMenuIcon : closeMenuIcon}
            {isopen && (
              <ul className="absolute right-0 top-12 flex flex-col justify-center space-y-2 bg-white p-3 rounded-md w-36 mx-2 border border-gray-300 shadow-md">
                <li className="cursor-pointer border-b p-1 w-full">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer border-b p-1 w-full">
                  {" "}
                  <Link to="/favourites">Favourites</Link>
                </li>
                <li className="cursor-pointer border-b p-1 w-full">
                  {" "}
                  <Link to="/about">About</Link>
                </li>
                <li className=" cursor-pointer p-1 w-full">
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
