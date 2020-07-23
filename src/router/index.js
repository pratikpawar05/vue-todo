import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TaskList from '../views/TaskList.vue';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/completedlist',
    name: 'TaskList',
    component: TaskList,
  }, 
  {
    path: '/todo',
    name: 'Todo',
    component: () => import(/* webpackChunkName: "about" */ '../views/TaskList.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
