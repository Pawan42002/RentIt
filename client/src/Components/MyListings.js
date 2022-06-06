import React from "react";
import ListSummary from "./ListSummary";
const MyListings = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-items-center gap-x-4 gap-y-4 max-w-fit mt-5">
        <ListSummary />
        <ListSummary />
        <ListSummary />
        <ListSummary />
      </div>
    </div>
  );
};

export default MyListings;
