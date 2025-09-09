import { Axios } from "../../service/axios";

export const actions = {
  async fetchProfile(this: any) {
    this.loading = true;
    this.error = "";
    try {
      const response = await Axios.get("/auth/users/me/");
      this.profile = response.data;
    } catch (err: any) {
      this.error = "Failed to fetch profile";
    } finally {
      this.loading = false;
    }
  },
};
