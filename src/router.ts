import PHome from './components/page/PHome.vue'
import { createRouter as createVueRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: PHome
  }
]

const router = createVueRouter({
  history: createWebHistory(),
  routes
})

export {
  router
}
