import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BusinessRouter from "./BusinessRouter";
import ClientRouter from "./ClientRouter";
import ProtectedRoute from "./Components/ProtectedRoute"
const protect = (component) => {
  return <ProtectedRoute>{component}</ProtectedRoute>;
};
const homeRoutes = ["/", "/home"];
export default function App() {
  return (
    <Router>
        <BusinessRouter />
        <ClientRouter />
    </Router>
  );
}
