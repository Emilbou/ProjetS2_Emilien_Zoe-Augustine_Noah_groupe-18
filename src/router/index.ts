import { createRouter, createWebHistory } from 'vue-router'
import AproposVue from '@/Apropos.vue'
import AppVue from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'appvue',
      component: AppVue
    },
    {
    path: '/apropos',
    name: 'apropos',
    component: AproposVue
    }

  ]
})

export default router