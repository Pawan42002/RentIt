import React, { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import TextField from "../../Components/TextField";
import { features } from "process";
import { query } from "../../middleware/query";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Modal from "../../Components/Modal";
import Spinner from "../../Components/Spinner";
import { toast } from "react-toastify";
const imageIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-4 w-4 my-auto"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		stroke-width="2"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
		/>
	</svg>
);

const closeIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-4 w-4"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fill-rule="evenodd"
			d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
			clip-rule="evenodd"
		/>
	</svg>
);

const LAddListing = () => {
	let containerStyle =
		"flex flex-col justify-center space-y-4 bg-white mt-5 shadow-md rounded-lg px-10 p-5";
	const [street, setStreet] = useState(""); //
	const [city, setCity] = useState(""); //
	const [zipcode, setZipcode] = useState(""); //
	const [area, setArea] = useState(""); //
	const [location, setLocation] = useState(""); //
	const [rent, setRent] = useState(""); //
	const [features, setFeatures] = useState([]); //
	const [currFeature, setCurrfeature] = useState("");
	const [images, setImages] = useState([]); //
	const [progresspercent, setProgresspercent] = useState(0);
	const [open, setOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState({ name: "", url: "" });
	const [currentUpload, setCurrentUpload] = useState(-1);

	const handleImageUpload = (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		if (!file) return;
		const storageRef = ref(storage, `files/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);
		
		setCurrentUpload(images.length);
		images.push({ name: file.name, url: "" });
		
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgresspercent(progress);
			},
			(error) => {
				alert(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					let Uimages = [...images];
					Uimages[Uimages.length - 1].url = downloadURL;
					setCurrentUpload(-1);
					setImages(Uimages);
				});
			}
		);
	};
	const handleSubmit = async () => {
		// call middleware
		// create object
		const details = {
			area,
			rent,
		};
		const address = {
			street,
			city,
			zipcode,
		};
		// main object to be passed
		const props = {
			images,
			features,
			details,
			address,
		};
		const res = await query("POST", "api/listings/addListing", props, true);
		if (res) {
			alert("Listing added");
		}
		console.log(res);
	};
	const openModal = (idx) => {
		if (images[idx].url !== "") {
			setCurrentImage(images[idx]);
			setOpen(true);
		} else {
			toast("No Image Found");
		}
	};
	return (
		<>
			<div className="bg-gray-100">
				<div className="flex flex-col max-w-lg  rounded-lg  mx-auto bg-gray-100">
					<div className={containerStyle + " pb-10"}>
						<div className="image-input block">
							{/* <label className="text-gray-700 text-lg">Add Image</label> */}
							<div className="w-full py-5 text-center">
								<div className="flex justify-center items-center w-full">
									<label
										htmlFor="dropzone-file"
										className="flex flex-col justify-center items-center w-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
									>
										<div className="flex flex-col justify-center items-center p-3 text-center">
											<p className="mb-2 text-md bold text-gray-500 dark:text-gray-400 justify-center">
												Upload your documents
												<p className="text-xs mx-auto">in JPEG, ZIP or PDF</p>
											</p>
										</div>
										<input
											id="dropzone-file"
											type="file"
											className="hidden"
											onChange={(e) => {
												handleImageUpload(e);
											}}
										/>
									</label>
								</div>
								<div className="px-5 py-1 text-gray-500 flex flex-col gap-y-1">
									{images.length > 0 &&
										images.map((image, idx) => {
											return (
												<div
													className="text-xs bg-gray-100 border border-gray-300 rounded-lg p-2 flex flex-row justify-between max-w-full"
													key={idx}
												>
													<div className="flex flex-row align-center overflow-hidden">
														<div className="mr-2 bg-gray-200 rounded-full">
															{imageIcon}
														</div>
														<div
															className="my-auto hover:cursor-pointer max-w-full truncate"
															onClick={() => openModal(idx)}
														>
															{image.name}
														</div>
													</div>
													{currentUpload == idx ? (
														<div className="float-right">
															<Spinner ok={true} />
														</div>
													) : (
														<div
															className="my-auto hover:cursor-pointer "
															onClick={() => {
																setImages(
																	images.filter((currImage) => {
																		return currImage != image;
																	})
																);
															}}
														>
															{closeIcon}
														</div>
													)}
												</div>
											);
										})}
								</div>
							</div>
						</div>

						<Input
							label={"Rent per Month"}
							placeholder={"Rent per Month"}
							value={rent}
							setValue={setRent}
						/>
						<Input
							label={"Area in sq.ft"}
							placeholder={"Area in sq.ft"}
							value={area}
							setValue={setArea}
						/>
						<Input
							label={"Location"}
							placeholder={"Location"}
							value={location}
							setValue={setLocation}
						/>
						<hr />
						<h1 className="text-gray-700 text-lg text-">Address</h1>
						<TextField
							placeholder={"Street"}
							value={street}
							setValue={setStreet}
						/>
						<Input
							label={"City"}
							placeholder={"City"}
							value={city}
							setValue={setCity}
						/>
						<Input
							label={"ZIP Code"}
							placeholder={"ZIP Code"}
							value={zipcode}
							setValue={setZipcode}
						/>
						<hr />
						<h1 className="text-gray-700 text-lg">Features</h1>
						<div className="flex  justify-center space-x-3">
							<Input
								label={"Feature"}
								placeholder={"Feature"}
								value={currFeature}
								setValue={setCurrfeature}
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 m-auto text-gray-700"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								onClick={() => {
									if (currFeature != "") {
										setFeatures([...features, currFeature]);
										setCurrfeature("");
									}
								}}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						{!features.length && (
							<h1 className="text-gray-500">No features added</h1>
						)}
						{features.length > 0 && (
							<>
								<h1 className="text-700 text-md">Listed Features</h1>
								<div>
									{features.map((feature) => {
										return (
											<>
												<div className="flex justify-between  bg-white  shadow-md rounded-lg px-4 p-5 mb-2 ">
													<div>{feature}</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-6 w-6"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth={2}
														onClick={() => {
															setFeatures(
																features.filter((currF) => {
																	return currF != feature;
																})
															);
														}}
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
														/>
													</svg>
												</div>
											</>
										);
									})}
								</div>
							</>
						)}
						<hr />
						<Button name={"Add Listing"} onClick={handleSubmit} />
						<Modal open={open} setOpen={setOpen}>
							<div className="block pt-3 p-2 min-h-full min-w-full">
								<div className="text-gray-500 text-lg pl-2">Preview</div>
								<div
									className="absolute top-3 right-2 text-gray-500 hover:cursor-pointer hover:bg-gray-100 rounded-full p-1"
									onClick={() => setOpen(!open)}
								>
									{closeIcon}
								</div>
								<div className="rounded-lg p-1">
									<img
										src={currentImage.url}
										className="object-contain rounded-md"
									/>
								</div>
							</div>
						</Modal>
					</div>
				</div>
			</div>
		</>
	);
};

export default LAddListing;
