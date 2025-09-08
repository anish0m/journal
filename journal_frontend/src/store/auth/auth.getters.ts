import type { AuthState } from "./auth.types";

export const getters = {
  isAuthenticated: (state: AuthState) => !!state.token,
  authError: (state: AuthState) => state.error,
};
