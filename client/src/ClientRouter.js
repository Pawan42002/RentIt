import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Profile from "./Containers/Client/Profile";
import Favourites from "./Containers/Client/Favourites";
import Home from "./Containers/Home";
import Login from "./Containers/Client/Login";
import Register from "./Containers/Client/Register";
import Search from "./Containers/Client/Search";
import UserLoginRequired from "./Containers/UserLoginRequired";
function ClientRouter() {
	return (
		<>
			<Routes>
				<Route>
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/search" element={<Search />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/favourites" element={<Favourites />} />
				</Route>
			</Routes>
		</>
	);
}

export default ClientRouter;
