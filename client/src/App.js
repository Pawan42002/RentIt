import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Favourites from "./Containers/Favourites";
import About from "./Containers/About";
import Search from "./Containers/Search";
import Login from "./Containers/Login";
import Register from "./Containers/Register";
import Profile from "./Components/Profile";
import LNavbar from "./Components/LNavbar";
import LAddListing from "./Components/LAddListing";
import appState from "./context/appState";
import DetailListing from "./Containers/DetailListing";
import ProtectedRoute from "./Components/ProtectedRoute";
import BusinessLogin from "./Containers/BusinessLogin";
import BusinessRegister from "./Containers/BusinessRegister";
import MyListings from "./Components/MyListings";
const protect = (component) => {
  return <ProtectedRoute>{component}</ProtectedRoute>;
};
const homeRoutes = ["/", "/home"];

export default function App() {
  return (
    <>
      <Router>
        <LNavbar />
        <Routes>
          {homeRoutes.map((path, index) => (
            <Route path={path} element={<Home />} key={index} />
          ))}
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/businessLogin" element={<BusinessLogin />} />
          <Route
            exact
            path="/businessRegister"
            element={<BusinessRegister />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/favourites" element={protect(<Favourites />)} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/profile" element={protect(<Profile />)} />
          <Route exact path="/addListing" element={protect(<LAddListing />)} />
          <Route exact path="/listings" element={<MyListings />} />
        </Routes>
      </Router>
    </>
  );
}
