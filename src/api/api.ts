import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginApi = (user: any, signal: AbortSignal) => {
  return api.post(
    "login",
    { user },
    {
      signal,
    }
  );
};

export const signupApi = (user: any, signal: AbortSignal) => {
  return api.post(
    "signup",
    { user },
    {
      signal,
    }
  );
};
