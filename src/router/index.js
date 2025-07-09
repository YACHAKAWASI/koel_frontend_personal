import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Songs from '../views/Songs.vue'
import Albums from '../views/Albums.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/songs', component: Songs },
  { path: '/albums', component: Albums },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

