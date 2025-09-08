import { Axios } from "../../service/axios";
// import type { AuthState } from "./auth.types";

export const actions = {
  async login(this: any, username: string, password: string) {
    this.loading = true;
    this.error = "";
    try {
      const response = await Axios.post("/auth/token/login/", { username, password });
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
  }
};