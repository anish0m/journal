import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../components/views/Signup.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/views/Profile.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router