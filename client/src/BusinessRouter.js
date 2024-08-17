import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LAddListing from "./Containers/Business/LAddListing";
import LNavbar from "./Components/LNavbar";
import MyListings from "./Containers/Business/MyListings";
import BusinessLogin from "./Containers/Business/BusinessLogin";
import BusinessRegister from "./Containers/Business/BusinessRegister";
import Home from "./Containers/Home";
import Dashboard from "./Containers/Business/Dashboard";
import LProfile from "./Containers/Business/LProfile";
import Profile from "./Containers/Client/Profile"; // this is used for both client and landlord
import ProtectedBusinessRoute from "./Components/ProtectedBusinessRoute";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
function BusinessRouter() {
	return (
		<>
			<Routes>
				<Route path="/b">
					<Route
						path="/b/"
						element={
							<ProtectedBusinessRoute>
								<Dashboard />
							</ProtectedBusinessRoute>
						}
					/>
					<Route
						path="/b/profile"
						element={
							<ProtectedBusinessRoute>
								<Profile />
							</ProtectedBusinessRoute>
						}
					/>
					<Route path="/b/register" element={<BusinessRegister />} />
					<Route path="/b/login" element={<BusinessLogin />} />
					<Route
						path="/b/addlisting"
						element={
							<ProtectedBusinessRoute>
								<LAddListing />
							</ProtectedBusinessRoute>
						}
					/>
					<Route
						path="/b/listings"
						element={
							<ProtectedBusinessRoute>
								<MyListings />
							</ProtectedBusinessRoute>
						}
					/>
				</Route>
				<Route exact path="/b/forgotPassword" element={<ForgotPassword />} />
				<Route
					exact
					path="/b/changePassword"
					element={
						<ProtectedBusinessRoute>
							<ChangePassword />
						</ProtectedBusinessRoute>
					}
				/>
			</Routes>
		</>
	);
}

export default BusinessRouter;
