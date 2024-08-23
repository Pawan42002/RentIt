import React, { useContext, useEffect, useState } from "react";
import appContext from "../../context/appContext";
import { query } from "../../middleware/query";
import ListSummary from "../../Components/ListSummary";
const MyBookings = () => {
	const { userData } = useContext(appContext);
	const [bookingDetails, setBookingDetails] = useState([]); // bookings should contain, listing (total listing),start and end date
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getBookingDetails = async () => {
			try {
				const props = { email: userData.email };
				query("POST", "api/auth/getBookings", props).then((bookings) => {
					const tempBookings = bookings.data;
					console.log(tempBookings);
					for (let tempBooking in tempBookings) {
						try {
							console.log(tempBooking);
						} catch (error) {}
					}
					setLoading(false);
				});
			} catch (error) {}
		};
		getBookingDetails();
	}, []);
	if (loading) {
		return <>loading</>;
	}
	return (
		<>
			{loading && <div>Hello</div>}
			{!loading && <div>Not hello</div>}
			{/* <div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-items-center gap-x-4 gap-y-4 max-w-fit mt-5"></div> */}
		</>
	);
};

export default MyBookings;
