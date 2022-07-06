import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import appContext from "../context/appContext";
import UserLoginRequired from "../Containers/UserLoginRequired";
function ProtectedRoute({ children }) {
  const context = useContext(appContext);
  const { userData } = context;
  if (!userData) {
    return <UserLoginRequired />;
  }
  return children;
}

export default ProtectedRoute;
