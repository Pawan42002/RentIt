import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export const query = async (requestType, endpoint, props) => {
  // const token = localStorage.getItem("token"); // just for adding listings
  let link = "/" + endpoint;
  let response = null;

  if (requestType == "GET") {
    response = await axios.get(link, props);
  } else if (requestType == "POST") {
    response = await axios.post(link, props);
  }
  return response;
};
