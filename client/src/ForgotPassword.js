import React, { useContext, useEffect, useState } from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { query } from "./middleware/query";
import { toast } from "react-toastify";
import appContext from "./context/appContext";
const ForgotPassword = () => {
	const { userData, setUserData } = useContext(appContext);
	useEffect(() => {
		query("POST", "logout")
			.then((res) => {
				if (res.data == "Logout successful") {
					setUserData(null);
				} else {
					window.alert("Cannot logout");
				}
			})
			.catch((e) => console.log("error" + e));
	}, []);
	const location = useLocation();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const forgotPassword = async () => {
		try {
			let type = "Client";
			if (location.pathname[1] === "b") {
				type = "Landlord";
			}
			const props = {
				email,
				type,
			};
			let res = await query("POST", "forgotPassword", props);
			console.log(res);
			if (res.data === "Account does not exist") {
				toast("Account not found");
				return;
			} else if (res.data === "Password sent to email") {
				toast("Password sent to email");
				if (type === "Landlord") {
					navigate("/b/login");
				} else {
					navigate("/login");
				}
				return;
			}
		} catch (error) {
			toast("Something went wrong");
		}
	};
	return (
		<div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
			<div className="p-12 bg-white rounded-lg shadow-lg w-[600px]">
				<div className="mb-6">
					<div className="w-full">
						<Input label={"Email"} value={email} setValue={setEmail} />
					</div>
				</div>
				<div className="text-center">
					<Button name={"Get New password"} onClick={forgotPassword} />
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
