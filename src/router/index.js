import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'skills',
      component: () => import('../pages/SkillsPage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../pages/ProjectsPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../pages/NotFoundPage.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
