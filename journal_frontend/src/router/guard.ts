import { useAuthStore } from "../store";

export const setupRouterGuards = (router: any) => {
  router.beforeEach(async (to: any, from: any, next: any) => {
    const authStore = useAuthStore();
    const token = localStorage.getItem("auth_token");
    
    console.log("=== ROUTER GUARD DEBUG ===");
    console.log("Going to:", to.path);
    console.log("Coming from:", from.path);
    console.log("authStore.isAuthenticated:", authStore.isAuthenticated);
    console.log("localStorage token:", !!token);
    console.log("authStore.token:", !!authStore.token);
    
    const isAuthenticated = !!authStore.isAuthenticated;

    if (!isAuthenticated && to.path !== "/login" && to.path !== "/signup") {
      console.log("-> Redirecting to /login (not authenticated)");
      next("/login");
    } else if (isAuthenticated && (to.path === "/login" || to.path === "/signup")) {
      console.log("-> Redirecting to /profile (already authenticated)");
      // Need to get the username from the auth store or fetch it
      const { Axios } = await import("../service/axios");
      try {
        const response = await Axios.get("/auth/users/me/");
        next(`/profile/${response.data.username}`);
      } catch (err) {
        console.error("Failed to fetch user info:", err);
        next("/login");
      }
    } else {
      console.log("-> Allowing navigation");
      next();
    }
  });
};