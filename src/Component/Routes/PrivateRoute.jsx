import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div className="min-h-[80vh] text-center">Loading___</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
