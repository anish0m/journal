import { Axios } from "../../service/axios";

export const actions = {
  async fetchProfile(this: any) {
    this.loading = true;
    this.error = "";
    try {
      // Get user data
      const userResponse = await Axios.get("/auth/users/me/");
      // Get profile data
      const profileResponse = await Axios.get("/api/profile/");

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
      await Axios.patch("/api/profile/", {
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
  async deleteAccount(this: any, password: string) {
    this.loading = true;
    this.error = "";
    try {
      // Djoser endpoint for deleting user account requires current_password
      await Axios.delete("/auth/users/me/", {
        data: {
          current_password: password,
        },
      });
      return true;
    } catch (err: any) {
      this.error = err.response?.data?.current_password?.[0] || "Failed to delete account";
      console.error("Account deletion error:", err);
      return false;
    } finally {
      this.loading = false;
    }
  },
};
