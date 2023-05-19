import { createRouter, createWebHistory } from 'vue-router'
// Quand tu crée une page qui doit s'afficher, tu l'importes comme ça

import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // et ensuite tu la déclare comme ceci avec le nom dans 
    // le composant qui est le même nom que tu lui donnes à l'appel plus haut
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutView.vue')
    }
  ]
})

export default router