import appContext from "./appContext";
import React, {useState, useEffect} from "react";
import { query } from "../middleware/query";
function AppState(props) {
	const [userData, setUserData] = useState({});

	useEffect(() => {
		const getData = async () => {
			const res = await query("GET", "/getUserData");
			setUserData(res.data);
		};
		getData();
	}, []);

	return (
		<>
			<appContext.Provider value={{userData}}>{props.children}</appContext.Provider>
		</>
	);
}

export default AppState;
