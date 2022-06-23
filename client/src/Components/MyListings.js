import axios from "axios";
import React, { useEffect, useState } from "react";
import { query } from "../middleware/query";
import ListSummary from "./ListSummary";
const MyListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const getListings = async () => {
    const res = await axios.get("/api/listings/getListings");
    console.log(res);
    setListings(res);
    setLoading(false);
  };
  useEffect(() => {
    getListings();
  }, []);
  if (loading) {
    return <>Hi</>;
  }
  return (
    <div>
      {listings.length === 0 && (
        <>
          <div>HEY THERE</div>
        </>
      )}
      {listings.length > 0 && (
        <>
          {listings.map((listing) => {
            return <div>Hey</div>;
          })}
        </>
      )}
    </div>
  );
};

export default MyListings;
