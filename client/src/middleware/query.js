import axios from "axios";
import React from "react";

export const query = async (requestType, endpoint, props, headers = false) => {
  const token = localStorage.getItem("token"); // just for adding listings
  let link = "http://localhost:3005/" + endpoint;
  let response = null;
  if (requestType == "GET") {
    if (headers) {
      response = await axios.get(link, props, {
        headers: {
          "auth-token": token,
        },
      });
    } else {
      response = await axios.get(link, props);
    }
  } else if (requestType == "POST") {
    if (headers) {
      response = await axios.post(link, props, {
        headers: {
          "auth-token": token,
        },
      });
    } else {
      response = await axios.post(link, props);
    }
  }
  return response;
};
