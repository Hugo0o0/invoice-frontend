import { api } from "./api";

export const feedbackApi = async (data: { email: string; reason: string }) => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token.jwt;
  return await api.post("feedback", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
