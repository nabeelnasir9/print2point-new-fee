import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let token = localStorage.getItem("Agent_access_token");
  const isAuthenticated = token ? true : false;
  console.log(token, "isAuthenticated");

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
