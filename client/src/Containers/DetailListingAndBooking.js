import React, { useContext, useState, useEffect } from "react";
import DetailListing from "./DetailListing";
import BookingCalendar from "../Components/BookingComponent";
import appContext from "../context/appContext";
import { query } from "../middleware/query";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
const DetailListingAndBooking = () => {
	const { userData } = useContext(appContext);
	const [listing, setListing] = useState([]);
	const [loading, setLoading] = useState(true);
	const params = useParams();
	useEffect(() => {
		const getData = async () => {
			try {
				const props = { params: { id: params.id } };
				// console.log(props);
				const response = await query(
					"POST",
					"api/listings/getSingleListing",
					props
				);
				setListing(response.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);
	if (loading) {
		return (
			<>
				<div>
					<Spinner />
				</div>
			</>
		);
	}
	return (
		<>
			{userData.isLandlord === true && (
				<div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-8 p-6 lg:p-8 bg-gray-100 min-h-screen">
					<div className="w-full lg:w-2/3 mb-6 lg:mb-0 p-6 bg-white rounded-lg shadow-lg">
						<DetailListing listing={listing} />
					</div>
				</div>
			)}
			{userData.isLandlord === false && (
				<div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-8 p-6 lg:p-8 bg-gray-100 min-h-screen">
					<div className="w-full lg:w-2/3 mb-6 lg:mb-0 p-6 bg-white rounded-lg shadow-lg">
						<DetailListing listing={listing} />
					</div>
					<div className="w-full lg:w-1/3 p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
						<div className="w-full">
							<BookingCalendar listing={listing} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DetailListingAndBooking;
