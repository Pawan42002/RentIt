import React, { useContext, useState } from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";
import appContext from "./context/appContext";
import { query } from "./middleware/query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ChangePassword = () => {
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { userData } = useContext(appContext);
	const navigate = useNavigate();
	const handleSubmit = async () => {
		if (newPassword != confirmPassword) {
			toast("New password should be same as confirm password");
			return;
		}
		let email = userData.email;
		let endpoint = "api/auth/changePassword";
		if (userData.isLandlord === true) {
			endpoint = "api/businessAuth/changePassword";
		}
		const props = { email, currentPassword: password, newPassword };
		let res = await query("POST", endpoint, props);
		if (res.data === "Wrong password") {
			toast("Current password is wrong");
			return;
		} else if (res.data === "Password Updated successfully") {
			toast("Password updated");
			if (userData.isLandlord === true) {
				navigate("/b/profile");
			} else {
				navigate("/profile");
			}

			return;
		}
	};
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="p-6 border border-gray-300 rounded-xl shadow-lg bg-white max-w-md w-full">
				<div className="space-y-6">
					<div className="flex mt-8 justify-center">
						<div className="flex-1 text-center font-bold text-2xl">
							Change Password
						</div>
					</div>
					<div className="flex mt-8">
						<div className="flex-1">
							<Input
								label={"Previous password"}
								type={"password"}
								value={password}
								setValue={setPassword}
							/>
						</div>
					</div>
					<div className="flex">
						<div className="flex-1">
							<Input
								label={"New password"}
								type={"password"}
								value={newPassword}
								setValue={setNewPassword}
							/>
						</div>
					</div>
					<div className="flex">
						<div className="flex-1">
							<Input
								label={"Confirm password"}
								type={"password"}
								value={confirmPassword}
								setValue={setConfirmPassword}
							/>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="flex mt-8 justify-center">
							<Button name={"SUBMIT"} onClick={handleSubmit} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
