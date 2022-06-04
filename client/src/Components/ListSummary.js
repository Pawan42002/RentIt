import React from "react";
import image from "../Assets/image-1.jpg";
import Button from "./Button";
const ListSummary = () => {
  return (
    <div className="min-w-fit bg-white rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-lg w-64 lg:w-72" src={image} alt="" />
      </a>
      <div className="flex flex-col p-3">
        <h1 className="font-bold">Terrasini, Italy</h1>
        <p className="text-sm text-slate-600">Featured in some random Magazine</p>
        <h1>$10,000 pm</h1>
      </div>
    </div>
  );
};

export default ListSummary;
