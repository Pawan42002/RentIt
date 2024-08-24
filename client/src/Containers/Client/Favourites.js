import React, { useEffect, useState, useContext } from "react";
import Spinner from "../../Components/Spinner";
import { query } from "../../middleware/query";
import ListSummary from "../../Components/ListSummary";
import appContext from "../../context/appContext";
import Modal from "../../Components/Modal";
const Favourites = () => {
	const { userData, favourites, setFavourites } = useContext(appContext);
	const [loading, setLoading] = useState(true);
	const inFavPage = true;
	useEffect(() => {
		const getFavourites = async () => {
			try {
				const response = await query("GET", "api/listings/getAllLiked");
				setFavourites(response.data);
				console.log(response.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getFavourites();
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
	if (favourites.length === 0) {
		return (
			<div className="flex items-center justify-center h-screen p-6 bg-gray-50 rounded-lg shadow-md">
				<div className="text-center">
					<div className="text-gray-500 text-lg md:text-xl font-semibold">
						You haven't liked anything
					</div>
					<p className="text-gray-400 mt-2 text-sm md:text-base">
						Start exploring!
					</p>
				</div>
			</div>
		);
	}
	return (
		<div>
			{loading && <Spinner />}
			{!loading && (
				<>
					<div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-items-center gap-x-4 gap-y-4 max-w-fit mt-5">
						{favourites.map((favourite, idx) => {
							return (
								<ListSummary
									listing={favourite}
									key={idx}
									inFavPage={inFavPage}
								/>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};

export default Favourites;
