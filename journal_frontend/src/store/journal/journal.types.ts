export interface JournalEntry {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  author: number; // user id
}

export interface JournalState {
  entries: JournalEntry[];
  latestEntry: JournalEntry | null;
  loading: boolean;
  error: string;
}
