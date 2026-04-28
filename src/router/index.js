import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AIDigitalHuman from '../views/AIDigitalHuman.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ai-digital-human',
    name: 'AIDigitalHuman',
    component: AIDigitalHuman
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
