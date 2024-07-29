import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";

interface ProtectedRouteProps {
  element: JSX.Element;
  path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, path }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Route path={path} element={element} />;
};

export default ProtectedRoute;
