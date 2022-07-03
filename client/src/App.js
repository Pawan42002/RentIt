import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { query } from "./middleware/query";
import BusinessRouter from "./BusinessRouter";
import ClientRouter from "./ClientRouter";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Containers/Client/Login";
const protect = (component) => {
  return <ProtectedRoute>{component}</ProtectedRoute>;
};
const homeRoutes = ["/", "/home"];
export default function App() {
  const [isTenant, setIsTenant] = useState(false);
  const [isLandlord, setIsLandlord] = useState(false);
  const findOut = async () => {
    const res = query("GET", "api/businessAuth/verifyLandlord");
    if (res) {
      setIsLandlord(true);
    } else {
      setIsTenant(true);
    }
  };
  useEffect(() => {
    findOut();
  }, []);
  return (
    <Router>
      {isLandlord && <BusinessRouter />}
      {isTenant && <ClientRouter />}
    </Router>
  );
}
