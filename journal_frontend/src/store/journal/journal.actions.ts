import { Axios } from "../../service/axios";

export const actions = {
  async fetchEntries(this: any) {
    this.loading = true;
    this.error = "";
    try {
      const response = await Axios.get("/api/journal-entries/");
      this.entries = response.data.sort(
        (a: any, b: any) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } catch (err: any) {
      this.error = "Failed to fetch journal entries";
    } finally {
      this.loading = false;
    }
  },

  async createEntry(this: any, entryData: { title: string; content: string }) {
    this.loading = true;
    this.error = "";
    try {
      const response = await Axios.post("/api/journal-entries/", entryData);
      this.entries.unshift(response.data);
      return true;
    } catch (err: any) {
      this.error = "Failed to create journal entry";
      return false;
    } finally {
      this.loading = false;
    }
  },
  clearEntries(this: any) {
    this.entries = [];
    this.loading = false;
    this.error = "";
  },
};