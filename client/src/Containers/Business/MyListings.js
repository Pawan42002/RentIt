import axios from "axios";
import React, { useEffect, useState } from "react";
import { query } from "../../middleware/query";
import ListSummary from "../../Components/ListSummary";
import Spinner from "../../Components/Spinner";
const MyListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const getListings = async () => {
    const res = await axios.get("/api/listings/getListings");
    setListings(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getListings();
  }, []);
  if (loading) {
    return (
      <div className="flex flex-col w-screen m-auto">
        <Spinner />;
      </div>
    );
  }
  return (
    <div>
      {listings.length === 0 && (
        <>
          <div>No listings added</div>
        </>
      )}
      {listings.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-items-center gap-x-4 gap-y-4 max-w-fit mt-5">
            {listings.map((listing, idx) => {
              return <ListSummary key={idx} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default MyListings;
