import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../Assets/image-1.jpg";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import ListSummary from "../../Components/ListSummary";
import { query } from "../../middleware/query";

const Profile = () => {
	const navigate = useNavigate();
	let containerStyle =
		"flex flex-col justify-center space-y-4 bg-white mt-5 shadow-md rounded-lg px-10 p-5";
	const handleLogout = () => {
		query("POST", "logout")
			.then((res) => {
				if (res.data == "Logout successful") {
					navigate("/home");
				} else {
					window.alert("Cannot logout");
				}
			})
			.catch((e) => console.log("error" + e));
	};
	return (
		<div className="bg-gray-100">
			<div className="flex flex-col max-w-lg  rounded-lg  mx-auto bg-gray-100">
				<div className={containerStyle + " pb-10"}>
					<h1 className="text-2xl text-gray-400 font-bold mx-auto">Profile</h1>
					<img src={image} className=" w-32 h-32 mx-auto rounded-full m-2" />
					<Input label={"NAME"} value={"Manjunath"} placeholder={"Name"} />
					<Input
						label={"PHONE"}
						value={"8830526885"}
						placeholder={"Phone Number"}
					/>
					<Input
						label={"EMAIL"}
						value={"nath.vasam@gmail.com"}
						placeholder={"Email Id"}
					/>
					<Button name={"Logout"} onClick={handleLogout} />
				</div>
				<div className={containerStyle}>
					<Button
						name={"Create a New Listing"}
						onClick={() => {
							navigate("/addListing");
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Profile;
