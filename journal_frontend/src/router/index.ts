import { createRouter, createWebHistory } from 'vue-router'
import { setupRouterGuards } from './guard'

const routes = [
  {
    path: '/',
    redirect: () => {
      return '/login'
    }
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
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

setupRouterGuards(router)

export default router