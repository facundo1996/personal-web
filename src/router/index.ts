import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue') 
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../pages/Projects.vue') 
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: () => import('../pages/AboutMe.vue') 
    },
  ]
})

export default router
