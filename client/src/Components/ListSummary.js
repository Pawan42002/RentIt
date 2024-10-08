import React, { useState, useContext, useEffect } from "react";
import image from "../Assets/image-1.jpg";
import appContext from "../context/appContext";
import UserLoginRequired from "../Containers/UserLoginRequired";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import { query } from "../middleware/query";
import Modal from "../Components/Modal";
import { useNavigate } from "react-router-dom";
const ListSummary = (props) => {
	const [liked, setLiked] = useState("none");
	const { userData, favourites, setFavourites } = useContext(appContext);
	const { listing, inFavPage, showDelete, deleteListing, isSearch } = props;
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		if (userData) {
			if (listing.likes.includes(userData.id)) {
				setLiked("red");
			}
		}
	}, []);
	return (
		<div
			className={`flex ${
				isSearch ? "flex-row w-full" : "flex-col max-w-xs"
			} min-w-fit bg-white rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 `}
		>
			<img
				className="rounded-lg max-w-xs"
				src={listing.images[0].url}
				alt={listing.images[0].name}
				onClick={() => {
					const link = "/listing/" + listing._id;
					navigate(link);
				}}
			/>
			<div
				className={`flex flex-col p-3 space-y-2 ${
					isSearch ? "w-full" : "max-w-md"
				}`}
			>
				<div className="flex justify-between items-center space-x-5">
					<h1 className="font-bold">
						{listing.location + ", " + listing.address.city}
					</h1>
					<div className="flex ">
						<svg
							className="w-5 h-5 text-yellow-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							className="w-5 h-5 text-yellow-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							className="w-5 h-5 text-yellow-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							className="w-5 h-5 text-yellow-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							className="w-5 h-5 text-yellow-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
							5.0
						</span>
					</div>
				</div>
				<div>
					<p className="text-sm text-slate-600">{listing.features[0]} </p>
				</div>
				<div className="flex justify-between">
					<div>
						<h1>{listing.details.rent} Rs</h1>
					</div>
					<div>
						<div className={`flex justify-around ${isSearch ? "px-1" : ""}`}>
							{!showDelete && (
								<button
									onClick={async () => {
										if (!userData) {
											console.log("login to like");
											toast("Login to like");
										} else if (userData.emailVerified === false) {
											toast("Verify OTP to like");
										} else {
											if (liked === "none") {
												setLiked("red"); // code to edit the like button
												await query("POST", "api/listings/addToLiked", {
													id: props.listing._id,
												});
											} else {
												if (!inFavPage) {
													setLiked("none");
												}
												setFavourites(
													favourites.filter((favourite) => {
														return favourite._id != listing._id;
													})
												);
												await query("POST", "api/listings/unlike", {
													id: props.listing._id,
												});
											}
										}
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill={liked} // we can change the color here
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
										/>
									</svg>
								</button>
							)}

							<div>
								{showDelete && (
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
											onClick={() => {
												deleteListing(listing);
											}}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
											/>
										</svg>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListSummary;
