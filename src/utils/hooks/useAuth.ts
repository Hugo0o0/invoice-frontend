import { authContext } from "@/components/context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const { login, logout, signup, user } = useContext(authContext);
  return { user, login, logout, signup };
};

export default useAuth;
