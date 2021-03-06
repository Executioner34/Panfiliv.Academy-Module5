import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/pages/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
