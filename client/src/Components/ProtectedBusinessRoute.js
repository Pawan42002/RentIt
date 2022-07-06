import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import appContext from "../context/appContext";
import UserLoginRequired from "../Containers/UserLoginRequired";
function ProtectedBusinessRoute({ children }) {
  const context = useContext(appContext);
  const { userData } = context;
  if (!userData || !userData.isLandlord) {
    return <UserLoginRequired path="/b/login" />;
  }
  return children;
}

export default ProtectedBusinessRoute;
