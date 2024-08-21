import React, { useContext } from "react";
import DetailListing from "./DetailListing";
import BookingCalendar from "../Components/BookingComponent";
import appContext from "../context/appContext";
const DetailListingAndBooking = () => {
	const { userData } = useContext(appContext);
	return (
		<>
			{userData.isLandlord === true && (
				<div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-8 p-6 lg:p-8 bg-gray-100 min-h-screen">
					<div className="w-full lg:w-2/3 mb-6 lg:mb-0 p-6 bg-white rounded-lg shadow-lg">
						<DetailListing />
					</div>
				</div>
			)}
			{userData.isLandlord === false && (
				<div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-8 p-6 lg:p-8 bg-gray-100 min-h-screen">
					<div className="w-full lg:w-2/3 mb-6 lg:mb-0 p-6 bg-white rounded-lg shadow-lg">
						<DetailListing />
					</div>
					<div className="w-full lg:w-1/3 p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
						<div className="w-full">
							<BookingCalendar />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DetailListingAndBooking;
