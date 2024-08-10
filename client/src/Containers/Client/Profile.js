import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../Assets/image-1.jpg";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import ListSummary from "../../Components/ListSummary";
import { query } from "../../middleware/query";
import appContext from "../../context/appContext";
const Profile = () => {
	const { userData, setUserData } = useContext(appContext);
	console.log(userData);
	const navigate = useNavigate();
	let containerStyle =
		"flex flex-col justify-center space-y-4 bg-white mt-5 shadow-md rounded-lg px-10 p-5";
	const handleLogout = () => {
		query("POST", "logout")
			.then((res) => {
				if (res.data == "Logout successful") {
					setUserData(null);
					navigate("/home");
				} else {
					window.alert("Cannot logout");
				}
			})
			.catch((e) => console.log("error" + e));
	};

	const handleSubscription = () => {
		query("POST", "api/subscribe/addSubscription")
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="bg-gray-100">
			<div className="flex flex-col max-w-lg  rounded-lg  mx-auto bg-gray-100">
				<div className={containerStyle + " pb-10"}>
					<h1 className="text-2xl text-gray-400 font-bold mx-auto">Profile</h1>
					<img src={image} className=" w-32 h-32 mx-auto rounded-full m-2" />
					<Input
						label={"NAME"}
						value={userData.firstName + " " + userData.lastName}
						placeholder={"Name"}
					/>
					<Input
						label={"EMAIL"}
						value={userData.email}
						placeholder={"Email Id"}
					/>
					<Button name={"Logout"} onClick={handleLogout} />
					<Button name={"Subscribe!"} onClick={handleSubscription} />
				</div>
			</div>
		</div>
	);
};

export default Profile;
