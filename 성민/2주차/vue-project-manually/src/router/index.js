import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import DataInputNumber from '../views/DataInputNumber.vue'

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
    path:'/DataInputNumber',
    name:'DataInputNumber',
    component: DataInputNumber
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
