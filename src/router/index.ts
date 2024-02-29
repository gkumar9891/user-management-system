import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user';

const dashboardHome =  () :string|null => {
  const store = useUserStore();
  const isUserLogged = store.$state.user.token
  if (isUserLogged) {
    return 'dashboard'
  }

  return null
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: (to) => {
        return dashboardHome() || 'login';
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue'),
      beforeEnter: (to, from) => {
         return dashboardHome() || true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      beforeEnter: (to, from) => {
        return dashboardHome || true;
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      beforeEnter: (to, from) => {
        debugger
        return dashboardHome() || 'login';
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
