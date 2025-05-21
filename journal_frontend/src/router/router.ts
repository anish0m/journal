import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "./routeGuard";

const routes = [
  {
    path: "/",
    redirect: "/log-in",
  },
  {
    path: "/log-in",
    name: "Login",
    component: () => import("../components/LogIn.vue"),
  },
  {
    path: "/sign-up",
    name: "Signup",
    component: () => import("../components/SignUp.vue"),
  },
  {
    path: "/profile:username",
    name: "Profile",
    component: () => import("../components/UserProfile.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(authGuard);
export default router;
