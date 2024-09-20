import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'BlogView',
    // Route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blog" */ '../views/BlogView.vue')
  },
  {
    path: '/semaine1',
    name: 'SemaineStage1',
    component: () => import(/* webpackChunkName: "semaine1" */ '../views/semaine1.vue')
  },
  {
    path: '/semaine2',
    name: 'SemaineStage2',
    component: () => import(/* webpackChunkName: "semaine2" */ '../views/semaine2.vue')
  },
  {
    path: '/semaine3',
    name: 'SemaineStage3',
    component: () => import(/* webpackChunkName: "semaine3" */ '../views/semaine3.vue')
  },
  {
    path: '/semaine4',
    name: 'SemaineStage4',
    component: () => import(/* webpackChunkName: "semaine4" */ '../views/semaine4.vue')
  },
  {
    path: '/semaine5',
    name: 'SemaineStage5',
    component: () => import(/* webpackChunkName: "semaine5" */ '../views/semaine5.vue')
  },
  {
    path: '/semaine6',
    name: 'SemaineStage6',
    component: () => import(/* webpackChunkName: "semaine6" */ '../views/semaine6.vue')
  },
  {
    path: '/semaine7',
    name: 'SemaineStage7',
    component: () => import(/* webpackChunkName: "semaine7" */ '../views/semaine7.vue')
  },
  {
    path: '/semaine8',
    name: 'SemaineStage8',
    component: () => import(/* webpackChunkName: "semaine8" */ '../views/semaine8.vue')
  },
  {
    path: '/semaine9',
    name: 'SemaineStage9',
    component: () => import(/* webpackChunkName: "semaine9" */ '../views/semaine9.vue')
  },
  {
    path: '/semaine10',
    name: 'SemaineStage10',
    component: () => import(/* webpackChunkName: "semaine10" */ '../views/semaine10.vue')
  },
  {
    path: '/semaine11',
    name: 'SemaineStage11',
    component: () => import(/* webpackChunkName: "semaine11" */ '../views/semaine11.vue')
  },
  {
    path: '/semaine12',
    name: 'SemaineStage12',
    component: () => import(/* webpackChunkName: "semaine12" */ '../views/semaine12.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), // Change to Hash History
  routes
})

export default router
