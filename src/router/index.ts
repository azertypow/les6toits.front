import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition){
    if (savedPosition) return savedPosition
    if (to.hash) return { top: 80, el: to.hash, behavior: 'smooth'}
    return { top: 0, behavior: 'smooth'}
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ViewHome.vue')
    },
  ]
})

export default router
