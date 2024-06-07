import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: () => import('@/pages/HomePage.vue'),
      props: true
    },
    {
      path: '/message-sent',
      name: 'Message Sent',
      component: () => import('@/pages/MessageSentPage.vue'),
      props: true
    },
    {
      path: '/about',
      name: 'About Page',
      component: () => import('@/views/AboutView.vue'),
      props: true
    }
  ]
})

export default router
