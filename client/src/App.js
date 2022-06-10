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
export default function App() {
  return (
    <>
      <appState>
        <Router>
          <LNavbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/favourites" element={<Favourites />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/addListing" element={<LAddListing />} />
          </Routes>
        </Router>
      </appState>
    </>
  );
}
