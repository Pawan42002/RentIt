import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { query } from "../../middleware/query";
import appContext from "../../context/appContext";
import { toast } from "react-toastify";
import Button from "../../Components/Button";
import { StrongPassword } from "../../Functions/StrongPassword";
import WeakPassword from "../../Components/WeakPassword";
// will use setTimeout
function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
function Register() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isPasswordStrong, setIsPasswordStrong] = useState(false);
	const [address, setAddress] = useState("");
	const [emailVerified, setEmailVerified] = useState(false);
	const [otpSent, setOtpSent] = useState(false);
	const [code, setCode] = useState("");
	const [otpTimeOut, setOtpTimeOut] = useState(false);
	const context = useContext(appContext);
	const { setUserData } = context;
	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		switch (id) {
			case "fname": {
				setFirstName(value);
				break;
			}
			case "lname": {
				setLastName(value);
				break;
			}
			case "email": {
				setEmail(value);
				break;
			}
			case "password": {
				if (StrongPassword(value)) {
					setIsPasswordStrong(true);
				} else {
					setIsPasswordStrong(false);
				}
				setPassword(value);
				break;
			}
			case "confirm-password": {
				setConfirmPassword(value);
				break;
			}
			case "address": {
				setAddress(value);
				break;
			}
			case "code": {
				setCode(value);
				break;
			}
		}
	};

	const sendOTP = async () => {
		if (!isPasswordStrong) {
			toast("Weak password");
			return;
		}
		if (password != confirmPassword) {
			toast("Check password once again!");
			return;
		}
		if (otpTimeOut) {
			toast("Wait for some time before requesting for another OTP");
			return;
		}
		if (!validateEmail(email)) {
			toast("Email ID not valid");
			return;
		}
		let props = {
			email: email,
		};
		let res = await query("POST", "api/auth/sendEmailVerification", props);
		try {
			if (res.data === "Email sent") {
				toast("OTP sent successfully");
				setOtpSent(true);
				setOtpTimeOut(true);
				setTimeout(() => {
					setOtpTimeOut(false);
				}, 20000);
			} else if (res.data === "Email already in use") {
				toast("Email id already in use");
			} else {
				toast("Something went wrong, please try again later");
			}
		} catch (error) {
			console.log(error);
		}
	};
	const verifyOTP = async () => {
		if (!isPasswordStrong) {
			toast("Weak password");
			return;
		}
		let props = {
			email: email,
			code: code,
		};
		try {
			let res = await query("POST", "api/auth/verifyOTP", props);
			if (res.data === "OTP verified successfully") {
				toast("OTP verified successfully");
				setEmailVerified(true);
				handleSubmit();
			} else {
				toast("OTP does not match");
			}
		} catch (error) {
			toast("Something went wrong");
		}
	};
	const handleSubmit = async () => {
		let add1 = {
			city: address,
		};
		let props = {
			email,
			password,
			firstName,
			lastName,
			address: add1,
		};
		try {
			let res = await query("POST", "api/auth/registerClient", props);
			if (res) {
				console.log(res);
				setUserData(res.data);
				navigate("/"); // this line also changes
			}
		} catch (error) {
			toast("Something went wrong");
		}
	};

	return (
		<div className="h-auto flex flex-col flex-grow items-center justify-center bg-gray-100 dark:text-white dark:bg-gray-800">
			<div className="mt-5 flex flex-col bg-white dark:bg-gray-700 dark:text-white justify-center shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-lg w-50 max-w-md mx-3">
				<div className="font-medium self-center text-xl sm:text-3xl text-gray-800 dark:text-white">
					Welcome!
				</div>
				<div className="mt-4 self-center text-xl sm:text-sm text-gray-800 dark:text-white">
					Enter your credentials to create your account
				</div>

				<div className="mt-8">
					<div className="flex flex-col mb-5">
						<label className="mb-1 text-xs tracking-wide text-gray-600 dark:text-gray-400">
							First Name :
						</label>
						<div className="relative">
							<div
								className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    absolute
                                    left-0
                                    top-0
                                    h-full
                                    w-10
                                    text-gray-400"
							>
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
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
							</div>
							<input
								id="fname"
								type="name"
								value={firstName}
								className="
                                      dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700
                                      dark:border-gray-800                                                                
                                        text-sm
                                        placeholder-gray-500
                                        pl-10
                                        pr-4
                                        rounded-md
                                        border border-gray-400
                                        w-full
                                        py-2
                                        focus:outline-none focus:border-purple-700"
								placeholder="Enter your First Name"
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
					</div>
					<div className="flex flex-col mb-5">
						<label className="mb-1 text-xs tracking-wide text-gray-600 dark:text-gray-400">
							Last Name :
						</label>
						<div className="relative">
							<div
								className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    absolute
                                    left-0
                                    top-0
                                    h-full
                                    w-10
                                    text-gray-400"
							>
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
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
							</div>
							<input
								id="lname"
								type="name"
								value={lastName}
								className="
                                      dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700
                                      dark:border-gray-800                                                                
                                        text-sm
                                        placeholder-gray-500
                                        pl-10
                                        pr-4
                                        rounded-md
                                        border border-gray-400
                                        w-full
                                        py-2
                                        focus:outline-none focus:border-purple-700"
								placeholder="Enter your last name"
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
					</div>
					<div className="flex flex-col mb-5">
						<label className="mb-1 text-xs tracking-wide text-gray-600 dark:text-gray-400">
							E-Mail Address:
						</label>
						<div className="relative">
							<div
								className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    absolute
                                    left-0
                                    top-0
                                    h-full
                                    w-10
                                    text-gray-400"
							>
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
										d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
									/>
								</svg>
							</div>
							<input
								id="email"
								type="email"
								name="email"
								value={email}
								className="
                                      dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700
                                      dark:border-gray-800                                                                
                                        text-sm
                                        placeholder-gray-500
                                        pl-10
                                        pr-4
                                        rounded-md
                                        border border-gray-400
                                        w-full
                                        py-2
                                        focus:outline-none focus:border-purple-700"
								placeholder="Enter your email"
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
					</div>
					<div className="flex flex-col mb-6">
						<label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-gray-400">
							Password:
						</label>
						<div className="relative">
							<div
								className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        absolute
                                        left-0
                                        top-0
                                        h-full
                                        w-10
                                        text-gray-400"
							>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
											clipRule="evenodd"
										/>
									</svg>
								</span>
							</div>
							<input
								id="password"
								type="password"
								name="password"
								value={password}
								className="
                                      dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700
                                      dark:border-gray-800                                
                                        text-sm
                                        placeholder-gray-500
                                        pl-10
                                        pr-4
                                        rounded-md
                                        border border-gray-400
                                        w-full
                                        py-2
                                        focus:outline-none focus:border-purple-700"
								placeholder="Enter your password"
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
						<div>
							{password.length > 0 && !isPasswordStrong && <WeakPassword />}
						</div>
					</div>
					<div className="flex flex-col mb-6">
						<label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-gray-400">
							Confirm Password:
						</label>
						<div className="relative">
							<div
								className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        absolute
                                        left-0
                                        top-0
                                        h-full
                                        w-10
                                        text-gray-400"
							>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
											clipRule="evenodd"
										/>
									</svg>
								</span>
							</div>
							<input
								id="confirm-password"
								type="password"
								name="password"
								value={confirmPassword}
								className="
                                      dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700
                                      dark:border-gray-800
                                        text-sm
                                        placeholder-gray-500
                                        pl-10
                                        pr-4
                                        rounded-md
                                        border border-gray-400 
                                        w-full
                                        py-2
                                        focus:outline-none focus:border-purple-700"
								placeholder="Enter your password"
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
					</div>

					<div className="flex flex-col mb-6">
						<label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-gray-400">
							Address(City):
						</label>
						<div className="relative">
							<div
								className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        absolute
                                        left-0
                                        top-0
                                        h-full
                                        w-10
                                        text-gray-400"
							>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
											clipRule="evenodd"
										/>
									</svg>
								</span>
							</div>
							<input
								id="address"
								type="text"
								name="address"
								value={address}
								className="
                                      dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700
                                      dark:border-gray-800
                                        text-sm
                                        placeholder-gray-500
                                        pl-10
                                        pr-4
                                        rounded-md
                                        border border-gray-400 
                                        w-full
                                        py-2
                                        focus:outline-none focus:border-purple-700"
								placeholder="Enter your address"
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
					</div>
					{otpSent && (
						<div className="flex flex-col mb-5">
							<label className="mb-1 text-xs tracking-wide text-gray-600 dark:text-gray-400">
								OTP
							</label>
							<div className="relative">
								<div
									className="
                                  inline-flex
                                  items-center
                                  justify-center
                                  absolute
                                  left-0
                                  top-0
                                  h-full
                                  w-10
                                  text-gray-400"
								>
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
											d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
										/>
									</svg>
								</div>
								<input
									id="code"
									type="code"
									name="code"
									value={code}
									className="
                                    dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700
                                    dark:border-gray-800                                                                
                                      text-sm
                                      placeholder-gray-500
                                      pl-10
                                      pr-4
                                      rounded-md
                                      border border-gray-400
                                      w-full
                                      py-2
                                      focus:outline-none focus:border-purple-700"
									placeholder="Enter OTP"
									onChange={(e) => handleInputChange(e)}
								/>
							</div>
						</div>
					)}
					<div className="flex w-full">
						<button
							onClick={sendOTP}
							className="
                                        flex
                                        mt-2
                                        items-center
                                        justify-center
                                        focus:outline-none
                                        bg-indigo-600 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700
                                        rounded-md
                                        py-2
                                        w-full
                                        transition
                                        duration-150
                                        ease-in"
						>
							<span className="mr-2 uppercase">Get OTP</span>
							<span>
								<svg
									className="h-6 w-6"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</span>
						</button>
					</div>
					{otpSent && (
						<div className="flex w-full">
							<button
								onClick={verifyOTP}
								className="
									flex
									mt-2
									items-center
									justify-center
									focus:outline-none
									bg-indigo-600 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700
									rounded-md
									py-2
									w-full
									transition
									duration-150
									ease-in"
							>
								<span className="mr-2 uppercase">Verify OTP and Register</span>
								<span>
									<svg
										className="h-6 w-6"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</span>
							</button>
						</div>
					)}
				</div>
			</div>
			<div className="mb-5 flex justify-center items-center mt-6">
				<div
					className="
                        inline-flex
                        items-center
                        text-gray-700
                        font-medium
                        text-xs text-center"
				>
					<span className="ml-2">
						Already have an account?
						<Link
							to="/login"
							className="text-xs ml-2 text-indigo-600 hover:text-indigo-500 font-semibold"
						>
							Login
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Register;
