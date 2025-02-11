import { createContext } from "react";

export type AuthContextType = {
  userToken: string;
  login: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
