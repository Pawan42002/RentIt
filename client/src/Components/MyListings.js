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
        console.log(listings);
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
