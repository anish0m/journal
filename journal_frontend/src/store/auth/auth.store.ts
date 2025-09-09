import { defineStore } from "pinia";
import { state } from "./auth.state";
import { getters } from "./auth.getters";
import { actions } from "./auth.actions";
import { Axios } from "../../service/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({ ...state }),
  getters,
  actions: {
    // Add initialization method
    initializeAuth(this: any) {
      const token = localStorage.getItem("auth_token");
      if (token) {
        this.token = token;
        Axios.defaults.headers.common["Authorization"] = `Token ${token}`;
      }
    },
    // Spread existing actions
    ...actions,
  },
});
