import appContext from "./appContext";
import React, { useState, useEffect } from "react";
import { query } from "../middleware/query";
import Spinner from "../Components/Spinner";
function AppState(props) {
	const [userData, setUserData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			query("GET", "getUserData")
				.then((res) => {
					if (res.data == "no token found") setUserData(null);
					else setUserData(res.data);
					setLoading(false);
				})
				.catch((e) => console.log(e));
		};
		getData();
	}, []);

	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<appContext.Provider value={{ userData }}>
				{props.children}
			</appContext.Provider>
		</>
	);
}

export default AppState;
