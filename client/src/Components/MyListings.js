import axios from "axios";
import React, { useEffect, useState } from "react";
import { query } from "../middleware/query";
import ListSummary from "./ListSummary";
const MyListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const getListings = async () => {
    const res = await axios.get("/api/listings/getListings");
    console.log(res.data);
    setListings(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getListings();
  }, []);

  return (
    <div>
      {listings.length === 0 && (
        <>
          <div>HEY THERE</div>
        </>
      )}
      {listings.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-items-center gap-x-4 gap-y-4 max-w-fit mt-5">
            {listings.map((listing) => {
              return <ListSummary />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default MyListings;
