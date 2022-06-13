import axios from "axios";
import React from "react";

export const query = async (requestType, endpoint, props) => {
  let link = "http://localhost:3005/" + endpoint;
  let response = null;
  const token = "";
  if (requestType == "GET") {
    response = await axios.get(link, props);
  } else if (requestType == "POST") {
    response = await axios.post(link, props, {
      headers: {
        "auth-token": token,
      },
    });
  }
  return response;
};
