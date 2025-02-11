import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useCookies } from "react-cookie";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>("");
  const [cookies, setCookies, removeCookies] = useCookies();

  const login = (userToken: string) => {
    setToken(userToken);
    setCookies("tk", userToken);
  };

  const logout = () => {
    removeCookies("tk");
    setToken("");
  };

  useEffect(() => {
    const token = cookies["tk"];
    if (token) setToken(token);
  }, []);

  return (
    <AuthContext.Provider value={{ userToken: token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
