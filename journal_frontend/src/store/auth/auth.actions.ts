import { Axios } from "../../service/axios";
import type { SignupPayload } from "./auth.types";

export const actions = {
  async login(this: any, credentials: { username: string; password: string }) {
    this.loading = true;
    this.error = "";
    try {
      const response = await Axios.post("/auth/token/login/", {
        username: credentials.username,
        password: credentials.password,
      });
      this.token = response.data.auth_token;
      localStorage.setItem("auth_token", this.token);
      Axios.defaults.headers.common["Authorization"] = `Token ${this.token}`;
      return true;
    } catch (err: any) {
      this.error = err.response?.data?.non_field_errors?.[0] || "Login failed";
      return false;
    } finally {
      this.loading = false;
    }
  },

  logout(this: any) {
    this.token = "";
    localStorage.removeItem("auth_token");
    delete Axios.defaults.headers.common["Authorization"];
  },

  async signup(this: any, userData: SignupPayload) {
    this.loading = true;
    this.error = "";
    try {
      await Axios.post("/auth/users/", {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        first_name: userData.first_name,
        last_name: userData.last_name,
      });

      return true;
    } catch (err: any) {
      if (err.response?.data) {
        const errors = err.response.data;
        const firstErrorField = Object.keys(errors)[0];
        this.error = errors[firstErrorField]?.[0] || "Signup failed";
      } else {
        this.error = "Signup failed. Please try again.";
      }
      return false;
    } finally {
      this.loading = false;
    }
  },
};