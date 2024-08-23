import React, { useContext, useEffect, useState } from "react";
import appContext from "../../context/appContext";
import { query } from "../../middleware/query";
import BookingHistorySummary from "../../Components/BookingHistorySummary";
const MyBookings = () => {
	const { userData } = useContext(appContext);
	const [bookingDetails, setBookingDetails] = useState([]); // bookings should contain, listing (total listing),start and end date
	const [loading, setLoading] = useState(true);
	// get bookingDetails, setBookingDetails from context
	useEffect(() => {
		const getBookingDetails = async () => {
			try {
				const props = { email: userData.email };
				let res = await query("POST", "api/listings/getAllBookings", props);
				if (res.data) {
					setBookingDetails(res.data);
					setLoading(false);
				}
			} catch (error) {}
		};
		getBookingDetails();
	}, []);
	if (loading) {
		return <>loading</>;
	}
	return (
		<>
			<div className="space-y-4 p-4">
				{bookingDetails.map((booking) => (
					<BookingHistorySummary
						key={booking.listingID}
						booking={booking}
						bookingDetails={bookingDetails}
						setBookingDetails={setBookingDetails}
					/>
				))}
			</div>
		</>
	);
};

export default MyBookings;
