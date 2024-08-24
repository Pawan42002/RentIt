import React, { useContext, useEffect, useState } from "react";
import appContext from "../../context/appContext";
import { query } from "../../middleware/query";
import BookingHistorySummary from "../../Components/BookingHistorySummary";
import Spinner from "../../Components/Spinner";
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
		return (
			<div className="flex justify-center items-center h-full">
				<div className="w-8 h-8">
					<Spinner />
				</div>
			</div>
		);
	}
	if (bookingDetails.length === 0) {
		return (
			<div className="flex items-center justify-center h-screen p-6 bg-gray-50 rounded-lg shadow-md">
				<div className="text-center">
					<div className="text-gray-500 text-lg md:text-xl font-semibold">
						No bookings made
					</div>
					<p className="text-gray-400 mt-2 text-sm md:text-base">
						Start exploring and make your first booking today!
					</p>
				</div>
			</div>
		);
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
