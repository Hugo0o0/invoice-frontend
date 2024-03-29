import { AxiosError } from "axios";
import { format } from "date-fns";
import { toast } from "react-toastify";

export const saveItemToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const transformErrorObject = (
  error: AxiosError<{ message: string; errors: any }>
) => {
  if (!error.response?.data.errors) return [error.response?.data.message!];
  return Object.keys(error.response?.data.errors!).map(
    (key) => error.response?.data.errors![key]!
  );
};

export const tryCatch = (callback: Function, loadingMessage?: string) => {
  return async (args: any) => {
    const loadingToast = toast.loading(loadingMessage ?? "Checking...");
    try {
      await callback(args);
    } catch (error: AxiosError | any) {
      transformErrorObject(error).forEach((err) => {
        toast.error(err);
      });
    } finally {
      setTimeout(() => toast.dismiss(loadingToast), 700);
      return callback;
    }
  };
};

export const formatDate = (date: Date) => {
  return format(new Date(date), "dd MMM yyyy");
};

export const parseJwt = (token: string) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};
