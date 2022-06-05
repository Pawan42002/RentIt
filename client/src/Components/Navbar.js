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
  return (
    <>
      <nav className="flex justify-between bg-white text-black py-4 ">
        <ul className="flex mx-4">
          <li className="cursor-pointer font-bold ">
            <Link to="/">RentIt</Link>
          </li>
        </ul>
        <ul className="hidden md:flex justify-start space-x-4 font-medium pr-40">
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
          <div className="flex flex-col md:hidden" onClick={handleOpen}>
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
            {isopen && (
              <ul className="flex flex-col justify-center py-3 space-y-2 bg-purple-300 px-3 py-4 rounded-2xl">
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
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
