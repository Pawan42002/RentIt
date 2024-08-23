import { Calendar } from "@demark-pro/react-booking-calendar";
import "@demark-pro/react-booking-calendar/dist/react-booking-calendar.css";

// CSS Modules, react-booking-calendar-cssmodules.css
// import '@demark-pro/react-booking-calendar/dist/react-booking-calendar-cssmodules.css';
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import appContext from "../context/appContext";
import Button from "./Button";
import { query } from "../middleware/query";
import { toast } from "react-toastify";
const BookingCalendar = (props) => {
	const params = useParams();
	const { userData } = useContext(appContext);
	const { listing } = props;
	const [selectedDates, setSelectedDates] = useState([]);
	const [reservedDates, setReservedDates] = useState(listing.bookings);
	const handleBooking = async () => {
		const props = {
			params: { id: params.id },
			startDate: new Date(selectedDates[0]),
			endDate: new Date(selectedDates[1]),
			clientName: userData.firstName,
			clientEmail: userData.email,
			landlordEmail: listing.landlordEmail,
			listingID: listing._id,
			listingImage: listing.images[0].url,
			listingLocation: listing.location + ", " + listing.address.city,
		};
		let res = await query("POST", "api/listings/booking", props);
		if (res.data === "Booking successful") {
			toast("Booking successful");
			setReservedDates([
				...reservedDates,
				{
					startDate: new Date(selectedDates[0]),
					endDate: new Date(selectedDates[1]),
				},
			]);
			setSelectedDates([]);
		} else {
			alert("Failure due to some reason");
		}
	};
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
			<div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
				<h2 className="text-2xl font-semibold mb-6">Book here</h2>
				<div className="w-full mb-6">
					<Calendar
						selected={selectedDates}
						reserved={reservedDates}
						range={true}
						onChange={setSelectedDates}
					/>
				</div>
				<div className="w-full">
					<Button name={"Book"} onClick={handleBooking} />
				</div>
			</div>
		</div>
	);
};

export default BookingCalendar;
