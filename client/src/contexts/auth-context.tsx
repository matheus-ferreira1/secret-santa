import { createContext, FC, useContext, useMemo, useState } from "react";

import { AuthContextType } from "@/types/auth-context";
import { User } from "@/types/user";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!user);

  const login = (email: string, password: string): Promise<boolean> => {
    if (email === "teste@teste.com" && password === "teste123") {
      const mockUser = {
        id: "1",
        name: "Test User",
        email: email,
      };
      setUser(mockUser);
      setIsAuthenticated(true);
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = useMemo(
    () => ({ user, login, logout, isAuthenticated }),
    [user, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
};
