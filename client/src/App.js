import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { query } from "./middleware/query";
import BusinessRouter from "./BusinessRouter";
import ClientRouter from "./ClientRouter";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Containers/Client/Login";
import Navbar from "./Components/Navbar";
import AppState from "./context/AppState";
import { ToastContainer } from "react-toastify";
const protect = (component) => {
	return <ProtectedRoute>{component}</ProtectedRoute>;
};
const homeRoutes = ["/", "/home"];
export default function App() {
	return (
		<AppState>
			<Router>
				<Navbar />
				<BusinessRouter />
				<ClientRouter />
			</Router>
		</AppState>
	);
}
