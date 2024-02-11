import { loginApi, signupApi } from "@/api/api";
import { LoginUser, SignupUser, User } from "@/utils/@types/types";
import { saveItemToLocalStorage, tryCatch } from "@/utils/utils";
import { createContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

interface AuthContextProps {
  user: User | null;
  login: (user: LoginUser) => void;
  logout: () => void;
  signup: (user: SignupUser) => void;
}

const saveUser = (dispatch: React.Dispatch<any>, data: any) => {
  const localUser = {
    name: data.data.name,
    email: data.data.email,
    token: data.data.token.jwt,
  };
  dispatch(localUser);
  saveItemToLocalStorage("user", localUser);
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
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = tryCatch(async (user: LoginUser) => {
    setAbortController(abortController);
    const { data } = await loginApi(user, abortController.current?.signal!);
    saveUser(setUser, data);
    toast.success("Login Success");
  });

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const signup = tryCatch(async (user: SignupUser) => {
    setAbortController(abortController);
    const { data } = await signupApi(user, abortController.current?.signal!);
    saveUser(setUser, data);
    toast.success("Signup Success");
  });

  return (
    <authContext.Provider value={{ login, logout, signup, user }}>
      {children}
    </authContext.Provider>
  );
};
