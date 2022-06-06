import React from "react";
import ListSummary from "../Components/ListSummary";

function Search() {
  return (
    <div className="dark:bg-gray-800 dark:text-white bg-gray-100 ">
      <div className="max-w-3xl mx-auto p-5 ">   
        <button
          type="text"
          className="flex mx-auto items-center w-full text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-700 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700 focus:ring-purple-700"        
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-none text-slate-300 dark:text-slate-400"
            aria-hidden="true"
          >
            <path d="m19 19-3.5-3.5"></path>
            <circle cx="11" cy="11" r="6"></circle>
          </svg>
          <input
            className="outline-none bg-transparent w-full"
            type="text"
            placeholder="Enter a location.."
          ></input>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-items-center gap-x-4 gap-y-4 max-w-fit mt-5">
            <ListSummary />
            <ListSummary />
            <ListSummary />
            <ListSummary />
        </div>
      </div>
    </div>
  );
}

export default Search;

