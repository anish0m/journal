import { defineStore } from "pinia";
import { state } from "./journal.state";
import { getters } from "./journal.getters";
import { actions } from "./journal.actions";

export const useJournalStore = defineStore("journal", {
  state: () => ({ ...state }),
  getters,
  actions,
});
