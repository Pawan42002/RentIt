import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export const query = async (requestType, endpoint, props, headers = false) => {
  const token = localStorage.getItem("token"); // just for adding listings
  let link = "/" + endpoint;
  let response = null;
  if (requestType == "GET") {
    if (headers) {
      response = await axios.get(link);
    } else {
      response = await axios.get(link);
    }
  } else if (requestType == "POST") {
    if (headers) {
      response = await axios.post(link, props);
    } else {
      response = await axios.post(link, props);
    }
  }
  return response;
};
