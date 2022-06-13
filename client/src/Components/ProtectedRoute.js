import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  let user = "hello";
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
