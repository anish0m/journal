import type { JournalState } from "./journal.types";

export const state: JournalState = {
  entries: [],
  latestEntry: null,
  loading: false,
  error: "",
};
