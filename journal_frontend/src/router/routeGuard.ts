import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export const authGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  console.log("Auth guard triggered", to, from, next);

  const isAuthenticated = !!localStorage.getItem("username");

  if (to.name !== "Login" && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
};
