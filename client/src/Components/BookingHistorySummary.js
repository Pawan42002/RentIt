import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { query } from "../middleware/query";
import { toast } from "react-toastify";
const BookingHistorySummary = (props) => {
	// we need an image,startDate,endDate,location, and link to the Detail listing page,
	const navigate = useNavigate();
	const { booking, bookingDetails, setBookingDetails, inLandlordPage } = props;
	let startDate = new Date(booking.startDate);
	let endDate = new Date(booking.endDate);
	const deleteBooking = async () => {
		if (window.confirm("Are you sure you want to delete this booking?")) {
			try {
				let props = { id: booking._id };
				let res = await query("POST", "api/listings/deleteBooking", props);
				if (res.data === "Booking Deleted") {
					setBookingDetails(
						bookingDetails.filter((bookingDetail) => {
							return bookingDetail._id !== booking._id;
						})
					);
					toast("Booking successfully deleted");
				}
			} catch (error) {
				toast("Some problem occured");
				console.log(error);
			}
		}
	};
	return (
		<>
			<div className="relative z-1 flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-6 space-y-4 md:space-y-0 md:space-x-6 max-w-xl mx-auto">
				<img
					className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
					src={booking.listingImage}
					onClick={() => {
						const link = "/listing/" + booking.listingID;
						navigate(link);
					}}
					alt="Listing"
				/>
				<div className="flex flex-col justify-center text-center md:text-left flex-grow">
					<h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
						{booking.listingLocation}
					</h3>
					<p className="text-sm md:text-base text-gray-600 mt-2">
						<span className="font-medium">Check In:</span>{" "}
						{startDate.toString()}
					</p>
					<p className="text-sm md:text-base text-gray-600">
						<span className="font-medium">Check Out:</span> {endDate.toString()}
					</p>
					{inLandlordPage && (
						<div className="mt-3 md:mt-0 text-sm md:text-base text-gray-600">
							<span className="font-medium">Client Contact:</span>{" "}
							{booking.clientEmail}
						</div>
					)}
				</div>

				<div className="mt-4 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
					<button
						className="text-red-500 hover:text-red-700 text-sm font-semibold px-3 py-2 border border-red-500 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-50"
						onClick={deleteBooking}
					>
						Delete Booking
					</button>
				</div>
			</div>
		</>
	);
};

export default BookingHistorySummary;
