import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/hooks/use-toast";

export const RedirectAuthenticatedUsers: FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};

export const RedirectUnauthenticatedUsers: FC = () => {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  if (!isAuthenticated) {
    toast({
      description: "You must be logged in to access this page.",
    });
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
