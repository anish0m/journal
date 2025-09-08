import type { AuthState } from "./auth.types";

export const state: AuthState = {
  token: localStorage.getItem("auth_token") || "",
  loading: false,
  error: "",
};