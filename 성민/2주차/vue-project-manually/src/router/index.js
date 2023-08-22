import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import RenderingVif from '../views/RenderingVif.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/RenderingVif',
    name:'RenderingVif',
    component: RenderingVif
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
