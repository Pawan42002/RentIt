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
import ProtectedBusinessRoute from "./Components/ProtectedBusinessRoute";
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
                <LProfile />
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
      </Routes>
    </>
  );
}

export default BusinessRouter;
