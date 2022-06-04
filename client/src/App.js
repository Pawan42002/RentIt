import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Favourites from "./Containers/Favourites";
import About from "./Containers/About";
import Search from "./Containers/Search";
import Login from "./Containers/Login";
import Register from "./Containers/Register";
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/favourites" element={<Favourites />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
