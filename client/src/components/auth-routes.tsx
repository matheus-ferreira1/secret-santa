import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/contexts/auth-context";

export const RedirectAuthenticatedUsers: FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};

export const RedirectUnauthenticatedUsers: FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
