import React from "react";
import image from "../Assets/logo-social.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="flex justify-between bg-white text-black py-4">
        <ul className="flex mx-4">
          <li className="cursor-pointer font-bold ">
            <Link to="/">RentIt</Link>
          </li>
        </ul>
        <ul className="hidden md:flex justify-center space-x-4 font-medium ">
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
          <li className=" cursor-pointer hover:text-purple-500">Profile</li>
        </ul>
        <ul className="flex justify-end px-2 font-medium space-x-2 ">
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
