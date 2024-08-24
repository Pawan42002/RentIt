import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../Assets/image-1.jpg";
import { query } from "../middleware/query";
import Spinner from "../Components/Spinner";
//  will work on this
const starSVG = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
		/>
	</svg>
);

const locationSVG = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-5 w-5"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fillRule="evenodd"
			d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
			clipRule="evenodd"
		/>
	</svg>
);

const phoneSVG = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-5 w-5"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
	</svg>
);
const DetailListing = (props) => {
	const params = useParams();
	const { listing } = props;
	const [currentImage, setCurrentImage] = useState("");
	const [imageNumber, setImageNumber] = useState(0);
	const [imagesSize, setImagesSize] = useState(0);
	useEffect(() => {
		setCurrentImage(listing.images[0].url);
		setImagesSize(listing.images.length);
	}, []);
	let containerStyle =
		"flex flex-col justify-center bg-white mt-3 shadow-md rounded-md px-7 p-5";

	return (
		<>
			<div className="bg-gray-100 h-screen">
				<div className="flex flex-col max-w-lg  rounded-lg  mx-auto bg-gray-100">
					<div className="relative flex items-center justify-center overflow-hidden">
						{imageNumber != 0 && (
							<div
								className="absolute left-0 p-2 bg-white rounded-full shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-110"
								onClick={() => {
									let curr = (imageNumber - 1 + imagesSize) % imagesSize;
									setImageNumber(curr);
								}}
							>
								<svg
									className="w-6 h-6 text-gray-700"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										strokeWidth="2"
										d="M15 19l-7-7 7-7"
									></path>
								</svg>
							</div>
						)}
						<div>
							<img
								src={listing.images[imageNumber].url}
								className="w-full rounded-xl"
							/>
						</div>
						{imageNumber != imagesSize - 1 && (
							<div
								className="absolute right-0 p-2 bg-white rounded-full shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-110"
								onClick={() => {
									let curr = (imageNumber + 1) % imagesSize;
									setImageNumber(curr);
								}}
							>
								<svg
									className="w-6 h-6 text-gray-700"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										strokeWidth="2"
										d="M9 5l7 7-7 7"
									></path>
								</svg>
							</div>
						)}
					</div>
					<div className="bg-white shadow-md rounded-lg p-3 px-5 mt-1 py-4">
						<div className="text-xl font-medium">
							Hosted by {listing.landlordFirstName}
						</div>
						{/* <div className="text-sm font-light">
							4 guests1 bedroom2 beds1 bathroom
						</div> */}
					</div>
					<div className={containerStyle + " pb-5"}>
						<div className="flex flex-row mb-2">
							<div className="mt-2">{starSVG}</div>
							<div>
								<div className="text-xl font-bold p-1">Features</div>
								<div className="px-1 text-sm">
									{listing.features.map((feature, idx) => {
										return <div key={idx}>{feature}</div>;
									})}
								</div>
							</div>
						</div>

						<div className="flex flex-row mb-2">
							<div className="mt-2">{starSVG}</div>
							<div>
								<div className="text-xl font-bold p-1">Rent</div>
								<div className="px-1 text-sm flex flex-row">
									<div className="text-xl">Rs {listing.details.rent}</div>
									<div className="mt-1">/night</div>
								</div>
							</div>
						</div>

						<div className="flex flex-row">
							<div className="mt-2">{locationSVG}</div>
							<div>
								<div className="text-xl font-bold p-1">Location</div>
								<div className="px-1 text-sm">
									<div>
										{listing.location},{listing.address.city}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={containerStyle + " pb-5"}>
						<div className="flex flex-row">
							<div className="mt-2">{phoneSVG}</div>
							<div>
								<div className="text-xl font-bold p-1">Owner</div>
								<div className="px-1 text-sm">
									<div>{listing.landlordEmail}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailListing;
