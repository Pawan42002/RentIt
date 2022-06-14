import axios from "axios";
import React from "react";

export const query = async (requestType, endpoint, props, headers = false) => {
	let link = "http://localhost:3005/" + endpoint;
	let response = null;
	const token = "";
	if (requestType == "GET") {
		response = await axios.get(link, props);
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
