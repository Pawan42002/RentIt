import axios from "axios";
import React, { useEffect, useState } from "react";
import { query } from "../middleware/query";
import ListSummary from "./ListSummary";
const MyListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const getListings = async () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3005/api/listings/getListings", {
        headers: {
          "auth-token": token,
        },
      })
      .then((res) => {
        setListings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
          {listings.map((listing) => {
            return <div>Hey</div>;
          })}
        </>
      )}
    </div>
  );
};

export default MyListings;
