import { defineStore } from "pinia";
import { state } from "./user.state";
import { getters } from "./user.getters";
import { actions } from "./user.actions";

export const useUserStore = defineStore("user", {
  state: () => ({ ...state }),
  getters,
  actions,
});
