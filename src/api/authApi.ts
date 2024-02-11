import { AuthApiReturnType } from "@/utils/@types/types";
import { api } from "./api";
import { AxiosResponse } from "axios";

export const loginApi = (
  user: any,
  signal: AbortSignal
): Promise<AxiosResponse<AuthApiReturnType>> => {
  return api.post(
    "login",
    { user },
    {
      signal,
    }
  );
};

export const signupApi = (
  user: any,
  signal: AbortSignal
): Promise<AxiosResponse<AuthApiReturnType>> => {
  return api.post(
    "signup",
    { user },
    {
      signal,
    }
  );
};
