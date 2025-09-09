import type { JournalState } from "./journal.types";

export const getters = {
  allEntries: (state: JournalState) => state.entries,
  journalLoading: (state: JournalState) => state.loading,
  journalError: (state: JournalState) => state.error,
};
