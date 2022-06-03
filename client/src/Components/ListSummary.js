import React from "react";
import image from "../Assets/image-1.jpg";
import Button from "./Button";
const ListSummary = () => {
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src={image} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            City,Country
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Special features
        </p>
        <h6 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          Rent per night
        </h6>
        <Button name="Read More" />
      </div>
    </div>
  );
};

export default ListSummary;
