import { loginApi, signupApi } from "@/api/authApi";
import { LoginUser, SignupUser, User } from "@/utils/@types/types";
import { parseJwt, saveItemToLocalStorage, tryCatch } from "@/utils/utils";
import { isBefore, set } from "date-fns";
import { createContext, useEffect, useRef, useState } from "react";
import { useJwt } from "react-jwt";
import { toast } from "react-toastify";

interface AuthContextProps {
  user: User | null;
  login: (user: LoginUser) => void;
  logout: () => void;
  signup: (user: SignupUser) => void;
}

const saveUser = (
  dispatch: React.Dispatch<React.SetStateAction<User | null>>,
  data: User
) => {
  dispatch(data);
  saveItemToLocalStorage("user", data);
};

const setAbortController = (
  ref: React.MutableRefObject<AbortController | undefined>
) => {
  if (ref.current) {
    ref.current.abort();
  }
  ref.current = new AbortController();
};

export const authContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
  signup: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const abortController = useRef<AbortController>();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      const decodedToken = parseJwt(parsedUser.token.jwt);

      const isExpired = isBefore(new Date(decodedToken.exp * 1000), new Date());
      if (isExpired) {
        localStorage.removeItem("user");
        setUser(null);
        return;
      }
      setUser(parsedUser);
    } else {
      setUser(null);
    }
  }, []);

  const login = tryCatch(async (user: LoginUser) => {
    setAbortController(abortController);
    const { data } = await loginApi(user, abortController.current?.signal!);
    saveUser(setUser, data.data);
    toast.success("Login Success");
  });

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const signup = tryCatch(async (user: SignupUser) => {
    setAbortController(abortController);
    const { data } = await signupApi(user, abortController.current?.signal!);
    saveUser(setUser, data.data);
    toast.success("Signup Success");
  });

  return (
    <authContext.Provider value={{ login, logout, signup, user }}>
      {children}
    </authContext.Provider>
  );
};
