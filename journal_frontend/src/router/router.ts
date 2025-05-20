import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { 
    path: "/", 
    name: "Login", 
    component: import("../components/LogIn.vue")
  },
  { 
    path: "/log-in", 
    name: "Login", 
    component: import("../components/LogIn.vue")
  },
  { 
    path: "/sign-up", 
    name: "Signup", 
    component: import("../components/SignUp.vue")
  },
  { 
    path: "/profile", 
    name: "Profile", 
    component: import("../components/UserProfile.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
