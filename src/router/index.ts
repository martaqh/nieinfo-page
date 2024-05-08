import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/AboutPage.vue')
    }
  ]
})

export default router
