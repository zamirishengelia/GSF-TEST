import { createContext, useContext, useState } from "react";
import axiosInstance from "../axiosInstance/axiosInstance";
import axios from "axios";
const AuthContext = createContext();

const baseURL = "http://10.83.13.70:8000/";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [credential, setCredential] = useState({
    username: null,
    password: null,
  });

  const login = async () => {
    try {
      const res = await axios.post(`${baseURL}api/api-token-auth/`, credential);
      const token = res.data.token;
      if (token) {
        setAuthenticated(true);
        localStorage.setItem("token", token);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      await axiosInstance.post("/api/logout/");

      setAuthenticated(false);
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, credential, setCredential, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
