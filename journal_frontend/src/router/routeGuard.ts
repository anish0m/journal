import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export const authGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  console.log("Auth guard triggered", to, from, next);

  const isAuthenticated = !!localStorage.getItem("username");

  //if to is Login. and is authenticated, redirect to profile/username, otherwise redirect to Login
  //if to is Signup and is authenticated, redirect to profile/username, otherwise redirect to Signup
  //if to is Profile and is authenticated, redirect to profile/username, otherwise redirect to Login

  if (isAuthenticated) {
    next({ name: "Profile", params: { username: localStorage.getItem("username") } });
  } else {
    if (to.name === "Profile") {
      next({ name: "Login" });
    } else {
      next();
    }
  }
};
