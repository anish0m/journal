import { Axios } from "../../service/axios";

export const actions = {
  async fetchProfile(this: any) {
    this.loading = true;
    this.error = "";
    try {
      // Get user data
      const userResponse = await Axios.get("/auth/users/me/");
      // Get profile data
      const profileResponse = await Axios.get("/api/accounts/profile/");

      // Combine both responses
      this.profile = {
        ...userResponse.data,
        ...profileResponse.data,
      };
    } catch (err: any) {
      this.error = "Failed to fetch profile";
    } finally {
      this.loading = false;
    }
  },
  async updateProfile(this: any, payload: any) {
    this.loading = true;
    this.error = "";
    try {
      // Update user data (name, email, username)
      await Axios.patch("/auth/users/me/", {
        username: payload.username,
        email: payload.email,
        first_name: payload.first_name,
        last_name: payload.last_name,
      });

      // Update profile data (title, mobile, address, social_links)
      await Axios.patch("/api/accounts/profile/", {
        title: payload.title,
        mobile: payload.mobile,
        address: payload.address,
        social_links: payload.social_links,
      });

      console.log("Profile updated successfully");
    } catch (err: any) {
      this.error = "Failed to update profile";
      console.error("Profile update error:", err);
    } finally {
      this.loading = false;
    }
  },
  clearProfile(this: any) {
    this.profile = null;
    this.loading = false;
    this.error = "";
  },
};
