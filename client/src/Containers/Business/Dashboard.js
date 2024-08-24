import React, { useContext, useEffect, useState } from "react";
// we have to make it here
import appContext from "../../context/appContext";
import { query } from "../../../src/middleware/query";
import Spinner from "../../Components/Spinner";
import BookingHistorySummary from "../../Components/BookingHistorySummary";
function Dashboard() {
	const { userData } = useContext(appContext);
	const [bookingDetails, setBookingDetails] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getBookingData = async () => {
			const props = { landlordEmail: userData.email };
			try {
				let res = await query(
					"POST",
					"api/listings/getAllBookingsLandlord",
					props
				);
				if (res.data) {
					console.log(res.data);
					setBookingDetails(res.data);
					setLoading(false);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getBookingData();
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
						Wait for clients to book!
					</p>
				</div>
			</div>
		);
	}
	return (
		<>
			<div className="pt-6">
				<div className="text-xl font-semibold text-gray-800 mb-4 text-center">
					Bookings Made by Clients
				</div>
				<div className="space-y-4 p-4 bg-gray-50 rounded-lg shadow-sm">
					{bookingDetails.map((booking) => (
						<BookingHistorySummary
							key={booking.listingID}
							booking={booking}
							bookingDetails={bookingDetails}
							setBookingDetails={setBookingDetails}
							inLandlordPage={true}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default Dashboard;
