import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shedule/:id',
    name: 'shedule',
    props: true,
    component: function () {
      return import(/* webpackChunkName: "shedule" */ '../views/Shedule.vue')
    }
  },
  {
    path: '/lesson/:id',
    name: 'lesson',
    props: true,
    component: function () {
      return import(/* webpackChunkName: "lesson" */ '../views/Lesson.vue')
    },
    children: [
      {
        name: 'test',
        path: 'test',
        component: function () {  
          return import(/* webpackChunkName: "test" */ '../components/lesson/Test.vue')
        },
      },
      {
        name: 'statistic',
        path: 'statistic',
        component: function () {  
          return import(/* webpackChunkName: "statistic" */ '../components/lesson/Statistic.vue')
        },
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
