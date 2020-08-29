import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Browse from '@/views/Browse'
import Player from '@/views/Player'
import Analytics from '@/views/Analytics'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
    // component: () => import(/* webpackChunkName: "browse" */ '../views/Browse')
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics
    // component: () => import(/* webpackChunkName: "library" */ '../views/Analytics')
  },
  {
    path: '/player',
    name: 'Player',
    component: Player
    // component: () => import(/* webpackChunkName: "player" */ '../views/Player')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
