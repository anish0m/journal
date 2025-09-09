import { useAuthStore } from "../store";

export const setupRouterGuards = (router: any) => {
  router.beforeEach((to: any, from: any, next: any) => {
    const authStore = useAuthStore();

    const isAuthenticated = !!authStore.token && authStore.token.length > 0;

    if (to.meta.requiresAuth && !isAuthenticated) {
      next("/login");
    } else if (
      (to.path === "/login" || to.path === "/signup") &&
      isAuthenticated
    ) {
      next("/profile");
    } else {
      next();
    }
  });
};
