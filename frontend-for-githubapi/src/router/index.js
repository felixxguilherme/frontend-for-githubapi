import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Repositories',
    component: () => import(/* webpackChunkName: "Repositories" */ '../views/Repositories.vue')
  },
  {
    path: '/favorites',
    name: 'Starred',
    component: () => import(/* webpackChunkName: "StarredRepos" */ '../views/StarredRepos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
