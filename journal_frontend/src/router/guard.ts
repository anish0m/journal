import { useAuthStore } from "../store";

export const setupRouterGuards = (router: any) => {
  router.beforeEach((to: any, from: any, next: any) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.token) {
      next("/login");
    } else {
      next();
    }
  });
}