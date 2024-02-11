import { AxiosResponse } from "axios";
import { api } from "./api";
import { Invoice } from "@/utils/@types/types";

export const getInvoices = async (): Promise<
  AxiosResponse<{ data: Invoice[] }>
> => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token.jwt;
  return await api.get("invoices", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getInvoice = async (
  id: string
): Promise<AxiosResponse<{ data: Invoice }>> => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token.jwt;
  return await api.get(`invoices/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
